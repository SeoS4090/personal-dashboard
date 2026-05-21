---
tags:
  - analysis
  - system/ui
aliases:
  - InfiniteScrollManager 클래스 분석 보고서
description: `InfiniteScrollManager<T>`는 Unity UI Toolkit 환경에서 `ScrollViewPro`를 사용하여 **무한 스크롤(Infinite Scroll)** 기능을 구현하기 위한 제네릭 매...
created: 2026-05-20
updated: 2026-05-20
---

← [[UI_MOC]]

# InfiniteScrollManager 클래스 분석 보고서

## 1. 개요
`InfiniteScrollManager<T>`는 Unity UI Toolkit 환경에서 `ScrollViewPro`를 사용하여 **무한 스크롤(Infinite Scroll)** 기능을 구현하기 위한 제네릭 매니저 클래스입니다.
수천 개의 데이터가 있어도 적은 수의 UI 요소(Pool)만 생성하여 재사용함으로써 메모리 사용량을 최소화하고 높은 퍼포먼스를 유지합니다.

## 2. 주요 특징
*   **객체 풀링 (Object Pooling):** 전체 데이터 개수만큼 UI를 생성하지 않고, 화면을 채울 만큼의 소수 아이템(`POOL_SIZE`)만 생성하여 재활용합니다.
*   **동적 풀 사이즈 조정:** `AdjustScroll` 메서드를 통해 기기의 타겟 프레임(FPS)에 따라 풀 사이즈를 자동으로 최적화합니다.
*   **다양한 스크롤 기능:** 인덱스로 이동(`ScrollToIndex`), 데이터로 이동(`ScrollToData`), 데이터 추가/삭제/수정 시 실시간 UI 갱신 기능을 제공합니다.
*   **빠른 스크롤 대응:** 스크롤 속도가 매우 빠를 때 여러 아이템을 건너뛰거나 전체를 재배치하는 로직이 포함되어 있습니다.

---

## 3. 핵심 구성 요소

### 3.1 초기화 및 생성 (`CreateInfiniteScrollManager`)
팩토리 패턴을 사용하여 매니저 인스턴스를 생성합니다.
```csharp
public static InfiniteScrollManager<T> CreateInfiniteScrollManager<T>(...)
```
*   **매개변수:**
    *   `_scrollViewPro`: 대상 스크롤 뷰
    *   `_templateAsset`: 아이템 UI 템플릿 (uxml)
    *   `_dataList`: 표시할 데이터 리스트
    *   `_onItemUpdate`: 아이템 UI 갱신 콜백 (데이터 바인딩 로직)

### 3.2 스크롤 처리 로직 (`OnScrollValueChanged`)
스크롤 위치가 변경될 때마다 호출되어 아이템 재배치 여부를 판단합니다.
1.  **방향 감지:** 스크롤이 위(`Up`)로 가는지 아래(`Down`)로 가는지 판단합니다.
2.  **이벤트 큐 처리:** `scrollEventQueue`에 방향을 저장하고 `ProcessScrollQueue`에서 순차적으로 처리합니다.
3.  **아이템 이동 (`CheckScrollPosition`):**
    *   **Down:** 상단에 안 보이는 아이템을 하단으로 이동시키고 새 데이터로 갱신합니다.
    *   **Up:** 하단에 안 보이는 아이템을 상단으로 이동시키고 이전 데이터로 갱신합니다.
    *   **Fast Scroll:** 스크롤 속도가 빠르면 여러 개를 한 번에 건너뛰거나, 아예 현재 위치에 맞춰 전체를 재배치(`RepositionElements`)합니다.

### 3.3 데이터 조작 기능
런타임에 데이터가 변경되었을 때 스크롤 상태를 유지하며 UI를 갱신하는 메서드들입니다.
*   `AddData` / `AddDataRange`: 데이터 추가
*   `RemoveData` / `RemoveDataRange`: 데이터 삭제
*   `InsertData`: 중간 삽입
*   `UpdateSingleData`: 특정 아이템 갱신
*   `ReplaceAllDataKeepingVisualElements`: UI 요소는 유지한 채 데이터만 전면 교체 (필터링 등에 유용)

---

## 4. 사용 예시 (Usage)

```csharp
// 1. 매니저 생성
var scrollManager = MKCommon.CreateInfiniteScrollManager<MyData>(
    myScrollView,
    itemTemplate,
    dataList,
    (data, element) => {
        // UI 바인딩 로직
        element.Q<Label>("title").text = data.title;
    }
);

// 2. 특정 위치로 이동
scrollManager.ScrollToIndex(50);

// 3. 데이터 추가
scrollManager.AddData(new MyData("New Item"));

// 4. 해제 (필수)
scrollManager.Dispose();
```

---

## 5. 코드 리뷰 및 개선 제안

### 5.1 장점
*   **성능 최적화:** `POOL_SIZE`를 FPS에 따라 조절하고, `schedule.Execute`를 활용해 부하를 분산시키는 등 최적화에 신경 쓴 흔적이 보입니다.
*   **유연성:** 다양한 생성자 오버로딩과 데이터 조작 메서드를 제공하여 범용적으로 사용 가능합니다.
*   **안전장치:** 빠른 스크롤 시 인덱스가 꼬이는 것을 방지하기 위한 `RepositionElements` 로직이 구현되어 있습니다.

### 5.2 개선 제안
1.  **복잡한 상태 관리:** `isTrigger`, `enableSingleItemMovement`, `isAtDataStart`, `isAtDataEnd` 등 상태 플래그가 많아 로직 흐름을 파악하기 어렵습니다. 상태 머신(State Machine) 패턴을 도입하면 관리가 더 수월할 수 있습니다.
2.  **매직 넘버:** `FAST_SCROLL_THRESHOLD = 500f`, `TRIGGER_ITEM_COUNT = 3` 등의 상수가 하드코딩되어 있습니다. 외부에서 설정 가능하도록 옵션 클래스로 분리하는 것이 좋습니다.
3.  **GroupBox 지원:** `GroupBoxInfiniteScrollManager` 클래스가 하단에 정의되어 있으나 구현이 비어있거나(`CalculateTriggerOffset` 등) 미완성 상태로 보입니다. 사용 시 주의가 필요합니다.


