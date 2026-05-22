---
tags:
  - analysis
  - system/ui
aliases:
  - 행군 대열 파견 패널 분석
  - Troop_Send 분석
description: 월드맵 우측 행군 대열 선택 패널 — TroopSendCallbackManager 이벤트 관리, 부대/정찰 슬롯 렌더링, SetPanel 위치 계산
status: done
created: 2026-05-22
updated: 2026-05-22
---

← [[UI_MOC]]

# Troop_Send — 행군 대열 파견 패널 분석

## 요약

### 무슨 문제였나?
월드맵에서 적지나 자원지를 탭하면 오른쪽에 내 부대 목록이 나타나 어떤 부대를 보낼지 고를 수 있다. 이 패널은 부대를 고른 뒤 "행군" 버튼을 눌러 실제로 출발시키기까지의 모든 흐름을 담당한다. 정찰 기능도 동일 패널에서 처리한다.

### 어떻게 고쳤나?
분석 대상 파일이므로 수정 이력은 없다. 설계 구조를 정리한다.

| 핵심 구성 요소 | 역할 |
|---|---|
| `TroopSendCallbackManager` | 이벤트 등록/해제를 Dictionary로 추적해 메모리 누수 방지 |
| `TroopElement` | MarchLine ↔ UXML 슬롯 1:1 매핑, 도착 시간·상태 아이콘 표시 |
| `UpdateMarchLine()` | 슬롯 목록 재구성 (+ 버튼 → 출격 부대 역순 → 잠금 슬롯) |
| `SetPanel()` | 선택 슬롯의 화면 Y좌표를 기준으로 우측 정보 패널 위치 계산 |

### 현재 상태는?
✅ 기능 정상 동작  
⚠️ `SetPanel()` 내 지역 함수 + GeometryChanged 이중 구조로 인한 가독성 저하

> **한 줄 요약**: "월드맵 행군 대열 패널은 콜백 딕셔너리로 이벤트를 추적하고, GeometryChangedEvent로 레이아웃 완료 후 패널 위치를 정렬한다."

---

## 1. 개요

**파일**: `Assets/UI/Troop/Troop_Send.cs`  
**소속 씬**: WORLD (월드맵 Main HUD 우측)  
**진입 조건**: `OnEnable()` — 행군 대상 선택 시 활성화

```
WorldMap 탭 → Troop_Send.OnEnable()
    ├─ UXML_Init() ─ UI 요소 캐싱
    ├─ Text_Init() ─ 제목/카운트 텍스트 세팅 (TROOP/SCOUT 분기)
    ├─ Button_Init() ─ 버튼 콜백 등록 (TroopSendCallbackManager)
    └─ UpdateMarchLine() / UpdateScoutLine() ─ 슬롯 목록 생성
```

**주요 public 파라미터** (외부에서 세팅 후 활성화)

| 필드 | 타입 | 의미 |
|------|------|------|
| `marchType` | `MARCH_TYPE` | 이동/자원채집/집결 등 행군 종류 |
| `sally_type` | `MARCH_SALLY_TYPE` | 파견 세부 유형 |
| `target_type` | `TARGET_TYPE` | NPC/USER/TOWER 등 |
| `target_no` | `long` | 대상 좌표 번호 |
| `CurrentPanel` | `PanelOption` | TROOP(부대) / SCOUT(정찰) 모드 |

---

## 2. 핵심 구성 요소

### 2-1. TroopSendCallbackManager

`Troop_Send` 전용 이벤트 관리 내부 클래스. 3가지 이벤트 타입을 딕셔너리로 추적한다.

```
Dictionary<VisualElement, EventCallback<ClickEvent, ...>>
Dictionary<VisualElement, EventCallback<MouseDownEvent, ...>>
Dictionary<VisualElement, EventCallback<GeometryChangedEvent, ...>>
```

- `RegisterTroopSendCallback` / `UnregisterAllTroopSendCallbacks` — 전체 해제
- `UnregisterTroopSendScrollCallbacks(elements)` — 스크롤 재구성 시 해당 요소만 선택 해제  
- `GeometryChanged` 콜백은 중복 등록 방지(`ContainsKey` 체크 후 기존 해제)

→ `WarCallbackManager_Analysis`에서 분석한 동일 패턴 (`[[WarCallbackManager_Analysis]]`)

### 2-2. TroopElement

`MarchLine` 데이터를 UI 슬롯 항목으로 표현하는 내부 클래스.

| 생성자 | 사용 케이스 |
|--------|------------|
| `TroopElement(MarchLine, root)` | 출격 중인 실제 부대 슬롯 |
| `TroopElement(int index, root)` | 빈 슬롯 (타운홀 레벨 미달 → LOCK, 달성 → CREATE) |

**초기화 내용** (데이터 있는 경우):
- 리더 영웅 아이콘/등급 프레임 → `MKSpriteAtlasManager`
- 상태 아이콘(`GetStatusIconName()`)
- 병사 합계(`corps.div.Sum(num)`)
- 버프 적용 최대 적재량(`LEGION_LOAD` 버프 × 0.0001)
- 컴패니언 아이콘 표시 여부

**`SetArriveTime(distance)`**: 기본 이동 속도(최대값)와 speed 버프를 적용해 예상 도착 시간 계산.  
`Speed = (BaseTime / 100) × (100 / (100 + speed / 100))`

### 2-3. UpdateMarchLine()

스크롤 슬롯을 3구간으로 나눠 순서대로 추가한다.

```
① + 버튼 (빈 슬롯, PlusCount = troops_que - 출격 수)
② 출격 중인 부대 (역순: Count-1 → 0)  ← 최신 출격이 위에 표시되도록
③ 잠금 슬롯 (타운홀 미달, MAX 5개까지)
```

기존 자식 제거 시 반드시 `UnregisterTroopSendScrollCallbacks` 먼저 호출.  
`scrollview.RefreshAfterHierarchyChange()` 를 각 구간 후 개별 호출.

### 2-4. SetPanel()

선택된 슬롯 위치에 맞게 우측 정보 패널 Y좌표를 조정한다.

```
SetPanel(target)
  └─ SetPosPanel(_panel)  ← 지역 함수
       └─ GeometryChangedEvent 등록 → OnPanelGeometryChanged() 실행
            └─ panel.Y = target.worldY (화면 밖이면 클램프)
               selector.Y = target.worldY - panel.worldY
```

**주의**: `_panel.style.display == Flex && panel.style.display == Flex` 인 경우 즉시 `OnPanelGeometryChanged(null, ...)` 호출해 GeometryChangedEvent 없이 직접 위치 계산.

---

## 3. 정찰(SCOUT) 모드

`UpdateScoutLine()`: 정찰 오두막(`EXPLORERS_HALL`) 기반 최대 슬롯 수 계산.

| 슬롯 상태 | 조건 |
|-----------|------|
| 정찰 출격 중 | `scoutLines[i]` 존재 |
| 정찰 가능 | `Open_scoutQue > i` |
| 잠금 | 정찰 오두막 레벨 미달 |

자동 선택(`autoSetting`): 첫 번째 가능한 빈 슬롯을 `SetScoutPanel`으로 자동 선택.

---

## 4. 버튼 표시 로직 (SetPanel 하단)

| 버튼 | 표시 조건 |
|------|-----------|
| `btn_disable` | 집결 참가 / 방어 지원 중 / 전멸 상태 |
| `btn_enable` | 단일 선택 + 정상 상태 (행군 시간 서브텍스트 표시) |
| `btn_enable_no_subtext` | 다중 선택 활성화 상태 |

**AP 소모 표시**: NPC/isNPC 타워 대상일 때 좌측 패널에 스태미나 소모량 표시.  
**전투력 예측**: 내 병사 전투력 vs NPC 전투력 비율로 승리확정/승리/난전/패배 텍스트.  
**적재량**: 채집/이동 대상일 때 현재 자원 / 최대 적재량 표시. 채집 중이면 DOTween으로 실시간 갱신.

---

## 5. 문제점 및 개선 제안

| 항목 | 설명 | 심각도 |
|------|------|--------|
| `SetPanel()` 복잡도 | 지역 함수 `SetPosPanel` + `OnPanelGeometryChanged` 이중 구조, 조건 분기 많음 | 낮음 |
| `OnBtnEnableNoSubTextClick` AP 계산 | 주석 처리된 구 버전에는 `action_point_continue_battle_slot` 세밀 계산이 있었음. 현재 `CalcAP`가 이를 포함하는지 확인 필요 | 중간 |
| `tweenDic` + `scrollview` 해제 순서 | `OnDisable`에서 tween Kill 후 `scrollview.Clear()`, `scrollview = null` 순서. scrollview가 null이면 `Clear()`가 NRE 발생 가능 (현재는 순서 보장되나 취약) | 낮음 |
| 다중 선택 sally_type 목록 | `not_multi_select_sally_type` 리스트에 `FLEET_SALLY_DEF_JOIN`이 중복 포함됨 (line 1231, 1238) | 낮음 |

---

## 6. 의존성 관계

```
Troop_Send
 ├─ NetworkTroop.instance.other_user_lines   ← 출격 부대 목록
 ├─ Troop_Manager.instance.StartMove()       ← 행군 명령 실행
 ├─ Troop_Manager.instance.MakePath()        ← 경로 검증
 ├─ WorldManager.instance.GetPathDistance()  ← 거리 계산
 ├─ NetworkAlly.instance.reinforce_memberList ← 방어 지원 여부 확인
 └─ MKSpriteAtlasManager.Instance            ← 영웅/상태 아이콘
```
