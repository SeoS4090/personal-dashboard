---
title: TroopLOD 유닛 생성/LOD/애니메이션 분석
tags:
  - system/troop
  - concern/performance
  - concern/readability
  - status/done
---

# TroopLOD 유닛 생성/LOD/애니메이션 분석

## 개요
이 함수군은 군단의 "보이는 형태"를 결정한다. `MakeUnits()`가 LOD와 상태에 따라 영웅/병사/Companion 생성을 트리거하고, `SetLOD()`가 표시 정책을 최종 적용하며, `SetAnimation()`/`SetCompanionAnimation()` 계열이 방향/상태에 맞는 재생을 담당한다.

## 주요 함수 묶음과 책임
- **생성 오케스트레이션**: `MakeUnits()`, `MakeHeros()`, `MakeSoldiers()`, `MakeCompanion()`, `LoadSoldier()`
- **LOD 표시 제어**: `SetLOD()`, `lodUnit()`, `SetHeroIcon()`, `IncreaseAlpha()`, `StartIncreaseCoroutine()`
- **애니메이션 제어**: `SetAnimation()`, `SetCompanionAnimation()`, `SetCompanionSkillAnimation()`, `StopAnimation()`, `ResumeAnimation()`, `ChangeTroopStatusAni()`

## 동작 포인트
1. `MakeUnits()`
   - 현재 LOD와 `minLODLevel` 조합으로 "필요 시점"에만 생성.
   - 집결 생성(`rally_create/rally_start`) 중에는 유닛 생성을 건너뛰고 라인 표현 위주로 동작.
   - 전멸(`IS_ANNIHILATION`) 강제 로딩 분기 존재.
2. `SetLOD()`
   - 경로 라인, 정보 패널, 심플 아이콘, 실제 유닛 표시를 한 함수에서 동시 제어.
   - LOD 1~2: 풀 유닛 표시, LOD3: 축약 표시, LOD4+: 아이콘 중심 표시.
3. `SetHeroIcon()`
   - 아군/연맹/적군 프레임 색상과 영웅 아이콘 세팅.
   - Companion 아이콘 가시성 동기화 포함.
4. `SetAnimation()` 계열
   - 8방향 인덱스 계산 + 좌우 Flip으로 스프라이트 애니메이션 선택.
   - Companion은 3D Animator `Status` 파라미터를 사용하며 스킬 애니 강제 전환 루틴을 별도로 둠.

## 데이터/의존성 관계
- 리소스 로딩: `MKObjectLoadManager`, `MKModelManager`, `MKSpriteAtlasManager`.
- LOD/필터 조건: `WorldManager.instance.curLODLevel`, `WorldManager.CurrentFilter`, `joinedRallyLeaderkey`.
- 애니메이션: `SpriteAnimator`, DOTween 회전(`DOLocalRotateQuaternion`), 코루틴 페이드.

## 문제점 및 개선 제안
- `SetLOD()`와 `lodUnit()`의 분기 로직이 중복되어 변경 누락 리스크가 높다. 공통 정책 함수로 통합 권장.
- `SetLOD()`는 UI/아이콘/패널/유닛/이펙트를 모두 처리해 과대 책임 상태다. 가시성 정책(`VisibilityPolicy`)으로 분리하면 테스트 용이.
- 비동기 로딩 콜백(`LoadSoldier`)에서는 방어 코드가 있지만 `MakeHeros()/MakeCompanion()` 콜백에도 동일 수준 인덱스/상태 가드 일관화가 유리하다.

## 게임플레이/성능/메모리 영향
- 장점: LOD 기반 단계적 생성으로 고밀도 월드에서 렌더 비용 감소.
- 리스크: 표시 정책 중복/분기 누락 시 특정 LOD에서 군단이 보이지 않거나 아이콘만 남는 시각 이슈 발생 가능.
- 메모리: 오브젝트 풀 재사용은 안정적이지만 LOD 왕복이 빈번하면 생성/반납 빈도 증가로 스파이크 가능.

## 관련 문서
- [[TroopLOD_simple_hero_icon_Lifecycle_Analysis]]
- [[TroopLOD_Lifecycle_Formation_Analysis]]

