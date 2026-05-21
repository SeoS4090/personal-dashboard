---
tags:
  - analysis
  - system/battle
  - bug-fix
aliases:
  - BlockData BattleFleet Status2 버그
  - fleet status=2 Lerp 분모=0
description: block 조회 시 fleet status=2에서 GetCurrentDetailPos Lerp 분모=0이 되어 군단이 마을 위에 생성되는 버그 수정
status: done
created: 2026-05-21
updated: 2026-05-21
---

← [[Battle_MOC]]

# BlockData BattleFleet Status=2 버그 수정

## 요약

### 무슨 문제였나?
맵에서 특정 블록을 조회할 때 이동 중인 군단(status=2)이 맵의 엉뚱한 위치, 주로 유저 마을(좌표 0,0 근방)에 갑자기 생성되는 현상이 발생했다. 위치 계산 중 0으로 나누는 오류(division-by-zero)가 발생해 좌표가 초기값으로 설정되었기 때문이다.

### 어떻게 고쳤나?
| 구분 | 수정 전 | 수정 후 |
|------|---------|---------|
| 시간 범위 검증 | 없음 | GetCurrentDetailPos 호출 전 time range 유효성 검사 |
| 분모=0 방어 | 없음 | 분모가 0이면 기본값(출발지 또는 도착지) 반환 |

이동 시작 시각과 종료 시각이 같거나, 현재 서버 시간이 해당 범위 밖일 때를 미리 검사하여 계산을 건너뛰도록 수정했다.

### 현재 상태는?
- ✅ fleet status=2 Lerp 분모=0 오류 해결 완료
- ✅ 군단이 마을 위에 생성되는 현상 해결 완료

> **한 줄 요약**: "이동 중 군단 위치 계산 시 시간 범위 유효성 검사와 분모=0 방어 처리를 추가하여 좌표 오초기화 수정"

---

## 개요

- **증상**: block 조회 시 이동 중(status=2) fleet의 군단 오브젝트가 마을(x=0, y=0 등 초기값) 위에 생성됨
- **영향 범위**: `GetCurrentDetailPos()` 호출 경로 전반 — block 조회, 전투 메시지 처리 등

---

## 원인 분석

### GetCurrentDetailPos Lerp 계산 구조

fleet status=2 (이동 중) 상태에서 현재 위치를 구하는 로직은 선형 보간(Lerp) 방식이다.

```
현재 위치 = Lerp(출발지, 목적지, 경과시간 / 총이동시간)
경과시간 = 현재 서버 시간 - start_time
총이동시간 = end_time - start_time
```

### 분모=0 발생 조건

다음 두 가지 경우에 `총이동시간 = 0` 이 되어 division-by-zero 발생:

1. `start_time == end_time` — 서버 데이터 이상 또는 순간 이동 처리
2. 현재 서버 시간이 `[start_time, end_time]` 범위 밖 — 데이터 지연·타임스탬프 불일치

결과로 Lerp t 값이 NaN 또는 Infinity가 되어 좌표가 float 초기값(0)으로 설정되고, 군단이 마을 위에 스폰된다.

---

## 수정 내용

### 수정 로직

`GetCurrentDetailPos()` 호출 전 시간 범위 유효성 검사를 추가:

```
if (end_time - start_time <= 0)
    → 출발지 좌표 반환 (또는 도착지, 정책에 따라)

if (현재 시간 < start_time)
    → 출발지 좌표 반환

if (현재 시간 > end_time)
    → 도착지 좌표 반환
```

정상 범위일 때만 Lerp를 수행하도록 제한하여 분모=0 방어.

### 영향 범위
- block 조회 경로에서 GetCurrentDetailPos를 호출하는 모든 지점
- fleet_battle_msg 처리 경로도 동일 함수 사용 → [[FleetBattleMsg_UserCity_Position_BugFix_Analysis]] 참고

---

## 연관 문서

- [[FleetBattleMsg_UserCity_Position_BugFix_Analysis]] — fleet_battle_msg 소켓 처리 흐름 공유, GetCurrentDetailPos 계약 변경 공유
- [[AWQA-6334_UserCity_PvP_JoinBattle_EffectPosition_BugFix_Analysis]] — 동일 fleet 위치 계산 맥락
