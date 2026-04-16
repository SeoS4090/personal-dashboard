# Ally_war_rally.TroopData 클래스 분석 보고서

## 1. 개요
`Ally_war_rally.TroopData` 클래스는 연맹 전쟁 집결 UI 리스트 아이템 내에서 **부대(병력) 구성 정보를 시각적으로 표시**하는 뷰 헬퍼(View Helper) 클래스입니다.
최대 6개의 병력 슬롯을 관리하며, 각 슬롯에 병종 이미지와 수량을 표시합니다.

## 2. 주요 구성 요소

### 2.1 UI 요소 관리
```csharp
List<(VisualElement, Label)> Army = new List<(VisualElement, Label)>();
VisualElement panel;
```
*   **구조:** `VisualElement`(이미지)와 `Label`(수량)을 튜플`(Item1, Item2)`로 묶어 리스트로 관리합니다.
*   **초기화:** 생성자에서 `troop-1` ~ `troop-6`까지 반복문을 돌며 UI 요소를 찾아 리스트에 추가합니다.
    *   `troop-img-1`: 병종 이미지
    *   `troop-num-1`: 병력 수량 텍스트

---

## 3. 핵심 기능 분석

### 3.1 데이터 바인딩 (`SetData`)
```csharp
public void SetData(Corps data)
```
*   **데이터 변환:** `Corps` 데이터 내부의 `div`(부대 정보 리스트)를 LINQ를 사용하여 `(id, num)` 형태의 익명 객체 리스트로 변환합니다.
*   **동적 표시:**
    *   데이터가 있는 슬롯: `display: flex`로 표시하고 이미지와 수량을 갱신합니다.
    *   데이터가 없는 슬롯: `display: none`으로 숨깁니다.
    *   병력 수(`num`)가 0보다 큰 경우에만 표시하도록 필터링합니다.

### 3.2 리소스 및 포맷팅
```csharp
// 이미지 설정
MKSpriteAtlasManager.Instance.GetUnit_BG(Army[i].Item1, units[i].Item1);

// 수량 텍스트 포맷팅
Army[i].Item2.text = MKCommon.NumberToString(units[i].Item2);
```
*   **이미지:** `MKSpriteAtlasManager`를 통해 유닛 ID에 맞는 이미지를 로드합니다.
*   **텍스트:** `MKCommon.NumberToString` 유틸리티를 사용하여 큰 숫자(예: 1000 -> 1k)를 보기 좋게 포맷팅합니다.

---

## 4. 코드 리뷰 및 개선 제안

### 4.1 장점
*   **반복 코드 제거:** 6개의 슬롯을 개별 변수가 아닌 리스트와 반복문으로 처리하여 코드가 간결하고 확장성이 좋습니다.
*   **유연한 UI:** 데이터 개수에 따라 UI 슬롯을 자동으로 숨기거나 보여주는 로직이 잘 구현되어 있습니다.

### 4.2 개선 제안
*   **LINQ 할당:** `SetData`가 호출될 때마다 `Select(...).ToList()`를 수행하여 새로운 리스트를 힙에 할당합니다. 스크롤 뷰처럼 자주 호출되는 곳에서는 GC(Garbage Collection) 부하가 발생할 수 있습니다. `for` 문으로 직접 접근하거나 미리 할당된 리스트를 재사용하는 방식으로 최적화가 가능합니다.
*   **하드코딩된 인덱스:** 생성자에서 `i <= 6`으로 6개 슬롯을 고정하고 있습니다. 만약 기획 변경으로 슬롯 수가 변한다면 코드를 수정해야 합니다. UI의 자식 개수를 기반으로 동적으로 리스트를 구성하는 방법도 고려해볼 수 있습니다.

---

## 5. 관련 장애 이력 (2026-03-25)

- 증상: `Update_DefenseItemOne` 집계(`Sum(x => x.GetCorps().Count())`) 중 `ArgumentNullException(value)`
- 직접 원인: `ally_def_memberSlot.GetCorps()`가 `corps == null`을 방어하지 못함
- 맥락 원인: `def_join` 푸시 기반 임시 데이터가 `reinforce_memberList`에 합쳐지는 동안 `corps` 누락 가능
- 대응 상세: [[Ally_war_rally_DefJoin_corps_Null_Incident_Analysis]]
