/**
 * [[대미지 계산 공식]] · [[HP-방어-시스템]] 적용
 */

export function calcDirectDamage({
  attack = 0,
  power = 0,
  scale = 1,
  def = 0,
  isCrit = false,
  statusMul = 1,
}) {
  const raw = (attack + power) * scale;
  const critMul = isCrit ? 1.5 : 1.0;
  const afterDef = raw * critMul * (1 - def / 100);
  return Math.max(1, Math.floor(afterDef * statusMul));
}

export function rollCrit(chance = 0.05) {
  return Math.random() < Math.min(chance, 0.5);
}

/**
 * 회피 → 보호막 → HP. warrior 패시브: 받는 피해 10%를 보호막으로.
 * @returns {{ dealt: number, evaded: boolean, toHp: number }}
 */
export function applyDamage(target, amount, options = {}) {
  const { ignoreBlock = false, sourceClassId = null } = options;

  if (target.evasion > 0 && Math.random() < target.evasion) {
    return { dealt: 0, evaded: true, toHp: 0 };
  }

  let remaining = amount;

  if (target.classId === "warrior" && remaining > 0) {
    const toBlock = Math.floor(remaining * 0.1);
    target.block += toBlock;
    remaining -= toBlock;
  }

  if (!ignoreBlock && target.block > 0 && remaining > 0) {
    const absorbed = Math.min(target.block, remaining);
    target.block -= absorbed;
    remaining -= absorbed;
  }

  const toHp = Math.max(0, remaining);
  if (toHp > 0) {
    target.hp = Math.max(0, target.hp - toHp);
  }

  return { dealt: amount, evaded: false, toHp };
}

export function getStatusMul(source, target) {
  let mul = 1;
  if (source.weakened) mul *= 0.75;
  if (source.empowered) mul *= 1.25;
  if (target.marked || target.markStacks > 0) {
    mul *= 1 + 0.2 * Math.max(1, target.markStacks || 1);
  }
  return mul;
}

/** pierce: 방어력 % 무시 (0~100) */
export function effectiveDef(def, piercePercent = 0) {
  return Math.max(0, def * (1 - piercePercent / 100));
}
