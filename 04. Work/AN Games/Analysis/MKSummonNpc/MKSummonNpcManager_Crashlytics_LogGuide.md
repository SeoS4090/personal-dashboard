---
title: MKSummonNpcManager Crashlytics 로그 가이드
tags:
  - system/battle
  - system/network
  - concern/readability
  - status/done
aliases:
  - SummonNpc Crashlytics Guide
description: `WorldSummonNpcSearchPopup`가 가끔 열리지 않거나 NPC 탐색/생성이 실패할 때,
created: 2026-05-20
updated: 2026-05-20
---

← [[MKSummonNpcManager_Function_Analysis_Index]]


# MKSummonNpcManager Crashlytics 로그 가이드

## 목적

`WorldSummonNpcSearchPopup`가 가끔 열리지 않거나 NPC 탐색/생성이 실패할 때,  
Crashlytics 로그만으로 "어느 단계에서 무엇이 깨졌는지" 역추적하기 위한 운영 가이드.

## 로그 이벤트 키

- 호출 시작점: `ChallengeNpcSearchClick`
- 상태머신 추적: `SummonNpcFlow`

## 요청 단위 추적 규칙

- 같은 소환 시도는 `attempt_id`로 묶는다.
- 해당 시도 내부 단계 순서는 `step_index`로 본다.
- 단계 지연/정체는 `elapsed_ms`로 판단한다.

## 핵심 컨텍스트 필드

- 공통 필드
  - `step`, `state`, `is_failure`
  - `item_id`, `npc_id`, `regen_count`
  - `attempt_id`, `step_index`, `elapsed_ms`, `frame`
  - `request_scene`, `current_scene`
  - `caller_source`, `platform`, `app_version`
  - `my_planet_no`, `my_territory_no`

- 호출부 확장(`ext_*`)
  - `ext_event_id`
  - `ext_difficulty`
  - `ext_clear_level`
  - `ext_npc_search_enabled`
  - `ext_event_ui_active_before_hide`

## 실패 패턴 빠른 판별표

- `SummonNpc | Blocked because manager is busy`
  - 의미: 이전 요청이 끝나기 전에 재진입
  - 우선 확인: 이전 `attempt_id`가 `Updata_End`까지 갔는지

- `Updata_World | CanCreateNPC failed`
  - 의미: 소환 제한(쿨타임/횟수)
  - 우선 확인: 사용자 체감 이슈인지 정책 이슈인지 구분

- `Updata_WorldObjSearchPosStart | npcDTO is null`
  - 의미: 요청된 `npc_id` 데이터 로드 실패
  - 우선 확인: 이벤트 NPC ID 매핑

- `Updata_WorldObjSearchPosStart | worldObjSearch data is null`
  - 의미: `worldObjSearch` 테이블 미매핑
  - 우선 확인: NPC 카테고리/타입 기반 검색 데이터

- `Updata_WorldObjSearchPosStart | No candidate found in all filters`
  - 의미: 거리/검색블록/점유 필터를 통과한 리젠 후보 0
  - 우선 확인: `my_planet_no`, `my_territory_no`, 맵 점유 상태

- `SummonNpcCallbackFail` 또는 `Updata_SummonNpcFail`
  - 의미: 서버 요청 후 실패 콜백
  - 우선 확인: 같은 시점 네트워크 이벤트 로그(3058/아이템 소환 API)

## 권장 분석 절차

1. `ChallengeNpcSearchClick` 존재 여부로 UI 클릭 시도 확인
2. 직후 `SummonNpcFlow`에서 동일 `attempt_id`를 모아 타임라인 구성
3. 마지막 `is_failure=true` step의 메시지로 1차 분류
4. `ext_*` + `my_planet_no` + `request_scene/current_scene`로 데이터 조건 검증
5. 재현 필요 시 동일 `event_id/difficulty/planet` 조건으로 QA 시나리오 생성

## 개선 아이디어(다음 단계)

- `attempt_id`를 서버 요청(3058/소환 아이템 API) 파라미터 로그와 연결
- `OpenSearchWaitPopup` 대비 `CloseSearchWaitPopup` 누락 탐지용 watchdog 로그 추가
- 실패 타입을 enum화해서 `bug_key`를 세분화 (`SummonNpc_NoCandidate`, `SummonNpc_BusyState` 등)

## 관련 문서

- [[MKSummonNpcManager_SummonNpc_Analysis]]
- [[MKSummonNpcManager_Function_Analysis_Index]]


