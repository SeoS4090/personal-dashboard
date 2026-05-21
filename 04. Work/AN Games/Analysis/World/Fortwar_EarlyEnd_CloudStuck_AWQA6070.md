---
tags:
  - analysis
  - system/world
  - system/ui
  - system/sound
  - concern/bug
  - status/wip
aliases:
  - AWQA-6070
  - 요새전 조기 종료 구름 정지
description: 크로스 서버 요새전이 조기 종료된 후 마을로 복귀 시 월드맵 구름(fog) 애니메이션이 정지하는 버그 (AWQA-6070)
created: 2026-05-21
updated: 2026-05-21
---

← [[World_MOC]]

# AWQA-6070 요새전 조기 종료 구름 정지 버그

## 요약

### 무슨 문제였나?
크로스 서버 요새전이 예정 시간보다 일찍 끝났을 때 마을로 돌아오면 월드맵 화면의 구름(안개) 애니메이션이 멈추는 현상이 발생했다. 화면이 자연스럽게 열리지 않고 구름이 그대로 정지된 상태로 남는다.

### 어떻게 고쳤나?
현재 조사 중이다. 아래는 현재까지 파악된 가설 경로다.

| 단계 | 상태 |
|------|------|
| 조기 종료 시 fog 상태머신 경로 추적 | 🔍 조사 중 |
| MainHudUi.GetWorldMapCenter NRE 방어 분석 | 🔍 조사 중 |
| Village→Fortwar 씬 전환 fog end/start 콜백 체인 확인 | 🔍 조사 중 |

### 현재 상태는?
- 🔍 조사 중 — 재현 조건 및 원인 경로 확정 필요
- ⚠️ 정상 종료 경로와 조기 종료 경로의 fog 처리 차이 검증 필요

> **한 줄 요약**: "요새전 조기 종료 시 구름 애니메이션이 정상 종료 경로를 거치지 못해 정지 상태로 남는 버그를 조사 중이다."

---

## 1. 현상/개요

크로스 서버 요새전(FortWar)은 정해진 시간에 종료되지만, 조건(예: 한 쪽 거점 조기 점령)에 따라 예정 시간 이전에 종료될 수 있다. 이 경우 마을 복귀 씬 전환 시 월드맵 구름(fog) 애니메이션이 멈추는 현상이 보고됐다.

재현 조건:
- 크로스 서버 요새전 참가
- 예정 종료 시간 이전 조기 종료 이벤트 수신
- 마을 복귀 씬 전환 진행
- → 월드맵 진입 후 fog 애니메이션이 정지

## 2. 원인 분석 (가설)

현재 추정 원인은 fog 상태 머신의 비정상 경로 처리다.

```
정상 종료:
  FortwarEnd → WorldManager.FogEnd() → fog 애니메이션 종료 → INIT 복귀

조기 종료 (추정 실패 경로):
  FortwarEarlyEnd → ??? → FogEnd 콜백 미호출 → INIT 미복귀
                              └→ MainHudUi.GetWorldMapCenter NRE 발생?
                                 └→ fog 콜백 체인 중단 → 구름 정지
```

`MKSummonNpcManager_Updata_WaitWorld_Analysis`에서 확인된 것처럼 FogEnd 콜백 유실은 다른 경로에서도 발생한 선례가 있다. 조기 종료는 정상 종료와 다른 이벤트 시퀀스를 타며, 이때 fog end 콜백이 누락될 가능성이 높다.

추가 조사 필요 포인트:
- `WorldManager.cs` → `OnFortwarEarlyEnd` 처리 시 fog 상태 전이 경로
- `MainHudUi.GetWorldMapCenter` 호출 시 NullReferenceException 발생 여부
- `VillageToWorld()` 진입 시 fog 초기화 선행 조건 충족 여부

## 3. 수정 방법 (조사 중)

수정 방향 후보:

1. **방어적 NRE 처리**: `MainHudUi.GetWorldMapCenter` 호출 전 null 체크 추가
2. **Fog 강제 복귀**: 조기 종료 이벤트 수신 시 fog 상태를 INIT으로 강제 리셋하는 안전장치 추가
3. **콜백 체인 보완**: FortwarEarlyEnd 경로에도 정상 종료와 동일한 FogEnd → FogStart 시퀀스 보장

확정 수정 방법은 재현 후 결정 예정이다.

## 연관 문서

- [[MKSummonNpcManager_Updata_WaitWorld_Analysis]] — FogEnd 콜백 유실 시 12초 폴백 복구 선례
- [[MKSummonNpcManager_VillageToWorld_Analysis]] — Village→World 씬 전환 fog 처리
- [[MKSummonNpcManager_WorldMapLoadComplete_Analysis]] — FogEnd 콜백 실행 및 WORLD 전이
