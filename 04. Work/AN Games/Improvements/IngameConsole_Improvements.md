# IngameConsole 개선 사항 정리

## 1. 개요

- **IngameConsole 목적**: 플레이 중 발생하는 `Debug.Log`, `Debug.LogWarning`, `Debug.LogError` 등의 Unity 로그를 인게임 UI로 확인하고, 타입별 필터링과 스택트레이스를 제공하기 위한 도구입니다.
- **구성 요소**:
  - `Application.logMessageReceived` 이벤트를 통해 로그를 수집합니다.
  - `Queue<LogData>` 및 `MKCommon.InfiniteScrollManager<LogData>`를 사용해 최대 300개의 로그를 관리하면서, UI Toolkit 기반 스크롤 리스트로 출력합니다.
  - 에러/워닝/기타 로그에 대한 필터 버튼과 Clear 버튼, 그리고 선택한 아이템의 스택트레이스를 보여주는 영역으로 구성됩니다.

---

## 2. 버그 및 동작 이슈

### 2.1 필터 로직 버그 (`CurrentFilter` 미사용)

- **문제 상황**
  - 코드 상에서 `CurrentFilter` 플래그를 갱신하지만, 실제 리스트를 필터링할 때는 마지막으로 클릭한 `filter` 하나만 기준으로 사용하고 있습니다.
  - 이로 인해 UI 상으로는 여러 필터를 On/Off 할 수 있을 것처럼 보이지만, 실제로는 조합 필터링이 제대로 동작하지 않습니다.

```csharp
private void OnclickFilter(LOGFILTER filter)
{
    if (CurrentFilter.HasFlag(filter))
    {
        CurrentFilter &= ~filter;
    }
    else
        CurrentFilter |= filter;

    scrollmanager?.Dispose();
    var ret = datas.Where(x => filter.HasFlag(ConvertLogtypeToFilter(x.logType))).ToList();
    scrollmanager = MKCommon.CreateInfiniteScrollManager(logscroll, logItemOne, ret,
        (log_Data, itemOne) => { UpdateLogItem(log_Data, itemOne); }, () => { });
}
```

- **개선 제안**
  - 매칭 조건을 단일 `filter` 가 아니라, 누적 상태를 담고 있는 `CurrentFilter` 로 변경합니다.
  - 파라미터 이름도 가독성을 위해 `filterToToggle` 정도로 명시해 주면 좋습니다.

```csharp
private void OnclickFilter(LOGFILTER filterToToggle)
{
    if (CurrentFilter.HasFlag(filterToToggle))
        CurrentFilter &= ~filterToToggle;
    else
        CurrentFilter |= filterToToggle;

    scrollmanager?.Dispose();

    var filtered = datas
        .Where(x => CurrentFilter.HasFlag(ConvertLogtypeToFilter(x.logType)))
        .ToList();

    scrollmanager = MKCommon.CreateInfiniteScrollManager(
        logscroll, logItemOne, filtered,
        (logData, itemOne) => UpdateLogItem(logData, itemOne),
        () => { });
}
```

---

### 2.2 색상 상수 문제 (`Color.orange`)

- **문제 상황**
  - Unity 기본 `Color` 구조체에는 `orange` 상수가 존재하지 않습니다.
  - 현재 코드에서 `Color.orange` 를 사용하는 경우 컴파일 에러가 발생하거나, 별도의 확장/유틸에 의존하게 됩니다.

```csharp
Color FilterColor(LogType logType)
{
    switch (ConvertLogtypeToFilter(logType))
    {
        case LOGFILTER.FILTER_OTHER:
            return Color.grey;
        case LOGFILTER.FILTER_ERROR:
            return Color.red;
        case LOGFILTER.FILTER_WARNING:
            return Color.orange; // 문제 지점
        default:
            return Color.cyan;
    }
}
```

- **개선 제안**
  - 경고 색상을 명시적인 RGB 값으로 정의하거나, `Color.yellow` 등 기본 제공 색을 사용하는 방식으로 수정합니다.

```csharp
case LOGFILTER.FILTER_WARNING:
    // 예: 오렌지 계열 색상 지정
    return new Color(1f, 0.65f, 0f);
```

---

### 2.3 로그 이벤트 구독/해제 타이밍

- **문제 상황**
  - `OnEnable` 에서 `Application.logMessageReceived += HandleLog;` 을 호출하는데, `scrollmanager` 가 아직 준비되지 않은 시점에 로그가 들어오면 `NullReferenceException` 이 발생할 수 있습니다.
  - `OnDisable` 에서 이벤트를 해제하지 않으면, Enable/Disable 반복 시 중복 구독이 발생할 수 있습니다.

- **안전한 패턴 제안**
  - `OnEnable` 에서 먼저 UI 및 `scrollmanager` 를 초기화한 뒤, 마지막에 `Application.logMessageReceived` 를 한 번만 등록합니다.
  - `OnDisable` 에서 반드시 `Application.logMessageReceived -= HandleLog;` 를 호출해 이벤트를 해제합니다.
  - `HandleLog` 내부에서는 방어적으로 `scrollmanager != null` 을 확인한 뒤 `AddData` 를 호출합니다.
  - 한 번만 구독하기 위해 불린 플래그(예: `_logRegistered`) 를 사용하는 방식도 가능합니다.

```csharp
private bool _logRegistered;

void OnEnable()
{
    root = GetComponent<UIDocument>().rootVisualElement;
    // ... UI 및 scrollmanager 초기화 ...

    if (_logRegistered == false)
    {
        Application.logMessageReceived += HandleLog;
        _logRegistered = true;
    }
}

void OnDisable()
{
    Application.logMessageReceived -= HandleLog;
}

void HandleLog(string logString, string stackTrace, LogType type)
{
    var newLog = new LogData
    {
        logString = logString,
        stackTrace = stackTrace,
        logType = type
    };

    datas.Enqueue(newLog);
    if (datas.Count > 300)
        datas.Dequeue();

    CalcFilterCount();

    if (scrollmanager != null)
        scrollmanager.AddData(newLog);
}
```

---

### 2.4 ClearLog 동작 불일치

- **문제 상황**
  - 현재 구현에서는 내부 큐 `datas` 만 비우고, 실제 화면에 표시하는 스크롤 리스트(및 필터 카운트)는 갱신하지 않습니다.
  - 사용자 입장에서는 Clear 버튼을 눌렀는데 UI 상의 로그 아이템이 그대로 남아 있는 것처럼 보일 수 있습니다.

```csharp
void ClearLog()
{
    datas.Clear();
}
```

- **개선 제안**
  - Clear 시점에 `scrollmanager` 의 데이터 소스도 함께 초기화하고, 필요하다면 인스턴스를 Dispose 후 빈 리스트로 재생성합니다.
  - 카운트 텍스트를 맞추기 위해 `CalcFilterCount()` 도 다시 호출합니다.

```csharp
void ClearLog()
{
    datas.Clear();

    scrollmanager?.Dispose();
    scrollmanager = MKCommon.CreateInfiniteScrollManager(
        logscroll, logItemOne, new List<LogData>(),
        (logData, itemOne) => UpdateLogItem(logData, itemOne),
        () => { });

    CalcFilterCount();
}
```

---

## 3. 코드 스타일 및 아키텍처 개선

### 3.1 Singleton 및 필드 가시성

- **현재 문제점**
  - `public static IngameConsole instance;` 형태로 노출되어 있어, 외부에서 누구나 인스턴스를 교체할 수 있습니다.
  - `DontDestroyOnLoad` 와 함께 사용할 때, 동일 프리팹이 여러 씬에 중복 배치되면 인스턴스 충돌 및 예기치 않은 동작이 발생할 수 있습니다.

- **개선 제안**
  - `Instance` 프로퍼티를 통해 외부에서 읽기만 가능하게 하고, `Awake` 에서 중복 인스턴스를 방어하는 패턴을 사용합니다.

```csharp
public static IngameConsole Instance { get; private set; }

private void Awake()
{
    if (Instance != null && Instance != this)
    {
        Destroy(gameObject);
        return;
    }

    Instance = this;
    DontDestroyOnLoad(gameObject);
}

private void OnDestroy()
{
    if (Instance == this)
        Instance = null;
}
```

---

### 3.2 필드 네이밍 및 접근 제어자

- **팀 규칙 정렬 필요**
  - 현재 필드들은 대체로 접근 제어자가 명시되지 않았거나, 소문자/스네이크 케이스 혼용이 있습니다.
  - 팀 룰에 따르면:
    - `private`/`protected` 필드는 `_camelCase` 로,
    - 외부에 노출이 필요 없는 필드는 `private` 로 두고, Inspector 노출 시 `[SerializeField] private` 를 사용하는 것이 원칙입니다.

- **개선 예시**
  - 예를 들어 다음과 같이 수정할 수 있습니다.

```csharp
[SerializeField] private LOGFILTER _currentFilter = LOGFILTER.ALL;
[SerializeField] private VisualTreeAsset _logItemOne;

private MKCommon.InfiniteScrollManager<LogData> _scrollManager;
private Queue<LogData> _datas = new Queue<LogData>();
private VisualElement _root;
private ScrollViewPro _logScroll;
private Label _stackTraceLabel;
```

---

### 3.3 LINQ 사용 및 성능 고려(선택)

- **현재 구현**
  - `CalcFilterCount` 에서 `GroupBy` + `ToDictionary` 패턴을 사용해 로그 개수를 계산합니다.
  - 최대 로그 수가 300개로 제한되어 있어, 대부분의 경우 성능 문제는 크지 않습니다.

```csharp
var ret = datas
    .GroupBy(x => ConvertLogtypeToFilter(x.logType))
    .Select(x => new { type = x.Key, count = x.Count() })
    .ToDictionary(y => y.type, z => z.count);
```

- **선택적 최적화**
  - GC 할당 및 성능에 매우 민감한 환경이라면, 단순 루프를 돌면서 카운터 세 개를 증가시키는 방식으로 교체할 수 있습니다.
  - 다만 유지보수성과 가독성을 고려했을 때, 실제 문제가 발생하기 전까지는 현재 방식도 충분히 허용 가능한 수준입니다.

---

## 4. 예시 코드 스니펫 모음

### 4.1 개선된 필터 클릭 처리

```csharp
private void OnclickFilter(LOGFILTER filterToToggle)
{
    if (_currentFilter.HasFlag(filterToToggle))
        _currentFilter &= ~filterToToggle;
    else
        _currentFilter |= filterToToggle;

    _scrollManager?.Dispose();

    var filtered = _datas
        .Where(x => _currentFilter.HasFlag(ConvertLogtypeToFilter(x.logType)))
        .ToList();

    _scrollManager = MKCommon.CreateInfiniteScrollManager(
        _logScroll, _logItemOne, filtered,
        (logData, itemOne) => UpdateLogItem(logData, itemOne),
        () => { });
}
```

### 4.2 개선된 경고 색상 정의

```csharp
private Color FilterColor(LogType logType)
{
    switch (ConvertLogtypeToFilter(logType))
    {
        case LOGFILTER.FILTER_OTHER:
            return Color.grey;
        case LOGFILTER.FILTER_ERROR:
            return Color.red;
        case LOGFILTER.FILTER_WARNING:
            return new Color(1f, 0.65f, 0f); // 오렌지 계열
        default:
            return Color.cyan;
    }
}
```

### 4.3 안전한 로그 이벤트 처리 패턴

```csharp
private bool _logRegistered;

private void OnEnable()
{
    _root = GetComponent<UIDocument>().rootVisualElement;
    // 버튼/필터/스크롤 초기화...

    if (_logRegistered == false)
    {
        Application.logMessageReceived += HandleLog;
        _logRegistered = true;
    }
}

private void OnDisable()
{
    Application.logMessageReceived -= HandleLog;
}

private void HandleLog(string logString, string stackTrace, LogType type)
{
    var newLog = new LogData
    {
        logString = logString,
        stackTrace = stackTrace,
        logType = type
    };

    _datas.Enqueue(newLog);
    if (_datas.Count > 300)
        _datas.Dequeue();

    CalcFilterCount();

    if (_scrollManager != null)
        _scrollManager.AddData(newLog);
}
```

---

## 5. 후속 작업 및 테스트 체크리스트

- **기능 동작 확인**
  - 에러/워닝/기타 필터 버튼을 개별 및 조합으로 눌렀을 때, 리스트 필터링이 `CurrentFilter` 상태와 일치하는지 확인한다.
  - Clear 버튼 클릭 시 리스트와 카운트 텍스트 모두 초기화되는지 확인한다.
  - 로그 클릭 시 상단/하단 스택트레이스 라벨이 해당 로그의 내용과 스택을 정확히 표시하는지 확인한다.

- **라이프사이클 및 싱글톤 동작**
  - 씬 전환 시 IngameConsole 오브젝트가 중복 생성되지 않고, 한 개 인스턴스만 유지되는지 확인한다.
  - 콘솔 오브젝트가 Enable/Disable 을 반복해도 로그 이벤트가 중복 구독되지 않는지 확인한다.

- **성능 및 안정성**
  - 많은 로그가 짧은 시간에 쌓이는 상황(예: 루프에서 로그 출력)에서 UI 성능이 문제 없는지 확인한다.
  - 모바일 빌드 환경(Android, iOS 등)에서도 색상/레이아웃이 기대한 대로 표시되는지 확인한다.

