---
tags:
  - moc
  - system/ui
aliases:
  - UI MOC
  - 인터페이스 MOC
description: 무한 스크롤, 팝업, 이벤트 UI, 연맹전 랠리, 부대 편성·관리 UI 분석 MOC
created: 2026-05-20
updated: 2026-05-22 (신규 1건 — SVS_Eve_Event_System 세 클래스 구조·버그 분석)

---

# UI — 인터페이스 시스템 MOC

← [[Analysis_Index]]

---

## 스크롤 / 데이터 바인딩

| 문서 | 핵심 주제 |
|------|-----------|
| [[InfiniteScrollManager_Analysis]] | 제네릭 풀링 무한 스크롤, 동적 풀 크기 조정 |
| [[MKCommon_ReplaceAllDataKeepingVisualElements_Analysis]] | 가상 스크롤 데이터 캐시 교체 로직 |
| [[WarCallbackManager_Analysis]] | UI Toolkit ClickEvent 이벤트 매니저, 메모리 누수 방지 |

---

## 팝업 / 월드 상호작용

| 문서 | 핵심 주제 | 상태 |
|------|-----------|------|
| [[WorldUseMoveCityItemPopup_CheckCanMove_RefreshAllData_Analysis]] | 도시 이동 팝업 CheckCanMove + MOVE_CASE 판정 | - |
| [[WorldSearchPopup_Analysis]] | 오브젝트 찾기 팝업 searchBlockDict 구독·NPC 소환 위치 | done |
| [[WorldTroopPanel_Function_Analysis]] | 부대 클릭 시 정보 패널 — 9그리드 POS, DOTween Fade, HP 슬라이더, 오브젝트 클릭 디스패치 | done |

---

## 연맹전 랠리

| 문서 | 핵심 주제 | 상태 |
|------|-----------|------|
| [[AllyWarRally_Analysis]] | 공격 집결+방어 지원 통합 목록 팝업 전체 분석, InfiniteScroll·DOTween Key 관리 | done |
| [[AllyWarRallyDetail_Analysis]] | 집결 상세 팝업, 멤버 목록·영웅·병사 표시, 메모리 관리 | done |
| [[AllyReinforcement_Analysis]] | 방어 지원 팝업, 거점/마을 분기, 지원 취소 MarchLine 흐름 | done |
| [[Ally_war_rally_Tab_Analysis]] | 전체/공격/방어 탭 전환 관리 | - |
| [[Ally_war_rally_dotweens]] | 랠리 슬롯 진행 바 DOTween 라이프사이클 | - |

---

## 부대 관리 팝업

| 문서 | 핵심 주제 | 상태 |
|------|-----------|------|
| [[Troop_Management_Analysis]] | 행군·정찰 슬롯 목록 팝업 전체 분석 — 모놀리식 CreateMarchLineItem, else 분기 crash 위험, 버튼 동일 콜백 | done |
| [[WorldTroopButton_Function_Analysis]] | 부대 선택 시 13개 액션 버튼 메뉴 — 내/아군/적 × 상태별 가시성 매트릭스, 집결 리더 처리 | done |

---

## 부대 파견 선택

| 문서 | 핵심 주제 | 상태 |
|------|-----------|------|
| [[Troop_Send_Analysis]] | 행군 대열 파견 패널 — TroopSendCallbackManager, 슬롯 렌더링, SetPanel 위치 계산 | done |

---

## 부대 편성

| 문서 | 핵심 주제 | 상태 |
|------|-----------|------|
| [[TroopFormation_Overview_Analysis]] | 부대 편성 전체 구조 — 자동 편성, 프리셋, 탭 애니메이션, Dead Code | done |
| [[TroopFormation_WorldTroopPanel_Overlap_Fix_Analysis]] | 부대 편성 팝업 열림 시 WorldTroopPanel 겹침 수정 (AWQA-5822) | done |
| [[TroopFormation_SelectIndex_Static_BugFix_AWQA6161]] | OnEnable ArgumentOutOfRangeException 방어 가드 (AWQA-6161) | wip |

---

## 이벤트 UI

| 문서 | 핵심 주제 | 상태 |
|------|-----------|------|
| [[EventUi_Achievement_System_Analysis]] | EventUi partial class 구조, Achievement 3종 오버로드, SVS_Event_Eve 상속 | done |
| [[SVS_Eve_RankingRewardPopup_Analysis]] | RankingRewardPopup SVS 전야제 개인·월드 랭킹 보상 팝업 | done |
| [[SVS_Eve_Event_System_Analysis]] | SVS_Event_viewer 파사드·SVS_Eve_Preview(1003)·SVS_Event_Eve(1004) 세 클래스 구조·First() 예외 위험 | done |

---

## 알림 / 경고

| 문서 | 핵심 주제 | 상태 |
|------|-----------|------|
| [[WarAlert_ReconnectIcon_BugAnalysis_AWQA5814]] | 요새전 진입 시 경고 아이콘 미노출 수정 (AWQA-5814) | done |
| [[TroopManagement_WarAlert_Stale_BugFix]] | RefreshTroop 시 warAlertList 스테일로 공격자 프로필 미표시 수정 | done |

---

## 연관 시스템

- [[WorldSearchPopup_Analysis]] ↔ [[WorldManager_RefreshPushBlockJoinLeave_SearchBlockLeak_BugFix]] (searchBlockDict 소실 근본 원인 공유)
- [[EventUi_Achievement_System_Analysis]] ↔ [[SVS_Eve_RankingRewardPopup_Analysis]] ↔ [[SVS_Eve_Event_System_Analysis]] (SVS_Event_Eve 상속·랭킹 팝업 호출 흐름 공유)
- [[InfiniteScrollManager_Analysis]] ↔ [[MKCommon_ReplaceAllDataKeepingVisualElements_Analysis]] (가상 스크롤 데이터 교체 쌍)
- [[WarAlert_ReconnectIcon_BugAnalysis_AWQA5814]] ↔ [[TroopManagement_WarAlert_Stale_BugFix]] (비동기 콜백 시점에 UI 참조 무효화 가능성 — 동일 null 가드 패턴 공유)
- [[Troop_Send_Analysis]] ↔ [[WarCallbackManager_Analysis]] (VisualElement 이벤트 딕셔너리 관리 패턴 공유)
- [[TroopFormation_Overview_Analysis]] ↔ [[TroopFormation_SelectIndex_Static_BugFix_AWQA6161]] (static SelectIndex 오염 원인·수정 공유)

