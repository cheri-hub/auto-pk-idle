# Levels and XP

> Parte: The basics · [← voltar ao índice](index.md)

There are **two independent levels**: the **trainer's** (yours) and the **active pokemon's**. Every kill pays the same XP to both, and each climbs its own curve.

- The **trainer** level is what **unlocks Map areas**.
- The **pokemon** level is what grows its stats — and it **fully heals** on every level-up.

### A pokemon can be up to 5 levels above the trainer

A pokemon only takes the field if it is at most **5 levels above** your trainer — the starter is the exception and always gets in. A Lv 60 needs a Lv 55 trainer. With a pokemon that is too high (bought on the Market, for example), you can wait for the trainer to level up or use **Lower the level** on the pokemon's sheet: you pick the new level — the floor is the species' **Level when caught** —, its XP goes back to the start of that level, and it cannot be undone.

### The curve

It is cubic, and there is no cap. Every level costs more than the last:

```
totalXp(L) = round( 50/3 × (L³ − 6L² + 17L − 12) )
```

| Level | Total XP | This level only |
| --- | --- | --- |
| 10 | 9,300 | 2,900 |
| 25 | 204,800 | 25,400 |
| 50 | 1,847,300 | 112,900 |
| 100 | 15,694,800 | 475,400 |
| 200 | 129,389,800 | 1,950,400 |
| 300 | 441,084,800 | 4,425,400 |
| 500 | 2,058,474,800 | 12,375,400 |
| 1,000 | 16,566,949,800 | 49,750,400 |
| 5,000 | 2,080,834,749,800 | 1,248,750,400 |
| 10,000 | 16,656,669,499,800 | 4,997,500,400 |
| 25,000 | 260,354,173,749,800 | 31,243,750,400 |
| 50,000 | 2,083,083,347,499,800 | 124,987,500,400 |
| 100,000 | 16,665,666,694,999,802 | 499,975,000,400 |

> **There is no level cap.** The curve just gets more expensive — Paldea, the last Map tab, unlocks at trainer **Lv 75,000**, and today's highest hunt asks for **Lv 160,300**. Level 1000 is already costly; the top of the Map is endgame, not week one.

### What multiplies your XP

- **XP Boost** — +50% to TRAINER XP.
- **Pokemon XP Boost** — +50% to POKEMON XP.
- **VIP** — +50% to both.
- **Guild Boost** — +10% to both, for the WHOLE guild: the members fill the guild bank together. See Guilds.
- **Guild ranking bonus** — from +1% to +10% to both (and to loot), for the rostered members, by the guild's place on the Daily Guild board; the **Boss Raid** adds up to +5% for the whole guild (reserves included), by how much of the boss's HP the reserves take. See Guilds.
- **Twitch Bonus** — +15% to both, per hour redeemed with the channel points of an official live on Twitch.
- **Kick Bonus** — +15% to both, per hour redeemed with channel points. Both in Live bonuses.
- **Late Joiner Boost** — ×10 to both, until your trainer reaches the veterans' level. See Late Joiner Boost.
- **Sacrifice Boost** — +20% to both, redeemed at the Backpack altar with the points of the score 3.5+ pokemon you sacrificed. See Sacrifice.
- **Gigantamax Raid bonus** — up to +20% on both (and up to +5% farm), for 12 hours after Monday's battle, for those who entered. See Bosses.
- **Events** — an event's XP buff goes on top of all of this.

They **multiply** rather than add: VIP + XP Boost is **2.25×**, not 2×. They are separate purchases, and adding them would make the second one worth less than the first precisely for whoever spent more. See Diamond Shop.
