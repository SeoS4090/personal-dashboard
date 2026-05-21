---
tags:
  - moc
  - system/ui
aliases:
  - UI MOC
  - 인터페이스 MOC
description: 무한 스크롤, 팝업, 이벤트 UI, 연맹전 랠리, 부대 편성 UI 분석 MOC
created: 2026-05-20
updated: 2026-05-20
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

---

## 연맹전 랠리

| 문서 | 핵심 주제 |
|------|-----------|
| [[Ally_war_rally_Tab_Analysis]] | 전체/공격/방어 탭 전환 관리 |
| [[Ally_war_rally_dotweens]] | 랠리 슬롯 진행 바 DOTween 라이프사이클 |

---

## 부대 편성

| 문서 | 핵심 주제 | 상태 |
|------|-----------|------|
| [[TroopFormation_WorldTroopPanel_Overlap_Fix_Analysis]] | 부대 편성 팝업 열림 시 WorldTroopPanel 겹침 수정 (AWQA-5822) | done |
| [[TroopFormation_SelectIndex_Static_BugFix_AWQA6161]] | OnEnable ArgumentOutOfRangeException 방어 가드 (AWQA-6161) | wip |

---

## 이벤트 UI

| 문서 | 핵심 주제 | 상태 |
|------|-----------|------|
| [[EventUi_Achievement_System_Analysis]] | EventUi partial class 구조, Achievement 3종 오버로드, SVS_Event_Eve 상속 | done |
| [[SVS_Eve_RankingRewardPopup_Analysis]] | RankingRewardPopup SVS 전야제 개인·월드 랭킹 보상 팝업 | done |

---

## 알림 / 경고

| 문서 | 핵심 주제 | 상태 |
|------|-----------|------|
| [[WarAlert_ReconnectIcon_BugAnalysis_AWQA5814]] | 요새전 진입 시 경고 아이콘 미노출 수정 (AWQA-5814) | done |

---

## 연관 시스템

- [[WorldSearchPopup_Analysis]] ↔ [[WorldManager_RefreshPushBlockJoinLeave_SearchBlockLeak_BugFix]] (searchBlockDict 소실 근본 원인 공유)
- [[EventUi_Achievement_System_Analysis]] ↔ [[SVS_Eve_RankingRewardPopup_Analysis]] (SVS_Event_Eve 상속 구조 공유)
- [[InfiniteScrollManager_Analysis]] ↔ [[MKCommon_ReplaceAllDataKeepingVisualElements_Analysis]] (가상 스크롤 데이터 교체 쌍)
