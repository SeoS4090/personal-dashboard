---
tags:
  - system/battle
  - status/done
aliases:
  - MKSummonNpcManager.Updata_VillageToWorld 분석
description: `Updata_VillageToWorld()`는 `SummonNpc()`가 Village 씬에서 호출될 때 진입하는 첫 번째 전환 상태 핸들러다. 이 메서드는 실질적인 로직 없이 즉시 `WAIT_WORLD` 상...
created: 2026-05-20
updated: 2026-05-20
---

← [[MKSummonNpcManager_Function_Analysis_Index]]


# MKSummonNpcManager.Updata_VillageToWorld 분석

## 개요

`Updata_VillageToWorld()`는 `SummonNpc()`가 Village 씬에서 호출될 때 진입하는 첫 번째 전환 상태 핸들러다. 이 메서드는 실질적인 로직 없이 즉시 `WAIT_WORLD` 상태로 전이하고 월드 씬 전환을 시작하는 역할만 담당한다.

- **진입 조건**: `SummonNpc()` 호출 시 현재 씬이 Village(마을)인 경우
- **전이 방향**: `VILLAGE_TO_WORLD` → `WAIT_WORLD`

## 주요 책임/구성 요소

1. **추적 로그 기록**: `TraceSummonStep("Updata_VillageToWorld", "Transition to WAIT_WORLD")`로 상태 진입 사실을 Crashlytics/로그에 남긴다.
2. **상태 전이**: `ManagerState = SUMMON_NPC_STATE.WAIT_WORLD`로 즉시 전환한다.
3. **타임아웃 타이머 초기화**: `WaitWorldEnterTime = Time.realtimeSinceStartup`으로 폴백 타임아웃 기준 시각을 설정한다. 이후 `Updata_WaitWorld()`가 이 값을 기준으로 12초 타임아웃을 측정한다.
4. **씬 전환 시작**: `VillageToWorld()`를 호출해 월드 씬으로의 전환 흐름을 개시한다. 이 함수 내부에서 `WorldMapFogEndCallback`을 설정해 씬 전환 완료(안개 소멸) 시 자동으로 `WORLD` 상태로 넘어가도록 연결한다.

## 데이터/의존성 관계

| 필드/메서드 | 방향 | 설명 |
|------------|------|------|
| `ManagerState` | 쓰기 | `WAIT_WORLD`로 전환 |
| `WaitWorldEnterTime` | 쓰기 | 타임아웃 기준점 (현재 시각) |
| `VillageToWorld()` | 호출 | `WorldMapFogEndCallback` 설정 + 씬 전환 트리거 |
| `TraceSummonStep()` | 호출 | Crashlytics 추적 로그 |

## 성능/메모리 영향

로직이 거의 없는 pass-through 상태이므로 성능 영향은 무시할 수준이다. 단 한 프레임의 Update() 사이클에서 처리되고 즉시 다음 상태로 넘어간다.

## 관련 문서

- [[MKSummonNpcManager_SummonNpc_Analysis]]
- [[MKSummonNpcManager_Updata_WaitWorld_Analysis]]
- [[MKSummonNpcManager_Function_Analysis_Index]]
- [[MKSummonNpcManager_Crashlytics_LogGuide]]


