---
tags:
  - analysis
  - system/troop
  - system/battle
  - concern/bug
  - status/done
aliases:
  - AWQA-6325
  - 방어 지원 전멸 패배 이펙트
description: 방어 지원 부대가 전멸했을 때 패배 이펙트가 올바르게 표시되지 않는 버그 수정 — ProcessCombatMsg 조건에 BATTLE 상태 체크 추가
created: 2026-05-21
updated: 2026-05-21
---

← [[MarchLine_MOC]]

# AWQA-6325 방어 지원 전멸 패배 이펙트 버그 수정

## 요약

### 무슨 문제였나?
방어 지원을 나간 부대가 집결 전투에서 전멸하고 복귀 중일 때, 해당 거점 전투가 끝나면서 패배 이펙트(폭발/사망 연출)가 엉뚱한 부대에서 재생되는 현상이 발생했다. 이미 전장을 떠난 부대가 이펙트 대상으로 잘못 매칭됐기 때문이다.

### 어떻게 고쳤나?
| 항목 | 내용 |
|------|------|
| 문제 경로 | `ProcessCombatMsg`에서 `ci_id`로 전투 부대를 탐색할 때 `status==BATTLE` 조건 누락 |
| 결과 | 이미 복귀 중(RETREAT 상태)인 방어 지원 부대가 전투 종료 이펙트 대상으로 매칭됨 |
| 수정 | 탐색 조건 1에 `status == BATTLE` 체크 추가 |

### 현재 상태는?
- ✅ 버그 수정 완료
- ✅ RETREAT 상태 부대가 전투 종료 이펙트 대상에서 제외됨

> **한 줄 요약**: "전투 종료 이펙트 탐색 시 이미 복귀 중인 방어 지원 부대가 잘못 매칭되던 버그를 status 조건 추가로 수정했다."

---

## 1. 현상/개요

요새전 집결 전투에서 방어 지원(sally_type=방어 지원) 부대가 전멸 후 복귀(RETREAT) 중인 상황을 가정한다.

1. 방어 지원 부대 → 전멸 → IS_RETURN/RETREAT 상태로 복귀 이동 시작
2. 이 시점에 해당 거점의 다른 전투가 종료됨
3. `ProcessCombatMsg`가 `ci_id`로 전투 참여 부대를 탐색
4. **RETREAT 상태인 방어 지원 부대가 탐색에 걸림**
5. 해당 부대 위치에 Defeat 이펙트 재생 → 이미 전장에 없는 부대에서 이펙트 발생

## 2. 원인 분석

```csharp
// 기존 탐색 조건 1 (문제 있음)
var target = fleetList.FirstOrDefault(f => f.ci_id == combatMsg.ci_id);
// → RETREAT 상태 부대도 ci_id가 일치하면 매칭됨
```

`ProcessCombatMsg`의 탐색 조건 1은 `ci_id`만 비교하고 fleet의 현재 `status`를 확인하지 않는다. 방어 지원 부대는 전멸 후에도 ci_id가 유지된 채 RETREAT 상태로 남아있어, 전투 종료 메시지가 왔을 때 잘못 매칭된다.

일반 전투 부대의 경우 전멸 즉시 제거되어 이 문제가 발생하지 않지만, 방어 지원 부대는 복귀 경로를 이동하는 동안 fleet 목록에 남아있는 특수한 생명주기를 가진다.

## 3. 수정 방법

탐색 조건 1에 `status == BATTLE` 체크를 추가했다.

```csharp
// 수정 후 탐색 조건 1
var target = fleetList.FirstOrDefault(f =>
    f.ci_id == combatMsg.ci_id &&
    f.status == FleetStatus.BATTLE  // RETREAT 부대 제외
);
```

BATTLE 상태가 아닌 fleet은 전투 종료 이펙트 탐색 대상에서 제외되므로, 복귀 중인 방어 지원 부대에 이펙트가 재생되지 않는다.

## 연관 문서

- [[AWQA-6260_RallyParticipant_PathLine_DuplicateLine_BugFix_Analysis]] — 방어 지원 전멸 복귀 시 PathLine 오표시 연관 버그
- [[AWQA-6371_FortWar_TroopFlicker_BugAnalysis]] — 요새전 귀환 중 부대 깜빡임 유사 패턴
- [[marchline_system_analysis]] — MarchLine 전체 아키텍처, sally_type 분류 체계
