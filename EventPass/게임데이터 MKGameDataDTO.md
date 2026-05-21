---
tags: [unity, EventPass, MKGameData]
up: "[[00 EventPass 허브]]"
related_files:
  - "aa_client_lfs/Assets/World/Scripts/NetworkData/MKGameDataDTO.cs"
  - "aa_client_lfs/Assets/World/Scripts/NetworkData/MKGameDataModel.cs"
---

# 게임 데이터 (이벤트·패스 DTO)

**주 파일:** `Assets/World/Scripts/NetworkData/MKGameDataDTO.cs`  
**모델 접근:** `Assets/World/Scripts/NetworkData/MKGameDataModel.cs` 의 `eventPass`, `eventPassLevel`, `eventPassReward`

## MKGameDataModel 필드 (발췌)

| 필드 | 타입 | 용도 |
|------|------|------|
| `eventPass` | `MKEventPass` | 이벤트 패스 마스터 |
| `eventPassLevel` | `MKEventPassLevel` | 레벨별 행 |
| `eventPassReward` | `MKEventPassReward` | 보상 행 (`reward_key`) |

## 클래스 계층 (이벤트 패스)

- **`MKEventPass`** — `data: List<MKEventPassBaseDTO>`, `GetEventData(eventID)`, `GetData(pass_point_id)`
- **`MKEventPassBaseDTO`** — `event_id`, `pkg_idx_arr`, `pass_point_id`, `GetLevels()` (캐시 후 `eventPassLevel.data` 에서 `event_id` 매칭)
- **`MKEventPassLevel`** / **`MKEventPassLevelBaseDTO`** — `level`, `start_point`, `reward_key_arr`, `GetRewards(grade, minDay)` → `MKPassRewardBaseDTO` (서버 가변 보상 `ITEM_ON_SERVER` 처리 포함)
- **`MKEventPassReward`** / **`MKPassRewardBaseDTO`** — `reward_key`, `reward_id`, `reward_count`, `RewardType`

## 시즌 패스 레벨 (EventPass 시즌 오버로드)

- **`MKSeasonPassLevelBaseDTO`** 등 — `MKGameDataDTO.cs` 시즌 패스 구간(약 5800행대 근처)에 정의.
- 시즌 보상 집계: **`MKSeasonReward`** (`seasonReward.GetRewards(...)`) — [[EventPass 코어]] `SetLevelList(List<MKSeasonPassLevelBaseDTO>, ...)`.

## UI 쪽에서 쓰는 방식

- [[PageBattlePass]] — `MKEventPassBaseDTO.GetLevels()`, `MKEventPassLevelBaseDTO`
- [[SeasonPass]] — `MKSeasonPassLevelBaseDTO` + 시즌 슬롯 DTO
- [[EventPass 코어]] — `MKGameDataModel.instance.eventPass.GetEventData` 로 `pass_point_id` 조회 (`SetLevelList` 이벤트 패스 경로)
