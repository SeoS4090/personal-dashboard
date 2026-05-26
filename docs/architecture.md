---
title: 아키텍처
tags:
  - project/web-dashboard
  - architecture
created: 2026-05-26
---

# 아키텍처

[[planning|← 기획 인덱스]]

## 기술 스택

| 분류 | 내용 |
|------|------|
| 언어 | HTML5 / CSS3 / Vanilla JavaScript |
| UI 패러다임 | Glass Morphism (backdrop-filter blur, 반투명 레이어) |
| 외부 API | Google Calendar API v3, NewsAPI.org |
| 저장소 | `localStorage` (설정, Srello 보드) |
| 번들러 / 프레임워크 | 없음 — 순수 SPA (패널 show/hide 방식) |

## 폴더 구조

```
WebProject/
├── data/
│   ├── srello-board.example.json  ← Srello JSON 형식 예시 (Git 포함)
│   └── srello-board.local.json    ← 개인 보드 백업 (Git 제외, .gitignore)
├── docs/
│   ├── planning.md          ← 기획 인덱스 (MOC)
│   ├── architecture.md      ← 현재 문서
│   ├── ui-system.md         ← UI 시스템
│   ├── features.md          ← 기능 구조
│   └── settings-spec.md     ← 설정 명세
├── panels/                  ← 패널별 HTML (fetch로 지연 로드)
│   ├── life-calendar.html
│   ├── life-news.html
│   ├── life-srello.html
│   ├── life-readme.html
│   ├── game-dashboard.html
│   ├── game-readme.html
│   ├── dev-dashboard.html
│   ├── dev-readme.html
│   ├── media-dashboard.html
│   ├── media-readme.html
│   └── settings.html
├── css/
│   ├── variables.css        ← CSS 변수, 테마, 글자 크기 변수
│   ├── layout.css           ← 사이드바, 상단바, 메인 영역
│   └── components.css       ← 공통 컴포넌트 (카드, 버튼, 입력, 토글 등)
├── js/
│   ├── app.js               ← 라우터, Settings 모듈, toast()
│   └── modules/
│       └── life/
│           ├── calendar.js  ← Google Calendar API 연동 + 토큰 복원
│           ├── news.js      ← NewsAPI.org 연동
│           └── srello.js    ← Srello 칸반 CRUD + DnD + JSON 백업
├── .gitignore               ← srello-board.local.json 등 개인 데이터 제외
└── index.html               ← shell + 홈 패널 인라인 (패널은 fetch 지연 로드)
```

### `srello.js` 주요 구조

| 함수 | 역할 |
|------|------|
| `load()` / `save()` | `localStorage` 키 `srello_board` 입출력 |
| `exportBoard()` | 보드를 JSON 파일로 다운로드 |
| `importBoard()` | JSON 파일 파싱 후 보드 복원·병합 |
| `render()` | 칸반 UI, 드래그 앤 드롭 |

## 주요 모듈 역할

### `app.js`
| 객체/함수 | 역할 |
|-----------|------|
| `App` | 라우터(`navigate`), 패널 fetch 캐싱, 사이드바 토글, 메뉴 이벤트 바인딩 |
| `Settings` | 테마·글자 크기 적용, 캘린더 목록 fetch·토글, localStorage 입출력 |
| `toast()` | 전역 알림 함수 (success / error / info) |
| `switchReadmeTab()` | ReadMe 패널 탭 전환 전역 함수 |

### `calendar.js` 주요 구조
| 함수 | 역할 |
|------|------|
| `init()` | 토큰 복원 또는 silent 재인증 시도 후 렌더 |
| `authorize()` | Google OAuth 팝업 인증 |
| `_saveToken()` / `_restoreToken()` | localStorage 토큰 58분 저장·복원 |
| `fetchCalendarList()` | Google CalendarList API 호출 |
| `render()` | 현재 뷰(월별·주별·목록)에 맞게 일정 렌더 |

### CSS 파일 역할 분리
| 파일 | 범위 |
|------|------|
| `variables.css` | CSS 커스텀 프로퍼티만 정의 (테마 변수, 글자 크기 변수) |
| `layout.css` | 사이드바·상단바·콘텐츠 영역 구조, 반응형 |
| `components.css` | 재사용 컴포넌트 (`.card`, `.btn`, `.input`, `.modal`, `.toast`, `.toggle-switch` 등) |

> [!note] SPA 방식
> 히스토리 API 미사용. `App.navigate(panelId)`로 패널 전환.
> 패널 HTML은 최초 접근 시 `fetch('./panels/{id}.html?v=BUILD_HASH')`로 로드 후 캐싱.
> 라우팅 라이브러리 추가 시 `App.navigate()` 교체 지점.

## 캐시 버스팅

배포 시 GitHub Actions가 `index.html`의 `__BUILD_HASH__`를 git 커밋 해시로 치환한다.
CSS·JS·패널 fetch URL에 `?v={hash}`가 붙어 브라우저 캐시가 배포마다 자동 무효화된다.

```yaml
HASH=$(git rev-parse --short HEAD)
sed -i "s/__BUILD_HASH__/$HASH/g" "03. Game/WebProject/index.html"
```

> [!tip] 신규 파일 추가 시
> `index.html`에 `<link>`·`<script>` 추가할 때 반드시 `?v=__BUILD_HASH__` 붙일 것.
> 패널 fetch는 `window.BUILD_VER`로 자동 처리됨.

## 관련 문서
- [[ui-system]] — CSS 변수 상세 (테마, 글자 크기)
- [[features]] — 모듈별 기능 현황
- [[settings-spec]] — localStorage 키 목록
