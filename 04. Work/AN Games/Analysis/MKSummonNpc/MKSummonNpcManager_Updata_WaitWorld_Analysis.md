---
tags:
  - system/battle
  - concern/bug
  - status/done
aliases:
  - MKSummonNpcManager.Updata_WaitWorld 분석
description: `Updata_WaitWorld()`는 Village→World 씬 전환이 완료되기를 기다리는 폴백 안전망 상태다. **정상 경로**에서는 이 메서드가 실제로 상태를 전환하지 않는다 — 대신 `VillageTo...
created: 2026-05-20
updated: 2026-05-20
---

← [[MKSummonNpcManager_Function_Analysis_Index]]


# MKSummonNpcManager.Updata_WaitWorld 분석

## 개요

`Updata_WaitWorld()`는 Village→World 씬 전환이 완료되기를 기다리는 폴백 안전망 상태다. **정상 경로**에서는 이 메서드가 실제로 상태를 전환하지 않는다 — 대신 `VillageToWorld()`에서 설정한 `WorldMapFogEndCallback`이 씬 전환 완료(안개 소멸) 시점에 `WorldMapLoadComplete()`를 호출해 `WORLD` 상태로 전이한다.

이 메서드의 실질적 역할은 **콜백이 유실되거나 덮어쓰인 엣지케이스에서 12초 타임아웃 후 강제 복구**하는 것이다.

- **진입 조건**: `VILLAGE_TO_WORLD` 상태 이후 `WAIT_WORLD`로 전이된 직후
- **전이 방향**: `WAIT_WORLD` → `WORLD` (폴백 경로, 타임아웃 후)

## 주요 책임/구성 요소

1. **타이머 초기화 방어**: `WaitWorldEnterTime < 0f`이면 현재 시각으로 재설정한다. `Updata_VillageToWorld()`에서 이미 초기화되지만, 예외 경로로 `WaitWorldEnterTime`이 음수인 채로 이 상태에 진입할 경우를 방어한다.

2. **타임아웃 대기**: `elapsed < WaitWorldFallbackTimeoutSec`(상수 12f 초)이면 `return`하여 대기를 계속한다. 정상적으로 안개 콜백이 동작하면 12초 이내에 `WorldMapLoadComplete()`가 `WORLD`로 전이시키므로 이 경로는 실행되지 않는다.

3. **폴백 조건 확인 (12초 경과 후)**:
   - `isWorldScene`: 현재 씬이 `MKSCENE_WORLD`인지 확인
   - `isFogEnded`: `MKSceneManager.entryFog.IsFog == false`인지 확인 (안개가 이미 사라진 상태)
   - 두 조건이 모두 참이면 콜백 유실로 판단하고 강제 복구

4. **강제 복구 처리**:
   - `WorldManager.WorldMapFogEndCallback = null` — 잔여 콜백 참조를 정리
   - `ManagerState = SUMMON_NPC_STATE.WORLD` — 강제 전이
   - `WaitWorldEnterTime = -1f` — 타이머 리셋

## 데이터/의존성 관계

| 필드/시스템 | 방향 | 설명 |
|------------|------|------|
| `WaitWorldEnterTime` | 읽기/쓰기 | 타임아웃 기준점, 복구 후 -1f로 초기화 |
| `WaitWorldFallbackTimeoutSec` | 읽기 | 12f 상수 |
| `MKSceneManager.instance.GetCurMKScene()` | 읽기 | 현재 씬 확인 |
| `MKSceneManager.instance.entryFog.IsFog` | 읽기 | 안개 소멸 여부 확인 |
| `WorldManager.WorldMapFogEndCallback` | 쓰기 | 폴백 시 null로 정리 |
| `ManagerState` | 쓰기 | `WORLD`로 강제 전이 |

## 문제점 및 개선 제안

### 버그 위험: WorldMapFogEndCallback 덮어쓰기

`WorldMapFogEndCallback`은 정적(또는 싱글턴) 델리게이트로, 다른 시스템이 같은 씬 전환 시점에 이 콜백을 덮어쓸 경우 NPC 소환 완료 콜백이 유실된다. `Updata_WaitWorld()`의 존재 자체가 이 취약점을 인정하는 방어 코드다.

**개선 제안**: `WorldMapFogEndCallback`을 단일 콜백 대신 이벤트(`event Action`) 또는 콜백 리스트로 교체하면 여러 구독자가 안전하게 공존할 수 있다.

### 폴백이 발동되는 시나리오

주석에 명시된 `fallback_reason: "fog_end_callback_lost_or_overwritten"` 외에도 다음 상황에서 폴백이 발동될 수 있다:
- 씬 전환 도중 다른 씬 전환 요청이 겹쳐 콜백 체인이 끊어진 경우
- `entryFog` 오브젝트의 `IsFog` 플래그가 예상보다 늦게 해제된 경우

### null 안전성

`MKSceneManager.instance != null` 및 `entryFog != null` 체크가 포함되어 있어 null 참조 예외는 방어되어 있다.

## 성능/메모리 영향

12초 동안 매 프레임 `Update()` 루프에서 호출되지만 타임아웃 전에는 즉시 `return`하므로 비용은 미미하다. 다만 씬 전환 완료 후에도 이 상태가 지속되면 12초간 불필요한 폴링이 발생한다.

## 관련 문서

- [[MKSummonNpcManager_SummonNpc_Analysis]]
- [[MKSummonNpcManager_Updata_VillageToWorld_Analysis]]
- [[MKSummonNpcManager_Updata_World_Analysis]]
- [[MKSummonNpcManager_Function_Analysis_Index]]
- [[MKSummonNpcManager_Crashlytics_LogGuide]]


