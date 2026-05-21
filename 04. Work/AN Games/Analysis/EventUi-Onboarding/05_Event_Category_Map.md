---
title: Event 카테고리 맵
tags:
  - event
  - category
  - map
aliases:
  - Event Category Map
---

# Event 카테고리 맵

기준 파일: `Assets/Common Document/Scripts/EventUi.cs`

`RefreshEventPage()`의 `EVENT_CATEGORY` 분기 기준으로 실제 페이지 오픈 함수를 매핑한 문서입니다.

## EventUi.cs (RefreshEventPage) 처리 카테고리

| 카테고리 값 | enum 이름 | 호출 함수 | 상세 문서 |
|------------|-----------|-----------|----------|
| 110 | `ACHIEVEMENT` | `OpenAchievementPage` | [[06_Achievement_Category_Detail]] |
| 120 | `ACHIEVEMENT_BOX` | `OpenAchievementBoxPage` | [[06_Achievement_Category_Detail]] |
| 130 | `ACHIEVEMENT_CONDITION` | `OpenAchievementConditionPage` | [[06_Achievement_Category_Detail]] |
| 140 | `ACHIEVEMENT_CHANGE` | `OpenAchievementChangePage` | [[06_Achievement_Category_Detail]] |
| 150 | `ACHIEVEMENT_REWARD` | `OpenAchievementRewardPage` | [[06_Achievement_Category_Detail]] |
| 200 | `EXCHANGE` | `OpenExchagePage` | [[12_TempleWar_Exchange_Token_Detail]] |
| 300 | `ATTENDANCE_D7` | `OpenAttendancePage` | [[13_Attendance_Compensation_Rank_Detail]] |
| 400/410/420 | `BUNDDLE_D5_T0/T1/T2` | `OpenBundlePage` | [[07_Bundle_Category_Detail]] |
| 430 | `NEW_USER` | `OpenBundleNewUserPage` | [[07_Bundle_Category_Detail]] |
| 440 | `GREATEST_LEADER` | `OpenBundleGreatestLeaderPage` | [[07_Bundle_Category_Detail]] |
| 450 | `PASS_POINT` | `OpenBundlePassPointPage` | [[07_Bundle_Category_Detail]] |
| 460 | `MINI_SEASONAL` | `OpenBundleMiniSeasonalPage` | [[07_Bundle_Category_Detail]] |
| 500 | `COMPENSATION` | `OpenCompensationPage` | [[13_Attendance_Compensation_Rank_Detail]] |
| 510 | `COMPENSATION_ALL` | `OpenCompensationAllPage` | [[13_Attendance_Compensation_Rank_Detail]] |
| 600 | `NOTICE` | `OpenNoticePage` | [[08_Notice_Category_Detail]] |
| 610 | `NOTICE_COMMUNITY` | `OpenNoticeCommunityPage` | [[08_Notice_Category_Detail]] |
| 611 | `NOTICE_OFFICIAL` | `OpenNoticeOfficialWebPage` | [[08_Notice_Category_Detail]] |
| 620 | `NOTICE_TERRITORY` | `OpenNoticeTerritoryOpenPage` | [[08_Notice_Category_Detail]] |
| 630 | `NOTICE_GREATEST_LEADER` | `OpenNoticeGreatestLeaderPage` | [[08_Notice_Category_Detail]] |
| 640 | `NOTICE_SERVER_ARENA` | `OpenNoticeServerArenaPage` | [[08_Notice_Category_Detail]] |
| 700 | `RANK` | `OpenRankPage` | [[13_Attendance_Compensation_Rank_Detail]] |
| 800 | `CHALLENGE` | `OpenChallengePage` | [[09_Challenge_Category_Detail]] |
| 900 | `TOKEN` | `OpenTokenPage` | [[12_TempleWar_Exchange_Token_Detail]] |
| 1001 | `PRE_TEMPLE_WAR` | `OpenPreTempleWarPage` | [[12_TempleWar_Exchange_Token_Detail]] |
| 1002 | `TEMPLE_WAR` | `OpenTempleWarPage` | [[12_TempleWar_Exchange_Token_Detail]] |
| 3001/3002 | `WORLD_BOSS_BASE/INTER` | `OpenWorldBossPage` | [[10_WorldBoss_Category_Detail]] |
| 8000 | `WHEEL` | `OpenWheelPage` | [[11_Wheel_Category_Detail]] |

## EventUi 밖에서 처리되는 카테고리

아래 카테고리들은 `EVENT_CATEGORY` enum에 존재하지만 `EventUi.RefreshEventPage()`의 switch에 없습니다. 별도 UI 컴포넌트에서 처리됩니다.

| 카테고리 값 | enum 이름 | 처리 파일 | 비고 |
|------------|-----------|----------|------|
| 160 | `WITH_HERO` | `BenefitUi.cs` | 영웅 성장 이벤트 |
| 2000 | `PROMOTION` | `PromotionMain.cs` | 프로모션 허브 |
| 2001/2003 | `PROMO_ACHIEVEMENT/TAB` | `PromotionMain.cs` | 프로모션 내 달성형 |
| 2002/2005 | `ATTENDANCE_D5/PROG` | `PromotionMain.cs` | 5일 출석 (프로모션) |
| 2004 | `CREATE_LEADER` | `PromotionMain.cs` | 지도자 생성 |
| 6000 | `WISH_EVENT` | `BenefitUi.cs` | 행운의 티타임 |
| 7000 | `ONLY_PKG` | 패키지 전용 | EventUi 미사용 |
| 9000 | `BATTLE_PASS` | `BenefitUi.cs` | 배틀패스 |

> [!warning]
> 신규 이벤트를 기획할 때 이 카테고리들은 EventUi가 아니라 각 전용 UI에서 작업해야 합니다.

## event_menu 값 의미

`event_menu`는 이벤트 탭 그룹 타이틀을 결정하며, 로컬라이징 키 `event_menu_name_{event_menu}`로 표시됩니다.

| 값 | 의미 | 10000 처리 |
|----|------|-----------|
| 1 | 신규 유저 이벤트 | — |
| 2 | 시즌 이벤트 | — |
| 3 | 인기 이벤트 | — |
| 11 | 정규 이벤트 | — |
| 12 | 상시 이벤트 | — |
| 10000 | 마감 (자동 치환) | `LoadEvent()`에서 `firstSlot.status >= 10`이면 자동으로 10000 대입 |

## 카테고리 상세 문서

- [[06_Achievement_Category_Detail]]
- [[07_Bundle_Category_Detail]]
- [[08_Notice_Category_Detail]]
- [[09_Challenge_Category_Detail]]
- [[10_WorldBoss_Category_Detail]]
- [[11_Wheel_Category_Detail]]
- [[12_TempleWar_Exchange_Token_Detail]]
- [[13_Attendance_Compensation_Rank_Detail]]
- [[14_Schedule_And_CommonSubPages]]
