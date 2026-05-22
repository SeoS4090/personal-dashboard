---
tags:
  - system/troop
  - system/ui
  - concern/readability
  - status/done
aliases:
  - TroopManager 개요
description: Troop_Manager.cs 전체 클래스 아키텍처 개요 — 8개 책임 영역 분류, 의존성, 문제점
created: 2026-05-21
updated: 2026-05-21
---

# Troop_Manager — 전체 클래스 개요 분석

## 요약

### 무슨 기능인가?

부대를 움직이는 모든 행동의 시작점이다. 플레이어가 지도에서 군단을 탭하거나 출전 버튼을 누르면 이 매니저가 가장 먼저 호출된다. 출전 가능 여부 체크 → 팝업 열기 → 경로 계산 → 버프 계산 → 실제 행군 실행까지 전 과정을 조율한다.

### 어떻게 구성되어 있나?

| 영역 | 핵심 메서드 | 설명 |
|------|-----------|------|
| 타입 매핑 | `MarchTypeToTargetType`, `MarchTypeToSallyType` | MARCH_TYPE → TARGET_TYPE / SALLY_TYPE 변환 |
| UI 진입점 | `ShowTroopMain`, `ShowTroopSend`, `ShowScoutSend` | 출전/정찰 팝업 열기 전 사전 검증 |
| 경로 탐색 | `MakePath`, `CheckCanMovePos` | NavMesh A* 경로 계산 |
| 전투 추적 | `MakeCrossPosition`, `crossPath`, `Circles` | 이동 중 군단 요격 지점 계산 |
| 출전 실행 | `StartMove` | 실제 행군 API 요청 전 10+ Guard 체인 |
| 버프 계산 | `SortHeroBuff`, `Hero_Buff_Skill_N_Trait`, `Troop_Buffs` | 영웅·특성·장비·마을 버프 합산 |
| 컴패니언 | `Comp_Buff`, `GetCompSkills` | 컴패니언 스킬 버프 계산 |
| 집결 데이터 | `SetDataToCreate` | 집결 생성 시 `RallyCreateData` 초기화 |

### 현재 상태는?

해결 완료 — 주요 기능 정상 동작. 단, 클래스가 4,428줄로 모놀리식 구조이며 책임이 과도하게 집중되어 있음.

> **한 줄 요약**: "4X 전략게임 군단 행동 전체 파이프라인의 중앙 허브 — 4,428줄 모놀리식 Singleton."

---

## 클래스 위치 및 구조

```
Assets/UI/Troop/Troop_Manager.cs   (4,428줄)
└── MonoBehaviour + Singleton (instance)
    ├── ScoutPrefab, Troop_Poopup (popups) — Inspector 연결
    ├── MARCH_TYPE enum (30개 타입, 코드값 3003~999999)
    ├── TARGET_TYPE enum (10개 타입)
    ├── RallyCreateData class
    └── CHECK_FORCE_ATTACK = 1.414f (√2, 인접 강제 공격 거리)
```

---

## MARCH_TYPE 분류

```
이동 — RETURN, BATTLE_RETURN, MOVE_GROUND, DRAG_MOVE_GROUND
채집 — GATHER_RESOURCE, DRAG_GATHER_RESOURCE
전투 — BATTLE_NPC, BATTLE_USER_TROOP, BATTLE_USER_RESOURCE, BATTLE_USER_CITY
PVP  — PVP_USER_BREAK_IN, ADD_RALLY
정찰 — SCOUT_ENEMY_CITY/TROOP/RESOURCE/RALLY/ALLYCENTER/TOWER/ADDON_TOWER
지원 — SUPPORT_CITY, SUPPORT_TOWER (+ RETURN 버전)
집결 — CREATE_RALLY, JOIN_RALLY
```

DRAG_ 접두사 = 드래그 행군(빠른 출전 UI 경유)

---

## 주요 의존성

| 의존 대상 | 용도 |
|----------|------|
| `MKNavMeshManager` | 경로 탐색 (FindPath, GetSectorIndex) |
| `NetworkTroop` | 군단 데이터 요청, 행군 API |
| `NetworkAlly` | 연맹 관문 DTO, 집결 멤버 |
| `WorldManager` | 맵 오브젝트 딕셔너리 |
| `MKUserDataModel` | 영웅·병사·장비·버프 데이터 |
| `MKGameDataModel` | 게임 테이블 데이터 |
| `FortWarDataManager` | 요새전 NavMesh 재초기화 |
| `AllyManager` | 연맹원 여부, 집결 정보 |
| `TroopFormation` | 출전 편성 팝업 |
| `Troop_Send` | 빠른 출전 팝업 |

---

## 문제점 및 개선 제안

### 1. 4,428줄 모놀리식 클래스 (#concern/readability)

책임이 8개 영역에 걸쳐 있어 단일 책임 원칙 위반이 심각하다. `StartMove`만 1,150줄이 넘는다.

**제안**: 버프 계산 → `TroopBuffCalculator`, UI 진입점 → `TroopUIController`, 경로 → `TroopPathFinder` 분리.

### 2. `isNavMeshReinitAttempted` static 플래그 (#concern/bug)

`MakePath`의 NavMesh 재초기화 플래그가 static. 장면 전환 시 이전 시도 실패 상태가 남아 다음 경로 탐색 시 null 반환될 수 있다.

### 3. LINQ 다중 조인 버프 계산 (#concern/performance)

`Hero_Buff_Skill_N_Trait`, `Troop_Buffs` 등에서 영웅·특성·장비 각각 LINQ 멀티 조인 쿼리를 매 출전 팝업 열기마다 실행한다. 영웅 수가 많을수록 GC 압력이 높아진다.

→ 자세한 분석: [[Troop_Manager_BuffSystem_Analysis]]

### 4. ShowTroopMain/ShowScoutSend 중복 검증 로직

두 메서드 모두 관문/섹터 이동 가능 여부를 동일한 코드로 중복 체크한다.

→ 자세한 분석: [[Troop_Manager_UIEntryPoints_Analysis]]

---

## 기존 상세 분석 문서

| 문서 | 대상 메서드 |
|------|-----------|
| [[Troop_Manager_MakePath_Analysis]] | `MakePath` |
| [[Troop_Manager_MakeCrossPosition_Analysis]] | `MakeCrossPosition` |
| [[Troop_Manager_crossPath_Analysis]] | `crossPath` |
| [[Troop_Manager_StartMove_Full_Analysis]] | `StartMove` (전체) |
| [[Troop_Manager_StartMove_UpdateAttacker_Analysis]] | `StartMove` (UpdateAttacker 수정) |
| [[Troop_Manager_UIEntryPoints_Analysis]] | `ShowTroopMain`, `ShowTroopSend`, `ShowScoutSend` |
| [[Troop_Manager_BuffSystem_Analysis]] | 버프 계산 시스템 6개 메서드 |
