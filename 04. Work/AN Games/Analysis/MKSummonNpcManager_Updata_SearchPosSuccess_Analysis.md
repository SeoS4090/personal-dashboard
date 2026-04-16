---
tags:
  - system/battle
  - status/done
---

# MKSummonNpcManager.Updata_SearchPosSuccess 분석

## 개요

리젠 후보 목록(RegenDataList)이 성공적으로 확보된 후 실제 서버 소환 요청 단계로 진입하는 단순 전이 상태. 로깅 후 즉시 SUMMON_NPC_START로 상태를 변경한다.

## 주요 책임/구성 요소

- **역할**: 탐색 성공 → 소환 요청 단계 전이 브릿지
- **진입 경로**:
  - `Updata_SearchPosStart` (아이템 소환, 동기 탐색 성공)
  - `Updata_SearchPosStart_multi`의 SearchEndCallback (비동기 탐색 성공, 현재 비활성화)
  - `WorldObjSearchPosStart` (일반 소환 경로, 기존 월드 NPC 미발견 시 새 포지션 탐색 성공)
- **동작**: regen_count 로깅 후 `ManagerState = SUMMON_NPC_STATE.SUMMON_NPC_START`

```csharp
void Updata_SearchPosSuccess()
{
    // regen_count 로깅
    ManagerState = SUMMON_NPC_STATE.SUMMON_NPC_START;
}
```

## 데이터/의존성 관계

```
SEARCH_POS_SUCCESS (SearchPosStart 또는 WorldObjSearchPosStart)
        ↓
Updata_SearchPosSuccess()
        ↓
SUMMON_NPC_START → Updata_SummonNpcStart
```

- 이 상태는 RegenDataList를 직접 참조하지 않으나, 다음 단계인 `Updata_SummonNpcStart`가 RegenDataList를 네트워크 요청에 사용한다.

## 관련 문서
- [[MKSummonNpcManager_SummonNpc_Analysis]]
- [[MKSummonNpcManager_Function_Analysis_Index]]
- [[MKSummonNpcManager_Updata_SearchPosStart_Analysis]]
- [[MKSummonNpcManager_Updata_SummonNpcStart_Analysis]]
