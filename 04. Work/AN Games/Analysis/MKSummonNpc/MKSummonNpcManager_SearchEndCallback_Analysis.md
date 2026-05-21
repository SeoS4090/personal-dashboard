---
tags:
  - system/battle
  - concern/bug
  - status/done
aliases:
  - MKSummonNpcManager.SearchEndCallback 분석
description: `Updata_SearchPosStart_multi`(현재 비활성)의 비동기 블록 탐색 완료 콜백. object[] 배열로 전달된 탐색 결과를 언박싱하여 `RegenDataList`를 구성하고 상태를 전이한다....
created: 2026-05-20
updated: 2026-05-20
---

← [[MKSummonNpcManager_Function_Analysis_Index]]


# MKSummonNpcManager.SearchEndCallback 분석

## 개요
`Updata_SearchPosStart_multi`(현재 비활성)의 비동기 블록 탐색 완료 콜백. object[] 배열로 전달된 탐색 결과를 언박싱하여 `RegenDataList`를 구성하고 상태를 전이한다. 재시도 로직이 설계되었으나 주석 처리된 상태.

## 주요 책임/구성 요소

```csharp
void SearchEndCallback(object[] _data)
{
    List<long> find_no_list = (List<long>)_data[(int)BLOCK_MULTI_SEARCH_PARAM.FIND_NO_LIST];
    bool ignore_outline = (bool)_data[(int)BLOCK_MULTI_SEARCH_PARAM.IGNORE_OUTLINE];
    // find_count, ignore_outline 로깅

    // 주석처리된 재시도 로직: ignore_outline=false && count==0 → multi 재호출

    if (find_no_list.Count == 0)
    {
        ManagerState = SUMMON_NPC_STATE.SEARCH_POS_FAIL;
        return;
    }

    RegenDataList.Clear();
    for (int i = 0; i < find_no_list.Count; ++i)
    {
        var add_data = new WorldNetwork.NPCRegenData();
        add_data.no = find_no_list[i];
        add_data.t_id = add_data.no != 0 ? MKCommon.MakeTerriotyNo(add_data.no) : 0;
        add_data.id = NpcID;
        RegenDataList.Add(add_data);
    }
    ManagerState = SUMMON_NPC_STATE.SEARCH_POS_SUCCESS;
}
```

- `BLOCK_MULTI_SEARCH_PARAM` 열거형 인덱스로 object[] 배열을 타입 캐스팅하여 구조화된 결과 추출
- `find_no_list.Count == 0` 시 `SEARCH_POS_FAIL`로 전이하여 실패 팝업 경로 진입
- 결과가 있으면 `RegenDataList`를 채우고 `SEARCH_POS_SUCCESS`로 전이

## 데이터/의존성 관계
- `BLOCK_MULTI_SEARCH_PARAM.FIND_NO_LIST` / `IGNORE_OUTLINE` — object[] 인덱싱 키
- `RegenDataList: List<WorldNetwork.NPCRegenData>` — 소환 위치 후보 목록
- `MKCommon.MakeTerriotyNo(no)` — 블록 번호에서 영역 번호 생성
- `NpcID` — 소환할 NPC 종류 식별자

## 문제점 및 개선 제안
- **현재 미사용 상태**: 단건 동기 탐색(`Updata_SearchPosStart`)이 현재 사용 중이므로 이 콜백도 비활성. 재활성화 시 주석 처리된 재시도 로직(`ignore_outline` 완화 재검색) 복원 여부를 재검토해야 함.
- **object[] 언박싱 취약성**: 배열 크기 검증이나 null 체크 없이 캐스팅하므로 잘못된 데이터 전달 시 런타임 예외 발생.
- **재시도 로직 설계 의도**: `ignore_outline=false` + `count==0`인 경우 윤곽선 무시 옵션을 켜서 재검색하는 패턴이 설계됨. 현재 주석 처리이므로 단일 시도로만 동작.

## 관련 문서
- [[MKSummonNpcManager_SummonNpc_Analysis]]
- [[MKSummonNpcManager_Function_Analysis_Index]]


