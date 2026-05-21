---
tags: [unity, EventPass]
up: "[[00 EventPass 허브]]"
related_files:
  - "aa_client_lfs/Assets/Common Document/Scripts/EventPassListItem.cs"
---

# EventPassListItem + PASS_GRADE

**파일:** `Assets/Common Document/Scripts/EventPassListItem.cs`

## EventPassListItem

- UIToolkit 레벨 보상 **한 줄** (`SeasonPassListItem.uxml` 계열).
- `EventPass.EventPassLevelRewardData levelData` 보유.
- `CallBackGetReward(long grade, long level)` 델리게이트로 보상 수령 요청.
- `RewardGroup` — 트랙(등급)별 `VisualElement` 그룹과 아이콘 리스트.

→ 상위: [[EventPass 코어]] 가 생성·`SetData`·`UpdateRewardState`·`GainEffect` 에서 사용.

## PASS_GRADE (enum, 동일 파일)

`NORMAL`, `PREMIUM`, `SUPER_PREMIUM` — 시즌 패스 트랙 고정 분기용.  
`EventPass.SetLevelList`(시즌)에서 `(int)PASS_GRADE.SUPER_PREMIUM` 까지 보상 키 순회.

## 연결 데이터

- 보상 표시 단위: `RewardItemData` — [[공통 의존성]]
- 시즌 보상 원본: `MKSeasonRewardBaseDTO` / 이벤트 패스: `MKEventPassRewardBaseDTO` (주석) — 실제 변환은 [[EventPass 코어]] 의 `EventPassLevelRewardData.SetRewards`
