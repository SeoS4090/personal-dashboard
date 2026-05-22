# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 저장소 개요

AN Games AW 프로젝트 Unity C# 코드 분석 노트를 관리하는 Obsidian vault. 코드 자체는 없고, 분석 문서(Markdown)와 원본 로그 데이터로 구성된다.

## 핵심 규칙 파일

새 문서를 만들거나 기존 문서를 수정하기 전에 반드시 읽어야 하는 파일:

- `Analysis/Analysis_AI_Convention.md` — 폴더 배치, frontmatter 규칙, backlink 형식, MOC 연결 기준 전체 정의

## 폴더 구조

```
Analysis/
├── Analysis_Index.md                  ← 마스터 MOC (전체 진입점)
├── Analysis_AI_Convention.md          ← AI 문서 작성 규칙 (필독)
├── Troop/                             ← Troop_MOC.md
│   ├── TroopLOD/                      ← TroopLOD_Function_Analysis_Index.md
│   └── MarchLine/                     ← MarchLine_MOC.md
├── MKSummonNpc/                       ← MKSummonNpcManager_Function_Analysis_Index.md
├── Battle/                            ← Battle_MOC.md
├── UI/                                ← UI_MOC.md
├── Network/                           ← Network_MOC.md
├── World/                             ← World_MOC.md
└── EventUi-Onboarding/                ← 이벤트UI 온보딩 문서 (별도 00_Index.md)

Data Example/                          ← 버그 진단 원본 데이터 (소켓 JSON, Unity 로그)
Improvements/                          ← 개선 제안 문서
```

## 새 분석 문서 작성 체크리스트

1. **배치**: 어느 시스템 폴더에 넣을지 결정
2. **Frontmatter**: `tags`(block style), `aliases`, `description`, `status`, `created`, `updated` 필수
3. **Backlink**: frontmatter 바로 아래 `← [[부모_MOC]]` 한 줄 삽입
4. **MOC 등록**: 부모 MOC 파일의 해당 테이블에 새 문서 행 추가
5. **Analysis_Index 갱신**: 새 시스템 폴더가 생긴 경우 계층도에도 추가

### Frontmatter 예시

```yaml
---
tags:
  - analysis
  - system/troop
  - bug-fix
aliases:
  - 한국어 별칭
description: 이 문서가 다루는 핵심 내용 한 문장
status: wip
created: 2026-05-22
updated: 2026-05-22
---

← [[Troop_MOC]]

# 문서 제목
```

### status 값

| 값 | 의미 |
|----|------|
| `done` | 분석 완료 |
| `wip` | 작업 중 |
| `-` | 미시작 |
| `partial-recovery` | 파일 손상 후 부분 복구 |

## Wikilink 규칙

- **파일명만** 사용: `[[TroopLOD_Function_Analysis_Index]]`
- 경로 포함 금지: `[[Troop/TroopLOD/TroopLOD_Function_Analysis_Index]]` ← 잘못됨
- 동일 파일명이 두 곳에 있는 경우에만 예외적으로 `[[subfolder/filename]]` 사용

## MOC 연결 기준

**원인(root cause) 또는 해결책(fix)이 겹치는 문서만** `연관 시스템` 섹션에 연결한다. 파일명 접두어가 같다는 이유만으로 연결하지 않는다.

## PowerShell 파일 작성 시 주의사항

- UTF-8 NoBOM: `New-Object System.Text.UTF8Encoding($false)` 사용 (PS 5.1에서 `UTF8NoBOM` 정적 프로퍼티 없음)
- 루프에서 `$content = $null` 초기화 필수 (예외 발생 후 이전 값 유지 문제)
- Write 도구 사용 전 반드시 Read로 파일 먼저 읽기

## 스킬

- `/aw-analysis` — 분석 문서 생성·업데이트 (요약 섹션 먼저, 기술 분석 본문 이어서)
- `/addlog` — Unity 소켓 로그를 Data Example 폴더에 추가
