---
title: Wheel 카테고리 상세
tags:
  - event
  - wheel
  - reward
aliases:
  - Wheel Detail
---

# Wheel 카테고리 상세

기준 파일: `Assets/Common Document/Scripts/EventUi.Wheel.cs`

## 초기화 흐름

- `OpenWheelPage`
  - 슬롯 존재 확인 후 페이지 생성
  - 보상 상세 박스/보상 아이템/버튼 구성
  - 휠 이펙트 재생 및 콜백(`wheelBeganCall` 등) 바인딩
  - 일일 리셋 시각이 지났으면 `daily_reset` 타겟 갱신 요청

## 버튼 역할

- 무료 회전: `SpinningWheelProcess(..., isTicket=false)`
- 1회 회전: `SpinningWheelProcess(wheelPage, 1)` 호출 경로 사용
- 티켓 충전: `TicketChargePopup` 오픈
- 스킵 토글: `PlayerPrefs(IsSkipWheel_eventID)` 저장

## 핵심 데이터

- `UserModel.commonDailyReset.remain_free_spin`
- `UserModel.GetItemCount(TICKET_ID)`
- `GameModel.eventGoalReward` (박스 보상 구성)
- `NetworkEvent.Request_SpinningWheel`
- `NetworkEvent.Request_EventRewardGet` (상자형 수령)

## 스킵/중단 처리 특징

- 회전 중 터치(`DownStopWheel`) 시
  - 코루틴/시퀀스 강제 중단
  - 보상 아이템 일괄 정렬 반영
  - 결과 팝업 표시 후 페이지 리프레시

## 디버깅 포인트

- 무료 레드닷이 안 꺼짐
  - `remain_free_spin` 갱신 시점과 `OffTapRedDot` 호출 순서 확인
- 스킵 토글 상태가 유지되지 않음
  - eventID별 PlayerPrefs 키 확인
- 결과 보상이 누락되어 보일 때
  - `rewardResult`와 `rewardPickDic` 갱신 타이밍 점검

## 연관 문서

- [[10_WorldBoss_Category_Detail]]
- [[12_TempleWar_Exchange_Token_Detail]]
