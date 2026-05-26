---
tags:
  - analysis
  - system/network
  - system/world
aliases:
  - MKSocket 분석
  - 월드 소켓 연결 관리
description: 월드맵 Socket.IO 연결 베이스 클래스 — 연결 생명주기, 블록 구독 시스템, push 이벤트 핸들러 분석
status: done
created: 2026-05-22
updated: 2026-05-22 (res_push 핸들러 전체 분석 추가)
---

← [[Network_MOC]]

# MKSocket 분석

## 요약

### 무슨 문제였나?
월드맵에서 서버와 실시간으로 데이터를 주고받는 소켓 연결을 관리하는 클래스다. "내 주변 어느 구역의 데이터를 받을지" 구독 목록을 관리하고, 연결이 끊어지면 자동으로 재연결한다. 요새전·SVS 씬에서는 서브 클래스(FortWarSocket, SVSSocket)가 동작을 확장한다.

### 어떻게 고쳤나?
현재는 코드 분석 단계이며 수정이 아닌 구조 파악이 목적이다.

| 역할 | 설명 |
|------|------|
| 연결 생명주기 | Connect → Join → Push 상태 머신으로 소켓 연결 관리 |
| 블록 구독 | joinBlockWorld(가입 블록) + block_list(요청 대기 큐) 이중 관리 |
| Push 처리 | notify / user_notify / ally_notify 채널별 게임 이벤트 분기 |
| Ping/Pong | 60초 주기 heartbeat로 연결 상태 유지 |

### 현재 상태는?
- ⚠️ CheckOverBlockLeave() — curentBlock 하드코딩 0 (항상 (0,0) 기준 거리 계산, 버그)
- ⚠️ res_notify / res_user_notify — ally_waiting_response 처리 ~60줄 코드 중복
- ⚠️ instance getter — FindFirstObjectByType 폴백 (씬 전체 탐색, 성능 비용)
- ⚠️ req_join — Manager null 검사 중복 (Emit 직전 2회 동일 검사)
- 🔍 block_list — Dictionary키=값 동일, HashSet으로 교체 가능

> **한 줄 요약**: "소켓 블록 구독 시스템은 잘 동작하지만 '오래된 블록 제거' 기준이 잘못된 좌표(0,0)를 참조하는 버그가 잠재해 있다."

---

## 개요

**파일**: `Assets/World/Scripts/NetworkData/MKSocket.cs`  
**클래스**: `MKSocket : MonoBehaviour` (베이스 클래스)  
**서브 클래스**: FortWarSocket, SVSSocket  
**역할**: Socket.IO 연결 수립, 블록 구독/해제, Push 이벤트 수신 및 분배

---

## 연결 상태 머신

```
CONNECT_STATE.None
  → Connect  (ReConnect_WorldSocket 호출)
  → Join     (req_join 전송 후)
  → Push     (res_join 성공 응답 수신 후)
```

소켓 이벤트 핸들러 등록 (ReConnect_WorldSocket):

| 이벤트 | 핸들러 | 설명 |
|--------|--------|------|
| connect | OnConnected | 연결 완료 → req_join 0.5s Invoke |
| disconnect | OnDisconnect | 자동 재연결 |
| error | OnError | Arena/그외 씬별 팝업 처리 |
| join | res_join | Join 응답 처리 |
| block | res_block | 블록 데이터 수신 → WorldSocketDataModel |
| block_join | res_block_join | 블록 가입 결과 확인 |
| block_leave | res_block_leave | 블록 이탈 결과 확인 |
| notify | res_notify | 개인 채널 푸시 |
| user_notify | res_user_notify | 유저 전용 채널 |
| ally_notify | res_ally_notify | 연맹 채널 |
| server_notify | ResServerNotify | 글로벌 공지 |
| ally_global | res_ally_global | 연맹 창설/해체 등 전체 알림 |
| an2pong | res_an2pong | Ping-Pong 응답 |

---

## 블록 구독 시스템

### 핵심 자료구조

| 필드 | 타입 | 역할 |
|------|------|------|
| joinBlockAround | List\<int\> | 내 마을 주변 9블록 고정 구독 목록 |
| joinBlockAroundDic | Dictionary\<int,int\> | joinBlockAround 빠른 조회용 |
| joinBlockWorld | Dictionary\<int,int\> | 현재 가입 중인 모든 블록 |
| block_list | Dictionary\<int,int\> | 서버에 아직 요청 안 한 블록 대기 큐 |
| maxBlockCount | int = 40 | 최대 가입 블록 수 |

### 블록 요청 흐름

```
req_block_join(blocks)
  ├→ 이미 가입? → 스킵 (force=true면 재요청)
  ├→ 오버 시 CheckOverBlockLeave() → req_over_block_leave()
  ├→ AddWorldReqBlockList() → block_list에 추가
  └→ req_one_block() → 한 블록씩 순차 Emit("block_join_req" + "block_req")
        └→ res_block() 수신 → block_list 제거 → 다음 블록 req_one_block()
```

### 재시도 메커니즘

- Invoke_ReReqOneBlock: 6초 후 재요청, 최대 2회
- IsCheckReqBlockCount: block_list 개수가 3회 연속 줄지 않으면 req_one_block 강제 호출

---

## Push 이벤트 핸들러 분기 (res_user_notify)

| category | 처리 내용 |
|----------|----------|
| ally_waiting_response | 연맹 가입 수락 → AllyManager, WorldManager, ChatLog 갱신 |
| mail | 메일 수신 → MailManager 갱신, 카테고리 2이면 군단/영웅/자원 재조회 |
| mission | 미션 업데이트 → NetworkMission 조회 |
| def_leader | 수성장 변경 토스트 팝업 |
| chatting | (주석 처리 — 현재 미사용) |
| chronicle | (주석 처리 — 현재 미사용) |

---

---

## res_push 핸들러 시스템

### 개요

`res_push`는 **블록에 구독(join)된 유저들에게만** 서버가 브로드캐스트하는 실시간 이벤트 수신 진입점이다.  
`PreprocessResPush` → `switch(push_type)` → `Handle*()` 메서드 체인으로 처리된다.

### PreprocessResPush — 공통 전처리

MKSocket.cs:4259

```
[씬 체크] FortWar 씬이면 처리 안 함 (FortWarSocket.override에서 처리)
[null 체크] args == null → 에러 반환
[중복 체크] CheckduplicatePush == args → "Already Receive" 건너뜀
[JSON 전처리]
  - push_type != "fleet_battle_msg"일 때만 escape 제거
  - \\ 제거, ""[ → [, ]"" → ], "[ → [, ]" → ]
  - null 값 → 0 대체
[파싱] Res_PushType 역직렬화 → push_type 추출
```

> fleet_battle_msg만 escape 제거를 건너뛰는 이유: 이 메시지 내부에는 중첩 JSON 구조가 있어 escape를 미리 제거하면 파싱이 깨짐.

### push_type 전체 핸들러 목록

| push_type | 핸들러 메서드 | DTO | 처리 내용 |
|-----------|-------------|-----|---------|
| fleet_move | HandleFleetMove | Socket_Action_DTO | 군단 이동 경로 갱신 → RefreshWithMoveData |
| fleet_sally | HandleRallyCreateStartSally | Socket_Action_DTO | 군단 출격 — 가시성 체크 후 이동 또는 FleetEnd 처리 |
| fleet_end | HandleFleetEnd | FleetEnd | 군단 귀환 완료 — TroopLOD 제거, 자원 인벤토리 갱신 |
| fleet_battle | HandleFleetBattle | Socket_Action_DTO | NPC 전투 시작 — BattleLog 기록, RefreshWithPushFleetBattle |
| fleet_battle_pvp | HandleFleetBattle (공유) | Socket_Action_DTO | PvP 전투 시작 — 타겟 미존재 시 FleetData 먼저 조회 후 처리 |
| fleet_battle_rally_raid | HandleFleetBattle (공유) | Socket_Action_DTO | 레이드 집결 전투 시작 |
| fleet_battle_end | HandleFleetBattleEnd | ResFleetBattleEnd | 전투 종료 — BattleLog END/ERROR 기록 |
| fleet_battle_msg | HandleFleetBattleMsg | ResFleetBattleMsg | 전투 진행 메시지 — ci_id 그룹핑, sally_type 분기, 위치 갱신 |
| fleet_battle_rally | HandleFleetBattleRally | Socket_Action_DTO | 집결 전투 시작 — BattleLog + RefreshWithPushFleetBattle |
| fleet_battle_rally_pvp | HandleFleetBattleRally (공유) | Socket_Action_DTO | PvP 집결 전투 시작 |
| rally_create | HandleRallyCreateStartSally | Socket_Action_DTO | 집결 생성 — rally_info 추가 + 이동 갱신 |
| rally_start | HandleRallyCreateStartSally (공유) | Socket_Action_DTO | 집결 출발 |
| rally_cancel | HandleRallyCancel | Socket_Action_DTO | 집결 취소 — rally_info에서 연맹 제거 |
| rally_add | HandleRallyAdd | Socket_Action_DTO | 집결 진행 중 군단 난입 |
| rally_ing | HandleRallyIng | Socket_Action_DTO | 집결 부대 목표물로 출발 → RefreshWithMoveData |
| rally_join | HandleRallyJoin | RallyJoin | 집결 공격 합류 → RefreshWithPushRallyJoin |
| def_join | HandleDefJoin | DefJoin | 방어 지원 도착 완료 → RefreshWithPushDefJoin |
| new_player | HandleNewPlayer | Socket_Player_DTO | 신규/이전 플레이어 등장 — 이전 이펙트 재생 후 RefreshWithPlayerData |
| new_npc | HandleNewNpc | Socket_NPC_DTO | NPC 등장 — 블록 포함 여부 확인 후 AddNpc + RefreshWithNPCData |
| new_rc | HandleNewRc | Socket_Resource_DTO | 자원지 등장 — 블록 포함 여부 확인 후 AddResource + RefreshWithResourceData |
| chg_player | HandleChgPlayer | Socket_Player_DTO | 플레이어 상태 변경 + profiles 캐시 동기화 |
| chg_npc | HandleChgNpc | Socket_NPC_DTO | NPC 상태 변경 → npc_dto 갱신 + RefreshWithPushChgNpc |
| chg_rc | HandleChgRc | Socket_Resource_DTO | 자원지 상태 변경 — PvP 상태 is_battle 보정, troop_send 팝업 marchType 실시간 갱신 |
| delete | HandleDelete | ResDelete | 오브젝트 삭제 — Resource/NPC 양쪽 삭제 시도(예외처리 내장) |
| raid_start | HandleRaidStart | AllyRaidData | 레이드 시작 — AddRaid, 거점에 이펙트 재생 후 RefreshView |
| raid_update | HandleRaidUpdate | AllyRaidData | 레이드 HP 갱신 — npc_hp≤0이면 GROGGY 상태 전환 |
| raid_end | HandleRaidEnd | AllyRaidData | 레이드 종료 — RemoveRaid, 팝업 닫기, 이펙트 후 RefreshView |

### 핸들러별 주요 로직 메모

#### HandleFleetBattle (fleet_battle_pvp)

MKSocket.cs:4543

```
1. objTroopDict에 공격 군단 키 존재 확인
2. ci_id 중복이면 스킵 (중복 소켓 방어)
3. fleet_battle_pvp이고 타겟 군단 미존재 시:
   → Request_GetFleetData(target_user_no) 후 임시 Socket_Action_DTO 생성 → RefreshWithMoveData → RefreshWithPushFleetBattle
4. 내 군단이 공격자 또는 피격자일 때 → ci_id 양쪽 갱신 + mainHud.RefreshTroop
```

#### HandleFleetBattleMsg

MKSocket.cs:4652

```
1. fleet_battle_msg 전용 추가 escape 제거 (\"{ → {, }\" → })
2. p.msg.cm 을 ci_id 기준 GroupBy → WorldBattleLogManager.ADD_COMBATLOG
3. battle_fleets_leaders: cm 메시지에서 전투 타입(ty) → sally_type/target_type 매핑
4. 각 전투 참여 군단의 위치·상태 갱신 (origin_no, target_no, move_path_slot)
```

전투 타입(ty) 매핑:

| ty | MarchLine.MARCH_SALLY_TYPE | 전투 종류 |
|-----|--------------------------|---------|
| 1 | FLEET_SALLY_NPC | NPC 단독 전투 |
| 2 | FLEET_SALLY_RALLY_NPC | NPC 집결 전투 |
| 12 | FLEET_SALLY_PVP_RC | 자원지 PvP |
| 13 | FLEET_SALLY_PVP_CITY | 마을 PvP |
| 14, 15 | FLEET_SALLY_RALLY_PVP | PvP 집결 전투 |
| 16 | FLEET_SALLY_RAID_RALLY | 레이드 집결 |
| 기타 | FLEET_SALLY_PVP | 일반 PvP |

#### HandleRallyCreateStartSally (fleet_sally / rally_create / rally_start)

MKSocket.cs:4320

```
1. rally_create이면 act_type 세팅 후 RefreshWithPushRallyCreate (rally_info 추가)
2. IsVisibleMoveData 판정:
   - true  → RefreshWithMoveData (군단 표시)
   - false → 이미 표시 중인 군단이면 FleetEnd 처리 (제거)
3. IS_RETURN이 아니면 move_block_slot 기반으로 해당 블록의 move_list 갱신
4. 내 군단이면 → Request_GetFleetData 후 mainHud.RefreshTroop
```

#### HandleFleetEnd

MKSocket.cs:4365

```
lastFleetEnd 비교로 연속 중복 fleet_end 차단
(user_no + fleet_slot_id 동일하면 "연속된 fleet_end" 로그 후 스킵)
→ RefreshWithPushFleetEnd
내 군단이면 → Request_InventoryInfo 후 자원 HUD 갱신
```

#### HandleChgRc

MKSocket.cs:4494

```
자원지 채집 PvP 특이 케이스:
fleet_slot_id > 0 && user_no <= 0 → is_battle = true 강제 세팅
(서버가 PvP 진입 시 user_no를 제거하므로 클라이언트가 보정)

troop_send 팝업이 열려 있고 target_no == 변경된 자원지이면:
- user_no > 0 → marchType = BATTLE_USER_RESOURCE (전투 중인 자원지)
- user_no <= 0 → marchType = GATHER_RESOURCE (채집 가능 자원지)
팝업 UpdatePanel() 실시간 갱신
```

### 씬별 처리 분리

```
PreprocessResPush (MKSocket.override = false)
  ├→ FortWar 씬: 처리 안 함 (return false)
  └→ 그 외: 정상 처리

FortWarSocket.PreprocessResPush (override = true)
  └→ 씬 체크 없이 항상 처리 (요새전 전용 push 처리)
```

---

## 문제점 및 개선 제안

### 🔴 P1 — CheckOverBlockLeave curentBlock 하드코딩 버그

MKSocket.cs:232

```
int curentBlock = 0;    // 항상 (0,0) 기준
int cx = curentBlock % MKCommon.pushBlockLine;
int cy = curentBlock / MKCommon.pushBlockLine;
```

거리 계산 기준이 항상 (0,0)이므로 실제 카메라 위치와 관계없이 잘못된 블록이 제거될 수 있음.  
WorldPlanetManager 또는 WorldManager에서 실제 현재 블록 번호를 가져와야 함.  
(주석에 `curentBlock = (int)WorldPlanetManager.instance.GetCurrentBlockNo();` 가 막혀 있음)

### 🟡 P2 — res_notify / res_user_notify ally_waiting_response 코드 중복

ally_waiting_response 처리 코드가 res_notify와 res_user_notify 양쪽에 거의 동일하게 존재 (~60줄).  
공통 처리 메서드로 추출 권장.

### 🟡 P2 — instance getter FindFirstObjectByType 폴백

MKSocket.cs:27

```
else if (_instance == null)
    _instance = GameObject.FindFirstObjectByType<MKSocket>();
```

씬 전체 탐색 비용 발생. Awake에서 할당된 _instance가 null인 비정상 상황에서만 호출되지만 호출 빈도 제한 없음.

### 🟡 P2 — req_join Manager null 중복 검사

MKSocket.cs:655~670  
Emit 호출 전 `Manager == null` 검사가 두 번 연속 등장 (655번과 668번). 두 번째 검사 제거 권장.

### 🟡 P2 — res_block 서버 JSON 전처리 의존

MKSocket.cs:911~915

```
res_str = res_str.Replace(@"\", string.Empty);
res_str = res_str.Replace("\"\"[", "[");
...
```

서버가 escape된 JSON을 보내는 문제를 클라이언트가 string.Replace로 처리.  
서버 수정이 근본 해결책. 향후 서버 JSON 형식 변경 시 파싱 실패 위험.

### 🟢 P3 — block_list Dictionary\<int,int\> 키=값 중복

block_list는 키와 값이 항상 동일한 int. HashSet\<int\>로 교체하면 코드가 더 명확해짐.

### 🟡 P2 — HandleFleetBattle objTroopDict 키 미존재 시 KeyNotFoundException

MKSocket.cs:4548

```
var attacker = WorldManager.instance.objTroopDict[p.key];
```

딕셔너리 직접 인덱스 접근 — 키가 없으면 `KeyNotFoundException` 크래시.  
`TryGetValue`로 교체하고 null 시 early return 필요.

### 🟡 P2 — HandleNewNpc / HandleNewRc 블록 확인 로직 불일치

HandleNewNpc(4426): 블록에 포함된 경우에만 AddNpc + Refresh 실행  
HandleNewRc(4467): 블록 포함 여부와 관계없이 항상 Refresh 실행 (블록 체크가 AddResource에만 적용)  
두 핸들러의 처리 기준이 불일치 — 어느 쪽이 의도된 동작인지 확인 필요.

### 🟡 P2 — HandleFleetBattleMsg 추가 escape 제거 중복

MKSocket.cs:4654~4658

fleet_battle_msg는 PreprocessResPush에서 escape 제거를 건너뛰고,  
HandleFleetBattleMsg 내부에서 다시 `Replace(@"\", ...)`, `Replace("\"{"...)` 처리.  
두 단계의 escape 처리가 분산되어 있어 유지보수 시 오해 유발 가능.

### 🟢 P3 — chatting/chronicle notify 케이스 데드코드

res_notify와 res_user_notify의 chatting, chronicle case가 모두 주석 처리 상태.  
완전히 제거하거나 TODO 명시 권장.

---

## 의존 관계

```
MKSocket (베이스)
  ├→ WorldSocketDataModel.instance   (블록 데이터 저장/삭제)
  ├→ WorldManager.instance           (RefreshPushBlockJoinLeave, ProcessBlockData)
  ├→ MKHttp.instance                 (playZone.socket_io URL, login 정보)
  ├→ AllyManager, NetworkAlly        (notify: 연맹 가입 처리)
  ├→ NetworkChatting, MailManager    (notify: 채팅/메일)
  └→ FortWarSocket / SVSSocket       (씬별 override 확장)
```

---

## 성능/메모리 영향

- 블록 요청이 직렬(한 번에 1개)로 처리 — 대역폭 안정적이나 초기 로딩이 느릴 수 있음
- InvokeRepeating("req_an2ping", 1f, 60f) — 60초 주기 ping, OnDisable 시 CancelInvoke 처리됨
- joinBlockWorld 최대 40개 유지 — 메모리 상한 명시적 설정
- req_block_leave에서 joinBlockAround 9블록을 joinBlockWorld에서 먼저 Remove 후 잔여를 leave 처리 — 의도는 맞으나 로직이 복잡해 오독 위험 있음
