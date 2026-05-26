/* ── Google Calendar 모듈 ── */
const Calendar = (() => {
  let initialized = false;

  function init() {
    if (initialized) return;
    initialized = true;
    render();
  }

  async function render() {
    const container = document.getElementById('calendar-content');
    if (!container) return;

    const apiKey = localStorage.getItem('gcal_api_key');
    const calId  = localStorage.getItem('gcal_cal_id') || 'primary';

    if (!apiKey) {
      container.innerHTML = `
        <div class="card">
          <div class="empty-state">
            <div class="empty-icon">📅</div>
            <div class="empty-text">설정에서 Google Calendar API 키를 입력해주세요.</div>
            <br><button class="btn" onclick="App.navigate('settings')">⚙️ 설정으로 이동</button>
          </div>
        </div>`;
      return;
    }

    container.innerHTML = '<div class="card skeleton" style="height:200px"></div>';

    const now   = new Date();
    const start = now.toISOString();
    const end   = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000).toISOString();
    const url   = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calId)}/events`
                + `?key=${apiKey}&timeMin=${start}&timeMax=${end}&singleEvents=true&orderBy=startTime&maxResults=20`;

    try {
      const res  = await fetch(url);
      const data = await res.json();

      if (data.error) throw new Error(data.error.message);

      const events = data.items || [];
      if (!events.length) {
        container.innerHTML = '<div class="card"><div class="empty-state"><div class="empty-text">앞으로 30일간 일정이 없습니다.</div></div></div>';
        return;
      }

      // 날짜별 그룹핑
      const grouped = {};
      events.forEach(e => {
        const d = (e.start.dateTime || e.start.date).split('T')[0];
        if (!grouped[d]) grouped[d] = [];
        grouped[d].push(e);
      });

      container.innerHTML = `
        <div style="display:flex; flex-direction:column; gap:12px;">
          ${Object.entries(grouped).map(([date, evts]) => `
            <div class="card">
              <div style="font-size:12px; font-weight:600; color:var(--color-life); margin-bottom:10px;">
                ${formatDateLabel(date)}
              </div>
              ${evts.map(e => `
                <div style="display:flex; align-items:flex-start; gap:10px; padding:8px 0; border-bottom:1px solid var(--glass-border)">
                  <div style="font-size:12px; color:var(--text-muted); min-width:50px; margin-top:2px;">
                    ${formatTime(e.start)}
                  </div>
                  <div>
                    <div style="font-size:13.5px; font-weight:500;">${escHtml(e.summary || '(제목 없음)')}</div>
                    ${e.location ? `<div style="font-size:12px; color:var(--text-muted); margin-top:2px;">📍 ${escHtml(e.location)}</div>` : ''}
                  </div>
                </div>`).join('')}
            </div>`).join('')}
        </div>`;

    } catch (err) {
      container.innerHTML = `
        <div class="card">
          <div class="empty-state">
            <div class="empty-icon">⚠️</div>
            <div class="empty-text">캘린더를 불러오지 못했습니다: ${escHtml(err.message)}</div>
          </div>
        </div>`;
    }
  }

  function formatDateLabel(dateStr) {
    const d = new Date(dateStr + 'T00:00:00');
    const today = new Date();
    today.setHours(0,0,0,0);
    const diff = Math.round((d - today) / (1000 * 60 * 60 * 24));

    let label = '';
    if (diff === 0) label = '오늘';
    else if (diff === 1) label = '내일';
    else if (diff === 2) label = '모레';
    else label = `${diff}일 후`;

    return `${dateStr} (${label})`;
  }

  function formatTime(start) {
    if (!start.dateTime) return '종일';
    const d = new Date(start.dateTime);
    return d.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' });
  }

  function escHtml(str) {
    return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }

  return { init, render };
})();
