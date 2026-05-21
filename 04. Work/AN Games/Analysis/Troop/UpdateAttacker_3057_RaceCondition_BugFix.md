---
tags:
  - system/troop
  - system/network
  - concern/bug
  - concern/performance
  - status/done
aliases:
  - UpdateAttacker 3057/3051 레이스 컨디션 버그 분석 및 수정
description: ```
created: 2026-05-20
updated: 2026-05-20
---

← [[Troop_MOC]]


# UpdateAttacker 3057/3051 레이스 컨디션 버그 분석 및 수정

> **파일**: `Assets/Network/Scripts/NetworkTroop.cs` — `MarchLine.UpdateAttacker()` L2168 부근
> **수정일**: 2026-04-14
> **관련 이슈**: 방어자 origin_no desync (공격자/방어자 교차 지점 불일치)

## 재현 시나리오

- **공격자 A**: user_no=15483, fleet_slot_id=0 (최초 출격)
- **방어자 B**: user_no=12885, fleet_slot_id=497 (이동 중)
- A가 B를 PVP 공격 → 최종적으로 A의 origin_no(4230048)와 B의 origin_no(4190054)가 불일치

## 로그 기반 타임라인

```
[1] 3057 → 서버: B(12885//497) 조회 → origin=3480086 (원래 목적지)
[2] StartMove:PVP → A(15483//0).UpdateAttacker() 진입
[3] "최초 출격" 분기 → 1차 crossPath → origin=4190054 계산
[4] 3051 → 서버: A(15483//0) 전송 (origin=4190054) → 서버가 fleet_slot_id=823 부여
[5] 3051 콜백 → updateTargetUser 실행
[6] updateTargetUser → 2차 crossPath → origin=4230048 계산 (정확한 값)
[7] updateTargetUser → B.tracking에 15483//823 추가 → other_user_lines[15483] 로컬 캐시 갱신
[8] updateTargetUser → B.UpdateAttacker() 재귀 호출
[9] B.UpdateAttacker Phase 5 → Request_GetFleetData(3057) [15483] 비동기 요청 ← ★문제★
[10] updateTargetUser → RequestMyMarchIfNeeded → Request_NewMarch(3051) 15483//823 origin=4230048
[11] ★ 3057 응답 도착 (164ms) — 서버는 [10]의 3051을 아직 미처리
[12] UpdateUserTroopData → other_user_lines[15483].Clear() → stale 데이터(origin=4190054)로 덮어씀
[13] B.UpdateAttacker 콜백 → other_user_lines[15483]에서 공격자 읽기 → stale origin=4190054
[14] 3차 crossPath → stale 데이터 기반 → origin=4190054
[15] Request_NewMarch(3051) B(12885//497) origin=4190054 ← ★잘못된 값 전송★
[16] 3051 응답 A(15483//823) → origin=4230048 (정확)
[17] 3051 응답 B(12885//497) → origin=4190054 (오류 확정)
```

### 핵심: 왜 origin이 4190054와 4230048으로 갈리는가

| 시점 | crossPath 호출 | 사용 데이터 | 결과 origin |
|------|---------------|------------|-------------|
| [3] 1차 | "최초 출격" 분기 | A: fleet_slot_id=0 상태 | 4190054 |
| [6] 2차 | updateTargetUser | A: fleet_slot_id=823 (서버 확정) | 4230048 (정확) |
| [14] 3차 | B.UpdateAttacker 콜백 | A: 3057의 stale 응답 | 4190054 (오류) |

1차는 A의 slot이 아직 0이라 부정확한 중간값. 2차에서 서버 확정 slot 기반으로 정확한 값을 계산하지만, 3차에서 3057의 stale 응답이 이를 덮어쓴다.

## 근본 원인

`updateTargetUser`(L2082)에서:
1. 2차 `crossPath` 후 `other_user_lines[15483]`에 정확한 A 데이터(origin=4230048) 저장
2. `target_user_Data.UpdateAttacker(UserList, false, key)` 재귀 호출
3. Phase 5에서 B의 `tracking_slot_id_arr`에 있는 15483을 발견 → `UserList`에 미포함 → `Request_GetFleetData(3057)` 발사
4. 3057 응답 핸들러 `UpdateUserTroopData`가 `other_user_lines[15483].Clear()` 후 서버의 stale 데이터로 교체
5. 콜백에서 stale `other_user_lines[15483]` 기반으로 `crossPath` → 잘못된 origin 전송

**한 줄 요약**: 로컬에서 이미 갱신한 유저 데이터를 서버에서 다시 조회하면서, 아직 반영 안 된 stale 데이터로 덮어쓰는 레이스 컨디션.

## 수정 내역

**위치**: `NetworkTroop.cs` L2168, `updateTargetUser` 콜백 내부

```csharp
// 수정 전 (단일 행)
target_user_Data.UpdateAttacker(UserList, false, key);

// 수정 후
if (UserList == null)
    UserList = new List<long>();
if (!UserList.Contains(myMarchLine.user_no))
    UserList.Add(myMarchLine.user_no);
target_user_Data.UpdateAttacker(UserList, false, key);
```

### 작동 원리

Phase 5 (L2392-2396)에서 `tracking_slot_id_arr` 순회 시:
```
tracking_slot_id_arr = [15483, 823]
UserList = [15483]  ← 수정으로 추가됨
→ UserList.Contains(15483) == true → temp_UserList에 미추가
→ temp_UserList 비어있음 → callback() 직접 호출 (3057 요청 없음)
```

`other_user_lines[15483]`에는 L2162-2166에서 이미 정확한 데이터가 저장되어 있으므로, 콜백에서 그대로 사용하여 정확한 `crossPath` 결과를 얻는다.

## 효과

| 항목 | 수정 전 | 수정 후 |
|------|---------|---------|
| B의 origin_no | 4190054 (stale) | 4230048 (정확) |
| 불필요한 3057 요청 | 1회 발생 | 제거 |
| 네트워크 RTT 의존성 | 3057/3051 응답 순서에 민감 | 3057 미발사로 레이스 자체가 소멸 |

## 잔여 이슈: Double crossPath (후속 검토 대상)

"최초 출격" 분기(L2204-2206)에서 1차 `crossPath` 실행 → 이후 `updateTargetUser`에서 2차 `crossPath` 재실행. 1차 결과(origin=4190054)는 서버에 전송되지만 2차에서 즉시 덮어써지므로, 1차 `crossPath`는 실질적으로 무의미하며 서버에 부정확한 중간값을 전송하는 원인이 된다. 이 개선은 본 수정과 독립적이며 별도 이슈로 추후 검토 가능.

## 검증 방법

1. 동일 시나리오 재현: fleet_slot_id=0 (최초 출격)으로 이동 중인 방어자 공격
2. 로그 확인 항목:
   - `[TroopTrace][UpdateAttacker:RequestMyMarch]` origin 값 — 공격자/방어자 일치 여부
   - B.UpdateAttacker Phase 5에서 3057 요청 미발생 확인 (callback 직접 호출)
   - 최종 3051 요청에서 두 군단의 origin_no 일치 확인
3. 회귀 테스트: 복수 추적자, 랠리 참가, NPC 공격 등 다른 UpdateAttacker 경로

## 관련 문서

- [[NetworkTroop_UpdateAttacker_Analysis]] — UpdateAttacker 전체 분석 (이슈 4로 등록됨)
- [[Troop_Manager_StartMove_UpdateAttacker_Analysis]] — StartMove → UpdateAttacker 호출 흐름
- [[Troop_Manager_crossPath_Analysis]] — crossPath/MakeCrossPosition 분석
- [[TroopTrace_StartMove_UpdateAttacker_LogGuide]] — 디버그 로그 체계
- [[TroopData_15483_vs_12885_PassThrough_Analysis]] — 동일 유저 쌍(15483 vs 12885) 이전 분석


