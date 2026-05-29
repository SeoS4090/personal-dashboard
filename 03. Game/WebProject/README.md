# Personal Dashboard

순수 HTML / CSS / Vanilla JS 개인 웹 대시보드. Glass Morphism UI, 프레임워크 없음.

**배포:** [https://seos4090.github.io/personal-dashboard/](https://seos4090.github.io/personal-dashboard/)

## 기능

| 메뉴 | 설명 |
|------|------|
| **Life · 일정** | Google Calendar API (OAuth 2.0, 월/주/목록 뷰) |
| **Life · 뉴스** | NewsAPI.org 키워드 피드 |
| **Life · Srello** | Trello 스타일 칸반 (드래그 앤 드롭, P0–P3 우선순위) |
| **Game · Tarkov** | 퀘스트 라인 시각화 패널 뼈대 + 미리보기 데이터 |
| **Dev / Media** | ReadMe·대시보드 틀 (기능 확장 예정) |
| **설정** | 테마, 글자 크기, API 키 |

## 로컬 실행

```bash
# WebProject 폴더에서 정적 서버 (예: Python)
cd "03. Game/WebProject"
python -m http.server 8080
# http://localhost:8080
```

`index.html`을 직접 열어도 동작하지만, 패널 `fetch`와 OAuth 테스트는 **로컬 서버**를 권장합니다.

## Srello 데이터 (Git에 올리지 않음)

- **일상 편집:** 브라우저 `localStorage` (`srello_board`)
- **백업:** Srello 패널 **↓ 보내기** → JSON 파일 저장
- **복원:** **↑ 가져오기** → JSON 선택
- **개인 템플릿:** `data/srello-board.local.json` (`.gitignore` — 커밋되지 않음)
- **형식 예시:** `data/srello-board.example.json`
- **Tarkov 예시 스키마:** `data/tarkov-questlines.example.json`

## 설정

API 키·OAuth Client ID는 앱 내 **⚙️ 설정**에서 입력합니다. 값은 `localStorage`에만 저장됩니다.

| 서비스 | 키 (localStorage) |
|--------|-------------------|
| Google Calendar | `gcal_client_id` |
| NewsAPI | `news_api_key`, `news_keywords` |

상세: [`docs/settings-spec.md`](docs/settings-spec.md)

## 프로젝트 구조

```
WebProject/
├── index.html          # SPA shell + 홈
├── panels/             # 지연 로드 패널 HTML
├── js/app.js           # 라우터, 설정
├── js/modules/life/    # calendar, news, srello
├── js/modules/game/    # tarkov
├── css/                # variables, layout, components
├── data/               # Srello JSON (local 파일은 Git 제외)
└── docs/               # Obsidian 기획 문서 (MOC)
```

## 배포

`main` 브랜치에 `03. Game/WebProject/**` 변경이 push되면 GitHub Actions가 `gh-pages`에 배포합니다.

- 워크플로우: `.github/workflows/deploy-dashboard.yml`
- 캐시 버스팅: `index.html`의 `__BUILD_HASH__` → git 커밋 해시로 치환

## 문서

| 문서 | 내용 |
|------|------|
| [`docs/planning.md`](docs/planning.md) | 기획 인덱스, 구현 현황 |
| [`docs/features.md`](docs/features.md) | 메뉴·기능 목록 |
| [`docs/architecture.md`](docs/architecture.md) | 기술 스택, 폴더 구조 |
| [`CLAUDE.md`](CLAUDE.md) | 개발 규칙 (에이전트용) |

## 라이선스

개인 프로젝트.
