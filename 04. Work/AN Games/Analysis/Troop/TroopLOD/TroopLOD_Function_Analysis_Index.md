---
tags:
  - moc
  - system/troop
aliases:
  - TroopLOD MOC
  - 부대 시각화 MOC
description: 월드맵 부대 오브젝트(TroopLOD) 전체 함수 분석 인덱스 — 라이프사이클, LOD, 애니메이션, 전투 위치, 버그 픽스
created: 2026-05-20
updated: 2026-05-20
---

# TroopLOD — 월드맵 시각 표현 레이어 MOC

← [[Troop_MOC]]

> TroopLOD는 월드맵에서 부대를 오브젝트로 표현하는 시각 레이어다.  
> 행군선 데이터([[MarchLine_MOC]])를 소비해 이동·회전·LOD 전환·전투 이펙트를 처리한다.

---

## 1. 라이프사이클 / 편성 초기화

| 문서 | 핵심 주제 | 상태 |
|------|-----------|------|
| [[TroopLOD_Lifecycle_Formation_Analysis]] | Awake/Start/OnDestroy 라이프사이클, 진형 계산 | done |

---

## 2. 유닛 생성 / LOD / 애니메이션

| 문서 | 핵심 주제 | 상태 |
|------|-----------|------|
| [[TroopLOD_UnitSpawn_LOD_Animation_Analysis]] | 유닛 생성, LOD 단계별 표시, 애니메이션 전환, 비동기 콜백 애니 미적용 버그 수정 | done |
| [[TroopLOD_MakeUnits_Duplicate_Analysis]] | fleet_battle_end→fleet_sally 이중 호출 → 고아 오브젝트 누적 (PopAsync 콜백 덮어쓰기) | done |
| [[TroopLOD_simple_hero_icon_Lifecycle_Analysis]] | SpriteRenderer 영웅 아이콘 라이프사이클 | done |

---

## 3. 이동 / 회전 / 경로 추적

| 문서 | 핵심 주제 | 상태 |
|------|-----------|------|
| [[TroopLOD_Movement_Rotation_Path_Analysis]] | 프레임 루프 이동·회전, 경로 시각화 | done |
| [[TroopLOD_BattleImminent_PassThrough_Implementation]] | 전투 임박 시 클라이언트측 소프트 클램프 | done |

---

## 4. 선택 / 타겟 마크 / UI 상호작용

| 문서 | 핵심 주제 | 상태 |
|------|-----------|------|
| [[TroopLOD_Selection_TargetMark_Analysis]] | 선택 상태(0/1/2), 타겟 아이콘 전략, DOTween 루프 | done |

---

## 5. 전투 이펙트 / 피해 텍스트

| 문서 | 핵심 주제 | 상태 |
|------|-----------|------|
| [[TroopLOD_CombatEffect_Analysis]] | 전투 이펙트 코루틴 파이프라인, GC 이슈 | done |

---

## 6. DTO 동기화 파이프라인

| 문서 | 핵심 주제 | 상태 |
|------|-----------|------|
| [[TroopLOD_SetTroopSlotData_Analysis]] | 500줄+ DTO→월드 동기화 모놀리식 함수 분석 | done |
| [[TroopLOD_DTO_SyncPipeline_Analysis]] | 6단계 DTO→월드 상태 파이프라인 | done |

---

## 7. 전투 위치 / 오버랩

| 문서 | 핵심 주제 | 상태 |
|------|-----------|------|
| [[TroopLOD_BattleOverlap_Resolve_Analysis]] | 공격자-방어자 위치 겹침 오프셋 충돌 회피 | done |
| [[TroopLOD_BattlePosition_3rd_Refinement_Analysis]] | 전투 위치 3·4차 고도화 — origin_no 필터, path[0] 변조, dir=zero 폴백 | done |

---

## 8. 버그 조사

| 문서 | 핵심 주제 | 상태 |
|------|-----------|------|
| [[TroopLOD_IS_ANNIHILATION_Grey_BugInvestigation]] | IS_ANNIHILATION 오판정 Grey 렌더링 — PopAsync 콜백 로컬 캡처 방어 코드 | done |
| [[TroopLOD_NPC_JoinBattle_Hide_BugAnalysis]] | 새 블록 join 시 NPC 전투 난입 군단 HIDE 미적용 | wip |
| [[TroopLOD_NPC_JoinBattle_Hide_BugAnalysis2]] | NPC 난입 HIDE 2차 분석 — fleet_battle_msg sq 배열, 연속 SetTroopSlotData 덮어쓰기 | wip |

---

## 연관 시스템

- [[TroopLOD_SetTroopSlotData_Analysis]] ↔ [[TroopLOD_DTO_SyncPipeline_Analysis]] (DTO 동기화 흐름 공유)
- [[TroopLOD_MakeUnits_Duplicate_Analysis]] ↔ [[TroopLOD_UnitSpawn_LOD_Animation_Analysis]] (PopAsync 비동기 콜백 레이스 근본 원인 공유)
- [[TroopLOD_IS_ANNIHILATION_Grey_BugInvestigation]] ↔ [[TroopLOD_MakeUnits_Duplicate_Analysis]] (SetTroopSlotData 복구 감지 + 콜백 덮어쓰기 관련)
- [[TroopLOD_NPC_JoinBattle_Hide_BugAnalysis]] ↔ [[TroopLOD_NPC_JoinBattle_Hide_BugAnalysis2]] (동일 버그 1차·2차 연속 분석)
- [[TroopLOD_BattleOverlap_Resolve_Analysis]] ↔ [[TroopLOD_BattlePosition_3rd_Refinement_Analysis]] (전투 위치 오프셋 계산 공유)
