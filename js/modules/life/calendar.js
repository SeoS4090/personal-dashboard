/* ── Google Calendar 모듈 (OAuth 2.0 + 다중 캘린더 + 멀티뷰) ── */
const Calendar = (() => {
  const CAL_COLORS = ['#64ffda','#ff6b9d','#7c83ff','#ffd166','#ff9f43','#48dbfb'];

  let tokenClient = null;
  let accessToken  = null;
  let currentView  = localStorage.getItem('gcal_view_mode') || 'month';
  let currentDate  = new Date();

  // ── Init & Auth ──────────────────────────────────────────────

  function init() {
    _tryInitTokenClient();
    _updateViewButtons();
    _updatePeriodLabel();
    render();
  }

  function _tryInitTokenClient() {
    if (tokenClient) return;
    const clientId = localStorage.getItem('gcal_client_id');
    if (!clientId) return;
    if (typeof google === 'undefined' || !google.accounts?.oauth2) return;
    tokenClient = google.accounts.oauth2.initTokenClient({
      client_id: clientId,
      scope: 'https://www.googleapis.com/auth/calendar.readonly',
      callback: (resp) => {
        if (resp.error) { toast('Google 인증 실패: ' + resp.error, 'error'); return; }
        accessToken = resp.access_token;
        _setAuthStatus(true);
        render();
      }
    });
  }

  function resetInit() {
    tokenClient = null;
    accessToken  = null;
  }

  function authorize() {
    const inputEl = document.getElementById('setting-gcal-clientid');
    if (inputEl?.value.trim()) {
      localStorage.setItem('gcal_client_id', inputEl.value.trim());
      tokenClient = null;
    }
    if (typeof google === 'undefined' || !google.accounts?.oauth2) {
      toast('Google 라이브러리가 아직 로드되지 않았습니다. 잠시 후 다시 시도하세요.', 'error');
      return;
    }
    _tryInitTokenClient();
    if (!tokenClient) {
      toast('OAuth Client ID를 먼저 저장하세요.', 'error');
      return;
    }
    tokenClient.requestAccessToken();
  }

  function _setAuthStatus(connected) {
    const el = document.getElementById('gcal-auth-status');
    if (!el) return;
    el.textContent = connected ? '✅ 연결됨' : '미연결';
    el.style.color  = connected ? 'var(--color-life)' : 'var(--text-muted)';
  }

  // ── View ─────────────────────────────────────────────────────

  function setView(view) {
    currentView = view;
    localStorage.setItem('gcal_view_mode', view);
    _updateViewButtons();
    _updatePeriodLabel();
    render();
  }

  function _updateViewButtons() {
    document.querySelectorAll('#cal-view-btns .setting-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.view === currentView);
    });
  }

  function _updatePeriodLabel() {
    const el = document.getElementById('cal-period-label');
    if (!el) return;
    if (currentView === 'month') {
      el.textContent = currentDate.toLocaleDateString('ko-KR', { year: 'numeric', month: 'long' });
    } else if (currentView === 'week') {
      const ws = _weekStart(currentDate);
      const we = new Date(ws.getTime() + 6 * 86400000);
      el.textContent = `${ws.getMonth()+1}/${ws.getDate()} ~ ${we.getMonth()+1}/${we.getDate()}`;
    } else {
      const d = new Date(currentDate); d.setHours(0,0,0,0);
      const e = new Date(d.getTime() + 29 * 86400000);
      el.textContent = `${d.getMonth()+1}/${d.getDate()} ~ ${e.getMonth()+1}/${e.getDate()}`;
    }
  }

  function prevPeriod() {
    if      (currentView === 'month') currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
    else if (currentView === 'week')  currentDate = new Date(currentDate.getTime() - 7 * 86400000);
    else                              currentDate = new Date(currentDate.getTime() - 30 * 86400000);
    _updatePeriodLabel(); render();
  }

  function nextPeriod() {
    if      (currentView === 'month') currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
    else if (currentView === 'week')  currentDate = new Date(currentDate.getTime() + 7 * 86400000);
    else                              currentDate = new Date(currentDate.getTime() + 30 * 86400000);
    _updatePeriodLabel(); render();
  }

  function _weekStart(date) {
    const sd = parseInt(localStorage.getItem('gcal_week_start') || '0');
    const d  = new Date(date); d.setHours(0,0,0,0);
    return new Date(d.getTime() - ((d.getDay() - sd + 7) % 7) * 86400000);
  }

  // ── Fetch ─────────────────────────────────────────────────────

  function _getCalendars() {
    let cals = [];
    try { cals = JSON.parse(localStorage.getItem('gcal_calendars') || '[]'); } catch(e) {}
    if (!cals.length) {
      const old = localStorage.getItem('gcal_cal_id');
      if (old) {
        cals = [{ id: old, name: '내 캘린더', color: CAL_COLORS[0] }];
        localStorage.setItem('gcal_calendars', JSON.stringify(cals));
      }
    }
    return cals;
  }

  async function _fetchAll(timeMin, timeMax) {
    const cals = _getCalendars();
    if (!cals.length) return [];

    const results = await Promise.allSettled(cals.map(async (cal, idx) => {
      const url = 'https://www.googleapis.com/calendar/v3/calendars/'
                + encodeURIComponent(cal.id)
                + `/events?timeMin=${timeMin}&timeMax=${timeMax}&singleEvents=true&orderBy=startTime&maxResults=50`;
      const res  = await fetch(url, { headers: { Authorization: `Bearer ${accessToken}` } });
      const data = await res.json();
      if (data.error) {
        if (data.error.code === 401) throw new Error('AUTH_EXPIRED');
        throw new Error(`[${cal.name}] ${data.error.message}`);
      }
      return (data.items || []).map(e => ({
        ...e,
        _calColor: cal.color || CAL_COLORS[idx % CAL_COLORS.length],
        _calName: cal.name
      }));
    }));

    const events = [];
    for (const r of results) {
      if (r.status === 'fulfilled') events.push(...r.value);
      else if (r.reason?.message === 'AUTH_EXPIRED') throw new Error('AUTH_EXPIRED');
    }
    events.sort((a,b) => (a.start.dateTime||a.start.date).localeCompare(b.start.dateTime||b.start.date));
    return events;
  }

  // ── Render ────────────────────────────────────────────────────

  async function render() {
    const container = document.getElementById('calendar-content');
    if (!container) return;

    if (!localStorage.getItem('gcal_client_id')) {
      container.innerHTML = _emptyHtml('📅', '설정에서 Google OAuth Client ID를 입력하고 계정을 연결해주세요.',
        `<button class="btn" onclick="App.navigate('settings')">⚙️ 설정으로 이동</button>`);
      return;
    }
    if (!accessToken) {
      _tryInitTokenClient();
      container.innerHTML = _emptyHtml('🔐', 'Google 계정 연결이 필요합니다.',
        `<button class="btn btn-primary" onclick="Calendar.authorize()">Google 계정 연결</button>`);
      return;
    }
    if (!_getCalendars().length) {
      container.innerHTML = _emptyHtml('📋', '설정에서 캘린더를 추가해주세요.',
        `<button class="btn" onclick="App.navigate('settings')">⚙️ 설정으로 이동</button>`);
      return;
    }

    container.innerHTML = '<div class="card skeleton" style="height:300px"></div>';

    let timeMin, timeMax;
    const y = currentDate.getFullYear(), m = currentDate.getMonth();
    if (currentView === 'month') {
      timeMin = new Date(y, m, 1).toISOString();
      timeMax = new Date(y, m+1, 0, 23, 59, 59).toISOString();
    } else if (currentView === 'week') {
      const ws = _weekStart(currentDate);
      timeMin = ws.toISOString();
      timeMax = new Date(ws.getTime() + 7 * 86400000).toISOString();
    } else {
      const s = new Date(currentDate); s.setHours(0,0,0,0);
      timeMin = s.toISOString();
      timeMax = new Date(s.getTime() + 30 * 86400000).toISOString();
    }

    try {
      const events = await _fetchAll(timeMin, timeMax);
      if      (currentView === 'month') _renderMonth(container, events);
      else if (currentView === 'week')  _renderWeek(container, events);
      else                              _renderList(container, events);
    } catch (err) {
      if (err.message === 'AUTH_EXPIRED') {
        accessToken = null;
        container.innerHTML = _emptyHtml('🔒', '인증이 만료되었습니다. 다시 연결해주세요.',
          `<button class="btn btn-primary" onclick="Calendar.authorize()">다시 연결</button>`);
      } else {
        container.innerHTML = _emptyHtml('⚠️', '캘린더를 불러오지 못했습니다: ' + _esc(err.message));
      }
    }
  }

  // ── Month View ────────────────────────────────────────────────

  function _renderMonth(container, events) {
    const sd  = parseInt(localStorage.getItem('gcal_week_start') || '0');
    const y   = currentDate.getFullYear(), m = currentDate.getMonth();
    const today = new Date(); today.setHours(0,0,0,0);
    const hdrs  = sd === 1 ? ['월','화','수','목','금','토','일'] : ['일','월','화','수','목','금','토'];

    const evtMap = {};
    events.forEach(e => {
      const ds = (e.start.dateTime||e.start.date).split('T')[0];
      (evtMap[ds] = evtMap[ds]||[]).push(e);
    });

    let firstDow = new Date(y, m, 1).getDay();
    if (sd === 1) firstDow = (firstDow + 6) % 7;
    const dim   = new Date(y, m+1, 0).getDate();
    const cells = [...Array(firstDow).fill(null), ...Array.from({length:dim},(_,i)=>i+1)];
    while (cells.length % 7) cells.push(null);

    let html = `<div class="cal-month-grid">
      <div class="cal-month-hdr-row">
        ${hdrs.map((d,i)=>{
          const we = sd===0?(i===0||i===6):(i===5||i===6);
          return `<div class="cal-day-hdr${we?' we':''}">${d}</div>`;
        }).join('')}
      </div>`;

    for (let r=0; r<cells.length; r+=7) {
      html += '<div class="cal-month-row">';
      cells.slice(r,r+7).forEach((day,ci) => {
        if (!day) { html += '<div class="cal-day-cell empty"></div>'; return; }
        const ds   = `${y}-${String(m+1).padStart(2,'0')}-${String(day).padStart(2,'0')}`;
        const evts = evtMap[ds] || [];
        const isToday = new Date(y,m,day).getTime() === today.getTime();
        const isWe    = sd===0?(ci===0||ci===6):(ci===5||ci===6);
        html += `<div class="cal-day-cell${isToday?' today':''}${isWe?' we':''}">
          <div class="cal-day-num${isToday?' today-num':''}">${day}</div>
          <div class="cal-day-evts">
            ${evts.slice(0,3).map(e=>`
              <div class="cal-evt-chip" style="background:${e._calColor}2e;border-left:2px solid ${e._calColor};" title="${_esc(e.summary||'')}">
                ${_esc((e.summary||'').substring(0,9))}
              </div>`).join('')}
            ${evts.length>3?`<div class="cal-evt-more">+${evts.length-3}개</div>`:''}
          </div>
        </div>`;
      });
      html += '</div>';
    }
    html += '</div>';
    container.innerHTML = html;
  }

  // ── Week View ─────────────────────────────────────────────────

  function _renderWeek(container, events) {
    const sd    = parseInt(localStorage.getItem('gcal_week_start') || '0');
    const ws    = _weekStart(currentDate);
    const today = new Date(); today.setHours(0,0,0,0);
    const wdHdrs = sd===1 ? ['월','화','수','목','금','토','일'] : ['일','월','화','수','목','금','토'];
    const days   = Array.from({length:7},(_,i)=>new Date(ws.getTime()+i*86400000));

    const evtMap = {};
    events.forEach(e => {
      const ds = (e.start.dateTime||e.start.date).split('T')[0];
      (evtMap[ds]=evtMap[ds]||[]).push(e);
    });

    const HOURS = Array.from({length:16},(_,i)=>i+7);

    let html = `<div class="cal-week-grid">
      <div class="cal-week-hdr-row">
        <div class="cal-time-gutter"></div>
        ${days.map((d,i)=>{
          const isToday = d.getTime()===today.getTime();
          const isWe    = d.getDay()===0||d.getDay()===6;
          return `<div class="cal-week-col-hdr${isToday?' today':''}${isWe?' we':''}">
            <div class="cal-week-col-name">${wdHdrs[i]}</div>
            <div class="cal-week-col-num${isToday?' today-num':''}">${d.getDate()}</div>
          </div>`;
        }).join('')}
      </div>`;

    // 종일 이벤트 행
    const hasAllDay = days.some(d => (evtMap[_localDs(d)]||[]).some(e=>!e.start.dateTime));
    if (hasAllDay) {
      html += `<div class="cal-allday-row">
        <div class="cal-time-gutter" style="font-size:10px;color:var(--text-muted);text-align:right;padding-right:6px;padding-top:5px;">종일</div>
        ${days.map(d=>{
          const ds   = _localDs(d);
          const evts = (evtMap[ds]||[]).filter(e=>!e.start.dateTime);
          return `<div class="cal-allday-cell">${evts.map(e=>`
            <div class="cal-week-evt" style="background:${e._calColor}22;border-left:3px solid ${e._calColor};">
              ${_esc((e.summary||'종일').substring(0,10))}
            </div>`).join('')}</div>`;
        }).join('')}
      </div>`;
    }

    html += '<div class="cal-time-body">';
    HOURS.forEach(h => {
      html += `<div class="cal-time-row">
        <div class="cal-time-label">${String(h).padStart(2,'0')}:00</div>
        ${days.map(d => {
          const ds   = _localDs(d);
          const evts = (evtMap[ds]||[]).filter(e => {
            if (!e.start.dateTime) return false;
            return new Date(e.start.dateTime).getHours() === h;
          });
          return `<div class="cal-time-cell">${evts.map(e => {
            const sd2 = new Date(e.start.dateTime);
            const ed2 = e.end?.dateTime ? new Date(e.end.dateTime) : new Date(sd2.getTime()+3600000);
            const top  = sd2.getMinutes() / 60 * 100;
            const ht   = Math.max((ed2-sd2) / 3600000 * 100, 22);
            return `<div class="cal-week-evt" style="top:${top}%;height:${ht}%;background:${e._calColor}22;border-left:3px solid ${e._calColor};">
              <span class="cal-evt-time">${sd2.toLocaleTimeString('ko-KR',{hour:'2-digit',minute:'2-digit'})}</span>
              ${_esc((e.summary||'').substring(0,12))}
            </div>`;
          }).join('')}</div>`;
        }).join('')}
      </div>`;
    });
    html += '</div></div>';
    container.innerHTML = html;
  }

  // ── List View ─────────────────────────────────────────────────

  function _renderList(container, events) {
    if (!events.length) {
      container.innerHTML = '<div class="card"><div class="empty-state"><div class="empty-text">이 기간에 일정이 없습니다.</div></div></div>';
      return;
    }
    const grouped = {};
    events.forEach(e => {
      const ds = (e.start.dateTime||e.start.date).split('T')[0];
      (grouped[ds]=grouped[ds]||[]).push(e);
    });

    container.innerHTML = `<div style="display:flex;flex-direction:column;gap:12px;">
      ${Object.entries(grouped).map(([ds,evts])=>`
        <div class="card">
          <div style="font-size:12px;font-weight:600;color:var(--color-life);margin-bottom:10px;">${_dateLabel(ds)}</div>
          ${evts.map(e=>`
            <div style="display:flex;align-items:flex-start;gap:10px;padding:8px 0;border-bottom:1px solid var(--glass-border);">
              <div style="width:4px;border-radius:2px;background:${e._calColor};flex-shrink:0;align-self:stretch;min-height:36px;"></div>
              <div style="font-size:12px;color:var(--text-muted);min-width:50px;padding-top:2px;">${_fmtTime(e.start)}</div>
              <div>
                <div style="font-size:13.5px;font-weight:500;">${_esc(e.summary||'(제목 없음)')}</div>
                <div style="font-size:11px;color:var(--text-muted);margin-top:2px;">${_esc(e._calName||'')}</div>
                ${e.location?`<div style="font-size:12px;color:var(--text-muted);margin-top:2px;">📍 ${_esc(e.location)}</div>`:''}
              </div>
            </div>`).join('')}
        </div>`).join('')}
    </div>`;
  }

  // ── Helpers ───────────────────────────────────────────────────

  function _emptyHtml(icon, text, actions) {
    return `<div class="card"><div class="empty-state">
      <div class="empty-icon">${icon}</div>
      <div class="empty-text">${text}</div>
      ${actions ? `<br>${actions}` : ''}
    </div></div>`;
  }

  function _dateLabel(ds) {
    const d     = new Date(ds + 'T00:00:00');
    const today = new Date(); today.setHours(0,0,0,0);
    const diff  = Math.round((d-today) / 86400000);
    const rel   = diff===0?'오늘':diff===1?'내일':diff===2?'모레':diff<0?`${Math.abs(diff)}일 전`:`${diff}일 후`;
    return `${ds} (${rel})`;
  }

  function _fmtTime(start) {
    if (!start.dateTime) return '종일';
    return new Date(start.dateTime).toLocaleTimeString('ko-KR', { hour:'2-digit', minute:'2-digit' });
  }

  function _esc(str) {
    return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }

  // toISOString()은 UTC 기준이라 KST(+9)에서 하루 밀림 — 로컬 날짜 문자열로 직접 생성
  function _localDs(d) {
    return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
  }

  async function fetchCalendarList() {
    if (!accessToken) throw new Error('NO_TOKEN');
    const res = await fetch('https://www.googleapis.com/calendar/v3/users/me/calendarList', {
      headers: { Authorization: `Bearer ${accessToken}` }
    });
    const data = await res.json();
    if (data.error) {
      if (data.error.code === 401) { accessToken = null; throw new Error('AUTH_EXPIRED'); }
      throw new Error(data.error.message);
    }
    return (data.items || []).map(c => ({
      id: c.id,
      name: c.summary,
      color: c.backgroundColor || CAL_COLORS[0]
    }));
  }

  return { init, render, authorize, setView, prevPeriod, nextPeriod, resetInit, fetchCalendarList };
})();
