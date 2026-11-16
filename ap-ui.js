/* AgentProof · общие мелочи интерфейса для всех страниц. 10.11.2026
   1) переключатель языка показывает «RU / EN», активный язык ярче;
   2) на «Обзоре» цифры 72 · 6 · 16 выводятся отдельной строкой. */
(function(){
  var LB=document.querySelector('#langbtn,#langToggle,#lt');
  function lang(){return document.documentElement.lang==='en'?'en':'ru'}
  function paintLang(){if(!LB)return;var en=lang()==='en';LB.innerHTML='<span class="'+(en?'':'on')+'">RU</span>/<span class="'+(en?'on':'')+'">EN</span>';LB.setAttribute('aria-label',en?'Switch to Russian':'Переключить на английский');}
  function paintStats(){
    var f=document.querySelector('.hero .hfacts');if(!f)return;
    var box=document.querySelector('.hero .apstats');
    if(!box){box=document.createElement('div');box.className='apstats';var p=f.closest('p')||f;p.parentNode.insertBefore(box,p.nextSibling);}
    box.innerHTML=f.textContent.split('·').map(function(x){x=x.trim();var m=x.match(/^(\d+)\s+(.*)$/);return m?'<div><b>'+m[1]+'</b><span>'+m[2]+'</span></div>':'';}).join('');
  }
  function paintLogo(){var en=lang()==='en';document.querySelectorAll('[data-ap-cta]').forEach(function(e){e.textContent=en?'Check your system':'Проверить систему'});}
  // Оплата только после согласий: любая ссылка на Tribute открывает окно с тремя согласиями (16.11.2026)
  var PAY={ru:{h:'Прежде чем оплатить',sub:'Подтвердите три согласия.<br>Без них мы не можем принять заказ.',req:'обязательно',
     rows:[['Политика конфиденциальности','https://legal.arsysai.com/privacy'],['Обработка персональных данных','https://legal.arsysai.com/consent-agentproof'],['Соглашение и условия аудита','terms.html']],
     go:'Перейти к оплате',wait:'Отметьте обязательные пункты, чтобы перейти к оплате',note:'Оплата разово через Tribute.<br>После оплаты Architect Systems AI выдаст код доступа в Telegram.',close:'Закрыть',url:'https://t.me/tribute/app?startapp=pJp4'},
   en:{h:'Before you pay',sub:'Please confirm three consents.<br>We cannot accept the order without them.',req:'required',
     rows:[['Privacy Policy','https://legal.arsysai.com/en#policy'],['Personal data processing','https://legal.arsysai.com/en#consents'],['Audit agreement and terms','terms.html?lang=en']],
     go:'Go to payment',wait:'Tick the required boxes to go to payment',note:'One-time payment via Tribute.<br>After payment, Architect Systems AI issues the access code on Telegram.',close:'Close',url:'https://t.me/tribute/app?startapp=pJp7'}};
  function payOpen(){var T=PAY[lang()],m=document.getElementById('appay');if(m)m.remove();m=document.createElement('div');m.id='appay';m.className='appay';
    m.innerHTML='<div class="appay-box" role="dialog" aria-modal="true" aria-labelledby="appayH"><button type="button" class="appay-x" aria-label="'+T.close+'">×</button>'+
     '<h2 id="appayH">'+T.h+'</h2><p class="appay-sub">'+T.sub+'</p>'+
     T.rows.map(function(r,i){return '<label class="appay-row"><input type="checkbox" data-pc="'+i+'"><span><b>'+r[0]+'</b><small>'+T.req+'</small></span><a href="'+r[1]+'" target="_blank" rel="noopener" class="appay-i" aria-label="'+r[0]+'">i</a></label>'}).join('')+
     '<a class="btn pri appay-go is-off" href="'+T.url+'" target="_blank" rel="noopener" aria-disabled="true"><span>'+T.go+'</span> <span class="arw"><svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span></a>'+
     '<p class="appay-wait">'+T.wait+'</p><p class="appay-note">'+T.note+'</p></div>';
    document.body.appendChild(m);document.body.style.overflow='hidden';
    function upd(){var ok=[].every.call(m.querySelectorAll('[data-pc]'),function(c){return c.checked});var g=m.querySelector('.appay-go');g.classList.toggle('is-off',!ok);g.setAttribute('aria-disabled',ok?'false':'true');m.querySelector('.appay-wait').style.visibility=ok?'hidden':'visible';}
    m.addEventListener('change',upd);
    m.addEventListener('click',function(e){if(e.target===m||e.target.closest('.appay-x')){payClose();return}var g=e.target.closest('.appay-go');if(g&&g.classList.contains('is-off'))e.preventDefault();else if(g)setTimeout(payClose,300);});
    upd();m.querySelector('[data-pc]').focus();}
  function payClose(){var m=document.getElementById('appay');if(m)m.remove();document.body.style.overflow='';}
  document.addEventListener('click',function(e){var a=e.target.closest('a[href*="t.me/tribute"]');if(!a||a.closest('#appay'))return;e.preventDefault();payOpen();},true);
  document.addEventListener('keydown',function(e){if(e.key==='Escape')payClose();});
  function all(){paintStats();paintLogo();}
  new MutationObserver(function(){setTimeout(all,0)}).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
  if(LB)LB.addEventListener('click',function(){setTimeout(all,0)});
  all();
})();
