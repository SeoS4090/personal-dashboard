---
title: Ally_war_rally dotweens 흐름 분석
tags:
  - system/ui
  - concern/performance
  - status/done
aliases:
  - Ally_war_rally dotweens 흐름 분석
description: Ally_war_rally UI에서 집결(공격/방어) 목록의 진행 바 시간을 갱신하기 위해 DOTween Tweener를 관리하는 Dictionary dotweens의 역할과 흐름을 정리한다.
created: 2026-05-20
updated: 2026-05-20
---

← [[UI_MOC]]


## 개요
Ally_war_rally UI에서 집결(공격/방어) 목록의 진행 바 시간을 갱신하기 위해 DOTween Tweener를 관리하는 Dictionary dotweens의 역할과 흐름을 정리한다.

## 핵심 내용 요약
- dotweens: 집결 슬롯별 남은 시간 Tween을 관리하는 Dictionary(string key, Tweener value).
- 키 형식: atk_ally_war_idx, def_ally_war_idx.
- ShowContent에서 탭 전환 시 모든 Tween Kill 및 Clear로 초기화.
- OnUpdateItem에서 VisualElement 재사용 시 이전 슬롯 Tween Kill 및 제거.
- Update_AttackItemOne / Refresh_AttackItemOne / Update_DefenseItemOne 에서 남은 시간을 기준으로 Tween 생성 및 등록.
- InfiniteScroll 구조라 화면 밖(오프스크린) 슬롯은 VisualElement 재바인딩 시점에 Tween이 Kill되고 dotweens에서 제거됨.

## 주요 책임/구성 요소

### dotweens Dictionary 관리 패턴
- 타입: `Dictionary<string, TweenerCore<float, float, FloatOptions>>`
- 키 형식: `atk_{ally_war_idx}`, `def_{ally_war_idx}`
- 값: DOTween `TweenerCore` 인스턴스 (남은 시간 기반 progress bar 갱신)

### 생성 시점
- `Update_AttackItemOne`: 공격 슬롯별 `atk_{ally_war_idx}` 키로 Tweener 생성·등록
- `Update_DefenseItemOne`: 방어 슬롯별 `def_{ally_war_idx}` 키로 Tweener 생성·등록
- `Refresh_AttackItemOne`: 기존 `atk_` 키 존재 시 `DOTween.Kill` 후 제거하고 재생성

### 해제 시점 — 3가지 경로
1. **ShowContent** (탭 전환): `dotweens.ToList().ForEach(x => { x.Value.Kill(); MainScroll.Q<VisualElement>(x.Key).name = ""; })` 후 `dotweens.Clear()`. VisualElement 이름도 ""으로 초기화함.
2. **OnUpdateItem** (InfiniteScroll 재바인딩): 두 단계 정리
   - 1단계: `data.Key`가 이미 dotweens에 존재하면 Kill + Remove (동일 키 중복 방지)
   - 2단계: element의 이전 panel 이름(`prev_simple_panel`)이 dotweens에 존재하면 Kill + Remove (VisualElement 재사용에 의한 stale Tween 제거)
3. **OnDestroy / Dispose**: `dotweens.ToList().ForEach(x => x.Value.Kill())` 후 `dotweens.Clear()` + `updatetween.Kill()`

## 데이터/의존성 관계
- `dotweens: Dictionary<string, TweenerCore<float, float, FloatOptions>>` — 인스턴스 필드
- `ally_warSlot.ally_war_idx` — 딕셔너리 키 원본
- `InfiniteScrollManager` — VisualElement 재사용 시 OnUpdateItem 콜백 트리거
- `DOTween` — TweenerCore 생성/Kill
- `Update()`: 매 프레임 `DotweenCount = dotweens.Count()` + `DotweenKeys = dotweens.Keys.ToList()` 갱신 (인스펙터 디버깅용)

## 문제점 및 개선 제안
- **Update()의 GC 압박**: `dotweens.Keys.ToList()`가 매 프레임 호출되어 List 할당이 발생. `#if UNITY_EDITOR` 조건 컴파일 또는 변경 시점에만 갱신하는 방식으로 개선 가능.
- **Tween 누락 가능성**: `Update_AttackItemOne` 호출 전 `ShowContent`로 탭이 전환되면 이전 Tween이 Kill되지 않을 수 있음. `Refresh_AttackItemOne`처럼 생성 전 Key 중복 체크 후 Kill 보장 필요.
- **키 충돌 방지**: `atk_`/`def_` 접두어로 공격/방어 슬롯 idx가 같아도 충돌 없음. 현재 구조상 안전.
- **GC 압박 (탭 전환)**: 탭 전환 시 전체 Kill/Clear 후 재생성으로 TweenerCore 객체 생성·파괴가 빈번하게 발생.

## 성능/메모리 영향
- 화면에 표시되는 집결 슬롯 수만큼 TweenerCore가 동시에 실행됨. 슬롯이 많을 경우 DOTween 업데이트 비용 누적.
- InfiniteScroll 덕분에 오프스크린 슬롯의 Tween은 OnUpdateItem에서 정리되어 메모리 증가 억제.
- Update()의 `Keys.ToList()` 매 프레임 호출은 에디터 디버깅 목적이나 릴리즈 빌드에서도 실행 중이므로 주의.

## Canvas 연동 메모
- AW Project.canvas 상에서 이 노트를 집결/전투 UI 관련 노드와 연결하여 UI 시간 갱신 로직 흐름을 시각화할 것.
- 관련 시스템: Ally_war_rally UI, NetworkAlly 집결 슬롯 데이터, MKCommon.CreateInfiniteScrollManager.

## 관련 문서
- [[Ally_war_rally_Tab_Analysis]]
- [[Ally_war_rally_DefJoin_corps_Null_Incident_Analysis]]
- [[Ally_war_rally_TroopData_Analysis]]


