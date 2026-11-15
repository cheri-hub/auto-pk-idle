# Score, Power and Calculator

> Parte: The basics · [← voltar ao índice](index.md)

These are **two different metrics** on the pokemon sheet — mixing them up is where most “good pokemon” confusion comes from.

### Score N= (0–10) — aligned with ⚔@100

Measures how strong the pokemon was **born within its species**. Uses the **same strength (score)** as ranking ⚔, as if everyone were **level 100** — leveling up does not change the score; only the ⚔ on the ladder does.

```
score = birth strength (0–1), same base as ⚔ N= = 10 × (score − worst) ÷ (best − worst) ← within species only
```

- **0** = worst possible birth *for that* species; **10** = P5 + shiny + max IV.
- **Evolving always RAISES the score** — it never drops it and never ties. Every species has its own scale, and the new form measures the same birth differently; so the score after evolving is at least the previous form's **+0.1** per evolution (the lineage floor). Mega Evolving follows the same rule. The only limit is the ceiling: 10 is still 10.
- Refinement (+N) **raises** both score and ⚔ — uses current base (species + refine).

> The Community Market requires a minimum calculator score. **Shiny, P5 and legendary pokemon bypass** the bar.

### Using the Calculator

Open it from the **calculator** square in your portrait column, or from a pokemon's sheet (then it comes with that pokemon's numbers). It has two tabs.

**Calculate Pokemon.** Pick the **species first** — 0 and 10 are the worst and best birth of *that* species — and fill in the birth: the **IV of each stat** (six fields, 1 to 32), quality, potency, shiny and, if you want, the Z-Move. You get:

- the big **score**, on the pedestal with the spotlight in the **tier colour** (table below), and how far it is from the next tier;
- **Where the score comes from**: how much each axis (IV, quality, potency, shiny) weighs in total strength — not a fixed 25%, and a shiny P5 pulls more than a weak common;
- **Weight of each stat in the score**: which stat the species values most. Two pokemon with the same IV total can score differently if the points land on different stats;
- **In combat**: the stat multiplier, combat HP, **Power (ranking)** — the ⚔ at the sheet's level — and **Power (gym)**;
- **Potential at final evolution** and **Potential at Mega Evolution**: the N= score the same birth would have on every reachable final form (Eevee and branches included) and on the Mega, flagging whether each one meets the Market bar.

> **Legendaries and Mythicals have no score.** They are **×4 on every stat** (see Potency), and that ×4 goes past the top of the 0–10 ruler. Pick one and the calculator "breaks" — **PRICELESS** shows up where the number would be. The **In battle** card still works, already with the ×4.

**Compare Pokemon.** Set up two sides (species, level and birth) and the calculator simulates a **1×1 attrition duel**, with the type chart, STAB and each side's best move against the other. You get who wins and in what share of the simulated duels — the range moves with damage luck, which is why two close pokemon rarely give 0% or 100%.

With a **Z-Move**, each side also picks its **category**: **Physical** (its ATK against the other side's DEF) or **Special** (SP.ATK against SP.DEF) — the same choice as the Z-Move tag on the sheet (see Z-Moves and AoE TM), with "higher" marking that pokemon's stronger attack. **Compare with A/B** on the sheet of a pokemon of yours already brings its Z-Move and category. The Compare ⚔ **changes** with the category, because it is the duel against that opponent; the sheet's power numbers do not, because they measure the pokemon alone, by the higher of ATK and SP.ATK.

The box color steps up with every point of score — ten tiers in all. A score right on a boundary stays in the lower tier.

| Score | Tier | Color |
| --- | --- | --- |
| 0–1 | **Extremely Weak** | gray |
| 1–2 | **Weak** | red |
| 2–3 | **Average** | orange |
| 3–4 | **Fair** | green |
| 4–5 | **Good** | light green |
| 5–6 | **Strong** | bright green, pulsing glow |
| 6–7 | **Powerful** | lilac, soft glow |
| 7–8 | **Mythic** | glowing purple, pulsing frame |
| 8–9 | **Legendary** | light pink, glowing |
| 9–10 | **Divine** | glowing pink, pulsing frame |

### Power (⚔) — “Strongest Pokemon” ladder

A **single ranking number** on the sheet and ladder. **Not the score** and **does not change combat** — only sort order. Rises with level, refinement and evolution.

```
score = same strength as N= (0–1) power = round( level × 10 × score ) → at lv 100: ⚔ ≈ 1000 × score
```

In **combat**, quality still uses per-stat exponents; potency, shiny and the Legendary ×4 still multiply stats. Ranking ⚔ is a separate formula — and it carries the ×4 too, which the score does not.

### What changes in combat

- **Combat HP** = max(24, round(hp × 12)). Wilds get ×5 on top.
- **Damage** uses real ATK/Sp.Atk vs DEF/Sp.Def, type, STAB and effectiveness — not the “power” number directly.
- **Base Speed** with the **SPD IV** shortens move cooldowns (up to 7%), and the IV also takes −0.01 s to −0.32 s off Tackle — none of it speeds up running on the hunt map.
- **Defense** lowers damage taken in the classic formula.

### Your pokemon's sheet

Clicking one of your pokemon opens its sheet. What it shows, top to bottom:

- the pokemon on a **spotlit pedestal** in its score tier's colour — a shiny gets a glowing golden halo;
- under the pedestal, the **score plate** — on a legendary or mythical it comes "broken": **PRICELESS** instead of the number and the **GLITCH** band, because its ×4 goes past the top of the ruler;
- the **nickname** from a Name Tag, if it has one, with the species right below — and the **skin** it is wearing;
- the **Potency · Quality · IV** row and, side by side, **Power in PvE** — the fighting strength in hunts — and **Power in PvP**, with the level compressed above Lv 150 as in gyms and ranked PvP ("counts as Lv X") and the Z-Move at its PvP power (**1800**), plus **Combat HP**;
- the **P · IV · Q · N** badges, which turn to metal from blue up — the gold of a P5 reads at a glance in a full grid;
- **who caught** the pokemon — the name stays even after it changes hands, and links to the catcher's profile;
- the **War Medal** (Guilds) and the championship **Trophy** (Championships), which also go along in a sale;
- the species' **evolution** and **Mega** as links to the Pokedex — on a final form that has a Mega, the sheet shows Mega Evolution instead of "does not evolve". Until the pokemon reaches the level, the arrow says **Needs Lv X/N**; N is only the minimum, and evolving keeps its level;
- the **Copy for ChatGPT** button: copies the sheet as text — species, base stats, the IV of each stat, potency, quality, shiny and how the game calculates — to paste into ChatGPT.
