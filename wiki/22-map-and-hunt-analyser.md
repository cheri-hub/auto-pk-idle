# Map and Hunt Analyser

> Parte: The world · [← voltar ao índice](index.md)

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
