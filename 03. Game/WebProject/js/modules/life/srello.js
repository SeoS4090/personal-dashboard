/* ── Srello — Trello 스타일 칸반 (localStorage) ── */
const Srello = (() => {
  const TPL_KEY = 'srello_templates';
  const VIEW_KEY = 'srello_view_mode';
  const SETTINGS_KEY = 'srello_settings';
  const SORT_KEY = 'srello_sort_mode';
  const MEMO_KEY = 'dashboard_memos';
  const PRIORITY_COLORS = { P0: '#ff6b9d', P1: '#ffd166', P2: '#7c83ff', P3: '#64ffda' };
  const DEFAULT_LABEL_COLORS = ['#64ffda', '#ff6b9d', '#7c83ff', '#ffd166'];
  const PRIORITY_ORDER = { P0: 0, P1: 1, P2: 2, P3: 3 };
  // Category 정의: 작업 종류(기획·아트·개발·사운드 등) — Settings에서 사용자 편집 가능
  const DEFAULT_CATEGORIES = ['기획', '아트', '개발', '사운드', '공통'];
  const DONE_LIST_NAMES = ['완료', 'done', 'Done'];
  const STATUSES = ['기획중', '개발중', '테스트중', '완료', '보류'];
  const STATUS_COLORS = { '기획중': '#7c83ff', '개발중': '#ffd166', '테스트중': '#ff9f43', '완료': '#64ffda', '보류': '#8899aa' };

  let board = null;
  let drag = null;          // { kind:'card'|'list', cardId?, fromListId?, listId?, fromIdx? }
  let _inSync = false;      // Pull 중 save() dirty 마킹 차단용
  let viewMode = localStorage.getItem(VIEW_KEY) || 'board';
  let filterPriority = '';
  let filterCategory = '';
  let sortMode = localStorage.getItem(SORT_KEY) || 'priority';
  let boardContainerBound = false;
  let listDragHandle = false;
  let cardPlaceholder = null;
  let listPlaceholder = null;

  function getCardPlaceholder() {
    if (!cardPlaceholder) {
      cardPlaceholder = document.createElement('div');
      cardPlaceholder.className = 'srello-card-placeholder';
    }
    return cardPlaceholder;
  }

  function getListPlaceholder() {
    if (!listPlaceholder) {
      listPlaceholder = document.createElement('div');
      listPlaceholder.className = 'srello-list-placeholder';
      // 플레이스홀더 위에서 드롭해도 처리되도록
      listPlaceholder.addEventListener('dragover', e => {
        if (drag?.kind !== 'list') return;
        e.preventDefault();
        e.stopPropagation();
      });
      listPlaceholder.addEventListener('drop', e => {
        if (drag?.kind !== 'list') return;
        e.preventDefault();
        e.stopPropagation();
        const scroll = listPlaceholder.parentElement;
        let toIdx = 0;
        if (scroll) {
          for (const child of scroll.children) {
            if (child === listPlaceholder) break;
            if (child.classList.contains('srello-list') &&
                !child.classList.contains('srello-list--add') &&
                !child.classList.contains('srello-list--dragging')) toIdx++;
          }
        }
        listPlaceholder.remove();
        const fromIdx = drag.fromIdx;
        drag = null;
        if (fromIdx !== toIdx) reorderList(fromIdx, toIdx);
      });
    }
    return listPlaceholder;
  }

  function genId() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
  }

  /* ── Settings (색상·카테고리 사용자 정의) ── */
  function getSettings() {
    try {
      const raw = localStorage.getItem(SETTINGS_KEY);
      const s = raw ? JSON.parse(raw) : {};
      return {
        colors: Array.isArray(s.colors) && s.colors.length
          ? s.colors
          : DEFAULT_LABEL_COLORS.map((hex, i) => ({ id: String(i), hex, name: hex })),
        categories: Array.isArray(s.categories) && s.categories.length
          ? s.categories
          : DEFAULT_CATEGORIES.map((name, i) => ({ id: String(i), name })),
      };
    } catch {
      return {
        colors: DEFAULT_LABEL_COLORS.map((hex, i) => ({ id: String(i), hex, name: hex })),
        categories: DEFAULT_CATEGORIES.map((name, i) => ({ id: String(i), name })),
      };
    }
  }

  function saveSettings(settings) {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  }

  function getColors() { return getSettings().colors.map(c => c.hex); }
  function getCategories() { return getSettings().categories.map(c => c.name); }

  function getBoardKey() {
    if (typeof SrelloProjects !== 'undefined')
      return SrelloProjects.boardKey(SrelloProjects.getCurrentId());
    return 'srello_board';
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
    if (!card.linkedCardIds) card.linkedCardIds = [];
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

  function sortCards(cards) {
    if (sortMode === 'manual') return [...cards];
    return [...cards].sort((a, b) => {
      if (sortMode === 'priority')
        return (PRIORITY_ORDER[a.priority] ?? 9) - (PRIORITY_ORDER[b.priority] ?? 9);
      if (sortMode === 'due-asc') {
        if (!a.dueDate && !b.dueDate) return 0;
        if (!a.dueDate) return 1;
        if (!b.dueDate) return -1;
        return a.dueDate.localeCompare(b.dueDate);
      }
      if (sortMode === 'due-desc') {
        if (!a.dueDate && !b.dueDate) return 0;
        if (!a.dueDate) return 1;
        if (!b.dueDate) return -1;
        return b.dueDate.localeCompare(a.dueDate);
      }
      if (sortMode === 'status')
        return (a.status || '').localeCompare(b.status || '', 'ko');
      if (sortMode === 'title')
        return a.title.localeCompare(b.title, 'ko');
      return 0;
    });
  }

  function load() {
    try {
      const raw = localStorage.getItem(getBoardKey());
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
    board.lastEditedAt = new Date().toISOString();
    localStorage.setItem(getBoardKey(), JSON.stringify(board));
    if (!_inSync && typeof SrelloProjects !== 'undefined') {
      const id = SrelloProjects.getCurrentId();
      const project = SrelloProjects.getProjects().find(p => p.id === id);
      if (project?.sheetId) {
        const status = SrelloProjects.getStatus(id);
        if (['synced', 'never_synced', 'failed'].includes(status.state)) {
          SrelloProjects.setStatus(id, 'dirty');
          renderProjectBar();
        }
      }
    }
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
      linkedCardIds: c.linkedCardIds,
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
      color: raw.color || (priority ? PRIORITY_COLORS[priority] : (getColors()[0] || DEFAULT_LABEL_COLORS[0])),
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
      linkedCardIds: Array.isArray(raw.linkedCardIds) ? raw.linkedCardIds : [],
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

  /* ── 프로젝트 바 UI ── */
  function renderProjectBar() {
    const select = document.getElementById('srello-project-select');
    const badge  = document.getElementById('srello-sync-badge');
    if (!select || typeof SrelloProjects === 'undefined') return;

    const projects = SrelloProjects.getProjects();
    const currentId = SrelloProjects.getCurrentId();
    select.innerHTML = projects
      .map(p => `<option value="${p.id}"${p.id === currentId ? ' selected' : ''}>${escHtml(p.name)}</option>`)
      .join('');

    if (!badge) return;
    const project = projects.find(p => p.id === currentId);
    const status  = SrelloProjects.getStatus(currentId);

    if (!project?.sheetId) {
      badge.textContent = '로컬 전용';
      badge.className = 'srello-sync-badge srello-sync-local';
      return;
    }

    const BADGE = {
      never_synced:  { label: '미동기화',     cls: 'srello-sync-never' },
      dirty:         { label: '변경됨',       cls: 'srello-sync-dirty' },
      synced:        { label: '동기화됨',     cls: 'srello-sync-synced' },
      syncing:       { label: '동기화 중…',  cls: 'srello-sync-syncing' },
      failed:        { label: '동기화 실패',  cls: 'srello-sync-failed' },
      disconnected:  { label: '연결 해제',    cls: 'srello-sync-disconnected' },
    };
    const b = BADGE[status.state] || BADGE.never_synced;
    badge.textContent = b.label;
    badge.className = `srello-sync-badge ${b.cls}`;
    if (status.lastSyncedAt) badge.title = `마지막 동기화: ${relativeTime(status.lastSyncedAt)}`;
  }

  /* ── 시간 포맷 헬퍼 ── */
  function relativeTime(iso) {
    if (!iso) return '—';
    const d = Date.now() - new Date(iso).getTime();
    if (d < 60000)    return '방금 전';
    if (d < 3600000)  return `${Math.floor(d / 60000)}분 전`;
    if (d < 86400000) return `${Math.floor(d / 3600000)}시간 전`;
    return `${Math.floor(d / 86400000)}일 전`;
  }

  /* ── Push / Pull 버튼 상태 ── */
  function updateSyncButtons(loading) {
    const push = document.getElementById('srello-push-btn');
    const pull = document.getElementById('srello-pull-btn');
    if (push) { push.disabled = loading; push.textContent = loading ? '저장 중…'    : '⬆ 저장'; }
    if (pull) { pull.disabled = loading; pull.textContent = loading ? '불러오는 중…' : '⬇ 불러오기'; }
  }

  /* ── 충돌 모달 ── */
  function openConflictModal(localInfo, remoteInfo, onPull, onPush, onCancel) {
    document.querySelector('.modal-overlay.srello-conflict-modal')?.remove();
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay srello-conflict-modal';
    overlay.innerHTML = `
      <div class="modal srello-modal">
        <div class="srello-modal-hdr">⚠ 충돌이 감지되었습니다</div>
        <div class="srello-modal-body">
          <p class="srello-conflict-desc">마지막 동기화 이후 원격과 로컬 모두 변경되었습니다. 어떤 버전을 유지할지 선택하세요.</p>
          <div class="srello-conflict-grid">
            <div class="srello-conflict-side">
              <div class="srello-conflict-side-title">원격 (Google Sheets)</div>
              <div class="srello-conflict-row">
                <span class="srello-conflict-label">수정자</span>
                <span class="srello-conflict-value">${escHtml(remoteInfo.updatedBy || '—')}</span>
              </div>
              <div class="srello-conflict-row">
                <span class="srello-conflict-label">수정 시각</span>
                <span class="srello-conflict-value">${escHtml(relativeTime(remoteInfo.updatedAt))}</span>
              </div>
            </div>
            <div class="srello-conflict-side">
              <div class="srello-conflict-side-title">로컬 (이 브라우저)</div>
              <div class="srello-conflict-row">
                <span class="srello-conflict-label">수정자</span>
                <span class="srello-conflict-value">${escHtml(localInfo.updatedBy)}</span>
              </div>
              <div class="srello-conflict-row">
                <span class="srello-conflict-label">수정 시각</span>
                <span class="srello-conflict-value">${escHtml(relativeTime(localInfo.updatedAt))}</span>
              </div>
              <div class="srello-conflict-row">
                <span class="srello-conflict-label">카드 수</span>
                <span class="srello-conflict-value">${localInfo.cardCount}개</span>
              </div>
            </div>
          </div>
        </div>
        <div class="srello-modal-footer">
          <button type="button" class="btn" id="srello-conflict-cancel">취소</button>
          <div class="srello-modal-footer-right">
            <button type="button" class="btn" id="srello-conflict-pull">원격으로 덮어쓰기</button>
            <button type="button" class="btn btn-primary" id="srello-conflict-push">로컬로 덮어쓰기</button>
          </div>
        </div>
      </div>`;

    overlay.querySelector('#srello-conflict-cancel')?.addEventListener('click', () => { overlay.remove(); onCancel(); });
    overlay.querySelector('#srello-conflict-pull')?.addEventListener('click',   () => { overlay.remove(); onPull(); });
    overlay.querySelector('#srello-conflict-push')?.addEventListener('click',   () => { overlay.remove(); onPush(); });
    overlay.addEventListener('click', e => { if (e.target === overlay) { overlay.remove(); onCancel(); } });
    document.body.appendChild(overlay);
  }

  /* ── Pull 실행 (handlePush 충돌 분기에서도 재사용) ── */
  async function executePull(projectId, sheetId) {
    _inSync = true;
    try {
      const { meta, boardJson } = await SrelloSync.pullBoard(sheetId);
      board = JSON.parse(boardJson);
      if (!board.lists) board.lists = [];
      board.lastEditedAt = meta.updatedAt;
      migrateBoardFields();
      save(); // _inSync=true → dirty 마킹 없음
      const now = new Date().toISOString();
      SrelloProjects.setStatus(projectId, 'synced', { lastSyncedAt: now, lastRemoteUpdatedAt: meta.updatedAt });
      render();
      renderProjectBar();
      updateSyncButtons(false);
      toast('Google Sheets에서 보드를 불러왔습니다.', 'success');
    } catch (err) {
      SrelloProjects.setStatus(projectId, 'failed');
      renderProjectBar();
      updateSyncButtons(false);
      toast('불러오기 실패: ' + err.message, 'error');
    } finally {
      _inSync = false;
    }
  }

  /* ── Push ── */
  async function handlePush() {
    if (typeof SrelloProjects === 'undefined' || typeof SrelloSync === 'undefined') return;
    const projectId = SrelloProjects.getCurrentId();
    const project   = SrelloProjects.getProjects().find(p => p.id === projectId);

    if (!project?.sheetId) {
      openConnectSheetModal(projectId, () => toast('시트 연결 후 저장을 다시 시도하세요.', 'info'));
      return;
    }
    const status = SrelloProjects.getStatus(projectId);
    if (status.state === 'syncing') return;

    SrelloProjects.setStatus(projectId, 'syncing');
    renderProjectBar();
    updateSyncButtons(true);

    try {
      if (!SrelloSync.isConnected()) await SrelloSync.authorize();

      const remoteMeta = await SrelloSync.fetchRemoteMeta(project.sheetId);

      // 충돌 감지: 원격 updatedAt이 있고, 마지막으로 우리가 쓴 값과 다를 때
      if (remoteMeta?.updatedAt && remoteMeta.updatedAt !== status.lastRemoteUpdatedAt) {
        const localCardCount = board.lists.reduce((acc, l) => acc + l.cards.length, 0);
        const choice = await new Promise(resolve => {
          openConflictModal(
            { updatedAt: board.lastEditedAt, updatedBy: '이 기기', cardCount: localCardCount },
            { updatedAt: remoteMeta.updatedAt, updatedBy: remoteMeta.updatedBy || '다른 기기' },
            () => resolve('pull'),
            () => resolve('push'),
            () => resolve('cancel')
          );
        });
        if (choice === 'cancel') {
          SrelloProjects.setStatus(projectId, 'dirty');
          renderProjectBar();
          updateSyncButtons(false);
          return;
        }
        if (choice === 'pull') {
          await executePull(projectId, project.sheetId);
          return;
        }
        // choice === 'push' → 계속 진행
      }

      const pushedAt = await SrelloSync.pushBoard(project.sheetId, projectId, board);
      const now = new Date().toISOString();
      SrelloProjects.setStatus(projectId, 'synced', { lastSyncedAt: now, lastRemoteUpdatedAt: pushedAt });
      renderProjectBar();
      updateSyncButtons(false);
      toast('보드를 Google Sheets에 저장했습니다.', 'success');

    } catch (err) {
      SrelloProjects.setStatus(projectId, 'failed');
      renderProjectBar();
      updateSyncButtons(false);
      toast('저장 실패: ' + err.message, 'error');
    }
  }

  /* ── Pull ── */
  async function handlePull() {
    if (typeof SrelloProjects === 'undefined' || typeof SrelloSync === 'undefined') return;
    const projectId = SrelloProjects.getCurrentId();
    const project   = SrelloProjects.getProjects().find(p => p.id === projectId);

    if (!project?.sheetId) {
      openConnectSheetModal(projectId, () => toast('시트 연결 후 불러오기를 다시 시도하세요.', 'info'));
      return;
    }
    const status = SrelloProjects.getStatus(projectId);
    if (status.state === 'syncing') return;

    SrelloProjects.setStatus(projectId, 'syncing');
    renderProjectBar();
    updateSyncButtons(true);

    try {
      if (!SrelloSync.isConnected()) await SrelloSync.authorize();
    } catch (err) {
      SrelloProjects.setStatus(projectId, 'failed');
      renderProjectBar();
      updateSyncButtons(false);
      toast('인증 실패: ' + err.message, 'error');
      return;
    }
    await executePull(projectId, project.sheetId);
  }

  function switchProject(newId) {
    if (typeof SrelloProjects === 'undefined') return;
    if (SrelloProjects.getCurrentId() === newId) return;
    SrelloProjects.setCurrentId(newId);
    board = null;
    load();
    render();
    renderProjectBar();
    const name = SrelloProjects.getProjects().find(p => p.id === newId)?.name;
    if (name) toast(`「${name}」 프로젝트로 전환했습니다.`, 'info');
  }

  /* ── 시트 연결 모달 ── */
  function openConnectSheetModal(projectId, onSuccess) {
    if (typeof SrelloSync === 'undefined') {
      toast('SrelloSync 모듈이 로드되지 않았습니다.', 'error');
      return;
    }
    document.querySelector('.modal-overlay.srello-connect-modal')?.remove();

    const project = SrelloProjects.getProjects().find(p => p.id === projectId);
    if (!project) return;

    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay srello-connect-modal';
    overlay.innerHTML = `
      <div class="modal srello-modal">
        <div class="srello-modal-hdr">📊 Google Sheets 연결 — ${escHtml(project.name)}</div>
        <div class="srello-modal-body">
          <p class="srello-connect-desc">
            이 프로젝트를 Google Sheets에 연결하면 다른 기기에서도 보드를 불러올 수 있습니다.<br>
            <span class="srello-connect-warn">GCP 프로젝트에서 Google Sheets API가 활성화되어 있어야 합니다.</span>
          </p>
          <div class="srello-connect-section">
            <div class="srello-connect-section-title">새 시트 만들기</div>
            <p class="srello-connect-hint">Google Drive에 「Srello — ${escHtml(project.name)}」 파일을 자동 생성합니다.</p>
            <button type="button" class="btn btn-primary btn-sm" id="srello-connect-create">새 시트 만들기</button>
          </div>
          <div class="srello-connect-divider">또는</div>
          <div class="srello-connect-section">
            <div class="srello-connect-section-title">기존 시트 연결</div>
            <div class="srello-connect-url-row">
              <input type="text" class="input" id="srello-connect-url"
                placeholder="Google Sheets URL 또는 ID" autocomplete="off">
              <button type="button" class="btn btn-sm btn-primary" id="srello-connect-link">연결</button>
            </div>
            <p class="srello-connect-hint">URL 예시: docs.google.com/spreadsheets/d/<strong>시트ID</strong>/…</p>
          </div>
          <div class="srello-connect-error" id="srello-connect-error" style="display:none"></div>
        </div>
        <div class="srello-modal-footer">
          <div></div>
          <button type="button" class="btn" id="srello-connect-close">닫기</button>
        </div>
      </div>`;

    function setLoading(on) {
      overlay.querySelectorAll('button:not(#srello-connect-close)').forEach(b => { b.disabled = on; });
      overlay.querySelector('#srello-connect-create').textContent = on ? '처리 중…' : '새 시트 만들기';
      overlay.querySelector('#srello-connect-link').textContent   = on ? '처리 중…' : '연결';
    }

    function setError(msg) {
      const el = overlay.querySelector('#srello-connect-error');
      if (!el) return;
      el.textContent = msg ? '⚠ ' + msg : '';
      el.style.display = msg ? '' : 'none';
    }

    async function runWithAuth(fn) {
      setLoading(true);
      setError('');
      try {
        if (!SrelloSync.isConnected()) await SrelloSync.authorize();
        await fn();
        overlay.remove();
        renderProjectBar();
        if (onSuccess) onSuccess();
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }

    overlay.querySelector('#srello-connect-create')?.addEventListener('click', () => {
      runWithAuth(async () => {
        await SrelloSync.createAndConnect(projectId, project.name);
        toast(`「${project.name}」를 새 Google Sheets에 연결했습니다.`, 'success');
      });
    });

    const linkFn = () => {
      const input = overlay.querySelector('#srello-connect-url');
      const sheetId = SrelloSync.parseSheetId(input?.value || '');
      if (!sheetId) {
        setError('유효하지 않은 URL 또는 ID입니다. Google Sheets URL 전체 또는 ID(20자 이상)를 입력하세요.');
        return;
      }
      runWithAuth(async () => {
        await SrelloSync.connectExisting(projectId, sheetId);
        toast(`「${project.name}」를 기존 Google Sheets에 연결했습니다.`, 'success');
      });
    };
    overlay.querySelector('#srello-connect-link')?.addEventListener('click', linkFn);
    overlay.querySelector('#srello-connect-url')?.addEventListener('keydown', e => {
      if (e.key === 'Enter') { e.preventDefault(); linkFn(); }
    });

    overlay.querySelector('#srello-connect-close')?.addEventListener('click', () => overlay.remove());
    overlay.addEventListener('click', e => { if (e.target === overlay) overlay.remove(); });
    document.body.appendChild(overlay);
  }

  function openProjectModal() {
    if (typeof SrelloProjects === 'undefined') return;
    document.querySelector('.modal-overlay.srello-project-modal')?.remove();

    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay srello-project-modal';

    function renderModal() {
      const projects  = SrelloProjects.getProjects();
      const defaultId = SrelloProjects.getDefaultId();

      overlay.innerHTML = `
        <div class="modal srello-modal">
          <div class="srello-modal-hdr">⚙ 프로젝트 관리</div>
          <div class="srello-modal-body">
            <ul class="srello-project-list" id="srello-project-list">
              ${projects.map(p => `
                <li class="srello-project-item">
                  <div class="srello-project-info">
                    <span class="srello-project-name">${escHtml(p.name)}</span>
                    ${p.id === defaultId ? '<span class="srello-project-default-badge">기본</span>' : ''}
                    ${p.sheetId ? '<span class="srello-project-sheet-badge" title="Google Sheets 연결됨">📊</span>' : ''}
                  </div>
                  <div class="srello-project-actions">
                    ${p.id === defaultId ? '' : `<button type="button" class="btn btn-sm" data-action="set-default" data-id="${p.id}">기본으로</button>`}
                    <button type="button" class="btn btn-sm" data-action="rename" data-id="${p.id}" data-name="${escHtml(p.name)}">이름 변경</button>
                    ${p.sheetId
                      ? `<button type="button" class="btn btn-sm" data-action="disconnect-sheet" data-id="${p.id}" data-name="${escHtml(p.name)}">연결 해제</button>`
                      : `<button type="button" class="btn btn-sm btn-primary" data-action="connect-sheet" data-id="${p.id}" data-name="${escHtml(p.name)}">시트 연결</button>`}
                    ${projects.length > 1 ? `<button type="button" class="btn btn-sm" style="color:var(--color-game)" data-action="delete" data-id="${p.id}" data-name="${escHtml(p.name)}">삭제</button>` : ''}
                  </div>
                </li>`).join('')}
            </ul>
            <div class="srello-project-add-row">
              <input type="text" class="input" id="srello-new-project-name" placeholder="새 프로젝트 이름" maxlength="40">
              <button type="button" class="btn btn-sm btn-primary" id="srello-add-project-btn">+ 만들기</button>
            </div>
          </div>
          <div class="srello-modal-footer">
            <div></div>
            <button type="button" class="btn" id="srello-project-modal-close">닫기</button>
          </div>
        </div>`;
      bindModalEvents();
    }

    function bindModalEvents() {
      overlay.querySelector('#srello-project-modal-close')?.addEventListener('click', () => overlay.remove());
      overlay.addEventListener('click', e => { if (e.target === overlay) overlay.remove(); });

      const addProject = () => {
        const input = overlay.querySelector('#srello-new-project-name');
        const name = input?.value.trim();
        if (!name) { toast('프로젝트 이름을 입력하세요.', 'error'); return; }
        SrelloProjects.createProject(name);
        if (input) input.value = '';
        renderModal();
        renderProjectBar();
        toast(`프로젝트 「${name}」를 만들었습니다.`, 'success');
      };
      overlay.querySelector('#srello-add-project-btn')?.addEventListener('click', addProject);
      overlay.querySelector('#srello-new-project-name')?.addEventListener('keydown', e => {
        if (e.key === 'Enter') { e.preventDefault(); addProject(); }
      });

      overlay.querySelector('#srello-project-list')?.addEventListener('click', e => {
        const btn = e.target.closest('[data-action]');
        if (!btn) return;
        const { action, id, name } = btn.dataset;

        if (action === 'set-default') {
          SrelloProjects.setDefaultId(id);
          renderModal();
          toast('기본 프로젝트로 설정했습니다.', 'info');
          return;
        }

        if (action === 'rename') {
          const newName = prompt('프로젝트 이름 변경', name);
          if (newName === null) return;
          const trimmed = newName.trim();
          if (!trimmed) { toast('이름을 입력하세요.', 'error'); return; }
          SrelloProjects.renameProject(id, trimmed);
          renderModal();
          renderProjectBar();
          toast('이름이 변경되었습니다.', 'info');
          return;
        }

        if (action === 'connect-sheet') {
          overlay.remove();
          openConnectSheetModal(id, () => openProjectModal());
          return;
        }

        if (action === 'disconnect-sheet') {
          if (!confirm(`「${name}」의 Google Sheets 연결을 해제할까요?\n로컬 데이터는 유지됩니다.`)) return;
          if (typeof SrelloSync !== 'undefined') SrelloSync.disconnect(id);
          renderModal();
          renderProjectBar();
          toast('시트 연결이 해제되었습니다.', 'info');
          return;
        }

        if (action === 'delete') {
          if (!confirm(`「${name}」 프로젝트의 모든 로컬 데이터가 삭제됩니다.\n계속할까요?`)) return;
          const wasCurrentId = SrelloProjects.getCurrentId();
          const ok = SrelloProjects.deleteProject(id, true);
          if (!ok) { toast('마지막 프로젝트는 삭제할 수 없습니다.', 'error'); return; }
          if (wasCurrentId === id) {
            board = null;
            load();
            render();
          }
          renderModal();
          renderProjectBar();
          toast(`프로젝트 「${name}」를 삭제했습니다.`, 'info');
        }
      });
    }

    renderModal();
    document.body.appendChild(overlay);
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
    document.getElementById('srello-settings-btn')?.addEventListener('click', openSettingsModal);
    document.getElementById('srello-project-manage')?.addEventListener('click', openProjectModal);
    document.getElementById('srello-project-select')?.addEventListener('change', e => switchProject(e.target.value));
    document.getElementById('srello-push-btn')?.addEventListener('click', handlePush);
    document.getElementById('srello-pull-btn')?.addEventListener('click', handlePull);
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
    // 3-way 동기화: 완료 리스트 이동 → done + status 모두 완료
    if (!card.done) { card.done = true; changed = true; }
    if (card.status !== '완료') { card.status = '완료'; changed = true; }
    if (changed) logActivity(card, `「${toList.title}」로 이동 — 완료 처리`);
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
      color: opts.color || (priority ? PRIORITY_COLORS[priority] : (getColors()[0] || DEFAULT_LABEL_COLORS[0])),
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
      // patch.color가 명시된 경우 우선순위 색이 사용자 선택 색을 덮어쓰지 않음
      if (patch.priority && PRIORITY_COLORS[patch.priority] && patch.color === undefined)
        card.color = PRIORITY_COLORS[patch.priority];
    }
    if (patch.category !== undefined) card.category = patch.category || undefined;
    if (patch.status !== undefined) {
      card.status = patch.status || '';
      // status 변경 → done 자동 동기화 (done이 명시 안 된 경우)
      if (patch.done === undefined) card.done = card.status === '완료';
    }
    if (patch.cover !== undefined) card.cover = patch.cover || '';
    if (patch.dueDate !== undefined) card.dueDate = patch.dueDate || '';
    if (patch.done !== undefined) {
      card.done = !!patch.done;
      // done 변경 → status 자동 동기화 (status가 명시 안 된 경우)
      if (patch.status === undefined) {
        if (card.done) { if (card.status !== '완료') card.status = '완료'; }
        else { if (card.status === '완료') card.status = ''; }
      }
    }
    if (patch.checklist !== undefined) card.checklist = patch.checklist;
    if (patch.comments !== undefined) card.comments = patch.comments;
    if (patch.attachments !== undefined) card.attachments = patch.attachments;
    if (patch.linkedCardIds !== undefined) card.linkedCardIds = patch.linkedCardIds;
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
    const set = new Set(getCategories());
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
      <button type="button" class="btn btn-sm" id="srello-filter-clear">필터 초기화</button>
      <label class="srello-filter-label srello-sort-label">
        <span>정렬</span>
        <select id="srello-sort-select" class="input srello-filter-select srello-sort-select">
          <option value="manual" ${sortMode === 'manual' ? 'selected' : ''}>수동 (드래그 순서)</option>
          <option value="priority" ${sortMode === 'priority' ? 'selected' : ''}>우선순위</option>
          <option value="due-asc" ${sortMode === 'due-asc' ? 'selected' : ''}>마감일 빠른 순</option>
          <option value="due-desc" ${sortMode === 'due-desc' ? 'selected' : ''}>마감일 늦은 순</option>
          <option value="status" ${sortMode === 'status' ? 'selected' : ''}>상태</option>
          <option value="title" ${sortMode === 'title' ? 'selected' : ''}>제목</option>
        </select>
      </label>`;
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
    el.querySelector('#srello-sort-select')?.addEventListener('change', e => {
      sortMode = e.target.value;
      localStorage.setItem(SORT_KEY, sortMode);
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

    const listsHtml = board.lists.map((list, listIdx) => {
      const cards = sortCards(list.cards).filter(cardMatchesFilter);
      return `
      <div class="srello-list" data-list-id="${list.id}" data-list-idx="${listIdx}">
        <div class="srello-list-header">
          <span class="srello-list-handle" draggable="true" title="드래그하여 순서 변경">⋮⋮</span>
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
              // 3-way 동기화: face 토글 → status 동기화
              if (found.card.done) {
                found.card.status = '완료';
              } else if (found.card.status === '완료') {
                found.card.status = '';
              }
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

    // 카드 드래그
    container.querySelectorAll('.srello-list-cards').forEach(zone => {
      zone.addEventListener('dragover', onDragOver);
      zone.addEventListener('dragleave', onDragLeave);
      zone.addEventListener('drop', onDrop);
    });
    container.querySelectorAll('.srello-card').forEach(el => {
      el.addEventListener('dragstart', onDragStart);
      el.addEventListener('dragend', onDragEnd);
    });

    // 리스트 드래그 — 핸들 자체가 draggable="true" (플래그 경쟁 없음)
    container.querySelectorAll('.srello-list-handle').forEach(handle => {
      handle.addEventListener('dragstart', (e) => {
        const listEl = handle.closest('.srello-list');
        if (!listEl) return;
        drag = { kind: 'list', listId: listEl.dataset.listId, fromIdx: parseInt(listEl.dataset.listIdx, 10) };
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', listEl.dataset.listId);
        e.dataTransfer.setDragImage(listEl, 20, 20);
        // ghost 캡처 이후에 클래스 적용
        requestAnimationFrame(() => listEl.classList.add('srello-list--dragging'));
      });
      handle.addEventListener('dragend', () => {
        handle.closest('.srello-list')?.classList.remove('srello-list--dragging');
        listPlaceholder?.remove();
        if (drag?.kind === 'list') drag = null;
      });
    });
    container.querySelectorAll('.srello-list:not(.srello-list--add)').forEach(el => {
      el.addEventListener('dragover',  onListDragOver);
      el.addEventListener('dragleave', onListDragLeave);
      el.addEventListener('drop',      onListDrop);
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

  /* ── 카드 드래그 ── */
  function onDragStart(e) {
    const el = e.currentTarget;
    drag = { kind: 'card', cardId: el.dataset.cardId, fromListId: el.dataset.listId };
    el.classList.add('srello-card--dragging');
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', drag.cardId);
    e.stopPropagation(); // 리스트 dragstart 전파 차단
  }

  function onDragEnd(e) {
    e.currentTarget.classList.remove('srello-card--dragging');
    document.querySelectorAll('.srello-list-cards--over').forEach(z => z.classList.remove('srello-list-cards--over'));
    cardPlaceholder?.remove();
    drag = null;
  }

  function onDragOver(e) {
    if (drag?.kind !== 'card') return;
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    const zone = e.currentTarget;
    zone.classList.add('srello-list-cards--over');
    // 플레이스홀더를 커서 위치에 맞게 삽입
    const ph = getCardPlaceholder();
    const cards = [...zone.querySelectorAll('.srello-card:not(.srello-card--dragging)')];
    let insertBefore = null;
    for (const card of cards) {
      const mid = card.getBoundingClientRect().top + card.offsetHeight / 2;
      if (e.clientY < mid) { insertBefore = card; break; }
    }
    insertBefore ? zone.insertBefore(ph, insertBefore) : zone.appendChild(ph);
  }

  function onDragLeave(e) {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      e.currentTarget.classList.remove('srello-list-cards--over');
      cardPlaceholder?.remove();
    }
  }

  /* ── 리스트 드래그 (e.currentTarget = .srello-list) ── */
  function onListDragStart(e) {
    const el = e.currentTarget; // .srello-list
    const listId = el.dataset.listId;
    const fromIdx = parseInt(el.dataset.listIdx, 10);
    drag = { kind: 'list', listId, fromIdx };
    el.classList.add('srello-list--dragging');
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', listId);
    // 드래그 이미지를 핸들로 교체 (전체 리스트 ghost 방지)
    const handle = el.querySelector('.srello-list-handle');
    if (handle) e.dataTransfer.setDragImage(handle, handle.offsetWidth / 2, handle.offsetHeight / 2);
  }

  function onListDragOver(e) {
    if (drag?.kind !== 'list') return;
    e.preventDefault();
    e.stopPropagation();
    const listEl = e.currentTarget;
    if (listEl.dataset.listId === drag.listId) return;
    const scroll = listEl.closest('.srello-board-scroll');
    if (!scroll) return;
    const ph = getListPlaceholder();
    const rect = listEl.getBoundingClientRect();
    e.clientX < rect.left + rect.width / 2
      ? scroll.insertBefore(ph, listEl)
      : scroll.insertBefore(ph, listEl.nextSibling);
  }

  function onListDragLeave(e) {
    // 플레이스홀더는 dragover에서 계속 갱신되므로 여기서 제거하지 않음
  }

  function onListDrop(e) {
    if (drag?.kind !== 'list') return;
    e.preventDefault();
    e.stopPropagation();
    const scroll = e.currentTarget.closest('.srello-board-scroll');
    let toIdx = 0;
    if (listPlaceholder && listPlaceholder.parentElement === scroll) {
      for (const child of scroll.children) {
        if (child === listPlaceholder) break;
        if (child.classList.contains('srello-list') &&
            !child.classList.contains('srello-list--add') &&
            !child.classList.contains('srello-list--dragging')) toIdx++;
      }
    } else {
      toIdx = parseInt(e.currentTarget.dataset.listIdx, 10);
    }
    listPlaceholder?.remove();
    const fromIdx = drag.fromIdx;
    drag = null;
    if (!isNaN(toIdx) && fromIdx !== toIdx) reorderList(fromIdx, toIdx);
  }

  function reorderList(fromIdx, toIdx) {
    if (fromIdx < 0 || fromIdx >= board.lists.length) return;
    if (toIdx < 0 || toIdx >= board.lists.length) return;
    const [moved] = board.lists.splice(fromIdx, 1);
    board.lists.splice(toIdx, 0, moved);
    save();
    render();
  }

  function onDrop(e) {
    e.preventDefault();
    const zone = e.currentTarget;
    zone.classList.remove('srello-list-cards--over');
    if (!drag || drag.kind !== 'card') return;
    const toListId = zone.dataset.listId;
    // 플레이스홀더 위치로 삽입 인덱스 결정
    let toIndex = 0;
    if (cardPlaceholder && cardPlaceholder.parentElement === zone) {
      for (const child of zone.children) {
        if (child === cardPlaceholder) break;
        if (child.classList.contains('srello-card') && !child.classList.contains('srello-card--dragging')) toIndex++;
      }
    } else {
      toIndex = getDropIndex(zone, e.clientY);
    }
    cardPlaceholder?.remove();
    // 플레이스홀더 기반 toIndex는 제거 후 삽입 위치와 동일 — 단순 비교로 no-op 판별
    if (drag.fromListId === toListId) {
      const list = findList(toListId);
      const fromIdx = list.cards.findIndex(c => c.id === drag.cardId);
      if (toIndex === fromIdx) return;
    }
    // 드래그로 순서 변경 시 수동 정렬로 전환
    if (sortMode !== 'manual') {
      sortMode = 'manual';
      localStorage.setItem(SORT_KEY, 'manual');
    }
    moveCard(drag.cardId, drag.fromListId, toListId, toIndex);
  }

  /* ── Settings 모달 ── */
  function openSettingsModal() {
    document.querySelector('.modal-overlay.srello-settings-modal')?.remove();

    const settings = getSettings();
    // 로컬 복사본 (저장 전 편집용)
    let localColors = settings.colors.map(c => ({ ...c }));
    let localCategories = settings.categories.map(c => ({ ...c }));

    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay srello-settings-modal';

    function renderModalBody() {
      overlay.innerHTML = `
        <div class="modal srello-modal">
          <div class="srello-modal-hdr">⚙ Srello 설정</div>
          <div class="srello-modal-body">

            <div class="srello-settings-section">
              <div class="srello-settings-title">🎨 라벨 색상</div>
              <ul class="srello-settings-list" id="srello-color-list">
                ${localColors.map((c, i) => `
                  <li class="srello-settings-item" data-idx="${i}">
                    <span class="srello-settings-color-dot" style="background:${escHtml(c.hex)}"></span>
                    <input type="color" class="srello-color-picker" value="${escHtml(c.hex)}" data-idx="${i}" title="색상 선택">
                    <input type="text" class="input srello-name-input srello-color-name" value="${escHtml(c.name)}" placeholder="이름(예: 청록)" maxlength="30" data-idx="${i}">
                    <button type="button" class="btn btn-icon btn-sm" data-del-color="${i}" title="삭제">✕</button>
                  </li>`).join('')}
              </ul>
              <div class="srello-settings-add-row">
                <input type="color" id="srello-new-color-picker" value="#64ffda">
                <input type="text" class="input" id="srello-new-color-name" placeholder="새 색상 이름" maxlength="30">
                <button type="button" class="btn btn-sm btn-primary" id="srello-add-color-btn">+ 추가</button>
              </div>
              <p class="srello-settings-hint">카드 라벨에 사용되는 색상입니다. 최소 1개 필요.</p>
            </div>

            <div class="srello-settings-section">
              <div class="srello-settings-title">🏷️ 카테고리</div>
              <p class="srello-settings-hint" style="margin-bottom:8px">작업 종류를 정의합니다 (예: 기획, 아트, 개발, 사운드)</p>
              <ul class="srello-settings-list" id="srello-cat-list">
                ${localCategories.map((c, i) => `
                  <li class="srello-settings-item" data-idx="${i}">
                    <input type="text" class="input srello-name-input srello-cat-name" value="${escHtml(c.name)}" placeholder="카테고리 이름" maxlength="40" data-idx="${i}">
                    <button type="button" class="btn btn-icon btn-sm" data-del-cat="${i}" title="삭제">✕</button>
                  </li>`).join('')}
              </ul>
              <div class="srello-settings-add-row">
                <input type="text" class="input" id="srello-new-cat-name" placeholder="새 카테고리 이름" maxlength="40">
                <button type="button" class="btn btn-sm btn-primary" id="srello-add-cat-btn">+ 추가</button>
              </div>
              <p class="srello-settings-hint">기존 카드의 카테고리 값은 그대로 유지됩니다.</p>
            </div>

          </div>
          <div class="srello-modal-footer">
            <button type="button" class="btn" id="srello-settings-reset" style="color:var(--color-game)">초기화</button>
            <div class="srello-modal-footer-right">
              <button type="button" class="btn" id="srello-settings-cancel">닫기</button>
              <button type="button" class="btn btn-primary" id="srello-settings-save">저장</button>
            </div>
          </div>
        </div>`;
      bindSettingsModalEvents();
    }

    function bindSettingsModalEvents() {
      // 색상 picker 변경
      overlay.querySelector('#srello-color-list')?.addEventListener('input', e => {
        const picker = e.target.closest('.srello-color-picker');
        if (picker) {
          const i = +picker.dataset.idx;
          localColors[i].hex = picker.value;
          localColors[i].name = localColors[i].name || picker.value;
          // 미리보기 dot 업데이트
          const dot = picker.closest('.srello-settings-item')?.querySelector('.srello-settings-color-dot');
          if (dot) dot.style.background = picker.value;
        }
        const nameInput = e.target.closest('.srello-color-name');
        if (nameInput) localColors[+nameInput.dataset.idx].name = nameInput.value;
      });

      // 카테고리 이름 편집
      overlay.querySelector('#srello-cat-list')?.addEventListener('input', e => {
        const input = e.target.closest('.srello-cat-name');
        if (input) localCategories[+input.dataset.idx].name = input.value;
      });

      // 색상 삭제
      overlay.querySelector('#srello-color-list')?.addEventListener('click', e => {
        const btn = e.target.closest('[data-del-color]');
        if (!btn) return;
        if (localColors.length <= 1) { toast('색상은 최소 1개 필요합니다.', 'error'); return; }
        localColors.splice(+btn.dataset.delColor, 1);
        renderModalBody();
      });

      // 카테고리 삭제
      overlay.querySelector('#srello-cat-list')?.addEventListener('click', e => {
        const btn = e.target.closest('[data-del-cat]');
        if (!btn) return;
        if (localCategories.length <= 1) { toast('카테고리는 최소 1개 필요합니다.', 'error'); return; }
        localCategories.splice(+btn.dataset.delCat, 1);
        renderModalBody();
      });

      // 색상 추가
      overlay.querySelector('#srello-add-color-btn')?.addEventListener('click', () => {
        const hex = overlay.querySelector('#srello-new-color-picker').value;
        const name = overlay.querySelector('#srello-new-color-name').value.trim() || hex;
        localColors.push({ id: genId(), hex, name });
        renderModalBody();
      });

      // 카테고리 추가
      const addCatFn = () => {
        const nameEl = overlay.querySelector('#srello-new-cat-name');
        const name = nameEl?.value.trim();
        if (!name) { toast('카테고리 이름을 입력하세요.', 'error'); return; }
        if (localCategories.some(c => c.name === name)) { toast('이미 존재하는 이름입니다.', 'error'); return; }
        localCategories.push({ id: genId(), name });
        renderModalBody();
      };
      overlay.querySelector('#srello-add-cat-btn')?.addEventListener('click', addCatFn);
      overlay.querySelector('#srello-new-cat-name')?.addEventListener('keydown', e => {
        if (e.key === 'Enter') { e.preventDefault(); addCatFn(); }
      });

      // 초기화
      overlay.querySelector('#srello-settings-reset')?.addEventListener('click', () => {
        if (!confirm('색상과 카테고리를 기본값으로 초기화할까요?')) return;
        localColors = DEFAULT_LABEL_COLORS.map((hex, i) => ({ id: String(i), hex, name: hex }));
        localCategories = DEFAULT_CATEGORIES.map((name, i) => ({ id: String(i), name }));
        renderModalBody();
        toast('기본값으로 초기화했습니다.', 'info');
      });

      // 닫기 / 저장
      overlay.querySelector('#srello-settings-cancel')?.addEventListener('click', () => overlay.remove());
      overlay.addEventListener('click', e => { if (e.target === overlay) overlay.remove(); });
      overlay.querySelector('#srello-settings-save')?.addEventListener('click', () => {
        const cleaned = localColors.filter(c => c.hex).map(c => ({ id: c.id || genId(), hex: c.hex, name: c.name || c.hex }));
        const cleanedCats = localCategories.filter(c => c.name?.trim()).map(c => ({ id: c.id || genId(), name: c.name.trim() }));
        if (!cleaned.length) { toast('색상은 최소 1개 필요합니다.', 'error'); return; }
        if (!cleanedCats.length) { toast('카테고리는 최소 1개 필요합니다.', 'error'); return; }
        saveSettings({ colors: cleaned, categories: cleanedCats });
        overlay.remove();
        render();
        toast('설정이 저장되었습니다.', 'success');
      });
    }

    renderModalBody();
    document.body.appendChild(overlay);
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
        <div class="srello-modal-layout">

          <!-- 좌: 제목·설명·각종 섹션 -->
          <div class="srello-modal-main">
            <input type="text" class="input" id="srello-card-title" value="${escHtml(card.title)}" placeholder="제목">
            <textarea class="input srello-desc-area" id="srello-card-desc" placeholder="설명">${escHtml(card.desc)}</textarea>

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
              <div class="srello-section-hdr">
                <span>연결된 카드</span>
                <button type="button" class="btn btn-sm" id="srello-link-add">+ 연결</button>
              </div>
              <ul class="srello-linked-cards" id="srello-linked-cards"></ul>
            </div>

            <div class="srello-modal-section">
              <button type="button" class="srello-section-hdr srello-section-toggle" id="srello-activity-toggle"
                aria-expanded="false">
                <span class="srello-toggle-chevron">▼</span>
                <span>활동 <span id="srello-activity-count"></span></span>
              </button>
              <ul class="srello-activity" id="srello-activity" style="display:none"></ul>
            </div>
          </div>

          <!-- 우: 아코디언 설정 사이드바 -->
          <div class="srello-modal-sidebar">

            <div class="srello-accordion-item srello-ac-open">
              <button type="button" class="srello-accordion-hdr">
                <span>📅 마감일</span><span class="srello-ac-chevron">▲</span>
              </button>
              <div class="srello-accordion-body">
                <input type="date" class="input" id="srello-card-due" value="${escHtml(card.dueDate || '')}">
                <button type="button" class="btn btn-sm" id="srello-card-due-clear">지우기</button>
              </div>
            </div>

            <div class="srello-accordion-item srello-ac-open">
              <button type="button" class="srello-accordion-hdr">
                <span>⚡ 우선순위</span><span class="srello-ac-chevron">▲</span>
              </button>
              <div class="srello-accordion-body">
                <div class="srello-prio-btns" id="srello-prio-btns">
                  ${['P0', 'P1', 'P2', 'P3'].map(p => `
                    <button type="button" class="btn btn-sm srello-prio-btn" data-prio="${p}"
                      style="--prio:${PRIORITY_COLORS[p]}">${p}</button>`).join('')}
                  <button type="button" class="btn btn-sm" data-prio="">없음</button>
                </div>
              </div>
            </div>

            <div class="srello-accordion-item srello-ac-open">
              <button type="button" class="srello-accordion-hdr">
                <span>🏷 카테고리</span><span class="srello-ac-chevron">▲</span>
              </button>
              <div class="srello-accordion-body">
                <select class="input" id="srello-card-category">
                  <option value="">—</option>
                  ${getAllCategories().map(c => `<option value="${escHtml(c)}" ${card.category === c ? 'selected' : ''}>${escHtml(c)}</option>`).join('')}
                </select>
              </div>
            </div>

            <div class="srello-accordion-item srello-ac-open">
              <button type="button" class="srello-accordion-hdr">
                <span>🔄 상태</span><span class="srello-ac-chevron">▲</span>
              </button>
              <div class="srello-accordion-body">
                <select class="input" id="srello-card-status">
                  <option value="">—</option>
                  ${STATUSES.map(s => `<option value="${escHtml(s)}" ${card.status === s ? 'selected' : ''}>${escHtml(s)}</option>`).join('')}
                </select>
              </div>
            </div>

            <div class="srello-accordion-item">
              <button type="button" class="srello-accordion-hdr">
                <span>🎯 커버</span><span class="srello-ac-chevron">▼</span>
              </button>
              <div class="srello-accordion-body" style="display:none">
                <input type="text" class="input" id="srello-card-cover" value="${escHtml(card.cover || '')}" maxlength="24" placeholder="예: 🎯">
              </div>
            </div>

            <div class="srello-accordion-item">
              <button type="button" class="srello-accordion-hdr">
                <span>🎨 라벨 색</span><span class="srello-ac-chevron">▼</span>
              </button>
              <div class="srello-accordion-body" style="display:none">
                <div class="srello-color-opts">
                  ${getColors().map(c => `
                    <button type="button" class="srello-color-opt" data-color="${c}"
                      style="background:${c}; width:22px; height:22px; border-radius:50%; border:2px solid transparent; cursor:pointer"></button>`).join('')}
                </div>
              </div>
            </div>

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

    // 설명 textarea 자동 높이
    // box-sizing: border-box 환경에서 scrollHeight는 border를 포함하지 않으므로
    // 상하 border 합산값을 더해야 clientHeight === scrollHeight가 됨
    const descEl = overlay.querySelector('#srello-card-desc');
    function autoResizeDesc() {
      descEl.style.height = '0';
      const s = getComputedStyle(descEl);
      const border = parseFloat(s.borderTopWidth) + parseFloat(s.borderBottomWidth);
      descEl.style.height = Math.max(descEl.scrollHeight + border, 72) + 'px';
    }
    descEl.addEventListener('input', autoResizeDesc);
    // double rAF: 첫 번째 rAF에서 DOM 연결, 두 번째에서 레이아웃 완료 후 측정
    requestAnimationFrame(() => requestAnimationFrame(autoResizeDesc));

    let selectedColor = card.color || getColors()[0] || DEFAULT_LABEL_COLORS[0];
    let selectedPriority = card.priority || '';
    let checklist = card.checklist.map(i => ({ ...i }));
    let comments = card.comments.map(c => ({ ...c }));
    let attachments = card.attachments.map(a => ({ ...a }));
    let linkedCardIds = (card.linkedCardIds || []).slice();

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

    function renderLinkedCards() {
      const ul = overlay.querySelector('#srello-linked-cards');
      if (!ul) return;
      // 이미 삭제된 카드 ID 정리
      linkedCardIds = linkedCardIds.filter(cid => {
        for (const l of board.lists) { if (l.cards.find(c => c.id === cid)) return true; }
        return false;
      });
      ul.innerHTML = linkedCardIds.length
        ? linkedCardIds.map((cid, i) => {
            let found = null;
            for (const l of board.lists) {
              const c = l.cards.find(c => c.id === cid);
              if (c) { found = { card: c, list: l }; break; }
            }
            if (!found) return '';
            return `<li class="srello-linked-item">
              <button type="button" class="srello-linked-title" data-cid="${cid}" data-lid="${found.list.id}">${escHtml(found.card.title)}</button>
              <span class="srello-linked-list">${escHtml(found.list.title)}</span>
              <button type="button" class="btn btn-icon btn-sm" data-del-link="${i}">✕</button>
            </li>`;
          }).filter(Boolean).join('')
        : '<li class="srello-empty-hint">연결된 카드 없음</li>';
    }

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
      const countEl = overlay.querySelector('#srello-activity-count');
      if (countEl) countEl.textContent = card.activity.length ? `(${card.activity.length}개)` : '';
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

    renderLinkedCards();
    renderChecklist();
    renderComments();
    renderAttachments();
    renderActivity();
    highlightPrio();
    highlightColor();

    // 우측 사이드바 아코디언 토글
    overlay.querySelectorAll('.srello-accordion-hdr').forEach(hdr => {
      hdr.addEventListener('click', () => {
        const item = hdr.closest('.srello-accordion-item');
        const body = item.querySelector('.srello-accordion-body');
        const chevron = hdr.querySelector('.srello-ac-chevron');
        const isOpen = body.style.display !== 'none';
        body.style.display = isOpen ? 'none' : '';
        item.classList.toggle('srello-ac-open', !isOpen);
        chevron.textContent = isOpen ? '▼' : '▲';
      });
    });

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

    // 활동 내역 아코디언 토글
    overlay.querySelector('#srello-activity-toggle')?.addEventListener('click', () => {
      const ul = overlay.querySelector('#srello-activity');
      const toggleBtn = overlay.querySelector('#srello-activity-toggle');
      const chevron = toggleBtn.querySelector('.srello-toggle-chevron');
      const isOpen = ul.style.display !== 'none';
      ul.style.display = isOpen ? 'none' : '';
      toggleBtn.setAttribute('aria-expanded', String(!isOpen));
      chevron.textContent = isOpen ? '▼' : '▲';
    });

    // 연결된 카드 추가
    overlay.querySelector('#srello-link-add')?.addEventListener('click', () => {
      const allCards = [];
      board.lists.forEach(list => {
        list.cards.forEach(c => {
          if (c.id !== cardId && !linkedCardIds.includes(c.id))
            allCards.push({ id: c.id, title: c.title, listTitle: list.title });
        });
      });
      if (!allCards.length) { toast('연결할 수 있는 다른 카드가 없습니다.', 'info'); return; }
      const lines = allCards.map((c, idx) => `${idx + 1}. [${c.listTitle}] ${c.title}`).join('\n');
      const pick = prompt(`연결할 카드 번호:\n${lines}`);
      if (pick === null) return;
      const idx = parseInt(pick, 10) - 1;
      if (!allCards[idx]) { toast('잘못된 번호입니다.', 'error'); return; }
      linkedCardIds.push(allCards[idx].id);
      renderLinkedCards();
    });

    overlay.querySelector('#srello-linked-cards')?.addEventListener('click', e => {
      const delBtn = e.target.closest('[data-del-link]');
      if (delBtn) {
        linkedCardIds.splice(+delBtn.dataset.delLink, 1);
        renderLinkedCards();
        return;
      }
      const titleBtn = e.target.closest('.srello-linked-title');
      if (titleBtn) {
        overlay.remove();
        openCardModal(titleBtn.dataset.lid, titleBtn.dataset.cid);
      }
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
        linkedCardIds: [...linkedCardIds],
      });
      overlay.remove();
      toast('카드가 저장되었습니다.', 'success');
    });

    overlay.querySelector('#srello-card-title').focus();
  }

  // 마감일 있는 카드 → Calendar 뷰 통합용 이벤트 배열 (API 호출 없이 뷰만 통합)
  function getDueDateEvents() {
    if (!board) load();
    const events = [];
    board.lists.forEach(list => {
      list.cards.forEach(card => {
        if (!card.dueDate) return;
        events.push({
          summary: `📌 ${card.title}`,
          start: { date: card.dueDate },
          end: { date: card.dueDate },
          _calColor: card.done ? '#8899aa' : (card.color || '#64ffda'),
          _isSrello: true,
          _calName: `Srello · ${list.title}`,
        });
      });
    });
    return events;
  }

  function init() {
    let migrateResult = null;
    if (typeof SrelloProjects !== 'undefined') {
      migrateResult = SrelloProjects.migrate();
      if (migrateResult === 'migrated') board = null; // 새 키에서 다시 로드
    }

    if (!board) load();
    bindToolbar();
    renderProjectBar();
    setViewMode(viewMode);

    if (migrateResult === 'migrated') {
      setTimeout(() => toast('기존 보드 데이터를 Personal 프로젝트로 이전했습니다.', 'info'), 400);
    }

    if (!init._mouseUpBound) {
      document.addEventListener('mouseup', () => { listDragHandle = false; });
      init._mouseUpBound = true;
    }
  }

  return { init, render, getStats, load, exportBoard, importBoard, getDueDateEvents };
})();
