---
tags:
  - system/battle
  - concern/performance
  - status/done
---

# MKSummonNpcManager.Updata_WorldObjSearchPosStart 분석

## 개요

`Updata_WorldObjSearchPosStart()`는 **아이템 미사용 소환 경로**에서 NPC 소환 위치를 결정하는 핵심 탐색 로직이다. 약 150줄에 달하는 이 메서드는 두 단계로 나뉜다:

1. 월드에 해당 NPC가 이미 존재하는지 탐색 → 있으면 카메라 안내 후 즉시 SUCCESS (서버 소환 요청 없음)
2. 없으면 현재 영토 + 인접 영토의 리젠포인트에서 거리/점유 조건으로 필터링 → 후보 목록 구성

- **진입 조건**: `Updata_DownloadDataSuccess()`에서 `ItemID == 0`인 경우
- **전이 방향**:
  - 기존 NPC 발견 → `SummonNpcCallbackSucc()` (직접 성공 처리, 상태 머신 우회)
  - 후보 목록 구성 성공 → `SEARCH_POS_SUCCESS`
  - 후보 없음 → `END` (토스트 메시지)

## 주요 책임/구성 요소

### 단계 1: NPC 데이터 유효성 검사

- `MKGameDataModel.instance.npc.GetData(NpcID)` → `npcDTO` 획득, null이면 `SetFailPopupToEnd()` 후 종료
- `MKGameDataModel.instance.worldObjSearch.GetData(npcDTO)` → `searchData` 획득, null이면 동일하게 종료
- `searchData`에는 탐색 범위(`c_range_min`), 오브젝트 ID(`c_obj_id`), 검색 카테고리(`s_table`, `s_category`) 등이 포함됨

### 단계 2: 기존 NPC 탐색 (빠른 경로)

- `WorldManager.instance.SearchInSearchBlock(searchData)`로 현재 다운로드된 검색 블록 내에서 해당 NPC 오브젝트를 탐색한다
- 결과가 1개 이상이면:
  - `MKCommon.MakePos(result_list[0].no)`로 월드 좌표 계산
  - `WorldManager.instance.GoToGroundPosEndCall(ground_pos, callback)`으로 카메라를 해당 위치로 이동
  - `WorldManager.instance.AddLocationIcon(ground_pos)`로 위치 마커 표시
  - `SummonNpcCallbackSucc()`를 직접 호출해 상태 머신을 우회하고 성공 처리
  - 서버에 NPC 소환 요청을 보내지 않음 (기존 오브젝트를 안내하는 것으로 종료)

### 단계 3: 리젠포인트 후보 계산 (신규 소환 경로)

기존 NPC가 없을 때 실행되는 주요 연산 블록:

```
탐색 거리 범위 계산:
  min_sqr = c_range_min²
  max_sqr = max(c_range_min² × 9, 20² = 400)
```

- **내 위치 기준점**: `MKUserDataModel.instance.nation.planet_no`에서 X/Y 좌표와 영토 번호(`myTerritory`) 추출
- **현재 영토 리젠포인트 수집**: `WorldDataManager.instance.regenPointDict[myTerritory]`에서 전체 리젠포인트를 읽어 각 포인트까지의 `sqrMagnitude` 계산
- **인접 영토 리젠포인트 추가**: `MKGameDataModel.instance.worldTerritory.data`에서 현재 영토의 `connect` 목록을 순회해 인접 영토의 리젠포인트도 수집

### 단계 4: 필터링 → 셔플 → 결과 추출

LINQ 체인으로 다음 조건을 모두 만족하는 포인트만 선별:

| 조건 | 설명 |
|------|------|
| `sqr_len >= min_sqr && sqr_len <= max_sqr` | 탐색 거리 범위 내 |
| `WorldManager.instance.IsNoInSearchBlock(x.no)` | 현재 검색 블록에 포함된 포인트 |
| `WorldManager.instance.IsThereObject(x.no) == false` | 해당 위치에 오브젝트가 없음 (빈 자리) |

- 결과를 `MKCommon.ShuffleList()`로 셔플해 매번 다른 위치 순서 제공
- 상수 `WOLRDMAP_SEARCH_RESOURCE_MAX_RESULT`(기본 5)개까지 잘라 `RegenDataList`에 저장
- 후보가 있으면 → `SEARCH_POS_SUCCESS`
- 후보 없으면 → 토스트 메시지 표시 후 `END`, `WorldSearchPopup.EndSearchBlock()` 호출

## 데이터/의존성 관계

| 필드/시스템 | 방향 | 설명 |
|------------|------|------|
| `NpcID` | 읽기 | 소환할 NPC ID |
| `ItemID` | 읽기 | 이 경로에서는 0임 |
| `MKGameDataModel.instance.npc` | 읽기 | NPC 테이블 조회 |
| `MKGameDataModel.instance.worldObjSearch` | 읽기 | 탐색 파라미터 (범위, 오브젝트 ID) |
| `MKGameDataModel.instance.worldTerritory` | 읽기 | 영토 연결 관계(인접 영토 목록) |
| `WorldDataManager.instance.regenPointDict` | 읽기 | 영토별 리젠포인트 딕셔너리 |
| `WorldManager.instance.SearchInSearchBlock()` | 읽기 | 기존 NPC 존재 여부 탐색 |
| `WorldManager.instance.IsNoInSearchBlock()` | 읽기 | 포인트가 검색 블록 내인지 확인 |
| `WorldManager.instance.IsThereObject()` | 읽기 | 포인트 점유 여부 확인 |
| `WorldManager.instance.GoToGroundPosEndCall()` | 호출 | 카메라 이동 |
| `WorldManager.instance.AddLocationIcon()` | 호출 | 위치 마커 표시 |
| `MKUserDataModel.instance.nation.planet_no` | 읽기 | 현재 플레이어 위치 |
| `MKConstant.GetConstData<long>("WOLRDMAP_SEARCH_RESOURCE_MAX_RESULT")` | 읽기 | 최대 후보 수 (기본 5) |
| `RegenDataList` | 쓰기 | 후보 리젠포인트 목록 저장 |
| `ManagerState` | 쓰기 | `SEARCH_POS_SUCCESS` 또는 `END` |
| `SummonNpcCallbackSucc()` | 호출 | 기존 NPC 발견 시 직접 성공 처리 |
| `SetFailPopupToEnd()` | 호출 | 유효성 실패 시 종료 |
| `WorldSearchPopup.EndSearchBlock()` | 호출 | 검색 블록 정리 |

## 문제점 및 개선 제안

### 성능: LINQ 다중 체인 + 전체 리젠포인트 순회

현재 구현에서는 현재 영토와 모든 인접 영토의 리젠포인트를 `List`에 합친 뒤 LINQ `Where` + `Select`로 처리한다. 리젠포인트 수가 많은 대형 영토(특히 인접 영토가 많은 중앙 영토)에서는 수백 개의 포인트를 매번 선형 순회한다.

**개선 제안**: 미리 공간 분할(Grid/Quadtree)로 거리 범위 내 후보를 사전 필터링하거나, 결과를 일정 시간 캐싱해 반복 소환 시 재계산을 줄일 수 있다.

### 성능: `IsThereObject()` 반복 호출

필터링 단계에서 각 포인트마다 `IsThereObject(x.no)`를 호출한다. 이 함수의 내부 구현에 따라 비용이 다르지만, Dictionary 조회 수준이라면 허용 범위이나 매번 전체 월드 오브젝트 컬렉션을 순회한다면 O(n×m) 복잡도가 될 수 있다.

### 상태 머신 우회: SummonNpcCallbackSucc() 직접 호출

기존 NPC 발견 시 `ManagerState`를 변경하지 않고 `SummonNpcCallbackSucc()`를 직접 호출해 상태 머신을 우회한다. 이는 다른 상태 전이 패턴과 불일치하며, 이 호출 이후에도 Update()가 한 프레임 더 실행되면 현재 `ManagerState`(`WORLDOBJSEARCH_START`)에 해당하는 핸들러가 다시 호출될 수 있다. `SummonNpcCallbackSucc()` 이전에 `ManagerState`를 `END` 또는 전용 상태로 전환하는 것이 안전하다.

### 상수명 오타

`WOLRDMAP_SEARCH_RESOURCE_MAX_RESULT` — "WORLD"가 "WOLRD"로 오타가 있다. 서버 상수 테이블에서도 동일하게 정의되어 있다면 수정 시 서버-클라이언트 양쪽을 함께 변경해야 한다.

## 성능/메모리 영향

- **LINQ 중간 컬렉션**: `RegenDTO` 리스트가 현재 + 인접 영토의 모든 리젠포인트를 담아 힙에 생성된다. 대형 영토에서 수백 개 항목 가능.
- **ShuffleList**: 전체 필터 결과를 제자리 셔플하므로 추가 할당은 없음.
- **전체 연산이 단일 프레임**에서 동기적으로 실행된다. 포인트 수가 매우 많을 경우 프레임 드롭(히치)이 발생할 수 있다. 비동기 분산 처리(코루틴 yield 분산) 또는 결과 캐싱을 고려할 수 있다.

## 관련 문서

- [[MKSummonNpcManager_SummonNpc_Analysis]]
- [[MKSummonNpcManager_Updata_DownloadDataSuccess_Analysis]]
- [[MKSummonNpcManager_Function_Analysis_Index]]
- [[MKSummonNpcManager_Crashlytics_LogGuide]]
