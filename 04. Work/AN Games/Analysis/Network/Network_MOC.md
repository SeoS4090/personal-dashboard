---
tags:
  - moc
  - system/network
aliases:
  - Network MOC
  - 네트워크 MOC
description: 서버 데이터 동기화, 캐시 라이프사이클, 연맹전 네트워크 처리 분석 MOC
created: 2026-05-20
updated: 2026-05-20
---

# Network — 네트워크/동기화 MOC

← [[Analysis_Index]]

> 서버 API 응답 처리, Dictionary 캐시 라이프사이클, DTO 계약 관련 분석.  
> 부대 서버 동기화는 → [[Troop_MOC]] (NetworkTroop 섹션)

---

## 캐시 / 라이프사이클

| 문서 | 핵심 주제 | 상태 |
|------|-----------|------|
| [[NetworkAlly_reinforce_memberList_Lifecycle]] | 방어 지원 멤버 리스트 Dictionary 캐시 라이프사이클 | done |

---

## DTO / 계약

| 문서 | 핵심 주제 | 상태 |
|------|-----------|------|
| [[WorldSocketDataModel_GetCurrentDetailPos_Analysis]] | BATTLE 상태 GetCurrentDetailPos 계약 변경, ComputeLastSlotOffsetPos 추가 | done |

---

## 연맹전 네트워크

| 문서 | 핵심 주제 | 상태 |
|------|-----------|------|
| [[Ally_war_rally_DefJoin_corps_Null_Incident_Analysis]] | DefJoin DTO corps null 참조 인시던트 분석 및 수정 | done |
| [[Ally_war_rally_TroopData_Analysis]] | 6슬롯 부대 구성 UI 렌더링 헬퍼 | - |

---

## 연관 시스템

- [[WorldSocketDataModel_GetCurrentDetailPos_Analysis]] ↔ [[BlockData_BattleFleet_Status2_BugFix_Analysis]] (GetCurrentDetailPos BATTLE 상태 계약 변경 공유)
- [[Ally_war_rally_DefJoin_corps_Null_Incident_Analysis]] ↔ [[Ally_war_rally_TroopData_Analysis]] (연맹전 부대 데이터 렌더링 쌍)
