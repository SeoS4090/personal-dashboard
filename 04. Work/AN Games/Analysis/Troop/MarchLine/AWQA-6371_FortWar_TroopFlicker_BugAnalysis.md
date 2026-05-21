---
tags:
  - analysis
  - system/troop
  - bug-fix
  - march-line
aliases:
  - AWQA-6371
  - FortWar TroopFlicker 버그
description: 요새전에서 fleet_battle_msg → origin_no 덮어쓰기 + fleet_sally → 복원 시 부대 오브젝트가 두 번 깜빡이는 버그 분석
status: partial-recovery
created: 2026-05-20
updated: 2026-05-20
---

← [[MarchLine_MOC]]

# AWQA-6371 요새전 부대 깜빡임(TroopFlicker) 버그 분석

> [!warning] 부분 복구 — 내용 손실
> 이 문서는 파일 손상으로 인해 요약 섹션만 복구되었습니다. 상세 원인 코드, 수정 방법, 검증 내용은 유실되었습니다.

---

## 요약

| 항목 | 내용 |
|------|------|
| 티켓 | AWQA-6371 |
| 현상 | 요새전 진입 시 부대 오브젝트가 두 번 깜빡임 |
| 근본 원인 | `fleet_battle_msg` 소켓 수신 시 `origin_no` 덮어쓰기 → `fleet_sally` 수신 시 복원, 두 단계에서 각각 LOD 갱신 트리거 |

### 깜빡임 발생 시퀀스 (복구된 범위)

```
1. fleet_battle_msg 수신
   └─ origin_no 덮어쓰기 → TroopLOD 갱신 → 1차 깜빡임

2. fleet_sally 수신
   └─ origin_no 복원 → TroopLOD 재갱신 → 2차 깜빡임
```

### 연관 문서

- [[AWQA-6379_PathLine_PreCorrection_FlickerFix_Analysis]] — 동일 `origin_no`/`sally_type` 루트 원인 공유, 픽스 방향 참고

---

> [!note] 복구 필요 섹션
> - § 원인 코드 (fleet_battle_msg 핸들러 내 덮어쓰기 로직)
> - § 수정 방법 (갱신 배치 처리 또는 dirty flag)
> - § 검증 로그
