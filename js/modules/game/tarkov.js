const Tarkov = (() => {
  'use strict';
  let inited = false;

  const DATA_PATHS = [
    './data/tarkov-questlines.generated.json',
    './data/tarkov-questlines.example.json',
  ];
  const REQUIRED_FIELDS = ['id', 'name', 'trader', 'minLevel', 'prerequisites'];
  const PROGRESS_KEY = 'tarkov_quest_progress';

  // ── 레이아웃 상수 ─────────────────────────────────────────────────────────────
  const NW = 150, NH = 44;
  const HG = 60,  VG = 10;
  const LANE_PAD = 14, LANE_GAP = 18;
  const MX = 108, MY = 14;

  // ── 색상 ──────────────────────────────────────────────────────────────────────
  const C = {
    nodeN:    '#2a4872',  strokeN:   '#4a7acf',
    nodeK:    '#5c450a',  strokeK:   '#c9a820',
    nodeD:    '#1e5230',  strokeD:   '#3ab870',
    text:     'rgba(210,230,255,.9)',
    edgeN:    'rgba(255,255,255,.15)',
    edgeK:    'rgba(200,168,32,.3)',
    laneBg0:  'rgba(255,255,255,.022)',
    laneLabel:'rgba(190,215,255,.45)',
  };

  // ── 줌 상태 ───────────────────────────────────────────────────────────────────
  const FIT_ZOOM = 0.35, MIN_ZOOM = 0.1, MAX_ZOOM = 2.5;
  let _zoom = FIT_ZOOM;
  let _svgW = 0, _svgH = 0;

  // ── 모듈 상태 ─────────────────────────────────────────────────────────────────
  let _allQuests = [];        // 전체 퀘스트 (원본)
  let _qMap = {};             // id → quest (전체, 데이터 조회용)
  let _nextMap = {};          // id → [후속 questId] (buildNextQuestMap 결과)
  let _progress = {};
  let _selectedId = null;
  let _highlightIds = new Set();
  let _routeRootId = null;
  let _focusId = null;        // 포커스 격리 대상 (선행+후속 체인만 표시)
  let _filter = { search: '', trader: '', kappaOnly: false, hideDone: false };
  let _visibleCount = 0;      // 현재 그래프에 그려진 노드 수
  let _listenersAttached = false;
  let _searchDebounce = null;

  // ── 유틸 ──────────────────────────────────────────────────────────────────────
  function _esc(s) {
    return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }
  function _trunc(s, n = 21) {
    return s.length > n ? s.slice(0, n - 1) + '…' : s;
  }
  function _safeUrl(url) {
    const s = String(url || '');
    return (s.startsWith('https://') || s.startsWith('http://')) ? s : '';
  }

  // ── 스키마 / 데이터 ──────────────────────────────────────────────────────────
  function validateSchema(data) {
    if (!data || !Array.isArray(data.quests) || !data.quests.length) {
      console.warn('[Tarkov] validateSchema: quests array missing or empty');
      return false;
    }
    const ids = new Set(data.quests.map(q => q.id));
    let valid = true;
    data.quests.forEach(q => {
      REQUIRED_FIELDS.forEach(f => {
        if (q[f] === undefined || q[f] === null) {
          console.warn(`[Tarkov] quest "${q.id ?? '?'}" missing required field: ${f}`);
          valid = false;
        }
      });
      (q.prerequisites ?? []).forEach(pid => {
        if (!ids.has(pid)) {
          console.warn(`[Tarkov] quest "${q.id}" unknown prerequisite: "${pid}"`);
          valid = false;
        }
      });
    });
    return valid;
  }

  function buildNextQuestMap(quests) {
    const map = {};
    quests.forEach(q => { map[q.id] = []; });
    quests.forEach(q => {
      (q.prerequisites ?? []).forEach(pid => {
        if (map[pid]) map[pid].push(q.id);
      });
    });
    return map;
  }

  async function loadData() {
    const ver = window.BUILD_VER || '';
    for (const path of DATA_PATHS) {
      try {
        const res = await fetch(`${path}?v=${ver}`);
        if (!res.ok) continue;
        const data = await res.json();
        if (!Array.isArray(data?.quests)) continue;
        validateSchema(data);
        return data;
      } catch (_) { }
    }
    console.warn('[Tarkov] all data sources failed, using fallback');
    return _fallbackData();
  }

  function _fallbackData() {
    return {
      version: 2,
      quests: [
        { id: 'debut', name: 'Debut', trader: 'Prapor', minLevel: 1, maps: [], prerequisites: [], kappaContainer: false, objectives: [], rewards: [], wikiUrl: '', x: null, y: null },
        { id: 'search-mission', name: 'Search Mission', trader: 'Prapor', minLevel: 5, maps: [], prerequisites: ['debut'], kappaContainer: false, objectives: [], rewards: [], wikiUrl: '', x: null, y: null },
        { id: 'delivery-from-the-past', name: 'Delivery from the Past', trader: 'Prapor', minLevel: 5, maps: [], prerequisites: ['search-mission'], kappaContainer: true, objectives: [], rewards: [], wikiUrl: '', x: null, y: null },
      ],
    };
  }

  // ── 진행 상태 ─────────────────────────────────────────────────────────────────
  function _loadProgress() {
    try { _progress = JSON.parse(localStorage.getItem(PROGRESS_KEY) || '{}'); }
    catch (_) { _progress = {}; }
  }

  function _saveProgress() {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(_progress));
  }

  // ── 선행 조상 탐색 (self 포함) ────────────────────────────────────────────────
  function _getAncestors(id, visited = new Set()) {
    if (visited.has(id)) return visited;
    visited.add(id);
    (_qMap[id]?.prerequisites ?? []).forEach(pid => _getAncestors(pid, visited));
    return visited;
  }

  // ── 후속 자손 탐색 (self 포함) ────────────────────────────────────────────────
  function _getDescendants(id, visited = new Set()) {
    if (visited.has(id)) return visited;
    visited.add(id);
    (_nextMap[id] ?? []).forEach(nid => _getDescendants(nid, visited));
    return visited;
  }

  // ── 레이아웃 계산 ─────────────────────────────────────────────────────────────
  function _computeDepths(quests) {
    const localMap = Object.fromEntries(quests.map(q => [q.id, q]));
    const depths = {};
    function dep(id, stack = new Set()) {
      if (depths[id] !== undefined) return depths[id];
      if (stack.has(id)) return 0;
      stack.add(id);
      const q = localMap[id];
      depths[id] = q?.prerequisites?.length
        ? Math.max(...q.prerequisites.map(p => dep(p, stack) + 1))
        : 0;
      stack.delete(id);
      return depths[id];
    }
    quests.forEach(q => dep(q.id));
    return depths;
  }

  function computeLayout(quests) {
    const depths = _computeDepths(quests);

    const traderCounts = {};
    quests.forEach(q => { traderCounts[q.trader] = (traderCounts[q.trader] || 0) + 1; });
    const traders = Object.keys(traderCounts).sort((a, b) => traderCounts[b] - traderCounts[a]);

    const positions = {};
    let laneY = MY;
    const laneInfo = [];

    traders.forEach(trader => {
      const tQuests = quests.filter(q => q.trader === trader);
      const byDepth = {};
      tQuests.forEach(q => {
        const d = depths[q.id] ?? 0;
        (byDepth[d] = byDepth[d] || []).push(q);
      });
      Object.values(byDepth).forEach(g => g.sort((a, b) => a.name.localeCompare(b.name)));

      Object.entries(byDepth).forEach(([d, group]) => {
        group.forEach((q, i) => {
          positions[q.id] = {
            x: MX + Number(d) * (NW + HG),
            y: laneY + LANE_PAD + i * (NH + VG),
          };
        });
      });

      const maxSlots = Object.values(byDepth).reduce((m, g) => Math.max(m, g.length), 1);
      const laneH = LANE_PAD + maxSlots * (NH + VG) - VG + LANE_PAD;
      laneInfo.push({ trader, y: laneY, height: laneH });
      laneY += laneH + LANE_GAP;
    });

    const maxDepth = Object.values(depths).reduce((m, d) => Math.max(m, d), 0);
    const svgW = MX + (maxDepth + 1) * (NW + HG) - HG + 24;
    const svgH = laneY + 8;

    return { positions, laneInfo, svgW, svgH };
  }

  // ── SVG 빌더 ──────────────────────────────────────────────────────────────────
  function _buildLaneBg(laneInfo, svgW) {
    return laneInfo.map((ln, i) =>
      `<rect x="0" y="${ln.y}" width="${svgW}" height="${ln.height}" fill="${i % 2 === 0 ? C.laneBg0 : 'none'}" rx="3"/>`
    ).join('');
  }

  function _buildLaneLabels(laneInfo) {
    return laneInfo.map(ln => {
      const cx = Math.round(MX / 2 - 4);
      const cy = Math.round(ln.y + ln.height / 2);
      return `<text transform="translate(${cx},${cy}) rotate(-90)" text-anchor="middle" font-size="11" fill="${C.laneLabel}" font-family="Consolas,monospace">${_esc(_trunc(ln.trader, 14))}</text>`;
    }).join('');
  }

  function _buildEdges(quests, positions) {
    const parts = [];
    quests.forEach(q => {
      const tp = positions[q.id];
      if (!tp) return;
      const x2 = tp.x, y2 = tp.y + NH / 2;
      (q.prerequisites ?? []).forEach(pid => {
        const sp = positions[pid];
        if (!sp) return;
        const x1 = sp.x + NW, y1 = sp.y + NH / 2;
        const cpx = Math.max(30, Math.abs(x2 - x1) * 0.45);
        const d = `M${x1},${y1} C${x1+cpx},${y1} ${x2-cpx},${y2} ${x2},${y2}`;
        const isK = q.kappaContainer;
        parts.push(`<path data-from="${_esc(pid)}" data-to="${_esc(q.id)}" d="${d}" stroke="${isK ? C.edgeK : C.edgeN}" fill="none" stroke-width="1.5" marker-end="url(#ta${isK ? 'k' : 'n'})"/>`);
      });
    });
    return parts.join('');
  }

  function _buildNodes(quests, positions) {
    return quests.map(q => {
      const p = positions[q.id];
      if (!p) return '';
      const isK = q.kappaContainer;
      const fill = isK ? C.nodeK : C.nodeN;
      const stroke = isK ? C.strokeK : C.strokeN;
      return (
        `<g class="tarkov-node" data-id="${_esc(q.id)}" transform="translate(${p.x},${p.y})" style="cursor:pointer">` +
        `<rect width="${NW}" height="${NH}" rx="3" fill="${fill}" stroke="${stroke}" stroke-width="1"/>` +
        (isK ? `<rect x="${NW-16}" y="0" width="16" height="13" rx="2" fill="${C.strokeK}" opacity=".6"/><text x="${NW-13}" y="10" font-size="8" fill="#fff" font-weight="bold" font-family="Consolas,monospace">K</text>` : '') +
        `<text x="6" y="26" font-size="11" fill="${C.text}" dominant-baseline="middle" font-family="Consolas,monospace">${_esc(_trunc(q.name))}</text>` +
        `<title>${_esc(q.name)}</title>` +
        `</g>`
      );
    }).join('');
  }

  // ── 비주얼 상태 업데이트 ──────────────────────────────────────────────────────
  function _applyAllNodeVisuals() {
    document.querySelectorAll('.tarkov-node').forEach(g => {
      const id = g.dataset.id;
      const q = _qMap[id];
      const rect = g.querySelector('rect');
      if (!rect || !q) return;
      const isK = q.kappaContainer;
      const isDone = !!_progress[id];
      const isSelected = _selectedId === id;
      const inRoute = _highlightIds.has(id);
      const hasRoute = _highlightIds.size > 0;
      let fill, stroke, opacity = 1;
      if (isDone) {
        fill = C.nodeD; stroke = C.strokeD;
      } else if (isSelected) {
        fill = '#3558b8'; stroke = '#7aaeff';
      } else if (inRoute) {
        // 우클릭 루트 상의 노드: 황금빛 강조
        fill = isK ? '#7a4a0a' : '#1e3470'; stroke = isK ? '#e0c030' : '#7aaeff';
      } else if (hasRoute) {
        fill = isK ? C.nodeK : C.nodeN; stroke = isK ? C.strokeK : C.strokeN; opacity = 0.18;
      } else {
        fill = isK ? C.nodeK : C.nodeN; stroke = isK ? C.strokeK : C.strokeN;
      }
      rect.setAttribute('fill', fill);
      rect.setAttribute('stroke', stroke);
      g.style.opacity = opacity;
    });
  }

  function _applyAllEdgeVisuals() {
    document.querySelectorAll('#tarkov-edges path').forEach(path => {
      const from = path.dataset.from, to = path.dataset.to;
      const isK = _qMap[to]?.kappaContainer;
      if (_highlightIds.size === 0) {
        path.style.opacity = '';
        path.setAttribute('stroke', isK ? C.edgeK : C.edgeN);
        path.setAttribute('stroke-width', '1.5');
      } else if (_highlightIds.has(from) && _highlightIds.has(to)) {
        path.style.opacity = '1';
        path.setAttribute('stroke', 'rgba(200,168,32,.85)');
        path.setAttribute('stroke-width', '2.5');
      } else {
        path.style.opacity = '0.05';
        path.setAttribute('stroke', isK ? C.edgeK : C.edgeN);
        path.setAttribute('stroke-width', '1.5');
      }
    });
  }

  function _updateStats() {
    const stats = document.getElementById('tarkov-stats');
    if (!stats) return;
    const total = _allQuests.length;
    if (!total) return;
    const kCount = _allQuests.filter(q => q.kappaContainer).length;
    const doneCount = Object.keys(_progress).filter(id => _qMap[id]).length;
    const visStr = (_visibleCount && _visibleCount !== total) ? ` · 표시 ${_visibleCount}개` : '';
    stats.textContent = `총 ${total}개 · Kappa ${kCount}개${doneCount > 0 ? ` · 완료 ${doneCount}개` : ''}${visStr}`;
  }

  // ── 완료 토글 ─────────────────────────────────────────────────────────────────
  function _afterProgressChange(questId) {
    _saveProgress();
    // 완료 숨김 필터가 켜져 있으면 노드 가시성이 바뀌므로 전체 재렌더
    if (_filter.hideDone) _rebuildSvg();
    else _applyAllNodeVisuals();
    _updateStats();
    _renderDetail(questId);
  }

  function _toggleDone(questId) {
    if (_progress[questId]) delete _progress[questId];
    else _progress[questId] = true;
    _afterProgressChange(questId);
  }

  // 선행 루트 전체 완료 (단방향 — 미완료 항목만 완료 처리)
  function _completeRoute(questId) {
    _getAncestors(questId).forEach(id => { _progress[id] = true; });
    _afterProgressChange(questId);
  }

  // ── 상세 패널 ─────────────────────────────────────────────────────────────────
  function _hideDetail() {
    const detail = document.getElementById('tarkov-detail');
    if (detail) detail.style.display = 'none';
  }

  // 연관 퀘스트(선행/후속) 리스트 아이템 — 클릭 시 해당 노드로 이동
  function _relItem(id, withCheck) {
    const rq = _qMap[id];
    if (!rq) return '';
    const done = !!_progress[id];
    const mark = withCheck
      ? (done ? '<span style="color:#3ab870;">✓</span> ' : '<span style="opacity:.35;">○</span> ')
      : '<span style="opacity:.35;">→</span> ';
    const k = rq.kappaContainer ? '<span style="color:#c9a820;font-size:9px;">◆</span> ' : '';
    return `<li style="margin:3px 0;line-height:1.3;">` +
      `<a href="#" data-goto="${_esc(id)}" class="tarkov-rel-link">${mark}${k}${_esc(rq.name)}` +
      `<span style="opacity:.4;font-size:10px;"> · Lv.${rq.minLevel}</span></a></li>`;
  }

  function _section(label, innerHtml) {
    return `<div style="margin-top:12px;">` +
      `<div style="font-size:10px;text-transform:uppercase;letter-spacing:.5px;opacity:.4;margin-bottom:5px;">${label}</div>` +
      innerHtml + `</div>`;
  }

  function _renderDetail(questId) {
    const q = _qMap[questId];
    const detail = document.getElementById('tarkov-detail');
    if (!q || !detail) return;

    const isDone = !!_progress[questId];
    const directPrereqs = q.prerequisites ?? [];
    const prereqDone = directPrereqs.filter(id => _progress[id]).length;
    const canDo = directPrereqs.length === 0 || prereqDone === directPrereqs.length;
    const nextIds = _nextMap[questId] ?? [];

    const allAncestors = _getAncestors(questId); // self 포함
    const ancestorCount = allAncestors.size - 1;
    const routeTotal = allAncestors.size;
    const routeDoneCount = [...allAncestors].filter(id => _progress[id]).length;
    const allRouteDone = routeDoneCount === routeTotal;

    // 수행 가능 상태 뱃지
    let badge;
    if (isDone) badge = { t: '✓ 완료', c: '#3ab870' };
    else if (canDo) badge = { t: '● 수행 가능', c: '#4a9eff' };
    else badge = { t: `🔒 선행 ${directPrereqs.length - prereqDone}개 남음`, c: '#c9a820' };

    // 목표
    const objHtml = q.objectives?.length
      ? `<ul style="margin:0;padding-left:16px;">${q.objectives.map(o => `<li style="margin:3px 0;line-height:1.35;">${_esc(o.text || o.description || o.type || '')}</li>`).join('')}</ul>`
      : '<div style="opacity:.4;font-size:12px;">(목표 정보 없음)</div>';

    // 보상
    const rewParts = [];
    (q.rewards ?? []).forEach(r => {
      if ((r.type === 'xp' || r.type === 'experience') && (r.amount || r.value))
        rewParts.push(`<li style="margin:3px 0;color:#c9a820;">경험치 +${Number(r.amount || r.value).toLocaleString()}</li>`);
      else if (r.type === 'item' && r.name)
        rewParts.push(`<li style="margin:3px 0;">${_esc(r.name)}${r.count > 1 ? ' ×' + r.count : ''}</li>`);
      else if ((r.type === 'traderUnlock' || r.type === 'unlock') && r.name)
        rewParts.push(`<li style="margin:3px 0;color:var(--color-game);">${_esc(r.name)} 해금</li>`);
    });
    const rewHtml = rewParts.length
      ? `<ul style="margin:0;padding-left:16px;">${rewParts.join('')}</ul>`
      : '<div style="opacity:.4;font-size:12px;">(보상 정보 없음)</div>';

    // 선행 / 후속 퀘스트
    const prereqHtml = directPrereqs.length
      ? `<ul style="margin:0;padding-left:14px;list-style:none;">${directPrereqs.map(id => _relItem(id, true)).join('')}</ul>`
      : '<div style="opacity:.4;font-size:12px;">없음 (시작 퀘스트)</div>';
    const nextHtml = nextIds.length
      ? `<ul style="margin:0;padding-left:14px;list-style:none;">${nextIds.map(id => _relItem(id, false)).join('')}</ul>`
      : '<div style="opacity:.4;font-size:12px;">없음 (라인 종료)</div>';

    const mapsStr = q.maps?.length ? q.maps.join(', ') : '모든 맵';
    const kappaTag = q.kappaContainer
      ? `<span style="color:#c9a820;font-size:10px;border:1px solid #c9a820;border-radius:2px;padding:0 3px;margin-left:5px;vertical-align:middle;">Kappa</span>`
      : '';

    // 루트 완료 버튼 or 완료 표시 (단방향: 미완료가 하나라도 있을 때만 버튼 노출)
    let routeAreaHtml = '';
    if (ancestorCount > 0) {
      if (allRouteDone) {
        routeAreaHtml = `<span style="font-size:11px;color:#3ab870;opacity:.8;align-self:center;">✓ 선행 루트 완료 (${routeTotal}/${routeTotal})</span>`;
      } else {
        routeAreaHtml = `<button id="td-btn-route" class="btn btn-sm">선행 루트 완료<span style="font-size:10px;opacity:.5;margin-left:4px;">${routeDoneCount}/${routeTotal}</span></button>`;
      }
    }

    const focusActive = _focusId === questId;
    const focusBtn = `<button id="td-btn-focus" class="btn btn-sm${focusActive ? ' tarkov-f-on' : ''}">${focusActive ? '✕ 전체 보기' : '🎯 이 경로만'}</button>`;

    const wikiUrl = _safeUrl(q.wikiUrl);

    detail.style.display = '';
    detail.innerHTML =
      `<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px;margin-bottom:8px;">` +
        `<div style="min-width:0;">` +
          `<div style="font-size:14px;font-weight:600;color:var(--text-primary);line-height:1.3;">${_esc(q.name)}${kappaTag}</div>` +
          `<div style="font-size:11px;color:var(--text-muted);margin-top:4px;">` +
            `<span style="color:var(--color-game);">${_esc(q.trader)}</span> · Lv.${q.minLevel}+` +
          `</div>` +
        `</div>` +
        `<button id="td-btn-close" class="btn btn-sm btn-icon" title="닫기" style="flex-shrink:0;">✕</button>` +
      `</div>` +

      `<div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:10px;">` +
        `<span style="font-size:11px;font-weight:600;color:${badge.c};border:1px solid ${badge.c};border-radius:3px;padding:1px 7px;">${badge.t}</span>` +
        `<span style="font-size:11px;color:var(--text-muted);">🗺 ${_esc(mapsStr)}</span>` +
      `</div>` +

      `<div style="display:flex;gap:5px;align-items:center;flex-wrap:wrap;">` +
        `<button id="td-btn-done" class="btn btn-sm"${isDone ? ' style="color:#3ab870;border-color:#3ab870;"' : ''}>${isDone ? '✓ 완료됨' : '완료 표시'}</button>` +
        focusBtn +
        routeAreaHtml +
      `</div>` +

      _section('목표', objHtml) +
      _section('보상', rewHtml) +
      _section(`선행 퀘스트 (${prereqDone}/${directPrereqs.length})`, prereqHtml) +
      _section(`다음 퀘스트 (${nextIds.length})`, nextHtml) +
      (wikiUrl ? `<div style="margin-top:12px;"><a href="${_esc(wikiUrl)}" target="_blank" rel="noopener" style="font-size:11px;color:var(--text-muted);">↗ Wiki 열기</a></div>` : '');

    detail.scrollTop = 0;

    document.getElementById('td-btn-done')?.addEventListener('click', () => _toggleDone(questId));
    document.getElementById('td-btn-route')?.addEventListener('click', () => _completeRoute(questId));
    document.getElementById('td-btn-focus')?.addEventListener('click', () => {
      if (_focusId === questId) _clearFocus(); else _setFocus(questId);
    });
    document.getElementById('td-btn-close')?.addEventListener('click', () => {
      _hideDetail();
      _selectedId = null;
      _applyAllNodeVisuals();
    });
    detail.querySelectorAll('[data-goto]').forEach(a => {
      a.addEventListener('click', ev => { ev.preventDefault(); _goToQuest(a.dataset.goto); });
    });
  }

  // ── 노드 인터랙션 ─────────────────────────────────────────────────────────────
  function _onNodeClick(questId) {
    _selectedId = questId;
    // 우클릭 루트 하이라이트는 유지 — 루트를 보면서 상세 확인 가능
    _applyAllNodeVisuals();
    _renderDetail(questId);
  }

  function _onNodeRightClick(questId) {
    // 같은 노드를 다시 우클릭하면 해제, 아니면 새 루트 설정
    if (_routeRootId === questId && _highlightIds.size > 0) {
      _highlightIds = new Set();
      _routeRootId = null;
    } else {
      _highlightIds = _getAncestors(questId);
      _routeRootId = questId;
    }
    _applyAllNodeVisuals();
    _applyAllEdgeVisuals();
  }

  // 상세 패널의 선행/후속 링크 → 해당 퀘스트로 이동
  function _goToQuest(questId) {
    if (!_qMap[questId]) return;
    if (_focusId) {            // 포커스 격리 유지 — 새 퀘스트 체인으로 전환
      _focusId = questId;
      _rebuildSvg();
    }
    _selectedId = questId;
    _applyAllNodeVisuals();
    _renderDetail(questId);
    if (!_scrollToNode(questId)) {
      toast('현재 필터에서 숨겨진 퀘스트예요. 필터를 초기화해 보세요.', 'info');
    }
  }

  // ── 포커스 격리 ───────────────────────────────────────────────────────────────
  function _setFocus(questId) {
    _focusId = questId;
    _selectedId = questId;
    _rebuildSvg();
    const wrap = document.getElementById('tarkov-graph-wrap');
    if (wrap) wrap.scrollTo(0, 0);
    _renderDetail(questId);
  }

  function _clearFocus() {
    _focusId = null;
    _rebuildSvg();
    if (_selectedId) _renderDetail(_selectedId);
  }

  // 특정 노드를 스크롤 뷰 중앙으로 (현재 보이는 경우만)
  function _scrollToNode(id) {
    const wrap = document.getElementById('tarkov-graph-wrap');
    if (!wrap) return false;
    const node = wrap.querySelector(`.tarkov-node[data-id="${CSS.escape(id)}"]`);
    if (!node) return false;
    const r = node.getBoundingClientRect();
    const wr = wrap.getBoundingClientRect();
    wrap.scrollBy({
      left: (r.left - wr.left) - wr.width / 2 + r.width / 2,
      top:  (r.top - wr.top) - wr.height / 2 + r.height / 2,
      behavior: 'smooth',
    });
    return true;
  }

  // ── 필터 ─────────────────────────────────────────────────────────────────────
  function _computeVisible() {
    let set = _allQuests;
    if (_focusId && _qMap[_focusId]) {
      const chain = _getAncestors(_focusId);          // self 포함
      _getDescendants(_focusId).forEach(id => chain.add(id));
      set = set.filter(q => chain.has(q.id));
    }
    const s = _filter.search.trim().toLowerCase();
    return set.filter(q => {
      if (_filter.kappaOnly && !q.kappaContainer) return false;
      if (_filter.hideDone && _progress[q.id]) return false;
      if (_filter.trader && q.trader !== _filter.trader) return false;
      if (s && !q.name.toLowerCase().includes(s)) return false;
      return true;
    });
  }

  function _buildFilterBar() {
    const area = document.getElementById('tarkov-filter-area');
    if (!area || area.dataset.built) return;
    area.dataset.built = '1';

    const traders = [...new Set(_allQuests.map(q => q.trader))].sort();
    area.innerHTML =
      `<input id="tarkov-search" class="input" type="text" placeholder="🔍 퀘스트 검색…" style="width:150px;font-size:12px;padding:5px 10px;">` +
      `<select id="tarkov-trader" class="input" style="width:auto;font-size:12px;padding:5px 8px;">` +
        `<option value="">전체 트레이더</option>` +
        traders.map(t => `<option value="${_esc(t)}">${_esc(t)}</option>`).join('') +
      `</select>` +
      `<button id="tarkov-f-kappa" class="btn btn-sm">Kappa만</button>` +
      `<button id="tarkov-f-done" class="btn btn-sm">완료 숨김</button>` +
      `<button id="tarkov-f-reset" class="btn btn-sm" style="opacity:.7;" title="필터·포커스 초기화">↺ 초기화</button>`;

    document.getElementById('tarkov-search').addEventListener('input', e => {
      const v = e.target.value;
      clearTimeout(_searchDebounce);
      _searchDebounce = setTimeout(() => { _filter.search = v; _rebuildSvg(); }, 160);
    });
    document.getElementById('tarkov-trader').addEventListener('change', e => {
      _filter.trader = e.target.value; _rebuildSvg();
    });
    document.getElementById('tarkov-f-kappa').addEventListener('click', e => {
      _filter.kappaOnly = !_filter.kappaOnly;
      e.currentTarget.classList.toggle('tarkov-f-on', _filter.kappaOnly);
      _rebuildSvg();
    });
    document.getElementById('tarkov-f-done').addEventListener('click', e => {
      _filter.hideDone = !_filter.hideDone;
      e.currentTarget.classList.toggle('tarkov-f-on', _filter.hideDone);
      _rebuildSvg();
    });
    document.getElementById('tarkov-f-reset').addEventListener('click', () => _resetFilters());
  }

  function _resetFilters() {
    _filter = { search: '', trader: '', kappaOnly: false, hideDone: false };
    _focusId = null;
    const s = document.getElementById('tarkov-search'); if (s) s.value = '';
    const t = document.getElementById('tarkov-trader'); if (t) t.value = '';
    document.getElementById('tarkov-f-kappa')?.classList.remove('tarkov-f-on');
    document.getElementById('tarkov-f-done')?.classList.remove('tarkov-f-on');
    _rebuildSvg();
    if (_selectedId) _renderDetail(_selectedId);
  }

  // ── 줌 ───────────────────────────────────────────────────────────────────────
  function _applyZoom() {
    const svg = document.getElementById('tarkov-graph-svg');
    if (!svg) return;
    svg.setAttribute('width',  Math.round(_svgW * _zoom));
    svg.setAttribute('height', Math.round(_svgH * _zoom));
    const lbl = document.getElementById('tarkov-zoom-pct');
    if (lbl) lbl.textContent = Math.round(_zoom * 100) + '%';
  }

  // ── 그래프 재렌더 (필터/포커스 변경 시) ───────────────────────────────────────
  function _rebuildSvg() {
    const svg  = document.getElementById('tarkov-graph-svg');
    const wrap = document.getElementById('tarkov-graph-wrap');
    const empty = document.getElementById('tarkov-graph-empty');
    if (!svg || !wrap) return;

    const visible = _computeVisible();
    _visibleCount = visible.length;

    if (!visible.length) {
      svg.innerHTML = '';
      svg.style.display = 'none';
      if (empty) empty.style.display = 'flex';
      _updateStats();
      return;
    }
    if (empty) empty.style.display = 'none';

    const { positions, laneInfo, svgW, svgH } = computeLayout(visible);
    _svgW = svgW;
    _svgH = svgH;

    svg.innerHTML =
      `<defs>` +
      `<marker id="tan" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><path d="M0,0 L7,2.5 L0,5 Z" fill="rgba(255,255,255,.2)"/></marker>` +
      `<marker id="tak" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><path d="M0,0 L7,2.5 L0,5 Z" fill="rgba(200,168,32,.5)"/></marker>` +
      `</defs>` +
      `<g id="tarkov-lane-bg">${_buildLaneBg(laneInfo, svgW)}</g>` +
      `<g id="tarkov-lane-labels">${_buildLaneLabels(laneInfo)}</g>` +
      `<g id="tarkov-edges">${_buildEdges(visible, positions)}</g>` +
      `<g id="tarkov-nodes">${_buildNodes(visible, positions)}</g>`;

    svg.setAttribute('viewBox', `0 0 ${svgW} ${svgH}`);
    svg.style.display = '';
    _applyZoom();
    _applyAllNodeVisuals();
    _applyAllEdgeVisuals();
    _updateStats();
  }

  // ── 이벤트 위임 (영구 요소에 1회만 바인딩) ─────────────────────────────────────
  function _attachListeners(wrap, svg) {
    if (_listenersAttached) return;
    _listenersAttached = true;

    document.getElementById('tarkov-zoom-in')?.addEventListener('click', () => {
      _zoom = Math.min(MAX_ZOOM, parseFloat((_zoom + 0.05).toFixed(2)));
      _applyZoom();
    });
    document.getElementById('tarkov-zoom-out')?.addEventListener('click', () => {
      _zoom = Math.max(MIN_ZOOM, parseFloat((_zoom - 0.05).toFixed(2)));
      _applyZoom();
    });
    document.getElementById('tarkov-zoom-fit')?.addEventListener('click', () => {
      _zoom = FIT_ZOOM;
      _applyZoom();
      wrap.scrollTo(0, 0);
    });

    // 노드 좌클릭 — svg는 재렌더에도 유지되므로 위임은 svg에 한 번만 바인딩
    svg.addEventListener('click', e => {
      const node = e.target.closest('.tarkov-node');
      if (!node) return;
      _onNodeClick(node.dataset.id);
    });
    // 노드 우클릭 — 선행 루트 하이라이트 토글
    svg.addEventListener('contextmenu', e => {
      e.preventDefault();
      const node = e.target.closest('.tarkov-node');
      if (!node) return;
      _onNodeRightClick(node.dataset.id);
    });

    // 빈 영역 클릭 → 선택/하이라이트 해제 (포커스 격리는 유지)
    wrap.addEventListener('click', e => {
      if (e.target.closest('.tarkov-node')) return;
      if (_selectedId !== null || _highlightIds.size > 0) {
        _selectedId = null;
        _highlightIds = new Set();
        _routeRootId = null;
        _applyAllNodeVisuals();
        _applyAllEdgeVisuals();
        _hideDetail();
      }
    });
    // 빈 SVG 영역 우클릭 — 브라우저 기본 메뉴 차단
    wrap.addEventListener('contextmenu', e => e.preventDefault());
  }

  // ── 렌더 ─────────────────────────────────────────────────────────────────────
  function renderGraph(data) {
    const wrap    = document.getElementById('tarkov-graph-wrap');
    const loading = document.getElementById('tarkov-graph-loading');
    const svg     = document.getElementById('tarkov-graph-svg');
    if (!wrap || !svg) return;

    _allQuests = data.quests;
    _qMap = Object.fromEntries(_allQuests.map(q => [q.id, q]));
    _nextMap = buildNextQuestMap(_allQuests);
    _loadProgress();

    _buildFilterBar();
    _attachListeners(wrap, svg);
    _rebuildSvg();

    if (loading) loading.style.display = 'none';
  }

  async function init() {
    if (inited) return;
    inited = true;
    const data = await loadData();
    renderGraph(data);
  }

  return { init, validateSchema, buildNextQuestMap };
})();
