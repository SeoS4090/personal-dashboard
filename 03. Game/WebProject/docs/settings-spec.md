---
title: 설정 명세
tags:
  - project/web-dashboard
  - settings
  - spec
created: 2026-05-26
---

# 설정 명세

[[planning|← 기획 인덱스]]

## 설정 패널 구성

설정은 사이드바 하단 고정 버튼(`⚙️`)으로 진입.

### 🎨 외관

| 항목 | 컨트롤 | 동작 |
|------|--------|------|
| 테마 | 세그먼트 버튼 (다크/라이트/시스템) | 즉시 반영, `html[data-theme]` 변경 |
| 섹션 제목 크기 | 범위 슬라이더 14~30px | 즉시 반영, `--fs-title` 변경 |
| 카드 제목 크기 | 범위 슬라이더 11~20px | 즉시 반영, `--fs-card` 변경 |
| 본문·버튼·입력 크기 | 범위 슬라이더 10~18px | 즉시 반영, `--fs-body` 변경 |
| 설명·레이블 크기 | 범위 슬라이더 9~16px | 즉시 반영, `--fs-desc` 변경 |

> [!tip] 실시간 적용 방식
> `document.documentElement.style.setProperty(cssVar, value)` 로 인라인 스타일 주입.
> CSS 변수 우선순위: 인라인 스타일 > `:root` 정의 → 즉시 반영.

### 📅 Google Calendar

| 항목 | 입력 타입 | localStorage 키 |
|------|----------|-----------------|
| OAuth 2.0 Client ID | `text` | `gcal_client_id` |
| 캘린더 전체 목록 (enabled 포함) | JSON 배열 | `gcal_all_calendars` |
| 활성화된 캘린더 목록 (파생) | JSON 배열 | `gcal_calendars` |
| 뷰 모드 | string | `gcal_view_mode` |
| 주 시작 요일 | string (0/1) | `gcal_week_start` |

### 📰 News API

| 항목 | 입력 타입 | localStorage 키 |
|------|----------|-----------------|
| API Key | `password` | `news_api_key` |
| 관심 키워드 | `text` (쉼표 구분) | `news_keywords` |

---

## localStorage 키 전체 목록

| 키 | 타입 | 기본값 | 설명 |
|----|------|--------|------|
| `appearance_theme` | string | `'dark'` | 테마 선택 (dark / light / system) |
| `fs_title` | string | `'20px'` | 섹션 제목 글자 크기 |
| `fs_card` | string | `'14px'` | 카드 제목 글자 크기 |
| `fs_body` | string | `'13px'` | 본문·버튼·입력 글자 크기 |
| `fs_desc` | string | `'12px'` | 설명·레이블 글자 크기 |
| `gcal_client_id` | string | `''` | Google OAuth 2.0 Client ID |
| `gcal_access_token` | string | `''` | OAuth 액세스 토큰 (새로고침 복원용, 만료 시 자동 삭제) |
| `gcal_token_expiry` | string | `''` | 토큰 만료 시각 (epoch ms, 발급 후 58분) |
| `gcal_all_calendars` | JSON | `'[]'` | Google API에서 불러온 전체 캘린더 `[{id,name,color,enabled}]` |
| `gcal_calendars` | JSON | `'[]'` | 활성화된 캘린더만 동기화 `[{id,name,color}]` (gcal_all_calendars 파생) |
| `gcal_view_mode` | string | `'month'` | 캘린더 뷰 (month/week/list) |
| `gcal_week_start` | string | `'0'` | 주 시작 요일 (0=일, 1=월) |
| `news_api_key` | string | `''` | NewsAPI.org API Key |
| `news_keywords` | string | `''` | 뉴스 관심 키워드 (쉼표 구분) |
| `srello_board` | JSON | 기본 3열 | Srello 보드. 카드 필드: `title`, `desc`, `priority`(P0–P3), `category`, `status`(기획중 등), `cover`, `color`, `dueDate`, `done`, `checklist`, `comments`, `attachments`, `activity` |
| `srello_templates` | JSON | `'[]'` | 카드 템플릿 (최대 20개) |
| `srello_view_mode` | string | `'board'` | Srello 뷰 (`board` / `calendar`) |
| `srello_sort_mode` | string | `'priority'` | 카드 정렬 기준 (`manual`/`priority`/`due-asc`/`due-desc`/`status`/`title`) |
| `srello_settings` | JSON | 기본 색상·카테고리 | Srello 사용자 설정 `{ colors: [{id,hex,name}], categories: [{id,name}] }` — 기본 카테고리: 기획·아트·개발·사운드·공통 |
| `srello_memo_migrated` | string | — | 구 메모 이전 완료 플래그 (`'1'`) |
| `dashboard_memos` | JSON | `'[]'` | (레거시) 구 메모 — Srello 최초 1회 이전 후 미사용 |
| `tarkov_quest_progress` | JSON | `'{}'` | Tarkov 퀘스트 완료 상태 `{ questId: true }` — `tarkov.js` 관리, 설정 패널 미노출 |

### Srello JSON 백업 (파일)

| 파일 | Git | 설명 |
|------|-----|------|
| `data/srello-board.example.json` | 포함 | import 형식 예시 |
| `data/srello-board.local.json` | **제외** | 개인 할 일·보드 백업 (`.gitignore`) |

패널 **↓ 보내기** / **↑ 가져오기**로 `localStorage`와 로컬 JSON을 동기화한다.

---

## API 키 관리 정책

현재: 사용자가 설정 화면에서 직접 입력 → `localStorage` 평문 저장.

> [!warning] 보안 주의
> `localStorage`는 동일 출처의 JS에서 누구든 읽을 수 있음.
> 개인 사용 환경에서만 안전. 공용 PC나 프로덕션 배포 시 아래 방안 검토 필요.

**프로덕션 이전 시 검토 방안:**
- 서버 사이드 프록시로 API 호출 위임
- 환경 변수(`.env`) 기반 서버 관리
- OAuth 플로우 도입 (Google Calendar는 OAuth 2.0 지원)

## 관련 문서
- [[ui-system]] — 테마·글자 크기 CSS 변수 상세
- [[features]] — 각 설정 항목이 영향을 주는 기능
