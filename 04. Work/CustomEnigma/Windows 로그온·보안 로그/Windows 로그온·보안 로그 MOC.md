---
title: Windows 로그온·보안 로그 (MOC)
date: 2026-04-03
tags:
  - customenigma
  - windows
  - security
  - obsidian
  - vault/customenigma
aliases:
  - 로그온 MOC
---

# Windows 로그온·보안 로그 (MOC)

> [!info] 문서 위치
> 프로젝트 룰(`.cursor/rules/obsidian-customenigma-docs.mdc`)에 따라 본 노트 묶음은 **이 Obsidian 경로**에만 둔다:  
> `Obsidian_Memo/04. Work/CustomEnigma/Windows 로그온·보안 로그/`  
> Rainmeter 스킨 폴더의 `docs/`에는 **경로 안내만** 남긴다.

**Windows 보안 로그**의 로그온 관련 필드(특히 **4624**의 **LogonProcessName**, **Logon Type**)와 **CustomEnigma WorkTimer**(`GetWorkTime.ps1`) 활용을 정리한다.

> [!tip] 시작하기
> 1. [[LogonProcessName과 LSA 로그온 프로세스]] — *로그온 프로그램* 의미와 대표 값
> 2. [[Logon Type 로그온 유형]] — 2·7·5 등
> 3. [[보안 이벤트 4624·4634]] — 성공 로그온/로그오프 구조
> 4. [[잠금·해제 이벤트 4800·4801]] — Win+L 과 감사 정책
> 5. [[GetWorkTime 필터와 이벤트 읽기 이슈]] — 스크립트 필터 규칙

상위 인덱스: [[CustomEnigma 인덱스]]

## 스킨 소스 경로 (절대)

| 역할 | 경로 |
|------|------|
| 출근 시각 계산 | `C:\Users\admin\Documents\Rainmeter\Skins\CustomEnigma\@Resources\Scripts\GetWorkTime.ps1` |
| 필터 목록 덤프 | `...\CustomEnigma\@Resources\Scripts\GetWorkTime.ListFiltered.ps1` |
| 단위/통합 테스트 | `...\CustomEnigma\@Resources\Scripts\GetWorkTime.Test-SecurityEventsFiltered.ps1` |
| Rainmeter 연동 | `...\CustomEnigma\WorkTimer\WorkTimer.ini`, `WorkTimer\WorkTimer.lua` |

(레포 내에서는 `@Resources`·`WorkTimer` 기준 상대 경로로 동일 파일을 가리킨다.)

## 외부 참고 (Microsoft)

- [이벤트 4624](https://learn.microsoft.com/en-us/windows/security/threat-protection/auditing/event-4624)
- [이벤트 4634](https://learn.microsoft.com/en-us/windows/security/threat-protection/auditing/event-4634)
- [Logon Types](https://learn.microsoft.com/en-us/windows/security/identity-protection/access-control/logon-types)

---

#windows/customenigma #audit
