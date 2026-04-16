---
title: TroopLOD 라이프사이클/편성 초기화 분석
tags:
  - system/troop
  - concern/readability
  - concern/performance
  - status/done
---

# TroopLOD 라이프사이클/편성 초기화 분석

## 개요
`TroopLOD`의 초기 구동은 `Awake()`에서 시작하며, 편성(라인 수/라인별 병사 수) 계산과 오브젝트 풀 반환 루틴이 군단의 기본 생명주기를 구성한다. 핵심은 "상태(집결장/전투/일반)에 따라 병력 슬롯 구조를 재구성"하고, 이 구조를 기반으로 후속 LOD/이동/애니메이션 로직이 동작하도록 만드는 것이다.

## 주요 함수 묶음과 책임
- **라이프사이클 엔트리**: `Awake()`, `Start()`, `OnDestroy()`, `ReturnObjectManager()`
- **편성 계산**: `InitUnitPosition()`, `CalculateUnitPosition()`, `CalculateCompanionPosition()`
- **배열/슬롯 초기화**: `ClearAllPositionValue()`, `SetSoldierNumMax()`
- **리소스 정리**: `ClearHeroObject()`, `ClearSoldierObject()`, `ClearCompanionObject()`

## 상세 동작 요약
1. `Awake()`
   - `InitUnitPosition()`으로 현재 상태 기반 편성 슬롯 확정.
   - `MakeDottedArrow()`, `MakeSelectMark()`, `MakeTargetMark()`로 시각 요소 기본 생성.
2. `InitUnitPosition()`
   - 집결장 리더: 4라인 x 5열 구성.
   - 일반(비전투): 1라인 x 2열 구성.
   - 전투: 4라인(3/4/4/3) 구성.
   - 기존 라인 수와 동일하면 재초기화 생략하여 비용 절감.
3. `ClearAllPositionValue()`
   - 기존 병사/영웅 오브젝트를 풀에 반납.
   - 그래픽 단순화 옵션이면 라인/병사 수 자체를 0으로 축소.
   - `heroEndPos`, `soldierPos`, `soldierEndPos`, `heroObject`, `soldierObject` 재할당.
4. `CalculateUnitPosition()` + `CalculateCompanionPosition()`
   - 라인 중앙 정렬 규칙으로 병사 로컬 배치 기준 좌표 계산.
   - Companion은 병력 후방 중심 축에 배치 좌표 계산.
5. `OnDestroy()`
   - 선택 상태 해제, 마크/라인/이펙트 오브젝트 정리, 풀 반환 수행.

## 데이터/의존성 관계
- `actionDTOData`의 상태값(`status`, `act_type`)이 편성 패턴을 결정.
- `MKObjectLoadManager`, `MKModelManager`를 통한 풀링 의존.
- `WorldManager.instance.DefaultMat`는 영웅 해제 시 머티리얼 복원에 사용.
- 편성 배열(`SoldierLineNum`, `SoldierNumForLine`, `SoldierMaxNumForLine`)은 후속 모든 렌더/애니메이션 루프의 상한값으로 작동.

## 문제점 및 개선 제안
- `CalculateCompanionPosition()`에서 `backmostZ`를 계산하지만 최종 적용이 단순식(`-(soldierGap_Z * SoldierLineNum)`)으로 고정되어 가독성이 떨어진다. 불필요 변수 제거 또는 의도 주석 보강이 필요.
- `OnDestroy()`는 정리 책임이 매우 크다. 마크/UI/풀반납을 소함수로 분리하면 회귀 리스크를 낮출 수 있다.
- 편성 재초기화 기준이 "라인 수 동일 여부" 중심이라 라인 수는 같고 라인별 병사 수만 바뀌는 케이스에 취약할 수 있다. `SoldierNumForLine` 비교까지 포함 권장.

## 게임플레이/성능/메모리 영향
- 편성 초기화 정확도가 떨어지면 군단 대형, 터치 영역, 전투 표현이 어긋난다.
- 풀링 반납 루틴은 생성/파괴 부하를 크게 줄여 대규모 월드에서 프레임 안정화에 기여한다.
- 배열 재할당/리빌드는 비용이 있으므로 상태 전이 최소화가 성능상 유리하다.

## 관련 문서
- [[TroopLOD_UnitSpawn_LOD_Animation_Analysis]]
- [[TroopLOD_DTO_SyncPipeline_Analysis]]

