---
tags:
  - system/troop
  - concern/readability
  - concern/bug
  - status/done
---

# TroopLOD simple_hero_icon 생애주기 분석

관련 문서: [[TroopLOD_SetTroopSlotData_Analysis]], [[TroopLOD_BattleOverlap_Resolve_Analysis]]

## 개요
`TroopLOD`의 `[SerializeField] SpriteRenderer simple_hero_icon`은 코드에서 동적 할당되지 않고, 프리팹 직렬화 참조에 전적으로 의존한다.  
실제 아이콘 스프라이트 세팅은 `SetHeroIcon()`에서만 수행되며, 호출은 `SetTroopSlotData()` -> `ApplyTroopInfoAndVisibility()` 경로를 따른다.

## 주요 책임/구성 요소
- 필드 선언: `Assets/World/Scripts/TroopLOD.cs`의 `simple_hero_icon`
- 세팅 지점: `SetHeroIcon()` 내부 `MKSpriteAtlasManager.Instance.GetHero_SP(simple_hero_icon, ...)`
- 호출 지점: `ApplyTroopInfoAndVisibility()`에서 `SetHeroIcon()` 호출
- LOD 표시 연계: `SetLOD()`는 `iconObject` 활성/비활성만 제어하고 `simple_hero_icon` 참조 자체는 만지지 않음

## 데이터/의존성 관계
- `simple_hero_icon` 값의 출처: Unity Inspector 직렬화(프리팹/프리팹 변형/씬 override)
- 런타임 의존성:
  - `actionDTOData`에서 리더 ID 계산
  - `MKSpriteAtlasManager.GetHero_SP`로 비동기/콜백 기반 스프라이트 주입
- 방어 코드:
  - `if(simple_hero_icon)` 체크가 있어 null일 때 크래시는 피하지만, 아이콘은 무세팅 상태로 남는다(침묵 실패)

## 문제점 및 개선 제안
### 확인된 현상
- `TroopLOD.prefab`에서는 `simple_hero_icon`이 정상 연결됨.
- `NPCTroopLOD.prefab`, `NPCFort.prefab`, `NPCMonster.prefab`에서는 `simple_hero_icon: {fileID: 0}`.
- NPC 계열은 `NPCTroopLOD.SetHeroIcon()`이 override되어 base의 `simple_hero_icon` 세팅 로직을 사용하지 않으므로 현재 구조상 치명 오류는 아님.

### 세팅 누락 가능 경로
1. `TroopLOD.prefab` 또는 그 변형에서 Inspector 참조가 해제된 경우
2. 씬 인스턴스 override로 해당 필드만 `None` 처리된 경우
3. 머지 충돌/프리팹 YAML 수동 수정 중 `fileID` 유실
4. 런타임에 연결된 `SpriteRenderer` 오브젝트가 제거/파괴된 경우

### 개선 제안
- `Awake()` 또는 `OnValidate()`에 `Debug.Assert(simple_hero_icon != null, "...")`(비-NPC 타입에 한정) 추가
- `SetHeroIcon()`에서 null일 때 `Debug.LogWarning` 1회 로깅(키/프리팹명 포함)으로 침묵 실패 가시화
- 가능하면 `iconObject` 하위에서 이름 기반 fallback 탐색(`GetComponentInChildren<SpriteRenderer>`)을 옵션으로 두어 런타임 복구 경로 마련

## 게임플레이/성능/메모리 영향
- 게임플레이: LOD4~5에서 군단 식별용 영웅 아이콘이 비어 보일 수 있어 판독성 저하
- 성능: null 분기 자체의 비용은 미미. 다만 아이콘 누락으로 사용자 오판/UX 비용 발생
- 메모리: 직접 영향은 거의 없음. 단, fallback 탐색을 매프레임이 아닌 초기 1회로 제한해야 GC/탐색비용 안정적

## 결론
현재 `simple_hero_icon`은 "직렬화 참조가 있으면 동작, 없으면 조용히 미동작" 구조다.  
즉, 크래시 위험보다는 프리팹/씬 세팅 누락 시 기능 저하(아이콘 미표시)가 핵심 리스크다.
