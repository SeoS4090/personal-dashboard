---
tags:
  - analysis
  - system/ui
  - system/troop
aliases:
  - 월드 부대 액션 버튼 분석
  - WorldTroopButton 분석
description: 부대 선택 시 나타나는 13개 액션 버튼 메뉴 — 내/아군/적 × 상태별 버튼 가시성 매트릭스, 집결 리더 처리
status: done
created: 2026-05-21
updated: 2026-05-21
---

← [[UI_MOC]]

# WorldTroopButton — 월드 부대 액션 버튼 분석

## 요약

### 무슨 문제였나?
월드맵에서 부대를 클릭하면 "복귀", "퇴각", "정보 보기" 같은 버튼 메뉴가 떠야 한다. 내 부대인지, 아군 부대인지, 적군 부대인지, 또 현재 이동 중인지 전투 중인지에 따라 어떤 버튼을 보여줄지가 전부 달라서 관리가 복잡했다.

### 어떻게 고쳤나?
| 분류 | 버튼 표시 규칙 |
|------|---------------|
| 내 부대 + 전투 중 | 난입·퇴각 버튼 표시 |
| 내 부대 + 이동·복귀 | 복귀 버튼 (단, 내 마을로 돌아오는 중이면 숨김) |
| 내 부대 + 요새전 마을 | 힐·성벽·지원 버튼 + 조건부 긴급탈출 |
| 아군 부대 + 전투 중 | 난입 버튼만 표시 |
| 적군 부대 | 정보·전투·정찰 버튼 (전멸 상태면 숨김) |
| 집결 리더(내/아군) | 해산·집결추가 버튼, 참여자 데이터 요청 후 버튼 결정 |

### 현재 상태는?
- ✅ 14개 버튼 × 상태 조합 정상 분기
- ✅ 집결 참여자 데이터 비동기 요청 후 콜백으로 버튼 갱신
- ⚠️ 긴급탈출 버튼([13]) 조건 로직 — troopPanel null 체크 필요

> **한 줄 요약**: "내/아군/적 × 이동/전투/집결 상태 조합으로 13개 버튼의 표시 여부를 결정하는 월드맵 부대 액션 메뉴다."

---

## 파일 개요

| 항목 | 내용 |
|------|------|
| 파일 | `Assets/World/Scripts/WorldTroopButton.cs` |
| 줄 수 | 293줄 |
| 주요 역할 | 부대 선택 시 액션 버튼 메뉴 표시/숨김 제어 |

---

## 버튼 배열 인덱스

```
[0]  station       — 주둔
[1]  Combat view   — 전투 뷰 (isDevBuild 시만)
[2]  inrush        — 난입
[3]  return        — 복귀
[4]  fallback      — 퇴각
[5]  info          — 정보 (전쟁팝업)
[6]  battle        — 전투
[7]  scout         — 정찰
[8]  집결추가       — 주유
[9]  해산           — 집결취소
[10] FortWar heal  — 요새전 마을 힐
[11] FortWar wall  — 요새전 마을 성벽
[12] FortWar support — 요새전 마을 지원
[13] emergency escape — 긴급 탈출
```

---

## Troop_Status enum

```csharp
public enum Troop_Status
{
    NEUTRAL, MOVE, BATTLE, FALLBACK, STATION, SCOUT,
    FORTWAR_VILLAGE,  // 요새전 내 마을 선택 시
    DEFAULT
}
```

---

## SetTroopStatus() — 버튼 가시성 매트릭스

### 분기 구조

```
SetTroopStatus(status, user_no)
├── action.isRallyLeader() → SetMyAllyRallyStatus (집결장 처리)
├── user_no == login.user_no  → 내 부대 switch(status)
├── IS_MyAllyUser(user_no)    → 아군 처리
└── else                      → 적군 처리
```

### 내 부대 — 상태별 버튼

| Troop_Status | 표시 버튼 |
|-------------|-----------|
| BATTLE | [1](devBuild), [2]난입, [4]퇴각 |
| FALLBACK / NEUTRAL / MOVE | [3]복귀 (단, target=내마을 + end_time>현재 시간이면 숨김) |
| STATION | [3]복귀 |
| SCOUT | [3]복귀 |
| FORTWAR_VILLAGE | [10]힐, [11]성벽, [12]지원 + 조건부 [13]긴급탈출 |
| DEFAULT | [3][4][5][6] + 서버간요새전이면 [5] 숨김 |

**긴급탈출 조건** (`[13]`):
```csharp
var count = warAlertList.Where(x => x.t_type == 2).Count();
if (count > 0 && troopPanel != null && EMERGENCY_REMAIN_CNT > 0)
    buttonList[13].SetActive(true);
```

### 아군 부대

전투 중([2] 난입) 외 모든 전투 관련 버튼 숨김. [5] 정보 버튼 표시 (서버간요새전 제외).

### 적군 부대

[5] 정보, [6] 전투, [7] 정찰 버튼.  
`IS_ANNIHILATION == true` 시 [6][7] 숨김 (전멸 부대는 전투·정찰 불가).

---

## SetMyAllyRallyStatus() — 집결 리더 처리

```
우리 연맹 집결 리더:
├── war_memberSlotList에 데이터 있음 → SetMyAllyRallyStatus 즉시 호출
└── 데이터 없음 (first 호출) → Request_GetRallyMemberData 비동기 → 콜백으로 재호출

전투 중 (BATTLE):
├── 내가 집결장 → [9]해산
└── 내가 참여자 → [1]Combat view (devBuild)

집결 중 (non-BATTLE):
├── 내가 집결장 → [9]해산
└── 내가 참여자 → [3]복귀 (RAID 타입 제외)

[8]집결추가 → BATTLE 상태 && target_type != RAID 일 때 표시
[5]정보 → 항상 표시 (서버간요새전 제외)
```

---

## remain_time 표시 조건

```csharp
bool show = (user_no == login.user_no)
         && (status == MOVE)
         && (end_time > GetServerTime());
// 내 부대 + 이동 중 + 아직 도착 전일 때만 남은 시간 표시
```

---

## SetPos() — 화면 위치 동기화

```csharp
public void SetPos(Vector3 pos, float offsetX=0, float offsetY=0, TroopLOD targetTroop=null)
{
    pos.z -= 1.5f;
    transform.position = Camera.main.WorldToScreenPoint(pos);
}
```

---

## 의존성

| 의존 대상 | 역할 |
|-----------|------|
| `WorldManager` | mySelectedTroop, troopPanelsActive |
| `AllyManager` | IS_MyAllyUser 판정 |
| `NetworkAlly` | war_memberSlotList, Request_GetRallyMemberData |
| `MKUserDataModel` | nation.ally_no, fortWarDto.EMERGENCY_REMAIN_CNT |
| `MKSceneManager` | MKSCENE_FORTWAR / isCrossFortWar 판정 |
| `FortWarManager` | GetMyCity().troopPanel |

---

## 개선 여지

| 항목 | 내용 |
|------|------|
| 버튼 인덱스 하드코딩 | `buttonList[4]`, `buttonList[9]` 등 숫자 인덱스 — 인덱스 오배치 시 무음 버그 |
| SetTroopStatus 복잡도 | 200줄 단일 메서드 — 내/아군/적 × 상태 매트릭스를 테이블로 분리하면 유지보수 용이 |
