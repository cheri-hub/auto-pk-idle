# Combat

> Parte: Fighting and catching · [← voltar ao índice](index.md)

The active pokemon walks to the **nearest** wild and only trades blows once it **reaches** it. No damage flying across the map.

### Damage

```
base = ((2 × level/5 + 2) × power × atk/def) / 50 + 2 final = base × STAB × effectiveness × random(0.85–1.00)
```

- **power** is the move's — see **The moves**, right below.
- **STAB** is **×1.5** when the move matches one of the pokemon's own types.
- **atk/def** uses Attack and Defence for physical moves, Sp.Atk / Sp.Def for special ones.
- **effectiveness** comes from the type chart, already amplified.

### The moves

On every attack the pokemon picks, by itself, the move with the **highest expected damage** against that target among the ones off cooldown — weighing power, STAB, type effectiveness and its Attack (or Sp.Atk) against the target's defence. While everything is recharging, it uses Tackle (below).

Each move's **cooldown** comes from its **power**, on a single curve for the whole catalogue. Up to 100 power a move pays its cooldown almost in proportion; above that, an expensive move gets cheaper and cheaper — which is what keeps the 600 move worth it.

| Move power | Cooldown |
| --- | --- |
| 15 | 10 s |
| 40 | 15.9 s |
| 60 | 20.6 s |
| 80 | 25.3 s |
| 100 | 30 s |
| 120 | 31.2 s |
| 150 | 33 s |
| 300 | 42 s |
| 600 | 60 s |

- **Every final evolution has two 600 moves** — one of each type for dual types, two of the same type for single types — with a 60 s cooldown. The category (physical or special) follows the species' stronger attack side, unless its balance sheet picks otherwise. A Mega also keeps two, at the same cooldown (see Mega Evolution).
- Legendaries and mythicals go further: **13 moves, three of them 600s** — two of one type and one of the other, or all three of the single type — and a legendary's Mega keeps three as well. Phione and Poipole, which evolve (into Manaphy and Naganadel), keep ten moves and two 600s; Silvally and Enamorus also stay with two 600s. An Orre clone inherits the list.
- Each move unlocks at a **level**; on species reworked by the balance sheets, every move unlocks at level 1. The Pokedex sheet shows the full list.
- **Speed** shortens move cooldowns by up to 7%: the species' base Speed together with the SPD IV (below).

### The basic attack

While every move is on cooldown, the pokemon throws a **Tackle**: power **30**, every **2 s**, in its own type. Without it a Caterpie would land two moves and then stand still for ten seconds. If the target is immune to both of its types, only a real move works.

- It is **physical**: it enters the formula with **Attack** against the target's **Defense**, never Sp.Atk / Sp.Def. A pokemon with low ATK and high Sp.Atk (Alakazam has **50** against **135**) barely scratches with the basic and lives off its real moves.
- Since it always comes out in the pokemon's own type, **STAB ×1.5 always applies**: those **30** power hit like 45.
- On a dual-type pokemon it tries the **first** type, and only falls back to the second if the target is **immune** to the first — it is not the better of the two.
- The **2 s** shorten only with the **SPD IV**: −10 ms per point, down to 1.68 s at IV 32 (below).

### Speed — move cooldowns and the basic attack

The **SPD** stat on the sheet does **not** enter the damage formula nor speed up running on the hunt map. What speeds up attacks is the **species' base Speed** and the **SPD IV** (1–32, rolled at capture), each in its own place:

- **Moves** (skills and ultimates): base Speed gives a discount **potential** — every 20 Speed is worth 1%, up to 6% at 120; above that, every 40 adds 1%, up to a cap of 7%. The SPD IV decides how much of that potential the pokemon gets: IV 32 gets all of it; IV 16, half.
- **Tackle and the gap between attacks**: only the SPD IV, **10 ms per point** (up to −320 ms), with a 400 ms floor — the 2 s Tackle becomes 1.68 s at IV 32, and the 0.9 s gap between your attacks becomes 0.58 s.

```
potential = Speed ÷ 20 (Speed up to 120) = 6 + (Speed − 120) ÷ 40 (above 120; capped at 7%) discount = potential × SPD IV ÷ 32 cooldown = cooldown × (1 − discount ÷ 100)
```

A Jolteon (Speed 130) has 6.25% potential; at IV 24 it gets 75% of it — 4.69% off —, and its 60 s move recharges in 57.2 s. At IV 32:

| Species | Base Speed | Potential (IV 32) | 600 move (60 s) |
| --- | --- | --- | --- |
| Snorlax | 30 | 1.5% | 59.1 s |
| Tyranitar | 61 | 3.05% | 58.2 s |
| Zoroark | 105 | 5.25% | 56.9 s |
| Jolteon | 130 | 6.25% | 56.3 s |
| Ninjask | 160 | 7% | 55.8 s |

The rule is the same on the hunt, against bosses, in Ranked PvP and in the Guild War.

### Cooldowns belong to the pokemon

A move's cooldown only runs while the pokemon is **on the field**. Switching the active one **pauses** what is left, stored with it; when it comes back, the cooldown carries on from where it stopped. Switching for tactics (type against type) neither costs nor earns a tenth of a second — what no longer works is firing the 600 move of five pokemon in a row and coming back to the first one with its cooldown already done.

- There is a **3 s** wait between one switch and the next, and switching doesn't bring the next attack forward: the one coming in waits whatever was left of the gap between attacks. The substitute that steps in on its own after a knockout doesn't wait.
- Nurse Joy's healing, at the Center, does **not** reset cooldowns.
- Only the Mystic Arena resets them: entering it starts with everything ready. In a Boss the cooldowns carry on from where they were — a move used in one fight is still recharging in the next.
- PvP, Guild War, gyms and championships are separate simulated battles: everyone goes in with clean cooldowns.

### Movement on the hunt

The active pokemon runs slightly **ahead** of the trainer — scene pacing (260 ms vs 290 ms per tile), not SPD stat. High SPD IV makes you **attack** faster and spend more time running between targets, which can look like it “shot ahead”, but step speed did not change.

### The wild plays with an edge

| Rule | Value |
| --- | --- |
| Wild HP on the hunt | ×5 |
| Wild damage per hit | ×1.8 |
| Minimum gap between your hits | 0.9 s |
| Minimum gap between its hits | 1.4 s |

It is not unfair: it is what makes a hunt at your level a fight rather than a queue.

### Waves and bodies

Wilds spawn in **waves**, at the area's spawn points. When the field empties, the next wave arrives within seconds. Whatever falls **stays on the ground for 30 seconds** — and that is what you throw a ball at.

Every area has the **same pace**, from Kanto to Paldea, Outland included: wild pokemon spawn in **packs** spread across the map, tuned so the same team clears a wave in the same time on any hunt — and so the bicycle pays off the same on all of them.

### Gold and drops from each defeat

The **gold** from a defeat has two parts, both by the wild's level: the **curve**, which stops growing at level 25,000, and the **loot bonus** — what loot sold to the NPC used to pay until 10/15/2026, when it left the game. Up to level 25,000 the bonus is **+15%** of the curve; above that, the bonus is what keeps growing, until it matches the curve at the top. **Loot Boost** (plus the guild bonus and event farm, which add up with it) multiplies the loot bonus. The battle log shows the bonus part of every defeat.

| Wild level | Gold (curve) | Loot bonus | Total | With Loot Boost (+40%) |
| --- | --- | --- | --- | --- |
| 1 | 36 | +5 | 41 | 43 |
| 100 | 572 | +86 | 658 | 692 |
| 1,000 | 2,282 | +342 | 2,624 | 2,761 |
| 5,000 | 6,000 | +900 | 6,900 | 7,260 |
| 25,000 | 15,776 | +2,366 | 18,142 | 19,088 |
| 160,300 | 15,776 | +15,905 | 31,681 | 38,043 |

What **drops** is only **evolution stones**: every pokemon drops the stone of **each of its types** (Pidgey, NORMAL/FLYING, drops Sun Stone and Feather Stone), with the chance of its **stage** in the evolution chain. Pokemon that don't evolve (Tauros, Lapras) and the Outland variants count as final forms. Each species' table is in the **Pokedex**.

| Stage | Example | Chance of each stone |
| --- | --- | --- |
| 1st evolution | Charmander | 0.2% |
| 2nd evolution | Charmeleon | 0.35% |
| 3rd evolution, or one that doesn't evolve | Charizard · Tauros | 0.5% |

### Outland drop

In **Outland** the wild drops the stones of its types like everywhere else (at the final-form chance) and, besides them, can drop **1× Bronze Boss Token** — a boss entry ticket — and the Key, Shiny Stone and Bicycle fragments. Kanto and Orre do not drop the token.

| Item | Chance | When |
| --- | --- | --- |
| Bronze Boss Token | 0.0500% · 1 / 2.000 | Outland kill |

> Average ~2,000 defeats per token in Outland 1 — the other Outlands multiply that chance (table right below). The Shop's Loot Boost, the guild ranking bonus and farm events raise the chance. The NPC does not buy it — price only on the Community Market.

### The 8 Outlands

The **Outland** tab on the Map has a selector with all **8 Outlands**. Same map, same pokemon and the same level 150 in every one of them — what changes is the chance of the area's four rare drops (Bronze Boss Token, Key Fragment, Shiny Stone Fragment and Bicycle Fragment):

| Region | Trainer Lv | Bonus |
| --- | --- | --- |
| Outland 1 | 150 | ×1 |
| Outland 2 | 1,000 | ×1.25 |
| Outland 3 | 2,000 | ×1.5 |
| Outland 4 | 4,000 | ×2 |
| Outland 5 | 8,000 | ×3 |
| Outland 6 | 16,000 | ×4 |
| Outland 7 | 24,000 | ×6 |
| Outland 8 | 36,000 | ×8 |

> The step applies to **all four rares at once** and multiplies **after** Loot Boost. XP, gold, capture and the species' stones do not change — moving up an Outland buys rarity, not speed.

### Evolution

Outland variants **do not evolve** — an Ancient Pupitar does not become Ancient Tyranitar. See Evolution & stones.
