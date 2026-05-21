---
tags:
  - analysis
  - system/ui
  - bug-fix
aliases:
  - AWQA-6161
  - TroopFormation SelectIndex 버그
description: 부대 편성 팝업 OnEnable에서 캐시된 SelectIndex가 List 범위 초과하는 ArgumentOutOfRangeException 수정 (AWQA-6161)
status: done
created: 2026-05-21
updated: 2026-05-21
---

← [[UI_MOC]]

# AWQA-6161 TroopFormation SelectIndex Static 버그 수정

## 요약

`TroopFormation.OnEnable()` 람다 내부에서 이전 세션의 SelectIndex(static 또는 캐시 변수)가 현재 List 크기보다 클 때 `ArgumentOutOfRangeException`이 발생한다. 팝업을 닫고 다시 열 때 부대 목록 크기가 달라져 재현된다. OnEnable 진입 시 SelectIndex를 유효 범위로 clamp하는 방어 가드를 추가하여 수정한다.

---

## 크래시 로그

```
Non-fatal Exception: ArgumentOutOfRangeException : Index was out of range.
  at System.Collections.Generic.List`1[T].get_Item(Int32 index)
  at TroopFormation+<>c__DisplayClass39_0.<OnEnable>b__12(ClickEvent evt)
  at UnityEngine.UIElements.EventCallbackFunctor`1[TEventType].Invoke(EventBase evt, PropagationPhase propagationPhase)
  → UIElements ClickEvent → PointerUpEvent → DefaultEventSystem
```

- 크래시 위치: `TroopFormation.OnEnable()` 내부 클로저 `b__12`
- 오류 종류: `ArgumentOutOfRangeException` (Non-fatal)
- 티켓: AWQA-6161

---

## 원인 분석

### SelectIndex 가 static 또는 클래스 수준 캐시인 이유

`TroopFormation` 은 팝업 형태로 열리고 닫히는 UI 컴포넌트다. 부대 목록(`List<TroopSlotData>`)은 `OnEnable` 시점에 서버 응답 또는 게임 상태에서 새로 구성되지만, SelectIndex(현재 선택된 슬롯 인덱스)는 static 필드나 클래스 필드로 선언되어 이전 팝업 호출의 값을 그대로 유지한다.

### 재현 경로

1. 팝업을 열어 인덱스 N(예: 4)을 선택한다.
2. 팝업을 닫는다 — SelectIndex = 4 가 유지된다.
3. 부대 목록이 바뀐 상태(예: 슬롯 3개)에서 팝업을 다시 연다.
4. `OnEnable` 에서 람다 `b__12`가 ClickEvent 핸들러로 등록되면서 SelectIndex = 4 를 캡처한다.
5. 사용자가 클릭하면 `list[4]` 접근 → 인덱스 4는 범위 초과 → 예외 발생.

### 코드 흐름 (추정)

```csharp
// OnEnable 내부 (단순화)
void OnEnable()
{
    // ... 부대 목록 재구성 ...
    slotButton.RegisterCallback<ClickEvent>(evt =>
    {
        var data = troopSlotList[selectIndex]; // selectIndex 가 이전 값 그대로
        ApplySlot(data);
    });
}
```

`troopSlotList` 는 새로 구성되었지만 `selectIndex` 가 이전 크기 기준 값이므로 범위 초과가 발생한다.

---

## 수정 방법

### 방어 가드: OnEnable 진입 시 clamp

```csharp
void OnEnable()
{
    RefreshTroopSlotList(); // 목록 재구성

    // 방어 가드: selectIndex 를 유효 범위로 제한
    if (troopSlotList == null || troopSlotList.Count == 0)
    {
        selectIndex = -1;
    }
    else
    {
        selectIndex = Mathf.Clamp(selectIndex, 0, troopSlotList.Count - 1);
    }

    // 이후 ClickEvent 등록 ...
}
```

또는 목록이 비어 있을 때 버튼 자체를 비활성화하여 클릭 이벤트 자체를 차단하는 방법도 병행할 수 있다.

### 대안: static 제거 및 초기화

SelectIndex를 static이 아닌 인스턴스 필드로 유지하고 OnEnable 첫 줄에서 0으로 초기화하면 누적 문제 자체를 방지할 수 있다. 단, 마지막 선택 상태를 유지해야 하는 UX 요구가 있다면 clamp 방식이 더 적합하다.

---

## 영향 범위

| 구분 | 내용 |
|------|------|
| 발생 조건 | 팝업을 닫았다가 다시 열 때 부대 슬롯 수가 달라진 경우 |
| 심각도 | Non-fatal (기록되지만 즉시 크래시는 아님) |
| 영향 UI | `TroopFormation` 팝업 슬롯 클릭 |
| 수정 대상 | `TroopFormation.OnEnable()` SelectIndex 초기화 로직 |

---

## 관련 문서

- [[TroopFormation_WorldTroopPanel_Overlap_Fix_Analysis]] — 같은 팝업의 WorldTroopPanel 겹침 버그
