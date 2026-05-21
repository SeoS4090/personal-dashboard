---
tags:
  - moc
  - system/troop
aliases:
  - 행군선 MOC
  - MarchLine Map of Content
description: 행군선(PathLine) 데이터 레이어 아키텍처 및 집결·PathLine 버그 픽스 MOC
created: 2026-05-20
updated: 2026-05-20
---

# MarchLine — 행군선 데이터 레이어 MOC

← [[Troop_MOC]]

> 행군선은 부대가 월드맵에서 이동할 때 경로를 표시하는 데이터 레이어다.  
> 렌더링 레이어([[TroopLOD_Function_Analysis_Index]])와 분리되어 이동 슬롯·타이밍 데이터를 관리한다.

---

## 아키텍처

| 문서 | 핵심 주제 |
|------|-----------|
| [[marchline_system_analysis]] | MarchLine 전체 아키텍처: 데이터/Corps/Div/UI/LOD 5계층 |

---

## 버그 픽스

| 문서 | 핵심 주제 | 상태 |
|------|-----------|------|
| [[AWQA-6260_RallyParticipant_PathLine_DuplicateLine_BugFix_Analysis]] | 집결 참여자 리더 승계 후 PathLine 중복·오표시 3차 수정 | done |
| [[AWQA-6325_DefenseSupport_Annihilated_Defeat_Effect_BugFix]] | 방어지원 전멸 복귀 중 거점 전투 종료 시 Defeat 이펙트 오재생 | done |
| [[AWQA-6326_RallyJoin_CancelNRE_BugFix]] | 집결 2회 참여 시 퇴각 버튼 무반응 NRE | done |
| [[AWQA-6371_FortWar_TroopFlicker_BugAnalysis]] | 요새전 귀환 중 fleet_battle/fleet_sally 이중 순간이동 깜빡임 | wip |
| [[AWQA-6379_PathLine_PreCorrection_FlickerFix_Analysis]] | 출병 즉시 선처리 시 sally_type 누락으로 PathLine flicker | done |

---

## 연관 시스템

- [[TroopLOD_Function_Analysis_Index]] — 행군선 데이터를 시각화하는 렌더링 레이어
- [[marchline_system_analysis]] ↔ [[AWQA-6260_RallyParticipant_PathLine_DuplicateLine_BugFix_Analysis]] (IS_RETURN 경로 분기 공유)
- [[AWQA-6371_FortWar_TroopFlicker_BugAnalysis]] ↔ [[AWQA-6379_PathLine_PreCorrection_FlickerFix_Analysis]] (origin_no/sally_type 덮어쓰기 근본 원인 공유)
