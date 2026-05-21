---
type: data
status: draft
title: 적-풀-Act1
domain: "[[진행 MOC]]"
tags:
  - data
  - enemy
  - act1
related:
  - "[[적-스키마]]"
  - "[[게임-코어-루프]]"
  - "[[보상-Act-표]]"
aliases:
  - Act1 적
updated: 2026-05-20
---

# 적-풀-Act1

## 1. 용도

- Act1 일반·엘리트·보스 전투 스폰. [[적-스키마]] 준수.
- 밸런스 기준: 플레이어 MaxHP 60~80 ([[HP-방어-시스템]]) 대비 3~6라운드 처치.

## 2. 일반 적 (normal)

| id | name | hp | atk | def | speed | tags | pattern |
|----|------|-----|-----|-----|-------|------|---------|
| e_goblin_melee | 고블린 도끼병 | 28 | 6 | 0 | 10 | melee, goblin | melee_basic |
| e_goblin_archer | 고블린 궁수 | 22 | 5 | 0 | 12 | ranged, goblin | ranged_basic |
| e_slime | 슬라임 | 32 | 4 | 0 | 8 | magic | slime_split (사망 시 미구현) |
| e_wolf | 들개 | 26 | 7 | 0 | 14 | melee, beast | melee_aggressive |
| e_cultist | 어둠 교단 신도 | 24 | 6 | 5 | 10 | magic, human | magic_dot (poison:1 턴) |
| e_skeleton | 해골 병사 | 30 | 6 | 10 | 9 | melee, undead | melee_basic |
| e_bat_swarm | 박쥐 떼 | 18 | 4 | 0 | 16 | melee, beast | swarm (2체 스폰 권장) |

## 3. 엘리트 (elite)

| id | name | hp | atk | def | speed | tags | pattern | 비고 |
|----|------|-----|-----|-----|-------|------|---------|------|
| e_elite_orc | 오크 전사 | 55 | 9 | 10 | 10 | melee | elite_block (라운드마다 block:10) | |
| e_elite_mage | 교단 마법사 | 48 | 8 | 5 | 11 | magic | elite_burn (burn:2 라운드 시작) | |
| e_elite_assassin | 그림자 암살자 | 42 | 11 | 0 | 15 | melee | elite_bleed (bleed:3 on hit) | 회피 10% |

- [[상태이상-기절]]: Act1 엘리트 기절 저항 0%, 보스만 면역 ([[상태이상-기절]])

## 4. 보스 (boss) — Act1

| id | name | hp | atk | def | speed | tags | pattern |
|----|------|-----|-----|-----|-------|------|---------|
| e_boss_gate_keeper | 관문 수호자 | 120 | 10 | 15 | 10 | melee, boss | boss_shield_cycle |

**boss_shield_cycle**: 라운드 1·3 시작 시 보호막 15, 라운드 2 전체 공격력 +3 (버프).

- 기절 **면역**. [[보상-Act-표]] 보스 골드·유물 적용.

## 5. 스폰 가중 (일반 전투 1~2체)

| 구역 (층) | 풀 id | 가중 |
|-----------|-------|------|
| 1~3 | goblin_melee, goblin_archer, slime | 각 1 |
| 4~6 | + wolf, cultist | 각 1 |
| 7~9 | + skeleton, bat_swarm | 각 1 |
| 엘리트 노드 | elite_orc, elite_mage, elite_assassin | 1:1:1 |
| 보스 노드 | boss_gate_keeper | 고정 |

## 6. Act2·Act3 (요약 placeholder)

| Act | 테마 | 보스 id (예정) |
|-----|------|----------------|
| 2 | 폐광·골렘 | e_boss_mine_core |
| 3 | 성채·군주 | e_boss_dark_lord |

→ `적-풀-Act2.md` · `적-풀-Act3.md` 후속 작성.

## 7. 변경·마이그레이션

- 2026-05-20: Act1 풀 초안
