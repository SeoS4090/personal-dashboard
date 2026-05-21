---
tags:
  - system/battle
  - concern/bug
  - status/done
aliases:
  - MKSummonNpcManager.SummonNpcCallbackFail 분석
description: NPC 소환 네트워크 요청 실패 콜백. 상태를 `SUMMON_NPC_FAIL`로 전이하는 단일 책임 함수.
created: 2026-05-20
updated: 2026-05-20
---

← [[MKSummonNpcManager_Function_Analysis_Index]]


# MKSummonNpcManager.SummonNpcCallbackFail 분석

## 개요
NPC 소환 네트워크 요청 실패 콜백. 상태를 `SUMMON_NPC_FAIL`로 전이하는 단일 책임 함수.

## 주요 책임/구성 요소

```csharp
void SummonNpcCallbackFail()
{
    ManagerState = SUMMON_NPC_STATE.SUMMON_NPC_FAIL;
}
```

- 네트워크 실패 응답 시 상태 머신에 실패를 알리는 단순 전이
- 이후 `Updata_SummonNpcFail` → `SetFailPopupToEnd(why)` 경로로 처리

## 데이터/의존성 관계
- `Request_SummonRallyNPC` / `Send3058_FindNPC` — 네트워크 요청의 실패 콜백으로 연결
- `SUMMON_NPC_STATE.SUMMON_NPC_FAIL` — 실패 팝업 표시 후 END 전이

## 문제점 및 개선 제안
- **실패 원인 미전달**: 콜백 시그니처가 인자를 받지 않아 서버 응답 코드(rc) 등 실패 원인이 전달되지 않는다. 따라서 `Updata_SummonNpcFail`에서는 구체적인 실패 원인 메시지를 표시할 수 없고, `ShowFailPopup`의 기본값(일반 실패 메시지)만 표시된다.
- 개선안: `SummonNpcCallbackFail(long rc = 0)` 등 원인 코드를 수용하는 시그니처로 변경하면 쿨타임/용량 부족 등 구체적 메시지 표시 가능.

## 관련 문서
- [[MKSummonNpcManager_SummonNpcCallbackSucc_Analysis]]
- [[MKSummonNpcManager_ShowFailPopup_Analysis]]
- [[MKSummonNpcManager_SummonNpc_Analysis]]
- [[MKSummonNpcManager_Function_Analysis_Index]]


