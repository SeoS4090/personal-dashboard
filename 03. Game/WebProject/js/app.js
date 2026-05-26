/* ── App Router & Core ── */
const App = (() => {
  const MENU_MAP = {
    'life-readme':    { parent: 'life',  title: 'Life',  sub: 'ReadMe' },
    'life-calendar':  { parent: 'life',  title: 'Life',  sub: '일정' },
    'life-news':      { parent: 'life',  title: 'Life',  sub: '뉴스' },
    'life-memo':      { parent: 'life',  title: 'Life',  sub: '메모' },
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
    const res = await fetch(`./panels/${panelId}.html`);
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
    if (panelId === 'life-memo')     Memo.render();
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
    const memos = Memo.getAll();
    el.textContent = memos.length > 0 ? `메모 ${memos.length}개` : '일정 · 뉴스 · 메모 관리';
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
  }

  function renderCalendarList() {
    const container = document.getElementById('gcal-calendars-list');
    if (!container) return;
    let cals = [];
    try { cals = JSON.parse(localStorage.getItem('gcal_calendars') || '[]'); } catch(e) {}
    if (!cals.length) {
      container.innerHTML = '<div style="font-size:12px;color:var(--text-muted);">추가된 캘린더가 없습니다.</div>';
      return;
    }
    container.innerHTML = cals.map((cal, i) => `
      <div class="gcal-cal-item">
        <div class="gcal-cal-dot" style="background:${cal.color || _CAL_COLORS[i % _CAL_COLORS.length]};"></div>
        <div class="gcal-cal-info">
          <div class="gcal-cal-name">${_escHtml(cal.name || cal.id)}</div>
          <div class="gcal-cal-id">${_escHtml(cal.id)}</div>
        </div>
        <button class="btn btn-sm" onclick="Settings.removeCalendar(${i})" style="padding:3px 8px;">×</button>
      </div>`).join('');
  }

  function addCalendar() {
    const idEl   = document.getElementById('setting-gcal-add-id');
    const nameEl = document.getElementById('setting-gcal-add-name');
    const id     = idEl?.value.trim();
    const name   = nameEl?.value.trim() || id;
    if (!id) { toast('Calendar ID를 입력하세요.', 'error'); return; }

    let cals = [];
    try { cals = JSON.parse(localStorage.getItem('gcal_calendars') || '[]'); } catch(e) {}
    if (cals.find(c => c.id === id)) { toast('이미 추가된 캘린더입니다.', 'error'); return; }

    cals.push({ id, name, color: _CAL_COLORS[cals.length % _CAL_COLORS.length] });
    localStorage.setItem('gcal_calendars', JSON.stringify(cals));
    if (idEl)   idEl.value   = '';
    if (nameEl) nameEl.value = '';
    renderCalendarList();
    toast(`'${name}' 캘린더가 추가되었습니다.`, 'success');
  }

  function removeCalendar(index) {
    let cals = [];
    try { cals = JSON.parse(localStorage.getItem('gcal_calendars') || '[]'); } catch(e) {}
    cals.splice(index, 1);
    localStorage.setItem('gcal_calendars', JSON.stringify(cals));
    renderCalendarList();
    toast('캘린더가 제거되었습니다.', 'success');
  }

  function saveCalendar() {
    const clientId = document.getElementById('setting-gcal-clientid')?.value.trim();
    if (clientId) localStorage.setItem('gcal_client_id', clientId);
    Calendar.resetInit();
    toast('캘린더 설정이 저장되었습니다.', 'success');
  }

  function saveNews() {
    const key = document.getElementById('setting-news-apikey')?.value.trim();
    const kw  = document.getElementById('setting-news-keywords')?.value.trim();
    if (key) localStorage.setItem('news_api_key', key);
    if (kw)  localStorage.setItem('news_keywords', kw);
    toast('뉴스 설정이 저장되었습니다.', 'success');
  }

  return { load, saveCalendar, saveNews, initAppearance, applyTheme, initControls, addCalendar, removeCalendar, renderCalendarList };
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
