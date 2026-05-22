---
tags:
  - analysis
  - system/ui
aliases:
  - 부대 편성 화면 전체 분석
  - TroopFormation 개요
description: 부대 편성 전체 화면(TroopFomation.cs) — 자동 편성 알고리즘, 프리셋, 탭 애니메이션, 버프 계산, Dead Code 위험
status: done
created: 2026-05-22
updated: 2026-05-22
---

← [[UI_MOC]]

# TroopFormation — 부대 편성 화면 전체 분석

## 요약

### 무슨 문제였나?
행군 명령 전에 어떤 영웅을, 어떤 병사와 함께 보낼지 설정하는 화면이 부대 편성 팝업이다. 영웅 3명까지 슬롯에 배치하고, 각 영웅에게 맞는 병과의 병사를 배분한 뒤 "행군" 버튼을 누르면 실제로 군단이 출발한다. 자동 분배, 프리셋 저장/불러오기, 탭 전환 애니메이션까지 이 하나의 파일(`TroopFomation.cs`)이 담당한다.

### 어떻게 고쳤나?
분석 대상 파일이므로 수정 이력은 없다. 설계 구조를 정리한다.

| 핵심 구성 요소 | 역할 |
|---|---|
| `AutoArrangeTroopByPower()` | 유닛 타입별 전투력 비중 → 영웅별 가중치 자동 편성 (AWPL-3979) |
| `SetHeroInit()` | 진입 시 초기 영웅 자동 선택 (자원지 특수 케이스 포함) |
| `Onclick_EqualButton()` | 병과별 균등 병사 분배 (3회 이터레이션) |
| `TroopHeroItem` | 영웅 슬롯 상태 머신 (LOCK/ADD/SET) + 3D 모델 로딩 |
| `CalcTempSpeed()` | 공통/연맹/병과별 버프 모두 적용한 행군 시간 미리 계산 |

### 현재 상태는?
✅ 주요 기능 정상 동작  
⚠️ `SetHeroInit()` default 케이스에 Dead Code 존재 (절대 실행 안 됨)  
⚠️ `SelectIndex` static 필드는 씬 간 오염 위험이 여전히 내재됨 (`[[TroopFormation_SelectIndex_Static_BugFix_AWQA6161]]` 참조)

> **한 줄 요약**: "부대 편성 화면은 전투력 비중 기반 자동 편성과 병과별 균등 분배 두 가지 알고리즘으로 영웅·병사를 배치하며, 리팩토링 과정에서 남겨진 Dead Code와 static SelectIndex가 잠재 위험이다."

---

## 1. 개요

**파일**: `Assets/UI/Troop/TroopFomation.cs`  
**베이스 클래스**: `MonoBehaviour` (virtual 메서드로 상속 확장)  
**사용 씬**: WORLD, FORT_WAR, SKY_ROAD (씬별로 서브클래스가 오버라이드)

```
행군 대상 선택 완료
  → Troop_Manager.ShowTroopMain()
      → TroopFormation.OnEnable()
           ├─ 데이터 세팅 (cityHallLv, townHallBaseUnit)
           ├─ 영웅 자동 선택 SetHeroInit()
           ├─ TroopHeroItem × 3 생성
           └─ UI 버튼/패널 초기화
```

**virtual 메서드 오버라이드 포인트**

| 메서드 | 기본 동작 | 오버라이드 예 |
|--------|-----------|--------------|
| `SetHeroInit()` | 자동 영웅 선택 | 씬별 영웅 제한 |
| `GetViewList()` | 전체 보유 영웅 | 씬별 필터 |
| `OnDisable()` | WorldTroopPanel 복원 | 씬별 추가 해제 |
| `SetUnits()` | 병사 설정 패널 갱신 | 병과 제한 씬 |
| `CalcTempSpeed()` | 행군 시간 계산 | 요새전 특수 처리 |

---

## 2. 자동 편성 알고리즘

### 2-1. AutoArrangeTroopByPower() — AWPL-3979

진입 시 기본 자동 편성 (자원지 제외).

```
1. 보유 유닛 타입별 총 전투력 합산 → 타입별 비중(ratio) 계산
2. 영웅별: 자신의 병과 타입 비중 × 영웅 전투력 = calcPower
3. grade 가중치 적용: grade ≥ 21 → ×3, grade ≥ 11 → ×2, else ×1
4. finalPower 내림차순 정렬 → 3슬롯 순서 결정
5. 슬롯별 티어 높은 순으로 유닛 배치 (maxUnit + TROOP_CAPACITY 버프)
```

### 2-2. SetHeroInit() — 자원지(FLEET_SALLY_RESOURCE) 특수 케이스

자원지 채집 시 피안다오(hero_id=201) 튜토리얼 강제 배치 조건:
- 미션 10033 진행 중 AND 피안다오 보유 AND 파이어벤더 T1 ≥ 300명

일반 자원지 편성 알고리즘 흐름:

```
최대 3군단 × cur_resource 소진될 때까지 반복:
  IF 적재량이 자원량보다 많은 병과 존재:
    IF 영웅 1명이 혼자 자원량 초과 적재 가능:
      → 채집 버프 가장 높은 영웅 선택 (SortHeroBuff)
      → 자원량에 딱 맞게 최소 병사만 배치
    ELSE:
      → 지휘력(maxUnit) 가장 높은 영웅 선택
      → 최대한 꽉 채워 배치
  ELSE (모든 병과 적재량 < 자원량):
    → 지휘력 내림차순 + 채집 버프 ThenBy + property1==1004 ThenBy
    → 전원 꽉 채워 배치
```

> **Dead Code 경고**: `default:` case에서 `ret = AutoArrangeTroopByPower(); break;` 이후
> 나오는 `ret.Clear(); ... canOutHero` 코드 블록(약 80줄, line ~1087~1163)은
> 절대 실행되지 않는다. `return`이 없고 `break` 직전이지만 `AutoArrangeTroopByPower()`
> 반환 후 즉시 `break`하므로 하위 코드는 실행 불가.

---

## 3. 병사 균등 분배 — Onclick_EqualButton()

```
1. 영웅별 병과 타입으로 그룹핑 (Dictionary<unit_type, List<TroopHeroItem>>)
2. 보유 유닛을 복사본(SetUnits)으로 사용
3. 각 유닛 ID × 영웅 그룹에 대해 최대 3회 이터레이션:
   - SettingHeros = 아직 maxUnit 미달인 영웅만 필터
   - addCount = Math.Floor(unitSlot.ready / SettingHeros.Count)
   - 각 영웅에 addCount 배분 (maxUnit 초과 시 클램프)
   - unitSlot.ready에서 실제 배분량 차감
```

비균등 분배(`isAuto = false`) → `Onclick_EmptyButton()` (모든 div 초기화).

---

## 4. TroopHeroItem

영웅 슬롯 3개를 표현하는 내부 클래스.

| STATE | 조건 | UI |
|-------|------|----|
| `LOCK` | index > maxTroopCount-1 (리더 등급 미달) | btn-lock 표시 |
| `ADD` | 빈 슬롯 | btn-add 표시 |
| `SET` | 영웅 배치됨 | 영웅 초상화, ProgressBar, Companion |

**3D 모델 로딩**: `HeroViewManager.OpenHeroView(index, hero_id, callback)` 비동기.  
콜백에서 SelectIndex와 비교해 현재 탭에 따라 `SetActive` 제어.

**컴패니언(index=0 전용)**: 4가지 하위 상태
- COMPANION_BASE 건물 없음 → Companion_lock 표시
- 건물 있으나 동반자 출격 중 → Companion_add (현재 비어있음 안내)
- 동반자 대기 중 → Companion_add
- comp_fleet_code > 0 → Companion_set (CompanionItem으로 렌더링)

---

## 5. 탭 전환 — UpdateTab()

| TAB | 이동 패널 | 애니메이션 |
|-----|-----------|-----------|
| MAIN | troop-info-panel ← (0,164+safe), hero-list ↔ (-446-left,0), unit-panel ↔ (630+right,0), preset ↔ (480+right,0) | CSS translate + TransitionEnd |
| PRESET | 위와 동일 + presetPanel ← (480+right,0) | CSS translate |
| DETAIL | troop-info 숨김, hero-list 표시, unit-panel 표시 | CSS translate |

첫 번째 GeometryChangedEvent(`isFirstGeometryChanged`)에서 패널들을 애니메이션 없이 목표 위치에 즉시 배치 → AWQA-5585 UI 깜빡임 방지.

---

## 6. 행군 속도 계산 — CalcTempSpeed()

버프 적용 순서:

```
1. LEGION_MARCH_SPEED (공통 행군 속도)
2. ALLY_MATCH_SPEED (집결 행군 → 추가)
3. LEGION_MARCH_SPEED_TERRITORY (아군 연맹 영토 내 → 추가)
4. 병과별 INFANTRY/SPEAR/CAVARLY/ARCHER_MARCH_SPEED
   → 각 병과별 (base_speed / 100) × (100 / (100 + buff/100)) × distance 계산
   → 결과값 가장 큰 병과의 버프 선택 (느린 쪽이 병목)
5. March_Data.speed = common_sped + unit_buff
```

---

## 7. 프리셋 시스템

| 상태 | 동작 |
|------|------|
| `PRESET_SETTING_MODE.NONE` | 불러오기 모드 |
| `PRESET_SETTING_MODE.ADD` | 저장(덮어쓰기) 모드 |

불러오기 검증 checkType:

| 값 | 원인 | 처리 |
|----|------|------|
| 0 | 정상 | 그대로 적용 |
| 1 | 영웅 없음 | 토스트 + 균등 분배 |
| 2 | 리더 영웅 없음 | 토스트 + return |
| 3 | 병사 부족 | 토스트 + 균등 분배 |
| 4 | 병과 변경됨 | 토스트 + 균등 분배 |
| 5 | maxUnit 초과 | 토스트 + 균등 분배 |

---

## 8. 문제점 및 개선 제안

| 항목 | 위치 | 설명 | 심각도 |
|------|------|------|--------|
| Dead Code | `SetHeroInit()` default case line ~1087 | `AutoArrangeTroopByPower()` 호출 후 break, 이후 80줄 코드 미실행 | 중간 |
| `SelectIndex` static 오염 | 클래스 멤버 | `[[TroopFormation_SelectIndex_Static_BugFix_AWQA6161]]` 참조. 씬 전환 시 잔류 가능 | 중간 |
| 정렬 버튼 이벤트 중복 등록 | `OnEnable()` heroListPanel.Query | `OnEnable` 호출마다 ClickEvent 재등록, 이전 핸들러 미해제 | 낮음 |
| 빈 이름 버튼 쿼리 | `heroListPanel.Query<Button>("")` | 의도치 않은 자식 버튼 포함 가능 | 낮음 |
| 자원지 알고리즘 복잡도 | `SetHeroInit()` FLEET_SALLY_RESOURCE case | 중첩 for + LINQ + 조건 분기, 함수 분리 권장 | 중간 |

---

## 9. 의존성 관계

```
TroopFormation
 ├─ Troop_Manager.instance.StartMove()     ← 행군 실행
 ├─ Troop_Manager.instance.Hero_Buff()     ← 영웅별 버프 조회
 ├─ Troop_Manager.instance.Troops_Buff()   ← 군단 전체 버프 조회
 ├─ HeroViewManager.Instance               ← 3D 영웅 모델 뷰
 ├─ NetworkTroop.instance.troop_preset     ← 프리셋 데이터
 ├─ NetworkAlly.instance.ally_warSlotList  ← 집결 참여 경로 계산용
 └─ WorldSocketDataModel.instance          ← 자원지 현재 자원량
```
