---
title: TroopLOD 전투 이펙트 분석
tags:
  - system/battle
  - system/troop
  - concern/performance
  - concern/bug
  - status/done
---

# TroopLOD 전투 이펙트 분석

## 개요
`StartEffectCorutine()`/`CreateEffectCoroutine()`는 서버 전투 메시지(`CS_CombatMessage.Message`)를 월드 데미지 텍스트와 스킬/버프 이펙트로 변환하는 파이프라인이다. 일반 공격은 합산 표현, 스킬/버프는 타입별 분류 후 순차 노출을 수행한다.

## 주요 함수 묶음과 책임
- **엔트리**: `StartEffectCorutine(msgs, enemy)`
- **메인 파이프라인**: `CreateEffectCoroutine(msgs, enemy)`
- **효과 분류**: `GetEffectType(effect_type, buff_id, msg_effect_type)`
- **출력 생성**: `CreateEffect(...)`

## 처리 단계
1. 일반 공격(타입 1/2) 집계
   - 아군/적군 피해를 각각 합산해 중복 숫자 난립을 방지.
   - 0 이하 피해는 출력하지 않음.
2. 스킬/버프(타입 3/5/6/7/8/9) 그룹화
   - `a`, `p_parse[0]` 기반 그룹으로 묶고 같은 `effect_id` 중복 출력을 방지.
   - 특성(타입 6)과 Companion 스킬(8/9)은 별도 데이터 테이블 매핑 사용.
3. 월드 UI 출력
   - `WorldDmgEffect` 프리팹 인스턴스 생성 후 부모 Transform에 부착.
   - 특수 케이스(예: 파더 글로우웜) 추가 임팩트 이펙트 재생.

## 데이터/의존성 관계
- 데이터 원천: `msgs[].t`, `msgs[].p_parse`.
- 매핑 테이블: `MKGameDataModel.heroSkillEffect`, `heroTraitEffect`, `companionSkillEffect`, `normalBuff`.
- 텍스트: `MKTerm` 버프명 조회.
- 비주얼: `WorldManager.worldDmgPrefab`, `MKEffectSystemManager`.

## 문제점 및 개선 제안
- 코루틴 내부 로직 길이가 길고 분기가 많아 디버깅 난도가 높다. "메시지 파싱/효과 타입 해석/출력 발행" 3단계로 함수 분리 권장.
- `List<long> alreadyDrawed`와 `lastInBuffList`의 중복 억제 규칙이 분산되어 있어, 표시 정책 통합 객체가 있으면 유지보수성이 좋아진다.
- 매프레임은 아니지만 전투 메시지 대량 처리 시 LINQ 다중 사용이 GC를 유발할 수 있다. hot path에서 명시 루프로 치환 고려.

## 게임플레이/성능/메모리 영향
- 합산 표시 로직은 전투 가독성을 크게 개선한다.
- 이펙트/텍스트 인스턴스 생성량이 많으면 전투 대규모 구간에서 스파이크 가능성이 있다.
- 예외 처리(`try-catch`)가 포함되어 런타임 크래시 방지에는 유리하나, 로그량 과다 시 분석 노이즈가 증가할 수 있다.

## 관련 문서
- [[battle_log_analysis]]
- [[TroopLOD_DTO_SyncPipeline_Analysis]]

