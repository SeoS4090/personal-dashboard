---
tags:
  - analysis
  - system/troop
  - troop-lod
  - bug-fix
  - npc
aliases:
  - NPC JoinBattle Hide 1차 분석
  - NPC 전투 난입 HIDE 버그 1차
description: NPC 전투 난입(fleet_battle_join_npc) 시 ProcessBlockData에서 SKIP 처리되어 battle_fleets_leaders 미등록 → HIDE 누락되는 버그 1차 분석
status: done
created: 2026-05-21
updated: 2026-05-21
---

← [[TroopLOD_Function_Analysis_Index]]

# TroopLOD NPC JoinBattle Hide 버그 1차 분석

## 요약

### 무슨 문제였나?
NPC가 전투에 난입(참가)할 때 해당 NPC 군단 오브젝트가 화면에서 숨겨져야(HIDE) 하는데, 숨겨지지 않고 그대로 남아 있는 버그가 발생했다. 유저 입장에서는 전투 중인 NPC 부대가 맵 위에 그대로 보이거나 중복 표시되는 것처럼 보인다.

### 어떻게 고쳤나?
| 원인 | 수정 방향 |
|------|-----------|
| `fleet_battle_join_npc` 타입을 `ProcessBlockData`에서 SKIP → 딕셔너리 미등록 | `fleet_battle_join_npc`도 리더 처리에 준하여 `battle_fleets_leaders`에 등록 |

`fleet_battle_join_npc` 타입의 블록 데이터도 `LEADER` 처리와 동일하게 `battle_fleets_leaders` 딕셔너리에 등록하면, 이후 `RefreshWithPushFleetBattle`에서 조이너 탐색이 성공하고 HIDE 처리가 정상적으로 수행된다.

### 현재 상태는?
- ✅ 근본 원인 파악 완료 (`ProcessBlockData`의 SKIP 처리)
- ⚠️ 코드 수정 및 검증 필요 — 2차 분석 문서([[TroopLOD_NPC_JoinBattle_Hide_BugAnalysis2]]) 참조

> **한 줄 요약**: "`fleet_battle_join_npc` 블록이 SKIP되어 딕셔너리에 등록되지 않았고, 그 결과 조이너 탐색이 0개로 실패하여 NPC 난입 군단의 HIDE 처리가 누락됐다."

---

## 1. 현상

새로운 블록 전투 데이터가 수신될 때(`ProcessBlockData`), NPC 전투 난입 참가자(`fleet_battle_join_npc`) 타입의 군단이 `battle_fleets_leaders` 딕셔너리에 등록되지 않는다. 이후 `RefreshWithPushFleetBattle`에서 리더의 `alreadyBattled` 케이스로 진입해 조이너를 탐색하지만 발견에 실패하고, HIDE 처리가 누락되어 NPC 군단 오브젝트가 화면에 잔존한다.

- 영향 범위: NPC 전투 난입(`fleet_battle_join_npc`) 발생 시
- 증상: 맵 위에 전투 중이어야 할 NPC 군단 오브젝트가 HIDE되지 않고 남아 있음

## 2. [JOIN_HIDE] 로그 분석

| 단계 | 로그 내용 | 처리 결과 |
|------|-----------|-----------|
| 1 | `ProcessBlockData battle_leader 선정: [15483//910]` | `fleet_battle` 리더 선정 |
| 2 | `ci_id=15527 key=15483//910 act_type=fleet_battle → LEADER(처리)` | 리더 정상 처리, 딕셔너리 등록 |
| 3 | `ci_id=15527 key=15483//911 act_type=fleet_battle_join_npc → SKIP` | **NPC 난입 참가자 SKIP → 딕셔너리 미등록** |
| 4 | `battle_fleets_leaders: key=15483//910 inDict=True HIDE=True → SKIP(이미 visible)` | 리더는 이미 visible 처리됨 |
| 5 | `RefreshWithPushFleetBattle: key=15483//910 ci_id=15527 act_type=fleet_battle isleader=True alreadyBattled=True target_no=4650566 target_type=3` | 리더 alreadyBattled 케이스 진입 |
| 6 | `NPC case: target_no=4650566 objNPCDict.ContainsKey=True` | NPC 오브젝트 존재 확인 |
| 7 | `리더(15483//910) alreadyBattled → joiner 검색: ci_id=15527 발견=0개` | **조이너 탐색 실패 — HIDE 처리 불가** |

### 핵심 로그

```
// 3단계: NPC 난입 참가자가 SKIP됨
ci_id=15527 key=15483//911 act_type=fleet_battle_join_npc → SKIP

// 7단계: 조이너 탐색 실패
리더(15483//910) alreadyBattled → joiner 검색: ci_id=15527 발견=0개
```

SKIP(3단계)이 조이너 탐색 실패(7단계)의 직접 원인이다.

## 3. 근본 원인

`ProcessBlockData` 내부에서 `act_type` 값에 따라 처리 분기가 나뉜다.

- `fleet_battle` → **LEADER 처리** → `battle_fleets_leaders` 딕셔너리에 등록
- `fleet_battle_join_npc` → **SKIP** → 딕셔너리에 등록되지 않음

`fleet_battle_join_npc`(key=15483//911)가 딕셔너리에 없기 때문에, 이후 `RefreshWithPushFleetBattle`에서 `ci_id=15527`로 조이너를 탐색해도 발견 건수가 0개가 된다. 조이너 목록이 비어 있으면 HIDE 처리 루프 자체가 실행되지 않아 NPC 군단 오브젝트가 화면에 그대로 잔존한다.

## 4. 코드 경로

```
ProcessBlockData
  ├── act_type == fleet_battle       → LEADER 처리 → battle_fleets_leaders[key] 등록
  └── act_type == fleet_battle_join_npc → SKIP (딕셔너리 등록 없음)

RefreshWithPushFleetBattle
  └── isleader=True && alreadyBattled=True
        → ci_id로 battle_fleets_leaders 내 조이너 검색
        → 발견=0개 (fleet_battle_join_npc 미등록이 원인)
        → HIDE 처리 루프 미실행 → NPC 오브젝트 잔존
```

### 딕셔너리 등록 여부에 따른 결과 비교

| 키 | act_type | 딕셔너리 등록 | HIDE 처리 |
|----|----------|--------------|-----------|
| 15483//910 | `fleet_battle` | O | 정상 처리 |
| 15483//911 | `fleet_battle_join_npc` | X (SKIP) | **누락** |

## 5. 수정 방향

### 방안 A — ProcessBlockData에서 fleet_battle_join_npc 등록 추가

`ProcessBlockData` 내 분기에 `fleet_battle_join_npc` 타입을 추가하여, `fleet_battle`과 동일하게 `battle_fleets_leaders` 딕셔너리에 등록한다.

```csharp
// 의사 코드
switch (actType)
{
    case "fleet_battle":
    case "fleet_battle_join_npc":  // ← 추가
        RegisterToBattleFleetLeaders(key, ciId);
        break;
    // ...
}
```

### 방안 B — RefreshWithPushFleetBattle에서 NPC 조이너 별도 탐색

`alreadyBattled` 케이스에서 일반 조이너 탐색 실패 시, `fleet_battle_join_npc` 타입을 별도로 탐색하여 HIDE 처리를 수행하는 폴백 경로를 추가한다.

### 권장 방안

방안 A가 더 단순하고 근본적인 수정이다. `fleet_battle_join_npc`는 논리적으로 전투 참가자이므로 `battle_fleets_leaders`에 등록되어야 한다. 다만 기존 SKIP 처리가 다른 사이드 이펙트를 방지하기 위해 의도적으로 추가된 것인지 확인이 필요하다.

## 연관 문서

- [[TroopLOD_NPC_JoinBattle_Hide_BugAnalysis2]] — 2차 분석 (`fleet_battle_msg` sq 배열 분석 및 Hide 타이밍 버그)
