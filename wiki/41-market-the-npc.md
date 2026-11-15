# Market (the NPC)

> Parte: Economy and money · [← voltar ao índice](index.md)

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
