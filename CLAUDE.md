# Personal Dashboard — 개발 가이드

## 프로젝트 개요

순수 HTML/CSS/Vanilla JS 기반 개인 웹 대시보드. Glass Morphism UI. 프레임워크 없음.
상세 기획: `docs/planning.md` (Obsidian MOC)

## 파일 구조

```
WebProject/
├── CLAUDE.md                      ← 루트: 공통 규칙 (현재 파일)
├── index.html                     ← shell + 홈 패널 인라인 (SPA)
├── panels/                        ← 패널별 HTML 파일 (fetch로 지연 로드)
│   ├── life-calendar.html
│   ├── life-news.html
│   ├── life-memo.html
│   ├── life-readme.html
│   ├── game-dashboard.html
│   ├── game-readme.html
│   ├── dev-dashboard.html
│   ├── dev-readme.html
│   ├── media-dashboard.html
│   ├── media-readme.html
│   └── settings.html
├── css/
│   ├── variables.css              ← CSS 변수, 테마
│   ├── layout.css                 ← 사이드바, 상단바, 메인 레이아웃
│   └── components.css             ← 공통 컴포넌트
├── js/
│   ├── app.js                     ← 라우터(비동기 패널 로드), Settings, toast, switchReadmeTab
│   └── modules/
│       ├── life/
│       │   ├── CLAUDE.md          ← Life 메뉴 작업 관리
│       │   ├── calendar.js        ← Google Calendar API v3 연동
│       │   ├── news.js            ← NewsAPI.org 연동
│       │   └── memo.js            ← localStorage 메모 CRUD
│       ├── game/CLAUDE.md         ← Game 메뉴 작업 관리
│       ├── dev/CLAUDE.md          ← Dev 메뉴 작업 관리
│       └── media/CLAUDE.md        ← Media 메뉴 작업 관리
└── docs/                          ← Obsidian 기획 문서 (MOC)
    ├── planning.md                ← 인덱스 MOC (구현 현황 테이블)
    ├── features.md                ← 메뉴 구조, 기능 목록
    ├── architecture.md            ← 기술 스택, 폴더 구조
    ├── ui-system.md               ← CSS 변수, 테마
    └── settings-spec.md           ← 설정 패널, localStorage 키
```

---

## 코드 작업 후 필수 루틴

기능 추가·수정·삭제 후 반드시 아래 순서로 수행한다.

### 1. 기획 문서 업데이트

| 문서 | 업데이트 내용 |
|------|--------------|
| `docs/planning.md` | 구현 현황 테이블 — 완료/진행 중 상태 반영 |
| `docs/features.md` | 메뉴 구조 트리, 기능 목록, 섹션 내용 반영 |
| `docs/settings-spec.md` | localStorage 키·설정 항목 변경 시 반영 |
| 해당 메뉴 `CLAUDE.md` | TODO 체크박스 상태 업데이트 |

### 2. Obsidian wikilink 검증

```js
// Obsidian CLI로 미연결 링크 확인
obsidian eval code="(() => {
  const files = app.vault.getFiles().filter(f => f.path.includes('WebProject/docs'));
  const broken = [];
  for (const file of files) {
    const cache = app.metadataCache.getFileCache(file);
    (cache?.links || []).forEach(l => {
      if (!app.metadataCache.getFirstLinkpathDest(l.link, file.path))
        broken.push(file.name + ' → ' + l.link);
    });
  }
  return broken.length === 0 ? '✅ 모든 링크 정상' : broken.join('\n');
})()"
```

### 3. 커밋

- WebProject 변경은 AN Games 문서와 **분리하여 별도 커밋**
- 기획 문서 업데이트는 코드 커밋과 **같은 커밋 또는 직후 커밋**

---

## 패널 신규 추가 체크리스트

새 패널을 추가할 때 빠뜨리지 않도록 확인한다.

- [ ] `panels/{panelId}.html` — `<section class="panel" id="panel-{id}">` 포함하여 생성
- [ ] `index.html` — 사이드바 `nav-sub-item` 추가
- [ ] `js/app.js` — `MENU_MAP`에 항목 추가 (fetch 캐싱은 자동 처리됨)
- [ ] `js/modules/{menu}/` — 기능 JS 모듈 작성
- [ ] `docs/features.md` — 메뉴 구조 트리 및 기능 설명 업데이트
- [ ] `docs/planning.md` — 구현 현황 테이블 업데이트
- [ ] 해당 메뉴 `CLAUDE.md` — TODO 항목 추가 및 완료 처리

> **패널 파일 규칙**: `panels/*.html`은 `<section class="panel" id="panel-{id}">` 루트 요소 하나만 포함.
> `active` 클래스는 쓰지 않음 — `App.navigate()`가 단독으로 관리.

---

## 배포

GitHub Actions로 자동 배포. `main` 브랜치에 push 시, `03. Game/WebProject/**` 경로가 변경되면 자동 트리거.

- **워크플로우**: `.github/workflows/deploy-dashboard.yml`
- **배포 브랜치**: `gh-pages` (publish_dir: `03. Game/WebProject`)
- **배포 URL**: `https://seos4090.github.io/personal-dashboard/`

> 수동 재배포가 필요하면 GitHub → Actions 탭에서 워크플로우를 직접 실행.

---

## 공통 코딩 규칙

- **SPA 방식**: 히스토리 API 사용 안 함. `App.navigate(panelId)`로 패널 전환
- **CSS 변수**: 색상·크기는 반드시 `variables.css` 변수 참조 (`var(--color-life)` 등)
- **API 키**: 모두 `localStorage`에 저장. 키 이름은 `settings-spec.md` 참조
- **ReadMe 패널**: 새 메뉴 추가 시 `panel-{menu}-readme`도 함께 추가
- **탭 전환**: `switchReadmeTab(btn, contentId)` — `app.js` 전역 함수 사용
