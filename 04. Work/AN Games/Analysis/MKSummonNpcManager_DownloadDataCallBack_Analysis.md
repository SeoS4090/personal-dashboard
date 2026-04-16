---
tags:
  - system/battle
  - status/done
---

# MKSummonNpcManager.DownloadDataCallBack 분석

## 개요
`DownloadBlockData` 코루틴의 완료 콜백. bool 결과를 `SUMMON_NPC_STATE` 열거형 상태 전이로 변환하는 단순 디스패처 함수.

## 주요 책임/구성 요소

```csharp
void DownloadDataCallBack(bool _succ)
{
    if (_succ)
        ManagerState = SUMMON_NPC_STATE.DOWNLOAD_DATA_SUCCESS;
    else
        ManagerState = SUMMON_NPC_STATE.DOWNLOAD_DATA_FAIL;
}
```

- 성공 시 → `DOWNLOAD_DATA_SUCCESS`: 상태 머신이 다음 단계(좌표 탐색)로 진입
- 실패 시 → `DOWNLOAD_DATA_FAIL`: `SetFailPopupToEnd`로 이어지는 실패 경로 진입

## 데이터/의존성 관계
- `DownloadBlockData` 코루틴의 `_end_callback` 인자로 전달됨
- `SUMMON_NPC_STATE` — `DOWNLOAD_DATA_SUCCESS` / `DOWNLOAD_DATA_FAIL` 두 상태와만 관계

## 문제점 및 개선 제안
- **FAIL 분기 실질적 비활성**: `DownloadBlockData`는 현재 항상 `true`를 전달하므로 `DOWNLOAD_DATA_FAIL` 분기는 도달 불가. 향후 타임아웃/서버 오류 처리가 추가되면 이 분기가 활성화될 구조는 갖춰져 있음.

## 관련 문서
- [[MKSummonNpcManager_DownloadBlockData_Analysis]]
- [[MKSummonNpcManager_SummonNpc_Analysis]]
- [[MKSummonNpcManager_Function_Analysis_Index]]
