---
tags:
  - analysis
  - system/ui
  - bug-fix
aliases:
  - AWQA-5822
  - TroopFormation WorldTroopPanel 겹침
description: 부대 편성 팝업 열림 시 WorldTroopPanel이 팝업 위로 겹쳐 보이는 버그 수정 분석 (AWQA-5822)
status: done
created: 2026-05-21
updated: 2026-05-21
---

← [[UI_MOC]]

# AWQA-5822 TroopFormation WorldTroopPanel 겹침 수정

## 요약

`TroopFormation` 팝업이 열릴 때 `WorldTroopPanel`이 팝업보다 앞쪽 레이어에 남아 있어 겹쳐 보이는 버그다. 팝업 오픈 시 `WorldTroopPanel`을 숨기는 로직이 없거나 순서가 잘못되어 있어 발생한다. `TroopFormation.OnEnable`에서 `WorldTroopPanel`을 비활성화하고 `OnDisable`에서 복원하는 방식으로 수정한다.

---

## 버그 개요

| 항목 | 내용 |
|------|------|
| 티켓 | AWQA-5822 |
| 발생 상황 | 부대 편성 팝업(`TroopFormation`) 열기 |
| 증상 | `WorldTroopPanel`이 팝업 위에 겹쳐 표시됨 |
| 심각도 | UI 가독성 저하, 인터랙션 방해 |

---

## 원인 분석

### UI 레이어 구조

Unity UI에서 Canvas 또는 Panel의 표시 순서는 계층 구조의 sibling order 또는 Sort Order로 결정된다. `WorldTroopPanel`과 `TroopFormation` 팝업이 동일한 Canvas 계층에 있거나, 팝업의 Sort Order가 `WorldTroopPanel`보다 낮게 설정된 경우 겹침이 발생한다.

### 겹침 발생 흐름

```
[정상 의도]
TroopFormation 팝업 열기
  → WorldTroopPanel 숨김
  → TroopFormation 팝업 표시 (단독)

[버그 상황]
TroopFormation 팝업 열기
  → WorldTroopPanel 숨김 로직 없음 (또는 타이밍 오류)
  → WorldTroopPanel + TroopFormation 동시 표시 → 겹침
```

### 원인 세부

1. `TroopFormation.OnEnable`에서 `WorldTroopPanel.gameObject.SetActive(false)` 호출이 누락됨.
2. 또는 팝업 오픈 애니메이션 콜백 이후에 숨김 처리가 되어야 하는데 순서가 뒤바뀐 경우.
3. `WorldTroopPanel`의 Sort Order가 팝업보다 높게 설정되어 있어 항상 위에 렌더링되는 경우.

---

## 수정 방법

### 방법 1: OnEnable/OnDisable 에서 WorldTroopPanel 제어

```csharp
public class TroopFormation : MonoBehaviour
{
    [SerializeField] private WorldTroopPanel _worldTroopPanel;

    void OnEnable()
    {
        // 팝업 오픈 시 WorldTroopPanel 숨김
        if (_worldTroopPanel != null)
            _worldTroopPanel.gameObject.SetActive(false);

        // ... 이하 기존 OnEnable 로직 ...
    }

    void OnDisable()
    {
        // 팝업 닫힘 시 WorldTroopPanel 복원
        if (_worldTroopPanel != null)
            _worldTroopPanel.gameObject.SetActive(true);

        // ... 이하 기존 OnDisable 로직 ...
    }
}
```

### 방법 2: Sort Order 조정

`TroopFormation` 팝업의 Canvas Sort Order를 `WorldTroopPanel`보다 높게 설정하여 항상 위에 렌더링되도록 한다. 단, Sort Order 조정만으로는 `WorldTroopPanel` 인터랙션(버튼 클릭 등)이 팝업 뒤에서도 활성화되는 문제가 남으므로 방법 1과 병행하는 것이 권장된다.

### 방법 3: PopupManager 를 통한 중앙 관리

팝업 오픈/클로즈 시 `PopupManager`가 다른 UI 패널의 활성화 상태를 일괄 제어하는 구조라면, `WorldTroopPanel`을 팝업 오픈 시 숨기는 규칙을 `PopupManager`에 추가한다.

---

## 선택된 수정 방향

방법 1(OnEnable/OnDisable 직접 제어)을 기본으로 적용한다. `_worldTroopPanel` 참조를 Inspector에서 연결하거나 `FindObjectOfType`으로 취득하며, null 가드를 포함하여 다른 씬에서 패널이 없는 경우에도 안전하게 동작한다.

---

## 영향 범위

| 구분 | 내용 |
|------|------|
| 발생 조건 | `TroopFormation` 팝업 오픈 시 항상 |
| 심각도 | UI 겹침으로 인한 가독성 저하 및 인터랙션 오류 |
| 영향 UI | `TroopFormation` 팝업, `WorldTroopPanel` |
| 수정 대상 | `TroopFormation.OnEnable()`, `TroopFormation.OnDisable()` |

---

## 관련 문서

- [[TroopFormation_SelectIndex_Static_BugFix_AWQA6161]] — 같은 팝업의 SelectIndex 범위 초과 버그
