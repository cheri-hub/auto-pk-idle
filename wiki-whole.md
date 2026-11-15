Below is the complete Wiki for PokeIdle, an idle Pokemon MMO, with the numbers currently live on the server. Use it as the source for answering my questions about the game. If something is not in here, say you do not know instead of making it up.

# The basics

## Getting started

Pokeidle is an **idle game**: your pokemon fights on its own. You choose where to hunt, with whom, and what to do with the loot. The game runs while the tab is open.

### The core loop

1. **Open the Map** and pick an area. Each one has a recommended level — that of the strongest species spawning there. Areas above your level stay locked.
2. **Your active pokemon** walks to the nearest wild and starts hitting it. You click nothing during the fight.
3. **Once knocked down, the wild becomes a body** and stays on the ground for **30 seconds**. That is the window to throw a ball — and that is how you actually catch things (see Catching).
4. **Gold** from each defeat goes straight in — already with the **loot bonus** (see Combat). What drops — the evolution stone of the pokemon's types and the rare drops — goes to the **Backpack**.

### Your team

The team holds **5** pokemon. Anything caught with a full team drops into the **Depot**, which has no limit. Only one fights at a time — the **active** one — and when it faints the next team member steps in automatically.

> **The starter is not rolled like the others.** Every starter is born the same — quality **1.6** and IV **27** in every stat —, so there is no point in making another account to chase a better one. A caught pokemon spins the full wheel — see Stats and Quality.

### When it all goes wrong

If the whole team falls, you wake up in the **Pokemon Center** square. Nurse Joy heals for free; leaving means picking another area on the Map. Details in Fainting.

### The menu

The top buttons, and the chapter of this Wiki that explains each one:

| Button | What it opens |
| --- | --- |
| **Pokedex** | the species, their sheets, the shiny registry and the weekly Top Catch — Pokedex |
| **Map** | where to hunt — Map and Hunt Analyser |
| **Market** | the NPC counter: balls, potions and eggs — Market |
| **Pass** | the 30-day login track — Battle Pass |
| **Ranks** | the server leaderboards — Ranking |
| **Boss** | the boss arenas — Bosses |
| **Mini Games** | the guess-the-pokemon rounds, with the daily leaderboard and a champion badge in chat — Mini Games |
| **PvP** | Ranked, Guild and Training — Ranked PvP |
| **Gym** | the 18 podiums by type — Gyms |
| **Tournament** | the tournaments: World and Amateur, with real-money prizes, and the weekly Showdown, with diamond prizes — Championships and Showdown |
| **House** | your houses and XP Share — House & XP Share |
| **RMT** | the Community Market, and Gem deposits and withdrawals — Community Market |
| **Shop** | the diamond Shop — Diamond Shop |
| **Wiki** | this manual |

The **Backpack** (your inventory) opens from its button and shows the **pockets**: **Trainer** (balls, potions and revives), **Rare Items** (tickets, tags, bicycles, eggs, Z-Moves), **Stones**, **Skins**, **Offering**, **Incubator**, **Collection**, **Sacrifice** and **Bank**. A tap opens the pocket; the **‹** at the top goes back to the Backpack.

The **Bank** sends Coins to **any trainer, by nick**, no friendship needed. The rules are the friend transfer's: a **15%** fee, burned, a minimum of **1,000** Coins, level 10 on both sides and 5 seconds between transfers. A transfer asks for confirmation with the nick and cannot be undone.

### Talking

The four chat channels, the Friends List, private messages and the negotiation chat with sellers are in Chat, friends and Trade.

## Levels and XP

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

## Live bonuses: Twitch and Kick

PokeIdle's **Official Streamers** go live on **Twitch** and **Kick**, and watching pays a bonus in the game. Both work the same way: watching logged in, you earn the **channel points** the platform itself hands out and trade them for **bonus hours** in the game, through the rewards every official channel has. Each platform has its own line on the **trainer panel** (next to VIP and the boosts) — and the two bonuses **multiply** with each other and with VIP, boosts, guild and events (see Levels and XP).

### How it works — the same on both

1. **Link your account:** click the **Twitch Bonus** (or **Kick Bonus**) line on the panel and **Link Twitch** (or **Link Kick**). The link is **forever** — one account of each platform per trainer — so log in with your main account.
2. **Watch** an official streamer's live, logged in: the platform keeps handing you channel points.
3. Open the channel points and **redeem** one of PokeIdle's rewards. Within seconds the bonus shows on the panel, with its countdown.

- Hours **add up**: redeeming the same bonus three times (on the same channel or on different ones) gives three hours. The percentage doesn't grow — the duration does.
- Each bonus also comes in **3h, 5h, and 10h packs**: one redemption instead of several, at the hourly price times the hours — **no discount** (each price is in the tables below).
- Redeemed without linking? The redemption is refused and the platform **refunds the points**.

### Twitch — only viewers earn points

On Twitch, points only come with the **video playing**, on the channel page or in the app: **+10 every 5 minutes** of watching, plus a **+50** chest every ~15 minutes (just click it). The **popout chat** alone earns no points at all. The rewards every official channel has:

| Reward | Cost | Effect | Each redeem | Packs (points) |
| --- | --- | --- | --- | --- |
| +15% XP | 300 points | +15% XP (trainer and pokemon) | 60 min | 3h: 900 · 5h: 1,500 · 10h: 3,000 |
| +15% Capture Boost | 500 points | +15% catch chance | 60 min | 3h: 1,500 · 5h: 2,500 · 10h: 5,000 |
| +15% Secret Lure | 1,000 points | +15% shiny chance | 60 min | 3h: 3,000 · 5h: 5,000 · 10h: 10,000 |

> Why points, and not "being in the chat"? Twitch only gives channel points to whoever is watching — and whoever is watching is who counts as a **viewer** of the live. Before, the Twitch bonus went to whoever was in the chat, and many people left only the popout chat open: the bonus went out, and the partner streamer's view didn't. Now the bonus comes with the view.

### Kick

On Kick, watching logged in earns you **10 points every 5 minutes** (subscribers get double). The rewards every official channel has:

| Reward | Cost | Effect | Each redeem | Packs (points) |
| --- | --- | --- | --- | --- |
| +15% XP | 300 points | +15% XP (trainer and pokemon) | 60 min | 3h: 900 · 5h: 1,500 · 10h: 3,000 |
| +15% Capture Boost | 500 points | +15% catch chance | 60 min | 3h: 1,500 · 5h: 2,500 · 10h: 5,000 |
| +15% Secret Lure | 1,000 points | +15% shiny chance | 60 min | 3h: 3,000 · 5h: 5,000 · 10h: 10,000 |

> The +15% catch and shiny bonuses **multiply** the Shop's boost — and each other: Capture Boost (×2) plus one live's gives **×2.3** on the catch chance, and with Twitch's and Kick's together, **×2.645**. The same goes for the Shiny Secret Lure. Each chance's cap still applies on top.

### Want to be an Official Streamer?

Your live joins the official list and starts paying a bonus to whoever watches: PokeIdle's rewards on your channel, on Twitch or on Kick. Reach out on Discord. Once you are on the list, there is **one step on your side**: authorize PokeIdle on your channel with the **Connect channel** button, on the platform's line on the panel, after linking your account. Until then the rewards are not live and your channel shows as **coming soon** on the list; afterwards, with the **points on** badge.

- **Twitch:** channel points only exist for Twitch **Affiliates and Partners** — that is what your channel needs to be. The old bonus's **/mod pokeidlebot** is no longer needed.

## Late Joiner Boost

Joining a server that has been running for months means arriving in the middle of a conversation: the veterans are hundreds of levels ahead, and their hunts are locked for whoever just got here. The **Late Joiner Boost** shortens that road, and only that: **XP ×10** (1000%) for your trainer **and** your pokemon, until your trainer reaches the **veterans' level**. Once there, it ends by itself.

> Today's target is **level 1,139**. You are level 13, and your price right now is **1,000 💎**.

### The target level: the veterans' median

- It is the middle level — the **median** — of players who played in the last **7 days** and have accounts older than **30 days**.
- **Median, not average**: the average would be pulled up by the few players at very high levels.
- **Veterans only**: the week's new accounts would pull the number down — whoever joins wants to catch up with the people already playing, not with the ones who joined alongside them.
- **Recalculated every day** at 00:00 Brasília time, in a single calculation for the whole server. Whoever joins a year from now sees that day's target, not a frozen number.
- With fewer than **20** active veterans there is no meaningful median, and the boost leaves the Shop until there is one.
- The target is **locked at purchase**: if the median rises tomorrow, your boost still ends at the level the screen promised.

### The price: proportional to the XP still missing

The whole road, from level 1 to the target, costs **1,000 💎**. If you have already covered part of it, you only pay for what is left — measured in XP:

```
price = 1000 × (target XP − your XP) ÷ target XP (rounded up; minimum 50)
```

- **In XP, not in levels**, because the curve is cubic (see Levels and XP): halfway there in levels (level 569 of 1,139) you have only **12%** of the XP. The last levels before the target are most of the playing time, and that time is what the boost saves.
- **Minimum 50 💎**: a small piece of the road still costs that much — the ×10 also applies to your pokemon, so it is never almost free near the target.
- **The full price does not grow over time**: reaching the veterans' level costs the same today and a year from now, even if that target is much higher.

What it costs with today's target (level 1,139):

| Your level | of the way in levels | of the way in XP | Price |
| --- | --- | --- | --- |
| 1 | 0% | 0% | 1,000 💎 |
| 284 | 25% | 1.5% | 985 💎 |
| 569 | 50% | 12% | 876 💎 |
| 854 | 75% | 42% | 580 💎 |
| 1,025 | 90% | 73% | 272 💎 |
| 1,138 | 99% | 99% | 50 💎 |

The card is in the Diamond Shop, in the **Bundles** section, and shows today's target (and how many active veterans the median came from), how much of the road you already have and **your** price. The number on the card is the one charged: if it **goes up** between the click and the purchase (you fainted and lost XP, or the day turned and the target changed), the purchase is refused and the card asks you to check again; if it **goes down** (you hunted while reading), you pay the lower one. And if you reach the target while the purchase is being processed, the diamonds come back.

### While it lasts

- **No timer**: it is not counted in days. It ends by itself when your trainer reaches the target, with a notice that you caught up with the veterans.
- It shows up on the trainer panel, right below your coins, and under **Active bonuses** in the Shop, as **Late Joiner ×10 → lv …**.
- It **multiplies** with everything that multiplies XP: XP Boost, Pokemon XP Boost, VIP, the guild ranking bonus, the Guild Boost, events, Twitch and Kick (see Levels and XP).
- **One at a time**: while it is on, the Shop does not sell another.
- **Fainting costs no XP**: in hunts, bosses and PvP, giving up a battle or leaving the arena — nothing takes trainer XP (see Fainting and healing).

### Why you lose no XP until you reach the target

The boost also gives ×10 to **pokemon** XP, but what switches it off is the **trainer's** level. If fainting took trainer XP — the 10% of the level, as it does without the boost —, you could stop right below the target and faint on purpose every now and then: the trainer would never get there, and the whole team would level at ×10 forever, from a boost that was sold as a race with a finish line.

Without the loss, your trainer **only moves forward** while the boost lasts, and it always ends at the level the screen promised. And for whoever is catching up, fainting while learning the tougher hunts does not set the progress back.

### Up to the target, and not one point past it

The kill that crosses the target gets the ×10 only up to the exact target XP; the rest of that same kill goes in at the normal multiplier — for the trainer and, in the same proportion, for the pokemon. With **30 XP** to go, a wild pokemon worth **8 XP** (no other bonuses) gives **35**, not 80: 3 of the 8 cover the missing 30 at ×10, and the other 5 go in at ×1.

> Nobody goes past the target with the boost — not even with every bonus stacked on a boss kill.

### Fair to those already there

- The target is the median: the **top half of the veterans stays ahead**, and the boost skips no ranking.
- It is only **sold** to players below today's target. Those already there still see the card, without the buy button: it stays in the Shop so everyone can follow the server's median.
- Reached the target and the median rose afterwards? The card comes back, and you pay **only the new stretch**, with the same proportional price.

## Stats, Quality and IV

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

## Score, Power and Calculator

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

## Potency (I to V)

**Potency** is the second axis separating two otherwise identical pokemon — the first is quality. It is a number from **1 to 5**, rolled **once, at capture**, that **never changes**: levelling up does not improve potency.

| Tier | Chance | Bonus |
| --- | --- | --- |
| P1 | 74.5% | — |
| P2 | 20.0% | +5% |
| P3 | 5.00% | +10% |
| P4 | 0.50% | +25% |
| P5 | 0.0050% | +100% |

The bonus multiplies **all six stats** and enters at the same point as quality.

> This is why a **low-level** pokemon can be worth a lot on the Community Market: anyone can grind levels, nobody can grind potency. A level 20 P4 is worth more than a level 80 P1 of the same species.

### Potency and shiny multiply

Shiny is **×3** on everything. A **shiny P5** is **×6** — 6 times a common pokemon of the same species and level.

### And a Legendary is ×4

Every **Legendary or Mythical** — the ones from the Mystic Arena — is **×4 on every stat**, the biggest multiplier in the game. It goes by species and multiplies with the other two: a **shiny P5** Legendary is **×24**. It has no score in the Calculator: the ×4 goes past the top of the ruler. The table of every combination, and the floor of what comes out of the Mystic Arena, are in Legendaries and Mythicals.

Open any species sheet in the **Pokedex** to see the power each potency would give that creature.

## Shiny

**1221 species** have a shiny form. It is only revealed on a **capture attempt** — with its own artwork (not a recolour) and a ✨ badge on the card.

### How rare it is

The chance is **the same for every species** — **1 in 24,000** per capture attempt. The shine is rolled when the ball is **thrown**, before anyone knows whether it closes; quality, IV and potency only roll if the capture succeeds. In a hunt, every wild looks common until the ball is thrown. In the **Outland** shiny doesn't roll: the variants there never come out shiny.

| Per capture attempt | With Secret Lure |
| --- | --- |
| 1 / 24.000 | 1 / 12.000 |

1,221 species with a shiny form.

The **Shiny Secret Lure**, from the Shop, **doubles** that chance while active (1 in 12,000). The Secret Lure from the Kick Bonus adds +15% on top, multiplying.

The same chance applies outside the hunt: a Mystery Egg can hatch shiny, and so can the legendary caught in the Mystic Arena. And the Shiny Egg — crafted at Professor Oak from fragments that drop from Unova onward — always hatches shiny.

### What the shine gives

- **×3 on every stat.** Only a Legendary (×4) beats it, and it stacks multiplicatively with potency.
- **Guaranteed high IV**: the roll is repeated until the six sum above **110** (the maximum is 192).
- **Worth 10× more** when sold to the NPC (see Market).
- **Raises the calculator score** — the ×3 on stats enters the same birth-strength formula (see Score, Power and Calculator).

> **Catching a shiny uses the same ball and the same per-throw chance as any other.** The shine is rolled on the throw — you cannot tell beforehand — and a shiny that breaks out of the ball leaves together with the body. So spend your best ball on every body; the per-species table is on the Pokedex sheet.

### Shiny evolution

A shiny **can evolve**, but not with the ordinary stone: it needs a **Shiny Stone** of the species **primary type**. A Shiny Abra needs the **PSYCHIC** stone and becomes a Shiny Kadabra; a Shiny Bulbasaur (GRASS/POISON) needs the **GRASS** one, because the primary type is what counts.

The stone comes from **10 Shiny Stone Fragments**, at the **Craft Shiny Stone** bench at **Professor Oak**. The fragment only drops in **Outland**, at 0.000500% per kill — around **200,000** kills per fragment. That is the Outland 1 rate — the other steps multiply it up to **×8** (see Combat). You pick the type when crafting, so the ten fragments never come out as the wrong type.

> **If the evolution has no shiny form in the game yet, the evolution is REFUSED.** That is deliberate: without the shiny art for the next stage, evolving would trade your rare pokemon for a normally coloured one — and that could not be undone. The **fragment** is tradeable on the Community Market; the **finished stone is not** — it stays with whoever crafted it.

## Legendaries and Mythicals

**Legendaries and Mythicals** are the strongest pokemon in the game: they are **×4 on every stat** — HP, Attack, Defense, Sp. Atk, Sp. Def and Speed. It is the biggest multiplier in the game, above shiny (×3) and top potency (P5, ×2).

### Who counts

Every Legendary and Mythical from Kanto to Paldea — Ultra Beasts count as legendaries. It goes by **species**, not by how you got it: every legendary on your account has the ×4, wherever it came from. An Orre copy of a legendary is legendary too; Outland variants are not. Each one's sheet in the Pokedex shows the **Legendary bonus ×4** plate (or **Mythical bonus**).

> **111 in the Mystic Arena draw.**
>  **Legendaries (88):** Articuno, Zapdos, Moltres, Mewtwo, Raikou, Entei, Suicune, Lugia, Ho-oh, Regirock, Regice, Registeel, Latias, Latios, Kyogre, Groudon, Rayquaza, Uxie, Mesprit, Azelf, Dialga, Palkia, Heatran, Regigigas, Giratina, Cresselia, Cobalion, Terrakion, Virizion, Tornadus, Thundurus, Reshiram, Zekrom, Landorus, Kyurem, Xerneas, Yveltal, Zygarde, Type: Null, Silvally, Tapu Koko, Tapu Lele, Tapu Bulu, Tapu Fini, Cosmog, Cosmoem, Solgaleo, Lunala, Nihilego, Buzzwole, Pheromosa, Xurkitree, Celesteela, Kartana, Guzzlord, Necrozma, Poipole, Naganadel, Stakataka, Blacephalon, Zacian, Zamazenta, Eternatus, Kubfu, Urshifu, Regieleki, Regidrago, Glastrier, Spectrier, Calyrex, Enamorus, Wo-Chien, Chien-Pao, Ting-Lu, Chi-Yu, Koraidon, Miraidon, Walking Wake, Iron Leaves, Okidogi, Munkidori, Fezandipiti, Ogerpon, Gouging Fire, Raging Bolt, Iron Boulder, Iron Crown, Terapagos.
>  **Mythicals (23):** Mew, Celebi, Jirachi, Deoxys, Phione, Manaphy, Darkrai, Shaymin, Arceus, Victini, Keldeo, Meloetta, Genesect, Diancie, Hoopa, Volcanion, Magearna, Marshadow, Zeraora, Meltan, Melmetal, Zarude, Pecharunt.

### The bonuses multiply

Potency, shiny and legendary **don't replace each other — they multiply**. The formula is always **potency × shiny × legendary**, the same on all six stats:

| Potency | Regular | Shiny | Legendary | Shiny legendary |
| --- | --- | --- | --- | --- |
| P1 | ×1 | ×3 | ×4 | ×12 |
| P2 | ×1.05 | ×3.15 | ×4.2 | ×12.6 |
| P3 | ×1.1 | ×3.3 | ×4.4 | ×13.2 |
| P4 | ×1.25 | ×3.75 | ×5 | ×15 |
| P5 | ×2 | ×6 | ×8 | ×24 |

A **shiny P5** legendary is **×24** (×2 from potency × 3 from shiny × 4 from legendary): 24 times the stats the same species would have with no bonus at all, at the same level, with the same quality and IVs.

### Where the ×4 counts

- **In every battle**: hunts, gyms, PvP, the Guild War and championships — level-capped arenas included, because the ×4 belongs to the pokemon, not to its level.
- In the **Power (⚔)** of the ranking and the sheet.
- In the **In battle** card of the Calculator.

### Where it doesn't go

- **Into the score.** The 0–10 ruler measures a birth *within* the species, and the ×4 goes past its top — so a legendary has no score. The Calculator "breaks" and shows **PRICELESS**, the pokemon sheet's plate shows **PRICELESS** with the **GLITCH** band, and the N= badge on cards turns into **GLITCH**.
- **In the Showdown and the Amateur Championship**: legendaries and mythicals are banned. The World Championship allows them.
- **In the Incubator**: no egg hatches a legendary or mythical.
- **In hunts**: no hunt has a legendary species. Bosses look like legendaries, but they are arena fights — they can't be caught and don't get the ×4.

### How to get one

Today, only in the Mystic Arena: the **Mystic Ticket** drops from Bosses and opens the arena with a random legendary or mythical, which fights at **your trainer level** and already with the ×4. Knock it down and you get **one ball** — and the catch chance is the same for all of them, from Articuno to Mewtwo.

You can also **buy and sell** them: on the Community Market a legendary has a **free pass** — it can be listed at any level and score, like shiny and P5.

### The floor: the same for everyone

Every legendary caught in the arena is born at **level 100** and with the **same floor**, whatever the species:

- **quality 1.00 or higher** (never in the Weak band) — it rerolls until it passes, so you get the natural ladder above the floor, not a pile of 1.00 exactly;
- **IV total 111 or higher** (out of 192), the same floor as a shiny; each IV from 1 to 32.

**Potency** has no floor: the wheel spins like on any catch, from P1 to P5.

| Potency | Chance in the arena | Legendary | Shiny legendary |
| --- | --- | --- | --- |
| P1 | 74.5% | ×4 | ×12 |
| P2 | 20.0% | ×4.2 | ×12.6 |
| P3 | 5.00% | ×4.4 | ×13.2 |
| P4 | 0.50% | ×5 | ×15 |
| P5 | 0.0050% | ×8 | ×24 |

In short: an arena legendary comes out with **at least ×4** on every stat. **Shiny** rolls at the game's full chance (1 / 24.000, doubled by the Shiny Secret Lure) — as long as the species has a shiny form.

> **Keep your legendary in the Collection.** **Auto Collection** already does it by default: the **Legendary/Mythical** rule comes on for every player. If you turn it off, remember that a legendary's score is hidden behind the GLITCH — the score rule never catches it. Outside the Collection, the legendary goes into the Market's **Sell entire Depot** and can be picked by the automatic Offering. The golden Collection button on the card sends it there in one tap.

## Pokedex

The **Pokedex** tracks what you have seen and caught. Open it from the main menu — unlike the Map, it is for browsing species, not picking a hunt.

### Nine generations

The **Generation** menu shows **All** (the default) or one generation of the National Dex (Gen 1–9); next to it sit the **Type** filter (one or more) and the shiny seen/caught one. The list shows only species that **already have an in-game sprite** — entries without published art stay hidden so the book does not promise hunts that do not exist yet.

- **???** — not encountered in a hunt yet.
- **Name visible, not caught** — seen or defeated, not captured.
- **Coloured card** — caught at least once.

After the nine generations, the same menu has **Outland** (the variants, #2001 to #2058), **Mega**, with the Mega Evolutions in the **#3000** range (see Mega Evolution), and **Gigantamax** — the bosses of the weekly Raid, which cannot be caught: their count is the ones you have already faced, outside "caught".

And **Forms**, with the **104** regional and alternate forms — the Alolan, Galarian, Hisuian and Paldean ones, and Rotom's, Castform's, Deoxys' and others. Every form is a **species of its own**: its own stats, types, moves, hunt and evolution, and a number that says whose form it is (Alolan Rattata is **#4019**, `4000 + 19`; Heat Rotom is **#8479**).

### Search

The search box ignores the active tab: type a name or number (#725 works) and the grid shows matches from any generation. The **seen/caught only** filter hides what you haven't found yet.

### Species sheet

Click a card for the full sheet — the **◀ ▶** arrows at the top (or the **← →** keys) flip from one species to the next:

- Base stats, types and animated sprite
- **Moves** — the table with power, type, category, cooldown and the level each one unlocks at (not shown on grid cards). On species reworked by the balance sheets, every move unlocks at level 1.
- Drops (the stones of its types, and each one's chance), catch rates per ball and shiny chance (when the species has a shiny form — **1221** in the catalogue today)
- **Level when caught** — the level it joins your team at (see Catching)
- **Where to find it** — when the hunt exists on the Map
- Its **evolution** and **Mega**, when they exist
- **NPC pays**, **XP per kill** and **Strong against / Weak against** (the types)
- **PvP range** — 🗡️ melee, 2🏹, 3🏹 or 4🏹, from the species' base stats; hovering the plate shows the math (on a phone, a tap). See Ranked PvP.
- Your numbers for the species — **defeated**, **caught**, **✨ seen** and **✨ caught** — and the **💬** button, which posts them to the open chat channel (once every 2 minutes)

At the top of the Pokedex, two buttons export the whole catalogue so you can ask an AI: **Copy the whole Pokedex to GPT** (the table of every species — base stats, moves and catch chance — copied, with ChatGPT opened in a new tab) and **Download Pokedex (.csv)** (a spreadsheet with one row per move, with the species' stats, the cooldown and the damage per second; one download per hour per internet connection).

On **every legendary in the Mystic Arena roll**, the sheet has the **Catching it with the Mystic Ticket** panel: where the ticket comes from (on the boss that drops the ticket, its chance; on the others, a win against the 3rd boss of each region, with the chance rising with the region — or the Market), the chance of the arena rolling **that** legendary, its level in the arena and the per-ball catch table — plus the **Go to Boss** button. A legendary not in the roll yet shows a notice saying so. See Mystic Ticket and Mystic Arena.

> The header count (*seen · caught · total*) uses the same visible catalogue as the grid — sprite-ready species only.

### Server shinies

The **✨** button, at the top of the Pokedex (next to the ×), opens the registry of **every shiny caught on the server**: who owns each one, with a name search, the **type** filter and the **for sale only** filter. Listed ones show the price and a **Buy** button right there, and yours show up marked. Next to it, the **P5** button opens the same list for top-potency Pokemon, with the same filters.

The type filter of both lists takes **one or more** types and shows **only those that have all of them**. With one, you see whoever has that type; with two, only those that have both — ICE and FIGHTING shows Crabominable (FIGHTING and ICE) and leaves out Snover (GRASS and ICE). With three or more, the list comes up empty: no Pokemon has three types.

### Top Catch

At the top of the Pokedex, click **Top Catch** to open the week's panel: the **species you caught with a ball this week**, with the time of each catch, the **clock to the reset** on Saturday, 11:59 PM (Brasília time), **your place** on the ladder, the prize tiers, **this week's podium** and **last week's champion**. In the launch week, the list is your whole Pokedex, which is what counts that week. The Pokedex itself never resets — the panel only shows the week's slice. The rules and the prize are in Rankings; there, the Top Catch tab has a button that brings you back to this panel.

## Evolution & stones

Evolving needs **two things at once**: the pokemon at the **level** the evolution demands, and **1 stone** of the right type in your backpack. Missing either, the button refuses and spends nothing.

### The level follows the capture-cap ladder

In Kanto and Johto an evolution asks for its usual level. When the **target** is from Hoenn onwards — or the link asked for more than Lv 100 —, it asks for the **target's cap**, the same ladder a caught pokemon is born on (see Catching): **40** to become the middle of a three-stage chain (or the first of a two-stage one) and **100** to become the last. Treecko becomes Grovyle at **Lv 40** and Sceptile at **Lv 100**; Tirtouga becomes Carracosta at **Lv 100**.

That is what makes it add up: the pokemon arrives at its species cap, is trained and evolves at the next cap — with no step of hundreds of levels in the middle. The species sheet in the Pokedex shows the number for each link.

> **Eevee is the hand-picked exception:** it evolves at **Lv 80** into **any** of its eight targets — Vaporeon, Jolteon, Flareon, Espeon, Umbreon, Leafeon, Glaceon and Sylveon —, the level at which Vaporeon, Jolteon and Flareon show up in the Kanto hunts. Leafeon, Glaceon and Sylveon come from higher regions, but they unlock at the same step as their siblings. The Pokedex shows the same number.

### Babies

Some pokemon come from a generation **later** than their own evolution: Mime Jr. is from Sinnoh and Mr. Mime is from Kanto. The baby's hunt can sit far above the target's (Mime Jr. shows up at Lv 1,000; Mr. Mime, at 80), but the catch does not arrive ready: above Lv 100 it is born at the species **cap** (20 or 40) and is trained up to the evolution level, like any other.

There are 15 such cases: Pichu, Cleffa, Igglybuff, Tyrogue, Smoochum, Elekid, Magby, Azurill, Wynaut, Budew, Chingling, Mime Jr., Munchlax, Mantyke — plus the Hoenn clones.

### Outland variants do not evolve

Pokemon exclusive to **Outland** — Ancient Pupitar, Ancient Dragonair, Furious Magikarp and the whole **#2001+** catalogue — **do not evolve**, even when the name looks like a chain: an **Ancient Pupitar never becomes Ancient Tyranitar** with any stone. They are **separate species**; each one is caught ready-made in the hunt. The server refuses with *“Outland variants do not evolve”*.

> This is different from **national species**: Pupitar still becomes Tyranitar, Magikarp still becomes Gyarados — only the required level changes when the target lives in a high hunt. The lock applies to the Outland variant only.

### Which stone

The stone follows the pokemon's **primary type**. Machop is FIGHTING and asks for **Punch Stone**; Abra is PSYCHIC and asks for **Enigma Stone**.

- **Chains that branch** ask for the stone of what it WILL BECOME: Eevee is NORMAL, but for Vaporeon it asks Water Stone and for Flareon, Fire Stone.
- **The NORMAL/FLYING birds** are the hand-written exception: Pidgey, Spearow, Hoothoot, Taillow, Swablu, Starly, Rufflet, Fletchling and Pikipek ask for **Feather Stone**, not Sun Stone.
- **Shiny** does not use the plain stone: it needs the **Shiny Stone** of the same type (see the Shiny chapter).

| Type | Stone | Signature item |
| --- | --- | --- |
| **NORMAL** | Sun Stone | Rubber Ball |
| **FIRE** | Fire Stone | Essence of Fire |
| **WATER** | Water Stone | Water Gem |
| **GRASS** | Leaf Stone | Seed |
| **ELECTRIC** | Thunder Stone | Screw |
| **ICE** | Ice Stone | Snowball |
| **FIGHTING** | Punch Stone | Band Aid |
| **POISON** | Venom Stone | Bottles of Poison |
| **GROUND** | Earth Stone | Earth Ball |
| **FLYING** | Feather Stone | — |
| **PSYCHIC** | Enigma Stone | Enchanted Gem |
| **BUG** | Cocoon Stone | Bug Gosme |
| **ROCK** | Rock Stone | Small Stone |
| **GHOST** | Darkness Stone | Ghost Essence |
| **DRAGON** | Ancient Stone | Dragon Scale |
| **DARK** | Darkness Stone | Dark Gem |
| **STEEL** | Metal Stone | Piece of Steel |
| **FAIRY** | Heart Stone | Rubber Ball |

### Where stones drop from

Wild pokemon only drop **evolution stones**, by the same rule across the whole game: **the stone of each of its types**. Charmander drops Fire Stone; Pidgey (NORMAL/FLYING), Sun Stone and Feather Stone. Stones of other types never drop, and GHOST and DARK share the Darkness Stone (a Sableye drops just one). The chance depends on the pokemon's **stage** in its chain — an Outland variant counts as a final form:

| Stage | Example | Chance of each stone |
| --- | --- | --- |
| 1st evolution | Charmander | 0.2% |
| 2nd evolution | Charmeleon | 0.35% |
| 3rd evolution, or one that doesn't evolve | Charizard · Tauros | 0.5% |

> Until Oct 15, 2026 wild pokemon also dropped some 270 loot items (Straw, Band Aid, Ski Poles…) that were only good for selling to the NPC. They left the game: what the loot paid became a bonus on the **gold of each kill**, and what was already in the bag became Coins.

To **choose** the stone instead of waiting for the drop, bring depot pokemon to the Offering: each one paints its type's slice on a wheel.

## Pokemon Offering

The Offering trades depot pokemon for an **evolution stone**. It lives in the backpack: **Backpack → Offering**. You load a wheel with up to **5 pokemon**, spin, and get **one stone**, drawn among the types you put in. The offered pokemon are **gone for good**.

### How it works, in three steps

1. **Fill the slots.** Each empty slot is a **+** that opens the picker, the same one the Market uses: cards with the P·IV·Q·N row, name search, type filter, minimum IV and sorting. It stays open while you pick, and a chosen card shows its slot number. Click it again to take it out.
2. **Check the wheel.** Each slot repeats the pokemon's sprite, name and badges, and the circle shows the slices and the chance of a stone before you spin. Next to it, the **What can come out** list gives each stone's slice and how many you already have; hovering a slot lights up the slices that pokemon painted.
3. **Click Offer and confirm.** The dialog says how many pokemon are going and how many of them are shiny. The wheel spins and stops on the drawn slice.

In a hurry? The **⚡ Quick Offering** button, next to Offer, skips the wheel animation and shows the result right away — same draw, same confirmation.

### What each pokemon is worth

**One pokemon is worth one slot: 20% of the circle**, whether it has one type or two. The slot goes to the stone of its type (the same as the stone table). A dual-type splits the slot in half: the second type buys **variety**, not an edge.

| On the wheel | Paints |
| --- | --- |
| Charmander (FIRE) | 20% Fire Stone |
| Charizard (FIRE/FLYING) | 10% Fire Stone + 10% Feather Stone |
| Gengar (GHOST/POISON) | 10% Darkness Stone + 10% Venom Stone |

> The split follows the **stones**, not the types. DARK and GHOST share the same Darkness Stone, so a regular DARK/GHOST puts its **whole** slot on it.

### The chance of a stone

It is **pokemon ÷ 5**. With all 5 slots filled, the stone is guaranteed. With fewer, the rest of the circle becomes the **Nothing** slice, drawn before you spin: with two pokemon, a 40% chance of a stone and 60% Nothing.

### Shiny pays in Shiny Stone

A shiny on the wheel does not paint the regular stone: it paints the **Shiny Stone of its type**. A Shiny Dratini (DRAGON) can only give a Dragon Shiny Stone; a Shiny Bulbasaur (GRASS/POISON) opens Grass **or** Poison Shiny Stone. The shiny slice has a gold outline.

- **5 shinies of the same type** fill the wheel and guarantee the Shiny Stone.
- It is the only source of Shiny Stones that does not go through fragments (see Shiny).
- Shiny Stones do not merge like the regular ones: a DARK/GHOST shiny paints **two** slices, Dark and Ghost.

### Who cannot go in

The picker only lists the **depot**: team members do not even show up. Also left out:

- anyone holding an **Exp. Share** or sitting in the **XP Share post** of a House — the picker says how many it hid;
- anyone **listed** on the Community Market. If it was already in a slot when it got listed, the slot empties and the spin goes on with the rest;
- the account's **last pokemon**.

> **The Collection does not block the Offering.** It guards against NPC sales at the Market, and here every pokemon is your own choice, card in view. Collection pokemon show a **★**, and the **Location** filter splits Depot and Collection.

### Auto Select

The button next to **Empty it** fills the empty slots with the **lowest-rated** depot pokemon (the N= from the calculator).

- It only takes ratings **below the Minimum score of your Auto Collection** (Market → Sell; the default is 3.5). With three bad ones and one great one in the depot, the fourth slot stays empty.
- **It never takes:** shiny, P5, Collection, profile showcase, or pokemon with a held item, refine or TM, the starter, nor your Ranked PvP, Championship and Showdown teams — a team picked for a tournament stays protected until midnight on fight day.
- On a rating tie: lower level first, then the most recent catch.
- In the picker, the same button chooses **only among what the list shows**: search "charmander" (or filter FIRE) and click to build a Fire Stone-only wheel.
- It only fills the slots. The spin still asks for your confirmation.

### Offer the whole Depot

To clear the Depot in one go, the **Offer the whole Depot** button spins **in groups of 5** with the same filter as Auto Select: only what is below your Auto Collection N score, worst first, and never a shiny, a P5, the Collection, the showcase, your teams, anything holding an item, refined or with a TM, nor the starter.

- The confirmation says how many pokemon go, in how many spins, and **who was left out and why**.
- The last spin may have fewer than 5 slots — the confirmation shows the chance of it giving nothing, the same as any incomplete wheel.
- It does up to **50 spins** per click; whatever is left waits for the next one, and the screen says how many.
- The batch **does not pick the type**: it takes what comes. Whoever wants a specific stone still fills the slots by hand — that is what makes hand-picking worth it.

> The draw happens on the **server**. The wheel spinning on screen only shows the result that already came out.

## Sacrifice

The Sacrifice trades pokemon with **score 3.5+** for an **XP boost**. It lives in the backpack, next to the Collection: **Backpack → Sacrifice**. Each sacrificed pokemon becomes **points** on a five-level bar, and from Level 1 on you **redeem** the Sacrifice Boost: **+20% XP for trainer and pokemon**. Sacrificed pokemon are **gone for good**.

It is where the **middling** pokemon go: too good for the NPC sale and the Offering, and with no buyer on the Community Market (the showcase floor is also 3.5).

### How it works, in three steps

1. **Choose who goes to the altar.** The grid shows the Depot and Collection pokemon with score 3.5+, each with the points it is worth. Tap to pick; **Select from Depot** takes the lowest scores (up to 50 at a time, and only until the bar is full). The bar shows, striped, how far the selection takes it.
2. **Sacrifice and confirm.** The dialog says how many are going, how many points come in, and whether there is a shiny, a P4/P5 or a Collection pokemon among them — and how many points go past the top of the bar and are lost, if any.
3. **Redeem whenever you want.** Redeem pays the boost of the **highest level reached**, and the bar goes back to zero.

### What each pokemon is worth

The score (N=) decides, by the lower tenth: a 3.59 is worth the same as a 3.5. From 7.0 up, one pokemon fills the whole bar on its own.

| Score | Points | Score | Points |
| --- | --- | --- | --- |
| 3.5 | 10 | 4.5 | 60 |
| 3.6 | 12 | 5.0 | 110 |
| 3.7 | 14 | 5.5 | 190 |
| 3.8 | 17 | 6.0 | 320 |
| 3.9 | 20 | 6.5 | 560 |
| 4.0 | 25 | 7.0+ | 1,000 |

> The table follows the **price**, not the rarity: in the range that clogs the Market (3.5 to 4.0) the price barely changes, and the points rise slowly. Shinies land between 5 and 7 — the altar is not the smartest place for a shiny.

### The bar levels

| Level | Points | Boost | Hours per 100 points |
| --- | --- | --- | --- |
| 1 | 50 | 8 h | 16 h |
| 2 | 125 | 1 day | 19.2 h |
| 3 | 250 | 2 days and 12 h | 24 h |
| 4 | 500 | 6 days | 28.8 h |
| 5 | 1,000 | 14 days | 33.6 h |

**Waiting pays off.** Redeeming pays only the highest level reached and resets the bar — the points above it are lost. But each level gives more hours per point: with 1,000 points, 20 Level 1 redeems give 6 days and 16 h; one Level 5 redeem gives 14 days.

### The boost

- **+20% XP**, for trainer and pokemon, **multiplying** with every other bonus (VIP, XP Boost, guild, streams). See Levels and XP.
- With a boost running, redeeming **adds** to its time, like the Shop, up to **30 days** stored. A redeem that would go past that is refused, and the bar stays as it is.
- The clock runs even while you are offline, like the Shop boosts.
- It shows on your trainer card and on the XP bonus strip of the Session.

### Who does not go to the altar

- the team and the one fighting; whoever holds an **Exp. Share** or sits on a House post;
- your Ranked PvP, Championship and Showdown teams;
- legendaries — their score does not carry the ×4 and does not measure their strength;
- your **starter pokemon** — it stays with you, as in the NPC sale;
- whoever is listed on the Market, and the account's last pokemon.

> **The Collection does not block the Sacrifice**, just as it does not block the Offering: each pokemon is your own choice, with the **★** on its card. Only **Select from Depot** leaves out the Collection, your profile's Pokemon showcase, shinies, P5 and pokemon with a TM, refining or a held item — the Offering's Auto Select filter.

> Points are counted on the **server**, from each pokemon's stored score. With the bar full, the altar refuses to take more — redeem first.

## Settings and display modes

The **gear**, among the trainer panel's buttons, opens the **Settings**. Each option is a switch that applies **to this browser only** (it is stored on the device, not on the account), and none of them changes what hunting yields: the server hunts, catches and pays the same with any combination. The options sit in four tabs — **Audio**, **Interaction**, **HUD** and **Performance** — and the **?** next to each one explains what it does. The fifth tab, **Support**, opens a ticket with the team without leaving the game.

### To spend less

- **Battery Saver** — turns the scene off entirely: no map, no pokemon, no animation. In place of the stage there is a panel with what you follow in an idle game — XP, Coins, kills and catches per hour, session time and the catch history (which you can sort by Calculator Score, by IV — the total or a single stat —, by potency, quality or level; the best score of the session gets the trophy). Hunting goes on in the server and you stay online. In a hunt, the area plate opens the species sheet in the Pokedex; outside one, the Map to pick another hunt. The scene's exit buttons are on the panel too: **Go to the Pokemon Center** and **Give Up** in a hunt, **Heal team** at the Center and, in a boss arena, **Leave arena** — in the header and next to the battery (the paid entry does not come back). **Turn the scene on** goes back to normal. Made for phones and weak PCs. The panel also has the **floating mini-window**: just the numbers, on top of other apps, to follow the hunt with the game minimised. And the **battery**, next to the Escape Rope during a hunt, turns Battery Saver on in one tap, without opening the Settings. Below the panel sits the **vault** — Items, Depot and Collection. On the two Pokemon tabs you can search by name or nickname, switch on **Shiny** and, under the **funnel**, set a minimum potency, a minimum quality and a minimum IV for each stat; "Sort by" puts the number you sorted by on each card (score, IV, quality or potency). The **button** on a card sends that Pokemon to the Collection (it shows the Collection icon) or back to the Depot (it shows the Depot box), and the foot of the Depot has the Market's **Sell entire Depot** — with a filter on, the **(Filtered)** one, which sells only what the grid shows.
- **Keep screen on** (phone) — stops the screen from turning off by itself with the game open: a dark screen suspends the page and takes you out of the world. It spends screen battery, so turn it on together with Battery Saver and lower the brightness. Works in Chrome and Samsung Internet on Android and in Safari on iPhone (iOS 16.4 or newer); in other browsers the option shows locked, saying why.
- **Optimized mode** — keeps the scene, but without move animations and damage numbers. Helps on weaker PCs.
- **ULTRA Battery Saver** — the step above Battery Saver: the whole game leaves the screen and only a box on a black background remains, with the session's XP, Gold, rare drops and shinies seen and caught, in text. No scene, no chat, no menus and no animation — for very weak PCs. The hunt goes on and you stay online; to leave, use the box's own **Back to the game** button.

### Screen and interface

- **Immersive mode** — hides panels and HUD: just the battle in full screen, like an animated wallpaper. To leave, use the button in the **top-right corner**. With Battery Saver on as well, what shows is the Battery Saver panel, with the same exit button. In a hunt and in the boss arena there is a **shortcut** next to the battery, with the same art as the exit button: one tap and the battle goes full screen.
- **Night mode** — dark theme across the whole site.
- **Interface size** — the same as zooming the browser out (Ctrl −), except the game redoes the math by itself when the window changes size: on automatic, a short window shrinks the game so the panels fit without scrolling. 100% turns it off.
- **Moves panel** — shows the active pokemon's moves next to the battle, with each one's cooldown. Information only: it does not change the automatic combat.
- **Mobile layout** — the scene in full screen, with panels and chat in a drawer at the bottom. The option shows on touch devices (or with the layout already on); turn it off to see the desktop layout.
- **Scenery transparency** — the wall, column or roof that covers your pokemon, your trainer or a wild one turns see-through, so nobody disappears behind the scenery. Off, the scenery covers whoever walks behind it. The roof that vanishes when you step under it does not change.

### Sound

- **Shiny sound**, **Catch sound** and **Rare boss drop sound** — they play when **you** catch a shiny, catch a pokemon or get a rare drop from a boss (TM piece, Mega Stone fragment, Mystic Ticket or Safari Ticket). Only in your browser: nobody else hears them.
- The **Shiny sound** is for shinies only: it also plays when a **Shiny Egg** hatches, and for nothing else. The **/resgatar** prize, the big Pass step, buying VIP and the Shiny Egg crafted at Professor Oak play the **rewards sound**, which has no switch.
- **Private message sound** — plays when a message from a friend or from Trade arrives that you haven't seen yet. With that person's conversation open on screen, it stays silent.

### Pocket Mode

During a hunt, the icon next to the **Escape Rope** and **Go to the Pokemon Center** opens the **Pocket window**: the scene and the session counters (XP, gold, kills and catches per hour, shinies seen and caught). In Chrome and Edge it stays always on top, so you can follow the hunt with the game minimized; in other browsers it becomes a card you drag around the screen. On Android, the scene can carry on in picture-in-picture when you press Home. To bring the game back, close the window or click the icon again.

### Windows

- Every window opened from **inside another** (a pokemon's sheet opened from the Depot, a profile opened from the ranking…) gets the **‹** next to the ×: it goes back to the previous window, on the same tab, with the filters and scroll where you left them.
- Clicking **outside** a window closes it. Releasing the mouse outside it — while selecting text to copy, for example — does **not**.
- Confirmations (evolving, Mega, refining, Market, Shop, guild, House…) show the scene: the pokemon on stage, the stone or the coin, the requirements with ✓/✗ and the price with your balance before and after.

### What's new

The **!**, next to the language flags (on a phone, in the **Menu** drawer), opens **What's new in PokeIdle**. After an update it opens by itself, once, the next time you log in; the arrows go back to earlier editions.

## Chat, friends and Trade

Chat lives in the right-hand column, and sending messages requires trainer **level 10**. There are **four channels**, each with its own subject — the four buttons (2×2) above the conversation are always in view, each with its count of new messages:

| Channel | What for |
| --- | --- |
| **World** | general talk with everyone — and where the game's notices show up (shiny caught, legendary, war result) |
| **Trade** | buying, selling and the Market's listings |
| **Help** | questions about the game — the community and the 🎓 tutors answer |
| **Guild** | your guild only |

The chat is **a single room**, in Portuguese, for everyone. The interface language translates the screens but does not change the room: if you play in English or Spanish you chat in the same room, and the game announcements there are in Portuguese.

### The pace

One message every **30 seconds** in the open channels (World, Trade and Help), across the three. In the **guild** chat and in private messages (friends and Trade), one every **5 seconds**. The wait belongs to the account: reloading the page or reconnecting does not reset it.

### Swearing

The chat blocks **heavy** content — racism, prejudice, hate speech, explicit sexual insults — on all four channels and in direct messages: the message doesn't go out, and you see **"You can't send offensive language to the chat!"**. Everyday swearing goes through. Names are stricter: the nickname, the guild name and a pokemon's nickname accept **no** swearing at all (see Shop and Guilds).

### Links

**No text another player reads carries a link** — the four channels, private messages, the Trade chat, the friend-request note, the guild poster and pokemon nicknames. A message with an address is not sent, and a notice says links cannot be shared in the game. Only the team can post links, and theirs arrive clickable.

### Mention, reply and pin

- **Mention by name:** type **@** right before the nick — `@ash hi` or `heyyy @ash` — and the name turns into a tag. For the person mentioned, the whole line lights up: that is how a reply does not get lost when the chat moves fast.
- **Reply:** the little arrow next to a message starts your line with the **@nick** of whoever you are answering. On a loudspeaker listing it tags the seller.
- **Pinned message:** admins and moderators pin a notice to the **top of the channel**, above the conversation. In the **Guild** chat, the **owner** or a **co-owner** pins — and both can also **delete** messages there (click the nick of whoever wrote it). You can collapse it and open it again.
- **Click someone's nick** to **View profile**, **Add friend** or **ignore**. Whoever you ignore (or **block** on their profile) disappears from your chat and **can't message you in Trade** — nor can you message them; the ignored list undoes it. The list is saved to your account and works on any device.

### Who is who

The game staff (admin, moderator and helper) carries a **purple shield** right after the time, and the role shows in the **nick colour**. A **VIP** nick is light blue, with a glow. The **guild TAG** comes before the nick, in the colour the owner picked (see Guilds).

### Market listings in chat

In the Community Market, the **📢 Announce in global chat** button sends ONE of your listings to the **World** and **Trade** channels, with a link straight to it. It costs **10,000,000 Coins**, and the account waits **30 minutes** before the next one — the wait belongs to the account, not to the listing.

Don't want to see listings? The little arrow next to the emoji button opens the chat options: **Hide community listings** removes loudspeaker listings from your World (they stay in Trade). It only applies to this browser.

### Commands

Type them in chat to get an answer only you see — it is not posted for anyone.

- **/site** — the X4 hunts website made by the community.
- **/ticket** — the Discord invite and the support room, where bugs are reported (there are diamond rewards for bug bounties and vulnerabilities).
- **/hunt**, **/xp**, **/pokedex** and **/guia** — each opens a section of the pokeidleguide.io website: the hunts, the XP calculator, the Pokedex and the game guides.
- **/ideia** — where to send a suggestion for the game, on the same website: the game belongs to the community, and the approved suggestions get implemented.
- **/mercado** — how the Market is doing, on the same website.
- **/resgatar <code>** — redeems the code of a Discord prize (invites and the IDLE Tag, see Earn diamonds). Just **/resgatar** shows the invite ladder.

### Friends List

The **Friends** button, in your portrait column, opens the list — it also requires level 10. It holds **300 friends**.

- **Adding** is a search: type 3 or more letters of the nick and see the trainers, with **View profile** before you ask. The request waits in the other side's **Pending** tab.
- Clicking **Add friend** opens the request box: you can send a **note** of up to 100 characters, or tap a quick reply. The other player reads it in **Pending**, by clicking the nick, before accepting or declining. If they accept, the note becomes the **first message** of your chat — and accepting from the card opens the chat right away. The note goes through the same word filter as the chat.
- The requests you sent show up under the search as **pending**, each with a **Cancel** button: someone who stopped playing never answers, and cancelling removes the request from your list and from theirs. You can ask again later.
- The list order: first whoever has an **unread** message, then whoever talked to you this week, then who is **online**, and the rest by **last seen** ("seen 3h ago").
- **Remove friends**, below Friends and Pending, opens the list with a checkbox on each friend: tick who goes — the **Away 7+ days** shortcut ticks at once everyone who hasn’t played for 7 days or more (the "seen … ago" in red) — and confirm with **Remove N friends**. Nobody is notified, and the conversations are kept for the same 7 days.
- Conversations are kept for **7 days**. Your messages carry two ticks: **dark grey** = sent, **light blue** = read.
- In the chat you can **attach a pokemon** (your friend opens its sheet), **send Coins** and challenge them to a Friendly PvP. View profile opens your friend's sheet on top of the chat; closing it brings you back.
- Your **guild** chat shows up there too, kept for the same 7 days.

> **Sending Coins** burns **15%** of the amount: your friend gets the rest, and the burned part goes to no one. The minimum is **1,000 Coins** per transfer. It is the same fee as the Market in Gold, on purpose — both ways of moving gold cost the same (see All fees).

### Trade: negotiating with the seller

Every Community Market listing has a **Send DM** button: it opens a chat with the seller, tied to that listing. Negotiations live in the Friends List itself, in **Trade** mode, in two tabs — **My Offers** (sellers you contacted) and **My Products** (buyers who contacted you).

- It is for **agreeing**. The purchase is still made in the Market, through the listing, with the usual price lock and fee.
- The chat disappears when the listing is sold or withdrawn.
- The **X** on each conversation in the list **deletes it from your list** (two clicks: the first asks, the second confirms). It only goes away for you: the other player keeps the conversation and, if they write again, it comes back to your list with just the new messages.
- Each buyer keeps up to **50** negotiations open at the same time. Deleting a conversation from your list does not free a slot: it stays open on the other side until the listing leaves the Market.

> Selling an account or a pokemon **outside** the Community Market (PIX, another website, "send me the pokemon and I'll pay you") is **forbidden** and can get you **banned**. The game has no way to protect anyone in an external trade: whoever gets scammed there has nowhere to turn.

### One session per account

The account plays in **one place at a time**. Opening the game on another device or tab **pauses** the old session, which shows "Account opened elsewhere" and a **Play here** button — it brings the game back and pauses the other one. Nothing is lost: the hunt and your progress carry on in whichever session is playing.

# Fighting and catching

## Combat

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

## Types: strengths and weaknesses

Effectiveness is **multiplicative across both** defender types. Water against Rock/Ground is ×2 × ×2 = **×4**.

```
effectiveness = chart[attacker][type1] × chart[attacker][type2]
```

### On the hunt the advantage is 1.5× stronger

This is the most game-specific mechanic here, and it cuts **both ways**: hitting the right type pays much more, and hitting the wrong one hurts much more.

| Normal | On the hunt |
| --- | --- |
| ×0 | ×0 |
| ×0,25 | ×0,167 |
| ×0,5 | ×0,333 |
| ×1 | ×1 |
| ×2 | ×2,5 |
| ×4 | ×5,5 |

> Immunity (×0) and neutral (×1) do **not** change. Fire against Water becomes **×0.33** — which is literally why a Charmander cannot handle a Magikarp: with ×5 HP it simply will not die.

### The full chart

Row = **move** type. Column = **defender** type. An empty cell is neutral (×1). Hover to see the hunt-amplified value.

| Move ↓ | NOR | FIR | WAT | GRA | ELE | ICE | FIG | POI | GRO | FLY | PSY | BUG | ROC | GHO | DRA | DAR | STE | FAI |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| NOR |  |  |  |  |  |  |  |  |  |  |  |  | 0,5 | 0 |  |  | 0,5 |  |
| FIR |  | 0,5 | 0,5 | 2 |  | 2 |  |  |  |  |  | 2 | 0,5 |  | 0,5 |  | 2 |  |
| WAT |  | 2 | 0,5 | 0,5 |  |  |  |  | 2 |  |  |  | 2 |  | 0,5 |  |  |  |
| GRA |  | 0,5 | 2 | 0,5 |  |  |  | 0,5 | 2 | 0,5 |  | 0,5 | 2 |  | 0,5 |  | 0,5 |  |
| ELE |  |  | 2 | 0,5 | 0,5 |  |  |  | 0 | 2 |  |  |  |  | 0,5 |  |  |  |
| ICE |  | 0,5 | 0,5 | 2 |  | 0,5 |  |  | 2 | 2 |  |  |  |  | 2 |  | 0,5 |  |
| FIG | 2 |  |  |  |  | 2 |  | 0,5 |  | 0,5 | 0,5 | 0,5 | 2 | 0 |  | 2 | 2 | 0,5 |
| POI |  |  |  | 2 |  |  |  | 0,5 | 0,5 |  |  |  | 0,5 | 0,5 |  |  | 0 | 2 |
| GRO |  | 2 |  | 0,5 | 2 |  |  | 2 |  | 0 |  | 0,5 | 2 |  |  |  | 2 |  |
| FLY |  |  |  | 2 | 0,5 |  | 2 |  |  |  |  | 2 | 0,5 |  |  |  | 0,5 |  |
| PSY |  |  |  |  |  |  | 2 | 2 |  |  | 0,5 |  |  |  |  | 0 | 0,5 |  |
| BUG |  | 0,5 |  | 2 |  |  | 0,5 | 0,5 |  | 0,5 | 2 |  |  | 0,5 |  | 2 | 0,5 | 0,5 |
| ROC |  | 2 |  |  |  | 2 | 0,5 |  | 0,5 | 2 |  | 2 |  |  |  |  | 0,5 |  |
| GHO | 0 |  |  |  |  |  |  |  |  |  | 2 |  |  | 2 |  | 0,5 |  |  |
| DRA |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 2 |  | 0,5 | 0 |
| DAR |  |  |  |  |  |  | 0,5 |  |  |  | 2 |  |  | 2 |  | 0,5 |  | 0,5 |
| STE |  | 0,5 | 0,5 |  | 0,5 | 2 |  |  |  |  |  |  | 2 |  |  |  | 0,5 | 2 |
| FAI |  | 0,5 |  |  |  |  | 2 | 0,5 |  |  |  |  |  |  | 2 | 2 | 0,5 |  |

## Seasonal Days: the type of the day

Every day at **18:00 (6 PM) Brasília time**, one of the **18 types** is drawn — and in **Map hunts**, every Pokemon of that type gets **2× stronger**: double **attack**, double **defense** and double **HP**. It is a free draw: a type can repeat the next day, and another can take a while to come back.

The icon of the day's type sits in the bottom-right corner of the hunt and of the Pokemon Center, next to the magnifiers (on mobile, under the **C**). Tap it to see the day, its phrase and how long until the next type.

### It applies to everyone in the hunt

To **your** Pokemon and to the **wild** ones: on a Rainy Day your Blastoise hits twice as hard — and the wild Magikarp also takes more hits and hits harder. Dual types count if **either** type is the one of the day: a Gyarados is WATER and FLYING, so it counts on the Rainy Day and on the Windy Day.

### How the 2× enters the math

Double attack is double the damage the Pokemon deals. Double defense is half of what it takes — and double HP, with the same move coming in, means lasting twice as many hits, which is half again. That is why the day changes the damage of every move:

| Attacker | Defender | Move damage |
| --- | --- | --- |
| of the day's type | of another type | **×2** |
| of another type | of the day's type | **×¼** |
| of the day's type | of the day's type | **×½** |
| of another type | of another type | **×1** |

> A move that used to hit still takes at least **1** HP, and type-chart immunity (×0) stays zero. Move **speed** does not change: it comes from the Speed IV and the species.

### Where it does not apply

Only in Map hunts (the Outland included). Left out: PvP, Guild War, Championship, Showdown, Bosses, Gigantamax Raid, Safari, Mystic Arena and Gyms.

### The 18 types and their days

| Type | The day |
| --- | --- |
| NORMAL | Clear Sky Day |
| FIRE | Scorching Day |
| WATER | Rainy Day |
| GRASS | Blooming Day |
| ELECTRIC | Thunderstorm Day |
| ICE | Blizzard Day |
| FIGHTING | Training Day |
| POISON | Toxic Day |
| GROUND | Earthquake Day |
| FLYING | Windy Day |
| PSYCHIC | Telepathic Day |
| BUG | Swarm Day |
| ROCK | Rockslide Day |
| GHOST | Haunted Day |
| DRAGON | Dragon Day |
| DARK | Endless Night |
| STEEL | Forge Day |
| FAIRY | Enchanted Day |

## Catching

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

## Fainting and healing

### When ONE pokemon falls

1. If the **Revive** automation is on and you own the item, it gets up — with **10% HP** on a regular Revive and fully on a Max Revive (and the potion automation tops it off right after, if enabled).
2. Otherwise, the **next team member still standing** steps in automatically.

### When the WHOLE TEAM falls

The hunt is suspended and you appear in the **Pokemon Center** square — a shared area, with other players walking around (WASD to move). **Nurse Joy** heals the whole team for free, as many times as needed. Healing restores HP but does **not** reset move cooldowns (see Combat).

**Healing does not take you out.** Leaving means picking another area on the Map — the hunt you were in is remembered.

> **Fainting against wilds costs 10% of your current level's trainer XP** (with the Late Joiner Boost on it costs nothing — neither fainting nor giving up a battle). The extra cost is time: the trip back, the heal and the walk out again. Ranked PvP is different: losing costs **no** XP — what you lose there is **PR**.

### Closing the tab or losing connection mid-fight

It does not knock your team down. The server holds you for **90 seconds**: come back within that time and you carry on exactly where you were, in the same hunt and with the team as it was. After that, the hunt stays saved and the team stays as it was, standing — on your next login you enter the Pokemon Center, with no knockout and no XP lost.

The exception is the **paid** arenas: in a **boss** fight or the **Mystic Arena**, if you do not come back within the 90 seconds the fight is lost — and the entry is not refunded.

To leave cleanly there is the **Go to the Pokemon Center** button at the corner of the stage. It locks for **3 seconds** on every point of damage traded.

### The items

- **Revive** — brings a fainted pokemon back at **10%** HP: it gets the pokemon off the ground, and a potion refills the bar afterwards. The **Max Revive** brings it back at full HP.
- **Potions** — the Market ones heal a **fixed** amount of HP, from the cheapest to the priciest; the **Golden Potion** is the only one that heals a **percentage** of max HP, which is why it keeps up with a high-level pokemon.

| Item | Effect | Price |
| --- | --- | --- |
| Small Potion | +60 HP | 50 gold |
| Great Potion | +150 HP | 150 gold |
| Ultra Potion | +400 HP | 400 gold |
| Hyper Potion | +1,000 HP | 800 gold |
| Ultimate Potion | +3,000 HP | 1,500 gold |
| Golden Potion | heals 50% of max HP | 2,500 gold |
| Revive | revives with 10% HP | 600 gold |
| Max Revive | revives with 100% HP | 5,000 gold |

Potions and revives are bought at the Market, unlimited and at a fixed price.

### Escape Rope

Leaving a hunt through the **Go to the Pokemon Center** button needs **3 seconds** without trading damage — the lock exists so nobody vanishes from a fight on the frame of the killing blow. The **Escape Rope** is the paid shortcut for that same exit: **1 💎** in the Shop, and it takes you to the Center **instantly**, with no wait.

- The button sits **next to** the Center one, showing how many you own. With none left it shows greyed out.
- It is **consumed** on use and **cannot** be sold on the Community Market.

## Automation

They live in the right-hand column and run while the tab is open.

> **Use Revive**, **Use Potions** and **Back to the hunt** come **already on**, with every shop potion and revive already ticked — cheapest first. You do not have to set anything up for the hunt to keep going; if you want the opposite, just switch it off and it stays off.

### VIP Throw until Catch · Throw Nonstop

They throw on their own at **fallen bodies**, one per body, with 1.2 s between throws. Pick **which balls** may be spent by clicking the icons — the automation uses the first one on the list that still has stock. There are two switches, and turning one on turns the other off:

- **Throw until Catch** — stops at the **first catch**, and also when the chosen balls run out. Good for hunting one species without spending balls after it.
- **Throw Nonstop** — keeps throwing catch after catch. If the balls run out it **stays on**: it just doesn't throw, and starts again by itself when stock comes back (bought in the Shop, the Market or the Community Market) — no need to tick the box again.

> This feature is **VIP-only**. Without a subscription the switch opens an invitation to the Shop, and the moment VIP expires the automation stops by itself (your ball choice is kept).

### Use Revive on faint

Brings the active pokemon back — at 10% HP with a regular Revive, at full HP with a Max Revive — instead of swapping to another team member. Click the icons to choose **which revives** to spend; the **click order is the spend order**. Nothing chosen = any of them.

### Use Potions

Same idea with potions — plus one more choice: **at what health** the potion kicks in. A **slider from 10% to 100%**, in steps of 10 (10%, 20%, 30%… up to 100%).

| Threshold | For whom |
| --- | --- |
| 10–20% | saves potions and accepts flirting with a knockout |
| 30% | the middle ground (default) |
| 50–100% | hunts above your level, where one hit takes a big chunk of health |

A chosen item that has **run out** stays in the queue, dimmed: the preference is yours and does not vanish because stock hit zero mid-hunt.

### Return to hunt on death/reset

If your whole team goes down, the Nurse heals you and the automation **puts you back in the same hunt** a few seconds later — that is what lets you farm overnight without waking up to click.

- **It only fires with a potion or a revive in the backpack.** With no items it **pauses** and warns you in the log and in a toast, instead of sending you back to the hunt that just wiped your team. Without that lock, running out of items overnight becomes a death loop — and every trip back charges the knockout XP loss, until your level drops **below the minimum your own pokemon require**.
- The switch **stays on** when it pauses: you did not turn anything off, you just ran out. Buying a potion and re-entering the hunt by hand rearms it.
- **Surrendering does not count.** Leaving a hunt through the give-up button is your decision, not a defeat — the automation does not run.

### Automation from outside the game

The **Terms of Use** allow automation, in the game and on the Market — including the **PokeIdle automation extension**, available on our Discord, in the **#how-to-play** channel.

- The conduct rules apply to everyone, playing by hand or with automation.
- The server caps bursts of actions per second **per account**, and the Market release draw treats both the same: being faster gives no edge.

# The world

## Map and Hunt Analyser

The **Map** is where you pick a hunt. Each marker shows the area's recommended level; locked ones stay grey until your trainer reaches it.

### Regions and trainer level

Each Map region (the row of **Region** buttons at the top, above the filters) requires a minimum **trainer level** (not the pokemon's); each button shows the region's name and level, a padlock on the ones not open yet and a golden **✓** once you have caught every area in it — hovering the button tells how many you have. Kanto and Johto share one illustration; Hoenn, Sinnoh, Unova and Kalos have their own; after Kalos come **Alola** (generation 7), **Galar** (generation 8, with the Galarian and Hisuian forms) and **Paldea** (generation 9), in this order — all three on the same map for now, Alola's. **Outland** sits outside the generation order: it is the map of variants and rare drops (see Combat). **Johto** comes right after it: it opens at **Lv 200** and its hunts climb 30 levels at a time up to 470, just short of Hoenn (500) — on the same drawing as Kanto.

| Region | Trainer Lv |
| --- | --- |
| Kanto | 1 |
| Outland | 150 |
| Johto | 200 |
| Hoenn | 500 |
| Sinnoh | 1,000 |
| Unova | 5,000 |
| Kalos | 10,000 |
| Alola | 25,000 |
| Galar | 40,000 |
| Paldea | 75,000 |

### Marker icons

Each hunt shows the main species portrait in a circle. The marker atlas covers hundreds of published looktypes; if one is missing, the client draws the outfit sprite on the fly.

### Hunt Analyser

With the Map open, hover (or tap) an unlocked marker: the **Hunt Analyser** panel appears in the top-right — an estimate for that area on your account **right now**, with active boosts included. On a computer it goes away when the mouse leaves the marker; on a phone, close it with the **×** in the sheet's header and tap another area — and the header itself (**View in Pokedex**) opens that hunt's species sheet.

- **Trainer XP / hour** and **Pokemon XP / hour**
- **Gold / hour** (from species `experience` that spawn there)
- **Strong against** — types you hit for ×2 on the hunt (already amplified)
- **Weak against** — types at ×0.5 or immunity

> These are estimates, not guarantees: random spawns, walking time and faints change real results. Use it to compare hunts, not to predict the next hour to the minute.

### Filters

Under the row of regions (Kanto through Paldea), the Map bar has three filters in menus and the search by area name. On a phone, the three filters live behind the **Filters** button.

- **Type** — one or more types. With a type ticked, the menu itself offers **Weak against** (the hunts whose wilds take ×2 or more from a move of that type) and **Strong against** (the ones that resist it: ×0.5 or less).
- **Pokedex** — All · Caught · Not caught: splits the hunts whose species you already have — the ones with the golden ring, "already caught" — from the ones you are missing. The fourth option, **Top Catch: not caught this week**, shows only the areas with a species that has not made it into your Top Catch this week yet, and the map redraws with every new catch.
- **Level** — the area level range and **unlocked areas only**, handy after a level-up to see what opened.

### List mode

The **Map | List** switch next to the search box swaps the map for a **list** of the same areas — the same filters and the same count in the footer — in wide rows that are easier to find and click (with no wait for the map image to load). Each row shows the pokemon, the area level, its types and the golden ✓ for "already caught"; the area you are hunting in is purple, and the ones your level does not reach yet are grey with a padlock. The **Pokemon**, **Level** and **Type** headers sort the list (click again to reverse). On a computer, hovering shows the Hunt Analyser in a column beside it, and a click switches area; on a phone, a tap opens the sheet with **Hunt here**. The game remembers your choice on this device.

### Switching areas: 10 seconds

Entering an area from the Map builds the field with a full wave. That is why there are two waits, both of **10 s**:

- after entering an area, you can only pick another one (or the same) 10 s later — the notice says how long is left;
- whoever reaches an area within 10 s of trading damage — from another hunt or from the Center — finds it **empty** until the time is up.

The normal wave comes back in under 3 s, so leaving and coming back for a full wave never pays off. The automatic return after a knockout does not pay this wait.

### The Session (the clipboard)

During the hunt, the **Session** panel adds up what happened since the last **Reset**, in four sections: **Trainer** (time, trainer and pokemon XP, Gold, kills and catches, each also per hour), **Shiny** (seen and caught), **Rare drops** (Boss Token, Key, Shiny Stone, Bicycle and Mega fragments, TM pieces, Mystic Ticket, Safari Ticket and Shiny Egg Fragment) and **Costs** — the balls, potions and revives the automation spent, at Market price, with **Gold spent** and **Net profit**, also per hour.

- **Shiny and Rare drops only show what can drop where you are**: in a hunt, the shiny; from Unova on, the Shiny Egg Fragment too; in the Outland, its four drops and no shiny (it doesn't roll there); at a boss, the Mega fragments, the TM pieces, the Mystic Ticket and the Safari Ticket; in the Mystic Arena, the shiny. What already dropped this session stays in the count when you move.
- The **Boss Tokens** spent to enter a boss — repeat runs included — show up in Costs, counted apart: the token has no NPC price (it only trades on the Community Market), so it stays out of Gold spent.

The numbers belong to this browser and survive a page reload. **Copy** takes a one-line summary — ⏱️ time, 🎮 XP/h, 🪙 Gold/h and 💫 shinies seen and caught — to paste in chat.

## Guilds

Clans with **no size cap**: invite as many players as you like. The button sits below your portrait: **+** to create, or your guild crest if you are already in one.

### Create and manage

- Creation cost: **250,000** gold
- Pick name, shield shape, emblem and colours — the name accepts no swearing
- The owner invites by nick, kicks members, sets the roster or deletes the guild — and can appoint **co-owners** to share the work
- **No member cap** — the cap is on the **ROSTER**, just below

### Co-owners

On a member's sheet, the owner can **Make co-owner** — as many as they like. A co-owner invites, kicks members, answers applications, sets the roster, registers the guild for the war, changes the crest, the name and the TAG and deletes and pins messages in the guild chat: everything the owner does, except **deleting the guild**, **handing over leadership** and **appointing another co-owner**. A co-owner cannot kick another one. And whoever hands over leadership becomes a co-owner, not a plain member.

### The guild panel

Six tabs, in this order: **Members** (search, invite and, next to each nick, the **on roster** or **reserve** tag; clicking a member opens their sheet, with their team and the owner actions), **Boost** (the guild bank, further down), **War** (your war team, the Guild Roster and the shortcut to Guild PvP), **Requests** (the requests to join, with the number pending), **Board** (the list of every guild) and **Guild** (crest, name, TAG, recruiting and leaving).

### Joining a guild: the Board

Anyone without a guild opens the button and finds the **Board**: the list of every guild, with a search by name or TAG, the **only ones I can join** filter and three orders — **Most GP**, **Most members** and **⚔ Strongest** (the lineup's war teams, summed; the ⚔ shows on every guild). Each guild says how it takes new people — the owner picks it in **Guild → Who can join**:

| Policy | How you get in |
| --- | --- |
| **Open** | any trainer joins right away, no questions asked |
| **Open with requirements** | joins right away whoever has the minimum level and PR (Ranked PvP) the owner set |
| **Closed** | invite only — but anyone can **Apply**, and the owner or a co-owner answers |

- The recruiting **poster**, one line of up to 80 characters ("war every day at 10 PM"), shows on the Board. It follows the chat's rule: heavy content is refused.
- Invites you receive go to the **Invites** tab; applications to your guild, to **Join requests**.
- **Whoever leaves a guild waits 24 hours** before joining another. Only those who leave by choice: whoever was **kicked**, or lost the guild because the owner deleted it, joins another right away. It is what stops people hopping every morning to the guild that is first on the bonus.

### The guild TAG

Up to **three letters** next to your nick in chat, in the colour the owner picks — in **Guild → Guild → Guild TAG**, and also while creating the guild.

- It defaults to the **first three letters of the name**: "Lua Cheia" is born with **[LUA]**. Nobody has to set anything up.
- The colour comes from a palette built for the **black glass of the chat** — no invisible tags.
- **One change every 24 hours**, the same wait as the crest. The first one is free.
- **ADM, MOD, GM and the other staff ones are blocked** (including the digit spellings, like **M0D**): the chat already marks the game's staff on that same line, and the tag cannot be used to pass for it.
- The tag is a **snapshot** on the message: changing it today does not rewrite what you said yesterday.

### Changing the guild name

In **Guild → Guild**, below the crest, the owner or a co-owner changes the name for **50 diamonds** — whoever changes it pays.

- The name follows the creation rule: 3 to 16 characters (letters, numbers, space, - or _), no swearing, and it cannot be another guild's name — case does not count: "Mafia" and "MAFIA" are the same name.
- There is no wait between one change and the next: the price is the brake. If the change is refused (the name belongs to another guild, for example), no diamond is spent.
- The TAG does not change with it: it has its own change, right above.

### The guild roster

The guild grows without limit, but what goes to the **Guild War** is the **roster**: **10 players**, picked by the **owner** (or a co-owner) in **Guild → War → Guild Roster**. That choice is what the guild's strength is made of.

- **A guild with 10 members or fewer is fully rostered.** If you are eight, all eight fight — there is nothing to pick. The editor only starts to matter once the guild goes past 10.
- With thirty members, **ten** fight and the other twenty are **reserves**: still in the guild, the chat and the ranking, but not in the war.
- **The roster fights the war; reserves fight the Boss Raid.** The daily GP ranking bonus (trainer XP, pokemon XP and loot) goes in full to the roster, and the **diamonds from the monthly close** go only to it. Reserves face the **Boss Raid** at war time, and the HP they take from it is worth up to **+5%** for the whole guild — roster included (see below).
- A slot that opens up (someone left or was kicked) **fills itself** with the longest-standing member off the roster: the team never goes to war a player short.
- The **Guild Roster** (which PLAYERS fight) is not **My war team** (which POKEMON you bring) — two buttons in the same panel, and every rostered player needs both.

### GP: the daily board and the monthly one

Each guild earns **GP** (Guild Points) in the **Guild War**, and that GP feeds two boards, each with its own tab in Rankings:

- **Guild Daily** — the GP from the last war. It **resets every war**, and your place on it sets the **trainer XP, pokemon XP and loot** bonus for the **rostered players** until the next war; the **Boss Raid** adds up to +5% for the whole guild, reserves included. With 0 GP there is no place bonus.
- **Guild Global** — the **Global Season**: it adds up the GP of every war in the month. On the 1st, at **00:00 (Brasília time)**, the **top 8** get **diamonds for each rostered player** and the board starts over.

The **daily** board has no cutoff: any guild with GP takes at least the +1% floor. The **monthly** one does — below the top 8, the month pays nothing.

Both ranking prizes belong to the **roster**: a member off it (a **reserve**) gets no monthly diamonds and no place bonus. The **Boss Raid** one — up to **+5%** — belongs to the **whole guild**: reserves get only that, and the roster adds it to the place bonus (TOP 3 with the boss down: +8% +5%).

| Place | Daily bonus | Monthly prize (per rostered player) |
| --- | --- | --- |
| 1st | +10% | 100 💎 |
| 2nd | +9% | 50 💎 |
| 3rd | +8% | 35 💎 |
| 4th | +7% | 25 💎 |
| 5th | +6% | 20 💎 |
| 6th | +5% | 15 💎 |
| 7th | +4% | 10 💎 |
| 8th | +3% | 5 💎 |
| 9th | +2% | — |
| 10th onward (GP > 0) | +1% | — |
| Boss Raid — the whole guild (the roster adds it to the place bonus) | up to +5% | — |

The **🏆 Rewards** button, on the PvP **Guild** tab (below the replay), shows both tables, the time left until each reset and where your guild stands.

### The Boss Raid

At **Guild War** time, while the roster fights the war, the **reserves** of every signed-up guild face a boss of their own: a random **Outland Pokemon** (on the same day, each guild draws a different one), with the mechanics of the Gigantamax Raid — the siege, the moves and the fury. Nobody needs to click: every reserve with a team fights on their own, with the saved war team (or the hunt team).

- **HP:** 25,000 per reserve in the fight — a guild with more reserves faces a bigger boss.
- **Moves:** the same as the Gigantamax — one area move, one on the target and the roar that sweeps the whole arena —, in the boss's **type**.
- **Prize:** up to **+5%** trainer XP, pokemon XP and loot for the **whole guild** (reserves get only that; the roster adds it to the place bonus), until the next war, by the HP left on the boss: 30% left → +3.5%. The full **+5%** only goes to those who take it down.
- **The Boss Raid tab** (on the Guild panel, next to War): the boss of the **next** fight — drawn a day ahead, so the reserves can prepare —, with its moves and the types it is weak to, the list of reserves who will fight and the **replay** of the last fight, which belongs to your guild only.

### Guild Boost: the bank

The guild panel's **Boost** tab holds the **guild bank**: any member donates diamonds, from 1 up to what is missing. When the bank reaches **500 💎**, the **whole** guild gets **+10% trainer and pokemon XP** for **7 days** — and the bank empties for the next round.

- Filling the bank while the boost is still on **adds 7 more days** to what is left.
- Donations are capped at what is missing: with 450 in the bank, donating 100 costs only 50.
- It applies to whoever is in the guild **now**: anyone who joins while it lasts gets it too, and anyone who leaves loses it at once.
- It **multiplies** with XP Boost, VIP, the ranking bonus, events, Twitch and Kick.
- Donations belong to the guild: they **don't come back** if you leave or get **kicked** — they stay in the bank for the next boost. If the guild is **deleted** before the bank fills, whatever is in it goes back to the donors, even those who already left. What already filled a bank became a boost and never comes back.
- The tab shows who donated to the current bank and the history, live; the guild chat tells everyone when the boost turns on.

### Guild War (daily)

Once a day, at **22:00 UTC**, every registered guild fights in a single arena, and each one earns its score, from 0 to 100, in **GP**. The **owner** (or a co-owner) registers just once — the guild joins **automatically every day** — on the **Guild** tab of the PvP panel. Registered after the day's war? It counts for tomorrow's.

- **Placing is by a score from 0 to 100: 60 for staying alive and 40 for fighting.**

- **Survival — up to 60:** 60 ÷ √ of the position the guild fell in, counting from the last one standing. The last one gets **60**; 2nd, 42.4; 3rd, 34.6; 10th, 19; 20th, 13.4. The weight sits at the top: outlasting the runner-up is worth a lot, and in the middle of the table fighting decides.
- **Combat — up to 40:** a counter of enemy Pokemon knocked out by the guild — any member's knockout counts —, with the same math as survival: 40 ÷ √ of the guild's position on that counter. The one with the most knockouts gets **40**; 2nd, 28.3; 3rd, 23.1; 10th, 12.6. No knockouts gets 0, and guilds tied on knockouts share the position. Damage does not count toward the score (the war analysis still shows it).
- The **score** is the sum of both, with one decimal, and decides the placing. Ties go to whoever fell last, then to whoever knocked out more.
- **GP is the score**, rounded to a whole number — .5 or less rounds down, above .5 rounds up: 65.5 becomes **65 GP**, 40.8 becomes 41, and the top score, 100. In the day's ranking, which pays the bonus, equal GP is broken by the war placing.

 Why: the order of elimination alone put two-member guilds that spent the war away from the fight in the top 20, and points alone let the last guild alive lose the war. With the score, the last one standing gets the 60 and almost always wins, and a guild that only hid does not pass the ones that fought. The **Last war** tab shows each guild's score — the little shield is the survival position, and hovering the score shows the full math.
- **Nobody has to be awake.** The war is **simulated on the server** with the **roster** of everyone who registered — up to 10 players per guild, not the whole guild. You do not enter any arena at that hour.
- Your **war team** from the panel is the one that fights; if you never saved one, your hunt team goes in. It is snapshotted **at event time**.
- Everyone enters **healed**: having fainted before logging off is not dead weight.
- **Where each guild spawns is seeded, like a tournament.** The **4 strongest guilds** are the top seeds: 1st starts at a corner of the arena, 2nd at the point farthest from it **on foot**, and 3rd and 4th at the points farthest from both. Every remaining spot belongs to the region of the nearest top seed, and the other guilds are spread across those regions in **snake order** — in a 16-guild bracket, 1-8-9-16, 2-7-10-15, 3-6-11-14 and 4-5-12-13 —, so every region has the same strength. Inside a region the weakest guild spawns closest to the top seed and the strong ones sit on the border: the favourites only meet at the end. Strength is the season's **Global GP**, then the previous day's GP and, on a tie, the teams' strength. The 1st seed's corner is drawn every war.
- The arena is a **flat square of grass**, with no rock or corridor in the middle, and only the **pokemon** are on the field: nobody gets stuck behind an obstacle or waiting in line — what the replay shows is the fight.
- Level counts **in full up to 150** and **compressed** above that — harder than in the gyms: lv 1,000 counts as 219, lv 3,000 as 273 and lv 10,000 as 347. Doubling your level pays +15%. Quality, potency and refinement still count in full.
- Each pokemon's **Z-Move** counts; the **AoE TM does not** — in the war damage is always single-target. The **gym podium bonus** (+25% the leader, +10% 2nd, +5% 3rd) applies only in the hunt (see Gyms).
- **The war lasts up to 10 simulated minutes.** It ends when only one guild is left standing or when it hits the cap — either way, placing comes from the score (at the cap, the guilds still standing count as the last to fall, in order of health). Gym, Ranked PvP and Championship duels have their own, shorter cap, and there whoever stays standing wins.

Afterwards just hit **watch the replay**: the whole war recorded, with the moves, the type effects, the damage numbers, the pokemon swaps, the scoreboard and the kill feed (**player** ⚔ **pokemon** of **owner**). You can speed it up to 8×, zoom the camera out and follow one specific fighter — the side panel has a **search by nick or guild**, to find someone among hundreds.

> **War Medal.** The **Pokemon of the war** — the top damage dealer — earns the War Medal for good, numbered. It shows on its sheet and as a golden capsule in the Community Market, and goes along when it changes hands.

Next to Rewards, the **📊 Analysis** button opens the numbers of the whole last war: **damage dealt and taken, knockouts and pokemon lost** for every player, the pokemon each one put on the field (and how much each did), the highlights — most damage, most knockouts, the Pokemon of the war, the biggest hit, first blood, last one standing — and every guild's scoreboard. The numbers come from the replay itself; assists are not counted, because the replay cannot tell help from coincidence.

## House & XP Share

The **House** is what makes your other pokemon level alongside your battling one. Inside it are the **dummies**, and each dummy is an **XP Share post**: you register one pokemon from your **team** or your **Collection ★** there, and it starts receiving a share of the XP your battling pokemon earns on the hunt.

### The five houses

What changes between them is **the size of the share**, not the size of the house. Four of them hold **a single post**; the Legendary is the only one with two:

| House | XP Share | Pokemon | Roll chance |
| --- | --- | --- | --- |
| **Common** | 25% | 1 | 74.5% |
| **Uncommon** | 40% | 1 | 20.0% |
| **Rare** | 75% | 1 | 5.00% |
| **Mythic** | 100% | 1 | 0.50% |
| **Legendary** | 100% | 2 | 0.0050% |

### How to get one

Two paths, both at the **Craft House** bench at **Professor Oak**, in the Pokemon Center:

- **Roll:** **10 Key Fragments** become a house of **rolled** rarity, with the odds in the table — you don't pick which one you get. It is the only path to Mythic and Legendary.
- **House Craft:** houses of the same rarity become one of the next rarity — **5× Common → 1× Uncommon** · **5× Uncommon → 1× Rare**. Crafting goes **only up to Rare**. You choose **which** ones go in, by number; the house in use counts too, except the one you are inside and one listed on the Market. The chosen ones are gone (the registry marks them as merged), the new one is born with a **new number** and empty posts, and the pokemon that were on their XP Share go back to your **Collection** — none is lost.

A House **cannot be bought ready-made** — it comes from fragments dropped in Outland, or from crafting other houses. Every house comes with a **server number** — whoever rolled the first one got **#000001** — and you can own **as many as you like**. The cap is on **use**: up to **5 houses** are in use at the same time, each with its own posts, and only they share XP. The rest stay **stored** — you pick which ones to use from the **House** button, and storing one takes the pokemon on its posts out of XP Share. A new house goes into use on its own while there is a free spot.

> **Key Fragments have no per-account cap.** They drop in Outland (0.000500% per kill, ~200,000 kills on average). That is the Outland 1 rate — the other steps multiply it up to **×8** (see Combat). They are also bought and sold on the Community Market, like the finished house.

The **finished house** is tradeable — list it by its **number** on the House tab. When you list it, the pokemon on **that house's** posts leave XP Share, and they don't come back if you cancel the listing: the house returns empty.

### How XP Share works

Open the **House** button (or go inside and click the dummy) and pick **one pokemon from your team or your Collection** for each post — the sheet shows both, each in its own section — and **a pokemon holds only one post**, across all your houses. From then on, every wild you knock down gives it **your house's share** (the "XP Share" column above) of the XP your **battling** pokemon earned on that kill. Your **pokemon XP** multipliers (boost, VIP, guild, event) are already inside that number.

**The registered one cannot be the one fighting.** Register Charizard and go hunting with Charizard, and it gets nothing — it already takes the full XP. Register Charizard and hunt with Squirtle, and Charizard is the one levelling alongside.

The share is calculated on **the XP of the hunt you are actually on**, and that is what changes everything versus the old training: on a level 600 hunt, 75% of every kill is a lot; on a level 10 hunt, 75% still pays — but much less in absolute numbers. A level 600 pokemon registered while you hunt at level 10 still levels — slowly, but it does.

> **Nobody loses XP: the share is EXTRA.** This is the most common misunderstanding in the game, so here it is in plain words: your **battling** pokemon keeps **100% of the XP, always**. The XP Share slice is **created on top** — it does not come out of what it earned, and it splits nothing with anyone.

On a kill worth **1,000** XP, with a **Rare** house (75%), what happens is:

- **battling** pokemon: **1,000** — the usual 100%, untouched
- pokemon **registered** at the dummy: **+750**
- total credited to your account: **1,750**

> **Three limits worth memorising.** (1) **TEAM** and **COLLECTION ★** only — a pokemon sitting in the Depot gets nothing; to register it, send it to the Collection first (the Exp. Share **item**, just below, differs on exactly this: it works even in the Depot). (2) The **trainer** gains no extra XP, and neither does anyone but the registered one. (3) No hunt, no share: the percentage is worked out **on the XP of a kill**, so with no kill there is nothing to work it out on. With the tab closed, nothing happens.

### The Exp. Share item (the held one)

There is also an **item** called **Exp. Share**, bought in the Shop with diamonds. It has nothing to do with the house or the dummies: it is **held** by a pokemon and works on its own — you can use it with no house at all.

Whoever holds one gets **+5%** of the XP your battling pokemon earned on each kill. And the rule above applies here too, which is where nearly everyone gets confused: **it is not 95% for one and 5% for the other**. The battler still keeps the full **100%**, and the 5% is added on top of that.

On that same **1,000** XP kill, with a pokemon holding the item:

- **battling** pokemon: **1,000**
- pokemon **holding** the Exp. Share: **+50**

> **The item works in the Depot.** That is the difference that matters most against the house dummies: a dummy only feeds a pokemon **on your team or in your Collection**, while the Exp. Share feeds whoever holds it, wherever it is — the **Depot** included.

- **It does not stack with the house: it is one or the other.** The same pokemon cannot be registered at a dummy AND holding an Exp. Share — the game refuses it from both sides. To equip the item, take it off the post first; to register it at the dummy, remove the item first.
- **Each item pays its own 5%.** Two pokemon holding two Exp. Shares get 5% each — they do not split it between them.
- **The one fighting gets no bonus of its own.** If the battling pokemon is holding the item, it receives nothing extra: it already takes the 100%.
- **Not tradeable.** The Exp. Share is born in the Shop and dies on the account that bought it — it never reaches the Market.
- **Switching holders has a 1-minute wait** between equipping and unequipping.

> **Your pick is remembered.** Unlike the old training, logging out doesn't empty the posts — the same pokemon is still registered when you come back. Moving it between the team and the Collection doesn't empty it either: a post only clears itself if that pokemon goes to the **Depot**, is sold, or goes to the market.

### Entering the house

From the **House** button, into any of yours — but only **from the Pokemon Center** (or from inside another house): they are in Cerulean. Inside you walk with **W A S D**, see who is registered next to each dummy, and get the **Pick a pokemon** and **Leave house** buttons. Going in is just to **choose**: XP Share was already running, and leaving doesn't interrupt anything.

## Bicycles

The **bicycle** is the game's **mobility** progression. On a hunt, your pokemon spends a good part of the time **walking** from one wild pokemon to the next — and that walk is what it shortens. It works for the **pokemon** and for the **trainer**, on the hunt and in the Cerulean plaza.

### The five bicycles

The rarity decides how much faster you go. "Time per step" is how long a step takes compared with walking (100%): on the Legendary, a step takes **half** as long.

| Bicycle | Speed | Time per step | Roll chance |
| --- | --- | --- | --- |
| **Common** | +15% | 87% | 74.5% |
| **Uncommon** | +25% | 80% | 20.0% |
| **Rare** | +50% | 67% | 5.00% |
| **Mythic** | +75% | 57% | 0.50% |
| **Legendary** | +100% | 50% | 0.0050% |

### How to get one

Every kill in **Outland** can drop a **Bicycle Fragment** (0.000500% per kill, ~200,000 kills on average). That is the Outland 1 rate — the other steps multiply it up to **×8** (see Combat). Loot Boost raises the chance too.

With **10 fragments**, the **Craft Bicycle** bench at **Professor Oak**, in the Pokemon Center, builds a bicycle. The rarity is **rolled**, with the odds in the table above — the same as the House.

The same bench holds the **Bicycle Craft**, with the House's recipe: **5× Common → 1× Uncommon** · **5× Uncommon → 1× Rare** — only up to Rare; Mythic and Legendary come only from the roll. You pick the bicycles by number (the equipped one counts; one listed on the Market does not), they are gone and one with a new number is born. If the equipped one went into the craft, the new one comes out **already equipped**.

Every bicycle comes with a **server number** — the first one rolled is **#000001** —, and that number is how you equip and list it. The **Bike registry**, under the **House** button, shows every bike ever opened, who rolled each one and which are for sale.

Bicycles and fragments are **tradeable**: both are bought and sold on the Community Market. Got a **Mythic** or a **Legendary** (bike or house)? The whole game finds out: a notice in the middle of the screen of everyone online (purple for Mythic, gold for Legendary) and a line in the World chat.

### Equipping

Click the bicycle in **Backpack → Rare Items**. You can own **as many as you like**, of any rarity, but only **one is equipped** — and only the equipped one counts.

> **The percentages do not stack.** A Common, an Uncommon and a Legendary in the backpack, with the Common equipped, is riding at **+15%** — not +140%. Always equip the best one you have.

- **Switching has a 5-minute wait.** Equipping another one or storing the equipped one locks the next switch for that long, and logging out does not reset the wait.
- **Listing the equipped one on the Market** takes it off you right away: you are back on foot until you equip another — even with another of the same rarity in your backpack. Cancelling the listing gives it back already equipped.

### Where it does NOT count

The bicycle only shortens the **walk**. It does not change damage, move cooldown or range, and it does not count in **PvP**, **Gyms**, **Guild** or the **Boss** arena — those modes run on their own simulators, where everyone walks at the same speed.

> **It gives the same boost in every area.** Wild pokemon spawn in spread-out packs — an area move clears a pack, and the rest of the wave is walking to the next one, which is what the bike shortens —, and every map, from Kanto to Paldea, Outland included, was tuned so the bike pays off the same.

## Incubator and Mystery Eggs

The Market sells **Mystery Eggs**, and the **Incubator** hatches them: in a few hours — counted **even while you are offline** — the egg opens and a **surprise pokemon** is born, straight into your **Collection**, with the **egg's potency guaranteed**.

### The three eggs

| Egg | Potency | Price (Coins) | Hatches in | Warmed |
| --- | --- | --- | --- | --- |
| Mystery Egg P2 | P2 | 20,000,000 | 6 h | 4.5 h |
| Mystery Egg P3 | P3 | 120,000,000 | 12 h | 9 h |
| Mystery Egg P4 | P4 | 250,000,000 | 24 h | 18 h |

They are in **Market → Eggs**. Once bought, the egg goes to **Backpack → Rare Items**; from there, one click takes it to a free incubator (**Backpack → Incubator**). The egg belongs to your account: it **does not go to the Community Market**.

All three also come in the **weekly prize** of Ranked PvP: the top 100 get 2 P4, and from there down each tier gets its pack — from Silver (1 P2) to Grandmaster (2 P3 + 1 P4). The prize egg is the same as the shop's and hatches the same way.

There is a fourth egg the Market doesn't sell: the Shiny Egg, crafted at Professor Oak from fragments that drop in hunts from Unova onward (the fragment is tradeable on the Community Market; the finished egg is not). It hatches in the same incubator, in 2 days, and is always shiny.

### What can hatch

- A species drawn from **every species with a hunt on the Map**, from any region, with the **same chance** for each — a Magikarp and a high-level hunt pokemon come out alike.
- It **never** comes from Outland, and is never a **Legendary**, **Mythical** or **Mega** — those have their own paths (the Mystic Arena and the Mega Stone).
- The **potency** is the egg's. **Quality, IV and shiny** roll as in a catch — shiny included, at the same chance.
- The **level** is the species' hunt level, with the same cap as catching (see Catching).

The 🥚┃radar-do-ovo channel on our Discord announces who hatched, which egg and the pokemon that came out.

### The incubators

Every account has **1**, and you can have up to **6**: each extra one costs **50 💎** in the Shop and stays on the account **forever** — it is not an item, does not go to the backpack and cannot be sold. Each incubator hatches one egg at a time.

### Absorb Bulb — warming an egg

For **3 💎**, the bulb **warms ONE egg** that is already hatching: it opens **25% faster** (the "Warmed" column in the table). When the egg hatches, the bulb **burns out with it** — the next egg needs another.

- It only lights **with the egg inside**: you can't buy it ahead and keep it.
- An egg that is already warmed doesn't take another, and neither does one that is about to open — that would be paying for a discount that doesn't exist.

## Shiny Egg

The **Shiny Egg** is the prize for those who **rush levels**: with **10 Shiny Egg Fragments**, **Professor Oak** crafts an egg that hatches in **2 days** and **always** gives a **shiny** pokemon.

### Where the fragment drops

In **every hunt from Unova onward** — hunt level **5,000 or higher**, which includes Kalos and the Alola tab (with Galar and Paldea). Nowhere else: not below Unova, not in the **Outland**, not from bosses. The chance belongs to the **hunt**, not to your trainer level: it starts at **0.000667%** at Unova's door and each hunt level above adds **0.0000267%**.

| Hunt level | Region | Chance per kill | One in | Kills per egg |
| --- | --- | --- | --- | --- |
| 5,000 | Unova | 0.000667% | 1 / 150.000 | ~1,500,000 |
| 5,400 | Unova | 0.000693% | 1 / 144.231 | ~1,442,308 |
| 5,900 | Unova | 0.000720% | 1 / 138.889 | ~1,388,889 |
| 6,400 | Unova | 0.000747% | 1 / 133.929 | ~1,339,286 |
| 6,950 | Unova | 0.000773% | 1 / 129.310 | ~1,293,103 |
| 8,000 | Unova | 0.000800% | 1 / 125.000 | ~1,250,000 |
| 8,600 | Unova | 0.000827% | 1 / 120.968 | ~1,209,677 |
| 10,000 | Kalos | 0.000853% | 1 / 117.188 | ~1,171,875 |
| 11,250 | Kalos | 0.000880% | 1 / 113.636 | ~1,136,364 |
| 12,750 | Kalos | 0.000907% | 1 / 110.294 | ~1,102,941 |
| 14,350 | Kalos | 0.000933% | 1 / 107.143 | ~1,071,429 |
| 16,000 | Kalos | 0.000960% | 1 / 104.167 | ~1,041,667 |
| 20,000 | Kalos | 0.000987% | 1 / 101.351 | ~1,013,514 |
| 21,200 | Kalos | 0.0010% | 1 / 98.684 | ~986,842 |
| 25,000 | Alola | 0.0010% | 1 / 96.154 | ~961,538 |
| 26,150 | Alola | 0.0011% | 1 / 93.750 | ~937,500 |
| 27,500 | Alola | 0.0011% | 1 / 91.463 | ~914,634 |
| 28,950 | Alola | 0.0011% | 1 / 89.286 | ~892,857 |
| 30,450 | Alola | 0.0011% | 1 / 87.209 | ~872,093 |
| 35,150 | Alola | 0.0012% | 1 / 85.227 | ~852,273 |
| 40,000 | Galar | 0.0012% | 1 / 83.333 | ~833,333 |
| 42,800 | Galar | 0.0012% | 1 / 81.522 | ~815,217 |
| 46,150 | Galar | 0.0013% | 1 / 79.787 | ~797,872 |
| 49,650 | Galar | 0.0013% | 1 / 78.125 | ~781,250 |
| 53,350 | Galar | 0.0013% | 1 / 76.531 | ~765,306 |
| 64,950 | Galar | 0.0013% | 1 / 75.000 | ~750,000 |
| 75,000 | Paldea | 0.0014% | 1 / 73.529 | ~735,294 |
| 84,650 | Paldea | 0.0014% | 1 / 72.115 | ~721,154 |
| 95,950 | Paldea | 0.0014% | 1 / 70.755 | ~707,547 |
| 108,000 | Paldea | 0.0014% | 1 / 69.444 | ~694,444 |
| 120,550 | Paldea | 0.0015% | 1 / 68.182 | ~681,818 |
| 160,300 | Paldea | 0.0015% | 1 / 66.964 | ~669,643 |

- The **Loot Boost** multiplies this chance, as with every rare drop.
- Dropping to an easier hunt drops your chance: the ladder follows the hunt level.
- The fragment can be **traded** in the Community Market (Fragments tab).

### Crafting and hatching

At Professor Oak (Pokemon Center), the **Craft Shiny Egg** bench shows how many fragments you have; with **10**, the **Craft** button turns them into **one Shiny Egg** in your backpack. It goes into a free incubator like the Mystery Eggs and opens in **2 days** — the **Absorb Bulb** works on it too (36 h warmed).

- The pokemon is **shiny for sure**, a species drawn from the **984** that have a hunt on the Map and shiny art — no Outland, Legendary, Mythical or Mega, each with the same chance.
- The **potency** isn't fixed: it rolls like a catch, as does quality. IVs are those of a shiny.
- The **level** is the species' hunt level, with the same cap as catching.
- The **finished egg does not go to the** Community Market: only the **fragment** is traded there (Fragments tab).
- When it hatches, the whole server sees it: the shiny alert shows on everyone's screen and in chat, with your name.

> **Why does the ladder climb so fast inside Unova?** Because that's where the leveling path starts paying off: at the door (Lv 5,000) an egg takes ~1,500,000 kills, and each hunt above shortens the count. Climbing hunts means climbing chance.

## Z-Moves and AoE TM

The **Z-Move** (formerly the Z-Move) and the **AoE TM** are **permanent** upgrades on a pokemon — they unlock advanced content and change how it fights. At the **Pokemon Center**, talk to **Professor Oak** (button in the square). There is an **[i]** button with the full guide.

> The Professor's counter has **seven benches**: the two for the Z-Move and AoE TM (**Trade pieces** and **Apply disk**), **Craft House** — with the House Craft inside — (see House & XP Share), **Craft Bicycle** — with the Bicycle Craft — (see Bicycles), **Craft Shiny Stone** (see Shiny), **Craft Mega Stone** (see Mega Evolution) and **Craft Shiny Egg** (see Shiny Egg). Before spending a fragment, a piece or a disk, he always shows what goes out and what comes in, and asks you to confirm.

### When applied

- **Z-Move** — the pokemon learns a new move (e.g. **Z-Move GHOST**) that starts **Special** and can become **Physical** on its sheet (see **Physical or Special**, below): power **2800** (**1800** in PvP: Ranked, Friendly, Gym, Guild War, Championship, Showdown and Training), **60 s** CD, **3×3** area centered on the **target** (hunt only: in PvP it hits just the target). The disk type must match one of the pokemon's types **when you apply it**. After that the TM is in its "DNA": evolving or Mega Evolving doesn't remove it, even if its type leaves the pokemon.
- **AoE** — the pokemon's moves hit an **11×11** area centered on **your pokemon**. Several nearby wilds take damage **at the same time**.

Z-Move and AoE **stack** on the same pokemon. E.g. Gengar (Ghost/Poison) accepts **Ghost** or **Poison** — one Z-Move per pokemon, plus AoE if you want. AoE **does not widen** the Z-Move: it stays a 3×3 around the target.

### Where the Z-Move hits

The square is around the **target** (the wild your pokemon is fighting), not around your pokemon: it hits the target and whoever is touching **it**. With several wilds surrounding your pokemon, how many take damage depends on where the target stands:

- Target **straight** (above, below or beside): up to **5** of the 8 around your pokemon, counting the target.
- Target **diagonal**: up to **3** — the target and its neighbors. This is the most common case, because your pokemon stops walking as soon as it touches the target, and touching at a corner counts.

Only the **Z-Move** hits an area. The other moves hit one wild at a time, unless the pokemon has the **AoE** disk — that one is centered on your pokemon and hits everyone up to 5 tiles away.

The 3×3 is **hunt only**. In **PvP** (Ranked, Friendly, Gym, Guild War, Championship, Showdown and Training) the Z-Move is **single-target**, with no area damage, like any move. Its big animation still shows, but there it is only visual: the damage lands on the target alone.

### Physical or Special

The Z-Move starts **Special**: it hits with your pokemon's **SP.ATK** against the target's **SP.DEF**. On the sheet of a pokemon **of yours**, the Z-Move tag becomes a button — **S: ROCK** (Special) or **P: ROCK** (Physical) — and tapping it opens the choice:

- **Physical** uses **ATK** against the target's **DEF**; **Special**, **SP.ATK** against **SP.DEF**. The box shows both numbers of your pokemon and marks the higher one.
- Power, cooldown and area **stay the same**: only the attack and defense used in the damage formula change.
- It counts in every fight the pokemon takes: hunts, bosses, Gyms, PvP, Guild Wars, Raid, Tournament and Training with your own pokemon.
- After switching, the next switch for **that** pokemon waits **5 min**. The choice stays with the pokemon: sold on the Market, it goes along.
- In the Calculator's **Compare Pokemon** (see Score, Power and Calculator) and on the **test pokemon** of Training, the category is picked too, on a chip: it only counts for that estimate or that fight, changes nothing on the pokemon and spends no wait.

### Bronze Boss Token → bosses → pieces

To farm pieces you enter boss arenas (costs **1× Bronze Boss Token** per attempt):

- **Token** — rare **Outland** drop (0.0500% per kill, ~2,000 defeats on average). That is the Outland 1 rate — the other steps multiply it up to **×8** (see Bosses). Kanto and Orre do not drop it. The NPC does not sell it, but it comes out as a Battle Pass prize and is traded on the Community Market.
- **Bosses** — each boss drops **one** of the two piece types: the **Z-Move Fragment** from 9 bosses (0.50%–4.50%) and **AoE TM Disk Piece** from 9 bosses (0.50%–4.50%). The higher the boss, the higher the chance — the full list is under Bosses.

### Pieces → disks

Collect **10** matching pieces and trade them at the Professor (consumed immediately):

| Piece | From | Becomes |
| --- | --- | --- |
| Z-Move Fragment | 9 bosses (0.50%–4.50%) | Z-Move (pick type) |
| AoE TM Disk Piece | 9 bosses (0.50%–4.50%) | AoE disk |

The Z-Move and the disk go to your Backpack (Rare Items); on the **Apply** tab you pick a team pokemon and consume the item — it is permanent on that pokemon. On the pokemon's sheet the Z-Move tag shows its type crystal next to it, and the AoE tag, the orange disk.

The **pieces** are traded on the Community Market (Fragments tab); the **finished Z-Move and AoE disk are not** — they stay with whoever crafted them.

### Enhanced stats and Orre

Wilds in **Outland** (trainer Lv 150+) and **Orre** (the Hoenn tab onward, Lv 500+) have higher stats than Kanto — more HP and damage per hit. In **Orre**, your active pokemon needs **both** the Z-Move and the AoE TM to hunt efficiently.

## Bosses

Challenge arenas: you spend a **Bronze Boss Token**, enter a dedicated map and face a giant pokemon. It stands still — it does not chase — and it hits VERY hard. There are **three bosses per region**, from Kanto to Paldea, and each one of the trio gives a **different prize** — see "Three bosses per region". To challenge one, your **trainer** must be at least at the **region's level** (the Level column in the table below), and the boss **always fights at that level**, whatever your team.

### Getting the token

**Outland drop** — every wild defeated in Outland can drop 1× Bronze Boss Token. The chance depends on the Outland you pick in the selector on the Map's **Outland** tab: in Outland 1 it is **0.0500%** (~2,000 kills on average), and the higher ones multiply it up to **×8**. Loot Boost raises any row further.

| Region | Trainer Lv | Chance | Avg. kills |
| --- | --- | --- | --- |
| Outland 1 | 150 | 0.0500% | ~2,000 |
| Outland 2 | 1,000 | 0.0625% | ~1,600 |
| Outland 3 | 2,000 | 0.0750% | ~1,333 |
| Outland 4 | 4,000 | 0.10% | ~1,000 |
| Outland 5 | 8,000 | 0.15% | ~667 |
| Outland 6 | 16,000 | 0.20% | ~500 |
| Outland 7 | 24,000 | 0.30% | ~333 |
| Outland 8 | 36,000 | 0.40% | ~250 |

- **Not** sold at the NPC Market. Besides the Outland drop, it comes out as a prize from the Battle Pass and is traded between players.
- The NPC does **not buy** the token (single sell or sell-all). Price is set by players on the Community Market.

| Region · Trio | Boss | Level | Drops |
| --- | --- | --- | --- |
| **Kanto**
Legendary Birds Trio | Articuno | 300 | Z-Move Fragment (0.50%) · AoE TM Piece (0.50%) |
|  | Moltres | 300 | Mega Stone Fragment (0.50%) · Mega Shiny Stone Fragment (0.25%) |
|  | Zapdos | 300 | Mystic Ticket (0.000500%) · Safari Ticket (0.25%) |
| **Johto**
Legendary Beasts Trio | Suicune | 650 | Z-Move Fragment (1.00%) · AoE TM Piece (1.00%) |
|  | Entei | 650 | Mega Stone Fragment (1.00%) · Mega Shiny Stone Fragment (0.50%) |
|  | Raikou | 650 | Mystic Ticket (0.0010%) · Safari Ticket (0.50%) |
| **Hoenn**
Weather Trio | Groudon | 3,100 | Z-Move Fragment (1.50%) · AoE TM Piece (1.50%) |
|  | Kyogre | 3,100 | Mega Stone Fragment (1.50%) · Mega Shiny Stone Fragment (0.75%) |
|  | Rayquaza | 3,100 | Mystic Ticket (0.0015%) · Safari Ticket (0.75%) |
| **Sinnoh**
Creation Trio | Dialga | 9,750 | Z-Move Fragment (2.00%) · AoE TM Piece (2.00%) |
|  | Palkia | 9,750 | Mega Stone Fragment (2.00%) · Mega Shiny Stone Fragment (1.00%) |
|  | Giratina | 9,750 | Mystic Ticket (0.0020%) · Safari Ticket (1.00%) |
| **Unova**
"Tao" Trio | Reshiram | 22,700 | Z-Move Fragment (2.50%) · AoE TM Piece (2.50%) |
|  | Zekrom | 22,700 | Mega Stone Fragment (2.50%) · Mega Shiny Stone Fragment (1.25%) |
|  | Kyurem | 22,700 | Mystic Ticket (0.0025%) · Safari Ticket (1.25%) |
| **Kalos**
Aura Trio | Xerneas | 44,050 | Z-Move Fragment (3.00%) · AoE TM Piece (3.00%) |
|  | Yveltal | 44,050 | Mega Stone Fragment (3.00%) · Mega Shiny Stone Fragment (1.50%) |
|  | Zygarde | 44,050 | Mystic Ticket (0.0030%) · Safari Ticket (1.50%) |
| **Alola**
Light Trio | Solgaleo | 75,900 | Z-Move Fragment (3.50%) · AoE TM Piece (3.50%) |
|  | Lunala | 75,900 | Mega Stone Fragment (3.50%) · Mega Shiny Stone Fragment (1.75%) |
|  | Necrozma | 75,900 | Mystic Ticket (0.0035%) · Safari Ticket (1.75%) |
| **Galar**
Combat Trio | Zacian Crowned | 120,350 | Z-Move Fragment (4.00%) · AoE TM Piece (4.00%) |
|  | Zamazenta Crowned | 120,350 | Mega Stone Fragment (4.00%) · Mega Shiny Stone Fragment (2.00%) |
|  | Eternatus | 120,350 | Mystic Ticket (0.0040%) · Safari Ticket (2.00%) |
| **Paldea**
Loyal Trio | Okidogi | 179,500 | Z-Move Fragment (4.50%) · AoE TM Piece (4.50%) |
|  | Munkidori | 179,500 | Mega Stone Fragment (4.50%) · Mega Shiny Stone Fragment (2.25%) |
|  | Fezandipiti | 179,500 | Mystic Ticket (0.0045%) · Safari Ticket (2.25%) |

### Three bosses per region

Each region has a trio of legendaries, and the **position** in the trio decides the prize:

- the **1st** (Articuno, Suicune, Groudon…) gives the **Z-Move and AoE TM Fragments**, the two pieces of the TM Researcher;
- the **2nd** (Moltres, Entei, Kyogre…) gives the **Mega Stone Fragments**, the regular one and the shiny one;
- the **3rd** (Zapdos, Raikou, Rayquaza…) gives the Mystic Ticket and the Safari Ticket.

The **region** decides the level and the chance: its three bosses share the same level, and each prize's chance rises one region at a time — the table above shows each boss's. In Galar, Zacian and Zamazenta fight in their crowned forms (Sword and Shield).

### The level is fixed

The boss **always fights at its own level**, whatever your team: Kanto's is level 300 against a level 5,000 pokemon too. A pokemon above the boss hits harder and takes it down faster; a team below it takes more damage (that is the team penalty, right below). The win's XP comes from the boss's level.

### The team penalty

This is the arena's core mechanic, and it multiplies **the damage the boss deals** — not the damage it takes.

```
strength = Σ min(1, pokemon level / boss team level) deficit = max(0, 5 − strength) multiplier = 3 ^ deficit
```

| Team | Incoming damage multiplier |
| --- | --- |
| 5 or more pokemon at the boss team level | ×1 |
| 4 pokemon at the boss team level | ×3 |
| 3 pokemon at the boss team level | ×9 |
| 1 pokemon at the boss team level | ×81 |
| 1 pokemon at half the boss team level | ×140 |
| 1 pokemon far below the boss | up to ×243 |

> Bring **5** pokemon (or more) at least at the boss's level — the one in the table. This is not advice — it is the difference between taking 400 damage and taking up to 97,200.

### What changes inside

- The boss uses **its own moves**, with the power and cooldown from its sheet — not the species'. Both carry **its type**: the stronger one takes the species' 1st type and the other one the 2nd (or the 1st again, on a single-type legendary).
- It does **not** take the ×1.8 wild damage multiplier: its moves already come with boss-grade power.
- The boss fights with the **type chart**, both ways and with the same amplification as the hunt (see Types): a super-effective move hits it ×2.5 (×5.5 on a double weakness) and a resisted one ×0.33. Its moves get **STAB** (×1.5) and, on every attack, it picks the one that hurts your current pokemon the most — build the team around the boss's type. The chart applies **in full**, immunity included: if your pokemon is **immune** to both of its moves (a Dark against Necrozma's Psychic, a Flying against Groudon's Ground), the boss **deals it no damage**.
- You cannot catch a boss. The prize is its drop table — the pair that goes with its position in the trio (see "Three bosses per region"), with chances rising region by region. The Shop's **Loot Boost** **does not apply** here: the chances are the same with or without it, and the victory log says "Loot Boost not applied".
- Move cooldowns are **not reset** on entry: they carry on from where they were, and keep running in the Center between fights. On auto-repeat, a move used in one fight — the Z-Move included — is still recharging in the next. (The Mystic Arena is the only fight that starts with everything ready.)

### If you win

A loot panel shows XP, boss points and drops; you return to the **Pokemon Center** (not the previous hunt).

### If you lose

You leave the arena and go to the Pokemon Center. **The entry fee is not refunded** — not even if you leave voluntarily.

### Auto-repeat

On the boss screen, **Auto-repeat** chains one fight into the next: at the end of each — win or lose — you land in the Center, Nurse Joy heals the team and the game enters the **same** arena again, spending another token. It turns itself off, with a notice, when the tokens run out, when your level no longer reaches the boss or when the team has no one left to fight — and also if you abandon the arena or leave the Center to hunt.

- During the series, the drop screens **stack up** instead of disappearing, and one button closes them all.
- When the repetition ends, the **series summary** shows up: over how many wins, and everything that dropped.
- The choice is saved on the account: a dropped connection in the middle of the night does not turn the series off.

### Gigantamax Raid (the weekly boss)

The Boss **Weekly** tab holds the **Gigantamax Raid**: every **Monday at 20:00** (Brasília time) a Gigantamax shows up in the middle of the arena and the **whole server** fights it at once — every entrant at the same time.

- **Entry:** 1 Bronze Boss Token, from Tuesday 12:00 (when the week's Gigantamax appears) until Monday 16:00.
- **The Raid team:** up to 5 pokemon, which you can change until Monday 20:00, when it locks; if you set none, your hunt team goes. You do not need to be online — and the Raid only reads your pokemon's numbers: it gives them no XP and does not touch their health.
- **The battle:** no damage cap and no potions — a team that falls is out. The Gigantamax is too strong to go down easily: what counts is **how much of its health comes off**.
- **The prize:** every entrant gets an **XP** bonus (trainer and pokemon) and a **farm** bonus for **12 hours** from the end of the battle — up to +20% and +5%, by the health the boss had left:

| Health the boss had left | XP | Farm |
| --- | --- | --- |
| 100% | +0% | +0% |
| 90% | +2% | +1% |
| 80% | +5% | +1% |
| 70% | +7% | +2% |
| 60% | +10% | +2% |
| 50% | +12% | +3% |
| 40% | +14% | +3% |
| 30% | +16% | +4% |
| 20% | +18% | +4% |
| 10% | +19% | +5% |
| 0% | +20% | +5% |

There are 17 Gigantamax, drawn without repeating last week's, each in an arena themed after its type. The Pokedex counts the ones you have faced.

## Mystic Ticket and Mystic Arena

The **Mystic Ticket** is the rarest drop of the Bosses. Used, it opens the **Mystic Arena**: a purple room with **one Legendary or Mythical Pokemon at your trainer level**, drawn from the **111** the game can draw — each with a 0.90% chance. Knock it down and you get **one ball** to try the catch.

### Where the ticket comes from

It drops on a **win** against the **3rd boss of each region** (Zapdos, Raikou, Rayquaza…), together with the Safari Ticket — see Bosses — and follows the regions' ladder: **0.000500%** in Kanto, and 0.000500% more for each region above.

| Boss (region) | Chance per win | One in |
| --- | --- | --- |
| Zapdos · Kanto (Lv 300) | 0.000500% | 1 / 200.000 |
| Raikou · Johto (Lv 650) | 0.0010% | 1 / 100.000 |
| Rayquaza · Hoenn (Lv 3,100) | 0.0015% | 1 / 66.667 |
| Giratina · Sinnoh (Lv 9,750) | 0.0020% | 1 / 50.000 |

It shows in **Boss → Rewards** and on each boss's sheet in the Pokedex, and it is **tradeable** on the Community Market (Items → Tickets tab): whoever doesn't want to risk the attempt sells it.

### Entering the arena

- Use it from **Backpack → Rare Items → Mystic Ticket**. You enter from the **Pokemon Center**, out of combat, out of the PvP queue, with your team standing and at least **one poke ball** in the backpack.
- The ticket is **spent on entry**. If your team falls or you abandon the arena, it ends and the ticket **does not come back**. A **game update** (the server restarting) does **not** end it: when you log in you are back in the arena, against the same legendary, without spending another ticket.
- **Connection dropped?** Your internet dropped, you reloaded the page (F5) or opened the game in another tab: the arena **does not end**. Come back within **10 minutes** and you land on the **same spot** — the SAME legendary, with the HP it had, and the cooldowns as they were (while you are away, the fight stands still). The ball is still **a single one**: thrown before the drop, it does not come back to your hand. The browser asks before closing or reloading the tab in there.
- Move cooldowns start **reset** — the only fight like that (a boss arena does not reset them).
- It fights at **your trainer level** — a level 2,000 trainer faces the legendary at 2,000 — and with the **legendary ×4** on every stat, the same as the caught legendary.
- The legendary fights like a hunt wild: with its species' moves, the wild HP and the ×1.8 wild damage. There is no team penalty, and it drops no loot or Coins — the prize is the catch chance.

### One ball, one chance

Once down, the legendary stays on the ground and the screen asks for a poke ball. The chance is a **per-ball table**, the same for every legendary: Articuno and Mewtwo cost the same ticket, so they come out with the same chance.

| Poke Ball | Chance | With Capture Boost |
| --- | --- | --- |
| Poke Ball | 0.10% | 0.20% |
| Great Ball | 0.20% | 0.40% |
| Super Ball | 0.30% | 0.60% |
| Ultra Ball | 0.40% | 0.80% |
| Beast Ball | 0.50% | 1.00% |

- You have **25 seconds** to choose. After that, the game throws the **best ball** you have by itself — there is only one try, and losing it to a background tab would mean losing the ticket.
- Caught or not, the arena closes right after and you go back to the Center.
- **Shiny** rolls with the game's full chance.

### The caught legendary

It is born at level 100 — the catch cap: the fight is at your level, the catch is not — and with a **floor**, because the ticket is too rare to hand over a poorly born pokemon:

- **quality 1.00 or more**;
- **IV total 111 or more** (out of 192), the same floor as a shiny.

**Potency** has no floor: it spins like on any catch, from P1 to P5.

The floor is the same for every species, and it is born with the legendary ×4 already — the chance of each potency in the arena and how much each combination multiplies are in Legendaries and Mythicals.

The catch shows up in the **middle of the screen of every player online** (clicking it opens the legendary's sheet) and in the **World chat**, and the 🔮┃radar-lendario channel on our Discord tells who dropped a ticket, who entered the arena and how it ended.

> Each boss's sheet in the Pokedex has the **Catching it with the Mystic Ticket** panel: where the ticket drops, the chance of getting **that** legendary, its level in the arena and the per-ball catch table.

## Safari Ticket and the Safari

The **Safari Ticket** drops from the Bosses and opens the **Safari**: **60 minutes** per ticket on a map of its own, where **every appearance is a random species** out of **985** — each with a 0.10% chance —, with no Outland, Mega, legendary or mythical. You hunt there to **catch**.

### Where the ticket comes from

It drops on a **win** against the **3rd boss of each region** (Zapdos, Raikou, Rayquaza…), together with the Mystic Ticket, with the **same chance as the Shiny Mega Stone Fragment**: **0.25%** in Kanto, and 0.25% more for each region above.

| Boss (region) | Chance per win | One in |
| --- | --- | --- |
| Zapdos · Kanto (Lv 300) | 0.25% | 1 / 400 |
| Raikou · Johto (Lv 650) | 0.50% | 1 / 200 |
| Rayquaza · Hoenn (Lv 3,100) | 0.75% | 1 / 133 |
| Giratina · Sinnoh (Lv 9,750) | 1.00% | 1 / 100 |

It is **tradeable** on the Community Market (Items → Tickets tab).

### Entering

- Use it from **Backpack → Rare Items → Safari Ticket**. You can enter from the Pokemon Center, from your house or from a hunt, with the same locks as switching hunts (3 s out of combat), outside the boss arenas and the Mystic Arena, with your team standing and at least **one poke ball** in the backpack.
- You can use **several tickets at once**, up to **24** per entry: each one is worth 60 minutes and, as a **promo**, every **6** used together add **30 free minutes** — 6 → 6 h 30 min · 12 → 13 h · 24 → 26 h.
- The tickets are spent on entry, and the time starts running **on Enter**. It is a single entry: all of the time follows the rules below.

### No way back

Like the Mystic Arena, the Safari **has no way back**: the time ends early in any of these, and coming back takes **another ticket**.

- **Leaving on your own** — through the Center, with the rope, giving up the fight or picking another area on the Map. The game asks first.
- **Your team fainting** inside.

**Why:** with a way back, letting your team faint on purpose was enough to get a new wave, until the Pokemon you wanted showed up. Catches made before the end stay on your account, and a summary tells how many there were and why the time ended. The waves also follow a **sequence drawn once per ticket**.

### Connection dropped? You come back where you left off

Your internet dropped, you reloaded the page (F5), closed the tab or opened the game in another tab: the Safari **does not end**. Come back before the time is up and you land on the **same spot** — the same wild Pokemon, with the same HP, your team with the HP it had, and the cooldowns (moves, ball, the body on the ground) as they were when you dropped. While you are away the fight stands still; the time does not: it runs on the clock and never pauses. With the Safari open, the browser asks before closing or reloading the tab.

A **game update** (the server restarting) does **not** end the Safari either: when you log in, you are back in it with the same time, the same catches and the wave that was on the field — without spending a ticket.

The time ran out with you inside: the Safari closes, you go up to the Center and the same summary tells how many catches you made.

### What changes inside

- Wild Pokemon come at **Lv 1**, for every trainer: one hit and they are down, and the time turns into balls.
- Your catch is born at **double the species' catch level** — the **Level when caught** on its Pokedex page —, up to **Lv 200**: catch level 40 becomes **Lv 80**; 100 becomes **Lv 200**.
- Catching works as always: with **your own** poke balls, from the catch panel (or with auto-ball, for VIPs), with each ball's chance and **shiny** rolling as usual — plus the Safari bonus on top.
- **Safari bonus:** inside, you get **+15% Shiny Secret Lure** and **+15% Capture Boost**, which **multiply** your other boosts, like the live bonuses. With the Shop's Shiny Secret Lure (×2) and the Kick and Twitch bonuses (+15% each), your shiny chance becomes 2 × 1.15 × 1.15 × 1.15 ≈ **×3.04** — three times the normal one.
- Defeating gives **no XP** (trainer or pokemon), **no items and no Coins**.
- In the Pokedex, the sheet of every species in the draw shows the Safari under **Where to find it**, with the chance of each appearance being it and the level it comes out at.

## Mega Evolution

**Mega Evolution** swaps your pokemon for its **Mega form**: new art, **new base stats** and, in many of them, **new types**. There are **94** megas in the game, and they join the Pokedex in a tab of their own — the **Mega** tab, in the **#3000** range (Mega Gengar is **#3094**, which is `3000 + 94`, Gengar's dex).

> This is not a percentage bonus. The six base stats are **replaced** by the official Pokedex ones: Mega Alakazam has **175** Sp. Atk against 135, and Mega Aggron trades Sp. Atk for **230** Defense. Your refine, IV, quality and potency still stack **on top** of that.

### The mega's moves

A mega has **its own moveset**, built for **its** types — Mega Gyarados, which is WATER/DARK, hits with DARK — and many repeat the base species' one. It keeps the **two 600 moves** every final evolution has (**three** on a legendary's mega, like the legendary), with the same 60 s cooldown as every 600 move.

> Every mega used to have a third 600, the **mega move**, at half the cooldown (30 s). It was removed from all of them: what a mega changes is its **base stats**, its **types** and its moveset.

### The path, in four steps

1. **Beat bosses.** The **2nd boss of each region** (Moltres, Entei, Kyogre…) drops **Mega Stone Fragment** and **Mega Shiny Stone Fragment** (see Bosses).
2. **Collect 10.** Fragments are also buyable on the Community Market.
3. **Professor Oak, Mega bench.** The 10 fragments become the **Mega Stone of the species YOU pick** — there is no lottery.
4. **Mega Evolve.** With the stone in your backpack, the golden button shows up on the pokemon.

### Two megas for one species

**5 species** have two megas, each with **its own stone**: **Charizard** (Mega Charizard Y and Mega Charizard X), **Raichu** (Mega Raichu Y and Mega Raichu X), **Mewtwo** (Mega Mewtwo Y and Mega Mewtwo X), **Garchomp** (Mega Garchomp and Mega Garchomp Z) and **Lucario** (Mega Lucario and Mega Lucario Z). When you mega evolve you **pick which one** — and only the one whose stone is in your backpack goes.

### Switching megas: Revert

At Professor Oak's Mega bench, **Revert Mega Evolution** turns the mega back into its **base species** for **1,000,000,000 coins** — same IV, level, refinement, potential and shiny. The **spent stone does not come back**: to go from Mega Charizard Y to X, you revert, craft the Charizardite X and mega evolve again.

### The boss drop rate climbs with the step

It is the **same ladder** as the TM piece: **0,5%** in Kanto (Lv 300), **double** in Johto (Lv 650) and one more step per region. The **shiny** fragment is always **half** of the normal one — **0,25%** at Lv 300.

| Region | Mega Fragment | Mega Shiny Fragment |
| --- | --- | --- |
| **Kanto (Lv 300)** | 0,5% | 0,25% |
| **Johto (Lv 650)** | 1% | 0,5% |
| **Hoenn (Lv 3,100)** | 1,5% | 0,75% |
| **Sinnoh (Lv 9,750)** | 2% | 1% |

> Each boss's own rate is on the **Boss** tab, in the **Rewards** block — it is per win, and it grows region by region up to Paldea.

### Shiny needs the shiny stone

A **shiny** pokemon only mega evolves with the **Shiny Mega Stone**, and it **stays shiny** afterwards. The normal stone **refuses** shiny on purpose: without that lock, the rarest item on the account would turn into a normal-coloured mega, and there is no undo.

> **All 94 have a shiny form** — none is left out. If a new mega ever arrives with only the normal art, it joins with no Shiny Stone in the catalogue and the bench does not offer one: a stone you cannot use would be worse than a stone that does not exist.

### What changes, and what does not

- **Typing can change.** Mega Gyarados turns WATER/DARK, Mega Ampharos gains DRAGON, Mega Sceptile gains DRAGON. That changes STAB, effectiveness and even the refine stone — but not the elemental TM, which keeps working even if its type goes away.
- **Going back is expensive** — 1,000,000,000 coins to Revert, and the stone does not come back —, which is why the mega evolved pokemon goes to your **Collection**, out of NPC selling (sending it back to the Depot is one click).
- The Calculator shows the **Potential at Mega Evolution**: the score the same birth would have in Mega form, before you spend the stone.
- **The grade never drops.** Mega evolving always **raises** the N=, by the same rule that applies to evolving (see The grade).
- A mega **does not evolve again**, and **Outland variants do not mega evolve**. Orre clones do — they are the same species.
- Megas **appear in no hunt** and **cannot be caught**: they only exist crafted.

### Only the fragments are traded

The **two fragments** go to the **Fragments** tab of the Community Market. The **188 finished stones** (normal and shiny) do **not** go on the Market — they stay with whoever crafted them. None of it sells to the NPC.

### The 94 megas

Venusaur, Charizard Y, Charizard X, Blastoise, Beedrill, Pidgeot, Raichu Y, Raichu X, Clefable, Alakazam, Victreebel, Slowbro, Gengar, Kangaskhan, Starmie, Pinsir, Gyarados, Aerodactyl, Dragonite, Mewtwo Y, Mewtwo X, Meganium, Feraligatr, Ampharos, Steelix, Scizor, Heracross, Skarmory, Houndoom, Tyranitar, Sceptile, Blaziken, Swampert, Gardevoir, Sableye, Mawile, Aggron, Medicham, Manectric, Sharpedo, Camerupt, Altaria, Banette, Chimecho, Absol, Glalie, Salamence, Metagross, Latias, Latios, Primal Kyogre, Primal Groudon, Rayquaza, Staraptor, Lopunny, Garchomp, Garchomp Z, Lucario, Lucario Z, Abomasnow, Gallade, Froslass, Heatran, Darkrai, Emboar, Excadrill, Audino, Scolipede, Scrafty, Eelektross, Chandelure, Golurk, Chesnaught, Delphox, Greninja, Pyroar, Floette, Meowstic, Malamar, Barbaracle, Dragalge, Hawlucha, Zygarde, Diancie, Crabominable, Golisopod, Drampa, Magearna, Zeraora, Falinks, Scovillain, Glimmora, Tatsugiri, Baxcalibur.

## Ranked PvP

**One versus one, against someone of your rank.** You set up a team, join the queue and the match plays out **on its own** — there is nothing to click during the fight. One number is at stake: your **ranking points (PR)**. Tier, division and the progress bar all derive from it.

### How it works, in three steps

1. **Set up your PvP team** — up to **5 pokemon**, each on a square of your half of the **board** (right below). It is **separate from your hunt team**: changing one does not touch the other. They all start together, where you put them.
2. **Search for a match.** You may close the screen and keep hunting — the search goes on, and a small badge stays at the top ("PvP queue · 0:42") with an × to cancel.
3. **The match runs by itself.** Both teams spawn on the board, in the duel arena, and fight; at the end the screen tells you how much PR you gained or lost.

### The board

The fight happens on a **board**, auto-battler style: the duel arena has **30 squares** on each side, in **5 rows** — the front one right against the Poke Ball in the middle, two wide ones and the entrance corridor. You set up **your half** (the bottom one) on the "Your PvP team" screen: drag each pokemon from the list to a square (on mobile, hold the card or grab it by the handle), or tap the card and then the square. Dropping on another one swaps them; dragging out removes it. Up to 5 **start together**, each on the square you picked, each going after the nearest enemy, while the trainer stays put at the entrance.

- **🗡️ Melee** — attacks up close (1 square, diagonals included). **Ranged** — attacks from afar, and the number before the bow is the range: **2🏹**, **3🏹** or **4🏹** squares in any direction. The range belongs to the **species**, from its base stats: gap = SP.ATK − the higher of ATK and HP. A gap of zero or less → melee (hits harder physically, or takes a lot); 1 to 24 → 2 squares; 25 to 49 → 3; 50 or more → 4. IV, quality, potency, shiny, legendary, refining and level don't change it; evolving and Mega Evolving do, because they change the species.
- On the board, **every pokemon's HP counts ×1.5**, for both sides: with all five hitting at once, the opening burst would settle the fight before melee even reached the other side — and positioning would barely show.
- The top half belongs to the **opponent**, turned around: their team starts facing yours. A square is always seen from whoever sets it up — if you land on the other side of the match, your board turns by itself, so the same team works for both sides.
- **With no square picked** (a team saved before the board, or a friendly with the hunt team), the **automatic** one applies: melee on the front row, from the middle out; ranged by range — 2 on the second row, 3 on the third and 4 in the corridor. The **Auto-place** button does the same on the screen.
- It applies to every duel — Ranked, Friendly, Gym, Training, Championship and Showdown —, and **not** to the Guild War, which keeps one pokemon per member.

### House rules

| Rule | Value |
| --- | --- |
| Format | 1 vs 1, **100% automatic** |
| Trainer level | 150 |
| Pokemon on the team | 1 to 5 |
| Entry cost | **none** — no token, no gold, no fee |
| Does losing cost XP? | **no** — PR only |
| Between a match and the next queue | 20 s |
| Meeting the same opponent again | avoided for 10 min — and pays full PR |
| An account on the same network (same IP) | can be matched against you, but the match is worth **0 PR** |

### The eight ranks

| Rank | How you get in | Divisions |
| --- | --- | --- |
| **Bronze** | 0 – 299 PR | I · II · III |
| **Silver** | 300 – 599 PR | I · II · III |
| **Gold** | 600 – 899 PR | I · II · III |
| **Platinum** | 900 – 1,199 PR | I · II · III |
| **Diamond** | 1,200 – 1,499 PR | I · II · III |
| **Master** | **1,500 PR** and placing **#251 to #500** | — |
| **Grandmaster** | **1,500 PR** and placing **#101 to #250** | — |
| **Challenger** | **1,500 PR** and being in the **top 100** | — |

Inside each tier the division runs from **I** to **III**, every 100 PR. **I is the entry and III is the top** — Gold III beats Gold I. That is the reverse of League of Legends, on purpose: there the inverted order is a leftover from an old system.

> **Master, Grandmaster and Challenger are SLOTS, not points.** Passing 1,500 PR puts you in line: the **top 100** places on the ladder are Challenger, places 101 to **250** are Grandmaster and places 251 to **500** are Master. While no slot is free you show up as Diamond. Points inflate over time; positions do not — "being in the top 100 on the server" will mean the same thing a year from now. The tab's **Leaderboard** shows the top 1,000, 100 per page, with a "My position" button.

### Placement: your first 5

For your **first 5 matches** you show as **Unranked**, you are not on the ladder, and your PR is capped at **299** — the top of Bronze. Everyone starts at the bottom of the stairs; the climb **is** the game.

### What each match is worth

It is chess Elo: what decides is the **rank gap** between the two of you.

- Against someone at your level the swing is small and even.
- **Beating someone far above you** pays a lot — and costs them a lot.
- **Losing to someone far below you** is the most expensive defeat there is.

With one difference worth understanding: **a loss charges 70% of what a win would pay**. It is not zero-sum, and that is deliberate — with everyone starting from the floor, a zero-sum ladder would make Diamond and above **unreachable**, because there would be nowhere for the points to come from. With the friction, winning about half climbs slowly and winning under ~41% slides down.

> **Tier shield:** just promoted? The first loss at the floor of your new tier does not demote you. Dropping from Gold back to Silver on the very next match is the bad feeling the shield exists to prevent.

### Inactivity and season

- **24 hours without playing** (one day) drop Master, Grandmaster and Challenger to **Diamond**: the points fall to **one above the top Diamond** in the table, and the slot goes to whoever is playing. To come back, you climb to 1,500 RP again. While you are in the elite, a **clock** on your card shows how long is left — and every ranked match resets it.
- **Every Saturday, 11:59 PM (Brasília time), the ladder resets:** everyone goes back to 0 PR and to placement. That is what makes the number mean what it means again. The ladder's week runs from Sunday to Saturday.
- At the turn the **top 100 places** get a **prize**: boosts and, down to 50th, **diamonds** (the table is right below). The boosts arrive on their own, and the diamonds go into your balance — they work in the Shop and the guild bank, but can't be sold on the Market. Only players who played in the last 24 hours count.
- **Eggs of the week:** the turn also gives Mystery Eggs. From 1st to 100th, **2 P4**; from there down, your **tier** pack (the second table) — that one goes to everyone who finished placement, also those who did not play in the last 24 hours. The eggs land in your backpack.
- The **Weekly resets in** clock, at the top of the Ranked tab, counts down to the reset; tapping it opens the **🏆 Rewards**: this table, what you would get if the week ended now and the "How the turn works" explainer. Its ring turns **gold** when you are in the prizes, and the trophy becomes an **orange ⚠** when you still need to play to get paid — no match in the last 24 hours, or no Saturday match yet.

| Place | Boosts | Eggs | Diamonds |
| --- | --- | --- | --- |
| 1st | Shiny Secret Lure, Capture Boost, XP Boost, and Pokemon XP Boost for 3 days | 2× Mystery Egg P4 | 300 💎 |
| 2nd and 3rd | Shiny Secret Lure, Capture Boost, XP Boost, and Pokemon XP Boost for 2 days | 2× Mystery Egg P4 | 200 💎 |
| 4th to 10th | Shiny Secret Lure, Capture Boost, XP Boost, and Pokemon XP Boost for 1 day | 2× Mystery Egg P4 | 100 💎 |
| 11th to 20th | Shiny Secret Lure, Capture Boost, XP Boost, and Pokemon XP Boost for 18 hours | 2× Mystery Egg P4 | 50 💎 |
| 21st to 50th | XP Boost and Pokemon XP Boost for 18 hours | 2× Mystery Egg P4 | 25 💎 |
| 51st to 100th | XP Boost and Pokemon XP Boost for 12 hours | 2× Mystery Egg P4 | — |

| Tier (from #101 down, or off the final table) | Eggs |
| --- | --- |
| Grandmaster | 2× Mystery Egg P3 + 1× Mystery Egg P4 |
| Master | 1× Mystery Egg P3 + 1× Mystery Egg P4 |
| Diamond | 1× Mystery Egg P2 + 2× Mystery Egg P3 |
| Platinum | 2× Mystery Egg P2 + 1× Mystery Egg P3 |
| Gold | 2× Mystery Egg P2 |
| Silver | 1× Mystery Egg P2 |
| Bronze | — |

### Monthly PvP Top: the Gem prize

Besides the weekly ladder, Ranked has a **monthly** score that does not reset on Sunday: every ranked match adds to it the PR it actually moved — a win adds, a loss subtracts. The **drop to Diamond** (holding 1,500 PR or more and going 24 hours without playing) also subtracts the PR it took, down to what the month already had: dropping and climbing back does not count the same climb twice. At the end of the month (the Brasília month), **50%** of the commission the Community Market charged on Gem sales that month becomes a prize, **in Gems**, for the top **2,000**:

| Places | Share of the fees | Per place |
| --- | --- | --- |
| 1st to 100th | 25% | the share ÷ 100 places |
| 101st to 500th | 12.5% | the share ÷ 400 places |
| 501st to 2,000th | 12.5% | the share ÷ 1,500 places |

Within a tier everyone gets the same: the share divided by the places, rounded down. With 1,000,000 Gems of commission in the month, for example: 1st–100th: **2,500** · 101st–500th: **312** · 501st–2,000th: **83** Gems each. Empty places and the rounding **are not paid**.

- **Who can receive it:** points above zero in the month, at least **10 valid matches** (a match between accounts on the same network moves no PR and does not count), an account **7 days** old or more by the end of the month, not staff and not banned. Whoever cannot receive it still shows in the table but takes no spot — it goes to the next player.
- **Tiebreak:** points; then wins in valid matches; then whoever reached the total first.
- **When it lands:** the month closes on the 1st, at 00:05 Brasília time. Before paying, the **team reviews the result** — fixed matches and irregular accounts lose the prize. Once released, the Gems go straight to your wallet and can be withdrawn like any other (Gems: deposit and withdrawal).
- The **Monthly ends in** clock, at the top of the Ranked tab (next to the ladder clock), counts down to midnight on the 1st — the last match that counts for the month is the one before it — and shows "Tallying…" until the close, at 00:05; tapping it opens the Monthly PvP Top: the month's fees so far, what each tier is worth, the month table and your position — and its "?" has a prize simulator. The month's top also shows in **Ranks → Monthly PvP**, next to Ranked PvP.

### Auto-queue (VIP)

Subscribers can leave the queue on, and it keeps you in the queue: the search starts as soon as you switch it on, starts again by itself 20 seconds after every match, and comes back after a dropped connection or a server update. Inside the Mystic Arena it waits for the arena to end. It switches off when you cancel the search or when the team goes empty.

### Ranked on your profile

- The **ELO** card on the Trainer Sheet shows the **emblem**, the tier with its division and the **PR** — on your profile and on anyone's you open from the rankings, the chat or the friends list. Players still in placement show as **Unranked**, with no emblem and no PR.
- Your Ranked PvP team's **line-up** is public — whoever opens your sheet sees **which** pokemon you bring —, but the **board is secret**: on other people's view (and on the Tracker) the team shows in Pokedex order, with no squares. Only you see and edit where each one starts, and the battle follows the board you set. That way you can study an opponent, but not build the exact answer to their board.
- For the Championship you can pick another team, which **never shows** on anyone's profile.

### Saved formations

Below the PvP team sits the **formations** locker: up to **5** saved line-ups, each with a name (up to 30 characters) and its own **record**. **Use** swaps your PvP team for the formation in one click.

- The record counts the matches in which **that exact line-up** — the same pokemon, in the same order and on the same board squares — fought, in Ranked and in the Championship. It doesn't matter whether you clicked Use or rebuilt it by hand.
- Changing a formation's line-up **resets** its record (it belonged to another team); renaming doesn't.
- The pencil (or the card's mini-board) opens the editor for the whole formation: name, line-up and squares.
- A formation also keeps each pokemon's **square** on the board, and **Use** copies both to your PvP team. The same team on other squares is **another formation**, with its own record: moving a piece of a saved formation **resets** its record.
- Formations, names and records are **yours only** — no public sheet shows them.

### History and Tracker

- Click a match in your **history** to see the opponent's team and the battle summary right there.
- If the server restarts while you are in the queue, you **go back into it** with the waiting time you already had.
- The **Tracker** ([pokeidle.io/tracker](https://pokeidle.io/tracker)) is the public PvP site: the meta by rank (Low elo, High elo and each tier), each pokemon's report, each season's ranking and every trainer's latest matches, with the turn-by-turn combat.

## Friendly PvP

A challenge between **friends**, through the Friends List chat. Open the chat with your friend and click **⚔ Friendly PvP**.

- The invite shows up in both chats, and your friend has **5 minutes** to **Accept** or **Decline**. The challenger can cancel while waiting.
- Only for friends who are **online**, one pending invite at a time.
- Once accepted, the battle happens right away under **Ranked PvP rules**: each player's PvP team (without one, the hunting team), the same arena and the same level curve. The replay opens for both.
- **No PR and no prizes** — just for glory.
- After the battle, **both wait 5 minutes** before another friendly, with any friend. Whoever calls someone during that wait sees how long is left.
- The chat keeps the result, and **▶ Watch** reopens the replay for 30 minutes.

## Training Area

**A test bench, with nothing at stake.** In the PvP **Training** tab you build two sides, hit fight and watch. No XP, Coins, items, stones or ranking points — and **nothing is saved**.

### How to build it

1. **Set up bench** opens the **board** with both halves: the bottom one is **Side A** and the top one **Side B** — rotated, like the opponent in a match, each square seen by whoever sets up that side. That is **up to 5 pokemon per side**, each on the square you pick, and they all spawn together, as in every duel on the board (see Ranked PvP).
2. Drag from the roster to a square (on a phone, hold the card, or tap it and then the square). The roster is your collection — the **same pokemon can be on both sides**, since each one goes in as a copy — with your test pokemon in front.
3. The **+ Test** button of each side creates a **test pokemon** and puts it on that side. It is make-believe: you set the species, level, shiny, potential, quality, the six IVs and, if you like, the **Z-Move** — only the ones of the species' types, as on a real pokemon — and whether it hits **Physical** (ATK against DEF) or **Special** (SP.ATK against SP.DEF), the choice of the sheet's tag (see Z-Moves and AoE TM). The (i) on its card reopens the form, with **Delete**. It exists only on this bench and is gone when the page reloads.
4. Hit **Fight** — on the board or in the tab, which shows a summary of both sides (the arena in miniature and each side's combined power). The replay opens in the duel arena, in the same player as PvP.

### The fight follows ranked rules

Same arena, same simulator and the same level ruler as Ranked PvP and the Gyms — full up to 150 and compressed above it. Training under other rules would train nothing.

**The only difference is the clock:** a training fight runs up to **10 minutes**, like the GvG war — ranked has a shorter cap. Past the cap, the fight is decided on the tiebreak.

**The sides are independent:** 5 × 1 is a valid fight. The bench asks for no balance — you decide what you want to ask it.

### Your pokemon never enters the arena

A **copy** does, with the same birth numbers. The original loses no HP, gains no XP, does not move and never learns the fight happened. The test pokemon, in turn, **does not go to your Depot** and does not count in the Pokedex.

> **One battle every 5 minutes per account.** The wait applies on any device and does not reset when you log out and back in.

### What it is for

- finding out which of your pokemon is actually stronger, instead of guessing;
- comparing two teams before taking one to ranked or to the war;
- seeing how much one more level, IV or potential changes a fight;
- building a team against an opponent you invent — the team that just beat you, for instance.

## Championships

PokeIdle's championships with a **cash prize**: the **World** and the **Amateur**, one of each every month, repeating forever on the same calendar. They live in the top menu, under **Tournament**, which opens the **tournament picker**: three cards — **World**, **Amateur** and **Showdown** —, each with the prize, when it happens, the level required and a live line (sign-ups open, bracket out, live, champion); the **✓ Registered** badge marks where you are already in. A card opens that mode's **edition list** — the ones coming up and the ones already played —, and the bar's **How does it work?** button explains the rules. The third card, the Showdown, is the community's weekly tournament, paid in diamonds: it has its own chapter.

|  | World Championship | Amateur Championship |
| --- | --- | --- |
| Fight day | last day of the month, at 12:00 AM | the 15th, at 12:00 AM |
| Sign-ups open | the 16th | the 1st |
| Sign-ups close | end of the 28th | end of the 13th |
| Scouting day | the day before | the 14th |
| Minimum level | 300 | 100 |
| Shiny, P5 and legendary | allowed | BANNED |
| Prizes | R$1,000 / R$500 / R$250 | R$300 / R$150 / R$50 |

The next **World** edition is on **November 30** (sign-ups until the end of **November 28**); the next **Amateur** one is on **November 15** (sign-ups until **November 13**). All times are Brasília time.

> **The Amateur takes no shinies, no P5 and no legendaries.** That is the whole point of it: a championship for players who do not have the top-end collection yet. A shiny, a power-5 pokemon or a legendary or mythical (its ×4 would override any build) is refused when you save the team — and if you pick no team at all, the ones in your PvP team simply do not take the field.

In Brazil, the prize is paid by **PIX**. Outside Brazil, the equivalent amount goes out in **USDT on the Solana network**, converted at the time of payment.

### Signing up

- From the list, open the championship and click **Register**. World asks for trainer **level 300**; Amateur, **level 100**.
- You can be in **both at once** — they are separate championships, with separate teams.
- Until the deadline you can **cancel** and sign up again.
- The **Participants** tab shows every entrant with their skin, level, elo, **PR this month** (the one that sets the seed) and seed. It has a nick search, and clicking a card opens the profile.

### Your team

Once you sign up, the **Your championship team** strip shows who you will fight with — and its **mini-board**, with each one on the square it starts on.

- **Edit board** (or a tap on the mini-board) opens the PvP board: your whole collection (team and depot), with search and filters, and your half of the arena. Put up to **5 pokemon** on the squares — they **start together**, each where you put it; there is no entry order. **Save team** stores the line-up and the squares. In the Amateur, anyone who cannot fight sits at the end of the list, greyed out, with the reason.
- Your PvP **lineups** show at the top of the board as shortcuts: a tap puts its line-up and its squares there (minus anyone who cannot fight). Nothing is stored until you save.
- That team is **for that championship only**: it does not change your Ranked PvP team, does not change the other championship's team and **never shows** on anyone's profile.
- If you do not pick one, you fight with your Ranked PvP team, which is public on your profile. **Use my PvP team** clears your pick and goes back to it.
- **The team stays open through the whole scouting day** and only freezes at **11 PM the day before** — that is what the scouting day is for: you have already seen the bracket and you know who you are up against. A pokemon sold or listed on the Market before then is left out.

> **With no team at freeze time, every match of yours is a walkover loss.** The strip warns you before the deadline.

### Seeds and bracket

- Your **seed** is your **monthly PR** among the entrants: the sum of the PR you made on the weekly ladder in the month of the edition — the same score as the Monthly PvP Top. The highest is Seed 1; on a tie, more wins in the month and whoever reached the total first.
- Until the deadline the seeds are **provisional** and follow the monthly PR. At closing they **freeze** and the bracket is published — and you get the whole **scouting day** to study who you will face.
- In round 1, Seed 1 faces the last seed, Seed 2 faces the second-to-last, and so on. Seeds 1 and 2 sit on opposite sides and can only meet in the final.
- If the entrants do not fill a full bracket (4, 8, 16, 32…), the best seeds get a **bye** into round 2.

### The format

- **Double elimination.** Lose in the winners' bracket and you drop to the losers' bracket. Lose in the losers' bracket and you are out.
- **Grand final** in a single match: the winners' champion against the losers' champion. **3rd place** goes to whoever loses the losers' bracket final.
- **The fight is the Ranked PvP one**: automatic, with the same rules.

### Matches play themselves

At **midnight on the championship day** the server plays the bracket **one round every 5 minutes**, up to the grand final. Nobody needs to be online.

- In the **Bracket** tab, every played match has **▶ Watch**: any player can see the replay of any match.
- The bracket lights up the winner, shows the knockout score and marks walkovers, the title and 3rd place. **View my bracket** jumps to your path.
- Each entrant shows as unbeaten, in the losers' bracket or eliminated. At the end, the **Prizes** tab shows the top three.
- In a big bracket, the **Full bracket / Top 32 / Top 16 / Top 8 / Top 4** selector shows only the part that matters. Hold and drag to move around, like a map.

### Trophies

- The pokemon on the **champion team** earn the championship's **Trophy** (World or Amateur) on their sheet — and it goes along if the pokemon is sold.
- The podium gets the champion's trophy and the 2nd and 3rd place medals on their **profile**. They sit in the **Achievements** accordion under the nick, which starts closed: open, one row per championship with the trophy, silver and bronze and **how many times** each (hovering a count lists the editions).

### How long replays stay up

A championship's replays stay available **until the next championship's bracket is published** — about two weeks in practice. After that the screen shows **the podium only**, and the watch button is gone.

> Keeping the tape of every match of every championship forever would fill the server with video nobody opens — and the processing is better spent on the game. So the replay has a deadline. The **result** does not: the whole bracket, with every match-up, stays there for good.

## Showdown

The **Showdown** is the community's **weekly** tournament: **every Wednesday**, with **your real pokemon** — the same team as in the World and the Amateur, the same fight as Ranked PvP —, but without what only veterans have. Here the best **build** wins, not the rarest pokemon. The prize is in **diamonds**. To get there: top menu → **Tournament** → **Showdown** (the tournament picker is covered in Championships).

| Rule | Value |
| --- | --- |
| When | every Wednesday, at 09:00 PM |
| Sign-ups | all week, until Wednesday at 08:00 PM |
| Team lock | Wednesday at 08:00 PM, together with sign-ups |
| Rounds | one round per minute |
| Trainer level | 100 |
| Pokemon per team | up to 5 |
| Pokemon level in battle | up to 150 |
| Not allowed | shiny, P5, legendary and mythical, Outland variants, pokemon with an Z-Move or AoE TM |
| Allowed | megas (no limit) and repeated species |
| Prizes | 100 / 50 / 30 💎 |

The next edition is **Showdown #6**: fights on Wednesday, **November 18**, at 09:00 PM, and sign-ups until **08:00 PM** that same day. All times are Brasília time.

### Who is out — and why

- **Shiny** — ×3 on every stat (see Shiny). It is capture luck, and it would decide the fight on its own.
- **P5** — the top potency: ×2 on stats (see Potency). Rare, and almost always from someone who has hunted for months.
- **Legendary and mythical** — ×4 on every stat (see Potency): Mewtwo, Rayquaza, Arceus and friends, from Kanto to Paldea. The list is the same as the Mystic Arena's, and the Orre clone of a legendary counts as legendary too.
- **Outland variants** — the **#2001+** catalog, exclusive to the Outlands (Ancient Pupitar, Furious Magikarp…), from players who already got there.
- **With an Z-Move** or **with an AoE TM** installed — the advanced-hunt investment (see TM Disks).

**Allowed:** **megas**, with no limit, and **repeated species** — two Garchomp on the same team, for example. Banned pokemon do not leave your collection and nothing about them changes: they just sit out the Showdown.

> **Why?** The Showdown is the community tournament. Take off the table what only veterans have piled up — capture luck, months of hunting, the disks — and the **build** decides: which pokemon, on which square of the board, against whom. And the list drives the hunt: every week it is worth chasing a strong pokemon that **fits** the Showdown.

### The level cap: 150

It is the only tournament with a **level cap**: a pokemon fights at its own level **up to 150**, and beyond that extra levels do not help. In the World, the Amateur and Ranked PvP, levels above 150 still count, just compressed by the arena scale (see Gyms):

| Pokemon level | In the Showdown, fights as | In the World and Amateur |
| --- | --- | --- |
| Lv 100 | 100 | 100 |
| Lv 120 | 120 | 120 |
| Lv 150 | 150 | 150 |
| Lv 200 | 150 | 171 |
| Lv 300 | 150 | 205 |

Up to 150, both give exactly the same level — the difference is that here it stops. A Lv 300 fights as **205** in the World and as **150** in the Showdown: a well-built Lv 150 fights it on equal terms. In the team picker, the card of anything above the cap shows the math — **Lv 200 → fights as 150**.

> **Only the level is capped.** IVs, quality, potency (up to P4) and refining count in full — that is where two Lv 150 pokemon pull apart.

### The weekly schedule

- **All week:** sign-ups are open. They open on Wednesday at 08:00 PM, the moment the previous edition closes, and run until the next Wednesday at 08:00 PM. Until then you can withdraw and sign up again, and change your team as often as you like.
- **Wednesday, 08:00 PM:** sign-ups close, seeds freeze, the **bracket is published** and the team **locks** — all at the same instant. There is no scouting day like in the World: nobody adjusts their team looking at the bracket.
- **Wednesday, 09:00 PM:** the first round, then **one round per minute**, live, up to the grand final — in the World and the Amateur it is one round every 5 minutes. Nobody needs to be online.

The night is short: each round plays, in one go, every match whose two sides are already known, and the number of rounds grows slowly with the bracket size.

| Entrants | Rounds | Grand final at about |
| --- | --- | --- |
| 8 | 6 | 09:05 PM |
| 32 | 10 | 09:09 PM |
| 128 | 14 | 09:13 PM |

### Signing up

- In **Tournament → Showdown**, open the edition and click **Sign up**. It requires trainer **level 100**. The confirmation repeats the rules and the schedule before you join.
- It is free, and until Wednesday at 08:00 PM you can **withdraw** and sign up again.
- The **Participants** tab shows every entrant with their seed; clicking a card opens the profile.

### Your team

- Up to **5 of your pokemon**, each on a square of the board — they all start together, with no entry order. Once signed up, **Edit board** (or a tap on the strip's mini-board) opens your collection — team and depot —, with search and filters; banned pokemon sit at the end, greyed out, with the reason written on them (Shiny, P5, Legendary, Mythical, Outland, has Z-Move, has AoE TM), and a card above Lv 150 says which level it fights at, with that level's ⚔. **Save team** stores the line-up and the squares. Your PvP **lineups**, at the top of the board, are shortcuts: they put a saved lineup's line-up and squares there, minus its banned pokemon.
- With no pick, your **Ranked PvP team** counts, on its own squares — and its banned pokemon sit out when the team locks. **Use my PvP team** clears your pick and goes back to it.
- The team you pick is **for the Showdown only**: it does not change your PvP team or a championship team, and it never shows on anyone's profile.
- **At 08:00 PM on Wednesday the team locks** and becomes a **snapshot**: the numbers of each pokemon at that instant. The snapshot plays the whole bracket — leveling up, selling or listing the pokemon after that changes nothing. Sold or listed on the Market **before** the lock, it is left out.
- The Showdown **only reads** your pokemon: they do not leave your collection, do not change, get no trophy and no XP, and the matches do not count toward your lineup scores or go to the Tracker.
- Until the end of fight night (Thursday, 12:00 AM), the team you picked is **protected from Auto Select** in the Offering: the button will not put it on the wheel.

> **With no pokemon able to fight when the team locks, every match of yours is a walkover loss.** Your team strip warns you beforehand, and counts how many were left out for being banned.

### Seeds, bracket and format

- Your **seed** is your position on the Ranked PvP ladder among the entrants: the highest is Seed 1. Players still in placement come after, by points. Until Wednesday at 08:00 PM the seeds are provisional; at the lock they freeze.
- The format is the World's and the Amateur's: **double elimination** (lose in the winners' bracket and you drop to the losers'; lose there and you are out), a single-match **grand final**, and **3rd place** for whoever loses the losers' bracket final. If the entrants do not fill a full bracket, the best seeds get a bye (details in Championships).
- The fight is the Ranked PvP one — automatic, same rules —, with every pokemon's level capped at 150.
- In the **Bracket** tab, every played match has **▶ Watch**, for any player. Replays stay up until the next Showdown's bracket is published — the following Wednesday at 08:00 PM: one week. After that, only the result remains.

### The prize

| Place | Prize |
| --- | --- |
| 1st | 100 💎 |
| 2nd | 50 💎 |
| 3rd | 30 💎 |

- **Only with 8 or more participants who can fight.** That means entrants who made the bracket, reached the lock with **at least one pokemon able to fight** and are not banned. In a smaller edition the bracket runs all the same, but nobody gets diamonds.
- **Whoever reaches the podium without playing a single real match — on walkovers only — gets nothing**, and the place does not pass to the next player. A banned account gets nothing either, and its place does not pass on: the prize follows the result everyone saw.
- The prize **lands on its own**. The podium is recorded right after the grand final: if you are online, the prize screen shows up on the server's next pass, which runs every 60 seconds; if you are away, at your **next login**. It never expires.
- These are **prize diamonds**: good in the Shop — and diamonds **cannot be sold** on the Community Market. An edition pays at most 180 💎, across the podium.
- No trophies: the Showdown puts no trophy on the pokemon's sheet and no medal on the profile. The **Prizes** tab keeps the **podium teams** — the species, the capped level and the potency of each pokemon they fought with —, and clicking one opens its **sheet**, with the stats it fought with.

## Gyms

There are **18 gyms**, one per elemental type. Each has a **leaderboard** the whole server competes for: whoever sits in **1st** is the **leader** of that type, and the podium pays damage — **+25%** to the leader, **+10%** to 2nd and **+5%** to 3rd.

### The gym team

- Up to **5 pokemon**, and **all of the gym's type**. Dual types fit both: a Charizard can go to **FIRE** or to **FLYING**.
- **No repeated species.** Five copies of the same good pokemon are not a team — the podium is for who built a team, not who farmed one species.
- **One pokemon, one gym.** The **same** pokemon cannot defend two gyms at once: your Gyarados stays in WATER **or** in FLYING, and one that is already in a gym shows up locked in the others. If you have **two** Gyarados you can put one in each — they are two pokemon. If you already had the same pokemon in two gyms before this rule: it only counts in the gym **saved last**; in the other one the slot stays empty until you fix it.
- Requires **trainer level 150** to register in any gym.
- A registered team **stays yours and stays playable** — it does not leave your party or get locked away.

> **Level counts in full up to 150, and compressed above that.** There is no cap: every level above it still counts, just less and less — lv 1,000 counts as 352, lv 3,000 as 578, lv 10,000 as 993. Doubling your level always pays the same **+37%**, anywhere on the curve, so no level is ever wasted. Birth stats and refining decide the podium again, and grinding still weighs. (The Guild War compresses **harder** than the gyms — they are different events.)

### Building the team

A gym page is a **duel**: you on the left, the leader on the right. Your team shows up on a **mini board** — your half of the arena, each one on the square where it starts — with the 5 slots beside it. Tap it (or **Set up board**) to open the PvP board with only your pokemon of the type: drag each one onto a square, drop it on another to swap them, drag it out to remove it. Its **Save** saves right away.

- Greyed-out cards say why: a species already on the board, or a pokemon that already defends **another gym**. That one has a way out — "tap to bring it": the screen tells you what you lose there (power, the title, your podium spot) and, once you confirm, it leaves that gym right away and is free to join this one. With another of the same species already on the board, the card shows both reasons and the swap only appears once that one leaves.
- **Best team** picks the 5 strongest for you, one per species and skipping any that already defend another gym, and places them on the automatic squares (melee in front, ranged behind). With the **Location** filter on, it takes the best of what is on screen.
- While you build, the screen shows the team's **power**, how much it gains or loses against the saved team and **where on the podium** it would land.
- **Best team** only changes the page: nothing counts until **Save team**. Changed it and want to fight? **Save and challenge** saves and calls the leader — the duel always uses the saved team.
- A **leader** who removes the whole team gives the title away: the screen asks first.

### How strength is measured

It is not the **⚔ from the Rankings**. That number measures how **rare and well invested** a specimen is; the podium answers a different question: **who would win the fight**. Each pokemon's strength is its **damage per second** times its **effective HP** — which is what decides a war of attrition — and the team is worth the sum of the five.

### Challenging the leader

The challenge is a **simulated duel on the board**, the same as PvP: both teams start together, each pokemon on the square its owner picked — yours as you set it up; the leader's as they left it saved (they do not need to be online). Win and the gym is yours. You watch the whole thing in the **replay**, with the moves and the damage numbers.

- **24 hours of cooldown** between two challenges to the **same** gym. All 18 clocks are independent — losing in FIRE does not lock your WATER challenge.
- The podium bonus **does not apply inside the duel**: the leader does not defend the gym hitting 25% harder for already being the leader.
- The podium shows **who** is on each team, never the squares; the challenger sees in the replay where each of the leader's pokemon started.

### The prize

The podium hits harder with every pokemon **of that type** in the hunt — including **bosses**:

- **1st, the leader: +25%.** That is the title, which only changes hands in a challenge (or when the leader pulls the team out of the gym).
- **2nd: +10%** and **3rd: +5%.** They are the two **strongest** teams after the leader, no challenge needed. The podium is recalculated **every minute**: whoever passes you in strength takes the spot on the next count.
- It applies to the **whole pokemon**, not to the move: the Charizard of a FIRE leader hits harder with Flamethrower **and** with Tackle.
- **It does not stack.** Leading FIRE and FLYING does not give Charizard 56% — it gives the same 25%. And being 2nd in FIRE and 3rd in FLYING gives the 10% of 2nd: the best place counts.
- It does not apply in the gym duel, the Ranked PvP, the Guild War, Friendly, Training, the Championship, the Showdown or the **Gigantamax Raid** (see Bosses) — the "boss" here is the one in the boss arenas.

## Mini Games

**Mini Games** is a Pokemon quiz for the whole server: every **2 minutes** a new round starts — 720 a day —, with the **same challenge for everyone**, at the same time. Open it from the **Mini Games** button, next to PvP, work out which Pokemon it is and type its name. The fewer clues you need, the more points you get.

Your hunt keeps going while you play: Mini Games **does not touch your hunt, XP or Coins**, and it **pays no diamonds**. What it gives is points on the **day's ladder** — and, when the day closes, the **champion badge** in chat for #1 (see **The daily prize**, below).

### The three challenges

Every round has **4 stages** of 20 seconds, and each stage shows one more clue:

| Stage | Mystery Zoom | Mystery Shadow | Pokedex Detective |
| --- | --- | --- | --- |
| 1 | a small crop of the sprite | the sprite's silhouette, all dark | the types and the region (no picture) |
| 2 | a bigger crop, same center | + the types | + the base stats |
| 3 | an even bigger crop | + the region | + the evolution line (how many Pokemon it has and where this one stands) and whether it has a mega and whether it is legendary or mythical |
| 4 | the whole sprite | + the first letter and how many letters the name has | + the first letter and how many letters the name has |

Each round's challenge is **drawn at random** when it starts — **Mystery Zoom** 3 in 8, **Mystery Shadow** 3 in 8, and **Pokedex Detective** 2 in 8 —, and the draw rarely repeats the previous round's. The answer is always a species from the national Pokedex, from Kanto to Paldea.

> **Pokedex Detective** has no picture: its clues are the ones any trainer reads on the species sheet. It never shows the Pokedex number or the hunt where the Pokemon appears.

### The round, start to finish

| When | What happens | A correct guess is worth |
| --- | --- | --- |
| 0:00 | Stage 1: the first clue | 10 points |
| 0:20 | Stage 2: one more clue | 8 points |
| 0:40 | Stage 3: one more clue | 6 points |
| 1:00 | Stage 4: the last clue | 4 points |
| 1:20 | Guessing closes: the answer shows up for everyone, with how many got it | — |
| 1:45 | The screen announces the next round | — |
| 2:00 | The next round starts | — |

Points go **by stage**: every correct guess in the same stage is worth the same, in its first or in its last second. Scoring **does not reward speed** — being the first in the room to get it earns no extra point —, and a round is worth at most **10**.

### How to guess

- Type the name in the room's box and press **Enter**. Guessing takes trainer **level 10**; below that, you can only watch.
- **1 guess per stage**, counted on the account: another tab or device gives no more. Used it? The next stage opens with one more clue and a new guess. Got it? Your box stays quiet until the reveal.
- **One message every 5 seconds**, guess or chat: one sent too early comes back "wait" and does not count — it does not use up the stage's guess.
- Capitals, accents, spaces and punctuation do not matter: *Mr. Mime*, *mr mime* and *MRMIME* count the same. A sentence with a single name also counts: *i think it's pikachu*.
- **One name per guess.** With two different Pokemon names — *pikachu raichu* —, the guess does not count and is used up.
- **Almost!** is the notice **only you see**: your guess is 1 letter away from the answer (names up to 6 letters) or 2 letters away (longer names), and it is not another Pokemon's name. It counts as a guess.
- Up to **40 characters** per guess.
- Got it: the points come in right away, and the round is over for you.

### The room

The round's chat is a **room of about 20 people** speaking the same language (Portuguese, English, or Spanish). With more people playing, more rooms open, and yours may change from one round to the next. The room belongs to Mini Games only: what is written there does not go to the World chat.

- Wrong guesses show up for the room, like in a chat. The ones that give the answer away — the right one, the **Almost!** and anything close to the name — **show up for nobody**.
- **Whoever got it stays quiet until the reveal**: during the stages their box locks, so no one still trying gets a spoiler. At the **reveal** and the **next round** the whole room chats — the answer is public by then.
- A guess with a link or offensive language counts as a guess, but does not show up. Muted in chat? You play as usual — your guesses just do not show up for the room.

### The day's ladder

Points add up on the day's ladder, in **Ranks → Mini Games** (see Rankings), which shows down to #100. The day is **Brasília**'s: the ladder resets at 00:00, and every round belongs to the day it starts on — none crosses midnight. The Mini Games window shows your points today and your place, with a **trophy** when the badge would be yours if the day ended now.

The ladder's order:

1. more **points**;
2. on a tie, more **10-point rounds** (correct guesses in stage 1);
3. still tied, whoever **reached** the final total **first**.

### The daily prize

Mini Games **no longer pays diamonds**: the daily prize is just the **champion badge**. The **top player on the ladder who can take it** wears the **glove badge** (the Mini Games button icon) next to their name in chat for **the whole next day**. The badge does not change hands during the day: it belongs to yesterday's champion.

The day ends at midnight, and from **00:05 Brasília time** the ladder closes — if the day's last rounds are still being saved, it waits for them. The champion is announced in the World chat.

- **Who can take the badge:** at least **50 points** in the day (5 correct guesses in stage 1, for example, or 13 in stage 4), an account **7 days** old or more by the end of that day, not on the game's staff (admins and moderators) and not banned.
- Whoever cannot take it stays on the ladder and **passes their turn**: the badge goes to the next one who can. Above the champion, the row of whoever passed says why.

> **Sometimes a round becomes a break** — no challenge and no points. It happens when the server cannot prepare the round in time; the next one comes as usual.

## Rankings

The world-wide ladder, not your server's. There are twelve boards, picked from the menu at the top of the window:

| Board | What it sorts by |
| --- | --- |
| Top Trainers | trainer level (XP breaks ties); the card shows the level, and the exact XP shows up when you hover it (on a phone, tap the number) |
| Strongest Pokemon | a pokemon's **power**, from any trainer |
| Top Medals | a pokemon's **War Medals**, from any trainer; no prize — #1 wears the 🎖️ before its name (see below) |
| Top Catch | **distinct species** caught **with a ball this week**, not total catches; resets every week and pays diamonds (see below) |
| Top Coins | gold held; the number is shortened (26.4B), and the exact amount shows up when you hover it (on a phone, tap the number) |
| Top Gems | the **Gems in the account** right now; pays diamonds at the end of the month (see below) |
| Ranked PvP | rank and PR (see Ranked PvP) |
| Monthly PvP | the **PR added up this month** in ranked matches — the board of the **Monthly PvP Top**, which pays Gems to the top 2,000 who can receive (see Ranked PvP); the tab shows the top 100, renewed every minute |
| Bosses | boss wins: in **All** (the tab's default), the sum over every boss; or the wins against one boss, picked in the selector |
| Guild Daily | guild GP, which grants the XP and loot bonus (see Guilds) |
| Guild Global | GP added up from the month's wars, with a diamond prize; resets every month |
| Mini Games | **today's points** in Mini Games; resets every day at 00:00 Brasília time; no diamonds — the glove badge in chat, for the whole next day, goes to the top player who can take it (see below) |

Clicking a name opens that trainer's public profile — stats, Pokedex progress, their Ranked PvP rank and PvP team, without account details. The same profile opens from the chat and the friends list.

Each board's prize and rules sit in a **collapsed** box at the top, with the reset clock in view: tapping **See details** opens the prize ladder, the note and the shortcut to where that board is played.

### Weekly Top Catch

Top Catch counts how many **distinct species** you caught **with a ball this week**. If you caught Pikachu, Rattata and Pidgey with a ball this week, your Top Catch is **3**; another Pikachu in the same week changes nothing, and a new species adds 1 more.

- **It resets every week**, at the same instant as the Ranked PvP reset: **Saturday, 11:59 PM (Brasília time)**. The week runs from Sunday to Saturday.
- **Your Pokedex does not reset.** Only the ladder goes back to 0. That is why it pays to catch what you already have: in the new week, the species counts again.
- **Counts:** catching with a ball in a hunt (thrown by you or by the **Throw until Catch** and **Throw Nonstop** automations) and in the Mystic Arena.
- **Does not count:** evolving with a stone (Mega Evolution included), hatching an egg in the Incubator and buying on the Market.

**Why only the ball?** Top Catch pays diamonds. If evolving counted, you could climb the ladder without hunting: buy pre-evolutions on the Market and evolve them with stones. With the ball, every species on the ladder is a real catch, in a hunt.

> **Launch week.** In the first week of the weekly Top Catch, the ladder still counts your **whole Pokedex** — everything you have ever caught, like the old Top Catch —, so that whoever was leading does not lose their place on the changeover day. From the first reset on, the ladder goes back to 0 and the ball rule applies.

At the reset, your **final place** for the week pays diamonds:

| Place | Prize |
| --- | --- |
| 1º | 50 💎 + Poke Ball badge in chat |
| 2º–10º | 20 💎 |
| 11º–100º | 5 💎 |

- The result comes out about **two minutes after the reset**. If you are online you get it right away, with the prize screen; if you are away, at your **next login** — you do not need to be online at the reset, and the prize never expires.
- Ties: the trainer's **level** breaks them; if that ties too, the **older account** goes first.
- A banned account gets nothing, and its place does not pass to the next player. Whoever finished the week with 0 species gets nothing.
- The **week's #1** wears the **Poke Ball badge** next to their name in chat. The badge is **live**: it moves to whoever overtakes them (the game checks every 2 minutes).
- The prize diamonds are for the Shop: like the other gifts, they cannot go to the Community Market. A week pays at most 680 💎 in total, across all 100 places.

The week's panel — your species, the clock to the reset, your place and the podium — is in the Pokedex, under **Top Catch**; on the Rankings' Top Catch tab, a button takes you straight to it.

### Today's Mini Games

The **Mini Games** tab adds up **today's** points in the quiz that starts a new round every 2 minutes (how to play: Mini Games). The ladder belongs to the **Brasília day** and resets at 00:00; at **00:05** the day closes and the champion is named. There are no diamonds: the prize is just the **glove badge** (the Mini Games icon), which the **top player who can take it** wears next to their name in chat for the whole next day.

- It can go to whoever scored at least 50 points in the day, has an account 7 days old or more, is not on the game's staff and is not banned. Whoever cannot take it shows up on the ladder and passes their turn: the badge goes to the next one who can.
- On the tab, the row of whoever would be champion if the day ended now shows the badge. Above it — or on every row, while no one can take it —, whoever cannot take it shows why: staff, new account, under 50 points or banned.
- Ties: more 10-point rounds (correct guesses in stage 1), then whoever reached the final total first.
- The badge is not live: it stays with yesterday's champion for the whole day.

### Monthly prize: Top Trainers, Top Coins, Bosses and Top Gems

On the 1st of every month, at **00:00 Brasília time** (the Global Guild Season clock), whoever is on these four ladders gets diamonds by place — for Bosses, the **All** ladder counts, the sum of wins over every boss (Top Catch has its own prize, every week — see above):

| Place | Prize |
| --- | --- |
| 1º | 100 💎 + chat badge |
| 2º–10º | 50 💎 |
| 11º–100º | 25 💎 |

**Top Gems** has its own ladder, down to #10 only:

| Place | Prize |
| --- | --- |
| 1º | 500 💎 + chat badge |
| 2º | 250 💎 |
| 3º | 100 💎 |
| 4º–10º | 50 💎 |

- Whoever is **#1** on each ladder wears a **badge next to their name in chat**: **Ash** (the game's first logo) for Top Trainers, the **coin** for Top Coins, the **boss crown** for Top Bosses and the RMT **gem** for Top Gems — the **Poke Ball** belongs to the #1 of **this week's** Top Catch, and the PvP **sword** to the #1 of Ranked PvP (the week's top **active** player). The badge is **live**: it moves to whoever overtakes them (the game checks every 2 minutes). The Mini Games **glove** is the exception: it stays the whole day with yesterday's champion (see above).
- What counts is your place **when it closes**. These four ladders do not reset — the game never resets levels, gold, wins or gems —, so the prize goes to whoever is still on top when the month turns.
- On **Top Gems** what counts is the **Gem balance in the account** when it closes. On a tie, whoever has held that balance **the longest** — whoever reached it first — comes first (every deposit, withdrawal, purchase and sale in Gems counts as a move). Gems not yet in the account — a Market sale of a seller who is offline, an affiliate commission not yet collected — only count once they come in.
- All four show up to **#100** (Top Gems pays down to #10 only). A banned account gets nothing at the close, and its place does not pass to the next player.
- The prize diamonds are for the Shop: like the other gifts, they cannot go to the Community Market. At most 9,600 💎 per month across the four ladders.

### Strongest Pokemon — how ⚔ is calculated

Uses the **same birth strength** as the calculator (sum of six stats, normalized), but multiplies by the pokemon's **level**. Training raises the ladder score; the calculator score does not. Full detail in Score, Power and Calculator.

```
score = same strength as the calculator (0–1) power = round( level × 10 × score )
```

The exception is the legendary and the mythical: their ⚔ carries the **×4** on every stat, which the score does not — so a legendary climbs the ladder far above what its hidden score would say.

The board shows this formula in a collapsed box at the top — tap to open it.

**The crown.** The #1 Strongest Pokemon wears the **Ranks crown** before its name — on the tag above it in the field (in its owner's hunt), in the Team and in its details sheet. It is just the crown, with no other prize, and it moves to whoever overtakes it within 2 minutes.

### Top Medals — the War Medal

Every Guild War has its **Pokemon of the War**: the one that dealt the most damage in the arena, the card with the star in the war analysis. It earns **1 War Medal** — one per war, worldwide —, shown on its details sheet and next to its name on the Market.

- The medal belongs to the **pokemon**, not the trainer: sold on the Market, it takes its medals along, and the board shows the new owner.
- Tie: whoever reached the number **first** stays ahead.
- It pays no diamonds. **#1** wears the **🎖️** before its name — on the tag above it in the field, in the Team and in its details sheet —, like the Strongest Pokemon crown, and it moves to whoever overtakes it within 2 minutes.

> The ladder comes from the database, not from live memory, as a snapshot renewed every 10 seconds (the Monthly PvP tab, every minute): what you see may be up to about **20 seconds** behind. For a ranking, that is irrelevant.

# Economy and money

## Market (the NPC)

The game's counter. Buying and selling with the **NPC**, in **gold**, with no fee whatsoever and in unlimited quantity. At the top, the **Buy | Sell** switch flips the screen.

### Buy

The categories sit on a bar on the left (on a phone, on a strip at the top):

- **Poke Balls** — the purchasable ones, at the table prices.
- **Potions** and **Revives** — every variant, at catalogue price.
- **Eggs** — the three Mystery Eggs for the Incubator.

Every product stands on its own **stand**: the art in the spotlight, how many you already have, the unit price, the counter and the **×10**, **×100** and **Max** shortcuts (the most your gold pays for, up to 9,999 per purchase). The **Buy** button already shows the total. The light grows from the simplest product to the best one in each category.

The **Bronze Boss Token** is **not** sold here — it is a rare Outland drop (0.0500% per kill) and a Battle Pass prize. That is the Outland 1 rate — the other steps multiply it up to **×8** (see Bosses).

### Sell

On the other side of the switch, the NPC buys your **caught pokemon** (the formula is right below). **Items are not sold to the NPC**: loot left the game on 10/15/2026 — pokemon drop only the evolution stones of their types, and what loot used to earn comes in the gold of every defeat, the **loot bonus** (see Combat). The loot each player had in the backpack became Coins at the NPC price, on the first login after the change.

> Stones, the Bronze Boss Token and everything else that players value are sold on the Community Market.

Too many balls and potions in the backpack? The **Trash**, on the Backpack's **Trainer** tab, throws away the amount you choose (or **All**). It only takes balls, potions and revives, and whatever goes in is **gone for good** — there is no undo.

### Selling Pokemon

```
price = baseValue × (1 + min(level, 100)/50) × quality × (shiny ? 10 : 1)
```

- **baseValue** is the species', from the catalogue, capped at **64,907** — the base of a species from a level 2,500 hunt.
- Level and quality add value; **shiny is worth 10×**. **Level counts up to 100** (×3 at most): above that, the NPC pays the same as for a Lv 100.
- **Evolving does not change the price**: an evolved pokemon's baseValue is that of the species it was caught (or hatched) as. A Gible that becomes a Garchomp sells as a Gible. Pokemon that had already evolved before 11/06/2026 keep the price of their current species.
- Note that **potency does not enter** this formula — the NPC does not pay for it. A P4 or P5 is worth far more on the Community Market, to another player.

The list's **Sort by** orders by level, quality, potency, calculator score, **Highest Total IV** (the sum of the six IVs), each IV on its own, type, **Pokedex No.** or most recent catch. The same list powers the Offering picker and the chat attachment.

You cannot sell whoever is fighting, nor your last pokemon, nor your **starter pokemon**. "Sell the whole Depot" never touches anyone on the team, nor the starter. With a filter on (search by name or nickname, type, shiny, or the funnel of potency, quality and minimum IV per stat), the button becomes **Sell entire Depot (Filtered)** and sells only what the list is showing — the confirmation warns about anyone who is not in the Collection and would be lost.

### The Collection

The pokemon you want to **keep** go to your **Collection**: they leave this list and "sell the whole Depot", and the NPC does not buy them.

- The **Collection button**, the gold icon in the card's corner, sends a pokemon to the Collection. In the Depot (Cerulean Center), stored pokemon have two tabs, **Depot** and **Collection**: the Depot tab has the same button, and in the Collection tab the **Depot box** sends them back. A pokemon in the **Team** leaves by one of two buttons, the Depot box or the Collection icon, and goes where you chose. The Collection also opens from anywhere, in the Backpack's **Collection** tab, with the Depot box in each card's corner.
- Moving does not take the pokemon anywhere: it is a mark. It still counts on the Community Market, in the Offering and on your teams, with a **★**. In those pickers the **Location** filter shows only the Team, the Depot or the Collection.
- In the House, a Collection pokemon can also take an **XP Share post**, like a team one — a Depot one can't.
- Each pokemon waits a few seconds before it can switch sides again.
- **Auto Collection** (the **★** button next to "sell all"): a panel with six rules — **Legendary/Mythical**, **Shiny**, Minimum potency, Minimum quality, Minimum IV and Minimum score —, each with an on/off switch. Each rule that is on is enough by itself: a pokemon that passes any of them goes to the Collection. For every player, **Legendary/Mythical**, **Shiny** and **Potency P4+** come on, and the rest off. It applies when catching, when buying on the Market and, when you **Save** — after showing how many —, to the ones you already have. The lock only locks: turning a rule off sends no one back to the Depot. Pokemon bought on the Community Market and refined pokemon also land in the Collection.
- **Folders**: inside the Collection you can create up to **5 folders**, with a name and an icon ("PvP", "GvG", "Tournament", "Mega evolve"…) — the usual Collection is **General**, and the Backpack's Collection tab shows one folder at a time. In the **⋮** of your pokemon's sheet, **Move to** puts it in a folder (from the Depot, that also keeps it in the Collection). It is just organizing: in any folder it stays out of NPC sales, and deleting a folder sends its pokemon back to General.

## Community Market

Here the other side of the counter is **another player**. You list pokemon and items, and charge in **Gold** or in **Gems** — the USDT-backed currency (see Gems).

### Listing

- Listing **takes it out of your hands**: the item leaves your backpack and the pokemon leaves your depot immediately. Cancelling returns it.
- You may hold up to **20 open listings** at a time.
- **One listing per item**: while your Water Stone is on the shelf you cannot open a second one at another price — change the price of the one already there. Once it is gone (sold or cancelled), it takes **30 minutes** before you can list the same item again. That is what stops a ladder of "the same item for one Coin less" from taking over the whole list.
- **Up to 10 pokemon listed at a time**: with 10 on the shelf, the next one waits for one of them to go (sold, removed or expired) — the screen shows which ones. And a pokemon **you remove** from the market can only be listed again after **30 minutes**: listing and removing before the hold ends, over and over, no longer keeps it at the top. One that expired or came back in a server return waits for nothing.
- **Only items with trade value get in**: **evolution stones**, the **TM pieces** (the Z-Move Fragment and the AoE TM Disk Piece), the **Bronze Boss Token**, the **Mystic Ticket** and the **Safari Ticket** (**Tickets** tab), the **fragments** (Key, Shiny Stone, Bicycle, Mega, Mega Shiny and Shiny Egg — the TM pieces live on the same **Fragments** tab), **houses** and **bicycles**. Pokemon drops (Bug Wing, Fur, Fossil…) don't reach the shelf — they were hundreds of thousand-coin items burying whatever you came looking for.
- **For the Z-Move, the AoE TM Disk, the Shiny Stone, the Mega Stones (normal and shiny) and the Shiny Egg, only the fragments**: the finished item doesn't reach the shelf — it stays with whoever crafted it.
- **Nothing that diamonds buy reaches the shelf** — not even the **diamond** itself: the Market is only for what is earned by playing. The Beast Ball, skins, what the Premium Pass gives, the rest of the VIP Shop and the **Founder Boxes** stay off (they hold the diamonds of the purchase; since 27/10/2026 they stay with their owner until opened).
- **Pokemon must clear the minimum bar**: **level 50+** and **calculator score 3.5+** (birth strength — IV, quality, potency and shiny). **Shiny, P5 and legendary pokemon bypass** the minimum.
- **Shiny pokemon sell for Gems only**: when you list a shiny the **Coins** button is locked, and editing can't switch the currency from Gems to Coins. Shiny listings that were already open in Coins were closed, and the pokemon went back to the owner's **Collection** — just list it again, for Gems.
- The price is **per unit**. A lot of 100 Water Stones can be bought in slices.

### Buying

Every pokemon bought here **arrives in your Collection**, out of NPC sales, so it cannot leave in a "sell the whole depot" at the Market. Return it to the Depot if you really want to sell it back to the NPC.

- **Items** have no **Sort by**: sellers always show up from the **lowest price** to the highest and, at the same price, whoever listed **first** comes first — the line belongs to whoever got there first. Only the **Pokemon** tab picks an order (Recently listed, Lowest price, Highest price), because there you are choosing one specimen.
- The **★** on the card of a pokemon for sale keeps the listing in the **Favorites** tab. If someone buys it or the seller withdraws it, the card stays there for a few days, greyed out with a notice, until you clear it.
- When the seller **changes the price** of a pokemon in your Favorites, a notification drops down at the top of the screen: a **green ▼** if the price dropped, a **red ▲** if it went up (and **⇄** if they switched currency), with the old price struck through and the new one. Clicking it opens **Favorites**; the **×** just closes it. If you were away from the game, the notice arrives when you come back — compared with the price you last saw.
- **Family search:** put **+** before or after the name and the search brings the whole family — "+bulbasaur" shows Bulbasaur, Ivysaur, Venusaur and Mega Venusaur. It works on the shelf and on the name in the Price table and in the Histories.
- The **Price table** (the clipboard) shows everyone's recent sales and filters by type, by currency (Coins or Gems) and by item. On the **Pokemon** tab it searches by name, filters by **typing**, **Shiny only** and **P5 only**, and sorts by price, score, IV, quality, potency or level — always within the sales of the **last 30 days**. The **Export spreadsheet** button, in the table's top corner, downloads what is on screen — with the same filters — as a **.csv** file: one download per hour per internet connection.
- Type a pokemon's **#code** (the **Identity** on its sheet, copied with one tap) in the **Pokemon** tab's search and the table becomes **that pokemon's history**: every recorded Market sale of it, ever (no day window), with the date, who sold, who bought and the price — and an arrow with the **change** of each sale against the previous one in the same currency. Only sales that happened count: listing and unlisting don't. It works in your Histories too.
- Your **Sales history** and **Purchase history** show each pokemon's **P·IV·Q·N** badges, and clicking the row opens its card. Both have the same filters as the Price table.
- The **Hide Outland Pokemon** filter (**Species** group) removes the #2001+ variants from the listings: searching "pupitar" now brings only Pupitar, without Ancient Pupitar.
- In the **Rarity** group, **Mega Evolution** keeps only pokemon already in Mega form (#3001 onward) and **Legendaries** only legendaries and mythicals — the ones with ×4 stats, Ultra Beasts and the Orre copies included. Both apply to the species grid and to the list of offers.
- The card of a pokemon for sale shows **how many people favourited** the listing — and on your own listing, how many favourited yours.
- **Send DM** opens a chat with the seller, tied to that listing, to agree before buying (see Trade).

### The pokemon showcase

The pokemon tab opens as a **grid of species**: one card per species, with how many offers it has and whether there is a shiny or a TM for sale among them. Clicking opens that species' offers, in both currencies together. Whoever prefers to sweep the whole market for bargains switches off **Group by species** (in the **Species** group) and gets the listing list back, one card per pokemon. While it is on, grouping counts as a filter: **Clear filters** shows up and, when clicked, switches grouping off along with the other filters.

### Listing with a reference

When setting a price, two shortcuts fill the field: **Lowest listing** (the cheapest one for sale right now) and **Average sold** (the average price sold over the last 7 days, with how many units). The confirmation shows the receipt — the fee and what lands with you —, and the cards use the short price (20M, 1.5B).

The **📢 Announce in global chat** button sends the listing to the World and Trade chats (it costs 10,000,000 Coins; see Chat).

> The pokemon goes to the buyer with what is **its own**: the Name Tag **nickname**, the **War Medal**, the championship **Trophy** and the name of **who caught it**. The **skin** does not: it belongs to the owner, and goes back to being free in the seller's backpack.

### Pokemon filters

On the pokemon tab, besides type, badges and **Filter by**, the **Ranges** group has "min" and "max" for **level, potency, total IV, quality, score and price**. You can ask for "score from 3.8 to 4.1", "IV above 166" or "potency P3 and up", and combine them all. Quality and score accept a decimal comma, and a range typed backwards counts as the same range.

The **price** follows the **Currency** picked above (the badge next to the label shows which): with **Coins**, only listings in Coins within the range; with **Gems**, only those in Gems; with **All**, the range goes by each listing's own number, in its own currency — 1,500 Coins and 1,500 Gems fall in the same range. Thousands separators are fine ("1,500").

The **Type** menu takes one or more types and, on the pokemon tab, opens with the **United Types** switch, on by default: the showcase lists only Pokemon that have **all** the ticked types — NORMAL and FLYING shows Pidgey, and with a third type nothing shows up, since no Pokemon has three. Off, you see whoever has **at least one** of the ticked types (a Charizard, FIRE and FLYING, shows up under FIRE and under FLYING). The items tab has no switch: an item has a single type.

### Hold and draw

A listing shows up for everyone right away, but it can only be bought after a **2-minute** hold. The **Held** badge counts down live, on the server's clock.

- Adding units to a listing that is already for sale **restarts** the hold. The price can only be edited once the hold is over, and editing restarts it too. Cancelling works at any time.
- **A listing changes price at most every 30 minutes**, counted from the last change (listing or edit) — items and pokemon. The **Edit** button shows the time left (for a pokemon the sheet still opens to extend the stay, with the price locked). That ends the one-Coin-cheaper war — the stone at 19,000, the neighbour at 18,999, you at 18,998…
- **Changing a pokemon's price takes it back to the top** of the market ("Recently listed" and the species grid), like a new listing — and on hold again. Saving the same price changes nothing.
- **Release draw:** every purchase request that arrives in the first **3 seconds** after a listing is released goes into a draw with the same chance — as long as you can pay for it. Asking in the first millisecond is worth no more than asking at the end of the window. Requests after the draw buy right away, as always.
- **No funds, no entry:** at release, a request from someone who cannot pay (the listing's price, or the price × the units asked for in a lot, in Gems or Coins) is refused on the spot, with a notice of what it costs and how much you have — and your nick does not even show up in the draw. Having the funds is enough to compete for several listings at once: if you win one and run out, the other is refused on your turn, with nothing charged.
- **One request per player per listing**: clicking several times does not add chances. Whoever loses the draw gets a notice and pays nothing.
- **The draw window:** as soon as your request gets in, a small window opens with **how many players** are in the draw and **who they are** (up to 100 nicks; in a bigger draw the rest shows as “+N”, and the winner always shows), the 3-second clock, the draw and **who won**. None of it is stored: the list only exists during the draw, and it does not go to the Price table.
- **Refresh:** the button at the end of the market bar (on phones, next to the funnel) reloads the screen with the same filters and page, without touching any filter. Once used, it comes back in **5 seconds** — and no listing slips by in the meantime: a new listing stays on hold for 2 minutes, so refreshing like this shows it well before it is released.

### Buy in bulk

On an item's panel, the **Buy in bulk** button only asks for the number: the game gathers the **cheapest** listings, each at **its own price**, and shows the total before you buy (2 at 1kk and 4 at 1.2kk make 6 for 6.8kk), with the price ladder and the list of sellers.

- Your own listings, the ones still on **hold** and the ones in the release **draw** are left out: it only takes what a click would buy right away.
- What the screen shows is the ceiling: no unit above the quote's **highest price**, and never more than the **total**. If a listing is gone before you buy, the next cheapest within those two limits fills in; if there is none, the purchase takes less and tells you how much.
- One purchase goes through up to **500 listings**. Pokemon and the numbered pieces (Houses and Bicycles) are not included.

### Diamonds are not sold

The Market **does not trade diamonds**. Until Oct 27, 2026 there was a third tab where diamonds bought with money were sold for Coins or Gems; it is gone, and the diamond listings still open went back to their owners, with a notice. Diamonds are the Shop's currency: they cannot be sold, on the Market or outside it.

### Boarding at the fair

A listed pokemon does not sit on a shelf: it stays at the **fair**, where the handlers look after it until someone takes it home. That is why **only pokemon** pay a daily fee — **100,000 Coins a day**, from 1 to 30 days, chosen when you publish and paid up front.

- **Items pay nothing** and never expire: a shelf does not eat.
- Sold early? The days already paid **do not come back** — the handlers cared for the days they cared for.
- Nobody took it? When the term ends the pokemon **returns to your Depot** on its own — right away, even with the game open, and with a notice saying what came back.
- Need more time? In **Edit**, **Extend the stay** adds days to the same listing, paid up front at the same daily fee — up to 30 days ahead. The price, the hold, the Favorites stars and the Trade conversations stay as they were.

### The commission

| Rule | Fee |
| --- | --- |
| Listing priced in **Gold** | 15% |
| Item in **Gems** | 15% |
| **Pokemon** in Gems — up to 500 | 13% |
| **Pokemon** in Gems — up to 5.000 | 10% |
| **Pokemon** in Gems — above that | 7,5% |

The commission comes out of the **seller**: listing for 100 Gold pays you **85**; for 100 Gems pays you **85**. The buyer pays exactly what is on the shelf.

For a **pokemon** priced in Gems the fee is **tiered**, like income tax: each slice of the price pays its own rate, not the highest one. On a 10,000 Gem pokemon the first 500 pay 13%, the next slice pays 10% and only what goes past 5,000 pays 7,5% — the seller gets **9.110**. The bigger the sale, the lower the effective fee, and raising the price never lowers what you receive.

Items in Gems pay 15% at any value. Only the pokemon is tiered, because only it cannot be bought in pieces: each one is a unique item and the sale is the whole listing. In a stack, the buyer picks the size of the purchase.

**Where the Gem commission goes:** it leaves circulation at the sale — it goes to no player. At the end of each month, up to **50%** of what it added up to that month goes back, in Gems, to the best Ranked PvP players (the Monthly PvP Top, after the team's review); the rest stays with the project: it becomes SOL for the network fees of deposits and withdrawals, or pays costs.

### You get paid when you log in

The sale lands in a **mailbox**. Next time you open the game (or within a minute, if you are already in), the money arrives and a notice tells you what sold and for how much. It works that way because the seller is almost always offline at the moment of sale.

### The price lock

> When you buy, the game sends along **the price that was on your screen**. If the seller raised it between your click and the message arriving, the purchase is **refused** instead of charging the new price. If the price **dropped**, you pay the cheaper one. The currency is under the same lock — a 100-gold listing that turns into 100 gems is refused.

### The listing sheet

Click a listed pokemon's artwork (or **View sheet**) to open everything about it: level, XP and progress to the next one, the six stats with each IV (SPD shortens cooldowns), quality, calculator score, shine, and what each potency would be worth on that creature. It is the only honest way to judge a price.

## Diamond Shop

The GAME's shop. You pay in **Diamonds**, bought with real money (card or PIX), and they are **gone once spent**. Do not confuse them with **Gems**, which belong to the Community Market and come back as USDT. The shop is split into sections — the same ones on this page.

### Buying diamonds

The **Buy Diamonds** button, at the top of the Shop, opens the packs (or any other amount), paid by **PIX** — which asks for a CPF, for tax records only — or **card**. The balance comes in by itself as soon as the payment is confirmed. The price per diamond **drops with quantity**: the big packs show the discount on the card itself. Short of diamonds for a product? Its button opens the purchase with what is missing.

> Diamonds are consumed: they are spent in the Shop and cannot be withdrawn or transferred. A purchase can be cancelled within 7 days, and that covers only the purchased diamonds still on the account. You can also earn diamonds without paying — see Earn diamonds.

### VIP

| Effect | Rule |
| --- | --- |
| +50% XP | on the trainer AND the pokemon |
| Auto-Catch | unlocks the **Throw until Catch** and **Throw Nonstop** automations |
| Exclusive outfits | the Gamer VIP Outfit and the Gamer VIP Outfit II |
| VIP emojis | in chat |

| Item | Price | Effect |
| --- | --- | --- |
| 30 Days of VIP | 10 💎 | 30 days of VIP: +50% XP (trainer and Pokemon), Auto-Catch and an exclusive outfit in the Outfits tab. |
| 60 Days of VIP | 17 💎 | 60 days of VIP: +50% XP (trainer and Pokemon), Auto-Catch and an exclusive outfit in the Outfits tab. |
| 90 Days of VIP | 25 💎 | 90 days of VIP: +50% XP (trainer and Pokemon), Auto-Catch and an exclusive outfit in the Outfits tab. |

Renewing **extends** rather than restarts: buying 30 days with 10 left gives you 40. The remaining time shows on your panel, in days, with the blue tag.

### Boosts

Five types, eight durations each (from 1 hour to 30 days). Price in diamonds:

| Effect | 1h 💎 | 2h 💎 | 3h 💎 | 6h 💎 | 12h 💎 | 24h 💎 | 7d 💎 | 30d 💎 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| XP Boost Trainer*×1.5* | 3 | 6 | 8 | 12 | 20 | 29 | 175 | 645 |
| XP Boost Pokemon*×1.5* | 3 | 6 | 8 | 12 | 20 | 29 | 175 | 645 |
| Loot Boost*×1.4* | 6 | 12 | 15 | 24 | 40 | 58 | 350 | 1,290 |
| Capture Boost*×2* | 6 | 12 | 15 | 24 | 40 | 58 | 350 | 1,290 |
| Shiny Secret Lure*×2* | 6 | 12 | 15 | 24 | 40 | 58 | 350 | 1,290 |

- They **do not stack**: buying the same type again **extends** the running one.
- No daily limit: buy as many as you want, whenever you want.
- Different types run together — three active boosts show as three rows on your panel, each with its own countdown.
- The **Guild Boost** is not sold here: it turns on when the members fill the guild bank (see Guilds).

### Bundles

Two or three boosts together, for **one day**, **one week** or **one month**, cheaper than their sum — the card shows what they would cost separately, and the 7- and 30-day ones also what the loose days would cost. The 7-day and the 30-day **Trainer Pack** come with **1 Exp. Share** as a gift.

| Item | Price | Effect |
| --- | --- | --- |
| Shiny Hunter Pack (24h) | 100 💎 | Capture Boost (24h) + Shiny Secret Lure (24h), for 24 hours. Bought separately they would cost 116 💎. Does not stack: buying again extends the timer. |
| Shiny Hunter Pack (7d) | 600 💎 | Capture Boost (7d) + Shiny Secret Lure (7d), for 7 days. Bought separately they would cost 700 💎. Does not stack: buying again extends the timer. |
| Shiny Hunter Pack (30d) | 2,000 💎 | Capture Boost (30d) + Shiny Secret Lure (30d), for 30 days. Bought separately they would cost 2580 💎. Does not stack: buying again extends the timer. |
| Trainer Pack (24h) | 50 💎 | XP Boost Trainer (24h) + XP Boost Pokemon (24h), for 24 hours. Bought separately they would cost 58 💎. Does not stack: buying again extends the timer. |
| Trainer Pack (7d) | 300 💎 | XP Boost Trainer (7d) + XP Boost Pokemon (7d), for 7 days, plus 1x Exp. Share free. Bought separately it would cost 400 💎. The boosts do not stack: buying again extends the timer. |
| Trainer Pack (30d) | 1,000 💎 | XP Boost Trainer (30d) + XP Boost Pokemon (30d), for 30 days, plus 1x Exp. Share free. Bought separately it would cost 1340 💎. The boosts do not stack: buying again extends the timer. |
| Farmer Pack (24h) | 100 💎 | XP Boost Trainer (24h) + XP Boost Pokemon (24h) + Loot Boost (24h), for 24 hours. Bought separately they would cost 116 💎. Does not stack: buying again extends the timer. |
| Farmer Pack (7d) | 600 💎 | XP Boost Trainer (7d) + XP Boost Pokemon (7d) + Loot Boost (7d), for 7 days. Bought separately they would cost 700 💎. Does not stack: buying again extends the timer. |
| Farmer Pack (30d) | 2,000 💎 | XP Boost Trainer (30d) + XP Boost Pokemon (30d) + Loot Boost (30d), for 30 days. Bought separately they would cost 2580 💎. Does not stack: buying again extends the timer. |

### Late Joiner Boost

For whoever joined late: **XP ×10** (1000%) for your trainer and pokemon until your trainer reaches the **veterans' level** — the median of players with more than 30 days in the game, recalculated every day. The price is proportional to the XP still missing (1,000 💎 for the whole road, minimum 50 💎), there is no timer, and while it lasts fainting costs no XP. The full rules, with the reason behind each one, in Late Joiner Boost.

### Consumables

The consumables and utilities: the **Beast Ball** packs (with the discount badge on the bigger ones), the **Escape Rope** (see Fainting), the **Exp. Share** (see House & XP Share), extra **incubators** and the **Absorb Bulb** (see Incubator).

| Item | Price | Effect |
| --- | --- | --- |
| Beast Ball ×500 | 10 💎 | 500 Beast Balls — 2× the Ultra Ball catch rate. |
| Beast Ball ×1.000 | 18 💎 | 1.000 Beast Balls — 2× the Ultra Ball catch rate. |
| Beast Ball ×2.500 | 44 💎 | 2.500 Beast Balls — 2× the Ultra Ball catch rate. |
| Beast Ball ×5.000 | 85 💎 | 5.000 Beast Balls — 2× the Ultra Ball catch rate. |
| Beast Ball ×10.000 | 165 💎 | 10.000 Beast Balls — 2× the Ultra Ball catch rate. |
| Beast Ball ×25.000 | 400 💎 | 25.000 Beast Balls — 2× the Ultra Ball catch rate. |
| Beast Ball ×50.000 | 775 💎 | 50.000 Beast Balls — 2× the Ultra Ball catch rate. |
| Supply Pack | 5 💎 | 1000 Beast Balls. Can be bought once a week. |
| Escape Rope | 1 💎 | Leaves the hunt straight to the Pokemon Center, instantly, with no 3s wait. Consumes 1 on use. |
| Exp. Share | 50 💎 | Held item: passes 5% of the XP your battling pokemon earns on each kill to ONE pokemon in your team or Collection. NOT tradable — it stays on your account. To sell the pokemon, remove the item first (Backpack → Rare items → Exp. Share). |
| Incubator | 50 💎 | One more slot to hatch Mystery Eggs, yours forever. Every account has 1; you can have up to 6. Found in Backpack → Incubator. |
| Absorb Bulb | 3 💎 | Warms ONE Mystery Egg that is already in an incubator: it hatches 25% faster. The bulb BURNS OUT when that egg opens — the next one costs another 3 💎. Use it in Backpack → Incubator, on the egg that is hatching. |

> The **Supply Pack** is the best balls-per-diamond deal, but it can only be bought **once a week**. The countdown shows on the button itself while it is still on cooldown.

### Nick

The nick **can no longer be changed** in the Shop (the Name Change was removed on 2026-10-16): choose well when you sign up. Only the **team** changes it, in extreme cases — and the change reconnects you within a second (the nick is the session key), with the old name free for another player.

### Cosmetics: Name Tag and skins

Decorations for a **pokemon** — looks only. Species, stats, type, evolution and combat don't change at all.

- **Name Tag** (15 💎): gives your pokemon a **name**. Once bought, it waits in the backpack; use it from **Backpack → Rare Items → Name Tag**, pick the pokemon (team, Depot or Collection) and write up to **16 letters**. It is **single-use**: renaming again takes another tag.
- The name shows on the sheet (with the species right below), on the field, in the Center square, in chat, on the team, in the Depot, the Collection and the Market — and it **goes along** when the pokemon changes hands. In PvP your opponent still sees the species.
- **Skins** (30 💎 each): the costume that changes a pokemon's **sprite**. Each skin fits **one species and one colour** — the regular one only fits a regular pokemon and the shiny one only a shiny —, and a Mega's skin is a separate skin, for the Mega. It stays forever on the backpack's **Skins** tab: put it on and take it off whenever you want, and each unit dresses one pokemon.
- The skin belongs to the **owner**, not the pokemon: selling it doesn't take the skin along, and mega evolving a dressed pokemon takes the costume off (the skin is free again). Skins **are not traded** on the Community Market.
- Skins are **seasonal**: each collection is sold only in its season, in the Shop, and comes back at the same time the following year. The Halloween skins sale is over: whoever bought them keeps them forever, and the collection comes back to the Shop next Halloween.

> The nickname **accepts no swearing**: the game refuses it before spending the tag. And a name with **racism, prejudice or any offence** that slips past the filter can get the pokemon deleted without notice and the player banned. Every rename is logged.

| Item | Price | Effect |
| --- | --- | --- |
| Name Tag | 15 💎 | Gives your pokemon a NAME — looks only. The name shows on its sheet, in chat and on the Community Market, and travels with it when it changes owner. The species does not change. Single use: the tag is gone once used (Backpack → Rare items → Name Tag). |
| Skins | 30 💎 | 30 event skins, sold only while the event lasts — the rules are right above. |

### Outfits

Looks for your trainer, 30 💎 each. Buying equips it right away, and you switch between the ones you own whenever you want.

## Earn diamonds: referrals, votes and Discord

Diamonds can be bought — but they can also be earned. There are four paths, and none of them depends on luck. The diamonds from here are a **gift**: they work in the Shop and the guild bank, but **cannot be sold** — no diamond is sold on the Community Market.

### Refer & Earn

The **Refer & Earn** button, next to your coins on the trainer panel, shows **your link** and your code. Whoever creates an account through your link becomes your **referral**, forever:

- you get **10%** in diamonds of every diamond they **buy**, and **5%** of the **Gems** they deposit;
- the commission only comes from a real, confirmed payment, and waits as **To collect** until you click **Collect affiliate earnings**;
- whoever joined without a link can type the code of whoever brought them, but only **before their first** diamond purchase.

**Special Referral.** Streamers and partners with a deal have their own link and the **★ Official Influencer** badge, sometimes with a different percentage. Whoever **creates an account** through one of those links gets **24 hours of VIP** on their first login.

### Vote & Earn

The **star** square, in your portrait column, takes you to **TopIdle** with your nick already filled in. TopIdle allows **one vote a day**, and every **2 votes** drop **1 💎** into your account, on their own, within seconds. The Google account it asks for belongs to TopIdle, just to prove the vote comes from a person — it doesn't have to be your game account.

### Invite & Earn (Discord)

Everyone who joins our **Discord through YOUR invite link** counts as a point. It is not a draw, it is a count — and each milestone pays once: reaching 20 means you already collected 1, 5 and 10 along the way.

| Invited | Prize |
| --- | --- |
| 1 | 5 💎 |
| 5 | 10 💎 |
| 10 | 3 h of Shiny Secret Lure |
| 20 | 6 h of Capture Boost + 6 h of Shiny Secret Lure |
| 50 | 3 days of Shiny Secret Lure + 3 days of Capture Boost |
| 100 | 90-day VIP + 5,000 Beast Balls + 7 days of Shiny Secret Lure + 7 days of Capture Boost + 7 days of XP Boost + 7 days of XP Boost Pokemon |
| 500 | **PERMANENT VIP** + 10,000 Beast Balls + 30 days of XP Boost + 30 days of XP Boost Pokemon + 30 days of Loot Boost + 30 days of Capture Boost + 30 days of Shiny Secret Lure |

- Get your link on Discord, from the **Gerar meu convite** button. It lasts **1 day**: clicking again shows the same link until it expires, then the button makes a new one. The server's general link counts for no one.
- A point only counts for people joining with a **Discord account over 1 year old**, and whoever leaves the server stops counting.
- The prize comes as a **code**: in the **#reedem-codes** channel, the **Resgatar Recompensa de Referral** button shows yours (only you see it). In the game, type **/resgatar <code>** in chat — each code works once.

### IDLE Tag on Discord

Put our server's **IDLE** tag on your Discord profile: **5 💎 right away** the first time (once per Discord account) and **5 💎 more every 10 days in a row** with it.

- Took the tag off (switched to another server's, or left the server)? The clock **resets**, and the streak starts again when it comes back.
- The same rule of a Discord account over 1 year old applies.
- In #reedem-codes, the **Resgatar Recompensa de TAG** button shows your clock and the code that links Discord to your game account — the link is one to one, forever.

## Battle Pass

The **Pass** button, at the top next to the Market, is a **30-day login** track. Log in, claim the daily reward and move one step. Unlocks at level **10**.

- **One claim per day.** The day turns at **midnight Brasília time** (03:00 UTC).
- **Miss a day and the track goes back to Day 1.** The screen shows a timer with how long until the streak resets.
- After Day 30 a new cycle starts from Day 1.
- Days **7, 14, 21 and 28** are star days (⭐) with bigger rewards — they come with the claim, like any other day — and **Day 30** is the legendary one.

### Premium Pass

The Premium Pass is bought **separately**: **having VIP does not give you the Premium Pass** — they are two different Shop products (the Premium track even includes some VIP days among its rewards).

Costs **50 💎** and lasts **30 calendar days** from the purchase. While it lasts, every claim gives the day's **free AND Premium** reward. Bought it after claiming the free one? Today's Premium reward comes right away. The Premium is **not retroactive**: days you claimed before buying don't get the Premium reward afterwards — on the track, their Premium gets a **red ✕**, and the green ✓ only marks a day that gave the Premium. But the 30 days count from the purchase, so whatever goes past Day 30 carries over to the next cycle: buy it on Day 5 and you get the Premium rewards from Day 5 to 30, then Day 1 to 4 of the next cycle. Miss a day with the Premium active and the track goes back to Day 1 while the Premium clock keeps running. Buying again **extends** it by 30 days (up to 90 stacked).

> **The Premium is NOT retroactive.** Bought it on Day 6? The Premium rewards of Days 1 to 5 of this cycle have already passed and are not paid now. But nothing is lost: the track is a 30-day cycle and, after Day 30, it goes back to Day 1 — claiming every day, the 30 Premium days go through all 30 rewards: Day 6 to 30 now and Day 1 to 5 in the next cycle. It is the same as starting on Day 1, just in a different order. On the Pass screen, the **?** on the Premium plate shows this with your own day.

**Nothing from the Premium goes to the Community Market**: it is bought with diamonds, and everything it gives stays in your account — boosts, VIP days, Coins, balls and potions. Its Day 30 brings a **12h Shiny Secret Lure**, which is a gift: it does not carry the Beast Ball guarantee of the Lure bought in the Shop.

| Day | Free | Premium |
| --- | --- | --- |
| 1 | 250,000 Coins | 3 days of VIP + 500,000 Coins |
| 2 | 30× Ultra Ball | 60× Ultra Ball + 10× Beast Ball |
| 3 | XP Boost (1h) | XP Boost (3h) |
| 4 | 50× Revive | 100× Revive + 10× Max Revive |
| 5 | 500,000 Coins | 1,000,000 Coins + Loot Boost (1h) |
| 6 | 10× Beast Ball | 25× Beast Ball |
| 7 ⭐ | 1,000,000 Coins + Loot Boost (1h) | 3,000,000 Coins + XP Boost (6h) + Pokemon XP Boost (6h) + Loot Boost (6h) |
| 8 | 50× Ultra Ball | 100× Ultra Ball + Capture Boost (1h) |
| 9 | Pokemon XP Boost (1h) | Pokemon XP Boost (3h) |
| 10 | 750,000 Coins | 3 days of VIP + 1,500,000 Coins |
| 11 | 10× Max Revive | 30× Max Revive |
| 12 | 15× Beast Ball | 40× Beast Ball |
| 13 | Capture Boost (1h) | Capture Boost (3h) + Shiny Secret Lure (3h) |
| 14 ⭐ | 1,500,000 Coins + XP Boost (2h) | 4,000,000 Coins + Loot Boost (6h) |
| 15 | 10× Golden Potion | 20× Golden Potion + XP Boost (3h) |
| 16 | 1,000,000 Coins | 2,000,000 Coins |
| 17 | 25× Beast Ball | 50× Beast Ball |
| 18 | Shiny Secret Lure (1h) | Shiny Secret Lure (3h) |
| 19 | 100× Ultra Ball | 200× Ultra Ball + Loot Boost (2h) |
| 20 | 1,250,000 Coins | 3 days of VIP + 2,500,000 Coins |
| 21 ⭐ | 2,000,000 Coins + Capture Boost (2h) | 5,000,000 Coins + Capture Boost (6h) + Loot Boost (6h) |
| 22 | 30× Beast Ball | 60× Beast Ball |
| 23 | Loot Boost (2h) | Loot Boost (6h) |
| 24 | 20× Max Revive | 40× Max Revive + 5× Escape Rope |
| 25 | 1,500,000 Coins | 3,000,000 Coins + Pokemon XP Boost (6h) |
| 26 | Pokemon XP Boost (2h) | XP Boost (6h) |
| 27 | 40× Beast Ball | 80× Beast Ball |
| 28 ⭐ | 3,000,000 Coins + Shiny Secret Lure (2h) | 7,000,000 Coins + Shiny Secret Lure (6h) + Capture Boost (6h) |
| 29 | 3× Escape Rope + XP Boost (3h) | 3 days of VIP + Capture Boost (6h) + Shiny Secret Lure (6h) |
| 30 🏆 legendary | 1× Bronze Boss Token + 5,000,000 Coins + 50× Beast Ball | Shiny Secret Lure (12h) + 10,000,000 Coins + 100× Beast Ball + Capture Boost (12h) + 7 days of VIP |

## Gems: deposit and withdrawal

The **Gem** is the only in-game currency that **turns back into money**. You buy it by depositing **USDT** and withdraw it back as **USDT**, to your wallet or straight to an exchange (Binance, OKX, Bybit — any that accepts USDT on the chosen network).

### The prices

| Rule | Value |
| --- | --- |
| Buying 1 Gem | US$ 0.01 |
| Withdrawing 1 Gem | US$ 0.009 |
| Spread (the gap between the two ends) | 10% |
| Minimum withdrawal | 1,000 Gems (US$ 9.00) |
| Withdrawal network fee | paid by the project |

There is no per-transaction fee: the **10% spread** is the only charge when buying and selling Gems, and it pays for the servers and the development. The network fees of deposits and withdrawals (in SOL) come out of the **Market commission** on Gem sales — the **Market fees** line on the Project wallet panel shows how much of it has gone to that.

### How to DEPOSIT

1. Open **RMT → ↓ Deposit**: RMT is on the top menu, and **↓ Deposit** sits next to your Gem balance. The game shows an **address that is yours alone**, on the Solana (SPL) network.
2. Send **USDT** to that address from your wallet or exchange. **Check the network** — USDT exists on several, and sending on the wrong one loses the money.
3. The game confirms the deposit automatically and credits the Gems. Just wait for the network confirmations.

> **Send only USDT, and only on the stated network.** Any other token, or the same token on another chain, lands somewhere it cannot be recovered from. This is true of every deposit address of every service — it is not a limitation of ours.

### How to WITHDRAW (including straight to Binance)

1. On your exchange, go to **Deposit → USDT** and pick the **Solana (SPL)** network. Copy the deposit address it generates.
2. In the game, open **RMT → ↑ Withdraw**, paste that address, choose the same network and say how many Gems to withdraw (minimum 1,000).
3. Check the address **character by character** on the confirmation screen. A sent transfer **cannot be undone**.
4. The request goes through **approval by the team** before it is sent — there is no guaranteed deadline for it. You follow its status in the statement and, once it goes out, you get the transaction **hash** to check on the network explorer. The request **cannot be cancelled on screen**: to give it up while it has not been sent, open a ticket — the team refuses it and the Gems return to your balance.
5. If the team **refuses** the request, the Gems return to your balance right away, and in **My withdrawals** it shows as **refused by the team**, with the **reason** below. And your **next withdrawals stay locked** until the team releases them: open a ticket on Discord (the #open-ticket channel, the /ticket command in chat, or from the game itself: **Settings → Support**, topic "Withdrawal problems (RMT)") to talk to the team — the withdrawal screen shows the lock and the Discord button, and tells you when the team releases it.

> If your exchange asks for a **MEMO/TAG** alongside the address, it will **not** work for this withdrawal — there is no memo field here. Use your own wallet and transfer from there, or pick an exchange that gives a memo-free address.

### Treasury transparency

The project wallet is public. On the **Project wallet** panel, in the deposit and withdrawal windows, you see live what was **Raised**, **Withdrawn by players**, what is **On hand (treasury)** — the on-chain balance —, what is **Awaiting sweep** and the **Market fees**: the commission on Gem sales, with how much of it has already gone to SOL and costs. The **View on explorer** link opens the wallet so you can check.

> **Gems are never given away.** They do not drop, they do not come from quests, they do not come from bosses. Every Gem is born from a USDT deposit — that is what keeps the treasury solvent. There are two exceptions, and both come from money that already came in: the **referral commission** (whoever brought the player in receives, in Gems, a share of their deposit, paid for by the gap between the buy price and the withdrawal price) and the Monthly PvP Top prize: at most **50%** of the commission the Community Market charged that same month goes back, in Gems, to the best Ranked players — after the team's review.

## Every fee

Everything the game deducts, in a single table. If it is not here, it is not charged.

| Fee | How much | Who pays |
| --- | --- | --- |
| Community Market — POKEMON in Gems | 13% up to 500 · 10% up to 5.000 · 7,5% above that (tiered, on the sale) | the SELLER |
| Community Market — item in Gems | 15% of the sale | the SELLER |
| Community Market — Gold listing | 15% of the sale | the SELLER |
| Community Market — pokemon boarding | 100,000 Coins a day (pokemon only) | the SELLER |
| Community Market — loudspeaker (listing in chat) | 10,000,000 Coins per announcement | the SELLER |
| Sending Coins to a friend or through the Backpack Bank | 15% of the transfer, burned | the sender |
| Market (NPC) — buying | none | — |
| Market (NPC) — selling | none (pays the full catalogue value) | — |
| Gem — buying with USDT | US$ 0.01 per Gem | the buyer |
| Gem — withdrawing to USDT | US$ 0.009 per Gem (10% spread) | whoever withdraws |
| Gem — withdrawal network fee | paid by the project | — |
| Diamond Shop | none (the price is final) | — |
| Knockout — the whole team falls (hunt or boss) | 10% of the current level's XP | whoever falls |

> **The NPC Market charges nothing**: buying and selling are at catalogue value. The commissions live on the Community Market and come out of the SELLER, only when the sale happens: 15% on gold listings, 15% on items in Gems, and 13% up to 500 · 10% up to 5.000 · 7,5% above that on a POKEMON in Gems — tiered like income tax, so the bigger the sale the lower the effective fee. The gold one matches the Coins transfer between friends on purpose, so the Market is not a cheaper way to move gold. Boarding applies only to listed pokemon and is paid up front, when you publish.