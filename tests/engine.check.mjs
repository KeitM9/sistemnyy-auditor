// Самопроверка логики движка без обращения к модели: node tests/engine.check.mjs
import crypto from 'node:crypto';
import * as m from '../api/audit.js';
const A = s => Object.fromEntries(['secrets', 'injection', 'tools', 'plan', 'joints', 'economy'].map(k => [k, { score: s, why: 'w' }]));
const ok = (c, msg) => { if (!c) { console.error('FAIL', msg); process.exit(1); } };
const ax = m.mergeAxes([{ axes: A(9), caps: { no_limit: true } }, { axes: A(8), caps: { no_limit: false } }, { axes: A(10), caps: { no_limit: true } }]);
ok(ax.axes.secrets.score === 9 && ax.axes.secrets.spread === 2 && ax.caps.no_limit === true, 'медиана осей и потолок 2 из 3');
const map = { name: 'S', note: 'n', strong: 's', graph: { nodes: [{ id: 'a', label: 'A', io: 1, leak: 0, flags: [] }, { id: 'b', label: 'B', io: 1, leak: 0, flags: [] }], edges: [{ f: 'a', t: 'b', weak: 0, label: '' }] }, agents: [{ id: 'a', name: 'Продавец' }], money: [], channels: [], gaps: [] };
const probe = { battery: [{ agent: 'a', t: 'Инъекции', s: 3, n: 'n' }], system: [], matched: [{ id: 'D2', where: 'x', basis: 'fact', n: '' }, { id: 'ZZ9', where: '', basis: 'fact', n: '' }] };
const fin = { weak: 'w', exploit: { path: [], note: '' }, hardening: [{ id: 'F1', cls: 'D2', st: 'new', basis: 'fact', t: 'x', p: 'P1', do: '', how: '', check: '' }], steps: [], compliance: [{ art: 'art15', status: 'no', ev: 'F1' }] };
const top = { axes: Object.fromEntries(Object.entries(A(10)).map(([k, v]) => [k, { ...v, spread: 0 }])), caps: {} };
const r = m.normalize(map, probe, fin, top, 'ru', {});
ok(r.score === 7.4 && r.verdict === 'С оговорками', 'открытая P1 ограничивает балл 7.4');
ok(r.matched.length === 1 && r.matched[0].startsWith('D2'), 'в «совпало» только коды библиотеки');
ok(r.compliance.items.length === 4, 'таблица AI Act из 4 статей');
const r2 = m.normalize(map, probe, { ...fin, hardening: [{ ...fin.hardening[0], st: 'closed' }] }, top, 'ru',
  { prev: { score: 7, items: [{ id: 'F1', p: 'P1', cls: 'D2', t: 'x' }, { id: 'F2', p: 'P2', cls: 'D3', t: 'y' }] } });
ok(r2.score === 10 && r2.hardening[1].id === 'F2' && r2.hardening[1].st === 'open', 'ретест: закрытая P1 снимает потолок, пропущенная находка остаётся открытой');
const s = m.sealState('k', { a: 1 });
ok(m.openState('k', s).a === 1 && m.openState('k', { ...s, state: s.state.replace('1', '2') }) === null && m.openState('x', s) === null, 'подпись состояния');
// Секрет-Стиратель + ПДн
const sc = m.scrub('ключ sk-ant-abcdefghijklmnopqrstuv почта ivan@mail.com тел +7 912 345-67-89 карта 4111 1111 1111 1111 версия 3.12.5');
ok(sc.found.secrets === 1 && sc.found.pii === 3 && !sc.text.includes('ivan@') && sc.text.includes('3.12.5'), 'вырезаны секрет и ПДн, версия цела');
// Обещание-Калькулятор: запрещённое обещание убирается, обычный текст остаётся
const h = { n: 0 };
ok(m.guardPromises('Система собрана аккуратно. Утечек нет по описанию.', h) === 'Система собрана аккуратно.' && h.n === 1, 'убрано «утечек нет»');
ok(m.guardPromises('Лимит гарантирует одно начисление.', { n: 0 }) === 'Лимит гарантирует одно начисление.', 'инженерное «гарантирует» не трогаем');
// Возврат-Детектив, прогноз, три шага
const r3 = m.normalize(map, probe, fin, top, 'ru', { prev: { score: 8, items: [{ id: 'F9', p: 'P2', cls: 'D2', st: 'closed', t: 'z' }] } });
ok(r3.hardening.find(x => x.id === 'F1').ret === 1, 'находка закрытого ранее класса отмечена «вернулась»');
ok(r3.forecast === 10 && r3.top3[0].p === 'P1', 'прогноз без потолков и три главных шага');
// Адвокат Дьявола: снятая P1 уходит из реестра, ослабленная становится P2, потолок P1 снимается
const finA = { ...fin, hardening: [{ ...fin.hardening[0], id: 'F1', p: 'P1' }, { ...fin.hardening[0], id: 'F2', p: 'P1' }] };
const r4 = m.normalize(map, probe, { ...finA, hardening: finA.hardening.map(h => ({ ...h, cls: 'A01.1' })) }, top, 'ru', {}, { p1: [{ id: 'F1', verdict: 'removed', arg: 'A2', quote: 'у агента нет инструмента', residual: '', rejected: [], why: 'барьер описан', question: '', prereg: '', bench: '' }, { id: 'F2', verdict: 'downgraded', arg: 'A6', quote: 'лимит 5', residual: 'остаток', rejected: [], why: 'слабое основание', question: 'Есть ли лимит?', prereg: 'да → P3', bench: '' }] });
ok(r4.refuted.length === 1 && r4.hardening.length === 1 && r4.hardening[0].p === 'P2' && r4.score === 10 && r4.gaps.some(g => g.includes('Есть ли лимит')), 'адвокат дьявола');
// Адвокат без контраргумента и цитаты не может снять находку; структурную (D3) снять нельзя
ok(m.lawfulDevil({ verdict: 'removed', arg: 'none', quote: '' }, 'A01.1') === 'stands', 'снятие без A-аргумента запрещено');
ok(m.lawfulDevil({ verdict: 'removed', arg: 'A1', quote: 'ключ в прокси' }, 'D3') === 'downgraded', 'структурная P1 только понижается');
// Журнал на дозапись: правка записи рвёт цепочку

const H = x => crypto.createHash('sha256').update(x).digest('hex');
const j1 = JSON.stringify({ ev: 'map', prev: '0' }), h1 = H(j1), j2 = JSON.stringify({ ev: 'report', prev: h1 }), h2 = H(j2);
ok(m.verifyJournal([j1 + ' ' + h1, j2 + ' ' + h2]).ok, 'целая цепочка журнала');
ok(!m.verifyJournal([j1.replace('map', 'MAP') + ' ' + h1, j2 + ' ' + h2]).ok, 'правка записи видна');
console.log('engine checks ok');
