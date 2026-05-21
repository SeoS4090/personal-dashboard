/** 직업 스탯·시작 덱 — HP-방어-시스템 · 직업-시작-덱-표 */

export const CLASS_STATS = {
  warrior: { id: "warrior", name: "전사", maxHp: 80, def: 10, attack: 8, speed: 10, crit: 0.05 },
  mage: { id: "mage", name: "마법사", maxHp: 60, def: 0, attack: 10, speed: 10, crit: 0.05 },
  archer: { id: "archer", name: "궁수", maxHp: 70, def: 5, attack: 9, speed: 10, crit: 0.08 },
  rogue: { id: "rogue", name: "도적", maxHp: 65, def: 5, attack: 9, speed: 12, crit: 0.1 },
  priest: { id: "priest", name: "사제", maxHp: 70, def: 0, attack: 7, speed: 10, crit: 0.05 },
};

/** @type {Record<string, { cardId: string, count: number }[]>} */
export const STARTING_DECKS = {
  warrior: [
    { cardId: "w_strike", count: 4 },
    { cardId: "w_block", count: 3 },
    { cardId: "w_taunt", count: 1 },
    { cardId: "w_shield_slam", count: 2 },
  ],
  mage: [
    { cardId: "m_bolt", count: 4 },
    { cardId: "m_block", count: 2 },
    { cardId: "m_fireball", count: 2 },
    { cardId: "m_frost_nova", count: 2 },
  ],
  archer: [
    { cardId: "a_shot", count: 5 },
    { cardId: "a_block", count: 2 },
    { cardId: "a_mark", count: 2 },
    { cardId: "a_double", count: 1 },
  ],
  rogue: [
    { cardId: "r_stab", count: 4 },
    { cardId: "r_evade", count: 2 },
    { cardId: "r_poison", count: 2 },
    { cardId: "r_bleed_cut", count: 2 },
  ],
  priest: [
    { cardId: "p_smite", count: 4 },
    { cardId: "p_heal", count: 3 },
    { cardId: "p_shield", count: 2 },
    { cardId: "p_cleanse", count: 1 },
  ],
};

export function expandDeck(rows) {
  const deck = [];
  for (const row of rows) {
    for (let i = 0; i < row.count; i++) deck.push(row.cardId);
  }
  return deck;
}

export function listClasses() {
  return Object.values(CLASS_STATS);
}
