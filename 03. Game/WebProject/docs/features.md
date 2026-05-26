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
Dashboard (홈)
├── Life
│   ├── 일정    — Google Calendar API
│   ├── 뉴스    — NewsAPI.org
│   └── 메모    — localStorage
├── Game        — 🚧 준비 중
├── Dev         — 🚧 준비 중
├── Media       — 🚧 준비 중
└── ⚙️ 설정     — 하단 고정
```

---

## Life

### 일정 (`life-calendar`)
- Google Calendar API v3 연동
- 향후 30일 일정 조회
- 날짜별 그룹핑, 시간/위치 표시
- "오늘" / "내일" 등 상대 날짜 레이블
- API 키 미입력 시 설정 페이지로 안내

### 뉴스 (`life-news`)
- NewsAPI.org 연동
- 키워드 필터 (설정에서 쉼표 구분 입력)
- 카드 그리드 표시, 클릭 시 외부 링크
- 카테고리 필터 버튼 (기술 / 게임 / 개발)
- 새로고침 버튼

### 메모 (`life-memo`)
- localStorage(`dashboard_memos`) 저장
- CRUD: 추가 / 삭제
- 메모별 색상 선택 (모달)
- 홈 대시보드에 메모 개수 미리보기

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
현재 Life 카드에는 저장된 메모 개수 표시.
나머지 섹션 완성 시 각 카드에 요약 정보 추가 예정.

## 관련 문서
- [[settings-spec]] — 각 기능의 API 키 및 설정 항목
- [[architecture]] — 모듈 파일 위치 (`js/modules/`)
