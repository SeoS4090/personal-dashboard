---
title: TroopLOD 이동/회전/경로 분석
tags:
  - system/troop
  - concern/performance
  - concern/readability
  - status/done
---

# TroopLOD 이동/회전/경로 분석

## 개요
이 함수군은 군단의 실제 월드 이동과 대열 회전을 담당한다. `UpdatePosAndRot()`가 프레임 루프의 중심이며, 경로 추적(`curTargetIndex`), 속도 계산, 전투 상태 특수 배치, 행군 라인 갱신이 결합되어 있다.

## 주요 함수 묶음과 책임
- **회전/대열 목표 설정**: `SetTargetPos()`, `RotateAtOnce()`, `SetUnitsTargetLocalPosition()`
- **프레임 이동 루프**: `UpdatePosAndRot()`, `Update()`
- **경로 생성/갱신**: `NavMeshToTarget()`, `MarchToTarget()`, `MakePathLine()`, `UpdatePathLine()`, `DestroyPathLine()`, `MakePathOne()`
- **유틸**: `QuaternionEquals()`, `Vector3Equals()`, `GetForwardDistPos()`

## 핵심 로직
1. 방향과 대열
   - `targetQuaternion` 기준으로 영웅/병사/Companion의 로컬 목표 위치를 회전 투영.
   - `needUpdatePos` 플래그가 true일 때만 `MoveTowards`로 대열 로컬 보간 수행.
2. 경로 진행
   - `curTargetIndex`를 현재 도달 지점에 맞춰 증가시키며 다음 waypoint로 전환.
   - 서버시간 기반으로 `(남은거리 / 남은시간)` 속도 계산 후 `transform.position` 이동.
3. 전투 특수 분기
   - 전투 중에는 상대 군단(`counterTroop`)을 바라보도록 강제하는 `lockBattleFacing` 분기 존재.
   - 경로 마지막 점을 타깃 주변 오프셋으로 조정해 "정면 충돌 겹침"을 완화하려는 로직이 포함됨.
4. 경로 시각화
   - 경로 세그먼트를 점선 프리팹으로 생성하고 소속(내 군단/연맹/적군)에 따라 색상/오프셋 차등 적용.

## 데이터/의존성 관계
- 시간/위치 원천: `actionDTOData.move_path_slot`, `GetCurrentPos()`, `MKHttp.instance.GetServerTime()`.
- 전투 위치 보정: `WorldManager.GetPointInfoDic`, `FortWarManager.GetPointInfoDic`.
- 경로 탐색: `MKNavMeshManager.Instance.FindPath`.

## 문제점 및 개선 제안
- `UpdatePosAndRot()` 내부 책임이 매우 크다(회전/이동/전투/도착처리/속도계산). 상태별 핸들러로 분리 권장.
- `move_path_slot` 접근 전 Count 체크는 일부 분기에서만 보장된다. 시작부에 공통 가드 추가가 안전.
- 전투 오프셋 계산이 `ApplyPathAndPositionUpdate()`와 유사 중복이다. 공통 함수화 시 회귀 감소.

## 게임플레이/성능/메모리 영향
- 경로/회전 일관성은 군단 움직임의 신뢰도(체감 품질)에 직접 영향.
- per-frame 연산이 많아 군단 수가 증가하면 CPU 부담이 커진다.
- 경로 세그먼트 생성/파괴 반복은 GC 및 DrawCall 변동을 유발할 수 있어 풀링 고려 여지가 있다.

## 관련 문서
- [[TroopLOD_BattleOverlap_Resolve_Analysis]]
- [[TroopLOD_DTO_SyncPipeline_Analysis]]

