---
tags:
  - system/battle
  - concern/performance
  - status/done
aliases:
  - MKSummonNpcManager.Updata_SearchPosStart 분석
description: 아이템 소환(ItemID > 0) 경로에서 진입하는 상태 핸들러. 내 도시(planet_no) 주변의 빈 리젠포인트를 **동기(synchronous)** 방식으로 최대 5개 탐색하고, RegenDataList를...
created: 2026-05-20
updated: 2026-05-20
---

← [[MKSummonNpcManager_Function_Analysis_Index]]


# MKSummonNpcManager.Updata_SearchPosStart 분석

## 개요

아이템 소환(ItemID > 0) 경로에서 진입하는 상태 핸들러. 내 도시(planet_no) 주변의 빈 리젠포인트를 **동기(synchronous)** 방식으로 최대 5개 탐색하고, RegenDataList를 구성하여 SEARCH_POS_SUCCESS 또는 SEARCH_POS_FAIL로 즉시 분기한다.

## 주요 책임/구성 요소

- **진입 조건**: SEARCH_POS_START 상태 → ItemID > 0 (아이템 소환 경로)
- **탐색 함수**: `MKEmptyPosSearchManager.Instance.SearchEmptyRegenPointAround(my_city_no, MaxSearchEmptyPosCount)` — 동기 반환
- **MaxSearchEmptyPosCount**: 5 (상수)
- **RegenDataList 구성**:
  - `add_data.no` = 리젠포인트 번호
  - `add_data.t_id` = `no != 0 ? MKCommon.MakeTerriotyNo(no) : 0`
  - `add_data.id` = NpcID (소환할 NPC 종류를 서버에 전달)
- **분기**:
  - 결과 0개 → `SEARCH_POS_FAIL`로 즉시 전이
  - 결과 1~5개 → `SEARCH_POS_SUCCESS`로 전이

## 데이터/의존성 관계

```
MKUserDataModel.instance.nation.planet_no
        ↓
MKEmptyPosSearchManager.SearchEmptyRegenPointAround()
        ↓
RegenDataList (List<WorldNetwork.NPCRegenData>)
        ↓
SEARCH_POS_SUCCESS → Updata_SummonNpcStart
SEARCH_POS_FAIL   → Updata_SearchPosFail
```

- `NpcID`: 외부에서 소환 시작 전 설정되는 필드. WorldObjSearchPosStart 경로와의 핵심 차이점 — WorldObj 경로는 `id = 0`으로 설정하고 서버가 기존 NPC를 탐색하지만, 이 경로는 명시적 NpcID를 지정해 신규 NPC 소환을 요청.
- `t_id`: 영토 번호. `no == 0` 방어 코드가 있으나, SearchEmptyRegenPointAround가 0을 반환할 가능성을 확인 필요.

## 문제점 및 개선 제안

1. **동기 탐색의 프레임 비용**: `SearchEmptyRegenPointAround`가 동기 함수이므로 내부 처리량에 따라 해당 프레임에서 스파이크가 발생할 수 있다. 비동기 버전(SearchPosStart_multi)이 설계되었으나 현재 비활성화 상태. 탐색 범위가 넓어질 경우 재활성화를 검토해야 한다.
2. **MaxSearchEmptyPosCount 하드코딩**: 상수값 5가 코드에 고정되어 있다. 서버 설정 또는 런타임 조정 가능하도록 외부화하면 유연성이 높아진다.
3. **t_id no==0 방어 코드**: 리젠포인트 번호가 0인 경우를 방어하지만, 이 케이스가 실제 발생 가능한지 명확하지 않다. 로그 추가로 발생 여부 확인 권장.

## 관련 문서
- [[MKSummonNpcManager_SummonNpc_Analysis]]
- [[MKSummonNpcManager_Function_Analysis_Index]]
- [[MKSummonNpcManager_Updata_SearchPosStart_multi_Analysis]]
- [[MKSummonNpcManager_Updata_SearchPosFail_Analysis]]
- [[MKSummonNpcManager_Updata_SearchPosSuccess_Analysis]]


