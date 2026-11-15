// ==UserScript==
// @name         PokeIdle Clicker
// @namespace    pkidle-clicker
// @version      1.0
// @description  Joga pokébola automaticamente nos pokémon de "Nearby to Capture" (a cada 3 s)
// @match        https://pokeidle.io/*
// @run-at       document-idle
// @grant        none
// ==/UserScript==

(() => {
  const TOKEN = Symbol('pk');
  window.__pkToken = TOKEN;                       // só a instância com o token atual pode rodar
  if (window.__pkClicker) clearInterval(window.__pkClicker);

  const INTERVALO_MS = 3000;
  const TOAST_MS = 2500;
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
    const antes = t.getAttribute('style');        // guarda o estilo original
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

  // ---- leitura do jogo ----
  const lerBola = () => {
    const b = document.querySelector('#caidos-bolas .caidos-bola.on');
    if (!b) return { motivo: '⚠️ Nenhuma bola selecionada (.caidos-bola.on não existe)' };
    // saldo vem com separador de milhar ("você tem 8.906"): pega o número inteiro e tira . , espaços
    const qtd = parseInt((b.title.match(/(\d[\d.,\s]*)$/)?.[1] ?? '').replace(/\D/g, ''), 10);
    if (Number.isNaN(qtd)) return { motivo: `⚠️ Não consegui ler o saldo no title: "${b.title}"` };
    if (qtd <= 0) return { motivo: `⛔ Sem bolas (${b.title})` };
    return { bola: { qtd, nome: b.title.split('—')[0].trim() } };
  };

  const alvos = () =>
    [...document.querySelectorAll('#caidos-lista button.caido')]
      .filter(b => !b.disabled)
      .map(b => ({
        el: b,
        slot: b.dataset.slot,
        nome: b.querySelector('.caido-quem')?.textContent.trim(),
        restante: parseFloat(b.querySelector('.caido-tempo i')?.style.width) || 0,
      }))
      .sort((a, b) => a.restante - b.restante);

  const motivoUnico = (texto) => {
    if (texto === ultimoMotivo) return;
    ultimoMotivo = texto;
    console.log('[clicker]', texto);
    aviso(texto, '#ef4444');
  };

  // ---- ciclo ----
  function ciclo() {
    if (!ativo()) { clearInterval(id); return; }  // instância velha/parada: se desliga

    const { bola, motivo } = lerBola();
    if (!bola) return motivoUnico(motivo);

    const alvo = alvos()[0];
    if (!alvo) return motivoUnico('💤 Nenhum pokémon no chão para capturar');

    ultimoMotivo = '';
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
    window.__pkToken = null;                      // invalida qualquer instância desta versão
    clearInterval(id);
    aviso('⏹️ Clicker desligado', '#9ca3af');
    console.log('[clicker] desligado');
  };

  aviso('✅ Clicker ligado (3 s)');
  console.log('[clicker] ligado. Para desativar, digite: pkParar()');
})();
