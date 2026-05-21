---
tags:
  - analysis
  - system/troop
aliases:
  - Troop_Manager.MakeCrossPosition 함수 분석
description: `MakeCrossPosition` 함수는 공격 부대(`attacker`)가 이동 중인 방어 부대(`defenser`)를 요격(Interception)하거나 추적(Pursuit)할 때, 두 부대가 만나는 예상 ...
created: 2026-05-20
updated: 2026-05-20
---

← [[Troop_MOC]]

# Troop_Manager.MakeCrossPosition 함수 분석

## 1. 개요
`MakeCrossPosition` 함수는 공격 부대(`attacker`)가 이동 중인 방어 부대(`defenser`)를 요격(Interception)하거나 추적(Pursuit)할 때, 두 부대가 만나는 예상 지점(`Vector2`)과 해당 지점의 경로 인덱스(`int`)를 계산하는 핵심 로직입니다.

## 2. 로직 상세 분석

### 2.1. 유효성 검사 (Validation)
- **입력값 확인**: `defenser`, `attacker` 객체가 `null`인지 확인합니다.
- **경로 확인**: `defenser.move_path_slot`이 비어있는지 확인합니다.
- **예외 처리**: 유효하지 않은 경우 `CrashlyticsLog`를 남기고 `(Vector2.zero, 0)` 또는 방어자의 현재 위치를 반환합니다.

### 2.2. 정면 승부 (Jousting / Head-to-Head)
- **조건**: `defenser.target_key == attacker.key && attacker.target_key == defenser.key`
  - 서로가 서로를 타겟으로 하고 있는 경우입니다.
- **로직**:
  1. 방어자의 전체 이동 경로 중 중간 지점(`center_sec`)을 기준으로 이전(`prev`)과 이후(`to`) 경로를 찾습니다.
  2. 두 지점 사이의 시간 비율(`ratio`)을 계산하여 `Vector2.Lerp`로 충돌 예상 지점(`tempEndPos`)을 계산합니다.
  3. **NavMesh 보정**: 계산된 위치가 유효한 NavMesh 위인지 확인하기 위해 `Round`, `Ceil`, `Floor` 순서로 좌표를 정수화하여 `FindPath`를 시도합니다.
  4. 유효한 위치를 찾으면 해당 위치를 반환하고, 실패하면 계산된 `tempEndPos`를 그대로 반환합니다.

### 2.3. 추적 로직 (Pursuit)
서로 타겟팅하지 않는 일반적인 추적 상황입니다. 두 단계의 루프를 통해 예상 지점을 찾습니다.

#### 1단계: 대략적인 구간 탐색 (Coarse Search)
- **루프 구조**: `while (true)` (최대 100회 제한)
- **동작**:
  1. `CheckCanMovePos`: 현재 시작 위치에서 탐색 위치(`searched_pos`)까지 이동 가능한지 확인합니다.
  2. `attacker.Init`: 공격자의 경로를 갱신하고 이동 시간을 계산합니다.
  3. **교차 시간 계산 (`cross_time`)**:
     - `move_t`: 방어자가 해당 위치에 도달하는 시간
     - `attacker.move_path_slot.Last().move_time`: 공격자가 해당 위치에 도달하는 시간
     - `cross_time = move_t - attacker_time`
  4. **판단**:
     - `Math.Abs(cross_time) <= 1.0f`: 두 부대의 도착 시간 차이가 1초 이내이면 만난 것으로 간주하고 위치를 반환합니다.
     - `cross_time < 0`: 방어자가 더 빨리 지나감 -> 더 뒤쪽 경로(`target_index + 1`)를 탐색합니다.
     - `cross_time > 0`: 공격자가 더 빨리 도착함 -> 더 앞쪽 경로(`target_index - 1`)를 탐색합니다.
  5. **구간 확정**: `find` 플래그를 통해 탐색 범위(`from_pos`, `to_pos`)가 좁혀지면 루프를 종료하고 2단계로 넘어갑니다.

#### 2단계: 정밀 탐색 (Fine-tuning / Binary Search)
- **루프 구조**: `while (true)` (최대 100회 제한)
- **동작**:
  1. 1단계에서 찾은 구간(`from_pos` ~ `to_pos`) 사이에서 이진 탐색(Binary Search)과 유사한 방식으로 위치를 좁혀갑니다.
  2. `searched_pos`를 `(from_pos + to_pos) / 2` (중간 지점)으로 갱신하며 반복합니다.
  3. **종료 조건**:
     - 시간 차이가 `1.5f` 미만으로 줄어들면 해당 위치를 반환합니다.
     - 이미 탐색한 위치(`endPosList.Contains`)에 다시 도달하면 루프를 종료하고 반환합니다.

## 3. 주요 문제점 및 개선 제안

### 3.1. 성능 이슈 (Performance)
- **NavMesh Pathfinding 남발**:
  - `MKNavMeshManager.Instance.FindPath`가 루프 내부(특히 2단계 `while` 문)에서 반복적으로 호출됩니다.
  - `FindPath`는 비용이 높은 연산이므로, 매 프레임 호출되거나 다수의 유닛이 동시에 이 함수를 실행할 경우 심각한 프레임 저하를 유발할 수 있습니다.
- **제안**:
  - `FindPath` 호출 횟수를 줄이는 알고리즘 최적화가 필요합니다.
  - 직선 거리(`Vector2.Distance`)로 1차 필터링을 한 후, 꼭 필요한 경우에만 경로 탐색을 수행하도록 변경해야 합니다.

### 3.2. 코드 안정성 (Stability)
- **`while(true)` 사용**:
  - 무한 루프 방지를 위해 `index >= 100`, `count >= 100` 체크를 하고 있지만, 근본적인 알고리즘의 수렴성을 보장하지 않습니다.
  - 예외 상황에서 100번의 불필요한 연산을 수행하고 에러 로그를 남기는 구조입니다.
- **제안**:
  - 명확한 종료 조건을 가진 `for` 루프나 재귀 호출 횟수 제한을 두는 것이 좋습니다.

### 3.3. 코드 중복 (Duplication)
- **좌표 보정 로직**:
  - `Round`, `Ceil`, `Floor`를 시도하며 `FindPath`를 호출하는 코드가 3번 이상 반복됩니다 (Jousting 로직, 추적 성공 로직 등).
- **제안**:
  - `GetValidNavMeshPosition(Vector2 targetPos)`와 같은 별도 함수로 분리하여 재사용성을 높여야 합니다.

### 3.4. 매직 넘버 (Magic Numbers)
- `1.0f`, `1.5f`, `100` 등의 숫자가 하드코딩되어 있어 유지보수가 어렵고 의미를 파악하기 힘듭니다.
- **제안**: `const float INTERCEPTION_TIME_THRESHOLD = 1.0f;` 등으로 상수화해야 합니다.

### 3.5. 로직의 정확성
- **이진 탐색의 가정**:
  - 2단계 탐색에서 `(to_pos + searched_pos) / 2`와 같은 단순 중간 지점 계산은 NavMesh 상의 실제 이동 거리와 다를 수 있습니다 (장애물이 있는 경우).
  - 단순 거리 비례가 아닌, 경로 상의 거리(`Path Distance`)를 기준으로 계산해야 정확도가 높아집니다.

---

## 4. 적용된 수정 (2026-04-15)

### 4.1. 2단계 이진탐색 — `def_path == null` null 가드

**문제**: 이진탐색 중간값(`searched_pos`)이 NavMesh 밖 위치에 해당할 경우 `FindPath`가 `null`을 반환하는데, 이를 null 체크 없이 `path.AddRange(def_path)`에 바로 넘겨 `ArgumentNullException` 발생.

```csharp
// 수정 전
var def_path = MKNavMeshManager.Instance.FindPath(..., searched_pos);
var path = defenser.move_path_slot.Where(...).ToList();
path.AddRange(def_path); // ← def_path가 null이면 ArgumentNullException
```

**수정 후**: null이면 `to_pos` 방향으로 탐색 범위를 좁히고 `continue`로 이진탐색 계속 진행.

```csharp
var def_path = MKNavMeshManager.Instance.FindPath(..., searched_pos);
if (def_path == null)
{
    to_pos = searched_pos;
    searched_pos = (from_pos + searched_pos) / 2;
    continue;
}
var path = defenser.move_path_slot.Where(...).ToList();
path.AddRange(def_path);
```

**효과**: NavMesh 밖 중간값을 자동으로 건너뛰고 유효 구역 쪽으로 탐색이 수렴. 예외 없이 안정적으로 종료.

---

## 관련 문서
- [[Troop_Manager_crossPath_Analysis]]
- [[NetworkTroop_UpdateAttacker_Analysis]]


