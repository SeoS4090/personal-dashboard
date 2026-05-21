/** 자동 생성 — node scripts/gen-cards.mjs · 원본 [[카드-목록]] */
export function parseEffects(str) {
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

export const CARDS = {
  "w_strike": {
    "id": "w_strike",
    "name": "강타",
    "classTags": [
      "warrior"
    ],
    "cost": 1,
    "power": 6,
    "scale": 1,
    "target": "nearest",
    "tags": [
      "physical"
    ],
    "rarity": "common",
    "effects": []
  },
  "w_block": {
    "id": "w_block",
    "name": "방어 태세",
    "classTags": [
      "warrior"
    ],
    "cost": 1,
    "power": 0,
    "scale": 1,
    "target": "self",
    "tags": [],
    "rarity": "common",
    "effects": [
      {
        "type": "block",
        "value": 8
      }
    ]
  },
  "w_taunt": {
    "id": "w_taunt",
    "name": "도발",
    "classTags": [
      "warrior"
    ],
    "cost": 2,
    "power": 0,
    "scale": 1,
    "target": "self",
    "tags": [],
    "rarity": "common",
    "effects": [
      {
        "type": "taunt",
        "value": 2
      }
    ]
  },
  "w_shield_slam": {
    "id": "w_shield_slam",
    "name": "방패 강타",
    "classTags": [
      "warrior"
    ],
    "cost": 2,
    "power": 4,
    "scale": 1,
    "target": "nearest",
    "tags": [
      "physical"
    ],
    "rarity": "common",
    "effects": [
      {
        "type": "shield_slam"
      }
    ]
  },
  "w_heavy_strike": {
    "id": "w_heavy_strike",
    "name": "중강타",
    "classTags": [
      "warrior"
    ],
    "cost": 2,
    "power": 10,
    "scale": 1,
    "target": "nearest",
    "tags": [
      "physical"
    ],
    "rarity": "common",
    "effects": []
  },
  "w_iron_wall": {
    "id": "w_iron_wall",
    "name": "철벽",
    "classTags": [
      "warrior"
    ],
    "cost": 2,
    "power": 0,
    "scale": 1,
    "target": "self",
    "tags": [],
    "rarity": "uncommon",
    "effects": [
      {
        "type": "block",
        "value": 14
      }
    ]
  },
  "w_rally": {
    "id": "w_rally",
    "name": "전투 함성",
    "classTags": [
      "warrior"
    ],
    "cost": 2,
    "power": 0,
    "scale": 1,
    "target": "self",
    "tags": [],
    "rarity": "uncommon",
    "effects": [
      {
        "type": "empower",
        "value": 1
      }
    ]
  },
  "w_cleave": {
    "id": "w_cleave",
    "name": "가로베기",
    "classTags": [
      "warrior"
    ],
    "cost": 3,
    "power": 5,
    "scale": 1,
    "target": "all_enemies",
    "tags": [
      "physical"
    ],
    "rarity": "uncommon",
    "effects": []
  },
  "w_fortify": {
    "id": "w_fortify",
    "name": "요새화",
    "classTags": [
      "warrior"
    ],
    "cost": 3,
    "power": 0,
    "scale": 1,
    "target": "self",
    "tags": [],
    "rarity": "uncommon",
    "effects": [
      {
        "type": "block",
        "value": 10
      },
      {
        "type": "empower",
        "value": 1
      }
    ]
  },
  "w_guard_break": {
    "id": "w_guard_break",
    "name": "방패 격파",
    "classTags": [
      "warrior"
    ],
    "cost": 2,
    "power": 7,
    "scale": 1,
    "target": "nearest",
    "tags": [
      "physical"
    ],
    "rarity": "uncommon",
    "effects": [
      {
        "type": "weak",
        "value": 1
      }
    ]
  },
  "w_battle_cry": {
    "id": "w_battle_cry",
    "name": "함성",
    "classTags": [
      "warrior"
    ],
    "cost": 1,
    "power": 0,
    "scale": 1,
    "target": "self",
    "tags": [],
    "rarity": "common",
    "effects": [
      {
        "type": "empower",
        "value": 1
      }
    ]
  },
  "w_shield_wall": {
    "id": "w_shield_wall",
    "name": "방벽",
    "classTags": [
      "warrior"
    ],
    "cost": 3,
    "power": 0,
    "scale": 1,
    "target": "self",
    "tags": [],
    "rarity": "rare",
    "effects": [
      {
        "type": "block",
        "value": 20
      }
    ]
  },
  "w_revenge": {
    "id": "w_revenge",
    "name": "보보",
    "classTags": [
      "warrior"
    ],
    "cost": 2,
    "power": 8,
    "scale": 1,
    "target": "nearest",
    "tags": [
      "physical"
    ],
    "rarity": "uncommon",
    "effects": [
      {
        "type": "bleed",
        "value": 2
      }
    ]
  },
  "w_last_stand": {
    "id": "w_last_stand",
    "name": "최후의 저항",
    "classTags": [
      "warrior"
    ],
    "cost": 4,
    "power": 0,
    "scale": 1,
    "target": "self",
    "tags": [],
    "rarity": "rare",
    "effects": [
      {
        "type": "block",
        "value": 25
      },
      {
        "type": "empower",
        "value": 2
      }
    ]
  },
  "w_champion_strike": {
    "id": "w_champion_strike",
    "name": "투사의 일격",
    "classTags": [
      "warrior"
    ],
    "cost": 3,
    "power": 14,
    "scale": 1,
    "target": "nearest",
    "tags": [
      "physical"
    ],
    "rarity": "rare",
    "effects": []
  },
  "m_bolt": {
    "id": "m_bolt",
    "name": "마력 화살",
    "classTags": [
      "mage"
    ],
    "cost": 1,
    "power": 5,
    "scale": 1,
    "target": "lowest_hp",
    "tags": [
      "magic"
    ],
    "rarity": "common",
    "effects": []
  },
  "m_block": {
    "id": "m_block",
    "name": "비전 장벽",
    "classTags": [
      "mage"
    ],
    "cost": 1,
    "power": 0,
    "scale": 1,
    "target": "self",
    "tags": [
      "magic"
    ],
    "rarity": "common",
    "effects": [
      {
        "type": "block",
        "value": 6
      }
    ]
  },
  "m_fireball": {
    "id": "m_fireball",
    "name": "파이어볼",
    "classTags": [
      "mage"
    ],
    "cost": 2,
    "power": 6,
    "scale": 1,
    "target": "all_enemies",
    "tags": [
      "magic"
    ],
    "rarity": "common",
    "effects": [
      {
        "type": "burn",
        "value": 2
      }
    ]
  },
  "m_frost_nova": {
    "id": "m_frost_nova",
    "name": "서리 폭발",
    "classTags": [
      "mage"
    ],
    "cost": 2,
    "power": 4,
    "scale": 1,
    "target": "all_enemies",
    "tags": [
      "magic"
    ],
    "rarity": "common",
    "effects": [
      {
        "type": "slow",
        "value": 1
      }
    ]
  },
  "m_ember": {
    "id": "m_ember",
    "name": "불씨",
    "classTags": [
      "mage"
    ],
    "cost": 1,
    "power": 3,
    "scale": 1,
    "target": "lowest_hp",
    "tags": [
      "magic"
    ],
    "rarity": "common",
    "effects": [
      {
        "type": "burn",
        "value": 3
      }
    ]
  },
  "m_blizzard": {
    "id": "m_blizzard",
    "name": "눈보라",
    "classTags": [
      "mage"
    ],
    "cost": 3,
    "power": 3,
    "scale": 1,
    "target": "all_enemies",
    "tags": [
      "magic"
    ],
    "rarity": "uncommon",
    "effects": [
      {
        "type": "slow",
        "value": 1
      },
      {
        "type": "burn",
        "value": 1
      }
    ]
  },
  "m_arcane_missiles": {
    "id": "m_arcane_missiles",
    "name": "비전 미사일",
    "classTags": [
      "mage"
    ],
    "cost": 2,
    "power": 4,
    "scale": 1,
    "target": "random",
    "tags": [
      "magic"
    ],
    "rarity": "uncommon",
    "effects": []
  },
  "m_mana_shield": {
    "id": "m_mana_shield",
    "name": "마나 보호막",
    "classTags": [
      "mage"
    ],
    "cost": 2,
    "power": 0,
    "scale": 1,
    "target": "self",
    "tags": [
      "magic"
    ],
    "rarity": "uncommon",
    "effects": [
      {
        "type": "block",
        "value": 12
      }
    ]
  },
  "m_scorch": {
    "id": "m_scorch",
    "name": "작열",
    "classTags": [
      "mage"
    ],
    "cost": 2,
    "power": 5,
    "scale": 1,
    "target": "lowest_hp",
    "tags": [
      "magic"
    ],
    "rarity": "uncommon",
    "effects": [
      {
        "type": "burn",
        "value": 4
      }
    ]
  },
  "m_ice_lance": {
    "id": "m_ice_lance",
    "name": "얼음 창",
    "classTags": [
      "mage"
    ],
    "cost": 2,
    "power": 9,
    "scale": 1,
    "target": "lowest_hp",
    "tags": [
      "magic"
    ],
    "rarity": "uncommon",
    "effects": [
      {
        "type": "slow",
        "value": 1
      }
    ]
  },
  "m_meteor": {
    "id": "m_meteor",
    "name": "메테오",
    "classTags": [
      "mage"
    ],
    "cost": 4,
    "power": 12,
    "scale": 1,
    "target": "all_enemies",
    "tags": [
      "magic"
    ],
    "rarity": "rare",
    "effects": [
      {
        "type": "burn",
        "value": 3
      }
    ]
  },
  "m_flame_wave": {
    "id": "m_flame_wave",
    "name": "화염파",
    "classTags": [
      "mage"
    ],
    "cost": 3,
    "power": 7,
    "scale": 1,
    "target": "all_enemies",
    "tags": [
      "magic"
    ],
    "rarity": "uncommon",
    "effects": [
      {
        "type": "burn",
        "value": 2
      }
    ]
  },
  "m_frost_armor": {
    "id": "m_frost_armor",
    "name": "서리 갑옷",
    "classTags": [
      "mage"
    ],
    "cost": 2,
    "power": 0,
    "scale": 1,
    "target": "self",
    "tags": [
      "magic"
    ],
    "rarity": "common",
    "effects": [
      {
        "type": "block",
        "value": 8
      }
    ]
  },
  "m_overcharge": {
    "id": "m_overcharge",
    "name": "과충전",
    "classTags": [
      "mage"
    ],
    "cost": 1,
    "power": 0,
    "scale": 1,
    "target": "self",
    "tags": [],
    "rarity": "uncommon",
    "effects": [
      {
        "type": "empower",
        "value": 2
      }
    ]
  },
  "m_elemental_burst": {
    "id": "m_elemental_burst",
    "name": "원소 폭발",
    "classTags": [
      "mage"
    ],
    "cost": 3,
    "power": 8,
    "scale": 1,
    "target": "all_enemies",
    "tags": [
      "magic"
    ],
    "rarity": "rare",
    "effects": [
      {
        "type": "burn",
        "value": 2
      },
      {
        "type": "slow",
        "value": 1
      }
    ]
  },
  "a_shot": {
    "id": "a_shot",
    "name": "사격",
    "classTags": [
      "archer"
    ],
    "cost": 1,
    "power": 5,
    "scale": 1,
    "target": "lowest_hp",
    "tags": [
      "physical"
    ],
    "rarity": "common",
    "effects": []
  },
  "a_block": {
    "id": "a_block",
    "name": "회피 자세",
    "classTags": [
      "archer"
    ],
    "cost": 1,
    "power": 0,
    "scale": 1,
    "target": "self",
    "tags": [],
    "rarity": "common",
    "effects": [
      {
        "type": "block",
        "value": 5
      },
      {
        "type": "evade",
        "value": 10
      }
    ]
  },
  "a_mark": {
    "id": "a_mark",
    "name": "표적 표시",
    "classTags": [
      "archer"
    ],
    "cost": 1,
    "power": 2,
    "scale": 1,
    "target": "lowest_hp",
    "tags": [],
    "rarity": "common",
    "effects": [
      {
        "type": "mark",
        "value": 1
      }
    ]
  },
  "a_double": {
    "id": "a_double",
    "name": "연속 사격",
    "classTags": [
      "archer"
    ],
    "cost": 2,
    "power": 4,
    "scale": 1,
    "target": "lowest_hp",
    "tags": [
      "physical"
    ],
    "rarity": "common",
    "effects": []
  },
  "a_snipe": {
    "id": "a_snipe",
    "name": "저격",
    "classTags": [
      "archer"
    ],
    "cost": 3,
    "power": 12,
    "scale": 1,
    "target": "lowest_hp",
    "tags": [
      "physical"
    ],
    "rarity": "uncommon",
    "effects": []
  },
  "a_volley": {
    "id": "a_volley",
    "name": "곡사",
    "classTags": [
      "archer"
    ],
    "cost": 2,
    "power": 4,
    "scale": 1,
    "target": "all_enemies",
    "tags": [
      "physical"
    ],
    "rarity": "uncommon",
    "effects": []
  },
  "a_quickshot": {
    "id": "a_quickshot",
    "name": "속사",
    "classTags": [
      "archer"
    ],
    "cost": 1,
    "power": 3,
    "scale": 1,
    "target": "lowest_hp",
    "tags": [
      "physical"
    ],
    "rarity": "common",
    "effects": []
  },
  "a_barricade": {
    "id": "a_barricade",
    "name": "바리케이드",
    "classTags": [
      "archer"
    ],
    "cost": 2,
    "power": 0,
    "scale": 1,
    "target": "self",
    "tags": [],
    "rarity": "uncommon",
    "effects": [
      {
        "type": "block",
        "value": 10
      }
    ]
  },
  "a_pierce": {
    "id": "a_pierce",
    "name": "관통탄",
    "classTags": [
      "archer"
    ],
    "cost": 2,
    "power": 7,
    "scale": 1,
    "target": "lowest_hp",
    "tags": [
      "physical"
    ],
    "rarity": "uncommon",
    "effects": [
      {
        "type": "pierce",
        "value": 50
      }
    ]
  },
  "a_rain": {
    "id": "a_rain",
    "name": "화살비",
    "classTags": [
      "archer"
    ],
    "cost": 3,
    "power": 3,
    "scale": 1,
    "target": "all_enemies",
    "tags": [
      "physical"
    ],
    "rarity": "uncommon",
    "effects": []
  },
  "a_focus": {
    "id": "a_focus",
    "name": "집중",
    "classTags": [
      "archer"
    ],
    "cost": 1,
    "power": 0,
    "scale": 1,
    "target": "self",
    "tags": [],
    "rarity": "common",
    "effects": [
      {
        "type": "empower",
        "value": 1
      }
    ]
  },
  "a_trap": {
    "id": "a_trap",
    "name": "덫",
    "classTags": [
      "archer"
    ],
    "cost": 2,
    "power": 3,
    "scale": 1,
    "target": "random",
    "tags": [],
    "rarity": "uncommon",
    "effects": [
      {
        "type": "bleed",
        "value": 3
      }
    ]
  },
  "a_headshot": {
    "id": "a_headshot",
    "name": "헤드샷",
    "classTags": [
      "archer"
    ],
    "cost": 3,
    "power": 10,
    "scale": 1,
    "target": "lowest_hp",
    "tags": [
      "physical"
    ],
    "rarity": "rare",
    "effects": [
      {
        "type": "stun",
        "value": 1
      }
    ]
  },
  "a_evasion": {
    "id": "a_evasion",
    "name": "회피술",
    "classTags": [
      "archer"
    ],
    "cost": 2,
    "power": 0,
    "scale": 1,
    "target": "self",
    "tags": [],
    "rarity": "uncommon",
    "effects": [
      {
        "type": "evade",
        "value": 20
      }
    ]
  },
  "a_death_mark": {
    "id": "a_death_mark",
    "name": "죽음의 표식",
    "classTags": [
      "archer"
    ],
    "cost": 3,
    "power": 6,
    "scale": 1,
    "target": "lowest_hp",
    "tags": [],
    "rarity": "rare",
    "effects": [
      {
        "type": "mark",
        "value": 2
      }
    ]
  },
  "r_stab": {
    "id": "r_stab",
    "name": "찌르기",
    "classTags": [
      "rogue"
    ],
    "cost": 1,
    "power": 5,
    "scale": 1,
    "target": "nearest",
    "tags": [
      "physical"
    ],
    "rarity": "common",
    "effects": []
  },
  "r_evade": {
    "id": "r_evade",
    "name": "회피",
    "classTags": [
      "rogue"
    ],
    "cost": 1,
    "power": 0,
    "scale": 1,
    "target": "self",
    "tags": [],
    "rarity": "common",
    "effects": [
      {
        "type": "evade",
        "value": 20
      }
    ]
  },
  "r_poison": {
    "id": "r_poison",
    "name": "독 바르기",
    "classTags": [
      "rogue"
    ],
    "cost": 2,
    "power": 2,
    "scale": 1,
    "target": "nearest",
    "tags": [],
    "rarity": "common",
    "effects": [
      {
        "type": "poison",
        "value": 3
      }
    ]
  },
  "r_bleed_cut": {
    "id": "r_bleed_cut",
    "name": "베기",
    "classTags": [
      "rogue"
    ],
    "cost": 1,
    "power": 4,
    "scale": 1,
    "target": "nearest",
    "tags": [
      "physical"
    ],
    "rarity": "common",
    "effects": [
      {
        "type": "bleed",
        "value": 2
      }
    ]
  },
  "r_backstab": {
    "id": "r_backstab",
    "name": "백스탭",
    "classTags": [
      "rogue"
    ],
    "cost": 2,
    "power": 9,
    "scale": 1,
    "target": "nearest",
    "tags": [
      "physical"
    ],
    "rarity": "uncommon",
    "effects": []
  },
  "r_smoke": {
    "id": "r_smoke",
    "name": "연막",
    "classTags": [
      "rogue"
    ],
    "cost": 2,
    "power": 0,
    "scale": 1,
    "target": "self",
    "tags": [],
    "rarity": "uncommon",
    "effects": [
      {
        "type": "block",
        "value": 6
      },
      {
        "type": "evade",
        "value": 15
      }
    ]
  },
  "r_envenom": {
    "id": "r_envenom",
    "name": "강독",
    "classTags": [
      "rogue"
    ],
    "cost": 2,
    "power": 3,
    "scale": 1,
    "target": "nearest",
    "tags": [],
    "rarity": "uncommon",
    "effects": [
      {
        "type": "poison",
        "value": 5
      }
    ]
  },
  "r_slice": {
    "id": "r_slice",
    "name": "연속 베기",
    "classTags": [
      "rogue"
    ],
    "cost": 2,
    "power": 3,
    "scale": 1,
    "target": "nearest",
    "tags": [
      "physical"
    ],
    "rarity": "uncommon",
    "effects": [
      {
        "type": "bleed",
        "value": 3
      }
    ]
  },
  "r_fan_knives": {
    "id": "r_fan_knives",
    "name": "나이프 부채",
    "classTags": [
      "rogue"
    ],
    "cost": 2,
    "power": 3,
    "scale": 1,
    "target": "all_enemies",
    "tags": [
      "physical"
    ],
    "rarity": "uncommon",
    "effects": [
      {
        "type": "bleed",
        "value": 1
      }
    ]
  },
  "r_hemorrhage": {
    "id": "r_hemorrhage",
    "name": "과다 출혈",
    "classTags": [
      "rogue"
    ],
    "cost": 3,
    "power": 5,
    "scale": 1,
    "target": "nearest",
    "tags": [],
    "rarity": "uncommon",
    "effects": [
      {
        "type": "bleed",
        "value": 5
      }
    ]
  },
  "r_shadowstep": {
    "id": "r_shadowstep",
    "name": "그림자 밟기",
    "classTags": [
      "rogue"
    ],
    "cost": 1,
    "power": 0,
    "scale": 1,
    "target": "self",
    "tags": [],
    "rarity": "common",
    "effects": [
      {
        "type": "evade",
        "value": 25
      }
    ]
  },
  "r_antidote": {
    "id": "r_antidote",
    "name": "해독",
    "classTags": [
      "rogue"
    ],
    "cost": 1,
    "power": 0,
    "scale": 1,
    "target": "self",
    "tags": [],
    "rarity": "common",
    "effects": [
      {
        "type": "cleanse",
        "value": 1
      }
    ]
  },
  "r_assassinate": {
    "id": "r_assassinate",
    "name": "암살",
    "classTags": [
      "rogue"
    ],
    "cost": 3,
    "power": 15,
    "scale": 1,
    "target": "lowest_hp",
    "tags": [
      "physical"
    ],
    "rarity": "rare",
    "effects": []
  },
  "r_toxic_cloud": {
    "id": "r_toxic_cloud",
    "name": "독구름",
    "classTags": [
      "rogue"
    ],
    "cost": 3,
    "power": 2,
    "scale": 1,
    "target": "all_enemies",
    "tags": [],
    "rarity": "rare",
    "effects": [
      {
        "type": "poison",
        "value": 2
      }
    ]
  },
  "r_execution": {
    "id": "r_execution",
    "name": "처형",
    "classTags": [
      "rogue"
    ],
    "cost": 4,
    "power": 8,
    "scale": 1,
    "target": "nearest",
    "tags": [
      "physical"
    ],
    "rarity": "rare",
    "effects": [
      {
        "type": "bleed",
        "value": 2
      }
    ]
  },
  "p_smite": {
    "id": "p_smite",
    "name": "성스러운 일격",
    "classTags": [
      "priest"
    ],
    "cost": 1,
    "power": 5,
    "scale": 1,
    "target": "nearest",
    "tags": [
      "holy",
      "magic"
    ],
    "rarity": "common",
    "effects": []
  },
  "p_heal": {
    "id": "p_heal",
    "name": "치유",
    "classTags": [
      "priest"
    ],
    "cost": 1,
    "power": 0,
    "scale": 1,
    "target": "self",
    "tags": [
      "holy"
    ],
    "rarity": "common",
    "effects": [
      {
        "type": "heal",
        "value": 12
      }
    ]
  },
  "p_shield": {
    "id": "p_shield",
    "name": "신성한 보호",
    "classTags": [
      "priest"
    ],
    "cost": 1,
    "power": 0,
    "scale": 1,
    "target": "self",
    "tags": [
      "holy"
    ],
    "rarity": "common",
    "effects": [
      {
        "type": "block",
        "value": 7
      }
    ]
  },
  "p_cleanse": {
    "id": "p_cleanse",
    "name": "정화",
    "classTags": [
      "priest"
    ],
    "cost": 2,
    "power": 0,
    "scale": 1,
    "target": "self",
    "tags": [
      "holy"
    ],
    "rarity": "common",
    "effects": [
      {
        "type": "cleanse",
        "value": 1
      }
    ]
  },
  "p_bless": {
    "id": "p_bless",
    "name": "축복",
    "classTags": [
      "priest"
    ],
    "cost": 2,
    "power": 0,
    "scale": 1,
    "target": "self",
    "tags": [
      "holy"
    ],
    "rarity": "uncommon",
    "effects": [
      {
        "type": "empower",
        "value": 1
      },
      {
        "type": "heal",
        "value": 5
      }
    ]
  },
  "p_holy_light": {
    "id": "p_holy_light",
    "name": "성광",
    "classTags": [
      "priest"
    ],
    "cost": 2,
    "power": 6,
    "scale": 1,
    "target": "nearest",
    "tags": [
      "holy",
      "magic"
    ],
    "rarity": "common",
    "effects": []
  },
  "p_prayer": {
    "id": "p_prayer",
    "name": "기도",
    "classTags": [
      "priest"
    ],
    "cost": 1,
    "power": 0,
    "scale": 1,
    "target": "self",
    "tags": [],
    "rarity": "common",
    "effects": [
      {
        "type": "heal",
        "value": 8
      }
    ]
  },
  "p_divine_wrath": {
    "id": "p_divine_wrath",
    "name": "신노",
    "classTags": [
      "priest"
    ],
    "cost": 3,
    "power": 9,
    "scale": 1,
    "target": "nearest",
    "tags": [
      "holy",
      "magic"
    ],
    "rarity": "uncommon",
    "effects": []
  },
  "p_sanctuary": {
    "id": "p_sanctuary",
    "name": "성역",
    "classTags": [
      "priest"
    ],
    "cost": 3,
    "power": 0,
    "scale": 1,
    "target": "self",
    "tags": [],
    "rarity": "uncommon",
    "effects": [
      {
        "type": "block",
        "value": 15
      },
      {
        "type": "heal",
        "value": 5
      }
    ]
  },
  "p_purify": {
    "id": "p_purify",
    "name": "순화",
    "classTags": [
      "priest"
    ],
    "cost": 2,
    "power": 4,
    "scale": 1,
    "target": "nearest",
    "tags": [
      "holy",
      "magic"
    ],
    "rarity": "uncommon",
    "effects": [
      {
        "type": "cleanse",
        "value": 1
      }
    ]
  },
  "p_radiance": {
    "id": "p_radiance",
    "name": "광휘",
    "classTags": [
      "priest"
    ],
    "cost": 2,
    "power": 4,
    "scale": 1,
    "target": "all_enemies",
    "tags": [
      "holy",
      "magic"
    ],
    "rarity": "uncommon",
    "effects": []
  },
  "p_guardian": {
    "id": "p_guardian",
    "name": "수호",
    "classTags": [
      "priest"
    ],
    "cost": 2,
    "power": 0,
    "scale": 1,
    "target": "self",
    "tags": [],
    "rarity": "uncommon",
    "effects": [
      {
        "type": "block",
        "value": 12
      }
    ]
  },
  "p_mend": {
    "id": "p_mend",
    "name": "응급 치료",
    "classTags": [
      "priest"
    ],
    "cost": 1,
    "power": 0,
    "scale": 1,
    "target": "self",
    "tags": [],
    "rarity": "common",
    "effects": [
      {
        "type": "heal",
        "value": 6
      }
    ]
  },
  "p_halo": {
    "id": "p_halo",
    "name": "후광",
    "classTags": [
      "priest"
    ],
    "cost": 3,
    "power": 0,
    "scale": 1,
    "target": "self",
    "tags": [
      "holy"
    ],
    "rarity": "rare",
    "effects": [
      {
        "type": "empower",
        "value": 2
      },
      {
        "type": "block",
        "value": 8
      }
    ]
  },
  "p_judgment": {
    "id": "p_judgment",
    "name": "심판",
    "classTags": [
      "priest"
    ],
    "cost": 3,
    "power": 11,
    "scale": 1,
    "target": "nearest",
    "tags": [
      "holy",
      "magic"
    ],
    "rarity": "rare",
    "effects": [
      {
        "type": "stun",
        "value": 1
      }
    ]
  },
  "c_strike": {
    "id": "c_strike",
    "name": "기본 공격",
    "classTags": [
      "common"
    ],
    "cost": 1,
    "power": 4,
    "scale": 1,
    "target": "nearest",
    "tags": [
      "physical"
    ],
    "rarity": "common",
    "effects": []
  },
  "c_defend": {
    "id": "c_defend",
    "name": "방어",
    "classTags": [
      "common"
    ],
    "cost": 1,
    "power": 0,
    "scale": 1,
    "target": "self",
    "tags": [],
    "rarity": "common",
    "effects": [
      {
        "type": "block",
        "value": 5
      }
    ]
  },
  "c_adrenaline": {
    "id": "c_adrenaline",
    "name": "아드레날린",
    "classTags": [
      "common"
    ],
    "cost": 1,
    "power": 0,
    "scale": 1,
    "target": "self",
    "tags": [],
    "rarity": "common",
    "effects": [
      {
        "type": "empower",
        "value": 1
      }
    ]
  },
  "c_shrug": {
    "id": "c_shrug",
    "name": "무시",
    "classTags": [
      "common"
    ],
    "cost": 1,
    "power": 0,
    "scale": 1,
    "target": "self",
    "tags": [],
    "rarity": "common",
    "effects": [
      {
        "type": "block",
        "value": 4
      }
    ]
  },
  "c_bandage": {
    "id": "c_bandage",
    "name": "붕대",
    "classTags": [
      "common"
    ],
    "cost": 1,
    "power": 0,
    "scale": 1,
    "target": "self",
    "tags": [],
    "rarity": "common",
    "effects": [
      {
        "type": "heal",
        "value": 6
      }
    ]
  },
  "c_throw_rock": {
    "id": "c_throw_rock",
    "name": "돌 던지기",
    "classTags": [
      "common"
    ],
    "cost": 1,
    "power": 3,
    "scale": 1,
    "target": "random",
    "tags": [
      "physical"
    ],
    "rarity": "common",
    "effects": []
  },
  "c_focus": {
    "id": "c_focus",
    "name": "집중",
    "classTags": [
      "common"
    ],
    "cost": 1,
    "power": 0,
    "scale": 1,
    "target": "self",
    "tags": [],
    "rarity": "common",
    "effects": [
      {
        "type": "empower",
        "value": 1
      }
    ]
  },
  "c_dodge": {
    "id": "c_dodge",
    "name": "피하기",
    "classTags": [
      "common"
    ],
    "cost": 1,
    "power": 0,
    "scale": 1,
    "target": "self",
    "tags": [],
    "rarity": "common",
    "effects": [
      {
        "type": "evade",
        "value": 15
      }
    ]
  },
  "c_suplex": {
    "id": "c_suplex",
    "name": "밀치기",
    "classTags": [
      "common"
    ],
    "cost": 2,
    "power": 6,
    "scale": 1,
    "target": "nearest",
    "tags": [
      "physical"
    ],
    "rarity": "common",
    "effects": [
      {
        "type": "weak",
        "value": 1
      }
    ]
  },
  "c_battle_trance": {
    "id": "c_battle_trance",
    "name": "전투 trance",
    "classTags": [
      "common"
    ],
    "cost": 2,
    "power": 0,
    "scale": 1,
    "target": "self",
    "tags": [],
    "rarity": "uncommon",
    "effects": [
      {
        "type": "empower",
        "value": 1
      },
      {
        "type": "block",
        "value": 5
      }
    ]
  },
  "c_wild_swing": {
    "id": "c_wild_swing",
    "name": "난무",
    "classTags": [
      "common"
    ],
    "cost": 2,
    "power": 7,
    "scale": 1,
    "target": "random",
    "tags": [
      "physical"
    ],
    "rarity": "uncommon",
    "effects": []
  },
  "c_second_wind": {
    "id": "c_second_wind",
    "name": "제2의 바람",
    "classTags": [
      "common"
    ],
    "cost": 2,
    "power": 0,
    "scale": 1,
    "target": "self",
    "tags": [],
    "rarity": "uncommon",
    "effects": [
      {
        "type": "heal",
        "value": 10
      }
    ]
  },
  "c_pommel": {
    "id": "c_pommel",
    "name": "자루 치기",
    "classTags": [
      "common"
    ],
    "cost": 1,
    "power": 4,
    "scale": 1,
    "target": "nearest",
    "tags": [
      "physical"
    ],
    "rarity": "common",
    "effects": [
      {
        "type": "stun",
        "value": 1
      }
    ]
  },
  "c_trip": {
    "id": "c_trip",
    "name": "발 걸기",
    "classTags": [
      "common"
    ],
    "cost": 2,
    "power": 3,
    "scale": 1,
    "target": "nearest",
    "tags": [],
    "rarity": "uncommon",
    "effects": [
      {
        "type": "slow",
        "value": 1
      }
    ]
  },
  "c_deep_breath": {
    "id": "c_deep_breath",
    "name": "심호흡",
    "classTags": [
      "common"
    ],
    "cost": 1,
    "power": 0,
    "scale": 1,
    "target": "self",
    "tags": [],
    "rarity": "common",
    "effects": [
      {
        "type": "block",
        "value": 8
      }
    ]
  },
  "c_lucky_coin": {
    "id": "c_lucky_coin",
    "name": "행운의 동전",
    "classTags": [
      "common"
    ],
    "cost": 1,
    "power": 0,
    "scale": 1,
    "target": "self",
    "tags": [],
    "rarity": "uncommon",
    "effects": []
  },
  "c_improvise": {
    "id": "c_improvise",
    "name": "즉흥",
    "classTags": [
      "common"
    ],
    "cost": 2,
    "power": 5,
    "scale": 1,
    "target": "random",
    "tags": [],
    "rarity": "uncommon",
    "effects": []
  },
  "c_desperate_blow": {
    "id": "c_desperate_blow",
    "name": "필사타",
    "classTags": [
      "common"
    ],
    "cost": 3,
    "power": 12,
    "scale": 1,
    "target": "nearest",
    "tags": [
      "physical"
    ],
    "rarity": "uncommon",
    "effects": [
      {
        "type": "weak",
        "value": 1
      }
    ]
  },
  "c_fortify_mind": {
    "id": "c_fortify_mind",
    "name": "정신 단련",
    "classTags": [
      "common"
    ],
    "cost": 2,
    "power": 0,
    "scale": 1,
    "target": "self",
    "tags": [],
    "rarity": "uncommon",
    "effects": [
      {
        "type": "block",
        "value": 6
      },
      {
        "type": "cleanse",
        "value": 1
      }
    ]
  },
  "c_war_cry": {
    "id": "c_war_cry",
    "name": "함성",
    "classTags": [
      "common"
    ],
    "cost": 2,
    "power": 0,
    "scale": 1,
    "target": "self",
    "tags": [],
    "rarity": "uncommon",
    "effects": [
      {
        "type": "empower",
        "value": 1
      }
    ]
  },
  "strike_basic": {
    "id": "strike_basic",
    "name": "기본 타격 (보충)",
    "classTags": [
      "common"
    ],
    "cost": 1,
    "power": 4,
    "scale": 1,
    "target": "nearest",
    "tags": [
      "physical"
    ],
    "rarity": "common",
    "effects": []
  },
  "w_strike_plus": {
    "id": "w_strike_plus",
    "name": "강타+",
    "classTags": [
      "warrior"
    ],
    "cost": 1,
    "power": 9,
    "scale": 1,
    "target": "nearest",
    "tags": [
      "physical"
    ],
    "rarity": "uncommon",
    "effects": []
  },
  "w_block_plus": {
    "id": "w_block_plus",
    "name": "방어 태세+",
    "classTags": [
      "warrior"
    ],
    "cost": 1,
    "power": 0,
    "scale": 1,
    "target": "self",
    "tags": [],
    "rarity": "uncommon",
    "effects": [
      {
        "type": "block",
        "value": 10
      }
    ]
  },
  "w_heavy_strike_plus": {
    "id": "w_heavy_strike_plus",
    "name": "중강타+",
    "classTags": [
      "warrior"
    ],
    "cost": 2,
    "power": 13,
    "scale": 1,
    "target": "nearest",
    "tags": [
      "physical"
    ],
    "rarity": "uncommon",
    "effects": []
  },
  "m_bolt_plus": {
    "id": "m_bolt_plus",
    "name": "마력 화살+",
    "classTags": [
      "mage"
    ],
    "cost": 1,
    "power": 8,
    "scale": 1,
    "target": "lowest_hp",
    "tags": [
      "magic"
    ],
    "rarity": "uncommon",
    "effects": []
  },
  "m_fireball_plus": {
    "id": "m_fireball_plus",
    "name": "파이어볼+",
    "classTags": [
      "mage"
    ],
    "cost": 2,
    "power": 9,
    "scale": 1,
    "target": "all_enemies",
    "tags": [
      "magic"
    ],
    "rarity": "uncommon",
    "effects": [
      {
        "type": "burn",
        "value": 3
      }
    ]
  },
  "a_shot_plus": {
    "id": "a_shot_plus",
    "name": "사격+",
    "classTags": [
      "archer"
    ],
    "cost": 1,
    "power": 8,
    "scale": 1,
    "target": "lowest_hp",
    "tags": [
      "physical"
    ],
    "rarity": "uncommon",
    "effects": []
  },
  "a_snipe_plus": {
    "id": "a_snipe_plus",
    "name": "저격+",
    "classTags": [
      "archer"
    ],
    "cost": 3,
    "power": 15,
    "scale": 1,
    "target": "lowest_hp",
    "tags": [
      "physical"
    ],
    "rarity": "rare",
    "effects": []
  },
  "r_stab_plus": {
    "id": "r_stab_plus",
    "name": "찌르기+",
    "classTags": [
      "rogue"
    ],
    "cost": 1,
    "power": 8,
    "scale": 1,
    "target": "nearest",
    "tags": [
      "physical"
    ],
    "rarity": "uncommon",
    "effects": []
  },
  "r_backstab_plus": {
    "id": "r_backstab_plus",
    "name": "백스탭+",
    "classTags": [
      "rogue"
    ],
    "cost": 2,
    "power": 12,
    "scale": 1,
    "target": "nearest",
    "tags": [
      "physical"
    ],
    "rarity": "rare",
    "effects": []
  },
  "p_smite_plus": {
    "id": "p_smite_plus",
    "name": "성스러운 일격+",
    "classTags": [
      "priest"
    ],
    "cost": 1,
    "power": 8,
    "scale": 1,
    "target": "nearest",
    "tags": [
      "holy",
      "magic"
    ],
    "rarity": "uncommon",
    "effects": []
  },
  "p_heal_plus": {
    "id": "p_heal_plus",
    "name": "치유+",
    "classTags": [
      "priest"
    ],
    "cost": 1,
    "power": 0,
    "scale": 1,
    "target": "self",
    "tags": [
      "holy"
    ],
    "rarity": "uncommon",
    "effects": [
      {
        "type": "heal",
        "value": 15
      }
    ]
  },
  "c_strike_plus": {
    "id": "c_strike_plus",
    "name": "기본 공격+",
    "classTags": [
      "common"
    ],
    "cost": 1,
    "power": 7,
    "scale": 1,
    "target": "nearest",
    "tags": [
      "physical"
    ],
    "rarity": "uncommon",
    "effects": []
  },
  "c_defend_plus": {
    "id": "c_defend_plus",
    "name": "방어+",
    "classTags": [
      "common"
    ],
    "cost": 1,
    "power": 0,
    "scale": 1,
    "target": "self",
    "tags": [],
    "rarity": "uncommon",
    "effects": [
      {
        "type": "block",
        "value": 7
      }
    ]
  },
  "c_adrenaline_plus": {
    "id": "c_adrenaline_plus",
    "name": "아드레날린+",
    "classTags": [
      "common"
    ],
    "cost": 1,
    "power": 0,
    "scale": 1,
    "target": "self",
    "tags": [],
    "rarity": "uncommon",
    "effects": [
      {
        "type": "empower",
        "value": 2
      }
    ]
  },
  "c_wild_swing_plus": {
    "id": "c_wild_swing_plus",
    "name": "난무+",
    "classTags": [
      "common"
    ],
    "cost": 2,
    "power": 10,
    "scale": 1,
    "target": "random",
    "tags": [
      "physical"
    ],
    "rarity": "rare",
    "effects": []
  },
  "c_desperate_blow_plus": {
    "id": "c_desperate_blow_plus",
    "name": "필사타+",
    "classTags": [
      "common"
    ],
    "cost": 3,
    "power": 15,
    "scale": 1,
    "target": "nearest",
    "tags": [
      "physical"
    ],
    "rarity": "rare",
    "effects": [
      {
        "type": "weak",
        "value": 2
      }
    ]
  },
  "w_shield_wall_plus": {
    "id": "w_shield_wall_plus",
    "name": "방벽+",
    "classTags": [
      "warrior"
    ],
    "cost": 3,
    "power": 0,
    "scale": 1,
    "target": "self",
    "tags": [],
    "rarity": "rare",
    "effects": [
      {
        "type": "block",
        "value": 25
      }
    ]
  },
  "m_meteor_plus": {
    "id": "m_meteor_plus",
    "name": "메테오+",
    "classTags": [
      "mage"
    ],
    "cost": 4,
    "power": 15,
    "scale": 1,
    "target": "all_enemies",
    "tags": [
      "magic"
    ],
    "rarity": "rare",
    "effects": [
      {
        "type": "burn",
        "value": 4
      }
    ]
  },
  "a_headshot_plus": {
    "id": "a_headshot_plus",
    "name": "헤드샷+",
    "classTags": [
      "archer"
    ],
    "cost": 3,
    "power": 13,
    "scale": 1,
    "target": "lowest_hp",
    "tags": [
      "physical"
    ],
    "rarity": "rare",
    "effects": [
      {
        "type": "stun",
        "value": 2
      }
    ]
  },
  "p_judgment_plus": {
    "id": "p_judgment_plus",
    "name": "심판+",
    "classTags": [
      "priest"
    ],
    "cost": 3,
    "power": 14,
    "scale": 1,
    "target": "nearest",
    "tags": [
      "holy",
      "magic"
    ],
    "rarity": "rare",
    "effects": [
      {
        "type": "stun",
        "value": 2
      }
    ]
  }
};

export function getCard(id) {
  return CARDS[id] || null;
}

export function getCardName(id) {
  return CARDS[id]?.name || id;
}

export const PLUS_CARD_IDS = ["w_strike_plus","w_block_plus","w_heavy_strike_plus","m_bolt_plus","m_fireball_plus","a_shot_plus","a_snipe_plus","r_stab_plus","r_backstab_plus","p_smite_plus","p_heal_plus","c_strike_plus","c_defend_plus","c_adrenaline_plus","c_wild_swing_plus","c_desperate_blow_plus","w_shield_wall_plus","m_meteor_plus","a_headshot_plus","p_judgment_plus"];
