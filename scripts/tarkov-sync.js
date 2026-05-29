#!/usr/bin/env node
// 실행: node scripts/tarkov-sync.js
// tarkov.dev GraphQL API에서 퀘스트 데이터를 수집하고 v2 스키마 JSON으로 변환합니다.
// Node.js 내장 모듈만 사용 (별도 npm install 불필요).
//
// 산출물:
//   data/tarkov-questlines.raw.json       — API 원본 응답 (재변환·디버그용)
//   data/tarkov-questlines.generated.json — v2 스키마 변환 결과
//
// ID 포맷: tarkov.dev는 MongoDB ObjectID 형식 사용
//   example.json 슬러그 ID와는 다름 — 브라우저는 generated.json 우선 로딩

'use strict';

const https = require('https');
const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data');
const RAW_PATH = path.join(DATA_DIR, 'tarkov-questlines.raw.json');
const OUT_PATH = path.join(DATA_DIR, 'tarkov-questlines.generated.json');

const QUERY = `{
  tasks {
    id
    name
    trader { name }
    map { name }
    experience
    minPlayerLevel
    factionName
    kappaRequired
    wikiLink
    taskRequirements {
      task { id }
      status
    }
    objectives {
      description
      maps { name }
    }
    finishRewards {
      items {
        item { name }
        count
      }
      traderUnlock { name }
    }
  }
}`;

// ─── 수집 레이어 ──────────────────────────────────────────────────────────────

function gqlFetch(query) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({ query });
    const req = https.request(
      {
        hostname: 'api.tarkov.dev',
        path: '/graphql',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(body),
          'User-Agent': 'tarkov-sync/1.0',
        },
      },
      (res) => {
        const chunks = [];
        res.on('data', (c) => chunks.push(c));
        res.on('end', () => {
          try {
            resolve(JSON.parse(Buffer.concat(chunks).toString('utf8')));
          } catch (e) {
            reject(new Error(`JSON parse failed: ${e.message}`));
          }
        });
      }
    );
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

function saveRaw(data) {
  _backupIfExists(RAW_PATH);
  fs.writeFileSync(RAW_PATH, JSON.stringify(data, null, 2), 'utf8');
  console.log(`  raw  → data/tarkov-questlines.raw.json`);
}

// ─── 변환 레이어 ──────────────────────────────────────────────────────────────

function transformTask(task, warnings) {
  const id = task.id ?? '';
  const name = task.name ?? '';
  const trader = task.trader?.name ?? '';
  // minPlayerLevel: 0 레벨 시작 퀘스트 존재 — null이면 0으로 처리
  const minLevel = task.minPlayerLevel ?? 0;

  // maps: task.map + 각 objective의 maps 합산
  const mapSet = new Set();
  if (task.map?.name) mapSet.add(task.map.name);
  (task.objectives ?? []).forEach((obj) => {
    (obj.maps ?? []).forEach((m) => { if (m?.name) mapSet.add(m.name); });
  });
  const maps = [...mapSet];

  // prerequisites: 모든 taskRequirements 포함
  // status가 ["complete", "failed"]인 경우 소프트 의존 — warnings에 기록
  const prerequisites = [];
  (task.taskRequirements ?? []).forEach((r) => {
    const pid = r.task?.id;
    if (!pid) return;
    prerequisites.push(pid);
    const statuses = Array.isArray(r.status) ? r.status : [r.status];
    if (!statuses.includes('complete') || statuses.length > 1) {
      warnings.push(`"${name}" (${id}): soft prerequisite ${pid} [${statuses.join('|')}]`);
    }
  });

  const kappaContainer = task.kappaRequired ?? false;

  const objectives = (task.objectives ?? []).map((o) => ({
    text: o.description ?? '',
  }));

  // rewards: XP는 Task.experience, 아이템/트레이더언락은 finishRewards에서
  const rewards = [];
  if (task.experience) rewards.push({ type: 'xp', amount: task.experience });
  (task.finishRewards?.items ?? []).forEach((i) => {
    if (i.item?.name) rewards.push({ type: 'item', name: i.item.name, count: i.count ?? 1 });
  });
  (task.finishRewards?.traderUnlock ?? []).forEach((t) => {
    if (t?.name) rewards.push({ type: 'traderUnlock', name: t.name });
  });

  const wikiUrl = task.wikiLink ?? '';

  if (!id) warnings.push(`unnamed task has no id — skipped`);
  if (!trader) warnings.push(`"${name}" (${id}): no trader`);

  return {
    id, name,
    trader: trader || 'Unknown',
    minLevel, maps, prerequisites,
    kappaContainer, objectives, rewards,
    wikiUrl, x: null, y: null,
  };
}

function transformAll(tasks) {
  const warnings = [];
  const quests = tasks
    .map((t) => transformTask(t, warnings))
    .filter((q) => q.id);
  return { quests, warnings };
}

function saveGenerated(quests) {
  _backupIfExists(OUT_PATH);
  const output = {
    version: 2,
    updatedAt: new Date().toISOString().slice(0, 10),
    description: `Tarkov quest data synced from tarkov.dev — ${quests.length} quests`,
    quests,
  };
  fs.writeFileSync(OUT_PATH, JSON.stringify(output, null, 2), 'utf8');
  console.log(`  gen  → data/tarkov-questlines.generated.json`);
}

// ─── 공통 유틸 ────────────────────────────────────────────────────────────────

function _backupIfExists(filePath) {
  if (!fs.existsSync(filePath)) return;
  const ts = new Date().toISOString().replace(/[:.]/g, '-');
  const ext = path.extname(filePath);
  const base = path.basename(filePath, ext);
  const backupPath = path.join(path.dirname(filePath), `${base}.backup-${ts}${ext}`);
  fs.copyFileSync(filePath, backupPath);
  console.log(`  bak  → ${path.basename(backupPath)}`);
}

// ─── 진입점 ───────────────────────────────────────────────────────────────────

async function main() {
  fs.mkdirSync(DATA_DIR, { recursive: true });

  // 1단계: 수집
  console.log('[tarkov-sync] Fetching from tarkov.dev...');
  let response;
  try {
    response = await gqlFetch(QUERY);
  } catch (err) {
    console.error('[tarkov-sync] Fetch failed:', err.message);
    process.exit(1);
  }

  if (response.errors?.length) {
    console.error('[tarkov-sync] GraphQL errors:');
    response.errors.forEach((e) => console.error(' ', e.message));
    process.exit(1);
  }

  const tasks = response.data?.tasks;
  if (!Array.isArray(tasks)) {
    console.error('[tarkov-sync] Unexpected response — "tasks" array not found');
    process.exit(1);
  }

  console.log(`[tarkov-sync] Received ${tasks.length} tasks`);
  saveRaw({ fetchedAt: new Date().toISOString(), tasks });

  // 2단계: 변환
  console.log('[tarkov-sync] Transforming...');
  const { quests, warnings } = transformAll(tasks);
  saveGenerated(quests);

  // 결과 리포트
  if (warnings.length) {
    console.warn(`\n[tarkov-sync] ${warnings.length} warning(s):`);
    warnings.forEach((w) => console.warn('  ⚠', w));
  }

  console.log(`\n[tarkov-sync] Done — ${quests.length} quests written${warnings.length ? `, ${warnings.length} warnings` : ''}`);
}

main().catch((err) => {
  console.error('[tarkov-sync] Unexpected error:', err);
  process.exit(1);
});
