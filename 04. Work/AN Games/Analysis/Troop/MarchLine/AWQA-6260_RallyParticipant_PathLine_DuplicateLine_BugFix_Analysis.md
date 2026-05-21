---
tags:
  - analysis
  - system/troop
  - bug-fix
  - march-line
aliases:
  - AWQA-6260
  - 집결 참가자 PathLine 중복 선 버그
description: 전투 종료 후 복수 군단 복귀 행군 시 PathLine이 중복 생성되는 버그 분석 및 수정
status: done
created: 2026-05-21
updated: 2026-05-21
---

← [[MarchLine_MOC]]

# AWQA-6260 집결 참가자 PathLine 중복 선 버그 수정

## 1. 문제 설명

집결(Rally) 전투가 종료된 후 여러 군단이 동시에 복귀 행군을 시작할 때, 각 군단의 PathLine(행군선)이 기존 라인 위에 **추가로 중복 생성**되는 버그다.

- 정상 상태: 복귀 행군 시 군단당 PathLine 1개
- 버그 상태: 복귀 행군 시 군단당 PathLine 2개 이상 중첩 렌더링
- 중첩된 라인은 Z-fighting 또는 색상 혼합으로 시각적으로 두꺼워 보이거나 깜빡이는 증상을 유발

## 2. 발생 조건

다음 조건이 동시에 충족될 때 재현된다:

1. **집결 참가자가 2명 이상** — 리더 포함 다수의 fleet이 같은 전장에 존재
2. **전투 종료 메시지 수신** — 서버에서 battle_result 또는 동등한 push를 수신
3. **동시 복귀 행군 시작** — 복수의 fleet이 거의 동시에 `return_path_org_slot` 또는 `return_path_dft_slot`을 수신하여 PathLine 생성 요청이 연속으로 발생

단일 군단(리더만 존재)이거나, 참가자가 순차적으로 복귀할 때는 재현되지 않는다.

## 3. 원인 분석

### PathLine 생성 흐름

```
battle_result 수신
  └─ 각 fleet에 대해 return_path_org_slot / return_path_dft_slot 처리
       └─ PathLine 생성 요청
            └─ [버그] 기존 PathLine 제거 없이 새 라인 AddComponent / Instantiate
```

복귀 경로 슬롯(`return_path_org_slot`, `return_path_dft_slot`)을 처리하는 로직이 PathLine 오브젝트를 새로 생성하기 전에 **기존에 활성화된 PathLine을 제거하거나 비활성화하는 단계를 누락**하고 있다.

### 중복 생성 원인 상세

- 출전(sally) 상태에서 이미 PathLine이 존재하는 군단이 복귀 행군으로 전환될 때, sally용 PathLine이 그대로 남아있는 채로 복귀용 PathLine이 추가 생성됨
- 집결 참가자가 많을수록 동시 처리 건수가 늘어 중복 발생 빈도가 증가
- `return_path_org_slot`과 `return_path_dft_slot`이 별도 코드 경로로 처리될 경우, 각각 PathLine을 생성하여 동일 fleet에 2개가 붙는 경우도 발생

### 관련 데이터 필드

| 필드 | 설명 |
|---|---|
| `return_path_org_slot` | 원래 출발지 기준 복귀 경로 슬롯 |
| `return_path_dft_slot` | 기본(default) 복귀 경로 슬롯 (org 경로가 없을 때 사용) |

두 슬롯 중 하나만 사용해야 하지만, 두 경로가 모두 존재하는 예외 상황에서 양쪽 모두 PathLine을 생성하는 분기가 존재할 수 있다.

## 4. 수정 방법

### 방안 A: PathLine 생성 전 기존 라인 명시적 제거

PathLine을 새로 생성하기 전에 해당 fleet에 연결된 기존 PathLine을 반드시 제거한다.

```csharp
// 복귀 경로 PathLine 생성 시
void CreateReturnPathLine(FleetData fleet)
{
    // 기존 PathLine 제거
    RemoveExistingPathLine(fleet.fleetSlotId);

    // 새 PathLine 생성
    var pathLine = InstantiatePathLine();
    pathLine.Setup(fleet.returnPath);
    RegisterPathLine(fleet.fleetSlotId, pathLine);
}
```

### 방안 B: PathLine 오브젝트 재사용 (풀링)

PathLine을 fleet별로 딕셔너리에 관리하고, 이미 존재하면 새로 생성하지 않고 기존 오브젝트의 경로 데이터만 갱신한다.

```csharp
private Dictionary<int, PathLine> _pathLineMap = new();

void UpdateReturnPathLine(FleetData fleet)
{
    if (!_pathLineMap.TryGetValue(fleet.fleetSlotId, out var pathLine))
    {
        pathLine = InstantiatePathLine();
        _pathLineMap[fleet.fleetSlotId] = pathLine;
    }

    // 경로만 갱신
    pathLine.SetPath(fleet.returnPath);
    pathLine.SetActive(true);
}
```

### 방안 C: return_path_org_slot / return_path_dft_slot 처리 통합

두 슬롯을 별도 분기로 처리하지 않고, 우선순위 결정 후 단일 경로만 선택하여 PathLine을 1회만 생성한다.

```csharp
var returnPath = fleet.returnPathOrgSlot ?? fleet.returnPathDftSlot;
if (returnPath != null)
{
    CreateOrUpdatePathLine(fleet.fleetSlotId, returnPath);
}
```

> [!tip] 권장
> 방안 B(재사용)를 기본으로 하되, fleet 해제(Despawn) 시 PathLine도 함께 정리하는 생명주기 관리를 병행한다. 방안 C는 슬롯 우선순위 로직을 명확히 문서화하여 향후 유지보수 시 혼동을 방지해야 한다.

## 연관 문서

- [[AWQA-6379_PathLine_PreCorrection_FlickerFix_Analysis]] — PathLine 경로 처리 과정에서 발생하는 렌더링 불일치 패턴 공유. 선행 보정 오프셋 차이로 인한 플리커 버그
- [[AWPL-7595_RallyLeader_Succession_RetreatPath_Analysis]] — 집결 리더 승계 시 복귀 경로 처리 공유. 리더 교체 후 복귀 경로가 올바르게 전달되지 않는 패턴
