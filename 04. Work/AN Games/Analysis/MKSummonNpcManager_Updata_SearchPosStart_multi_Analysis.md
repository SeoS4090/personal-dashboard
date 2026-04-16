---
tags:
  - system/battle
  - concern/performance
  - status/done
---

# MKSummonNpcManager.Updata_SearchPosStart_multi 분석

## 개요

`Updata_SearchPosStart`의 **비동기 코루틴 버전**. `MKEmptyPosSearchManager.SearchEmptyRegenPointAround_Multi`를 코루틴으로 실행하고 `SearchEndCallback`으로 결과를 수신하도록 설계되었다. 현재 Update() 루프에서 주석처리되어 **실제로는 미사용(dead code)** 상태이다.

## 주요 책임/구성 요소

- **설계 목적**: 동기 탐색(SearchPosStart)의 프레임 스파이크 문제를 해결하기 위한 비동기 대안
- **현재 상태**: Update() 루프 내 `case SUMMON_NPC_STATE.SEARCH_POS_START` 가 동기 버전을 호출하도록 되어 있고, 이 함수를 호출하는 코드는 주석처리됨
- **파라미터**: `_ignore_outline` — 검색 범위 완화 재시도 로직을 위한 플래그. 내부 재시도 코드도 주석처리된 상태
- **콜백 패턴**: `SearchEndCallback`이 탐색 완료 후 RegenDataList를 구성하고 ManagerState를 변경하는 역할

```
StartCoroutine(
  MKEmptyPosSearchManager.SearchEmptyRegenPointAround_Multi(
    my_city_no, SearchEndCallback, MaxSearchEmptyPosCount, _data))
```

## 데이터/의존성 관계

```
Updata_SearchPosStart_multi()
        ↓ (코루틴 시작)
MKEmptyPosSearchManager.SearchEmptyRegenPointAround_Multi()
        ↓ (비동기 완료 후)
SearchEndCallback()
        ↓
RegenDataList 구성 → SEARCH_POS_SUCCESS / SEARCH_POS_FAIL
```

- `_data[0]`: null (예약 파라미터)
- `_data[1]`: `_ignore_outline` — 아웃라인(외곽 범위) 무시 여부
- SEARCH_POS_WAIT 상태 동안 `Updata_SearchPosWait()`가 빈 루프를 실행하며 콜백 대기

## 문제점 및 개선 제안

1. **Dead Code**: Update 루프에서 직접 호출되지 않으므로 현재 빌드에서 실행되지 않는다. 동기 버전과의 명확한 설계 선택이 필요하다. 성능 문제가 확인될 경우 이 함수를 활성화하거나, 문제가 없다면 코드를 제거해 가독성을 높여야 한다.
2. **_ignore_outline 재시도 로직 미완성**: 검색 범위를 완화해 재시도하는 설계가 있었으나 주석처리됨. 실패 시 자동 재시도 메커니즘이 없어 사용자 경험이 저하될 수 있다.
3. **SearchEndCallback 결합도**: 콜백이 외부에서 ManagerState를 변경하는 구조라 상태 전이 추적이 어렵다. 비동기 버전 활성화 시 콜백 내 로직 검토 필요.

## 관련 문서
- [[MKSummonNpcManager_SummonNpc_Analysis]]
- [[MKSummonNpcManager_Function_Analysis_Index]]
- [[MKSummonNpcManager_Updata_SearchPosStart_Analysis]]
- [[MKSummonNpcManager_Updata_SearchPosWait_Analysis]]
