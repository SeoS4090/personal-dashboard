---
title: Ally_war_rally dotweens 흐름 분석
tags:
  - system/ui
  - concern/performance
  - status/done
---

## 개요
Ally_war_rally UI에서 집결(공격/방어) 목록의 진행 바 시간을 갱신하기 위해 DOTween Tweener를 관리하는 Dictionary dotweens의 역할과 흐름을 정리한다.

## 핵심 내용 요약
- dotweens: 집결 슬롯별 남은 시간 Tween을 관리하는 Dictionary(string key, Tweener value).
- 키 형식: atk_ally_war_idx, def_ally_war_idx.
- ShowContent에서 탭 전환 시 모든 Tween Kill 및 Clear로 초기화.
- OnUpdateItem에서 VisualElement 재사용 시 이전 슬롯 Tween Kill 및 제거.
- Update_AttackItemOne / Refresh_AttackItemOne / Update_DefenseItemOne 에서 남은 시간을 기준으로 Tween 생성 및 등록.
- InfiniteScroll 구조라 화면 밖(오프스크린) 슬롯은 VisualElement 재바인딩 시점에 Tween이 Kill되고 dotweens에서 제거됨.

## Canvas 연동 메모
- AW Project.canvas 상에서 이 노트를 집결/전투 UI 관련 노드와 연결하여 UI 시간 갱신 로직 흐름을 시각화할 것.
- 관련 시스템: Ally_war_rally UI, NetworkAlly 집결 슬롯 데이터, MKCommon.CreateInfiniteScrollManager.