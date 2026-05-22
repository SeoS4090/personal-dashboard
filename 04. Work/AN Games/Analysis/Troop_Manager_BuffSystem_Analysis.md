---
tags:
  - system/troop
  - concern/performance
  - concern/readability
  - status/done
aliases:
  - TroopManager 버프 계산
description: Troop_Manager 버프 계산 시스템 6개 메서드 분석 — 스킬·특성·장비·마을 버프 LINQ 다중조인, 교차버프, 컴패니언
created: 2026-05-21
updated: 2026-05-21
---

# Troop_Manager — 버프 계산 시스템 분석

← [[Troop_Manager_Overview_Analysis]]

## 요약

### 무슨 기능인가?

출전 팝업에서 영웅별 전투 능력 예측치를 계산하는 시스템이다. 영웅 스킬·특성·장비·마을 버프·컴패니언 버프를 모두 합산해 "이 영웅을 앞세우면 얼마나 강한가"를 보여주고, 편성 화면에서 자동으로 강한 영웅을 앞줄에 배치하는 데 쓰인다.

### 어떻게 구성되어 있나?

```
Troop_Buffs(corps, sally_type, target_type)          ← 출전 팝업 최종 진입점
  ├─ Hero_Buff_Skill_N_Trait(hero_id, ...)           ← 영웅별 자기 버프
  │    ├─ 스킬 버프 (조건부 LINQ)
  │    ├─ 특성 버프 (조건부 LINQ)
  │    ├─ 장비 버프 (LINQ)
  │    └─ 병사 스킬 버프 (유닛 연구)
  └─ Comp_Buff(sally_type, target_type)              ← 컴패니언 버프
       ├─ companionSkillList LINQ
       └─ addSkillBuffs (교차 버프용)

SortHeroBuff(buffList, heroList)                     ← 편성 화면 영웅 정렬
Troops_Buff(corps)                                   ← 레거시 4-pass 합산 (부대 편성 전)
Hero_Buff(hero_id)                                   ← 레거시 단일 영웅 (부대 편성 전)
```

### 현재 상태는?

기능 동작 중. 성능 이슈 잠재 — 영웅 수가 많을수록 매 출전 팝업 열기마다 다중 LINQ 조인이 실행된다.

> **한 줄 요약**: "출전 팝업 열 때마다 스킬·특성·장비·마을·컴패니언 5-source LINQ 다중조인으로 영웅별 버프를 합산한다."

---

## 메서드별 상세

### Hero_Buff_Skill_N_Trait (최신, 조건부 버프)

`Troop_Buffs`가 영웅별로 호출하는 핵심 메서드.

**condition_types 조합 로직**:
```
기본: [1]                       (항상 적용)
리더 && 참여자가 아님: +[3]     (리더 전용 버프)
NPC 타겟: +[41]
거점 집결 참여: +[42]
방어 지원: +[43]
마을 공격 / 자원지: +[42] / +[61]
```

**4-source 버프 파이프라인**:

| Source | 파이프라인 |
|--------|----------|
| 스킬 | `heroSkillList` → `heroSkillEffect` → `normalBuff` |
| 특성 | `heroTrait` → `heroTraitEffect` → `normalBuff` |
| 장비 | `gear` → `gearBuffValue` (GetGearBuff 계산) → `normalBuff` |
| 병사스킬 | `unitSkill` (연구 여부 체크) → `heroSkillEffect` → `normalBuff` |

반환: `(List<KeyValuePair<MKNormalBuffBaseDTO, long>>, List<(hero_id, sub_buff_id, buff_value, target_option)>)`
- 첫 번째: 자기 버프 합산 (buff_id별)
- 두 번째: 교차 버프용 부대 영향 버프 목록

---

### Troop_Buffs (교차 버프 적용)

`Hero_Buff_Skill_N_Trait` 결과를 영웅 간 교차 적용하는 최종 단계.

```csharp
// 영웅 A의 "부대 영향" 버프가 영웅 B(같은 unit_class 또는 전체)에 적용
var additional_sub_buffs = hero_total_buffs
    .Where(x => x.Key != troops[i].hero_id)           // 자기 자신 제외
    .SelectMany(x => x.Value.Item2
        .Where(y => y.target_option.Contains(10)       // 10 = 모든 병종
               || y.target_option.Contains(element+3)) // element+3 = 특정 병종
    );
```

**except_buff_ids**: 속성 관련 버프(23~33 범위 등) 교차 적용 제외.

컴패니언(`comp_fleet_code > 0`)이 있으면 `Comp_Buff` 결과도 추가 병합.

---

### SortHeroBuff (편성 화면 정렬)

출전 편성 팝업에서 "버프 합산 상위" 영웅을 앞줄에 자동 배치하기 위한 정렬 메서드.

**입력**: `CheckbuffList` (어떤 버프 ID를 기준으로 정렬할지), `sort_heroList`

**3-pass LINQ**:
1. 스킬 버프 합산 (`heroSkillList`, type==2 필터)
2. 특성 버프 합산 (`heroTrait` + `heroTraitEffect`)
3. 장비 버프 합산 (`gear` + `gearBuffValue`)

**정렬 기준**: 버프합 DESC → 레벨 DESC → hero_id DESC

**레거시 vs 최신 차이**:
- `SortHeroBuff`: condition_type 필터 없음, type==2(패시브)만 포함
- `Hero_Buff_Skill_N_Trait`: condition_type 기반 필터, 타겟 조건 포함

---

### Troops_Buff / Hero_Buff (레거시)

`Hero_Buff_Skill_N_Trait` 이전 버전. 4-pass (스킬+특성+장비+마을 버프)를 수행하나 condition_type 조건 없이 `MILITARY` 카테고리 또는 `GatherSpeeds` 목록으로만 필터.

**마을 버프 포함** (`query_village_buff`): `MKUserDataModel.buff.datas` — 현재 마을에서 활성화된 버프 아이템 효과까지 합산.

---

### Comp_Buff (컴패니언 전용)

영웅 대신 컴패니언 스킬 테이블(`companionSkillList`, `companionSkillEffect`)을 참조.

**버프값 계산**: `effect_value_base + GetCompSkillBuffValue(effect_value_lv_type) + floor(stat × coef/10000)`
- `effect_value_lv_type==1`: 레벨별 증가값 (`companionSkillEffectLevel`)
- `effect_value_lv_type==2`: 강화 증가값 (`companionSkillEnhanceEffect`)
- stat (ferocity/inspire/vital) 비례 추가값 포함

---

## 성능 이슈 (#concern/performance)

| 문제 | 영향 |
|------|------|
| 매 출전 팝업마다 LINQ 5-source 다중조인 실행 | 출전 팝업 open 지연, GC spike |
| `Troops_Buff`/`Hero_Buff` 중복 계산 (레거시 미삭제) | 호출 경로에 따라 이중 실행 가능 |
| `SortHeroBuff`에서 `query.ToList()`를 두 번 호출 | lines 1718~1719 `var querytest = query.ToList()` (사용 안 됨) |

**개선 방향**: 버프 결과를 군단 편성이 변경될 때만 재계산하고 캐싱. 출전 팝업은 캐시 읽기만 수행.

---

## 버프 ID 예외 목록

교차 버프 적용 시 제외되는 버프 ID:

| 제외 대상 | buff_id |
|----------|---------|
| `Hero_Buff_Skill_N_Trait` except | 236, 237, 238, 239 |
| `Troop_Buffs` except (교차) | 236, 237, 238, 239, 23~33, 216~218 |
