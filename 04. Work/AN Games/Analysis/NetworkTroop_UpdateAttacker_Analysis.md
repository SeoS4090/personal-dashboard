---
tags:
  - system/troop
  - concern/readability
  - concern/performance
  - concern/bug
  - status/done
---

# MarchLine.UpdateAttacker() 심층 분석

> **파일**: `Assets/Network/Scripts/NetworkTroop.cs:2018-2435`
> **시그니처**: `public MarchLine UpdateAttacker(List<long> UserList = null, bool updatePath = true, string updatedKey = "")`

## 개요

`UpdateAttacker()`는 **방어자(자기 자신) 경로 재계산**과 **나를 추적하는 공격자들의 경로 재계산**을 동시에 수행하는 `MarchLine` 인스턴스 메서드이다. 군단 이동/PVP 추적 시스템의 핵심으로, `Troop_Manager.StartMove()`에서 호출되어 실시간 추적-교차 예약을 처리한다.

핵심 역할:
1. 내 군단의 이동 경로를 재생성
2. `tracking_slot_id_arr` 기반으로 나를 추적하는 군단들을 순회/정리
3. 유효 추적자 중 가장 빠른 공격자와 `crossPath()`로 교차 지점 계산
4. 타겟이 USER인 경우 방어자 측 추적 목록에 자신을 등록
5. 모든 분기에서 `Request_NewMarch()`가 누락되지 않도록 보장

---

## 파라미터

| 파라미터 | 타입 | 기본값 | 역할 |
|----------|------|--------|------|
| `UserList` | `List<long>` | `null` | 이미 `Request_GetFleetData`로 로드한 유저 목록. 중복 서버 조회 방지용 |
| `updatePath` | `bool` | `true` | `true`면 자기 경로를 `MakePath` → `Init` → `SetMoveTime`으로 재생성 |
| `updatedKey` | `string` | `""` | 재귀 호출 시 이미 갱신 완료된 군단 key. 무한 재귀 방지 가드 |

---

## 실행 흐름 (5단계)

### Phase 1: 자기 경로 재계산 (L2027-2044)

```
updatePath == true?
  ├─ MakePath(현재위치 → origin_no) 경로 생성
  ├─ origin_no == planet_no && path == null → fallback 경로 재시도 (isIgnoreAlly=true)
  ├─ target_no != origin_no → after_battle_path 추가 (origin → target 연결)
  └─ Init(path, user_no, planet_no).SetMoveTime()
```

- `origin_no`: 전투 예약 지점. `target_no`와 다르면 전투 후 최종 목적지까지의 잔여 경로를 뒤에 이어 붙임
- `SetMoveTime()`: `move_path_slot`의 각 노드에 이동 시간(절대값)을 계산하여 `end_time` 확정

### Phase 2: RequestMyMarchIfNeeded() 로컬 함수 (L2046-2067)

```csharp
void RequestMyMarchIfNeeded()
{
    if (requestedMyMarch) return;                    // 중복 전송 방지
    if ((집결참여/방어지원이 아님 || 본인 군단 아님) &&
         alreadyStart != myMarchLine.key)
    {
        requestedMyMarch = true;
        NetworkTroop.instance.Request_NewMarch(myMarchLine);
    }
}
```

- **목적**: 비동기 콜백 분기가 복잡하여 `Request_NewMarch(myMarchLine)` 호출이 누락되는 경로가 존재했음 → 단일 보장 함수로 추출
- **집결참여(RALLY_JOIN_NPC/PVP/RAID) 및 방어지원(DEF_JOIN)**: 본인 군단일 때는 별도 경로(`Request_JoinRally` 등)로 전송되므로 여기서 skip
- `alreadyStart`: 최초 출격 분기에서 이미 `Request_NewMarch` 호출한 경우의 가드

### Phase 3: updateTargetUser 콜백 (L2069-2187)

타겟이 **USER**(다른 유저 군단)이고 **지원(AST_ATT/AST_DEF)이 아닐 때** 실행되는 Callback 델리게이트.

```
target_type == USER && 지원 아님 && updatedKey != target_key?
  └─ other_user_lines에서 타겟 군단 데이터 조회
     └─ crossPath(target, myMarchLine) → 교차 지점 계산
        │
        ├─ [분기 A] 타겟이 복귀 직전 (IS_RETURN && end_time 임박)
        │   └─ sally_type → NONE 또는 MOVE_INTERVER_RETURN
        │      └─ alreadyStart == key → Request_NewMarch 추가 전송
        │
        ├─ [분기 B] 타겟이 먼저 도착 (target.end_time <= my.end_time)
        │   └─ sally_type → NONE 또는 MOVE_INTERVER_RETURN (동일 처리)
        │
        ├─ [분기 C] 타겟이 전투중 아님 (일반 추적 등록)
        │   ├─ 자원 채집중(GATHER) → sally_type = PVP_RC, 추적 포기
        │   ├─ 이미 추적자 목록에 존재 → skip
        │   ├─ 타겟이 나를 공격중 → 타겟 측 추적 해제
        │   └─ tracking_slot_id_arr에 (user_no, fleet_slot_id) 추가
        │      └─ 재귀: target_user_Data.UpdateAttacker(UserList, false, key)
        │
        └─ [분기 D] 타겟이 전투중 (BATTLE)
            └─ "이미 전투 중 입니다. (난입)" 로그만 출력
```

**핵심 동작**:
- `crossPath(defenser, attacker)` → 두 군단의 교차 지점을 계산하여 각각의 `origin_no`, `target_no`, `end_time`을 갱신
- 타겟의 `tracking_slot_id_arr`에 자신을 추가하여 "이 군단이 추적당하고 있다"는 상태를 기록
- **재귀 호출**: 타겟 군단도 추적자가 있으면 연쇄적으로 `UpdateAttacker`가 호출됨 → `updatedKey` 파라미터로 무한 루프 방지

### Phase 4: callback 메인 콜백 (L2190-2386)

가장 복잡한 핵심 로직. 서버에서 군단 데이터가 로드된 후 실행된다.

#### 4-1. 최초 출격 (fleet_slot_id == 0) (L2193-2230)

```
fleet_slot_id == 0?
  └─ 집결참여/방어지원 아님?
     ├─ target_type == USER → crossPath(defenser, myMarchLine)
     └─ else → Init + MakePath(현재위치 → target_no)
     └─ Request_NewMarch(myMarchLine, callback)
        └─ fleet_slot_id = 최대값으로 할당
           └─ target_type == USER && 전투중 아님 → updateTargetUser()
```

- 신규 출격 군단은 아직 서버에 `fleet_slot_id`가 없으므로 0
- `Request_NewMarch` 성공 시 서버가 부여한 slot 번호를 로컬에 반영

#### 4-2. 추적자 처리 (tracking_slot_id_arr.Count > 0) (L2234-2374)

```
tracking_slot_id_arr 순회 (i += 2, 내부 i++ 추가)
  ├─ 군단 정보 없음 → delIndex에 추가 (연결 해제)
  ├─ 전멸(IS_ANNIHILATION) → delIndex에 추가
  ├─ 전투중(BATTLE) && target_key == key → continue (이번 재계산 제외)
  ├─ 복귀 직전(IS_RETURN && end_time 임박) → continue (건너뜀)
  └─ 유효 추적자 → attackerData에 추가
```

유효 추적자가 1명 이상이면:

```
모든 attackerData에 대해 crossPath(myMarchLine, attacker)
  → (end_time, (방어자, 공격자)) 리스트 생성
  → end_time 최소값 = "가장 빨리 도착하는 공격자" 선택

선택된 fastest:
  ├─ myMarchLine = fastest.방어자 (경로 갱신됨)
  ├─ atk_data = fastest.공격자
  │
  ├─ tracking_slot_id_arr = [atk_data.user_no, atk_data.fleet_slot_id]
  │
  ├─ [추적 포기 조건]
  │   ├─ 방어자 먼저 도착 && target_type != NONE → tracking 비움
  │   └─ 서로 공격(myMarchLine.target_key == atk_data.key) → tracking 비움
  │
  ├─ updateTargetUser() 호출
  │
  ├─ atk_data 상태 결정:
  │   ├─ 방어자가 더 늦게 도착 or target_type == 0 → PVP
  │   └─ else → MOVE_INTERVER_RETURN (추적 포기/복귀)
  │
  ├─ 나머지 공격자들: sally_type = MOVE_INTERVER_RETURN (전투 예약 취소)
  │   └─ Request_NewMarch로 복귀 전송
  │
  └─ 나머지가 없고 updatedKey != atk_data.key → atk_data.UpdateAttacker (재귀)
```

유효 추적자가 없으면:

```
tracking_slot_id_arr.Clear()
집결참여/방어지원 아님 → Request_NewMarch(myMarchLine)
```

추적자가 아예 없을 때:

```
updateTargetUser() 호출
```

**마지막(L2384-2385)**: `RequestMyMarchIfNeeded()` — Fallback 보장 호출

### Phase 5: 군단 데이터 로드 (L2388-2434)

```
tracking_slot_id_arr에서 미로드 유저 수집 → temp_UserList
target_type == USER → 타겟 유저도 추가
UserList에 이미 있는 유저 제거 (중복 방지)

temp_UserList.Count > 0?
  ├─ Request_GetFleetData(temp_UserList, callback, overlap=false)
  └─ overlap=false: UpdateDefenser와 같은 프레임 충돌 시 콜백 누락 방지
else
  └─ callback() 직접 호출
```

**실행 순서**: Phase 5(데이터 로드) → Phase 4(callback) → Phase 3(updateTargetUser) 순서로 실행됨. 코드 배치는 역순이지만, Callback/Closure 패턴으로 인해 실행 흐름은 5→4→3 순이다.

---

## 핵심 데이터 구조

### MarchLine 주요 필드

| 필드 | 타입 | 역할 |
|------|------|------|
| `key` | `string` | `"{user_no}//{fleet_slot_id}"` 형태의 고유 식별자 |
| `fleet_slot_id` | `long` | 슬롯 번호 (0이면 미출격) |
| `sally_type` | `long` | 출격 목적 (MARCH_SALLY_TYPE enum) |
| `target_type` | `long` | 타겟 종류 (TARGET_TYPE enum) |
| `target_key` | `string` | 타겟 군단의 key |
| `target_id` | `long` | 타겟 유저/NPC id |
| `target_no` | `long` | 최종 도착 좌표 |
| `origin_no` | `long` | 전투 예약 좌표 (중간 목적지) |
| `source_no` | `long` | 출발 좌표 |
| `end_time` | `double` | 도착 예정 시각 (서버 microtime) |
| `start_time` | `double` | 출발 시각 |
| `tracking_slot_id_arr` | `List<long>` | 나를 추적하는 군단 목록 — `[user_no, slot_id, user_no, slot_id, ...]` 쌍 |
| `move_path_slot` | `List<PATH>` | 이동 경로 노드 배열 |
| `status` | `long` | 군단 상태 (TROOP_STATE: 대기/이동/귀환/채집/전투) |

### MARCH_SALLY_TYPE 주요 분류

| 분류 | 값 | 설명 |
|------|---|------|
| **일반 이동** | NONE(0) | 빈 공간으로 이동 |
| **PVP 공격** | PVP(1), PVP_RC(8), PVP_CITY(9) | 필드/자원지/마을 PVP |
| **PVP 난입** | PVP_AST_ATT(10), PVP_AST_DEF(11) | 진행중 전투에 난입 |
| **NPC 전투** | NPC(3) | 일반 NPC 공격 |
| **집결** | RALLY_NPC(5), RALLY_PVP(7), RAID_RALLY(18) | 집결 시작 |
| **집결 참여** | RALLY_JOIN_NPC(14), RALLY_JOIN_PVP(15), RALLY_JOIN_RAID(19) | 집결 참여 이동 |
| **방어 지원** | DEF_JOIN(16) | 연맹원 방어 지원 |
| **복귀 계열** | 95-100 | 전멸/퇴각/자원복귀/일반복귀/목적지복귀 |

### TARGET_TYPE

| 값 | 설명 |
|----|------|
| NONE(0) | 없음 (빈 땅) |
| USER(1) | 유저 군단 |
| RESOURCE(2) | 자원지 |
| NPC(3) | NPC |
| USER_CITY(5) | 유저 마을 |

---

## 호출 컨텍스트 (Troop_Manager.StartMove)

`Troop_Manager.StartMove()`의 `sally_type` 분기별 호출 패턴:

| sally_type | updatePath | 특이사항 |
|------------|-----------|----------|
| **RESOURCE** (자원 채집) | `true` (기본) | 추적군이 자원지로 따라오도록 target 전환 후 호출 (L3136) |
| **RALLY_JOIN_* / DEF_JOIN** (집결참여/방어지원) | `false` | 경로는 이미 Init으로 설정됨. 채집중이면 RESOURCE_RETURN으로 먼저 호출 (L3266) |
| **DEF_JOIN** (방어지원) | `true` (기본) | 채집중이면 Request_NewMarch 후 콜백에서 재호출 (L3406) |
| **PVP / PVP_AST_DEF / PVP_RC** | `true` (기본) | 타겟 유저 + 추적자 목록을 미리 로드 후 호출 (L3483) |
| **default / PVP_AST_ATT** | `true` (기본) | 기본 호출 (L3501) |

---

## 외부 의존성

| 함수/시스템 | 위치 | 역할 |
|------------|------|------|
| `Troop_Manager.MakePath()` | Troop_Manager.cs | NavMesh 기반 A* 경로 탐색 |
| `Troop_Manager.crossPath()` | Troop_Manager.cs:1068 | 방어자/공격자 교차 지점 및 도착 시간 계산 |
| `MarchLine.Init()` | NetworkTroop.cs | 경로 데이터로 move_path_slot 초기화 |
| `MarchLine.SetMoveTime()` | NetworkTroop.cs | 경로 노드별 절대 이동 시간 계산, end_time 확정 |
| `NetworkTroop.Request_GetFleetData()` | NetworkTroop.cs | 서버에서 유저 군단 데이터 비동기 로드 (3057) |
| `NetworkTroop.Request_NewMarch()` | NetworkTroop.cs:581 | 서버에 군단 이동 데이터 전송 (3051/3067) |
| `NetworkTroop.other_user_lines` | NetworkTroop.cs | `Dictionary<long, List<MarchLine>>` — 유저별 군단 라인 캐시 |

---

## 재귀 호출 구조

`UpdateAttacker`는 두 지점에서 재귀 호출된다:

1. **updateTargetUser 내부 (L2168)**:
   - `target_user_Data.UpdateAttacker(UserList, false, key)`
   - 내 군단의 타겟(방어자)에게 "나를 추적자로 등록"한 후, 그 방어자의 추적자 목록도 재계산
   - `updatedKey = key`로 전달하여 역방향 갱신 방지

2. **callback 내부 (L2360)**:
   - `atk_data.UpdateAttacker(UserList, false, key)`
   - 가장 빠른 공격자가 선택된 후, 나머지 공격자가 없을 때 해당 공격자의 추적 관계도 재계산
   - `updatedKey = key`로 순환 방지

**무한 재귀 방어**: `updatedKey` 파라미터와 `updateTargetUser` 내부의 `updatedKey != target_key` 조건(L2074)으로 A→B→A 순환을 차단한다.

---

## 과거 발생 이슈 및 적용된 수정

### 이슈 1: 조기 return으로 인한 재계산 중단

- **증상**: 군단 이동 시 내 군단의 3051(Request_NewMarch) 전송이 누락
- **원인**: 추적자 순회 중 `BATTLE`/`IS_RETURN` 상태의 추적자를 만나면 `return`으로 함수 전체가 중단
- **수정**: `return` → `continue`로 변경. 해당 추적자만 건너뛰고 나머지 재계산 계속 진행

### 이슈 2: overlap 병합으로 콜백 누락

- **증상**: `UpdateDefenser()`와 같은 프레임에 호출되면 `Request_GetFleetData`의 overlap 병합으로 `UpdateAttacker`의 콜백이 실행 안됨
- **수정**: `Request_GetFleetData(temp_UserList, callback, false)` — 3번째 인자를 `false`로 하여 overlap 병합을 비활성화

### 이슈 3: RequestMyMarch 누락

- **증상**: 복잡한 분기 경로에서 `Request_NewMarch(myMarchLine)` 호출이 빠지는 코드 경로 존재
- **수정**: `RequestMyMarchIfNeeded()` 로컬 함수를 추출하여 `updateTargetUser` 말미(L2186)와 `callback` 말미(L2385) 양쪽에서 보장 호출

### 이슈 5: crossPath 실패 시 서버 전송 차단 및 유저 피드백 (2026-04-15)

- **증상**: `crossPath()`가 경로를 찾지 못해도 `null` 반환 여부를 호출부에서 판별할 방법이 없어 이후 `Request_NewMarch()`가 그대로 호출됨. 유저에게 오류 안내 없음.
- **원인**:
  1. `crossPath()` 반환 타입이 `(MarchLine, MarchLine)` — 실패와 성공을 구분 불가
  2. gate fallback까지 전부 실패해도 `Debug.LogError`만 찍고 기존 marchline 반환 → 호출부는 성공으로 간주
- **수정**:
  - `crossPath()` 반환 타입 `(MarchLine, MarchLine)` → `(MarchLine, MarchLine)?` (nullable)
  - 실패 시 `return null` + 공격자가 로컬 유저인 경우 toast 표시:
    ```csharp
    if (attacker.user_no == MKHttp.instance.login.user_no)
        MKCommon.ShowToastPopup(MKTerm.Instance.GetTerm("t_popup_cannot_move_troops"));
    return null;
    ```
  - 호출부 3곳(L2082, L2209, L2299)에 null 체크 + 조기 `return` 추가 → `Request_NewMarch` 도달 차단
  - ForEach(L2296) 내 null 시 `return`으로 해당 공격자 skip
  - `corssPathData.Count == 0` 가드 추가(L2306) — 모든 공격자가 skip된 경우 `.First()` 예외 방지

| 호출부 | 조기 종료 효과 |
|--------|---------------|
| 최초 출격 (fleet_slot_id==0, L2209) | `Request_NewMarch` 호출 건너뜀 |
| 추적 경로 재계산 (L2082) | 이후 `Request_NewMarch` 호출 건너뜀 |
| 다수 공격자 ForEach (L2299) | 해당 공격자 skip, 전원 실패 시 빈 리스트 가드로 안전 |

### 이슈 4: 3057/3051 비동기 레이스 컨디션 — 방어자 origin_no 미갱신 (2026-04-14)

- **증상**: 최초 출격(fleet_slot_id==0) 공격자가 이동 중인 방어자를 공격 시, 방어자의 `origin_no`가 stale 값으로 전송되어 공격자/방어자 교차 지점 불일치(desync) 발생
- **재현 조건**: 공격자 A(15483)가 fleet_slot_id=0으로 방어자 B(12885//497)를 공격
- **원인 체인**:
  1. `updateTargetUser`(L2082)에서 2차 `crossPath` 후 `other_user_lines[15483]`에 정확한 origin=4230048 저장
  2. `target_user_Data.UpdateAttacker()` 재귀 호출 → Phase 5에서 `Request_GetFleetData(3057)` 비동기 발사
  3. 3057 응답이 3051보다 먼저 도착 → `UpdateUserTroopData`에서 `other_user_lines[15483].Clear()` 후 서버의 stale 데이터(origin=4190054)로 덮어씀
  4. 이후 `crossPath`가 stale 데이터 기반으로 실행 → 잘못된 origin=4190054를 방어자 3051에 전송
- **수정** (L2168): `target_user_Data.UpdateAttacker()` 호출 전에 `myMarchLine.user_no`를 `UserList`에 추가
  ```csharp
  if (UserList == null)
      UserList = new List<long>();
  if (!UserList.Contains(myMarchLine.user_no))
      UserList.Add(myMarchLine.user_no);
  target_user_Data.UpdateAttacker(UserList, false, key);
  ```
- **효과**: Phase 5에서 `UserList.Contains()` 체크로 이미 로컬 갱신된 유저의 서버 재조회를 차단. 불필요한 3057 요청 1회도 절약
- **상세**: [[UpdateAttacker_3057_RaceCondition_BugFix]]

---

## 문제점 및 개선 제안

### 구조적 문제

1. **tracking_slot_id_arr의 pair 구조**
   - `[user_no, slot_id, user_no, slot_id, ...]` 형태로 2개씩 쌍을 이루지만, 평탄한 `List<long>`이므로 홀수 인덱스 접근 오류 위험
   - `i++`가 for문과 body 양쪽에서 수행되어 유지보수 혼란
   - **제안**: `List<(long user_no, long slot_id)>` 또는 전용 struct로 교체

2. **Closure/Callback 중첩**
   - `updateTargetUser`(Callback), `callback`(Callback), `RequestMyMarchIfNeeded`(local function)이 클로저로 `myMarchLine`, `requestedMyMarch`, `alreadyStart` 등을 공유
   - 비동기 콜백 실행 순서에 따라 클로저 변수 상태가 예측하기 어려움
   - **제안**: 각 Phase를 명시적 메서드로 분리하고, 상태를 context 객체로 전달

3. **반복되는 조건 패턴**
   - "집결참여/방어지원 제외" 조건이 L2054-2057, L2097-2100, L2120-2123, L2197-2200, L2369-2372에서 동일하게 반복
   - **제안**: `IsRallyOrDefJoin()` 헬퍼 활용 (이미 `isRallyJoin()` 존재하지만 DEF_JOIN 미포함)

### 잠재적 위험

4. **null 참조**
   - `other_user_lines[target_user_no].Find(x => x.key == target_key)`가 null을 반환할 수 있으나, 이후 `.IS_RETURN`, `.end_time` 등에 바로 접근 (L2086-2087)
   - 현재 ContainsKey 체크만 있고 Find 결과의 null 체크가 없음

5. **재귀 깊이**
   - A가 B를 추적, B가 C를 추적, C가 D를 추적... 같은 체인에서 재귀가 깊어질 수 있음
   - `updatedKey`는 직전 1단계만 차단하므로 A→B→C→A 같은 3+단계 순환은 이론적으로 가능

---

## 성능/메모리 영향

- **네트워크**: 추적자 수만큼 `crossPath()` 호출 + 최악의 경우 모든 추적자에게 `Request_NewMarch` 전송
- **CPU**: `crossPath()` 내부에서 NavMesh 경로 탐색이 포함되므로, 추적자가 많을수록 프레임 드롭 가능
- **메모리**: `List<(double, (MarchLine, MarchLine))> corssPathData` 등 임시 할당이 있으나, 추적자 수가 실질적으로 5 이하이므로 GC 영향은 미미
- **비동기**: `Request_GetFleetData`는 HTTP 기반이므로 네트워크 지연에 따라 콜백 실행 시점이 달라짐

---

## 관련 문서

- [[Troop_Manager_StartMove_UpdateAttacker_Analysis]]
- [[TroopTrace_StartMove_UpdateAttacker_LogGuide]]
- [[marchline_system_analysis]]
- [[Troop_Manager_crossPath_Analysis]]
