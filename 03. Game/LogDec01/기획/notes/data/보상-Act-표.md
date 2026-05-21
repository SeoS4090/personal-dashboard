---
type: data
status: draft
title: 보상-Act-표
domain: "[[경제 MOC]]"
tags:
  - data
  - reward
related:
  - "[[보상-시스템]]"
  - "[[재화-골드]]"
  - "[[적-풀-Act1]]"
aliases:
  - RewardTable
updated: 2026-05-20
---

# 보상-Act-표

## 1. 용도

- [[보상-시스템]] 의 Act별 수치 단일 출처. 전투 종료 시 [[재화-골드]] 지급·유물 드롭.

## 2. 스키마

| 필드 | 설명 |
|------|------|
| battleType | normal \| elite \| boss |
| act | 1~3 |
| goldMin, goldMax | 즉시 골드 |
| goldScalePerAct | Act>1 시 `(1 + 0.1×(act-1))` 곱 |
| relicChance | 0~1 (엘리트) |
| relicGuaranteed | boss=true |

## 3. Act1 (기준)

| battleType | goldMin | goldMax | relicChance | relicGuaranteed |
|------------|---------|---------|-------------|-----------------|
| normal | 15 | 25 | 0 | false |
| elite | 40 | 55 | 0.25 | false |
| boss | 80 | 80 | 0 | true |

## 4. Act2

| battleType | goldMin | goldMax | relicChance | 비고 |
|------------|---------|---------|-------------|------|
| normal | 18 | 28 | 0 | ×1.1 scale |
| elite | 48 | 62 | 0.28 | |
| boss | 95 | 95 | — | true |

## 5. Act3

| battleType | goldMin | goldMax | relicChance | 비고 |
|------------|---------|---------|-------------|------|
| normal | 22 | 32 | 0 | ×1.2 scale |
| elite | 55 | 70 | 0.30 | |
| boss | 110 | 110 | — | true, boss 풀 유물 |

## 6. 계산식

```
gold = floor( rand(goldMin, goldMax) × (1 + 0.1×(act-1)) )
```

- 이벤트·카드 `c_lucky_coin` 등은 별도 가산.

## 7. 변경·마이그레이션

- 2026-05-20: Act1~3 초안
