# Life 메뉴

[[../../docs/planning|← 기획 인덱스]]

## 관련 파일

| 파일 | 역할 |
|------|------|
| `calendar.js` | Google Calendar API v3 연동 |
| `news.js` | NewsAPI.org 연동, 키워드 필터 |
| `srello.js` | localStorage 칸반 + JSON 백업 + Trello형 카드 기능 |

**index.html 패널 ID**
- `panel-life-readme` — 설정 가이드 (탭: 일정·뉴스·Srello)
- `panel-life-calendar` — 일정
- `panel-life-news` — 뉴스
- `panel-life-srello` — Srello

**localStorage 키**
- `gcal_client_id` — Google OAuth 2.0 Client ID
- `gcal_access_token` — OAuth 액세스 토큰 (새로고침 후 자동 복원용, 만료 시 자동 삭제)
- `gcal_token_expiry` — 토큰 만료 시각 (epoch ms, 발급 후 58분)
- `gcal_all_calendars` — Google API로 불러온 전체 캘린더 목록 `[{id, name, color, enabled}]`
- `gcal_calendars` — enabled된 캘린더만 동기화된 배열 `[{id, name, color}]` (gcal_all_calendars에서 파생)
- `gcal_view_mode` — 뷰 모드 (month / week / list)
- `gcal_week_start` — 주 시작 요일 (0=일, 1=월)
- `news_api_key`, `news_keywords` — NewsAPI
- `srello_board` — Srello 보드 `{ lists: [{ id, title, cards }] }` — 카드 필드: `done`, `status`, `linkedCardIds` 포함
- `srello_templates` — 카드 템플릿 배열
- `srello_view_mode` — `board` | `calendar`
- `srello_sort_mode` — 카드 정렬 기준 (`manual`/`priority`/`due-asc`/`due-desc`/`status`/`title`)
- `srello_settings` — 사용자 정의 `{ colors: [{id,hex,name}], categories: [{id,name}] }` — 기본 카테고리: 기획·아트·개발·사운드·공통
- `srello_memo_migrated` — 구 메모(`dashboard_memos`) 이전 완료 플래그

---

## 완료

- [x] Google Calendar OAuth 2.0 연동 (비공개 캘린더 포함)
- [x] 다중 캘린더 지원 (Google API 자동 불러오기, 토글로 활성화/비활성화, 캘린더별 색상)
- [x] 월별 / 주별 / 일정 목록 뷰 전환
- [x] ‹ › 기간 탐색 (이전/다음 월·주·30일)
- [x] 주 시작 요일 설정 (일/월 선택)
- [x] NewsAPI.org 연동 (키워드 필터, 카드 그리드)
- [x] Srello 칸반 (리스트·카드 CRUD, 드래그 앤 드롭, localStorage)
- [x] Srello 마감일·체크리스트·댓글·첨부·활동 로그
- [x] Srello 이미지 Ctrl+V 붙여넣기 (base64, 600 KB 제한, 썸네일 표시)
- [x] Srello 필터·캘린더 뷰·템플릿·완료 리스트 자동화
- [x] Srello JSON보내기/가져오기 (로컬 파일, Git 제외)
- [x] 구 메모 → Srello 「할 일」 자동 이전
- [x] ReadMe 패널 — 일정·뉴스·Srello 탭별 설정 가이드
- [x] Srello 카드 모달 중복 로드 버그 수정 (boardContainerBound 플래그)
- [x] Srello 다크모드 select 드롭다운 배경/글자색 수정
- [x] Srello Status 상태 필드 (기획중·개발중·테스트중·완료·보류)
- [x] Srello 카드 face 완료 토글 버튼 (done 필드, 줄긋기 표시)
- [x] Srello 라벨 색 변경 버그 수정 (priority 색이 사용자 선택 색 덮어쓰던 문제)
- [x] Srello done/status 3-way 동기화 (face 토글 · 모달 status 선택 · 완료 리스트 이동)
- [x] Srello 다크모드 날짜 입력 위젯 가시성 수정 (color-scheme: dark)
- [x] Srello 활동 내역 아코디언 UI (접기/펼치기)
- [x] Srello 카드 간 연결 기능 (linkedCardIds 필드 + 모달 연결 UI)
- [x] Life Calendar 뷰에 Srello 마감일 통합 표시 (API 연동 없이 뷰만 통합, 점선 칩으로 구분)
- [x] Srello 리스트 순서 변경 — ⋮⋮ 핸들 드래그 앤 드롭 (kind:'list' 채널 분리)
- [x] Srello 카드 정렬 드롭다운 — 수동/우선순위/마감일↑↓/상태/제목 (srello_sort_mode)
- [x] Srello Settings 모달 — 라벨 색상·카테고리 CRUD (srello_settings, 기본: 기획·아트·개발·사운드·공통)
- [x] Srello 카드 모달 2-컬럼 레이아웃 — 좌: 내용(설명·체크리스트·댓글·첨부·연결·활동) / 우: 설정 사이드바 아코디언(마감일·우선순위·카테고리·상태·커버·라벨색)
- [x] Srello 카드 desc textarea 자동 높이 버그 수정 (overflow:hidden + min-height)
- [x] Srello 모달 반응형 — 720px 이하에서 단일 컬럼 폴백

## TODO

- [ ] 뉴스 카테고리 필터 버튼 (기술·게임·개발) 활성화
- [ ] 홈 카드 — 오늘 일정 미리보기 표시
