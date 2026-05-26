---
tags:
  - analysis
  - system/ui
aliases:
  - SVS 전야제 이벤트 시스템
  - SVS Eve Event 시스템 분석
description: SVS_Event_viewer(파사드), SVS_Eve_Preview(예고 카테고리 1003), SVS_Event_Eve(전야제 카테고리 1004) 세 클래스의 역할 분리·데이터 흐름·잠재 버그 분석
status: done
created: 2026-05-22
updated: 2026-05-22
---

← [[UI_MOC]]

# SVS 전야제 이벤트 시스템 분석

## 요약

### 무슨 문제였나?
분석 목적 문서 — 버그 아닌 구조 파악이다. SVS(서버 vs 서버) 전야제와 관련된 UI가 세 클래스로 나뉘어 있는데, 각각의 역할 경계와 데이터 흐름이 코드만 봐서는 바로 파악되지 않는 상태였다. 추가로 `.First()` 예외 위험과 이벤트 ID 미전달 문제가 발견되었다.

### 어떻게 고쳤나?
세 클래스의 역할을 분석하여 문서화했다:

| 클래스 | 역할 | 카테고리 |
|--------|------|----------|
| `SVS_Event_viewer` | 진입점 파사드 + 에디터 테스트 버튼 | - |
| `SVS_Eve_Preview` | SVS 전야제 **예고** 팝업, 카운트다운 | 1003 |
| `SVS_Event_Eve` | SVS **전야제** 본 이벤트, DAY 탭·랭킹 | 1004 |

### 현재 상태는?
- ✅ 구조 분석 완료
- ⚠️ `Event_Eve_Datas.First()` InvalidOperationException 잠재 위험 — 미수정
- ⚠️ `OpenSVS_Event_Eve`의 `eventID` 파라미터 미전달 — 의도 여부 확인 필요

> **한 줄 요약**: "세 클래스가 진입점·예고·본이벤트를 분리하나, First() 예외 위험과 eventID 미전달 버그 가능성이 존재한다."

---

## 1. 클래스 구조 개요

```
SVS_Event_viewer (Singleton, 파사드)
   ├─ SVS_Eve_Preview   (category 1003 — 전야제 예고)
   └─ SVS_Event_Eve     (category 1004 — 전야제 본 이벤트)
           │
           └─ EventUi (상속 — Achievement 오버로드, 랭킹 처리)
```

세 클래스는 `[SerializeField]` 참조(`SVS_Event_viewer`)로 연결된다. `SVS_Event_viewer`가 외부(씬)의 유일한 진입점이다.

---

## 2. SVS_Event_viewer — 파사드 + 에디터 Inspector

**파일**: `Assets/Scripts/SVS/SVS_Event_viewer.cs`

### 주요 책임

| 메서드 | 동작 |
|--------|------|
| `OpenSVS_Eve_Preview(long eventID)` | `svsEvePreview.Open(eventID)` 호출 — eventID 정상 전달 |
| `OpenSVS_Event_Eve(long eventID)` | `svsEventEve.gameObject.SetActive(true)` — **eventID 미전달** |
| `ShowRankingRewardPopup(long eventID)` | `MKCommon.ShowRankingRewardPopup` 위임 |
| `ShowRankingPopup(long eventID)` | `MKCommon.ShowRankingPopup` 위임 |

### 잠재 버그 — eventID 미전달

```csharp
// SVS_Event_viewer.cs:22
public void OpenSVS_Event_Eve(long eventID)
{
    svsEventEve.gameObject.SetActive(true);  // eventID 파라미터가 사용되지 않음
}
```

`SVS_Event_Eve`는 `OnEnable()`에서 `MKGameDataModel`로부터 직접 데이터를 조회하므로 현재는 문제없이 동작할 수 있다. 그러나 동일 씬에 여러 이벤트 ID가 공존할 경우 eventID를 전달해야 할 수 있다 — 의도 여부 확인 필요.

### Editor Inspector 버튼

`SVS_Event_viewer_Inspector`(`#if UNITY_EDITOR`)가 같은 파일 내에 정의되어 있어 에디터에서 버튼으로 각 UI를 직접 열 수 있다. 테스트 eventID는 하드코딩 `1003001`.

---

## 3. SVS_Eve_Preview — 전야제 예고 팝업 (category 1003)

**파일**: `Assets/Scripts/SVS/SVS_Eve_Preview.cs`
**UXML**: `SVS_Eve_Preview.uxml`

### 주요 책임

- 전야제 시작 전 예고 화면 표시
- 4일 구성(`day-0` ~ `day-3`) 각각의 탭 이름·설명을 로컬라이즈 키로 바인딩
- 남은 시간 카운트다운 (DOTween)
- 보상 미리보기 버튼 → `ShowRankingRewardPopup`

### 데이터 조회 방식

```csharp
// OnEnable — event_category == 1003로 데이터 검색 (eventID 미사용)
var SVS_PreviewEvent = MKGameDataModel.instance.eventPlan
    .SVSInner_NowDatas()
    .Find(x => x.MainData.event_category == 1003);
```

`Open(long _eventID)`로 전달된 `eventID`는 로컬라이즈 키 생성(`event_title_{eventID}`, `event_desc_{eventID}`)에만 사용된다. 실제 이벤트 데이터 검색은 `event_category == 1003`으로 고정되어 있다.

### DOTween 카운트다운

```csharp
DOTween.To(() => remain_time, x =>
{
    remain_time = x;
    rootVisualElement.Q<Label>("remain-time").text = ...;
}, 0, remain_time).SetEase(Ease.Linear)
    .OnComplete(() => Close())
    .target = this;
```

- `.target = this`로 DOTween target을 설정하여 `OnDisable` 시 `Kill`이 가능하다.
- 단, `OnDisable`에서 `DOTween.Kill(this)` 호출이 **명시되어 있지 않다** — `callbackManager.UnregisterAll()`만 있음. 씬 비활성화 시 DOTween이 남아있을 수 있다.

### 내부 클래스 DayData

생성자에서 UXML 바인딩 + 로컬라이즈 텍스트 삽입을 한 번에 처리하는 간단한 구조. 4개 인스턴스를 루프로 생성한다.

---

## 4. SVS_Event_Eve — 전야제 본 이벤트 (category 1004)

**파일**: `Assets/Scripts/SVS/SVS_Event_Eve.cs`
**UXML**: `SVS_Event_Eve.uxml`
**상속**: `EventUi`

### 주요 책임

- 카테고리 1004 이벤트 데이터 로드 (DAY_1 ~ DAY_4)
- DAY 탭 전환 + 각 탭의 남은 시간 카운트다운
- 내 랭킹 / 서버 상위 4위 표시
- Achievement 처리는 부모 `EventUi`의 `SetAchievement` 위임

### 데이터 흐름

```
OnEnable
  └─ MKGameDataModel → SVSInner_AllDatas() (category 1004 필터, start_day 정렬)
  └─ MKUserDataModel → myEventUserRanking, eventUserRankings
  └─ 시작된 첫 DAY 탭 자동 선택 (startDateTime <= 현재)

RefreshDayTab(sub_eventID)
  └─ 남은 시간 계산 → DOTween 카운트다운
  └─ DAY 탭 on/locker 표시 전환
  └─ EventUi.SetAchievement → Achievement 슬롯 렌더링
```

### 잠재 버그 — `.First()` 예외 위험

```csharp
// SVS_Event_Eve.cs:36 — Event_Eve_Datas가 비어 있으면 InvalidOperationException
main_eventID = Event_Eve_Datas.First().MainData.main_event_id;

// SVS_Event_Eve.cs:120,129 — sub_eventID 불일치 시 예외
Event_Eve_Datas.First(x => x.event_id == sub_eventID).startDateTime ...
```

데이터가 없거나 `sub_eventID`가 리스트에 없으면 런타임 예외가 발생한다. `FirstOrDefault()` + null 가드로 방어해야 한다.

### `new` 키워드로 OnEnable 숨김

```csharp
new private void OnEnable()  // 부모 EventUi.OnEnable() 숨김
```

`new` 키워드는 다형성이 아닌 이름 숨기기다. `SVS_Event_Eve`가 부모 타입 변수에 담겨 있으면 부모의 `OnEnable`이 호출된다. 현재 코드에서는 `SVS_Event_viewer`가 직접 자식 타입으로 참조하므로 문제없으나, 향후 타입 추상화 시 주의 필요.

### DOTween Kill 패턴

`OnEnable` 최상단과 `OnClickCloseBtn`에서 `DOTween.Kill(this)`를 호출해 카운트다운이 중복 실행되지 않도록 관리한다. 이 부분은 올바르게 구현됨.

---

## 5. 의존성 관계

```
SVS_Event_viewer
  ├─ SVS_Eve_Preview
  │    ├─ MKGameDataModel.eventPlan.SVSInner_NowDatas()
  │    ├─ MKHttp.instance.GetCurUtcDateTime()
  │    ├─ MKTerm.Instance.GetTerm()
  │    └─ MKCommon.ShowRankingRewardPopup()
  └─ SVS_Event_Eve (EventUi)
       ├─ MKGameDataModel.eventPlan.SVSInner_AllDatas()
       ├─ MKUserDataModel.myEventUserRanking / eventUserRankings
       ├─ MKHttp.instance.GetCurUtcDateTime()
       ├─ MKTerm.Instance.GetTerm()
       └─ EventUi.SetAchievement() / ShowRankingPopup()
```

---

## 6. 문제점 및 개선 제안

| 우선순위 | 위치 | 문제 | 제안 |
|----------|------|------|------|
| 높음 | `SVS_Event_Eve.cs:36,120,129` | `.First()` — 빈 리스트·불일치 시 예외 | `FirstOrDefault()` + null 가드 추가 |
| 중간 | `SVS_Event_viewer.cs:22` | `OpenSVS_Event_Eve`에서 `eventID` 미전달 | 의도 확인 후 `svsEventEve.Open(eventID)` 패턴 적용 |
| 낮음 | `SVS_Eve_Preview.cs` | `OnDisable`에서 `DOTween.Kill(this)` 누락 | `OnDisable`에 `DOTween.Kill(this)` 추가 |
| 낮음 | `SVS_Event_Eve.cs:22` | `new private void OnEnable()` 이름 숨기기 | 의도적이라면 주석으로 명시, 아니면 `override` 검토 |

---

## 연관 문서

- [[EventUi_Achievement_System_Analysis]] — `EventUi` 상속 구조, Achievement 오버로드 패턴 (SVS_Event_Eve 상속 구조 공유)
- [[SVS_Eve_RankingRewardPopup_Analysis]] — SVS 전야제 랭킹 보상 팝업 상세 (SVS_Event_Eve에서 보상 팝업 호출)
