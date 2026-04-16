---
tags:
  - system/battle
  - status/done
---

# MKSummonNpcManager.SummonNpcCallbackSucc 분석

## 개요
NPC 소환 네트워크 요청(`Request_SummonRallyNPC` / `Send3058_FindNPC`) 성공 콜백. 상태를 `SUMMON_NPC_SUCCESS`로 전이하는 단일 책임 함수.

## 주요 책임/구성 요소

```csharp
void SummonNpcCallbackSucc()
{
    ManagerState = SUMMON_NPC_STATE.SUMMON_NPC_SUCCESS;
}
```

- 네트워크 성공 응답 시 상태 머신에 성공을 알리는 단순 전이
- `WorldObjSearchPosStart`에서 기존 NPC를 탐색하여 발견한 경우에도 소환 요청 없이 이 콜백을 직접 호출 — "소환 불필요, 이미 존재" 경로와 "소환 요청 성공" 경로가 동일 콜백으로 통합

## 데이터/의존성 관계
- `Request_SummonRallyNPC` / `Send3058_FindNPC` — 네트워크 요청의 성공 콜백으로 연결
- `WorldObjSearchPosStart` — 기존 NPC 발견 시 직접 호출
- `SUMMON_NPC_STATE.SUMMON_NPC_SUCCESS` — 다음 단계(소환된 NPC로 이동) 진입 상태

## 문제점 및 개선 제안
- 두 진입 경로(서버 소환 성공 / 기존 NPC 발견)가 같은 콜백으로 합쳐져 있어 이후 로직이 두 케이스를 구분해야 할 경우 분기가 어려워짐. 현재는 구분이 불필요하므로 적절한 설계.

## 관련 문서
- [[MKSummonNpcManager_SummonNpcCallbackFail_Analysis]]
- [[MKSummonNpcManager_SummonNpc_Analysis]]
- [[MKSummonNpcManager_Function_Analysis_Index]]
