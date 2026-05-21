---
tags:
  - system/battle
  - system/ui
  - status/done
aliases:
  - MKSummonNpcManager.SetFailPopupToEnd 분석
description: 모든 실패 분기를 통합하는 종료 처리 함수. `ManagerState`를 `END`로 전이한 뒤 실패 팝업을 표시한다. 실제 터치 복원과 팝업 닫기는 `Updata_End`에서 처리된다.
created: 2026-05-20
updated: 2026-05-20
---

← [[MKSummonNpcManager_Function_Analysis_Index]]


# MKSummonNpcManager.SetFailPopupToEnd 분석

## 개요
모든 실패 분기를 통합하는 종료 처리 함수. `ManagerState`를 `END`로 전이한 뒤 실패 팝업을 표시한다. 실제 터치 복원과 팝업 닫기는 `Updata_End`에서 처리된다.

## 주요 책임/구성 요소

```csharp
void SetFailPopupToEnd(long why = 0)
{
    // why, isFailure=true 로깅
    ManagerState = SUMMON_NPC_STATE.END;
    ShowFailPopup(why);
}
```

- `ManagerState = END`: 다음 업데이트 루프에서 `Updata_End`가 호출되어 터치 해제와 팝업 닫기를 수행
- `ShowFailPopup(why)`: 이유 코드에 맞는 토스트 메시지 즉시 표시
- 기본값 `why = 0`: 호출 측에서 원인 미지정 시 일반 실패 메시지로 폴백

## 데이터/의존성 관계
- 호출되는 실패 경로:
  - `Updata_World`: 쿨타임 조건 충족 시 (`why = 1`)
  - `Updata_DownloadFail`: 다운로드 실패 시 (`why = 0`)
  - `Updata_SearchPosFail`: 탐색 좌표 없음 시 (`why = 0`)
  - `Updata_SummonNpcFail`: 소환 네트워크 실패 시 (`why = 0`)
- `ShowFailPopup(long why)` — 토스트 메시지 표시
- `SUMMON_NPC_STATE.END` — `Updata_End`의 진입 트리거

## 문제점 및 개선 제안
- **책임 분리**: 상태 전이와 팝업 표시가 한 함수에 있어 역할이 명확하지 않다. 하지만 모든 실패 경로를 단일 진입점으로 수렴시키는 설계는 누락 방지 측면에서 긍정적.
- **why 코드 일관성**: 현재 `why=1`은 쿨타임에만 사용되고 나머지는 모두 `0`. 향후 원인 코드를 서버 rc 기반으로 확장하면 `ShowFailPopup`과 연계하여 세분화된 UX 제공 가능.

## 관련 문서
- [[MKSummonNpcManager_ShowFailPopup_Analysis]]
- [[MKSummonNpcManager_CloseSearchWaitPopup_Analysis]]
- [[MKSummonNpcManager_SummonNpc_Analysis]]
- [[MKSummonNpcManager_Function_Analysis_Index]]


