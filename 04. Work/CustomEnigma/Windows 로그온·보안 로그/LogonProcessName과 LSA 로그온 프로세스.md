---
title: LogonProcessName과 LSA 로그온 프로세스
date: 2026-04-03
tags:
  - windows
  - security
  - logon
  - vault/customenigma
aliases:
  - 로그온 프로세스 이름
---

# LogonProcessName과 LSA 로그온 프로세스

이벤트 **4624**(성공한 로그온)의 `EventData`에 있는 **LogonProcessName**은 사용자가 흔히 말하는 “실행 파일 이름”과 **1:1로 같지 않을 수 있습니다.** Windows **LSA(로컬 보안 기관)**에 등록된 **로그온 프로세스(Logon process)** 의 짧은 이름입니다. 같은 로그온이라도 경로에 따라 `User32` vs `Winlogon` 등으로 나뉘어 기록됩니다.

> [!note] AuthenticationPackageName 과의 차이
> 같은 4624에 **AuthenticationPackageName**(예: Negotiate, Kerberos, NTLM)이 별도로 있습니다. **패키지**는 “자격 증명을 어떤 프로토콜로 검증했는지”에 가깝고, **LogonProcessName**은 “어떤 **컴포넌트가 LSA에 로그온을 요청했는지**”에 가깝습니다. 둘 다 필터링에 쓸 수 있으나 의미가 다릅니다.

## 자주 보는 LogonProcessName

| 값 | 일반적인 의미 | 비고 |
|----|----------------|------|
| **User32** | 대화형 데스크톱·잠금 화면 쪽 경로에서 흔함 | Ctrl+Alt+Del, 잠금 해제 UI 등과 연관된 흐름에서 관측되는 경우가 많음 |
| **Winlogon** | Winlogon이 주도하는 로그온·세션 처리 | 부팅 직후 콘솔 로그온 등 환경에 따라 **User32 대신** 또는 함께 나타날 수 있음 |
| **Advapi** | `LsaLogonUser` 계열 API를 통한 로그온 요청 | **서비스·시스템 계정**, 일부 백그라운드 로그온에서 자주 보임. **4624 + LogonType 5 + SYSTEM** 조합과 함께 나오는 패턴이 전형적 |
| **seclogo** 등 | 보안/로그온 UI·브랜딩 관련 경로(버전별) | 환경마다 다름; 필요 시 실제 4624 XML로 확인 |

> [!warning] “프로그램”이라는 표현
> 문서나 UI에서 *Logon Process*를 “프로그램”으로 번역하는 경우가 있으나, 반드시 `C:\Windows\System32\*.exe` 파일명과 동일하지는 않습니다. **ProcessName** 필드(예: `svchost.exe`, `services.exe`)는 또 **별도**입니다.

## Get-WinEvent / ToXml() 에서 필드가 비는 현상

이벤트 뷰어에서 XML을 보면 `LogonProcessName`이 있는데, PowerShell `Get-WinEvent` 후 `ToXml()` 또는 `EventData` 파싱에서는 **빈 문자열**로 나오는 환경이 보고되었습니다. 이 경우 **바이너리 속성 배열** `Properties[n]`으로 같은 값을 읽는 우회가 필요할 수 있습니다.

→ 구체적 대응은 [[GetWorkTime 필터와 이벤트 읽기 이슈]] 참고.

## 다음 읽을 노트

- [[Logon Type 로그온 유형]] — LogonProcessName과 함께 봐야 하는 **LogonType**
- [[보안 이벤트 4624·4634]] — 필드가 이벤트에 어떻게 붙는지
- [[Windows 로그온·보안 로그 MOC]]
