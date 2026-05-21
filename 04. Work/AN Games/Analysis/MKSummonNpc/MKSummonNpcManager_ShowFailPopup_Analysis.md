---
tags:
  - system/battle
  - system/ui
  - status/done
aliases:
  - MKSummonNpcManager.ShowFailPopup 분석
description: 실패 이유 코드(`why`)에 따라 다른 토스트 팝업 메시지를 표시하는 UI 유틸리티 함수. `SetFailPopupToEnd()`에서 호출된다.
created: 2026-05-20
updated: 2026-05-20
---

← [[MKSummonNpcManager_Function_Analysis_Index]]


# MKSummonNpcManager.ShowFailPopup 분석

## 개요
실패 이유 코드(`why`)에 따라 다른 토스트 팝업 메시지를 표시하는 UI 유틸리티 함수. `SetFailPopupToEnd()`에서 호출된다.

## 주요 책임/구성 요소

```csharp
void ShowFailPopup(long why)
{
    switch (why)
    {
        case 1: // 60초 내 5번 이상 소환 시도 - 쿨타임
            MKCommon.ShowToastPopup(MKTerm.Instance.GetTerm("t_popup_msg_npc_summon_fail_cooltime"));
            break;
        default:
            MKCommon.ShowToastPopup(MKTerm.Instance.GetTerm("t_popup_msg_npc_summon_fail"));
            break;
    }
}
```

- `why = 1`: 쿨타임(60초 내 5회 이상 시도) 메시지 표시
- `why = 0` 또는 기타: 일반 실패 메시지 표시
- `MKCommon.ShowToastPopup` + `MKTerm.Instance.GetTerm` — 로컬라이징된 토스트 메시지 표시

## 데이터/의존성 관계
- `SetFailPopupToEnd(long why)` — 호출자
- `MKTerm.Instance.GetTerm(key)` — 다국어 문자열 조회
- `MKCommon.ShowToastPopup(msg)` — 화면 하단 토스트 메시지 출력

## 문제점 및 개선 제안
- **원인 코드 확장성**: 현재 `why=1`(쿨타임)과 기본값(일반) 두 가지만 구분. 서버 rc 코드를 `why`로 매핑하면 좌표 없음, 서버 오류 등 더 구체적인 메시지 제공 가능.
- **`SummonNpcCallbackFail`의 인자 없음 문제와 연결**: 실패 콜백이 원인 코드를 전달하지 않아 이 함수로 세분화된 메시지를 전달할 수 없음. 두 함수 개선이 함께 이루어져야 효과적.

## 관련 문서
- [[MKSummonNpcManager_SetFailPopupToEnd_Analysis]]
- [[MKSummonNpcManager_SummonNpcCallbackFail_Analysis]]
- [[MKSummonNpcManager_SummonNpc_Analysis]]
- [[MKSummonNpcManager_Function_Analysis_Index]]


