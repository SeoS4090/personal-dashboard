---
tags:
  - system/troop
  - system/ui
  - concern/readability
  - concern/bug
  - status/done
aliases:
  - TroopManager UI 진입점
description: Troop_Manager UI 진입점 3개 분석 — ShowTroopMain·ShowTroopSend·ShowScoutSend 사전검증 흐름과 Circles 순환참조 감지
created: 2026-05-21
updated: 2026-05-21
---

# Troop_Manager — UI 진입점 분석

← [[Troop_Manager_Overview_Analysis]]

## 요약

### 무슨 문제였나?

출전/정찰 팝업을 열기 전 "이동 가능한가?" 검증 로직이 `ShowTroopMain`과 `ShowTroopSend` 두 곳에 거의 동일하게 중복되어 있다. 한 쪽을 수정하면 다른 쪽도 함께 수정해야 하는데 놓치는 경우가 발생한다.

### 어떻게 구성되어 있나?

세 메서드의 역할 분리:

| 메서드 | 팝업 | 특징 |
|--------|------|------|
| `ShowTroopMain` | `TroopFormation` (전체 편성) | `isUpdated` 패턴, 동맹 경로 비동기 |
| `ShowTroopSend` | `Troop_Send` (빠른 출전) | 단순 파라미터 전달, HideMainHud |
| `ShowScoutSend` | `Troop_Send` (정찰 패널) | 6-case 스위치 검증, PVP 확인 팝업 |

### 현재 상태는?

기능 동작 중. 중복 검증 코드는 잠재적 유지보수 리스크로 남아 있음.

> **한 줄 요약**: "세 진입점 모두 '이동 가능 여부 체크 → 데이터 세팅 → 팝업 활성화' 패턴이나, 정찰(ShowScoutSend)은 타겟 종류별 6-case 추가 검증을 갖는다."

---

## ShowTroopMain — 출전 편성 팝업

```
호출자 → ShowTroopMain(marchType, target_Pos, ..., isUpdated=true)
           │
           ├─ [isUpdated=false] → Request_GetFleetData → 재귀 호출(isUpdated=true)
           │
           ├─ mySelectedTroop 클릭 해제
           │
           ├─ 요새전이면 troopButtonPanel 숨김
           │
           ├─ [집결/지원] → 관문 도달 가능 체크 (CheckCanGoByGate)
           │   └─ [기타]  → 섹터 이동 가능 체크 (CheckCanGoBySector)
           │
           ├─ 출전 가능 영웅 없음 → 토스트
           ├─ 출전 가능 병사 없음 → 토스트
           │
           ├─ MarchLine 초기화 (March_Data 세팅)
           │
           ├─ [동맹 있음 && 다른 섹터] → Request_GetPointDTO → 콜백에서 MakePath + Refresh
           ├─ [동맹 있음 && 같은 섹터] → 즉시 MakePath + Refresh
           └─ [동맹 없음] → MakePath → (Refresh는 팝업이 SetActive 후 자체 호출)
```

**핵심 패턴 — isUpdated 지연 로딩**:
- `isUpdated=false`로 호출 시 `Request_GetFleetData` 후 재귀 호출.
- 팝업 열기 전 최신 군단 데이터를 보장하는 패턴이나, 재귀 깊이는 항상 1 (무한 재귀 없음).

**JOIN_RALLY 특수 처리**:
```csharp
// 집결 참여: 이동 목적지 = 집결장 마을, 귀환 경로 시작 = 집결 타겟
var rally_path = MakePath(source_no, leader_no, ally_no);
popups.troop_main.March_Data.Init(rally_path, ..., isReturnFromRally: true);
```

---

## ShowTroopSend — 빠른 출전 팝업

ShowTroopMain과 같은 관문/섹터 체크를 수행하지만 `March_Data` 초기화 없이 `Troop_Send` 컴포넌트에 파라미터를 직접 세팅한다.

**AWQA-4510 터치블록 수정 이력**:
```csharp
// 이전: SetTouchBlock(true) → 팝업 닫힐 때 해제 누락 가능
// 현재: HideMainHud(true) → 팝업과 HUD 수명 연동
CommonDocManager.instance.mainHud.HideMainHud(true);
```

**user_nos 구성 로직**:
```csharp
// 내 user_no + target user_no + target_key 파싱 user_no 합산 → Distinct
var user_nos = new List<long>() { myNo };
if (targetType == USER) user_nos.Add(target_id);
if (target_key != "") user_nos.Add(long.Parse(target_key.Split("//").First()));
user_nos = user_nos.Distinct().ToList();
// → Request_GetFleetData(user_nos, ...) 로 모든 관련 군단 데이터 선로드
```

---

## ShowScoutSend — 정찰 팝업

정찰 불가 공통 체크 후 타겟 종류별 6-case 추가 검증.

### 공통 체크
1. 정찰병의 오두막(EXPLORERS_HALL) 존재 여부
2. 정찰 슬롯 여유 여부 (`Open_scoutQue > Have_scoutQue`)

### Case별 추가 검증

| Case | 추가 검증 |
|------|---------|
| `TYPE_TOWN` | 연맹원 여부, 마을 레벨 격차(`SCOUT_LEVEL_GAP`), 보호막, 전투중 여부 |
| `TYPE_RESOURCE_CORPS`, `TYPE_CORPS`, `TYPE_RALLY_CORPS` | 연맹원 여부, 전투중 여부 |
| `TYPE_ALLY_CENTER`, `TYPE_WORLD_POINT`, `TYPE_ATTACH_POINT` | 내 연맹 거점 여부, chronicle_id 미개방, 요새전 타임윈도우 |

**isPVP 플래그**: 타겟이 적 유저이면 `true` → 뿔피리 경고 팝업 표시 후 진행.

```csharp
if (isPVP)
    MKCommon.ShowUsePopup(..., check_key: "allow_today_pvp" + date);
else
    NetworkTroop.instance.Request_GetFleetData(...);
```

---

## Circles / CircleFuction — PVP 순환 참조 감지

**시나리오**: A가 B를 추적 중 → B가 C를 추적 → C가 A를 추적 (순환)

### 흐름

```
Circles(attacker, defenser, circleCallback, noneCallback)
  └─ StartCoroutine(CheckCircles)
       └─ CircleFuction(myKey, defenser)  ← 재귀 DFS
            ├─ sally_type != PVP → NOT_CIRCLE
            ├─ target_key == myKey → CIRCLE
            ├─ 이미 로드된 유저 → 캐시에서 nextAttacker 탐색
            └─ 미로드 유저 → Request_GetFleetData → 재귀
       │
       └─ WaitUntil(coutinState != FINDING)
            ├─ NOT_CIRCLE → NoneCirclieCallback()
            └─ CIRCLE → circlingCallback()
```

**문제점**:
- `CircleFuction` 에서 `attacker == null` 체크가 `sally_type` 체크보다 뒤에 있어 NRE 가능 (Lines 1456→1463).
- 순환 깊이 제한 없음. 연쇄가 길면 Request_GetFleetData 다중 호출.

---

## 공통 이동 가능 체크 중복 (#concern/readability)

`ShowTroopMain`과 `ShowTroopSend` 양쪽에 아래 코드가 동일하게 존재:

```csharp
// 관문 타겟이면
Socket_Point_DTO gate = WorldManager.GetGateInfoDic(target_no);
if (gate != null && !MKCommon.CheckCanGoByGate(gate)) { toast; return; }
// 일반 타겟이면
int sector = MKNavMeshManager.Instance.GetSectorIndex(target_no);
if (sector == -1) { toast; return; }
if (!MKCommon.CheckCanGoBySector(sector)) { toast; return; }
```

**제안**: `ValidateCanReachTarget(target_no, targetType)` 헬퍼로 추출.
