---
tags:
  - moc
  - system/troop
aliases:
  - Troop MOC
  - 부대 시스템 MOC
description: 부대 이동 코어(TroopManager), 서버 동기화(NetworkTroop), 시각화(TroopLOD), 데이터(MarchLine) 전체 Troop 시스템 MOC
created: 2026-05-20
updated: 2026-05-20
---

# Troop — 부대 시스템 MOC

← [[Analysis_Index]]

> 부대(Troop) 시스템은 세 레이어로 구성된다:
> - **코어** — 경로 계산·이동 로직 (TroopManager, NetworkTroop)
> - **데이터 레이어** — 행군선 이동 슬롯·타이밍 ([[MarchLine_MOC]])
> - **시각 표현 레이어** — 월드맵 오브젝트 렌더링 ([[TroopLOD_Function_Analysis_Index]])

---

## 서브시스템

| 서브시스템 | 설명 | MOC |
|-----------|------|-----|
| TroopLOD | 월드맵 부대 시각 표현 (오브젝트·애니메이션·LOD) | [[TroopLOD_Function_Analysis_Index]] |
| MarchLine | 행군선 데이터 레이어 및 PathLine 버그 픽스 | [[MarchLine_MOC]] |

---

## TroopManager — 경로/이동 코어

| 문서 | 핵심 주제 | 상태 |
|------|-----------|------|
| [[Troop_Manager_MakePath_Analysis]] | A* 경로 탐색, NavMesh, 게이트 처리 | - |
| [[Troop_Manager_MakeCrossPosition_Analysis]] | 이진탐색 기반 요격 지점 계산 | - |
| [[Troop_Manager_crossPath_Analysis]] | 요격/추적 기하학, AWQA-6370 target_type 미초기화 수정 | done |
| [[Troop_Manager_StartMove_UpdateAttacker_Analysis]] | 이동 업데이트 return→continue 수정, 콜백 보장 | done |

---

## NetworkTroop / UpdateAttacker — 서버 동기화

| 문서 | 핵심 주제 | 상태 |
|------|-----------|------|
| [[NetworkTroop_UpdateAttacker_Analysis]] | 추적 재계산, 콜백 중첩, 레이스 컨디션 분석 | done |
| [[UpdateAttacker_3057_RaceCondition_BugFix]] | 3057 응답 stale 데이터 덮어쓰기 수정 | done |
| [[TroopTrace_StartMove_UpdateAttacker_LogGuide]] | [TroopTrace] 디버그 로깅 가이드 | done |
| [[TroopData_15483_vs_12885_PassThrough_Analysis]] | 공격자-방어자 통과 시나리오 분석 | done |

---

## 기능 티켓 (AWPL)

| 문서 | 핵심 주제 | 상태 |
|------|-----------|------|
| [[AWPL-7423_PVP_NavMesh_Outside_Move_Analysis]] | NavMesh 밖 전투 방지 — NRE/IOE 크래시, 이진탐색 fallback | done |
| [[AWPL-7595_RallyLeader_Succession_RetreatPath_Analysis]] | 집결장 전멸 후 승계 시 퇴각 경로 추종 버그 | done |

---

## 연관 시스템

- [[Troop_Manager_MakePath_Analysis]] ↔ [[AWPL-7423_PVP_NavMesh_Outside_Move_Analysis]] (NavMesh A* 경로 탐색 로직 공유)
- [[NetworkTroop_UpdateAttacker_Analysis]] ↔ [[UpdateAttacker_3057_RaceCondition_BugFix]] (UpdateAttacker 콜백 레이스 컨디션 근본 원인 공유)
- [[TroopData_15483_vs_12885_PassThrough_Analysis]] ↔ [[battle_log_analysis]] (동일 전투 키 15483 타임라인 공유)
- [[AWPL-7595_RallyLeader_Succession_RetreatPath_Analysis]] ↔ [[AWQA-6260_RallyParticipant_PathLine_DuplicateLine_BugFix_Analysis]] (집결 리더 승계 시 경로 처리 공유)
