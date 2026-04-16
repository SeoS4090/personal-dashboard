---
title: WorldCameraManager Drag Move RaidPoint Block Analysis
tags:
  - system/world
  - concern/readability
  - concern/performance
  - status/done
aliases:
  - WorldCameraManager 레이드 포인트 이동 제한 분석
---

# 개요
- `WorldCameraManager`에서 군단/마을 드래그로 이동 명령을 만들 때, 목적지가 레이드 포인트(균열/소환진 영역)인지 검사해 이동을 막는 흐름을 분석했다.

## 주요 책임/구성 요소
- 드래그 종료 후 이동 명령 진입 조건:
  - `isDragging && is_drag_thresh && (dragTroop || dragCity)`
- 이동 타겟 계산:
  - 기본 `target_no = MKCommon.MakeSourceNum(Mathf.RoundToInt(dragCurPos.x), Mathf.RoundToInt(dragCurPos.z))`
- 레이드 포인트 차단 검사:
  - `MKGameDataModel.instance.worldRaidPoint.data.Find(x => x.rect.Contains(clicked_pos))`
  - 레이드 포인트가 존재하면 `t_popup_do_not_march_rift` 토스트 후 `CanStartMove = false`

## 데이터/의존성 관계
- `WorldCameraManager` -> `MKGameDataModel.worldRaidPoint` (레이드 영역 데이터)
- `WorldCameraManager` -> `Troop_Manager.StartMove` (실제 이동 명령 실행)
- `WorldCameraManager` -> `MKSceneManager` (요새전 예외 처리)
- 관련 문서:
  - [[Troop_Manager_StartMove_UpdateAttacker_Analysis]]
  - [[marchline_system_analysis]]
  - [[World_IsVisibleMoveData_MovePath_Analysis]]

## 문제점 및 개선 제안
- 동일한 레이드 포인트 판정 로직이 파일 내 다른 맥락에서도 반복된다.
  - 제안: `IsBlockedByRaidPoint(target_no)` 같은 헬퍼로 추출해 중복 제거.
- 조건식이 길고 분기 밀도가 높아 가독성이 떨어진다.
  - 제안: `CanStartMove` 판정을 단계별 validator 함수로 분리.
- `worldRaidPoint.data.Find(...)` 선형 검색 비용이 누적될 수 있다.
  - 제안: 좌표 기반 공간 인덱싱(그리드/쿼드트리) 또는 사전 계산 캐시 적용 검토.

## 게임 플레이/성능/메모리 영향
- 플레이 영향:
  - 레이드 포인트로 잘못 진입하는 행군을 즉시 차단해 규칙 위반 이동을 방지한다.
- 성능 영향:
  - 드래그 해제 시마다 `Find` 선형 검색이 발생하므로 대규모 레이드 영역 데이터에서 비용 증가 가능.
- 메모리 영향:
  - 현재 구현은 추가 메모리 부담이 작지만, 성능 개선용 캐시 도입 시 메모리-속도 트레이드오프가 생긴다.

## 코드 위치 메모
- 드래그 이동 분기 시작: `WorldCameraManager.Update` 내 `if (isDragging && is_drag_thresh && (dragTroop || dragCity))`
- 레이드 차단 핵심:
  - `//소환진 위치 이동 불가 처리 : 요새전 제외`
  - `raid_point != null` 이면 `t_popup_do_not_march_rift` 표시 후 이동 취소
