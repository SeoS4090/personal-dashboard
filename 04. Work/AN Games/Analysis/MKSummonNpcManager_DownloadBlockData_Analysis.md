---
tags:
  - system/battle
  - concern/bug
  - status/done
---

# MKSummonNpcManager.DownloadBlockData 분석

## 개요
NPC 소환 전 블록 정보를 다운로드하는 IEnumerator 코루틴. MKSocket 대기 큐가 소진될 때까지 대기한 뒤 SearchBlock 요청을 발행하고, 완료 후 빈 좌표 탐색 공간을 초기화하여 콜백을 호출한다.

## 주요 책임/구성 요소

```csharp
IEnumerator DownloadBlockData(CallbackT<bool> _end_callback = null)
{
    WaitUntil wait_size_proc = new(() => MKSocket.instance.GetWaitReqBlockListCount() == 0);

    // 다른 콘텐츠에서 블록 정보 다운로드 중이면 대기
    yield return wait_size_proc;

    WorldSearchPopup.StartSearchBlock();

    // 정보 다운로드 완료까지 대기
    yield return wait_size_proc;

    MKEmptyPosSearchManager.Instance.SetBlockObjectPosition();

    _end_callback?.Invoke(true);
}
```

- `WaitUntil` 인스턴스를 단 하나 생성해 두 번 재사용 — GC 할당 최소화 의도
- `StartSearchBlock()` 호출로 서버에 블록 정보를 요청하고, 같은 WaitUntil로 응답 완료를 대기
- `SetBlockObjectPosition()`: 수신된 블록 데이터를 MKEmptyPosSearchManager에 반영해 빈 좌표 탐색 공간 구축
- 콜백은 항상 `true`로 호출 — 내부에서 실패 케이스를 분기하지 않음

## 데이터/의존성 관계
- `MKSocket.instance.GetWaitReqBlockListCount()` — 소켓 대기 요청 수 조회
- `WorldSearchPopup.StartSearchBlock()` — 블록 데이터 서버 요청 트리거
- `MKEmptyPosSearchManager.Instance.SetBlockObjectPosition()` — 블록 좌표 탐색 공간 갱신
- `CallbackT<bool>` — 완료 후 `DownloadDataCallBack` 연결

## 문제점 및 개선 제안
- **실패 경로 없음**: 서버 응답이 실패하더라도 코루틴은 항상 `true`를 반환. 타임아웃 없이 `WaitUntil`이 영구 대기할 수 있어 상태 머신이 `DOWNLOADING` 상태에서 무한 정체될 위험이 있음.
- **WaitUntil 재사용 패턴**: 같은 람다 기반 조건을 두 단계(대기 전/후)에 재사용하는 것은 작동하지만, 두 번째 yield가 실제로 StartSearchBlock의 완료를 보장하는지는 MKSocket 구현에 의존함. 명시적 완료 신호가 더 안전함.

## 관련 문서
- [[MKSummonNpcManager_SummonNpc_Analysis]]
- [[MKSummonNpcManager_DownloadDataCallBack_Analysis]]
- [[MKSummonNpcManager_Function_Analysis_Index]]
