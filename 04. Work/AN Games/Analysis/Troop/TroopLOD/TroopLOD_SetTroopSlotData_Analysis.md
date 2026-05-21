---
tags:
  - system/troop
  - concern/performance
  - concern/readability
  - status/done
aliases:
  - TroopLOD.SetTroopSlotData 분석
description: 1. 입력 DTO 보정
created: 2026-05-20
updated: 2026-05-20
---

← [[TroopLOD_Function_Analysis_Index]]


# TroopLOD.SetTroopSlotData 분석

## 개요
- 대상: `Assets/World/Scripts/TroopLOD.cs`의 `SetTroopSlotData(Socket_Action_DTO action_dto, bool isCreate = true)`
- 역할: 서버에서 내려온 군단 DTO를 기준으로, 월드 상 군단 오브젝트의 데이터/위치/경로/표시(UI, 아이콘, 충돌영역, LOD)를 한 번에 동기화하는 핵심 엔트리 함수.
- 호출 맥락: 신규 생성 시(`isCreate=true`)와 실시간 업데이트 시(`isCreate=false`) 모두 사용.

## 주요 책임/구성 요소
1. 입력 DTO 보정
- `corps == null`이면 즉시 반환.
- 내 군단(`user_no == login.user_no`)인 경우 연맹 정보(`ally_no`, `ally_idx`)를 클라이언트 기준으로 보정.

2. 업데이트 전 상태 기반 준비
- 이전 집결장 상태(`prev_rallyLeader`) 저장.
- 기존 target이 NPC인 경우 NPC 오브젝트의 AutoMove/status와 연결된 데이터 갱신.
- 이동 경로 기반으로 초깃값 회전(`targetQuaternion`) 계산.

3. DTO 반영 및 생성 분기
- 기본은 `this.actionDTOData = action_dto`.
- `isCreate` 시:
  - 유닛 위치 초기화(`InitUnitPosition`) 및 Companion 위치 계산(`CalculateCompanionPosition`)
  - 현재 위치 즉시 반영
  - `objTroopDict` 등록(중복 key 정리 포함)
  - 즉시 회전 반영(`RotateAtOnce`)

4. 시각/상호작용 상태 갱신
- 버프 캐시(`lastInBuffList`) 클리어.
- 집결장/일반 전환 시 유닛 재배치 + `minLODLevel` 보정.
- 터치 콜라이더 중심/크기를 상태(집결/전투/일반)에 따라 재설정.

5. 경로/위치 동기화
- 특정 target 타입일 때 마지막 경로점을 접근 방향 기준으로 오프셋 조정.
- 전투 상태면 `transform.position`을 전투 진입점(`dir`)으로 강제 업데이트.
- 서버 좌표와 현재 좌표 차이가 크면(>2.0) 즉시 위치 보정.
- 비-집결장 리더는 경로 첫 포인트를 현재 위치에 맞춰 재계산.
- `curTargetIndex` 재탐색 후 `MakePathLine()` 재생성.

6. UI/LOD/월드/메인HUD 반영
- `troopinfo.SetData(...).SetHP(...)`로 체력 비율 갱신.
- `HIDE` 계산/적용(전투 군단 병합 규칙 포함).
- `SetHeroIcon`, `SetLOD`.
- 선택 군단 포인터 및 NPC AutoMove 상태 정리.
- 내 군단이면 메인 HUD 군단 정보 리프레시.

## 데이터/의존성 관계
- 핵심 의존:
  - `WorldManager.instance` (군단/NPC 딕셔너리, 선택 군단, LOD 상태)
  - `MKHttp.instance` (서버 시간, 로그인 유저)
  - `MKUserDataModel`, `AllyManager` (연맹 정보)
  - `CommonDocManager` (MainHUD 갱신)
- 내부 상태 변경:
  - `actionDTOData`, `targetQuaternion`, `curTargetIndex`, `minLODLevel`, `HIDE`, `lastInBuffList`
- 외부 상태 변경:
  - `WorldManager.objTroopDict` 등록/치환
  - `NPC.AutoMove`, `npcObj.actionDTOData.status`
  - UI 컴포넌트(`troopinfo`, hero icon, collider 등)

## 문제점 및 개선 제안
1. 논리 오류 가능성
- `if (battle_joined.Count() < 0)` 조건은 항상 false.
- 의도는 `> 0` 또는 `== 0` 중 하나일 가능성이 높아 검토 필요.

2. Null 안전성
- `actionDTOData.move_path_slot[0]` 접근 구간에서 Count 보장이 약한 분기 존재.
- `troopinfo`, `GetComponent<Props>()`는 함수 내 직접 접근이 많아 초기화 시점 이슈 시 NRE 위험.

3. 성능
- `objTroopDict.Values.Where(...).Count()` 후 `First()` 재열거 패턴 존재(동일 필터 2회).
- 매 업데이트마다 LINQ + `GetServerTime()` 다회 호출로 GC/CPU 비용 누적 가능.
- `WorldManager.GetPointInfoDic(...)` 동일 키 반복 호출 구간 캐싱 여지 큼.

4. 함수 과대 책임
- 데이터 반영/경로 계산/전투 보정/UI/LOD/HUD/NPC 업데이트가 한 함수에 결합.
- 유지보수 난이도와 사이드이펙트 추적 비용이 큼.

## 게임플레이/성능/메모리 영향
- 게임플레이:
  - 전투 진입 지점 오프셋/집결장 규칙이 시각적 동기화 품질에 직접 영향.
  - `HIDE` 및 콜라이더 조정이 선택 가능성/가시성 체감에 영향.
- 성능:
  - 월드에 군단 수가 많은 상황에서 함수 호출 빈도 * LINQ 비용이 누적되어 프레임 하락 유발 가능.
- 메모리:
  - LINQ 열거와 임시 객체 생성(특히 대규모 전투 시)로 소규모 GC 빈도 증가 가능.

## 리팩토링 제안(우선순위)
1. 안전성 보강
- 시작부에서 `move_path_slot == null || Count == 0` 가드 추가.
- `troopinfo`/`Props` null 체크 유틸화.

2. 성능 개선
- `battle_joined`를 materialize(`ToList`)하여 Count/First/foreach 재활용.
- `GetServerTime()`를 지역 변수로 한번만 캐싱해 분기 재사용.
- 반복 딕셔너리 조회/PointInfo 조회 캐싱.

3. 구조 분리
- `ApplyDtoBasics`, `ApplyCreationState`, `ApplyPathAndPosition`, `ApplyVisualState`, `ApplyHudAndWorldLink` 등으로 분해.
- 상태 전이(`BATTLE`, `RALLY`, `RETURN`)를 별도 핸들러로 분리해 테스트 가능성 확보.

## 관련 문서
- [[TroopLOD_DTO_SyncPipeline_Analysis]]
- [[TroopLOD_Movement_Rotation_Path_Analysis]]
- [[TroopLOD_Lifecycle_Formation_Analysis]]


