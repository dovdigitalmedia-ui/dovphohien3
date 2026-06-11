/* =====================================================================
   DOV PHỐ HIẾN — main.js (menu, hiệu ứng, form, image map)
   ===================================================================== */
(function(){
  "use strict";

  /* ===== LINK GOOGLE SHEET (Web App /exec) — dùng chung mọi form ===== */
  var SHEET_ENDPOINT = "https://script.google.com/macros/s/AKfycbyFlma-wQ1ISp3vdBOdOIbKaBt3ZHRVgkWbsM7Ncl_BwQy_lDg4JE1n8Q9HX8ZK6WfF/exec";

  /* ---------- Áp dụng IMAGE MAP: phần tử có data-img nhận src từ map ---------- */
  if (window.DOV_IMAGES) {
    document.querySelectorAll('[data-img]').forEach(function(el){
      var key = el.getAttribute('data-img');
      var src = window.DOV_IMAGES[key];
      if (!src) return;                     // không có ảnh -> giữ placeholder
      if (el.tagName === 'IMG') { el.src = src; el.style.display=''; }
      else { el.style.backgroundImage = 'url("' + src + '")'; }
      var ph = el.parentElement && el.parentElement.querySelector('.ph');
      if (ph && el.tagName === 'IMG') ph.style.display = 'none';
    });
  }

  /* ---------- Header đổi nền khi cuộn ---------- */
  var header = document.getElementById('header');
  if (header && !header.classList.contains('solid')) {
    var onScroll = function(){ header.classList.toggle('scrolled', window.scrollY > 40); };
    window.addEventListener('scroll', onScroll, {passive:true}); onScroll();
  }

  /* ---------- Menu mobile ---------- */
  var burger = document.getElementById('burger'),
      mm = document.getElementById('mobileMenu'),
      scrim = document.getElementById('scrim');
  function toggleMenu(open){
    if(!mm) return;
    burger.classList.toggle('open', open);
    mm.classList.toggle('open', open);
    scrim.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    document.body.style.overflow = open ? 'hidden' : '';
  }
  if (burger) burger.addEventListener('click', function(){ toggleMenu(!mm.classList.contains('open')); });
  if (scrim) scrim.addEventListener('click', function(){ toggleMenu(false); });
  if (mm) mm.querySelectorAll('a').forEach(function(a){ a.addEventListener('click', function(){ toggleMenu(false); }); });

  /* ---------- Reveal khi cuộn ---------- */
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function(es){
      es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
    }, {threshold:.12, rootMargin:'0px 0px -40px 0px'});
    document.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function(el){ el.classList.add('in'); });
  }

  /* ---------- Bộ lọc dự án (trang du-an) ---------- */
  var chips = document.querySelectorAll('.filterbar .chip');
  if (chips.length) {
    chips.forEach(function(c){
      c.addEventListener('click', function(){
        chips.forEach(function(x){ x.classList.remove('active'); });
        c.classList.add('active');
        var f = c.getAttribute('data-filter');
        document.querySelectorAll('[data-region]').forEach(function(card){
          card.style.display = (f === 'all' || card.getAttribute('data-region') === f) ? '' : 'none';
        });
      });
    });
  }

  /* ---------- Forms: validate + gửi Google Sheet (GET) ---------- */
  function validPhone(v){ var d=(v||'').replace(/\D/g,''); return /^0\d{9}$/.test(d)||/^84\d{9}$/.test(d); }
  function validEmail(v){ if(!v) return true; return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); }
  function sendToSheet(data){
    if(!SHEET_ENDPOINT) return Promise.resolve();
    var qs = new URLSearchParams();
    Object.keys(data).forEach(function(k){ qs.append(k, data[k]==null?'':data[k]); });
    var url = SHEET_ENDPOINT + (SHEET_ENDPOINT.indexOf('?')>=0?'&':'?') + qs.toString();
    return fetch(url, {method:'GET', mode:'no-cors'});
  }

  document.querySelectorAll('form[data-dov-form]').forEach(function(form){
    var success = form.parentElement.querySelector('.form-success');
    var btn = form.querySelector('button[type=submit]');
    function setErr(el,on){ var f=el.closest('.field'); if(f) f.classList.toggle('invalid',on); }
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var ok = true;
      form.querySelectorAll('[data-req]').forEach(function(el){
        var bad = !el.value || (el.id==='phone' && !validPhone(el.value)) || (el.type==='email' && !validEmail(el.value));
        setErr(el, bad); if(bad) ok=false;
      });
      var em = form.querySelector('input[type=email]');
      if (em && em.value && !validEmail(em.value)) { setErr(em,true); ok=false; }
      if(!ok){ var f=form.querySelector('.invalid input,.invalid select'); if(f) f.focus(); return; }

      var g = function(id){ var el=form.querySelector('#'+id); return el?el.value.trim():''; };
      var data = {
        hoten:g('name'), sdt:g('phone'), email:g('email'),
        vitri:g('position') || form.getAttribute('data-dov-form'),
        luong:g('salary'), khuvuc:g('region'), kinhnghiem:g('exp'), ghichu:g('note')
      };
      btn.disabled = true; var t = btn.textContent; btn.textContent = 'Đang gửi…';
      sendToSheet(data)['catch'](function(){}).then(function(){
        btn.disabled=false; btn.textContent=t;
        form.style.display='none';
        if(success){ success.classList.add('show'); success.scrollIntoView({behavior:'smooth',block:'center'}); }
      });
    });
    form.querySelectorAll('input,select,textarea').forEach(function(el){
      ['input','change'].forEach(function(ev){ el.addEventListener(ev, function(){ var f=el.closest('.field'); if(f) f.classList.remove('invalid'); }); });
    });
  });

  /* ---------- Đánh dấu menu trang hiện tại ---------- */
  var path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.menu a, .mobile-menu a').forEach(function(a){
    var href = a.getAttribute('href');
    if (href === path) a.classList.add('active');
  });
})();
