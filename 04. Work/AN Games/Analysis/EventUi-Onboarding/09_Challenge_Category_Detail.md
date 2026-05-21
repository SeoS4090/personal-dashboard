---
title: Challenge 카테고리 상세
tags:
  - event
  - challenge
  - difficulty
aliases:
  - Challenge Detail
---

# Challenge 카테고리 상세

기준 파일: `Assets/Common Document/Scripts/EventUi.Challenge.cs`

## 진입 구조

- `OpenChallengePage`
  - 난이도 선택 완료(`DifficultyChosen`) 시 `OpenChallengeMainPage`
  - 미선택 시 `OpenChallengeSelectPage`

## 난이도 선택 페이지 핵심

- 5개 난이도 UI를 동적으로 잠금/해금
- 선택 가능한 난이도는 `best_difficulty + 1` (최대 5)
- 난이도 확정 시 팝업 확인 후
  - `NetworkEvent.Request_SelectChallengeDifficulty(event_id, difficulty)`
  - 성공 시 `RefreshEventPage(event_id)` 재진입

## 메인 페이지 핵심 (운영 관점)

- 난이도별 보상(`eventChallengeReward`)과 목표 보상(`eventGoalReward`) 병행 사용
- 보상 수령/진행 갱신은 네트워크 요청 후 페이지 리프레시 패턴
- 튜토리얼 컴포넌트 연동 포인트가 많아, UI 변경 시 튜토리얼 ID 영향 검토 필요

## 데이터/네트워크 의존성

- `UserModel.GetChallengeEventUser(event_id)`
- `GameModel.eventChallengeReward`
- `GameModel.eventGoalReward`
- `NetworkEvent.Request_SelectChallengeDifficulty`
- `NetworkEvent.Request_ClaimChallengeReward`
- `NetworkEvent.Request_EventRewardGet`

## 디버깅 포인트

- 난이도 버튼이 잠금 해제되지 않을 때
  - `best_difficulty` 값이 기대대로 갱신되는지 확인
- 보상 리스트가 비어 보일 때
  - 난이도 키별 reward 캐시(`SelectRewardDatas`) 생성 타이밍 점검
- 이벤트 종료 후 선택 가능 상태가 보일 때
  - `GetEventDate(event_id, 1)` 비교 분기 확인

## 연관 문서

- [[02_NetworkEvent_DataFlow]]
- [[03_MKGameData_EventSchema]]
- [[05_Event_Category_Map]]
