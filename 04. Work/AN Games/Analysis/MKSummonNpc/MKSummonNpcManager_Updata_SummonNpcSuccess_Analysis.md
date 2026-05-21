---
tags:
  - system/battle
  - status/done
aliases:
  - MKSummonNpcManager.Updata_SummonNpcSuccess 분석
description: 서버 소환 성공 응답 후 진입하는 최종 성공 처리 상태. `SaveCreateNPCTime()`으로 쿨타임용 소환 시각을 로컬에 저장하고 즉시 END로 전이한다.
created: 2026-05-20
updated: 2026-05-20
---

← [[MKSummonNpcManager_Function_Analysis_Index]]


# MKSummonNpcManager.Updata_SummonNpcSuccess 분석

## 개요

서버 소환 성공 응답 후 진입하는 최종 성공 처리 상태. `SaveCreateNPCTime()`으로 쿨타임용 소환 시각을 로컬에 저장하고 즉시 END로 전이한다.

## 주요 책임/구성 요소

- **로깅**: `TraceSummonStep("Updata_SummonNpcSuccess", "Summon success")`
- **쿨타임 저장**: `WorldSearchPopup.SaveCreateNPCTime()` — Easy Save 2 또는 유사 로컬 저장소에 소환 시각 기록
- **상태 전이**: 즉시 `ManagerState = SUMMON_NPC_STATE.END`

```csharp
void Updata_SummonNpcSuccess()
{
    TraceSummonStep("Updata_SummonNpcSuccess", "Summon success");
    ManagerState = SUMMON_NPC_STATE.END;
    WorldSearchPopup.SaveCreateNPCTime();
}
```

## 데이터/의존성 관계

```
SummonNpcCallbackSucc() → ManagerState = SUMMON_NPC_SUCCESS
        ↓
Updata_SummonNpcSuccess()
    ├─ TraceSummonStep (로깅)
    ├─ ManagerState = END
    └─ WorldSearchPopup.SaveCreateNPCTime() (로컬 저장)
        ↓
Updata_End() → 정리 및 NONE 전이
```

**진입 경로**:
1. `SummonNpcCallbackSucc()` — 서버 응답으로 소환 성공 (일반/아이템 소환 공통)
2. `WorldObjSearchPosStart`에서 기존 월드 NPC를 발견한 경우 `SummonNpcCallbackSucc()`를 직접 호출 → 이 상태 진입

**주목할 점**: `ManagerState = END` 설정 후에 `SaveCreateNPCTime()`이 호출된다. 즉, 다음 프레임에 Updata_End()가 실행되는 동안 SaveCreateNPCTime이 완료되어야 한다. SaveCreateNPCTime이 비동기이거나 느린 경우 순서 문제가 발생할 수 있으나, 로컬 저장이므로 일반적으로 동기 호출로 처리된다.

## 문제점 및 개선 제안

1. **SaveCreateNPCTime 호출 순서**: `ManagerState = END` 이후에 `SaveCreateNPCTime()`이 호출되므로 논리적 순서상 저장 전에 정리 로직이 시작될 수 있다. 저장을 상태 전이 전에 배치하는 것이 더 안전하다.
2. **성공 피드백 없음**: 소환 성공 시 사용자에게 NPC 위치를 알려주는 UI/이펙트가 이 상태에서 트리거되는지 확인 필요. 별도 이벤트/콜백으로 처리될 가능성이 높음.

## 관련 문서
- [[MKSummonNpcManager_SummonNpc_Analysis]]
- [[MKSummonNpcManager_Function_Analysis_Index]]
- [[MKSummonNpcManager_Updata_SummonNpcStart_Analysis]]
- [[MKSummonNpcManager_Updata_SummonNpcWait_Analysis]]
- [[MKSummonNpcManager_Updata_End_Analysis]]


