---
tags:
  - analysis
  - system/network
  - system/troop
  - concern/bug
  - status/done
aliases:
  - WorldSocketDataModel GetCurrentDetailPos
  - BATTLE 상태 위치 계약
description: BATTLE 상태에서 GetCurrentDetailPos 계약 변경 — ComputeLastSlotOffsetPos 추가로 전투 중 위치 보정 처리
created: 2026-05-21
updated: 2026-05-21
---

← [[Network_MOC]]

# WorldSocketDataModel GetCurrentDetailPos 분석

## 요약

### 무슨 문제였나?
전투 중인 부대의 위치를 계산할 때 화면에서 부대가 마을 위에 순간 이동하거나 잘못된 위치에 생성되는 현상이 있었다. 이동 중 위치를 그대로 전투 위치로 사용해 분모가 0이 되는 연산 오류가 발생했기 때문이다.

### 어떻게 고쳤나?
| 상태 | 기존 처리 | 변경 처리 |
|------|-----------|-----------|
| 이동 중 (status=2) | Lerp로 현재 위치 계산 | 변경 없음 |
| 전투 중 (status=5) | status=2 이동 위치 그대로 사용 | `ComputeLastSlotOffsetPos()`로 마지막 경로 슬롯 오프셋 보정 |

### 현재 상태는?
- ✅ BATTLE 상태 위치 계약 변경 완료
- ✅ Lerp 분모=0 방지 안전장치 추가
- ✅ BlockData 연동 위치 오생성 버그 해결

> **한 줄 요약**: "전투 중 부대 위치를 이동 좌표 대신 경로 마지막 슬롯 오프셋으로 보정하여 분모=0 오류와 위치 오생성 버그를 수정했다."

---

## 1. 현상/개요

`WorldSocketDataModel.GetCurrentDetailPos()`는 fleet의 현재 상세 위치를 계산하는 함수다. 위치 계산이 필요한 모든 시스템(TroopLOD, BlockData, PathLine 등)이 이 함수를 통해 fleet 좌표를 얻는다.

기존 계약: 이동 중(status=2)인 fleet의 현재 경로 위치를 현재 시각 기준 Lerp로 계산하여 반환.

문제: BATTLE 상태(status=5)인 fleet에 동일한 Lerp 계산을 적용하면:
- 이동 종료 후 time 진행이 멈춰 분모=0 발생 가능
- 실제 전투 위치가 아닌 이동 중 임시 좌표가 반환됨
- BlockData에서 이 값을 받아 TroopLOD를 생성할 때 마을 위 또는 전혀 다른 지점에 부대가 생성됨

## 2. 원인 분석

```
GetCurrentDetailPos() 흐름 (기존)
  └── status == 2 (이동 중)?
        ├── YES: move_path_slot Lerp → 현재 위치 반환
        └── NO (status=5 등): move_path_slot Lerp 그대로 적용 ← 문제
              └── 분모=0 또는 잘못된 위치 반환
```

BATTLE 상태(status=5)에서는 fleet이 이미 목표 위치에 도달한 후 전투 중이다. 이때 move_path_slot의 시간 기반 Lerp를 그대로 적용하면 time delta가 0이 되거나 음수가 될 수 있다.

```csharp
// 기존 — BATTLE 상태에서도 동일 Lerp 적용
float t = (serverNow - move_path_slot[idx].move_time) / duration;
return Vector3.Lerp(from, to, t); // duration=0이면 NaN/무한대
```

## 3. 수정 방법

BATTLE 상태(status=5) 분기를 추가하여 `ComputeLastSlotOffsetPos()`를 호출하도록 계약을 변경했다.

```csharp
// 수정 후
if (status == BATTLE)
{
    return ComputeLastSlotOffsetPos(); // 마지막 경로 슬롯 오프셋 보정 위치 반환
}

// 이동 중(status=2) 기존 Lerp 유지
float t = (serverNow - move_path_slot[idx].move_time) / duration;
return Vector3.Lerp(from, to, Mathf.Clamp01(t));
```

`ComputeLastSlotOffsetPos()`는 move_path_slot 마지막 슬롯 좌표에 진행 방향 기반 오프셋을 더해 실제 전투 위치를 계산한다. Lerp를 사용하지 않으므로 분모=0 위험이 없다.

## 연관 문서

- [[BlockData_BattleFleet_Status2_BugFix_Analysis]] — status=2 fleet Lerp 분모=0 버그 수정 (이 변경의 직접 연관)
- [[TroopLOD_BattlePosition_3rd_Refinement_Analysis]] — BATTLE 상태 스폰 위치 3차 정제 전체 흐름
- [[TroopLOD_DTO_SyncPipeline_Analysis]] — DTO→월드 상태 파이프라인에서 위치 계약 의존
