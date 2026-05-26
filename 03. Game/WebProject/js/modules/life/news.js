/* ── 뉴스 모듈 (NewsAPI.org) ── */
const News = (() => {
  let initialized = false;
  const DEFAULT_KEYWORDS = ['기술', '게임', '개발'];

  function getKeywords() {
    const raw = localStorage.getItem('news_keywords') || '';
    const kws = raw.split(',').map(k => k.trim()).filter(Boolean);
    return kws.length ? kws : DEFAULT_KEYWORDS;
  }

  function init() {
    if (initialized) return;
    initialized = true;
    renderFilters();
    refresh();
  }

  function renderFilters() {
    const container = document.getElementById('news-filter');
    if (!container) return;
    const keywords = getKeywords();
    container.innerHTML = keywords.map((kw, i) => `
      <button class="btn ${i === 0 ? 'btn-primary' : ''}" onclick="News.filterByKeyword('${kw}', this)">
        ${kw}
      </button>`).join('') + `
      <button class="btn" onclick="News.filterByKeyword('all', this)">전체</button>`;
  }

  async function refresh(keyword) {
    initialized = true;
    const apiKey = localStorage.getItem('news_api_key');
    const container = document.getElementById('news-content');
    if (!container) return;

    if (!apiKey) {
      container.innerHTML = `
        <div style="grid-column:1/-1">
          <div class="card">
            <div class="empty-state">
              <div class="empty-icon">📰</div>
              <div class="empty-text">설정에서 NewsAPI.org API 키를 입력해주세요.</div>
              <br><button class="btn" onclick="App.navigate('settings')">⚙️ 설정으로 이동</button>
            </div>
          </div>
        </div>`;
      return;
    }

    // 로딩
    container.innerHTML = Array(4).fill(
      '<div class="card skeleton" style="height:140px"></div>'
    ).join('');

    const kw = keyword || getKeywords()[0] || 'technology';
    const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(kw)}&language=ko&pageSize=12&sortBy=publishedAt&apiKey=${apiKey}`;

    try {
      const res = await fetch(url);
      const data = await res.json();

      if (data.status !== 'ok') throw new Error(data.message || 'API 오류');

      if (!data.articles?.length) {
        container.innerHTML = '<div style="grid-column:1/-1"><div class="card"><div class="empty-state"><div class="empty-text">결과가 없습니다.</div></div></div></div>';
        return;
      }

      container.innerHTML = data.articles.map(a => `
        <div class="card" style="cursor:pointer; transition: transform .2s"
          onmouseover="this.style.transform='translateY(-2px)'"
          onmouseout="this.style.transform=''"
          onclick="window.open('${escUrl(a.url)}','_blank')">
          ${a.urlToImage ? `<img src="${escUrl(a.urlToImage)}" alt=""
            style="width:100%; height:120px; object-fit:cover; border-radius:8px; margin-bottom:12px;
                   background:var(--glass-bg)" onerror="this.remove()">` : ''}
          <div class="card-title" style="font-size:13.5px; line-height:1.5; margin-bottom:6px;">${escHtml(a.title || '')}</div>
          <div style="font-size:12px; color:var(--text-muted);">${escHtml(a.source?.name || '')} · ${formatDate(a.publishedAt)}</div>
        </div>`).join('');

    } catch (err) {
      container.innerHTML = `
        <div style="grid-column:1/-1">
          <div class="card">
            <div class="empty-state">
              <div class="empty-icon">⚠️</div>
              <div class="empty-text">뉴스를 불러오지 못했습니다: ${escHtml(err.message)}</div>
            </div>
          </div>
        </div>`;
    }
  }

  function filterByKeyword(kw, btn) {
    document.querySelectorAll('#news-filter .btn').forEach(b => b.classList.remove('btn-primary'));
    btn?.classList.add('btn-primary');
    refresh(kw === 'all' ? getKeywords()[0] : kw);
  }

  function escHtml(str) {
    return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }

  function escUrl(str) {
    return String(str).replace(/"/g,'%22').replace(/'/g,'%27');
  }

  function formatDate(iso) {
    if (!iso) return '';
    const d = new Date(iso);
    return d.toLocaleDateString('ko-KR', { month: 'short', day: 'numeric' });
  }

  return { init, refresh, filterByKeyword };
})();
