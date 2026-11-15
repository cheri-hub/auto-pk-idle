# Catching

> Parte: Fighting and catching · [← voltar ao índice](index.md)

### The balls

| Poke Ball | Efficiency | 1st of three | Middle (or 1st of two) | Final (or no evolution) | Price |
| --- | --- | --- | --- | --- | --- |
| Poke Ball | ×1 | 0.37% | 0.30% | 0.30% | 5 gold |
| Great Ball | ×2 | 0.73% | 0.59% | 0.47% | 20 gold |
| Super Ball | ×3 | 1.10% | 0.88% | 0.70% | 50 gold |
| Ultra Ball | ×4 | 1.46% | 1.17% | 0.94% | 130 gold |
| Beast Ball | ×8 | 2.93% | 2.35% | 1.88% | *diamonds only* |

Catch % on a fainted body, by the species’ evolution stage — the same number in every region. Each species sheet in the Pokedex shows its own table — the Beast Ball is always **2×** the Ultra Ball.

The **Beast Ball** is the strongest and cannot be bought with gold — only in packs at the Diamond Shop.

### Chance per throw

```
factor = the species’ evolution stage: 1st of three 2.87 · middle, or 1st of two 3.57 · final, or no evolution 4.47 chance = 0.0075 × (efficiency / factor) × (1.4 − currentHp/maxHp)
```

Clamped between **0.30%** and **10.0%**. Three things decide everything:

- **The evolution stage**, not the region. The 1st of a three-stage chain (Bulbasaur, Turtwig, Pichu) is the easiest; the middle one — or the 1st of a two-stage chain (Ivysaur, Sandshrew, Eevee) — comes next; the final evolution and anything that does not evolve (Venusaur, Sandslash, Tauros, the Outland variants) are the hardest. It is the same step as the **Level when caught** (20 · 40 · 100), and it holds from Kanto to Alola.
- **The ball.** Efficiency multiplies directly.
- **The target's HP.** The ball only goes at something already down, and a body has zero HP — the good end of the formula.

> **Catching is meant to be hard.** With the BEST ball, on a fallen body: **2.93%** for the 1st of three, **2.35%** for the middle and **1.88%** for the final evolution — Bulbasaur and Turtwig come out at the same chance. The three numbers are each stage’s average in the catalog of 17/10/2026, minus 0.1 point; before, the chance fell with the species’ price and the higher regions were harder. Legendaries and mythicals are not in hunts: they come from the Mystic Arena, which has its own table. Each species sheet in the Pokedex shows the exact table, ball by ball, with how many kills that means on average.

### One attempt per body

If the ball fails on a **fallen body**, it vanishes from the map. You cannot dump balls on the same target until one sticks — that is precisely what gives capture a cost. A **living** wild stays on the field when a ball fails, because it is still fighting.

### The level it joins at

The wild one **fights** at the hunt's level; the caught one **is born** at the species cap. The cap comes from its evolution chain:

```
3-stage chain (Treecko → Grovyle → Sceptile) 20 · 40 · 100 2-stage chain (Makuhita → Hariyama) 40 · 100 no evolution (Spinda, Outland variants) 100
```

**Up to Lv 100 nothing changes** — all of Kanto hands you the pokemon at the level it was lying at. Above that the cap rules, and that includes **Johto**, which opens at Lv 200: a Togepi knocked down in the level 200 hunt joins at **Lv 20**, a Torterra knocked down in a level 3,500 hunt joins at **Lv 100**, and a Turtwig at **Lv 20**.

**National species** follow the same ladder: when the target is from Hoenn onwards (or the step asked for more than Lv 100), it asks for the **destination's cap** (40 or 100), not the level of the hunt where it appears. Catch at 20, train to 40, evolve; train to 100, evolve again. Between Kanto and Johto species the usual level still applies. **Outland variants (#2001+) are not part of this — they do not evolve** (see the Evolution chapter).

> Every Pokedex sheet has a **Level when caught** line, and the fallen panel shows the "→ Lv" before you spend the ball. The pokemon is still worth what it is worth — it just arrives to be trained, not finished.

### What raises it

- **Capture Boost** (Shop) — **doubles** the per-throw chance, still respecting the 10.0% ceiling.
- **Kick Bonus** — +15% per hour redeemed with channel points, multiplying with the Shop boost (see Live bonuses).
- **A better ball** — the Poke Ball is the cheapest *per throw*, but the Ultra and the Beast spend less of your time.

> The legendary in the Mystic Arena does not follow this formula: there the chance is a per-ball table, the same for every legendary, and you get a single try.

### Automation

The **Throw until Catch** and **Throw Nonstop** options throw at fallen bodies on their own, respecting a 1.2 s gap — the first stops at the catch, the second doesn't. They are a **VIP benefit** — see Automation.
