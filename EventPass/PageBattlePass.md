---
tags: [unity, EventPass, BattlePass, Promotion]
up: "[[00 EventPass 허브]]"
related_files:
  - "aa_client_lfs/Assets/Common Document/Scripts/Promotion/PageBattlePass.cs"
---

# PageBattlePass

**파일:** `Assets/Common Document/Scripts/Promotion/PageBattlePass.cs`  
**상속:** `public class PageBattlePass : EventPass`

## 역할

- UXML: `Benefit_EventPass.uxml`, `Promotion_Content_Pass.uxml` 대응 (파일 주석).
- 이벤트 패스 **배틀 패스** 슬롯: `MKEventPassBaseDTO`, `MKEventPassSlotDTO`, `MKEventPassLevelBaseDTO`.
- `SetLevelList(..., minDay)` 이벤트 패스 오버로드 사용.

## 데이터 흐름

- 레벨 테이블: `passDt.GetLevels()` — [[게임데이터 MKGameDataDTO]]
- 유저 진행: `passSlotDt`, `battlePassList` — [[유저데이터 네트워크]]

## 부모 클래스

모든 패스 UI 공통은 [[EventPass 코어]] 에서 처리 (트랙 잠금, 스크롤, 보상 연출 등).
