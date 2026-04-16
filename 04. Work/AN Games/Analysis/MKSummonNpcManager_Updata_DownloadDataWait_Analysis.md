---
tags:
  - system/battle
  - status/done
---

# MKSummonNpcManager.Updata_DownloadDataWait 분석

## 개요

`Updata_DownloadDataWait()`는 `DownloadBlockData` 코루틴의 완료를 기다리는 순수 대기 상태다. 메서드 본문이 비어 있으며(`// 작업대기용 state`), Update() 루프에서 매 프레임 호출되지만 아무런 처리도 수행하지 않는다.

- **진입 조건**: `Updata_DownloadDataStart()`에서 코루틴 시작 직후 즉시 전이
- **전이 방향**: 외부(`DownloadDataCallBack`)에 의해서만 탈출 — `DOWNLOAD_DATA_SUCCESS` 또는 `DOWNLOAD_DATA_FAIL`

## 주요 책임/구성 요소

이 상태 자체는 아무 동작을 하지 않는다. 상태 머신 패턴에서 "코루틴이 실행 중임"을 나타내는 자리 표시자(placeholder) 역할이다.

탈출 조건은 외부 콜백인 `DownloadDataCallBack(bool success)`에서 결정된다:
- `success == true` → `ManagerState = SUMMON_NPC_STATE.DOWNLOAD_DATA_SUCCESS`
- `success == false` → `ManagerState = SUMMON_NPC_STATE.DOWNLOAD_DATA_FAIL`

추가로, 탐색 종료 신호(`SearchEnd`)가 코루틴 완료보다 먼저 도착하면 `DOWNLOAD_DATA_FAIL` 경로로 빠진다.

## 데이터/의존성 관계

| 필드/메서드 | 방향 | 설명 |
|------------|------|------|
| `ManagerState` | 쓰기 (외부) | `DownloadDataCallBack`이 SUCCESS/FAIL로 전환 |
| `DownloadBlockData` 코루틴 | 병렬 실행 중 | 이 상태가 지속되는 동안 비동기 실행 중 |

## 성능/메모리 영향

메서드 본문이 완전히 비어 있으므로 Update() 루프 호출 비용은 사실상 0이다. 코루틴이 완료되기 전까지 매 프레임 진입하지만 즉시 반환하므로 영향 없음.

## 관련 문서

- [[MKSummonNpcManager_SummonNpc_Analysis]]
- [[MKSummonNpcManager_Updata_DownloadDataStart_Analysis]]
- [[MKSummonNpcManager_Updata_DownloadDataSuccess_Analysis]]
- [[MKSummonNpcManager_Updata_DownloadDataFail_Analysis]]
- [[MKSummonNpcManager_Function_Analysis_Index]]
