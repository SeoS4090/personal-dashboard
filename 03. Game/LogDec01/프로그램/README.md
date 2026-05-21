# 프로그램 — 개인 홈페이지 (정적 사이트)

HTML · CSS · JavaScript 로 구성된 개인 홈페이지입니다. GitHub Pages 로 배포합니다.

## 사이트 구조

```
메인 (index.html)
 ├── Settings (settings/index.html)
 └── Games (games/index.html)
      ├── logdec01/     ← 자동 전투 프로토타입 (js 모듈, README 참고)
      ├── game-02/
      └── game-03/
```

새 게임 추가:

1. `games/<프로젝트-id>/index.html` 생성 (`data-depth="2"`, 스크립트 경로 `../../js/`)
2. `js/site-config.js` 의 `sections[0].projects` 에 카드 항목 추가

## 로컬 미리보기

`file://` 로 열면 일부 브라우저에서 경로가 깨질 수 있습니다. 로컬 서버 사용을 권장합니다.

```powershell
cd "프로그램"
npx --yes serve -l 3000
```

브라우저: http://localhost:3000

## 파일 배치

| 경로 | 역할 |
|------|------|
| `index.html` | 메인 홈 |
| `games/` | 게임 허브 + 프로젝트별 페이지 |
| `css/` | `tokens` · `base` · `layout` · `components` |
| `js/site-config.js` | 사이트명·프로젝트 목록·`basePath` |
| `js/paths.js` | 깊이·GitHub Pages 경로 해석 |
| `js/main.js` | 헤더·푸터·카드 UI |
| `js/settings.js` | 테마·글자 크기 (localStorage) |
| `settings/` | 사이트 설정 페이지 |
| `assets/` | 이미지·파비콘 등 |

기획 문서는 `../기획/` — 이 폴더에는 넣지 않습니다.

## GitHub Pages 배포

### 1. 저장소에 푸시

```powershell
git add .
git commit -m "Add personal homepage static site"
git push origin main
```

### 2. GitHub 설정

1. 저장소 **Settings → Pages**
2. **Build and deployment → Source**: `GitHub Actions`
3. `main` 브랜치에 push 시 `.github/workflows/deploy-pages.yml` 이 `프로그램/` 만 배포

### 3. Project Pages URL (`username.github.io/저장소명/`)

저장소 이름이 `LogDec01` 이면 사이트 주소는:

`https://<username>.github.io/LogDec01/`

이 경우 `js/site-config.js` 에서:

```js
basePath: "/LogDec01",
```

로 설정한 뒤 커밋·재배포한다.

### 4. User Pages (`username.github.io` 저장소 루트)

전용 `username.github.io` 저장소에 **이 `프로그램/` 내용만** 루트로 두면 `basePath` 는 `""` 로 유지한다.

## 커스터마이즈

- `site-config.js`: `siteName`, `tagline`, `author`, 프로젝트 목록
- `css/tokens.css`: 색·간격 디자인 토큰
- `settings/index.html`: 테마(다크/라이트/시스템)·글자 크기 — 브라우저 `localStorage`에 저장
- 추후 섹션(블로그, About 등): `sections` 배열과 `index.html` 섹션 확장
