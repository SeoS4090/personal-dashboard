/* ── 메모 모듈 (localStorage) ── */
const Memo = (() => {
  const KEY = 'dashboard_memos';

  function getAll() {
    try { return JSON.parse(localStorage.getItem(KEY)) || []; }
    catch { return []; }
  }

  function save(memos) {
    localStorage.setItem(KEY, JSON.stringify(memos));
  }

  function add(title, body, color = '#64ffda') {
    const memos = getAll();
    memos.unshift({ id: Date.now(), title, body, color, createdAt: new Date().toISOString() });
    save(memos);
    render();
    if (typeof App !== 'undefined') App.updateHomeLifePreview();
  }

  function remove(id) {
    save(getAll().filter(m => m.id !== id));
    render();
    if (typeof App !== 'undefined') App.updateHomeLifePreview();
  }

  function render() {
    const container = document.getElementById('memo-content');
    if (!container) return;
    const memos = getAll();

    if (memos.length === 0) {
      container.innerHTML = `
        <div style="grid-column:1/-1">
          <div class="card">
            <div class="empty-state">
              <div class="empty-icon">📝</div>
              <div class="empty-text">메모가 없습니다. 새 메모를 추가해보세요!</div>
            </div>
          </div>
        </div>`;
      return;
    }

    container.innerHTML = memos.map(m => `
      <div class="card memo-card" style="border-color: ${m.color}22; position:relative;">
        <div style="position:absolute; top:12px; right:12px;">
          <button class="btn btn-icon" style="font-size:11px; padding:4px 8px; opacity:.5"
            onclick="Memo.remove(${m.id})">✕</button>
        </div>
        <div style="width:4px; height:28px; background:${m.color}; border-radius:2px; margin-bottom:12px;"></div>
        <div class="card-title" style="margin-bottom:8px; padding-right:32px;">${escHtml(m.title)}</div>
        <div style="font-size:13px; color:var(--text-secondary); white-space:pre-wrap; line-height:1.6">${escHtml(m.body)}</div>
        <div style="margin-top:12px; font-size:11px; color:var(--text-muted)">${formatDate(m.createdAt)}</div>
      </div>`).join('');
  }

  function openNew() {
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.innerHTML = `
      <div class="modal">
        <div style="font-size:16px; font-weight:600; margin-bottom:20px; color:var(--color-life)">📝 새 메모</div>
        <div style="display:flex; flex-direction:column; gap:12px;">
          <input type="text" class="input" id="new-memo-title" placeholder="제목">
          <textarea class="input" id="new-memo-body" rows="5"
            style="resize:vertical; font-family:inherit; line-height:1.6" placeholder="내용"></textarea>
          <div style="display:flex; gap:8px; align-items:center;">
            <label style="font-size:12px; color:var(--text-muted)">색상</label>
            ${['#64ffda','#ff6b9d','#7c83ff','#ffd166'].map(c =>
              `<div onclick="this.parentElement.querySelectorAll('.color-opt').forEach(x=>x.style.outline='none'); this.style.outline='2px solid white'"
                class="color-opt dot" style="background:${c}; width:20px; height:20px; cursor:pointer; data-color='${c}'" data-color="${c}"></div>`
            ).join('')}
          </div>
          <div style="display:flex; gap:8px; justify-content:flex-end; margin-top:4px;">
            <button class="btn" onclick="this.closest('.modal-overlay').remove()">취소</button>
            <button class="btn btn-primary" id="memo-save-btn">저장</button>
          </div>
        </div>
      </div>`;

    document.body.appendChild(overlay);
    document.getElementById('new-memo-title').focus();

    // 기본 색상 선택
    let selectedColor = '#64ffda';
    overlay.querySelectorAll('.color-opt').forEach(dot => {
      dot.addEventListener('click', () => {
        overlay.querySelectorAll('.color-opt').forEach(d => d.style.outline = 'none');
        dot.style.outline = '2px solid white';
        selectedColor = dot.dataset.color;
      });
    });
    overlay.querySelector('.color-opt').style.outline = '2px solid white';

    document.getElementById('memo-save-btn').addEventListener('click', () => {
      const title = document.getElementById('new-memo-title').value.trim();
      const body  = document.getElementById('new-memo-body').value.trim();
      if (!title && !body) return;
      add(title || '(제목 없음)', body, selectedColor);
      overlay.remove();
      toast('메모가 저장되었습니다.', 'success');
    });

    // 배경 클릭 닫기
    overlay.addEventListener('click', e => { if (e.target === overlay) overlay.remove(); });
  }

  function escHtml(str) {
    return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }

  function formatDate(iso) {
    const d = new Date(iso);
    return d.toLocaleDateString('ko-KR', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
  }

  return { getAll, add, remove, render, openNew };
})();
