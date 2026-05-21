---
type: data
status: draft
title: 이벤트-테이블-Act1
domain: "[[진행 MOC]]"
tags:
  - data
  - event
related:
  - "[[게임-코어-루프]]"
  - "[[재화-골드]]"
  - "[[HP-방어-시스템]]"
updated: 2026-05-20
---

# 이벤트-테이블-Act1

## 1. 용도

- Act1 «이벤트» 노드 텍스트 선택지. [[게임-코어-루프]].

## 2. 스키마

| 필드 | 설명 |
|------|------|
| id | evt_* |
| title | 제목 |
| body | 본문 1~2문장 |
| choices[] | { label, effects[] } |

## 3. 이벤트 목록 (초안 6)

### evt_mysterious_merchant — 수수께끼 상인

| 선택 | 효과 |
|------|------|
| 카드 구매 (50G) | 랜덤 common 카드 1 추가 |
| 떠난다 | — |
| 강탈한다 | gold+30, max_hp-5 |

### evt_shrine — 낡은 신전

| 선택 | 효과 |
|------|------|
| 기도한다 | heal:25% maxHp |
| 저주 받는다 | gold+40, 다음 전투 weak:1 |
| 떠난다 | — |

### evt_trapped_chest — 함정 상자

| 선택 | 효과 |
|------|------|
| 연다 | 50% gold+35 / 50% damage:10 |
| 무시한다 | — |

### evt_wounded_soldier — 부상병

| 선택 | 효과 |
|------|------|
| 붕대 준다 | max_hp+5 |
| 약탈한다 | gold+25 |
| 치료한다 (30G) | relic_whetstone 획득 시도 |

### evt_fork_road — 갈림길

| 선택 | 효과 |
|------|------|
| 어두운 길 | 다음 노드 엘리트로 치환 |
| 밝은 길 | heal:15% maxHp |
| 지도 확인 | 다음 상점 1회 리롤 무료 |

### evt_cursed_idol — 저주받은 우상

| 선택 | 효과 |
|------|------|
| 파괴한다 | gold+20, cleanse 없으면 poison:3 |
| 숭배한다 | empower 다음 전투, weak:2 다음 전투 |
| 떠난다 | — |

## 4. 노드 가중

- Act1 이벤트 노드 진입 시 위 6개 중 uniform 1.

## 5. 변경·마이그레이션

- 2026-05-20: Act1 초안 6건
