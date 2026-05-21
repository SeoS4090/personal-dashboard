---
tags:
  - analysis
  - system/world
  - system/battle
  - system/network
  - concern/bug
  - status/done
aliases:
  - searchBlockDict 누수 버그
  - NPC 소환 위치 버그
description: NPC 소환 시 RefreshPushBlockJoinLeave에서 searchBlockDict 블록을 leave 처리하여 다른 유저 마을 위치에 NPC가 소환되는 버그 수정
created: 2026-05-21
updated: 2026-05-21
---

← [[World_MOC]]

# WorldManager searchBlockDict 누수 버그 수정

## 요약

### 무슨 문제였나?
NPC를 소환하려 할 때 다른 유저의 마을 위치에 NPC가 생성되는 현상이 발생했다. 소환 가능한 빈 땅이 분명히 있음에도 불구하고, 소환 탐색 결과가 다른 유저 점유지를 반환하는 오류였다.

### 어떻게 고쳤나?
| 단계 | 내용 |
|------|------|
| 문제 경로 | NPC 소환 탐색 → 블록 join 이벤트 발생 → RefreshPushBlockJoinLeave가 탐색 블록을 leave 처리 |
| 원인 | searchBlockDict 내 탐색용 블록이 일반 블록과 구분 없이 leave 처리됨 |
| 수정 | NPC 소환 완료 이전에는 searchBlockDict 블록을 leave 처리 대상에서 제외 |

### 현재 상태는?
- ✅ 버그 수정 완료 — NPC가 탐색된 정상 좌표에 소환됨
- ✅ searchBlockDict 누수 방지 로직 추가

> **한 줄 요약**: "NPC 소환 탐색 중 블록이 잘못 leave되어 타인 마을 위에 NPC가 생성되던 버그를 수정했다."

---

## 1. 현상/개요

NPC 소환 흐름은 다음과 같다.

1. `WorldSearchPopup`에서 소환 위치 탐색 시작
2. `MKSummonNpcManager`가 주변 블록을 순회하며 빈 리젠포인트를 `searchBlockDict`에 등록
3. 소환 가능 좌표 확정 후 서버에 소환 요청

이 과정에서 `WorldManager.RefreshPushBlockJoinLeave()`가 블록 join/leave 이벤트를 처리할 때, `searchBlockDict`에 올라간 탐색용 블록까지 leave 대상으로 포함시켰다. 결과적으로 탐색 완료 직후 해당 블록이 `searchBlockDict`에서 사라지고, 다음 탐색에서 이미 점유된 블록(다른 유저 마을)이 반환되는 상태가 됐다.

## 2. 원인 분석

```
RefreshPushBlockJoinLeave()
  ├── join 처리: searchBlockDict.Add(blockKey, blockData)
  └── leave 처리: searchBlockDict.Remove(blockKey)  ← 소환용 블록도 제거됨
```

`RefreshPushBlockJoinLeave`는 일반 블록 이벤트와 NPC 소환 탐색용 블록을 구분하지 않고 동일한 leave 로직을 실행했다. NPC 소환 탐색은 특정 시점에 블록을 "예약"하는 개념인데, 이 예약이 일반 블록 퇴장 이벤트에 의해 취소되는 구조였다.

- `searchBlockDict`에 등록된 블록 키가 일반 블록 leave 이벤트의 키와 동일한 공간을 사용
- 소환 요청 전 leave 이벤트가 먼저 도착하면 탐색 결과가 소실
- 이후 소환 위치 재탐색 시 이미 점유된 블록을 빈 블록으로 오인

## 3. 수정 방법

NPC 소환 완료 전까지 `searchBlockDict`에 등록된 블록은 `RefreshPushBlockJoinLeave`의 leave 처리 대상에서 제외하도록 조건을 추가했다.

```csharp
// 수정 전
searchBlockDict.Remove(blockKey);

// 수정 후
if (!IsSearchBlockReserved(blockKey))
{
    searchBlockDict.Remove(blockKey);
}
```

소환 성공/실패 콜백 이후에는 예약 상태를 해제하여 정상적인 leave 처리가 진행되도록 했다.

## 연관 문서

- [[WorldSearchPopup_Analysis]] — searchBlockDict 구독 관리 및 NPC 소환 위치 계산 전체 흐름
- [[MKSummonNpcManager_Updata_WorldObjSearchPosStart_Analysis]] — 소환 위치 탐색 상태 진입 로직
- [[MKSummonNpcManager_Updata_SearchPosSuccess_Analysis]] — 탐색 성공 후 소환 요청 전이
