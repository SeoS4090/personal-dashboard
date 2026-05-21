---
title: Notice 카테고리 상세
tags:
  - event
  - notice
  - link
aliases:
  - Notice Detail
---

# Notice 카테고리 상세

기준 파일: `Assets/Common Document/Scripts/EventUi.Notice.cs`

## 포함 페이지

- `OpenNoticePage`
- `OpenNoticeCommunityPage`
- `OpenNoticeOfficialWebPage`
- `OpenNoticeTerritoryOpenPage`
- `OpenNoticeGreatestLeaderPage`
- `OpenNoticeServerArenaPage`

## 기능 특성

Notice 계열은 보상 수령보다는 **외부 링크 이동, 안내 정보 노출, 특정 미션 이동 버튼** 중심입니다.

## 세부 동작

- 커뮤니티
  - Facebook/Discord/Twitter/Instagram/TikTok 링크 버튼 제공
  - `leaderSpotlight` 데이터가 있으면 스포트라이트 버튼 노출
- 공식 웹
  - `curEventID`에 따라 Official/WebShop 링크 분기
  - 버튼 텍스트는 공통 `button_visit_website`
- 영지 오픈
  - `param_type1/param_val1`으로 미션 탐색 링크 이동
  - 진행 중 여부(`firstSlot.IsOngoing`)에 따라 이동 버튼 활성화
- Greatest Leader / Server Arena
  - 기간 정보 + 보상 리스트 중심 노출

## 데이터 소스

- `UserModel.eventUser[curEventID]`
- `UserModel.leaderSpotlight`
- `GameModel.eventGoalReward.GetDatas(...)` (보상형 Notice)
- `LinkSystem` / `OpenWebSite(...)`

## 디버깅 포인트

- 버튼이 눌러도 웹이 안 열릴 때
  - 이벤트 ID 분기(`611001`, `611002`)와 링크 상수 매핑 확인
- 영지 이동 버튼 비활성 상태 고정
  - `firstSlot.IsOngoing`와 이벤트 close 타임 비교 확인
- 스포트라이트 미노출
  - `leaderSpotlight.discord_link` 값 유무 확인

## 연관 문서

- [[02_NetworkEvent_DataFlow]]
- [[05_Event_Category_Map]]
