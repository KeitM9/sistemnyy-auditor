/* «Подготовка», внизу: чек-лист «Проект готов» + согласия → кнопки «Получить код бесплатно» и «Оплатить полный аудит» (обе в бот,
   там согласие на оплату записывается с Telegram id). 16.11.2026 */
(function(){
var TX={ru:{h:'Ваш проект готов <mark>к аудиту</mark>',sub:'Отметьте три пункта о проекте и три согласия.<br>После этого откроются кнопки.',
  ph:'Проект готов',p:['Описание собрано промптом с этой страницы','Это тот проект, который нужно проверить','Ключи, пароли и личные данные заменены на [СЕКРЕТ] и [ПДн]'],
  ch:'Согласия',cnote:'Ознакомьтесь с условиями аудита: в них правила оплаты, возврата и хранения данных.',
  c:[['Принимаю <a href="https://legal.arsysai.com/privacy" target="_blank" rel="noopener">политику конфиденциальности</a>'],['Даю <a href="https://legal.arsysai.com/consent-agentproof" target="_blank" rel="noopener">согласие на обработку персональных данных</a>'],['Прочитал(а) и принимаю <a href="terms.html" target="_blank" rel="noopener">условия аудита</a>, включая правила оплаты и возврата']],
  free:'Получить код бесплатно',pay:'Оплатить полный аудит',wait:'Отметьте все пункты, чтобы продолжить',
  note:'Обе кнопки ведут в бот @arsysai_bot: там выдаётся личный код.<br>После оплаты код приходит в течение 30 минут, отчёт готов в течение 30 минут после загрузки.',
  have:'Уже есть код',up:'Загрузить описание'},
 en:{h:'Your project is ready <mark>for the audit</mark>',sub:'Tick three points about the project and three consents.<br>Then the buttons open.',
  ph:'Project ready',p:['The description was built with the prompt on this page','This is the project that needs the check','Keys, passwords and personal data are replaced with [SECRET] and [PII]'],
  ch:'Consents',cnote:'Read the audit terms: they cover payment, refunds and data storage.',
  c:[['I accept the <a href="https://legal.arsysai.com/en#policy" target="_blank" rel="noopener">privacy policy</a>'],['I consent to <a href="https://legal.arsysai.com/en#consents" target="_blank" rel="noopener">personal data processing</a>'],['I have read and accept the <a href="terms.html?lang=en" target="_blank" rel="noopener">audit terms</a>, including payment and refunds']],
  free:'Get a free code',pay:'Pay for the full audit',wait:'Tick all points to continue',
  note:'Both buttons lead to @arsysai_bot, where your personal code is issued.<br>After payment the code arrives within 30 minutes, the report is ready within 30 minutes after upload.',
  have:'Already have a code',up:'Upload the description'}};
var ARW='<span class="arw"><svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>';
function L(){return document.documentElement.lang==='en'?'en':'ru'}
var box=document.getElementById('apStart');if(!box)return;var st={};
function paint(){var T=TX[L()],en=L()==='en';
 box.innerHTML='<h2>'+T.h+'</h2><p class="aps-sub">'+T.sub+'</p>'+
  '<div class="aps-cols"><div><h3>'+T.ph+'</h3>'+T.p.map(function(x,i){return row('p'+i,x)}).join('')+'</div>'+
  '<div><h3>'+T.ch+'</h3><p class="aps-cn">'+T.cnote+'</p>'+T.c.map(function(x,i){return row('c'+i,x[0])}).join('')+'</div></div>'+
  '<div class="aps-go"><a class="btn pri" data-aps href="https://t.me/arsysai_bot?start=ap_free'+'" target="_blank" rel="noopener"><span>'+T.free+'</span> '+ARW+'</a>'+
  '<a class="btn pri" data-aps href="https://t.me/arsysai_bot?start=ap_buy" target="_blank" rel="noopener"><span>'+T.pay+'</span> '+ARW+'</a></div>'+
  '<p class="aps-wait">'+T.wait+'</p><p class="aps-note">'+T.note+'</p><p class="aps-note">'+T.have+': <a href="index.html'+(en?'?lang=en':'')+'#new">'+T.up+'</a></p>';
 upd();}
function row(k,html){return '<label class="aps-row"><input type="checkbox" data-k="'+k+'"'+(st[k]?' checked':'')+'><span>'+html+'</span></label>'}
function upd(){var all=[].every.call(box.querySelectorAll('[data-k]'),function(c){return c.checked});
 box.querySelectorAll('[data-aps]').forEach(function(a){a.classList.toggle('is-off',!all);a.setAttribute('aria-disabled',all?'false':'true')});
 var w=box.querySelector('.aps-wait');if(w)w.style.visibility=all?'hidden':'visible';}
box.addEventListener('change',function(e){var c=e.target.closest('[data-k]');if(c){st[c.dataset.k]=c.checked;upd();}});
box.addEventListener('click',function(e){var a=e.target.closest('[data-aps]');if(a&&a.classList.contains('is-off')){e.preventDefault();var w=box.querySelector('.aps-wait');if(w){w.classList.remove('aps-shake');void w.offsetWidth;w.classList.add('aps-shake')}}});
new MutationObserver(paint).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
paint();
if(location.hash==='#start'){var go=function(){window.scrollTo({top:box.getBoundingClientRect().top+window.scrollY-80,behavior:'instant'})};window.addEventListener('load',function(){setTimeout(go,300);setTimeout(go,1200)})}
})();
