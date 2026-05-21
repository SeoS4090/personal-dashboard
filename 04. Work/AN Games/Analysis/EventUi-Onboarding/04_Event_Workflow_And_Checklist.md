---
title: Event 업무 워크플로우
tags:
  - workflow
  - event
  - onboarding
aliases:
  - Event Dev Checklist
---

# Event 업무 워크플로우

## 1) 기능 변경 전 분석 순서

1. `EventUi.LoadEvent()`에서 탭 구성 기준 확인
2. `EventUi.RefreshEventPage()`에서 카테고리 분기 확인
3. 해당 분기에서 참조하는 `eventGoal`, `eventGoalReward` 필드 확인
4. `NetworkEvent.Request_*` + `UpdateUserData()`로 런타임 데이터 갱신 경로 확인

## 2) 데이터 연결성(실무 관점)

- 기획/테이블 변경은 보통 `eventMain`, `eventGoal`, `eventGoalReward`를 동시 변경
- 서버 응답은 `event_user_slot` 갱신이 핵심
- 로컬 Gamedata는 암호화 파일을 클라이언트에서 복호화해 사용
  - 경로: `C:/Users/admin/AppData/LocalLow/ANGames/Avatar_ Realms Collide`
  - 파일명 규칙: `1.5_KEY_{서버}_{테이블명}`
- UI 오동작의 대부분은 아래 3축 불일치에서 발생
  - 테이블 정의(`MKGameDataModel`)
  - 서버 응답(`NetworkEvent`)
  - UI 분기(`EventUi`)

## 2-1) 미성년자 필터링 (`eventMinorLimit`)

`EventUi.OnEnable()` 한 번만 실행되며, `UserModel.IsKid` 가 `true`인 경우 `eventMinorLimit.data`에 등재된 이벤트를 `eventMain/eventGoal/eventGoalReward` 에서 제거합니다.

- 제거는 **인메모리만** 적용 — 재오픈 시 `GameModel`은 이미 필터된 상태입니다.
- 새 이벤트 추가 시 `eventMinorLimit` 등재 여부를 기획과 확인하세요.

## 3) 작업 체크리스트

- [ ] 이벤트가 탭에 노출되는가 (`eventPlan`, `eventMain`, 유저 슬롯 존재)
- [ ] 이벤트 상세 페이지가 정상 분기되는가 (`event_category` 매핑)
- [ ] 목표 수치/진행도 표시가 맞는가 (`goal_value`, `values`)
- [ ] 보상 미리보기/수령 후 상태 반영이 맞는가 (`goal_id`, `idx`)
- [ ] 랭킹 탭/버튼이 조건대로 노출되는가 (`rank_type`, `eventRankReward`)
- [ ] 타이머(종료/마감) 갱신이 정상인가 (`CurCloseDate`, `CurEndDate`)
- [ ] 로컬 Gamedata 파일이 대상 서버/테이블 기준으로 존재하는가
- [ ] 파일명이 `1.5_KEY_{서버}_{테이블명}` 규칙을 만족하는가
- [ ] 복호화/파싱 후 모델 로드 결과가 기대 테이블 값과 일치하는가

## 4) 디버깅 권장 로그

- `EventUi.UpdateCurEventInfo()`
  - 현재 `event_id`, `event_category`, `curEventRank`
- `NetworkEvent.UpdateUserData()`
  - `event_user_slot` 수신 개수와 `event_id`별 병합 결과
- `eventMain.GetData(event_id)` / `eventGoal.GetDatas(event_id)`
  - null/empty 여부
- 로컬 Gamedata 로드 단계
  - 대상 테이블 복호화 성공 여부, 로드된 레코드 수

## 5) 신규 입사자에게 전달할 핵심

> [!important]
> Event UI는 "서버응답 구조를 그대로 렌더링"하는 성격이 강합니다.  
> 따라서 UI 코드만 수정해서 해결하려고 하기보다 `NetworkEvent`의 병합 결과와 DTO 키 관계를 먼저 확인해야 문제를 빠르게 해결할 수 있습니다.

## 관련 문서

- 시작점: [[00_Index]]
- 구조 분석: [[01_EventUi_Architecture]]
- 네트워크 흐름: [[02_NetworkEvent_DataFlow]]
- 테이블 관계: [[03_MKGameData_EventSchema]]
