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

| 항목 | 상태 |
|------|------|
| Life — 일정 (Google Calendar) | ✅ 완료 |
| Life — 일정 OAuth 2.0 + 다중 캘린더 + 멀티뷰 | ✅ 완료 |
| Life — 뉴스 (NewsAPI.org) | ✅ 완료 |
| Life — 메모 (localStorage) | ✅ 완료 |
| 설정 — 테마 (다크/라이트/시스템) | ✅ 완료 |
| 설정 — 글자 크기 세부 조정 | ✅ 완료 |
| 각 메뉴별 ReadMe 패널 (탭 UI) | ✅ 완료 |
| 홈 네비게이션 (Dashboard 텍스트 클릭) | ✅ 완료 |
| Game 섹션 | 🚧 준비 중 |
| Dev 섹션 | 🚧 준비 중 |
| Media 섹션 | 🚧 준비 중 |

> [!warning] 배포 주의
> API 키가 `localStorage`에 평문 저장됨. 프로덕션 배포 시 서버 사이드 프록시로 이동 필요.
