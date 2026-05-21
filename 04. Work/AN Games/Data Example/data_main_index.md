---
tags:
  - data-example
  - index
updated: 2026-04-17
---

# Data Example — 메인 인덱스

서버 소켓에서 수신한 실제 push 로그를 시나리오 단위로 저장·관리하는 폴더.
테스트 케이스 작성, 파서 개발, 클라이언트 재현 시 원본 데이터로 활용한다.

## 카테고리

| 카테고리 | 파일 | 설명 |
|----------|------|------|
| 전투 | [[battle]] | 집결·단독 전투, NPC/유저/거점 전투 로그 |
| UI | [[ui]] | UI 이벤트, 팝업, 화면 전환 관련 로그 |
| 네트워크 | [[network]] | HTTP 요청/응답, 소켓 연결 관련 로그 |
| 군단 관리 | [[guild]] | 군단 가입·탈퇴, 영토, 기부 관련 로그 |

## 로그 파일 형식

각 파일은 Unity `Debug.Log`에서 출력된 소켓 raw 텍스트를 저장한다.

```
#### before escape {...JSON...}
mk.socket.MKSocket:PreprocessResPush (at Assets/World/Scripts/NetworkData/MKSocket.cs:4266)
mk.socket.MKSocket:res_push (at Assets/World/Scripts/NetworkData/MKSocket.cs:4121)
```

> BestHTTP / UnityEngine 레이어 stacktrace는 제거하고 게임 코드 라인만 유지한다.

## 신규 데이터 추가 규칙

1. 카테고리 md에 새 행 추가 후 로그 파일 생성
2. 파일명: `{인원수 또는 특징} {시나리오}` (예: `2인 집결 유저 전투`)
3. 파일 상단에 캡처 일시, 시나리오 조건, 주요 파라미터 기재
4. 로그는 raw 원본 유지, 분석 내용은 별도 섹션에 추가
