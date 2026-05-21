---
tags:
  - moc
  - index
  - encyclopedia
aliases:
  - 분석 목차
  - Analysis TOC
  - 마스터 MOC
description: AW 프로젝트 코드 분석 문서 최상위 MOC — 시스템별 계층 구조 목차
created: 2026-04-15
updated: 2026-05-21
---

# AW Project — 코드 분석 마스터 MOC

> 이 문서는 최상위 MOC(Map of Content)다. 각 시스템 MOC로 이동한 뒤 개별 분석 문서에 접근한다.  
> 새 분석 문서 작성 시 해당 시스템 MOC와 이 목차에 모두 항목을 추가해야 한다.

---

## 시스템 MOC 계층도

```
Analysis_Index (마스터 MOC)
├── Troop/
│   ├── Troop_MOC          ← 경로 계산·서버 동기화·AWPL 티켓
│   ├── TroopLOD/
│   │   └── TroopLOD_Function_Analysis_Index  ← 시각 표현 레이어
│   └── MarchLine/
│       └── MarchLine_MOC  ← 행군선 데이터·PathLine 버그
├── MKSummonNpc/
│   └── MKSummonNpcManager_Function_Analysis_Index  ← NPC 소환 상태머신
├── Battle/
│   └── Battle_MOC
├── UI/
│   └── UI_MOC
├── Network/
│   └── Network_MOC
└── World/
    └── World_MOC
```

| 시스템 MOC | 문서 수 | 핵심 |
|-----------|---------|------|
| [[Troop_MOC]] | 10 | TroopManager, NetworkTroop, AWPL |
| [[TroopLOD_Function_Analysis_Index]] | 16 | 시각화, LOD, 전투 위치, 버그 |
| [[MarchLine_MOC]] | 6 | 행군선, PathLine 버그 |
| [[MKSummonNpcManager_Function_Analysis_Index]] | 32 | NPC 소환 상태 머신 전체 |
| [[Battle_MOC]] | 5 | 함대 전투 메시지, 집결 |
| [[UI_MOC]] | 12 | 스크롤, 팝업, 이벤트 UI |
| [[Network_MOC]] | 4 | 서버 동기화, 캐시 |
| [[World_MOC]] | 5 | 월드맵, Firebase |

---

## 1. Troop (부대 이동/추적/경로) — 23건

부대 이동, 추적, 경로 계산, LOD 시각화, 전투 배치 관련 분석.

### 1-1. TroopManager (경로/이동/추적 핵심)

| 문서 | 핵심 주제 | 주요 태그 |
|------|-----------|----------|
| [[Troop_Manager_MakePath_Analysis]] | A* 경로 탐색, NavMesh, 게이트 처리 | `#system/troop` `#concern/readability` |
| [[Troop_Manager_MakeCrossPosition_Analysis]] | 이진탐색 기반 요격 지점 계산 | `#system/troop` `#concern/performance` |
| [[Troop_Manager_crossPath_Analysis]] | 요격/추적 기하학, 빈 시퀀스 예외 방어, AWQA-6370 방어 지원 실패 후 target_type 미초기화로 sally_type=100 오부여 수정 | `#system/troop` `#concern/bug` |
| [[Troop_Manager_StartMove_UpdateAttacker_Analysis]] | 이동 업데이트 return→continue 수정, 콜백 보장 | `#system/troop` `#concern/performance` |

### 1-2. TroopLOD (월드맵 부대 시각화)

| 문서                                                     | 핵심 주제                                                                                   | 주요 태그                                                                                 |
| ------------------------------------------------------ | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| [[TroopLOD_Function_Analysis_Index]]                   | TroopLOD 분석 문서 교차 참조 인덱스                                                                | `#system/troop`                                                                       |
| [[TroopLOD_Lifecycle_Formation_Analysis]]              | Awake/Start/OnDestroy 라이프사이클, 진형 계산                                                     | `#system/troop` `#concern/performance`                                                |
| [[TroopLOD_UnitSpawn_LOD_Animation_Analysis]]          | 유닛 생성, LOD 단계별 표시, 애니메이션 전환, 비동기 콜백 애니 미적용 버그 수정                                        | `#system/troop` `#concern/performance` `#concern/bug`                                 |
| [[TroopLOD_IS_ANNIHILATION_Grey_BugInvestigation]]     | AWQA-6181 — IS_ANNIHILATION 오판정 Grey 렌더링: PopAsync 콜백 로컬 캡처 + SetTroopSlotData 복구 감지(MakeSoldiers/MakeHeros/MakeCompanion) 방어 코드 적용 완료, 근본 원인(서버 측 transient DTO) 미해결 | `#system/troop` `#system/battle` `#system/network` `#concern/bug` `#status/done`       |
| [[TroopLOD_MakeUnits_Duplicate_Analysis]]              | fleet_battle_end→fleet_sally 연속 수신 시 MakeUnits 이중 호출로 영웅·병사 오브젝트 중복 생성 메모리 누수 (93 fanatics + 43) — PopAsync 콜백 슬롯 덮어쓰기 버그, 세대 카운터/슬롯 점유 체크 수정안 | `#system/troop` `#system/battle` `#concern/bug` `#concern/memory` `#status/wip`       |
| [[TroopLOD_Movement_Rotation_Path_Analysis]]           | 프레임 루프 이동/회전, 경로 시각화                                                                    | `#system/troop` `#concern/performance`                                                |
| [[TroopLOD_Selection_TargetMark_Analysis]]             | 선택 상태(0/1/2), 타겟 아이콘 전략, DOTween 루프                                                     | `#system/troop` `#system/ui`                                                          |
| [[TroopLOD_SetTroopSlotData_Analysis]]                 | 500줄+ DTO→월드 동기화 모놀리식 함수 분석                                                             | `#system/troop` `#concern/performance` `#status/done`                                 |
| [[TroopLOD_DTO_SyncPipeline_Analysis]]                 | 6단계 DTO→월드 상태 파이프라인                                                                     | `#system/troop` `#system/network` `#concern/bug`                                      |
| [[TroopLOD_BattleImminent_PassThrough_Implementation]] | 전투 임박 시 클라이언트측 소프트 클램프                                                                  | `#system/troop` `#concern/performance`                                                |
| [[TroopLOD_BattleOverlap_Resolve_Analysis]]            | 공격자-방어자 위치 겹침 오프셋 충돌 회피 (2026-04-16 구현 완료)                                              | `#system/troop` `#concern/performance` `#status/done`                                 |
| [[TroopLOD_BattlePosition_3rd_Refinement_Analysis]]    | 전투 위치 3·4차 고도화 — origin_no 필터, path[0] 변조 분리, dir=zero 폴백, LINQ 제거, USER_CITY 2x 오프셋 통일 | `#system/troop` `#system/battle` `#concern/bug` `#concern/performance` `#status/done` |
| [[TroopLOD_CombatEffect_Analysis]]                     | 전투 이펙트 코루틴 파이프라인, GC 이슈                                                                 | `#system/troop` `#system/battle` `#concern/performance`                               |
| [[TroopLOD_simple_hero_icon_Lifecycle_Analysis]]       | SpriteRenderer 영웅 아이콘 라이프사이클                                                            | `#system/troop` `#concern/bug`                                                        |

### 1-3. NetworkTroop / UpdateAttacker (서버 동기화 + 버그 수정)

| 문서 | 핵심 주제 | 주요 태그 |
|------|-----------|----------|
| [[NetworkTroop_UpdateAttacker_Analysis]] | 추적 재계산, 콜백 중첩, 레이스 컨디션 | `#system/troop` `#concern/bug` `#concern/performance` |
| [[UpdateAttacker_3057_RaceCondition_BugFix]] | 3057 응답 stale 데이터 덮어쓰기 수정 | `#system/troop` `#system/network` `#concern/bug` |
| [[TroopTrace_StartMove_UpdateAttacker_LogGuide]] | [TroopTrace] 디버그 로깅 가이드 | `#system/troop` `#concern/readability` |
| [[TroopData_15483_vs_12885_PassThrough_Analysis]] | 공격자-방어자 통과 시나리오 분석 | `#system/troop` `#concern/bug` |
| [[AWPL-7423_PVP_NavMesh_Outside_Move_Analysis]] | [영토] 이동 불가 지역 전투 방지 — NRE/IOE 크래시 다중 수정, move_path_slot 이진탐색 1차 fallback 구현, 정렬 비교자 수정 (커밋 f4f3a206, 완료) | `#system/troop` `#concern/bug` `#concern/pathfinding` `#concern/pvp` `#status/done` |
| [[AWPL-7595_RallyLeader_Succession_RetreatPath_Analysis]] | [요새전] 집결장 전멸 후 리더 승계 시 HandleRallyCreateStartSally가 stale 이전 리더 데이터로 move_path 덮어쓰기 — fleet_battle_msg(status=5) 확정 경로를 후속 소켓이 다른 끝 좌표(565.29,492.29 vs 566,493)로 덮어씀. 1차: `origin_no` 갱신 누락 수정, 2차: corp_a/corp_d 공유 참조 오염 제거 (재현 검증 필요) | `#system/troop` `#system/battle` `#concern/bug` `#status/done` |

### 1-4. MarchLine (행군선)

| 문서 | 핵심 주제 | 주요 태그 |
|------|-----------|----------|
| [[marchline_system_analysis]] | MarchLine 전체 아키텍처: 데이터/Corps/Div/UI/LOD | `#system/troop` `#concern/readability` |
| [[AWQA-6260_RallyParticipant_PathLine_DuplicateLine_BugFix_Analysis]] | AWQA-6260 — 집결 참여자 리더 승계 후 전멸 시 PathLine 오표시·중복 생성. 1차: IS_RETURN prepend 생략 + 블록 등록 차단. 2차: IS_RETURN 범위 과다로 일반 복귀 pathline 소실 → FAIL_RETURN(95)만 예외 처리 + idx<0 수정. 3차: FAIL_RETURN move_path_slot[0].move_time==serverNow → >필터 탈락 → 행군 라인 미생성 → 필터 제거, 전체 경로 사용 | `#system/troop` `#system/network` `#concern/bug` `#status/done` |
| [[AWQA-6325_DefenseSupport_Annihilated_Defeat_Effect_BugFix]] | AWQA-6325 — 방어지원 부대가 집결 전투에서 전멸 복귀 중 거점 전투 종료 시 Defeat 이펙트 오재생: ProcessCombatMsg ci_id 탐색 조건 1에 `status==BATTLE` 미검증으로 RETREAT 부대 매칭 → 조건 1에 status 체크 추가 | `#system/troop` `#system/battle` `#concern/bug` `#status/done` |
| [[AWQA-6326_RallyJoin_CancelNRE_BugFix]] | AWQA-6326 — 요새전 집결 2회 참여 시 퇴각 버튼 무반응 NRE: `war_memberSlotList` 취소 후 미삭제로 키 누적, `.Select(Find).First()` LINQ가 null 반환 → `SelectMany.FirstOrDefault` 수정 + `Request_GetRallyMemberData` 폴백 추가 | `#system/troop` `#system/network` `#concern/bug` `#status/done` |
| [[AWQA-6371_FortWar_TroopFlicker_BugAnalysis]] | AWQA-6371 — 요새전 귀환 중 부대가 적 공격 받을 때 깜빡이는 버그: `fleet_battle`이 `origin_no`를 `battle.target_no`로 덮어쓰고, `fleet_sally`가 서버 원본값으로 복원할 때 두 번의 순간 이동 발생. `IS_RETURN` 상태 방어 예외 처리 필요 | `#system/troop` `#system/battle` `#system/network` `#concern/bug` `#status/wip` |
| [[AWQA-6379_PathLine_PreCorrection_FlickerFix_Analysis]] | AWQA-6379 — 출병 즉시 선처리 시 `sally_type` 누락으로 `IsBattleApproachTroop()` 오판정 → 끝점 보정 생략 → 보정 전 pathline 그림 → 소켓 후 재보정으로 flicker. `NetworkTroop.cs` 선처리 누락 필드 보완 + `WorldManager.cs` 시작점 보정 범위 확장(수정 완료) | `#system/troop` `#system/network` `#concern/bug` `#status/done` |

---

## 2. Battle (전투/NPC 소환) — 37건

전투 메카닉, 전투 로그, NPC 소환 상태 머신 관련 분석.

| 문서 | 핵심 주제 | 주요 태그 |
|------|-----------|----------|
| [[FleetBattleMsg_UserCity_Position_BugFix_Analysis]] | fleet_battle_msg 중간 수신 시 USER_CITY 전투 군단 거점 위치 오배치 버그: BATTLE 상태 건너뜀 + source_no=0 잘못된 후방 계산 수정 | `#system/battle` `#system/world` `#system/network` `#concern/bug` |
| [[AWQA-6334_UserCity_PvP_JoinBattle_EffectPosition_BugFix_Analysis]] | AWQA-6334 — 마을 PvP 난입 시 이펙트가 HIDE된 B 군단 위치에서 발생: counterTroop 덮어쓰기(alreadyBattled=false) + 2번째 소켓에서 B.HIDE=true 후 left_attacker 오참조. 수정: counterTroop 보호 조건 + ProcessCombatMsg HIDE 재탐색 (수정 완료) | `#system/battle` `#system/troop` `#system/world` `#concern/bug` `#status/done` |
| [[BlockData_BattleFleet_Status2_BugFix_Analysis]] | block 조회 시 전투 중 fleet status=2(서버 스펙) → GetCurrentDetailPos 이동완료 안전장치 부재 + Lerp 분모=0 → 마을 위 생성 버그 수정: 역방향 오프셋 + fleet_battle_msg status 업데이트 | `#system/battle` `#system/world` `#system/network` `#concern/bug` |
| [[TroopLOD_NPC_JoinBattle_Hide_BugAnalysis]] | NPC 전투 난입(`fleet_battle_join_npc`) 시 `ProcessBlockData`에서 SKIP → `battle_fleets_leaders` 미등록 → `RefreshWithPushFleetBattle` 조이너 탐색 0개 → HIDE 누락 버그 1차 분석. `fleet_battle_join_npc`를 LEADER에 준하여 딕셔너리 등록하는 수정 필요 (2차 분석: [[TroopLOD_NPC_JoinBattle_Hide_BugAnalysis2]]) | `#system/troop` `#system/battle` `#system/network` `#concern/bug` `#status/done` |
| [[Fortwar_RallyAdd_RallyId_Zero_BugFix_Analysis]] | AWCS-1608 — 드래그 집결 난입 시 rally_id=0 버그: ProcessCombatMsg DTO 재생성 + 폴백 실패, ally_warSlotList 보정으로 수정 | `#system/battle` `#system/world` `#system/network` `#concern/bug` |
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

## 3. UI (사용자 인터페이스) — 8건

무한 스크롤, 팝업, 이벤트 관리, DOTween UI 애니메이션 관련 분석.

| 문서 | 핵심 주제 | 주요 태그 |
|------|-----------|----------|
| [[EventUi_Achievement_System_Analysis]] | EventUi partial class 구조, Achievement 3종 오버로드, SVS_Event_Eve 상속 구현 | `#system/ui` `#status/done` |
| [[SVS_Eve_RankingRewardPopup_Analysis]] | RankingRewardPopup SVS 전야제 개인·월드 랭킹 보상 팝업 — main_event_id 구분, eventGoal rank_type 필터, 보상 메서드 선택 기준 | `#system/ui` `#system/network` `#status/done` |
| [[InfiniteScrollManager_Analysis]] | 제네릭 풀링 무한 스크롤, 동적 풀 크기 조정 | `#system/ui` `#concern/readability` |
| [[MKCommon_ReplaceAllDataKeepingVisualElements_Analysis]] | 가상 스크롤 데이터 캐시 교체 로직 | `#system/ui` `#concern/readability` |
| [[WarCallbackManager_Analysis]] | UI Toolkit ClickEvent 이벤트 매니저, 메모리 누수 방지 | `#system/ui` `#concern/readability` |
| [[WorldUseMoveCityItemPopup_CheckCanMove_RefreshAllData_Analysis]] | 도시 이동 팝업: CheckCanMove + MOVE_CASE 판정 | `#system/ui` `#system/world` |
| [[Ally_war_rally_Tab_Analysis]] | 연맹전 랠리 탭(전체/공격/방어) 전환 관리 | `#system/ui` `#concern/readability` |
| [[Ally_war_rally_dotweens]] | 랠리 슬롯 진행 바 DOTween 라이프사이클 | `#system/ui` `#concern/performance` |
| [[TroopFormation_WorldTroopPanel_Overlap_Fix_Analysis]] | 부대 편성 팝업 열림 시 WorldTroopPanel 겹침 버그 수정 (AWQA-5822, troopPanelsActive 플래그) | `#system/ui` `#system/troop` `#concern/bug` |
| [[TroopFormation_SelectIndex_Static_BugFix_AWQA6161]] | AWQA-6161 — OnEnable b__12 ArgumentOutOfRangeException, 방어 가드 3개 추가 완료, 근본 원인(sort Query OOB 가설 등) 추가 조사 필요 **[WIP]** | `#system/ui` `#system/troop` `#concern/bug` `#status/wip` |
| [[WarAlert_ReconnectIcon_BugAnalysis_AWQA5814]] | AWQA-5814 — CrossEnterBattleField PushFortWar 콜백 Request_WarAlert 누락으로 요새전 진입 시 경고 아이콘 미노출 수정 완료 | `#system/ui` `#system/network` `#concern/bug` `#status/done` |
| [[TroopManagement_WarAlert_Stale_BugFix]] | RefreshTroop 호출 시 Request_WarAlert 누락으로 Troop_Management 팝업에서 공격자 프로필 미표시 — BATTLE 군단 유무 조건부 cc3071 호출 + 콜백 null 가드 추가 (수정 완료) | `#system/ui` `#system/troop` `#system/network` `#concern/bug` `#status/done` |
| [[Troop_Management_Analysis]] | 행군·정찰 슬롯 목록 팝업 분석 — CreateMarchLineItem ~350줄 모놀리식, CreateScoutLineItem TYPE_TOWN else 분기 KeyNotFoundException crash 위험, btn_return/retreat/dismissal 동일 콜백, LINQ 전투력 계산 성능 | `#system/ui` `#system/troop` `#concern/bug` `#concern/performance` `#status/done` |
| [[WorldSearchPopup_Analysis]] | 오브젝트 찾기 팝업 전체 분석 — searchBlockDict 구독 관리, NPC 소환 위치 계산, OnDisable 누수, 소환 로직 중복, searchBlockDict 소실 버그(수정완료) | `#system/ui` `#system/world` `#system/battle` `#concern/bug` `#status/done` |

---

## 4. Network (네트워크/데이터 동기화) — 4건

서버 API, 캐시 라이프사이클, 데이터 동기화 관련 분석.

| 문서 | 핵심 주제 | 주요 태그 |
|------|-----------|----------|
| [[NetworkAlly_reinforce_memberList_Lifecycle]] | 방어 지원 멤버 리스트 Dictionary 캐시 라이프사이클 | `#system/network` `#concern/memory` |
| [[Ally_war_rally_DefJoin_corps_Null_Incident_Analysis]] | DefJoin DTO corps null 참조 인시던트 분석 및 수정 | `#system/network` `#system/troop` `#concern/bug` |
| [[Ally_war_rally_TroopData_Analysis]] | 6슬롯 부대 구성 UI 렌더링 헬퍼 | `#system/troop` `#system/ui` |
| [[WorldSocketDataModel_GetCurrentDetailPos_Analysis]] | BATTLE 상태 GetCurrentDetailPos 계약 변경, ComputeLastSlotOffsetPos 추가 | `#system/network` `#system/troop` `#concern/bug` |

---

## 5. World (월드맵/카메라) — 4건

월드맵 이동 가시성, 카메라 드래그, 레이드 포인트 관련 분석.

| 문서 | 핵심 주제 | 주요 태그 |
|------|-----------|----------|
| [[World_IsVisibleMoveData_MovePath_Analysis]] | 부대 경로 가시성 필터, 중간 경로 버그 수정 | `#system/world` `#concern/performance` |
| [[WorldCameraManager_DragMove_RaidPointBlock_Analysis]] | 드래그 이동 시 균열/제단 영역 충돌 차단 | `#system/world` `#concern/performance` |
| [[Fortwar_EarlyEnd_CloudStuck_AWQA6070]] | AWQA-6070 — 크로스 요새전 조기 종료 후 마을 복귀 시 구름 정지: `MainHudUi.GetWorldMapCenter` NRE 방어 분석 | `#system/world` `#system/ui` `#system/sound` `#concern/bug` `#status/wip` |
| [[WorldManager_RefreshPushBlockJoinLeave_SearchBlockLeak_BugFix]] | NPC 소환 시 searchBlockDict 블록이 RefreshPushBlockJoinLeave에 의해 leave 처리되어 타인 마을 위 소환 버그 수정 | `#system/world` `#system/battle` `#system/network` `#concern/bug` `#status/done` |

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

### #concern/bug (버그 관련 — 20건)
- [[FleetBattleMsg_UserCity_Position_BugFix_Analysis]]
- [[BlockData_BattleFleet_Status2_BugFix_Analysis]]
- [[Fortwar_RallyAdd_RallyId_Zero_BugFix_Analysis]]
- [[Troop_Manager_crossPath_Analysis]]
- [[NetworkTroop_UpdateAttacker_Analysis]]
- [[UpdateAttacker_3057_RaceCondition_BugFix]]
- [[TroopData_15483_vs_12885_PassThrough_Analysis]]
- [[TroopLOD_DTO_SyncPipeline_Analysis]]
- [[TroopLOD_UnitSpawn_LOD_Animation_Analysis]]
- [[TroopLOD_simple_hero_icon_Lifecycle_Analysis]]
- [[TroopLOD_IS_ANNIHILATION_Grey_BugInvestigation]]
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
- [[TroopFormation_WorldTroopPanel_Overlap_Fix_Analysis]]
- [[TroopFormation_SelectIndex_Static_BugFix_AWQA6161]]
- [[WorldSocketDataModel_GetCurrentDetailPos_Analysis]]
- [[WarAlert_ReconnectIcon_BugAnalysis_AWQA5814]]
- [[WorldManager_RefreshPushBlockJoinLeave_SearchBlockLeak_BugFix]]
- [[WorldSearchPopup_Analysis]]
- [[TroopLOD_MakeUnits_Duplicate_Analysis]]
- [[TroopManagement_WarAlert_Stale_BugFix]]
- [[AWPL-7423_PVP_NavMesh_Outside_Move_Analysis]]
- [[AWPL-7595_RallyLeader_Succession_RetreatPath_Analysis]]
- [[AWQA-6260_RallyParticipant_PathLine_DuplicateLine_BugFix_Analysis]]
- [[TroopLOD_NPC_JoinBattle_Hide_BugAnalysis]]
- [[AWQA-6325_DefenseSupport_Annihilated_Defeat_Effect_BugFix]]
- [[AWQA-6326_RallyJoin_CancelNRE_BugFix]]
- [[AWQA-6371_FortWar_TroopFlicker_BugAnalysis]]
- [[AWQA-6379_PathLine_PreCorrection_FlickerFix_Analysis]]
- [[AWQA-6334_UserCity_PvP_JoinBattle_EffectPosition_BugFix_Analysis]]

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
- [[TroopLOD_BattlePosition_3rd_Refinement_Analysis]]
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

### #concern/memory (메모리 관련 — 5건)
- [[TroopLOD_MakeUnits_Duplicate_Analysis]]
- [[NetworkAlly_reinforce_memberList_Lifecycle]]
- [[Ally_war_rally_DefJoin_corps_Null_Incident_Analysis]]
- [[TroopLOD_BattleImminent_PassThrough_Implementation]]
- [[FirebaseManager_Analysis]]
- [[TroopLOD_MakeUnits_Duplicate_Analysis]]

---

## 통계

| 분류 | 문서 수 |
|------|---------|
| Troop (부대) | 29 |
| Battle (전투) | 38 |
| UI (인터페이스) | 14 (AWQA-6161 WIP) |
| Network (네트워크) | 4 |
| World (월드맵) | 4 |
| Infrastructure (인프라) | 1 |
| Improvements (개선) | 2 |
| **합계** | **89** |

---

*마지막 업데이트: 2026-05-21 (Troop_Management 팝업 전체 분석 신규 추가 — CreateMarchLineItem 모놀리식 구조, CreateScoutLineItem TYPE_TOWN else 분기 crash 위험, btn 동일 콜백, LINQ 성능)*
