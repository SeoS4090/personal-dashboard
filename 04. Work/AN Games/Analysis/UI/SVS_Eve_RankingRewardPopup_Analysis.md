---
tags:
  - analysis
  - system/ui
aliases:
  - SVS_Eve RankingRewardPopup 분석
  - SVS 전야제 랭킹 보상 팝업
description: SVS(서버 vs 서버) 전야제 이벤트의 개인 랭킹 및 월드 랭킹 보상 팝업 분석 — SVS_Event_Eve 상속 구조
status: done
created: 2026-05-21
updated: 2026-05-21
---

← [[UI_MOC]]

# SVS_Eve RankingRewardPopup 분석

## 개요

SVS(서버 vs 서버) 전야제 이벤트(`SVS_Event_Eve`)에서 사용하는 랭킹 보상 팝업 UI 분석이다. 이벤트 종료 후 정산된 **개인 랭킹 보상**과 **월드 랭킹 보상** 두 가지를 별도 팝업(`RankingRewardPopup`)으로 표시한다.

팝업이 열리는 조건은 두 가지를 동시에 충족해야 한다.

1. SVS 전야제 이벤트가 활성화 상태일 것
2. 서버 측 랭킹 정산이 완료된 상태일 것

이 조건이 충족되면 서버 이벤트 랭킹 API 응답을 `EventUi`의 `Achievement` 오버로드에 전달하고, 최종적으로 `RankingRewardPopup`이 화면에 표시된다.

---

## 클래스 구조

### 상속 계층

```
EventUi (partial class, 기반 이벤트 UI)
└── SVS_Event_Eve  (SVS 전야제 전용 구현)
        │
        └─── RankingRewardPopup  (팝업 — 별도 클래스, 독립 표시)
```

- `EventUi`는 partial class로 선언되어 파일 단위로 기능이 분리된다.  
  Achievement 표시 로직은 `EventUi`의 `Achievement` 3종 오버로드 중 하나가 담당한다.  
  → 상세 구조는 [[EventUi_Achievement_System_Analysis]] 참고.
- `SVS_Event_Eve`는 `EventUi`를 상속받아 SVS 전야제 이벤트에 특화된 데이터 바인딩과 팝업 호출 로직을 추가로 구현한다.
- `RankingRewardPopup`은 독립적인 팝업 클래스로, `SVS_Event_Eve`가 직접 인스턴스를 생성하거나 팝업 매니저를 통해 열어 줌으로써 `EventUi` 상속 계층과 분리된다.

### 데이터 흐름 요약

```
서버 이벤트 랭킹 API 응답
    ↓
SVS_Event_Eve.OnReceiveRankingData()
    ↓
EventUi.Achievement(rankingData) ← 오버로드 선택
    ↓
RankingRewardPopup.Open(personalReward, worldReward)
    ↓
팝업 UI 렌더링 (개인 / 월드 탭 전환)
```

---

## 개인 랭킹 보상 처리

개인 랭킹 보상은 **유저 개인의 SVS 이벤트 참여 점수**를 기준으로 서버 내 순위를 산출하고, 해당 순위 구간에 해당하는 아이템을 지급한다.

| 처리 단계 | 설명 |
|---|---|
| 점수 집계 | 유저가 SVS 전야제 기간 동안 획득한 이벤트 점수를 합산 |
| 순위 산출 | 서버 전체 유저 점수와 비교해 개인 순위를 확정 |
| 보상 구간 매핑 | 순위 범위(예: 1위, 2~10위, 11~50위 등)를 보상 테이블과 대조 |
| 팝업 표시 | `RankingRewardPopup`에 개인 순위 및 보상 아이템 목록 바인딩 |

- 정산은 이벤트 종료 시점에 서버에서 일괄 처리되며, 클라이언트는 API 응답을 수신한 시점에 팝업을 연다.
- 이미 수령한 보상은 재표시되지 않도록 수령 여부 플래그를 확인한다.

---

## 월드 랭킹 보상 처리

월드 랭킹 보상은 **서버(월드) 단위의 SVS 참여 결과**, 즉 서버 간 순위에 따라 결정된다. 개인 보상과 달리 해당 서버에 속한 모든 유저에게 동일한 보상이 지급된다.

| 처리 단계 | 설명 |
|---|---|
| 서버 간 점수 비교 | 복수의 서버가 참여한 SVS에서 서버별 총점 집계 |
| 서버 순위 확정 | 서버 간 점수 비교를 통해 현재 서버의 순위 결정 |
| 보상 구간 매핑 | 서버 순위 범위에 해당하는 보상 테이블 조회 |
| 팝업 표시 | `RankingRewardPopup`에 서버 순위 및 보상 아이템 목록 바인딩 |

- 개인 랭킹 팝업과 월드 랭킹 팝업은 `RankingRewardPopup` 내부에서 탭 또는 순차 표시 방식으로 구분된다.
- 월드 랭킹 보상 역시 수령 여부 플래그로 중복 표시를 방지한다.

---

## 연관 문서

- [[EventUi_Achievement_System_Analysis]] — `EventUi` partial class 구조 및 Achievement 오버로드 패턴 상세
