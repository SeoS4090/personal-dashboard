---
tags:
  - system/battle
  - system/ui
  - concern/bug
  - status/done
aliases:
  - MKSummonNpcManager.CloseSearchWaitPopup 분석
description: `OpenSearchWaitPopup()`의 역방향 함수. 탐색 대기 팝업을 닫고 터치 입력을 복원한다. `Updata_End`에서 항상 호출되어 정리가 보장된다.
created: 2026-05-20
updated: 2026-05-20
---

← [[MKSummonNpcManager_Function_Analysis_Index]]


# MKSummonNpcManager.CloseSearchWaitPopup 분석

## 개요
`OpenSearchWaitPopup()`의 역방향 함수. 탐색 대기 팝업을 닫고 터치 입력을 복원한다. `Updata_End`에서 항상 호출되어 정리가 보장된다.

## 주요 책임/구성 요소

```csharp
void CloseSearchWaitPopup()
{
    CommonDocManager.instance.mainHud.SetTouchBlock(false); // 터치 입력 복원
    WorldUIDocuments.instance.HideSummonNpcSearchPopup();   // 팝업 숨김
}
```

- `SetTouchBlock(false)`: 차단된 터치 입력 복원
- `HideSummonNpcSearchPopup()`: 탐색 팝업 닫기
- `Updata_End`에서 성공/실패 무관하게 항상 호출됨

## 데이터/의존성 관계
- `CommonDocManager.instance.mainHud` — `OpenSearchWaitPopup`에서 차단된 터치를 복원
- `WorldUIDocuments.instance` — 팝업 가시성 제어
- `SetFailPopupToEnd(why)` → `Updata_End` → `CloseSearchWaitPopup()` 경로로 실패 시에도 복원 보장

## 문제점 및 개선 제안
- **END 상태 우회 시 잠금 고착**: 상태 머신이 어떤 이유로든 `Updata_End`를 거치지 않고 종료되면 `SetTouchBlock(false)`가 호출되지 않아 게임 전체가 입력 불가 상태가 된다. 이는 사용자에게 매우 심각한 버그이므로, 앱 포커스 복귀나 씬 전환 시점에 방어적 `SetTouchBlock(false)` 호출을 검토할 것.

## 관련 문서
- [[MKSummonNpcManager_OpenSearchWaitPopup_Analysis]]
- [[MKSummonNpcManager_SummonNpc_Analysis]]
- [[MKSummonNpcManager_Function_Analysis_Index]]


