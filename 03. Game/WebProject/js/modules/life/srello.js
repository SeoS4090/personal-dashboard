/* ── Srello — Trello 스타일 칸반 (localStorage) ── */
const Srello = (() => {
  const KEY = 'srello_board';
  const MEMO_KEY = 'dashboard_memos';
  const PRIORITY_COLORS = { P0: '#ff6b9d', P1: '#ffd166', P2: '#7c83ff', P3: '#64ffda' };
  const LABEL_COLORS = ['#64ffda', '#ff6b9d', '#7c83ff', '#ffd166'];
  const PRIORITY_ORDER = { P0: 0, P1: 1, P2: 2, P3: 3 };

  let board = null;
  let drag = null;

  function genId() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
  }

  function defaultBoard() {
    return {
      lists: [
        { id: genId(), title: '할 일', cards: [] },
        { id: genId(), title: '진행 중', cards: [] },
        { id: genId(), title: '완료', cards: [] },
      ],
    };
  }

  function sortCardsByPriority(cards) {
    return [...cards].sort(
      (a, b) => (PRIORITY_ORDER[a.priority] ?? 9) - (PRIORITY_ORDER[b.priority] ?? 9)
    );
  }

  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      board = raw ? JSON.parse(raw) : { lists: [] };
      if (!board?.lists) board = { lists: [] };
    } catch {
      board = { lists: [] };
    }
    migrateFromMemos();
    if (!board.lists.length) board = defaultBoard();
  }

  function normalizeCard(raw) {
    const now = new Date().toISOString();
    const priority = raw.priority && PRIORITY_COLORS[raw.priority] ? raw.priority : null;
    return {
      id: genId(),
      title: String(raw.title || '').trim() || '(제목 없음)',
      desc: String(raw.desc || '').trim(),
      priority: priority || undefined,
      category: raw.category || undefined,
      color: raw.color || (priority ? PRIORITY_COLORS[priority] : LABEL_COLORS[0]),
      createdAt: raw.createdAt || now,
      updatedAt: raw.updatedAt || now,
    };
  }

  function normalizeBoard(raw) {
    if (!raw?.lists || !Array.isArray(raw.lists)) {
      throw new Error('lists 배열이 필요합니다.');
    }
    return {
      lists: raw.lists.map(list => ({
        id: genId(),
        title: String(list.title || '리스트').trim(),
        cards: (list.cards || []).map(normalizeCard),
      })),
    };
  }

  function exportBoard() {
    if (!board) load();
    const payload = {
      exportedAt: new Date().toISOString(),
      lists: board.lists.map(({ title, cards }) => ({
        title,
        cards: cards.map(({ title: t, desc, priority, category, color, createdAt, updatedAt }) => ({
          title: t,
          desc,
          priority,
          category,
          color,
          createdAt,
          updatedAt,
        })),
      })),
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `srello-board-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    toast('보드를 JSON 파일로 저장했습니다.', 'success');
  }

  function importBoard(raw, mode = 'replace') {
    const incoming = normalizeBoard(raw);
    if (mode === 'merge' && board?.lists?.length) {
      incoming.lists.forEach(list => {
        const existing = board.lists.find(l => l.title === list.title);
        if (existing) {
          existing.cards.push(...list.cards);
        } else {
          board.lists.push(list);
        }
      });
    } else {
      board = incoming;
    }
    save();
    render();
  }

  function onImportFile(e) {
    const file = e.target.files?.[0];
    e.target.value = '';
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const raw = JSON.parse(reader.result);
        const merge = board?.lists?.some(l => l.cards?.length)
          && confirm('기존 보드와 합칠까요?\n확인 = 합치기 · 취소 = 전체 덮어쓰기');
        importBoard(raw, merge ? 'merge' : 'replace');
        toast('보드를 가져왔습니다.', 'success');
      } catch (err) {
        console.error(err);
        toast('JSON 형식이 올바르지 않습니다.', 'error');
      }
    };
    reader.readAsText(file, 'utf-8');
  }

  let toolbarBound = false;
  function bindToolbar() {
    if (toolbarBound) return;
    const exportBtn = document.getElementById('srello-export-btn');
    const importBtn = document.getElementById('srello-import-btn');
    const importFile = document.getElementById('srello-import-file');
    if (!exportBtn || !importBtn || !importFile) return;
    exportBtn.addEventListener('click', exportBoard);
    importBtn.addEventListener('click', () => importFile.click());
    importFile.addEventListener('change', onImportFile);
    toolbarBound = true;
  }

  function save() {
    localStorage.setItem(KEY, JSON.stringify(board));
    if (typeof App !== 'undefined') App.updateHomeLifePreview();
  }

  function migrateFromMemos() {
    if (localStorage.getItem('srello_memo_migrated')) return;
    let memos = [];
    try {
      memos = JSON.parse(localStorage.getItem(MEMO_KEY)) || [];
    } catch { /* ignore */ }
    if (!memos.length) {
      localStorage.setItem('srello_memo_migrated', '1');
      return;
    }
    const inbox = board.lists[0];
    if (!inbox) return;
    memos.forEach(m => {
      inbox.cards.push({
        id: genId(),
        title: m.title || '(제목 없음)',
        desc: m.body || '',
        color: m.color || LABEL_COLORS[0],
        createdAt: m.createdAt || new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      });
    });
    localStorage.setItem('srello_memo_migrated', '1');
    save();
    toast('기존 메모를 Srello 「할 일」로 옮겼습니다.', 'info');
  }

  function getStats() {
    if (!board) load();
    let cards = 0;
    board.lists.forEach(l => { cards += l.cards.length; });
    return { lists: board.lists.length, cards };
  }

  function findList(listId) {
    return board.lists.find(l => l.id === listId);
  }

  function findCard(listId, cardId) {
    const list = findList(listId);
    if (!list) return null;
    const idx = list.cards.findIndex(c => c.id === cardId);
    if (idx < 0) return null;
    return { list, card: list.cards[idx], index: idx };
  }

  function removeCardFromList(listId, cardId) {
    const list = findList(listId);
    if (!list) return null;
    const idx = list.cards.findIndex(c => c.id === cardId);
    if (idx < 0) return null;
    return list.cards.splice(idx, 1)[0];
  }

  function moveCard(cardId, fromListId, toListId, toIndex) {
    const card = removeCardFromList(fromListId, cardId);
    if (!card) return;
    const target = findList(toListId);
    if (!target) return;
    const idx = Math.max(0, Math.min(toIndex, target.cards.length));
    target.cards.splice(idx, 0, card);
    card.updatedAt = new Date().toISOString();
    save();
    render();
  }

  function addList(title) {
    const t = title?.trim();
    if (!t) return;
    board.lists.push({ id: genId(), title: t, cards: [] });
    save();
    render();
  }

  function renameList(listId, title) {
    const list = findList(listId);
    if (!list) return;
    const t = title?.trim();
    if (!t) return;
    list.title = t;
    save();
    render();
  }

  function deleteList(listId) {
    if (board.lists.length <= 1) {
      toast('리스트는 최소 1개 필요합니다.', 'error');
      return;
    }
    const list = findList(listId);
    if (!list) return;
    if (list.cards.length > 0) {
      if (!confirm(`「${list.title}」에 카드 ${list.cards.length}개가 있습니다. 리스트를 삭제할까요?`)) return;
    }
    board.lists = board.lists.filter(l => l.id !== listId);
    save();
    render();
    toast('리스트가 삭제되었습니다.', 'info');
  }

  function addCard(listId, title, desc = '', color = LABEL_COLORS[0]) {
    const list = findList(listId);
    if (!list) return;
    const t = title?.trim();
    if (!t) return;
    const now = new Date().toISOString();
    list.cards.push({
      id: genId(),
      title: t,
      desc: desc?.trim() || '',
      color,
      createdAt: now,
      updatedAt: now,
    });
    save();
    render();
  }

  function updateCard(listId, cardId, { title, desc, color }) {
    const found = findCard(listId, cardId);
    if (!found) return;
    const { card } = found;
    if (title !== undefined) card.title = title.trim() || card.title;
    if (desc !== undefined) card.desc = desc.trim();
    if (color !== undefined) card.color = color;
    card.updatedAt = new Date().toISOString();
    save();
    render();
  }

  function deleteCard(listId, cardId) {
    removeCardFromList(listId, cardId);
    save();
    render();
  }

  function escHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function render() {
    const container = document.getElementById('srello-board');
    if (!container || !board) return;

    const listsHtml = board.lists.map(list => `
      <div class="srello-list" data-list-id="${list.id}">
        <div class="srello-list-header">
          <input type="text" class="srello-list-title input" value="${escHtml(list.title)}"
            aria-label="리스트 제목" maxlength="80"
            data-action="rename-list" data-list-id="${list.id}">
          <div class="srello-list-actions">
            <button type="button" class="btn btn-icon btn-sm srello-list-del"
              title="리스트 삭제" data-action="delete-list" data-list-id="${list.id}">✕</button>
          </div>
        </div>
        <div class="srello-list-cards" data-list-id="${list.id}">
          ${sortCardsByPriority(list.cards).map(card => cardHtml(card, list.id)).join('')}
        </div>
        <button type="button" class="srello-add-card" data-action="add-card" data-list-id="${list.id}">
          + 카드 추가
        </button>
      </div>`).join('');

    container.innerHTML = `
      <div class="srello-board-scroll">
        ${listsHtml}
        <div class="srello-list srello-list--add">
          <button type="button" class="srello-add-list" id="srello-add-list-btn">+ 리스트 추가</button>
        </div>
      </div>`;

    bindBoardEvents(container);
  }

  function cardHtml(card, listId) {
    const badge = card.priority
      ? `<span class="srello-card-priority" style="--prio-color:${card.color}">${escHtml(card.priority)}</span>`
      : '';
    const label = card.desc
      ? `<p class="srello-card-desc">${escHtml(card.desc.slice(0, 120))}${card.desc.length > 120 ? '…' : ''}</p>`
      : '';
    return `
      <article class="srello-card" draggable="true"
        data-card-id="${card.id}" data-list-id="${listId}"
        style="--card-accent: ${card.color}">
        <div class="srello-card-accent"></div>
        <div class="srello-card-top">
          ${badge}
          <h3 class="srello-card-title">${escHtml(card.title)}</h3>
        </div>
        ${label}
      </article>`;
  }

  function bindBoardEvents(container) {
    container.querySelector('#srello-add-list-btn')?.addEventListener('click', promptNewList);

    container.addEventListener('click', e => {
      const btn = e.target.closest('[data-action]');
      if (!btn) return;
      const action = btn.dataset.action;
      const listId = btn.dataset.listId;

      if (action === 'add-card') promptNewCard(listId);
      if (action === 'delete-list') deleteList(listId);

      const card = e.target.closest('.srello-card');
      if (card && !e.target.closest('[data-action]')) {
        openCardModal(card.dataset.listId, card.dataset.cardId);
      }
    });

    container.addEventListener('change', e => {
      const input = e.target.closest('[data-action="rename-list"]');
      if (!input) return;
      renameList(input.dataset.listId, input.value);
    });

    container.addEventListener('keydown', e => {
      if (e.key !== 'Enter') return;
      const input = e.target.closest('[data-action="rename-list"]');
      if (input) {
        e.preventDefault();
        input.blur();
      }
    });

    container.querySelectorAll('.srello-list-cards').forEach(zone => {
      zone.addEventListener('dragover', onDragOver);
      zone.addEventListener('dragleave', onDragLeave);
      zone.addEventListener('drop', onDrop);
    });

    container.querySelectorAll('.srello-card').forEach(el => {
      el.addEventListener('dragstart', onDragStart);
      el.addEventListener('dragend', onDragEnd);
    });
  }

  function getDropIndex(zone, clientY) {
    const cards = [...zone.querySelectorAll('.srello-card:not(.srello-card--dragging)')];
    for (let i = 0; i < cards.length; i++) {
      const mid = cards[i].getBoundingClientRect().top + cards[i].offsetHeight / 2;
      if (clientY < mid) return i;
    }
    return cards.length;
  }

  function onDragStart(e) {
    const el = e.currentTarget;
    drag = { cardId: el.dataset.cardId, fromListId: el.dataset.listId };
    el.classList.add('srello-card--dragging');
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', drag.cardId);
  }

  function onDragEnd(e) {
    e.currentTarget.classList.remove('srello-card--dragging');
    document.querySelectorAll('.srello-list-cards--over').forEach(z => z.classList.remove('srello-list-cards--over'));
    drag = null;
  }

  function onDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    e.currentTarget.classList.add('srello-list-cards--over');
  }

  function onDragLeave(e) {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      e.currentTarget.classList.remove('srello-list-cards--over');
    }
  }

  function onDrop(e) {
    e.preventDefault();
    const zone = e.currentTarget;
    zone.classList.remove('srello-list-cards--over');
    if (!drag) return;
    const toListId = zone.dataset.listId;
    const toIndex = getDropIndex(zone, e.clientY);
    if (drag.fromListId === toListId) {
      const list = findList(toListId);
      const fromIdx = list.cards.findIndex(c => c.id === drag.cardId);
      let targetIdx = toIndex;
      if (fromIdx < targetIdx) targetIdx -= 1;
      if (fromIdx === targetIdx) return;
    }
    moveCard(drag.cardId, drag.fromListId, toListId, toIndex);
  }

  function promptNewList() {
    const title = prompt('새 리스트 이름');
    if (title === null) return;
    if (!title.trim()) {
      toast('리스트 이름을 입력하세요.', 'error');
      return;
    }
    addList(title);
    toast('리스트가 추가되었습니다.', 'success');
  }

  function promptNewCard(listId) {
    const title = prompt('카드 제목');
    if (title === null) return;
    if (!title.trim()) {
      toast('카드 제목을 입력하세요.', 'error');
      return;
    }
    addCard(listId, title);
    toast('카드가 추가되었습니다.', 'success');
  }

  function openCardModal(listId, cardId) {
    const found = findCard(listId, cardId);
    if (!found) return;
    const { card } = found;

    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.innerHTML = `
      <div class="modal srello-modal">
        <div style="font-size:16px; font-weight:600; margin-bottom:20px; color:var(--color-life)">📋 카드</div>
        <div style="display:flex; flex-direction:column; gap:12px;">
          <input type="text" class="input" id="srello-card-title" value="${escHtml(card.title)}" placeholder="제목">
          <textarea class="input" id="srello-card-desc" rows="6"
            style="resize:vertical; font-family:inherit; line-height:1.6" placeholder="설명 (선택)">${escHtml(card.desc)}</textarea>
          <div style="display:flex; gap:8px; align-items:center; flex-wrap:wrap;">
            <span style="font-size:12px; color:var(--text-muted)">라벨 색상</span>
            ${LABEL_COLORS.map(c => `
              <button type="button" class="srello-color-opt" data-color="${c}"
                style="background:${c}; width:22px; height:22px; border-radius:50%; border:2px solid transparent; cursor:pointer"
                aria-label="색상 ${c}"></button>`).join('')}
          </div>
          <div style="display:flex; gap:8px; justify-content:space-between; margin-top:8px; flex-wrap:wrap;">
            <button type="button" class="btn" id="srello-card-delete" style="color:var(--color-game)">삭제</button>
            <div style="display:flex; gap:8px;">
              <button type="button" class="btn" id="srello-card-cancel">닫기</button>
              <button type="button" class="btn btn-primary" id="srello-card-save">저장</button>
            </div>
          </div>
        </div>
      </div>`;

    document.body.appendChild(overlay);
    let selectedColor = card.color || LABEL_COLORS[0];

    const colorBtns = overlay.querySelectorAll('.srello-color-opt');
    function highlightColor() {
      colorBtns.forEach(b => {
        b.style.borderColor = b.dataset.color === selectedColor ? 'white' : 'transparent';
      });
    }
    colorBtns.forEach(b => {
      b.addEventListener('click', () => {
        selectedColor = b.dataset.color;
        highlightColor();
      });
    });
    highlightColor();

    document.getElementById('srello-card-title').focus();

    overlay.querySelector('#srello-card-cancel').addEventListener('click', () => overlay.remove());
    overlay.addEventListener('click', e => { if (e.target === overlay) overlay.remove(); });

    overlay.querySelector('#srello-card-delete').addEventListener('click', () => {
      if (!confirm('이 카드를 삭제할까요?')) return;
      deleteCard(listId, cardId);
      overlay.remove();
      toast('카드가 삭제되었습니다.', 'info');
    });

    overlay.querySelector('#srello-card-save').addEventListener('click', () => {
      const title = document.getElementById('srello-card-title').value;
      const desc = document.getElementById('srello-card-desc').value;
      if (!title.trim()) {
        toast('제목을 입력하세요.', 'error');
        return;
      }
      updateCard(listId, cardId, { title, desc, color: selectedColor });
      overlay.remove();
      toast('카드가 저장되었습니다.', 'success');
    });
  }

  function init() {
    if (!board) load();
    bindToolbar();
    render();
  }

  return { init, render, getStats, load, exportBoard, importBoard };
})();
