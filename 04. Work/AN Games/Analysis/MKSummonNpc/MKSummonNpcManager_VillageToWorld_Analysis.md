---
tags:
  - system/battle
  - system/world
  - status/done
aliases:
  - MKSummonNpcManager.VillageToWorld 분석
description: `Updata_VillageToWorld` 상태에서 호출되는 실제 씬 전환 실행 함수. Village → World 전환 시 연맹 가입 제안 팝업을 억제하고 FogEnd 콜백을 통해 월드 로드 완료를 감지한다.
created: 2026-05-20
updated: 2026-05-20
---

← [[MKSummonNpcManager_Function_Analysis_Index]]


# MKSummonNpcManager.VillageToWorld 분석

## 개요
`Updata_VillageToWorld` 상태에서 호출되는 실제 씬 전환 실행 함수. Village → World 전환 시 연맹 가입 제안 팝업을 억제하고 FogEnd 콜백을 통해 월드 로드 완료를 감지한다.

## 주요 책임/구성 요소

```csharp
void VillageToWorld()
{
    AllyManager.instance.joinOfferExcept = true;  // 연맹 참가 제안 팝업 억제

    // WorldMapLoadCompleteCallback 대신 FogEnd 사용 (간섭 방지)
    WorldManager.WorldMapFogEndCallback = WorldMapLoadComplete;

    CommonDocManager.instance.mainHud.ToggleScene();
}
```

- `joinOfferExcept = true`: 씬 전환 도중 연맹 가입 제안 팝업이 열리지 않도록 억제
- `WorldMapFogEndCallback`: 주석에 명시된 대로 `WorldMapLoadCompleteCallback`은 다른 콘텐츠와 간섭할 수 있어 FogEnd 콜백 방식을 사용
- `ToggleScene()`: 실제 Village → World 씬 전환을 트리거

## 데이터/의존성 관계
- `AllyManager.instance.joinOfferExcept` — bool 플래그, 전환 완료 후 리셋 필요
- `WorldManager.WorldMapFogEndCallback` — `WorldMapLoadComplete` 메서드 등록; 완료 후 null로 정리
- `CommonDocManager.instance.mainHud.ToggleScene()` — 실제 씬 전환

## 문제점 및 개선 제안
- `joinOfferExcept` 플래그는 `WorldMapLoadComplete` 혹은 실패 경로에서 반드시 `false`로 복원되어야 함. 전환 실패 시 플래그가 고착되면 이후 연맹 제안 팝업이 영구 억제될 수 있음.

## 관련 문서
- [[MKSummonNpcManager_WorldMapLoadComplete_Analysis]]
- [[MKSummonNpcManager_SummonNpc_Analysis]]
- [[MKSummonNpcManager_Function_Analysis_Index]]


