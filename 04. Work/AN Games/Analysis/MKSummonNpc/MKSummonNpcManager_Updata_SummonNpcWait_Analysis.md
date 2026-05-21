---
tags:
  - system/battle
  - system/network
  - concern/bug
  - status/done
aliases:
  - MKSummonNpcManager.Updata_SummonNpcWait 분석
description: 서버 소환 응답 대기 전용 빈 상태 핸들러. `SummonNpcCallbackSucc()` 또는 `SummonNpcCallbackFail()`이 호출될 때까지 매 프레임 빈 루프로 대기한다. 네트워크 타임아웃 ...
created: 2026-05-20
updated: 2026-05-20
---

← [[MKSummonNpcManager_Function_Analysis_Index]]


# MKSummonNpcManager.Updata_SummonNpcWait 분석

## 개요

서버 소환 응답 대기 전용 빈 상태 핸들러. `SummonNpcCallbackSucc()` 또는 `SummonNpcCallbackFail()`이 호출될 때까지 매 프레임 빈 루프로 대기한다. 네트워크 타임아웃 처리가 없어 서버 무응답 시 영구 잠금 위험이 있다.

## 주요 책임/구성 요소

- **역할**: 서버 소환 API 응답 대기 전용 빈 상태
- **탈출 조건**: 서버 응답 콜백 호출
  - 성공: `SummonNpcCallbackSucc()` → `SUMMON_NPC_SUCCESS`
  - 실패: `SummonNpcCallbackFail()` → `SUMMON_NPC_FAIL`

```csharp
void Updata_SummonNpcWait()
{
    // 작업대기용 state
}
```

## 데이터/의존성 관계

```
Updata_SummonNpcStart() → ManagerState = SUMMON_NPC_WAIT
        ↓ (매 프레임 빈 루프)
        ↓ (네트워크 응답 도착)
SummonNpcCallbackSucc() → ManagerState = SUMMON_NPC_SUCCESS
SummonNpcCallbackFail() → ManagerState = SUMMON_NPC_FAIL
```

## 문제점 및 개선 제안

1. **타임아웃 없음 (버그 위험)**: 서버 응답이 오지 않으면 SUMMON_NPC_WAIT 상태에 영구 잔류한다. `MKSummonNpcManager`가 NONE 상태가 아니면 새 소환을 시작할 수 없으므로, 네트워크 장애 시 사용자가 소환 기능을 영구적으로 사용할 수 없게 된다.
   - **개선**: `waitStartTime`을 기록하고 일정 시간(예: 10~15초) 경과 시 FAIL 또는 강제 END 처리.
2. **사용자 피드백 없음**: 대기 중 로딩 스피너/팝업이 이미 표시되어 있는지 확인 필요. 장시간 대기 시 추가 안내 메시지 표시를 권장.
3. **SearchPosWait와 동일한 구조**: 두 Wait 상태 모두 타임아웃이 없다. 공통 타임아웃 메커니즘을 상위 Update 루프에 추가하는 것이 효율적.

## 관련 문서
- [[MKSummonNpcManager_SummonNpc_Analysis]]
- [[MKSummonNpcManager_Function_Analysis_Index]]
- [[MKSummonNpcManager_Updata_SummonNpcStart_Analysis]]
- [[MKSummonNpcManager_Updata_SearchPosWait_Analysis]]
- [[MKSummonNpcManager_Updata_SummonNpcSuccess_Analysis]]
- [[MKSummonNpcManager_Updata_SummonNpcFail_Analysis]]


