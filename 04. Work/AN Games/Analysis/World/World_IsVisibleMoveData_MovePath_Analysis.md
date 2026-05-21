---
tags:
  - system/world
  - system/network
  - concern/performance
  - concern/readability
  - status/done
aliases:
  - WorldManager.IsVisibleMoveData 이동 가시성 로직 분석
description: `WorldManager.IsVisibleMoveData(Socket_Action_DTO action_dto)` 는 **서버에서 수신한 군단 이동 액션을 현재 플레이어 화면(JoinedBlockDataList)...
created: 2026-05-20
updated: 2026-05-20
---

← [[World_MOC]]


# WorldManager.IsVisibleMoveData 이동 가시성 로직 분석

## 개요

`WorldManager.IsVisibleMoveData(Socket_Action_DTO action_dto)` 는 **서버에서 수신한 군단 이동 액션을 현재 플레이어 화면(JoinedBlockDataList)에서 보여줄지 말지**를 결정하는 필터 함수다. `true` 이면 해당 이동 연출을 표시하고, `false` 이면 무시한다.

- **위치**: `Assets/World/Scripts/WorldManager.cs` 내 `IsVisibleMoveData`
- **호출 맥락**: 블록 단위로 이동 목록을 갱신할 때, 각 `Socket_Action_DTO` 에 대해 가시성 판정 후 표시/비표시 결정

## 주요 책임 / 구성 요소

| 요소 | 설명 |
|------|------|
| `action_dto.move_path_slot` | `MarchLine.PATH` 리스트. 각 슬롯은 `px`, `py`, `move_time`(해당 좌표 **도착 완료** 시각) 보유 |
| `JoinedBlockDataList` | 현재 플레이어가 “참조 중”인 월드 블록 ID 목록 (`WorldSocketDataModel.instance` 의 `block_data.Keys`) |
| `curLODLevel` | LOD 레벨. 5 이하면 가시성 블록만 통과하면 대부분 표시 |
| `action_dto.user_no` | 이동 주체 유저 번호. 내 군단이면 LOD와 관계없이 표시 |

**판정 흐름 요약**

1. `action_dto` null → `false`
2. `move_path_slot` 이 있으면: **현재 시각 기준 “보여줄 수 있는 블록” 후보**를 계산한 뒤, 이 후보와 `JoinedBlockDataList` 의 교집합이 없으면 `false` (이미 지나간 녀석 로그)
3. `curLODLevel <= 5` → `true`
4. `action_dto.user_no == 내 유저` → `true`
5. 그 외 → `false`

## 문제점 (개선 전)

- **`move_time`** 은 “해당 좌표에 **도착한** 시각”이다.
- 기존 로직은 `move_path_slot.Where(x => x.move_time >= now)` 로 **“현재 시각 이후에 도착할 경유지”만** 사용했다.
- 따라서 **C → D 이동 중**이고 `move_time(C) < now < move_time(D)` 인 순간에는:
  - “미래 도착” 슬롯에는 **D만** 남고,
  - 실제 군단 위치는 C~D 사이(예: 여전히 블록 3)인데, 후보 블록에 **3이 빠져** 3번 블록을 보고 있을 때 `false` 가 되어 **보이지 않는 문제**가 있었다.

## 해결 방법: 직전 경유지 포함

- **핵심**: `move_time >= now` 인 **첫 슬롯**을 찾은 뒤, 그 **바로 직전 경유지(인덱스 -1)** 도 “현재 시각에 군단이 있을 수 있는 위치”로 보고, 가시성 후보 블록에 함께 넣는다.
- **경로**는 `move_time` 오름차순으로 정렬한 뒤:
  - **firstFutureIndex** = `path.FindIndex(x => x.move_time >= now)`
  - `-1`: 모두 과거 → **마지막 슬롯**만 후보
  - `0`: 첫 슬롯부터 미래 → **0번부터 끝까지** 후보
  - `> 0`: **firstFutureIndex - 1** 슬롯 + **firstFutureIndex ~ 끝** 슬롯을 모두 후보에 포함

이렇게 하면 C→D 이동 중에는 C(직전)와 D(미래) 블록이 모두 후보에 들어가, 3번 블록 시야에서도 `true` 로 표시된다.

## 테스트 시나리오 (개념)

경로 예: **A(block_id=1) → B(3) → C(3) → D(4)**. `move_time` 은 각 좌표 도착 시각.

| 시나리오 | 현재 시각 / 군단 위치 | 카메라(JoinedBlockDataList) | 기대 결과 |
|----------|------------------------|------------------------------|-----------|
| 1 | C~D 사이 이동 중 | 1번만 | 후보에 3,4 포함, 1 없음 → **false** |
| 2 | C~D 사이 이동 중 | 4번만 | 후보에 3,4 포함, 4 있음 → LOD/유저 조건으로 **true** 가능 |
| 3 (버그 수정 대상) | C~D 사이 이동 중 | 3번만 | 변경 후 후보에 3 포함 → **true** |
| 4 | 모든 move_time < now (도착 완료) | 마지막 블록(4번) | 후보는 마지막 슬롯만(4번) → 4번이면 **true** |
| 5 | 모든 move_time < now | 다른 블록만 | 후보(4번)와 교집합 없음 → **false** |

수동/로컬 테스트 시: 위 경로와 비슷한 `move_path_slot` 과 서버 시간을 가진 `Socket_Action_DTO` 로 `IsVisibleMoveData` 를 호출해, JoinedBlockDataList 를 1/3/4번만 포함하도록 바꿔가며 결과를 확인하면 된다.

## 관련 코드 / 문서

- [[WorldSocketDataModel]] — `JoinedBlockDataList`, `Socket_Action_DTO`
- [[marchline_system_analysis]] — `MarchLine.PATH`, `move_path_slot` 의미
- `MKCommon.MakeBlockIndex(int x, int z)` — 좌표 → 블록 인덱스

## 정리

- **가시성 후보**는 “현재 시각 기준 군단이 있을 수 있는 블록”으로, **직전 경유지 + 미래 경유지**를 포함하도록 수정했다.
- 기존 LOD·내 군단 우선 노출 정책은 그대로 두었고, **블록 후보 계산**만 정교하게 바꿨다.


