---
tags:
  - analysis
  - system/troop
  - bug-fix
aliases:
  - AWPL-7595
  - 집결 리더 승계 퇴각 경로 버그
description: 집결장 전멸 후 리더 승계 시 HandleRallyCreateStartSally가 이전 리더의 퇴각 경로를 덮어써 신규 리더가 잘못된 경로를 따라가는 버그
status: done
created: 2026-05-21
updated: 2026-05-21
---

← [[Troop_MOC]]

# AWPL-7595 집결 리더 승계 퇴각 경로 추종 버그

## 요약

### 무슨 문제였나?
집결 전투에서 집결장(리더)이 전멸하면 참여 중이던 다른 군단이 새 리더로 승계된다. 이때 신규 리더가 올바른 퇴각 경로를 따라가야 하는데, 실제로는 전멸한 이전 리더의 퇴각 경로를 그대로 따라가는 현상이 발생했다. 유저 입장에서는 내 군단이 이상한 방향으로 이동하는 것처럼 보인다.

### 어떻게 고쳤나?
| 원인 | 수정 내용 |
|------|-----------|
| 퇴각 경로가 확정된 뒤 이전 리더 데이터로 경로를 다시 덮어씀 | 리더 승계 시 이전 리더의 데이터로 경로를 갱신하지 않도록 조건 분기 추가 |

구체적으로는 `HandleRallyCreateStartSally` 처리 시 이미 퇴각 경로(`status=5`)가 세팅된 경우 `SetTroopSlotData` 호출을 스킵하거나, 승계 여부를 확인한 뒤 올바른 경로를 사용하도록 수정한다.

### 현재 상태는?
- ✅ 1차 수정: `origin_no` 갱신 누락 수정 완료 (MKSocket.cs:4700-4704)
- ✅ 2차 수정: `corp_a/corp_d` 분기에서 공유 참조 조기 `status=BATTLE` 오염 제거 → `battle_fleets_leaders.ForEach` ELSE 분기 정상 진입 보장
- ⚠️ 재현 검증 필요 — 실제 집결장 전멸 시나리오에서 추가 확인 권장

> **한 줄 요약**: "전투 완료 소켓이 퇴각 경로를 세팅한 뒤, 리더 승계 소켓이 이전 리더의 stale 데이터로 경로를 덮어씌워 신규 리더가 엉뚱한 방향으로 이동했다."

---

## 1. 현상

요새전 집결 전투 중 집결장(리더, `sally_type=5`)이 전멸하면 집결 참가자 중 한 군단이 새 리더로 승계된다. 승계 이후 신규 리더 군단이 올바른 퇴각 경로가 아닌 전멸한 이전 리더의 퇴각 경로를 따라 이동하는 버그가 발생한다.

- 영향 범위: 요새전 집결 전투, 리더 전멸 + 승계 발생 시
- 증상: 신규 리더 군단이 맵 위에서 의도치 않은 방향으로 이동

## 2. 소켓 수신 타임라인

| 순서 | 소켓 핸들러 | 태그 | 주요 동작 |
|------|-------------|------|-----------|
| 1 | `HandleFleetBattleMsg` (MKSocket.cs:4698) | `[AWPL7595-DIAG-A]` | `status=5`(전투 완료) 수신 → 퇴각 경로 `move_path` 세팅 |
| 2 | `HandleRallyCreateStartSally` (MKSocket.cs:4322) | `[AWPL7595-DIAG-B]` | 리더 승계 데이터 수신 → `SetTroopSlotData` 호출 → 경로 덮어씀 |

### DIAG-A — fleet_battle_msg 수신

```
key=15483//889 status=5 origin_no=4930566 source_no=4790548 sally_type=5
move_path=[(549.34,479.45),(564.5,484.5),(565.29,492.29)]
```

- `status=5`: 전투 완료, 퇴각 시작 상태
- `sally_type=5`: 집결 참가자
- `move_path` 마지막 좌표: **(565.29, 492.29)** — 올바른 퇴각 목적지

### DIAG-B — HandleRallyCreateStartSally 수신

```
key=15483//889 computedBattlePos=(565.29, 0.05, 492.29)
origin_no=4930566 source_no=4790548 sally_type=5
move_path=[(549.34,479.45),(564.5,484.5),(566,493)]
```

호출 스택:
```
HandleRallyCreateStartSally (MKSocket.cs:4322)
  → SetTroopSlotData (TroopLOD.cs:3913)
    → ApplyPathAndPositionUpdate (TroopLOD.cs:4191)
```

- `move_path` 마지막 좌표: **(566, 493)** — 이전 리더 데이터 기반의 stale 경로

## 3. 데이터 비교

| 항목 | DIAG-A (fleet_battle_msg) | DIAG-B (RallyCreateStartSally) |
|------|--------------------------|-------------------------------|
| 소켓 수신 순서 | 1번 (먼저 수신) | 2번 (나중에 수신) |
| `move_path` 끝 좌표 | **(565.29, 492.29)** | **(566, 493)** |
| 데이터 기준 | 전투 완료 후 확정된 퇴각 경로 | 이전 리더의 stale 집결 시작 데이터 |
| 경로 적용 결과 | 올바른 퇴각 목적지 | 잘못된 목적지로 덮어씀 |

두 경로의 끝 좌표 차이는 약 `(0.71, 0.71)` — 작은 값이지만 방향 벡터가 달라져 최종 이동 경로가 틀어진다.

## 4. 근본 원인

`HandleRallyCreateStartSally`는 리더 승계 처리를 위해 호출되지만, 내부에서 `SetTroopSlotData`를 호출할 때 **이전 리더의 집결 시작 시점 데이터**를 그대로 사용한다.

이미 `fleet_battle_msg(status=5)`로 퇴각 경로가 확정된 뒤에 `HandleRallyCreateStartSally`가 수신되면, `SetTroopSlotData → ApplyPathAndPositionUpdate` 경로를 통해 올바르게 세팅된 `move_path`가 stale 데이터로 덮어씌워진다.

```
fleet_battle_msg (status=5)
  → move_path 끝 = (565.29, 492.29)  ← 올바른 퇴각 경로 세팅

HandleRallyCreateStartSally (리더 승계)
  → SetTroopSlotData (stale 이전 리더 데이터 사용)
  → move_path 끝 = (566, 493)        ← 덮어써서 경로가 틀어짐
```

핵심 문제: 승계 처리 시 **이미 퇴각 상태(`status=BATTLE_END` 등)인지 확인하지 않고** `SetTroopSlotData`를 무조건 호출한다.

## 5. 수정 방향

### 방안 A — 승계 시 현재 상태 확인 후 경로 갱신 스킵

`HandleRallyCreateStartSally` 내부에서 `SetTroopSlotData` 호출 전, 해당 군단의 현재 상태가 이미 `status=5(전투 완료)` 또는 `IS_RETURN` 상태인지 확인한다. 퇴각 중이면 경로 갱신 자체를 스킵한다.

```csharp
// 의사 코드
if (troop.CurrentStatus == TroopStatus.RETREAT || troop.IsReturnState)
{
    // 이미 퇴각 경로가 세팅됨 — SetTroopSlotData 스킵
    return;
}
SetTroopSlotData(...);
```

### 방안 B — 승계 처리용 별도 플래그

`HandleRallyCreateStartSally`에 리더 승계 여부를 나타내는 플래그를 추가하고, 승계 케이스에서는 경로 관련 필드 적용을 제외한 최소 데이터만 갱신한다.

### 적용된 수정

1. **1차** (MKSocket.cs:4700-4704): `origin_no` 갱신 누락 수정 — 이전 리더의 `origin_no`가 신규 리더에 그대로 유지되던 문제 수정
2. **2차**: `corp_a/corp_d` `if` 분기에서 공유 참조 조기 `status=BATTLE` 오염 제거 → `battle_fleets_leaders.ForEach` ELSE 분기가 정상적으로 실행되도록 보장

## 연관 문서

- [[AWQA-6260_RallyParticipant_PathLine_DuplicateLine_BugFix_Analysis]] — 집결 참가자 PathLine 중복 생성 버그 (리더 승계 후 전멸 시 PathLine 오표시)
