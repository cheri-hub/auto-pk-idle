# Gems: deposit and withdrawal

> Parte: Economy and money · [← voltar ao índice](index.md)

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
