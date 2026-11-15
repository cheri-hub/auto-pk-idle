# Bosses

> Parte: The world · [← voltar ao índice](index.md)

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
