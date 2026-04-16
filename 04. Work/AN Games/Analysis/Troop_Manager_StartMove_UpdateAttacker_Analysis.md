---
tags:
  - system/troop
  - concern/readability
  - concern/performance
  - status/done
---

# Troop_Manager StartMove 추적 재계산 분석

## 개요
- `Troop_Manager.StartMove()`는 실제 이동 명령 시 `MarchLine.UpdateAttacker()`를 호출해 내 군단 경로와 나를 추적 중인 군단의 교차/도착 시간을 재계산한다.
- 문제 케이스(내 군단 이동 중 타군단이 더 빠르게 추적)는 `UpdateAttacker()` 내부 조기 `return`으로 인해 전체 업데이트가 중단될 수 있다.

## 주요 책임/구성 요소
- `Assets/UI/Troop/Troop_Manager.cs`
  - 이동 요청 파라미터 확정(`source_no`, `target_no`, `target_key`, `target_type`, `sally_type`)
  - `data.UpdateDefenser()`, `data.UpdateAttacker()` 호출
- `Assets/Network/Scripts/NetworkTroop.cs` (`MarchLine.UpdateAttacker`)
  - 내 군단의 신규 이동 경로 생성
  - `tracking_slot_id_arr` 기반 추적 군단 목록 순회
  - `crossPath()`로 내 군단/추적군단 동시 경로 재계산
  - `Request_NewMarch()` 서버 반영

## 데이터/의존성 관계
- 입력 데이터
  - 내 군단: `.cursor/custom_data/TroopData.json` 형태
  - 타깃/추적 군단: `.cursor/custom_data/TroopData2.json` 형태
- 핵심 필드
  - `move_path_slot`, `tracking_slot_id_arr`, `target_key`, `target_type`, `end_time`
- 외부 의존
  - `NetworkTroop.instance.Request_GetFleetData(...)`
  - `NetworkTroop.instance.Request_NewMarch(...)`
  - `Troop_Manager.crossPath(...)`

## 문제점 및 개선 제안
- 문제점
  - `UpdateAttacker()` 순회 중 특정 추적자 상태(`BATTLE`, `IS_RETURN` 직전)에서 함수 전체 `return`이 발생.
  - 결과적으로 내 군단의 새 이동 경로 반영 자체가 중단되고, 다른 추적자 재계산도 생략될 수 있음.
  - `StartMove()`의 PVP 분기에서도 추적군이 도착 직전이면 루프 내부 `return`으로 `data.UpdateAttacker(users)` 호출 자체가 생략됨.
  - 로그(`TroopData.txt`)에서 `ATTACKER UPDATE 15483//782` 이후 내 군단(782)의 3051 전송 없이 타깃군(55) 3051만 전송되는 현상과 연결됨.
- 개선
  - 전체 중단(`return`) 대신 해당 추적자만 `continue`로 스킵.
  - 전체 갱신 파이프라인(`crossPath`, `Request_NewMarch`)은 계속 진행.
  - `StartMove()` PVP 분기의 도착직전 체크도 동일하게 `continue`로 변경해 내 군단/추적군 재계산 경로를 보장.
  - `UpdateAttacker()`의 `Request_GetFleetData(...)` 호출은 `UpdateDefenser()`와 동시 발생 시 overlap 병합으로 콜백 누락 가능성이 있어 `_isOverlapBlock=false`로 변경해 콜백 실행을 보장.

## 최종 원인(확정)
- 단일 원인이 아니라 2단계 누락이 겹친 케이스였다.
- 1차: 루프 내부 `return`으로 재계산이 중단되는 분기(`StartMove`/`UpdateAttacker`)가 존재.
- 2차: 위 분기 보정 후에도 `UpdateDefenser`와 `UpdateAttacker`의 동시 `3057` 조회가 overlap 병합되면서 `UpdateAttacker` 콜백이 실행되지 않아 내 군단 `3051` 전송이 누락될 수 있음.

## 최종 적용 변경점
- `Assets/UI/Troop/Troop_Manager.cs`
  - `FLEET_SALLY_PVP` 분기에서 도착 임박 추적군 처리: `return -> continue`
  - `StartMove` 입력/해결값 추적 로그 추가
- `Assets/Network/Scripts/NetworkTroop.cs`
  - `UpdateAttacker` 추적군 순회의 조기 종료: `return -> continue`
  - 내 군단 전송 보장용 `RequestMyMarchIfNeeded()` 로직 추가
  - `UpdateAttacker` 내부 `Request_GetFleetData(..., false)`로 overlap 병합 비활성화(콜백 보장)
  - 단계별 `[TroopTrace][UpdateAttacker:*]` 로그 추가

## 검증 결과
- 재현 로그에서 `StartMove:Input`과 `ResolvedBeforeSwitch`로 의도 목표/적용 목표가 분리 확인됨.
- `UpdateAttacker` 진입 후 내 군단 경로 계산(`SetMoveTime`)이 수행되는 것 확인.
- 이후 누락 원인이 콜백 병합임을 확인했고, overlap 비활성화 변경으로 최종 수정 완료.

## 게임플레이/성능/메모리 영향
- 게임플레이
  - 내 군단 재이동 시 경로 갱신 누락 현상 완화.
  - 추적 군단 동기화 실패(따라오지 않음) 발생 확률 감소.
- 성능
  - `continue` 전환으로 루프가 유지되며 추가 연산은 미미.
  - 오히려 재시도/재클릭으로 인한 반복 호출 감소 가능.
- 메모리
  - 신규 할당 구조 변화 없음(영향 미미).

## 추가 디버그 로그 포인트
- `[TroopTrace][StartMove:PVP]`
  - PVP 분기 진입 시 요청 유저 목록, 타깃/출발 정보 출력
  - 도착임박 추적군 스킵 사유와 대상 출력
  - `UpdateAttacker()` 호출 직전 핵심 필드 출력
- `[TroopTrace][UpdateAttacker:*]`
  - Enter/Callback/Tracking/RequestMyMarch/Fallback 단계를 분리 출력
  - 실제 `Request_NewMarch(myMarchLine)` 요청 여부와 스킵 사유를 명시

## 관련 문서
- [[Troop_Manager_crossPath_Analysis]]
- [[NetworkTroop_UpdateAttacker_Analysis]]
- [[UpdateAttacker_3057_RaceCondition_BugFix]] — 3057/3051 레이스 컨디션으로 인한 방어자 origin_no desync 버그 수정
