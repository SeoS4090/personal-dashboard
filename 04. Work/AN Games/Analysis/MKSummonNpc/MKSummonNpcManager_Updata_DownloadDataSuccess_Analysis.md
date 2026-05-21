---
tags:
  - system/battle
  - status/done
aliases:
  - MKSummonNpcManager.Updata_DownloadDataSuccess 분석
description: `Updata_DownloadDataSuccess()`는 블록 데이터 다운로드 성공 후 소환 경로를 결정하는 **분기점** 상태다. `ItemID` 값에 따라 아이템 미사용 소환과 아이템 사용 소환의 두 경로로...
created: 2026-05-20
updated: 2026-05-20
---

← [[MKSummonNpcManager_Function_Analysis_Index]]


# MKSummonNpcManager.Updata_DownloadDataSuccess 분석

## 개요

`Updata_DownloadDataSuccess()`는 블록 데이터 다운로드 성공 후 소환 경로를 결정하는 **분기점** 상태다. `ItemID` 값에 따라 아이템 미사용 소환과 아이템 사용 소환의 두 경로로 나뉜다.

- **진입 조건**: `DownloadDataCallBack(true)` 호출 시
- **전이 방향**:
  - `ItemID == 0` → `SEARCH_POS_WORLDOBJSEARCH_START` (아이템 미사용, 월드 오브젝트 탐색)
  - `ItemID != 0` → `SEARCH_POS_START` (아이템 사용, 빈 리젠포인트 탐색)

## 주요 책임/구성 요소

1. **ItemID 로깅**: 주석(`// item_id 로깅`)으로 표시된 대로, 분기 전에 현재 ItemID를 Crashlytics 또는 추적 로그에 기록한다.

2. **소환 경로 분기**:
   - `ItemID == 0`: 아이템을 사용하지 않는 기본 소환. 현재 월드에 해당 NPC가 이미 존재하는지 먼저 탐색하고, 없으면 리젠포인트를 검색하는 `WORLDOBJSEARCH_START` 경로로 진입한다.
   - `ItemID != 0`: 특정 아이템을 사용해 소환 위치를 직접 지정하는 경로. 빈 리젠포인트를 탐색하는 `SEARCH_POS_START` 경로로 진입한다.

## 데이터/의존성 관계

| 필드/메서드 | 방향 | 설명 |
|------------|------|------|
| `ItemID` | 읽기 | 0이면 아이템 미사용, 아니면 아이템 ID |
| `ManagerState` | 쓰기 | `WORLDOBJSEARCH_START` 또는 `SEARCH_POS_START`로 전이 |

## 성능/메모리 영향

단순 조건 분기만 수행하므로 비용이 없다. 실제 탐색 연산은 다음 상태(`Updata_WorldObjSearchPosStart` 또는 `Updata_SearchPosStart`)에서 발생한다.

## 관련 문서

- [[MKSummonNpcManager_SummonNpc_Analysis]]
- [[MKSummonNpcManager_Updata_DownloadDataWait_Analysis]]
- [[MKSummonNpcManager_Updata_DownloadDataFail_Analysis]]
- [[MKSummonNpcManager_Updata_WorldObjSearchPosStart_Analysis]]
- [[MKSummonNpcManager_Function_Analysis_Index]]


