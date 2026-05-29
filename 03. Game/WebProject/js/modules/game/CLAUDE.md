# Game 메뉴

[[../../docs/planning|← 기획 인덱스]]

## 관련 파일

| 파일 | 역할 |
|------|------|
| `tarkov.js` | Tarkov 패널 초기화, 스키마 검증, nextQuestMap 파생, 미리보기 렌더링 |
| `../../data/tarkov-questlines.example.json` | Tarkov 퀘스트 라인 예시 스키마 v2 (평탄 구조) |
| `../../data/tarkov-questlines.generated.json` | 파이프라인 산출물 (gitignore, node scripts/tarkov-sync.js로 생성) |
| `../../data/tarkov-questlines.raw.json` | tarkov.dev 원본 응답 (gitignore, 재변환·디버그용) |
| `../../scripts/tarkov-sync.js` | tarkov.dev GraphQL → v2 JSON 변환 스크립트 |

**index.html 패널 ID**
- `panel-game-readme` — 섹션 소개·예정 기능 가이드
- `panel-game-dashboard` — 게임 대시보드
- `panel-game-tarkov` — Escape from Tarkov 퀘스트 라인

**localStorage 키 (예정)**
- `steam_api_key`, `steam_user_id` — Steam Web API

---

## 완료

- [x] 대시보드 패널 UI 틀
- [x] ReadMe 패널 — 섹션 소개·예정 기능 안내
- [x] Tarkov 패널 기본 연결 (사이드바 메뉴, 라우팅, 미리보기)
- [x] Tarkov 퀘스트 라인 JSON 스키마 샘플 추가 및 로딩 연결
- [x] Tarkov 스키마 v2 확정 — 평탄 quests[], nextQuestIds 런타임 파생, validateSchema/buildNextQuestMap 추가
- [x] Tarkov 파이프라인 — tarkov.dev GraphQL 수집 + v2 변환 스크립트 (scripts/tarkov-sync.js, 499퀘, Node 내장만 사용)
- [x] Tarkov SVG 그래프 렌더링 — 트레이더 swim-lane 레이아웃, 위상 정렬 깊이, bezier 엣지, 줌 버튼, Kappa K 뱃지
- [x] Tarkov 노드 인터랙션 — 좌클릭 상세(목표/보상/완료버튼), 우클릭 선행 루트 하이라이트, 선행 루트 전체 완료
- [x] Tarkov 진행 상태 저장 — `localStorage` 키 `tarkov_quest_progress`, 완료 토글, 완료된 노드 녹색 표시
- [x] Tarkov 좌클릭 상세 개선 — 그래프 우상단 **플로팅 오버레이** 패널, 수행 가능 상태 뱃지 + 선행/후속 퀘스트(클릭 이동) 추가
- [x] Tarkov 필터 바 — 검색·트레이더·`Kappa만`·`완료 숨김`·초기화 (`_buildFilterBar`, svg 재렌더 방식)
- [x] Tarkov 포커스 격리 모드 — 선택 퀘스트의 선행+후속 체인만 표시 (`_setFocus`/`_getDescendants`)

**localStorage 키 (Tarkov)**
- `tarkov_quest_progress` — `{ questId: true }` 형태, 완료한 퀘스트 ID 집합

## TODO

- [ ] Steam Web API 연동 — 라이브러리, 최근 플레이 게임
- [x] Tarkov 트레이더 필터 및 이름 검색 (맵/레벨 필터는 추후)
- [ ] 플레이 타임 통계 UI
- [ ] 게임 뉴스 피드
- [ ] 관심 게임 위시리스트 관리
- [ ] 게임별 메모 및 공략 노트
- [ ] 설정 패널에 Steam API Key 항목 추가
