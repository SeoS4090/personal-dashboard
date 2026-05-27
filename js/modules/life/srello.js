/* ── Srello — Trello 스타일 칸반 (localStorage) ── */
const Srello = (() => {
  const KEY = 'srello_board';
  const TPL_KEY = 'srello_templates';
  const VIEW_KEY = 'srello_view_mode';
  const MEMO_KEY = 'dashboard_memos';
  const PRIORITY_COLORS = { P0: '#ff6b9d', P1: '#ffd166', P2: '#7c83ff', P3: '#64ffda' };
  const LABEL_COLORS = ['#64ffda', '#ff6b9d', '#7c83ff', '#ffd166'];
  const PRIORITY_ORDER = { P0: 0, P1: 1, P2: 2, P3: 3 };
  const CATEGORIES = ['Srello', 'Life', 'Game', 'Dev', 'Media', '공통'];
  const DONE_LIST_NAMES = ['완료', 'done', 'Done'];
  const STATUSES = ['기획중', '개발중', '테스트중', '완료', '보류'];
  const STATUS_COLORS = { '기획중': '#7c83ff', '개발중': '#ffd166', '테스트중': '#ff9f43', '완료': '#64ffda', '보류': '#8899aa' };

  let board = null;
  let drag = null;
  let viewMode = localStorage.getItem(VIEW_KEY) || 'board';
  let filterPriority = '';
  let filterCategory = '';
  let boardContainerBound = false;

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

  function ensureCardFields(card) {
    if (!card.checklist) card.checklist = [];
    if (!card.comments) card.comments = [];
    if (!card.attachments) card.attachments = [];
    if (!card.activity) card.activity = [];
    if (card.done === undefined) card.done = false;
    if (card.status === undefined) card.status = '';
    return card;
  }

  function migrateBoardFields() {
    board?.lists?.forEach(l => l.cards?.forEach(ensureCardFields));
  }

  function logActivity(card, text) {
    ensureCardFields(card);
    card.activity.unshift({ id: genId(), text, at: new Date().toISOString() });
    if (card.activity.length > 40) card.activity.length = 40;
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
    migrateBoardFields();
    migrateFromMemos();
    if (!board.lists.length) board = defaultBoard();
  }

  function save() {
    localStorage.setItem(KEY, JSON.stringify(board));
    if (typeof App !== 'undefined') App.updateHomeLifePreview();
  }

  function cardPayload(c) {
    return {
      title: c.title,
      desc: c.desc,
      priority: c.priority,
      category: c.category,
      status: c.status,
      color: c.color,
      cover: c.cover,
      dueDate: c.dueDate,
      done: c.done,
      checklist: c.checklist,
      comments: c.comments,
      attachments: c.attachments,
      activity: c.activity,
      createdAt: c.createdAt,
      updatedAt: c.updatedAt,
    };
  }

  function normalizeCard(raw) {
    const now = new Date().toISOString();
    const priority = raw.priority && PRIORITY_COLORS[raw.priority] ? raw.priority : null;
    const card = {
      id: genId(),
      title: String(raw.title || '').trim() || '(제목 없음)',
      desc: String(raw.desc || '').trim(),
      priority: priority || undefined,
      category: raw.category || undefined,
      color: raw.color || (priority ? PRIORITY_COLORS[priority] : LABEL_COLORS[0]),
      cover: raw.cover || '',
      dueDate: raw.dueDate || '',
      done: !!raw.done,
      status: STATUSES.includes(raw.status) ? raw.status : '',
      checklist: Array.isArray(raw.checklist) ? raw.checklist.map(i => ({
        id: i.id || genId(),
        text: String(i.text || ''),
        done: !!i.done,
      })) : [],
      comments: Array.isArray(raw.comments) ? raw.comments : [],
      attachments: Array.isArray(raw.attachments) ? raw.attachments : [],
      activity: Array.isArray(raw.activity) ? raw.activity : [],
      createdAt: raw.createdAt || now,
      updatedAt: raw.updatedAt || now,
    };
    return ensureCardFields(card);
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
        cards: cards.map(cardPayload),
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
        if (existing) existing.cards.push(...list.cards);
        else board.lists.push(list);
      });
    } else {
      board = incoming;
    }
    migrateBoardFields();
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
    document.getElementById('srello-export-btn')?.addEventListener('click', exportBoard);
    document.getElementById('srello-import-btn')?.addEventListener('click', () => {
      document.getElementById('srello-import-file')?.click();
    });
    document.getElementById('srello-import-file')?.addEventListener('change', onImportFile);
    document.getElementById('srello-view-board')?.addEventListener('click', () => setViewMode('board'));
    document.getElementById('srello-view-calendar')?.addEventListener('click', () => setViewMode('calendar'));
    toolbarBound = true;
  }

  function setViewMode(mode) {
    viewMode = mode;
    localStorage.setItem(VIEW_KEY, mode);
    document.getElementById('srello-view-board')?.classList.toggle('active', mode === 'board');
    document.getElementById('srello-view-calendar')?.classList.toggle('active', mode === 'calendar');
    render();
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
      inbox.cards.push(ensureCardFields({
        id: genId(),
        title: m.title || '(제목 없음)',
        desc: m.body || '',
        color: m.color || LABEL_COLORS[0],
        createdAt: m.createdAt || new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }));
    });
    localStorage.setItem('srello_memo_migrated', '1');
    save();
    toast('기존 메모를 Srello 「할 일」로 옮겼습니다.', 'info');
  }

  function getStats() {
    if (!board) load();
    let cards = 0;
    let dueSoon = 0;
    const today = todayStr();
    board.lists.forEach(l => {
      l.cards.forEach(c => {
        cards++;
        if (c.dueDate && c.dueDate >= today) dueSoon++;
      });
    });
    return { lists: board.lists.length, cards, dueSoon };
  }

  function todayStr() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
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

  function runAutomation(card, toList) {
    if (!toList || !DONE_LIST_NAMES.some(n => toList.title.toLowerCase().includes(n.toLowerCase()))) return;
    ensureCardFields(card);
    let changed = false;
    card.checklist.forEach(item => {
      if (!item.done) { item.done = true; changed = true; }
    });
    if (changed) logActivity(card, `「${toList.title}」로 이동 — 체크리스트 완료 처리`);
  }

  function moveCard(cardId, fromListId, toListId, toIndex) {
    const card = removeCardFromList(fromListId, cardId);
    if (!card) return;
    const target = findList(toListId);
    if (!target) return;
    const idx = Math.max(0, Math.min(toIndex, target.cards.length));
    target.cards.splice(idx, 0, card);
    card.updatedAt = new Date().toISOString();
    logActivity(card, `리스트 이동 → ${target.title}`);
    runAutomation(card, target);
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
    if (list.cards.length > 0 && !confirm(`「${list.title}」에 카드 ${list.cards.length}개가 있습니다. 리스트를 삭제할까요?`)) return;
    board.lists = board.lists.filter(l => l.id !== listId);
    save();
    render();
    toast('리스트가 삭제되었습니다.', 'info');
  }

  function addCard(listId, title, opts = {}) {
    const list = findList(listId);
    if (!list) return;
    const t = title?.trim();
    if (!t) return;
    const now = new Date().toISOString();
    const priority = opts.priority && PRIORITY_COLORS[opts.priority] ? opts.priority : null;
    const card = ensureCardFields({
      id: genId(),
      title: t,
      desc: opts.desc?.trim() || '',
      priority: priority || undefined,
      category: opts.category,
      color: opts.color || (priority ? PRIORITY_COLORS[priority] : LABEL_COLORS[0]),
      cover: opts.cover || '',
      dueDate: opts.dueDate || '',
      checklist: opts.checklist || [],
      comments: [],
      attachments: [],
      activity: [],
      createdAt: now,
      updatedAt: now,
    });
    logActivity(card, '카드 생성');
    list.cards.push(card);
    save();
    render();
  }

  function updateCard(listId, cardId, patch) {
    const found = findCard(listId, cardId);
    if (!found) return;
    const { card } = found;
    ensureCardFields(card);
    if (patch.title !== undefined) card.title = patch.title.trim() || card.title;
    if (patch.desc !== undefined) card.desc = patch.desc.trim();
    if (patch.color !== undefined) card.color = patch.color;
    if (patch.priority !== undefined) {
      card.priority = patch.priority || undefined;
      if (patch.priority && PRIORITY_COLORS[patch.priority]) card.color = PRIORITY_COLORS[patch.priority];
    }
    if (patch.category !== undefined) card.category = patch.category || undefined;
    if (patch.status !== undefined) card.status = patch.status || '';
    if (patch.cover !== undefined) card.cover = patch.cover || '';
    if (patch.dueDate !== undefined) card.dueDate = patch.dueDate || '';
    if (patch.done !== undefined) card.done = !!patch.done;
    if (patch.checklist !== undefined) card.checklist = patch.checklist;
    if (patch.comments !== undefined) card.comments = patch.comments;
    if (patch.attachments !== undefined) card.attachments = patch.attachments;
    card.updatedAt = new Date().toISOString();
    logActivity(card, '카드 수정');
    save();
    render();
  }

  function deleteCard(listId, cardId) {
    removeCardFromList(listId, cardId);
    save();
    render();
  }

  function cardMatchesFilter(card) {
    if (filterPriority && card.priority !== filterPriority) return false;
    if (filterCategory && card.category !== filterCategory) return false;
    return true;
  }

  function getAllCategories() {
    const set = new Set(CATEGORIES);
    board.lists.forEach(l => l.cards.forEach(c => { if (c.category) set.add(c.category); }));
    return [...set];
  }

  function dueMeta(dueDate) {
    if (!dueDate) return null;
    const today = todayStr();
    const overdue = dueDate < today;
    const dueToday = dueDate === today;
    let label = dueDate.slice(5).replace('-', '/');
    if (dueToday) label = '오늘';
    return { label, overdue, dueToday };
  }

  function checklistProgress(checklist) {
    if (!checklist?.length) return null;
    const done = checklist.filter(i => i.done).length;
    return { done, total: checklist.length };
  }

  function escHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function renderFilters() {
    const el = document.getElementById('srello-filters');
    if (!el) return;
    const cats = getAllCategories();
    el.innerHTML = `
      <label class="srello-filter-label">
        <span>우선순위</span>
        <select id="srello-filter-priority" class="input srello-filter-select">
          <option value="">전체</option>
          ${['P0', 'P1', 'P2', 'P3'].map(p => `<option value="${p}" ${filterPriority === p ? 'selected' : ''}>${p}</option>`).join('')}
        </select>
      </label>
      <label class="srello-filter-label">
        <span>카테고리</span>
        <select id="srello-filter-category" class="input srello-filter-select">
          <option value="">전체</option>
          ${cats.map(c => `<option value="${escHtml(c)}" ${filterCategory === c ? 'selected' : ''}>${escHtml(c)}</option>`).join('')}
        </select>
      </label>
      <button type="button" class="btn btn-sm" id="srello-filter-clear">필터 초기화</button>`;
    el.querySelector('#srello-filter-priority')?.addEventListener('change', e => {
      filterPriority = e.target.value;
      render();
    });
    el.querySelector('#srello-filter-category')?.addEventListener('change', e => {
      filterCategory = e.target.value;
      render();
    });
    el.querySelector('#srello-filter-clear')?.addEventListener('click', () => {
      filterPriority = '';
      filterCategory = '';
      render();
    });
  }

  function cardHtml(card, listId) {
    const due = dueMeta(card.dueDate);
    const prog = checklistProgress(card.checklist);
    const badge = card.priority
      ? `<span class="srello-card-priority" style="--prio-color:${card.color}">${escHtml(card.priority)}</span>`
      : '';
    const cat = card.category
      ? `<span class="srello-card-category">${escHtml(card.category)}</span>`
      : '';
    const statusBadge = card.status
      ? `<span class="srello-card-status" style="--status-color:${STATUS_COLORS[card.status] || '#8899aa'}">${escHtml(card.status)}</span>`
      : '';
    const cover = card.cover
      ? `<div class="srello-card-cover">${escHtml(card.cover)}</div>`
      : '';
    const dueHtml = due
      ? `<span class="srello-card-due${due.overdue ? ' overdue' : ''}${due.dueToday ? ' today' : ''}">📅 ${escHtml(due.label)}</span>`
      : '';
    const progHtml = prog
      ? `<span class="srello-card-checkprog">☑ ${prog.done}/${prog.total}</span>`
      : '';
    const meta = (dueHtml || progHtml)
      ? `<div class="srello-card-meta">${dueHtml}${progHtml}</div>`
      : '';
    const label = card.desc
      ? `<p class="srello-card-desc">${escHtml(card.desc.slice(0, 100))}${card.desc.length > 100 ? '…' : ''}</p>`
      : '';
    const doneClass = card.done ? ' srello-card--done' : '';
    const doneBtn = `<button type="button" class="btn btn-icon srello-card-done-btn${card.done ? ' active' : ''}"
        data-action="toggle-done" data-list-id="${listId}" data-card-id="${card.id}"
        title="${card.done ? '완료 취소' : '완료 표시'}">${card.done ? '✓' : '○'}</button>`;
    return `
      <article class="srello-card${doneClass}" draggable="true"
        data-card-id="${card.id}" data-list-id="${listId}"
        style="--card-accent: ${card.color}">
        ${cover}
        <div class="srello-card-accent"></div>
        <div class="srello-card-top">
          <div class="srello-card-title-row">
            <div class="srello-card-badges">${badge}${cat}${statusBadge}</div>
            ${doneBtn}
          </div>
          <h3 class="srello-card-title">${escHtml(card.title)}</h3>
        </div>
        ${meta}
        ${label}
      </article>`;
  }

  function renderBoard() {
    const container = document.getElementById('srello-board');
    if (!container || !board) return;

    const listsHtml = board.lists.map(list => {
      const cards = sortCardsByPriority(list.cards).filter(cardMatchesFilter);
      return `
      <div class="srello-list" data-list-id="${list.id}">
        <div class="srello-list-header">
          <input type="text" class="srello-list-title input" value="${escHtml(list.title)}"
            aria-label="리스트 제목" maxlength="80"
            data-action="rename-list" data-list-id="${list.id}">
          <span class="srello-list-count">${cards.length}</span>
          <div class="srello-list-actions">
            <button type="button" class="btn btn-icon btn-sm srello-list-del"
              title="리스트 삭제" data-action="delete-list" data-list-id="${list.id}">✕</button>
          </div>
        </div>
        <div class="srello-list-cards" data-list-id="${list.id}">
          ${cards.map(card => cardHtml(card, list.id)).join('')}
        </div>
        <button type="button" class="srello-add-card" data-action="add-card" data-list-id="${list.id}">
          + 카드 추가
        </button>
      </div>`;
    }).join('');

    container.innerHTML = `
      <div class="srello-board-scroll">
        ${listsHtml}
        <div class="srello-list srello-list--add">
          <button type="button" class="srello-add-list" id="srello-add-list-btn">+ 리스트 추가</button>
        </div>
      </div>`;
    bindBoardEvents(container);
  }

  function renderCalendar() {
    const container = document.getElementById('srello-board');
    if (!container || !board) return;

    const now = new Date();
    const y = now.getFullYear();
    const m = now.getMonth();
    const first = new Date(y, m, 1);
    const last = new Date(y, m + 1, 0);
    const startPad = first.getDay();
    const daysInMonth = last.getDate();

    const byDate = {};
    board.lists.forEach(l => {
      l.cards.forEach(c => {
        if (!c.dueDate || !cardMatchesFilter(c)) return;
        if (!byDate[c.dueDate]) byDate[c.dueDate] = [];
        byDate[c.dueDate].push(c);
      });
    });

    let cells = '';
    for (let i = 0; i < startPad; i++) cells += '<div class="srello-cal-cell empty"></div>';
    for (let d = 1; d <= daysInMonth; d++) {
      const key = `${y}-${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
      const items = byDate[key] || [];
      const isToday = key === todayStr();
      cells += `
        <div class="srello-cal-cell${isToday ? ' today' : ''}">
          <div class="srello-cal-day">${d}</div>
          <div class="srello-cal-items">
            ${items.slice(0, 4).map(c => `
              <div class="srello-cal-item" style="border-left-color:${c.color}" title="${escHtml(c.title)}">
                ${escHtml(c.title.slice(0, 14))}${c.title.length > 14 ? '…' : ''}
              </div>`).join('')}
            ${items.length > 4 ? `<div class="srello-cal-more">+${items.length - 4}</div>` : ''}
          </div>
        </div>`;
    }

    const monthName = now.toLocaleDateString('ko-KR', { year: 'numeric', month: 'long' });
    container.innerHTML = `
      <div class="srello-calendar">
        <div class="srello-cal-title">${monthName} · 마감일</div>
        <div class="srello-cal-weekdays">
          ${['일', '월', '화', '수', '목', '금', '토'].map(w => `<span>${w}</span>`).join('')}
        </div>
        <div class="srello-cal-grid">${cells}</div>
        <p class="srello-cal-hint">마감일이 있는 카드만 표시됩니다. 카드 편집은 보드 뷰에서 하세요.</p>
      </div>`;
  }

  function render() {
    renderFilters();
    document.getElementById('srello-view-board')?.classList.toggle('active', viewMode === 'board');
    document.getElementById('srello-view-calendar')?.classList.toggle('active', viewMode === 'calendar');
    if (viewMode === 'calendar') renderCalendar();
    else renderBoard();
  }

  function bindBoardEvents(container) {
    // 컨테이너 레벨 이벤트는 최초 1회만 바인딩 (renderBoard 호출마다 중복 방지)
    if (!boardContainerBound) {
      container.addEventListener('click', e => {
        // + 리스트 추가 버튼 (이벤트 위임)
        if (e.target.closest('#srello-add-list-btn')) { promptNewList(); return; }

        const btn = e.target.closest('[data-action]');
        if (btn) {
          const action = btn.dataset.action;
          const listId = btn.dataset.listId;
          const cardId = btn.dataset.cardId;
          if (action === 'add-card') { promptNewCard(listId); return; }
          if (action === 'delete-list') { deleteList(listId); return; }
          if (action === 'toggle-done') {
            const found = findCard(listId, cardId);
            if (found) {
              found.card.done = !found.card.done;
              logActivity(found.card, found.card.done ? '완료로 표시' : '완료 취소');
              save();
              render();
            }
            return; // 카드 모달 열기 차단
          }
          return;
        }
        const card = e.target.closest('.srello-card');
        if (card) openCardModal(card.dataset.listId, card.dataset.cardId);
      });

      container.addEventListener('change', e => {
        const input = e.target.closest('[data-action="rename-list"]');
        if (!input) return;
        renameList(input.dataset.listId, input.value);
      });

      container.addEventListener('keydown', e => {
        if (e.key !== 'Enter') return;
        const input = e.target.closest('[data-action="rename-list"]');
        if (input) { e.preventDefault(); input.blur(); }
      });

      boardContainerBound = true;
    }

    // 드래그 이벤트 — innerHTML 교체 후 새 요소에 재바인딩 필요
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
    if (!title.trim()) { toast('리스트 이름을 입력하세요.', 'error'); return; }
    addList(title);
    toast('리스트가 추가되었습니다.', 'success');
  }

  function promptNewCard(listId) {
    const tpls = getTemplates();
    if (tpls.length && confirm('저장된 템플릿에서 만들까요?')) {
      const lines = tpls.map((t, i) => `${i + 1}. ${t.title}`).join('\n');
      const pick = prompt(`템플릿 번호:\n${lines}`);
      const idx = parseInt(pick, 10) - 1;
      if (tpls[idx]) {
        const t = tpls[idx];
        addCard(listId, t.title, {
          desc: t.desc,
          priority: t.priority,
          category: t.category,
          checklist: (t.checklist || []).map(i => ({ id: genId(), text: i.text, done: false })),
        });
        toast('템플릿에서 카드를 추가했습니다.', 'success');
        return;
      }
    }
    const title = prompt('카드 제목');
    if (title === null) return;
    if (!title.trim()) { toast('카드 제목을 입력하세요.', 'error'); return; }
    addCard(listId, title);
    toast('카드가 추가되었습니다.', 'success');
  }

  function getTemplates() {
    try { return JSON.parse(localStorage.getItem(TPL_KEY)) || []; }
    catch { return []; }
  }

  function saveTemplate(card) {
    const tpls = getTemplates();
    tpls.unshift({
      id: genId(),
      title: card.title,
      desc: card.desc,
      priority: card.priority,
      category: card.category,
      checklist: card.checklist.map(i => ({ text: i.text, done: false })),
      savedAt: new Date().toISOString(),
    });
    if (tpls.length > 20) tpls.length = 20;
    localStorage.setItem(TPL_KEY, JSON.stringify(tpls));
    toast('템플릿으로 저장했습니다.', 'success');
  }

  function openCardModal(listId, cardId) {
    // 이미 열린 모달이 있으면 닫고 새로 열기
    document.querySelector('.modal-overlay.srello-card-modal')?.remove();

    const found = findCard(listId, cardId);
    if (!found) return;
    const { card } = found;
    ensureCardFields(card);

    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay srello-card-modal';
    overlay.innerHTML = `
      <div class="modal srello-modal srello-modal-wide">
        <div class="srello-modal-hdr">📋 카드</div>
        <div class="srello-modal-body">
          <input type="text" class="input" id="srello-card-title" value="${escHtml(card.title)}" placeholder="제목">
          <textarea class="input" id="srello-card-desc" rows="4" placeholder="설명">${escHtml(card.desc)}</textarea>

          <div class="srello-modal-row">
            <label class="srello-field-label">마감일</label>
            <input type="date" class="input" id="srello-card-due" value="${escHtml(card.dueDate || '')}">
            <button type="button" class="btn btn-sm" id="srello-card-due-clear">지우기</button>
          </div>

          <div class="srello-modal-row">
            <label class="srello-field-label">우선순위</label>
            <div class="srello-prio-btns" id="srello-prio-btns">
              ${['P0', 'P1', 'P2', 'P3'].map(p => `
                <button type="button" class="btn btn-sm srello-prio-btn" data-prio="${p}"
                  style="--prio:${PRIORITY_COLORS[p]}">${p}</button>`).join('')}
              <button type="button" class="btn btn-sm" data-prio="">없음</button>
            </div>
          </div>

          <div class="srello-modal-row">
            <label class="srello-field-label">카테고리</label>
            <select class="input" id="srello-card-category">
              <option value="">—</option>
              ${getAllCategories().map(c => `<option value="${escHtml(c)}" ${card.category === c ? 'selected' : ''}>${escHtml(c)}</option>`).join('')}
            </select>
          </div>

          <div class="srello-modal-row">
            <label class="srello-field-label">상태</label>
            <select class="input" id="srello-card-status">
              <option value="">—</option>
              ${STATUSES.map(s => `<option value="${escHtml(s)}" ${card.status === s ? 'selected' : ''}>${escHtml(s)}</option>`).join('')}
            </select>
          </div>

          <div class="srello-modal-row">
            <label class="srello-field-label">커버 (이모지·짧은 텍스트)</label>
            <input type="text" class="input" id="srello-card-cover" value="${escHtml(card.cover || '')}" maxlength="24" placeholder="예: 🎯">
          </div>

          <div class="srello-modal-section">
            <div class="srello-section-hdr">
              <span>체크리스트</span>
              <button type="button" class="btn btn-sm" id="srello-check-add">+ 항목</button>
            </div>
            <ul class="srello-checklist" id="srello-checklist"></ul>
          </div>

          <div class="srello-modal-section">
            <div class="srello-section-hdr"><span>댓글</span></div>
            <ul class="srello-comments" id="srello-comments"></ul>
            <div class="srello-comment-add">
              <input type="text" class="input" id="srello-comment-input" placeholder="댓글 입력">
              <button type="button" class="btn btn-sm btn-primary" id="srello-comment-add">추가</button>
            </div>
          </div>

          <div class="srello-modal-section">
            <div class="srello-section-hdr">
              <span>첨부 링크</span>
              <button type="button" class="btn btn-sm" id="srello-attach-add">+ 링크</button>
            </div>
            <ul class="srello-attachments" id="srello-attachments"></ul>
          </div>

          <div class="srello-modal-section">
            <div class="srello-section-hdr"><span>활동</span></div>
            <ul class="srello-activity" id="srello-activity"></ul>
          </div>

          <div class="srello-modal-row">
            <label class="srello-field-label">라벨 색</label>
            ${LABEL_COLORS.map(c => `
              <button type="button" class="srello-color-opt" data-color="${c}"
                style="background:${c}; width:22px; height:22px; border-radius:50%; border:2px solid transparent; cursor:pointer"></button>`).join('')}
          </div>
        </div>
        <div class="srello-modal-footer">
          <button type="button" class="btn" id="srello-card-template">템플릿 저장</button>
          <button type="button" class="btn" id="srello-card-delete" style="color:var(--color-game)">삭제</button>
          <div class="srello-modal-footer-right">
            <button type="button" class="btn" id="srello-card-cancel">닫기</button>
            <button type="button" class="btn btn-primary" id="srello-card-save">저장</button>
          </div>
        </div>
      </div>`;

    document.body.appendChild(overlay);

    let selectedColor = card.color || LABEL_COLORS[0];
    let selectedPriority = card.priority || '';
    let checklist = card.checklist.map(i => ({ ...i }));
    let comments = card.comments.map(c => ({ ...c }));
    let attachments = card.attachments.map(a => ({ ...a }));

    // 이미지 Ctrl+V 붙여넣기
    function onPaste(e) {
      const items = e.clipboardData?.items;
      if (!items) return;
      for (const item of items) {
        if (item.kind !== 'file' || !item.type.startsWith('image/')) continue;
        e.preventDefault();
        const file = item.getAsFile();
        if (!file) continue;
        // 크기 제한: 600 KB (base64 후 ~800 KB → localStorage 여유 확보)
        if (file.size > 600 * 1024) {
          toast('이미지가 너무 큽니다 (600 KB 이하로 붙여넣기하세요).', 'error');
          return;
        }
        const reader = new FileReader();
        reader.onload = () => {
          attachments.push({ id: genId(), name: file.name || '이미지', dataUrl: reader.result });
          renderAttachments();
          toast('이미지가 첨부되었습니다.', 'success');
        };
        reader.readAsDataURL(file);
        return; // 이미지 하나만 처리
      }
    }
    overlay.addEventListener('paste', onPaste);

    function renderChecklist() {
      const ul = overlay.querySelector('#srello-checklist');
      ul.innerHTML = checklist.map((item, i) => `
        <li class="srello-check-item">
          <input type="checkbox" ${item.done ? 'checked' : ''} data-idx="${i}">
          <input type="text" class="input srello-check-text" value="${escHtml(item.text)}" data-idx="${i}">
          <button type="button" class="btn btn-icon btn-sm" data-del-check="${i}">✕</button>
        </li>`).join('') || '<li class="srello-empty-hint">체크리스트 없음</li>';
    }

    function renderComments() {
      const ul = overlay.querySelector('#srello-comments');
      ul.innerHTML = comments.length
        ? comments.map(c => `
          <li class="srello-comment-item">
            <span class="srello-comment-text">${escHtml(c.text)}</span>
            <span class="srello-comment-time">${new Date(c.createdAt).toLocaleString('ko-KR', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</span>
          </li>`).join('')
        : '<li class="srello-empty-hint">댓글 없음</li>';
    }

    function renderAttachments() {
      const ul = overlay.querySelector('#srello-attachments');
      ul.innerHTML = attachments.length
        ? attachments.map((a, i) => {
            if (a.dataUrl) {
              return `
                <li class="srello-attach-item srello-attach-image">
                  <img src="${a.dataUrl}" alt="${escHtml(a.name || '이미지')}" class="srello-attach-thumb">
                  <span class="srello-attach-label">${escHtml(a.name || '이미지')}</span>
                  <button type="button" class="btn btn-icon btn-sm" data-del-attach="${i}">✕</button>
                </li>`;
            }
            return `
              <li class="srello-attach-item">
                <a href="${escHtml(a.url)}" target="_blank" rel="noopener">${escHtml(a.name || a.url)}</a>
                <button type="button" class="btn btn-icon btn-sm" data-del-attach="${i}">✕</button>
              </li>`;
          }).join('')
        : '<li class="srello-empty-hint">첨부 없음 · 이미지를 Ctrl+V로 붙여넣기 가능</li>';
    }

    function renderActivity() {
      const ul = overlay.querySelector('#srello-activity');
      ul.innerHTML = card.activity.length
        ? card.activity.slice(0, 15).map(a => `
          <li class="srello-activity-item">
            <span>${escHtml(a.text)}</span>
            <time>${new Date(a.at).toLocaleString('ko-KR', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</time>
          </li>`).join('')
        : '<li class="srello-empty-hint">활동 없음</li>';
    }

    function highlightPrio() {
      overlay.querySelectorAll('.srello-prio-btn, [data-prio]').forEach(b => {
        const p = b.dataset.prio;
        const on = p === selectedPriority || (!p && !selectedPriority);
        b.classList.toggle('active', on && b.classList.contains('srello-prio-btn') || on && !p && b.dataset.prio === '');
        if (b.classList.contains('srello-prio-btn')) {
          b.style.borderColor = on ? PRIORITY_COLORS[p] : 'transparent';
        }
      });
    }

    const colorBtns = overlay.querySelectorAll('.srello-color-opt');
    function highlightColor() {
      colorBtns.forEach(b => {
        b.style.borderColor = b.dataset.color === selectedColor ? 'white' : 'transparent';
      });
    }

    renderChecklist();
    renderComments();
    renderAttachments();
    renderActivity();
    highlightPrio();
    highlightColor();

    overlay.querySelector('#srello-prio-btns')?.addEventListener('click', e => {
      const btn = e.target.closest('[data-prio]');
      if (!btn) return;
      selectedPriority = btn.dataset.prio || '';
      if (selectedPriority) selectedColor = PRIORITY_COLORS[selectedPriority];
      highlightPrio();
      highlightColor();
    });

    colorBtns.forEach(b => {
      b.addEventListener('click', () => {
        selectedColor = b.dataset.color;
        highlightColor();
      });
    });

    overlay.querySelector('#srello-check-add')?.addEventListener('click', () => {
      checklist.push({ id: genId(), text: '', done: false });
      renderChecklist();
    });

    overlay.querySelector('#srello-checklist')?.addEventListener('change', e => {
      if (e.target.type === 'checkbox') {
        checklist[+e.target.dataset.idx].done = e.target.checked;
      }
    });
    overlay.querySelector('#srello-checklist')?.addEventListener('input', e => {
      if (e.target.classList.contains('srello-check-text')) {
        checklist[+e.target.dataset.idx].text = e.target.value;
      }
    });
    overlay.querySelector('#srello-checklist')?.addEventListener('click', e => {
      const btn = e.target.closest('[data-del-check]');
      if (!btn) return;
      checklist.splice(+btn.dataset.delCheck, 1);
      renderChecklist();
    });

    overlay.querySelector('#srello-comment-add')?.addEventListener('click', () => {
      const input = overlay.querySelector('#srello-comment-input');
      const text = input.value.trim();
      if (!text) return;
      comments.push({ id: genId(), text, createdAt: new Date().toISOString() });
      input.value = '';
      renderComments();
    });

    overlay.querySelector('#srello-attach-add')?.addEventListener('click', () => {
      const url = prompt('링크 URL');
      if (!url?.trim()) return;
      const name = prompt('표시 이름 (비우면 URL)', url) || url;
      attachments.push({ id: genId(), name: name.trim(), url: url.trim() });
      renderAttachments();
    });
    overlay.querySelector('#srello-attachments')?.addEventListener('click', e => {
      const btn = e.target.closest('[data-del-attach]');
      if (!btn) return;
      attachments.splice(+btn.dataset.delAttach, 1);
      renderAttachments();
    });

    overlay.querySelector('#srello-card-due-clear')?.addEventListener('click', () => {
      overlay.querySelector('#srello-card-due').value = '';
    });

    overlay.querySelector('#srello-card-template')?.addEventListener('click', () => {
      saveTemplate({ ...card, checklist, desc: overlay.querySelector('#srello-card-desc').value });
    });

    overlay.querySelector('#srello-card-cancel').addEventListener('click', () => overlay.remove());
    overlay.addEventListener('click', e => { if (e.target === overlay) overlay.remove(); });

    overlay.querySelector('#srello-card-delete').addEventListener('click', () => {
      if (!confirm('이 카드를 삭제할까요?')) return;
      deleteCard(listId, cardId);
      overlay.remove();
      toast('카드가 삭제되었습니다.', 'info');
    });

    overlay.querySelector('#srello-card-save').addEventListener('click', () => {
      const title = overlay.querySelector('#srello-card-title').value;
      if (!title.trim()) { toast('제목을 입력하세요.', 'error'); return; }
      card.activity = card.activity.filter(a => a.text !== '카드 수정');
      updateCard(listId, cardId, {
        title,
        desc: overlay.querySelector('#srello-card-desc').value,
        color: selectedColor,
        priority: selectedPriority,
        category: overlay.querySelector('#srello-card-category').value,
        status: overlay.querySelector('#srello-card-status').value,
        cover: overlay.querySelector('#srello-card-cover').value,
        dueDate: overlay.querySelector('#srello-card-due').value,
        checklist: checklist.filter(i => i.text.trim()).map(i => ({
          id: i.id || genId(),
          text: i.text.trim(),
          done: !!i.done,
        })),
        comments,
        attachments,
      });
      overlay.remove();
      toast('카드가 저장되었습니다.', 'success');
    });

    overlay.querySelector('#srello-card-title').focus();
  }

  function init() {
    if (!board) load();
    bindToolbar();
    setViewMode(viewMode);
  }

  return { init, render, getStats, load, exportBoard, importBoard };
})();
