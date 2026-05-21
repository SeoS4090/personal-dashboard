---
title: Attendance Compensation Rank 상세
tags:
  - event
  - attendance
  - compensation
  - rank
aliases:
  - Attendance Compensation Rank
---

# Attendance / Compensation / Rank 상세

관련 파일:

- `Assets/Common Document/Scripts/EventUi.Attendance.cs`
- `Assets/Common Document/Scripts/EventUi.Compensation.cs`
- `Assets/Common Document/Scripts/EventUi.Rank.cs`

## Attendance (`ATTENDANCE_D7`)

- 진입: `OpenAttendancePage`
- 전제: `UserModel.eventUser[curEventID]` 슬롯 존재 + 1개 이상
- 핵심 처리:
  - 7일 출석 전용 템플릿(`attendanceSevenPageVta`) 사용
  - `SetAttendance(slots, 7, ...)`로 6+1 구성 렌더링
  - `SetHeroInfo(page.Root, slots.Last())`로 마지막 보상 기준 히어로 정보 표시

## Compensation (`COMPENSATION`, `COMPENSATION_ALL`)

### `OpenCompensationPage`

- 슬롯의 `rank_type == 0`만 보상 이동 카드로 사용
- 카드 이동 버튼:
  - 미달성(status=0): `LinkSystem.CheckContinue(...)` 결과로 활성화 판단
  - 진행/완료: `slot.IsOngoing` 기준
- 클릭 시 `LinkSystem.GetEvent(goal_id)`로 외부 전환

### `OpenCompensationAllPage`

- 첫 슬롯 보상은 상단 보상 박스에 배치
- 마지막 슬롯 보상은 `item-0`, `item-1`에 아이템 사용형 UI로 배치
- `use` 클릭 시 소지 수량 체크 후 NPC 소환(없으면 토스트)

## Rank (`RANK`)

- 진입: `OpenRankPage`
- 구성:
  - 랭킹 탭 / 보상 탭 토글(`SetRankPage`)
  - 랭킹 탭은 `Request_AllEventRanking` 기반 데이터 로드
  - 보상 탭은 `eventRankReward`를 `min_rank` 단위로 그룹 렌더링
- 무한 스크롤:
  - `RankingIdxDayDict[curRankingIdx]`와 스크롤 위치 기반 추가 요청

## 디버깅 포인트

- Attendance가 비어 보일 때
  - `slots.Last()` 참조 전 슬롯 개수 확인
- Compensation 이동 버튼이 비활성일 때
  - `LinkSystem.CheckContinue` 결과와 `slot.IsOngoing`을 분리 점검
- Rank 보상 탭 중복 노출
  - `min_rank` 중복 제거 로직(`checkRank`) 동작 여부 확인

## 연관 문서

- [[05_Event_Category_Map]]
- [[14_Schedule_And_CommonSubPages]]
