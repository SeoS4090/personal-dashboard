---
tags: [unity, EventPass, checklist]
up: "[[00 EventPass 허브]]"
---

# 신규 EventPass(형) 화면 — 수정·필요 요인 체크리스트

“새로운 패스 UI/이벤트”를 붙일 때 **반드시** 거치는 단계다. [[EventPass 제약사항 및 필수 요소]] 와 [[EventPass UI 구조]] 를 전제로 한다.

---

## A. 기획·데이터 (서버/테이블)

- [ ] **패스 종류 결정**  
  - **시즌 패스** (`SEASON_EVENT_TYPE.PASS`): `seasonPass`, `seasonPassLevel`, `seasonReward`, 유저 `seasonPassSlots` + `Request_RewardPass`.  
  - **이벤트(배틀) 패스**: `eventPass`, `eventPassLevel`, `eventPassReward`, `battlePassList` + `RequestBattlePassReward` / `RequestBattlePassLevelUp`.
- [ ] **이벤트 ID** (배틀) 또는 **시즌 이벤트 ID** (시즌) 고정.
- [ ] **트랙(등급) 수**  
  - 시즌: 현재 코드는 **3트랙 고정** — 늘리면 `EventPass.SetLevelList`(시즌), `SeasonPass.UpdateState`, `PASS_GRADE`, UXML 그룹을 같이 수정.  
  - 배틀: **`pkg_idx_arr` 길이** 와 UXML **`track-item` / `*-track` 개수**·`SetTracks` 리스트 길이 일치.
- [ ] **레벨 테이블** — `start_point` 단조, `GetLevels()` / `FindLast` 가정 만족.
- [ ] **배틀** `reward_key_arr` 인덱스 = 등급, **`min_day`** 가 `GetRewards` 에 필요하면 슬롯에 값 존재.
- [ ] **패스 포인트 설명** 쓸 경우 `pass_point_id` + `InfoitemPopup` 용 테이블 연동.

---

## B. UXML / VisualTreeAsset

- [ ] 패스 **페이지 루트**에 [[EventPass UI 구조]] 의 **이름** 맞춤: `scroll`, `level-list`, `progress`, `point-value`, `level`, 트랙 행, `button-levelup`, `button-how-get`, (선택) `end-reward-item`.
- [ ] **트랙 순서**: 첫 요소 = **무료** (`pkgIdx` 0), 이후 유료 순서 = **`grade` 1,2,…** 와 동일.
- [ ] **리스트 행 템플릿** (`VisualTreeAsset`): `EventPassListItem` 규약 — `level-reward-item`, `reward-level`, `point-arrow`, 등급 그룹 이름들, `reward` / `lock` / `get` / `red-dot` / `greypanel`, `end-item`.
- [ ] **배틀 전용** 요소: `title`, `bg`, `panel`, `main-reward` (`PageBattlePass`).
- [ ] **스크롤 마지막 칸 가변**이면 `Init(..., isChangeLastItem: true)` + 가로 스크롤·레이아웃 검증.

---

## C. C# 페이지 클래스

### 옵션 1 — `EventPass` 상속 (배틀 패턴)

- [ ] `Init(pageRoot, listItem, additionalUpdate?)` 에서 **`base.Init(pageRoot, callback, isLastItem)`** 호출 순서·루트 쿼리 충돌 없게 구성.
- [ ] `SetTracks` 용 **용어 키·아이콘 키·`pkg_idx`** 리스트 빌드.
- [ ] `SetLevelList` + **`min_day`** (배틀).
- [ ] 레벨업 쓰면 **`SetLevelBuySystem`** + 서버 **`ReqLevelUp`** 구현.
- [ ] **`UpdateLvPointText` / `UpdateState`** 를 슬롯 데이터에 맞게 호출하는 **갱신 함수** 하나로 통일 (예: `UpdateBattlePass`).
- [ ] 보상 요청: **`GainEffect`** 후 네트워크, 응답에서 갱신 함수 재호출.

### 옵션 2 — 합성 (`SeasonPass` 패턴)

- [ ] `EventPass pass = new();` — **`OnEnable`/`Awake`** 에서 `pass.Init(root, RefreshCallback, isChangeLastItem)`.
- [ ] `SetData` 에서 테이블만, `UpdateScreen` 에서 슬롯만 분리해 호출 순서 명확히.
- [ ] 시즌 보상 API: **`Request_RewardPass`** 및 `GetCurrentSlot`.

---

## D. 네트워크·유저 모델

- [ ] 슬롯이 **`battlePassList`** / **`seasonPassSlots`** 중 어디에 쌓이는지 확인 후 Find 키 (`event_id`, 필요 시 `season_id`).
- [ ] 응답 처리에서 **`UpdateBattlePassSlots`** / 시즌 슬롯 갱신이 기존 패턴과 동일한지.
- [ ] 배틀 보상 API 파라미터: **`trackNo = grade + 1`** (`ReqPassReward`) — 서버 스펙과 일치 검증.

---

## E. 패키지·프로모션

- [ ] 유료 탭 클릭 시 **`PackageManager.ShowPackagePopup(SINGLE, pkgIdx, onUpdate)`** 로 이어지는 **`pkg_idx`** 가 `SetTracks` 와 동일 순서.
- [ ] **`onUpdate` / `Callback`** 으로 패키지 구매 후 **`UpdateState`** 가 돌아가게 연결.

---

## F. 풀·프리팹·기타 오브젝트

- [ ] `PassLevelUpPopup`, `InfoItemPopup` 풀 등록.
- [ ] 레벨업 팝업에 **`UIDocument`**, `SelectValueSetting` 이 기대하는 루트 구조.
- [ ] `ScrollTo` 사용 시 **`CommonDocManager.instance.mainHud`** 존재.

---

## G. 로컬라이제이션·리소스

- [ ] 트랙명 `MKTerm` 키 (시즌: `season_event_track_*_{eventID}`, 배틀: `text_freepass` 등).
- [ ] `MKSpriteAtlasManager` 배너·아이콘 키 (`PageBattlePass` 의 `bg_url`, `final_reward_img` 등).

---

## H. QA 시나리오 (최소)

- [ ] 무료만: 트랙 잠금·보상 수령·`GainEffect` 소량/대량 분기.
- [ ] 유료 1단계씩 해제: `toast_pass_first` 없이 순차 구매.
- [ ] 건너뛰기 클릭: 토스트.
- [ ] 만렙·만포인트: 진행바·레벨업 버튼 비활성 조건.
- [ ] `isLastItemChangeScroll` 켠 화면: 스크롤 후 마지막 칸 레벨·수령 상태.

---

## I. 코드 수정이 불가피한 경우 (요약)

| 변경 내용 | 건드릴 곳 |
|-----------|-----------|
| 시즌 트랙 4개+ | `EventPass.SetLevelList`(시즌 루프), `PASS_GRADE`·슬롯 필드, UXML 그룹, `UpdateState` 인자 |
| 배틀 트랙 이름/아이콘 규칙 | `PageBattlePass.SetPageBattlePass` 의 `trackNames`/`imgNames` |
| 동적 `recievedLvs` 길이 | `EventPassListItem.SetRewardState` 폴백 로직·호출부 배열 |
| 스크롤 미리보기 레벨 간격 | `UpdateScrollLastItem` 의 `10` 및 width `-70` |

---

관련: [[00 EventPass 허브]], [[EventPass 코어]], [[PageBattlePass]], [[SeasonPass]]
