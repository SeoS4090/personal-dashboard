# Troop_Manager.MakePath 함수 분석

## 1. 개요
`MakePath` 함수는 출발지(`source_no`)에서 목적지(`target_no`)까지의 이동 경로(`List<Vector2>`)를 계산하는 함수입니다. 단순한 경로 탐색뿐만 아니라, **NavMesh 매니저의 초기화 상태를 방어적으로 확인**하고, **아군 여부에 따른 성문(Gate) 통과 여부**를 처리하며, **성능 및 디버깅 로그**를 남기는 역할을 수행합니다.

## 2. 로직 상세 분석

### 2.1. 방어적 초기화 (Defensive Initialization)
- **목적**: `MKNavMeshManager`가 초기화되지 않은 상태에서 경로 탐색이 요청될 경우, 게임이 멈추거나 에러가 발생하는 것을 방지합니다.
- **동작**:
  1. `MKNavMeshManager.Instance` 또는 `GetWorldNavMesh()`가 `null`인지 확인합니다.
  2. `null`이라면 `FortWarDataManager.instance.ReinitializeNavMeshManager()`를 호출하여 재초기화를 시도합니다.
  3. `isNavMeshReinitAttempted` 플래그를 사용하여 재초기화가 무한 반복되지 않도록 방지합니다 (1회 시도).
  4. 재초기화 실패 시 `null`을 반환합니다.

### 2.2. 성문(Gate) 처리 로직
- **코드**: `MKNavMeshManager.Instance.UpdateGateMakePath(ally_no, target_no, Gate_Forece_Open, ref NavMeshClose);`
- **동작**:
  - `ally_no`(아군 식별)와 `Gate_Forece_Open`(강제 개방 여부)을 기반으로 경로 탐색 시 지나갈 수 있는 문과 없는 문을 설정하는 것으로 보입니다.
  - **주의**: `NavMeshClose`라는 리스트를 `ref`로 넘기고 있지만, 이 함수 내에서 **후처리가 보이지 않습니다.** 만약 `UpdateGateMakePath`가 NavMesh의 상태(Polygon의 활성/비활성)를 영구적으로 변경한다면, 이 함수가 끝난 후 상태를 복구하는 로직이 누락되었을 가능성이 있습니다.

### 2.3. 경로 탐색 및 성능 측정
- **Stopwatch 사용**: `System.Diagnostics.Stopwatch`를 사용하여 두 구간의 시간을 측정합니다.
  1. **NavMesh 잠금/설정 시간**: `UpdateGateMakePath` 및 준비 시간.
  2. **길찾기 연산 시간**: `MKNavMeshManager.Instance.FindPath` 실행 시간.
- **좌표 변환**: `MKCommon.GetX/Y`를 통해 `long` 타입의 노드 번호를 `Vector2` 월드 좌표로 변환합니다.

### 2.4. 디버깅 및 로그
- **실패 시 진단**: 경로를 찾지 못한 경우(`targetList == null`), 시작점과 끝점이 NavMesh 폴리곤 위에 존재하는지(`ContainPointNavPoly`) 확인하여 로그에 추가합니다. 이는 "길이 없는 것인지" 아니면 "좌표가 유효하지 않은 것인지" 구분하는 데 유용합니다.
- **로그 출력**: `Debug.LogWarning(log)`를 통해 성공/실패 여부와 소요 시간을 출력합니다.

## 3. 주요 문제점 및 개선 제안

### 3.1. Side Effect (부작용) 우려
- **Gate 상태 복구 누락 가능성**: `UpdateGateMakePath`가 NavMesh의 폴리곤 속성을 변경한다면, 경로 탐색이 끝난 후 이를 원래대로 되돌리는 로직이 필요할 수 있습니다. 현재 코드에서는 `NavMeshClose` 리스트가 생성만 되고 사용되지 않아, **다른 유닛의 경로 탐색에 영향을 줄 위험**이 있습니다. (확인 필요)

### 3.2. 과도한 로그 (Log Noise)
- **`Debug.LogWarning` 남발**: 경로 탐색은 빈번하게 일어나는 연산인데, 성공 시에도 `LogWarning`으로 상세 로그를 남기고 있습니다. 이는 콘솔을 어지럽히고 성능에 영향을 줄 수 있습니다.
  - **제안**: 실패 시에만 `LogError` 또는 `LogWarning`을 남기고, 성공 시에는 조건부 컴파일(`IsDebug`)이나 `Log` 레벨로 낮추는 것이 좋습니다.

### 3.3. 구조적 결합도 (Coupling)
- **매니저 재초기화 로직**: `Troop_Manager`가 `FortWarDataManager`를 통해 `MKNavMeshManager`를 재초기화하는 것은 책임 범위를 벗어납니다. 초기화 보장은 상위 레벨이나 매니저 내부에서 처리되어야 하며, 경로 탐색 함수는 기능 수행에만 집중하는 것이 깔끔합니다.

### 3.4. Null 체크 및 리턴
- `targetList`가 `null`일 때 로그를 남기고 그대로 `null`을 리턴합니다. 호출하는 쪽에서 `null` 처리가 되어 있는지 확인이 필요합니다. 빈 리스트(`Count == 0`)와 `null`의 의미를 명확히 구분해야 합니다.
