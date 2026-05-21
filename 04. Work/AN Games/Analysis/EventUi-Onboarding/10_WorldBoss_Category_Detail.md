---
title: WorldBoss 카테고리 상세
tags:
  - event
  - worldboss
  - ranking
aliases:
  - WorldBoss Detail
---

# WorldBoss 카테고리 상세

기준 파일: `Assets/Common Document/Scripts/EventUi.WorldBoss.cs`

## 엔트리 흐름

1. `OpenWorldBossPage` 호출
2. 로딩 표시 + `Request_WorldBossInquiry(curEventID, curEventRank)`
3. 응답 후 회전/입장횟수/스테이지 데이터 세팅
4. 월드보스 메인 페이지 렌더링

## 핵심 상태값

- `WBRotation`: 현재 회차
- `WBMaxJoinCnt`: 일일 보상 기준 최대 참여 횟수
- `WBJoinCnt`: 현재 참여 횟수
- `WBStageData`: 배너/타이틀/설명 리소스 데이터

## 주요 버튼 동작

- 랭킹: `OpenRakingPage()`
- 기록: `Request_WorldBossBattleRecordInquiry` 후 `OpenBaseRecordPage`
- 보상: `OpenWBRewardPage(true)`
- 이동: 월드보스 포인트 탐색 미션 링크
- 일일 보상 팁: 현재/다음 보상 구간 기준 툴팁 구성

## 레드닷/보상 판단

- 메인 보상 레드닷은 `CheckRewardRedDot()`에서 계산
- `worldBossMyBestRecord.reward_order`와 최고 점수를 기준으로
  - 보상 단계 상태(`ON_COMPENSABLE`, `OFF_COMPENSABLE`) 판정

## 안정성 가드

- 공통 클릭 가드 `ShouldReturn<T>()`
  - `isNetRanking` 중이거나 `WBStageData == null`이면 입력 무시

## 데이터 의존성

- `UserModel.worldBossState`
- `UserModel.worldBossMyBestRecord`
- `UserModel.worldBossUserRankings`
- `GameModel.worldBossStage`
- `GameModel.worldBossRewardGroup`
- `GameModel.worldBossReward`

## 디버깅 포인트

- 페이지가 열리지만 내용이 비는 경우
  - `Request_WorldBossInquiry` 성공 후 `WBStageData` null 여부 확인
- 일일 보상 안내가 엉킬 때
  - `WBJoinCnt`, `WBMaxJoinCnt`, `tipKey` 계산 확인
- 보상 레드닷 오동작
  - `stageType` 분기(BASE=1, INTER=2)와 보상 그룹 조회 확인

## 연관 문서

- [[11_Wheel_Category_Detail]]
- [[05_Event_Category_Map]]
