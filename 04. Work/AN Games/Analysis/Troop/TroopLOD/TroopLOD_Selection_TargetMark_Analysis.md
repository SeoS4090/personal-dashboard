---
title: TroopLOD 선택/타겟 마크 분석
tags:
  - system/ui
  - system/troop
  - concern/readability
  - status/done
aliases:
  - TroopLOD 선택/타겟 마크 분석
description: 선택/타겟팅 함수군은 군단 조작 UX를 구성한다. 선택 마크, 목표 마크, 점선 화살표, 타일 그리드, HUD 하이라이트가 `SetSelectStatusPos()`와 `SetTargetObject()`를 중심으...
created: 2026-05-20
updated: 2026-05-20
---

← [[TroopLOD_Function_Analysis_Index]]


# TroopLOD 선택/타겟 마크 분석

## 개요
선택/타겟팅 함수군은 군단 조작 UX를 구성한다. 선택 마크, 목표 마크, 점선 화살표, 타일 그리드, HUD 하이라이트가 `SetSelectStatusPos()`와 `SetTargetObject()`를 중심으로 동작한다.

## 주요 함수 묶음과 책임
- **선택 상태 전환**: `SetSelectStatusPos(int status, Vector3 target)`
- **타겟 오브젝트 반영**: `SetTargetObject(...)`
- **마크/라인 프레임 갱신**: `UpdateMarkAndEffect()`, `UpdateSelectMark()`, `UpdateTargetMark()`, `UpdateDottedArrow()`, `UpdateDottedSegment()`
- **터치 기준점**: `touchPos` 프로퍼티

## 상태 모델
- `status=0`: 비선택 (마크/화살표 off, 이동 중 점선만 유지)
- `status=1`: 클릭 선택 (아군 선택링 표시, 이동 타겟 화살표 표시)
- `status=2`: 타겟 선택 (타겟 마커 강조)

## 타겟 아이콘 정책
`SetTargetObject()`는 타겟 타입별로 프리뷰 아이콘(`pre_troop_*`)을 선택한다.
- 유저 군단: 전투/지원/대기 분기
- NPC: 집결형/전투형 분기
- 도시/타워/자원: 소유권/연맹/교전 상태 기반 분기

## 데이터/의존성 관계
- `WorldManager.camManager.dragCurPos`로 드래그 거리 기반 타일 그리드 표시.
- `CommonDocManager.mainHud`의 troop-list 선택 하이라이트와 동기화.
- 색상/소유권은 `MKConstant.GetOwnerColor(owner)`로 통일.

## 문제점 및 개선 제안
- `SetTargetObject()`가 타입별 분기, 아이콘 결정, 트윈 초기화/종료, 타일 그리드 제어를 모두 담당한다. 타겟 타입별 전략 객체 또는 매핑 테이블로 분리 권장.
- `targetMarkSeq` 관리 시 null 가드가 부족한 지점이 있어 종료 시 안정성 보강이 필요하다.
- UI Toolkit과 월드 오브젝트 제어가 섞여 있어 테스트 경계가 모호하다. HUD 연동을 별도 어댑터로 분리하면 회귀 검증이 쉬워진다.

## 게임플레이/성능/메모리 영향
- 직관적인 선택 피드백은 조작 정확도와 체감 응답성에 큰 영향을 준다.
- DOTween 루프가 다수 군단에서 중첩되면 비용 누적 가능하므로 비활성 시 즉시 Kill 정책이 중요하다.

## 관련 문서
- [[TroopLOD_Movement_Rotation_Path_Analysis]]



