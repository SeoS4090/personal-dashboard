---
tags: [unity, EventPass, UI, UXML]
up: "[[00 EventPass 허브]]"
---

# EventPass UI 구조 (상세)

UIToolkit 기준. 실제 `.uxml` 일부는 리포지토리에 없을 수 있으나, **코드가 요구하는 이름**은 아래와 같다. (주석 참고: `Benefit_EventPass.uxml`, `Promotion_Content_Pass.uxml`, `SeasonPassListItem.uxml` 등)

---

## 1. 패스 페이지 루트 (`EventPass.Bind` → `pageRoot`)

`EventPass.cs` 의 `root.Q` / `Query` 이름이다.

### 스크롤·진행·레벨 텍스트

| 이름 | 타입 | 용도 |
|------|------|------|
| `scroll` | `ScrollViewPro` | 가로 레벨 리스트 스크롤, `ScrollTo`, `ChangeEvent<float>` 로 마지막 슬롯 갱신 |
| `progress` | `VisualElement` | `style.width = Length.Percent(100 * progRate)` |
| `end-reward-item` | `VisualElement` | 있으면 **마지막 레벨 전용 슬롯** → `EventPassListItem(..., isLastLevel: true)` |
| `level-list` | `VisualElement` | `listItem.Instantiate()` 자식 추가 컨테이너 |
| `point-value` | `Label` | 포인트 또는 `point / maxPoint` |
| `level` | `Label` | 현재 패스 레벨 표시 |

### 트랙(등급) 헤더

1. **`track-item`** — `root.Query("track-item").ToList()` 로 **순서대로** 수집.
2. 이어서 (있으면 추가):  
   - `normal-track`  
   - `premium-track`  
   - `super-premium-track`  

**인덱스 규칙**: `trackElements[0]` = 무료 (클릭 구매 없음). `i >= 1` 에 `OnClickBuyPremium` 등록 시 **콜백의 `grade` = `i`**.

각 트랙 행:

- **`Q<Label>()`** (첫 라벨): 트랙 제목 (`SetTracks` 에서 `MKTerm`).
- **`Q("icon")`**: 아이콘 — `img` 있으면 `MKSpriteAtlasManager.GetUI_BG`.
- **`Q("lock")`**: 미구매 시 표시 (`SetTrackLock`).
- 아이콘에 USS 클래스 **`lock`**: 잠금 시 `AddToClassList`.

### 버튼

| 이름 | 타입 | 용도 |
|------|------|------|
| `button-levelup` | `VisualElement` | 레벨업 팝업 (`ShowLevelUpPopup`) |
| `button-how-get` | `Button` | 패스 포인트 획득 안내 — 텍스트 키 `text_pass_howtoget` |

---

## 2. 레벨 한 줄 (`VisualTreeAsset` → `EventPassListItem`)

생성자에서 **`item` 은 템플릿 루트**이고, 스크롤 타겟 등은 내부 자식을 참조한다.

| 이름 | 용도 |
|------|------|
| `level-reward-item` | `element` — 스크롤 `ScrollTo` 등에 사용되는 주요 행 루트 |
| `reward-level` | `lblLv` — `Lv.{n}` |
| `point-arrow` | 내부 `Label` 에 `startPt` 표시 |
| `end-item` | `lastItemBlank` — 스크롤 **맨 끝 여백**; 마지막 스크롤 행에서만 `Flex` |

### 등급별 보상 그룹

`GroupElementNames` 순서로 **이름이 겹치는 모든 요소**를 쿼리:

`reward-group`, `normal`, `premium`, `super-premium`

각 그룹 안:

- **`reward`** — 복수. 각각 `MKCommon.SetSimpleItemUxml`, `userData` = 아이템 ID.
- **`select-btn`** — 있으면 `userData` 동기화.
- **`lock`**, **`get`**, **`red-dot`**, **`greypanel`** — `UpdateRewardState` / `SetRewardState` 에서 수령 가능·잠금·수령 완료 표시.

행 전체 USS: **`on` / `off`** — 현재 레벨 도달 여부 (`curLv >= Level`).

클릭: `reward` 에 `OnClickRewardItem` — 수령 가능 시 `CallBackGetReward(grade, Level)`, 아니면 툴팁.

---

## 3. 레벨업 팝업 (`PassLevelUpPopup` + `UIDocument`)

`BindLevelUpPopup` 기준:

| 이름 | 용도 |
|------|------|
| `title` | `popup_purchaselevel` |
| `rewards` | 그룹 내 첫 `Label` → `get_reward_text` |
| `close`, `button-cancel` | `HideLevelUpPopup` → `PoolsManager.Despawn` |
| `button-buy` | `OnClickReqLevelUp` — `MKCommon.CheckUseGem` |
| `cost-value`, `text-lv-before` | 비용·이전 레벨 표시 |
| 루트의 **`ScrollViewPro`** (이름 미지정 시 첫 매치) | `scrollLevelUpRewards` — 예상 보상 아이콘 리스트 |

`SelectValueSetting(root)` — 별도 템플릿 규약(레벨 선택 UI).

---

## 4. 배틀 패스 전용 (`PageBattlePass`)

| 이름 | 용도 |
|------|------|
| `title` | 이벤트 제목 (인자 또는 `BenefitUi.GetEventTitle`) |
| `bg`, `panel` | 배경·프레임 — `eventMain.Visual` 또는 폴백 스프라이트 키 |
| `main-reward` | 최종 보상 아이콘 클릭 → `final_reward_guide_type` 에 따라 툴팁 |

---

## 5. 계층 관계 (요약 다이어그램)

```mermaid
flowchart TB
  R[pageRoot UXML]
  R --> scroll
  R --> level-list
  R --> end-reward-item
  R --> track-row[track-item / *-track]
  scroll --> LI[listItem × N]
  level-list --> LI
  LI --> level-reward-item
  level-reward-item --> reward-groups[normal / premium / ...]
  reward-groups --> reward-icons[reward × M]
```

---

## 6. 풀·프리팹 이름 (런타임)

| 풀 키 | 컴포넌트 |
|--------|-----------|
| `PassLevelUpPopup` | `PassLevelUpPopup` |
| `InfoItemPopup` | `InfoitemPopup` |

---

관련: [[EventPass 데이터 흐름]], [[EventPass 제약사항 및 필수 요소]], [[EventPass 신규 생성 체크리스트]]
