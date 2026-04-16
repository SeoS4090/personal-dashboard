---
tags:
  - index
  - encyclopedia
aliases:
  - 분석 목차
  - Analysis TOC
description: AW 프로젝트 코드 분석 문서 백과사전 — 시스템별 분류 목차
created: 2026-04-15
updated: 2026-04-15
---

# AW Project — 코드 분석 백과사전

> 이 문서는 `04. Work/AN Games/Analysis` 폴더 내 모든 분석 문서의 **목차**이다.
> 새 분석 문서 작성 시 반드시 이 목차에 항목을 추가해야 한다.

---

## 1. Troop (부대 이동/추적/경로) — 19건

부대 이동, 추적, 경로 계산, LOD 시각화, 전투 배치 관련 분석.

### 1-1. TroopManager (경로/이동/추적 핵심)

| 문서 | 핵심 주제 | 주요 태그 |
|------|-----------|----------|
| [[Troop_Manager_MakePath_Analysis]] | A* 경로 탐색, NavMesh, 게이트 처리 | `#system/troop` `#concern/readability` |
| [[Troop_Manager_MakeCrossPosition_Analysis]] | 이진탐색 기반 요격 지점 계산 | `#system/troop` `#concern/performance` |
| [[Troop_Manager_crossPath_Analysis]] | 요격/추적 기하학, 빈 시퀀스 예외 방어 | `#system/troop` `#concern/bug` |
| [[Troop_Manager_StartMove_UpdateAttacker_Analysis]] | 이동 업데이트 return→continue 수정, 콜백 보장 | `#system/troop` `#concern/performance` |

### 1-2. TroopLOD (월드맵 부대 시각화)

| 문서 | 핵심 주제 | 주요 태그 |
|------|-----------|----------|
| [[TroopLOD_Function_Analysis_Index]] | TroopLOD 분석 문서 교차 참조 인덱스 | `#system/troop` |
| [[TroopLOD_Lifecycle_Formation_Analysis]] | Awake/Start/OnDestroy 라이프사이클, 진형 계산 | `#system/troop` `#concern/performance` |
| [[TroopLOD_UnitSpawn_LOD_Animation_Analysis]] | 유닛 생성, LOD 단계별 표시, 애니메이션 전환 | `#system/troop` `#concern/performance` |
| [[TroopLOD_Movement_Rotation_Path_Analysis]] | 프레임 루프 이동/회전, 경로 시각화 | `#system/troop` `#concern/performance` |
| [[TroopLOD_Selection_TargetMark_Analysis]] | 선택 상태(0/1/2), 타겟 아이콘 전략, DOTween 루프 | `#system/troop` `#system/ui` |
| [[TroopLOD_SetTroopSlotData_Analysis]] | 500줄+ DTO→월드 동기화 모놀리식 함수 분석 | `#system/troop` `#concern/performance` `#status/done` |
| [[TroopLOD_DTO_SyncPipeline_Analysis]] | 6단계 DTO→월드 상태 파이프라인 | `#system/troop` `#system/network` `#concern/bug` |
| [[TroopLOD_BattleImminent_PassThrough_Implementation]] | 전투 임박 시 클라이언트측 소프트 클램프 | `#system/troop` `#concern/performance` |
| [[TroopLOD_BattleOverlap_Resolve_Analysis]] | 공격자-방어자 위치 겹침 오프셋 충돌 회피 | `#system/troop` `#concern/performance` |
| [[TroopLOD_CombatEffect_Analysis]] | 전투 이펙트 코루틴 파이프라인, GC 이슈 | `#system/troop` `#system/battle` `#concern/performance` |
| [[TroopLOD_simple_hero_icon_Lifecycle_Analysis]] | SpriteRenderer 영웅 아이콘 라이프사이클 | `#system/troop` `#concern/bug` |

### 1-3. NetworkTroop / UpdateAttacker (서버 동기화 + 버그 수정)

| 문서 | 핵심 주제 | 주요 태그 |
|------|-----------|----------|
| [[NetworkTroop_UpdateAttacker_Analysis]] | 추적 재계산, 콜백 중첩, 레이스 컨디션 | `#system/troop` `#concern/bug` `#concern/performance` |
| [[UpdateAttacker_3057_RaceCondition_BugFix]] | 3057 응답 stale 데이터 덮어쓰기 수정 | `#system/troop` `#system/network` `#concern/bug` |
| [[TroopTrace_StartMove_UpdateAttacker_LogGuide]] | [TroopTrace] 디버그 로깅 가이드 | `#system/troop` `#concern/readability` |
| [[TroopData_15483_vs_12885_PassThrough_Analysis]] | 공격자-방어자 통과 시나리오 분석 | `#system/troop` `#concern/bug` |

### 1-4. MarchLine (행군선)

| 문서 | 핵심 주제 | 주요 태그 |
|------|-----------|----------|
| [[marchline_system_analysis]] | MarchLine 전체 아키텍처: 데이터/Corps/Div/UI/LOD | `#system/troop` `#concern/readability` |

---

## 2. Battle (전투/NPC 소환) — 33건

전투 메카닉, 전투 로그, NPC 소환 상태 머신 관련 분석.

| 문서 | 핵심 주제 | 주요 태그 |
|------|-----------|----------|
| [[battle_log_analysis]] | 함대 전투 7단계 타임라인 분석 (15483 vs 12885) | `#system/battle` |
| [[MKSummonNpcManager_Function_Analysis_Index]] | NPC 소환 매니저 함수 인덱스 (20+개 메서드) | `#system/battle` |
| [[MKSummonNpcManager_SummonNpc_Analysis]] | SUMMON_NPC_STATE 상태 머신 5단계 흐름 | `#system/battle` `#concern/performance` |
| [[MKSummonNpcManager_Crashlytics_LogGuide]] | NPC 소환 실패 추적 로깅 가이드 | `#system/battle` `#system/network` |
| [[MKSummonNpcManager_Updata_VillageToWorld_Analysis]] | Village→World 전환: 즉시 WAIT_WORLD 전이 + VillageToWorld() 호출 | `#system/battle` |
| [[MKSummonNpcManager_Updata_WaitWorld_Analysis]] | FogEnd 콜백 유실 시 12초 폴백 복구, WorldMapFogEndCallback 덮어쓰기 위험 | `#system/battle` `#concern/bug` |
| [[MKSummonNpcManager_Updata_World_Analysis]] | 월드 진입 후 첫 검증 게이트: CanCreateNPC() 쿨타임/한도 판정 | `#system/battle` |
| [[MKSummonNpcManager_Updata_DownloadDataStart_Analysis]] | DownloadBlockData 코루틴 착수 + DOWNLOAD_DATA_WAIT 전이 | `#system/battle` |
| [[MKSummonNpcManager_Updata_DownloadDataWait_Analysis]] | 코루틴 완료 대기 전용 빈 상태, 콜백에 의해서만 탈출 | `#system/battle` |
| [[MKSummonNpcManager_Updata_DownloadDataSuccess_Analysis]] | ItemID 0 여부로 WORLDOBJSEARCH vs SEARCH_POS 경로 분기 | `#system/battle` |
| [[MKSummonNpcManager_Updata_DownloadDataFail_Analysis]] | 다운로드 실패/SearchEnd 선행 도착 시 실패 팝업 + EndSearchBlock 정리 | `#system/battle` |
| [[MKSummonNpcManager_Updata_WorldObjSearchPosStart_Analysis]] | 아이템 미사용 소환 위치 탐색: 기존 NPC 발견 시 카메라 안내, 없으면 영토+인접 리젠포인트 필터링 | `#system/battle` `#concern/performance` |
| [[MKSummonNpcManager_Updata_SearchPosStart_Analysis]] | 아이템 소환 경로 동기 탐색, RegenDataList 구성, MaxSearchEmptyPosCount=5 | `#system/battle` `#concern/performance` |
| [[MKSummonNpcManager_Updata_SearchPosStart_multi_Analysis]] | 비동기 코루틴 탐색 버전 (현재 미사용 dead code), _ignore_outline 재시도 미완성 | `#system/battle` `#concern/performance` |
| [[MKSummonNpcManager_Updata_SearchPosWait_Analysis]] | 비동기 탐색 완료 대기 빈 상태, 현재 진입 경로 없음 | `#system/battle` |
| [[MKSummonNpcManager_Updata_SearchPosSuccess_Analysis]] | 탐색 성공 → SUMMON_NPC_START 전이 브릿지, 두 소환 경로 공통 | `#system/battle` |
| [[MKSummonNpcManager_Updata_SearchPosFail_Analysis]] | 빈 리젠포인트 0개 시 기본 실패 팝업, 재시도 없음 | `#system/battle` `#concern/bug` |
| [[MKSummonNpcManager_Updata_SummonNpcStart_Analysis]] | 아이템/일반 소환 네트워크 요청 분기점 (Request_SummonRallyNPC vs Send3058) | `#system/battle` `#system/network` |
| [[MKSummonNpcManager_Updata_SummonNpcWait_Analysis]] | 서버 응답 대기 빈 상태, 타임아웃 없는 영구 잠금 위험 | `#system/battle` `#system/network` `#concern/bug` |
| [[MKSummonNpcManager_Updata_SummonNpcSuccess_Analysis]] | 소환 성공, SaveCreateNPCTime 쿨타임 저장, 상태 전이 순서 주의 | `#system/battle` |
| [[MKSummonNpcManager_Updata_SummonNpcFail_Analysis]] | 서버 소환 실패, rc 코드 미전달 설계 결함, 단일 실패 메시지 | `#system/battle` `#system/network` `#concern/bug` |
| [[MKSummonNpcManager_Updata_End_Analysis]] | 모든 경로 최종 정리, SearchEnd/NONE 리셋, 건너뛸 경우 영구 잠금 위험 | `#system/battle` `#concern/bug` |
| [[MKSummonNpcManager_DownloadBlockData_Analysis]] | 블록 정보 다운로드 코루틴, WaitUntil 재사용, 타임아웃 없음 위험 | `#system/battle` `#concern/bug` |
| [[MKSummonNpcManager_DownloadDataCallBack_Analysis]] | 다운로드 완료 콜백 → 상태 전이 디스패처 | `#system/battle` |
| [[MKSummonNpcManager_VillageToWorld_Analysis]] | FogEnd 콜백 방식 씬 전환, joinOfferExcept 억제 | `#system/battle` `#system/world` |
| [[MKSummonNpcManager_WorldMapLoadComplete_Analysis]] | FogEnd 콜백 실행, WORLD 전이, 폴백 타이머 무효화 | `#system/battle` `#system/world` |
| [[MKSummonNpcManager_OpenSearchWaitPopup_Analysis]] | 탐색 중 터치 차단 + 대기 팝업 표시 | `#system/battle` `#system/ui` |
| [[MKSummonNpcManager_CloseSearchWaitPopup_Analysis]] | 터치 복원 + 팝업 닫기, 터치 잠금 고착 위험 | `#system/battle` `#system/ui` `#concern/bug` |
| [[MKSummonNpcManager_SummonNpcCallbackSucc_Analysis]] | 소환 성공 콜백 → SUMMON_NPC_SUCCESS 전이 | `#system/battle` |
| [[MKSummonNpcManager_SummonNpcCallbackFail_Analysis]] | 소환 실패 콜백 → SUMMON_NPC_FAIL 전이, 원인 미전달 | `#system/battle` `#concern/bug` |
| [[MKSummonNpcManager_SearchEndCallback_Analysis]] | 비동기 블록 탐색 완료 콜백, 재시도 로직 주석처리 (현재 미사용) | `#system/battle` `#concern/bug` |
| [[MKSummonNpcManager_ShowFailPopup_Analysis]] | 실패 이유 코드별 토스트 메시지 분기 | `#system/battle` `#system/ui` |
| [[MKSummonNpcManager_SetFailPopupToEnd_Analysis]] | 모든 실패 경로 통합 종료 처리, END 전이 + 팝업 | `#system/battle` `#system/ui` |

---

## 3. UI (사용자 인터페이스) — 6건

무한 스크롤, 팝업, 이벤트 관리, DOTween UI 애니메이션 관련 분석.

| 문서 | 핵심 주제 | 주요 태그 |
|------|-----------|----------|
| [[InfiniteScrollManager_Analysis]] | 제네릭 풀링 무한 스크롤, 동적 풀 크기 조정 | `#system/ui` `#concern/readability` |
| [[MKCommon_ReplaceAllDataKeepingVisualElements_Analysis]] | 가상 스크롤 데이터 캐시 교체 로직 | `#system/ui` `#concern/readability` |
| [[WarCallbackManager_Analysis]] | UI Toolkit ClickEvent 이벤트 매니저, 메모리 누수 방지 | `#system/ui` `#concern/readability` |
| [[WorldUseMoveCityItemPopup_CheckCanMove_RefreshAllData_Analysis]] | 도시 이동 팝업: CheckCanMove + MOVE_CASE 판정 | `#system/ui` `#system/world` |
| [[Ally_war_rally_Tab_Analysis]] | 연맹전 랠리 탭(전체/공격/방어) 전환 관리 | `#system/ui` `#concern/readability` |
| [[Ally_war_rally_dotweens]] | 랠리 슬롯 진행 바 DOTween 라이프사이클 | `#system/ui` `#concern/performance` |

---

## 4. Network (네트워크/데이터 동기화) — 3건

서버 API, 캐시 라이프사이클, 데이터 동기화 관련 분석.

| 문서 | 핵심 주제 | 주요 태그 |
|------|-----------|----------|
| [[NetworkAlly_reinforce_memberList_Lifecycle]] | 방어 지원 멤버 리스트 Dictionary 캐시 라이프사이클 | `#system/network` `#concern/memory` |
| [[Ally_war_rally_DefJoin_corps_Null_Incident_Analysis]] | DefJoin DTO corps null 참조 인시던트 분석 및 수정 | `#system/network` `#system/troop` `#concern/bug` |
| [[Ally_war_rally_TroopData_Analysis]] | 6슬롯 부대 구성 UI 렌더링 헬퍼 | `#system/troop` `#system/ui` |

---

## 5. World (월드맵/카메라) — 2건

월드맵 이동 가시성, 카메라 드래그, 레이드 포인트 관련 분석.

| 문서 | 핵심 주제 | 주요 태그 |
|------|-----------|----------|
| [[World_IsVisibleMoveData_MovePath_Analysis]] | 부대 경로 가시성 필터, 중간 경로 버그 수정 | `#system/world` `#concern/performance` |
| [[WorldCameraManager_DragMove_RaidPointBlock_Analysis]] | 드래그 이동 시 균열/제단 영역 충돌 차단 | `#system/world` `#concern/performance` |

---

## 6. Infrastructure (인프라/로깅) — 1건

Firebase, Crashlytics, 분석, 푸시 알림 관련 분석.

| 문서 | 핵심 주제 | 주요 태그 |
|------|-----------|----------|
| [[FirebaseManager_Analysis]] | Firebase 초기화, Crashlytics/Analytics, FCM, iOS 종료 상태 머신 | `#system/network` `#system/ui` `#concern/performance` |

---

## 7. Improvements (개선 제안) — 2건

> 경로: `04. Work/AN Games/Improvements/`

| 문서 | 핵심 주제 |
|------|-----------|
| [[IngameConsole_Improvements]] | 인게임 콘솔 개선 제안 |
| [[MakeCrossPosition_Improvements]] | MakeCrossPosition 알고리즘 개선 제안 |

---

## 관심사별 교차 참조

### #concern/bug (버그 관련 — 17건)
- [[Troop_Manager_crossPath_Analysis]]
- [[NetworkTroop_UpdateAttacker_Analysis]]
- [[UpdateAttacker_3057_RaceCondition_BugFix]]
- [[TroopData_15483_vs_12885_PassThrough_Analysis]]
- [[TroopLOD_DTO_SyncPipeline_Analysis]]
- [[TroopLOD_simple_hero_icon_Lifecycle_Analysis]]
- [[Ally_war_rally_DefJoin_corps_Null_Incident_Analysis]]
- [[MKSummonNpcManager_Updata_WaitWorld_Analysis]]
- [[MKSummonNpcManager_Updata_SearchPosFail_Analysis]]
- [[MKSummonNpcManager_Updata_SummonNpcWait_Analysis]]
- [[MKSummonNpcManager_Updata_SummonNpcFail_Analysis]]
- [[MKSummonNpcManager_Updata_End_Analysis]]
- [[MKSummonNpcManager_DownloadBlockData_Analysis]]
- [[MKSummonNpcManager_CloseSearchWaitPopup_Analysis]]
- [[MKSummonNpcManager_SummonNpcCallbackFail_Analysis]]
- [[MKSummonNpcManager_SearchEndCallback_Analysis]]
- [[MKSummonNpcManager_VillageToWorld_Analysis]]

### #concern/performance (성능 관련 — 20건)
- [[Troop_Manager_MakeCrossPosition_Analysis]]
- [[Troop_Manager_crossPath_Analysis]]
- [[Troop_Manager_StartMove_UpdateAttacker_Analysis]]
- [[NetworkTroop_UpdateAttacker_Analysis]]
- [[TroopLOD_Lifecycle_Formation_Analysis]]
- [[TroopLOD_UnitSpawn_LOD_Animation_Analysis]]
- [[TroopLOD_Movement_Rotation_Path_Analysis]]
- [[TroopLOD_SetTroopSlotData_Analysis]]
- [[TroopLOD_BattleImminent_PassThrough_Implementation]]
- [[TroopLOD_BattleOverlap_Resolve_Analysis]]
- [[TroopLOD_CombatEffect_Analysis]]
- [[MKSummonNpcManager_SummonNpc_Analysis]]
- [[MKSummonNpcManager_Updata_WorldObjSearchPosStart_Analysis]]
- [[MKSummonNpcManager_Updata_SearchPosStart_Analysis]]
- [[MKSummonNpcManager_Updata_SearchPosStart_multi_Analysis]]
- [[Ally_war_rally_dotweens]]
- [[World_IsVisibleMoveData_MovePath_Analysis]]
- [[WorldCameraManager_DragMove_RaidPointBlock_Analysis]]
- [[FirebaseManager_Analysis]]
- [[UpdateAttacker_3057_RaceCondition_BugFix]]

### #concern/memory (메모리 관련 — 4건)
- [[NetworkAlly_reinforce_memberList_Lifecycle]]
- [[Ally_war_rally_DefJoin_corps_Null_Incident_Analysis]]
- [[TroopLOD_BattleImminent_PassThrough_Implementation]]
- [[FirebaseManager_Analysis]]

---

## 통계

| 분류 | 문서 수 |
|------|---------|
| Troop (부대) | 19 |
| Battle (전투) | 33 |
| UI (인터페이스) | 6 |
| Network (네트워크) | 3 |
| World (월드맵) | 2 |
| Infrastructure (인프라) | 1 |
| Improvements (개선) | 2 |
| **합계** | **66** |

---

*마지막 업데이트: 2026-04-15 (MKSummonNpcManager 콜백/유틸 메서드 11개 신규 추가: DownloadBlockData, DownloadDataCallBack, VillageToWorld, WorldMapLoadComplete, OpenSearchWaitPopup, CloseSearchWaitPopup, SummonNpcCallbackSucc, SummonNpcCallbackFail, SearchEndCallback, ShowFailPopup, SetFailPopupToEnd; Ally_war_rally_dotweens 보강)*
