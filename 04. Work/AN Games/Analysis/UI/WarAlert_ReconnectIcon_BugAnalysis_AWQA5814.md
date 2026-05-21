---
tags:
  - analysis
  - system/ui
  - bug-fix
aliases:
  - AWQA-5814
  - WarAlert 재연결 아이콘 버그
description: 크로스 서버 요새전 진입 시 씬 전환 미완료 상태에서 WarAlert 아이콘 갱신이 호출되어 미노출되는 버그 분석 (AWQA-5814)
status: done
created: 2026-05-21
updated: 2026-05-21
---

← [[UI_MOC]]

# AWQA-5814 WarAlert ReconnectIcon 버그 분석

## 요약

크로스 서버 요새전(Fort War)에 진입할 때 씬 전환이 완료되기 전에 WarAlert 갱신 이벤트가 발생하여 우측 하단 경고 아이콘이 표시되지 않는 버그다. UI 참조가 아직 초기화되지 않은 상태에서 갱신이 시도되어 아이콘이 null 상태로 남는다. 씬 전환 완료 콜백 이후에 WarAlert 갱신을 처리하도록 순서를 조정하거나 null 방어 가드를 추가하여 수정한다.

---

## 버그 개요

| 항목 | 내용 |
|------|------|
| 티켓 | AWQA-5814 |
| 발생 상황 | 크로스 서버 요새전 진입 직후 |
| 증상 | 우측 하단 WarAlert 경고 아이콘 미노출 |
| 재현 조건 | 크로스 서버 요새전 + 아이콘 표시 이벤트 타이밍 |

---

## 원인 분석

### WarAlert 아이콘 표시 흐름

```
[일반 상황]
요새전 이벤트 발생
  → WarAlertManager.NotifyAlert()
  → WarAlertUI.RefreshIcon()      ← UI 참조 유효
  → 아이콘 활성화 (정상)

[버그 상황]
씬 전환 시작 (크로스 서버 요새전)
  → WarAlertManager.NotifyAlert() ← 씬 전환 중 이벤트 수신
  → WarAlertUI.RefreshIcon()      ← UI 오브젝트 아직 Awake/OnEnable 미실행
  → _iconRef == null → 갱신 무시  ← 아이콘 미표시
씬 전환 완료
  → WarAlertUI 초기화 완료        ← 이미 놓친 이벤트 재수신 없음
```

### 핵심 원인

크로스 서버 씬 전환은 일반 요새전보다 씬 로드 시간이 길다. 이 구간에서 서버로부터 WarAlert 이벤트(요새전 참전 가능 알림 등)가 수신되면 `WarAlertUI`의 아이콘 참조가 null인 상태에서 갱신이 시도된다. Unity의 `GameObject` 참조는 씬 전환 중 파괴될 수 있어, 이전 씬의 참조가 무효화된 채로 갱신 시도가 일어난다.

---

## 수정 방법

### 방법 1: 씬 전환 완료 콜백 이후 갱신

```csharp
// SceneLoader 또는 씬 전환 관리자
void OnSceneLoaded(Scene scene, LoadSceneMode mode)
{
    // 씬 전환 완료 후 WarAlert 강제 갱신
    WarAlertManager.Instance.ForceRefreshAll();
}
```

씬이 완전히 로드된 뒤 WarAlert 상태를 다시 읽어 UI에 반영한다. 이벤트를 놓쳤더라도 최신 상태로 아이콘을 표시할 수 있다.

### 방법 2: null 방어 가드 + 씬 로드 완료 시 재갱신

```csharp
void RefreshIcon()
{
    if (_iconRef == null) return; // null 가드로 예외 방지

    _iconRef.SetActive(_shouldShow);
}

void OnEnable()
{
    // OnEnable 시점에 현재 WarAlert 상태를 다시 읽어 반영
    RefreshIcon();
}
```

`RefreshIcon`에 null 가드를 추가하고, `WarAlertUI.OnEnable`에서 현재 상태를 다시 읽어 아이콘을 갱신하면 씬 전환 완료 이후 자동으로 올바른 상태가 표시된다.

### 방법 3: 이벤트 큐잉

씬 전환 중 수신된 WarAlert 이벤트를 큐에 저장해 두었다가 씬 로드 완료 후 처리하는 방식이다. 구현 비용이 높지만 이벤트 유실을 원천 차단한다.

---

## 선택된 수정 방향

방법 1 + 방법 2 병행 적용이 가장 안전하다.
- null 가드로 씬 전환 중 예외/오작동을 방지한다.
- `OnEnable` 재갱신으로 씬 로드 완료 직후 올바른 상태를 보장한다.

---

## 영향 범위

| 구분 | 내용 |
|------|------|
| 발생 빈도 | 크로스 서버 요새전 진입 시마다 발생 가능 |
| 심각도 | UI 미노출 (기능 오작동, 경고 아이콘 누락) |
| 영향 UI | `WarAlertUI` 우측 하단 아이콘 |
| 수정 대상 | `WarAlertUI.RefreshIcon()`, `OnEnable()`, 씬 로드 콜백 |

---

## 관련 문서

- [[WarCallbackManager_Analysis]] — WarAlert 콜백 구조 분석
