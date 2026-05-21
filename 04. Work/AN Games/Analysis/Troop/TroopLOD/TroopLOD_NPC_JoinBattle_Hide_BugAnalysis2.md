---
tags:
  - analysis
  - system/troop
  - troop-lod
  - bug-fix
  - npc
aliases:
  - NPC JoinBattle Hide 2
  - NPC 전투 참여 숨김 버그 2차 분석
description: NPC 전투 참여 시 부대 오브젝트 숨김 처리 2차 분석 — fleet_battle_msg sq 배열 분석 및 Hide 타이밍 버그
status: partial-recovery
created: 2026-05-20
updated: 2026-05-20
---

← [[TroopLOD_Function_Analysis_Index]]

# TroopLOD NPC JoinBattle Hide 버그 분석 2

> [!warning] 부분 복구 — 내용 손실
> 이 문서는 파일 손상으로 인해 요약·선행 문서·로그 분석 도입부만 복구되었습니다. 로그 상세 분석 및 수정 방법은 유실되었습니다.

---

## 요약

NPC가 전투에 참여할 때 `fleet_battle_msg` 소켓 수신 후 부대 오브젝트를 Hide 처리해야 하나, `sq` 배열의 순서 또는 누락으로 인해 Hide 타이밍이 어긋나 오브젝트가 잔존하는 버그 2차 분석.

> [!info] 선행 문서
> 1차 분석: [[TroopLOD_NPC_JoinBattle_Hide_BugAnalysis]] — 기본 Hide 호출 경로 및 1차 원인 파악

---

## 로그에서 확인한 사실

### fleet_battle_msg sq 배열 분석 (복구된 범위)

`fleet_battle_msg` 소켓 페이로드의 `sq` 배열은 전투에 참여하는 부대 시퀀스 번호 목록을 포함한다. NPC 부대가 배열에 포함되는 조건과 누락되는 조건이 Hide 호출 여부를 결정한다.

| sq 상태 | Hide 호출 | 결과 |
|---------|-----------|------|
| sq 배열에 포함 | 호출됨 | 정상 숨김 |
| sq 배열 누락 | 미호출 | 오브젝트 잔존 (버그) |

---

> [!note] 복구 필요 섹션
> - § sq 누락 발생 조건 상세 분석
> - § 서버 측 페이로드 생성 로직 vs 클라이언트 처리 로직
> - § 수정 방법 및 검증 로그
