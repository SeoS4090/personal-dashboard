---
tags: [unity, EventPass]
up: "[[00 EventPass 허브]]"
related_files:
  - "aa_client_lfs/Assets/Common Document/Scripts/PassLevelUpPopup.cs"
---

# PassLevelUpPopup

**파일:** `Assets/Common Document/Scripts/PassLevelUpPopup.cs`  
**베이스:** `MonoBehaviour`  
**using:** `static EventPass` → `EventPassLevelRewardData` 등 타입 공유.

## 역할

- 젬 등으로 **패스 레벨 일괄 구매** UI (`SelectValueSetting`, `ScrollViewPro`).
- `Show(List<EventPassLevelRewardData> passLevels, long curPt, long costPt, long curGrade, CallbackT<long> reqBuyLevelUp)`

## 호출부

[[EventPass 코어]] — `ShowLevelUpPopup` 에서 `PoolsManager.Spawn("PassLevelUpPopup")` 후 `PassLevelUpPopup.Show(...)`.

## 기타 연동

- `GetSortReward` — `EventPass` 의 정적 메서드 재사용 (보상 합산·정렬).
- `CommonDocManager.instance.hudResource` — 레벨업 팝업 상단 재화 표시.
