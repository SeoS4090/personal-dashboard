# LogDec01 — 웹 프로토타입

기획(`../../기획/`)의 [[자동-전투-시스템]], [[HP-방어-시스템]], [[대미지 계산 공식]], [[상점-시스템]], [[덱-구성-규칙]] 을 `프로그램/games/logdec01/` 에 매핑한 1차 플레이어블입니다.

## 모듈 구조

```
logdec01/
├── index.html          # 게임 셸 + UI
├── css/
│   ├── game.css        # 레이아웃·컴포넌트
│   └── dot-ui.css      # 도트 스킨 ([[게임-비전]] 팔레트·픽셀 폰트·아레나)
├── assets/sprites/     # (예정) 32×32 PNG 시트
└── js/
    ├── main.js         # 화면 전환·이벤트
    ├── data/
    │   ├── cards.js    # 카드 레코드 (카드-스키마)
    │   └── classes.js  # 직업 스탯·시작 덱
    ├── combat/
    │   ├── damage.js   # direct 피해·적용 순서
    │   ├── units.js    # 유닛 생성
    │   └── battle.js   # 슬롯 순환·틱 루프
    └── run/
        ├── state.js    # 런 상태 (골드·덱·HP)
        ├── deck.js     # 덱 하한·슬롯
        └── shop.js     # 6칸 상점 생성
```

## 기획 매핑

| 기획 노트 | 코드 |
|-----------|------|
| 자동-전투-시스템 | `combat/battle.js` — 8슬롯, 틱 10/라운드, cost=쿨다운 |
| 대미지 계산 공식 | `combat/damage.js` — raw·크리·def·statusMul |
| HP-방어-시스템 | `combat/damage.js` `applyDamage` — 회피→보호막→HP |
| 덱-구성-규칙 | `run/deck.js` — 최소 5장, 슬롯 8 |
| 상점-시스템 | `run/shop.js` — 6칸·리롤 50G |
| 게임-코어-루프 | `main.js` — 직업 선택 → 전투 → 상점 → 반복 |
| 게임-비전 (도트 UI) | `css/dot-ui.css` + 전투 아레나 (`index.html`) |

## 로컬 실행

```powershell
cd "프로그램"
npx --yes serve -l 3000
```

브라우저: http://localhost:3000/games/logdec01/

## data 갱신

- 카드 95+20(Plus): `node scripts/gen-cards.mjs` → `js/data/cards.js`
- Act1 적: `js/data/enemies-act1.js`

## 미구현

- 맵·Act2/3 ([[진행-할일]])
- DoT 틱 파이프라인
- **32×32 스프라이트 시트** 임포트·애니 (`assets/sprites/`, [[구현-할일]] P3)
