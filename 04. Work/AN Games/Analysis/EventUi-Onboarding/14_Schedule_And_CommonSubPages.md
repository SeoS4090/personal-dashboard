---
title: Schedule 및 공통 서브페이지
tags:
  - event
  - schedule
  - ranking
  - reward
  - record
  - info
aliases:
  - Event Common Subpages
---

# Schedule 및 공통 서브페이지

관련 파일:

- `Assets/Common Document/Scripts/EventUI.Schedule.cs`
- `Assets/Common Document/Scripts/EventUi.Ranking.cs`
- `Assets/Common Document/Scripts/EventUi.Reward.cs`
- `Assets/Common Document/Scripts/EventUi.Record.cs`
- `Assets/Common Document/Scripts/EventUi.Info.cs`

## Schedule (`event_id == 0` 경로)

- 진입: `RefreshEventPage(0)` -> `OpenSchedulePage`
- 표시 기간: 오늘 기준 `-2일 ~ +4일`
- 데이터 소스: `GameModel.eventPlan.Event_AllDatas()`
- 필터:
  - `schedule_notice == 1` 제외
  - `eventHidden` 제외
  - `Visual` null 제외
- 정렬:
  - 시작일 오름차순 -> 종료일 오름차순 -> event_id 오름차순

## Ranking 공통 페이지

- 엔트리: `OpenRakingPage`
- 분기:
  - Greatest Leader는 GL 전용 루틴
  - WorldBoss는 `Request_WorldBossRankingInquiry`
  - 일반 이벤트는 `Request_AllEventRanking`
- 베이스 화면: `OpenBaseRankingPage`
  - 개인/연맹 랭킹 리스트 렌더링
  - 스크롤 하단 접근 시 추가 랭킹 요청

## Reward 공통 페이지

- 엔트리: `OpenBaseRewardPage`
- 분기:
  - WorldBoss: `worldBossRewardGroup` + `worldBossReward` 조합
  - 일반: `eventRankReward` 기반
- 토글:
  - 보상 페이지에서 랭킹 페이지로 되돌아가기 지원

## Record 공통 페이지

- 엔트리: `OpenBaseRecordPage`
- 현재 구현은 사실상 WorldBoss 중심
  - 최고 기록/최근 기록 10개 표시
  - `SetBestRecordWB`, `SetRecentRecordsWB` 적용

## Info 공통 페이지

- 엔트리: `OpenInfoPage`
- 이벤트 안내문(`event_guide_{event_kind}`) 표시
- Wheel 확률표는 `_isOpenWheelRate = true`일 때만 노출

## 연관 문서

- [[05_Event_Category_Map]]
- [[10_WorldBoss_Category_Detail]]
- [[11_Wheel_Category_Detail]]
