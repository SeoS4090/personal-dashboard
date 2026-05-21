---
tags:
  - analysis
  - system/troop
aliases:
  - TroopSprite 분석
  - 레거시 부대 스프라이트 분석
description: SpritedowAnimator 기반 레거시 2D 스프라이트 부대 시각화 — 4병종 편성, 8방향 애니메이션, NavMesh 경로 이동 (WorldManager.cs에서 활성 참조됨)
status: done
created: 2026-05-21
updated: 2026-05-21
---

← [[Troop_MOC]]

# TroopSprite — 레거시 스프라이트 부대 시각화 분석

## 요약

### 무슨 문제였나?
3D 모델 기반 TroopLOD가 도입되기 전 사용하던 2D 스프라이트 방식 부대 시각화 시스템이다. 현재는 레거시이지만 `WorldManager.cs`에서 여전히 참조되어 완전히 제거되지 않은 상태다. 4병종(기/보/창/궁)이 병사 수에 따라 3~12명씩 배치되고, 이동 방향에 따라 8방향 스프라이트 애니메이션이 전환된다.

### 어떻게 고쳤나?
해당 시스템은 개선·버그 수정 대상이 아닌 레거시 코드다. 현재 상태:
- TroopLOD(3D)로 대부분 기능 이관됨
- `PoolsManager.Spawn/Despawn` (레거시 QuickPool) 사용 — TroopLOD의 `MKObjectLoadManager` 와 다름
- WorldManager.cs 내 참조가 존재하므로 즉시 삭제 불가

### 현재 상태는?
- ⚠️ 레거시 코드, 신규 기능 개발에는 사용 안 함
- ⚠️ `PoolsManager.Spawn/Despawn` — 최신 오브젝트 풀 시스템과 혼용
- 🔍 WorldManager.cs에서 참조 제거 후 삭제 가능 여부 추가 조사 필요

> **한 줄 요약**: "3D TroopLOD 이전의 레거시 2D 스프라이트 부대 클래스 — WorldManager 참조가 남아 있어 아직 활성 코드로 분류됨."

---

## 파일 개요

| 항목 | 내용 |
|------|------|
| 파일 | `Assets/World/Scripts/TroopSprite.cs` |
| 줄 수 | 1,239줄 |
| 주요 역할 | 2D 스프라이트 기반 부대 시각화 (레거시) |
| 참조 상태 | `WorldManager.cs`에서 활성 참조 확인됨 |
| 오브젝트 풀 | `PoolsManager.Spawn/Despawn` (QuickPool 레거시) |

---

## 병종별 편성 구조

4개 병종 슬롯 (기병·보병·창병·궁병):

| soldierNum 범위 | 배치 병사 수 |
|----------------|-------------|
| ≤0 | 0 |
| ≤10,000 | 3명 |
| ≤50,000 | 5명 |
| ≤200,000 | 7명 |
| ≤500,000 | 9명 |
| >500,000 | 12명 |

병사 배치 좌표는 `soldierGap = 0.6f * 0.25f = 0.15f` 간격으로 행·열 계산 (`ArrangeSoldiers()`).

영웅 1명은 최전방(`heroObject`, `subTransform[0]`), 병사들은 뒤에 병종별 subObject에 묶임.

---

## 행군 모드

```csharp
public enum TroopMarchMode { Circular, Linear, Nevmesh }
```

| 모드 | 설명 |
|------|------|
| Circular | 미리 등록된 경유지 목록을 순환 이동 (NPC 순찰 등) |
| Linear | 단일 목표 직선 이동 |
| Nevmesh | NavMesh 경로 탐색 후 웨이포인트 순서대로 이동 |

---

## 8방향 스프라이트 애니메이션

```csharp
// 각도 → 방향 인덱스 (0~7)
int dir_int = (int)(Mathf.Floor(((angle + 22.5f) % 360.0f) / 45.0f));

// 애니메이션 인덱스 = dir_int + status * 5
// status: 0=Neutral, 1=Walk, 2=Attack
// 5방향(0°,45°,90°,135°,180°) + 반대편은 flipX=true로 처리
```

- 5개 방향 애니 + 3개는 좌우 반전(`FlipSpriteX`)으로 8방향 표현
- `isLeftSide[index]` 값에 따라 반전 방향 달라짐
- `SpritedowAnimator`(Elendow) 사용 — Unity Animator와 별개 레거시 컴포넌트

---

## NavMesh 경로 이동 (NavMeshToTarget)

```csharp
// 1. MKNavMeshManager.FindPath(start, end) 로 웨이포인트 목록 획득
// 2. 후속 유닛(병종[1~3])은 선두보다 row_count * soldierGap 뒤에 도착
// 3. PathLine 생성 (dottedLinePrefab 세그먼트 목록)
// 4. 이동 완료 시 PathLine Destroy
```

---

## 행군라인 렌더링

| 오브젝트 | 용도 |
|----------|------|
| `dottedLine` | 현재 이동 중 행군 라인 (도착 시 비활성화) |
| `dottedArrow` | 터치 드래그 중 목표 방향 표시 |
| `pathLineList` | NavMesh 경로 각 세그먼트 GameObject 목록 |

색상 규칙: 내 부대 → `marchLineColor` 또는 초록, 타 부대 → 흰색

---

## 선택/타겟 마크

```csharp
// selectStatus 0: 미선택 (selectMark OFF, targetMark OFF)
// selectStatus 1: 선택됨 (selectMark ON, dottedArrow ON)
// selectStatus 2: 타겟으로 선택 (targetMark ON)
```

`selectMark` / `targetMark`는 Instantiate로 생성, 매 Update 프레임 위치 동기화 + Y축 회전.

---

## 라이프사이클

```
Awake → InitOnAwake, MakeMyMark, MakeDottedLine, MakeDottedArrow,
        MakeSelectMark, MakeTargetMark, MakeResourceMark, MakeCityMark,
        MakeSoldiers, ArrangeSoldiers
Start → 뺑뺑이 모드 초기화, RotateAtOnce, reservedPosition/Target 처리
OnDestroy → heroObject Destroy, 병사 PoolsManager.Despawn, 마크류 Destroy
```

---

## TroopLOD와의 차이점

| 항목 | TroopSprite (레거시) | TroopLOD (현행) |
|------|---------------------|-----------------|
| 렌더링 | 2D SpritedowAnimator | 3D 모델 + LOD |
| 오브젝트 풀 | PoolsManager (QuickPool) | MKObjectLoadManager |
| 병종 관리 | 4개 고정 슬롯 | MKNpcResourceDTO 기반 동적 |
| 행군 모드 | Circular/Linear/NavMesh | NavMesh 단일 |
| NPC 지원 | npcDTOData 필드 있음 (미사용) | NPCTroopLOD 서브클래스 별도 |

---

## 의존성

| 의존 대상 | 역할 |
|-----------|------|
| `PoolsManager` (QuickPool) | 레거시 병사 오브젝트 풀 |
| `SpritedowAnimator` (Elendow) | 2D 스프라이트 애니메이션 |
| `MKNavMeshManager` | NavMesh 경로 탐색 |
| `MKHttp` | user_no 비교(IsMyTroop) |
| `WorldManager` | (외부 참조 — 제거 시 검토 필요) |
