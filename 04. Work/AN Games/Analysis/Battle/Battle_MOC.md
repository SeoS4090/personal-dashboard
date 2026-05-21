---
tags:
  - moc
  - system/battle
aliases:
  - 전투 MOC
  - Battle Map of Content
description: 함대 전투 메시지 처리, 전투 위치 계산, 집결 난입 관련 버그 픽스 MOC
created: 2026-05-20
updated: 2026-05-20
---

# Battle — 전투 시스템 MOC

← [[Analysis_Index]]

> 함대 전투 소켓 처리, 전투 위치 배치 오류, 집결 관련 서버 데이터 버그를 다루는 문서 집합.  
> NPC 소환 시스템은 → [[MKSummonNpcManager_Function_Analysis_Index]]

---

## 아키텍처 / 타임라인

| 문서 | 핵심 주제 |
|------|-----------|
| [[battle_log_analysis]] | 함대 전투 7단계 타임라인 분석 (15483 vs 12885) |

---

## 버그 픽스

| 문서 | 핵심 주제 | 상태 |
|------|-----------|------|
| [[BlockData_BattleFleet_Status2_BugFix_Analysis]] | block 조회 시 fleet status=2 → GetCurrentDetailPos Lerp 분모=0 → 마을 위 생성 | done |
| [[FleetBattleMsg_UserCity_Position_BugFix_Analysis]] | fleet_battle_msg 중간 수신 시 USER_CITY 전투 군단 거점 오배치 | done |
| [[Fortwar_RallyAdd_RallyId_Zero_BugFix_Analysis]] | 드래그 집결 난입 시 rally_id=0 버그 (AWCS-1608) | done |
| [[AWQA-6334_UserCity_PvP_JoinBattle_EffectPosition_BugFix_Analysis]] | 마을 PvP 난입 시 이펙트가 HIDE 군단 위치에서 발생 | done |

---

## 연관 시스템

- [[BlockData_BattleFleet_Status2_BugFix_Analysis]] ↔ [[FleetBattleMsg_UserCity_Position_BugFix_Analysis]] (fleet_battle_msg 소켓 처리 흐름 공유)
- [[battle_log_analysis]] ↔ [[TroopData_15483_vs_12885_PassThrough_Analysis]] (동일 전투 키 15483//12885 분석)
