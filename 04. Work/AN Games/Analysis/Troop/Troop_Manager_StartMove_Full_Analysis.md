---
tags:
  - system/troop
  - system/ui
  - system/network
  - concern/readability
  - concern/performance
  - concern/bug
  - status/done
aliases:
  - StartMove 전체 분석
description: Troop_Manager.StartMove() 전체 흐름 분석 — 조작 불가 Guard 체계, 절취선 이전/이후 구조, sally_type별 switch 실행 경로, 재귀 패턴 및 개선 포인트
created: 2026-05-21
updated: 2026-05-21
---

← [[Troop_MOC]]

# Troop_Manager.StartMove() 전체 분석

## 요약

### 무슨 문제였나?
버튼 하나를 눌러 군단을 이동시킬 때 어디로 어떻게 보내야 하는지 정하는 로직이 모두 `StartMove` 함수 한 곳에 몰려 있었다. 단순 이동부터 집결 생성, 집결 참여 취소, 방어 지원, PvP 공격 등 10가지 이상의 경로가 분기되어 1,150줄에 달했고, 어떤 조건에서 어떤 API가 호출되는지 파악하기 어려웠다.

### 어떻게 고쳤나?

| 구간 | 역할 |
|------|------|
| Phase 1 — 사전 검증 | 유저 군단 데이터 없으면 `Request_GetFleetData` 후 재귀 재시도 |
| Phase 2 — Guard 체인 | 복귀 불가/갈 수 없는 길/퇴각/전멸/도착 임박/NPC·집결 조건 순서대로 return |
| Phase 3 — 타겟 재타겟팅 | 아군 전투 중 타겟 → 집결 난입/공격지원/방어지원으로 sally_type 재결정 |
| Phase 4 — 집결 해제 처리 | 집결 참여자 → 취소, 리더 → 해산, 방어 지원 → 취소 |
| 절취선 | 전처리 종료, 실행 로그(`ResolvedBeforeSwitch`) |
| Phase 5 — switch 실행 | sally_type별로 실제 서버 API 호출 |

### 현재 상태는?
`return→continue` 수정(추적자 도착 임박 스킵), AP 업데이트 수정 포함. 기능 정상 동작 확인.

> **한 줄 요약**: "StartMove는 이동 버튼 콜백의 최종 관문으로, 10+ 가지 조작 불가 Guard를 통과한 군단만 sally_type에 따라 서버 API로 전달된다."

---

## 1. 위치 및 시그니처

**파일**: `Assets/UI/Troop/Troop_Manager.cs:2581`

```csharp
public void StartMove(
    MarchLine data,
    MarchLine.MARCH_SALLY_TYPE sally_type,
    TARGET_TYPE target_type,
    long target_id,
    long target_no,
    string target_key,
    long rally_id,
    Callback CloseButtonClicked,
    long ci_id = 0)
```

**파라미터 역할**:

| 파라미터 | 역할 |
|---------|------|
| `data` | 내 군단 MarchLine 데이터 (이 함수 내에서 필드 직접 변경됨) |
| `sally_type` | 요청 출격 유형 (Guard/재타겟팅 중 변경될 수 있음) |
| `target_type` | 타겟 종류 (NPC/USER/TOWER/RESOURCE 등) |
| `target_id`, `target_no`, `target_key` | 타겟 식별자 3종 세트 (변경 가능) |
| `rally_id` | 집결 슬롯 ID |
| `CloseButtonClicked` | 팝업 닫기 콜백 (성공/실패 모두 함수 말단에서 호출) |
| `ci_id` | 전투 ID (기본 0, PVP 지원 시 사용) |

> `sally_type`, `target_type`, `target_id`, `target_no`, `target_key`, `rally_id`, `ci_id`는 함수 내부에서 재결정(override)될 수 있다. `data` 필드도 직접 변경된다.

---

## 2. 전체 흐름 구조

```
StartMove() 진입
│
├─ [로그] [TroopTrace][StartMove:Input]
│
├─ [Phase 1] 타겟 유저 군단 데이터 사전 확보
│   └─ TARGET_TYPE.USER & other_user_lines 없음 → Request_GetFleetData → 재귀 재시도
│
├─ IS_AP_UPDATE 산출 (NPC 타겟 & isRallyJoin)
│
├─ [Phase 2] Guard 체인 (return 발생 시 함수 종료)
│   ├─ 복귀 경로 없음 → MakePath==null → 토스트 팝업, return
│   ├─ 갈 수 없는 길 → 관문/섹터 불가 → 토스트 팝업, return
│   ├─ 전투 중 (isRallyJoin==false) → 퇴각 경고 팝업, return
│   ├─ GATHER 중 복귀 → sally_type을 RESOURCE_RETURN으로 변경 (return 없음)
│   ├─ IS_ANNIHILATION → 토스트 팝업, return
│   ├─ 도착 2초 전 ~ 도착 후 0.5초 → 토스트 팝업, return
│   ├─ TARGET_TYPE.NPC
│   │   ├─ Npc_Challenage_Event → 난이도/선행 레벨 체크, 재귀 or return
│   │   ├─ Rally형 NPC 개인 공격 시도 → 토스트 팝업, return
│   │   └─ AP 부족 → AP 충전 팝업, return
│   │   └─ NPC 레벨 선행 체크 → 토스트 팝업, return
│   ├─ TARGET_TYPE.TOWER + RALLY 유형 → AP 부족 체크
│   ├─ IS_RETREAT → 토스트 팝업, return
│   ├─ FLEET_SALLY_RESOURCE → 연구 조건 체크, return
│   ├─ TARGET_TYPE.USER (아군)
│   │   ├─ 전투 중 & 집결 리더 → sally_type = ADD_RALLY, 재귀 StartMove → return
│   │   ├─ 전투 중 & 공격자 → sally_type = PVP_AST_ATT, 재귀 StartMove → return
│   │   └─ 전투 중 & 방어자 → sally_type = PVP_AST_DEF, 재귀 StartMove → return
│   │   └─ 전투 아님 → "공격 불가" 토스트, return
│   ├─ TARGET_TYPE.USER (요새전 씬) → 시작점 연맹 확인
│   ├─ TARGET_TYPE.USER (적 아군 방어 중) → 대상 재타겟팅(PVP_AST_DEF)
│   └─ FLEET_SALLY_DEF_JOIN → 지원 MAX 체크, 없으면 Request_GetReInforceMemberData 재귀
│
├─ [Phase 3] fleet_slot_id > 0 분기 (기존 행군 중인 군단 전처리)
│   ├─ data.isJoin() → 집결 참여 취소 처리 + AP 업데이트 + CloseButtonClicked, return
│   ├─ data.isRallyLeader() → 집결 해산(DissolutionRallyBattleProc) + CloseButtonClicked, return
│   ├─ FLEET_SALLY_DEF_JOIN 현재 상태 → 방어 지원 취소 확인 팝업, return
│   ├─ data.UpdateDefenser() 호출
│   └─ GATHER 중 + tracking_slot_id_arr 있음 → 추적자 방향 전환(UpdateAttacker)
│
├─ ─── [ 절취선 ] ─────────────────────────────────────────────
│   [로그] [TroopTrace][StartMove:ResolvedBeforeSwitch]
│
├─ [Phase 4] switch (sally_type) — 실제 API 호출
│   ├─ RAID_RALLY / RALLY_NPC / RALLY_PVP
│   │   → MakePath + Init + SetMoveTime → Request_CreateRally
│   ├─ RALLY_JOIN_RAID / JOIN_NPC / JOIN_PVP
│   │   → MakePath → Init → (GATHER이면 UpdateAttacker 먼저) → Request_JoinRally
│   │   (시간 초과 / 부대수 초과 검증 포함)
│   ├─ FLEET_SALLY_DEF_JOIN
│   │   → (GATHER이면 Request_NewMarch 후 콜백에서) UpdateAttacker → Request_SupportDefense
│   ├─ PVP / PVP_AST_DEF / PVP_RC
│   │   → Request_GetFleetData(users) → UpdateAttacker(users)
│   └─ PVP_AST_ATT / default
│       → source_no/target_no/... 갱신 → UpdateAttacker()
│
├─ IS_AP_UPDATE이면 Request_Ap → AP 바 갱신
│
└─ CloseButtonClicked?.Invoke()
```

---

## 3. Guard 체인 상세

### 3.1 복귀 경로 없음 체크 (L2626-2632)

```csharp
if (data.fleet_slot_id > 0 && 
    return_sally.Contains(sally_type) == false && 
    Troop_Manager.instance.MakePath(data.GetCurrentPos(), data.planet_no, data.ally_no) == null)
```
- **복귀 유형 목록** (return_sally): `FAIL_RETURN`, `GIVEUP_RETURN`, `NPC_RETURN`, `RESOURCE_RETURN`, `MOVE_RETURN`
- 복귀 타입이 아닌데 현재 위치→마을 경로가 없으면 차단

### 3.2 갈 수 있는 길 체크 (L2638-2666)

```csharp
Socket_Point_DTO gate_point_dto = WorldManager.GetGateInfoDic(target_no);
if (gate_point_dto != null) → MKCommon.CheckCanGoByGate(gate_point_dto)
else                        → MKNavMeshManager.Instance.GetSectorIndex(target_no)
                               → MKCommon.CheckCanGoBySector(targetSector)
```
- 관문 오브젝트이면 관문 통과 가능 여부
- 아니면 NavMesh 섹터 이동 가능 여부

### 3.3 퇴각 Guard (L2674-2695)

```csharp
if (data.isRallyJoin() == false &&
   (data.status == BATTLE || sally_type == GIVEUP_RETURN || sally_type == NPC_RETURN))
```
- 집결 참여자는 퇴각 Guard에서 제외 (`isRallyJoin()`)
- 확인 팝업에서 수락 시 `Request_FleetFallback` 호출

### 3.4 NPC 선행 레벨 / 이벤트 챌린지 (L2717-2797)

- `NPCTroopLOD.GetNPC_BattleType()` → Rally형 NPC는 개인 공격 차단
- `NPCTroopLOD.GetNPC_UseType()` → `Npc_Challenage_Event`이면 난이도·선행 레벨 체크
  - 난이도 불일치 → 토스트 팝업
  - 선행 레벨 +2 이상 → `Request_EventInquiry` 후 재귀 or 팝업
- `CalcAP(target_id, data)` → AP 부족 시 AP 충전 팝업
- `npcDTO.level > npc_max_level + 1` → 선행 레벨 초과 팝업

### 3.5 아군 타겟 sally_type 재결정 (L2892-2959)

| 아군 타겟 상태 | 재결정 |
|----------------|--------|
| 전투 중 & 집결 리더 | `ADD_RALLY`, rally_id 설정 |
| 전투 중 & 공격자(NPC/PVP) | `NPC` or `PVP_AST_ATT`, 타겟 → 원타겟으로 변경 |
| 전투 중 & 방어자 | `PVP_AST_DEF`, counterKey → 실 공격자로 대상 전환 |
| 전투 아님 | "공격 불가" 토스트 |

---

## 4. 절취선 이전: 집결/지원 해제 처리

`data.fleet_slot_id > 0` (기존 군단) 조건 하에서:

### 4.1 집결 참여 취소 (isJoin) — L3051-3208

```
war_memberSlotList에서 내 슬롯 탐색
├─ 슬롯 있음 → BanishOrReturnButtonClicked(warSlot, member_idx)
├─ 슬롯 없음 → Request_GetRallyMemberData 폴백 후 재시도
└─ (예외) 다른 유저 소속 → 확인 팝업 후 Request_BanishRally → 재귀 StartMove
IS_AP_UPDATE이면 Request_Ap 호출 후 return
```

**주의**: `RAID` 타입이고 전투 중(BATTLE) 시 해제 시도 → `LogError("레이드 인데 전투중 집결 참여 취소를?")` (처리 없음)

### 4.2 집결 해산 (isRallyLeader) — L3215-3264

```
war_rally_status 분기:
  1,2(준비/대기) → "popup_desc_rally_cancel"
  3(행군중)      → "popup_desc_rally_disband"
  4(전투중)      → "popup_desc_rally_retreat_penalty"
→ 확인 시 DissolutionRallyBattleProc → (내부) Request_DissolutionRally or Request_DissolutionRallyBattle
```

### 4.3 방어 지원 취소 (DEF_JOIN 현재 상태) — L3271-3320

```
확인 팝업 → Request_GetReInforceMemberData → 내 지원 슬롯 찾기
→ source_no = target_no = GetCurrentPos()
→ MakePath + Init + SetMoveTime(endTime=now)
→ Request_CancelSupport
```

### 4.4 추적자 방향 전환 — L3325-3373

```csharp
data.UpdateDefenser();  // 내가 추적하던 군단 해제
if (GATHER && tracking_slot_id_arr.Count > 0)
{
    // 추적 군단이 있으면 그 군단의 target을 채집지로 재설정 후 UpdateAttacker
    target.sally_type = FLEET_SALLY_RESOURCE;
    target.UpdateAttacker();
}
```

---

## 5. switch(sally_type) — 실제 행군 실행

### 5.1 집결 생성 (RAID_RALLY / RALLY_NPC / RALLY_PVP)

```csharp
// RAID_RALLY이면 레이드 포인트 자동 선택
var path = MakePath(data.source_no, data.target_no, ally_no);
data.Init(path, ...).SetMoveTime(0, 0, rally_speed_up);
data.status = STAY;
NetworkAlly.instance.Request_CreateRally(data, ...);
```
- 연맹 집결 행군 속도 버프(`ALLY_MATCH_SPEED`) 반영
- RAID 집결인 경우 `worldRaidPoint.battle_no` 중 가용 포지션 자동 선택 (없으면 토스트 break)

### 5.2 집결 참여 (JOIN_RAID / JOIN_NPC / JOIN_PVP)

```csharp
var rally_path = MakePath(data.GetCurrentPos(), war_slot.town_no, data.ally_no);
data.Init(rally_path, ...).SetMoveTime(serverNow);
// 시간 초과 체크: data.end_time >= war_rally_e_time - 2 → 경고 팝업
// 부대수 초과 체크: war_slot.num_sq + my_count > war_slot.max_sq → 토스트
void Request_JoinRally()
{
    if (GATHER) → UpdateAttacker(null, false) → sally_type 복원 → Request_JoinRally
    else        → UpdateAttacker(null, false) → Request_JoinRally
}
```

### 5.3 방어 지원 (DEF_JOIN)

```csharp
if (GATHER 상태)
    → Request_NewMarch → 콜백 내 UpdateAttacker → Request_SupportDefense
else
    → UpdateAttacker → Request_SupportDefense
```

### 5.4 PVP (PVP / PVP_AST_DEF / PVP_RC)

```csharp
users = [target_user_no] + tracking_slot_id_arr users (distinct)
NetworkTroop.instance.Request_GetFleetData(users, () => {
    // 추적자 도착 임박 체크 (임박이면 continue, 전체 중단 아님)
    data.source_no = GetCurrentPos();
    data.UpdateAttacker(users);
});
```

### 5.5 PVP_AST_ATT / default

```csharp
data.source_no = data.GetCurrentPos();
data.target_no = target_no; data.origin_no = target_no;
data.sally_type = (long)sally_type;
// ...기타 필드 갱신
data.UpdateAttacker();
```

---

## 6. 재귀 패턴

함수는 여러 지점에서 자기 자신을 재귀 호출한다.

| 상황 | 재귀 이유 |
|------|----------|
| target_type=USER, other_user_lines 없음 | `Request_GetFleetData` 완료 후 재시도 |
| 아군 전투 중 타겟 (집결 난입/지원) | sally_type 재결정 후 다시 처음부터 Guard 통과 |
| 이벤트 챌린지 NPC 레벨 +1 초과 | `Request_EventInquiry` 후 재시도 |
| DEF_JOIN max 체크 - 데이터 없음 | `Request_GetReInforceMemberData` 후 재시도 |
| 집결 참여 취소 후 | 취소 완료 후 원래 이동 의도 다시 실행 |

**위험**: 재귀 깊이 제한 없음. 서버 응답 이상 시 무한 루프 이론적으로 가능.

---

## 7. 주요 의존성

| 클래스/메서드 | 역할 |
|--------------|------|
| `MarchLine.UpdateAttacker()` | 내 군단 및 추적자 경로 재계산 + 서버 전송 |
| `MarchLine.UpdateDefenser()` | 내가 추적하던 군단 링크 해제 |
| `Troop_Manager.MakePath()` | A* 경로 계산 |
| `MKNavMeshManager.GetSectorIndex()` | 이동 가능 섹터 확인 |
| `NetworkAlly.Request_CreateRally()` | 집결 생성 |
| `NetworkAlly.Request_JoinRally()` | 집결 참여 |
| `NetworkAlly.Request_SupportDefense()` | 방어 지원 |
| `NetworkAlly.Request_BanishRally()` | 집결 참여 취소 |
| `NetworkAlly.DissolutionRallyBattleProc()` | 집결 해산 |
| `NetworkTroop.Request_GetFleetData()` | 타겟 유저 군단 데이터 조회 |
| `NetworkTroop.Request_FleetFallback()` | 퇴각 요청 |
| `NetworkLogin.Request_Ap()` | AP 갱신 |
| `NPCTroopLOD.GetNPC_BattleType/UseType()` | NPC 종류 판별 |

---

## 8. 문제점 및 개선 제안

### 8.1 함수 규모 (관심사 분리 필요)
- **~1,150줄** 단일 함수. Guard/재타겟팅/해제/실행을 모두 담당
- 개선: 각 단계별 메서드 분리 (`ValidateMove()`, `ResolveTarget()`, `HandlePreAction()`, `ExecuteMove()`)

### 8.2 재귀 깊이 제한 없음
- 데이터 조회 실패 반복 시 이론적으로 무한 재귀 가능
- 개선: 재시도 횟수 카운터 또는 `async/await` 체인으로 전환

### 8.3 data 파라미터 직접 변경
- `sally_type`, `target_no`, `source_no` 등을 함수 내에서 직접 `data` 필드에 씀
- 중간에 `return`되면 `data` 필드가 부분적으로 변경된 상태로 남음
- 개선: 불변 파라미터 객체를 두고 마지막에 일괄 적용

### 8.4 RAID 전투 중 집결 참여 취소 미처리 (L3057-3061)
```csharp
if(data.target_type == TARGET_TYPE_RAID && data.Get_Client_Status() == BATTLE)
    Debug.LogError("레이드 인데 전투중 집결 참여 취소를?");  // 처리 없음
```
- 에러 로그만 있고 취소/차단 로직 없음 → 이후 처리 경로 불명확

### 8.5 자원지 PvP 난입 체크 미완성 (L3384-3391)
```csharp
if (target_type == TARGET_TYPE.RESOURCE)
{
    var resourceDTO = ...resourceDTOData;
    if(resourceDTO.is_battle) { }  // 빈 블록
}
```
- 조건 분기가 있지만 처리 로직이 없음 (추후 구현 예정 or 누락)

### 8.6 주석 처리된 코드 다수
- 퇴각 쿨타임 체크 (L2802-2806)
- 집결 난입 경고 팝업 (L2941-2950)
- 집결 참여 부대수 초과 팝업 (L3519-3522)

---

## 9. 성능/메모리 고려

| 항목 | 내용 |
|------|------|
| `MakePath` 2회 호출 | Guard(L2628)에서 한 번, switch case에서 또 한 번 — 동일 경로 이중 계산 |
| LINQ 다수 | `tracking_slot_id_arr`, `war_memberSlotList`, `other_user_lines` 처리에 LINQ 사용 |
| `Stopwatch` | `Totalwatch` / `watch` 두 개 상시 실행 — 릴리즈 빌드에서 제거 고려 |

---

## 10. 관련 문서

- [[Troop_Manager_StartMove_UpdateAttacker_Analysis]] — return→continue 수정 및 UpdateAttacker 콜백 보장
- [[NetworkTroop_UpdateAttacker_Analysis]] — UpdateAttacker 내부 구조 및 레이스 컨디션
- [[Troop_Manager_MakePath_Analysis]] — MakePath A* 경로 탐색
- [[Troop_Manager_crossPath_Analysis]] — 요격/추적 기하학
- [[UpdateAttacker_3057_RaceCondition_BugFix]] — 3057 stale 데이터 덮어쓰기 수정
- [[TroopTrace_StartMove_UpdateAttacker_LogGuide]] — [TroopTrace] 로그 가이드
