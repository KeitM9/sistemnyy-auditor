// Самопроверка логики движка без обращения к модели: node tests/engine.check.mjs
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
console.log('engine checks ok');
