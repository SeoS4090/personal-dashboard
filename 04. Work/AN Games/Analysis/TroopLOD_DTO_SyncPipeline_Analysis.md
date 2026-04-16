---
title: TroopLOD DTO 동기화 파이프라인 분석
tags:
  - system/troop
  - system/network
  - concern/bug
  - concern/readability
  - status/done
---

# TroopLOD DTO 동기화 파이프라인 분석

## 개요
`SetTroopSlotData()`는 서버 DTO를 월드 오브젝트 상태로 반영하는 핵심 진입점이다. 본 파일은 해당 함수와 분리된 보조 함수(`Apply*`) 전체를 하나의 파이프라인으로 묶어 설명한다.

## 파이프라인 구성(실행 순서)
1. **사전 처리**
   - `TryUpdateNpcLinkedActionData()`: NPC 타겟 연동 상태 동기화.
   - `UpdateTargetQuaternionFromMovePath()`: 현재 진행 경로 기반 회전 초기값 계산.
2. **생성 분기**
   - `ApplyCreateInitialization()`: 위치 초기화, 딕셔너리 등록, 즉시 회전.
3. **상태 전이 처리**
   - `HandleRallyLeaderTransition()`: 집결장 리더 전환 시 편성 재초기화.
   - `UpdateTouchColliderByState()`: 집결/전투/일반 상태별 터치 콜라이더 크기 조정.
4. **경로/위치 동기화**
   - `ApplyPathAndPositionUpdate()`: 마지막 경로점 오프셋, 서버좌표 강제 보정, `curTargetIndex` 재산정, `MakePathLine()`.
5. **시각/가시성 적용**
   - `ApplyTroopInfoAndVisibility()`: 아이콘/LOD/UI 체력 바, `HIDE` 판정.
6. **월드 링크 후처리**
   - `ApplyWorldMapUpdate()`: 선택 군단 참조 재연결, NPC AutoMove 해제.

## 함수별 역할 요약
- `SetTroopSlotData()`: 전체 파이프라인 오케스트레이션.
- `ApplyMyTroopAllyInfo()`: 내 군단 연맹 정보 보정 (현재 본문에서는 직접 코드로도 동일 처리되어 중복 가능성 존재).
- `GetCurretnState()`: HUD용 상태 열거값 변환.
- `Start_BattleStartAni()`: 전투 시작 시 유닛 재구성 + 등장 이펙트.

## 데이터/의존성 관계
- 입력 DTO: `Socket_Action_DTO` (`status`, `move_path_slot`, `corps`, `target_type`, `ci_id` 등).
- 월드 상태: `WorldManager.objTroopDict`, `objNPCDict`, `mySelectedTroop`.
- UI/HUD: `troopinfo`, `CommonDocManager.mainHud`.
- 시간 축: `MKHttp.instance.GetServerTime()`.

## 문제점 및 개선 제안
- `ApplyTroopInfoAndVisibility()` 내부 `if (battle_joined.Count() < 0)`는 항상 false여서 의도 불명. 조건 재검토 필요.
- `ApplyPathAndPositionUpdate()`에서 `actionDTOData.move_path_slot[0]` 접근 전 빈 리스트 가드가 없어 잠재 NRE/인덱스 오류 리스크.
- `SetTroopSlotData()` 본문과 `ApplyMyTroopAllyInfo()`가 동일 책임(연맹 보정)을 중복 표현하고 있어 단일화 필요.
- 전투 위치 오프셋 로직이 `UpdatePosAndRot()`에도 유사하게 존재하여 이중 유지보수 구간 발생.

## 게임플레이/성능/메모리 영향
- 이 파이프라인은 군단 "위치 정확성 + 가시성 + 선택 가능성"을 동시에 좌우하므로 장애 시 체감 버그가 크다.
- 호출 빈도가 높은 만큼 LINQ 재열거(`Count()`, `First()`, `Where()`) 누적 비용이 무시하기 어렵다.
- 상태 전이별 로직 분리(핸들러화) 시 회귀 범위를 줄이고 서버 동기화 문제 추적이 쉬워진다.

## 관련 문서
- [[TroopLOD_SetTroopSlotData_Analysis]]
- [[TroopLOD_Movement_Rotation_Path_Analysis]]
- [[TroopLOD_UnitSpawn_LOD_Animation_Analysis]]

