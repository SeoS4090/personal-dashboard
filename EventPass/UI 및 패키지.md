---
tags: [unity, EventPass, UI]
up: "[[00 EventPass 허브]]"
---

# UI·패키지·이벤트 화면 (EventPass 참조)

## 직접 연관

| 스크립트 | 경로 | 관계 |
|----------|------|------|
| **PackageSingleUi** | `Assets/Common Document/Scripts/PackageSingleUi.cs` | `EventPass.PASS_TYPE` 로 시즌/배틀 분기, `MKEventPassBaseDTO`, `battlePassList`, `SetLevelList` 패턴 |
| **BenefitUi** | `Assets/Common Document/Scripts/BenefitUi.cs` | `MKEventPassSlotDTO` 조회 |
| **PromotionHub** | `Assets/Common Document/Scripts/Promotion/PromotionHub.cs` | 배틀 패스 슬롯·콘텐츠 ID |
| **InfoitemPopup** | `Assets/Common Document/Scripts/InfoitemPopup.cs` | `OpenPassPoint` — `eventPass.GetData(point_id)` 로 패스 포인트 설명 ([[EventPass 코어]] `OnClickHowGet`) |
| **EventUi** / **EventUi.Achievement** | `Assets/Common Document/Scripts/EventUi.cs` 등 | `curEventPass` 플래그로 이벤트 패스형 보상 UI 분기 (이름만 pass, 클래스 상속은 아님) |

## 팝업·매니저 (호출 체인)

- **PackageManager** — [[EventPass 코어]] `OnClickBuyPremium` 에서 단일 패키지 팝업
- **CommonDocManager** — `mainHud` 코루틴, `OpenRewardResult` ([[공통 의존성]])
- **PoolsManager** — `PassLevelUpPopup`, `InfoItemPopup` 스폰

## 구현체 페이지

- [[SeasonPass]] — 시즌 이벤트 패스 탭
- [[PageBattlePass]] — 프로모션 배틀 패스
