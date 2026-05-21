---
tags:
  - analysis
  - system/ui
  - status/done
aliases:
  - EventUi Achievement 시스템
  - 이벤트 업적 UI
description: EventUi partial class 구조, Achievement 3종 오버로드 패턴, SVS_Event_Eve 상속 구조 분석
created: 2026-05-21
updated: 2026-05-21
---

← [[UI_MOC]]

# EventUi Achievement 시스템 분석

## 요약

### 무슨 문제였나?
분석 목적 문서 — 버그가 아닌 구조 파악이다. EventUi가 partial class로 분산되어 있고, Achievement 관련 메서드가 여러 오버로드로 나뉘어 어디서 어떤 메서드를 호출하는지 파악하기 어려운 상태였다.

### 어떻게 고쳤나?
구조를 분석하여 문서화했다:
| 구성 요소 | 내용 |
|-----------|------|
| partial class 분리 | 이벤트 유형별 파일로 분산, 유형별 로직 격리 |
| Achievement 3종 오버로드 | 개인/군단/랭킹 순서로 오버로드, 이벤트 데이터 기반 자동 디스패치 |
| SVS_Event_Eve 상속 | EventUi를 상속하여 SVS 전야제 전용 Achievement 처리 추가 |

### 현재 상태는?
- ✅ 구조 분석 완료
- ✅ Achievement 오버로드 디스패치 흐름 파악

> **한 줄 요약**: "EventUi의 partial class 분리 구조와 Achievement 3종 오버로드의 자동 디스패치 패턴을 분석하여 문서화했다."

---

## 1. 현상/개요

`EventUi`는 게임 내 다양한 이벤트 유형(SVS, 연맹전, 개인 이벤트 등)의 UI를 하나의 클래스에서 처리한다. 클래스가 비대해지는 것을 막기 위해 `partial class`로 이벤트 유형별 파일로 분리되어 있다.

Achievement(업적) 관련 메서드는 특히 다음 3가지 유형으로 나뉜다:
- 개인 업적 (Personal Achievement)
- 군단 업적 (Corp Achievement)
- 랭킹 업적 (Ranking Achievement)

이 3종은 동일한 이름의 메서드를 시그니처(파라미터 타입)로 구분하는 오버로드 패턴으로 구현되어 있다.

## 2. 구조 분석

### partial class 파일 구성

```
EventUi.cs                      ← 공통 초기화, 탭 전환
EventUi.Personal.cs             ← 개인 이벤트 Achievement
EventUi.Corp.cs                 ← 군단 이벤트 Achievement
EventUi.Ranking.cs              ← 랭킹 이벤트 Achievement
EventUi.SVS.cs                  ← SVS 이벤트 처리
```

각 파일은 `partial class EventUi`로 선언되어 컴파일 시 단일 클래스로 병합된다. 이벤트 유형별로 파일이 분리되어 있어 기능 추가 시 해당 파일만 수정하면 된다.

### Achievement 3종 오버로드 패턴

```csharp
// 개인 업적
void RefreshAchievement(PersonalAchievementData data) { ... }

// 군단 업적
void RefreshAchievement(CorpAchievementData data) { ... }

// 랭킹 업적
void RefreshAchievement(RankingAchievementData data) { ... }
```

호출 측에서 수신한 서버 데이터 타입에 따라 컴파일러가 적절한 오버로드를 자동으로 선택한다. 런타임 타입 체크(is/as)나 switch 분기 없이 타입 안전하게 디스패치된다.

### SVS_Event_Eve 상속 구조

```
EventUi
  └── SVS_Event_Eve               ← SVS 전야제 전용 클래스
        ├── override RefreshAchievement(RankingData)  ← SVS 랭킹 보상 커스텀
        └── 추가 메서드: ShowEveReward(), HideEveTimer() 등
```

`SVS_Event_Eve`는 `EventUi`를 상속하여 SVS 전야제에서만 필요한 랭킹 보상 팝업 처리를 오버라이드한다. 기본 EventUi의 Achievement 처리를 그대로 재사용하면서 SVS 전용 로직만 추가한 구조다.

## 3. 주요 데이터 흐름

```
서버 이벤트 수신
  └── EventUi.OnReceiveAchievement(rawData)
        ├── rawData.type == PERSONAL → RefreshAchievement(PersonalAchievementData)
        ├── rawData.type == CORP    → RefreshAchievement(CorpAchievementData)
        └── rawData.type == RANKING → RefreshAchievement(RankingAchievementData)
              └── (SVS_Event_Eve에서) override → SVS 전야제 랭킹 보상 팝업
```

이벤트 유형 분류는 `main_event_id` 또는 `rank_type` 필드로 결정된다.

## 연관 문서

- [[SVS_Eve_RankingRewardPopup_Analysis]] — SVS_Event_Eve 상속 구조 공유, 랭킹 보상 팝업 상세 분석
- [[Ally_war_rally_Tab_Analysis]] — 탭 전환 관리 유사 패턴 (이벤트 유형별 분기)
- [[InfiniteScrollManager_Analysis]] — Achievement 목록 UI 렌더링 시 무한스크롤 적용
