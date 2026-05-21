---
title: EventUi 구조 분석
tags:
  - event
  - ui
  - architecture
aliases:
  - EventUi Architecture
---

# EventUi 구조 분석

대상 파일: `Assets/Common Document/Scripts/EventUi.cs`

## 역할 요약

`EventUi`는 이벤트 UI의 **탭 구성, 이벤트 상세 페이지 렌더링, 클릭/포커스 입력, 랭킹/보상 연출**을 담당하는 메인 프레젠테이션 컴포넌트입니다.

## 핵심 진입점

- `OnEnable()`: UI 오픈 시 초기화/네트워크 조회 트리거
- `LoadEvent()`: 현재 진행 이벤트 목록을 빌드하고 좌측(하단) 탭 UI 생성
- `TapEvent(eventId)`: 탭 전환 처리
- `RefreshEventPage(eventId, isSkip)`: 이벤트 카테고리별 페이지 렌더링 분기

## 렌더링 파이프라인

1. `GameModel.eventPlan.Event_NowDatas()`로 현재 노출 가능 이벤트 스케줄 조회
2. `GameModel.eventMain.GetData(event_id)`로 메인 이벤트 데이터 로드
3. `UserModel.eventUser[event_id]` 존재 여부로 실제 참여 가능 이벤트 필터링
4. `event_menu`, `event_id` 정렬 후 탭 UI 동적 생성
5. 탭 클릭 시 `RefreshEventPage()`에서 카테고리별 `OpenXXXPage()` 분기 실행

## 게임데이터 갱신 구독 패턴

`MKGameDataModel.OnEventGameDataUpdated` (static event) — event 테이블(`eventPlan`, `eventMain` 등 `event`로 시작하는 테이블)이 갱신될 때 발동됩니다.

- `MKGameDataModel.IsEventUiGameData(tableName)`: `tableName.StartsWith("event")`로 필터
- 갱신 완료 시 `OnEventGameDataUpdated?.Invoke()` 호출
- `EventUi.OnEnable()`에서 구독, `OnDisable()`에서 해제
- 구독 핸들러 `OnEventGameDataUpdated()` → UI가 활성화 상태이면 `LoadEvent()` 재호출

> [!note]
> `seasonEvent*` 테이블은 이 이벤트 대상이 아닙니다. 시즌 이벤트는 `SeasonEvent` 컴포넌트가 별도로 처리합니다.

## 상태 관리 포인트

- 현재 이벤트 컨텍스트
  - `curEventID`, `curEventMainData`, `curEventGoalDatas`
  - `curEventCategory`, `curEventRank`, `curEventRankingIdx`
- 타이머/코루틴
  - 종료 타이머(`curCloseTimer`, `curEndTimer`)
  - 일정 갱신 타이머(`curDayScheduleTimer`)
- 네트워크 동기 상태
  - `isNetGet`, `isNetRanking`, `isSpinningWheel`

## EventUi에서 자주 발생하는 이슈 패턴

- 이벤트 탭은 보이는데 상세가 비는 경우  
  -> `UserModel.eventUser[event_id]`가 없거나 `eventGoal` 데이터가 비어 있을 가능성
- 아이콘/배너가 깨지는 경우  
  -> `MKEventMainBaseDTO.Visual` 해석 실패(`visual_group_id`, `min_day` 매칭 확인)
- 랭킹 버튼이 숨는 경우  
  -> `curEventRank == EVENT_RANK.NONE` 또는 `eventRankReward` 데이터 부재

## 함께 봐야 할 문서

- 네트워크 반영 경로: [[02_NetworkEvent_DataFlow]]
- 테이블 스키마 관계: [[03_MKGameData_EventSchema]]
- 실무 흐름: [[04_Event_Workflow_And_Checklist]]
