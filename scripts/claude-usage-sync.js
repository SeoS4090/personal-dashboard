#!/usr/bin/env node
// 실행: node scripts/claude-usage-sync.js
// 각 Claude Code 계정의 ~/.claude/stats-cache.json 을 읽어 대시보드용 사용량 JSON을 만듭니다.
// Node.js 내장 모듈만 사용 (별도 npm install 불필요).
//
// 계정 목록:
//   scripts/claude-accounts.config.json 이 있으면 그 목록을 사용 (gitignore — 로컬 경로 포함)
//   없으면 현재 사용자의 ~/.claude 단일 계정만 처리
//   형식 예시: scripts/claude-accounts.config.example.json
//
// 산출물:
//   data/claude-usage.generated.json — 계정별 today/최근7일/모델토큰 집계 (gitignore — 개인 사용량)
//
// 브라우저(dev/claude.js)는 generated.json 을 우선 로딩하고, 없으면 claude-usage.example.json 으로 폴백합니다.

'use strict';

const fs = require('fs');
const path = require('path');
const os = require('os');
const { execSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
const DATA_DIR = path.join(ROOT, 'data');
const OUT_PATH = path.join(DATA_DIR, 'claude-usage.generated.json');
const CONFIG_PATH = path.join(__dirname, 'claude-accounts.config.json');

// ─── 유틸 ─────────────────────────────────────────────────────────────────────

function readJsonSafe(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (_) {
    return null;
  }
}

function ymd(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

// 오늘 기준 최근 N일 날짜 문자열 (오래된→최신)
function lastNDates(n) {
  const out = [];
  const now = new Date();
  for (let i = n - 1; i >= 0; i--) {
    const d = new Date(now.getFullYear(), now.getMonth(), now.getDate() - i);
    out.push(ymd(d));
  }
  return out;
}

// ─── 계정 설정 ────────────────────────────────────────────────────────────────

function resolveAccounts() {
  const cfg = readJsonSafe(CONFIG_PATH);
  if (cfg && Array.isArray(cfg.accounts) && cfg.accounts.length) {
    return cfg.accounts.map((a, i) => ({
      id: a.id || `account-${i + 1}`,
      label: a.label || a.id || `계정 ${i + 1}`,
      plan: a.plan || 'custom',
      configDir: a.configDir
        ? a.configDir.replace(/^~(?=$|[\\/])/, os.homedir())
        : path.join(os.homedir(), '.claude'),
    }));
  }
  // 기본: 현재 사용자 ~/.claude 단일 계정
  return [{
    id: 'local',
    label: '이 PC',
    plan: 'custom',
    configDir: path.join(os.homedir(), '.claude'),
  }];
}

// ─── stats-cache.json → 계정 사용량 ──────────────────────────────────────────

function buildAccountUsage(account) {
  const statsPath = path.join(account.configDir, 'stats-cache.json');
  const stats = readJsonSafe(statsPath);
  if (!stats) {
    console.warn(`  ⚠ ${account.id}: stats-cache.json 없음 (${statsPath}) — 빈 데이터로 기록`);
  }

  const activity = Array.isArray(stats?.dailyActivity) ? stats.dailyActivity : [];
  const modelTokensDaily = Array.isArray(stats?.dailyModelTokens) ? stats.dailyModelTokens : [];

  const actByDate = new Map(activity.map((a) => [a.date, a]));
  const tokByDate = new Map(modelTokensDaily.map((t) => [t.date, t]));

  const sumTokens = (entry) =>
    entry ? Object.values(entry.tokensByModel || {}).reduce((s, v) => s + (Number(v) || 0), 0) : 0;

  const days = lastNDates(7);
  const daily = days.map((date) => ({
    date,
    messages: actByDate.get(date)?.messageCount || 0,
    tokens: sumTokens(tokByDate.get(date)),
  }));

  const todayDate = ymd(new Date());
  const todayAct = actByDate.get(todayDate);
  const today = {
    date: todayDate,
    messages: todayAct?.messageCount || 0,
    sessions: todayAct?.sessionCount || 0,
    toolCalls: todayAct?.toolCallCount || 0,
    tokens: sumTokens(tokByDate.get(todayDate)),
  };

  // 모델별 누적 토큰 (최근 데이터 전체 합)
  const modelTokens = {};
  modelTokensDaily.forEach((t) => {
    Object.entries(t.tokensByModel || {}).forEach(([model, v]) => {
      modelTokens[model] = (modelTokens[model] || 0) + (Number(v) || 0);
    });
  });

  // 마지막 활동 날짜
  const latestDate = activity.reduce((max, a) => (a.date > max ? a.date : max), '');

  return {
    label: account.label,
    plan: account.plan,
    today,
    daily,
    modelTokens,
    totals: {
      sessions: stats?.totalSessions || 0,
      messages: stats?.totalMessages || 0,
    },
    lastSessionAt: latestDate ? `${latestDate}T00:00:00.000Z` : null,
    resetAt: detectResetAt(account),
  };
}

// ─── reset 시각 감지 (Windows · 현재 계정 한정, 선택적) ────────────────────────
// 사용자의 claude_limit_checker.ps1 이 등록한 schtasks 'ClaudeCodeReset' 의 다음 실행 시각을 읽는다.

function detectResetAt(account) {
  // 기본 ~/.claude 계정에서만 의미 있음 (스케줄 태스크는 머신 단위)
  const defaultDir = path.join(os.homedir(), '.claude');
  if (path.resolve(account.configDir) !== path.resolve(defaultDir)) return null;
  if (process.platform !== 'win32') return null;

  try {
    const out = execSync('schtasks /query /tn ClaudeCodeReset /fo LIST /v', {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    });
    const m = out.match(/Next Run Time:\s*(.+)/i);
    if (!m) return null;
    const raw = m[1].trim();
    if (/N\/A/i.test(raw)) return null;
    const parsed = new Date(raw);
    if (isNaN(parsed.getTime()) || parsed.getTime() <= Date.now()) return null;
    return parsed.toISOString();
  } catch (_) {
    return null; // 태스크 없음 등 — 무시
  }
}

// ─── 진입점 ───────────────────────────────────────────────────────────────────

function main() {
  fs.mkdirSync(DATA_DIR, { recursive: true });

  const accounts = resolveAccounts();
  console.log(`[claude-usage-sync] ${accounts.length}개 계정 처리`);

  const out = { version: 1, generatedAt: new Date().toISOString(), accounts: {} };
  accounts.forEach((acc) => {
    out.accounts[acc.id] = buildAccountUsage(acc);
    const t = out.accounts[acc.id].today;
    console.log(`  • ${acc.id} (${acc.label}) — 오늘 메시지 ${t.messages} · 세션 ${t.sessions} · 토큰 ${t.tokens.toLocaleString()}`);
  });

  fs.writeFileSync(OUT_PATH, JSON.stringify(out, null, 2), 'utf8');
  console.log(`[claude-usage-sync] 완료 → data/claude-usage.generated.json`);
}

main();
