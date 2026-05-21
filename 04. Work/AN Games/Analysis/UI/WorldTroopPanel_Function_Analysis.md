---
tags:
  - analysis
  - system/ui
  - system/troop
aliases:
  - 월드 부대 정보 패널 분석
  - WorldTroopPanel 분석
description: 월드맵 부대 클릭 시 표시되는 정보 패널 — 진입 방향 기반 위치 계산, DOTween Fade, HP 슬라이더, 오브젝트 클릭 디스패치
status: done
created: 2026-05-21
updated: 2026-05-21
---

← [[UI_MOC]]

# WorldTroopPanel — 월드 부대 정보 패널 분석

## 요약

### 무슨 문제였나?
월드맵에서 부대를 클릭하면 이름·영웅 초상화·병사 수·HP를 보여주는 패널이 뜨는데, 패널이 부대 위에 겹쳐 가려지거나 화면 끝으로 밀려나는 문제가 있었다. 또한 패널이 떠 있을 때 카메라를 이동시키면 패널 위치가 어긋나는 현상도 있었다.

### 어떻게 고쳤나?
| 문제 | 해결 방법 |
|------|-----------|
| 패널 위치가 부대를 가림 | 공격자 진입 방향을 역산(origin_no → source_no 벡터)해 9그리드 위치 중 적합한 POS를 자동 선택 |
| 카메라 이동 시 위치 어긋남 | LateUpdate에서 isCamMoved 조건부로 매 프레임 WorldToScreenPoint 재계산 |
| 패널 출현이 딱딱함 | DOTween으로 alpha + pivot Y를 동시 트윈, 자연스러운 등장 연출 |
| 오브젝트 파괴 후 참조 오류 | OnDisable/LateUpdate 에서 try-catch NullReferenceException 방어 |

### 현재 상태는?
- ✅ 9그리드 위치 선택 및 카메라 동기화 정상 동작
- ✅ 비동기 영웅 이미지 로드 후 null 가드 완비
- ⚠️ POS_2(↑)·POS_8(↓)는 POS_1·POS_9 와 동일 처리(주석 처리) — 상하 방향 패널 레이아웃 미완성

> **한 줄 요약**: "부대가 어느 방향에서 왔는지 역산해 패널 위치를 자동 결정하고, 카메라 이동에 맞춰 매 프레임 위치를 갱신하는 월드맵 부대 정보 UI다."

---

## 파일 개요

| 항목 | 내용 |
|------|------|
| 파일 | `Assets/World/Scripts/WorldTroopPanel.cs` |
| 줄 수 | 827줄 (에디터 확장 포함) |
| 주요 역할 | 부대 정보 UI 패널 (영웅 이미지·이름·병사수·HP·rage 슬라이더) |

---

## 핵심 열거형

```csharp
public enum POS { POS_1, POS_2, ..., POS_9, NONE }  // 3x3 그리드 위치
//  POS_1(↗) POS_2(↑) POS_3(↖)
//  POS_4(→) POS_5(⊙) POS_6(←)
//  POS_7(↘) POS_8(↓) POS_9(↙)

public enum TroopType { MY, ALLY, NEUTRAL, ENEMY }
```

**색상 코드**:

| TroopType | 텍스트 색 | 배경 색 |
|-----------|-----------|---------|
| MY | `#8fee00` (초록) | `#4a7b00` |
| ALLY | `#00ccff` (청색) | `#004759` |
| NEUTRAL | `#ffffff` (흰색) | `#6d6d6d` |
| ENEMY | `#ff4841` (적색) | `#6f0400` |

---

## GetPos() — 진입 방향 기반 패널 위치 계산

```csharp
// origin_no(전투 위치) - source_no(출발 위치) 벡터 역산
var end  = MKCommon.MakePos(troop.actionDTOData.origin_no);
var prev = move_path_slot.Count < 1
    ? MakePos(source_no)
    : move_path_slot[^2].toVector3();  // 경로 끝에서 두 번째 지점

// x/z 차이로 방향 판단 → atk_POS 계산
// def_POS = atk_POS 반대 방향
```

공격자는 방어자 반대편(진입 방향)에 패널 배치 → 두 패널이 서로 대칭으로 위치.

---

## SetData(Socket_Action_DTO) — 플레이어 부대 데이터 세팅

1. 영웅 이미지 **비동기 로드** (`MKSpriteAtlasManager.GetHero_SP`):
   - 로드 완료 콜백 내 `if (this == null || heroImage == null)` 가드
   - 로드 성공 시 색상 지정(MY/ALLY/NEUTRAL/ENEMY)
2. 컴패니언 아이콘: `GetCompaion_Aspect != 0` 조건부 활성화
3. 군단 수(`target_fleet_count`): 집결 리더면 `war_memberSlotList` 합산, 아니면 `corps.Count()`
4. 병사 수(`target_unit_count`): 아군이면 `div.Sum(y=>y.num)` 합산, 적군이면 "???"
5. HP: `SetHP(cur/init)` 호출
6. 활성화 조건: `troopPanelsActive && curLODLevel <= 3 && camManager.isActiveAndEnabled`

---

## SetHP() — HP 슬라이더

```csharp
DOTweenModuleUI.DOValue(hp_prev_Slider, val, 0.5f)  // 이전 HP 슬라이더 애니
hpSlider.value = val;                                 // 현재 HP 즉시 반영
// 색상 임계값
val > 0.6f → hpColor = hpGreen
val > 0.3f → hpColor = hpOrange
else       → hpColor = hpRed
```

---

## Fade() — 등장/퇴장 애니메이션

```csharp
// alpha 0→1 (등장) 또는 1→0 (퇴장)
// pivot.y = origin_pivot.y - (1.0f - alpha) * 0.5f  → 아래에서 떠오르는 효과
DOTween.To(() => alpha, ..., to, 0.5f)
    .OnComplete(() => {
        if (destroy) DestroyImmediate(this.gameObject);
    });
```

- `destroy=true`로 호출하면 Fade Out 완료 후 즉시 `DestroyImmediate`
- `OnDisable`에서 `fade_dotoween?.Kill(false)` + alpha=0 즉시 초기화

---

## LateUpdate() — 카메라 추종 위치 동기화

```csharp
if (!WorldManager.instance.camManager.isCamMoved) return;  // 카메라 이동 시에만 갱신
UpdatePositionAndScale();  // Camera.main.WorldToScreenPoint → uiRoot.localScale 보정
```

예외 처리:
- `attachedObject == null && !destroy` → Fade(true) (파괴 예약)
- `destroy` 플래그 → DestroyImmediate
- HeroView / HeroTrailer 시스템 활성 시 패널 비활성화
- 요새전 결과 팝업 활성 시 패널 비활성화

---

## SelectAttacchedObject() — 오브젝트 클릭 디스패치

```
ResourceObject  → ShowResourceInfoPopup + SetTargetMark(RESOURCE)
NPCTroopLOD     → ShowNpcInfoPopup + SetSelectStatusPos(2) + SetTargetMark(NPC)
TroopLOD        → onClickMyTroop / Request_GetFleetData → onClickMyTroop
CityObject      → ShowUserCityInfoPopup
PointObject     → ShowPointInfoPopup + SetTargetMark(TOWER)
```

---

## 의존성

| 의존 대상 | 역할 |
|-----------|------|
| `DOTween` | Fade 애니메이션, HP 슬라이더, 군단 수 카운터 |
| `MKSpriteAtlasManager` | 영웅 초상화 비동기 로드 |
| `WorldManager` | troopPanelsActive, curLODLevel, camManager |
| `AllyManager` | IS_MyAllyUser 판정 |
| `NetworkAlly` | war_memberSlotList (집결 병사 수 합산) |
| `MKGameDataModel` | npc / troopsGroupNpc 데이터 |

---

## 알려진 문제 및 개선 여지

| 항목 | 내용 |
|------|------|
| POS_2(↑)·POS_8(↓) 미구현 | 주석 처리, 현재 POS_1·POS_9 로 fallthrough — 상하 진입 시 패널 위치 어색 |
| LateUpdate 매 프레임 실행 | isCamMoved 가드 있으나 카메라 이동 중엔 매 프레임 WorldToScreenPoint 호출 |
| `target_fleet_count` 파싱 취약 | `int.Parse(text, AllowThousands)` — 텍스트 초기화 전 호출 시 FormatException 가능성 |
