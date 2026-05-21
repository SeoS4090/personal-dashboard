---
tags:
  - analysis
  - system/ui
  - system/troop
aliases:
  - 부대 관리 팝업 분석
description: 내 부대 목록(행군·정찰)을 UI Toolkit ScrollViewPro로 렌더링하는 팝업 — 상태별 타이머, 프로필 비동기 로딩, 모놀리식 구조 문제점 분석
status: done
created: 2026-05-21
updated: 2026-05-21
---

← [[UI_MOC]]

# Troop_Management 분석

## 요약

### 무슨 문제였나?
내 부대 목록 팝업을 열면 행군·정찰 슬롯마다 목적지, 적 프로필, 남은 시간, 버튼이 표시된다. 상태(이동/전투/집결/귀환 등 7가지)에 따라 표현 방식이 달라지는데, 이 모든 로직이 함수 하나에 몰려 있어 유지보수가 어렵다. 또한 정찰 슬롯에서 프로필 데이터가 없을 때 그 데이터를 그대로 접근하는 잠재적 crash 경로가 존재한다.

### 어떻게 고쳤나?
전체 클래스 개선은 아직 미착수. 단, 공격자 프로필이 표시되지 않던 버그는 이미 수정됐다 ([[TroopManagement_WarAlert_Stale_BugFix]]).

### 현재 상태는?
- ✅ WarAlert 스테일 버그 수정 완료
- ✅ `CreateScoutLineItem` TYPE_TOWN else 분기 KeyNotFoundException crash 수정 완료
- ⚠️ `CreateMarchLineItem` ~350줄 모놀리식 구조 — 분리 미착수
- ⚠️ btn_return / btn_retreat / btn_dismissal 세 버튼이 동일 콜백 — 의도 확인 필요

> **한 줄 요약**: "부대 목록 팝업은 상태별 타이머·프로필 비동기 로딩이 핵심이며, 모든 렌더 로직이 거대 함수 하나에 집중되어 있다."

---

## 개요

`Troop_Management`는 플레이어의 현재 출정 부대(행군선)·정찰 슬롯 전체를 `ScrollViewPro`에 리스트업하는 팝업(`MonoBehaviour`). `NetworkTroop.instance`에서 데이터를 읽어 UI Toolkit 기반으로 렌더링한다.

## 주요 함수 및 책임

| 함수 | 역할 | 규모 |
|------|------|------|
| `OnEnable()` | UI 요소 바인딩, 로컬라이즈, `refresh()` 호출 | ~20줄 |
| `OnDisable()` | `dotweens.Kill()` 전체 정리 | 1줄 |
| `refresh()` | ScrollViewPro 초기화 후 행군선·정찰 슬롯 전체 재빌드 | ~15줄 |
| `CreateMarchLineItem(MarchLine)` | 행군선 1개 아이템 생성 — 타겟·상태·버튼 전부 | ~350줄 |
| `CreateScoutLineItem(ScoutSlot)` | 정찰 슬롯 1개 아이템 생성 | ~250줄 |
| `SetHeroIcon` | 영웅 아이콘·레어도 프레임 세팅 | ~30줄 |
| `SetScoutIcon` | 정찰 아이콘 세팅 (고정 이미지) | ~15줄 |
| `SetTipPanel` | 병종 구성 툴팁 표시 | ~25줄 |

## 데이터·의존성 관계

- **읽기**: `NetworkTroop.instance.networkMarchLines`, `scoutLines`
- **전투 판정**: `NetworkAlly.instance.warAlertList` — BATTLE 상태 군단 공격자 프로필 표시
- **프로필 비동기**: `NetworkLogin.instance.Request_UserTargetData()` — 캐시 미스 시 네트워크 요청 후 콜백으로 레이블 갱신
- **타이머**: `DOTween.To()` 로 `remainTime` 카운트다운, `OnComplete`에서 `refresh()` 재호출

## 문제점 및 개선 제안

### 1. CreateMarchLineItem 모놀리식 구조 (L:139)
약 350줄 단일 메서드가 타겟 패널 렌더링, 상태 타이머, 버튼 콜백을 모두 담당. 최소 3개 서브 메서드로 분리 권장:
- `BuildTargetPanel(panel, data)` — 목적지/적 프로필 영역
- `BuildStateTimer(panel, data)` — ProgressBar + DOTween 타이머
- `BuildButtons(panel, data)` — 버튼 콜백 등록

### 2. btn_return / btn_retreat / btn_dismissal 동일 콜백 (L:597-642)
세 버튼 모두 `StartMove(...FLEET_SALLY_MOVE_RETURN...)` 동일 파라미터 호출. 현재 기능 구분 없음. 추후 기능 분기 시 복붙으로 인한 누락 버그 유입 가능.

### 3. ~~CreateScoutLineItem TYPE_TOWN else 분기 잠재 crash (L:723-727)~~ ✅ 수정 완료
`ContainsKey` false 분기에서 `profiles[data.target_user_no]`를 그대로 접근하여 KeyNotFoundException 발생 가능했던 버그. `SetUserProfile(0, 0)` placeholder로 먼저 표시하고, `Request_UserTargetData` 콜백에서 `SetUserProfile` + `target_desc.text` 를 함께 갱신하도록 수정.
```csharp
// 수정 후
else {
    MKCommon.SetUserProfile(UserProfile, 0, 0);
    NetworkLogin.instance.Request_UserTargetData(data.target_user_no, () => {
        var profileData = NetworkLogin.instance.profiles[data.target_user_no];
        MKCommon.SetUserProfile(UserProfile, profileData.profile_skinDTO.frame_id, profileData.profile_skinDTO.portrait_id);
        target_desc.text = $"{MKTerm.Instance.GetTerm("user_town", "{{name}}", profileData.UserFullName)}";
    });
}
```

### 4. SetTipPanel 중복 할당 (L:1008)
`toolTipInfo.positionTaget = ToolTipInfo.TARGET.LT;` 가 연속 2회 할당됨. 데드코드, 제거 권장.

### 5. LINQ 전투력 계산 성능 (L:153-161)
행군선마다 `HeroPowerQuery` + `UnitPowerQuery` LINQ join 2회 실행. 부대 수가 많은 경우 `refresh()` 호출 시 부하 발생 가능. `MarchLine`에 `cachedPower` 프로퍼티 캐싱 권장.

## 성능·메모리 영향
- `refresh()`는 ScrollViewPro 전체 Clear + 재생성 방식 — 항목이 많으면 GC 압력 발생
- `dotweens` 리스트는 `OnDisable`에서 Kill 처리되어 누수 위험 없음
- 상태 타이머 `OnComplete` → `refresh()` 재호출 → 연쇄 재빌드 발생 가능 (특히 다수 타이머 동시 만료 시)

## 관련 문서
- [[TroopManagement_WarAlert_Stale_BugFix]] — WarAlert 스테일 버그 수정 (이 클래스에서 직접 수정된 케이스)
- [[Ally_war_rally_dotweens]] — DOTween 라이프사이클 패턴 비교 참고
