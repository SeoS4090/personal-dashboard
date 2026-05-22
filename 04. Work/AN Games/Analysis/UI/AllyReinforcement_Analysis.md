---
tags:
  - system/ui
  - concern/bug
  - concern/readability
  - status/done
aliases:
  - 방어 지원 팝업 분석
description: Ally_Reinforcement.cs — 방어 지원 팝업, 거점/마을 분기, 지원 취소 MarchLine 생성 흐름
created: 2026-05-21
updated: 2026-05-21
---

# Ally_Reinforcement 분석

## 요약

### 무슨 문제였나?
방어 지원 취소 시 퇴각(btn-retreat) 기능이 AWQA-4765 버그로 인해 비활성화된 상태이며, 전투 중인 방어 지원 병력을 돌려보낼 수 없는 문제가 미해결 상태다.

### 어떻게 고쳤나?
지원 취소(return-button)는 MarchLine을 직접 계산해 `Request_CancelSupport`로 귀환 경로를 전송하는 방식으로 구현됐다. 전투 중 퇴각(btn-retreat) 콜백은 현재 모두 주석 처리.

### 현재 상태는?
방어 지원 표시·취소는 정상 동작. 전투 중 퇴각 기능(AWQA-4765)은 미해결. `RequestAndRefreshAllOneSec` 코루틴이 OnDisable에서 StopAllCoroutines 미호출로 잠재적 문제 존재.

> **한 줄 요약**: "방어 지원 목록 표시와 취소는 동작하지만, 전투 중 퇴각 기능은 AWQA-4765로 비활성화 상태다."

---

## 파일 정보

- **파일**: `Assets/UI/Clan/Ally_Reinforcement.cs`
- **클래스**: `Ally_Reinforcement : MonoBehaviour` (963줄)
- **연관**: [[AllyWarRally_Analysis]], [[AllyWarRallyDetail_Analysis]]

---

## 주요 책임

| 책임 | 구현 |
|------|------|
| 방어 대상 헤더 표시 | CreateReinforceItemOne() — 거점/마을 분기 |
| 멤버 목록 표시 | CreateTroopItem() — Item_Troop_Info_One 클론 |
| DTO 초기화 | SetPointDTO() — TOWERDTO, Durability_DTO, ADDON_DTO |
| 지원 취소 | return-button → Request_GetFleetData → Request_CancelSupport |
| 데이터 갱신 | RequestAndRefreshAll() → Request_GetReInforceMemberData |

---

## reinforcePointDTO 분기 구조

```
AllyManager.reinforcePointDTO != null  →  거점 지원 모드
  category >= POINT_CATEGORY_TOWER     →  요새전 거점 (fwWorldObjectPoint)
  c_type == 0                          →  성채/관문 (worldObjectPoint)
  c_type == 1                          →  연맹 건물 (allyBuilding)
  c_type == 2                          →  거점 시설 (towerAddon)

AllyManager.reinforcePlayerDTO != null →  마을 지원 모드
  NetworkLogin.profiles[user_no] 조회  →  이름·프로필 표시
```

---

## CreateReinforceItemOne 헤더 구성

### 거점 지원 시
- `building-img` 표시 (거점 아이콘)
- `progress_bar` 표시 → ProgressBar 내구도 표시
  - `highValue` = cur_dto.MAX_DURATION
  - `value` = cur_dto.duration
  - `duration` Label: "내구도 : {%}%" 형식
- 오른쪽: 현재 거점 상태 (cur_dto.SetIconTerm)

### 마을 지원 시
- `user-box` 표시 (유저 프로필)
- `info`, `progress_bar` 숨김
- NetworkLogin.profiles에서 이름/프로필 조회 (없으면 Request_UserTargetData 요청)

---

## CreateTroopItem 아이템 구조

```
Item (Item_Troop_Info_One)
├── Heros (top)
│   ├── User_Profile — 유저 프로필
│   ├── user-name — 유저 이름
│   ├── ico-leader — 수성장 표시 (slot.leader > 0)
│   ├── troop-num-text — 총 병사 수
│   └── Summary — 요약 영웅 아이콘 (3개)
├── detail (확장 패널)
│   └── hero-unit-1~3 — 영웅별 상세 + 병사 목록
└── 버튼
    ├── return-button — 지원 취소 / 추방 (수성장)
    ├── btn-retreat — 전투 중 퇴각 (현재 비활성화)
    └── expand-button — 확장/축소 토글
```

---

## 방어 지원 취소 흐름 (return-button)

```
return-button 클릭
  → 도착 대기 중 확인 (TROOP_DEALY_TIME 범위 내면 토스트 출력)
  → 본인/수성장 여부에 따라 메시지 분기
    → popup_desc_support_cancel (본인)
    → popup_desc_support_disband (수성장)
  → 확인 클릭 시:
    → Request_GetFleetData(slot.user_no)
      → march_data.GetCurrentPos() (현재 위치 계산)
      → march_data.status == BATTLE? → Request_FleetFallback(fleet_slot_id) 후 return
      → sally_type = FLEET_SALLY_MOVE_RETURN
      → source_no = slot.town_no
      → target_no = origin_no = cur_no
      → MakePath(source_no, target_no) → Init(path) → SetMoveTime()
      → Request_CancelSupport(targetNo, ally_def_member_idx, march_data)
        → RequestAndRefreshAll()
```

---

## RequestAndRefreshAll 지원 타입 분기

```csharp
// support_type 결정
reinforcePointDTO.c_type == 0 → support_type = 3 (성채/관문)
reinforcePointDTO.c_type == 1 → support_type = 2 (연맹 건물)
reinforcePointDTO.c_type == 2 → support_type = 4 (거점 시설)
reinforcePlayerDTO != null    → support_type = 1 (마을)

→ Request_GetReInforceMemberData(targetNo, support_type, sub_info, () => ShowContent())
```

---

## 지원 참가 버튼 (btn-join) 제약 조건

```
거점(c_type==0, category==2, 관문): MakePath 경로 존재 확인
거점(category==8, 황성): IsTempleWarTime()==1이면 불가
그 외: MKNavMeshManager.GetSectorIndex → CheckCanGoBySector 확인
내 마을인 경우: btn-join 숨김 (targetNo == planet_no)
추방된 연맹원: grade <= 0이면 토스트 출력
```

---

## 상태별 UI 표시 (CreateTroopItem)

| slot.status | 상태 텍스트 | 색상 | 프로그레스바 |
|-------------|------------|------|-------------|
| 1 (참여) | war_rally_march_join | 기본색 | 숨김 |
| 2 (도착) | war_rally_march_arrival | 기본색 | 숨김 |
| 3 (전투) | war_rally_battle | 빨간색 | 숨김 |

※ status=1,3일 때 remainTime > 0이면 DOTween으로 이동 프로그레스바 표시.  
OnComplete → RequestAndRefreshAllOneSec (0.5초 대기 후 갱신)

---

## 데이터 의존성

| 출처 | 사용 데이터 |
|------|------------|
| NetworkAlly | reinforce_memberList, reinforce_maxDef |
| AllyManager | reinforcePointDTO, reinforcePlayerDTO, myAllyMemberData |
| NetworkTroop | other_user_lines, networkMarchLines |
| NetworkLogin | profiles (유저 프로필) |
| MKGameDataModel | worldObjectPoint, fwWorldObjectPoint, allyBuilding, towerAddon |
| MKUserDataModel | nation (planet_no, ally_no), building (townhall level) |

---

## 문제점 및 개선 제안

| 문제 | 설명 | 심각도 |
|------|------|--------|
| AWQA-4765 미해결 | 전투 중 방어 지원 퇴각 기능 전체 주석 처리, btn-retreat 비활성 | 높음 |
| StopAllCoroutines 미호출 | OnDisable에서 RequestAndRefreshAllOneSec 코루틴 미정리 | 중 |
| DOTween 아이템 미정리 | ShowContent → ScrollView.Clear() 시 아이템 DOTween 미Kill (progress_bar 기준만 Kill) | 중 |
| imLeader 판정 오류 가능성 | 내 마을이면 imLeader=true, 그 외 reinforce_memberList 조회 — 목록이 비어 있으면 항상 false | 낮음 |
| 반환 로직 복잡도 | Request_GetFleetData 콜백 내 분기 다수로 가독성 낮음 | 중 |
