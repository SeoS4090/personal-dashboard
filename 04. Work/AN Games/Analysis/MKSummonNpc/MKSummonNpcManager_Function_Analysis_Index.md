---
tags:
  - moc
  - system/battle
aliases:
  - MKSummonNpc MOC
  - NPC 소환 MOC
description: MKSummonNpcManager SUMMON_NPC_STATE 상태 머신 전체 함수 분석 인덱스 — 22개 상태 핸들러 + 콜백/유틸
created: 2026-05-20
updated: 2026-05-20
---

# MKSummonNpcManager — NPC 소환 상태 머신 MOC

← [[Analysis_Index]]

> SUMMON_NPC_STATE 상태 머신 5단계 흐름 및 각 핸들러 분석 문서 집합.  
> 상태 흐름: VILLAGE_TO_WORLD → WAIT_WORLD → WORLD → DOWNLOAD_DATA → SEARCH_POS / WORLDOBJSEARCH → SUMMON_NPC → END

## 1. 메인 / 진입점

| 문서 | 핵심 주제 | 상태 |
|------|-----------|------|
| [[MKSummonNpcManager_SummonNpc_Analysis]] | SUMMON_NPC_STATE 상태 머신 5단계 흐름 | done |
| [[MKSummonNpcManager_Crashlytics_LogGuide]] | NPC 소환 실패 추적 로깅 가이드 | done |

## 2. 상태 핸들러 (`Updata_*`)

| 문서 | 핵심 주제 | 상태 |
|------|-----------|------|
| [[MKSummonNpcManager_Updata_VillageToWorld_Analysis]] | Village→World 전환: 즉시 WAIT_WORLD 전이 | done |
| [[MKSummonNpcManager_Updata_WaitWorld_Analysis]] | FogEnd 콜백 유실 시 12초 폴백 복구 | done |
| [[MKSummonNpcManager_Updata_World_Analysis]] | 월드 진입 후 첫 검증 게이트: CanCreateNPC() 쿨타임/한도 | done |
| [[MKSummonNpcManager_Updata_DownloadDataStart_Analysis]] | DownloadBlockData 코루틴 착수 + DOWNLOAD_DATA_WAIT 전이 | done |
| [[MKSummonNpcManager_Updata_DownloadDataWait_Analysis]] | 코루틴 완료 대기 전용 빈 상태, 콜백에 의해서만 탈출 | done |
| [[MKSummonNpcManager_Updata_DownloadDataSuccess_Analysis]] | ItemID 0 여부로 WORLDOBJSEARCH vs SEARCH_POS 경로 분기 | done |
| [[MKSummonNpcManager_Updata_DownloadDataFail_Analysis]] | 다운로드 실패/SearchEnd 선행 도착 시 실패 팝업 + EndSearchBlock 정리 | done |
| [[MKSummonNpcManager_Updata_WorldObjSearchPosStart_Analysis]] | 아이템 미사용 소환 위치 탐색: 기존 NPC 발견 시 카메라 안내 | done |
| [[MKSummonNpcManager_Updata_SearchPosStart_Analysis]] | 아이템 소환 경로 동기 탐색, RegenDataList, MaxSearchEmptyPosCount=5 | done |
| [[MKSummonNpcManager_Updata_SearchPosStart_multi_Analysis]] | 비동기 코루틴 탐색 버전 _(비활성 — dead code)_ | done |
| [[MKSummonNpcManager_Updata_SearchPosWait_Analysis]] | 비동기 탐색 완료 대기 빈 상태 (현재 진입 경로 없음) | done |
| [[MKSummonNpcManager_Updata_SearchPosSuccess_Analysis]] | 탐색 성공 → SUMMON_NPC_START 전이 브릿지 | done |
| [[MKSummonNpcManager_Updata_SearchPosFail_Analysis]] | 빈 리젠포인트 0개 시 기본 실패 팝업, 재시도 없음 | done |
| [[MKSummonNpcManager_Updata_SummonNpcStart_Analysis]] | 아이템/일반 소환 네트워크 요청 분기점 | done |
| [[MKSummonNpcManager_Updata_SummonNpcWait_Analysis]] | 서버 응답 대기 빈 상태, 타임아웃 없는 영구 잠금 위험 | done |
| [[MKSummonNpcManager_Updata_SummonNpcSuccess_Analysis]] | 소환 성공, SaveCreateNPCTime 쿨타임 저장 | done |
| [[MKSummonNpcManager_Updata_SummonNpcFail_Analysis]] | 서버 소환 실패, rc 코드 미전달 설계 결함 | done |
| [[MKSummonNpcManager_Updata_End_Analysis]] | 모든 경로 최종 정리, SearchEnd/NONE 리셋 | done |

---

## 3. 코루틴 / 콜백 / 유틸

| 문서 | 핵심 주제 | 상태 |
|------|-----------|------|
| [[MKSummonNpcManager_DownloadBlockData_Analysis]] | 블록 정보 다운로드 코루틴, WaitUntil 재사용, 타임아웃 없음 위험 | done |
| [[MKSummonNpcManager_DownloadDataCallBack_Analysis]] | 다운로드 완료 콜백 → 상태 전이 디스패처 | done |
| [[MKSummonNpcManager_VillageToWorld_Analysis]] | FogEnd 콜백 방식 씬 전환, joinOfferExcept 억제 | done |
| [[MKSummonNpcManager_WorldMapLoadComplete_Analysis]] | FogEnd 콜백 실행, WORLD 전이, 폴백 타이머 무효화 | done |
| [[MKSummonNpcManager_OpenSearchWaitPopup_Analysis]] | 탐색 중 터치 차단 + 대기 팝업 표시 | done |
| [[MKSummonNpcManager_CloseSearchWaitPopup_Analysis]] | 터치 복원 + 팝업 닫기, 터치 잠금 고착 위험 | done |
| [[MKSummonNpcManager_SummonNpcCallbackSucc_Analysis]] | 소환 성공 콜백 → SUMMON_NPC_SUCCESS 전이 | done |
| [[MKSummonNpcManager_SummonNpcCallbackFail_Analysis]] | 소환 실패 콜백 → SUMMON_NPC_FAIL 전이, 원인 미전달 | done |
| [[MKSummonNpcManager_SearchEndCallback_Analysis]] | 비동기 블록 탐색 완료 콜백, 재시도 로직 주석처리 (현재 미사용) | done |
| [[MKSummonNpcManager_ShowFailPopup_Analysis]] | 실패 이유 코드별 토스트 메시지 분기 | done |
| [[MKSummonNpcManager_SetFailPopupToEnd_Analysis]] | 모든 실패 경로 통합 종료 처리, END 전이 + 팝업 | done |

---

## 연관 시스템

- [[MKSummonNpcManager_Updata_WaitWorld_Analysis]] ↔ [[MKSummonNpcManager_WorldMapLoadComplete_Analysis]] (FogEnd 콜백 + 폴백 타이머 쌍)
- [[MKSummonNpcManager_Updata_SummonNpcWait_Analysis]] ↔ [[MKSummonNpcManager_SummonNpcCallbackSucc_Analysis]] ↔ [[MKSummonNpcManager_SummonNpcCallbackFail_Analysis]] (소환 대기 → 성공/실패 콜백 쌍)
- [[MKSummonNpcManager_OpenSearchWaitPopup_Analysis]] ↔ [[MKSummonNpcManager_CloseSearchWaitPopup_Analysis]] (터치 잠금 열기/닫기 쌍)
- [[MKSummonNpcManager_Updata_DownloadDataStart_Analysis]] ↔ [[MKSummonNpcManager_DownloadBlockData_Analysis]] ↔ [[MKSummonNpcManager_DownloadDataCallBack_Analysis]] (다운로드 코루틴 3단계 연쇄)
