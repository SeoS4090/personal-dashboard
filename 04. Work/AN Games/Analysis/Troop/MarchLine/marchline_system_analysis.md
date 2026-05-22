---
tags:
  - system/troop
  - system/ui
  - system/network
  - concern/readability
  - concern/performance
  - status/done
aliases:
  - MarchLine 시스템 분석
description: 이 문서는 Unity 6 프로젝트의 군단(행군) 시스템에 대한 상세 분석 내용을 정리한 것입니다. `MarchLine`, `Corps`, `Div` 클래스와 관련 UI, 네트워크, 시각화 시스템을 포함합니다.
created: 2026-05-20
updated: 2026-05-21
---

← [[MarchLine_MOC]]


# MarchLine 시스템 분석 및 학습 내용

## 요약

### 무슨 문제였나?
기존 문서가 실제 코드(NetworkTroop.cs)와 여러 지점에서 불일치했다. 26.04 빌드 이후 추가된 RAID 집결 타입(레이드 집결 난입/참여)이 문서에 없었고, 채집 계산 방식이 구형 `per_amount` 필드 기준으로만 기록되어 있었다. 집결 중인 군단의 위치 표시·아이콘 분기 로직도 누락 상태였다.

### 어떻게 고쳤나?

| 항목 | 이전 | 이후 |
|------|------|------|
| MARCH_SALLY_TYPE | 집결 타입 일부 누락 | RAID 집결·난입·복귀(=100) 타입 포함 |
| Troop_Resources | `per_amount`만 | `mining_power` 신규 필드 우선 사용 |
| isRallyJoin() | PVP/NPC 집결만 | RAID_RALLY, RALLY_JOIN_RAID 타입 추가 |
| isJoin() | PVP/NPC 참여만 | RALLY_JOIN_RAID 타입 추가 |
| CalcCurrentMining() | per_amount 기반 | mining_power 우선, 없으면 per_amount 폴백 |
| GetCurrentPos() | 경로 기반 위치만 | 집결 대기(war_rally_status<3) 시 town_no 반환 |
| GetStatusIconName() | 집결 아이콘 없음 | war_status==3→이동, ==4→전투 아이콘 분기 |

### 현재 상태는?
문서 업데이트 완료. NetworkTroop.cs 코드와 문서 동기화됨.

> **한 줄 요약**: "26.04 빌드 이후 추가된 RAID 집결 타입 및 신규 채집 필드(mining_power)를 문서에 반영하고, 집결 위치·아이콘 분기 로직을 보강했다."

---

## 개요

이 문서는 Unity 6 프로젝트의 군단(행군) 시스템에 대한 상세 분석 내용을 정리한 것입니다. `MarchLine`, `Corps`, `Div` 클래스와 관련 UI, 네트워크, 시각화 시스템을 포함합니다.

---

## 1. 핵심 클래스 분석

### 1.1 MarchLine 클래스

**위치**: `Assets/Network/Scripts/NetworkTroop.cs:1236`

**목적**: 게임 내 군단(행군)의 상태, 경로, 목적지, 전투 정보를 관리하는 핵심 데이터 클래스

**주요 특징**:
- `[System.Serializable]` - 네트워크 통신 및 저장에 사용
- 다양한 상태 관리 (이동, 전투, 채집, 복귀 등)
- 경로 계산 및 실시간 위치 추적
- 집결(Rally) 시스템 지원
- 자원 채집 기능

#### 주요 속성

**기본 정보**:
- `fleet_slot_id`: 슬롯 번호
- `status`: 군단 상태 (1:대기, 2:이동, 3:귀환, 4:자원채집, 5:전투 등)
- `sally_type`: 출격 목적 타입 (`MARCH_SALLY_TYPE` enum)
- `end_time`: 도착/종료 예정 시각
- `start_time`: 출발/시작 시각

**군단 구성**:
- `corps`: `List<Corps>` - 영웅 및 병력 정보 리스트
- `hero_slot_id`: 히어로 슬롯 ID

**이동 관련**:
- `source_no`: 출발 좌표
- `target_no`: 도착 좌표
- `origin_no`: 중간에 끊겼을 때 재이동할 위치
- `speed`: 행군 속도 버프
- `move_path_slot`: `List<PATH>` - 이동 경로
- `return_path_org_slot`: `List<PATH>` - 복귀 경로 (원래)
- `return_path_dft_slot`: `List<PATH>` - 복귀 경로 (기본)

**타겟 정보**:
- `target_id`: 타겟 ID
- `target_type`: 타겟 타입 (1:유저, 2:자원지, 3:NPC, 4:거점 등)
- `target_key`: 블록 오브젝트 키

**전투 관련**:
- `ci_id`: 전투 번호
- `combat_rating`: 총 전투력
- `fleet_size`: 함대 전체 규모

#### 주요 메서드

**상태 확인**:
- `IS_RETURN`: 복귀 중 여부
- `IS_RETREAT`: 퇴각 상태 여부
- `IS_ANNIHILATION`: 전멸 여부
- `Get_Client_Status()`: 클라이언트 표시용 상태 반환
- `GetStatusIconName()`: 월드맵 아이콘 이름 반환. STOP/STAY 상태에서 `isRallyJoin()==true`이면 `war_rally_status`에 따라 분기 (3→`wi_troop_move`, 4→`wi_troop_battle`, 나머지→`wi_troop_rally`)

**위치 관련**:
- `GetCurrentPos()`: 현재 위치 좌표 반환. `isRallyJoin()==true`이고 내 연맹 집결(`ally_no` 일치)이며 `war_rally_status < 3`(대기 중)이면 경로 계산 없이 `rally.town_no` 반환
- `GetCurrentDetailPos()`: 현재 상세 위치 반환 (Unity Vector3)
- `RemainDistance()`: 남은 거리 계산

**집결 관련**:
- `isRallyJoin()`: 집결 참여 여부 확인. PVP/NPC 집결 외 **`FLEET_SALLY_RAID_RALLY(18)`**, **`FLEET_SALLY_RALLY_JOIN_RAID(19)`** 타입도 true 반환 (L1468-1481)
- `isRallyLeader()`: 집결 리더 여부 확인
- `isJoin()`: 집결 참여자 여부 확인. PVP/NPC 참여 외 **`FLEET_SALLY_RALLY_JOIN_RAID(19)`** 타입도 true 반환 (L1496-1507)
- `GetWarSlot()`: 집결 참여 시 연맹 전투 슬롯 정보 반환

**자원 채집**:
- `GetCurrentTotalMining()`: 현재 총 채집량 반환
- `CalcCurrentMining()`: 현재 채집 중인 자원량 계산. **`mining_power > 0`이면 `elapsed_time * mining_power / 36000000` 사용, 아니면 구형 `per_amount` 폴백** (L1519-1546)

**초기화 및 설정**:
- `Init()`: 경로 초기화
- `SetMoveTime()`: 이동 시간 설정
- `UpdateAttacker()`: 공격하는 군단의 이동 경로 업데이트

#### 내부 클래스

**PATH 클래스** (1238-1255줄):
```csharp
[Serializable]
public class PATH
{
    public double px, py;        // 좌표
    public double t_id;          // 영토 ID
    public double move_time;      // 도착 예정 시간
    public double move_sec;       // 이동 소요 시간(초)
    
    public Vector3 toVector3()    // Unity Vector3로 변환
    public Vector2 toVector2()    // Unity Vector2로 변환
}
```

**BlockPath 클래스** (1256-1260줄):
```csharp
[Serializable]
public class BlockPath
{
    public long block_no;  // 블록 번호
}
```

**MARCH_SALLY_TYPE 열거형** (L1340-1370):
- 일반 이동/전투: `FLEET_SALLY_NONE(0)`, `FLEET_SALLY_PVP(1)`, `FLEET_SALLY_RESOURCE(2)`, `FLEET_SALLY_NPC(3)` 등
- 집결 관련:
  - `FLEET_SALLY_RALLY_JOIN_NPC(15)` — NPC 집결 참여
  - `FLEET_SALLY_RALLY_JOIN_PVP(16)` — PVP 집결 참여
  - `FLEET_SALLY_ADD_RALLY(17)` — 집결 전투 난입 (**26.04 추가**)
  - `FLEET_SALLY_RAID_RALLY(18)` — 레이드 집결 이동 (**26.04 추가**)
  - `FLEET_SALLY_RALLY_JOIN_RAID(19)` — 레이드 집결 참여 (**26.04 추가**)
- 복귀 타입: `FLEET_SALLY_MOVE_RETURN`, `FLEET_SALLY_FAIL_RETURN`, `FLEET_SALLY_MOVE_INTERVER_RETURN(100)` — 목적지 찍고 복귀 (**26.04 추가**)

---

### 1.2 Corps 클래스

**위치**: `Assets/Network/Scripts/NetworkTroop.cs:1206`

**목적**: 군단 내 한 부대(영웅 + 병력) 정보를 담는 데이터 클래스

**주요 필드**:

**영웅 정보**:
- `hero_id`: 영웅 고유 ID
- `leader`: 리더 여부 (1: 리더, 0: 일반)
- `level`: 영웅 레벨
- `grade`: 영웅 등급/별
- `classID`: 영웅 클래스 ID

**계산 속성**:
- `t`: 영웅의 유닛 클래스(병종) 반환
  ```csharp
  public long t { get { return MKGameDataModel.instance.heroList.GetData(hero_id).unit_class; } }
  ```

**병력 정보**:
- `div`: `List<Div>` - 이 부대가 지휘하는 병력 리스트

**컴패니언(동료) 정보**:
- `comp_fleet_code`: 컴패니언 행군열 코드
- `comp_level`: 컴패니언 레벨
- `comp_rank`: 컴패니언 랭크

**사용 예시**:
```csharp
// 총 병력 수 계산
long troopCount = data.corps.Sum(x => x.div.Sum(y => y.num));

// 전투력 계산
var UnitPowerQuery = from MarchUnits in data.corps.SelectMany(x => x.div)
                     join UnitDTO in MKGameDataModel.instance.unitList.data 
                     on MarchUnits.id equals UnitDTO.id
                     select MarchUnits.num * UnitDTO.power;
```

---

### 1.3 Div 클래스

**위치**: `NetworkTroop.cs:1223`

**목적**: 병력 단위 정보를 담는 클래스

**주요 필드**:
- `id`: 병사 유닛 ID
- `num`: 현재 생존 병력 수
- `j`: 경상 병력 수
- `d`: 사망 병력 수
- `w`: 중상 병력 수
- `i`: 초기 병력 수 (전투 전)

**병력 상태 관계**:
```
초기 병력 (i) = 현재 생존 (num) + 경상 (j) + 중상 (w) + 사망 (d)
```

---

### 1.4 Troop_Resources 클래스

**위치**: `Assets/Network/Scripts/NetworkTroop.cs:1261`

**목적**: 군단이 채집 중인 자원지의 정보 및 채집 속도를 담는 데이터 클래스

**주요 필드**:
- `resource_no`: 자원지 고유 번호
- `resource_type`: 자원 종류 (나무/식량/철/금 등)
- `mining_power`: **채집 속도 (26.04 빌드 이후 신규 필드)**. `CalcCurrentMining()` 에서 우선 사용
- ~~`per_amount`~~: 구형 채집 속도 필드. **[Obsolete]** — "구형 : 26.04 빌드 이 후 업데이트 => mining_power 사용"

**채집 계산 로직** (`CalcCurrentMining()` L1519-1546):
```csharp
if (lastResource.mining_power > 0)
    return (long)elapsed_time * lastResource.mining_power / 36000000; // 신형
else
    return (long)elapsed_time * lastResource.per_amount;              // 구형 폴백
```

---

## 2. UI 시스템 분석

### 2.1 CreateMarchLineItem 함수

**위치**: `Assets/UI/Troop/Troop_Management.cs:139`

**목적**: `MarchLine` 데이터를 받아 UI Toolkit의 `VisualElement` 아이템을 생성하고 구성

**주요 기능**:

1. **UI 패널 초기화**:
   - `itemOne` 템플릿을 복제해 패널 생성
   - 버튼 패널 참조 저장

2. **전투력 계산**:
   - 히어로 전투력: `data.corps`의 히어로 ID로 보유 히어로 조인 후 전투력 합산
   - 유닛 전투력: 각 `Corps`의 `div`를 평탄화한 뒤 유닛 ID로 조인, `(수량 × 유닛 전투력)` 합산
   - 총 전투력 = 히어로 전투력 + 유닛 전투력

3. **히어로 아이콘 설정**:
   - 패널의 히어로 아이콘 슬롯을 찾아 순회
   - `SetHeroIcon`으로 각 슬롯 설정 (없으면 null)
   - 클릭 시 툴팁 표시
   - 컴패니언 아이콘 표시 (리더의 `comp_fleet_code`가 있으면)

4. **병력 수 표시**:
   - 모든 `Corps`의 모든 `Div`의 `num` 합계로 총 병력 수 계산 및 표시

5. **목표 패널 설정** (복잡한 분기):
   - 전투 중 상태: 공격자 프로필 표시
   - 유저/유저 도시 타겟: 자신/타겟 유저 프로필 표시
   - 복귀 중: 자신 프로필과 "내 마을" 텍스트 표시
   - 기타 타겟 타입: `NONE`, `RESOURCE`, `NPC`, `TOWER`, `USER_CITY`, `TARGET_TYPE_RAID` 등

6. **정보 패널 및 상태 관리**:
   - 상태별로 진행바와 타이머를 설정
   - `BATTLE`: 진행바 100%, "전투 중" 텍스트
   - `GATHER`: 남은 시간 계산 및 표시, 진행바 업데이트
   - `FLEET_STATUS_RALLY`: 집결 종료 시간까지 타이머 및 진행바 업데이트
   - `RETREAT`: 퇴각 완료까지 타이머 및 진행바 업데이트
   - `MOVE`: 이동 완료까지 타이머 및 진행바 업데이트
   - `RETURN`: 복귀 완료까지 타이머 및 진행바 업데이트

7. **제어 불가 메시지 설정**:
   - 점령 중: "주둔 중" 메시지
   - 전멸: "전멸" 메시지
   - 퇴각 쿨타임: 남은 시간 표시
   - 항복 쿨타임: 항복 쿨타임 표시
   - 멈춤: "멈춤" 메시지

8. **버튼 이벤트 등록**:
   - 복귀 버튼: `Troop_Manager.instance.StartMove()` 호출
   - 퇴각 버튼: 복귀와 동일한 동작
   - 해산 버튼: 복귀와 동일한 동작

**주요 특징**:
- DOTween 사용: 타이머와 진행바 업데이트에 DOTween 사용, `dotweens` 리스트에 저장해 관리
- 비동기 데이터 로딩: 유저 프로필이 없으면 `Request_UserTargetData`로 요청 후 콜백에서 업데이트
- 상태 기반 UI: `Get_Client_Status()`로 상태를 분기해 UI 구성
- 이벤트 전파 제어: `ev.StopImmediatePropagation()`로 이벤트 버블링 방지

**잠재적 개선 사항**:
1. 함수 길이: 500줄 이상으로 리팩토링 고려 (상태별 메서드 분리)
2. 중복 코드: 버튼 이벤트 핸들러가 유사
3. 매직 넘버: `2` (통신 시간 보정) 상수화
4. null 체크: 일부 경로에서 null 체크 부족 가능

---

## 3. 연관 클래스 시스템

### 3.1 관리/매니저 클래스

#### NetworkTroop 클래스
**위치**: `NetworkTroop.cs:9`
**역할**: 군단 네트워크 통신 및 데이터 관리
**주요 속성**:
- `public List<MarchLine> networkMarchLines` - 내 군단 리스트
- `public Dictionary<long, List<MarchLine>> other_user_lines` - 다른 유저 군단
- `public List<ScoutSlot> scoutLines` - 정찰 리스트

#### Troop_Manager 클래스
**위치**: `Troop_Manager.cs`
**역할**: 군단 이동/전투/채집 로직 처리
**주요 메서드**:
- `StartMove()`: 행군 시작
- `MakePath()`: 경로 생성
- `MarchTypeToSallyType()`: 타입 변환

#### WorldManager 클래스
**위치**: `WorldManager.cs`
**역할**: 월드 맵에서 군단 표시 및 상호작용
**주요 속성**:
- `Dictionary<string, TroopLOD> objTroopDict` - MarchLine.key -> TroopLOD
- `MarchLine mySelectedTroop` - 선택된 군단

#### TroopLOD 클래스
**위치**: `TroopLOD.cs`
**역할**: 월드에서 군단 3D 오브젝트 관리
**주요 속성**:
- `MarchLine data` - 연결된 MarchLine 데이터
- `Socket_Action_DTO actionDTOData` - 전투 액션 데이터

### 3.2 UI 관련 클래스

#### Troop_Management 클래스
**위치**: `Troop_Management.cs`
**역할**: 군단 관리 UI
**주요 메서드**: `CreateMarchLineItem()`, `refresh()`

#### Troop_Send 클래스
**위치**: `Troop_Send.cs`
**역할**: 군단 출격 UI
**사용**: 새 `MarchLine` 생성 및 전송

#### TroopFomation 클래스
**위치**: `TroopFomation.cs`
**역할**: 군단 편성(영웅/병력 배치) UI
**사용**: `MarchLine.corps` 편성

### 3.3 집결(Rally) 관련 클래스

#### ally_warSlot 클래스
**위치**: `AllyManager.cs:1680`
**역할**: 연맹 집결 슬롯 정보
**주요 필드**:
- `ally_war_idx`: 집결 고유 번호 (MarchLine.rally_id와 연결)
- `war_rally_status`: 상태 (1:집결, 2:대기, 3:행군, 4:전투)
- `war_rally_s_time`, `war_rally_e_time`: 시간 정보

#### ally_war_memberSlot 클래스
**위치**: `AllyManager.cs:1866`
**역할**: 집결에 참여한 유저 정보

#### NetworkAlly 클래스
**위치**: `NetworkAlly.cs`
**역할**: 연맹 집결 네트워크 통신

### 3.4 정찰(Scout) 관련 클래스

#### ScoutSlot 클래스
**위치**: `NetworkTroop.cs:2479`
**역할**: 정찰병 이동 정보
**차이점**: `MarchLine`은 전투/채집, `ScoutSlot`은 정찰 전용

#### ScoutLOD 클래스
**위치**: `ScoutLOD.cs`
**역할**: 정찰병 3D 오브젝트 관리

### 3.5 유틸리티 클래스

#### MKCommon 클래스
**위치**: `MKCommon.cs`
**역할**: `MarchLine` 관련 유틸리티 함수 제공
**주요 메서드**:
- `MakeSourceNum()`: 좌표 변환
- `MakePos()`: 위치 변환
- `WarpPos()`: 위치 이동

#### MKNavMeshManager 클래스
**위치**: `MKNavMeshManager.cs`
**역할**: 네비메시 기반 경로 계산
**사용**: `MarchLine.Init()`에서 경로 생성

#### MKGameDataModel 클래스
**위치**: `MKGameDataModel.cs`
**역할**: 영웅/유닛/자원지 등 데이터 제공
**사용**: `MarchLine`에서 영웅/유닛 데이터 조회

---

## 4. 클래스 관계도

```
MarchLine (핵심 데이터)
├── 내부 클래스
│   ├── PATH (경로 지점)
│   ├── BlockPath (블록 경로)
│   └── MARCH_SALLY_TYPE (출격 타입)
│
├── 포함 데이터
│   ├── List<Corps> (부대 리스트)
│   │   └── List<Div> (병력 리스트)
│   └── List<Troop_Resources> (자원 정보)
│
├── 관리 클래스
│   ├── NetworkTroop (네트워크/데이터 관리)
│   ├── Troop_Manager (이동/전투 로직)
│   └── WorldManager (월드 표시 관리)
│
├── 시각화 클래스
│   └── TroopLOD (3D 오브젝트)
│
├── UI 클래스
│   ├── Troop_Management (목록 UI)
│   ├── Troop_Send (출격 UI)
│   └── TroopFomation (편성 UI)
│
├── 집결 관련
│   ├── ally_warSlot (집결 정보)
│   ├── ally_war_memberSlot (참여자)
│   └── NetworkAlly (연맹 통신)
│
├── 정찰 관련
│   ├── ScoutSlot (정찰 데이터)
│   └── ScoutLOD (정찰 시각화)
│
└── 유틸리티
    ├── MKCommon (좌표 변환 등)
    ├── MKNavMeshManager (경로 찾기)
    └── MKGameDataModel (게임 데이터)
```

---

## 5. 주요 상호작용 패턴

### 5.1 생성 흐름
```
Troop_Manager.StartMove() 
  → MarchLine 생성 
  → NetworkTroop.Request_NewMarch()
  → 서버 통신
```

### 5.2 업데이트 흐름
```
서버 응답 
  → NetworkTroop 업데이트 
  → WorldManager 갱신 
  → TroopLOD 업데이트
```

### 5.3 표시 흐름
```
MarchLine 
  → TroopLOD 생성 
  → 월드 표시
```

### 5.4 집결 흐름
```
MarchLine.rally_id 
  → ally_warSlot 조회 
  → 집결 상태 동기화
```

### 5.5 UI 흐름
```
MarchLine 
  → Troop_Management.CreateMarchLineItem() 
  → UI 표시
```

---

## 6. 주요 학습 포인트

### 6.1 아키텍처 패턴
- **데이터 중심 설계**: `MarchLine`이 핵심 데이터 클래스로, 여러 시스템이 이를 참조
- **관심사 분리**: 데이터(`MarchLine`), 네트워크(`NetworkTroop`), 시각화(`TroopLOD`), UI(`Troop_Management`) 분리
- **매니저 패턴**: 각 시스템별 매니저 클래스로 책임 분리

### 6.2 Unity 6 특화 패턴
- **UI Toolkit 사용**: UGUI 대신 UI Toolkit 사용 (`VisualElement`, `UXML`)
- **LINQ 활용**: 데이터 조회 및 계산에 LINQ 적극 활용
- **DOTween 사용**: 애니메이션 및 타이머에 DOTween 사용

### 6.3 네트워크 동기화
- **Serializable 클래스**: 서버-클라이언트 동기화를 위한 직렬화
- **DTO 패턴**: `TroopsInfoDTO` 등으로 데이터 전송 구조화
- **비동기 처리**: 유저 프로필 등 비동기 데이터 로딩

### 6.4 상태 관리
- **상태 기반 UI**: `Get_Client_Status()`로 상태 분기
- **복잡한 상태 머신**: 이동, 전투, 채집, 복귀 등 다양한 상태
- **집결 시스템**: 집결 리더/참여자 구분 및 집결 상태 처리

### 6.5 성능 최적화
- **경로 보간**: 시간 기반 보간으로 현재 위치 계산
- **LOD 시스템**: `TroopLOD`로 거리 기반 렌더링 최적화
- **이벤트 전파 제어**: 불필요한 이벤트 버블링 방지

---

## 7. 개선 제안 사항

### 7.1 코드 구조
1. **함수 분리**: `CreateMarchLineItem()` (500줄 이상)을 상태별 메서드로 분리
2. **클래스 분리**: `MarchLine` 클래스 (500줄 이상)를 책임별로 분리 고려
3. **상수화**: 매직 넘버를 상수로 정의

### 7.2 안정성
1. **Null 체크**: `Corps.t` 속성 등에서 null 체크 추가
2. **예외 처리**: 네트워크 통신 및 데이터 조회 시 예외 처리 강화
3. **유효성 검사**: 생성자나 속성에서 데이터 유효성 검사 추가

### 7.3 가독성
1. **주석 추가**: 복잡한 로직에 주석 보강
2. **네이밍 개선**: `t` 같은 불명확한 속성명 개선 (`UnitClass` 등)
3. **문서화**: 주요 메서드에 XML 주석 추가

---

## 8. 참고 자료

- **파일 위치**:
  - `Assets/Network/Scripts/NetworkTroop.cs` - 핵심 데이터 클래스
  - `Assets/UI/Troop/Troop_Management.cs` - UI 관리
  - `Assets/World/Scripts/WorldManager.cs` - 월드 관리
  - `Assets/World/Scripts/TroopLOD.cs` - 시각화

- **관련 열거형**:
  - `MARCH_SALLY_TYPE` - 출격 목적 타입
  - `TROOP_STATE` (MKConstant) - 군단 상태
  - `TARGET_TYPE` (Troop_Manager) - 목표 타입

---

## 결론

`MarchLine` 시스템은 게임의 군단(행군) 기능을 구현하는 핵심 시스템입니다. 데이터 중심 설계, 관심사 분리, 상태 기반 UI 등 Unity 6 프로젝트의 모범 사례를 보여주는 구조입니다. 다만 일부 함수와 클래스의 크기가 크므로, 리팩토링을 통해 유지보수성을 향상시킬 수 있습니다.

---

## 9. 2026-03 추적 동기화 이슈 반영

- 대상 함수: `MarchLine.UpdateAttacker()`, `Troop_Manager.StartMove()`
- 이슈 요약:
  - 추적군 상태 분기에서 조기 `return`으로 전체 재계산이 중단되는 경로 존재
  - `UpdateDefenser`/`UpdateAttacker`의 동시 `Request_GetFleetData(3057)`가 overlap 병합되어 `UpdateAttacker` 콜백 누락 가능
- 반영 내용:
  - 조기 중단 분기 `continue` 전환
  - `UpdateAttacker` 조회에 `_isOverlapBlock=false` 적용으로 콜백 보장
  - `[TroopTrace]` 로그 체계 추가로 입력값, 해결값, 전송 보장 단계 추적 가능
- 관련 문서:
  - [[Troop_Manager_StartMove_UpdateAttacker_Analysis]]
  - [[TroopTrace_StartMove_UpdateAttacker_LogGuide]]


