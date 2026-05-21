---
title: GetWorkTime 필터와 이벤트 읽기 이슈
date: 2026-04-03
tags:
  - customenigma
  - rainmeter
  - powershell
  - vault/customenigma
aliases:
  - WorkTimer 이벤트
---

# GetWorkTime 필터와 이벤트 읽기 이슈

이 노트는 **`GetWorkTime.ps1`**(스킨: `...\CustomEnigma\@Resources\Scripts\`)이 보안 로그에서 “출근 시각” 후보를 고르는 규칙과, 실제 환경에서 겪은 **이벤트 읽기/필드 누락** 이슈를 정리합니다.

> [!warning] 권한
> **보안** 로그를 읽으려면 일반적으로 **관리자 권한**(또는 동등한 권한)이 필요합니다. Rainmeter를 관리자로 띄우지 않으면 `Get-WinEvent`가 실패하고 스킨에는 `NONE`이 나올 수 있습니다.

## 알고리즘 요약

1. 시간 구간: 당일 **06:00~현재**, 결과 없으면 **00:00~현재** 재시도
2. 같은 구간에서 **4634**를 필터링한 뒤, **가장 늦은 4634 시각**을 `cutoff`로 사용
3. **없으면** `cutoff` = 구간 시작(6시 또는 자정); 이때는 **이상(`>=`)** 첫 4624
4. **있으면** 그 **이후(`>`)** 첫 **4624**를 출근 시각으로 출력 (`HH:mm`)

## Get-SecurityEventsFiltered (4624 / 4634 공통)

- **이벤트 ID**는 `Get-WinEvent`와 레코드 `Id`가 일치하는지 확인(`$evt.Id -eq $Id`)
- **LogonType**: [[Logon Type 로그온 유형]] 중 **2, 7**만
- **TargetUserName**: `env:USERNAME`과 동일(대소문자 무시), 비어 있으면 제외
- **웰노운 계정 제외**: SYSTEM, LOCAL SERVICE, NETWORK SERVICE, ANONYMOUS LOGON, DEFAULTUSER0, `DWM-*`, `UMFD-*`

### 4624 전용: LogonProcessName

- [[LogonProcessName과 LSA 로그온 프로세스]] 참고
- **비어 있음**: LogonType이 2 또는 7이면 **허용**(일부 환경에서 XML에 필드가 비어 있음)
- **값이 있음**: **User32** 또는 **Winlogon**만 허용, **Advapi**는 **명시적으로 제외**
- XML이 비어 있으면 **Properties[9]**를 `LogonProcessName` 후보로 읽는 보조 경로 존재(4624 스키마 기준)

### 4634

- 위의 **LogonType / TargetUser / 웰노운** 조건만 적용(**LogonProcessName 검사 없음**). 그래서 동일 사용자·유형 2인 4634는 통과하는데, 4624는 `LogonProcessName` 규칙 때문에 걸러지는 **불균형**이 생길 수 있었고, 이후 **빈 LP 허용**으로 완화함.

## 테스트 스크립트

| 파일 | 용도 |
|------|------|
| MOC 표 | `GetWorkTime.Test-SecurityEventsFiltered.ps1` — `-MockOnly` / `-LiveOnly` ([[Windows 로그온·보안 로그 MOC]]) |
| `GetWorkTime.ListFiltered.ps1` | 필터 통과 목록·샘플 XML 시뮬레이션 |

## 관련 노트

- [[Windows 로그온·보안 로그 MOC]]
- [[보안 이벤트 4624·4634]]
- [[LogonProcessName과 LSA 로그온 프로세스]]
