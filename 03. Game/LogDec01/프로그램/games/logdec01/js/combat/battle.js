import { getCard, getCardName } from "../data/cards.js";
import {
  calcDirectDamage,
  rollCrit,
  applyDamage,
  getStatusMul,
  effectiveDef,
} from "./damage.js";

export const SLOT_COUNT = 8;
export const TICKS_PER_ROUND = 10;

/**
 * [[자동-전투-시스템]] — 슬롯 순환·틱 루프
 */
export class Battle {
  constructor({ player, enemies, slotOrder, onLog }) {
    this.player = player;
    this.enemies = enemies.filter((e) => e.hp > 0);
    this.slots = this.#initSlots(slotOrder);
    this.round = 1;
    this.tick = 0;
    this.log = [];
    this.finished = false;
    this.winner = null;
    this.onLog = onLog || ((msg) => this.log.push(msg));
    this.#onRoundStart();
  }

  #initSlots(slotOrder) {
    const slots = [];
    for (let i = 0; i < SLOT_COUNT; i++) {
      slots.push({
        slot: i + 1,
        cardId: slotOrder[i] || null,
        cooldown: 0,
      });
    }
    return slots;
  }

  aliveEnemies() {
    return this.enemies.filter((e) => e.hp > 0);
  }

  isStunned(unit) {
    return (unit.stunTurns || 0) > 0;
  }

  step() {
    if (this.finished) return { done: true };

    this.tick += 1;

    if (this.isStunned(this.player)) {
      this.#say("플레이어 기절 — 카드 스킵");
    } else {
      const ready = this.slots
        .filter((s) => s.cardId && s.cooldown <= 0)
        .sort((a, b) => a.slot - b.slot);
      if (ready.length > 0) {
        this.#fireCard(this.player, ready[0]);
      }
    }

    for (const enemy of this.aliveEnemies()) {
      if (this.isStunned(enemy)) continue;
      const slowMul = enemy.slow > 0 ? 0.7 : 1;
      const actions = Math.max(1, Math.floor((enemy.speed / 10) * slowMul));
      for (let a = 0; a < actions; a++) {
        this.#enemyAttack(enemy);
        if (this.player.hp <= 0) break;
      }
    }

    if (this.tick >= TICKS_PER_ROUND) {
      this.#endRound();
      this.tick = 0;
      this.round += 1;
      this.#onRoundStart();
    }

    this.#checkEnd();
    return { done: this.finished, winner: this.winner };
  }

  runToEnd(maxTicks = 800) {
    let n = 0;
    while (!this.finished && n < maxTicks) {
      this.step();
      n += 1;
    }
    return this.winner;
  }

  #onRoundStart() {
    for (const enemy of this.aliveEnemies()) {
      if (enemy.pattern === "elite_block") {
        enemy.block += 10;
        this.#say(enemy.name + " 보호막 +10 (엘리트)");
      }
      if (enemy.pattern === "boss_shield_cycle") {
        if (this.round % 2 === 1) {
          enemy.block += 15;
          this.#say(enemy.name + " 보호막 +15 (보스 패턴)");
        } else {
          enemy.roundBuff = 3;
          this.#say(enemy.name + " 공격력 +3 (보스 패턴)");
        }
      }
    }
  }

  #endRound() {
    this.player.block = 0;
    this.enemies.forEach((e) => {
      e.block = 0;
      e.roundBuff = 0;
    });

    for (const u of [this.player, ...this.enemies]) {
      if (u.stunTurns > 0) u.stunTurns -= 1;
      u.weakened = false;
      u.empowered = false;
    }

    for (const s of this.slots) {
      if (s.cooldown > 0) s.cooldown -= 1;
    }
    this.#say("— 라운드 " + this.round + " 종료 —");
  }

  #checkEnd() {
    if (this.player.hp <= 0 && this.aliveEnemies().length > 0) {
      this.finished = true;
      this.winner = "enemy";
      this.#say("패배: HP 0");
      return;
    }
    if (this.aliveEnemies().length === 0) {
      this.finished = true;
      this.winner = "player";
      this.#say("승리!");
    }
  }

  #say(msg) {
    this.onLog(msg);
  }

  #fireCard(actor, slot) {
    const card = getCard(slot.cardId);
    if (!card) return;

    const targets = this.#resolveTargets(actor, card);
    if (card.target === "self") {
      this.#applyCardEffects(actor, actor, card);
    } else {
      for (const t of targets) {
        this.#applyCardEffects(actor, t, card);
      }
    }

    slot.cooldown = card.cost;
    this.#say("슬롯" + slot.slot + " " + card.name + " (쿨 " + card.cost + "R)");
  }

  #cardPierce(card) {
    const fx = (card.effects || []).find((e) => e.type === "pierce");
    return fx ? fx.value : 0;
  }

  #hasShieldSlam(card) {
    return (card.effects || []).some((e) => e.type === "shield_slam");
  }

  #applyCardEffects(source, target, card) {
    let power = card.power || 0;
    if (this.#hasShieldSlam(card) && source.side === "player") {
      power += Math.floor(source.block * 0.5);
    }

    const pierce = this.#cardPierce(card);

    if (power > 0 && card.target !== "self") {
      const isCrit = !this.isStunned(source) && rollCrit(source.crit);
      const amount = calcDirectDamage({
        attack: source.attack + (source.roundBuff || 0),
        power,
        scale: card.scale ?? 1,
        def: effectiveDef(target.def, pierce),
        isCrit,
        statusMul: getStatusMul(source, target),
      });
      const res = applyDamage(target, amount, { sourceClassId: source.classId });
      this.#say(
        source.name +
          " → " +
          target.name +
          " " +
          amount +
          " 피해" +
          (isCrit ? " CRIT" : "") +
          (res.evaded ? " (회피)" : "")
      );
    }

    for (const fx of card.effects || []) {
      if (fx.type === "block" && target.side === "player") {
        target.block += fx.value;
        this.#say(target.name + " 보호막 +" + fx.value);
      }
      if (fx.type === "heal" && target.side === "player") {
        const before = target.hp;
        target.hp = Math.min(target.maxHp, target.hp + fx.value);
        this.#say(target.name + " 회복 +" + (target.hp - before));
      }
      if (fx.type === "evasion" && target.side === "player") {
        target.evasion = Math.min(0.5, target.evasion + fx.value / 100);
      }
      if (fx.type === "mark") {
        target.marked = true;
        target.markStacks = (target.markStacks || 0) + fx.value;
      }
      if (fx.type === "poison") target.poison += fx.value;
      if (fx.type === "bleed") target.bleed += fx.value;
      if (fx.type === "burn") target.burn += fx.value;
      if (fx.type === "slow") target.slow = (target.slow || 0) + fx.value;
      if (fx.type === "weak" && target.side === "enemy") {
        target.weakened = true;
        this.#say(target.name + " 약화");
      }
      if (fx.type === "empower" && source.side === "player") {
        source.empowered = true;
        this.#say(source.name + " 강화");
      }
      if (fx.type === "stun") this.#tryStun(target, fx.value);
      if (fx.type === "cleanse" && target.side === "player") {
        target.poison = 0;
        target.bleed = 0;
        target.stunTurns = 0;
        target.weakened = false;
        this.#say(target.name + " 정화");
      }
    }
  }

  #tryStun(target, duration) {
    if (target.stunImmune) {
      this.#say(target.name + " 기절 면역");
      return;
    }
    if (Math.random() < (target.stunResist || 0)) {
      this.#say(target.name + " 기절 저항");
      return;
    }
    target.stunTurns = Math.min(3, Math.max(target.stunTurns || 0, duration));
    this.#say(target.name + " 기절 (" + target.stunTurns + "R)");
  }

  #resolveTargets(actor, card) {
    const enemies = this.aliveEnemies();
    if (enemies.length === 0) return [];

    switch (card.target) {
      case "all_enemies":
        return enemies;
      case "lowest_hp":
        return [
          enemies.reduce((a, b) => (a.hp / a.maxHp <= b.hp / b.maxHp ? a : b)),
        ];
      case "random":
        return [enemies[Math.floor(Math.random() * enemies.length)]];
      case "nearest":
      default:
        return [enemies[0]];
    }
  }

  #enemyAttack(enemy) {
    const isCrit = rollCrit(0.03);
    const atk = enemy.attack + (enemy.roundBuff || 0);
    const amount = calcDirectDamage({
      attack: atk,
      power: 0,
      scale: 1,
      def: this.player.def,
      isCrit,
      statusMul: 1,
    });
    const res = applyDamage(this.player, amount);
    this.#say(
      enemy.name +
        " → 플레이어 " +
        amount +
        " 피해" +
        (isCrit ? " CRIT" : "") +
        (res.evaded ? " (회피)" : "")
    );
  }
}

export function buildSlotOrder(deck, count = SLOT_COUNT) {
  const order = deck.slice(0, count);
  while (order.length < count) order.push(null);
  return order;
}
