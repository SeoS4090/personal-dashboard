---
title: UI 시스템
tags:
  - project/web-dashboard
  - ui
  - design-system
created: 2026-05-26
---

# UI 시스템

[[planning|← 기획 인덱스]]

## 레이아웃 구조

```
┌─────────────────────────────────────┐
│  #sidebar (240px / collapse: 64px)  │  #main
│  ├─ .sidebar-logo (토글 버튼)        │  ├─ #topbar (60px)
│  ├─ .sidebar-nav                    │  │   title / breadcrumb / 날짜
│  │   └─ .nav-item + .nav-sub        │  └─ #content (스크롤)
│  └─ .sidebar-footer (설정)           │      └─ .panel.active
└─────────────────────────────────────┘
```

- 사이드바 collapse 시 아이콘만 표시 (텍스트 `opacity: 0`)
- 모바일 768px 이하: 사이드바 오버레이 모드 (`position: fixed`, `transform`)

## Glass Morphism

| 변수 | 용도 |
|------|------|
| `--glass-bg` | 기본 반투명 배경 |
| `--glass-bg-hover` | 호버 상태 |
| `--glass-bg-active` | 선택 상태 |
| `--glass-border` | 테두리 |
| `--glass-border-strong` | 강조 테두리 |
| `--glass-blur` | `blur(12px)` |
| `--glass-blur-strong` | `blur(20px)` — 사이드바 |

## 테마 시스템

`html[data-theme]` 속성으로 전환. JS: `document.documentElement.setAttribute('data-theme', value)`

| CSS 변수 | 다크 (기본) | 라이트 |
|----------|------------|--------|
| `--bg-primary` | `#0a0a0f` | `#f0f2f5` |
| `--bg-secondary` | `#0f0f1a` | `#ffffff` |
| `--glass-bg` | `rgba(255,255,255,0.05)` | `rgba(255,255,255,0.65)` |
| `--glass-border` | `rgba(255,255,255,0.1)` | `rgba(0,0,0,0.1)` |
| `--text-primary` | `rgba(255,255,255,0.92)` | `rgba(0,0,0,0.87)` |
| `--text-secondary` | `rgba(255,255,255,0.55)` | `rgba(0,0,0,0.55)` |
| `--color-accent` | `#64ffda` | `#00b89c` |
| `--shadow-glass` | `0 8px 32px rgba(0,0,0,0.4)` | `0 4px 20px rgba(0,0,0,0.1)` |

### 메뉴별 포인트 컬러

| 메뉴 | 다크 | 라이트 |
|------|------|--------|
| Life | `#64ffda` (청록) | `#00b89c` |
| Game | `#ff6b9d` (핑크) | `#e0176e` |
| Dev | `#7c83ff` (퍼플) | `#5059d4` |
| Media | `#ffd166` (골드) | `#e09000` |

> [!tip] 시스템 테마
> `prefers-color-scheme` 미디어 쿼리로 OS 설정 추종.
> `window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', ...)` 로 변경 시 자동 반영.

## 글자 크기 시스템

JS에서 `document.documentElement.style.setProperty(cssVar, value)` 로 인라인 적용 → 즉시 반영.
저장: `localStorage` → 페이지 로드 시 `initAppearance()`에서 복원.

| CSS 변수 | 기본값 | 적용 대상 | 슬라이더 범위 |
|----------|--------|----------|--------------|
| `--fs-title` | 20px | `.section-title` | 14 – 30px |
| `--fs-card` | 14px | `.card-title`, `.topbar-title` | 11 – 20px |
| `--fs-body` | 13px | `.btn`, `.input`, `.nav-label`, `.nav-sub-item`, `.toast` | 10 – 18px |
| `--fs-desc` | 12px | `.section-desc`, `.card-subtitle`, 레이블 | 9 – 16px |

## 공통 컴포넌트 목록

| 클래스 | 설명 |
|--------|------|
| `.card` | Glass Morphism 카드 (패딩 20px) |
| `.widget-grid` | 반응형 그리드 (280px 기준, `.dense` / `.wide` 변형) |
| `.btn`, `.btn-primary`, `.btn-sm`, `.btn-icon` | 버튼 변형 |
| `.input` | 텍스트 입력 (focus 시 glow) |
| `.badge` | 소형 레이블 |
| `.modal`, `.modal-overlay` | 모달 (fade + scale 애니메이션) |
| `.toast` | 우측 하단 알림 (3종: success / error / info) |
| `.skeleton` | shimmer 로딩 플레이스홀더 |
| `.empty-state` | 콘텐츠 없음 상태 UI |
| `.setting-btn-group`, `.setting-btn` | 설정 세그먼트 버튼 |
| `.fs-row`, `.fs-slider` | 글자 크기 슬라이더 행 |

## 관련 문서
- [[architecture]] — 파일 구조 및 CSS 파일 역할 분리
- [[settings-spec]] — 설정 패널에서 테마·글자 크기 제어 방식
