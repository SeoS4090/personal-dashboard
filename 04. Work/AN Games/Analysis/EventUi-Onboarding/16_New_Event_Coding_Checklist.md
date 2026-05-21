---
title: 신규 이벤트 추가 코딩 체크리스트
tags:
  - onboarding
  - event
  - checklist
  - coding
aliases:
  - New Event Checklist
---

# 신규 이벤트 추가 코딩 체크리스트

신규 이벤트 작업은 **두 경로** 중 하나로 진행됩니다.  
경로 선택이 작업량을 크게 좌우하므로 먼저 판단하고 시작하세요.

---

## 경로 판단

```
기획서의 event_category 값이 이미 MKConstant.EVENT_CATEGORY에 존재하는가?
  YES → 경로 A (기존 카테고리 재사용)
  NO  → 경로 B (신규 카테고리 추가)
```

[[05_Event_Category_Map]] 의 카테고리 표를 참조해 분류하세요.  
단, `WITH_HERO / PROMOTION / WISH_EVENT / BATTLE_PASS` 등 **EventUi 밖** 카테고리를 쓰는 경우 이 문서가 아니라 해당 UI 담당자와 협의가 필요합니다.

---

## 경로 A — 기존 카테고리 재사용

코드 수정 없이 GameData 테이블 세팅만으로 완료됩니다.

### A-1. GameData 테이블 세팅 (기획/서버 협의)

- [ ] `eventPlan` — 기간, 대상 서버, 생성 타입, 노출 타입 설정
- [ ] `eventMain` — `event_id`, `event_category`, `event_kind`, `event_menu`, `visual_group_id` 설정
- [ ] `eventVisualGroup` — `icon`, `bg_url`, `sub_banner_url`, `event_title_color` 설정
- [ ] `eventGoal` — 목표(`goal_id`), 조건, `rank_type` 설정
- [ ] `eventGoalReward` — 목표별 보상 설정
- [ ] 랭킹 이벤트인 경우 → `eventRankReward` (`min_rank` 단위 구간 설정)
- [ ] 교환형인 경우 → `eventTokenChange`
- [ ] 도전형인 경우 → `eventChallengeReward`

### A-2. 로컬라이징 키 확인

- [ ] `event_title_{event_kind}` — 탭 아이콘 아래 이름 + 페이지 타이틀
- [ ] `event_desc_l_{event_kind}` — 페이지 설명 문구
- [ ] `event_guide_{event_kind}` — 정보 페이지 안내문
- [ ] `event_menu_name_{event_menu}` — 탭 그룹 타이틀 (기존에 없는 `event_menu` 값을 쓸 때만 추가)

### A-3. 동작 확인

- [ ] 이벤트 탭이 노출되는가 (`eventPlan` 기간 + `UserModel.eventUser[event_id]` 슬롯 존재)
- [ ] 상세 페이지가 올바른 카테고리로 분기되는가
- [ ] 목표 수치/진행도가 맞는가
- [ ] 보상 수령 후 상태가 갱신되는가
- [ ] 랭킹 탭/버튼이 조건대로 노출되는가
- [ ] 타이머가 정상 동작하는가

---

## 경로 B — 신규 카테고리 추가

코드 수정이 **5개 파일**에 걸쳐 발생합니다. 아래 순서대로 진행하세요.

### B-0. 신규 카테고리 레이아웃 전략 결정

> [!tip]
> 기존 UXML을 재사용하면 리스크가 낮습니다. 완전히 다른 레이아웃이 필요한 경우에만 신규 UXML을 만드세요.

- [ ] 기존 UXML/페이지 함수 재사용 가능한지 확인 (`rankPageVta`, `achievementPageVta` 등)
- [ ] 불가능하면 신규 UXML 설계 후 UI 팀과 협의

---

### B-1. `MKConstant.cs` — EVENT_CATEGORY enum 추가

```
파일: Assets/World/Scripts/NetworkData/MKConstant.cs
위치: enum EVENT_CATEGORY { ... } 블록 내 적절한 그룹에 추가
```

```csharp
// [신규 카테고리 예시]
MY_NEW_CATEGORY = 1100,
```

- [ ] 기존 값과 중복되지 않는 번호 사용
- [ ] 관련 그룹(달성형/알림형/랭킹형 등) 근처에 배치해 가독성 유지

---

### B-2. `MKGameDataDTO.cs` — DTO 클래스 추가 (신규 테이블이 있을 때만)

```
파일: Assets/World/Scripts/NetworkData/MKGameDataDTO.cs
위치: 기존 MKEvent* 클래스 근처 (약 3932번 줄 이후)
```

기존 테이블을 그대로 쓴다면 이 단계는 건너뛰세요.  
신규 서버 테이블이 생기는 경우 아래 패턴으로 추가합니다.

```csharp
[System.Serializable]
public class MKEventMyNewBaseDTO
{
    public long event_id;
    public long goal_id;
    // ... 기획 테이블 컬럼
}

[System.Serializable]
public class MKEventMyNew : MKGameDataBaseDTO
{
    public List<MKEventMyNewBaseDTO> data;

    public MKEventMyNewBaseDTO GetData(long eventId)
        => data.Find(x => x.event_id.Equals(eventId));

    public List<MKEventMyNewBaseDTO> GetDatas(long eventId)
        => data.FindAll(x => x.event_id.Equals(eventId));
}
```

> [!note]
> 조회 성능이 중요하면 `MakeDictionaryData()` 오버라이드로 Dictionary 인덱스를 구성합니다.  
> `MKNpcResourceDTO.MakeDictionaryData()`의 3단 인덱스 패턴이 참고 예시입니다.

---

### B-3. `MKGameDataModel.cs` — 필드 선언 + key_list 추가

```
파일: Assets/World/Scripts/NetworkData/MKGameDataModel.cs
```

**① 필드 선언** (약 397번 줄 이벤트 헤더 근처)

```csharp
[Header("─────이벤트─────")]
// ...기존 필드들...
public MKEventMyNew eventMyNew = new(); // 신규 테이블 설명
```

**② key_list 추가** (약 1602번 줄 `// 이벤트` 블록 내)

```csharp
key_list.Add("eventMyNew");
```

> [!warning]
> `key_list`에 추가하지 않으면 서버에서 해당 테이블 데이터를 받아도 로드되지 않습니다.  
> 테이블명은 서버 테이블명과 **정확히** 일치해야 합니다(대소문자 포함).

**③ `IsEventUiGameData()` 범위 확인** (약 680번 줄)

```csharp
private static bool IsEventUiGameData(string tableName)
{
    return tableName.StartsWith("event", StringComparison.OrdinalIgnoreCase);
}
```

신규 테이블명이 `"event"`로 시작하면 자동으로 `OnEventGameDataUpdated` 대상에 포함됩니다.  
`"event"`로 시작하지 않는 이름을 쓴다면 이 함수에 조건을 직접 추가해야 합니다.

---

### B-4. `EventUi.cs` — VisualTreeAsset 필드 + RefreshEventPage 분기 추가

```
파일: Assets/Common Document/Scripts/EventUi.cs
```

**① VisualTreeAsset 필드** (약 500번 줄 Header 그룹 근처, 재사용이 아닌 경우만)

```csharp
[Header("[신규 카테고리명]")]
public VisualTreeAsset myNewPageVta;
```

**② RefreshEventPage() switch case 추가** (약 1367번 줄 switch 블록)

```csharp
case EVENT_CATEGORY.MY_NEW_CATEGORY:
    OpenMyNewPage(_isSkip);
    break;
```

---

### B-5. `EventUi.MyNew.cs` — 렌더링 함수 구현

```
파일: Assets/Common Document/Scripts/EventUi.MyNew.cs (신규 생성)
```

기존 partial 파일(`EventUi.Achievement.cs` 등)을 참고해 구조를 맞춥니다.

```csharp
public partial class EventUi : MonoBehaviour
{
    void OpenMyNewPage(bool _isSkip)
    {
        ClearPage();
        var slots = UserModel.eventUser[curEventID];
        if (slots == null || slots.Count == 0) { return; }

        var uxml = myNewPageVta.Instantiate();  // 재사용 시 기존 VTA 사용
        curEventPage = new EventPage(uxml, curEventMainData, _isSkip);
        contentsBox.Add(uxml);

        // ... 페이지 렌더링 로직
    }
}
```

공통으로 쓰이는 헬퍼:
- `SetInfo(page)` — Info 버튼 등록
- `SetCurPeriod(page)` — 현재 기간 텍스트
- `SetLeftPeriod(page)` — 남은 기간 텍스트
- `SetEndTimer(page)` — 종료 타이머 코루틴 시작

---

### B-6. `NetworkEvent.cs` — API 함수 + UpdateUserData 키 추가 (신규 API가 있을 때만)

```
파일: Assets/Network/Scripts/NetworkEvent.cs
```

기존 API를 재사용(`Request_EventInquiry`, `Request_EventRewardGet`)하면 이 단계는 생략합니다.

신규 API가 필요한 경우:

```csharp
// 요청
public void Request_MyNewEvent(long eventId, Action callback = null)
{
    // cc: 서버 커맨드 코드, rd: 요청 데이터
    NetworkManager.instance.Request(cc, rd, (response) =>
    {
        UpdateUserData(response.rd);
        callback?.Invoke();
    });
}
```

`UpdateUserData(rd)` 내 새 키 병합:

```csharp
if (rd.ContainsKey("my_new_slot"))
{
    // event_id 기준 그룹화 후 UserModel에 merge
}
```

---

### B-7. 로컬라이징 키

경로 A의 A-2 항목과 동일하게 처리합니다.

---

### B-8. 최종 검증 체크리스트

- [ ] `MKConstant.EVENT_CATEGORY` 값 중복 없음
- [ ] `key_list`에 테이블명 추가 완료
- [ ] `RefreshEventPage()` switch에 case 추가 완료
- [ ] 이벤트 탭이 정상 노출됨
- [ ] 페이지 진입 시 해당 `OpenMyNewPage()` 함수가 호출됨
- [ ] `Request_EventInquiry` 후 슬롯이 `UserModel.eventUser`에 병합됨
- [ ] 로컬라이징 키 4종 입력됨
- [ ] 종료/마감 타이머 동작 확인
- [ ] `eventMinorLimit` 등재 여부 기획 확인 (미성년자 제한 대상인지)
- [ ] `eventHidden` 사용 여부 기획 확인 (긴급 차단 필요 여부)

---

## 로컬라이징 키 4종 요약

| 키 형식 | 용도 | 비고 |
|--------|------|------|
| `event_title_{event_kind}` | 탭 이름 + 페이지 타이틀 | 필수 |
| `event_desc_l_{event_kind}` | 페이지 설명 문구 | 필수 |
| `event_guide_{event_kind}` | 정보 페이지 안내문 | 필수 |
| `event_menu_name_{event_menu}` | 탭 그룹 타이틀 | 새 menu 값 사용 시만 추가 |

---

## 연관 문서

- [[05_Event_Category_Map]] — 카테고리 번호/파일 전체 매핑
- [[03_MKGameData_EventSchema]] — key_list 및 테이블 구조
- [[02_NetworkEvent_DataFlow]] — UpdateUserData 병합 규칙
- [[15_SVS_Event_Implementation_Example]] — 실제 신규 이벤트 예시 (경로 A)
- [[01_EventUi_Architecture]] — OnEventGameDataUpdated 패턴
