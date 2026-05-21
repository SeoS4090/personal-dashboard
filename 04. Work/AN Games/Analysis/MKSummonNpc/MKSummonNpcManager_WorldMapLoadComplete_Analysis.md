---
tags:
  - system/battle
  - system/world
  - status/done
aliases:
  - MKSummonNpcManager.WorldMapLoadComplete 분석
description: `VillageToWorld()`에서 `WorldManager.WorldMapFogEndCallback`에 등록된 콜백. 월드 맵 로딩이 완료되어 포그(Fog)가 걷힐 때 호출되어 상태를 `WORLD`로 전이하...
created: 2026-05-20
updated: 2026-05-20
---

← [[MKSummonNpcManager_Function_Analysis_Index]]


# MKSummonNpcManager.WorldMapLoadComplete 분석

## 개요
`VillageToWorld()`에서 `WorldManager.WorldMapFogEndCallback`에 등록된 콜백. 월드 맵 로딩이 완료되어 포그(Fog)가 걷힐 때 호출되어 상태를 `WORLD`로 전이하고 타이머 및 콜백을 정리한다.

## 주요 책임/구성 요소

```csharp
void WorldMapLoadComplete()
{
    ManagerState = SUMMON_NPC_STATE.WORLD;
    WaitWorldEnterTime = -1f;
    WorldManager.WorldMapFogEndCallback = null;
}
```

- `SUMMON_NPC_STATE.WORLD` 상태로 전이: 이후 `Updata_World`에서 NPC 소환 가능 여부 확인 진행
- `WaitWorldEnterTime = -1f`: `Updata_WaitWorld`의 12초 폴백 타이머를 무효화
- `WorldMapFogEndCallback = null`: 콜백 해제로 다음 FogEnd 이벤트에 영향 없도록 정리

## 데이터/의존성 관계
- `WorldManager.WorldMapFogEndCallback` — 등록/해제 쌍이 `VillageToWorld` / `WorldMapLoadComplete`에 위치
- `WaitWorldEnterTime` — `Updata_WaitWorld`가 12초 경과 시 강제 전이에 사용하는 폴백 타이머
- `SUMMON_NPC_STATE.WORLD` — 다음 단계(소환 가능 여부 확인)의 진입 상태

## 문제점 및 개선 제안
- 정상 경로에서는 FogEnd 콜백이 타이머보다 먼저 도달하지만, 월드 로딩이 극단적으로 지연될 경우 `Updata_WaitWorld`의 12초 폴백이 먼저 상태를 전이시킬 수 있다. 이 경우 콜백이 뒤늦게 도달하면 이미 진행된 상태에서 `WORLD`로 재전이될 위험이 있음.

## 관련 문서
- [[MKSummonNpcManager_VillageToWorld_Analysis]]
- [[MKSummonNpcManager_SummonNpc_Analysis]]
- [[MKSummonNpcManager_Function_Analysis_Index]]


