---
tags:
  - system/battle
  - system/network
  - status/done
---

# MKSummonNpcManager.Updata_SummonNpcStart 분석

## 개요

아이템 소환(ItemID > 0)과 일반 소환(ItemID == 0)의 **네트워크 요청 분기점**. RegenDataList를 서버에 전달하여 실제 NPC 소환을 요청하고 SUMMON_NPC_WAIT 상태로 전이한다.

## 주요 책임/구성 요소

- **ItemID > 0 (아이템 소환)**: `NetworkItem.instance.Request_SummonRallyNPC(ItemID, RegenDataList, SummonNpcCallbackSucc, SummonNpcCallbackFail)`
- **ItemID == 0 (일반 소환)**: `WorldNetwork.instance.Send3058_FindNPC(RegenDataList, SummonNpcCallbackSucc, SummonNpcCallbackFail)`
- **공통 콜백**: 두 경로 모두 `SummonNpcCallbackSucc` / `SummonNpcCallbackFail` 사용
- 상태는 요청 전에 즉시 `SUMMON_NPC_WAIT`으로 변경

```csharp
void Updata_SummonNpcStart()
{
    // item_id, regen_count 로깅
    ManagerState = SUMMON_NPC_STATE.SUMMON_NPC_WAIT;

    if (ItemID > 0)
        NetworkItem.instance.Request_SummonRallyNPC(ItemID, RegenDataList, SummonNpcCallbackSucc, SummonNpcCallbackFail);
    else
        WorldNetwork.instance.Send3058_FindNPC(RegenDataList, SummonNpcCallbackSucc, SummonNpcCallbackFail);
}
```

## 데이터/의존성 관계

```
SUMMON_NPC_START
        ↓
Updata_SummonNpcStart()
    ├─ ItemID > 0 → NetworkItem.Request_SummonRallyNPC(ItemID, RegenDataList)
    └─ ItemID == 0 → WorldNetwork.Send3058_FindNPC(RegenDataList)
        ↓ (비동기 응답)
SummonNpcCallbackSucc() → SUMMON_NPC_SUCCESS
SummonNpcCallbackFail() → SUMMON_NPC_FAIL
```

- **RegenDataList**: 탐색 단계에서 구성된 후보 리젠포인트 목록. 서버가 여기서 실제 소환 위치를 결정
- **ItemID**: 소환에 사용할 아이템 ID. 0이면 일반(무료) 소환
- **두 네트워크 API의 차이**: Request_SummonRallyNPC는 아이템을 소비하며 소환, Send3058은 기존 FindNPC 프로토콜 사용

## 문제점 및 개선 제안

1. **상태 전이 순서**: `ManagerState = SUMMON_NPC_WAIT`를 네트워크 요청 **전에** 설정하여 콜백이 동기로 호출되는 예외 케이스를 방어하는 것은 올바른 패턴이다.
2. **Send3058 경로**: `WorldObjSearchPosStart`가 기존 월드 NPC를 찾은 경우 콜백을 직접 호출하므로 이 상태를 건너뛸 수 있다. 이 경우 SEARCH_POS_SUCCESS → SUMMON_NPC_SUCCESS 직통 경로가 존재.
3. **에러 코드 전달 없음**: 두 API 모두 실패 콜백에 에러 코드를 전달하지 않으므로 `SummonNpcCallbackFail`에서 원인 파악이 불가. → [[MKSummonNpcManager_Updata_SummonNpcFail_Analysis]] 참조

## 관련 문서
- [[MKSummonNpcManager_SummonNpc_Analysis]]
- [[MKSummonNpcManager_Function_Analysis_Index]]
- [[MKSummonNpcManager_Updata_SummonNpcWait_Analysis]]
- [[MKSummonNpcManager_Updata_SummonNpcSuccess_Analysis]]
- [[MKSummonNpcManager_Updata_SummonNpcFail_Analysis]]
