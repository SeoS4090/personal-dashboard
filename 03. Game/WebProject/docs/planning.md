---
title: Personal Dashboard - 기획
tags:
  - project/web-dashboard
  - MOC
aliases:
  - 대시보드 기획
created: 2026-05-26
---

# Personal Dashboard

순수 HTML/CSS/Vanilla JS 기반 개인 웹 대시보드. Glass Morphism UI. 프레임워크 없음.

## 문서 구조

- [[architecture|🏗️ 아키텍처]] — 기술 스택, 폴더 구조, 모듈 역할
- [[ui-system|🎨 UI 시스템]] — 레이아웃, 테마, 글자 크기 변수
- [[features|📋 기능 구조]] — 메뉴 구조, 기능 현황 및 계획
- [[settings-spec|⚙️ 설정 명세]] — 설정 패널 항목, API 키, localStorage

## 구현 현황

### Life

| 항목 | 상태 |
|------|------|
| 일정 — Google Calendar API v3 연동 | ✅ 완료 |
| 일정 — OAuth 2.0 + 멀티뷰 (월별·주별·목록) | ✅ 완료 |
| 일정 — 캘린더 목록 자동 불러오기 + 토글 스위치 | ✅ 완료 |
| 일정 — OAuth 토큰 자동 복원 (새로고침 재연결 불필요) | ✅ 완료 |
| 뉴스 — NewsAPI.org 연동 | ✅ 완료 |
| Srello — 칸반 보드 (localStorage, DnD, P0–P3) | ✅ 완료 |
| Srello — JSON 보내기/가져오기 (로컬 파일 백업, Git 제외) | ✅ 완료 |
| Srello — 마감일·체크리스트·댓글·첨부·활동 | ✅ 완료 |
| Srello — 필터·캘린더 뷰·템플릿·완료 리스트 자동화 | ✅ 완료 |
| Srello — 이미지 Ctrl+V 붙여넣기 (base64, 600 KB 제한) | ✅ 완료 |
| 메모 — `life-memo` 패널 | ❌ 제거 → Srello로 대체 |

### 설정 / 공통

| 항목 | 상태 |
|------|------|
| 설정 — 테마 (다크/라이트/시스템) | ✅ 완료 |
| 설정 — 글자 크기 세부 조정 | ✅ 완료 |
| 각 메뉴별 ReadMe 패널 (탭 UI) | ✅ 완료 |
| 홈 네비게이션 (Dashboard 텍스트 클릭) | ✅ 완료 |
| GitHub Pages 배포 + 캐시 버스팅 | ✅ 완료 |
| 사이드바 빌드 버전 표시 (`v <hash>` / `dev`) | ✅ 완료 |
| 설정 — 캐시 삭제 후 새로고침 버튼 | ✅ 완료 |

### Life 백로그

| 항목 | 상태 |
|------|------|
| 뉴스 카테고리 필터 (기술·게임·개발) | 🚧 예정 |
| 홈 카드 — 오늘 일정 미리보기 | 🚧 예정 |

> 개인 할 일 목록은 `data/srello-board.local.json`에 보관 후 Srello **가져오기**로 로드. 형식은 `data/srello-board.example.json` 참고.

### 미구현

| 항목 | 상태 |
|------|------|
| Game 섹션 | 🚧 준비 중 |
| Dev 섹션 | 🚧 준비 중 |
| Media 섹션 | 🚧 준비 중 |

## 배포 정보

| 항목 | 내용 |
|------|------|
| 배포 URL | `https://seos4090.github.io/personal-dashboard/` |
| 레포지토리 | `SeoS4090/personal-dashboard` (main 브랜치) |
| 워크플로우 | `.github/workflows/deploy-dashboard.yml` |
| 캐시 버스팅 | 배포 시 git 해시(`__BUILD_HASH__`) 자동 주입 → F5로 최신 반영 |

> [!warning] 배포 주의
> API 키 및 OAuth 토큰이 `localStorage`에 저장됨. 개인 브라우저 전용 사용 권장.
> 프로덕션 배포 시 서버 사이드 프록시로 이동 필요.
