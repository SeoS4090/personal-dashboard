---
tags:
  - analysis
  - system/battle
  - bug-fix
aliases:
  - FleetBattleMsg UserCity 위치 버그
  - fleet_battle_msg 중간 수신 오배치
description: fleet_battle_msg 전투 중간 수신 시 USER_CITY 군단 거점 위치가 잘못 배치되는 버그 수정
status: done
created: 2026-05-21
updated: 2026-05-21
---

← [[Battle_MOC]]

# FleetBattleMsg UserCity 위치 오배치 버그 수정

## 요약

### 무슨 문제였나?
전투가 이미 시작된 상태에서 유저가 접속하거나 전투 메시지를 중간에 수신하면, 유저 마을(USER_CITY) 유형 군단이 올바른 전투 거점이 아닌 이전 위치나 기본 위치에 잘못 배치되는 현상이 발생했다.

### 어떻게 고쳤나?
| 구분 | 수정 전 | 수정 후 |
|------|---------|---------|
| 거점 위치 결정 | cm[] 첫 메시지만으로 거점 위치 고정 | 수신 시점에 fleet 현재 위치를 실시간 조회하여 반영 |
| 중간 수신 처리 | 이동 진행 상태 미반영 | GetCurrentDetailPos로 실제 현재 좌표 사용 |

전투 메시지(fleet_battle_msg)를 처리할 때 fleet의 `GetCurrentDetailPos()`를 호출해 수신 시점의 실제 위치를 거점에 반영하도록 수정했다.

### 현재 상태는?
- ✅ 전투 중간 수신 시 USER_CITY 군단 위치 오배치 해결 완료

> **한 줄 요약**: "전투 메시지 중간 수신 시 fleet 현재 위치를 실시간으로 계산해 거점 좌표를 정확하게 반영"

---

## 개요

- **소켓**: `fleet_battle_msg` — `msg.cm[]` 배열에 전투 정보 포함
- **증상**: 전투 중간 수신 시 USER_CITY 유형(target_type=3) 군단이 이전 위치 또는 기본 위치에 스폰
- **영향 범위**: 접속 직후 전투 복원, 네트워크 지연으로 인한 중간 메시지 수신 케이스

---

## 원인 분석

### fleet_battle_msg 처리 흐름

```
fleet_battle_msg 수신
  └─ HandleFleetBattleMsg 호출
       └─ msg.cm[] 배열 순회
            └─ 첫 번째 cm 메시지로 전투 거점 위치 결정
                 └─ [문제] 전투 시작 시점 위치만 저장됨
                          중간 수신이면 fleet이 이미 이동한 상태
                          → 실제 현재 위치가 반영되지 않음
```

### 핵심 원인

`HandleFleetBattleMsg`는 `cm[]` 배열의 첫 번째 메시지를 기준으로 군단 거점 위치를 결정한다. 전투 시작 시 수신하면 문제가 없지만, 전투 도중에 메시지를 받으면 fleet이 이미 이동을 진행한 상태임에도 초기 위치가 그대로 사용된다.

USER_CITY(target_type=3)는 유저 마을 좌표를 기반으로 전투 위치를 계산하므로, 중간 수신 시 이동이 진행된 만큼 거점 오차가 발생한다.

---

## 수정 내용

### 수정 로직

`HandleFleetBattleMsg` 내부에서 거점 위치를 결정할 때:

1. 기존: cm[] 첫 메시지의 고정 좌표 사용
2. 수정: `fleet.GetCurrentDetailPos()` 를 호출하여 수신 시점의 실제 위치를 계산 후 적용

이 변경으로 접속 타이밍과 무관하게 항상 현재 위치 기반으로 군단이 배치된다.

### 전제 조건
- `GetCurrentDetailPos()`의 Lerp 분모=0 방어 처리가 선행되어야 한다 → [[BlockData_BattleFleet_Status2_BugFix_Analysis]]
- 두 버그 픽스는 의존 관계이므로 함께 적용해야 한다

---

## 연관 문서

- [[BlockData_BattleFleet_Status2_BugFix_Analysis]] — fleet_battle_msg 소켓 처리 흐름 공유, GetCurrentDetailPos 계약 변경 공유
- [[AWQA-6334_UserCity_PvP_JoinBattle_EffectPosition_BugFix_Analysis]] — USER_CITY 전투 위치 처리 공유
