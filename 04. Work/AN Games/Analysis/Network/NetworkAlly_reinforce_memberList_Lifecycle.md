---
tags:
  - "#system/network"
  - "#system/troop"
  - "#concern/memory"
  - "#status/done"
aliases:
  - NetworkAlly.reinforce_memberList 생애 주기
description: `Dictionary<long, List<ally_def_memberSlot>>` — **방어 지원(수성 지원) 참여자 목록**을 **대상 지점 번호(`target_no`)별**로 캐시한다. 서버 CC **10...
created: 2026-05-20
updated: 2026-05-20
---

← [[Network_MOC]]


# NetworkAlly.reinforce_memberList 생애 주기

## 개요

`Dictionary<long, List<ally_def_memberSlot>>` — **방어 지원(수성 지원) 참여자 목록**을 **대상 지점 번호(`target_no`)별**로 캐시한다. 서버 CC **10915**(요새전 시 **27228**) `Request_GetReInforceMemberData` 응답의 `ally_def_member`로 갱신된다.

## 생성·소멸

| 시점 | 동작 |
|------|------|
| **NetworkAlly 인스턴스** | 필드 초기화 `= new()` |
| **`ClearAllyWarData()`** | `reinforce_memberList.Clear()` — 연맹 관련 일괄 초기화의 일부 |
| **연맹 없음** | `MKSceneManager`에서 `Request_UserDataAll` 후 `ally_no <= 0`이면 `ClearAllyWarData()` |
| **연맹 탈퇴** | `Ally_main` 탈퇴 처리에서 `ClearAllyWarData()` |

## 쓰기(갱신)

1. **전체 교체(서버 기준)** — `Request_GetReInforceMemberData` 성공 시 `reinforce_memberList[target_no] = Deserialize(ally_def_member)`. 동일 API가 `reinforce_maxDef[target_no]`도 설정.
2. **항목 제거** — `Request_CancelSupport` 성공 시 `ally_def_member_idx`로 찾아 `RemoveAt`, `RefreshTroop()`.
3. **낙관적 추가(클라 선반영)** — `WorldManager.RefreshWithPushDefJoin`: 본인 방어 지원 도착 푸시 시 `ally_def_memberSlot` 최소 필드만 채워 `Add` (주석: 정확한 데이터는 이후 refresh로 동기화).

## 읽기(소비) 패턴

- **UI 표시·집계**: `Ally_Reinforcement`, `Ally_war_rally`, 월드 팝업(수리/거점), `Troop_Send` 등.
- **검증**: `Troop_Manager` 방어 지원 상한(`reinforce_maxDef`와 함께), 요새/크로스 요새 조건 UI, `FortWarCheckUI` 등.
- **이동/철수 전제**: `InventoryUi`, `WorldUseMoveCityItemPopup`, `FortWarResultUI` — 지원 취소 시 `Request_GetFleetData`와 조합.
- **연맹 탈퇴 제한**: `Ally_main`에서 해당 `planetNo` 키 존재·비어 있지 않음 검사.

## 주의사항

- **키 의미**: `long` 키는 호출마다 **행성/월드 오브젝트/전쟁 대상** 등으로 달라진다. `Ally_war_rally`에서 `war_target_no`와 `ally_war_idx`를 혼용해 조회하는 구간이 있어, **데이터가 어떤 키로 들어왔는지**와 일치해야 한다.
- **스테일 가능성**: 응답에 `ally_def_member` 키가 없으면 **해당 키를 덮어쓰지 않음** — 이전 캐시가 남을 수 있음.
- **푸시 추가**: `RefreshWithPushDefJoin`의 `def_member`는 **최소 필드**만 있어, 이후 전체 조회 없이 `GetCorps()` 등을 쓰면 불완전할 수 있음.

## 관련 코드

- `NetworkAlly.cs`: 선언, `ClearAllyWarData`, `Request_GetReInforceMemberData`, `Request_CancelSupport`
- `WorldManager.RefreshWithPushDefJoin`: 푸시 기반 Add
- `MKSocket.HandleDefJoin`: `def_join` 푸시 수신 후 `RefreshWithPushDefJoin` 호출

## 최근 이슈 반영 (2026-03-25)

- 사고 유형: `Ally_war_rally.Update_DefenseItemOne` 집계 시 `GetCorps()`에서 `ArgumentNullException(value)`
- 핵심 원인: `def_join` 기반 임시 항목에 `corps` 누락 가능 + `GetCorps()` null-safe 부재
- 조치:
  1. `DefJoin` DTO에 `corps` 필드 추가
  2. `ally_def_memberSlot.GetCorps()` null-safe/파싱 실패 방어
  3. `RefreshWithPushDefJoin`에서 `corps` 기본값 `"[]"` 보장
- 상세 문서: [[Ally_war_rally_DefJoin_corps_Null_Incident_Analysis]]

## 게임/성능 영향

- 세션 동안 딕셔너리가 커질 수 있으나, `ClearAllyWarData`로 연맹 이탈 시 정리된다.
- 다수 화면에서 **동일 캐시**를 공유하므로, API 호출 순서·비동기 타이밍에 따라 UI가 잠깐 어긋날 여지가 있다.


