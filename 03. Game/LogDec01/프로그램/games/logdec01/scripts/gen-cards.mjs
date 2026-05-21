/**
 * [[카드-목록]] → js/data/cards.js 생성
 * 실행: node scripts/gen-cards.mjs
 */
import { writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

/** [id, name, cost, power, target, rarity, tags, effects] */
const ROWS = [
  // 전사 15
  ["w_strike", "강타", 1, 6, "nearest", "common", "physical,warrior", ""],
  ["w_block", "방어 태세", 1, 0, "self", "common", "warrior", "block:8"],
  ["w_taunt", "도발", 2, 0, "self", "common", "warrior", "taunt:2"],
  ["w_shield_slam", "방패 강타", 2, 4, "nearest", "common", "physical,warrior", "shield_slam"],
  ["w_heavy_strike", "중강타", 2, 10, "nearest", "common", "physical,warrior", ""],
  ["w_iron_wall", "철벽", 2, 0, "self", "uncommon", "warrior", "block:14"],
  ["w_rally", "전투 함성", 2, 0, "self", "uncommon", "warrior", "empower:1"],
  ["w_cleave", "가로베기", 3, 5, "all_enemies", "uncommon", "physical,warrior", ""],
  ["w_fortify", "요새화", 3, 0, "self", "uncommon", "warrior", "block:10;empower:1"],
  ["w_guard_break", "방패 격파", 2, 7, "nearest", "uncommon", "physical,warrior", "weak:1"],
  ["w_battle_cry", "함성", 1, 0, "self", "common", "warrior", "empower:1"],
  ["w_shield_wall", "방벽", 3, 0, "self", "rare", "warrior", "block:20"],
  ["w_revenge", "보보", 2, 8, "nearest", "uncommon", "physical,warrior", "bleed:2"],
  ["w_last_stand", "최후의 저항", 4, 0, "self", "rare", "warrior", "block:25;empower:2"],
  ["w_champion_strike", "투사의 일격", 3, 14, "nearest", "rare", "physical,warrior", ""],
  // 마법사 15
  ["m_bolt", "마력 화살", 1, 5, "lowest_hp", "common", "magic,mage", ""],
  ["m_block", "비전 장벽", 1, 0, "self", "common", "magic,mage", "block:6"],
  ["m_fireball", "파이어볼", 2, 6, "all_enemies", "common", "magic,mage", "burn:2"],
  ["m_frost_nova", "서리 폭발", 2, 4, "all_enemies", "common", "magic,mage", "slow:1"],
  ["m_ember", "불씨", 1, 3, "lowest_hp", "common", "magic,mage", "burn:3"],
  ["m_blizzard", "눈보라", 3, 3, "all_enemies", "uncommon", "magic,mage", "slow:1;burn:1"],
  ["m_arcane_missiles", "비전 미사일", 2, 4, "random", "uncommon", "magic,mage", ""],
  ["m_mana_shield", "마나 보호막", 2, 0, "self", "uncommon", "magic,mage", "block:12"],
  ["m_scorch", "작열", 2, 5, "lowest_hp", "uncommon", "magic,mage", "burn:4"],
  ["m_ice_lance", "얼음 창", 2, 9, "lowest_hp", "uncommon", "magic,mage", "slow:1"],
  ["m_meteor", "메테오", 4, 12, "all_enemies", "rare", "magic,mage", "burn:3"],
  ["m_flame_wave", "화염파", 3, 7, "all_enemies", "uncommon", "magic,mage", "burn:2"],
  ["m_frost_armor", "서리 갑옷", 2, 0, "self", "common", "magic,mage", "block:8"],
  ["m_overcharge", "과충전", 1, 0, "self", "uncommon", "mage", "empower:2"],
  ["m_elemental_burst", "원소 폭발", 3, 8, "all_enemies", "rare", "magic,mage", "burn:2;slow:1"],
  // 궁수 15
  ["a_shot", "사격", 1, 5, "lowest_hp", "common", "physical,archer", ""],
  ["a_block", "회피 자세", 1, 0, "self", "common", "archer", "block:5;evade:10"],
  ["a_mark", "표적 표시", 1, 2, "lowest_hp", "common", "archer", "mark:1"],
  ["a_double", "연속 사격", 2, 4, "lowest_hp", "common", "physical,archer", ""],
  ["a_snipe", "저격", 3, 12, "lowest_hp", "uncommon", "physical,archer", ""],
  ["a_volley", "곡사", 2, 4, "all_enemies", "uncommon", "physical,archer", ""],
  ["a_quickshot", "속사", 1, 3, "lowest_hp", "common", "physical,archer", ""],
  ["a_barricade", "바리케이드", 2, 0, "self", "uncommon", "archer", "block:10"],
  ["a_pierce", "관통탄", 2, 7, "lowest_hp", "uncommon", "physical,archer", "pierce:50"],
  ["a_rain", "화살비", 3, 3, "all_enemies", "uncommon", "physical,archer", ""],
  ["a_focus", "집중", 1, 0, "self", "common", "archer", "empower:1"],
  ["a_trap", "덫", 2, 3, "random", "uncommon", "archer", "bleed:3"],
  ["a_headshot", "헤드샷", 3, 10, "lowest_hp", "rare", "physical,archer", "stun:1"],
  ["a_evasion", "회피술", 2, 0, "self", "uncommon", "archer", "evade:20"],
  ["a_death_mark", "죽음의 표식", 3, 6, "lowest_hp", "rare", "archer", "mark:2"],
  // 도적 15
  ["r_stab", "찌르기", 1, 5, "nearest", "common", "physical,rogue", ""],
  ["r_evade", "회피", 1, 0, "self", "common", "rogue", "evade:20"],
  ["r_poison", "독 바르기", 2, 2, "nearest", "common", "rogue", "poison:3"],
  ["r_bleed_cut", "베기", 1, 4, "nearest", "common", "physical,rogue", "bleed:2"],
  ["r_backstab", "백스탭", 2, 9, "nearest", "uncommon", "physical,rogue", ""],
  ["r_smoke", "연막", 2, 0, "self", "uncommon", "rogue", "block:6;evade:15"],
  ["r_envenom", "강독", 2, 3, "nearest", "uncommon", "rogue", "poison:5"],
  ["r_slice", "연속 베기", 2, 3, "nearest", "uncommon", "physical,rogue", "bleed:3"],
  ["r_fan_knives", "나이프 부채", 2, 3, "all_enemies", "uncommon", "physical,rogue", "bleed:1"],
  ["r_hemorrhage", "과다 출혈", 3, 5, "nearest", "uncommon", "rogue", "bleed:5"],
  ["r_shadowstep", "그림자 밟기", 1, 0, "self", "common", "rogue", "evade:25"],
  ["r_antidote", "해독", 1, 0, "self", "common", "rogue", "cleanse:1"],
  ["r_assassinate", "암살", 3, 15, "lowest_hp", "rare", "physical,rogue", ""],
  ["r_toxic_cloud", "독구름", 3, 2, "all_enemies", "rare", "rogue", "poison:2"],
  ["r_execution", "처형", 4, 8, "nearest", "rare", "physical,rogue", "bleed:2"],
  // 사제 15
  ["p_smite", "성스러운 일격", 1, 5, "nearest", "common", "holy,magic,priest", ""],
  ["p_heal", "치유", 1, 0, "self", "common", "holy,priest", "heal:12"],
  ["p_shield", "신성한 보호", 1, 0, "self", "common", "holy,priest", "block:7"],
  ["p_cleanse", "정화", 2, 0, "self", "common", "holy,priest", "cleanse:1"],
  ["p_bless", "축복", 2, 0, "self", "uncommon", "holy,priest", "empower:1;heal:5"],
  ["p_holy_light", "성광", 2, 6, "nearest", "common", "holy,magic,priest", ""],
  ["p_prayer", "기도", 1, 0, "self", "common", "priest", "heal:8"],
  ["p_divine_wrath", "신노", 3, 9, "nearest", "uncommon", "holy,magic,priest", ""],
  ["p_sanctuary", "성역", 3, 0, "self", "uncommon", "priest", "block:15;heal:5"],
  ["p_purify", "순화", 2, 4, "nearest", "uncommon", "holy,magic,priest", "cleanse:1"],
  ["p_radiance", "광휘", 2, 4, "all_enemies", "uncommon", "holy,magic,priest", ""],
  ["p_guardian", "수호", 2, 0, "self", "uncommon", "priest", "block:12"],
  ["p_mend", "응급 치료", 1, 0, "self", "common", "priest", "heal:6"],
  ["p_halo", "후광", 3, 0, "self", "rare", "holy,priest", "empower:2;block:8"],
  ["p_judgment", "심판", 3, 11, "nearest", "rare", "holy,magic,priest", "stun:1"],
  // 공용 20
  ["c_strike", "기본 공격", 1, 4, "nearest", "common", "physical,common", ""],
  ["c_defend", "방어", 1, 0, "self", "common", "common", "block:5"],
  ["c_adrenaline", "아드레날린", 1, 0, "self", "common", "common", "empower:1"],
  ["c_shrug", "무시", 1, 0, "self", "common", "common", "block:4"],
  ["c_bandage", "붕대", 1, 0, "self", "common", "common", "heal:6"],
  ["c_throw_rock", "돌 던지기", 1, 3, "random", "common", "physical,common", ""],
  ["c_focus", "집중", 1, 0, "self", "common", "common", "empower:1"],
  ["c_dodge", "피하기", 1, 0, "self", "common", "common", "evade:15"],
  ["c_suplex", "밀치기", 2, 6, "nearest", "common", "physical,common", "weak:1"],
  ["c_battle_trance", "전투 trance", 2, 0, "self", "uncommon", "common", "empower:1;block:5"],
  ["c_wild_swing", "난무", 2, 7, "random", "uncommon", "physical,common", ""],
  ["c_second_wind", "제2의 바람", 2, 0, "self", "uncommon", "common", "heal:10"],
  ["c_pommel", "자루 치기", 1, 4, "nearest", "common", "physical,common", "stun:1"],
  ["c_trip", "발 걸기", 2, 3, "nearest", "uncommon", "common", "slow:1"],
  ["c_deep_breath", "심호흡", 1, 0, "self", "common", "common", "block:8"],
  ["c_lucky_coin", "행운의 동전", 1, 0, "self", "uncommon", "common", ""],
  ["c_improvise", "즉흥", 2, 5, "random", "uncommon", "common", ""],
  ["c_desperate_blow", "필사타", 3, 12, "nearest", "uncommon", "physical,common", "weak:1"],
  ["c_fortify_mind", "정신 단련", 2, 0, "self", "uncommon", "common", "block:6;cleanse:1"],
  ["c_war_cry", "함성", 2, 0, "self", "uncommon", "common", "empower:1"],
];

/** Plus 20 — [[데이터-할일]] */
const PLUS_BASE = [
  "w_strike", "w_block", "w_heavy_strike", "m_bolt", "m_fireball",
  "a_shot", "a_snipe", "r_stab", "r_backstab", "p_smite",
  "p_heal", "c_strike", "c_defend", "c_adrenaline", "c_wild_swing",
  "c_desperate_blow", "w_shield_wall", "m_meteor", "a_headshot", "p_judgment",
];

function parseEffects(str) {
  if (!str || str === "—" || str === "-") return [];
  const effects = [];
  for (const part of str.split(";").map((s) => s.trim())) {
    if (!part) continue;
    if (part === "shield_slam") {
      effects.push({ type: "shield_slam" });
      continue;
    }
    const m = part.match(/^(\w+):(\d+)$/);
    if (m) effects.push({ type: m[1], value: parseInt(m[2], 10) });
  }
  return effects;
}

function classTagsFromId(id, tagStr) {
  const tags = tagStr.split(",").map((t) => t.trim()).filter(Boolean);
  const classes = ["warrior", "mage", "archer", "rogue", "priest", "common"];
  const classTags = classes.filter((c) => tags.includes(c) || id.startsWith(c[0] + "_"));
  if (tags.includes("common") && !classTags.includes("common")) classTags.push("common");
  if (id.startsWith("c_")) classTags.push("common");
  return [...new Set(classTags.length ? classTags : ["common"])];
}

function rowToCard([id, name, cost, power, target, rarity, tagStr, effStr]) {
  return {
    id,
    name,
    classTags: classTagsFromId(id, tagStr),
    cost,
    power,
    scale: 1,
    target,
    tags: tagStr.split(",").map((t) => t.trim()).filter((t) => !["warrior", "mage", "archer", "rogue", "priest", "common"].includes(t)),
    rarity,
    effects: parseEffects(effStr),
  };
}

const CARDS = {};
for (const row of ROWS) {
  const c = rowToCard(row);
  CARDS[c.id] = c;
}

CARDS.strike_basic = { ...CARDS.c_strike, id: "strike_basic", name: "기본 타격 (보충)" };

for (const baseId of PLUS_BASE) {
  const base = CARDS[baseId];
  if (!base) continue;
  const plusId = baseId + "_plus";
  const boostedEffects = base.effects.map((fx) => {
    if (fx.value != null) return { ...fx, value: Math.ceil(fx.value * 1.25) };
    return { ...fx };
  });
  CARDS[plusId] = {
    ...base,
    id: plusId,
    name: base.name + "+",
    power: base.power > 0 ? base.power + 3 : 0,
    rarity: base.rarity === "common" ? "uncommon" : base.rarity === "uncommon" ? "rare" : "rare",
    effects: boostedEffects,
  };
}

const out = `/** 자동 생성 — node scripts/gen-cards.mjs · 원본 [[카드-목록]] */
export function parseEffects(str) {
  if (!str || str === "—" || str === "-") return [];
  const effects = [];
  for (const part of str.split(";").map((s) => s.trim())) {
    if (!part) continue;
    if (part === "shield_slam") {
      effects.push({ type: "shield_slam" });
      continue;
    }
    const m = part.match(/^(\\w+):(\\d+)$/);
    if (m) effects.push({ type: m[1], value: parseInt(m[2], 10) });
  }
  return effects;
}

export const CARDS = ${JSON.stringify(CARDS, null, 2)};

export function getCard(id) {
  return CARDS[id] || null;
}

export function getCardName(id) {
  return CARDS[id]?.name || id;
}

export const PLUS_CARD_IDS = ${JSON.stringify(PLUS_BASE.map((id) => id + "_plus"))};
`;

writeFileSync(join(__dirname, "../js/data/cards.js"), out, "utf8");
console.log("Wrote cards.js:", Object.keys(CARDS).length, "cards");
