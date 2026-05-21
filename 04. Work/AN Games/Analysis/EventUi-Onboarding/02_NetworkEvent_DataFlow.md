---
title: NetworkEvent 데이터 흐름
tags:
  - network
  - event
  - dataflow
aliases:
  - NetworkEvent Flow
---

# NetworkEvent 데이터 흐름

대상 파일: `Assets/Network/Scripts/NetworkEvent.cs`

## 핵심 목적

`NetworkEvent`는 이벤트 관련 서버 API 호출과 응답 파싱을 담당하며, 응답 데이터를 `MKUserDataModel`에 병합합니다.

## 주요 요청 API

- `Request_EventInquiry(event_id)` (`16101`)
  - `event_id = 0`이면 전체 이벤트 슬롯 초기화 후 재적재
  - 응답에서 이벤트 슬롯, 토큰 상점, 상태값 등을 갱신
- `Request_EventRewardGet(slot)` (`16102`)
  - 목표 보상 수령
  - 수령 후 `UpdateUserData()` 호출 + 보상 리스트 추출 + Firebase 로그
- `Request_MyEventRanking / Request_AllEventRanking` (`16105`)
  - 내 랭킹 / 전체 랭킹 조회
  - 응답을 랭킹 전용 모델 영역에 반영

## UpdateUserData() 병합 규칙

`UpdateUserData(rd)`는 서버 `rd` 딕셔너리의 키 유효성 검사 후, 항목별로 모델에 병합합니다.

- `event_user_slot`
  - `event_id` 기준 그룹화 후 `MKUserDataModel.eventUser[event_id]`에 merge
  - 같은 `idx`는 교체, 없으면 추가
- `event_ally_slot`
  - 동일 방식으로 `eventAlly[event_id]` 병합
- `challenge_slots`
  - `challengeEventUser[event_id]` 단일 갱신
- `event_user_state`, `battle_pass_list`, `unit_slots` 등
  - 이벤트 UI와 연관된 보조 상태 동기화

> [!note]
> `EventUi`에서 보는 대부분의 진행도/수령 상태는 결국 `NetworkEvent.UpdateUserData()`가 만든 `MKUserDataModel` 스냅샷을 참조합니다.

## EventUi와 연결되는 지점

1. `EventUi.OnEnable()` 또는 이벤트 액션 수행
2. `NetworkEvent` API 요청/응답
3. `UpdateUserData()`로 `MKUserDataModel` 병합
4. `EventUi.RefreshEventPage()`에서 모델 읽어 렌더링

## 디버깅 체크 포인트

- API는 성공(rc=0)인데 UI가 안 바뀔 때
  - `rd`에 기대 키(`event_user_slot`, `event_user_state`)가 실제로 오는지 확인
- 일부 목표만 갱신이 누락될 때
  - `idx` 기반 교체 로직에서 중복/누락 여부 확인
- 챌린지 이벤트만 갱신 안 될 때
  - `challenge_slots` 키와 `event_id` 매핑 확인

## 함께 보면 좋은 문서

- UI 측 동작: [[01_EventUi_Architecture]]
- 이벤트 테이블 구조: [[03_MKGameData_EventSchema]]
