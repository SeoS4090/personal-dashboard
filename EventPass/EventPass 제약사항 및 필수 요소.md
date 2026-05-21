---
tags: [unity, EventPass, constraints]
up: "[[00 EventPass 허브]]"
---

# EventPass 제약사항 및 필수 요소

코드 주석·분기·인덱스 규칙을 기준으로 정리했다.

---

## 1. 트랙 인덱스와 구매 로직

- **`trackElements[0]`** 은 **무료 트랙** — `OnClickBuyPremium` 을 **등록하지 않음** (`for (i = 1; i < trackElements.Count; i++)`).
- 유료 트랙의 **`grade` = 리스트 인덱스 `i`** (1부터).
- **`SetTracks`**: `tracks[i].pkgIdx != 0` 인 것만 **`pkgIDxs`** 에 순서대로 추가.  
  → **`OnClickBuyPremium`** 에서 `pkgIDxs[(int)grade - 1]` 사용. **트랙 개수·순서와 `pkg_idx_arr` 순서가 맞아야** 한다.
- **순차 해제만 허용**: `lastOpenPass + 1 < grade` 이면 토스트 `toast_pass_first` 후 return.
- **`lastOpenPass >= grade`** 이면 이미 구매로 간주해 무시.

배틀 패스의 “열린 등급”은 **`pay_premiums`** 배열 해석 (`PageBattlePass.UpdateBattlePass`) — 서버/기획과 **`UpdateState` 의 첫 인자 `openGrade`** 가 의미상 일치해야 한다.

---

## 2. 시즌 패스: 등급(트랙) 개수 고정 가정

```csharp
// EventPass.cs @TODO 3개 고정이 아닐때 수정 필요
for (int i = 0; i <= (int)PASS_GRADE.SUPER_PREMIUM; i++)
    data.SetRewards(i, seasonReward.GetRewards(x.GetRewardID((PASS_GRADE)i)));
```

- 시즌 `SetLevelList` 는 **`NORMAL` ~ `SUPER_PREMIUM` (3등급)** 만 채운다.
- UXML 쪽 **`EventPassListItem.GroupElementNames`** 도 동일하게 `normal`, `premium`, `super-premium` 등 **이름 기반 그룹**을 전제로 한다.
- **4트랙 이상 시즌** 을 넣으려면 이 루프·그룹 이름·`UpdateState` 의 `reward_level_*` 인자 개수를 함께 바꿔야 한다.

이벤트(배틀) 패스 쪽은 **`reward_key_arr.Count`** 만큼 동적 루프라 등급 개수가 가변적이다.

---

## 3. `UpdateState` 와 `recievedLvs` 배열

`EventPassListItem.UpdateRewardState` → `SetRewardState(rewardGroups[i], reveivedLvs.Length > i ? reveivedLvs[i] : i)`:

- **등급 인덱스 `i`** 에 대해 “해당 등급에서 마지막으로 받은 레벨”을 넘겨야 한다.
- 배열이 짧으면 **폴백값이 `i` (인덱스)** 로 들어가므로, **의도하지 않은 UI 상태**가 될 수 있다.  
  → **배틀**: `free_level` + `premium_levels` 전체를 순서대로 넘기는 현재 패턴을 유지할 것.  
  → **시즌**: `reward_level_0,1,2` 고정 3개.

---

## 4. 마지막 레벨 UI (`lastLevelElement`)

- **`end-reward-item` 가 있으면**: 스크롤 안에는 **레벨 `1 .. N-1`** 만 넣고, **최종 레벨 N** 은 `lastLevelItem` 이 담당.
- **`isLastItemChangeScroll == true`**: `SetLevelList` 시 `lastLevelItem` 에는 **`SetData` 를 호출하지 않고** 콜백만 연결 — 실제 데이터는 **`UpdateScrollLastItem`** 이 스크롤에 맞춰 채움.
- 이 모드에서는 **`scroll.horizontalScroller`**, **`isLoadEnd`**, **`passLevels`** 가 준비된 뒤에야 미리보기가 갱신된다.

---

## 5. 스크롤·코루틴 필수 환경

- **`ScrollTo`**: `CommonDocManager.instance.mainHud` 에서 코루틴 실행 — **`mainHud` null 이면 실패**.
- **`scroll`**, **`groupLevel`** null 이면 리스트·`RefreshAfterHierarchyChange` 문제 발생.
- `UpdateScrollLastItem` 은 **가로 스크롤**·`contentRect`·**매직 넘버 70 / 10레벨 단위** 에 의존 — 레이아웃 크게 바꾸면 미리보기 레벨이 어긋날 수 있음.

---

## 6. 레벨업 구매

- **`ShowLevelUpPopup`**: `costPoint <= 0` 이면 로그만 찍고 return — 반드시 **`SetLevelBuySystem(point_price, reqBuyLevelUp)`** 선행.
- **`maxLev <= curLev`** 이면 팝업 없음.
- 풀 **`PassLevelUpPopup`** 프리팹에 **`PassLevelUpPopup`** + **`UIDocument`** 필요.

---

## 7. 포인트 안내 버튼

- **`button-how-get`** 이 있으면 `pointID` 로 `InfoitemPopup.OpenPassPoint` 호출.
- 이벤트 패스 `SetLevelList(MKEventPassLevelBaseDTO)` 를 탄 경우에만 `GetEventData` 로 **`pointID`** 가 채워짐.  
  시즌 전용 화면에서만 쓰면 **0** 일 수 있음 — 그때도 버튼이 있으면 동작은 하지만 데이터 의미를 확인할 것.

---

## 8. 이벤트 콜백 1회 등록 (`isRegisteEvent`)

- `Bind` 는 **`isRegisteEvent`** 가 true 가 되면 **콜백 재등록을 건너뜀**.  
  → **같은 `EventPass` 인스턴스로 다른 `pageRoot` 를 바인딩**하면 이전 루트에 리스너가 남는 문제가 생길 수 있다. 일반적으로 **페이지당 인스턴스 1개** 또는 `Release` 후 재생성 패턴을 권장.

---

## 9. `GainEffect` 임계값

- **무료 등급 `grade == 0`**: 한 번에 **5레벨** 초과 차이면 팝업 연출.
- **유료 등급**: **`SHOW_REWARD_LEV_COUNT` (2)** 레벨 초과 차이면 팝업.
- `lastLevelItem` 과 스크롤 행의 인덱스 매핑 주의 (`i + 1 == lastLevelItem.Level` 분기).

---

## 10. 외부 의존 (누락 시 런타임 오류)

- `MKTerm`, `MKCommon`, `MKSpriteAtlasManager`
- `PackageManager` (유료 트랙 탭)
- `PoolsManager` (레벨업·인포 팝업)
- `CommonDocManager.instance.mainHud` (스크롤 코루틴·`OpenRewardResult`)
- `ScrollViewPro` 패키지 (`Kamgam.UIToolkitScrollViewPro`)

---

관련: [[EventPass 데이터 흐름]], [[EventPass UI 구조]], [[EventPass 신규 생성 체크리스트]]
