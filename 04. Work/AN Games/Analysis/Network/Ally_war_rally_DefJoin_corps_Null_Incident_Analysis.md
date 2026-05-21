---
title: Ally_war_rally DefJoin corps null Incident Analysis
tags:
  - "#system/troop"
  - "#system/network"
  - "#concern/readability"
  - "#concern/memory"
  - "#status/done"
aliases:
  - reinforce_memberList NRE incident
description: `Ally_war_rally.Update_DefenseItemOne` 경로에서 비치명 예외가 발생했다.
created: 2026-05-20
updated: 2026-05-20
---

← [[Network_MOC]]


# Ally_war_rally DefJoin corps null Incident Analysis

## 개요

`Ally_war_rally.Update_DefenseItemOne` 경로에서 비치명 예외가 발생했다.

- 예외: `ArgumentNullException: Value cannot be null. Parameter name: value`
- 스택: `JsonConvert.DeserializeObject` -> `ally_def_memberSlot.GetCorps()` -> `Update_DefenseItemOne` 집계(`Sum`)

관련 문서: [[NetworkAlly_reinforce_memberList_Lifecycle]], [[Ally_war_rally_TroopData_Analysis]]

## 재현/시뮬레이션 결론

로그(`Editor Log.txt`)에서 `27228` 응답의 `ally_def_member.corps`는 정상 문자열인 케이스가 확인되었음.
따라서 원인은 "해당 API 응답 단독"이라기보다, 아래의 데이터 혼합 시나리오가 더 유력함.

1. `def_join` 소켓 푸시 수신(`MKSocket.HandleDefJoin`)  
2. `WorldManager.RefreshWithPushDefJoin`에서 `reinforce_memberList`에 임시 항목 추가  
3. 임시 항목에 `corps`가 비어 있거나 null이면,  
4. `Update_DefenseItemOne`의 `x.GetCorps().Count()` 집계 시 역직렬화에서 null 인자 예외 발생

## 주요 원인

- `ally_def_memberSlot.GetCorps()`에 null-safe 부재
- `DefJoin` DTO가 푸시의 `corps` 데이터를 명시적으로 받지 못하던 구조
- `RefreshWithPushDefJoin` 임시 항목 생성 시 `corps` 기본값 보장 부재
- (보조 원인) `reinforce_memberList` 캐시가 타이밍 이슈로 스테일 상태를 유지하면 위험 데이터가 더 오래 남을 수 있음

## 적용한 보강 사항

1. `DefJoin` 클래스에 `List<Corps> corps` 필드 추가  
2. `ally_def_memberSlot.GetCorps()` null-safe 처리  
   - `null/empty` -> 빈 리스트 반환
   - 역직렬화 실패 -> 경고 로그 + 빈 리스트 반환
3. `RefreshWithPushDefJoin`에서 `corps` 기본값 보장  
   - 푸시 `corps` 존재 시 serialize 저장
   - 미존재 시 `"[]"` 저장

## 게임 플레이/성능/메모리 영향

- 플레이 영향: 방어 지원 UI 갱신 중 크래시/비정상 중단 가능성이 감소
- 성능 영향: 예외 발생/스택 생성 비용 감소, 스크롤 갱신 안정성 향상
- 메모리 영향: 빈 리스트 반환 방식은 미미한 오버헤드만 추가되며 안정성 이득이 큼

## 추가 개선 제안

- `Request_GetReInforceMemberData`에서 `ally_def_member` 키가 누락된 응답 처리 정책을 명시화(해당 `target_no` 비우기 또는 키 제거)
- `reinforce_memberList` 키 스코프(`war_target_no` vs `ally_war_idx`) 혼용 구간을 점검해 데이터 접근 일관성 강화


