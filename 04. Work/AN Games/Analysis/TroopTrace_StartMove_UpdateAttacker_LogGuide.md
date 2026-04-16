---
tags:
  - system/troop
  - concern/readability
  - concern/performance
  - status/done
---

# TroopTrace StartMove/UpdateAttacker 로그 가이드

## 개요
- `StartMove`와 `UpdateAttacker`의 실제 입력, 분기 결과, 서버 전송 보장 여부를 한 번에 추적하기 위해 디버그 로그 체계를 추가했다.
- 목적은 "의도한 이동 목표"와 "실제 전송된 목표"가 어긋나는 지점을 빠르게 찾는 것이다.

## 신규 로직/함수
- `Assets/Network/Scripts/NetworkTroop.cs`
  - `MarchLine.UpdateAttacker()` 내부 로컬 함수: `RequestMyMarchIfNeeded()`
  - 역할: 내 군단 `Request_NewMarch(myMarchLine)` 전송을 단일 경로로 보장하고 중복 전송을 방지
- `Assets/UI/Troop/Troop_Manager.cs`
  - `StartMove()` 입력/해결값 추적 로그 추가
  - PVP 분기의 추적군 스킵 사유 로그 추가

## 로그 키와 해석
- `[TroopTrace][StartMove:Input]`
  - 유저 입력 시점의 원본 군단(`my*`)과 요청 파라미터(`req*`) 확인
- `[TroopTrace][StartMove:ResolvedBeforeSwitch]`
  - 분기 보정 후 최종 적용값(`resolved*`) 확인
- `[TroopTrace][StartMove:PVP] ...`
  - PVP 분기 내 타깃/추적군 데이터 로드 및 스킵 사유 확인
- `[TroopTrace][UpdateAttacker:Enter]`
  - `UpdateAttacker` 진입 상태(슬롯, 타깃, 추적군 수, updatePath) 확인
- `[TroopTrace][UpdateAttacker:Tracking]`
  - 추적군 후보 수/제거 수 확인
- `[TroopTrace][UpdateAttacker:RequestMyMarch]`
  - 내 군단 `Request_NewMarch` 실제 호출 여부와 스킵 사유 확인
- `[TroopTrace][UpdateAttacker:Fallback]`
  - 콜백 말미 보장 호출 수행 여부 확인

## 데이터/의존성 관계
- 입력 데이터
  - `.cursor/custom_data/TroopData*.json`, `.cursor/custom_data/TroopData.txt`
- 연계 API
  - `Request_GetFleetData(3057)` 조회
  - `Request_NewMarch(3051)` 갱신
- 관찰 포인트
  - 같은 프레임의 `3057` 중복 조회로 인한 overlap 병합 여부
  - `UpdateDefenser`와 `UpdateAttacker`의 콜백 실행 순서

## 문제점 및 개선 제안
- 문제점
  - 기존 로그는 호출 스택 중심이라 "입력값 -> 해결값 -> 전송값" 연계가 약함
  - 비동기 중첩 시 콜백 누락을 로그만으로 추론하기 어려움
- 개선 제안
  - 운영 빌드에서 비활성화 가능한 로그 레벨 분리(define symbol)
  - `Request_NewMarch` 공통 래퍼에서 요청 페이로드 핵심 필드만 표준 포맷 출력

## 게임플레이/성능/메모리 영향
- 게임플레이
  - 재현 불가 이슈의 원인 탐지 시간이 단축되어 수정 리드타임 감소
- 성능
  - 디버그 로그 증가로 에디터/개발 빌드에서 로그 I/O 비용 상승 가능
- 메모리
  - 문자열 포맷 비용이 있으나 릴리즈 빌드 제외 시 영향 미미

## 관련 문서
- [[Troop_Manager_StartMove_UpdateAttacker_Analysis]]
- [[marchline_system_analysis]]
- [[UpdateAttacker_3057_RaceCondition_BugFix]] — 3057/3051 레이스 컨디션 버그 (로그 기반 타임라인 분석)
