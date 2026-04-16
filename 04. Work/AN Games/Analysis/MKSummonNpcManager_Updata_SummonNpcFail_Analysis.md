---
tags:
  - system/battle
  - system/network
  - concern/bug
  - status/done
---

# MKSummonNpcManager.Updata_SummonNpcFail 분석

## 개요

서버 소환 실패 응답(`SummonNpcCallbackFail`) 후 진입하는 실패 처리 상태. 실패 로깅 후 `SetFailPopupToEnd()`로 기본 실패 팝업을 표시하고 END로 전이한다. 서버 실패 원인 코드가 콜백에 전달되지 않아 사용자에게 구체적인 실패 사유를 제공할 수 없다.

## 주요 책임/구성 요소

- **로깅**: `TraceSummonStep("Updata_SummonNpcFail", "Summon request failed callback", null, true)` — 오류 레벨
- **팝업**: `SetFailPopupToEnd()` — 기본 실패 팝업 표시 후 END 전이

```csharp
void Updata_SummonNpcFail()
{
    TraceSummonStep("Updata_SummonNpcFail", "Summon request failed callback", null, true);
    SetFailPopupToEnd();
}
```

## 데이터/의존성 관계

```
SummonNpcCallbackFail() → ManagerState = SUMMON_NPC_FAIL
        ↓
Updata_SummonNpcFail()
    ├─ TraceSummonStep (오류 로깅)
    └─ SetFailPopupToEnd() → 팝업 표시 → ManagerState = END
        ↓
Updata_End() → 정리 및 NONE 전이
```

**콜백 시그니처**: `void SummonNpcCallbackFail()` — 서버 응답 코드(rc) 전달 없음

**비교 — SearchPosFail**:
- SearchPosFail: 클라이언트 탐색 실패 (빈 위치 없음)
- SummonNpcFail: 서버 소환 요청 실패 (서버 처리 오류, 아이템 부족, 쿨타임 등 가능)

## 문제점 및 개선 제안

1. **실패 원인 코드 없음 (설계 결함)**: `SummonNpcCallbackFail()`이 서버의 `rc` 코드를 전달하지 않아 실패 원인을 구분할 수 없다. 아이템 소진, 쿨타임 중, 서버 오류 등 다양한 원인이 모두 동일한 팝업으로 처리된다.
   - **개선**: 콜백 시그니처를 `void SummonNpcCallbackFail(int rc)`로 변경하고, rc 코드에 따라 팝업 메시지를 분기.
2. **단일 실패 메시지**: `t_popup_msg_npc_summon_fail` 단일 로컬라이제이션 키 사용. 원인별 메시지 키 추가 필요.
3. **재시도 없음**: 일시적 서버 오류(예: 타임아웃)의 경우 자동 재시도가 없다. UX 개선 관점에서 1회 재시도 옵션 제공 고려.

## 관련 문서
- [[MKSummonNpcManager_SummonNpc_Analysis]]
- [[MKSummonNpcManager_Function_Analysis_Index]]
- [[MKSummonNpcManager_Updata_SummonNpcStart_Analysis]]
- [[MKSummonNpcManager_Updata_SummonNpcWait_Analysis]]
- [[MKSummonNpcManager_Updata_SearchPosFail_Analysis]]
- [[MKSummonNpcManager_Updata_End_Analysis]]
