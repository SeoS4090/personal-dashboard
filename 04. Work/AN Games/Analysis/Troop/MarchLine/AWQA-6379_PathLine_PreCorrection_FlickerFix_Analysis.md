---
tags:
  - analysis
  - system/troop
  - bug-fix
  - march-line
aliases:
  - AWQA-6379
  - PathLine 선행 보정 플리커 수정
description: PathLine 선행 보정(pre-correction) 오프셋 차이로 동일 경로의 두 군단에서 행군선이 깜빡이는 버그 수정 분석
status: done
created: 2026-05-21
updated: 2026-05-21
---

← [[MarchLine_MOC]]

# AWQA-6379 PathLine 선행 보정 플리커 수정

## 1. 문제 설명

유저 15483의 두 군단(fleet_slot_id 947, 948)이 **동일한 출발지 → 목적지 경로**로 행군 중임에도 불구하고, 클라이언트에서 PathLine(행군선)이 주기적으로 깜빡이는 현상이 발생했다.

- 두 군단 모두 `source_no=4130526 → target_no=4490511`, `sally_type=9`, `status=2` 조건으로 이동
- 행군선은 동일 목적지를 가리켜야 하지만, 보정 계산 결과로 인해 서로 다른 끝점으로 렌더링됨
- PathLine이 갱신될 때마다 경로가 달라지면서 깜빡임(flicker)이 발생

## 2. 원인 데이터 분석

### 서버 API 원본 (`move_path_slot`)

| fleet_slot_id | 경로 | 이동 시간 |
|---|---|---|
| 947 | px:526,py:413 → px:511,py:449 | 38초 |
| 948 | px:526,py:413 → px:511,py:449 | 42초 |

서버 데이터 기준으로 두 군단의 출발지·목적지 타일 좌표는 완전히 동일하다.

### 클라이언트 실제 적용 끝점 (선행 보정 후)

| fleet_slot_id | 보정 후 end 좌표 |
|---|---|
| 947 | (512.41, 447.58) |
| 948 | (513.12, 448.29) |

보정 결과 끝점이 약 **(0.71, 0.71)** 차이를 보인다. 동일 목적지임에도 PathLine이 서로 다른 위치를 가리키게 된다.

### 수신 방식

두 군단 모두 `fleet_sally` push_type으로 수신되므로, 수신 경로 자체의 차이는 없다.

## 3. 근본 원인

선행 보정(pre-correction)이란, 서버에서 받은 타일 좌표를 클라이언트 월드 좌표로 변환할 때 **이동 중인 유닛의 현재 위치**를 기반으로 PathLine 끝점에 오프셋을 미리 적용하는 로직이다.

이 오프셋은 다음 값에 따라 달라진다:

- **남은 이동 시간 (`duration`)**: 947은 38초, 948은 42초로 서로 다름
- **start_time 기준 경과 시간**: 동일 push를 받아도 클라이언트 처리 순서에 따라 타임스탬프 차이 발생 가능
- **속도 계산 결과**: duration이 다르면 단위 이동 거리가 달라져, 선행 보정 오프셋 크기가 달라짐

결과적으로 **같은 목적지라도 각 군단의 duration이 다르면 보정 후 끝점 좌표가 달라지며**, PathLine이 갱신될 때마다 서로 다른 경로를 그려 깜빡임이 발생한다.

```
[목적지 타일 좌표: (511, 449)]
  ↓ 선행 보정 적용
fleet 947 (38초): end = (511, 449) + offset_38s → (512.41, 447.58)
fleet 948 (42초): end = (511, 449) + offset_42s → (513.12, 448.29)
  ↓ PathLine 렌더링
  → 두 라인이 서로 다른 끝점 → 갱신 시 경로 전환 → 깜빡임
```

## 4. 수정 방향

### 방안 A: 보정 적용 전 PathLine 숨김

선행 보정 계산이 완료되기 전까지 PathLine을 비활성화(숨김)하고, 보정이 완전히 완료된 이후 단번에 라인을 표시한다.

```csharp
// 보정 시작 전
pathLineRenderer.enabled = false;

// 보정 완료 후
ApplyPreCorrection(fleet);
pathLineRenderer.SetPositions(correctedPositions);
pathLineRenderer.enabled = true;
```

### 방안 B: 목적지 타일 좌표 고정 사용

동일 목적지 타일을 가진 군단은 선행 보정 없이 **서버 타일 좌표를 월드 좌표로 직접 변환**한 값을 PathLine 끝점으로 고정한다. 보정은 실제 유닛 위치에만 적용하고 PathLine 끝점에는 적용하지 않는다.

### 방안 C: 보정 완료 후 단일 갱신

`move_path_slot` 수신 시 즉시 PathLine을 갱신하지 않고, 해당 프레임에 관련된 모든 fleet의 보정이 완료된 후 일괄 갱신한다(Dirty flag 패턴).

> [!tip] 권장
> 방안 B가 가장 단순하고 사이드 이펙트가 적다. PathLine 끝점은 타일 목적지 기반으로 고정하고, 선행 보정은 유닛 오브젝트 위치에만 한정하는 것이 원칙상 올바르다.

## 연관 문서

- [[AWQA-6371_FortWar_TroopFlicker_BugAnalysis]] — `origin_no` / `sally_type` 공유 조건에서 발생하는 트루프 플리커 버그. 동일한 status=2 이동 중 렌더링 불일치 패턴 공유
- [[AWQA-6260_RallyParticipant_PathLine_DuplicateLine_BugFix_Analysis]] — PathLine 경로 처리 시 라인 초기화 누락 패턴 공유
