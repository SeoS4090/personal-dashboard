---
title: Bundle 카테고리 상세
tags:
  - event
  - bundle
  - schedule
aliases:
  - Bundle Detail
---

# Bundle 카테고리 상세

기준 파일: `Assets/Common Document/Scripts/EventUi.Bundle.cs`

## 포함 페이지

- `OpenBundlePage` (기본 5일)
- `OpenBundleNewUserPage`
- `OpenBundleGreatestLeaderPage`
- `OpenBundlePassPointPage`
- `OpenBundleMiniSeasonalPage`

## 공통 패턴

- 일자별 이벤트를 `curEventID + day`로 계산해 조회
- `bundleOpenInterval`을 계산해 해금 일자와 잠금 상태를 표현
- 각 Day 탭의 레드닷은 해당 일자 슬롯 `CanReceive`로 계산
- `bundleCallbackManager`가 모든 클릭/다운 이벤트를 관리

## 타입별 특징

- 기본/신규유저/미니시즈널
  - 1~5일 탭 + 탭별 세부 미션 렌더링 구조가 유사
  - 신규유저는 `SetHeroInfo`로 히어로 정보 패널 추가
- 최강의 지도자(`OpenBundleGreatestLeaderPage`)
  - 일자별 랭킹 슬롯(`GLSlots`) 재구성
  - `Request_MyEventRanking`으로 내 점수/랭킹 갱신
  - 랭킹/보상/점수가이드 버튼을 별도 운영
- 패스포인트(`OpenBundlePassPointPage`)
  - 링크 이벤트 버튼(`SetEventLinkButton`) 제공
  - 보상 아이템에서 히어로 보상을 추출해 히어로 패널 표시
  - 현재 오픈 day에 이펙트(`day-X-effect`)를 노출

## 데이터 연결성

- `UserModel.eventUser[event_id + day]` : 일자별 실시간 상태
- `GameModel.eventGoal` : 목표/랭킹 슬롯 보정 시 참조
- `GameModel.eventGoalReward` : 보상 구성
- `NetworkEvent.Request_MyEventRanking` : GL 계열 점수 영역

## 자주 보는 이슈

- day 해금이 하루 밀리거나 당겨짐
  - UTC 날짜 문자열(`ToString("D")`) 비교 로직 우선 확인
- GL 랭킹이 비는 현상
  - `GLSlots` 생성 시 `rank_type > 0` 데이터 존재 여부 확인
- 레드닷 오검출
  - day별 `CanReceive` 계산 대상이 올바른 `event_id`인지 검증

## 연관 문서

- [[06_Achievement_Category_Detail]]
- [[09_Challenge_Category_Detail]]
- [[05_Event_Category_Map]]
