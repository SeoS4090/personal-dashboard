import { expandDeck, STARTING_DECKS } from "../data/classes.js";
import { createPlayer } from "../combat/units.js";
import { ensureMinDeck, defaultSlotOrder } from "./deck.js";
import { generateShop } from "./shop.js";

const START_GOLD = 99;

export function createRun(classId) {
  const deck = ensureMinDeck(expandDeck(STARTING_DECKS[classId] || []));
  const player = createPlayer(classId);
  return {
    classId,
    act: 1,
    floor: 0,
    gold: START_GOLD,
    deck,
    slotOrder: defaultSlotOrder(deck),
    relics: [],
    player,
    shop: null,
    battlesWon: 0,
  };
}

export function syncPlayerHp(run) {
  run.player.hp = Math.min(run.player.hp, run.player.maxHp);
}

export function openShopAfterVictory(run) {
  run.shop = generateShop(run.classId, run.act);
  run.gold += 25;
}

export function closeShop(run) {
  run.shop = null;
  run.floor += 1;
}
