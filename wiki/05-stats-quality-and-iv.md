# Stats, Quality and IV

> Parte: The basics · [← voltar ao índice](index.md)

Two pokemon of the same species and level are almost never the same. What sets them apart are three numbers rolled **at capture** that **never change again**: **quality**, **IV** and **potency**.

```
stat = round( (base + 2 × IV) × level/100 × quality^exponent × multiplier ) statSum = hp + atk + def + spAtk + spDef + speed
```

### IV — 1 to 32 per stat

Six independent rolls, **1 to 32** each (max total: 192). Evolving does **not** reroll anything.

### Speed and SPD IV — cooldowns, not running speed

**Speed IV (SPD)** is rolled separately, like the other five. Neither it nor the SPD stat enter the damage formula or make the pokemon run faster on the hunt map — the active pokemon is always slightly ahead of the trainer by scene design. What changes is the **cooldown**: on moves, the **species' base Speed** gives up to 7% off and the SPD IV decides how much of it the pokemon gets (IV 32, all of it; IV 16, half); on Tackle and the gap between attacks only the IV counts, **−0.01 s per point** (IV 32 → −0.32 s), fixed at birth. The full math is in Combat. Sp.ATK and Sp.DEF only matter on **special** moves.

### Quality — the number that weighs most

It enters **each stat** as an exponent (`quality^exp`) — so it shifts the whole pokemon and matters more than IV alone. The `statSum` line above is just the **sum of the six stats** (used in the Pokedex to compare potencies). The **score** and **⚔** use that birth strength — see Score, Power and Calculator.

### How quality is rolled

It is **not calculated** from IVs, potency, shininess or level. At capture the game rolls **one band** (using the table chances below) and then a random value between that band's min and max — three decimal places. That number is permanent; evolving changes nothing.

> A pokemon with max IVs and potency V can still roll q**1.0** (Common) or q**1.7** (Legendary): three **independent** rolls on the same capture. High IV does **not** pull quality up.

| Quality | Chance | Label |
| --- | --- | --- |
| 0,8 – 0,9 | 5.00% | Weak |
| 0,9 – 1 | 5.00% | Weak |
| 1 – 1,1 | 34.0% | Common |
| 1,1 – 1,2 | 20.0% | Uncommon |
| 1,2 – 1,3 | 10.0% | Uncommon |
| 1,3 – 1,4 | 10.0% | Rare |
| 1,4 – 1,5 | 10.0% | Rare |
| 1,5 – 1,6 | 5.00% | Epic |
| 1,7 – 1,8 | 0.67% | Legendary |
| 1,8 | 0.29% | Legendary |

> The **1.6 – 1.7 range is an intentional gap**: no rolled pokemon is born in it (the starter, which is not rolled, is born with exactly 1.6 — see below). The roll ceiling is exactly **1.8** (~0.29% chance). Shinies do not get extra quality — they are stronger from the **×3 stat multiplier** and rerolled IVs, not from a higher q.

The exponent varies per stat: **0.95** for HP and Speed, **0.8** for the other four. How **Speed** and the **SPD IV** affect combat (cooldowns, not running) is in Combat.

### Combat HP

```
combatHp = max(24, round(hp × 12))
```

A wild pokemon takes a further **×5** on top of that — see Combat.

### Refine — the “+1” bought with stones

The only way to touch a pokemon's **base** stats after it is born. Each step adds a permanent **+1** to one base stat, and it enters **before** everything else in the formula above — so it is multiplied by level, quality and potency. The step worth +1 on a plain level 100 is worth 6 times that on a shiny P5 — and 24 on a shiny P5 legendary.

You pay in the **evolution stone of the pokemon's own type** — the same one it evolves with, and the common one even if it is shiny. Final forms refine too: Dragonite evolves nowhere, but it uses Ancient Stone like any other DRAGON.

A pokemon with **two types** takes the stone of **either one**, and both add up: on a Charizard, 300 Feather Stones + 200 Fire Stones close a 500 step. On the refine screen you **choose how much comes from each stone**.

```
holding +N on a stat = 500 × N³ stones, all told cost of step N = 500 × (3N² − 3N + 1)
```

| Step | Step cost | Total invested |
| --- | --- | --- |
| +1 | 500 | 500 |
| +2 | 3,500 | 4,000 |
| +3 | 9,500 | 13,500 |
| +4 | 18,500 | 32,000 |
| +5 | 30,500 | 62,500 |
| +6 | 45,500 | 108,000 |
| +8 | 84,500 | 256,000 |
| +10 | 135,500 | 500,000 |
| +15 | 315,500 | 1,687,500 |
| +20 | 570,500 | 4,000,000 |

> **There is no cap.** Whoever wants to keep climbing, climbs — the price sets the pace. The curve is cubic and not exponential for exactly that reason: by doubling, the twentieth step would cost 262 million stones and a de facto cap would be hidden in the formula.

> The cost is **per stat**, not per pokemon. Four steps into HP means 30,500 for the fifth — but the first ATK step still costs 500. Refining is **choosing** what the creature is good at, not filling a bar.

**SPD does not refine**, and that is not an oversight: the SPD stat never enters combat — attack pace comes from the **species' base Speed** with the Speed **IV** above, and refining touches neither. Selling "+1 SPD" would be selling a number that does nothing.

The **score** and the **⚔** climb with refining too: both read the base stats plus the refined **+N**. On the card, refining shows as the **+N** badge next to the name and the real stats climbing.

The “+” lives in two places: the header of the **On field** panel and each **Base stats** row on the card of a pokemon you own. Refining sends the pokemon to your Collection, out of NPC sales — return it to the Depot if you really want to sell it.

### The fixed starter

Your first pokemon does **not** go through the free roll: every starter is born with quality **1.6** (Epic) and IV **27** in each of the six stats (**162** of 192) — Bulbasaur, Charmander or Squirtle, on your first account or your tenth. No wild pokemon is born with exactly 1.6: the ladder jumps from the 1.5 – 1.6 band to 1.7 – 1.8. Rolled, one in ten trainers would start with a "Weak" band creature and the first hunt would be impossible; fixed, nobody needs to remake their account to get a good starter.
