---
tags:
  - analysis
  - system/troop
  - troop-lod
  - npc
aliases:
  - NPC 부대 시각화 분석
  - NPCTroopLOD 분석
description: TroopLOD를 상속한 NPC 전용 서브클래스 — 자동 이동 코루틴, NPC 분류 체계, LOD 단계별 아이콘 전략 분석
status: done
created: 2026-05-21
updated: 2026-05-21
---

← [[TroopLOD_Function_Analysis_Index]]

# NPCTroopLOD — NPC 부대 시각화 분석

## 요약

### 무슨 문제였나?
월드맵에 배치된 NPC(도적, 탐사, 보르테, 집결 보스 등) 는 플레이어 부대와 달리 서버의 이동 명령이 없는데도 자리에 가만히 서 있으면 화면이 단조로워진다. 또 NPC 종류에 따라 아이콘·레벨 표시 방식이 달라야 하는데, 이를 한 클래스에서 모두 처리해야 했다.

### 어떻게 고쳤나?
| 문제 | 해결 방법 |
|------|-----------|
| NPC가 가만히 있어 단조로움 | AutoMove 코루틴으로 2~4초 대기 후 9방향 중 랜덤 위치로 자율 이동 |
| NPC 종류 분류 복잡 | IsNPC() static으로 category + type 조합 → UseType/FormationType/BattleType 3종 반환 |
| LOD 단계별 아이콘 전략 미분화 | lod<3 병사표시, lod=4 ally 필터 시만 영웅 아이콘, lod≥5 레벨 숨김 |
| 도전 이벤트 이펙트 오브젝트 누수 | OnDisable/OnDestroy에서 Challenge_effect 명시적 Destroy + null 초기화 |

### 현재 상태는?
- ✅ NPC 자동 이동 및 분류 체계 정상 동작
- ✅ Challenge_effect 라이프사이클 보호 완료
- ⚠️ Update마다 Investigation 아이콘 상태를 프레임 체크 — 성능 최적화 여지 있음

> **한 줄 요약**: "NPC는 서버 명령 없이도 자율 이동하며, 종류에 따라 아이콘·레벨 표시가 달라지는 TroopLOD 서브클래스다."

---

## 파일 개요

| 항목 | 내용 |
|------|------|
| 파일 | `Assets/World/Scripts/NPCTroopLOD.cs` |
| 줄 수 | 1,155줄 (에디터 확장 포함) |
| 부모 클래스 | `TroopLOD` |
| 주요 역할 | NPC 부대 월드맵 시각화, 자율 이동, 분류, LOD 단계별 표시 |

---

## NPC 분류 체계

```csharp
// NPC 종류 — 전투/탐사/이벤트 구분
public enum NpcUseType
{
    None = 0,
    Npc,                  // 도적 (일반전투)
    Npc_Challenage_Event, // 도전 이벤트 NPC
    Npc_Seasonal_Event,   // 시즈널 이벤트 NPC
    Npc_Inve,             // 탐사 NPC
    Npc_Rally,            // 보르테 (집결전투)
    Npc_Fortrest,         // 도적 본거지
    Npc_Point,            // 성채 / 레이드 NPC
    Monster,              // 몬스터
}

public enum NpcFormationType { None, Alone, Troop }  // 단일 / 군단
public enum NpcBattleType    { None, Normal, Rally }  // 일반 / 집결
```

### IsNPC() — category 기반 분류 로직

```
category 1  + type 1 → NpcUseType.Npc          (일반 도적)
category 1  + type 2 → NpcUseType.Npc_Inve      (탐사)
category 1  + type 3 → NpcUseType.Npc_Challenage_Event
category 11          → Npc_Fortrest  (집결, Alone)
category 13          → Npc_Rally     (보르테, Troop)
category 14          → Npc_Seasonal_Event
category 12          → Npc_Point     (거점·요새전)
category 3           → 레이드 NPC
```

helper: `GetNPC_UseType(id)` / `GetNPC_FormationType(id)` / `GetNPC_BattleType(id)` — 내부에서 IsNPC() 위임.

---

## AutoMove 코루틴 시스템

```csharp
public static float NPC_MOVE_DISTANCE = 0.333f;

// AutoMove setter — 공격자가 있으면 해당 방향으로 고정, 없으면 자율 이동 시작
set {
    if (istargeted.Count > 0) { ... value = false; }  // 공격자 방향 고정
    _autoMove = value;
    if (_autoMove) StartCoroutine(AutoMoveStart(2.0f, 4.0f));
    else NavMeshToTarget(원위치, true);  // 원위치 복귀
}

// AutoMoveStart 루프
while (AutoMove) {
    waitSeconds = Random.Range(2, 4);   // 2~4초 대기
    if (Random.Range(0, 3) == 1) {      // 1/3 확률로 이동
        target = 원점 + pos[Random(9)] * NPC_MOVE_DISTANCE;  // 9방향 중 랜덤
        NavMeshToTarget(target, true);
        yield return WaitUntil(status == STAY);
    }
    yield return WaitForSeconds(waitSeconds);
}
```

**OnDisable 시 AutoMove = false → 코루틴 정리, 위치 원위치 복귀**

---

## SetLOD() — LOD 단계별 표시 전략

| LOD | 표시 내용 |
|-----|-----------|
| 0~2 | 병사 오브젝트 + levelText 표시 |
| 3   | 유닛 수 감소 + levelText 표시 |
| 4   | lod_ally 필터 시만 heroSpriteRender·levelText 표시 |
| ≥5  | levelText 숨김, borte_level 숨김 |

**borte_level (특수 레벨 아이콘)**:
- `Npc_Rally` / `Npc_Seasonal_Event` → borte_level 표시, levelText 숨김
- `Npc_Challenage_Event` → borte_level + levelText 병렬 표시, scale 1.1× 보정

**Challenge_effect**: lod < 3 시 활성화, OnDisable/OnDestroy에서 Destroy 후 null 초기화

---

## 영웅/병사 비동기 로드 (MakeHeros / MakeSoldiers)

- `MKObjectLoadManager.Instance.PopAsync()` 콜백 패턴 사용
- 콜백 내 `if (this == null)` 가드 — 부모 오브젝트가 이미 파괴된 경우 즉시 Push 반환
- 병사는 `MKNpcResourceDTO.NpcResLineType.LINE_1/LINE_2` 기준으로 라인 구분 생성

---

## Investigation 아이콘 (Update 프레임 체크)

```csharp
void Investigation_update() {
    if (npc_type != NpcUseType.Npc_Inve) { 아이콘 비활성화; return; }
    var slot = InvestigationManager.Instance.GetInvestigationSlotData_TargetID(...);
    if (slot == null || state != NORMAL) { 비활성화; return; }
    if (!InitInvestigation) SetInvestigationIcon();  // 1회 초기화
    // lod < 5 조건부 활성화
    InvestigationGradeIcon.gameObject.SetActive(curLODLevel < 5);
}
```

> 매 Update 호출 — 변경 없을 때도 실행됨. 이벤트 구독 방식으로 개선 여지 있음.

---

## SetLevelText() — 아이콘 스프라이트 분기

| NpcUseType | heroSpriteRender 스프라이트 |
|------------|----------------------------|
| Npc | PillagerSprite (wi_point_bandit) |
| Npc_Inve | BowmasterSprite (wi_inv_npc) |
| Npc_Challenage_Event | wi_point_scorchskull + borte_level에 난이도 아이콘 |
| Npc_Rally / Npc_Seasonal_Event | DemonfanaticSprite |

---

## 의존성

| 의존 대상 | 역할 |
|-----------|------|
| `TroopLOD` | 기반 클래스 (이동·LOD·비동기 로드 공통 로직) |
| `MKObjectLoadManager` | 비동기 영웅·병사 오브젝트 로드 |
| `InvestigationManager` | 탐사 아이콘 상태 조회 |
| `WorldManager` | 현재 LOD 레벨, WORLD_FILTER, objTroopDict |
| `MKNavMeshManager` | NavMesh 경로 탐색 |
| `MKGameDataModel` | npc / troopsGroupNpc / heroList 데이터 조회 |

---

## 성능·메모리 주의사항

- **Investigation_update()** 매 Update 호출: 탐사 NPC 수 × 프레임 = 누적 부하 가능
- **AutoMove 코루틴 누수 방지**: OnDisable/OnDestroy 이중 정리 패턴 — 코루틴 참조 명시적 null 처리
- **Challenge_effect**: Instantiate/Destroy 반복 — NPC 활성화 빈번 시 GC 발생 가능 → Pool 고려
