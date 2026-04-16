---
tags:
  - system/ui
  - concern/readability
  - status/done
aliases:
  - Ally_war_rally Tab 분석
---

# Ally_war_rally.Tab 클래스 분석 보고서

## 1. 개요
`Ally_war_rally.Tab` 클래스는 연맹 전쟁 집결 UI(`Ally_war_rally`) 내에서 **상단 탭 버튼의 상태와 동작을 관리**하는 중첩 클래스입니다.
전체(Total), 공격(Attack), 방어(Defense) 3가지 필터링 모드를 전환하는 기능을 담당합니다.

## 2. 주요 구성 요소

### 2.1 열거형: `Tab_Type`
탭의 종류를 정의합니다.
```csharp
public enum Tab_Type
{
    TOTAL,   // 전체 보기
    ATTACK,  // 공격 집결 보기
    DEFENSE  // 방어 집결 보기
}
```

### 2.2 주요 필드
| 필드명 | 타입 | 설명 |
| :--- | :--- | :--- |
| `type` | `Tab_Type` | 해당 탭 인스턴스가 담당하는 타입 |
| `inactive` | `Button` | 탭 UI 버튼 요소 (VisualElement) |
| `isActive` | `bool` | 현재 이 탭이 선택되어 활성화된 상태인지 여부 |

---

## 3. 핵심 기능 분석

### 3.1 생성자 및 초기화
```csharp
public Tab(Tab_Type type, Button inactive, string name, Callback callback)
```
*   **초기화:** 탭 타입, 버튼 UI 요소, 표시 텍스트를 설정합니다.
*   **이벤트 등록:** `Ally_war_rally.warCallbackManager.RegisterTabClickCustom`을 사용하여 클릭 이벤트를 등록합니다.
    *   *중요:* 일반적인 `RegisterCallback` 대신 커스텀 매니저를 사용하여 팝업이 닫힐 때까지 이벤트를 안전하게 유지하고 관리합니다.

### 3.2 클릭 이벤트 처리 (`OnInactiveClick`)
```csharp
public void OnInactiveClick(ClickEvent ev, WarCallbackManager.CustomData data)
{
    if (isActive) return; // 이미 활성화된 탭이면 무시

    isActive = true;
    data.callback(); // 외부에서 전달받은 콜백(화면 갱신 로직) 실행
}
```
*   **최적화:** 이미 선택된 탭을 다시 클릭했을 때 불필요한 로직이 실행되지 않도록 `isActive` 체크를 수행합니다.

### 3.3 상태 변경 및 스타일링 (`SetInActive`)
```csharp
public void SetInActive(Tab_Type type)
{
    isActive = this.type == type; // 요청된 타입과 자신의 타입이 일치하면 활성화

    if (isActive)
    {
        inactive.RemoveFromClassList("tab__btn--off");
        inactive.AddToClassList("tab__btn--on");
    }
    else
    {
        inactive.AddToClassList("tab__btn--off");
        inactive.RemoveFromClassList("tab__btn--on");
    }
}
```
*   **USS 클래스 교체:** `tab__btn--on`과 `tab__btn--off` 클래스를 토글하여 선택/비선택 상태의 시각적 스타일을 변경합니다.
*   **일괄 갱신:** `Ally_war_rally` 클래스에서 탭 변경 시 모든 `Tab` 객체의 `SetInActive`를 호출하여 상태를 동기화합니다.

---

## 4. 코드 리뷰 및 개선 제안

### 4.1 장점
*   **캡슐화:** 탭 버튼의 UI 요소, 데이터, 상태, 이벤트 처리 로직이 하나의 클래스로 잘 묶여 있습니다.
*   **확장성:** 새로운 탭 타입이 추가되더라도 `Tab_Type`을 추가하고 리스트에 객체만 추가하면 쉽게 확장 가능합니다.
*   **안전성:** `WarCallbackManager`를 통해 이벤트를 등록하므로 메모리 누수 위험이 적습니다.

### 4.2 개선 제안
*   **네이밍:** `inactive`라는 변수명은 `Button` UI 요소를 가리키는데, "비활성 상태"를 의미하는 형용사와 혼동될 소지가 있습니다. `tabButton` 또는 `uiButton` 등으로 변경하는 것이 더 명확합니다.
*   **메서드명:** `SetInActive`는 "비활성화하다"로 읽힐 수 있어 오해의 소지가 있습니다. `SetState` 또는 `UpdateState`가 더 적절해 보입니다.
