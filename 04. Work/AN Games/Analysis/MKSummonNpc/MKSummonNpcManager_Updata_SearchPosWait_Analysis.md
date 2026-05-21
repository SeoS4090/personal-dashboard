---
tags:
  - system/battle
  - status/done
aliases:
  - MKSummonNpcManager.Updata_SearchPosWait 분석
description: 비동기 탐색(`SearchPosStart_multi`) 완료를 대기하는 전용 상태 핸들러. 함수 본체는 비어 있으며, `SearchEndCallback()`이 외부에서 `ManagerState`를 변경할 때까지...
created: 2026-05-20
updated: 2026-05-20
---

← [[MKSummonNpcManager_Function_Analysis_Index]]


# MKSummonNpcManager.Updata_SearchPosWait 분석

## 개요

비동기 탐색(`SearchPosStart_multi`) 완료를 대기하는 전용 상태 핸들러. 함수 본체는 비어 있으며, `SearchEndCallback()`이 외부에서 `ManagerState`를 변경할 때까지 매 프레임 빈 루프로 대기한다.

## 주요 책임/구성 요소

- **역할**: 비동기 코루틴 완료 대기 전용 빈 상태
- **탈출 조건**: 외부 콜백(`SearchEndCallback`)이 호출되어 ManagerState를 변경할 때
- **현재 실질적 사용**: 동기 탐색(SearchPosStart)은 즉시 SUCCESS/FAIL로 분기하므로 실제로 이 상태에 진입하는 코드 경로가 현재 없음

```csharp
void Updata_SearchPosWait()
{
    // 작업대기용 state
}
```

## 데이터/의존성 관계

```
SearchPosStart_multi() → ManagerState = SEARCH_POS_WAIT
        ↓ (매 프레임 Updata_SearchPosWait 호출 — 빈 루프)
SearchEndCallback() 외부 호출
        ↓
ManagerState = SEARCH_POS_SUCCESS / SEARCH_POS_FAIL
```

## 문제점 및 개선 제안

- **현재 사용되지 않음**: SearchPosStart_multi가 비활성화된 상태이므로 이 상태에 진입하는 경로가 없다. 비동기 버전이 재활성화될 때 함께 동작한다.
- **타임아웃 없음**: 콜백이 영원히 오지 않는 경우(코루틴 예외 등) 이 상태에 영구 잔류 가능성이 있다. 비동기 버전 재활성화 시 타임아웃 폴백 추가를 강력히 권장.

## 관련 문서
- [[MKSummonNpcManager_SummonNpc_Analysis]]
- [[MKSummonNpcManager_Updata_SearchPosStart_multi_Analysis]]
- [[MKSummonNpcManager_Updata_SummonNpcWait_Analysis]]


