---
tags:
  - analysis
  - system/world
aliases:
  - WorldSocketDataModel 분석
  - 월드 소켓 데이터 모델
description: 월드맵 소켓 데이터 인메모리 저장소 — DTO 계층 구조, 이중 인덱싱, 문제점 분석
status: done
created: 2026-05-22
updated: 2026-05-22
---

← [[World_MOC]]

# WorldSocketDataModel 분석

## 요약

### 무슨 문제였나?
서버에서 월드맵 데이터(플레이어·자원지·거점·NPC 등)를 소켓으로 받을 때, 클라이언트는 이 데이터를 두 겹으로 관리한다. 하나는 전체 월드 단위 사전, 다른 하나는 블록(구역) 단위 사전이다. 이 두 사전을 동기화하는 로직이 수동으로 관리되고 있어 누락 시 버그 위험이 있다.

### 어떻게 고쳤나?
현재는 코드 분석 단계이며 수정이 아닌 구조 파악이 목적이다.

| 계층 | 내용 |
|------|------|
| 전역 사전 | player_dto (위치 키), player_dto_id (유저 번호 키), resource_dto, npc_dto |
| 블록 사전 | Socket_Block_DTO.dic_*_list — 블록 단위 빠른 조회용 |
| 동기화 | Add/Delete 메서드가 두 계층 모두 수동 업데이트 |

### 현재 상태는?
- ⚠️ AddRaid/RemoveRaid — 조건 미충족 시 LINQ First() 예외 위험 (미수정)
- ⚠️ Socket_Point_DTO.skill 프로퍼티 — 접근할 때마다 JSON 역직렬화 (성능 부하)
- ⚠️ Socket_Point_DTO — 데이터 모델과 UI 렌더링(SetIconTerm) 혼재
- ⚠️ ClearAll()에서 raid_dto 미초기화 — 세션 간 레이드 데이터 잔류 가능
- 🔍 플레이어 이중 사전 동기화 — 수동 관리, 누락 위험

> **한 줄 요약**: "월드맵 소켓 데이터의 이중 인덱싱 구조는 조회 성능을 높이지만 수동 동기화와 예외 미방어 코드로 인한 버그 위험을 안고 있다."

---

## 개요

**파일**: `Assets/World/Scripts/NetworkData/WorldSocketDataModel.cs`  
**클래스**: `WorldSocketDataModel : MonoBehaviour` (partial, Singleton)  
**역할**: 서버에서 수신한 월드맵 소켓 데이터를 인메모리에 저장·관리하는 중앙 저장소

---

## 주요 책임 / 구성 요소

### 1. MonoBehaviour 싱글턴

Awake에서 `instance = this; ClearAll();` 로 초기화.  
세션 실패 이벤트(`Event_Sockio_PauseConnectFail`, `Event_Sockio_LoginSessionFail`) 수신 시 ClearAll() 호출.

### 2. 전역 인메모리 사전

| 필드 | 키 | 설명 |
|------|-----|------|
| block_data | long blockNo | 블록 단위 월드 데이터 컨테이너 |
| player_dto | long no (위치 번호) | 플레이어 위치 조회용 |
| player_dto_id | long user_no | 플레이어 유저번호 조회용 |
| resource_dto | long no | 자원지 |
| point_dto | long no | 거점/성채 (public) |
| npc_dto | long no | NPC |
| raid_dto | long ally_no | 연맹 레이드 |

### 3. 이중 인덱싱 — 블록 사전과의 동기화

AddPlayer/DeletePlayer 등 모든 CRUD 메서드가 전역 사전과 Socket_Block_DTO.dic_*_list 두 곳을 동시에 업데이트한다.  
addBlock 파라미터로 블록 동기화 여부를 제어.

### 4. 블록 진입/이탈

- **set_block_data**: 블록 수신 시 내부 리스트(player_list 등) → 전역 사전 + 블록 사전 등록 후 MakeDictionaryData() 호출
- **leave_block_data**: 블록 이탈 시 해당 블록 소속 엔티티를 전역 사전에서 제거

---

## DTO 클래스 목록

| 클래스 | 용도 | 주요 필드 |
|--------|------|----------|
| Socket_Action_DTO | 군단 이동·전투 상태 | key, move_path_slot, sally_type, status, corps |
| Socket_Player_DTO | 플레이어 마을 정보 | user_no, ally_no, shape, shield_t |
| Socket_Resource_DTO | 자원지 | id, current_point, status |
| Socket_Point_DTO | 거점/성채 | c_type, category, duration, max_duration, rally_info |
| Socket_NPC_DTO | NPC | id, locked, terri_id |
| Socket_Block_DTO | 블록 컨테이너 | 각 DTO 리스트 + Dictionary |
| Res_Socket_Block | 서버 응답 래퍼 | blocks: List\<Socket_Block_DTO\> |

---

## 문제점 및 개선 제안

### 🔴 P1 — AddRaid/RemoveRaid LINQ First() 예외 위험

WorldSocketDataModel.cs:206, 220

```
long blockNo = block_data.First(x => x.Value.point_list
    .Count(y => y.ally_no == dto.ally_no && y.c_type == 1 && y.category == 4) > 0).Key;
```

매칭 블록이 없으면 InvalidOperationException 발생. FirstOrDefault()로 교체하고 null 방어 필요.

### 🔴 P1 — Socket_Point_DTO 프로퍼티 반복 JSON 역직렬화

WorldSocketDataModel.cs:854~856

skill, skillUpgradeInfo, addon_nos 3개 프로퍼티 모두 호출할 때마다 JsonConvert.DeserializeObject 실행.  
backing 필드에 캐싱 필요.

### 🟡 P2 — 플레이어 이중 사전 수동 동기화

player_dto(위치 키)와 player_dto_id(유저번호 키)를 수동으로 함께 관리.  
Add/Delete 중 하나라도 빠지면 사전 불일치. 래퍼 메서드로 감싸거나 단일 사전으로 통합 권장.

### 🟡 P2 — Socket_Point_DTO SRP 위반

GetStaus(), SetIconTerm() 등 UI 렌더링 메서드가 데이터 모델 클래스에 포함.  
FortWarManager, NetworkAlly, MKTerm, MKSpriteAtlasManager 등 다수 외부 시스템에 의존.  
뷰 로직 분리 권장.

### 🟡 P2 — ClearAll()에서 raid_dto 미초기화

WorldSocketDataModel.cs:75~82

```
public void ClearAll() {
    block_data.Clear();
    player_dto.Clear();
    player_dto_id.Clear();
    resource_dto.Clear();
    npc_dto.Clear();
    // raid_dto.Clear() 누락
}
```

세션 실패 후 재접속 시 이전 레이드 데이터가 잔류 가능.

### 🟡 P2 — Socket_Action_DTO GetCurrentPos() 매 호출마다 NavMesh 검사

WorldSocketDataModel.cs:505~531  
containPoint() 호출이 매 프레임 실행 가능. 결과 캐싱 또는 호출 빈도 제한 필요.

### 🟢 P3 — MakeDictionaryData 전체 재빌드

set_block_data 호출 시마다 리스트 → 사전 전체 재빌드. 블록 크기에 비례한 O(n) 비용 발생.

### 🟢 P3 — GetStaus 메서드명 오타

GetStaus → GetStatus로 수정 권장 (내부 참조 다수).

---

## 데이터 의존성

```
MKSocket.res_block()
  └→ WorldSocketDataModel.set_block_data()
        ├→ AddPlayer()   → player_dto, player_dto_id, block.dic_player_list
        ├→ AddResource() → resource_dto, block.dic_resource_list
        ├→ AddPoint()    → point_dto, block.dic_point_list
        ├→ AddNpc()      → npc_dto, block.dic_npc_list
        └→ AddRaid()     → raid_dto, block.dic_ally_raid_list
```

**읽는 곳**: WorldManager, TroopLOD, ArmadaManager, FortWarManager 등 월드맵 오브젝트 전반

---

## 성능/메모리 영향

- Dictionary 교체(Remove → Add 패턴)로 메모리 재할당 최소화 — 적절한 방식
- raid_dto Clear 누락으로 세션 간 데이터 잔류 가능
- 블록당 엔티티 수 × 블록 수만큼 Dictionary 항목 보유 — 메모리 상한은 MKSocket.maxBlockCount(40)이 제어
- Socket_Point_DTO.skill 등 3개 프로퍼티의 반복 역직렬화가 잦은 UI 갱신 시 GC 부담 야기
