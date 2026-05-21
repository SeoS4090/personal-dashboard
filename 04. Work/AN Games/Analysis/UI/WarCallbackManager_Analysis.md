---
tags:
  - analysis
  - system/ui
aliases:
  - WarCallbackManager 클래스 분석 보고서
description: `WarCallbackManager`는 `Ally_war_rally` 클래스 내부에 정의된 중첩 클래스로, **Unity UI Toolkit** 환경에서 `VisualElement`의 클릭 이벤트(`ClickE...
created: 2026-05-20
updated: 2026-05-20
---

← [[UI_MOC]]

# WarCallbackManager 클래스 분석 보고서

## 1. 개요
`WarCallbackManager`는 `Ally_war_rally` 클래스 내부에 정의된 중첩 클래스로, **Unity UI Toolkit** 환경에서 `VisualElement`의 클릭 이벤트(`ClickEvent`)를 안전하고 효율적으로 관리하기 위한 매니저입니다.

이 클래스의 주된 목적은 동적으로 생성되는 UI 요소(스크롤 아이템 등)와 정적인 UI 요소(탭, 버튼 등)의 이벤트 생명주기를 분리하여 관리함으로써 **메모리 누수(Memory Leak)**를 방지하고 **이벤트 중복 등록**을 예방하는 것입니다.

---

## 2. 주요 구성 요소

### 2.1 데이터 구조: `CustomData`
이벤트 발생 시 콜백 함수에 전달할 데이터를 담는 컨테이너 클래스입니다.

```csharp
public class CustomData
{
    public Callback callback;
    public ally_warSlot slot;
    public ally_war_targetSlot target_slot;
    public Troop_Manager.MARCH_TYPE march_type;
    public Troop_Manager.TARGET_TYPE target_type = Troop_Manager.TARGET_TYPE.TOWER;
    public Vector3 attack_pos;
    public Vector3 defense_pos;
    public int MyRallyCount;
}
```
*   **역할:** 클릭된 UI 요소가 어떤 맥락(Context)을 가지고 있는지 이벤트 핸들러에 전달합니다.
*   **특징:** `EventCallback<ClickEvent, CustomData>` 델리게이트의 사용자 정의 데이터로 활용됩니다.

### 2.2 관리 컨테이너 (Dictionary)
이벤트 등록 정보를 저장하고 관리하기 위해 두 개의 `Dictionary`를 사용합니다.

| 변수명 | 용도 | 생명주기 특징 |
| :--- | :--- | :--- |
| `clickCustomDic` | 스크롤 뷰 아이템 등 동적으로 자주 변경되는 요소 관리 | 스크롤 갱신 시 자주 초기화됨 |
| `tabClickCustomDic` | 탭 버튼, 닫기 버튼 등 팝업이 유지되는 동안 계속 존재하는 요소 관리 | 팝업이 닫힐 때까지 유지됨 |

---

## 3. 핵심 기능 분석

### 3.1 이벤트 등록 (`Register...`)
`RegisterClickCustom`과 `RegisterTabClickCustom` 메서드는 동일한 로직을 수행하지만 저장소(`Dictionary`)만 다릅니다.

**주요 로직:**
1.  **유효성 검사:** `VisualElement`가 `null`인지 확인합니다.
2.  **중복 방지 (Safety Check):**
    *   이미 해당 `VisualElement` 키로 등록된 콜백이 있는지 `TryGetValue`로 확인합니다.
    *   존재한다면 `UnregisterCallback`을 호출하여 기존 이벤트를 해제하고, Dictionary에서 제거합니다.
    *   *이 과정은 UI 풀링(Pooling)이나 재사용 시 이전 이벤트가 남아 중복 실행되는 치명적인 버그를 방지합니다.*
3.  **등록:**
    *   `ve.RegisterCallback(call, data)`를 통해 실제 UI에 이벤트를 연결합니다.
    *   Dictionary에 `VisualElement`와 콜백을 저장하여 추후 관리를 가능하게 합니다.

### 3.2 이벤트 해제 (`Unregister...`)
메모리 누수를 막기 위해 등록된 이벤트를 명시적으로 해제하는 기능을 제공합니다.

*   **`UnregisterTab()`**: 탭 관련 정적 요소들의 이벤트를 일괄 해제합니다.
*   **`UnregisterScroll()`**: 스크롤 뷰 아이템들의 이벤트를 일괄 해제합니다.
*   **`UnregisterAll()`**: 위 두 메서드를 모두 호출하여 전체를 정리합니다.

**안전한 해제 로직:**
```csharp
foreach (KeyValuePair<VisualElement, EventCallback<ClickEvent, CustomData>> item in clickCustomDic)
{
    item.Key?.UnregisterCallback(item.Value);
}
```
*   `item.Key?.` (Null Conditional Operator)를 사용하여, 만약 UI 요소(`VisualElement`)가 엔진 레벨에서 이미 파괴되었더라도 C# 레벨에서 Null Reference Exception이 발생하지 않도록 처리했습니다.

---

## 4. 장점 및 개선 제안

### 4.1 장점 (Pros)
1.  **생명주기 분리:** 자주 갱신되는 UI(스크롤)와 오래 유지되는 UI(탭)를 분리하여 성능과 관리 효율성을 높였습니다.
2.  **안전성:** 중복 등록 방지 로직이 내장되어 있어, 실수로 `Register`를 여러 번 호출해도 이벤트가 여러 번 발생하는 버그를 막아줍니다.
3.  **유지보수성:** 이벤트 등록과 해제 로직이 한 곳에 모여 있어, UI 관련 버그 추적이 용이합니다.

### 4.2 개선 제안 (Cons & Suggestions)
1.  **GC(Garbage Collection) 최적화:**
    *   `CustomData`가 `class`이므로 매 이벤트 등록 시 힙 할당이 발생합니다. 스크롤 아이템이 매우 많다면 `struct`로 변경하거나, 필요한 데이터만 `RegisterCallback`의 인자로 넘기는 방식을 고려할 수 있습니다.
2.  **확장성:**
    *   현재는 `ClickEvent`와 `CustomData` 타입에 고정되어 있습니다. 다양한 이벤트 타입(`ChangeEvent` 등)을 지원하려면 제네릭 메서드로 리팩토링하는 것을 고려해볼 수 있습니다.
3.  **Dictionary Key 제약:**
    *   `Dictionary<VisualElement, ...>` 구조상 하나의 `VisualElement`에는 하나의 콜백만 관리됩니다. 만약 하나의 버튼에 두 개의 서로 다른 클릭 로직을 이 매니저를 통해 붙이려고 하면, 나중에 등록된 것이 이전 것을 덮어씌웁니다. (일반적인 UI 로직에서는 문제되지 않으나, 특수한 경우 주의 필요)

---

## 5. 결론
`WarCallbackManager`는 **UI Toolkit의 이벤트 시스템을 안전하게 래핑(Wrapping)한 유틸리티 클래스**입니다. 특히 동적 리스트가 많은 게임 UI 환경에서 **이벤트 리스너 누수로 인한 성능 저하를 방지**하는 데 핵심적인 역할을 수행하고 있습니다.


