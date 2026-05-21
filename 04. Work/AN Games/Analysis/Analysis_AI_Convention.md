---
tags:
  - meta
  - convention
aliases:
  - AI 문서 작성 컨벤션
  - 분석 문서 규칙
description: AI가 분석 문서를 생성·수정할 때 따라야 하는 폴더 계층, MOC 연결, frontmatter 삽입 규칙
created: 2026-05-20
updated: 2026-05-20
---

# Analysis 문서 AI 작성 컨벤션

← [[Analysis_Index]]

> 이 파일은 AI가 `Analysis/` 하위 문서를 **생성·수정**할 때 반드시 따라야 하는 규칙을 정의한다.
> 새 문서를 만들거나 기존 문서를 편집하기 전에 이 파일을 먼저 읽어라.

---

## 1. 폴더 계층 구조

```
Analysis/
├── Analysis_Index.md          ← L1 루트 MOC (전체 진입점)
├── Analysis_AI_Convention.md  ← 이 파일
│
├── Troop/                     ← L2 시스템 폴더
│   ├── Troop_MOC.md           ← L2 MOC
│   ├── [개별 분석 문서들]
│   ├── TroopLOD/              ← L3 서브시스템 폴더
│   │   ├── TroopLOD_Function_Analysis_Index.md  ← L3 MOC
│   │   └── [개별 TroopLOD 분석 문서들]
│   └── MarchLine/             ← L3 서브시스템 폴더
│       ├── MarchLine_MOC.md   ← L3 MOC
│       └── [개별 MarchLine/PathLine 분석 문서들]
│
├── MKSummonNpc/               ← L2 시스템 폴더
│   ├── MKSummonNpcManager_Function_Analysis_Index.md  ← L2 MOC
│   └── [개별 분석 문서들]
│
├── Battle/                    ← L2 시스템 폴더
│   ├── Battle_MOC.md          ← L2 MOC
│   └── [개별 분석 문서들]
│
├── UI/                        ← L2 시스템 폴더
│   ├── UI_MOC.md              ← L2 MOC
│   └── [개별 분석 문서들]
│
├── Network/                   ← L2 시스템 폴더
│   ├── Network_MOC.md         ← L2 MOC
│   └── [개별 분석 문서들]
│
├── World/                     ← L2 시스템 폴더
│   ├── World_MOC.md           ← L2 MOC
│   └── [개별 분석 문서들]
│
└── EventUi-Onboarding/        ← L2 시스템 폴더 (별도 인덱스 체계)
    ├── 00_Index.md
    └── [개별 문서들]
```

### 배치 규칙

| 문서 유형 | 배치 위치 |
|-----------|-----------|
| 시스템 전체를 아우르는 MOC | 해당 시스템 폴더 루트 (예: `Troop/Troop_MOC.md`) |
| 서브시스템 MOC | 서브시스템 폴더 루트 (예: `Troop/TroopLOD/TroopLOD_Function_Analysis_Index.md`) |
| 개별 분석 문서 | 해당 시스템 또는 서브시스템 폴더 안 |
| 새 시스템이 필요한 경우 | `Analysis/` 하위에 새 폴더 생성 → L2 MOC 파일 생성 → `Analysis_Index.md`에 등록 |

---

## 2. Frontmatter 필드 규칙

모든 문서(MOC 포함)는 아래 frontmatter를 파일 맨 위에 삽입한다.

```yaml
---
tags:
  - <type-tag>          # 필수: 아래 태그 규칙 참조
  - system/<system>     # 필수: 소속 시스템
aliases:
  - <한국어 별칭>        # 필수: 1개 이상
description: <한 문장 설명>  # 필수: 문서가 다루는 핵심 내용
status: <status-value>  # 개별 분석 문서에만 필수 (MOC는 생략 가능)
created: YYYY-MM-DD     # 필수
updated: YYYY-MM-DD     # 필수: 수정 시 갱신
---
```

### 태그 규칙

| 태그 | 사용 조건 |
|------|-----------|
| `moc` | MOC 파일 (Analysis_Index, 시스템 MOC, 서브시스템 MOC) |
| `analysis` | 개별 분석 문서 |
| `bug-fix` | 버그 수정 분석 |
| `meta` | 컨벤션·가이드 문서 |
| `system/troop` | Troop 시스템 소속 |
| `system/battle` | Battle 시스템 소속 |
| `system/ui` | UI 시스템 소속 |
| `system/network` | Network 시스템 소속 |
| `system/world` | World 시스템 소속 |
| `system/mksummonnpc` | MKSummonNpc 시스템 소속 |
| `troop-lod` | TroopLOD 서브시스템 |
| `march-line` | MarchLine 서브시스템 |
| `npc` | NPC 관련 분석 |

### status 값 정의

| 값 | 의미 |
|----|------|
| `done` | 분석 완료, 검증됨 |
| `wip` | 작업 중 |
| `-` | 미시작 또는 예정 |
| `partial-recovery` | 파일 손상 후 부분 복구됨 — 내용 보완 필요 |

---

## 3. Backlink (명시적 부모 링크) 규칙

### 위치

frontmatter 바로 아래, 제목 위에 삽입한다.

```markdown
---
(frontmatter)
---

← [[부모_MOC_파일명]]

# 문서 제목
```

### 계층별 backlink 대상

| 문서 계층 | backlink 대상 |
|-----------|---------------|
| L2 시스템 MOC | `← [[Analysis_Index]]` |
| L3 서브시스템 MOC | `← [[상위_시스템_MOC]]` |
| L2 폴더 내 개별 문서 | `← [[해당_시스템_MOC]]` |
| L3 폴더 내 개별 문서 | `← [[해당_서브시스템_MOC]]` |

### 예시

```markdown
# TroopLOD 개별 분석 문서
← [[TroopLOD_Function_Analysis_Index]]

# MarchLine 개별 분석 문서
← [[MarchLine_MOC]]

# Troop 폴더 직속 문서 (TroopLOD·MarchLine 외)
← [[Troop_MOC]]

# Battle 개별 분석 문서
← [[Battle_MOC]]
```

---

## 4. MOC 파일 형식

### 필수 섹션 구성

```markdown
---
(frontmatter: tags에 moc 포함)
---

← [[부모_MOC]] (L1이면 생략)

# 시스템명 — MOC

> 시스템 한 줄 설명 (선택)

---

## [카테고리명]

| 문서 | 핵심 주제 | 상태 |
|------|-----------|------|
| [[문서명]] | 핵심 내용 한 줄 | done / wip / - |

---

## 연관 시스템

- [[문서A]] ↔ [[문서B]] (공유하는 원인 또는 해결책 한 줄 설명)
```

### 규칙

- 표의 **문서** 열: Obsidian wikilink `[[파일명]]` — 경로 없이 파일명만 사용
- 표의 **상태** 열: `done` / `wip` / `-` / `partial-recovery`
- **연관 시스템** 섹션: 원인 또는 해결책이 겹치는 문서 쌍만 기재 (단순 같은 접두어는 연결 금지)

---

## 5. MOC 연결 기준

> **핵심 원칙: 원인(root cause) 또는 해결책(fix)이 겹치는 문서만 연결한다.**

### 연결해야 하는 경우

- 두 문서가 동일한 버그 원인을 공유할 때
- 두 문서의 수정 방법이 동일한 코드 경로를 건드릴 때
- 한 문서의 분석 결과가 다른 문서의 전제 조건일 때

### 연결하지 않는 경우

- 파일명 접두어가 같을 뿐 내용이 독립적인 경우
- 같은 시스템에 속하지만 원인·해결책이 다른 경우
- 단순히 시간 순서가 연속인 경우

### 연관 시스템 작성 예시

```markdown
## 연관 시스템

- [[AWQA-6371_FortWar_TroopFlicker]] ↔ [[AWQA-6379_PathLine_FlickerFix]]
  (origin_no/sally_type 덮어쓰기 루트 원인 공유)

- [[NetworkTroop_UpdateAttacker_Analysis]] ↔ [[UpdateAttacker_3057_RaceCondition_BugFix]]
  (UpdateAttacker 콜백 레이스 컨디션 근본 원인 공유)
```

---

## 6. 새 문서 생성 체크리스트

새 분석 문서를 만들 때 순서대로 확인한다.

- [ ] **배치**: 어느 시스템 폴더에 넣을지 결정 (`Analysis/` 폴더 구조 참조)
- [ ] **Frontmatter**: `tags`, `aliases`, `description`, `status`, `created`, `updated` 모두 삽입
- [ ] **Backlink**: frontmatter 바로 아래 `← [[부모_MOC]]` 한 줄 삽입
- [ ] **MOC 등록**: 부모 MOC 파일의 해당 테이블에 새 문서 행 추가
- [ ] **연관 시스템**: 원인·해결책이 겹치는 기존 문서가 있으면 MOC의 "연관 시스템" 섹션에 기재
- [ ] **Analysis_Index 갱신**: 새 시스템 폴더가 생겼다면 `Analysis_Index.md` 계층도에 추가

---

## 7. 기존 문서 수정 시 규칙

- frontmatter의 `updated` 필드를 오늘 날짜로 갱신한다.
- 내용 추가로 연관 문서가 생기면 부모 MOC의 **연관 시스템** 섹션도 함께 갱신한다.
- 파일을 다른 폴더로 이동할 경우: backlink(`← [[...]]`)가 새 부모 MOC를 가리키도록 수정한다.
- `partial-recovery` 상태 문서에 내용을 보완하면 `status`를 `wip` 또는 `done`으로 변경한다.

---

## 8. Obsidian 링크 주의사항

- Wikilink는 **파일명만** 사용한다 — 경로 포함 금지
  - 올바름: `[[TroopLOD_Function_Analysis_Index]]`
  - 잘못됨: `[[Troop/TroopLOD/TroopLOD_Function_Analysis_Index]]`
- 같은 이름의 파일이 두 곳에 존재하면 Obsidian이 임의로 해석할 수 있으므로, 파일명은 프로젝트 전체에서 유일하게 짓는다.
- Obsidian 설정: `newLinkFormat: relative`, `alwaysUpdateLinks: true` — 파일 이동 시 링크 자동 갱신됨.

---

## 9. 시스템별 MOC 파일 위치 빠른 참조

| 시스템 | MOC 파일 |
|--------|----------|
| 전체 루트 | `Analysis/Analysis_Index.md` |
| Troop 코어 | `Analysis/Troop/Troop_MOC.md` |
| TroopLOD (시각 표현) | `Analysis/Troop/TroopLOD/TroopLOD_Function_Analysis_Index.md` |
| MarchLine (데이터 레이어) | `Analysis/Troop/MarchLine/MarchLine_MOC.md` |
| MKSummonNpc | `Analysis/MKSummonNpc/MKSummonNpcManager_Function_Analysis_Index.md` |
| Battle | `Analysis/Battle/Battle_MOC.md` |
| UI | `Analysis/UI/UI_MOC.md` |
| Network | `Analysis/Network/Network_MOC.md` |
| World | `Analysis/World/World_MOC.md` |
| EventUi 온보딩 | `Analysis/EventUi-Onboarding/00_Index.md` |
