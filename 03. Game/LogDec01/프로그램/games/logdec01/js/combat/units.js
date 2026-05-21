import { CLASS_STATS } from "../data/classes.js";
import {
  ACT1_ENEMIES,
  ACT1_SPAWN_BY_FLOOR,
  ACT1_ELITE_POOL,
} from "../data/enemies-act1.js";

let unitSeq = 0;

export function createPlayer(classId) {
  const stat = CLASS_STATS[classId];
  if (!stat) throw new Error("unknown class: " + classId);
  return {
    id: "player",
    name: stat.name,
    classId,
    side: "player",
    hp: stat.maxHp,
    maxHp: stat.maxHp,
    block: 0,
    def: stat.def,
    attack: stat.attack,
    speed: stat.speed,
    crit: stat.crit,
    evasion: 0,
    stunTurns: 0,
    weakened: false,
    empowered: false,
    marked: false,
    markStacks: 0,
    poison: 0,
    bleed: 0,
    burn: 0,
    slow: 0,
  };
}

export function createEnemyFromTemplate(template) {
  unitSeq += 1;
  return {
    id: template.id || "enemy_" + unitSeq,
    name: template.name || "적",
    classId: null,
    side: "enemy",
    hp: template.hp,
    maxHp: template.hp,
    block: 0,
    def: template.def ?? 0,
    attack: template.attack ?? template.atk ?? 6,
    speed: template.speed ?? 10,
    crit: 0,
    evasion: template.evasion ?? 0,
    stunTurns: 0,
    stunResist: template.stunResist ?? 0,
    stunImmune: template.stunImmune ?? false,
    weakened: false,
    empowered: false,
    marked: false,
    markStacks: 0,
    poison: 0,
    bleed: 0,
    burn: 0,
    slow: 0,
    tier: template.tier || "normal",
    pattern: template.pattern || "melee_basic",
    tags: template.tags || [],
    roundBuff: 0,
  };
}

export function createEnemyById(enemyId) {
  const t = ACT1_ENEMIES[enemyId];
  if (!t) throw new Error("unknown enemy: " + enemyId);
  return createEnemyFromTemplate({
    ...t,
    hp: t.hp,
    attack: t.attack,
  });
}

function poolForFloor(floor) {
  for (const band of ACT1_SPAWN_BY_FLOOR) {
    if (floor <= band.maxFloor) return band.pool;
  }
  return ACT1_SPAWN_BY_FLOOR[ACT1_SPAWN_BY_FLOOR.length - 1].pool;
}

function pickFromPool(pool) {
  const id = pool[Math.floor(Math.random() * pool.length)];
  return createEnemyById(id);
}

/** @param {number} floor 런 층 (0-based) */
export function pickEnemy(floor = 0) {
  return pickFromPool(poolForFloor(floor));
}

export function pickEliteEnemy() {
  const id = ACT1_ELITE_POOL[Math.floor(Math.random() * ACT1_ELITE_POOL.length)];
  return createEnemyById(id);
}

export function pickBossAct1() {
  return createEnemyById("e_boss_gate_keeper");
}
