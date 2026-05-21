---
tags: [unity, EventPass, SeasonEvent]
up: "[[00 EventPass 허브]]"
related_files:
  - "aa_client_lfs/Assets/Common Document/Scripts/Season Event/Common/SeasonPass.cs"
---

# SeasonPass

**파일:** `Assets/Common Document/Scripts/Season Event/Common/SeasonPass.cs`  
**베이스:** `SeasonEventContents` (`event_type : SEASON_EVENT_TYPE.PASS`)

## EventPass 와의 관계

- `public EventPass pass` — `Awake` / `OnEnable` 에서 `new EventPass()` 후 `pass.Init(root, UpdateScreen)`.
- `EventPass.Track` 리스트 구성: 무료 트랙 + `passDt.pkg_idx_arr` 기반 유료 트랙, `pass.SetTracks(tracks)`.
- `pass.SetLevelList(levelDts, seasonPassListItem, ReqGetReward)` — 오버로드: `List<MKSeasonPassLevelBaseDTO>`.

## 데이터

- `MKSeasonPassLevelBaseDTO` 리스트, `MKSeasonPassBaseDTO passDt`, `MKUserData.MKSeasonPassSlotDTO slotDt`.

→ DTO 정의: [[게임데이터 MKGameDataDTO]]  
→ 공통 UI 로직: [[EventPass 코어]]
