---
tags:
  - analysis
  - system/troop
  - troop-lod
aliases:
  - MakeUnits Duplicate Analysis
  - MakeHeros LoadSoldier 중복 생성 분석
description: MakeHeros/LoadSoldier 비동기 콜백 레이스 컨디션으로 유닛 오브젝트가 중복 생성되는 버그 분석
status: partial-recovery
created: 2026-05-20
updated: 2026-05-20
---

← [[TroopLOD_Function_Analysis_Index]]

# TroopLOD MakeUnits 중복 생성 분석

> [!warning] 부분 복구 — 내용 손실
> 이 문서는 파일 손상으로 인해 §1 개요만 복구되었습니다. §2 이후 분석 내용(원인 코드, 수정 방법, 검증)은 유실되었습니다. 원본 코드를 재분석하여 보완이 필요합니다.

---

## 1. 개요

`MakeUnits` 는 내부적으로 `MakeHeros` 와 `LoadSoldier` 를 호출한다. 두 함수 모두 비동기(async/callback) 방식으로 오브젝트를 생성하기 때문에, 연속 호출 시 레이스 컨디션이 발생하여 이전 호출의 콜백이 늦게 도착해 고아(orphan) 오브젝트가 남는 버그가 존재한다.

### 증상

- 부대 슬롯이 갱신될 때 이전 유닛 오브젝트가 정리되지 않고 중복으로 월드맵에 잔존
- 씬 전환 또는 LOD 레벨 변경 시 중복 오브젝트 수가 누적되어 메모리·드로우콜 증가

### 핵심 흐름 (복구된 범위)

```
MakeUnits()
├── MakeHeros()   ← async, 완료 콜백 시점 불확정
└── LoadSoldier() ← async, 완료 콜백 시점 불확정
```

이전 `MakeUnits` 호출의 콜백이 새로운 호출 이후에 도착하면, 신규 슬롯 데이터를 덮어쓰거나 이미 교체된 오브젝트 위에 구형 오브젝트를 추가로 활성화한다.

---

> [!note] 복구 필요 섹션
> - § 2. 원인 코드 분석
> - § 3. 수정 방법 (취소 토큰 / 시퀀스 번호 가드)
> - § 4. 검증 로그
