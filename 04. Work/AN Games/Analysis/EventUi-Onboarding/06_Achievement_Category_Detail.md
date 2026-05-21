---
title: Achievement 카테고리 상세
tags:
  - event
  - achievement
  - ui
aliases:
  - Achievement Detail
---

# Achievement 카테고리 상세

기준 파일: `Assets/Common Document/Scripts/EventUi.Achievement.cs`

## 포함 페이지

- `OpenAchievementPage`
- `OpenAchievementBoxPage`
- `OpenAchievementConditionPage`
- `OpenAchievementChangePage`
- `OpenAchievementRewardPage`

## 공통 전제

- `UserModel.eventUser[curEventID]`가 없거나 비어 있으면 페이지를 열지 않음
- 공통적으로 `SetInfo`, 기간 표시(`SetCurPeriod`, `SetLeftPeriod`), 종료 타이머(`SetEndTimer`)를 사용
- 콜백은 `achieveCallbackManager`로 등록/해제

## 페이지별 핵심 동작

- 기본 달성형(`OpenAchievementPage`)
  - 슬롯 리스트로 미션 구성
  - `event_pass` 유무에 따라 패스 버튼 또는 랭킹 마크 노출
- 박스형(`OpenAchievementBoxPage`)
  - 랭킹 타입이 있으면 `Request_MyEventRanking` 호출 후 점수/랭킹 표기
  - 랭킹이 없으면 다음 미수령 목표 텍스트를 점수 영역에 표시
- 조건형(`OpenAchievementConditionPage`)
  - 조건 리스트 중심의 단순 렌더링
- 변경형(`OpenAchievementChangePage`)
  - `status == 0/1` 우선으로 현재 목표 선택
  - 보상 수령 시 `Request_EventRewardGet` -> `RefreshEventPage(curEventID, true)`
  - 링크 버튼은 `LinkSystem.instance.GetEvent(goal_id)`로 외부 이동
- 보상형(`OpenAchievementRewardPage`)
  - 랭킹 버튼/패스 버튼 노출 조건 분리
  - 가이드 팁 및 랭킹 페이지 진입 제어

## 주요 데이터 의존성

- `GameModel.eventGoal.GetData/GetDatas`
- `GameModel.eventGoalReward.GetDatas`
- `GameModel.eventPass.GetRewardIcon` (패스 포인트 연계)
- `NetworkEvent.Request_EventRewardGet`
- `NetworkEvent.Request_MyEventRanking`

## 디버깅 포인트

- 변경형에서 수령 후 갱신이 느리면
  - `_isSkip` 기반 클래스 토글(`updating`, `new-list--put/off`) 타이밍 확인
- 박스형 점수/랭크가 빈 경우
  - `curEventRankingIdx` 유효성 및 `rank_type` 매핑 확인
- 보상 아이템 아이콘 누락
  - `curEventFirstSlot.min_day` 기반 on-time reward 치환 로직 확인

## 연관 문서

- [[02_NetworkEvent_DataFlow]]
- [[03_MKGameData_EventSchema]]
- [[05_Event_Category_Map]]
