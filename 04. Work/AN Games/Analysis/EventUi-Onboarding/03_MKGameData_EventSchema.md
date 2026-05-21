---
title: MKGameData 이벤트 스키마
tags:
  - gamedata
  - dto
  - event
aliases:
  - Event Schema Map
---

# MKGameData 이벤트 스키마

대상 파일:

- `Assets/World/Scripts/NetworkData/MKGameDataModel.cs`
- `Assets/World/Scripts/NetworkData/MKGameDataDTO.cs`

## Model 계층(Event 관련 필드)

`MKGameDataModel`은 이벤트 도메인 테이블을 개별 DTO 컬렉션으로 보유합니다.

### 핵심 테이블

- `eventPlan`: 노출 가능 기간/서버/표시 조건
- `eventMain`: 이벤트 메타 정보(`event_id`, `event_category`, `visual_group_id`)
- `eventVisualGroup`: 아이콘/배너/컬러 등 시각 리소스
- `eventTargetGroup`: 이벤트 노출 대상 그룹 정의
- `eventGoal`: 목표 정의(`goal_id`, 조건 파라미터, 랭크 타입)
- `eventGetPoint`: 포인트 획득 조건 정의
- `eventGoalReward`: 목표별 보상
- `eventRankReward`: 랭킹 보상
- `eventChallengeReward`: 도전 카테고리 난이도별 보상 (`EventUi.Challenge.cs`)
- `eventPass`: 패스 포인트 연계 정보 (`GetRewardIcon` 등)
- `eventPassLevel`: 패스 레벨별 정의
- `eventPassReward`: 패스 보상 목록
- `eventTokenChange`: 교환형 이벤트 토큰 소모 규칙

### 운영/제어 테이블

- `eventMinorLimit`: 미성년자(`IsKid`) 참여 제한 이벤트 목록  
  - `OnEnable()`에서 `eventMain/eventGoal/eventGoalReward`에서 해당 이벤트 데이터를 제거하는 데 사용
- `eventHidden`: 긴급 이벤트 표시 제한 테이블 (운영 중 문제 발생 시 즉시 숨김 처리 용도)
- `eventOntimeReward`: 서버 기준 시점 보상 (`reward_type == 7` 케이스)

## 핵심 키 관계

- `event_id`
  - 이벤트 단위 식별자
  - `eventMain`, `eventGoal`, `eventRankReward`, 사용자 슬롯의 공통 조인 키
- `goal_id`
  - 목표 단위 식별자
  - `eventGoal` <-> `eventGoalReward` <-> 유저 슬롯(`goal_id`) 연결
- `visual_group_id`
  - 이벤트 시각 리소스 매핑 키
  - `eventMain.visual_group_id` -> `eventVisualGroup` 조회

## EventUi가 주로 소비하는 DTO

- `MKEventMainBaseDTO`
  - 이벤트의 카테고리/종류/표시 그룹/메인-서브 관계 보유
  - `Visual` 프로퍼티로 `eventVisualGroup` 조회
- `MKEventGoalBaseDTO`
  - UI 미션 리스트와 진행조건/랭크 타입 계산의 기준
- `MKEventGoalRewardBaseDTO`
  - 보상 프리뷰/수령 연출 데이터

## 실무 연결 관점 정리

- 스케줄 필터링: `eventPlan`  
- 이벤트 메타: `eventMain`  
- 목표/진행도 표시: `eventGoal` + `MKUserDataModel.eventUser`  
- 보상 표시: `eventGoalReward`, `eventRankReward`

## event_menu 값 일람

`MKEventMainBaseDTO.event_menu`는 `LoadEvent()`에서 하단 탭 그룹 타이틀을 나눌 때 사용됩니다.  
로컬라이징 키: `event_menu_name_{event_menu}` — 이 키가 없으면 탭 타이틀이 공백으로 표시됩니다.

| 값 | 의미 |
|----|------|
| 1 | 신규 유저 이벤트 |
| 2 | 시즌 이벤트 |
| 3 | 인기 이벤트 |
| 11 | 정규 이벤트 |
| 12 | 상시 이벤트 |
| 10000 | 마감 (`firstSlot.status >= 10`이면 자동 치환) |

> [!tip]
> 신규 이벤트에 기존에 없는 `event_menu` 값을 쓰려면 `event_menu_name_{값}` 로컬라이징 키를 반드시 추가해야 합니다.

## 로컬 Gamedata 파일 규칙 (운영/디버깅)

- 로컬 저장 경로(Windows):
  - `C:/Users/admin/AppData/LocalLow/ANGames/Avatar_ Realms Collide`
- 파일명 규칙:
  - `1.5_KEY_{서버}_{테이블명}`
- 파일 특성:
  - 로컬 파일은 암호화된 형태이며, 클라이언트 로직에서 복호화 후 테이블로 로드됨

> [!warning]
> 테이블 값이 코드/기획과 달라 보일 때는 먼저 "원본 파일 내용"이 아니라 "복호화 후 메모리 로드 결과"를 기준으로 확인해야 합니다.

## 데이터 불일치 시 1차 점검 순서

1. 대상 서버/테이블의 파일이 로컬 경로에 실제 존재하는지 확인
2. 파일명 규칙(`1.5_KEY_{서버}_{테이블명}`)이 정확한지 확인
3. 클라이언트 시작 후 해당 테이블이 복호화/파싱되어 모델(`MKGameDataModel`)에 적재되었는지 확인
4. 최종적으로 `eventMain/eventGoal/eventGoalReward` 조회 결과를 UI 분기와 대조

## 참고: Dictionary 빌드 패턴

같은 DTO 파일 내 일부 시스템은 조회 성능을 위해 사전(Dictionary) 인덱싱을 만듭니다.

예: `MKNpcResourceDTO.MakeDictionaryData()`의 `unit_type -> group_id -> corps_group` 3단 인덱스 패턴은 이벤트 외 도메인에서도 자주 쓰이는 데이터 접근 방식입니다.

## 함께 보면 좋은 문서

- UI 렌더링 파이프라인: [[01_EventUi_Architecture]]
- 서버 응답 반영 규칙: [[02_NetworkEvent_DataFlow]]
