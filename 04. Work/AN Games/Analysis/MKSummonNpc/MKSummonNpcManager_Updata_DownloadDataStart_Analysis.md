---
tags:
  - system/battle
  - status/done
aliases:
  - MKSummonNpcManager.Updata_DownloadDataStart 분석
description: `Updata_DownloadDataStart()`는 블록 데이터 다운로드 코루틴을 시작하는 단순 착수 상태다. 즉시 `DOWNLOAD_DATA_WAIT` 상태로 전이한 뒤 `DownloadBlockData` ...
created: 2026-05-20
updated: 2026-05-20
---

← [[MKSummonNpcManager_Function_Analysis_Index]]


# MKSummonNpcManager.Updata_DownloadDataStart 분석

## 개요

`Updata_DownloadDataStart()`는 블록 데이터 다운로드 코루틴을 시작하는 단순 착수 상태다. 즉시 `DOWNLOAD_DATA_WAIT` 상태로 전이한 뒤 `DownloadBlockData` 코루틴을 비동기로 띄운다.

- **진입 조건**: `Updata_World()`에서 `CanCreateNPC()` 검증을 통과한 경우
- **전이 방향**: `DOWNLOAD_DATA_START` → `DOWNLOAD_DATA_WAIT` (즉시), 이후 코루틴 완료 시 `SUCCESS` 또는 `FAIL`

## 주요 책임/구성 요소

1. **추적 로그 기록**: `TraceSummonStep("Updata_DownloadDataStart", "Start download block data coroutine")`으로 착수 사실을 기록한다.

2. **상태 즉시 전이**: `ManagerState = SUMMON_NPC_STATE.DOWNLOAD_DATA_WAIT`으로 전환해, 다음 프레임부터 `Updata_DownloadDataWait()`가 실행되도록 한다.

3. **코루틴 시작**: `StartCoroutine(DownloadBlockData(DownloadDataCallBack))`으로 서버에서 블록 데이터를 내려받는 비동기 작업을 시작한다. 콜백으로 `DownloadDataCallBack(bool)`을 전달해 성공/실패 여부에 따라 후속 상태를 결정하게 한다.

## 데이터/의존성 관계

| 필드/메서드 | 방향 | 설명 |
|------------|------|------|
| `ManagerState` | 쓰기 | `DOWNLOAD_DATA_WAIT`으로 전환 |
| `DownloadBlockData(Action<bool>)` | 호출(코루틴) | 서버 블록 데이터 다운로드 비동기 처리 |
| `DownloadDataCallBack(bool)` | 콜백 등록 | 완료 시 `SUCCESS`(`true`) 또는 `FAIL`(`false`) 상태로 전이 |
| `TraceSummonStep()` | 호출 | Crashlytics 추적 로그 |

## 성능/메모리 영향

이 메서드 자체는 단순 착수만 담당해 비용이 없다. 실제 네트워크 비용은 `DownloadBlockData` 코루틴 내부에서 발생한다. 코루틴 객체가 하나 생성되어 완료 시까지 힙에 유지되나, 단발성 요청이므로 메모리 영향은 미미하다.

## 관련 문서

- [[MKSummonNpcManager_SummonNpc_Analysis]]
- [[MKSummonNpcManager_Updata_World_Analysis]]
- [[MKSummonNpcManager_Updata_DownloadDataWait_Analysis]]
- [[MKSummonNpcManager_Updata_DownloadDataSuccess_Analysis]]
- [[MKSummonNpcManager_Updata_DownloadDataFail_Analysis]]
- [[MKSummonNpcManager_Function_Analysis_Index]]


