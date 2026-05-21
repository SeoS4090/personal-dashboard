---
tags:
  - analysis
  - system/battle
  - bug-fix
aliases:
  - AWQA-6334
  - 마을 PvP 난입 이펙트 위치 버그
description: 마을 PvP 전투 난입 시 이펙트가 HIDE 상태 군단의 마지막 위치에서 잘못 발생하는 버그 수정 (AWQA-6334)
status: done
created: 2026-05-21
updated: 2026-05-21
---

← [[Battle_MOC]]

# AWQA-6334 마을 PvP 난입 이펙트 위치 버그 수정

## 요약

### 무슨 문제였나?
유저 마을에서 PvP 전투가 진행 중일 때 다른 군단이 전투에 난입(join)하면, 난입 효과(이펙트)가 실제 전투 위치가 아닌 엉뚱한 곳에서 재생되었다. 화면에서 군단이 숨겨져 있을 때(HIDE 상태)의 마지막 위치가 이펙트 기준점으로 잘못 사용되었기 때문이다.

### 어떻게 고쳤나?
| 구분 | 수정 전 | 수정 후 |
|------|---------|---------|
| 이펙트 위치 기준 | 군단 HIDE 상태의 마지막 저장 위치 | 실제 전투가 벌어지는 위치 |
| HIDE 여부 확인 | 없음 | TroopLOD IsHide 체크 후 분기 |

이펙트 발생 전 군단이 현재 숨겨진 상태인지(IsHide) 확인하고, 숨겨진 상태라면 실제 전투 위치를 직접 조회하여 이펙트를 재생하도록 수정했다.

### 현재 상태는?
- ✅ 마을 PvP 전투 난입 이펙트 위치 오류 해결 완료

> **한 줄 요약**: "HIDE 군단이 난입할 때 이펙트 기준점을 실제 전투 위치로 강제 지정하여 오재생 수정"

---

## 개요

- **이슈**: AWQA-6334
- **증상**: 마을(USER_CITY) PvP 전투에 군단이 난입할 때 전투 이펙트가 화면의 엉뚱한 위치(주로 맵 외곽 또는 이전 위치)에서 발생
- **영향 범위**: target_type=3 (USER_CITY) 전투의 난입 이펙트 전반

---

## 원인 분석

### 버그 발생 흐름

```
fleet_battle_msg 수신
  └─ 난입(join) 처리 시작
       └─ 이펙트 발생 위치 계산
            └─ TroopLOD의 현재 위치 참조
                 └─ [문제] TroopLOD가 HIDE 상태이므로
                          마지막 저장 위치(last known position)를 반환
                          → 전투 위치와 무관한 좌표로 이펙트 재생
```

### 핵심 원인

군단이 화면에 보이지 않는 HIDE 상태일 때 TroopLOD의 위치값은 숨기기 직전에 캐싱된 마지막 좌표이다. 난입 이펙트를 생성하는 코드가 이 위치를 그대로 참조했기 때문에 실제 전투 위치와 다른 곳에서 이펙트가 재생되었다.

USER_CITY(target_type=3) 전투는 유저 마을 좌표를 거점으로 사용하므로, HIDE 전환 시점과 난입 시점 사이의 위치 차이가 클수록 오재생이 두드러진다.

---

## 수정 내용

### 수정 로직

이펙트 발생 코드에 다음 조건 분기를 추가:

1. 이펙트 생성 직전 TroopLOD의 `IsHide` 상태를 확인
2. `IsHide == true` 이면 TroopLOD의 캐싱 위치 대신 전투 실제 위치(fleet_battle_msg의 battle position)를 직접 사용
3. `IsHide == false` 이면 기존 로직대로 TroopLOD 현재 위치 사용

### 검증 포인트
- USER_CITY 전투(target_type=3)에서 난입 이펙트 위치 일치 여부
- HIDE 상태가 아닌 일반 군단 난입 시 기존 동작 유지 여부

---

## 연관 문서

- [[FleetBattleMsg_UserCity_Position_BugFix_Analysis]] — USER_CITY 전투 위치 처리 공유
- [[BlockData_BattleFleet_Status2_BugFix_Analysis]] — fleet 위치 계산 관련 방어 처리
