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
| Srello — Status 상태 필드 (기획중·개발중·테스트중·완료·보류) | ✅ 완료 |
| Srello — 카드 face 완료 토글 버튼 (done 필드) | ✅ 완료 |
| Srello — 라벨 색 변경 버그 수정 (priority 색 덮어쓰기 제거) | ✅ 완료 |
| Srello — done/status 3-way 동기화 (face·모달·리스트 이동) | ✅ 완료 |
| Srello — 다크모드 날짜 입력 위젯 가시성 (`color-scheme: dark`) | ✅ 완료 |
| Srello — 활동 내역 아코디언 UI (접기/펼치기 토글) | ✅ 완료 |
| Srello — 카드 간 연결 기능 (`linkedCardIds`) | ✅ 완료 |
| Life Calendar — Srello 마감일 통합 뷰 (점선 칩으로 구분) | ✅ 완료 |
| Srello — 리스트 순서 변경 (⋮⋮ 핸들 드래그) | ✅ 완료 |
| Srello — 카드 정렬 드롭다운 (수동·우선순위·마감일·상태·제목) | ✅ 완료 |
| Srello — Settings 모달 (라벨 색상·카테고리 CRUD, `srello_settings`) | ✅ 완료 |
| Srello — 카드 모달 2-컬럼 레이아웃 + 우측 설정 사이드바 아코디언 | ✅ 완료 |
| Srello — desc textarea 자동 높이 (flex-shrink:0 + requestAnimationFrame 재측정) | ✅ 완료 |
| Srello — 리스트 드래그 핸들 개선 (handle에 draggable 직접 부여, 플래그 경쟁 제거) | ✅ 완료 |
| Srello — 카드·리스트 드래그 플레이스홀더 UI (사이에 삽입 위치 표시) | ✅ 완료 |
| Srello — 카드 드래그 시 수동 정렬 모드 자동 전환 | ✅ 완료 |
| Srello — 멀티 프로젝트 기반 1a (`srello-projects.js`, 마이그레이션, 프로젝트 드롭다운·관리 모달) | ✅ 완료 |
| Srello — Google Sheets 연동 1b (OAuth Sheets scope, URL 파싱, 시트 생성/연결) | ✅ 완료 |
| Srello — 수동 Push/Pull 1c (⬆저장/⬇불러오기, dirty 마킹, 충돌 3선택 모달) | ✅ 완료 |
| Srello — 동기화 피드백 1e (오프라인 감지, Google 계정 상태, lastSyncedAt 표시) | 🔲 예정 |
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
| UI — 패널 전환·모달·토스트 깜빡임 수정 (`animation` delay 오파싱) | ✅ 완료 |
| UI — 다크모드 `<select>` 드롭다운 배경·글자색 수정 | ✅ 완료 |

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
