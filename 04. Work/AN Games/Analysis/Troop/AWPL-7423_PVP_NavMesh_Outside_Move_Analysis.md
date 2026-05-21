---
tags:
  - analysis
  - system/troop
  - concern/bug
  - concern/pathfinding
  - concern/pvp
  - status/done
aliases:
  - AWPL-7423
  - NavMesh 밖 전투 방지
description: PVP 전투 위치가 NavMesh 범위 밖에 설정되어 NRE/IOE 크래시 발생 — 이진탐색 fallback으로 수정
created: 2026-05-21
updated: 2026-05-21
---

← [[Troop_MOC]]

# AWPL-7423 PVP NavMesh 외부 이동 분석

## 요약

### 무슨 문제였나?
PVP 전투(영토 전투)에서 부대가 이동 불가 지역에서 전투를 시작하려 할 때 게임이 강제 종료(크래시)되는 현상이 발생했다. 지형 바깥 위치에서 경로를 계산하려다 오류가 나는 상황이었다.

### 어떻게 고쳤나?
| 수정 항목 | 내용 |
|-----------|------|
| 크래시 1: NRE | NavMesh 범위 밖 좌표에서 경로 계산 시 null 반환 → null 체크 추가 |
| 크래시 2: IOE | move_path_slot 정렬 비교자 오류 → 정렬 비교자 수정 |
| 위치 보정 | NavMesh 밖 교차 지점 감지 시 이진탐색(binary search)으로 가장 가까운 유효 위치 탐색 |

### 현재 상태는?
- ✅ NRE 크래시 수정 완료 (커밋 f4f3a206)
- ✅ IOE 크래시 수정 완료
- ✅ 이진탐색 1차 fallback 구현 완료

> **한 줄 요약**: "PVP 전투 위치가 이동 불가 지형 밖으로 계산될 때 발생하는 크래시를 이진탐색 fallback과 방어 코드로 수정했다."

---

## 1. 현상/개요

PVP 전투에서 공격자와 방어자가 교전 위치를 협상할 때 `MakeCrossPosition`이 두 부대 경로의 교차 지점을 계산한다. 이 교차 지점이 NavMesh 범위 밖에 위치할 경우:

- NavMesh A* 경로 탐색 시 null 반환 → `NullReferenceException` 크래시
- move_path_slot 정렬 과정에서 비교자 오류 → `IndexOutOfRangeException` 크래시

두 크래시 모두 Crashlytics에 다수 보고되어 AWPL-7423으로 등록됐다.

## 2. 원인 분석

```
MakeCrossPosition()
  └── 교차 지점 계산 → (x, z) 좌표 반환
        └── NavMesh 범위 검사 없음
              └── NavMesh.SamplePosition() 실패 → null path
                    └── NullReferenceException
```

`MakeCrossPosition`은 두 부대의 이동 벡터 연장선 교차 지점을 기하학적으로 계산하지만, 해당 좌표가 NavMesh 위에 있는지 검증하지 않는다. 월드맵 가장자리, 해양 지역, 장애물 내부 등에서 교차 지점이 NavMesh 외부로 나올 수 있다.

정렬 비교자 오류는 `move_path_slot` 리스트를 정렬할 때 비교 함수의 반환값이 일관성(동치 이행성)을 만족하지 못해 발생했다.

## 3. 수정 방법

**1) NRE 방어**
```csharp
if (path == null || path.status != NavMeshPathStatus.PathComplete)
{
    // fallback: 이진탐색으로 NavMesh 내 가장 가까운 유효 위치 탐색
    crossPos = BinarySearchValidNavMeshPos(startPos, crossPos);
}
```

**2) 이진탐색 fallback 구현**
`startPos`(유효 위치)와 `crossPos`(무효 위치) 사이를 이진탐색하여 NavMesh 경계에서 가장 가까운 유효 좌표를 찾는다. 최대 반복 횟수(8회)로 무한루프를 방지한다.

**3) 정렬 비교자 수정**
```csharp
// 수정 전: 동치 이행성 미보장
return a.move_time < b.move_time ? -1 : 1;

// 수정 후
return a.move_time.CompareTo(b.move_time);
```

## 연관 문서

- [[Troop_Manager_MakePath_Analysis]] — NavMesh A* 경로 탐색 공유 로직
- [[Troop_Manager_MakeCrossPosition_Analysis]] — 이진탐색 기반 요격 지점 계산 전체 분석
- [[TroopLOD_BattlePosition_3rd_Refinement_Analysis]] — 전투 위치 보정 3차 정제
