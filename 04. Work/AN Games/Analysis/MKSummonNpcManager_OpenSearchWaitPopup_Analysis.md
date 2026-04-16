---
tags:
  - system/battle
  - system/ui
  - status/done
---

# MKSummonNpcManager.OpenSearchWaitPopup 분석

## 개요
NPC 소환 좌표 탐색 시작 시 호출되는 UI 제어 함수. 터치 입력을 차단하고 탐색 대기 팝업을 표시한다. 반드시 `CloseSearchWaitPopup()`과 쌍으로 호출되어야 한다.

## 주요 책임/구성 요소

```csharp
void OpenSearchWaitPopup()
{
    CommonDocManager.instance.mainHud.SetTouchBlock(true);  // 터치 입력 차단
    WorldUIDocuments.instance.ShowSummonNpcSearchPopup();   // 탐색 대기 팝업 표시
}
```

- `SetTouchBlock(true)`: 전체 화면 터치 입력을 차단하여 탐색 중 사용자 조작으로 인한 상태 오염 방지
- `ShowSummonNpcSearchPopup()`: 탐색 중임을 알리는 UI 팝업 표시
- `Updata_World`에서 NPC 소환 가능 확인 후 호출됨

## 데이터/의존성 관계
- `CommonDocManager.instance.mainHud` — 터치 차단 제어
- `WorldUIDocuments.instance` — NPC 탐색 팝업 표시/숨김 제어
- `CloseSearchWaitPopup()` — 반드시 이 함수의 역방향으로 호출되어야 함

## 문제점 및 개선 제안
- **터치 잠금 위험**: `SetTouchBlock(true)` 이후 어떤 경로로든 `CloseSearchWaitPopup()`이 호출되지 않으면 게임 입력 전체가 영구 잠긴다. `Updata_End`에서 `CloseSearchWaitPopup()` 호출이 보장되므로 정상 경로에서는 안전하지만, 예외 발생 시 상태 머신이 END를 거치지 않으면 위험.

## 관련 문서
- [[MKSummonNpcManager_CloseSearchWaitPopup_Analysis]]
- [[MKSummonNpcManager_SummonNpc_Analysis]]
- [[MKSummonNpcManager_Function_Analysis_Index]]
