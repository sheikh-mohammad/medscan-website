(function(){
  var NAVBAR='<nav>'+
    '<button class="nav-mobile" aria-label="Menu" aria-expanded="false">☰</button>'+
    '<a class="logo" href=""><i>M</i>MED SCAN</a>'+
    '<div class="navr">'+
      '<a class="btn ghost" data-nav="home">Home</a>'+
      '<a class="btn ghost" data-nav="how">How it works</a>'+
      '<a class="btn ghost" data-nav="features">Features</a>'+
      '<a class="btn ghost" data-nav="medicines">Medicines</a>'+
      '<a class="btn ghost" data-nav="reminder">Reminders</a>'+
      '<a class="btn ghost" data-nav="dashboard">Dashboard</a>'+
      '<div class="nav-dropdown">'+
        '<button class="btn ghost nav-dropdown-btn">More ▾</button>'+
        '<div class="nav-dropdown-menu">'+
          '<a class="btn ghost" data-nav="add">Add Prescription</a>'+
          '<a class="btn ghost" data-nav="history">History</a>'+
          '<a class="btn ghost" data-nav="profile">Profile</a>'+
          '<a class="btn ghost" data-nav="settings">Settings</a>'+
          '<a class="btn ghost" data-nav="download">Download</a>'+
        '</div>'+
      '</div>'+
      '<div class="tg" role="group" aria-label="Language">'+
        '<button data-l="en" aria-pressed="true">EN</button>'+
        '<button data-l="ur" aria-pressed="false">اردو</button>'+
        '<button data-l="ru" aria-pressed="false">RU</button>'+
      '</div>'+
      '<a class="btn" href="download.html" data-i="nav">Get the app</a>'+
    '</div>'+
  '</nav>';
  var U={"nav": "ایپ حاصل کریں", "how": "دیکھیں کیسے کام کرتا ہے", "h1": "آپ کا نسخہ، اب <em>آسان۔</em> آپ کی خوراک، اب کبھی نہ چھوٹے۔", "lead": "ڈاکٹر کی لکھائی کی تصویر کھینچیں۔ MED SCAN اسے پڑھتا ہے، 1+0+1 اور TDS سمجھاتا ہے، اور ہر خوراک سے پہلے یاد دلاتا ہے۔", "ht": "ڈاکٹر کی لکھائی سے روزانہ کے شیڈول تک، صرف تین ٹیپ میں۔", "sn1": "مرحلہ 1", "st1": "تصویر لیں", "sp1": "تصویر کھینچیں یا گیلری سے چنیں۔ تصویر کو ہم خود صاف کر دیتے ہیں۔", "sn2": "مرحلہ 2", "st2": "جانچیں", "sp2": "جو لفظ واضح نہ ہو اسے نشان زد کر دیا جاتا ہے۔ آگے بڑھنے سے پہلے درست کریں، تصدیق کریں یا ہٹا دیں۔", "sn3": "مرحلہ 3", "st3": "کبھی نہ بھولیں", "sp3": "ہر خوراک کا الارم، بالکل اتنے دن جتنے نسخے میں لکھے ہوں۔", "bt": "اے آئی پڑھتا ہے، فیصلہ حقائق کرتے ہیں۔", "bs": "غلط دوا کوئی چھوٹی غلطی نہیں۔ اسی لیے آخری فیصلہ اے آئی کے ہاتھ میں نہیں۔", "c1": "تصویر", "c2": "صفائی", "c3": "اے آئی پڑھتا ہے", "c4": "قواعد سمجھتے ہیں", "c5": "ڈیٹابیس سے ملان", "c6": "آپ کی تصدیق", "g1t": "خوراک کے اصول", "g1p": "1+0+1، BD، TDS، HS، SOS کے معنی ہمیشہ ایک ہی رہتے ہیں۔ کوئی اندازہ نہیں۔", "g2t": "صرف اصل ادویات", "g2p": "ہر نام تصدیق شدہ فہرست میں ہونا ضروری ہے۔ غلط پڑھا گیا نام یا درست ملتا ہے یا “پہچانا نہیں گیا” آتا ہے۔", "g3t": "شک ہو تو نشان", "g3p": "ریمائندر تب تک شروع نہیں ہوتے جب تک ہر نشان زد دوا کی جانچ، درستگی یا حذف نہ ہو۔", "lt": "ڈاکٹر کی مخفف زبان، آپ کی اپنی زبان میں۔", "ls": "ایک ہی شیڈول انگریزی، رومن اردو یا اردو میں۔ ٹیمپلیٹس سے بنتا ہے، اس لیے الفاظ ہمیشہ ریمائندرز سے مطابقت رکھتے ہیں۔", "tt": "جانیں کیا لیا، پکڑیں جو رہ گیا۔", "ts": "ہر خوراک پر “لی” یا “چھوڑی” دبائیں۔ آج کی خوراکیں، رہ جانے والی، مسلسل دن اور سات دن کی تاریخ دیکھیں۔ آپ کا ریکارڈ آپ کے فون سے باہر نہیں جاتا۔", "x1": "اس ہفتے لی گئیں", "x2": "دن مسلسل", "x3": "خوراکیں باقی", "ft": "کھینچیں، طے کریں، کوئی خوراک نہ چھوڑیں۔", "fn": "MED SCAN ایک پڑھنے میں مدد کا ذریعہ ہے۔ دوا کی تصدیق ہمیشہ اپنے فارماسسٹ یا ڈاکٹر سے کریں۔", "fb": "FastAPI، LangGraph، Gemini اور Flutter سے تیار","md": "تصدیق شدہ ادویات کا ڈیٹا بیس","ms": "یاد دہانہ سیٹ کرنے سے پہلے ہر نام تصدیق شدہ فہرست سے چیک کیا جاتا ہے۔","splaceholder": "دوا تلاش کریں…","verified": "تصدیق شدہ","today": "آج کی خوراکیں","taken": "لی لی","skip": "چھوڑ دی","tk": "آج لی گئیں","sk": "آج چھوڑی گئیں","lf": "باقی خوراکیں","ab": "MED SCAN کے بارے میں","ad": "ایک پڑھنے میں مدد کا ذریعہ جو ڈاکٹر کی لکھائی کو صاف، محفوظ دوا کے شیڈول میں تبدیل کرتا ہے۔ انگریزی، رومن اردو یا اردو میں دستیاب ہے۔","rs": "لکھائی پڑھیں","rsd": "کسی بھی نسخے کی تصویر کھینچیں۔ MED SCAN تصویر کو صاف کرتا ہے اور دوا کے نام اور خوراک کے کوڈ پڑھتا ہے۔","dc": "خوراک سمجھیں","dcd": "1+0+1، BD، TDS، HS، SOS سادے زہان میں سمجھائے گئے ہیں۔ کوئی اندازہ نہیں، کوئی غلط فرض نہیں۔","ys": "آپ کا شیڈول","ysd": "یاد دہانیاں آپ کے نسخے سے مطابقت رکھتی ہیں، بالکل اتنے دن کے لیے جتنے ڈاکٹر نے لکھے۔","ml": "آپ کی زبان","mld": "انگریزی، رومن اردو یا اردو میں سے ایک ٹیب سے منتخب کریں۔ شیڈول کا متن ہر زبان میں یکساں رہتا ہے۔","dn": "ضروری نوٹس","dnd": "MED SCAN ایک پڑھنے میں مدد کا ذریعہ ہے، طبی تشخیص نہیں۔ کچھ بھی لینے سے پہلے ہمیشہ اپنے فارماسسٹ یا ڈاکٹر سے دوا اور خوراک کی تصدیق کریں۔ آپ کا ریکارڈ آپ کے فون پر ہی رہتا ہے، ہم اسے شیئر نہیں کرتے۔","db": "ڈیش بورڈ","ds": "آپ کا دوا کا شیڈول ایک نظر میں","tkd": "خوراکیں لی گئیں","skd": "چھوڑی گئی خوراکیں","std": "دنوں کیلسٹیک","upc": "آگئندہ خوراکیں","pn": "صارف کا پروفائل","pd": "اپنا اکاؤنٹ اور ترجیحات سنبھالیں","name": "نام","email": "ای میل","phone": "فون","lang": "زبان","len": "انگریزی","lur": "اردو","lru": "رومن اردو","sett": "تنصیبات","rem": "یاد دہانیاں","remd": "ہر خوراک سے پہلے اطلاع پانے","noti": "نوٹیفیکیشنز","notid": "فوت دوا کے لیے پوش اطلاع","dark": "ڈارک موڈ","darkd": "ڈارک تھیم پر سوئچ کریں","langd": "ایپ کی دکھائنے والی زبان","priv": "پرائیویسی","privd": "آپ کا لنک آپ کے فون پر رہتا ہے","ap": "نسخہ شامل کریں","apd": "اپنے نسخے کی تصویر اپ لوڈ کریں یا ہاتھ سے تفصیل درج کریں","up": "نسخے کی تصویر اپ لوڈ کریں","med": "دوا کا نام","mph": "مثالاًپیراسیٹامول","mhd": "نسخے پر لکھا ہوا نام","dose": "خوراک","dph": "مثالاً 1+0+1","dhd": "1+0+1، BD، TDS، HS، SOS","when": "وقت","tph": "ہر خوراک کب لینی ہے","days": "دن","daph": "5","dahd": "kitne din tak jari rakhna hai","add": "دوا شامل کریں","ok": "لی گئیں","hs": "خوراک کی تاریخ"},R={"nav": "App hasil karein", "how": "Dekhein kaise kaam karta hai", "h1": "Aap ka nuskha, ab <em>aasan.</em> Aap ki khurak, ab kabhi na chootein.", "lead": "Doctor ki likhai ki tasveer khenchein. MED SCAN use parhta hai, 1+0+1 aur TDS samjhata hai, aur har khurak se pehle yaad dilata hai.", "ht": "Doctor ki likhai se rozana ke schedule tak, sirf teen tap mein.", "sn1": "Marhala 1", "st1": "Tasveer lein", "sp1": "Tasveer khenchein ya gallery se chunein. Tasveer ko hum khud saaf kar dete hain.", "sn2": "Marhala 2", "st2": "Jaachein", "sp2": "Jo lafz wazeh na ho use nishan zard kar diya jata hai. Aage badhne se be durust karein, tasdiq karein ya hata dein.", "sn3": "Marhala 3", "st3": "Kabhi na bhulein", "sp3": "Har khurak ka alarm, bilkul utne din jitne nuskha mein likhe hon.", "bt": "AI parhta hai, faisla haqeeqat karte hain.", "bs": "Galt dawa koi chhoti galti nahi. Isi liye aakhri faisla AI ke haath mein nahi.", "c1": "Tasveer", "c2": "Safai", "c3": "AI parhta hai", "c4": "Qawaid samajhte hain", "c5": "Database se milan", "c6": "Aap ki tasdiq", "g1t": "Khurak ke usool", "g1p": "1+0+1, BD, TDS, HS, SOS ke maani hamesha ek hi rehte hain. Koi andaaza nahi.", "g2t": "Sirf asli adwiyat", "g2p": "Har naam tasdiq shuda fehrist mein hona zaroori hai. Galt parha gaya naam ya durust milta hai ya “pehchana nahi gaya” aata hai.", "g3t": "Shak ho to nishan", "g3p": "Remainder tab tak shuru nahi hote jab tak har nishan zada dawa ki jaanch, durusti ya hazf na ho.", "lt": "Doctor ki mukhaffaf zaban, aap ki apni zaban mein.", "ls": "Ek hi schedule Angrezi, Roman Urdu ya Urdu mein. Templates se banta hai, is liye alfaz hamesha remainder se mutabiqat rakhte hain.", "tt": "Jaaniye kya liya, pakrein jo reh gaya.", "ts": "Har khurak par “Li” ya “Chhori” dabayein. Aaj ki khurakain, reh jaane wali, musalsal din aur saat din ki tareekh dekhein. Aap ka record aap ke phone se bahar nahi jata.", "x1": "Is haftay li gayein", "x2": "Din musalsal", "x3": "Khurakain baqi", "ft": "Khenchein, taye karein, koi khurak na choorein.", "fn": "MED SCAN ek parhne mein madad ka zariya hai. Dawa ki tasdiq hamesha apne pharmacist ya doctor se karein.", "fb": "FastAPI, LangGraph, Gemini aur Flutter se tayar","md": "Verified Medicines Database","ms": "Reminder set karne se pehle har naam verified fehrist se cross-check kiya jata hai.","splaceholder": "Dawa talash karein…","verified": "Verified","today": "Aaj ki khurakain","taken": "Li li","skip": "Chhor di","tk": "Aaj li gayein","sk": "Aaj chhori gayein","lf": "Baqi khurakain","ab": "MED SCAN ke baare mein","ad": "Ek parhne mein madad ka zariya jo doctor ki likhai ko saaf, mehfooz dawai ke schedule mein badal deta hai. Angrezi, Roman Urdu ya Urdu mein.","rs": "Likhari parhein","rsd": "Kisi bhi nuskhe ki tasveer khenchein. MED SCAN tasveer ko saaf karta hai aur dawa ke naam aur khurak ke codes parhta hai.","dc": "Khurak samjhein","dcd": "1+0+1, BD, TDS, HS, SOS saadhe zahan mein samjhaye gaye hain. Koi andaaza nahi, koi galt farz nahi.","ys": "Aap ka schedule","ysd": "Remainder aap ke nuskhe se mutabiqat rakhte hain, bilkul utne din ke liye jitne doctor ne likhe.","ml": "Aap ki zaban","mld": "Angrezi, Roman Urdu ya Urdu mein se ek tap se muntakhib karein. Schedule ka matn har zaban mein yaksaan rehta hai.","dn": "Zaroori notice","dnd": "MED SCAN ek parhne mein madad ka zariya hai, tibbi tashkhees nahi. Kuch bhi lene se pehle hamesha apne pharmacist ya doctor se dawa aur khurak ki tasdiq karein. Aap ka record aap ke phone par hi rehta hai, hum ise share nahi karte.","db": "Dashboard","ds": "Your medicine schedule at a glance.","tkd": "doses marked taken","skd": "doses skipped","std": "day streak","upc": "Upcoming doses","pn": "User Profile","pd": "Manage your account and preferences.","name": "Name","email": "Email","phone": "Phone","lang": "Language","len": "English","lur": "Urdu","lru": "Roman Urdu","sett": "Settings","rem": "Reminders","remd": "Get notified before every dose","noti": "Notifications","notid": "Push alerts for missed doses","dark": "Dark mode","darkd": "Switch to dark theme","langd": "App display language","priv": "Privacy","privd": "Your log stays on your phone","ap": "Add Prescription","apd": "Upload a photo of your prescription or enter details manually.","up": "Upload prescription photo","med": "Medicine name","mph": "e.g. Paracetamol","mhd": "As written on the prescription","dose": "Dose","dph": "e.g. 1+0+1","dhd": "1+0+1, BD, TDS, HS, SOS","when": "Time","tph": "When to take each dose","days": "Days","daph": "5","dahd": "How many days to continue","add": "Add medicine","ok": "Taken","hs": "Dose History"},E={},L='en';
  document.querySelectorAll('[data-i]').forEach(function(e){E[e.dataset.i]=e.innerHTML});
  var T={en:'MED SCAN – Your prescription, decoded',ur:'MED SCAN – آپ کا نسخہ، اب آسان',ru:'MED SCAN – Aap ka nuskha, ab aasan'};
  function injectNavbar(){
    var ph=document.getElementById('navbar-placeholder');
    if(!ph)return;
    ph.innerHTML=NAVBAR;
    var loc=window.location.pathname;
    var inPages=loc.indexOf('/pages/')!==-1;
    var logo=ph.querySelector('.logo');
    if(logo)logo.href=inPages?'../index.html':'index.html';
    ph.querySelectorAll('.navr a.btn.ghost[data-nav]').forEach(function(a){
      var href=a.getAttribute('href')||'';
      var key=a.dataset.nav;
      var active=false;
      if(key==='home'){active=loc.endsWith('index.html')||loc.endsWith('/')||loc.indexOf('index.html')!==-1;}
      else if(inPages){active=href&&loc.indexOf(href)!==-1;}
      else{active=href&&loc.indexOf(href)!==-1;}
      if(active)a.classList.add('active');
    });
    ph.querySelectorAll('.tg button').forEach(function(b){
      b.addEventListener('click',function(){set(b.dataset.l);});
    });
    var mob=ph.querySelector('.nav-mobile');
    var navr=ph.querySelector('.navr');
    if(mob&&navr){
      mob.addEventListener('click',function(){
        var open=mob.getAttribute('aria-expanded')==='true';
        mob.setAttribute('aria-expanded',String(!open));
        navr.classList.toggle('open');
        navr.style.display=open?'none':'flex';
      });
      ph.querySelectorAll('.navr a').forEach(function(a){
        a.addEventListener('click',function(){
          if(window.innerWidth<=860){navr.style.display='none';mob.setAttribute('aria-expanded','false');}
        });
      });
    }
  }
  function set(l){L=l;var d=l==='ur'?U:l==='ru'?R:E;document.querySelectorAll('[data-i]').forEach(function(e){e.innerHTML=d[e.dataset.i];});var h=document.documentElement;h.lang=l;h.dir=l==='ur'?'rtl':'ltr';document.title=T[l];document.querySelectorAll('.tg button').forEach(function(b){b.setAttribute('aria-pressed',b.dataset.l===l);});try{localStorage.setItem('ms-lang',l)}catch(e){}}
  window.__msSetLang=set;
  injectNavbar();
  document.querySelectorAll('[data-i]').forEach(function(e){E[e.dataset.i]=e.innerHTML});
  var s=null;try{s=localStorage.getItem('ms-lang')}catch(e){}
  if(s==='ur')set('ur');else if(s==='ru')set('ru');
  window.addEventListener('resize',function(){
    var navr=document.querySelector('.navr');
    var mob=document.querySelector('.nav-mobile');
    if(navr&&mob&&window.innerWidth>860){navr.style.display='';mob.setAttribute('aria-expanded','false');}
  });
})();
