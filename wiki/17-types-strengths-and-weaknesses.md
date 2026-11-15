# Types: strengths and weaknesses

> Parte: Fighting and catching · [← voltar ao índice](index.md)

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
