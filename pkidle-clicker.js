// pkidle-clicker.js
// Auto-clicker de captura + compra automática de bolas e poções para o PokeIdle.
// Uso: F5 na página, cole todo este arquivo no console.
// Para desligar: pkParar()
(() => {
  const TOKEN = Symbol('pk');
  window.__pkToken = TOKEN;
  if (window.__pkClicker) clearInterval(window.__pkClicker);
 
  // ---- configuração ----
  const INTERVALO_MS = 500;
  const TOAST_MS = 750;
  const PAUSA_FALHA_MS = 15000;   // espera antes de tentar comprar de novo após uma falha
  const RESERVA_OURO = 0;         // ouro que nunca é gasto
  const BOLA_ALVO = 'Great Ball'; // bola usada nas capturas (compra e seleção automáticas)

  // O que comprar. 'estoque' devolve a quantidade atual; compra quando < minimo.
  //  atalho: 'max'  -> botão "Máx" do card (gasta quase todo o ouro, até 9999)
  //          número -> botão ×N do card (ex.: 100)
  const ITENS = [
    {
      nome: BOLA_ALVO, categoria: 'Pokebolas', digitar: 2000, minimo: 300, minLote: 50,
      estoque: () => {
        // painel de Automações lista todas as bolas, inclusive com 0
        const q = document.querySelector(`#auto-ball-opts .auto-chip[title^="${BOLA_ALVO}"] .q`);
        return q ? { nome: BOLA_ALVO, qtd: num(q.textContent) } : null;
      },
    },
    {
      nome: 'Small Potion', categoria: 'Poções', atalho: 100, minimo: 50, minLote: 100,
      estoque: () => {
        const q = document.querySelector('#auto-potion-opts .auto-chip[title^="Small Potion"] .q');
        return q ? { nome: 'Small Potion', qtd: num(q.textContent) } : null;
      },
    },
  ];

  const ativo = () => window.__pkToken === TOKEN;
  let total = 0;
  let ultimoMotivo = '';
  let timerToast;

  // ---- popup (canto inferior direito) ----
  const POS_NATIVO = {
    position: 'fixed', right: '16px', bottom: '16px', left: 'auto', top: 'auto',
    transform: 'none', 'z-index': '2147483647',
  };

  const avisoNativo = (texto) => {
    const t = document.getElementById('toast');
    if (!t) return false;
    const antes = t.getAttribute('style');
    Object.entries(POS_NATIVO).forEach(([k, v]) => t.style.setProperty(k, v, 'important'));
    t.textContent = texto;
    t.classList.remove('hidden');
    clearTimeout(timerToast);
    timerToast = setTimeout(() => {
      t.classList.add('hidden');
      antes === null ? t.removeAttribute('style') : t.setAttribute('style', antes);
    }, TOAST_MS);
    return true;
  };

  const avisoProprio = (texto, cor) => {
    let caixa = document.getElementById('pk-clicker-toasts');
    if (!caixa || !caixa.isConnected) {
      caixa = document.createElement('div');
      caixa.id = 'pk-clicker-toasts';
      caixa.style.cssText =
        'position:fixed;right:16px;bottom:16px;z-index:2147483647;display:flex;' +
        'flex-direction:column;gap:6px;align-items:flex-end;pointer-events:none;font:14px system-ui,sans-serif';
      document.body.appendChild(caixa);
    }
    const el = document.createElement('div');
    el.textContent = texto;
    el.style.cssText =
      `background:#111827;color:#fff;padding:10px 14px;border-radius:8px;border:1px solid ${cor};` +
      'box-shadow:0 2px 10px #000a;white-space:nowrap';
    caixa.appendChild(el);
    setTimeout(() => el.remove(), TOAST_MS);
  };

  const aviso = (texto, cor = '#fbbf24') => {
    let ok = false;
    try { ok = avisoNativo(texto); } catch (e) { console.warn('[clicker] toast nativo falhou', e); }
    if (!ok) { try { avisoProprio(texto, cor); } catch (e) { console.warn('[clicker] toast próprio falhou', e); } }
  };

  const motivoUnico = (texto) => {
    if (texto === ultimoMotivo) return;
    ultimoMotivo = texto;
    console.log('[clicker]', texto);
    aviso(texto, '#ef4444');
  };

  // ---- utilidades ----
  function num(s) { return parseInt(String(s ?? '').replace(/\D/g, ''), 10); }
  const espera = (ms) => new Promise((r) => setTimeout(r, ms));
  const ouro = () => num(document.getElementById('tr-gold')?.textContent);

  const apertarEsc = () => {
    const opts = { key: 'Escape', code: 'Escape', keyCode: 27, which: 27, bubbles: true, cancelable: true };
    for (const alvo of [document.activeElement, document, window]) {
      try { alvo?.dispatchEvent(new KeyboardEvent('keydown', opts)); } catch {}
      try { alvo?.dispatchEvent(new KeyboardEvent('keyup', opts)); } catch {}
    }
  };

  // ---- leitura do jogo ----
  const lerBola = () => {
    const b = document.querySelector('#caidos-bolas .caidos-bola.on');
    if (!b) return { motivo: '⚠️ Nenhuma bola selecionada (.caidos-bola.on não existe)' };
    const qtd = num(b.title.match(/(\d[\d.,\s]*)$/)?.[1]);
    if (Number.isNaN(qtd)) return { motivo: `⚠️ Não consegui ler o saldo no title: "${b.title}"` };
    if (qtd <= 0) return { motivo: `⛔ Sem bolas (${b.title})`, qtd };
    return { bola: { qtd, nome: b.title.split('—')[0].trim() } };
  };

  const alvos = () =>
    [...document.querySelectorAll('#caidos-lista button.caido')]
      .filter((b) => !b.disabled)
      .map((b) => ({
        el: b,
        slot: b.dataset.slot,
        nome: b.querySelector('.caido-quem')?.textContent.trim(),
        restante: parseFloat(b.querySelector('.caido-tempo i')?.style.width) || 0,
      }))
      .sort((a, b) => a.restante - b.restante);

  // ---- compra automática ----
  let comprando = false;
  let proxCompra = 0;

  const falha = (texto) => { proxCompra = Date.now() + PAUSA_FALHA_MS; motivoUnico(texto); return false; };

  // Compra um item já com o Market aberto. Devolve true se comprou.
  async function comprarItem(item, nomeAtual) {
    // 1) vai para a categoria certa (pelo texto, não pela posição)
    const cat = [...document.querySelectorAll('#mk-corpo .mk-cat')]
      .find((c) => c.textContent.includes(item.categoria));
    if (!cat) return falha(`⚠️ Categoria "${item.categoria}" não achada no Market`);
    cat.click();
    await espera(350);

    // 2) acha o card pelo nome
    const card = [...document.querySelectorAll('#mk-corpo .mk-card')]
      .find((c) => c.querySelector('.mk-nome')?.title.trim() === nomeAtual);
    if (!card) return falha(`⚠️ Card "${nomeAtual}" não achado no Market`);

    // 3) botão de quantidade: cada card tem ×10, ×100 e Máx, todos com .mk-max
    let lote;
    if (item.digitar) {
      // digita a quantidade no <input> do card (o max dele é o que o ouro alcança)
      const input = card.querySelector('.mk-qtd input');
      if (!input) return falha(`⚠️ Campo de quantidade não achado em "${nomeAtual}"`);
      const alcance = num(input.max);
      if (!Number.isNaN(alcance) && alcance < item.digitar) {
        return falha(`💸 Ouro insuficiente p/ ${nomeAtual} (alcança só ${alcance}, quer ${item.digitar})`);
      }
      // setter nativo + eventos, para o jogo perceber a mudança
      Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set.call(input, String(item.digitar));
      input.dispatchEvent(new Event('input', { bubbles: true }));
      input.dispatchEvent(new Event('change', { bubbles: true }));
      lote = num(input.value);
      if (lote !== item.digitar) return falha(`⚠️ Campo ficou em ${input.value}, esperado ${item.digitar}`);
    } else {
      const botoes = [...card.querySelectorAll('.mk-max')];
      const atalho = item.atalho === 'max'
        ? (card.querySelector('.mk-max[title*="áximo"]') ?? botoes[botoes.length - 1])
        : botoes.find((b) => num(b.textContent) === item.atalho && !b.title);
      if (!atalho) return falha(`⚠️ Botão de quantidade não achado em "${nomeAtual}"`);

      lote = num(atalho.dataset.q);
      if (Number.isNaN(lote) || lote < item.minLote) {
        return falha(`💸 Ouro insuficiente p/ ${nomeAtual} (lote = ${Number.isNaN(lote) ? '?' : lote})`);
      }
      atalho.click();
    }
    await espera(300);

    // 4) confere preço e saldo
    const btn = card.querySelector('button.mk-pal-comprar') ?? card.querySelector('button.mk-acao');
    if (!btn || btn.disabled) return falha(`⚠️ Botão Comprar indisponível em "${nomeAtual}"`);

    const preco = num(btn.querySelector('.mk-moeda')?.textContent);
    const unit = num(card.querySelector('.mk-pal-preco .mk-moeda')?.textContent);
    const saldo = ouro();
    if (Number.isNaN(preco) || Number.isNaN(saldo)) return falha('⚠️ Não consegui ler preço/ouro');
    if (!Number.isNaN(unit) && Math.abs(preco - unit * lote) > unit) {
      return falha(`⚠️ Preço inesperado (${preco} ≠ ${unit} × ${lote}) — compra cancelada`);
    }
    if (saldo - preco < RESERVA_OURO) return falha(`💸 Compra deixaria o ouro abaixo da reserva (${saldo} − ${preco})`);

    btn.click();
    ultimoMotivo = '';
    const msg = `🛒 ${nomeAtual} ×${lote} por ${preco} · ouro ~${saldo - preco}`;
    console.log('[clicker]', msg);
    aviso(msg, '#22c55e');
    await espera(400);
    return true;
  }

  async function comprar() {
    if (comprando || Date.now() < proxCompra) return;

    // decide o que está faltando
    const faltando = [];
    for (const item of ITENS) {
      const e = item.estoque();
      if (e && !Number.isNaN(e.qtd) && e.qtd < item.minimo) faltando.push({ item, nome: e.nome });
    }
    if (!faltando.length) return;

    comprando = true;
    let aberto = false;
    try {
      document.querySelector('button[data-modal="market"]')?.click();
      aberto = true;
      await espera(600);
      for (const { item, nome } of faltando) {
        if (!(await comprarItem(item, nome))) break;
      }
    } catch (e) {
      console.warn('[clicker] erro na compra', e);
      proxCompra = Date.now() + PAUSA_FALHA_MS;
    } finally {
      if (aberto) apertarEsc();
      comprando = false;
    }
  }

  // ---- diagnóstico: corpos que apareceram / receberam bola / sumiram sem bola ----
  const stats = { apareceram: 0, lancados: 0, semBola: 0 };
  let slotsAnt = new Set();
  const clicados = new Map();   // slot -> momento do último clique
  window.pkStats = () => {
    const r = { ...stats, cobertura: stats.apareceram ? Math.round((100 * stats.lancados) / stats.apareceram) + '%' : '-' };
    console.log('[clicker] stats', r);
    return r;
  };
  function rastrear() {
    const atuais = new Set([...document.querySelectorAll('#caidos-lista button.caido')].map((b) => b.dataset.slot));
    atuais.forEach((s) => { if (!slotsAnt.has(s)) stats.apareceram++; });
    slotsAnt.forEach((s) => {
      if (!atuais.has(s)) {
        if (clicados.has(s)) clicados.delete(s); else stats.semBola++;
      }
    });
    slotsAnt = atuais;
  }

  // ---- ciclo ----
  function ciclo() {
    if (!ativo()) { clearInterval(id); return; }

    rastrear();
    comprar();                                    // sem await: roda em paralelo

    // seleciona a bola alvo se ela existir na barra e não estiver ativa (senão fica na atual)
    const alvoBola = [...document.querySelectorAll('#caidos-bolas .caidos-bola')]
      .find((x) => x.title.startsWith(BOLA_ALVO));
    if (alvoBola && !alvoBola.classList.contains('on')) alvoBola.click();

    const { bola, motivo } = lerBola();
    if (!bola) return motivoUnico(motivo);

    const todos = alvos();
    if (!todos.length) return motivoUnico('💤 Nenhum pokémon no chão para capturar');
    // um clique por corpo: pula quem já foi clicado há menos de 3 s (o corpo fica na lista um tempo após a bola)
    const agora = Date.now();
    const alvo = todos.find((a) => { const t = clicados.get(a.slot); return !t || agora - t > 3000; });
    if (!alvo) return;

    ultimoMotivo = '';
    clicados.set(alvo.slot, agora);
    stats.lancados++;
    alvo.el.click();
    total++;
    const msg = `🎯 ${bola.nome} → ${alvo.nome} · restam ${bola.qtd - 1} · total ${total}`;
    console.log('[clicker]', msg);
    aviso(msg);
  }

  // ---- start / stop ----
  const id = setInterval(ciclo, INTERVALO_MS);
  window.__pkClicker = id;

  window.pkParar = () => {
    window.__pkToken = null;
    clearInterval(id);
    aviso('⏹️ Clicker desligado', '#9ca3af');
    console.log('[clicker] desligado');
  };

  aviso(`✅ Clicker ligado (${INTERVALO_MS} ms)`);
  console.log('[clicker] ligado. Para desativar, digite: pkParar()');
})();
