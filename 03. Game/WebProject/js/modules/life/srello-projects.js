/* ── SrelloProjects — 멀티 프로젝트 레지스트리 및 마이그레이션 ── */
const SrelloProjects = (() => {
  const PROJECTS_KEY  = 'srello_projects';
  const CURRENT_KEY   = 'srello_current_project_id';
  const DEFAULT_KEY   = 'srello_default_project_id';
  const STATUS_KEY    = 'srello_sync_status';
  const MIGRATED_FLAG = 'srello_migrated_v2';
  const BACKUP_KEY    = 'srello_board_backup_premigration';
  const LEGACY_KEY    = 'srello_board';

  function boardKey(projectId) { return `srello_board_${projectId}`; }

  function genId() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
  }

  /* ── Projects CRUD ── */
  function getProjects() {
    try { return JSON.parse(localStorage.getItem(PROJECTS_KEY)) || []; }
    catch { return []; }
  }

  function saveProjects(projects) {
    localStorage.setItem(PROJECTS_KEY, JSON.stringify(projects));
  }

  /* ── Current / Default ── */
  function getCurrentId() {
    const id = localStorage.getItem(CURRENT_KEY);
    if (id) return id;
    return getProjects()[0]?.id || 'personal';
  }

  function setCurrentId(id) { localStorage.setItem(CURRENT_KEY, id); }

  function getDefaultId() {
    return localStorage.getItem(DEFAULT_KEY) || getCurrentId();
  }

  function setDefaultId(id) { localStorage.setItem(DEFAULT_KEY, id); }

  /* ── Sync status ── */
  function getStatus(projectId) {
    try {
      const all = JSON.parse(localStorage.getItem(STATUS_KEY)) || {};
      return all[projectId] || { state: 'never_synced', lastSyncedAt: null };
    } catch { return { state: 'never_synced', lastSyncedAt: null }; }
  }

  function setStatus(projectId, state, lastSyncedAt = null) {
    try {
      const all = JSON.parse(localStorage.getItem(STATUS_KEY)) || {};
      all[projectId] = {
        state,
        lastSyncedAt: lastSyncedAt ?? all[projectId]?.lastSyncedAt ?? null,
      };
      localStorage.setItem(STATUS_KEY, JSON.stringify(all));
    } catch {}
  }

  function removeStatus(projectId) {
    try {
      const all = JSON.parse(localStorage.getItem(STATUS_KEY)) || {};
      delete all[projectId];
      localStorage.setItem(STATUS_KEY, JSON.stringify(all));
    } catch {}
  }

  /* ── Migration: srello_board → srello_board_personal ── */
  function migrate() {
    if (localStorage.getItem(MIGRATED_FLAG)) return null;
    if (localStorage.getItem(PROJECTS_KEY)) {
      localStorage.setItem(MIGRATED_FLAG, '1');
      return null;
    }

    const legacyRaw = localStorage.getItem(LEGACY_KEY);

    // 원본 백업 (롤백용)
    if (legacyRaw) localStorage.setItem(BACKUP_KEY, legacyRaw);

    try {
      const personal = { id: 'personal', name: 'Personal', sheetId: null, enabled: true };
      saveProjects([personal]);
      setCurrentId('personal');
      setDefaultId('personal');
      setStatus('personal', 'never_synced');

      if (legacyRaw) {
        const parsed = JSON.parse(legacyRaw);
        if (!parsed.lastEditedAt) parsed.lastEditedAt = new Date().toISOString();
        localStorage.setItem(boardKey('personal'), JSON.stringify(parsed));
        localStorage.removeItem(LEGACY_KEY);
      }

      localStorage.setItem(MIGRATED_FLAG, '1');
      return legacyRaw ? 'migrated' : 'fresh';
    } catch (err) {
      // 롤백: 백업 복원
      if (legacyRaw) localStorage.setItem(LEGACY_KEY, legacyRaw);
      localStorage.removeItem(PROJECTS_KEY);
      localStorage.removeItem(CURRENT_KEY);
      localStorage.removeItem(DEFAULT_KEY);
      localStorage.removeItem(BACKUP_KEY);
      console.error('[SrelloProjects] 마이그레이션 실패 — 롤백 완료', err);
      return null;
    }
  }

  /* ── Project operations ── */
  function createProject(name) {
    const projects = getProjects();
    const id = genId();
    projects.push({ id, name: name.trim(), sheetId: null, enabled: true });
    saveProjects(projects);
    setStatus(id, 'never_synced');
    return id;
  }

  function renameProject(id, name) {
    const projects = getProjects();
    const p = projects.find(p => p.id === id);
    if (!p) return false;
    p.name = name.trim();
    saveProjects(projects);
    return true;
  }

  // deleteLocalData: true면 srello_board_<id>도 함께 삭제
  function deleteProject(id, deleteLocalData = false) {
    const projects = getProjects();
    if (projects.length <= 1) return false;
    const idx = projects.findIndex(p => p.id === id);
    if (idx < 0) return false;
    projects.splice(idx, 1);
    saveProjects(projects);
    if (deleteLocalData) localStorage.removeItem(boardKey(id));
    removeStatus(id);
    if (getCurrentId() === id) {
      const fallback = getDefaultId() !== id ? getDefaultId() : projects[0]?.id;
      if (fallback) setCurrentId(fallback);
    }
    if (getDefaultId() === id) setDefaultId(projects[0]?.id || '');
    return true;
  }

  return {
    boardKey,
    getProjects, saveProjects,
    getCurrentId, setCurrentId,
    getDefaultId, setDefaultId,
    getStatus, setStatus,
    migrate,
    createProject, renameProject, deleteProject,
  };
})();
