---
tags:
  - system/ui
  - concern/performance
  - concern/readability
  - status/done
aliases:
  - 연맹 집결 목록 팝업 분석
description: Ally_war_rally.cs — 공격 집결+방어 지원 통합 목록 팝업, InfiniteScroll·DOTween 관리
created: 2026-05-21
updated: 2026-05-21
---

# Ally_war_rally 분석

## 요약

### 무슨 문제였나?
연맹원이 여러 집결(공격/방어)을 한 화면에서 확인하고 참가·퇴각·해산을 처리할 때, 탭 전환마다 타이머 DOTween이 누적되어 화면이 느려지거나 잘못된 슬롯에 타이머가 붙는 버그가 존재했다.

### 어떻게 고쳤나?

| 해결책 | 내용 |
|--------|------|
| WarCallbackManager | VisualElement에 콜백을 등록할 때 기존 콜백 먼저 해제 |
| InfiniteScrollManager | 실제로 보이는 아이템만 재활용, ReplaceAllDataKeepingVisualElements로 탭 전환 최적화 |
| dotweens Dictionary | 슬롯 Key(atk_{idx}, def_{idx})로 DOTween 추적, OnUpdateItem 진입 시 이전 것 Kill |

### 현재 상태는?
기능 동작 중. Update_AttackItemOne과 Refresh_AttackItemOne 중복 코드, war_type=5 NPC 처리 시 slot 데이터 직접 변조 등 리팩토링 여지가 남아 있다.

> **한 줄 요약**: "공격 집결+방어 지원을 탭으로 통합하고 무한 스크롤·DOTween Key 관리로 성능을 개선했지만, 중복 UI 코드가 잔존한다."

---

## 파일 정보

- **파일**: `Assets/UI/Clan/Ally_war_rally.cs`
- **클래스**: `Ally_war_rally : MonoBehaviour` (2420줄)
- **연관**: [[AllyWarRallyDetail_Analysis]], [[AllyReinforcement_Analysis]], [[WarCallbackManager_Analysis]], [[InfiniteScrollManager_Analysis]]

---

## 주요 책임

| 책임 | 구현 |
|------|------|
| 탭 전환 (전체/공격/방어) | ShowContent(Tab_Type), Tab 내부 클래스 |
| 무한 스크롤 렌더링 | MKCommon.InfiniteScrollManager<RallyDataWrapper> |
| 공격 집결 아이템 | Update_AttackItemOne, Refresh_AttackItemOne |
| 방어 지원 아이템 | Update_DefenseItemOne |
| DOTween 타이머 | dotweens: Dictionary<string, TweenerCore<float,float,FloatOptions>> |
| 이벤트 콜백 관리 | static WarCallbackManager warCallbackManager |

---

## 핵심 구성 요소

### RallyDataWrapper
공격(ally_warSlot)과 방어(ally_war_targetSlot)를 단일 타입으로 래핑.
Key = `atk_{ally_war_idx}` 또는 `def_{ally_war_idx}`로 DOTween 구분.

```csharp
class RallyDataWrapper {
    Tab.Tab_Type type;             // ATTACK or DEFENSE
    ally_warSlot warSlot;          // 공격 집결 데이터
    ally_war_targetSlot defenseSlot; // 방어 지원 데이터
    string Key;                    // DOTween 키
    long EndTime();                // 정렬·타이머 기준 시간
}
```

### WarCallbackManager (static)
스크롤 내 콜백(clickCustomDic)과 탭 콜백(tabClickCustomDic)을 분리 관리.
- 스크롤 콜백: 탭 전환 시 UnregisterScroll() 호출
- 탭 콜백: OnDisable에서 UnregisterAll() 호출

### war_type 매핑 (공격·방어 공통)

| war_type | 대상 | data_1 | data_2 | data_3 |
|----------|------|--------|--------|--------|
| 1 | 유저 마을 | user_no | profile_id | skin_id |
| 2 | 연맹 오브젝트 | id | c_type | category |
| 3 | 거점 | id | c_type | category |
| 4 | 거점 애드온 | addon_group_id | type | category |
| 5 | NPC | npc_id | - | - |
| 6 | 레이드 (공격 전용) | raid_npc_id | 소환진 위치 | - |

### 집결 상태 (war_rally_status)

| 상태값 | 의미 | 프로그레스바 CSS |
|--------|------|-----------------|
| 1 | 모집 중 | progressbar__bar-bg--hard |
| 2 | 행군 대기 | progressbar__bar-bg--hard |
| 3 | 행군 중 | progressbar__bar-bg--waiting |
| 4 | 전투 중 | progressbar__bar-bg--battle |

---

## 버튼 노출 로직 (공격 집결)

```
isLeader = (slot.war_user_no == 내 user_no)
isJoined = war_memberSlotList에 내 user_no 포함 여부

btn-join:           !isJoined && status==1 (모집 중)
btn-retreat:        isJoined && !isLeader && status != 3
dissolution-button: isLeader (status별 다른 콜백 등록)
```

### 해산 버튼 콜백 분기

| status | 호출 메서드 | 내용 |
|--------|------------|------|
| 1, 2 | OnBtnAttackDissolutionClick2 | 집결 취소 확인 팝업 |
| 3 | OnBtnAttackDissolutionClick3 | 행군 중 취소 팝업 |
| 4 | OnBtnAttackDissolutionClick4 | 전투 중 취소 (패널티 경고) |

---

## 집결 참가 흐름

```
참가 버튼 클릭
  → 집결소(COOPERATION_ALTAR) 레벨 확인
  → MyRallyCount vs rally_add_legion 비교
  → 레이드(war_type=6): 쿨타임 확인
  → 전투 종류에 따라 PvP 경고 팝업 여부 결정
  → 부대 슬롯 여부에 따라 ShowTroopSend / ShowTroopMain 호출
  → WORLD/FORTWAR 씬 아니면 WorldManager.reservedAttackTroopSend = true
```

---

## DOTween 관리 상세

OnUpdateItem (InfiniteScroll 콜백)에서:
1. dotweens[data.Key] 존재 시 Kill 후 삭제
2. 이전 아이템의 panel name에 해당하는 Key도 Kill (아이템 재사용 시 잔존 방지)
3. 새 DOTween 생성 후 Key로 등록

OnDisable에서 전체 정리:
```csharp
scrollManager?.Dispose();
dotweens.ToList().ForEach(x => x.Value.Kill());
updatetween.Kill();
warCallbackManager.UnregisterAll();
tabs.Clear();
```

---

## 데이터 의존성

| 출처 | 사용 데이터 |
|------|------------|
| NetworkAlly | ally_warSlotList, ally_defenseSlotList, ally_sortedSlotList, war_memberSlotList |
| NetworkTroop | networkMarchLines, other_user_lines |
| AllyManager | warType, data_1~3, targetAlly, reinforcePointDTO |
| MKUserDataModel | building (집결소 레벨), nation (ally_no, planet_no) |
| MKGameDataModel | rallyPointLevel, townhallLevel, worldObjectPoint, fwWorldObjectPoint |

---

## 문제점 및 개선 제안

| 문제 | 설명 | 심각도 |
|------|------|--------|
| 코드 중복 | Update_AttackItemOne과 Refresh_AttackItemOne이 ~95% 동일 코드 | 중 |
| slot 데이터 직접 변조 | war_type=5 NPC 처리 시 slot.war_type = 3 부작용 | 중 |
| 방어 지원 총병력 숨김 | war_total_squad.text = "" 임시 처리 (기획 컨펌됨, 2024.03.22) | 낮음 |
| Update() 디버그 코드 | DotweenCount, DotweenKeys [SerializeField] 잔존 | 낮음 |
