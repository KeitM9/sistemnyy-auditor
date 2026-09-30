// Эталонный набор движка (Синтетик-Стенд + Дрейф-Дозор + Ложняк-Аудитор).
// Запуск при каждой смене модели, промпта или библиотеки:  node run.mjs <движок-url> <код> [cookie]
// Каждая система — один код. Проваленная строка = версию движка в работу не выпускать.
import fs from 'node:fs';
const [,, U, code, cookie = ''] = process.argv;
const exp = JSON.parse(fs.readFileSync(new URL('expected.json', import.meta.url)));
const file = process.env.ONLY || Object.keys(exp)[0];
const system = fs.readFileSync(new URL(file, import.meta.url), 'utf8');
const call = async x => { const r = await fetch(`${U}/api/audit`, { method: 'POST', headers: { 'Content-Type': 'application/json', Origin: 'https://agentproof.arsysai.com', Cookie: cookie }, body: JSON.stringify({ code, system, lang: 'ru', tag: 'golden', ...x }) }); if (!r.ok) throw new Error(x.action + ' ' + r.status + ' ' + await r.text()); return r.json(); };
let s = await call({ action: 'map' }); s = await call({ action: 'probe', sealed: s }); const rep = await call({ action: 'final', sealed: s });
const found = new Set([...rep.hardening.map(h => h.cls), ...rep.matched.map(m => m.split(' ')[0])]);
const e = exp[file], miss = e.must.filter(c => !found.has(c)), p1 = rep.hardening.filter(h => h.p === 'P1' && h.st !== 'closed').length;
const okScore = rep.score >= e.min_score && rep.score <= e.max_score, okP1 = e.max_p1 == null || p1 <= e.max_p1;
console.log(JSON.stringify({ file, score: rep.score, spread: rep.spread, found: [...found], miss, p1, pass: !miss.length && okScore && okP1 }));
fs.writeFileSync(new URL(`result-${file}.json`, import.meta.url), JSON.stringify(rep, null, 1));
