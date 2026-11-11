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
  function all(){paintStats();}
  new MutationObserver(function(){setTimeout(all,0)}).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
  if(LB)LB.addEventListener('click',function(){setTimeout(all,0)});
  all();
})();
