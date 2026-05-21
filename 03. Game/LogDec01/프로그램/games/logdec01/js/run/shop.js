import { CARDS } from "../data/cards.js";

/** [[상점-시스템]] 6칸 */
export function generateShop(classId, act = 1) {
  const pool = Object.values(CARDS).filter(
    (c) =>
      !c.id.endsWith("_plus") &&
      (c.classTags.includes("common") || c.classTags.includes(classId))
  );

  const slots = [
    makeCardSlot(pool, act),
    makeCardSlot(pool, act),
    { type: "relic", itemId: "relic_stub", name: "유물 (준비 중)", price: 180 },
    { type: "consumable", itemId: "pot_hp", name: "회복 물약", price: 50 },
    { type: "service_remove", itemId: "remove", name: "덱 제거", price: 75 },
    { type: "service_upgrade", itemId: "upgrade", name: "카드 업그레이드", price: 100 },
  ];

  return { slots, rerollUsed: false, act };
}

function makeCardSlot(pool, act) {
  const card = pickWeighted(pool);
  const base = 50 + Math.floor(Math.random() * 70);
  const price = Math.floor(base * (1 + (act - 1) * 0.15));
  return {
    type: "card",
    itemId: card.id,
    name: card.name,
    price,
    rarity: card.rarity,
  };
}

function pickWeighted(pool) {
  const roll = Math.random() * 100;
  let tier = "common";
  if (roll > 90) tier = "rare";
  else if (roll > 60) tier = "uncommon";

  const filtered = pool.filter((c) => c.rarity === tier);
  const list = filtered.length ? filtered : pool;
  return list[Math.floor(Math.random() * list.length)];
}

export function rerollShop(visit, classId) {
  if (visit.rerollUsed) return null;
  visit.rerollUsed = true;
  const next = generateShop(classId, visit.act);
  visit.slots = next.slots;
  return visit;
}

export function canAfford(gold, price) {
  return gold >= price;
}
