---
title: SVS 전용 이벤트 추가 예시
tags:
  - onboarding
  - event
  - svs
  - ui
aliases:
  - SVS Event Example
---

# SVS 전용 이벤트 추가 예시

신규 이벤트를 **SVS 컨텐츠에서만 노출**한다고 가정하고, 실제 작업 시 필요한 데이터/코드/UI 항목을 예시로 정리한 문서입니다.

## 예시 시나리오

- 이벤트명(가칭): `SVS 정복 랭킹`
- 노출 조건: SVS 모드에서만 표시
- 페이지 성격: 랭킹 + 미션 보상
- 우선 전략: 신규 카테고리 추가보다 `EVENT_CATEGORY.RANK` 재사용으로 리스크 최소화

> [!tip]
> 첫 구현은 기존 `RANK` 페이지를 재사용하고, 이후에 별도 레이아웃이 필요할 때만 전용 UXML/분기 함수를 추가하는 것이 안전합니다.

## 1) 필요 데이터 (GameData + UserData)

### 필수 테이블

- `eventPlan`
  - 이벤트 기간, 대상 서버, 생성 타입, 노출 타입
  - 필요 시 `eventAddCond` 연계로 SVS 조건 만족 시점에만 생성
- `eventMain`
  - `event_id`, `event_category`, `event_kind`, `visual_group_id`, `event_menu`
- `eventVisualGroup`
  - 탭 아이콘, 배경, 서브 배너, 타이틀 색상
- `eventGoal`
  - 목표(`goal_id`) 및 진행 조건, `rank_type`
- `eventGoalReward`
  - 목표 달성 보상
- `eventRankReward`
  - 랭킹 구간 보상(`min_rank` 기반)

### 런타임 필수 데이터

- `UserModel.eventUser[event_id]`
  - 탭 노출, 진행 상태, 수령 상태의 핵심 기준
- 랭킹 표시용 값
  - 슬롯 `idx` (내부 `curEventRankingIdx` 계산에 사용)
  - 내 랭킹/전체 랭킹 목록

> [!important]
> 랭킹 이벤트는 `eventGoal.rank_type` + 유저 슬롯 `idx` + `eventRankReward` 세 축이 맞아야 UI가 정상 동작합니다.

## 2) 필요 코드

## UI 진입/분기

- `Assets/Common Document/Scripts/EventUi.cs`
  - `LoadEvent()`: 탭 노출 조건 최종 확인
  - `RefreshEventPage()`: 카테고리 분기
  - `UpdateCurEventInfo()`: `curEventRank`, `curEventRankingIdx` 계산

### 랭킹 페이지 로직

- `Assets/Common Document/Scripts/EventUi.Rank.cs`
  - 랭킹 탭/보상 탭 렌더링
  - 스크롤 추가 로딩, 내 랭킹 표기

### 네트워크

- `Assets/Network/Scripts/NetworkEvent.cs`
  - 조회/보상/랭킹 요청 함수
  - `UpdateUserData()`에 응답 키 병합 로직 적용

### SVS 전용 노출 가드(권장)

- SVS 전용 이벤트는 아래 조건 중 최소 1개 이상으로 가드
  - 서버에서 SVS 조건 불만족 시 해당 `event_user_slot` 미발급
  - 클라이언트에서 `MKCommon.svsMode` 또는 동등한 상태 체크 후 숨김

## 3) 필요 UI / 리소스

### 기존 재사용 (1차 구현)

- `rankPageVta`
- `rankingPageVta`
- `rankingRewardPageVta`

### 리소스/문구

- `eventVisualGroup`
  - `icon`, `bg_url`, `sub_banner_url`, `event_title_color`
- 로컬라이징 키
  - `event_title_{event_kind}`
  - `event_desc_l_{event_kind}`
  - `event_guide_{event_kind}`

### 신규 레이아웃이 필요한 경우 (2차)

- 신규 UXML 예: `svsRankPageVta`
- `EventUi`에 `VisualTreeAsset` 필드 추가
- 신규 렌더 함수 예: `OpenSvsRankPage()`

## 4) 샘플 데이터 스펙 (예시)

```json
{
  "eventMain": {
    "event_id": 910001,
    "event_category": 700,
    "event_kind": 9101,
    "event_menu": 11,
    "visual_group_id": 910001
  },
  "eventGoal": [
    {
      "event_id": 910001,
      "goal_id": 91000101,
      "rank_type": 1,
      "goal_value": 1000
    }
  ],
  "eventRankReward": [
    {
      "event_id": 910001,
      "event_reward_target": 1,
      "min_rank": 1
    },
    {
      "event_id": 910001,
      "event_reward_target": 1,
      "min_rank": 2
    },
    {
      "event_id": 910001,
      "event_reward_target": 1,
      "min_rank": 11
    }
  ]
}
```

## 5) 개발 체크리스트

- [ ] `eventPlan/eventMain/eventGoal/eventGoalReward/eventRankReward` 세팅 완료
- [ ] SVS 외 환경에서 탭 비노출 확인
- [ ] `Request_EventInquiry` 후 `event_user_slot` 병합 확인
- [ ] `curEventRankingIdx` 계산 정상 확인
- [ ] 랭킹/보상 탭 진입 및 추가 로딩 정상 확인
- [ ] 종료/마감 타이머(`CurCloseDate`, `CurEndDate`) 표시 확인

## 6) 테스트 케이스 예시

- 케이스 A: SVS 진입 전
  - 기대 결과: 이벤트 탭 미노출
- 케이스 B: SVS 진입 후 + 슬롯 발급됨
  - 기대 결과: 이벤트 탭 노출, 랭킹 탭/보상 탭 정상
- 케이스 C: 보상 수령 후 재조회
  - 기대 결과: 상태값 갱신, 레드닷/버튼 상태 변경
- 케이스 D: 이벤트 마감
  - 기대 결과: 마감 상태 반영(필요 시 `event_menu=10000` 정렬 반영)

## 연관 문서

- [[00_Index]]
- [[01_EventUi_Architecture]]
- [[02_NetworkEvent_DataFlow]]
- [[03_MKGameData_EventSchema]]
- [[04_Event_Workflow_And_Checklist]]
- [[05_Event_Category_Map]]
