# LogDec01

게임 프로젝트 **LogDec01** 저장소입니다. 기획과 구현을 폴더로 분리하고, 기획은 Obsidian + Atomic Notes + MOC 인덱싱으로 관리합니다.

## 폴더 구조

```
LogDec01/
├── README.md          ← 이 파일
├── AGENTS.md          ← AI·에이전트 작업 규칙
├── 기획/              ← Obsidian 볼트 (기획 문서만)
│   ├── 00_Index/      ← 최상위 MOC
│   ├── MOC/           ← 도메인별 Map of Content
│   ├── notes/         ← 원자적 노트 (얕은 하위 폴더만)
│   ├── _templates/    ← 노트·MOC 템플릿
│   └── _meta/         ← 규격·가이드 (문서 자체는 노트가 아님)
└── 프로그램/          ← 개인 홈페이지 (HTML/CSS/JS, GitHub Pages)
```

## 시작하기

### 기획 (Obsidian)

1. Obsidian에서 **기획** 폴더를 볼트(또는 볼트 내 폴더)로 연다.
2. [[기획/00_Index/Index|Index]] MOC부터 읽는다.
3. 새 노트는 [[기획/_meta/프론트매터-규격|프론트매터 규격]]과 `_templates/`를 따른다.

### 홈페이지 (프로그램)

1. `프로그램/README.md` — 로컬 서버·배포 방법
2. `npx serve 프로그램` 으로 미리보기
3. GitHub Actions 로 Pages 배포 (`프로그램/` 만 공개)

## 문서 작성 원칙 (요약)

| 원칙 | 설명 |
|------|------|
| Atomic Notes | 1노트 = 1개념 |
| YAML 프론트매터 | 문서 정체성·상태·관계 메타데이터 |
| 위키링크 | 문장 속 `[[노트]]`로 관계 정의 |
| MOC 인덱싱 | 폴더는 얕게, 탐색은 MOC 따라가기 |

상세: `기획/_meta/` 가이드 문서 참고.
