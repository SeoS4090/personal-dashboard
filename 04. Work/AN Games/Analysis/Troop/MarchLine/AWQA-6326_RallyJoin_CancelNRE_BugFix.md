---
tags:
  - analysis
  - system/troop
  - system/network
  - concern/bug
  - status/done
aliases:
  - AWQA-6326
  - 집결 참가 취소 NRE
description: 요새전 집결 2회 참여 시 퇴각 버튼 무반응 NRE — war_memberSlotList 취소 후 미삭제로 키 누적, LINQ null 반환 수정
created: 2026-05-21
updated: 2026-05-21
---

← [[MarchLine_MOC]]

# AWQA-6326 집결 참가 취소 NRE 버그 수정

## 요약

### 무슨 문제였나?
요새전 집결에 참여했다가 나간 후 같은 집결에 다시 참여하면, 이후 퇴각 버튼이 동작하지 않고 아무 반응도 없는 현상이 발생했다. 내부적으로는 NullReferenceException이 발생하여 퇴각 처리가 중단됐다.

### 어떻게 고쳤나?
| 문제 | 원인 | 수정 |
|------|------|------|
| 퇴각 버튼 무반응 | `war_memberSlotList`에 취소된 슬롯이 삭제되지 않아 키 누적 | 취소 콜백에서 해당 슬롯 키 제거 |
| NRE 발생 | `.Select(Find).First()` LINQ가 null 반환 시 NRE | `SelectMany.FirstOrDefault` 로 변경 |
| 폴백 부재 | 슬롯 탐색 실패 시 복구 로직 없음 | `Request_GetRallyMemberData` 폴백 추가 |

### 현재 상태는?
- ✅ war_memberSlotList 취소 슬롯 누적 버그 수정
- ✅ LINQ null 안전 처리 수정
- ✅ 서버 재요청 폴백 추가

> **한 줄 요약**: "집결 2회 참여 시 이전 취소 슬롯이 목록에 잔류하여 퇴각 처리가 NRE로 중단되는 버그를 슬롯 삭제 보정과 LINQ 수정으로 해결했다."

---

## 1. 현상/개요

재현 시나리오:
1. 유저 A가 요새전 집결에 참가 → `war_memberSlotList`에 슬롯 등록
2. 유저 A가 참가 취소 → 서버에서 취소 응답 수신
3. **취소 응답 처리 시 `war_memberSlotList`에서 해당 슬롯 키를 삭제하지 않음**
4. 유저 A가 같은 집결에 재참가 → 새 슬롯 추가 → 중복 키 상태
5. 퇴각 버튼 클릭 → 슬롯 탐색 → `.Select(Find).First()` → null 반환 → NRE → 버튼 무반응

## 2. 원인 분석

```csharp
// war_memberSlotList 취소 처리 (기존 — 누락)
void OnCancelRallyJoin(Response res)
{
    // slotKey 삭제 누락 — war_memberSlotList에 취소된 슬롯이 남아있음
    UpdateUI();
}

// 퇴각 버튼 처리 (기존 — NRE 위험)
var slot = war_memberSlotList
    .Select(kvp => FindSlot(kvp.Key))
    .First();  // FindSlot이 null을 반환하면 .First()에서 NRE
```

취소 후 재참가 시 동일 유저의 슬롯이 `war_memberSlotList`에 2개가 된다. 이 상태에서 퇴각을 시도하면 취소된 슬롯을 `FindSlot`으로 조회할 때 null이 반환되고, `.First()`가 null 원소를 만나 `NullReferenceException`을 던진다.

## 3. 수정 방법

**1) 취소 시 슬롯 삭제**
```csharp
void OnCancelRallyJoin(Response res)
{
    war_memberSlotList.Remove(cancelledSlotKey); // 누락 삭제 추가
    UpdateUI();
}
```

**2) LINQ 안전 처리**
```csharp
// 수정 후
var slot = war_memberSlotList
    .SelectMany(kvp => new[] { FindSlot(kvp.Key) })
    .FirstOrDefault(s => s != null); // null 안전
```

**3) 폴백 추가**
`slot`이 null인 경우(로컬 캐시 불일치 상태) `Request_GetRallyMemberData`로 서버에서 최신 멤버 데이터를 재요청하여 목록을 갱신한다.

## 연관 문서

- [[AWQL-7595_RallyLeader_Succession_RetreatPath_Analysis]] — 집결 리더 승계 시 stale 데이터 유사 패턴
- [[AWQA-6260_RallyParticipant_PathLine_DuplicateLine_BugFix_Analysis]] — 집결 참여자 PathLine 오표시 연관 버그
- [[marchline_system_analysis]] — MarchLine 전체 아키텍처
