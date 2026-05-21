---
tags:
  - moc
  - system/world
aliases:
  - World MOC
  - 월드맵 MOC
description: 월드맵 이동 가시성, 카메라 드래그, 블록 검색, Firebase 인프라 MOC
created: 2026-05-20
updated: 2026-05-20
---

# World — 월드맵 / 인프라 MOC

← [[Analysis_Index]]

---

## 월드맵 이동 / 가시성

| 문서 | 핵심 주제 | 상태 |
|------|-----------|------|
| [[World_IsVisibleMoveData_MovePath_Analysis]] | 부대 경로 가시성 필터, 중간 경로 버그 수정 | done |
| [[WorldCameraManager_DragMove_RaidPointBlock_Analysis]] | 드래그 이동 시 균열/제단 영역 충돌 차단 | done |

---

## 블록 / 검색

| 문서 | 핵심 주제 | 상태 |
|------|-----------|------|
| [[WorldManager_RefreshPushBlockJoinLeave_SearchBlockLeak_BugFix]] | NPC 소환 시 searchBlockDict 블록이 leave 처리되어 타인 마을 위 소환 버그 | done |
| [[Fortwar_EarlyEnd_CloudStuck_AWQA6070]] | 크로스 요새전 조기 종료 후 마을 복귀 시 구름 정지 (AWQA-6070) | wip |

---

## 인프라

| 문서 | 핵심 주제 |
|------|-----------|
| [[FirebaseManager_Analysis]] | Firebase 초기화, Crashlytics/Analytics, FCM, iOS 종료 상태 머신 |

---

## 연관 시스템

- [[WorldManager_RefreshPushBlockJoinLeave_SearchBlockLeak_BugFix]] ↔ [[WorldSearchPopup_Analysis]] (searchBlockDict 소실 → 타인 마을 위 소환 근본 원인 공유)
- [[World_IsVisibleMoveData_MovePath_Analysis]] ↔ [[Troop_MOC]] (부대 경로 데이터를 가시성 필터에 소비)
