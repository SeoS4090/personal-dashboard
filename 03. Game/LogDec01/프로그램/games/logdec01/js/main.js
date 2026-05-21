import { listClasses } from "./data/classes.js";
import { getCard, getCardName } from "./data/cards.js";
import { Battle } from "./combat/battle.js";
import { pickEnemy, pickEliteEnemy, pickBossAct1 } from "./combat/units.js";
import {
  createRun,
  openShopAfterVictory,
  closeShop,
  syncPlayerHp,
} from "./run/state.js";
import { addCardToDeck, removeCardFromDeck } from "./run/deck.js";
import { rerollShop, canAfford } from "./run/shop.js";

let run = null;
let battle = null;
let battleSpeed = 1;
let autoTimer = null;

const $ = (sel) => document.querySelector(sel);

function showScreen(id) {
  document.querySelectorAll(".game-screen").forEach((el) => {
    el.hidden = el.id !== id;
  });
}

function renderHpBar(container, unit, label) {
  const pct = Math.max(0, Math.min(100, (unit.hp / unit.maxHp) * 100));
  const fillClass = unit.side === "enemy" ? "hp-bar__fill--enemy" : "hp-bar__fill";
  const blockHtml =
    unit.block > 0 ? '<div class="hp-bar__block">보호막 ' + unit.block + "</div>" : "";
  container.innerHTML =
    '<div class="hp-bar">' +
    '<div class="hp-bar__label"><span>' +
    label +
    "</span><span>" +
    unit.hp +
    " / " +
    unit.maxHp +
    "</span></div>" +
    '<div class="hp-bar__track"><div class="' +
    fillClass +
    '" style="width:' +
    pct +
    '%"></div></div>' +
    blockHtml +
    "</div>";
}

function renderClassSelect() {
  const grid = $("#class-grid");
  grid.innerHTML = "";
  for (const c of listClasses()) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "class-btn";
    btn.textContent = c.name;
    btn.title = "HP " + c.maxHp + " · 공격 " + c.attack;
    btn.addEventListener("click", () => startRun(c.id));
    grid.appendChild(btn);
  }
}

function startRun(classId) {
  run = createRun(classId);
  battle = null;
  renderHub();
  showScreen("screen-hub");
}

function renderHub() {
  if (!run) return;
  syncPlayerHp(run);
  $("#hub-class").textContent = run.player.name;
  $("#hub-floor").textContent = String(run.floor);
  $("#hub-gold").textContent = String(run.gold);
  $("#hub-hp").textContent = run.player.hp + " / " + run.player.maxHp;
  $("#hub-deck-count").textContent = String(run.deck.length);
  $("#hub-wins").textContent = String(run.battlesWon);
}

function renderDeckChips(container, deck, removable) {
  container.innerHTML = "";
  deck.forEach((id) => {
    const chip = document.createElement("span");
    chip.className = "deck-chip";
    chip.textContent = getCardName(id);
    chip.title = id;
    if (removable) {
      chip.style.cursor = "pointer";
      chip.addEventListener("click", () => {
        if (run.gold < 75) {
          alert("덱 제거에는 75G가 필요합니다.");
          return;
        }
        run.gold -= 75;
        run.deck = removeCardFromDeck(run.deck, id);
        run.slotOrder = run.deck.slice(0, 8);
        while (run.slotOrder.length < 8) run.slotOrder.push(null);
        renderDeckChips(container, run.deck, true);
        renderHub();
      });
    }
    container.appendChild(chip);
  });
}

function stopAuto() {
  if (autoTimer) {
    clearInterval(autoTimer);
    autoTimer = null;
  }
}

function startBattle(mode) {
  if (!run) return;
  stopAuto();
  let enemies;
  if (mode === "boss") enemies = [pickBossAct1()];
  else if (mode === "elite") enemies = [pickEliteEnemy()];
  else enemies = [pickEnemy(run.floor)];
  const player = {
    ...run.player,
    block: 0,
    evasion: 0,
    marked: false,
    markStacks: 0,
    stunTurns: 0,
  };
  battle = new Battle({
    player,
    enemies,
    slotOrder: [...run.slotOrder],
    onLog: appendLog,
  });
  $("#battle-log").innerHTML = "";
  appendLog("전투 시작 — " + enemies.map((e) => e.name).join(", "));
  renderBattle();
  showScreen("screen-battle");
}

function appendLog(msg) {
  const log = $("#battle-log");
  const p = document.createElement("p");
  p.textContent = msg;
  log.appendChild(p);
  log.scrollTop = log.scrollHeight;
}

function renderBattle() {
  if (!battle) return;

  renderHpBar($("#player-hp"), battle.player, battle.player.name);

  const enemiesEl = $("#enemies-hp");
  enemiesEl.innerHTML = "";
  battle.enemies.forEach((e) => {
    const wrap = document.createElement("div");
    renderHpBar(wrap, e, e.name);
    enemiesEl.appendChild(wrap);
  });

  const dotEnemyLabel = document.getElementById("dot-enemy-label");
  if (dotEnemyLabel && battle.enemies[0]) {
    const n = battle.enemies[0].name;
    dotEnemyLabel.textContent = n.length > 10 ? n.slice(0, 10) + "…" : n;
  }

  const grid = $("#slot-grid");
  grid.innerHTML = "";
  battle.slots.forEach((s) => {
    const el = document.createElement("div");
    el.className = "slot-card" + (s.cardId ? "" : " slot-card--empty");
    const name = s.cardId ? getCardName(s.cardId) : "—";
    el.innerHTML =
      "<div>#" +
      s.slot +
      "</div><div>" +
      name +
      "</div>" +
      (s.cooldown > 0 ? '<div class="slot-card__cd">' + s.cooldown + "R</div>" : "");
    grid.appendChild(el);
  });

  $("#battle-round").textContent = String(battle.round);
  $("#battle-tick").textContent = battle.tick + " / 10";
}

function finishBattleWin() {
  run.battlesWon += 1;
  run.player.hp = battle.player.hp;
  openShopAfterVictory(run);
  renderShop();
  showScreen("screen-shop");
}

function battleStep() {
  if (!battle || battle.finished) return;
  battle.step();
  renderBattle();
  if (battle.finished) {
    if (battle.winner === "player") finishBattleWin();
    else {
      showScreen("screen-over");
      $("#over-msg").textContent = "HP 0 — 런 종료";
    }
  }
}

function onBattleEnd() {
  stopAuto();
  if (!battle?.finished) return;
  run.player.hp = battle.player.hp;
  renderBattle();
  if (battle.winner === "player") finishBattleWin();
  else {
    showScreen("screen-over");
    $("#over-msg").textContent = "패배";
  }
}

function battleAuto() {
  if (!battle || battle.finished) return;
  stopAuto();
  const delay = Math.max(80, 400 / battleSpeed);
  autoTimer = setInterval(function () {
    if (!battle || battle.finished) {
      onBattleEnd();
      return;
    }
    battle.step();
    renderBattle();
    if (battle.finished) onBattleEnd();
  }, delay);
}

function setBattleSpeed(speed) {
  battleSpeed = speed;
  document.querySelectorAll("[data-speed]").forEach(function (btn) {
    btn.classList.toggle("btn-primary", parseInt(btn.dataset.speed, 10) === speed);
    btn.classList.toggle("btn-ghost", parseInt(btn.dataset.speed, 10) !== speed);
  });
  if (autoTimer) battleAuto();
}

function renderShop() {
  if (!run?.shop) return;
  $("#shop-gold").textContent = String(run.gold);
  const grid = $("#shop-grid");
  grid.innerHTML = "";
  run.shop.slots.forEach((slot, idx) => {
    if (slot.sold) return;
    const el = document.createElement("div");
    el.className = "shop-slot";
    el.innerHTML =
      "<strong>" + slot.name + "</strong><br><small>" + slot.type + "</small>";
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "btn btn-primary";
    btn.textContent = "구매 " + slot.price + "G";
    btn.disabled = !canAfford(run.gold, slot.price);
    btn.addEventListener("click", () => buySlot(idx));
    el.appendChild(btn);
    grid.appendChild(el);
  });
}

function buySlot(idx) {
  const slot = run.shop.slots[idx];
  if (!slot || slot.sold || !canAfford(run.gold, slot.price)) return;

  if (slot.type === "card") {
    run.deck = addCardToDeck(run.deck, slot.itemId);
    run.slotOrder = run.deck.slice(0, 8);
    while (run.slotOrder.length < 8) run.slotOrder.push(null);
    run.gold -= slot.price;
    slot.sold = true;
  } else if (slot.type === "service_remove") {
    alert("덱 편집에서 카드를 클릭해 제거하세요 (75G).");
    return;
  } else if (slot.type === "service_upgrade") {
    const candidates = run.deck.filter(function (id) {
      return !id.endsWith("_plus") && getCard(id + "_plus");
    });
    if (candidates.length === 0) {
      alert("업그레이드 가능한 카드가 덱에 없습니다.");
      return;
    }
    const baseId = candidates[0];
    const plusId = baseId + "_plus";
    const idx = run.deck.indexOf(baseId);
    run.deck[idx] = plusId;
    run.slotOrder = run.deck.slice(0, 8);
    while (run.slotOrder.length < 8) run.slotOrder.push(null);
    run.gold -= slot.price;
    slot.sold = true;
    alert(getCardName(baseId) + " → " + getCardName(plusId));
  } else {
    run.gold -= slot.price;
    slot.sold = true;
  }
  renderShop();
  renderHub();
}

function leaveShop() {
  closeShop(run);
  battle = null;
  renderHub();
  showScreen("screen-hub");
}

function init() {
  renderClassSelect();
  showScreen("screen-class");

  $("#btn-fight").addEventListener("click", () => startBattle("normal"));
  $("#btn-elite").addEventListener("click", () => startBattle("elite"));
  $("#btn-boss").addEventListener("click", () => startBattle("boss"));
  $("#btn-deck").addEventListener("click", () => {
    renderDeckChips($("#deck-edit-list"), run.deck, true);
    showScreen("screen-deck");
  });
  $("#btn-deck-back").addEventListener("click", () => {
    renderHub();
    showScreen("screen-hub");
  });
  $("#btn-tick").addEventListener("click", battleStep);
  $("#btn-auto").addEventListener("click", battleAuto);
  $("#btn-auto-stop").addEventListener("click", stopAuto);
  document.querySelectorAll("[data-speed]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      setBattleSpeed(parseInt(btn.dataset.speed, 10));
    });
  });
  setBattleSpeed(1);
  $("#btn-shop-leave").addEventListener("click", leaveShop);
  $("#btn-reroll").addEventListener("click", () => {
    if (run.gold < 50 || run.shop.rerollUsed) return;
    run.gold -= 50;
    rerollShop(run.shop, run.classId);
    renderShop();
  });
  $("#btn-restart").addEventListener("click", () => {
    run = null;
    battle = null;
    renderClassSelect();
    showScreen("screen-class");
  });
}

document.addEventListener("DOMContentLoaded", init);
