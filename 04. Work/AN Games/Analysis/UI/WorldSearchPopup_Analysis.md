---
tags:
  - analysis
  - system/ui
aliases:
  - WorldSearchPopup 분석
  - 오브젝트 찾기 팝업
description: 오브젝트 찾기 팝업의 searchBlockDict 구독 구조와 NPC 소환 위치 결정 로직 분석
status: done
created: 2026-05-21
updated: 2026-05-21
---

← [[UI_MOC]]

# WorldSearchPopup 분석

## 요약

`WorldSearchPopup`은 월드맵에서 특정 오브젝트(유저 마을, NPC, 자원 등)의 위치를 검색하는 팝업이다. 내부적으로 `WorldManager.searchBlockDict`를 구독하여 빈 블록 목록을 가져오고, NPC 소환 위치를 결정한다. `searchBlockDict`가 leave 처리로 소실되면 빈 블록 탐색이 실패하여 다른 유저 마을 위에 NPC가 소환될 수 있다. 연관 버그는 [[WorldManager_RefreshPushBlockJoinLeave_SearchBlockLeak_BugFix]]를 참조한다.

---

## 개요

| 항목 | 내용 |
|------|------|
| 컴포넌트 | `WorldSearchPopup` |
| 역할 | 월드맵 오브젝트 위치 검색 UI |
| 핵심 의존 | `WorldManager.searchBlockDict` |
| 연관 버그 | searchBlockDict 소실 시 NPC 잘못된 위치 소환 |

---

## searchBlockDict 구독 구조

### searchBlockDict 란

`WorldManager`가 관리하는 `Dictionary<Vector2Int, BlockData>` 형태의 자료구조로, 현재 클라이언트가 검색 가능한 블록 목록을 담는다. 유저가 월드맵을 이동하거나 뷰포트가 변경될 때 join/leave 이벤트로 갱신된다.

```
[WorldManager]
  searchBlockDict: Dictionary<Vector2Int, BlockData>
    ├── join 이벤트 → 블록 추가
    └── leave 이벤트 → 블록 제거
```

### WorldSearchPopup 의 구독 시점

```
WorldSearchPopup.OnEnable()
  → WorldManager.OnSearchBlockUpdated += RefreshSearchResult
  → 현재 searchBlockDict 상태로 초기 표시

WorldSearchPopup.OnDisable()
  → WorldManager.OnSearchBlockUpdated -= RefreshSearchResult
```

팝업이 열려 있는 동안 `searchBlockDict` 변경 시 `RefreshSearchResult`가 호출되어 검색 결과를 갱신한다.

---

## NPC 소환 위치 결정 로직

### 흐름

```
사용자가 NPC 위치로 이동 요청
  → WorldSearchPopup.OnSelectResult(BlockData block)
  → WorldManager.FindEmptyBlockNear(block.position)
      └── searchBlockDict 에서 대상 블록 주변 빈 블록 탐색
  → 빈 블록 발견 → NPC 소환 좌표로 사용
  → 빈 블록 없음 → fallback (블록 그대로 사용)
```

### FindEmptyBlockNear 의 빈 블록 탐색

```csharp
// 단순화된 로직
Vector2Int FindEmptyBlockNear(Vector2Int center)
{
    for (int radius = 1; radius <= MAX_SEARCH_RADIUS; radius++)
    {
        foreach (var candidate in GetRing(center, radius))
        {
            if (!searchBlockDict.ContainsKey(candidate))
                return candidate; // 점유되지 않은 블록
        }
    }
    return center; // fallback
}
```

`searchBlockDict`에 없는 좌표를 "빈 블록"으로 판단한다.

---

## searchBlockDict 소실 시 문제

### leave 처리로 인한 소실

`WorldManager`의 RefreshPushBlock 로직에서 leave 이벤트가 과도하게 처리되면 실제로 점유된 블록이 `searchBlockDict`에서 제거된다. 이 경우:

```
점유된 블록 A가 leave 처리 → searchBlockDict 에서 A 제거
FindEmptyBlockNear 호출 시 A를 "빈 블록"으로 잘못 판단
  → NPC가 다른 유저의 마을(블록 A) 위에 소환됨
```

### 영향

- NPC가 다른 유저 마을 위에 겹쳐 소환 → 시각적 오류
- 이동 경로 충돌 가능성 → 추가 버그로 이어질 수 있음

---

## 연관 버그 및 수정

`searchBlockDict` 소실의 근본 원인은 `WorldManager.RefreshPushBlockJoinLeave`의 leave 처리 로직에 있다. 상세 내용은 [[WorldManager_RefreshPushBlockJoinLeave_SearchBlockLeak_BugFix]] 참조.

`WorldSearchPopup` 자체에서는 빈 블록 판단 시 추가 검증(서버 점유 상태 조회 등)으로 방어하거나, `searchBlockDict` 무결성을 보장하는 방향으로 수정이 이루어진다.

---

## 관련 문서

- [[WorldManager_RefreshPushBlockJoinLeave_SearchBlockLeak_BugFix]] — searchBlockDict 소실 근본 원인
- [[MKSummonNpcManager_Updata_WorldObjSearchPosStart_Analysis]] — NPC 소환 위치 탐색 전체 흐름
