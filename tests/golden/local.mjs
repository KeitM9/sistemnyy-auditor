// Эталоны на локальном коде, без Vercel и живой базы. Нужен только ключ модели в ANTHROPIC_API_KEY.
//   node tests/golden/local.mjs --check   проверка самого запуска, модель не вызывается
//   node tests/golden/local.mjs           все эталоны с критериями из expected.json
//   node tests/golden/local.mjs --dry     весь путь на подставной модели, токены не тратятся
//   ONLY=g3-solid.md node tests/golden/local.mjs   один эталон
// Память подменена на словарь в процессе. Сигналы в Telegram выключены. Журнал и статистика живого движка не меняются.
import crypto from 'node:crypto';
import fs from 'node:fs';

const REDIS = 'http://redis.local';
const MAX_TOTAL = Number(process.env.GOLDEN_MAX_TOKENS) || 4000000; // условные токены на весь набор, как дневной потолок движка
Object.assign(process.env, { KV_REST_API_URL: REDIS, KV_REST_API_TOKEN: 'local', AP_CODE_SECRET: crypto.randomBytes(32).toString('hex') });
for (const k of ['UPSTASH_REDIS_REST_URL', 'UPSTASH_REDIS_REST_TOKEN', 'ALERT_BOT_TOKEN', 'ALERT_CHAT_ID', 'AP_TEASER']) delete process.env[k];

const kv = new Map();
const list = k => kv.get(k) || (kv.set(k, []), kv.get(k));
const run = ([c, k, ...a]) => {
  switch (c) {
    case 'GET': return kv.get(k) ?? null;
    case 'SET': kv.set(k, a[0]); return 'OK';
    case 'DEL': kv.delete(k); return 1;
    case 'INCR': { const n = Number(kv.get(k) || 0) + 1; kv.set(k, String(n)); return n; }
    case 'INCRBYFLOAT': { const n = Number(kv.get(k) || 0) + Number(a[0]); kv.set(k, String(n)); return String(n); }
    case 'EXPIRE': return 1;
    case 'TTL': return -1;
    case 'SCAN': return ['0', []];
    case 'RPUSH': return list(k).push(a[0]);
    case 'LPUSH': return list(k).unshift(a[0]);
    case 'LPOP': return list(k).shift() ?? null;
    case 'LINDEX': return list(k).at(Number(a[0])) ?? null;
    case 'LTRIM': kv.set(k, list(k).slice(Number(a[0]), Number(a[1]) + 1)); return 'OK';
    case 'LRANGE': return list(k).slice(Number(a[0]), Number(a[1]) + 1);
    default: throw new Error('local redis: ' + c);
  }
};
const realFetch = globalThis.fetch;
const DRY = process.argv.includes('--dry');
if (DRY) process.env.ANTHROPIC_API_KEY = 'sk-ant-dry';
// Подставная модель: минимальный ответ под схему шага, чтобы пройти движок целиком
const fakeOut = props => {
  if (props.graph) return { name: 'x', note: 'x', strong: 'x', graph: { nodes: [{ id: 'a', label: 'a', io: 1, leak: 0, flags: [] }, { id: 'b', label: 'b', io: 0, leak: 0, flags: [] }], edges: [{ f: 'a', t: 'b', weak: 1, label: 'x' }] }, agents: [{ id: 'a', name: 'a', role: 'r', reads_external: true, private_data: false, egress: false, tools: [], secrets: [], conf: 'declared' }], money: [], links: [], boundaries: [], channels: [], gaps: [] };
  if (props.battery) return { battery: [], system: [], matched: [{ id: 'D1', where: 'a', basis: 'fact', n: 'x' }], xray: [] };
  if (props.hardening) return { weak: 'x', exploit: { path: [], note: 'x' }, hardening: [{ id: 'H1', cls: 'D1', st: 'new', basis: 'fact', t: 'x', p: 'P1', do: 'x', how: 'x', check: 'x', dmg: 'x', back: 'x', ev: 'x' }], steps: [], unchecked: [], loss: [], compliance: [] };
  if (props.p1) return { p1: [{ id: 'H1', verdict: 'stands', arg: 'none', quote: '', residual: '', rejected: [], why: 'x', question: '', prereg: '', bench: '' }] };
  return { axes: Object.fromEntries(Object.keys(props.axes.properties).map(k => [k, { score: 5, why: 'x' }])), caps: Object.fromEntries(Object.keys(props.caps.properties).map(k => [k, false])) };
};
globalThis.fetch = (u, o) => {
  if (String(u) === REDIS) return Promise.resolve(new Response(JSON.stringify({ result: run(JSON.parse(o.body)) })));
  if (!DRY) return realFetch(u, o);
  const props = JSON.parse(o.body).output_config.format.schema.properties;
  return Promise.resolve(new Response(JSON.stringify({ id: 'm', type: 'message', role: 'assistant', model: 'dry', stop_reason: 'end_turn', content: [{ type: 'text', text: JSON.stringify(fakeOut(props)) }], usage: { input_tokens: 1, output_tokens: 1 } }), { headers: { 'content-type': 'application/json' } }));
};

const { default: handler, sign } = await import('../../api/audit.js');

const TG = 1;
const exp = Math.floor(Date.now() / 1000) + 86400;
const code = `ap-${TG.toString(36)}-${exp.toString(36)}-${sign(process.env.AP_CODE_SECRET, TG, exp)}`;
const call = body => new Promise((resolve, reject) => {
  let status = 200;
  const res = { setHeader() {}, status(s) { status = s; return res; }, end() { resolve({ status }); }, json(data) { resolve({ status, data }); } };
  handler({ method: 'POST', headers: { origin: 'https://agentproof.arsysai.com', 'x-forwarded-for': '127.0.0.1' }, body: { code, lang: 'ru', tag: 'golden', ...body } }, res).catch(reject);
});
const reset = () => { kv.clear(); kv.set('ap:mig90', '1'); kv.set(`ap:consent:${TG}`, '{}'); };

if (process.argv.includes('--check')) {
  reset();
  const ok = await call({ action: 'check' });
  console.assert(ok.status === 200 && ok.data.ok === true, 'код не принят', ok);
  kv.set(`ap:used:${TG}:${exp}`, '1');
  const used = await call({ action: 'check' });
  console.assert(used.data.used === true, 'погашенный код принят', used);
  const off = await handler({ method: 'POST', headers: { origin: 'https://evil.example' }, body: {} }, { setHeader() {}, status(s) { return { json: () => s }; } });
  console.assert(off === 403, 'чужой адрес принят', off);
  console.log('local check done');
  process.exit(process.exitCode || 0);
}
// Ctrl+V в скрытом вводе PowerShell даёт один управляющий символ, а SDK показывает его как Connection error.
if (!/^sk-ant-[\x21-\x7e]+$/.test(process.env.ANTHROPIC_API_KEY || '')) { console.error('Key not accepted: paste it with the right mouse button'); process.exit(2); }

const expected = JSON.parse(fs.readFileSync(new URL('expected.json', import.meta.url)));
const files = DRY ? ['g1-support-bot.md'] : process.env.ONLY ? [process.env.ONLY] : Object.keys(expected).filter(f => f !== 'self-agentproof.md');
const rows = [];
let total = 0;
for (const file of files) {
  if (total > MAX_TOTAL) { rows.push({ file, skipped: 'потолок токенов набора' }); console.log(JSON.stringify(rows.at(-1))); continue; }
  reset();
  const t0 = Date.now();
  const system = fs.readFileSync(new URL(file, import.meta.url), 'utf8');
  try {
    const step = async x => { const r = await call({ system, ...x }); if (r.status !== 200) throw new Error(`${x.action} ${r.status} ${JSON.stringify(r.data)}`); return r.data; };
    let s = await step({ action: 'map' });
    s = await step({ action: 'probe', sealed: s });
    s = await step({ action: 'final', sealed: s });
    const rep = await step({ action: 'verify', sealed: s });
    if (!DRY) fs.writeFileSync(new URL(`result-${file}.json`, import.meta.url), JSON.stringify(rep, null, 1)); // отчёт оплачен: сохраняем до разбора
    const found = new Set([...rep.hardening.map(h => h.cls), ...rep.matched.map(m => m.split(' ')[0])]);
    const e = expected[file], miss = e.must.filter(c => !found.has(c));
    const p1 = rep.hardening.filter(h => h.p === 'P1' && h.st !== 'closed').length;
    const okScore = rep.score >= e.min_score && rep.score <= e.max_score, okP1 = e.max_p1 == null || p1 <= e.max_p1;
    const last = String(list('ap:journal').at(-1) || '');
    const tokens = JSON.parse(last.slice(0, last.lastIndexOf(' ')) || '{}').tokens || 0;
    total += tokens;
    rows.push({ file, pass: !miss.length && okScore && okP1, score: rep.score, range: [e.min_score, e.max_score], miss, p1, max_p1: e.max_p1, findings: rep.hardening.length, spread: rep.spread, tokens, sec: Math.round((Date.now() - t0) / 1000), lib: rep.lib });
  } catch (err) {
    rows.push({ file, pass: false, error: String(err).slice(0, 300) });
    console.log(JSON.stringify(rows.at(-1)));
    if (!DRY) fs.writeFileSync(new URL('result-summary.json', import.meta.url), JSON.stringify({ when: new Date().toISOString(), total, rows }, null, 1));
    console.log('STOP: run halted on first error, remaining systems not started'); // не платим за следующие прогоны при сбое
    process.exit(1);
  }
  console.log(JSON.stringify(rows.at(-1)));
  if (!DRY) fs.writeFileSync(new URL('result-summary.json', import.meta.url), JSON.stringify({ when: new Date().toISOString(), total, rows }, null, 1));
}
const passed = rows.filter(r => r.pass).length;
console.log(`RESULT: passed ${passed} of ${rows.length}, weighted tokens ${total}`);
if (DRY) { console.assert(!rows[0].error && rows[0].findings >= 1 && rows[0].lib, 'dry run did not produce a report', rows[0]); console.log('dry run done'); process.exit(process.exitCode || 0); }
process.exit(passed === rows.length ? 0 : 1);
