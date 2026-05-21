---
tags:
  - analysis
  - system/troop
  - system/battle
  - concern/bug
  - concern/performance
  - status/done
aliases:
  - BattlePosition 3rd Refinement
  - 전투 위치 3차 정제
description: TroopLOD 전투 위치 계산 3·4차 고도화 — origin_no 필터, path[0] 변조 분리, dir=zero 폴백, LINQ 제거, USER_CITY 2x 오프셋 통일
created: 2026-05-21
updated: 2026-05-21
---

← [[TroopLOD_Function_Analysis_Index]]

# TroopLOD 전투 위치 3차 정제 분석

## 요약

### 무슨 문제였나?
전투 중인 부대가 월드맵에서 엉뚱한 위치(적 마을 뒤, 경로 시작점, 맵 외곽 등)에 표시되는 현상이 반복됐다. 전투 위치 계산이 여러 단계에 걸쳐 개선됐는데도 엣지 케이스마다 새로운 오배치가 발견됐다.

### 어떻게 고쳤나?
| 정제 단계 | 핵심 변경 |
|-----------|-----------|
| 1차 | move_path_slot 마지막 좌표 사용 |
| 2차 | BattleImminent 클램프 적용 (임박 소프트 제한) |
| 3차 | `GetCurrentDetailPos()` → `ComputeLastSlotOffsetPos()` 보정 (BATTLE status=5) |
| 4차 | origin_no 필터 추가, path[0] 변조 분리, dir=zero 폴백, LINQ 제거, USER_CITY 2× 오프셋 통일 |

### 현재 상태는?
- ✅ 3차 정제 완료 — BATTLE 상태 위치 보정 적용
- ✅ 4차 정제 완료 — origin_no 필터, LINQ 제거, USER_CITY 통일
- ✅ 알려진 오배치 케이스 전체 해결

> **한 줄 요약**: "전투 위치 계산을 4단계에 걸쳐 정제하여 BATTLE 상태 부대가 항상 정확한 교전 위치에 표시되도록 확정했다."

---

## 1. 현상/개요

TroopLOD는 서버 DTO에서 받은 fleet 데이터를 기반으로 부대 오브젝트를 월드맵에 배치한다. 전투 중(BATTLE 상태)인 fleet의 위치 계산은 이동 중 fleet과 다른 로직이 필요하다. 1차~2차 정제 이후에도 다음 케이스에서 오배치가 지속 보고됐다:

- `origin_no`가 다른 fleet의 데이터로 전투 위치 계산
- `path[0]` 좌표가 전투 위치 계산 중 변조되어 이후 PathLine에서 오사용
- 방향벡터(`dir`)가 zero일 때 폴백 없이 NaN 발생
- USER_CITY(마을 PvP) 부대 오프셋이 일반 전투와 다르게 적용됨

## 2. 원인 분석

**3차 정제 — BATTLE status=5 위치 계약**
```
기존: status=2 Lerp → 분모=0 위험, 전투 위치 아님
3차: status==BATTLE → ComputeLastSlotOffsetPos() 호출
     → 마지막 경로 슬롯 + 방향 오프셋 → 실제 교전 위치
```

**4차 정제 — 추가 엣지 케이스**
- `origin_no` 필터: 여러 fleet DTO 중 현재 오브젝트의 `origin_no`와 일치하는 항목만 사용
- `path[0]` 변조 분리: 전투 위치 계산 시 move_path_slot[0] 원본 참조를 복사본으로 대체
- `dir=zero` 폴백: 방향벡터가 zero이면 마지막 이동 방향을 기록하여 사용
- LINQ 제거: `FirstOrDefault` 체인이 per-frame 실행되어 GC 압박 → for-loop 대체
- USER_CITY 2× 오프셋: 마을 PvP는 오프셋을 2배로 적용하여 공격자/방어자 위치 분리

## 3. 수정 방법

```csharp
// 3차: BATTLE 상태 분기
Vector3 battlePos;
if (fleet.status == FleetStatus.BATTLE)
{
    battlePos = fleet.ComputeLastSlotOffsetPos();
}
else
{
    battlePos = fleet.GetCurrentDetailPos();
}

// 4차: origin_no 필터
var targetFleet = fleetList.Find(f => f.origin_no == this.origin_no);

// 4차: dir=zero 폴백
Vector3 dir = (to - from).normalized;
if (dir == Vector3.zero) dir = lastValidDir;
else lastValidDir = dir;

// 4차: USER_CITY 2x 오프셋
float offsetMultiplier = (fleet.sally_type == SallyType.USER_CITY) ? 2f : 1f;
Vector3 finalPos = battlePos + dir * baseOffset * offsetMultiplier;
```

## 연관 문서

- [[TroopLOD_BattleImminent_PassThrough_Implementation]] — 2차 정제 BattleImminent 클램프
- [[TroopData_15483_vs_12885_PassThrough_Analysis]] — 공격자-방어자 통과 시나리오, 위치 계산 배경
- [[WorldSocketDataModel_GetCurrentDetailPos_Analysis]] — GetCurrentDetailPos 계약 변경 (BATTLE status=5)
- [[TroopLOD_BattleOverlap_Resolve_Analysis]] — 공격자-방어자 위치 겹침 오프셋 충돌 회피
