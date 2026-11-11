(function(){
var RU={
hm_lead:"AgentProof проверяет описание мультиагентной системы.<br>Показывает слабые места в промптах, связях, правах и цепочках.<br>Вы получаете карту системы, балл и план укрепления.<br>Проверяйте до запуска и после каждого изменения.",
hm_facts:"<span>72 класса уязвимостей</span><i>·</i><span>13 типов багов в промптах</span><i>·</i><span>6 проверок каждого агента</span><i>·</i><span>16 системных проверок</span>",
hm_sample:"Образец отчёта",
hm_price:"<span>Первая проверка <b>0 $</b></span><i>·</i><span>Полный аудит <b>2448 $</b></span>",
hm_rep_h:"Каким будет ваш отчёт",
hm_rep_sub:"Образец: учебный интернет-магазин с агентом поддержки и автодеплоем.<br>Все ключи и данные вымышленные.",
hm_rep_score:"Балл по единой рубрике",hm_rep_v:"С оговорками",hm_rep_f:"8.0 после плана",
hm_rep_crit:"3 критичные находки из 25",
hm_c1:"Файл сборки без проверки получает три постоянных ключа",
hm_c2:"Аккаунты GitHub и хостинга защищены паролем и кодом из SMS",
hm_c3:"Ключ API магазина лежит в репозитории и не отозван",
hm_rep_weak:"Слабое звено",
hm_weak:"Контур публикации.<br>Любой из четырёх участников добавляет workflow, который видит ключи OpenAI, магазина и AWS.",
hm_rep_btn:"Открыть образец целиком",
hm_rep_note:"У каждой находки: основание из описания, реальный случай, что сделать и как проверить.",
hm_case_h:"Реальный кейс",
hm_case_p:"Система продаж Екатерины: 4 бота, 2 AI-агента, платежи и доступ к ключам.<br>AgentProof нашёл 77 уязвимостей.<br>Каждую важную находку закрывали барьером в коде и проверяли заново по тому же реестру.<br>За 8 проверок балл вырос с 6.0 до 8.7.",
hm_case_cap:"Балл после каждой из 8 проверок",
hm_cmp_h:"AgentProof и другие способы проверки",
hm_cmp_sub:"Сравнение по открытым данным рынка.<br>AgentProof проверяет систему целиком по описанию: быстро, без ключей и по фиксированной цене.",
hm_cmp_src:"Цены и сроки: открытые страницы продавцов и обзоры рынка, ноябрь 2026. Разовые ориентиры, у каждого продавца свои условия.",
hm_inc_h:"Что входит",
hm_free_l:"Первая проверка",hm_full_l:"Полный аудит",
hm_free:"Балл системы и вердикт|Слабое звено и сильное место|Все находки заголовками|Главная находка полностью",
hm_full:"Отчёт по системе: все находки с цепочками и основанием|Исправление каждой находки: что сделать и как проверить|План укрепления с тестами, от критичных находок|PDF и задачи разработчику|Повторная проверка после исправлений с новым баллом",
hm_order:"Купить полный аудит",
hm_order_note:"Разовая оплата через Tribute. Сервисный сбор Tribute 30 $.",
hm_fix_h:"После аудита: агент-исправитель",
hm_fix_p:"Отдельная услуга для тех, кто хочет закрыть находки без поиска разработчика.<br>Цена зависит от сложности и обсуждается лично с Екатериной.",
hm_fix:"Собирается под находки вашей системы|Открытый текстовый файл, его можно прочитать до установки|Работает в Claude Code, Cursor, Codex, Windsurf|Правки в отдельной копии, каждую вы подтверждаете сами",
hm_fix_btn:"Обсудить с Екатериной",
hm_fix_note:"Повторные прогоны аудита входят в стоимость агента-исправителя.",
hm_how_h:"Как проходит аудит",
hm_how1:"Заявка и код",hm_how1p:"Вы пишете в Telegram.<br>Екатерина выдаёт личный код доступа.",
hm_how0:"Подготовка проекта",hm_how0p:"Промпт со страницы «Подготовка» собирает описание системы из папки проекта.<br>Ключи и доступы заменяются на [СЕКРЕТ], личные данные на [ПДн].<br>Ваши данные не уходят наружу.",
hm_how2:"Загрузка описания",hm_how2p:"Вы загружаете готовый файл без ключей.<br>Сайт ещё раз вырезает ключи и контакты до проверки.",
hm_how3:"Отчёт",hm_how3p:"Движок строит карту и проходит 72 класса сбоев.<br>Отчёт готов за несколько минут.",
hm_end_h:"Проверьте систему до запуска",
lab_i1h:"Что это",lab_i1:"72 класса сбоев AI-агентов.<br>У каждого признаки, барьер и реальные случаи.",
lab_i2h:"Как пользоваться",lab_i2:"Откройте строку, похожую на ваш проект.<br>Внутри видно, как сбой выглядит и как его закрыть.",
lab_i3h:"Связь с аудитом",lab_i3:"AgentProof сверяет вашу систему с каждым классом.<br>Найденное попадает в отчёт с основанием.",
cs_w1:"Как мы обращаемся с данными: описание не сохраняется, отчёт хранится зашифрованным 48 часов.",
cs_w2:"В описании могут быть имена и контакты. Сайт вырезает их до проверки.",
cs_w3:"Проверка идёт по описанию и даёт второе мнение. Решения о системе принимаете вы.",
cs_why:"Три согласия нужны по закону, чтобы мы могли обработать ваше описание.",
cmp2:{vs:"AgentProof против",tabs:["Автоматического сканера","Ручного аудита","Платформы защиты"],
rows:["Цена","Срок","Вся система целиком","Карта и слабое звено","План исправлений с тестами","Повторная проверка","Без ключей и доступа","Атака на работающую систему"],
ap:["2448 $","Минуты","y|Да","y|Да","y|Да","y|Входит","y|Да","n|Нет, по описанию"],
c:[["99–500 $","Минуты","n|Один агент","n|Нет","p|Частично","p|За доплату","n|Нужен доступ","y|Да"],
["16 000–75 000 $","Недели","y|Да","y|Да","y|Да","p|По договору","n|Нужен доступ","y|Да"],
["По запросу","Подключение","p|Частично","p|Частично","p|Частично","p|Частично","n|Подключение","y|Да"]],
v:["Сканер дешевле и тоже быстрый.<br>Обычно он смотрит на одного агента и не показывает, где рвётся вся система.",
"Ручной аудит глубже: эксперт атакует живую систему.<br>Стоит от 16 000 $ и идёт неделями.",
"Платформа следит за системой постоянно.<br>Это подписка с подключением к вашей системе и цена по запросу."]},cmp:[["","AgentProof","Автоматический сканер","Ручной аудит","Платформа защиты"],
["Цена","2448 $ разово","99–500 $","16 000–75 000 $","Подписка, цена по запросу"],
["Срок","Минуты","Минуты","Недели","Подключение и настройка"],
["Вся система: связи, деньги, доступы","+ Да","− Обычно один агент","+ Да","± Частично"],
["Карта системы и слабое звено","+ Да","− Нет","+ Да","± Частично"],
["План исправлений с тестами","+ Да","± Частично","+ Да","± Частично"],
["Повторная проверка по тому же реестру","+ Входит","± За отдельную плату","± По договору","± Частично"],
["Ключи и доступ к системе","+ Не нужны","− Нужен доступ","− Нужен доступ","− Подключение к системе"],
["Атака на работающую систему","− Нет, проверка по описанию","+ Да","+ Да","+ Да"]]
};
var EN={
hm_lead:"AgentProof reviews the description of your multi-agent system.<br>It shows weak spots in prompts, connections, permissions and chains.<br>You get a system map, a score and a hardening plan.<br>Check before launch and after every change.",
hm_facts:"<span>72 vulnerability classes</span><i>·</i><span>13 prompt bug types</span><i>·</i><span>6 checks per agent</span><i>·</i><span>16 system checks</span>",
hm_sample:"Sample report",
hm_price:"<span>First check <b>$0</b></span><i>·</i><span>Full audit <b>$2448</b></span>",
hm_rep_h:"What your report looks like",
hm_rep_sub:"Sample: a training online store with a support agent and auto-deploy.<br>All keys and data are made up.",
hm_rep_score:"Score on one rubric",hm_rep_v:"With caveats",hm_rep_f:"8.0 after the plan",
hm_rep_crit:"3 critical findings out of 25",
hm_c1:"A build file without review gets three permanent keys",
hm_c2:"GitHub and hosting accounts are protected by a password and an SMS code",
hm_c3:"The store API key sits in the repository and is not revoked",
hm_rep_weak:"Weak link",
hm_weak:"The publishing pipeline.<br>Any of the four members adds a workflow that sees the OpenAI, store and AWS keys.",
hm_rep_btn:"Open the full sample",
hm_rep_note:"Every finding comes with a quote from the description, a real incident, what to do and how to verify.",
hm_case_h:"Real case",
hm_case_p:"Ekaterina's sales system: 4 bots, 2 AI agents, payments and access to keys.<br>AgentProof found 77 vulnerabilities.<br>Each important finding was closed with a barrier in code and re-checked against the same registry.<br>Over 8 checks the score went from 6.0 to 8.7.",
hm_case_cap:"Score after each of the 8 checks",
hm_cmp_h:"AgentProof and other ways to check",
hm_cmp_sub:"Comparison based on open market data.<br>AgentProof checks the whole system from its description: fast, without keys, at a fixed price.",
hm_cmp_src:"Prices and timing: public seller pages and market reviews, November 2026. Indicative only, every seller has its own terms.",
hm_inc_h:"What is included",
hm_free_l:"First check",hm_full_l:"Full audit",
hm_free:"System score and verdict|Weak link and strong point|Every finding as a headline|The main finding in full",
hm_full:"System report: every finding with its chain and basis|A fix for every finding: what to do and how to verify|Hardening plan with tests, critical findings first|PDF and developer tasks|A retest after fixes with a new score",
hm_order:"Buy the full audit",
hm_order_note:"One-time payment via Tribute. Tribute service fee $30.",
hm_fix_h:"After the audit: fixer agent",
hm_fix_p:"A separate service for closing findings without hiring a developer.<br>The price depends on complexity and is discussed with Ekaterina in person.",
hm_fix:"Built for the findings of your system|An open text file you can read before installing|Works in Claude Code, Cursor, Codex, Windsurf|Changes go into a separate copy, you approve each one",
hm_fix_btn:"Talk to Ekaterina",
hm_fix_note:"Repeat audit runs are included in the fixer agent price.",
hm_how_h:"How the audit goes",
hm_how1:"Request and code",hm_how1p:"You write on Telegram.<br>Ekaterina issues a personal access code.",
hm_how0:"Project preparation",hm_how0p:"The prompt on the Preparation page builds the system description from your project folder.<br>Keys and access are replaced with [SECRET], personal data with [PII].<br>Your data does not leave.",
hm_how2:"Upload the description",hm_how2p:"You upload the ready file without keys.<br>The site removes keys and contacts once more before the check.",
hm_how3:"Report",hm_how3p:"The engine builds a map and runs 72 failure classes.<br>The report is ready in a few minutes.",
hm_end_h:"Check your system before launch",
lab_i1h:"What it is",lab_i1:"72 failure classes of AI agents.<br>Each has signs, a barrier and real incidents.",
lab_i2h:"How to use it",lab_i2:"Open the row that looks like your project.<br>Inside you see how the failure looks and how to close it.",
lab_i3h:"How it links to the audit",lab_i3:"AgentProof checks your system against every class.<br>What it finds goes into the report with its basis.",
cs_w1:"How we handle data: the description is not stored, the report is kept encrypted for 48 hours.",
cs_w2:"The description may contain names and contacts. The site removes them before the check.",
cs_w3:"The check works from the description and gives a second opinion. You make the decisions about your system.",
cs_why:"These three consents are required by law so we can process your description.",
cmp2:{vs:"AgentProof vs",tabs:["Automated scanner","Manual audit","Protection platform"],
rows:["Price","Timing","Whole system","Map and weak link","Fix plan with tests","Retest","No keys or access","Attack on the running system"],
ap:["$2448","Minutes","y|Yes","y|Yes","y|Yes","y|Included","y|Yes","n|No, from the description"],
c:[["$99–500","Minutes","n|One agent","n|No","p|Partly","p|Paid extra","n|Access needed","y|Yes"],
["$16,000–75,000","Weeks","y|Yes","y|Yes","y|Yes","p|By contract","n|Access needed","y|Yes"],
["On request","Connection","p|Partly","p|Partly","p|Partly","p|Partly","n|Connected","y|Yes"]],
v:["A scanner is cheaper and just as fast.<br>It usually looks at one agent and does not show where the whole system breaks.",
"A manual audit goes deeper: an expert attacks the live system.<br>It costs from $16,000 and takes weeks.",
"A platform watches your system all the time.<br>It is a subscription connected to your system, priced on request."]},cmp:[["","AgentProof","Automated scanner","Manual audit","Protection platform"],
["Price","$2448 one-time","$99–500","$16,000–75,000","Subscription, price on request"],
["Timing","Minutes","Minutes","Weeks","Connection and setup"],
["Whole system: links, money, access","+ Yes","− Usually one agent","+ Yes","± Partly"],
["System map and weak link","+ Yes","− No","+ Yes","± Partly"],
["Fix plan with tests","+ Yes","± Partly","+ Yes","± Partly"],
["Retest against the same registry","+ Included","± Paid extra","± By contract","± Partly"],
["Keys and system access","+ Not needed","− Access needed","− Access needed","− Connected to the system"],
["Attack on the running system","− No, review of the description","+ Yes","+ Yes","+ Yes"]]
};
var L=function(){return (typeof lang!=='undefined'&&lang==='en')?EN:RU};
for(var k in RU)if(typeof RU[k]==='string')I18N.ru[k]=RU[k];
for(var k2 in EN)if(typeof EN[k2]==='string')I18N.en[k2]=EN[k2];
var q=function(s){return document.querySelector(s)};
function li(s){return s.split('|').map(function(x){return '<li>'+x+'</li>'}).join('')}
function cell(v){var m=/^([+−±])\s(.*)$/.exec(v);if(!m)return v;var c=m[1]==='+'?'y':m[1]==='−'?'n':'';return '<span class="'+c+'">'+m[1]+'</span> '+m[2]}
function paint(){
  var D=L();if(!q('#hmFree'))return;
  q('#hmFree').innerHTML=li(D.hm_free);q('#hmFull').innerHTML=li(D.hm_full);q('#hmFix').innerHTML=li(D.hm_fix);
  paintCmp();
  paintLab();paintConsent();document.querySelectorAll('a[data-i18n="hm_order"]').forEach(function(a){a.href=(typeof lang!=='undefined'&&lang==='en')?'https://web.tribute.tg/p/Jp7':'https://web.tribute.tg/p/Jp4'});
  q('#hmBars').innerHTML=[6.0,6.7,7.7,7.9,8.0,8.3,8.4,8.7].map(function(v){return '<div style="height:'+(v*10)+'%"><em>'+v.toFixed(1)+'</em></div>'}).join('');
}
var cur=0;
var IC={y:'<svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',n:'<svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg>',p:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="7"/><path d="M12 5a7 7 0 0 1 0 14z" fill="currentColor"/></svg>'};
function val(x){var m=/^([ynp])\|(.*)$/.exec(x);return m?'<span class="ic '+m[1]+'">'+IC[m[1]]+'</span>'+m[2]:'<b>'+x+'</b>'}
function paintCmp(){var C=L().cmp2,el=q('#hmCmp');if(!el)return;
  el.innerHTML='<div class="hm-cmp-tabs"><span>'+C.vs+'</span>'+C.tabs.map(function(t,i){return '<button type="button" data-cmp="'+i+'" class="'+(i===cur?'on':'')+'">'+t+'</button>'}).join('')+'</div>'+
  '<p class="hm-cmp-v">'+C.v[cur]+'</p>'+
  '<div class="hm-cmp-g"><div class="h"></div><div class="h ap">AgentProof</div><div class="h">'+C.tabs[cur]+'</div>'+
  C.rows.map(function(r,i){return '<div class="l">'+r+'</div><div class="ap">'+val(C.ap[i])+'</div><div>'+val(C.c[cur][i])+'</div>'}).join('')+'</div>';}
document.addEventListener('click',function(e){var b=e.target.closest('[data-cmp]');if(b){cur=+b.dataset.cmp;paintCmp();}});
function paintLab(){var v=q('[data-view="lab"]');if(!v)return;var box=q('#labIntro');if(!box){box=document.createElement('div');box.id='labIntro';box.className='lab-intro';var t=q('#labTable');t.parentNode.insertBefore(box,t);}
  var D=L(),T=function(k){return (I18N[lang]&&I18N[lang][k])||I18N.ru[k]};
  box.innerHTML=[1,2,3].map(function(n){return '<div><span class="hm-n">'+n+'</span><b>'+T('lab_i'+n+'h')+'</b><p>'+T('lab_i'+n)+'</p></div>'}).join('');}
function paintConsent(){var rows=document.querySelectorAll('#consentBox .csrow small');[].forEach(function(k,i){if(rows[i]){rows[i].setAttribute('data-i18n',k);rows[i].textContent=(I18N[lang]&&I18N[lang][k])||I18N.ru[k];}});
  var sub=q('#consentBox .cssub');if(sub){sub.setAttribute('data-i18n','cs_why');sub.textContent=(I18N[lang]&&I18N[lang].cs_why)||I18N.ru.cs_why;}}
var o=window.applyLang;
if(typeof o==='function')window.applyLang=applyLang=function(){var r=o.apply(this,arguments);paint();return r};
applyLang();
})();

/* «Отчёты»: что входит в полный аудит, по пунктам, на реальном отчёте (система продаж, данные обезличены) */
(function(){
var RU={
h:"Что входит в полный аудит",
sub:"Пять пунктов, как в карточке аудита.<br>Под каждым кусок реального отчёта: система продаж, 4 бота и 2 AI-агента, данные обезличены.",
items:["Отчёт по системе","Исправление каждой находки","План укрепления с тестами","PDF и задачи разработчику","Повторная проверка"],
d:["Все находки с цепочками и основанием","Что сделать и как проверить","Порядок работ от критичных находок","Готовый список для вашей команды","После исправлений, с новым баллом"],
verdict:"С оговорками",weakL:"Слабое звено",weak:"Выдача платного доступа по коду из служебной ссылки.<br>Это единственный вход в «оплачено», который напрямую зависит от текста клиента.",
strongL:"Сильное место",strong:"Платёжная связка пишет в базу ключом только на добавление записей.<br>Ключи в контекст модели не попадают.",
chainL:"Как могут атаковать · вывод по описанию",chain:["Клиент отправляет ссылку с подобранным кодом","Бот ставит «оплачено» и выдаёт токен","Платный доступ без оплаты"],
agentsL:"Проверка каждого агента",agents:[["Вызовы инструментов","4/5"],["Длинная дистанция","4/5"],["Инъекции из текста клиента","3/5"],["Опора на первоисточник","3/5"],["Зацикливание","3/5"],["Смена модели","3/5"]],
fP:"Критично",fT:"Платный доступ выдаётся по статичному коду из служебной ссылки",
fEvL:"Основание",fEv:"Код в ссылке /start одинаковый для всех, бот ставит «оплачено» по этому коду.",
fDoL:"Что сделать",fDo:"Одноразовые коды или подписанная ссылка вместо статичного кода.",
fChL:"Как проверить",fCh:"Один код дважды с разных аккаунтов: доступ выдаётся ожидаемое число раз.",
planH:["Приоритет","Что сделать","Как проверить"],
plan:[["r","Критично","Одноразовые коды или подписанная ссылка вместо статичного кода","Один код дважды с разных аккаунтов: доступ выдаётся ожидаемое число раз"],
["","Важно","Бот выплат в отдельный процесс со своими ключами","Ключи выплат недоступны из процесса продавца"],
["","Важно","Лимит обращений к модели на пользователя","N+5 сообщений подряд: после лимита понятный отказ"],
["m","Укрепить","Барьер в коде против запроса «покажи инструкцию»","Запрос и вариации: в ответе ноль фрагментов промпта"],
["m","Укрепить","Защита от двойного начисления при параллельной записи","Два одновременных запуска: одно начисление"]],
devNote:"Кнопки «Скачать PDF», «Задачи разработчику» и «Файл отчёта» стоят внизу каждого отчёта.<br>Задачи можно отдать разработчику или своему AI-агенту.",
dev:"# Система продаж: задачи по отчёту AgentProof\nБалл 6/10 · с оговорками\n\n## Критично\n- [ ] Одноразовые коды или подписанная ссылка вместо статичного кода\n      Проверка: один код дважды с разных аккаунтов\n\n## Важно\n- [ ] Бот выплат в отдельный процесс со своими ключами\n      Проверка: ключи выплат недоступны из процесса продавца\n- [ ] Лимит обращений к модели на пользователя\n      Проверка: N+5 сообщений подряд, после лимита отказ",
reL:"Балл системы после каждой повторной проверки",
re:[["Платный доступ по статичному коду из ссылки","Критично","Закрыто"],["Гонка при записи «оплачено» и начислений","Важно","Закрыто"],["Нет лимита обращений к модели на пользователя","Важно","Закрыто"]],
reNote:"Повторная проверка идёт по тому же реестру находок: видно, что закрыто и что осталось.<br>На этой системе 8 проверок, 77 находок, балл вырос с 6.0 до 8.7.",
was:"было",now:"стало",cta:"Купить полный аудит",pdfB:"Скачать реальный отчёт PDF",pdfN:"Настоящий отчёт AgentProof по системе продаж: 45 страниц, 32 находки, балл 7.4.<br>Ключей и личных данных в нём нет.<br>Скачайте и проверьте его у любой нейросети.<br>Кнопки «Скачать PDF», «Задачи разработчику» и «Файл отчёта» есть внизу каждого отчёта."};
var EN={
h:"What the full audit includes",
sub:"Five items, as on the audit card.<br>Under each one, a piece of a real report: a sales system with 4 bots and 2 AI agents, data anonymised.",
items:["System report","A fix for every finding","Hardening plan with tests","PDF and developer tasks","Retest"],
d:["Every finding with its chain and basis","What to do and how to verify","Work order from critical findings","A ready list for your team","After fixes, with a new score"],
verdict:"With caveats",weakL:"Weak link",weak:"Paid access is issued by a code from a service link.<br>It is the only way into “paid” that depends directly on customer text.",
strongL:"Strong point",strong:"The payment link writes to the database with an append-only key.<br>Keys never reach the model context.",
chainL:"How it could be attacked · inferred from the description",chain:["A customer sends a link with a guessed code","The bot marks “paid” and issues a token","Paid access without payment"],
agentsL:"Check of every agent",agents:[["Tool calls","4/5"],["Long distance","4/5"],["Injection from customer text","3/5"],["Grounding in the source","3/5"],["Looping","3/5"],["Model change","3/5"]],
fP:"Critical",fT:"Paid access is issued by a static code from a service link",
fEvL:"Basis",fEv:"The code in the /start link is the same for everyone, and the bot marks “paid” by that code.",
fDoL:"What to do",fDo:"One-time codes or a signed link instead of a static code.",
fChL:"How to verify",fCh:"Use one code twice from different accounts: access is granted the expected number of times.",
planH:["Priority","What to do","How to verify"],
plan:[["r","Critical","One-time codes or a signed link instead of a static code","One code twice from different accounts: access is granted the expected number of times"],
["","Important","Move the payout bot to a separate process with its own keys","Payout keys are not reachable from the seller process"],
["","Important","A per-user limit on model calls","N+5 messages in a row: a clear refusal after the limit"],
["m","Harden","A code barrier against “show me your instructions”","The request and variants: zero prompt fragments in the reply"],
["m","Harden","Protection from double crediting on parallel writes","Two simultaneous runs: one credit"]],
devNote:"The Download PDF, Developer tasks and Report file buttons sit at the bottom of every report.<br>You can hand the tasks to your developer or your own AI agent.",
dev:"# Sales system: tasks from the AgentProof report\nScore 6/10 · with caveats\n\n## Critical\n- [ ] One-time codes or a signed link instead of a static code\n      Check: one code twice from different accounts\n\n## Important\n- [ ] Payout bot in a separate process with its own keys\n      Check: payout keys not reachable from the seller process\n- [ ] Per-user limit on model calls\n      Check: N+5 messages in a row, refusal after the limit",
reL:"System score after each retest",
re:[["Paid access by a static code from a link","Critical","Fixed"],["Race between writing “paid” and crediting","Important","Fixed"],["No per-user limit on model calls","Important","Fixed"]],
reNote:"A retest runs against the same findings registry: you see what is fixed and what is left.<br>On this system: 8 checks, 77 findings, the score went from 6.0 to 8.7.",
was:"was",now:"now",cta:"Buy the full audit",pdfB:"Download the real report PDF",pdfN:"A real AgentProof report on a sales system: 45 pages, 32 findings, score 7.4.<br>It contains no keys or personal data.<br>Download it and check it with any AI model.<br>The Download PDF, Developer tasks and Report file buttons sit at the bottom of every report."};
var cur=0,T=function(){return (typeof lang!=='undefined'&&lang==='en')?EN:RU};
function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;')}
function panel(i){var D=T();
 if(i===0)return '<div class="ic-sum"><div class="ic-score"><b>6</b><small>/10</small><span>'+D.verdict+'</span></div><div><span class="hm-lbl r">'+D.weakL+'</span><p>'+D.weak+'</p><span class="hm-lbl">'+D.strongL+'</span><p>'+D.strong+'</p></div></div>'+
  '<span class="hm-lbl">'+D.chainL+'</span><div class="ic-chain">'+D.chain.map(function(c,k){return (k?'<i>→</i>':'')+'<span class="'+(k===2?'r':'')+'">'+c+'</span>'}).join('')+'</div>'+
  '<span class="hm-lbl">'+D.agentsL+'</span><div class="ic-agents">'+D.agents.map(function(a){return '<div><span>'+a[0]+'</span><b>'+a[1]+'</b></div>'}).join('')+'</div>';
 if(i===1)return '<div class="ic-find"><span class="ic-p r">'+D.fP+'</span><h3>'+D.fT+'</h3><div class="ic-f3"><div><span class="hm-lbl">'+D.fEvL+'</span><p>«'+D.fEv+'»</p></div><div><span class="hm-lbl">'+D.fDoL+'</span><p>'+D.fDo+'</p></div><div><span class="hm-lbl">'+D.fChL+'</span><p>'+D.fCh+'</p></div></div></div>';
 if(i===2)return '<div class="ic-plan"><div class="h">'+D.planH.join('</div><div class="h">')+'</div>'+D.plan.map(function(r){return '<div><span class="ic-p '+r[0]+'">'+r[1]+'</span></div><div>'+r[2]+'</div><div class="t">'+r[3]+'</div>'}).join('')+'</div>';
 if(i===3)return '<p>'+D.pdfN+'</p><a class="btn pri" href="agentproof-real-report.pdf" download target="_blank" rel="noopener">'+D.pdfB+' <span class="arw"><svg viewBox="0 0 24 24"><path d="M12 4v12M6 11l6 6 6-6"/></svg></span></a>';
 return '<span class="hm-lbl">'+D.reL+'</span><div class="hm-bars ic-bars">'+[6.0,6.7,7.7,7.9,8.0,8.3,8.4,8.7].map(function(v){return '<div style="height:'+(v*10)+'%"><em>'+v.toFixed(1)+'</em></div>'}).join('')+'</div>'+
  '<div class="ic-re">'+D.re.map(function(r){return '<div><span>'+r[0]+'</span><em>'+D.was+': '+r[1]+'</em><b>'+D.now+': '+r[2]+'</b></div>'}).join('')+'</div><p class="hm-note">'+D.reNote+'</p>';
}
function paint(){var ex=document.getElementById('exampleFull');if(!ex)return;var box=document.getElementById('incBlock');
 if(!box){box=document.createElement('div');box.id='incBlock';box.className='incx';ex.parentNode.insertBefore(box,ex);}
 var D=T();box.innerHTML='<h2>'+D.h+'</h2><p>'+D.sub+'</p><div class="ic-grid"><div class="ic-tabs">'+D.items.map(function(t,i){return '<button type="button" data-inc="'+i+'" class="'+(i===cur?'on':'')+'"><span class="hm-n">'+(i+1)+'</span><span><b>'+t+'</b><small>'+D.d[i]+'</small></span></button>'}).join('')+
 '<a class="btn ghost" href="'+((typeof lang!=='undefined'&&lang==='en')?'https://web.tribute.tg/p/Jp7':'https://web.tribute.tg/p/Jp4')+'" target="_blank" rel="noopener">'+D.cta+'</a></div><div class="ic-panel">'+panel(cur)+'</div></div>';}
document.addEventListener('click',function(e){var b=e.target.closest('[data-inc]');if(b){cur=+b.dataset.inc;paint();}});
var o=window.applyLang;if(typeof o==='function')window.applyLang=applyLang=function(){var r=o.apply(this,arguments);paint();return r};
paint();
})();
