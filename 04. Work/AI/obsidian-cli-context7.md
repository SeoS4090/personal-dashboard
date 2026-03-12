---
title: Cursor(context7) + Obsidian CLI 활용 가이드
created: 2026-03-12
tags:
  - ai
  - tools
  - obsidian
  - cli
---

# Cursor(context7) + Obsidian CLI 활용 가이드

> 이 문서는 **Cursor AI + context7**를 이용해 **최신 Obsidian CLI 문서를 참고**하면서, Vault에서 Obsidian CLI를 실전 워크플로우에 어떻게 붙일지 정리한 메모입니다.  
> Obsidian CLI 기본 문서는 `https://help.obsidian.md/cli` 를 기준으로 합니다.

---

## 1. 개념 정리

- **Obsidian CLI**
  - Obsidian Vault를 대상으로 **노트 생성, 검색, 열기, 일일노트, 자동화** 등을 수행하는 **명령줄 도구**.
  - PowerShell 등에서 `obsidian ...` 형태로 실행.

- **context7 (Cursor의 문서 검색 도구)**
  - Cursor 안에서 **라이브러리/툴의 최신 공식 문서·예제**를 조회하는 도구.
  - 나는 자연어로 “Obsidian CLI 최신 사용법 알려줘”라고 요청하면, Cursor가 context7을 통해 문서를 읽고 요약/예제 코드까지 만들어 준다고 이해하면 됨.

- **이 문서의 목표**
  - Obsidian Vault(`C:\Users\admin\Desktop\Personal\Obsidian_Memo`) 안에서
    - 최신 Obsidian CLI 문법을 **context7으로 확인**하고
    - 이를 바탕으로 **노트 생성/검색/일일노트/정리용 CLI 패턴**을 정리
    - 나중에 Task/스크립트로 재사용할 수 있게 “레시피”로 남겨 두는 것

---

## 2. Cursor에서 context7으로 Obsidian CLI 문서 보는 법

Cursor에 다음과 같이 요청하면, 내부적으로 context7 MCP를 사용해 **최신 Obsidian CLI 문서**를 보고 정리해 준다.

### 2.1. 기본 질문 패턴

- 예시 프롬프트:
  - `Obsidian CLI 공식 문서(https://help.obsidian.md/cli)를 context7으로 읽고, 사용 가능한 서브커맨드와 옵션을 표로 정리해 줘.`
  - `Obsidian CLI에서 일일노트(daily note) 관련 서브커맨드만 모아서 예시 명령어를 보여 줘.`
  - `Obsidian CLI에서 Windows PowerShell 기준 예시 명령어를 알려 줘. Vault 경로는 C:\Users\admin\Desktop\Personal\Obsidian_Memo 이야.`

이렇게 물어보면:

1. Cursor가 context7을 통해 Obsidian CLI 문서를 조회
2. 최신 문법/옵션 기준으로
   - 사용 가능한 **서브커맨드 목록**
   - 각 서브커맨드의 **주요 옵션/설명**
   - **PowerShell용 예시 명령어**
   를 정리해서 보여 준다.

> 요약: **“문법·기능이 헷갈릴 때는 항상 context7에게 최신 문서 확인부터 시킨다.”**

---

## 3. Obsidian CLI 기본 사용 패턴 (Vault 기준)

> 실제 서브커맨드/옵션 이름은 반드시 최신 공식 문서(`https://help.obsidian.md/cli`)를 한 번 더 확인할 것.  
> 아래는 일반적인 사용 패턴 예시다.

### 3.1. 전역 옵션 패턴

일반적인 형식(예시):

```powershell
obsidian <subcommand> --vault "C:\Users\admin\Desktop\Personal\Obsidian_Memo" [기타 옵션...]
```

- `--vault`: 사용할 Vault 경로 또는 이름
- 필요 시:
  - `--open`: Obsidian 앱에서 해당 노트를 바로 열기
  - `--path`: 특정 파일 경로 지정
  - 기타 옵션은 공식 문서 확인

### 3.2. 새 노트 생성

```powershell
obsidian new --vault "C:\Users\admin\Desktop\Personal\Obsidian_Memo" --title "노트 제목"
```

- 제목만 주고 생성
- 템플릿/폴더 지정 옵션이 있으면 함께 사용 (문서 확인)

### 3.3. 노트 검색

```powershell
obsidian search --vault "C:\Users\admin\Desktop\Personal\Obsidian_Memo" "검색어 또는 #태그"
```

- 텍스트, 태그, 메타데이터 조건 등은 공식 문서의 검색 문법 참조

### 3.4. 오늘 일일노트 열기/생성

```powershell
obsidian daily --vault "C:\Users\admin\Desktop\Personal\Obsidian_Memo" --open
```

- 일일노트가 없으면 생성, 있으면 열기 (툴의 동작 방식은 문서 확인)
- 날짜 포맷/폴더 구조는 Obsidian 설정에 따름

---

## 4. Cursor Tasks로 반복 작업 자동화 아이디어

> 아래는 VS Code/Cursor의 `tasks.json`에서 쓸 수 있는 **개념적 레시피**이다.  
> 실제 Task 파일은 이 문서를 참고해서 워크스페이스 쪽에서 작성한다.

### 4.1. 새 노트 생성 Task

- 목적:
  - 프롬프트로 제목만 입력 → Obsidian CLI가 Vault에 새 노트 생성
- 개념:
  - `obsidian new --vault <Vault> --title <입력값>`

### 4.2. 노트 검색 Task

- 목적:
  - 프롬프트로 검색어/태그 입력 → 검색 결과를 터미널에서 확인
- 개념:
  - `obsidian search --vault <Vault> "<query>"`

### 4.3. 오늘의 일일노트 열기 Task

- 목적:
  - 단축키/명령 하나로 오늘 일일노트 열기
- 개념:
  - `obsidian daily --vault <Vault> --open`

---

## 5. 태그/링크 정리 워크플로우 설계

Obsidian CLI가 태그나 링크를 “대량 수정”하는 기능을 직접 제공하지 않는 경우, 다음과 같이 **“CLI + 파일 편집” 조합**으로 접근하는 것이 현실적이다.

1. **CLI로 대상 노트 집합을 좁힌다**
   - `obsidian search`로 특정 태그/키워드가 들어간 노트 목록을 얻기
2. **Cursor + context7로 정리 전략을 설계한다**
   - 예:
     - `#todo` → `#task/todo` 로 통일
     - “ProjectA”라는 단어가 나오면 `[[Projects/ProjectA]]` 링크 추가
   - Cursor에게 “이 규칙대로 Vault 파일을 일괄 수정하는 스크립트 예시를 만들어 달라”고 요청
3. **스크립트/Task를 만들어 반복 사용**
   - Python/PowerShell/Node 등으로 만든 스크립트를 CLI처럼 호출
   - 필요하면 VS Code Task로 묶어서 한 번에 실행

이 문서 자체는 **규칙/아이디어를 기록하는 곳**으로 쓰고, 실제 구현 코드는 `tools/` 같은 폴더에 두고 링크만 남겨 두면 관리가 편하다.

---

## 6. 이 문서를 업데이트하는 방법

1. Obsidian CLI에 변경/신기능이 생긴 것 같으면:
   - Cursor에게:
     - `context7을 사용해서 Obsidian CLI 공식 문서(https://help.obsidian.md/cli)의 변경 사항을 요약해 줘. 특히 search, new, daily 관련 옵션 위주로 알려줘.`
   - 라고 요청한다.
2. Cursor가 요약해 준 내용을 이 문서(`AI/obsidian-cli-context7.md`)에 **수정/추가**한다.
3. 새로 정리된 워크플로우/명령 예시는 “예제” 섹션을 만들어 따로 모아 둔다.

> 요약: **CLI 문법은 context7이 대신 최신 상태를 찾아주고, 나는 이 파일(AI 폴더)을 “나만의 실전 레시피”로 유지 관리한다.**

