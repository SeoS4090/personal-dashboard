---
tags:
  - system/troop
  - concern/bug
  - concern/readability
  - concern/performance
  - status/done
aliases:
  - Troop_Manager.crossPath / MakeCrossPosition 분석
description: 추적(Tracking) 로직에서 공격자 경로를 재계산하며, 방어자(defenser)의 이동 경로(move_path_slot)와 공격자(attacker)의 현재 위치를 기반으로 교차/접촉 지점을 계산한다.
created: 2026-05-20
updated: 2026-05-20
---

← [[Troop_MOC]]


# Troop_Manager.crossPath / MakeCrossPosition 분석

## 개요
추적(Tracking) 로직에서 공격자 경로를 재계산하며, 방어자(defenser)의 이동 경로(move_path_slot)와 공격자(attacker)의 현재 위치를 기반으로 교차/접촉 지점을 계산한다.

## 주요 책임/구성 요소
- Troop_Manager.crossPath(defenser, attacker): 추적 상황에서 교전(또는 교차) 지점 계산 후 공격자 경로 생성, 방어자 경로 보정.
- Troop_Manager.MakeCrossPosition(defenser, source_no, attacker): 방어자 경로 중 ‘만나는 지점’을 수치적으로 탐색.
- 호출 경로 예시: MarchLine.UpdateAttacker()(NetworkTroop) → Troop_Manager.crossPath()

## 데이터/의존성 관계
- 입력 데이터: MarchLine.move_path_slot, start_time/end_time, GetCurrentPos(), 	arget_key/target_type
- 외부 의존: MKHttp.instance.GetServerTime(), MKNavMeshManager.Instance.FindPath(), FirebaseManager.instance.CrashlyticsLog()

## 문제점 및 개선 제안
### 발생 이슈
- InvalidOperationException: Sequence contains no elements
- 원인: 빈 컬렉션에 대해 Last()/First() 호출 (특히 crossPath() 및 MakeCrossPosition() 내부)
- 영향: Non-fatal 예외로도 프레임 내 로직 흐름이 끊겨, 피추적 부대(b)의 행군 입력이 무시/미적용되는 현상으로 이어질 수 있음

### 적용한 개선
- crossPath() 및 MakeCrossPosition()에서 move_path_slot/부분 시퀀스가 비어있는 경우를 방어하여 예외를 제거
- DefensePath.Insert() 인덱스 음수 가능성 방어
- 공격자 경로가 비어있는 상태에서 Last() 사용을 조기 반환으로 차단

### 추가 개선 아이디어(후속)
- 추적/행군 동시 입력 시, 예외가 아니라도 ‘재계산 중’ 같은 사용자 피드백(토스트/상태 UI) 제공 고려
- MakeCrossPosition의 수치 탐색 루프(최대 100회)에서 실패 시 fallback 정책을 더 명확히(예: nearest valid poly centroid)

## 게임플레이/성능/메모리 영향
- 예외 제거로 입력/행군 적용이 중단되는 위험 감소 (UX 개선)
- 경로 탐색 자체 비용은 동일하며, 추가 분기/검사는 미미한 수준

## 발생 이슈 2: origin_no NavMesh 밖 좌표 오염 (2026-04-15)

### 증상
군단 추적 시 전투 예약 좌표(`origin_no`)가 NavMesh 밖 위치로 설정되어 서버에 잘못된 전투 위치가 전송됨.

### 원인
`crossPath` L1111에서 경로 검증 전에 `origin_no`를 먼저 대입:

```csharp
// 수정 전 — 경로 검증 전에 오염
defenser.origin_no = attacker.origin_no = attacker.target_no =
    MKCommon.MakeSourceNum((long)pos.Item1.x, (long)pos.Item1.y);

var path = MakePath(attacker_cur_pos, attacker.target_no, attacker.ally_no);
if (path == null)
{
    // gate fallback 성공해도 origin_no 업데이트 없음
    // 실패 시 return — 이미 오염된 origin_no가 남음
}
```

3가지 오염 경로:
1. 교차점 자체가 NavMesh 밖 → `MakePath` 즉시 null → gate fallback 성공해도 origin_no는 원래 밖 좌표
2. gate fallback도 전부 실패 → `return null` 전에 이미 origin_no 오염
3. 이전에 유효했던 origin_no가 null 반환 후에도 NavMesh 밖 값으로 덮어써짐

### 수정 내용

```csharp
// 수정 후 — target_no만 임시 설정
attacker.target_no = MKCommon.MakeSourceNum((long)pos.Item1.x, (long)pos.Item1.y);

var path = MakePath(attacker_cur_pos, attacker.target_no, attacker.ally_no);
if (path == null)
{
    foreach (var g in GetGateCandidates())
    {
        long fallback_no = MKCommon.MakeSourceNum(...);
        path = MakePath(attacker_cur_pos, fallback_no, attacker.ally_no);
        if (path != null)
        {
            attacker.target_no = fallback_no; // 실제 도달 위치로 업데이트
            break;
        }
    }
    if (path == null) return null; // origin_no 미변경
}

// 경로 검증 완료 후 origin_no 확정
defenser.origin_no = attacker.origin_no = attacker.target_no;
```

아울러 반환 타입을 `(MarchLine, MarchLine)?`(nullable)로 변경하여 실패 시 `null` 반환.
자세한 내용은 [[NetworkTroop_UpdateAttacker_Analysis]] 이슈 5 참고.

### 시뮬레이션 검증 결과

| 시나리오 | 수정 전 | 수정 후 |
|----------|---------|---------|
| 교차점 NavMesh 안 | (50,50) ✓ | (50,50) ✓ |
| 교차점 밖 → gate fallback 성공 | (120,50) ✗ | (95,50) ✓ |
| 모든 경로 실패 → null 반환 | (120,50) ✗ 오염 | (30,30) ✓ 보존 |

---

## 관련 문서
- [[NetworkTroop_UpdateAttacker_Analysis]]
- [[UpdateAttacker_3057_RaceCondition_BugFix]] — crossPath가 stale 데이터 기반으로 잘못된 origin을 계산하는 레이스 컨디션 수정
- [[Troop_Manager_MakeCrossPosition_Analysis]]


