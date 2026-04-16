---
tags:
  - system/troop
  - concern/readability
  - concern/performance
  - #bug
---

# TroopLOD 전투 위치 겹침(공격자만 오프셋) 해결 아이디어

## 개요
- `TroopLOD.ApplyPathAndPositionUpdate()`에서 전투 상태(`MKConstant.TROOP_STATE.BATTLE`)일 때, 각 군단의 `move_path_slot.Last()`를 기반으로 `transform.position`을 결정한다.
- `TroopData.json` 기준으로 방어자(`user_no=17010`)와 공격자(`user_no=15483`)의 `move_path_slot` 마지막 좌표(`px=44, py=420`)가 동일하여, 전투 진입 시 동일 위치 겹침 가능성이 있다.

## 관찰(데이터 근거)
- 방어자(17010): `target_no=4200044`, `move_path_slot` 마지막 `{px:44, py:420}`
- 공격자(15483): `target_no=4200044`, `move_path_slot` 마지막 `{px:44, py:420}`
- 현재 `ApplyPathAndPositionUpdate()`의 전투 위치 계산은 `end`와 `prev` 방향 부호 및 특정 조건 스케일 분기를 사용하므로,
  - 두 군단의 `prev -> end` 방향이 같으면,
  - `dir` 결과가 동일해져 위치 겹침이 발생할 수 있다.

## 목표
- 방어자의 위치는 “원래 목적지(4200044) 기반”으로 유지한다.
- 공격자(15483 혹은 공격측 구분)만 겹치지 않는 다른 배치(오프셋)를 선택한다.

## 제안 해결책(로컬 충돌 감지 + 공격자 오프셋)
### 1) 충돌 감지
- 전투 상태 처리 구간에서( `ApplyPathAndPositionUpdate()` 내부 `if (actionDTOData.status == BATTLE)` ),
  - 현재 군단의 `end = move_path_slot.Last().toVector3()` (Unity 좌표 가정: x=px, z=py)
  - 같은 `target_no` 또는 같은 `end` 좌표를 공유하는 “방어측” 군단이 존재하는지 확인한다.
- 방어/공격 구분은 현재 데이터에서 `sally_type`이 각각 `0(방어) / 1(공격)` 형태로 보이므로,
  - 일반화 가능: `sally_type==0`이면 방어로 취급, 나머지를 공격으로 취급.

### 2) 공격자만 오프셋 배치
- 동일 end 좌표 충돌 시, 공격자에게만 다음 오프셋 후보를 적용:
  - 후보 예: `(+d,0)`, `(-d,0)`, `(0,+d)`, `(0,-d)` (x/z 평면)
  - `d`는 모델/타일 스케일에 맞춰 1~2 단위를 시작값으로 추천.
- “이미 선택된 오프셋 자리”가 다른 군단에 점유되어 있으면, 다음 후보로 넘어가며
  - greedy 방식으로 충돌 없는 첫 번째 좌표를 선택한다.

### 3) 적용 위치
- 전투 분기에서 `transform.position = dir` 직전에,
  - `dir` 또는 `move_path_slot.Last().px/py` 값을 함께 수정하여 경로 라인/표시도 일치시키는 것을 권장.
- 방어측은 어떤 오프셋도 적용하지 않아 목적지 고정을 보장.

## 성능 영향
- `objTroopDict.Values` 선형 탐색 기반 충돌 감지는 군단 수가 많으면 비용이 커진다.
- 완화:
  - 특정 `target_no==4200044` 또는 `end 좌표`로 먼저 필터링
  - 프레임마다 반복되는 호출이 많으면 캐싱(예: end 좌표->점유 상태)을 고려.

## 리스크/질문
- `toVector3()` 변환이 Unity 좌표계에서 end가 정확히 x/z로 매핑되는지 확인 필요.
- 공격자 오프셋이 전투 연출/경로 라인/충돌체 크기와 충돌하지 않는 거리 d 튜닝 필요.

