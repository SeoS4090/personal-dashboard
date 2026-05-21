---
tags:
  - analysis
  - system/troop
  - system/battle
  - system/network
  - concern/bug
  - status/done
aliases:
  - IS_ANNIHILATION Grey 버그
  - 전멸 회색 표시 버그
description: IS_ANNIHILATION(전멸) 상태일 때 TroopLOD 오브젝트가 회색으로 처리되는 버그 조사 — PopAsync 콜백 로컬 캡처 + SetTroopSlotData 복구 감지 방어 코드 적용 완료
created: 2026-05-21
updated: 2026-05-21
---

← [[TroopLOD_Function_Analysis_Index]]

# TroopLOD IS_ANNIHILATION 회색 표시 버그 조사

## 요약

### 무슨 문제였나?
전투에서 전멸한 부대가 계속 회색(greyscale)으로 화면에 남아있는 현상이 발생했다. 전멸 애니메이션이 끝난 후에도 부대가 회색 상태로 월드맵에 표시되어 다른 유저에게도 보이는 문제였다.

### 어떻게 고쳤나?
| 수정 항목 | 내용 |
|-----------|------|
| PopAsync 콜백 로컬 캡처 | 비동기 콜백 실행 시점에 this가 이미 다른 fleet 데이터를 반영하는 문제 방지 |
| SetTroopSlotData 복구 감지 | IS_ANNIHILATION 상태 진입 시 Material 교체 순서를 재정렬, 복구 경로에서 grey Material이 덮이도록 보정 |
| MakeSoldiers/MakeHeros/MakeCompanion 방어 코드 | 유닛 생성 시 IS_ANNIHILATION 여부 체크 → grey 적용 스킵 또는 복구 Material 즉시 적용 |

### 현재 상태는?
- ✅ 클라이언트 측 방어 코드 적용 완료 (AWQA-6181)
- ⚠️ 근본 원인(서버 측 transient DTO 전송 타이밍) 미해결 — 재현 시 추가 조사 필요

> **한 줄 요약**: "전멸 후 부대가 회색으로 남는 버그를 비동기 콜백 로컬 캡처와 Material 교체 순서 보정으로 클라이언트 방어 코드를 적용했으나, 서버 DTO 타이밍 근본 원인은 추가 조사가 필요하다."

---

## 1. 현상/개요

IS_ANNIHILATION은 fleet이 전멸(전원 사망)했을 때 서버에서 설정하는 상태값이다. 이 상태를 수신한 클라이언트는:

1. TroopLOD 오브젝트의 Material을 greyscale shader로 교체
2. 전멸 애니메이션 재생
3. 오브젝트 비활성화/제거

문제는 step 3 이전에 `SetTroopSlotData`가 다시 호출되어 정상 Material로 복구되는 상황이 발생한다는 것이다. 이로 인해:
- 전멸 애니메이션 재생 중 오브젝트가 잠깐 정상 색상으로 복구됨
- 또는 반대로: 복구 후 다음 프레임에 greyscale이 다시 적용되어 grey 상태가 영구 유지

재현 조건 (AWQA-6181):
- fleet_battle_end → fleet_sally 소켓이 짧은 간격으로 연속 수신
- PopAsync 콜백이 지연 실행되어 this 오브젝트가 이미 다음 fleet 데이터를 반영한 상태

## 2. 원인 분석

**PopAsync 콜백 로컬 캡처 문제**
```csharp
// 기존 — this 참조 캡처 (비동기 완료 시점에 this가 변경됨)
PopAsync(prefab, callback: () => {
    this.ApplyGreyscale(); // this가 이미 다른 fleet 데이터
});

// 수정 후 — 로컬 변수 캡처
var capturedData = this.currentFleetData;
PopAsync(prefab, callback: () => {
    ApplyGreyscaleToData(capturedData); // 캡처 시점 데이터 유지
});
```

**SetTroopSlotData Material 교체 순서**
IS_ANNIHILATION 체크가 Material 초기화 이후에 실행되면:
```
SetTroopSlotData 호출
  → Material 정상화 (greyscale 덮어씀)  ← 순서 오류
  → IS_ANNIHILATION 체크 → greyscale 재적용
  → 다음 SetTroopSlotData 에서 또 정상화 → 루프
```

**서버 측 근본 원인 (미해결)**
서버가 전멸 직후 일시적(transient)으로 IS_ANNIHILATION=false DTO를 전송하는 경우가 있어, 클라이언트에서 IS_ANNIHILATION 상태 해제→재설정이 반복된다. 서버 스펙 확인 필요.

## 3. 수정 방법

**1) MakeSoldiers/MakeHeros/MakeCompanion 방어 코드**
```csharp
void MakeSoldiers(...)
{
    // 유닛 생성 완료 후 IS_ANNIHILATION 체크
    if (currentData.is_annihilation)
    {
        ApplyGreyscaleImmediate(); // 비동기 없이 즉시 적용
        return;
    }
    ApplyNormalMaterial();
}
```

**2) SetTroopSlotData IS_ANNIHILATION 우선 처리**
```csharp
void SetTroopSlotData(FleetData data)
{
    // IS_ANNIHILATION 최우선 체크 — Material 초기화보다 먼저 실행
    if (data.is_annihilation)
    {
        ApplyGreyscale();
        return; // 이후 Material 처리 스킵
    }
    // 정상 Material 처리 ...
}
```

## 연관 문서

- [[TroopLOD_MakeUnits_Duplicate_Analysis]] — fleet_battle_end→fleet_sally 연속 수신 시 MakeUnits 이중 호출 (유사 비동기 패턴)
- [[TroopLOD_UnitSpawn_LOD_Animation_Analysis]] — 비동기 콜백 애니 미적용 버그 수정 (PopAsync 콜백 패턴 공유)
- [[TroopLOD_SetTroopSlotData_Analysis]] — SetTroopSlotData 500줄+ 모놀리식 함수 전체 분석
