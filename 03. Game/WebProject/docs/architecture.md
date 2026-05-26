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
| 저장소 | `localStorage` (설정, 메모) |
| 번들러 / 프레임워크 | 없음 — 순수 SPA (패널 show/hide 방식) |

## 폴더 구조

```
WebProject/
├── docs/
│   ├── planning.md          ← 기획 인덱스 (MOC)
│   ├── architecture.md      ← 현재 문서
│   ├── ui-system.md         ← UI 시스템
│   ├── features.md          ← 기능 구조
│   └── settings-spec.md     ← 설정 명세
├── css/
│   ├── variables.css        ← CSS 변수, 테마, 글자 크기 변수
│   ├── layout.css           ← 사이드바, 상단바, 메인 영역
│   └── components.css       ← 공통 컴포넌트 (카드, 버튼, 입력, 모달 등)
├── js/
│   ├── app.js               ← 라우터, Settings 모듈, toast()
│   └── modules/
│       └── life/
│           ├── calendar.js  ← Google Calendar API 연동
│           ├── news.js      ← NewsAPI.org 연동
│           └── memo.js      ← 메모 CRUD
└── index.html               ← 메인 HTML, 모든 패널 포함
```

## 주요 모듈 역할

### `app.js`
| 객체 | 역할 |
|------|------|
| `App` | 라우터(`navigate`), 사이드바 토글, 메뉴 이벤트 바인딩 |
| `Settings` | 테마·글자 크기 적용, localStorage 입출력, 슬라이더 초기화 |
| `toast()` | 전역 알림 함수 (success / error / info) |

### CSS 파일 역할 분리
| 파일 | 범위 |
|------|------|
| `variables.css` | CSS 커스텀 프로퍼티만 정의 (테마 변수, 글자 크기 변수) |
| `layout.css` | 사이드바·상단바·콘텐츠 영역 구조, 반응형 |
| `components.css` | 재사용 컴포넌트 (`.card`, `.btn`, `.input`, `.modal`, `.toast` 등) |

> [!note] SPA 방식
> 히스토리 API 미사용. `#panel-*` 요소에 `.active` 클래스 토글로 패널 전환.
> 라우팅 라이브러리 추가 시 `App.navigate()` 교체 지점.

## 관련 문서
- [[ui-system]] — CSS 변수 상세 (테마, 글자 크기)
- [[features]] — 모듈별 기능 현황
- [[settings-spec]] — localStorage 키 목록
