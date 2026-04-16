---
tags:
  - system/battle
  - status/done
---

# MKSummonNpcManager.Updata_DownloadDataFail 분석

## 개요

`Updata_DownloadDataFail()`는 블록 데이터 다운로드가 실패하거나 코루틴 완료 전에 탐색 종료 신호가 도착한 경우 진입하는 종료 처리 상태다. 실패 팝업을 표시하고 서버 다운로드 요청을 정리한 뒤 흐름을 종료한다.

- **진입 조건**: `DownloadDataCallBack(false)` 호출 시, 또는 `SearchEnd` 신호가 `DOWNLOAD_DATA_WAIT` 완료 전에 도착한 경우
- **전이 방향**: `DOWNLOAD_DATA_FAIL` → `END` (`SetFailPopupToEnd()` 내부에서 전이)

## 주요 책임/구성 요소

1. **추적 로그 기록 (실패 마킹)**: `TraceSummonStep("Updata_DownloadDataFail", "...", null, true)`에서 네 번째 인자 `true`는 실패 플래그를 의미한다. Crashlytics에 실패 이벤트로 기록된다.

2. **실패 팝업 표시 + 종료**: `SetFailPopupToEnd()`를 이유코드 없이 호출해 일반 실패 팝업을 표시하고 `ManagerState = END`로 전이한다.

3. **서버 다운로드 요청 정리**: `WorldSearchPopup.EndSearchBlock()`으로 진행 중이던 서버 블록 데이터 요청을 닫는다. 이 호출을 누락하면 서버 측에서 열린 검색 블록이 잔류해 다음 소환 시도에 영향을 줄 수 있다.

## 데이터/의존성 관계

| 필드/메서드 | 방향 | 설명 |
|------------|------|------|
| `TraceSummonStep(string, string, object, bool)` | 호출 | 실패 플래그(`true`) 포함 Crashlytics 로그 |
| `SetFailPopupToEnd()` | 호출 | 실패 팝업 UI 표시 + `END` 상태 전이 |
| `WorldSearchPopup.EndSearchBlock()` | 호출 | 서버 다운로드 요청 정리 |

## 문제점 및 개선 제안

### SearchEnd 선행 도착 시나리오

`DOWNLOAD_DATA_WAIT` 상태에서 코루틴이 완료되기 전에 외부에서 `SearchEnd` 신호가 도착하면 이 `FAIL` 상태로 진입한다. 이 경우 `DownloadDataCallBack`이 나중에 호출될 수도 있어 상태가 이미 `END`임에도 콜백이 실행되는 엣지케이스가 존재할 수 있다. `DownloadDataCallBack` 내부에서 현재 `ManagerState`를 확인하는 가드가 필요할 수 있다.

## 성능/메모리 영향

단발성 정리 작업이므로 성능 영향 없음. `EndSearchBlock()` 호출이 네트워크 취소 요청을 포함할 수 있으나 이는 필수 정리 작업이다.

## 관련 문서

- [[MKSummonNpcManager_SummonNpc_Analysis]]
- [[MKSummonNpcManager_Updata_DownloadDataWait_Analysis]]
- [[MKSummonNpcManager_Updata_DownloadDataSuccess_Analysis]]
- [[MKSummonNpcManager_Function_Analysis_Index]]
- [[MKSummonNpcManager_Crashlytics_LogGuide]]
