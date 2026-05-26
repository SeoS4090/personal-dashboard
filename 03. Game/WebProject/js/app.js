/* ── App Router & Core ── */
const App = (() => {
  const MENU_MAP = {
    'life-readme':    { parent: 'life',  title: 'Life',  sub: 'ReadMe' },
    'life-calendar':  { parent: 'life',  title: 'Life',  sub: '일정' },
    'life-news':      { parent: 'life',  title: 'Life',  sub: '뉴스' },
    'life-srello':    { parent: 'life',  title: 'Life',  sub: 'Srello' },
    'game-readme':    { parent: 'game',  title: 'Game',  sub: 'ReadMe' },
    'game-dashboard': { parent: 'game',  title: 'Game',  sub: '대시보드' },
    'dev-readme':     { parent: 'dev',   title: 'Dev',   sub: 'ReadMe' },
    'dev-dashboard':  { parent: 'dev',   title: 'Dev',   sub: '프로젝트' },
    'media-readme':   { parent: 'media', title: 'Media', sub: 'ReadMe' },
    'media-dashboard':{ parent: 'media', title: 'Media', sub: '대시보드' },
    'settings':       { parent: null,    title: '설정',  sub: '' },
  };

  let currentPanel = 'home';
  const _panelCache = new Set(['home']); // home은 인라인
  let _settingsControlsInited = false;

  async function _ensurePanel(panelId) {
    if (_panelCache.has(panelId)) return;
    const res = await fetch(`./panels/${panelId}.html?v=${window.BUILD_VER||''}`);
    if (!res.ok) throw new Error(`패널 로드 실패: ${panelId} (${res.status})`);
    const html = await res.text();
    document.getElementById('content').insertAdjacentHTML('beforeend', html);
    _panelCache.add(panelId);
  }

  async function navigate(panelId) {
    try {
      await _ensurePanel(panelId);
    } catch (e) {
      console.error(e);
      toast('패널을 불러오지 못했습니다.', 'error');
      return;
    }

    // 패널 전환
    document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
    const target = document.getElementById('panel-' + panelId);
    if (target) {
      target.classList.add('active');
      currentPanel = panelId;
    }

    // 사이드바 active 상태
    document.querySelectorAll('.nav-item, .nav-sub-item').forEach(el => el.classList.remove('active'));

    const info = MENU_MAP[panelId];
    if (info) {
      document.getElementById('topbar-title').textContent = info.title;
      document.getElementById('topbar-breadcrumb').textContent = info.sub;

      const subItem = document.querySelector(`.nav-sub-item[data-panel="${panelId}"]`);
      if (subItem) {
        subItem.classList.add('active');
        if (info.parent) openMenu(info.parent);
      }
      if (panelId === 'settings') {
        document.querySelector('.nav-item[data-panel="settings"]')?.classList.add('active');
      }
    } else {
      // 홈
      document.getElementById('topbar-title').textContent = 'Dashboard';
      document.getElementById('topbar-breadcrumb').textContent = '';
    }

    // 설정 패널 최초 진입 시 컨트롤 바인딩
    if (panelId === 'settings' && !_settingsControlsInited) {
      Settings.initControls();
      _settingsControlsInited = true;
    }

    onPanelEnter(panelId);
  }

  function openMenu(menuId) {
    const item = document.querySelector(`.nav-item[data-menu="${menuId}"]`);
    if (item) item.classList.add('open', 'active');
  }

  function closeMenu(menuId) {
    const item = document.querySelector(`.nav-item[data-menu="${menuId}"]`);
    if (item) item.classList.remove('open', 'active');
  }

  function toggleMenu(menuId) {
    const item = document.querySelector(`.nav-item[data-menu="${menuId}"]`);
    if (item?.classList.contains('open')) {
      closeMenu(menuId);
    } else {
      openMenu(menuId);
    }
  }

  function onPanelEnter(panelId) {
    if (panelId === 'home')          updateHomeLifePreview();
    if (panelId === 'life-srello')   Srello.init();
    if (panelId === 'life-news')     News.init();
    if (panelId === 'life-calendar') Calendar.init();
    if (panelId === 'settings')      Settings.load();
  }

  function updateDate() {
    const now = new Date();
    const opts = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
    const dateStr = now.toLocaleDateString('ko-KR', opts);
    const el = document.getElementById('topbar-date');
    if (el) el.textContent = dateStr;

    const descEl = document.getElementById('home-date-desc');
    if (descEl) descEl.textContent = dateStr;
  }

  function updateHomeLifePreview() {
    const el = document.getElementById('home-life-preview');
    if (!el) return;
    if (typeof Srello === 'undefined') {
      el.textContent = '일정 · 뉴스 · Srello';
      return;
    }
    const { lists, cards } = Srello.getStats();
    el.textContent = cards > 0
      ? `Srello · 카드 ${cards}개 (${lists}열)`
      : '일정 · 뉴스 · Srello';
  }

  function init() {
    Settings.initAppearance();

    // 시스템 테마 변경 감지 (전역 — 설정 패널 로드 전에도 동작해야 함)
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      if (localStorage.getItem('appearance_theme') === 'system') Settings.applyTheme('system');
    });

    updateDate();
    setInterval(updateDate, 60000);

    document.getElementById('sidebar-toggle')?.addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('collapsed');
    });

    document.getElementById('home-btn')?.addEventListener('click', () => {
      navigate('home');
    });

    const mobileToggle = document.getElementById('mobile-toggle');
    if (window.innerWidth <= 768) mobileToggle.style.display = 'flex';
    mobileToggle?.addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('open');
    });

    document.querySelectorAll('.nav-item[data-menu]').forEach(item => {
      item.addEventListener('click', () => toggleMenu(item.dataset.menu));
    });

    document.querySelectorAll('.nav-sub-item[data-panel]').forEach(item => {
      item.addEventListener('click', () => navigate(item.dataset.panel));
    });

    document.querySelector('.nav-item[data-panel="settings"]')?.addEventListener('click', () => {
      navigate('settings');
    });

    updateHomeLifePreview();
  }

  return { navigate, init, openMenu, toggleMenu, updateHomeLifePreview };
})();

/* ── Settings ── */
const Settings = (() => {
  const FS_DEFAULTS = {
    fs_title: '20px',
    fs_card:  '14px',
    fs_body:  '13px',
    fs_desc:  '12px',
  };
  const FS_CSS_VARS = {
    fs_title: '--fs-title',
    fs_card:  '--fs-card',
    fs_body:  '--fs-body',
    fs_desc:  '--fs-desc',
  };

  function applyTheme(theme) {
    const root = document.documentElement;
    if (theme === 'system') {
      root.setAttribute('data-theme', window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    } else {
      root.setAttribute('data-theme', theme);
    }
  }

  function applyAllFontSizes() {
    Object.entries(FS_DEFAULTS).forEach(([key, def]) => {
      const val = localStorage.getItem(key) || def;
      document.documentElement.style.setProperty(FS_CSS_VARS[key], val);
    });
  }

  function initAppearance() {
    applyTheme(localStorage.getItem('appearance_theme') || 'dark');
    applyAllFontSizes();
  }

  // 설정 패널 DOM이 존재할 때 1회만 호출
  function initControls() {
    // 테마 버튼
    document.querySelectorAll('.setting-btn[data-group="theme"]').forEach(btn => {
      btn.addEventListener('click', () => {
        const val = btn.dataset.value;
        localStorage.setItem('appearance_theme', val);
        applyTheme(val);
        document.querySelectorAll('.setting-btn[data-group="theme"]').forEach(b => {
          b.classList.toggle('active', b === btn);
        });
      });
    });

    // 글자 크기 슬라이더
    document.querySelectorAll('.fs-slider').forEach(slider => {
      slider.addEventListener('input', () => {
        const { fsKey, cssVar } = slider.dataset;
        const val = slider.value + 'px';
        localStorage.setItem(fsKey, val);
        document.documentElement.style.setProperty(cssVar, val);
        const valEl = document.getElementById('fs-val-' + slider.id.replace('fs-', ''));
        if (valEl) valEl.textContent = val;
      });
    });

    // 주 시작 요일 버튼
    document.querySelectorAll('.setting-btn[data-group="week-start"]').forEach(btn => {
      btn.addEventListener('click', () => {
        localStorage.setItem('gcal_week_start', btn.dataset.value);
        document.querySelectorAll('.setting-btn[data-group="week-start"]').forEach(b => {
          b.classList.toggle('active', b === btn);
        });
      });
    });
  }

  function updateSettingsUI() {
    const theme = localStorage.getItem('appearance_theme') || 'dark';
    document.querySelectorAll('.setting-btn[data-group="theme"]').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.value === theme);
    });

    document.querySelectorAll('.fs-slider').forEach(slider => {
      const key = slider.dataset.fsKey;
      const val = localStorage.getItem(key) || FS_DEFAULTS[key];
      slider.value = parseInt(val);
      const valEl = document.getElementById('fs-val-' + slider.id.replace('fs-', ''));
      if (valEl) valEl.textContent = val;
    });

    const weekStart = localStorage.getItem('gcal_week_start') || '0';
    document.querySelectorAll('.setting-btn[data-group="week-start"]').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.value === weekStart);
    });
  }

  const _CAL_COLORS = ['#64ffda','#ff6b9d','#7c83ff','#ffd166','#ff9f43','#48dbfb'];

  function _escHtml(str) {
    return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }

  function load() {
    const el = id => document.getElementById(id);
    if (el('setting-gcal-clientid')) el('setting-gcal-clientid').value = localStorage.getItem('gcal_client_id') || '';
    if (el('setting-news-apikey'))   el('setting-news-apikey').value   = localStorage.getItem('news_api_key')   || '';
    if (el('setting-news-keywords')) el('setting-news-keywords').value = localStorage.getItem('news_keywords')  || '';
    renderCalendarList();
    updateSettingsUI();
    // 저장된 토큰으로 복원된 경우 연결 상태 UI 반영
    if (typeof Calendar !== 'undefined' && Calendar.isConnected()) {
      const status = el('gcal-auth-status');
      if (status) { status.textContent = '✅ 연결됨'; status.style.color = 'var(--color-life)'; }
    }
  }

  function renderCalendarList() {
    const container = document.getElementById('gcal-calendars-list');
    if (!container) return;

    let all = [];
    try { all = JSON.parse(localStorage.getItem('gcal_all_calendars') || '[]'); } catch(e) {}

    // 구버전 데이터 마이그레이션: gcal_calendars → gcal_all_calendars
    if (!all.length) {
      let old = [];
      try { old = JSON.parse(localStorage.getItem('gcal_calendars') || '[]'); } catch(e) {}
      if (old.length) {
        all = old.map(c => ({ ...c, enabled: true }));
        localStorage.setItem('gcal_all_calendars', JSON.stringify(all));
      }
    }

    if (!all.length) {
      container.innerHTML = '<div style="font-size:12px;color:var(--text-muted);padding:4px 0;">계정 연결 후 ↻ 목록 불러오기를 클릭하세요.</div>';
      return;
    }

    container.innerHTML = all.map((cal, i) => `
      <div class="gcal-cal-item">
        <div class="gcal-cal-dot" style="background:${cal.color || _CAL_COLORS[i % _CAL_COLORS.length]};"></div>
        <div class="gcal-cal-info">
          <div class="gcal-cal-name">${_escHtml(cal.name || cal.id)}</div>
          <div class="gcal-cal-id">${_escHtml(cal.id)}</div>
        </div>
        <label class="toggle-switch">
          <input type="checkbox" ${cal.enabled ? 'checked' : ''} data-cal-id="${_escHtml(cal.id)}" onchange="Settings.toggleCalendar(this.dataset.calId)">
          <span class="toggle-slider"></span>
        </label>
      </div>`).join('');
  }

  async function fetchCalendarList() {
    const btn = document.getElementById('gcal-fetch-btn');
    if (btn) { btn.disabled = true; btn.textContent = '불러오는 중...'; }
    try {
      const list = await Calendar.fetchCalendarList();

      let prev = [];
      try { prev = JSON.parse(localStorage.getItem('gcal_all_calendars') || '[]'); } catch(e) {}
      const prevMap = new Map(prev.map(c => [c.id, c.enabled]));

      const merged = list.map(c => ({
        ...c,
        enabled: prevMap.has(c.id) ? prevMap.get(c.id) : true
      }));

      localStorage.setItem('gcal_all_calendars', JSON.stringify(merged));
      _syncEnabledCalendars();
      renderCalendarList();
      toast(`캘린더 ${merged.length}개를 불러왔습니다.`, 'success');
    } catch(err) {
      if (err.message === 'AUTH_EXPIRED') toast('인증이 만료되었습니다. 다시 연결해주세요.', 'error');
      else if (err.message === 'NO_TOKEN')  toast('먼저 Google 계정을 연결해주세요.', 'error');
      else                                  toast('목록을 불러오지 못했습니다: ' + err.message, 'error');
    } finally {
      if (btn) { btn.disabled = false; btn.textContent = '↻ 목록 불러오기'; }
    }
  }

  function toggleCalendar(calId) {
    let all = [];
    try { all = JSON.parse(localStorage.getItem('gcal_all_calendars') || '[]'); } catch(e) {}
    const cal = all.find(c => c.id === calId);
    if (cal) cal.enabled = !cal.enabled;
    localStorage.setItem('gcal_all_calendars', JSON.stringify(all));
    _syncEnabledCalendars();
  }

  function _syncEnabledCalendars() {
    let all = [];
    try { all = JSON.parse(localStorage.getItem('gcal_all_calendars') || '[]'); } catch(e) {}
    const enabled = all.filter(c => c.enabled).map(({ id, name, color }) => ({ id, name, color }));
    localStorage.setItem('gcal_calendars', JSON.stringify(enabled));
  }

  function saveCalendar() {
    const newId  = document.getElementById('setting-gcal-clientid')?.value.trim();
    const prevId = localStorage.getItem('gcal_client_id');
    if (newId) localStorage.setItem('gcal_client_id', newId);
    if (newId && newId !== prevId) Calendar.resetInit();
    toast('캘린더 설정이 저장되었습니다.', 'success');
  }

  function saveNews() {
    const key = document.getElementById('setting-news-apikey')?.value.trim();
    const kw  = document.getElementById('setting-news-keywords')?.value.trim();
    if (key) localStorage.setItem('news_api_key', key);
    if (kw)  localStorage.setItem('news_keywords', kw);
    toast('뉴스 설정이 저장되었습니다.', 'success');
  }

  return { load, saveCalendar, saveNews, initAppearance, applyTheme, initControls, fetchCalendarList, toggleCalendar, renderCalendarList };
})();

/* ── Toast ── */
function toast(msg, type = 'info', duration = 3000) {
  const container = document.getElementById('toast-container');
  const el = document.createElement('div');
  el.className = `toast ${type}`;
  el.textContent = msg;
  container.appendChild(el);
  setTimeout(() => {
    el.style.opacity = '0';
    el.style.transform = 'translateX(20px)';
    el.style.transition = '0.3s ease';
    setTimeout(() => el.remove(), 300);
  }, duration);
}

/* ── ReadMe 탭 전환 ── */
function switchReadmeTab(btn, contentId) {
  const panel = btn.closest('.panel');
  panel.querySelectorAll('.readme-tab').forEach(t => t.classList.remove('active'));
  panel.querySelectorAll('.readme-tab-content').forEach(c => c.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById(contentId).classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => App.init());
