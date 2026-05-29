/* ── Dev · Claude 계정 모니터 ──
 * 여러 Claude Code 계정의 작업량·토큰 리셋을 한눈에 보고, 상태를 귀여운 CSS 캐릭터로 시각화.
 * - 표시·추적 설정: localStorage 'claude_accounts'
 * - 실제 수치: data/claude-usage.generated.json (node scripts/claude-usage-sync.js 산출, 없으면 example 폴백)
 * - reset 카운트다운: account.sessionStart + resetWindowHours (또는 usage.resetAt)
 */
const ClaudeMon = (() => {
  'use strict';

  const ACCOUNTS_KEY = 'claude_accounts';
  const DATA_PATHS = [
    './data/claude-usage.generated.json',
    './data/claude-usage.example.json',
  ];
  const AVATARS = ['🤖', '🐱', '🦊', '🐼', '🦉', '🐧', '🐸', '🦄'];
  const COLORS  = ['#7c83ff', '#64ffda', '#ff6b9d', '#ffd166', '#ff9f43', '#48dbfb'];
  const PLAN_LABELS = { pro: 'Pro', max5: 'Max 5×', max20: 'Max 20×', custom: 'Custom' };
  const DEFAULT_WINDOW = 5;          // 시간
  const FIRE_TOKENS = 500000;        // 오늘 토큰 이 이상이면 "열일 중 🔥"

  let _inited = false;
  let _bound = false;
  let _accounts = [];
  let _usage = null;
  let _usageLoaded = false;
  let _tickTimer = null;

  // ── 유틸 ──────────────────────────────────────────────────────────────────
  function _esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function _uid() {
    return 'acc-' + Math.random().toString(36).slice(2, 8);
  }
  function _compact(n) {
    n = Number(n) || 0;
    if (n >= 1e6) return (n / 1e6).toFixed(1) + 'M';
    if (n >= 1e4) return Math.round(n / 1e3) + 'K';
    if (n >= 1e3) return (n / 1e3).toFixed(1) + 'K';
    return String(n);
  }
  function _fmtDur(ms) {
    const s = Math.max(0, Math.floor(ms / 1000));
    const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), sec = s % 60;
    const p = (v) => String(v).padStart(2, '0');
    return h > 0 ? `${h}:${p(m)}:${p(sec)}` : `${m}:${p(sec)}`;
  }

  function _loadAccounts() {
    try { _accounts = JSON.parse(localStorage.getItem(ACCOUNTS_KEY) || '[]'); }
    catch (_) { _accounts = []; }
    if (!Array.isArray(_accounts)) _accounts = [];
  }
  function _saveAccounts() {
    localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(_accounts));
  }
  function _accById(id) { return _accounts.find((a) => a.id === id); }

  async function _loadUsage(force) {
    if (_usageLoaded && !force) return;
    const ver = window.BUILD_VER || '';
    for (const p of DATA_PATHS) {
      try {
        const res = await fetch(`${p}?v=${ver}${force ? '&t=' + Date.now() : ''}`);
        if (!res.ok) continue;
        const data = await res.json();
        if (data && data.accounts) { _usage = data; _usageLoaded = true; return; }
      } catch (_) { /* 다음 경로 */ }
    }
    _usage = { accounts: {} };
    _usageLoaded = true;
  }

  function _usageFor(acc) {
    const key = acc.usageKey || acc.id;
    return _usage && _usage.accounts ? _usage.accounts[key] : null;
  }

  // 비어 있으면 usage(generated/example)의 계정으로 시드
  function _seedFromUsageIfEmpty() {
    if (_accounts.length || !_usage || !_usage.accounts) return;
    const keys = Object.keys(_usage.accounts);
    if (!keys.length) return;
    _accounts = keys.map((key, i) => {
      const u = _usage.accounts[key];
      return {
        id: key,
        label: u.label || key,
        plan: u.plan || 'custom',
        avatar: AVATARS[i % AVATARS.length],
        color: COLORS[i % COLORS.length],
        resetWindowHours: DEFAULT_WINDOW,
        sessionStart: null,
        usageKey: key,
      };
    });
    _saveAccounts();
  }

  // ── 상태 도출 ────────────────────────────────────────────────────────────
  function _winMs(acc) { return (Number(acc.resetWindowHours) || DEFAULT_WINDOW) * 3600 * 1000; }

  function _resetAtMs(acc) {
    if (acc.sessionStart) {
      const s = Date.parse(acc.sessionStart);
      if (!isNaN(s)) return s + _winMs(acc);
    }
    const u = _usageFor(acc);
    if (u && u.resetAt) {
      const r = Date.parse(u.resetAt);
      if (!isNaN(r)) return r;
    }
    return null;
  }

  function _state(acc) {
    const now = Date.now();
    const resetAt = _resetAtMs(acc);
    const u = _usageFor(acc);
    const todayTok = (u && u.today && u.today.tokens) || 0;

    if (resetAt == null || now >= resetAt) {
      return { key: 'resting', fire: false, available: true, remainingMs: 0, pct: 100, resetAt };
    }
    let startMs;
    if (acc.sessionStart) {
      const s = Date.parse(acc.sessionStart);
      startMs = isNaN(s) ? resetAt - _winMs(acc) : s;
    } else {
      startMs = resetAt - _winMs(acc);
    }
    const total = Math.max(1, resetAt - startMs);
    const remaining = resetAt - now;
    const pct = Math.min(100, Math.max(0, ((total - remaining) / total) * 100));
    const near = remaining < total * 0.2;
    return { key: near ? 'tired' : 'working', fire: todayTok >= FIRE_TOKENS, available: false, remainingMs: remaining, pct, resetAt };
  }

  const STATE_TEXT = {
    working: '일하는 중 ⌨️',
    tired:   '곧 리셋… 힘내요 💦',
    resting: '충전 완료 · 대기 💤',
  };
  function _stateText(st) {
    if (st.key === 'working' && st.fire) return '열심히 일하는 중 🔥';
    return STATE_TEXT[st.key] || '';
  }

  // ── 렌더 ──────────────────────────────────────────────────────────────────
  function _avatarHtml(acc, st) {
    const cls = `is-${st.key}${st.fire ? ' has-fire' : ''}`;
    return (
      `<div class="claude-ring" data-acc="${_esc(acc.id)}" style="--pct:${st.pct.toFixed(1)};--ring:${_esc(acc.color)}">` +
        `<div class="claude-avatar ${cls}" data-acc="${_esc(acc.id)}">` +
          `<span class="claude-face">${_esc(acc.avatar || '🤖')}</span>` +
          `<span class="claude-fx fx-type">⌨️</span>` +
          `<span class="claude-fx fx-zzz">💤</span>` +
          `<span class="claude-fx fx-sweat">💦</span>` +
          `<span class="claude-fx fx-fire">🔥</span>` +
        `</div>` +
      `</div>`
    );
  }

  function _sparkHtml(u) {
    const daily = (u && Array.isArray(u.daily)) ? u.daily : [];
    if (!daily.length) return '<div class="claude-spark claude-spark-empty">데이터 없음</div>';
    const max = Math.max(1, ...daily.map((d) => d.messages || 0));
    const bars = daily.map((d) => {
      const h = Math.max(6, Math.round(((d.messages || 0) / max) * 100));
      return `<span class="claude-bar" style="height:${h}%" title="${_esc(d.date)} · ${d.messages || 0} msg"></span>`;
    }).join('');
    return `<div class="claude-spark" title="최근 7일 메시지">${bars}</div>`;
  }

  function _cardHtml(acc) {
    const st = _state(acc);
    const u = _usageFor(acc);
    const today = (u && u.today) || { messages: 0, sessions: 0, tokens: 0 };
    const totals = (u && u.totals) || null;
    const plan = PLAN_LABELS[acc.plan] || acc.plan || 'Custom';
    const countdown = st.available ? '사용 가능 ✓' : `리셋까지 ${_fmtDur(st.remainingMs)}`;

    const totalStr = totals
      ? `누적 ${_compact(totals.messages)} msg · ${_compact(totals.sessions)}세션`
      : '실데이터 미연동';

    const actionBtn = st.available
      ? `<button class="btn btn-sm" data-act="session" data-acc="${_esc(acc.id)}">▶ 세션 시작</button>`
      : `<button class="btn btn-sm" data-act="reset" data-acc="${_esc(acc.id)}">↺ 리셋</button>`;

    return (
      `<div class="card claude-card" data-acc="${_esc(acc.id)}" style="--acc:${_esc(acc.color)}">` +
        `<div class="claude-card-top">` +
          _avatarHtml(acc, st) +
          `<div class="claude-card-meta">` +
            `<div class="claude-name-row">` +
              `<span class="claude-name">${_esc(acc.label)}</span>` +
              `<span class="badge claude-plan">${_esc(plan)}</span>` +
            `</div>` +
            `<div class="claude-countdown" data-acc="${_esc(acc.id)}">${countdown}</div>` +
            `<div class="claude-statestr" data-acc="${_esc(acc.id)}">${_stateText(st)}</div>` +
          `</div>` +
          `<button class="btn btn-sm btn-icon claude-edit" data-act="edit" data-acc="${_esc(acc.id)}" title="편집">⋯</button>` +
        `</div>` +
        `<div class="claude-stats">` +
          `<div class="claude-stat"><b>${_compact(today.messages)}</b><small>오늘 메시지</small></div>` +
          `<div class="claude-stat"><b>${_compact(today.sessions)}</b><small>세션</small></div>` +
          `<div class="claude-stat"><b>${_compact(today.tokens)}</b><small>토큰</small></div>` +
        `</div>` +
        _sparkHtml(u) +
        `<div class="claude-actions">` +
          actionBtn +
          `<span class="claude-sub">${totalStr}</span>` +
        `</div>` +
      `</div>`
    );
  }

  function _render() {
    const grid = document.getElementById('claude-grid');
    if (!grid) return;

    if (!_accounts.length) {
      grid.innerHTML =
        `<div class="card" style="grid-column:1/-1;">` +
          `<div class="empty-state">` +
            `<div class="empty-icon">🤖</div>` +
            `<div class="empty-text">아직 등록된 Claude 계정이 없습니다.<br>“+ 계정 추가”로 시작하세요.</div>` +
            `<button class="btn btn-primary" style="margin-top:14px;" onclick="ClaudeMon.openAddModal()">+ 계정 추가</button>` +
          `</div>` +
        `</div>`;
      _updateSummary();
      return;
    }

    grid.innerHTML = _accounts.map(_cardHtml).join('');
    _updateSummary();
  }

  function _updateSummary() {
    const el = document.getElementById('claude-summary');
    if (!el) return;
    if (!_accounts.length) { el.textContent = ''; return; }
    let working = 0, available = 0;
    _accounts.forEach((a) => { _state(a).available ? available++ : working++; });
    el.textContent = `계정 ${_accounts.length} · 사용 중 ${working} · 사용 가능 ${available}`;
  }

  // ── 라이브 갱신 (1초) ──────────────────────────────────────────────────────
  function _tick() {
    const panel = document.getElementById('panel-dev-claude');
    if (!panel || !panel.classList.contains('active')) return;
    _accounts.forEach((acc) => {
      const st = _state(acc);
      const ring = document.querySelector(`.claude-ring[data-acc="${CSS.escape(acc.id)}"]`);
      if (ring) ring.style.setProperty('--pct', st.pct.toFixed(1));
      const avatar = document.querySelector(`.claude-avatar[data-acc="${CSS.escape(acc.id)}"]`);
      if (avatar) {
        const cls = `claude-avatar is-${st.key}${st.fire ? ' has-fire' : ''}`;
        if (avatar.className !== cls) avatar.className = cls;
      }
      const cd = document.querySelector(`.claude-countdown[data-acc="${CSS.escape(acc.id)}"]`);
      if (cd) cd.textContent = st.available ? '사용 가능 ✓' : `리셋까지 ${_fmtDur(st.remainingMs)}`;
      const ss = document.querySelector(`.claude-statestr[data-acc="${CSS.escape(acc.id)}"]`);
      if (ss) ss.textContent = _stateText(st);
    });
    _updateSummary();
  }

  // ── 액션 ──────────────────────────────────────────────────────────────────
  function startSession(id) {
    const a = _accById(id); if (!a) return;
    a.sessionStart = new Date().toISOString();
    _saveAccounts(); _render();
    if (typeof toast === 'function') toast(`${a.label} 세션 시작 — ${a.resetWindowHours || DEFAULT_WINDOW}시간 후 리셋`, 'success');
  }
  function resetSession(id) {
    const a = _accById(id); if (!a) return;
    a.sessionStart = null;
    _saveAccounts(); _render();
  }

  async function refresh() {
    await _loadUsage(true);
    _render();
    if (typeof toast === 'function') toast('사용량 데이터를 새로고침했습니다.', 'success');
  }

  // ── 모달 ──────────────────────────────────────────────────────────────────
  function _modalHtml(acc) {
    const isEdit = !!acc;
    const cur = acc || { label: '', plan: 'max5', avatar: AVATARS[0], color: COLORS[0], resetWindowHours: DEFAULT_WINDOW, usageKey: '' };
    const usageKeys = (_usage && _usage.accounts) ? Object.keys(_usage.accounts) : [];

    const avatarBtns = AVATARS.map((e) =>
      `<button type="button" class="claude-pick claude-pick-avatar${e === cur.avatar ? ' active' : ''}" data-act="avatar" data-val="${_esc(e)}">${e}</button>`
    ).join('');
    const colorBtns = COLORS.map((c) =>
      `<button type="button" class="claude-pick claude-pick-color${c === cur.color ? ' active' : ''}" data-act="color" data-val="${_esc(c)}" style="background:${_esc(c)}"></button>`
    ).join('');
    const planOpts = Object.entries(PLAN_LABELS).map(([v, l]) =>
      `<option value="${v}"${v === cur.plan ? ' selected' : ''}>${_esc(l)}</option>`
    ).join('');
    const usageOpts = `<option value="">(연동 안 함)</option>` + usageKeys.map((k) =>
      `<option value="${_esc(k)}"${k === (cur.usageKey || '') ? ' selected' : ''}>${_esc(k)}</option>`
    ).join('');

    return (
      `<div class="modal-overlay" data-act="overlay">` +
        `<div class="modal claude-modal" data-acc="${isEdit ? _esc(acc.id) : ''}">` +
          `<div class="claude-modal-title">${isEdit ? '계정 편집' : '계정 추가'}</div>` +
          `<label class="claude-field"><span>이름</span>` +
            `<input id="claude-f-label" class="input" type="text" maxlength="40" placeholder="예: 메인 (Max20)" value="${_esc(cur.label)}"></label>` +
          `<label class="claude-field"><span>플랜</span>` +
            `<select id="claude-f-plan" class="input">${planOpts}</select></label>` +
          `<div class="claude-field"><span>아바타</span><div class="claude-pick-row" id="claude-f-avatar">${avatarBtns}</div></div>` +
          `<div class="claude-field"><span>색상</span><div class="claude-pick-row" id="claude-f-color">${colorBtns}</div></div>` +
          `<label class="claude-field"><span>리셋 주기(시간)</span>` +
            `<input id="claude-f-window" class="input" type="number" min="0.1" step="0.5" value="${_esc(cur.resetWindowHours || DEFAULT_WINDOW)}"></label>` +
          `<label class="claude-field"><span>실데이터 연동 키</span>` +
            `<select id="claude-f-usage" class="input">${usageOpts}</select></label>` +
          `<div class="claude-modal-foot">` +
            (isEdit ? `<button class="btn btn-sm claude-del" data-act="delete" data-acc="${_esc(acc.id)}">삭제</button>` : `<span></span>`) +
            `<div style="display:flex;gap:8px;">` +
              `<button class="btn btn-sm" data-act="cancel">취소</button>` +
              `<button class="btn btn-sm btn-primary" data-act="save">저장</button>` +
            `</div>` +
          `</div>` +
        `</div>` +
      `</div>`
    );
  }

  function openAddModal() { _openModal(null); }
  function openEditModal(id) { _openModal(_accById(id) || null); }

  function _openModal(acc) {
    const root = document.getElementById('claude-modal-root');
    if (!root) return;
    root.innerHTML = _modalHtml(acc);
    const labelEl = document.getElementById('claude-f-label');
    if (labelEl) labelEl.focus();
  }

  function closeModal() {
    const root = document.getElementById('claude-modal-root');
    if (root) root.innerHTML = '';
  }

  function _saveFromModal() {
    const root = document.getElementById('claude-modal-root');
    const modal = root && root.querySelector('.claude-modal');
    if (!modal) return;
    const label = (document.getElementById('claude-f-label').value || '').trim();
    if (!label) { if (typeof toast === 'function') toast('이름을 입력하세요.', 'error'); return; }
    const plan = document.getElementById('claude-f-plan').value;
    const win = parseFloat(document.getElementById('claude-f-window').value) || DEFAULT_WINDOW;
    const usageKey = document.getElementById('claude-f-usage').value;
    const avatar = (modal.querySelector('.claude-pick-avatar.active') || {}).dataset?.val || AVATARS[0];
    const color = (modal.querySelector('.claude-pick-color.active') || {}).dataset?.val || COLORS[0];

    const id = modal.dataset.acc;
    if (id) {
      const a = _accById(id);
      if (a) Object.assign(a, { label, plan, resetWindowHours: win, usageKey, avatar, color });
    } else {
      _accounts.push({ id: _uid(), label, plan, avatar, color, resetWindowHours: win, sessionStart: null, usageKey });
    }
    _saveAccounts();
    closeModal();
    _render();
  }

  function deleteAccount(id, btn) {
    // 두 번 클릭 확인
    if (btn && btn.dataset.armed !== '1') {
      btn.dataset.armed = '1';
      btn.textContent = '한번 더 누르면 삭제';
      btn.classList.add('btn-danger');
      return;
    }
    _accounts = _accounts.filter((a) => a.id !== id);
    _saveAccounts();
    closeModal();
    _render();
    if (typeof toast === 'function') toast('계정을 삭제했습니다.', 'success');
  }

  // ── 이벤트 위임 ─────────────────────────────────────────────────────────────
  function _bindOnce() {
    if (_bound) return;
    _bound = true;

    const grid = document.getElementById('claude-grid');
    grid?.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-act]');
      if (!btn) return;
      const id = btn.dataset.acc;
      switch (btn.dataset.act) {
        case 'session': startSession(id); break;
        case 'reset':   resetSession(id); break;
        case 'edit':    openEditModal(id); break;
      }
    });

    const root = document.getElementById('claude-modal-root');
    root?.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-act]');
      if (!btn) return;
      const act = btn.dataset.act;
      if (act === 'overlay') { if (e.target === btn) closeModal(); return; }
      if (act === 'cancel') { closeModal(); return; }
      if (act === 'save')   { _saveFromModal(); return; }
      if (act === 'delete') { deleteAccount(btn.dataset.acc, btn); return; }
      if (act === 'avatar' || act === 'color') {
        const sel = act === 'avatar' ? '.claude-pick-avatar' : '.claude-pick-color';
        root.querySelectorAll(sel).forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
      }
    });
  }

  // ── 진입점 ──────────────────────────────────────────────────────────────────
  async function init() {
    _loadAccounts();
    _bindOnce();
    await _loadUsage(false);
    _seedFromUsageIfEmpty();
    _render();
    if (!_inited) {
      _tickTimer = setInterval(_tick, 1000);
      _inited = true;
    }
  }

  return {
    init, refresh,
    openAddModal, openEditModal, closeModal,
    startSession, resetSession, deleteAccount,
  };
})();
