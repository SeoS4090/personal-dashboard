---
tags:
  - system/battle
  - concern/bug
  - status/done
---

# MKSummonNpcManager.Updata_End 분석

## 개요

성공/실패 **모든 경로의 최종 정리 상태**. 탐색 세션 종료, 대기 팝업 닫기, ManagerState를 NONE으로 리셋해 다음 소환을 허용한다. 이 상태가 실행되지 않으면 MKSummonNpcManager가 영구 잠금 상태가 된다.

## 주요 책임/구성 요소

- **탐색 세션 종료**: `MKEmptyPosSearchManager.Instance.SearchEnd()` — 탐색 세션/리소스 반환
- **팝업 닫기**: `CloseSearchWaitPopup()` — 소환 대기 중 표시한 로딩 팝업 제거
- **상태 리셋**: `ManagerState = SUMMON_NPC_STATE.NONE` — 다음 소환 허용
- **로깅**: `TraceSummonStep("Updata_End", "Cleanup and return to NONE")`

```csharp
void Updata_End()
{
    TraceSummonStep("Updata_End", "Cleanup and return to NONE");
    MKEmptyPosSearchManager.Instance.SearchEnd();
    CloseSearchWaitPopup();
    ManagerState = SUMMON_NPC_STATE.NONE;
}
```

## 데이터/의존성 관계

```
모든 종료 경로 → ManagerState = END
        ↓
Updata_End()
    ├─ MKEmptyPosSearchManager.SearchEnd()   (탐색 세션 정리)
    ├─ CloseSearchWaitPopup()                (UI 정리)
    └─ ManagerState = NONE                   (잠금 해제)
```

**진입 경로 (모든 종료 경로)**:
- `SetFailPopupToEnd()` → FAIL 팝업 확인 후 END (SearchPosFail, SummonNpcFail 공통)
- `Updata_SummonNpcSuccess()` → `ManagerState = END` 직접 설정
- `WorldObjSearchPosStart` — NPC 발견 시 직접 END 진입 가능성 확인 필요

## 문제점 및 개선 제안

1. **영구 잠금 위험 (핵심 버그 위험)**: 어떤 예외나 오류로 인해 이 상태를 건너뛰거나 실행되지 않으면 ManagerState가 NONE으로 돌아오지 않아 소환 기능이 완전히 비활성화된다. 모든 상태 전이 경로가 END를 반드시 통과하는지 정기적으로 검증 필요.
2. **SearchEnd() 호출 시점**: 탐색 세션이 단건 동기 탐색(SearchPosStart)을 사용하는 경우 SearchEnd()가 의미 있는 정리 작업을 하는지 확인 필요. 비동기 버전(SearchPosStart_multi) 활성화 시 중요해짐.
3. **터치 입력 복원**: `CloseSearchWaitPopup()`이 터치 입력 차단도 해제하는지 확인 필요. 팝업이 닫혔으나 입력 차단이 해제되지 않으면 UI가 먹통이 될 수 있다.
4. **상태 초기화 불완전 가능성**: END에서 NONE으로 전이할 때 RegenDataList, NpcID, ItemID 등 중간 데이터가 초기화되는지 확인 필요. 다음 소환 시 stale 데이터가 남아있을 경우 예기치 않은 동작 발생 가능.

## 관련 문서
- [[MKSummonNpcManager_SummonNpc_Analysis]]
- [[MKSummonNpcManager_Function_Analysis_Index]]
- [[MKSummonNpcManager_Updata_SummonNpcSuccess_Analysis]]
- [[MKSummonNpcManager_Updata_SummonNpcFail_Analysis]]
- [[MKSummonNpcManager_Updata_SearchPosFail_Analysis]]
