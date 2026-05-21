---
tags:
  - system/battle
  - status/done
aliases:
  - MKSummonNpcManager.Updata_World 분석
description: `Updata_World()`는 월드 씬에 성공적으로 진입한 직후 실행되는 **첫 번째 검증 게이트**다. NPC 소환 가능 여부(쿨타임, 일일 한도 등)를 판단하고, 통과 시 데이터 다운로드 단계로 진행하며 ...
created: 2026-05-20
updated: 2026-05-20
---

← [[MKSummonNpcManager_Function_Analysis_Index]]


# MKSummonNpcManager.Updata_World 분석

## 개요

`Updata_World()`는 월드 씬에 성공적으로 진입한 직후 실행되는 **첫 번째 검증 게이트**다. NPC 소환 가능 여부(쿨타임, 일일 한도 등)를 판단하고, 통과 시 데이터 다운로드 단계로 진행하며 탐색 대기 팝업을 연다.

- **진입 조건**: `WAIT_WORLD` 상태에서 월드 씬 전환이 완료된 후 (`WorldMapLoadComplete()` 콜백 경유 또는 폴백 타임아웃 후)
- **전이 방향**: `WORLD` → `DOWNLOAD_DATA_START` (성공) 또는 `END` (소환 불가)

## 주요 책임/구성 요소

1. **추적 로그 기록**: `TraceSummonStep("Updata_World", "Enter world flow and open wait popup")`으로 상태 진입 사실을 기록한다.

2. **즉시 상태 전이**: `ManagerState = SUMMON_NPC_STATE.DOWNLOAD_DATA_START`로 선제 전환한다. 이후 실패 분기에서 `SetFailPopupToEnd()`가 최종 상태를 `END`로 덮어쓴다.

3. **NPC 생성 타임 로드**: `WorldSearchPopup.LoadCreateNPCTime()`으로 마지막 소환 시각 등 쿨타임 관련 데이터를 로드한다.

4. **생성 가능 여부 검증**: `WorldSearchPopup.CanCreateNPC()`로 쿨타임 또는 일일 소환 한도 초과 여부를 확인한다. 실패 시:
   - `SetFailPopupToEnd(1)` — 이유코드 1(쿨타임/제한)로 실패 팝업 표시 후 종료
   - 이후 코드 실행 중단 (`return`)

5. **탐색 대기 팝업 오픈**: `OpenSearchWaitPopup()`으로 사용자에게 탐색 중임을 알리는 팝업을 표시한다. 이후 데이터 다운로드가 완료될 때까지 팝업이 유지된다.

## 데이터/의존성 관계

| 필드/시스템 | 방향 | 설명 |
|------------|------|------|
| `ManagerState` | 쓰기 | `DOWNLOAD_DATA_START`로 선제 전환 |
| `WorldSearchPopup.LoadCreateNPCTime()` | 호출 | 쿨타임 데이터 로드 |
| `WorldSearchPopup.CanCreateNPC()` | 읽기 | 소환 가능 여부 불리언 |
| `SetFailPopupToEnd(int)` | 호출 | 실패 팝업 + `END` 전이 (이유코드 1) |
| `OpenSearchWaitPopup()` | 호출 | 탐색 대기 UI 표시 |
| `TraceSummonStep()` | 호출 | Crashlytics 추적 로그 |

## 문제점 및 개선 제안

### 상태 전이 선후 관계

`ManagerState = DOWNLOAD_DATA_START`를 먼저 설정한 후 실패 여부를 검사하는 구조다. 실패 시 `SetFailPopupToEnd()`가 상태를 덮어쓰므로 결과적으로는 문제가 없지만, 상태 전이를 실패 검사 이후에 배치하면 코드 흐름이 더 명확해진다.

## 성능/메모리 영향

로직이 단순하고 한 프레임에서 완결된다. `LoadCreateNPCTime()`이 파일 I/O 또는 로컬 캐시를 읽을 경우 경미한 비용이 있을 수 있으나 게임 진행 흐름상 무시 가능한 수준이다.

## 관련 문서

- [[MKSummonNpcManager_SummonNpc_Analysis]]
- [[MKSummonNpcManager_Updata_WaitWorld_Analysis]]
- [[MKSummonNpcManager_Updata_DownloadDataStart_Analysis]]
- [[MKSummonNpcManager_Function_Analysis_Index]]


