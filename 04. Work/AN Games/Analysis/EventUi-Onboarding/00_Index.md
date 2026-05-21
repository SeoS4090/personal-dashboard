---
title: EventUi 온보딩 인덱스
tags:
  - onboarding
  - event
  - ui
  - network
aliases:
  - EventUi Index
---

# EventUi 온보딩 인덱스

신입 개발자가 `EventUi` 업무를 빠르게 인수인계 받을 수 있도록 핵심 문서를 연결한 시작 페이지입니다.

## 문서 맵

- [[01_EventUi_Architecture]]
- [[02_NetworkEvent_DataFlow]]
- [[03_MKGameData_EventSchema]]
- [[04_Event_Workflow_And_Checklist]]
- [[05_Event_Category_Map]]
- [[06_Achievement_Category_Detail]]
- [[07_Bundle_Category_Detail]]
- [[08_Notice_Category_Detail]]
- [[09_Challenge_Category_Detail]]
- [[10_WorldBoss_Category_Detail]]
- [[11_Wheel_Category_Detail]]
- [[12_TempleWar_Exchange_Token_Detail]]
- [[13_Attendance_Compensation_Rank_Detail]]
- [[14_Schedule_And_CommonSubPages]]
- [[15_SVS_Event_Implementation_Example]]
- [[16_New_Event_Coding_Checklist]]

## 빠른 시작 순서

### 기존 이벤트 수정/디버깅

1. `EventUi`가 어떤 입력 데이터를 받아 어떤 페이지를 그리는지 [[01_EventUi_Architecture]] 먼저 확인
2. 서버 응답이 어떻게 유저 모델에 반영되는지 [[02_NetworkEvent_DataFlow]] 확인
3. 이벤트 테이블 관계(`event_id`, `goal_id`, `visual_group_id`)는 [[03_MKGameData_EventSchema]]로 보강
4. 실제 작업 절차와 디버깅 포인트는 [[04_Event_Workflow_And_Checklist]] 적용
5. 카테고리 전체 분기는 [[05_Event_Category_Map]]에서 빠르게 탐색
6. 담당 카테고리 문서(06~14)를 병행 참조해 세부 로직 확인

### 신규 이벤트 추가

1. [[05_Event_Category_Map]]에서 해당 카테고리 값이 이미 있는지 확인
2. 기존 카테고리 재사용이면 → [[16_New_Event_Coding_Checklist]] 경로 A
3. 신규 카테고리 추가면 → [[16_New_Event_Coding_Checklist]] 경로 B
4. 실제 구현 예시는 [[15_SVS_Event_Implementation_Example]] 참조

> [!tip]
> 코드 수정 전에 최소한 `LoadEvent()`, `RefreshEventPage()`, `NetworkEvent.UpdateUserData()` 세 지점의 연결을 먼저 추적하면 회귀를 크게 줄일 수 있습니다.
