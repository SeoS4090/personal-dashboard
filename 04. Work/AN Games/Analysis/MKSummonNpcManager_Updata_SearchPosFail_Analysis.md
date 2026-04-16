---
tags:
  - system/battle
  - concern/bug
  - status/done
---

# MKSummonNpcManager.Updata_SearchPosFail 분석

## 개요

`Updata_SearchPosStart`에서 빈 리젠포인트를 0개 찾았을 때 진입하는 실패 처리 상태. `TraceSummonStep`으로 실패를 로깅하고 `SetFailPopupToEnd()`로 기본 실패 팝업을 표시한 뒤 END 상태로 전이한다.

## 주요 책임/구성 요소

- **진입 조건**: `Updata_SearchPosStart`에서 `find_no_list.Count == 0`인 경우
- **로깅**: `TraceSummonStep("Updata_SearchPosFail", "Search position failed", null, true)` — 4번째 파라미터 `true`는 오류 레벨 로깅
- **팝업**: `SetFailPopupToEnd()` — `t_popup_msg_npc_summon_fail` 팝업 표시 후 END 전이

```csharp
void Updata_SearchPosFail()
{
    TraceSummonStep("Updata_SearchPosFail", "Search position failed", null, true);
    SetFailPopupToEnd();
}
```

## 데이터/의존성 관계

```
SearchPosStart → find_no_list.Count == 0
        ↓
ManagerState = SEARCH_POS_FAIL
        ↓
Updata_SearchPosFail()
        ↓
SetFailPopupToEnd() → 팝업 표시 → ManagerState = END
```

**WorldObjSearchPosStart와의 비교**:
- WorldObj 경로에서 NPC를 찾지 못한 경우: 별도 토스트 메시지 표시 후 직접 END로 전이 → 이 상태를 거치지 않음
- 아이템 소환 경로(SearchPosStart)에서만 이 상태로 진입

## 문제점 및 개선 제안

1. **실패 원인 불투명**: 팝업 메시지가 단일 실패 메시지(`t_popup_msg_npc_summon_fail`)로 고정되어 있어 사용자가 왜 소환에 실패했는지 알 수 없다. "주변에 빈 위치가 없습니다"와 같은 구체적 메시지로 분리를 권장.
2. **재시도 없음**: 탐색 실패 시 자동 재시도나 검색 범위 확장 로직이 없다. `Updata_SearchPosStart_multi`의 `_ignore_outline` 파라미터가 이 목적으로 설계되었으나 미구현 상태.

## 관련 문서
- [[MKSummonNpcManager_SummonNpc_Analysis]]
- [[MKSummonNpcManager_Function_Analysis_Index]]
- [[MKSummonNpcManager_Updata_SearchPosStart_Analysis]]
- [[MKSummonNpcManager_Updata_SummonNpcFail_Analysis]]
- [[MKSummonNpcManager_Updata_End_Analysis]]
