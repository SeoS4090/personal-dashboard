---
tags: [unity, EventPass]
up: "[[00 EventPass 허브]]"
related_files:
  - "aa_client_lfs/Assets/Common Document/Scripts/EventPass.cs"
---

# EventPass (코어 클래스)

**파일:** `Assets/Common Document/Scripts/EventPass.cs`  
**역할:** 패스 공통 페이지 — UIToolkit `VisualElement` 트리에 바인딩, 트랙(무료/유료), 레벨 리스트, 진행도, 프리미엄 구매 클릭, 스크롤 기반 마지막 보상 미리보기(AWQA-3325), 보상 획득 연출.

## 중첩 타입

| 이름 | 설명 |
|------|------|
| `EventPassLevelRewardData` | 레벨별 `startPt`, `dicRewards`(등급→`RewardItemData` 리스트) |
| `PASS_TYPE` | `SEASON`, `BATTLE` (다른 스크립트에서 패키지 UI 분기용으로 참조) |
| `Track` | 트랙 표시용 `pkgIdx`, `trackTerm`, `img` |

## 직접 연결 (코드)

- 리스트 한 줄: [[EventPassListItem]] — `levelItems`, `lastLevelItem`, `SetData` / `UpdateRewardState` / `GainFx`
- 레벨업 팝업: [[PassLevelUpPopup]] — `PoolsManager.Spawn("PassLevelUpPopup")`, `Show(passLevels, ...)`
- 이벤트 패스 레벨 데이터: [[게임데이터 MKGameDataDTO]] — `SetLevelList(List<MKEventPassLevelBaseDTO>, ..., minDay)`
- 시즌 패스 레벨: 동일 노트 — `SetLevelList(List<MKSeasonPassLevelBaseDTO>, ...)` + `MKSeasonReward`
- 패스 포인트 안내: `InfoitemPopup` — [[UI 및 패키지]]
- 대량 보상 팝업: `RewardResultUi` — [[공통 의존성]]

## 상속·합성

- [[PageBattlePass]] 가 **이 클래스를 상속** (`public class PageBattlePass : EventPass`).
- [[SeasonPass]] 가 **필드로 `EventPass pass` 인스턴스** 를 들고 `Init` / `SetTracks` 등 호출.

## 외부 패키지

- `Kamgam.UIToolkitScrollViewPro` — `ScrollViewPro`
- `QuickPool` — `PoolsManager`

## 상세 토픽 문서

- [[EventPass 데이터 흐름]]
- [[EventPass UI 구조]]
- [[EventPass 제약사항 및 필수 요소]]
- [[EventPass 신규 생성 체크리스트]]
