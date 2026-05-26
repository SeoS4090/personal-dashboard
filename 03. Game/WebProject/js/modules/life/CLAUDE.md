# Life 메뉴

[[../../docs/planning|← 기획 인덱스]]

## 관련 파일

| 파일 | 역할 |
|------|------|
| `calendar.js` | Google Calendar API v3 연동 |
| `news.js` | NewsAPI.org 연동, 키워드 필터 |
| `memo.js` | localStorage 메모 CRUD |

**index.html 패널 ID**
- `panel-life-readme` — 설정 가이드 (탭: 일정·뉴스·메모)
- `panel-life-calendar` — 일정
- `panel-life-news` — 뉴스
- `panel-life-memo` — 메모

**localStorage 키**
- `gcal_client_id` — Google OAuth 2.0 Client ID
- `gcal_all_calendars` — Google API로 불러온 전체 캘린더 목록 `[{id, name, color, enabled}]`
- `gcal_calendars` — enabled된 캘린더만 동기화된 배열 `[{id, name, color}]` (gcal_all_calendars에서 파생)
- `gcal_view_mode` — 뷰 모드 (month / week / list)
- `gcal_week_start` — 주 시작 요일 (0=일, 1=월)
- `news_api_key`, `news_keywords` — NewsAPI

---

## 완료

- [x] Google Calendar OAuth 2.0 연동 (비공개 캘린더 포함)
- [x] 다중 캘린더 지원 (Google API 자동 불러오기, 토글로 활성화/비활성화, 캘린더별 색상)
- [x] 월별 / 주별 / 일정 목록 뷰 전환
- [x] ‹ › 기간 탐색 (이전/다음 월·주·30일)
- [x] 주 시작 요일 설정 (일/월 선택)
- [x] NewsAPI.org 연동 (키워드 필터, 카드 그리드)
- [x] 메모 CRUD (추가·삭제, localStorage)
- [x] ReadMe 패널 — 일정·뉴스·메모 탭별 설정 가이드

## TODO

- [ ] 메모 편집 기능 (현재 추가/삭제만)
- [ ] 메모 색상 선택 기능 (모달)
- [ ] 뉴스 카테고리 필터 버튼 (기술·게임·개발) 활성화
- [ ] 홈 카드 — 오늘 일정 미리보기 표시
