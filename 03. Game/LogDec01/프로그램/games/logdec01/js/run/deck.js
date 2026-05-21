import { SLOT_COUNT, buildSlotOrder } from "../combat/battle.js";

const MIN_DECK = 5;
const STRIKE_FILL = "c_strike";

/** [[덱-구성-규칙]] — 최소 5장, 슬롯 8 */
export function ensureMinDeck(deck) {
  const out = [...deck];
  while (out.length < MIN_DECK) {
    out.push(STRIKE_FILL);
  }
  return out;
}

export function defaultSlotOrder(deck) {
  return buildSlotOrder(ensureMinDeck(deck), SLOT_COUNT);
}

export function removeCardFromDeck(deck, cardId) {
  const idx = deck.indexOf(cardId);
  if (idx === -1) return deck;
  const next = [...deck];
  next.splice(idx, 1);
  return ensureMinDeck(next);
}

export function addCardToDeck(deck, cardId) {
  return [...deck, cardId];
}
