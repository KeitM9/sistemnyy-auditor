(function(){
var RU={
hm_std:"Классы проверок сопоставлены с OWASP Top 10 for Agentic Applications 2026.<br>В отчёте есть сверка с четырьмя статьями EU AI Act.",
hm_lead:"Независимый аудит архитектуры мультиагентных систем по описанию.<br>Доступ к работающей системе не нужен.<br>Мы проверяем систему целиком: агентов, связи между ними, права и цепочки.<br>Вы получаете карту системы, балл и план укрепления.",
hm_facts:"<span>75 классов уязвимостей</span><i>·</i><span>13 типов багов в промптах</span><i>·</i><span>6 проверок каждого агента</span><i>·</i><span>16 системных проверок</span>",
hm_sample:"Образец отчёта",
hm_price:"<a class=\"hm-buy\" data-buy href=\"https://t.me/tribute/app?startapp=pJp4\" target=\"_blank\" rel=\"noopener\">Пройти полный аудит</a>",
hm_upd:"AgentProof обновляет базу проверок каждую неделю, учитывая новые утечки данных, взломы и обнаруженные уязвимости. Свежие инциденты становятся частью методологии аудита.",hm_upd_more:"Свежие случаи, которые уже входят в проверку",
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
hm_case_p:"Система продаж Architect Systems AI: 4 бота, 2 AI-агента, платежи и доступ к ключам.<br>AgentProof нашёл 77 уязвимостей.<br>Каждую важную находку закрывали барьером в коде и проверяли заново по тому же реестру.<br>За 8 проверок балл вырос с 6.0 до 8.7.",
hm_case_cap:"Балл после каждой из 8 проверок",
hm_cmp_h:"AgentProof и другие способы проверки",
hm_cmp_sub:"Сравнение по открытым данным рынка.<br>AgentProof проверяет систему целиком по описанию: быстро, без ключей и по фиксированной цене.",
hm_cmp_src:"Цены и сроки: открытые страницы продавцов и обзоры рынка, ноябрь 2026. Разовые ориентиры, у каждого продавца свои условия.",
hm_inc_h:"Что входит",
hm_free_l:"Первая проверка",hm_full_l:"Полный аудит",
hm_free:"Балл системы и вердикт|Слабое звено и сильное место|Все находки заголовками|Главная находка полностью",
hm_full:"Находим то, что обычно пропускают: стыки агентов, утечки ключей, инъекции из текста клиента, отсутствие лимитов|Цепочки атак с основанием: как именно можно сломать систему, каждое звено опирается на ваше описание|План укрепления: что чинить первым и как проверить, что дыра закрыта|PDF и задачи разработчику: готовый список, который можно сразу отдавать в работу|Повторный аудит: новый балл и подтверждение, что система стала крепче",
hm_order:"Купить полный аудит",
hm_order_note:"Разовая оплата через Tribute.<br>Tribute может взимать сервисный сбор.",
hm_fix_h:"После аудита: агент-исправитель",
hm_fix_p:"Отдельная услуга для тех, кто хочет закрыть находки без поиска разработчика.<br>Цена зависит от сложности и обсуждается лично с Architect Systems AI.",
hm_fix:"Собирается под находки вашей системы|Открытый текстовый файл, его можно прочитать до установки|Работает в Claude Code, Cursor, Codex, Windsurf|Правки в отдельной копии, каждую вы подтверждаете сами",
hm_fix_btn:"Обсудить с <span class='pl-name'>Architect Systems AI</span>",
hm_fix_note:"Повторные прогоны аудита входят в стоимость агента-исправителя.",
fd_h:"Что содержит каждая находка",fd_sub:"Технический директор видит не список рисков, а разбор, который можно проверить.",fd:"Класс сбоя|Какая из 75 проверок сработала~Основание|Цитата из вашего описания~Серьёзность|Критично, важно или укрепление~Последствия|Что может случиться и во что это обойдётся~Цепочка атаки|Шаги от входа до денег или ключей, вывод по описанию~Что сделать и как|Конкретный шаг и где его сделать~Как проверить|Тест, который подтверждает исправление",fq_h:"Вопросы и ответы",fq:"Что это|Независимый аудит архитектуры мультиагентной системы по её описанию. Движок строит карту, проходит 75 классов сбоев и считает балл по единой рубрике.~Чем это не является|Это не пентест и не атака на работающую систему. Для проверки живой системы нужен другой формат.~Что прислать|Описание системы, собранное промптом со страницы «Подготовка»: промпты, связи, права и настройки без значений ключей.~Сколько ждать|Отчёт готов в течение 30 минут после загрузки описания.<br>За это время движок строит карту, проверяет каждого агента и всю систему, затем отдельно перепроверяет каждую критичную находку.<br>Код доступа после оплаты приходит в Telegram в течение 30 минут.~Оплата и данные|Перед оплатой нужно принять условия аудита.<br>Оплата разово через Tribute.<br>На серверах AgentProof описание не сохраняется, текст уходит в модель Claude (Anthropic) через API.~Забыли убрать ключи|Сайт вырезает ключи известных форматов, email, телефоны и номера карт до того, как текст уйдёт модели.<br>Описание на серверах AgentProof не сохраняется.<br>Если настоящий ключ всё же попал в файл, смените его: так безопаснее в любом случае.~Не тот файл|Если загрузили не тот файл, напишите в <a href='https://t.me/supprmaster_bot' target='_blank' rel='noopener'>поддержку</a> в течение 48 часов после отчёта.<br>Architect Systems AI выдаст новый код.~Повторный аудит|Когда разработчик закончит исправления, напишите в <a href='https://t.me/supprmaster_bot' target='_blank' rel='noopener'>поддержку</a>.<br>Architect Systems AI выдаст код на повторный аудит.<br>48 часов считаются с момента выдачи кода, поэтому исправлять можно в своём темпе.~Поддержка|Вопросы по аудиту, оплате, возвратам и кодам: <a href='https://t.me/supprmaster_bot' target='_blank' rel='noopener'>@supprmaster_bot</a> в Telegram.<br>Коды доступа выдаёт @arsysai_bot.",
hm_how_h:"Как проходит аудит",
hm_how1:"Заявка и код",hm_how1p:"Вы пишете в Telegram.<br>Architect Systems AI выдаёт личный код доступа.",
hm_how0:"Подготовка проекта",hm_how0p:"Промпт со страницы «Подготовка» собирает описание системы из папки проекта.<br>Ключи и доступы заменяются на [СЕКРЕТ], личные данные на [ПДн].<br>Ваши данные не уходят наружу.",
hm_how2:"Загрузка описания",hm_how2p:"Вы загружаете готовый файл без ключей.<br>Сайт ещё раз вырезает ключи и контакты до проверки.",
hm_how3:"Отчёт",hm_how3p:"Движок строит карту и проходит 75 классов сбоев.<br>Отчёт готов в течение 30 минут.",
hm_end_h:"Проверьте систему до запуска",
lab_i1h:"Что это",lab_i1:"75 классов сбоев AI-агентов.<br>У каждого признаки, барьер и реальные случаи.",
lab_i2h:"Как пользоваться",lab_i2:"Откройте строку, похожую на ваш проект.<br>Внутри видно, как сбой выглядит и как его закрыть.",
lab_i3h:"Связь с аудитом",lab_i3:"AgentProof сверяет вашу систему с каждым классом.<br>Найденное попадает в отчёт с основанием.",
cs_w1:"Как мы обращаемся с данными: описание не сохраняется, отчёт хранится зашифрованным 48 часов.",
cs_w2:"В описании могут быть имена и контакты. Сайт вырезает их до проверки.",
cs_w3:"Проверка идёт по описанию и даёт второе мнение. Решения о системе принимаете вы.",
cs_why:"Три согласия нужны по закону, чтобы мы могли обработать ваше описание.<br>Перед проверкой ознакомьтесь с условиями аудита: в них правила оплаты, возврата и хранения данных.",
cmp2:{vs:"AgentProof против",tabs:["Автоматического сканера","Ручного аудита","Платформы защиты"],
rows:["Цена","Срок","Вся система целиком","Карта и слабое звено","План исправлений с тестами","Повторная проверка","Без ключей и доступа","Атака на работающую систему"],
ap:["2448 $","До 30 минут","y|Да","y|Да","y|Да","y|Входит","y|Да","n|Нет, по описанию"],
c:[["99–500 $","Минуты","n|Один агент","n|Нет","p|Частично","p|За доплату","n|Нужен доступ","y|Да"],
["16 000–75 000 $","Недели","y|Да","y|Да","y|Да","p|По договору","n|Нужен доступ","y|Да"],
["По запросу","Подключение","p|Частично","p|Частично","p|Частично","p|Частично","n|Подключение","y|Да"]],
v:["Сканер дешевле и тоже быстрый.<br>Обычно он смотрит на одного агента и не показывает, где рвётся вся система.",
"Ручной аудит глубже: эксперт атакует живую систему.<br>Стоит от 16 000 $ и идёт неделями.",
"Платформа следит за системой постоянно.<br>Это подписка с подключением к вашей системе и цена по запросу."]},cmp:[["","AgentProof","Автоматический сканер","Ручной аудит","Платформа защиты"],
["Цена","2448 $ разово","99–500 $","16 000–75 000 $","Подписка, цена по запросу"],
["Срок","До 30 минут","Минуты","Недели","Подключение и настройка"],
["Вся система: связи, деньги, доступы","+ Да","− Обычно один агент","+ Да","± Частично"],
["Карта системы и слабое звено","+ Да","− Нет","+ Да","± Частично"],
["План исправлений с тестами","+ Да","± Частично","+ Да","± Частично"],
["Повторная проверка по тому же реестру","+ Входит","± За отдельную плату","± По договору","± Частично"],
["Ключи и доступ к системе","+ Не нужны","− Нужен доступ","− Нужен доступ","− Подключение к системе"],
["Атака на работающую систему","− Нет, проверка по описанию","+ Да","+ Да","+ Да"]]
};
var EN={
hm_std:"Check classes are mapped to the OWASP Top 10 for Agentic Applications 2026.<br>The report includes a check against four EU AI Act articles.",
hm_lead:"Independent architecture audit of multi-agent AI systems, based on your description.<br>No production access needed.<br>We check the system as a whole: agents, the links between them, permissions and chains.<br>You get a system map, a score and a hardening plan.",
hm_facts:"<span>75 vulnerability classes</span><i>·</i><span>13 prompt bug types</span><i>·</i><span>6 checks per agent</span><i>·</i><span>16 system checks</span>",
hm_sample:"Sample report",
hm_price:"<a class=\"hm-buy\" data-buy href=\"https://t.me/tribute/app?startapp=pJp7\" target=\"_blank\" rel=\"noopener\">Take the full audit</a>",
hm_upd:"AgentProof updates its check base every week, taking into account new data leaks, breaches and discovered vulnerabilities. Fresh incidents become part of the audit methodology.",hm_upd_more:"Recent cases already included in the check",
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
hm_case_p:"The Architect Systems AI sales system: 4 bots, 2 AI agents, payments and access to keys.<br>AgentProof found 77 vulnerabilities.<br>Each important finding was closed with a barrier in code and re-checked against the same registry.<br>Over 8 checks the score went from 6.0 to 8.7.",
hm_case_cap:"Score after each of the 8 checks",
hm_cmp_h:"AgentProof and other ways to check",
hm_cmp_sub:"Comparison based on open market data.<br>AgentProof checks the whole system from its description: fast, without keys, at a fixed price.",
hm_cmp_src:"Prices and timing: public seller pages and market reviews, November 2026. Indicative only, every seller has its own terms.",
hm_inc_h:"What is included",
hm_free_l:"First check",hm_full_l:"Full audit",
hm_free:"System score and verdict|Weak link and strong point|Every finding as a headline|The main finding in full",
hm_full:"We find what is usually missed: agent handoffs, key leaks, injections from customer text, missing limits|Attack chains with basis: exactly how the system can be broken, every link rests on your description|Hardening plan: what to fix first and how to verify the hole is closed|PDF and developer tasks: a ready list you can hand over right away|Follow-up audit: a new score and confirmation that the system got stronger",
hm_order:"Buy the full audit",
hm_order_note:"One-time payment via Tribute.<br>Tribute may charge a service fee.",
hm_fix_h:"After the audit: fixer agent",
hm_fix_p:"A separate service for closing findings without hiring a developer.<br>The price depends on complexity and is discussed with Architect Systems AI in person.",
hm_fix:"Built for the findings of your system|An open text file you can read before installing|Works in Claude Code, Cursor, Codex, Windsurf|Changes go into a separate copy, you approve each one",
hm_fix_btn:"Talk to <span class='pl-name'>Architect Systems AI</span>",
hm_fix_note:"Repeat audit runs are included in the fixer agent price.",
fd_h:"What every finding contains",fd_sub:"A CTO sees a breakdown that can be checked, not a list of risks.",fd:"Failure class|Which of the 75 checks fired~Basis|A quote from your description~Severity|Critical, important or hardening~Impact|What can happen and what it could cost~Attack chain|Steps from entry to money or keys, inferred from the description~Fix|A concrete step and where to make it~Verification|A test that confirms the fix",fq_h:"Questions and answers",fq:"What it is|An independent architecture audit of a multi-agent system based on its description. The engine builds a map, runs 75 failure classes and calculates a score on one rubric.~What it is not|This is not live red teaming or penetration testing of a running system. Testing a live system needs a different format.~What to send|A system description built with the prompt on the Preparation page: prompts, links, permissions and settings without key values.~How long it takes|The report is ready within 30 minutes after you upload the description.<br>In that time the engine builds the map, checks every agent and the whole system, then rechecks every critical finding separately.<br>After payment, the access code arrives on Telegram within 30 minutes.~Payment and data|You accept the audit terms before payment.<br>One-time payment via Tribute.<br>The description is not saved on AgentProof servers, the text goes to the Claude model (Anthropic) through the API.~Forgot to remove keys|The site removes keys of known formats, emails, phone and card numbers before the text reaches the model.<br>The description is not saved on AgentProof servers.<br>If a real key still got into the file, replace it: it is safer in any case.~Wrong file|If you uploaded the wrong file, message <a href='https://t.me/supprmaster_bot' target='_blank' rel='noopener'>support</a> within 48 hours after the report.<br>Architect Systems AI will issue a new code.~Follow-up audit|When your developer finishes the fixes, message <a href='https://t.me/supprmaster_bot' target='_blank' rel='noopener'>support</a>.<br>Architect Systems AI will issue a code for the follow-up audit.<br>The 48 hours start when the code is issued, so fixes can take as long as they need.~Support|Questions about the audit, payment, refunds and codes: <a href='https://t.me/supprmaster_bot' target='_blank' rel='noopener'>@supprmaster_bot</a> on Telegram.<br>Access codes are issued by @arsysai_bot.",
hm_how_h:"How the audit goes",
hm_how1:"Request and code",hm_how1p:"You write on Telegram.<br>Architect Systems AI issues a personal access code.",
hm_how0:"Project preparation",hm_how0p:"The prompt on the Preparation page builds the system description from your project folder.<br>Keys and access are replaced with [SECRET], personal data with [PII].<br>Your data does not leave.",
hm_how2:"Upload the description",hm_how2p:"You upload the ready file without keys.<br>The site removes keys and contacts once more before the check.",
hm_how3:"Report",hm_how3p:"The engine builds a map and runs 75 failure classes.<br>The report is ready within 30 minutes.",
hm_end_h:"Check your system before launch",
lab_i1h:"What it is",lab_i1:"75 failure classes of AI agents.<br>Each has signs, a barrier and real incidents.",
lab_i2h:"How to use it",lab_i2:"Open the row that looks like your project.<br>Inside you see how the failure looks and how to close it.",
lab_i3h:"How it links to the audit",lab_i3:"AgentProof checks your system against every class.<br>What it finds goes into the report with its basis.",
cs_w1:"How we handle data: the description is not stored, the report is kept encrypted for 48 hours.",
cs_w2:"The description may contain names and contacts. The site removes them before the check.",
cs_w3:"The check works from the description and gives a second opinion. You make the decisions about your system.",
cs_why:"These three consents are required by law so we can process your description.<br>Before the check, read the audit terms: they cover payment, refunds and data storage.",
cmp2:{vs:"AgentProof vs",tabs:["Automated scanner","Manual audit","Protection platform"],
rows:["Price","Timing","Whole system","Map and weak link","Fix plan with tests","Retest","No keys or access","Attack on the running system"],
ap:["$2448","Up to 30 minutes","y|Yes","y|Yes","y|Yes","y|Included","y|Yes","n|No, from the description"],
c:[["$99–500","Minutes","n|One agent","n|No","p|Partly","p|Paid extra","n|Access needed","y|Yes"],
["$16,000–75,000","Weeks","y|Yes","y|Yes","y|Yes","p|By contract","n|Access needed","y|Yes"],
["On request","Connection","p|Partly","p|Partly","p|Partly","p|Partly","n|Connected","y|Yes"]],
v:["A scanner is cheaper and just as fast.<br>It usually looks at one agent and does not show where the whole system breaks.",
"A manual audit goes deeper: an expert attacks the live system.<br>It costs from $16,000 and takes weeks.",
"A platform watches your system all the time.<br>It is a subscription connected to your system, priced on request."]},cmp:[["","AgentProof","Automated scanner","Manual audit","Protection platform"],
["Price","$2448 one-time","$99–500","$16,000–75,000","Subscription, price on request"],
["Timing","Up to 30 minutes","Minutes","Weeks","Connection and setup"],
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
  paintLab();paintConsent();document.querySelectorAll('a[data-i18n="hm_order"]').forEach(function(a){a.href='paket.html'+((typeof lang!=='undefined'&&lang==='en')?'?lang=en':'')+'#start';a.removeAttribute('target')});
  var fd=q('#hmFd');if(fd)fd.innerHTML=D.fd.split('~').map(function(x,i){var p=x.split('|');return '<div><span class="hm-n">'+(i+1)+'</span><b>'+p[0]+'</b><p>'+p[1]+'</p></div>'}).join('');var fq=q('#hmFq');if(fq)fq.innerHTML=D.fq.split('~').map(function(x){var p=x.split('|');return '<details><summary>'+p[0]+'</summary><p>'+p[1]+'</p></details>'}).join('');
  var ud=q('#hmUpd');if(ud&&!ud.dataset.on){ud.dataset.on=1;ud.addEventListener('toggle',function(){if(ud.open&&typeof renderUpdates==='function')renderUpdates()})}
  q('#hmBars').innerHTML=[6.0,6.7,7.7,7.9,8.0,8.3,8.4,8.7].map(function(v){return '<div style="height:'+(v*10)+'%"><em>'+v.toFixed(1)+'</em></div>'}).join('');
}
var cur=0;
var IC={y:'<svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',n:'<svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg>',p:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="7"/><path d="M12 5a7 7 0 0 1 0 14z" fill="currentColor"/></svg>'};
function val(x){var m=/^([ynp])\|(.*)$/.exec(x);return m?'<span class="ic '+m[1]+'">'+IC[m[1]]+'</span>'+m[2]:'<b>'+x+'</b>'}
function paintCmp(){var C=L().cmp2,el=q('#hmCmp');if(!el)return;
  el.innerHTML='<div class="hm-cmp-tabs"><span>'+C.vs+'</span>'+C.tabs.map(function(t,i){return '<button type="button" data-cmp="'+i+'" class="'+(i===cur?'on':'')+'">'+t+'</button>'}).join('')+'</div>'+
  '<p class="hm-cmp-v">'+C.v[cur]+'</p>'+
  '<div class="hm-cmp-g"><div class="h"></div><div class="h ap">AgentProof</div><div class="h">'+C.tabs[cur]+'</div>'+
  C.rows.map(function(r,i){if(!i)return '';return '<div class="l">'+r+'</div><div class="ap">'+val(C.ap[i])+'</div><div>'+val(C.c[cur][i])+'</div>'}).join('')+'</div>';}
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
items:["Находим то, что обычно пропускают","Цепочки атак с основанием","План укрепления","PDF и задачи разработчику","Повторный аудит"],
d:["Стыки, ключи, инъекции, лимиты","Как именно можно сломать систему","Что чинить первым и как проверить","Готовый список в работу","Новый балл после исправлений"],
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
reL:"Балл системы после каждой повторной проверки",topL:"Аудит 1 → аудит 8 · 77 находок · балл 6.0 → 8.7",
re:[["Платный доступ по статичному коду из ссылки","Критично","Закрыто"],["Гонка при записи «оплачено» и начислений","Важно","Закрыто"],["Нет лимита обращений к модели на пользователя","Важно","Закрыто"]],
reNote:"Повторная проверка идёт по тому же реестру находок: видно, что закрыто и что осталось.<br>На этой системе 8 проверок, 77 находок, балл вырос с 6.0 до 8.7.",
was:"было",now:"стало",cta:"Купить полный аудит",pdfB:"Скачать реальный отчёт PDF",pdfN:"Настоящий отчёт AgentProof по системе продаж: 45 страниц, 32 находки, балл 7.4.<br>Ключей и личных данных в нём нет.<br>Скачайте и проверьте его у любой нейросети.<br>Кнопки «Скачать PDF», «Задачи разработчику» и «Файл отчёта» есть внизу каждого отчёта."};
var EN={
h:"What the full audit includes",
sub:"Five items, as on the audit card.<br>Under each one, a piece of a real report: a sales system with 4 bots and 2 AI agents, data anonymised.",
items:["We find what is usually missed","Attack chains with basis","Hardening plan","PDF and developer tasks","Follow-up audit"],
d:["Handoffs, keys, injections, limits","Exactly how the system can be broken","What to fix first and how to verify","A ready list for your team","A new score after fixes"],
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
reL:"System score after each retest",topL:"Audit 1 → audit 8 · 77 findings · score 6.0 → 8.7",
re:[["Paid access by a static code from a link","Critical","Fixed"],["Race between writing “paid” and crediting","Important","Fixed"],["No per-user limit on model calls","Important","Fixed"]],
reNote:"A retest runs against the same findings registry: you see what is fixed and what is left.<br>On this system: 8 checks, 77 findings, the score went from 6.0 to 8.7.",
was:"was",now:"now",cta:"Buy the full audit",pdfB:"Download the real report PDF",pdfN:"A real AgentProof report on a sales system: 45 pages, 32 findings, score 7.4.<br>It contains no keys or personal data.<br>Download it and check it with any AI model.<br>The Download PDF, Developer tasks and Report file buttons sit at the bottom of every report."};
var cur=0,T=function(){return (typeof lang!=='undefined'&&lang==='en')?EN:RU};
function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;')}
function panel(i){var D=T();
 if(i===0)return '<div class="ic-sum"><div class="ic-score"><b>6</b><small>/10</small><span>'+D.verdict+'</span></div><div><span class="hm-lbl r">'+D.weakL+'</span><p>'+D.weak+'</p><span class="hm-lbl">'+D.strongL+'</span><p>'+D.strong+'</p></div></div>'+
  '<span class="hm-lbl">'+D.agentsL+'</span><div class="ic-agents">'+D.agents.map(function(a){return '<div><span>'+a[0]+'</span><b>'+a[1]+'</b></div>'}).join('')+'</div>';
 if(i===1)return '<span class="hm-lbl">'+D.chainL+'</span><div class="ic-chain">'+D.chain.map(function(c,k){return (k?'<i>→</i>':'')+'<span class="'+(k===2?'r':'')+'">'+c+'</span>'}).join('')+'</div>'+'<div class="ic-find"><span class="ic-p r">'+D.fP+'</span><h3>'+D.fT+'</h3><div class="ic-f3"><div><span class="hm-lbl">'+D.fEvL+'</span><p>«'+D.fEv+'»</p></div><div><span class="hm-lbl">'+D.fDoL+'</span><p>'+D.fDo+'</p></div><div><span class="hm-lbl">'+D.fChL+'</span><p>'+D.fCh+'</p></div></div></div>';
 if(i===2)return '<div class="ic-plan"><div class="h">'+D.planH.join('</div><div class="h">')+'</div>'+D.plan.map(function(r){return '<div><span class="ic-p '+r[0]+'">'+r[1]+'</span></div><div>'+r[2]+'</div><div class="t">'+r[3]+'</div>'}).join('')+'</div>';
 if(i===3)return '<p>'+D.pdfN+'</p><a class="btn pri" href="agentproof-real-report.pdf" download target="_blank" rel="noopener">'+D.pdfB+' <span class="arw"><svg viewBox="0 0 24 24"><path d="M12 4v12M6 11l6 6 6-6"/></svg></span></a>';
 return 
  '<div class="ic-re">'+D.re.map(function(r){return '<div><span>'+r[0]+'</span><em>'+D.was+': '+r[1]+'</em><b>'+D.now+': '+r[2]+'</b></div>'}).join('')+'</div><p class="hm-note">'+D.reNote+'</p>';
}
function paint(){var ex=document.getElementById('exampleFull');if(!ex)return;var box=document.getElementById('incBlock');
 if(!box){box=document.createElement('div');box.id='incBlock';box.className='incx';ex.parentNode.insertBefore(box,ex);}
 var D=T();box.innerHTML='<h2>'+D.h+'</h2><p>'+D.sub+'</p><div class="ic-top"><span class="hm-lbl">'+D.topL+'</span><div class="hm-bars ic-bars">'+[6.0,6.7,7.7,7.9,8.0,8.3,8.4,8.7].map(function(v){return '<div style="height:'+(v*10)+'%"><em>'+v.toFixed(1)+'</em></div>'}).join('')+'</div></div><div class="ic-grid"><div class="ic-tabs">'+D.items.map(function(t,i){return '<button type="button" data-inc="'+i+'" class="'+(i===cur?'on':'')+'"><span class="hm-n">'+(i+1)+'</span><span><b>'+t+'</b><small>'+D.d[i]+'</small></span></button>'}).join('')+
 '<a class="btn pri" href="paket.html'+((typeof lang!=='undefined'&&lang==='en')?'?lang=en':'')+'#start">'+D.cta+'</a></div><div class="ic-panel">'+panel(cur)+'</div></div>';}
document.addEventListener('click',function(e){var b=e.target.closest('[data-inc]');if(b){cur=+b.dataset.inc;paint();}});
var o=window.applyLang;if(typeof o==='function')window.applyLang=applyLang=function(){var r=o.apply(this,arguments);paint();return r};
paint();
})();

/* «Обновления системы» на главной: последнее обновление раскрывается по пунктам,
   каждый новый класс ведёт в «Библиотеку сбоев», где он отмечен меткой «новое». 16.11.2026 */
(function(){
var TX={ru:{last:"Последнее обновление",plus:"новых классов: {n}",open:"Открыть библиотеку сбоев",libH:"История угроз и обновлений AgentProof",libSub:"Инциденты каждой недели и проверки, которые после них появились в аудите.",happ:"Что произошло",vul:"Уязвимость",add:"Что добавлено в AgentProof",added:"Добавлено в проверку",chk:"Что проверяем",seen:"Так уже случилось",lib:"Показать класс в библиотеке",prev:"Прошлые обновления",
  new:"новое",libNote:"Библиотека сбоев пополняется каждую неделю.<br>Последнее обновление: {d}. Новые классы отмечены меткой «новое».",cls:"класс",feat:"в отчёте"},
 en:{last:"Latest update",plus:"new classes: {n}",open:"Open the failure library",libH:"Threat history and AgentProof updates",libSub:"Incidents of each week and the checks that entered the audit after them.",happ:"What happened",vul:"Vulnerability",add:"What was added to AgentProof",added:"Added to the check",chk:"What we check",seen:"Already happened",lib:"Show the class in the library",prev:"Earlier updates",
  new:"new",libNote:"The failure library grows every week.<br>Latest update: {d}. New classes carry a “new” mark.",cls:"class",feat:"in the report"}};
function L(){return (typeof lang!=='undefined'&&lang==='en')?'en':'ru'}
function has(){return typeof UPDATES!=='undefined'&&UPDATES.length}
function inLib(c){return c&&typeof BUGS!=='undefined'&&BUGS.lib.some(function(x){return x[0]===c})}
function name(c){try{return libn(c)}catch(e){return ''}}
function item(it,i,open){var l=L(),T=TX[l],v=it[l],link=inLib(it.cls),nm=link?name(it.cls):'';
 return '<details class="up-i"'+(open?' open':'')+'><summary><span class="up-n">'+(i+1)+'</span><b>'+v[0]+'</b>'+
  '<span class="up-c">'+(it.cls?it.cls:T.feat)+'</span></summary><div class="up-b">'+
  (v[2]?'<p><span class="up-k">'+T.happ+'</span>'+v[2]+'</p>':'')+
  (nm?'<p><span class="up-k">'+T.vul+'</span>'+nm+'</p>':'')+
  '<p><span class="up-k">'+T.add+'</span>'+v[1]+'</p>'+
  (link?'<button type="button" class="up-go" data-up-cls="'+it.cls+'">'+T.lib+' →</button>':'')+'</div></details>';}
function block(){var l=L(),T=TX[l],w=UPDATES[0];
 return '<div class="up-head"><span class="up-tag">'+w.wk[l]+'</span><span>'+T.added+': '+w.items.length+'</span></div>'+
  w.items.map(function(it,i){return item(it,i,i===0)}).join('')+
  (UPDATES.length>1?'<details class="up-prev"><summary>'+T.prev+'</summary>'+UPDATES.slice(1).map(function(o){
   return '<div class="up-wk"><span class="up-tag">'+o.wk[l]+'</span>'+o.items.map(function(it,i){return item(it,i,false)}).join('')+'</div>'}).join('')+'</details>':'');}
function paint(){var box=document.getElementById('hmUpdBox');if(!box)return;box.innerHTML='<button type="button" class="btn pri up-open"><span>'+TX[L()].open+'</span> <span class="arw"><svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span></button>';}
// Библиотека: строка о последнем обновлении и метки «новое» у классов последнего обновления
function markLib(){var tb=document.getElementById('labTable');if(!tb||!has())return;var l=L(),T=TX[l];
 var note=document.getElementById('labUpd');if(!note){note=document.createElement('div');note.id='labUpd';note.className='up up-lib';tb.parentNode.insertBefore(note,tb);}
 if(note.dataset.l!==l){note.dataset.l=l;note.innerHTML='<h3 class="up-h">'+T.libH+'</h3><p class="up-sub">'+T.libSub+'</p>'+block();}
 var fresh={};UPDATES[0].items.forEach(function(it){if(inLib(it.cls))fresh[name(it.cls)]=it.cls});
 tb.querySelectorAll('details.bgi>summary').forEach(function(s){var c=fresh[s.textContent.replace(T.new,'').trim()];
  if(c&&!s.querySelector('.up-new')){s.insertAdjacentHTML('beforeend',' <span class="up-new">'+T.new+'</span>');s.parentNode.dataset.cls=c;
   var g=s.parentNode.closest('details.bg');if(g&&!g.querySelector(':scope>summary .up-new'))g.querySelector(':scope>summary').insertAdjacentHTML('beforeend',' <span class="up-new">'+T.new+'</span>');}});}
function openInLib(c){if(typeof show==='function')show('lab');setTimeout(function(){markLib();var d=document.querySelector('#labTable details.bgi[data-cls="'+c+'"]');
 if(!d){var n=name(c);document.querySelectorAll('#labTable details.bgi>summary').forEach(function(s){if(!d&&s.textContent.indexOf(n)===0)d=s.parentNode})}
 if(!d)return;var g=d.closest('details.bg');if(g)g.open=true;d.open=true;d.classList.add('up-hl');d.scrollIntoView({block:'center'});setTimeout(function(){d.classList.remove('up-hl')},2500);},120);}
document.addEventListener('click',function(e){if(e.target.closest('#newBtn,#exGo')){e.preventDefault();e.stopImmediatePropagation();location.href='paket.html'+(L()==='en'?'?lang=en':'')+'#start';return}},true);
document.addEventListener('click',function(e){var b=e.target.closest('[data-up-cls]');if(b)openInLib(b.dataset.upCls);
 if(e.target.closest('.up-open')&&typeof show==='function'){show('lab');setTimeout(function(){markLib();var x=document.getElementById('labUpd');if(x)x.scrollIntoView({block:'start'});window.scrollBy(0,-90)},120);}});
function all(){paint();markLib();}
var o=window.applyLang;if(typeof o==='function')window.applyLang=applyLang=function(){var r=o.apply(this,arguments);all();return r};
var s=window.show;if(typeof s==='function')window.show=show=function(v){var r=s.apply(this,arguments);if(v==='lab')setTimeout(markLib,0);return r};
all();
})();

/* Дополнения 16.11.2026, отдельно от ядра сайта:
   1) разделы OWASP в «Библиотеке сбоев» и в отчёте;
   2) пометка «после вашего аудита библиотека пополнилась» в «Отчётах» и в отчёте;
   3) раздел отчёта «Проверьте сами». Любая ошибка здесь гасится и не мешает сайту. */
(function(){
// OWASP Top 10 for Agentic Applications 2026: группы A01–A10 библиотеки = ASI01–ASI10
var ASI=['Agent Goal Hijack','Tool Misuse','Identity & Privilege Abuse','Agentic Supply Chain Vulnerabilities','Unexpected Code Execution','Memory & Context Poisoning','Insecure Inter-Agent Communication','Cascading Failures','Human-Agent Trust Exploitation','Rogue Agents'];
// Когда в библиотеку добавляли классы: [дата версии, сколько]. Новая версия библиотеки = новая строка.
var ADDED=[['2026-10-16',1],['2026-10-18',3],['2026-11-04',14],['2026-11-16',3]];
var TX={ru:{old:"новых классов после аудита: {n}",oldH:"Библиотека пополнилась после этого аудита",oldP:"Добавлено классов: {n}.<br>Повторная проверка сверит систему с ними.",again:"Проверить повторно",
  owH:"Разделы OWASP в этом отчёте",owP:"Находки относятся к разделам OWASP Top 10 for Agentic Applications 2026.",
  selfH:"Проверьте сами",selfP:"Эти проверки вы запускаете сами на своей системе.<br>Доступ к ней мы не запрашиваем.",copy:"Скопировать список",copied:"Скопировано",selfShow:"Показать проверки: {n}",
  demoH:"Это образец отчёта",demoP:"Система выдуманная, ключи и данные ненастоящие.<br>Ваш отчёт будет устроен так же.<br>Нажмите на находку, чтобы раскрыть её целиком.",
  openAll:"Раскрыть все находки",closeAll:"Свернуть все находки",hint:"После ваших проверок библиотека сбоев пополнилась.<br>Повторная проверка сверит систему с новыми классами."},
 en:{old:"new classes since the audit: {n}",oldH:"The library has grown since this audit",oldP:"Classes added: {n}.<br>A repeat check will match your system against them.",again:"Check again",
  owH:"OWASP sections in this report",owP:"The findings belong to sections of the OWASP Top 10 for Agentic Applications 2026.",
  selfH:"Check it yourself",selfP:"You run these checks yourself on your own system.<br>We do not ask for access to it.",copy:"Copy the list",copied:"Copied",selfShow:"Show checks: {n}",
  demoH:"This is a sample report",demoP:"The system is made up, the keys and data are not real.<br>Your report will be built the same way.<br>Tap a finding to open it in full.",
  openAll:"Open all findings",closeAll:"Collapse all findings",hint:"The failure library has grown since your checks.<br>A repeat check will match your system against the new classes."}};
function L(){return (typeof lang!=='undefined'&&lang==='en')?'en':'ru'}
function esc(s){return String(s==null?'':s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
function asi(code){var m=/^A(\d\d)(\.|$)/.exec(String(code||''));return m&&+m[1]>=1&&+m[1]<=10?+m[1]:0}
function newer(lib){var d=/(\d{4}-\d\d-\d\d)/.exec(String(lib||''));if(!d)return 0;return ADDED.reduce(function(s,a){return s+(a[0]>d[1]?a[1]:0)},0)}

// 1. Библиотека: подпись раздела OWASP у групп A01–A10
function lab(){var tb=document.getElementById('labTable');if(!tb)return;
 [].slice.call(tb.querySelectorAll(':scope>details.bg')).slice(0,10).forEach(function(d,i){var s=d.querySelector(':scope>summary');
  if(s&&!s.querySelector('.pl-asi'))s.insertAdjacentHTML('beforeend','<span class="pl-asi">OWASP ASI'+('0'+(i+1)).slice(-2)+' · '+ASI[i]+'</span>');});}

// 2. «Отчёты»: сколько классов добавлено после каждой проверки
function reps(){var tb=document.getElementById('reportsTable');if(!tb||typeof loadReps!=='function')return;var a=loadReps(),T=TX[L()],any=0;
 [].forEach.call(tb.querySelectorAll('.tr[data-i]'),function(el){var x=a[+el.dataset.i],n=x&&x.rep?newer(x.rep.lib):0,dt=el.querySelector('.name');
  if(n&&dt&&!dt.querySelector('.pl-old')){dt.insertAdjacentHTML('beforeend',' <span class="pl-old">'+T.old.replace('{n}',n)+'</span>')}if(n)any=1;});
 var h=document.getElementById('plOldHint');if(any&&!h)tb.insertAdjacentHTML('afterend','<p class="pl-hint" id="plOldHint">'+T.hint+'</p>');else if(!any&&h)h.remove();else if(h)h.innerHTML=T.hint;}

// 3. Отчёт: библиотека пополнилась, разделы OWASP, «Проверьте сами»
function report(r){var v=document.getElementById('report');if(!v||!r)return;[].forEach.call(v.querySelectorAll('.pl-box'),function(e){e.remove()});
 var T=TX[L()],demo=(typeof isDemo!=='undefined'&&isDemo),H=r.hardening||[],top='',bot='';
 var n=demo?0:newer(r.lib);
 if(n)top+='<div class="pl-box pl-warn"><h3>'+T.oldH+'</h3><p>'+T.oldP.replace('{n}',n)+'</p><a class="btn ghost" href="paket.html'+(L()==='en'?'?lang=en':'')+'#start">'+T.again+'</a></div>';
 var set={};H.forEach(function(h){var k=asi(h.cls);if(k)set[k]=1});(r.matched||[]).forEach(function(m){var k=asi(m);if(k)set[k]=1});
 var ks=Object.keys(set).map(Number).sort(function(a,b){return a-b});
 if(ks.length)bot+='<div class="pl-box"><h3>'+T.owH+'</h3><p>'+T.owP+'</p><div class="pl-tags">'+ks.map(function(k){return '<span>ASI'+('0'+k).slice(-2)+' · '+ASI[k-1]+'</span>'}).join('')+'</div></div>';
 var ch=H.filter(function(h){return h.st!=='closed'&&!h.locked&&h.check});
 if(ch.length)bot+='<div class="pl-box pl-self"><h3>'+T.selfH+' · '+ch.length+'</h3><p>'+T.selfP+'</p><details class="pl-selfd"><summary>'+T.selfShow.replace('{n}',ch.length)+'</summary><ol>'+ch.map(function(h){return '<li><b>'+esc(String(h.id||'').replace(/^F/,'№'))+' '+esc(h.t)+'</b><span>'+esc(h.check)+'</span></li>'}).join('')+'</ol><button type="button" class="btn ghost pl-copy">'+T.copy+'</button></details></div>';
 if(demo)top='<div class="pl-box pl-demo"><h3>'+T.demoH+'</h3><p>'+T.demoP+'</p></div>'+top;
 if(top)v.insertAdjacentHTML('afterbegin',top);if(bot)v.insertAdjacentHTML('beforeend',bot);
 fold(v);
}

// Находки свёрнуты до строки с метками и заголовком, нажатие раскрывает. Над первой находкой кнопка «Раскрыть все».
function fold(v){var T=TX[L()],cs=[].filter.call(v.querySelectorAll('.fxc'),function(c){return c.querySelector(':scope>.fxr')});if(!cs.length)return;
 cs.forEach(function(c){c.classList.add('pl-fold');var h=c.querySelector(':scope>.fxh');h.setAttribute('role','button');h.setAttribute('tabindex','0');h.setAttribute('aria-expanded','false');});
 var b=document.createElement('button');b.type='button';b.className='btn ghost pl-all';b.textContent=T.openAll;cs[0].parentNode.insertBefore(b,cs[0]);}
function toggle(c,open){c.classList.toggle('pl-fold',!open);var h=c.querySelector(':scope>.fxh');if(h)h.setAttribute('aria-expanded',open?'true':'false');}
document.addEventListener('click',function(e){
 var a=e.target.closest('.pl-all');if(a){var T=TX[L()],open=a.textContent===T.openAll;[].forEach.call(document.querySelectorAll('#report .fxc'),function(c){if(c.querySelector(':scope>.fxr'))toggle(c,open)});a.textContent=open?T.closeAll:T.openAll;return;}
 var h=e.target.closest('#report .fxc>.fxh');if(!h||e.target.closest('a,button,input,label'))return;var c=h.parentNode;if(c.querySelector(':scope>.fxr'))toggle(c,c.classList.contains('pl-fold'));});
document.addEventListener('keydown',function(e){if(e.key!=='Enter'&&e.key!==' ')return;var h=e.target.closest&&e.target.closest('#report .fxc>.fxh');if(!h)return;e.preventDefault();var c=h.parentNode;toggle(c,c.classList.contains('pl-fold'));});
// Печать и PDF: всё раскрыто
window.addEventListener('beforeprint',function(){[].forEach.call(document.querySelectorAll('#report .fxc.pl-fold'),function(c){toggle(c,true)});[].forEach.call(document.querySelectorAll('#report .pl-selfd'),function(d){d.open=true});});
// Кнопка «Скопировать список» работает и в образце отчёта: текст берётся со страницы
document.addEventListener('click',function(e){var b=e.target.closest('.pl-copy');if(!b)return;var NL=String.fromCharCode(10),txt=[].map.call(b.parentNode.querySelectorAll('li'),function(li,i){return (i+1)+'. '+li.querySelector('b').textContent+NL+li.querySelector('span').textContent}).join(NL+NL);
 try{navigator.clipboard.writeText(txt).then(function(){b.textContent=TX[L()].copied})}catch(x){}});

var last=null;
function safe(f){return function(){try{return f.apply(null,arguments)}catch(e){}}}
var sLab=safe(lab),sReps=safe(reps),sRep=safe(report);
var o=window.render;if(typeof o==='function')window.render=render=function(r){var res=o.apply(this,arguments);last=r;sRep(r);return res};
[['labTable',sLab],['reportsTable',sReps]].forEach(function(p){var el=document.getElementById(p[0]);if(el){new MutationObserver(function(){p[1]()}).observe(el,{childList:true});p[1]();}});
var al=window.applyLang;if(typeof al==='function')window.applyLang=applyLang=function(){var res=al.apply(this,arguments);sLab();sReps();var v=document.getElementById('report');if(last&&v&&v.classList.contains('on'))sRep(last);return res};
})();
