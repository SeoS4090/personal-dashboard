---
title: 기능 구조
tags:
  - project/web-dashboard
  - features
created: 2026-05-26
---

# 기능 구조

[[planning|← 기획 인덱스]]

## 메뉴 구조

```
Dashboard (홈)  ← 로고 텍스트 클릭으로 언제든 복귀
├── Life
│   ├── 📖 ReadMe   — 탭별 설정 가이드 (일정·뉴스·Srello)
│   ├── 일정         — Google Calendar API
│   ├── 뉴스         — NewsAPI.org
│   └── Srello       — 칸반 보드 (localStorage)
├── Game
│   └── 📖 ReadMe   — 섹션 소개 및 예정 기능
├── Dev
│   └── 📖 ReadMe   — 섹션 소개 및 예정 기능
├── Media
│   └── 📖 ReadMe   — 섹션 소개 및 예정 기능
└── ⚙️ 설정          — 하단 고정
```

---

## 홈 네비게이션

- 사이드바 **로고 텍스트("Dashboard")** 클릭 → 홈 대시보드로 복귀
- **로고 아이콘(✦)** 클릭 → 사이드바 접기/펼치기

---

## ReadMe 패널

각 메뉴 사이드바 최상단에 📖 ReadMe 서브메뉴 배치. 탭 UI로 서브 항목별 설정 가이드 제공.

| 메뉴 | 탭 구성 |
|------|---------|
| Life | 📅 일정 (Google Calendar 연동), 📰 뉴스 (NewsAPI 연동), 📋 Srello (칸반·저장 방식) |
| Game | 🎯 대시보드 (섹션 소개·예정 기능) |
| Dev | 🗂️ 프로젝트 (GitHub API 예정·현재 상태) |
| Media | ✨ 대시보드 (Spotify 예정·현재 상태) |

탭 전환 함수: `switchReadmeTab(btn, contentId)` — `app.js` 전역 함수.

---

## Life

### 일정 (`life-calendar`)
- Google Calendar API v3 연동, OAuth 2.0 인증
- 월별·주별·일정 목록 멀티뷰 전환
- 캘린더 목록 자동 불러오기 (Google CalendarList API)
- 토글 스위치로 캘린더별 표시/숨김 설정
- OAuth 토큰 localStorage 저장 (58분 유효) — 새로고침 후 자동 복원, 팝업 없는 silent 재인증
- 날짜별 그룹핑, 시간/위치/색상 표시
- "오늘" / "내일" 등 상대 날짜 레이블
- 주 시작 요일 설정 (일/월)

### 뉴스 (`life-news`)
- NewsAPI.org 연동
- 키워드 필터 (설정에서 쉼표 구분 입력)
- 카드 그리드 표시, 클릭 시 외부 링크
- 카테고리 필터 버튼 (기술 / 게임 / 개발)
- 새로고침 버튼

### Srello (`life-srello`)
- Trello 스타일 칸반: 리스트(열) + 카드
- localStorage(`srello_board`) 저장
- 드래그 앤 드롭으로 카드 이동·순서 변경
- 리스트 추가·이름 변경·삭제, 카드 추가·편집·삭제(모달)
- 우선순위 P0–P3 (색상·뱃지, 리스트 내 P0 우선 정렬)
- localStorage 자동 저장 + JSON 보내기/가져오기 (로컬 파일 백업)
- 개인 보드 JSON: `data/srello-board.local.json` (Git 제외)
- 구 메모(`dashboard_memos`) → 「할 일」 자동 이전 (1회)
- 홈 대시보드에 카드·리스트 수 미리보기

---

## Game 🚧

> [!info] 준비 중
> 기능 및 데이터 소스 미확정. 확정 후 이 섹션에 작성.

후보 기능:
- 플레이 기록 로그
- 게임 뉴스 피드
- 공략 북마크

---

## Dev 🚧

> [!info] 준비 중
> 기능 및 데이터 소스 미확정.

후보 기능:
- GitHub 커밋/PR 현황 (GitHub API)
- 개인 프로젝트 목록 & 상태
- 개발 북마크

---

## Media 🚧

> [!info] 준비 중
> 기능 및 데이터 소스 미확정.

후보 기능:
- 음악 재생 현황 (Last.fm / Spotify API)
- 영화 감상 목록
- 유튜브 구독 채널 업데이트

---

## 홈 대시보드 (`home`)

각 메뉴 섹션의 미리보기 카드 그리드.
현재 Life 카드에는 Srello 카드·리스트 수 표시.
나머지 섹션 완성 시 각 카드에 요약 정보 추가 예정.
로고 텍스트 클릭으로 어느 패널에서든 홈으로 복귀 가능.

## 관련 문서
- [[settings-spec]] — 각 기능의 API 키 및 설정 항목
- [[architecture]] — 모듈 파일 위치 (`js/modules/`)
