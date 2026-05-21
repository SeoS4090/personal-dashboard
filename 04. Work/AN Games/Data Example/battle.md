---
tags:
  - data-example
  - battle
updated: 2026-04-17
---

# 전투 로그 데이터

[[data_main_index|← 메인 인덱스]]

## 집결 전투 — NPC 대상

| 파일 | 인원 | 대상 | push_type 흐름 | 비고 |
|------|------|------|----------------|------|
| [[1인 집결 NPC 전투]] | 1인 | NPC 거점 (target_type=3) | fleet_sally → fleet_battle_rally → fleet_battle_msg × N → fleet_battle_end | rally_id=390, ci_id=14180 |

## 집결 전투 — 유저 대상

| 파일 | 인원 | 대상 | push_type 흐름 | 비고 |
|------|------|------|----------------|------|
| (추가 예정) | | | | |

## 집결 전투 — 거점 전투

| 파일 | 인원 | 대상 | push_type 흐름 | 비고 |
|------|------|------|----------------|------|
| (추가 예정) | | | | |

## 단독 전투

| 파일 | 시나리오 | push_type 흐름 | 비고 |
|------|----------|----------------|------|
| [[1인 마을 전투 (중간에 보는 경우)]] | 1인 → 유저 마을 (target_type=5 USER_CITY) | block_remove_slash (fleet_action 포함) → fleet_battle_msg × 4 (tick 4~7) | 전투 중간 접속, ci_id=14214, 공격자 15483 vs 방어자 12885 |

## push_type 참고

| push_type | 의미 |
|-----------|------|
| fleet_sally | 부대 출격 (이동 시작) |
| fleet_battle_rally | 집결 전투 진입 확정 |
| fleet_battle_msg | 전투 턴 메시지 (매 라운드, t 필드로 턴 구분) |
| fleet_battle_end | 전투 종료 및 결과 |

## fleet_battle_msg 주요 필드

| 필드 | 설명 |
|------|------|
| no | 전투 고유 번호 (combat_id) |
| id | ci_id |
| t | 현재 턴 번호 |
| p | 진행 상태 (3=진행 중) |
| sq | 분대 목록 — 영웅·병종·HP 정보 |
| sq_gr | 분대 그룹 좌표·타겟 정보 |
| m | 이번 턴 이벤트 (공격, 스킬, 상태이상 등) |
| wa | 승리 카운트 [공격측, 방어측] |
| leader | 공격/방어 리더 key |
