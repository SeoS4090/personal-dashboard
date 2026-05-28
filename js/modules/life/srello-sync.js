/* ── SrelloSync — Google Sheets OAuth 및 시트 조작 ── */
const SrelloSync = (() => {
  const CLIENT_ID_KEY = 'gcal_client_id'; // Calendar와 동일한 GCP 프로젝트
  const TOKEN_KEY     = 'srello_sheets_token';
  const TOKEN_EXP_KEY = 'srello_sheets_token_expiry';
  const SCOPE         = 'https://www.googleapis.com/auth/spreadsheets';
  const API           = 'https://sheets.googleapis.com/v4/spreadsheets';
  const SHEET_TAB     = 'SrelloSync';
  const HEADER_ROW    = ['schemaVersion', 'updatedAt', 'updatedBy', 'projectId', 'boardJson'];
  const SCHEMA_VER    = '1';
  const CLIENT_ID_LS  = 'srello_client_id';

  let tokenClient  = null;
  let accessToken  = null;
  let _silentTry   = false;
  let _authResolve = null;
  let _authReject  = null;

  /* ── Token management ── */
  function _saveToken(token) {
    accessToken = token;
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(TOKEN_EXP_KEY, String(Date.now() + 3500 * 1000)); // 58분
  }

  function _clearToken() {
    accessToken = null;
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(TOKEN_EXP_KEY);
  }

  function _restoreToken() {
    const t = localStorage.getItem(TOKEN_KEY);
    const e = parseInt(localStorage.getItem(TOKEN_EXP_KEY) || '0');
    if (t && Date.now() < e) { accessToken = t; return true; }
    _clearToken();
    return false;
  }

  /* ── OAuth ── */
  function _initTokenClient() {
    if (tokenClient) return true;
    const clientId = localStorage.getItem(CLIENT_ID_KEY);
    if (!clientId) return false;
    if (typeof google === 'undefined' || !google.accounts?.oauth2) return false;

    tokenClient = google.accounts.oauth2.initTokenClient({
      client_id: clientId,
      scope: SCOPE,
      callback: (resp) => {
        const wasSilent = _silentTry;
        _silentTry = false;
        if (resp.error) {
          _clearToken();
          if (_authReject) {
            const rej = _authReject;
            _authResolve = _authReject = null;
            rej(new Error(resp.error === 'access_denied' ? '권한이 거부되었습니다.' : resp.error));
          } else if (!wasSilent) {
            toast('Google Sheets 인증 실패: ' + resp.error, 'error');
          }
          return;
        }
        _saveToken(resp.access_token);
        if (_authResolve) {
          const res = _authResolve;
          _authResolve = _authReject = null;
          res(resp.access_token);
        }
      },
    });
    return true;
  }

  function isConnected() {
    _restoreToken();
    return !!accessToken;
  }

  // 인증 요청 — Promise 반환. 이미 토큰 있으면 즉시 resolve
  function authorize(silent = false) {
    if (_restoreToken()) return Promise.resolve(accessToken);
    return new Promise((resolve, reject) => {
      if (typeof google === 'undefined' || !google.accounts?.oauth2) {
        reject(new Error('Google 라이브러리가 아직 로드되지 않았습니다.'));
        return;
      }
      if (!localStorage.getItem(CLIENT_ID_KEY)) {
        reject(new Error('OAuth Client ID를 먼저 설정하세요 (캘린더 설정과 동일).'));
        return;
      }
      _initTokenClient();
      if (!tokenClient) {
        reject(new Error('tokenClient 초기화 실패 — Client ID를 확인하세요.'));
        return;
      }
      _authResolve = resolve;
      _authReject  = reject;
      _silentTry   = silent;
      tokenClient.requestAccessToken(silent ? { prompt: '' } : undefined);
    });
  }

  function resetAuth() {
    tokenClient = null;
    _clearToken();
  }

  /* ── URL/ID 파싱 ── */
  function parseSheetId(urlOrId) {
    if (!urlOrId) return null;
    const trimmed = urlOrId.trim();
    // Google Sheets URL에서 ID 추출
    const m = trimmed.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);
    if (m) return m[1];
    // 이미 순수 ID인 경우 (20자 이상 영숫자)
    if (/^[a-zA-Z0-9-_]{20,}$/.test(trimmed)) return trimmed;
    return null;
  }

  /* ── API 헬퍼 ── */
  async function _fetch(url, opts = {}) {
    const resp = await fetch(url, {
      ...opts,
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
        ...(opts.headers || {}),
      },
    });
    if (!resp.ok) {
      if (resp.status === 401) { _clearToken(); tokenClient = null; }
      let msg = `HTTP ${resp.status}`;
      try {
        const body = await resp.json();
        msg = body.error?.message || msg;
        // Sheets API 미활성화 안내
        if (msg.includes('has not been used') || msg.includes('is disabled')) {
          msg = 'Google Sheets API가 비활성화되어 있습니다. GCP Console → API 라이브러리에서 활성화하세요.';
        }
      } catch {}
      throw new Error(msg);
    }
    return resp.json();
  }

  /* ── 클라이언트 ID (updatedBy 식별용) ── */
  function getClientId() {
    let id = localStorage.getItem(CLIENT_ID_LS);
    if (!id) {
      id = 'client_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
      localStorage.setItem(CLIENT_ID_LS, id);
    }
    return id;
  }

  /* ── 시트 조작 ── */

  // 새 스프레드시트 생성 → sheetId 반환
  async function createSheet(title) {
    const data = await _fetch(API, {
      method: 'POST',
      body: JSON.stringify({ properties: { title } }),
    });
    return data.spreadsheetId;
  }

  // sheetId 유효성 + 접근 가능 여부 검증
  async function validateSheet(sheetId) {
    return _fetch(`${API}/${sheetId}?fields=spreadsheetId,sheets.properties.title`);
  }

  // SrelloSync 탭이 없으면 생성 + 헤더 행 작성
  async function ensureSheet(sheetId) {
    const meta = await validateSheet(sheetId);
    const tabs  = (meta.sheets || []).map(s => s.properties.title);

    if (!tabs.includes(SHEET_TAB)) {
      await _fetch(`${API}/${sheetId}:batchUpdate`, {
        method: 'POST',
        body: JSON.stringify({
          requests: [{ addSheet: { properties: { title: SHEET_TAB } } }],
        }),
      });
      await _fetch(
        `${API}/${sheetId}/values/${SHEET_TAB}!A1:E1?valueInputOption=RAW`,
        {
          method: 'PUT',
          body: JSON.stringify({ values: [HEADER_ROW] }),
        }
      );
    }
    return true;
  }

  /* ── Push / Pull / Meta ── */

  // 원격 메타 읽기 (A1:D1) — 충돌 검사용. 데이터 없으면 null 반환
  async function fetchRemoteMeta(sheetId) {
    try {
      const data = await _fetch(`${API}/${sheetId}/values/${SHEET_TAB}!A1:D1`);
      const row = data.values?.[0];
      // B1 이 'updatedAt' 이면 헤더 플레이스홀더 상태 (push 전)
      if (!row || !row[1] || row[1] === 'updatedAt') return null;
      return {
        schemaVersion: parseInt(row[0]) || 1,
        updatedAt:     row[1] || null,
        updatedBy:     row[2] || '',
        projectId:     row[3] || '',
      };
    } catch (err) {
      // 탭 범위 오류 → 데이터 없음으로 처리
      if (err.message?.includes('Unable to parse range') || err.message?.includes('exceeds grid')) return null;
      throw err;
    }
  }

  // 보드 Push — 셀 한계(45,000자) 초과 시 에러
  async function pushBoard(sheetId, projectId, boardData) {
    const boardJson = JSON.stringify(boardData);
    if (boardJson.length > 45000) {
      throw new Error(
        `보드 크기(${boardJson.length.toLocaleString()}자)가 시트 한계(45,000자)를 초과합니다. ` +
        '카드나 활동 내역을 줄이거나 프로젝트를 분리하세요.'
      );
    }
    const now = new Date().toISOString();
    await _fetch(
      `${API}/${sheetId}/values/${SHEET_TAB}!A1:E1?valueInputOption=RAW`,
      {
        method: 'PUT',
        body: JSON.stringify({ values: [[SCHEMA_VER, now, getClientId(), projectId, boardJson]] }),
      }
    );
    return now; // 방금 쓴 updatedAt → lastRemoteUpdatedAt 으로 저장
  }

  // 보드 Pull — { meta, boardJson } 반환
  async function pullBoard(sheetId) {
    const data = await _fetch(`${API}/${sheetId}/values/${SHEET_TAB}!A1:E1`);
    const row = data.values?.[0];
    if (!row || !row[4] || row[1] === 'updatedAt') {
      throw new Error('시트에 저장된 보드 데이터가 없습니다. 먼저 저장해주세요.');
    }
    return {
      meta: {
        schemaVersion: parseInt(row[0]) || 1,
        updatedAt:     row[1],
        updatedBy:     row[2] || '',
        projectId:     row[3] || '',
      },
      boardJson: row[4],
    };
  }

  /* ── 프로젝트 연결/해제 ── */

  // 기존 시트를 프로젝트에 연결
  async function connectExisting(projectId, sheetId) {
    await ensureSheet(sheetId);
    _updateProjectSheetId(projectId, sheetId);
  }

  // 새 시트 생성 후 연결 → sheetId 반환
  async function createAndConnect(projectId, projectName) {
    const sheetId = await createSheet(`Srello — ${projectName}`);
    await ensureSheet(sheetId);
    _updateProjectSheetId(projectId, sheetId);
    return sheetId;
  }

  function _updateProjectSheetId(projectId, sheetId) {
    const projects = SrelloProjects.getProjects();
    const p = projects.find(p => p.id === projectId);
    if (!p) throw new Error('프로젝트를 찾을 수 없습니다.');
    p.sheetId = sheetId;
    SrelloProjects.saveProjects(projects);
    SrelloProjects.setStatus(projectId, 'never_synced');
  }

  // 연결 해제 — sheetId만 제거, 로컬 데이터 유지
  function disconnect(projectId) {
    const projects = SrelloProjects.getProjects();
    const p = projects.find(p => p.id === projectId);
    if (!p) return;
    p.sheetId = null;
    SrelloProjects.saveProjects(projects);
    SrelloProjects.setStatus(projectId, 'never_synced');
  }

  return {
    isConnected, authorize, resetAuth,
    parseSheetId, getClientId,
    createSheet, validateSheet, ensureSheet,
    fetchRemoteMeta, pushBoard, pullBoard,
    connectExisting, createAndConnect, disconnect,
  };
})();
