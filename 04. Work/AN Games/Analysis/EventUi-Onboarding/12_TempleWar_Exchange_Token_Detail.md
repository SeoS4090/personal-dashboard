---
title: TempleWar Exchange Token 상세
tags:
  - event
  - templewar
  - exchange
  - token
aliases:
  - TempleWar Exchange Token
---

# TempleWar / Exchange / Token 상세

관련 파일:

- `Assets/Common Document/Scripts/EventUi.TempleWar.cs`
- `Assets/Common Document/Scripts/EventUi.Exchage.cs`
- `Assets/Common Document/Scripts/EventUi.Token.cs`

## TempleWar

### PRE_TEMPLE_WAR

- `OpenPreTempleWarPage`
  - 보상 표기 목적상 `curEventRank = INDIVISUAL` 고정
  - 다음 사원쟁탈전 시작 시각을 `eventPlan`에서 계산해 남은 시간 표시

### TEMPLE_WAR

- `OpenTempleWarPage`
  - 개인 포인트: `Request_AllEventRanking` 응답의 `myEventUserRanking.event_point`
  - 연맹 포인트: `Request_EventInquiry(curEventID)` 후 `eventAlly`에서 추출
  - 보상 레드닷: `curEventFirstSlot.status == 11`
  - 보상 버튼은 점수 로드 완료 후 동작

## Exchange

- `OpenExchagePage`
  - `eventUser` 슬롯 기반으로 교환 항목 렌더링
  - "보상 완료 항목 숨김" 계열 토글을 `PlayerPrefs`로 저장
  - 교환 실행은 내부에서 `Request_EventExchangeGet` 호출 경로 사용

## Token

- `OpenTokenPage`
  - 구조가 단순하며 기간/기본 정보 중심
  - 페이지 해제 시 `TokenShop.Reset()` 호출

## 공통 디버깅 포인트

- TempleWar 점수판이 `-`에서 멈춤
  - 개인/연맹 요청 두 경로의 콜백 완료 여부 분리 확인
- Exchange 토글이 반영되지 않음
  - `DOT_EVENT_EXCHANGE_{eventID}` 키 저장/로드 확인
- Token 페이지가 비어 보임
  - 템플릿(`tokenPageVta`) 바인딩과 `SetInfo` 입력 데이터 점검

## 연관 문서

- [[02_NetworkEvent_DataFlow]]
- [[05_Event_Category_Map]]
