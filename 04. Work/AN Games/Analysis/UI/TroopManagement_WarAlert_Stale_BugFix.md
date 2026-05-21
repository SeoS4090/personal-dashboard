---
tags:
  - analysis
  - bug-fix
  - system/ui
  - system/troop
  - system/network
aliases:
  - RefreshTroop WarAlert 누락 버그
description: RefreshTroop 호출 시 Request_WarAlert 누락으로 공격받는 군단의 공격자 정보가 Troop_Management 팝업에 표시되지 않는 버그 분석 및 수정
status: done
created: 2026-05-21
updated: 2026-05-21
---

← [[UI_MOC]]

# TroopManagement WarAlert Stale 버그 수정

## 요약

### 무슨 문제였나?
전투 중인 군단이 있는 상황에서 군단 관리 팝업을 열어도, 누가 내 군단을 공격하고 있는지 보여주는 공격자 프로필(초상화·이름·위치)이 표시되지 않는 문제가 있었다. 특히 다른 유저를 추적·공격하던 중에 제3자가 내 군단을 역으로 공격해온 경우에도 마찬가지였다.

### 어떻게 고쳤나?

| 단계 | 변경 전 | 변경 후 |
|------|---------|---------|
| 1 | 군단 관리 팝업 열릴 때 바로 UI 갱신 | BATTLE 상태 군단 유무 먼저 확인 |
| 2 | (공격 알림 목록 갱신 없음) | BATTLE 군단 있으면 서버에서 공격 알림 목록 최신화 |
| 3 | 오래된 알림 데이터로 공격자 없음 판정 | 응답 후 UI 갱신 → 공격자 프로필 정상 표시 |
| 4 | (BATTLE 군단 없을 때도 동일) | BATTLE 군단 없으면 불필요한 API 호출 없이 바로 갱신 |

콜백이 돌아오는 사이 팝업이 닫힐 수 있으므로 응답 처리 전 패널 활성화 여부를 재확인하는 null 가드도 추가했다.

### 현재 상태는?
- ✅ 공격받는 군단에서 공격자 프로필 표시 — 해결 완료
- ✅ 추적당해 BATTLE 상태가 된 군단(역추적 공격) 포함 — 해결 완료
- ✅ BATTLE 군단 없을 때 불필요한 API 호출 차단 — 해결 완료

> **한 줄 요약**: "군단 관리 팝업이 열릴 때 BATTLE 군단이 있으면 공격 알림 API를 먼저 호출하여 공격자 정보를 최신화한다."

---

## 버그 개요

| 항목 | 내용 |
|------|------|
| 발생 상황 | `Troop_Management` 팝업이 열린 상태에서 `RefreshTroop()` 호출 시 |
| 증상 | BATTLE 상태 군단의 공격자 프로필·이름·위치 미표시 |
| 원인 | `MainHudUi.RefreshTroop()`에서 `Request_WarAlert` 미호출로 `warAlertList` 스테일 |

---

## 코드 흐름 분석

### 관련 파일

| 파일 | 역할 |
|------|------|
| `Assets/Common Document/Scripts/MainHudUi.cs:5089` | `RefreshTroop()` → `Troop_Management.refresh()` 호출 지점 |
| `Assets/UI/Troop/Troop_Management.cs:213` | `warAlertList` 조회하여 공격자 UI 표시 |
| `Assets/Network/Scripts/NetworkAlly.cs:2635` | `Request_WarAlert` — cc3071 호출 후 `warAlertList` 갱신 |

### 버그 흐름 (수정 전)

```
RefreshTroop() 호출
  → TroopUpdateDotween 설정 (나중에 OnComplete 시 플릿 데이터 갱신)
  → Troop_Management.refresh() 즉시 호출
      └─ warAlertList 조회 (마지막 Request_WarAlert 당시 상태 그대로)
      └─ t_type==1 && status==5 && data_1==fleet_slot_id 매칭 실패
      └─ 공격자 UI 미표시
```

`Request_WarAlert`는 `MainHudUi` 초기화(`L:1650`), 씬 전환(`MKSceneManager`), 소켓 이벤트(`MKSocket`) 등에서 호출되지만 `RefreshTroop()`에서는 호출되지 않았다. 따라서 팝업이 열려있는 동안 새로운 공격 이벤트가 발생하거나 추적으로 인해 BATTLE 상태가 바뀌어도 `warAlertList`가 업데이트되지 않았다.

### warAlertList 필터 조건

`Troop_Management.cs:213`의 조건:
```csharp
NetworkAlly.instance.warAlertList.Find(
    x => x.t_type == 1       // 수성 전투 알림
      && x.status == 5       // 전투 중 상태
      && x.data_1 == data.fleet_slot_id  // 내 군단 슬롯 ID
)
```

`t_type == 1`은 마을 방어가 아닌 군단 직접 공격 알림이다. 추적으로 인해 제3자에게 공격받는 경우도 이 조건으로 걸린다.

---

## 수정 내용

**파일**: `Assets/Common Document/Scripts/MainHudUi.cs:5089`

```csharp
// 수정 전
if (troopManageDoc.activeSelf)
    troopManageDoc.GetComponent<Troop_Management>().refresh();

// 수정 후
if (troopManageDoc.activeSelf)
{
    var hasBattleTroop = NetworkTroop.instance.other_user_lines[MKHttp.instance.login.user_no]
        .Any(x => x.Get_Client_Status() == MKConstant.TROOP_STATE.BATTLE);

    if (hasBattleTroop)
        NetworkAlly.instance.Request_WarAlert(0, () =>
        {
            if (troopManageDoc != null && troopManageDoc.activeSelf)
                troopManageDoc.GetComponent<Troop_Management>().refresh();
        });
    else
        troopManageDoc.GetComponent<Troop_Management>().refresh();
}
```

### 설계 포인트

1. **BATTLE 가드**: `hasBattleTroop`가 false이면 cc3071을 호출하지 않아 불필요한 네트워크 요청 차단
2. **콜백 null 가드**: API 응답 시점에 패널이 닫혔을 수 있으므로 `troopManageDoc.activeSelf` 재확인 — [[WarAlert_ReconnectIcon_BugAnalysis_AWQA5814]]와 동일 패턴
3. **Request_WarAlert 내부 동작**: cc3071 응답 후 `warAlertList` 갱신 → 공격자(`att_user`) 부대 데이터도 `Request_GetFleetData`로 자동 갱신

---

## 관련 문서

- [[WarAlert_ReconnectIcon_BugAnalysis_AWQA5814]] — 씬 전환 중 콜백 타이밍 불일치 동일 패턴
- [[NetworkAlly_reinforce_memberList_Lifecycle]] — NetworkAlly 데이터 생명주기
