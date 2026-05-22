---
tags:
  - system/ui
  - concern/memory
  - concern/readability
  - status/done
aliases:
  - 집결 상세 팝업 분석
description: Ally_war_rally_detail.cs — 공격 집결 상세 팝업, 멤버 목록·영웅·병사 표시, 메모리 관리
created: 2026-05-21
updated: 2026-05-21
---

# Ally_war_rally_detail 분석

## 요약

### 무슨 문제였나?
집결 상세 팝업에서 멤버 목록이 갱신될 때마다 이벤트 콜백과 DOTween이 누적되어 메모리 누수와 이중 실행이 발생했다. 또한 팝업이 닫혀도 콜백이 해제되지 않아 GC 수집 불가 상태가 됐다.

### 어떻게 고쳤나?

| 해결책 | 내용 |
|--------|------|
| WarDetailCallbackManager (인스턴스) | static이 아닌 인스턴스 변수로 선언, OnEnable/OnDestroy 생명주기에 맞춰 정리 |
| DOTween 타겟 분리 | DOTween.Kill(this) - 전체 / DOTween.Kill(item) - 개별 아이템 별도 관리 |
| dissolutionCall 람다 재할당 | Refresh() 호출 시마다 null 초기화 후 status별 람다 재할당, 이전 클로저 해제 |
| ClearHeroItemList() | HeroItem.UnregisterEvents() 후 리스트 클리어 |

### 현재 상태는?
메모리 관리 개선 완료. ButtonInit()에 주석 처리된 대형 람다 코드(~100줄)가 잔존하며, 코드 정리 필요.

> **한 줄 요약**: "집결 상세 팝업은 멤버 목록 갱신마다 콜백·DOTween을 타겟별로 분리 관리해 메모리 누수를 방지하도록 리팩토링됐다."

---

## 파일 정보

- **파일**: `Assets/UI/Clan/Ally_war_rally_detail.cs`
- **클래스**: `Ally_war_rally_detail : MonoBehaviour` (1556줄)
- **연관**: [[AllyWarRally_Analysis]], [[AllyReinforcement_Analysis]], [[WarCallbackManager_Analysis]]

---

## 주요 책임

| 책임 | 구현 |
|------|------|
| 집결 상세 표시 (헤더) | Refresh(ally_warSlot) - simplePanel 구성 |
| 멤버 목록 표시 | CreateTroopItemAttack() — Item_Troop_Info_One 클론 |
| 영웅·병사 정보 | MKCommon.HeroItem, Ally_war_rally.TroopData 재사용 |
| 콜백 관리 | WarDetailCallbackManager (인스턴스) |
| 해산 로직 | dissolutionCall 람다 (status별 분기) |
| 확장 패널 상태 기억 | NetworkAlly.warMemberSlotOpened |

---

## 생명주기

```
ShowDetail(slot)
  → this.gameObject.SetActive(true)
  → OnEnable()
      → warDetailCallbackManager 초기화 또는 UnregisterAll()
      → 닫기 버튼 등록
      → Refresh(slot) 호출

OnDisable()
  → warDetailCallbackManager.UnregisterAll()
  → detail_scroll.Clear()
  → ClearHeroItemList()
  → DOTween.Kill(this)

OnDestroy()
  → warDetailCallbackManager.UnregisterAll() → null
  → dissolutionCall = null
  → DOTween.Kill(this)
```

---

## Refresh(ally_warSlot) 동작 순서

1. `DOTween.Kill(this)` — 이전 애니메이션 종료
2. `dissolutionCall = null` — 이전 람다 해제
3. simplePanel 헤더 구성 (집결장 프로필, 이름, 좌표, 상태, 프로그레스바)
4. war_rally_status별 dissolutionCall 람다 할당
5. war_type switch로 타겟 이름/아이콘 설정
6. 멤버 목록 생성 (detail_scroll.Clear → CreateTroopItemAttack 반복)
7. 병과별 총 병력수 표시

---

## dissolutionCall 분기 (집결장 전용)

| status | 처리 내용 |
|--------|----------|
| 1 (집결 중) | Request_GetRallyMemberData → 귀환 경로 계산 → Request_DissolutionRally |
| 2 (대기) | 위와 동일 |
| 3 (행군 중) | DissolutionRallyBattleProc(ally_war_idx) |
| 4 (전투 중) | isBattle_ending 체크 → DissolutionRallyBattleProc |

status 1,2의 해산 처리 흐름:
```
Request_GetRallyMemberData
  → Request_GetFleetData(user_no_list)
    → 각 멤버 MarchLine.GetCurrentPos() 계산
    → MakePath(source_no, cur_no) → march_data.Init(path)
    → Request_DissolutionRally(ally_war_idx, march_line_list)
```

---

## CreateTroopItemAttack 아이템 구조

```
Item (Item_Troop_Info_One)
├── Heros (top)
│   ├── User_Profile — 유저 프로필
│   ├── user-name — 유저 이름
│   ├── ico-leader — 집결장 표시
│   ├── Summary — 요약 영웅 아이콘 (3개)
│   └── troop-state-text — 상태 텍스트 (참가중/도착/행군/전투)
├── detail (확장 패널, 기본 숨김)
│   ├── hero-unit-1~3 — 영웅별 상세 (영웅 아이콘, 병사 목록, 동반자)
│   └── (TroopData로 병사 타입별 수량 표시)
└── 버튼들
    ├── return-button — 참가 취소 (내 것, status 1,2)
    ├── cancel-button — 추방 (집결장이 타인에게)
    ├── btn-retreat — 퇴각 (status 4, 비리더)
    └── expand-button — 확장/축소 토글
```

---

## SetUserState 상태 표시

| GetStatus() | 색상 | 텍스트 | 프로그레스바 |
|-------------|------|--------|-------------|
| 1 (집결 중) | 녹색 | war_rally_march_join | 표시 (DOTween) |
| 2 (도착) | 녹색 | war_rally_march_arrival | 숨김 |
| 3 (행군 중) | 녹색 | troops_move_ing_Info_text | 표시 (DOTween) |
| 4 (전투 중) | 빨간색 | war_rally_battle | 숨김 |

DOTween.Kill(item)으로 아이템별 타겟 관리, OnComplete → Refresh() 재갱신.

---

## warMemberSlotOpened (확장 상태 기억)

NetworkAlly.instance.warMemberSlotOpened: `Dictionary<long, Dictionary<long,long>>`
- Key: ally_war_idx / Value: (ally_war_member_idx → ally_war_member_idx)
- 확장 시: AddWarMemberSlotOpened()
- 축소 시: RemoveWarMemberSlotOpened()
- Refresh 시: IsWarMemberSlotOpend()로 이전 상태 복원

---

## 문제점 및 개선 제안

| 문제 | 설명 | 심각도 |
|------|------|--------|
| 주석 처리 람다 잔존 | ButtonInit()에 ~100줄 주석 처리된 RegisterCallback 람다 남아 있음 | 낮음 |
| OnAttackBtnJoinlClick 오타 | 메서드명에 'l' 오타 (JoinlClick) | 낮음 |
| WarDetailCallbackManager 분류 | scrollClickCustomDic vs clickCustomDic 구분이 명확하나 OnEnable에서 UnregisterAll 후 재등록 필요 | 중 |
| status=2 대기 타이머 | OrderByDescending(e_time).First()로 가장 늦게 도착하는 멤버 기준 계산 — 직관적이지 않음 | 낮음 |
