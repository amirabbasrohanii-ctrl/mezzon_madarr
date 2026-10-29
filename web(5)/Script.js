function svgImg(bg, em, tx){
var s = "<svg xmlns='http://www.w3.org/2000/svg' width='600' height='750'><rect width='600' height='750' fill='"+bg+"'/><text x='300' y='360' font-size='150' text-anchor='middle'>"+em+"</text><text x='300' y='530' font-size='42' text-anchor='middle' fill='#222' font-family='Tahoma'>"+tx+"</text></svg>";
return 'data:image/svg+xml;charset=utf-8,'+encodeURIComponent(s);
}
var defaults=[
{id:1,name:"مانتو کتی مشکی مزونی",price:1250000,old:1490000,cat:"مانتو",stock:10,img:svgImg('#ffe9d6','🧥','مانتو'),desc:"کرپ درجه‌یک، قد دلخواه، سایز ۳۶ تا ۴۸"},
{id:2,name:"مانتو عبایی کرم",price:1180000,old:0,cat:"مانتو",stock:8,img:svgImg('#fff3e0','🧥','مانتو'),desc:"نخی خنک، مدل آزاد مزونی"},
{id:3,name:"عبا مجلسی کرپ",price:1650000,old:1890000,cat:"عبا",stock:7,img:svgImg('#ede7f6','🧕','عبا'),desc:"کرپ مجلسی، قد ۱۴۰ تا ۱۵۵"},
{id:4,name:"عبا روزمره نخی",price:980000,old:0,cat:"عبا",stock:12,img:svgImg('#e0f7fa','🧕','عبا'),desc:"نخی سبک، مناسب استفاده روزانه"},
{id:5,name:"شومیز سفید مجلسی",price:640000,old:780000,cat:"شومیز",stock:15,img:svgImg('#e3f2fd','👚','شومیز'),desc:"نخ و کرپ، تمیز و خوش‌دوخت"},
{id:6,name:"شومیز کتان راه‌راه",price:590000,old:0,cat:"شومیز",stock:14,img:svgImg('#f3e5f5','👚','شومیز'),desc:"کتان، سایز ۳۶ تا ۴۶"}
];
var defaultSections=[
{id:1,title:"شرایط دوخت سفارشی ✂️",text:"قد، سایز و مدل دلخواه را در توضیحات سفارش بنویس. بعد از ثبت سفارش برای اندازه‌گیری دقیق تماس می‌گیریم.\nزمان آماده‌سازی ۵ تا ۱۰ روز کاری است."},
{id:2,title:"درباره مزون مادر 🌷",text:"ما فقط مانتو، عبا و شومیز می‌دوزیم. پارچه باکیفیت، الگوی اختصاصی و دوخت تمیز مزونی تفاوت کار ماست."}
];
var defaultSettings={name:"مزون مادر",logo:"🌷",topbar:"مزون مادر | تخصص دوخت مانتو، عبا و شومیز | ارسال به سراسر کشور",heroBadge:"مزون مادر | مانتو • عبا • شومیز",title:"دوخت مزونی مانتو، عبا و شومیز",sub:"ما فقط مانتو، عبا و شومیز می‌دوزیم؛ با اندازه و مدل دلخواه شما، تمیز و مزونی.",emoji1:"🧥",emoji2:"🧕",float:"دوخت اختصاصی مزون مادر ✂️",howTitle:"🧾 نحوه سفارش از مزون مادر",s1t:"انتخاب مدل",s1d:"مانتو، عبا یا شومیز را به سبد اضافه کن",s2t:"ثبت مشخصات",s2d:"نام، موبایل و آدرس را وارد کن",s3t:"هماهنگی دوخت",s3d:"مدیر برای اندازه و مدل دقیق تماس می‌گیرد",f1i:"🧥",f1t:"مانتو مزونی",f1d:"دوخت تمیز با الگوی اختصاصی",f2i:"🧕",f2t:"عبای مجلسی و روزمره",f2d:"کرپ، نخی و حریر با قد دلخواه",f3i:"👚",f3t:"شومیز",f3d:"مجلسی و روزمره با سایز دقیق",f4i:"✂️",f4t:"دوخت سفارشی",f4d:"فقط مانتو، عبا و شومیز می‌دوزیم",footerAbout:"تخصص ما فقط دوخت مانتو، عبا و شومیز است.",address:"",phone:"",insta:"",cardOwner:"",cardNumber:"",bank:"",payTitle:"💳 پرداخت کارت‌به‌کارت",payDesc:"مبلغ سفارش را به کارت فروشگاه واریز کن و کد پیگیری رسید را در فرم سفارش بنویس.",supTitle:"📞 پشتیبانی مزون مادر",supText:"برای سایز، مدل، زمان آماده‌سازی یا پیگیری سفارش پیام بده.",supPhone:"",supTime:"شنبه تا پنجشنبه ۱۰ تا ۱۸",theme:"#c2185b"};
function loadKey(k, olds){
try{var v=JSON.parse(localStorage.getItem(k)||"null");if(v)return v;}catch(e){}
if(olds){for(var i=0;i<olds.length;i++){try{var v2=JSON.parse(localStorage.getItem(olds[i])||"null");if(v2)return v2;}catch(e){}}}
return null;
}
var products=loadKey("madar_products_v7",["madar_products_v6","madar_products_v5","madar_products_v4"])||defaults.slice(0);
var st=loadKey("madar_settings_v7",["madar_settings_v6","madar_settings_v5","madar_settings_v4"]);
var settings={}; for(var k in defaultSettings){settings[k]=defaultSettings[k];} if(st){for(var k2 in st){settings[k2]=st[k2];}}
var sections=loadKey("madar_sections_v7",["madar_sections_v6","madar_sections_v5"])||defaultSections.slice(0);
var cart=loadKey("madar_cart_v7",["madar_cart_v6","madar_cart_v5"])||[];
var orders=loadKey("madar_orders_v7",["madar_orders_v6","madar_orders_v5"])||[];
var curCat="all"; var tempImageData=""; var liveOn=false;
function $(id){return document.getElementById(id);}
function fa(n){try{return Number(n||0).toLocaleString("fa-IR")+" تومان";}catch(e){return n+" تومان";}}
function faNum(n){try{return Number(n||0).toLocaleString("fa-IR");}catch(e){return n;}}
function save(){try{localStorage.setItem("madar_products_v7",JSON.stringify(products));localStorage.setItem("madar_cart_v7",JSON.stringify(cart));localStorage.setItem("madar_settings_v7",JSON.stringify(settings));localStorage.setItem("madar_orders_v7",JSON.stringify(orders));localStorage.setItem("madar_sections_v7",JSON.stringify(sections));}catch(e){toast("حافظه پر شد!");}}
function toast(m){var t=$("toast");t.textContent=m;t.style.display="block";setTimeout(function(){t.style.display="none";},2600);}
function fmtCard(num){num=(num||"").replace(/\D/g,"");return num.replace(/(.{4})/g,"$1 ").trim();}
function applySettings(){
document.documentElement.style.setProperty('--pink', settings.theme||'#c2185b');
$("topbar").textContent=settings.topbar;
$("storeName").textContent=settings.name||"مزون مادر";
$("logoIcon").textContent=settings.logo||"🌷";
$("heroBadge").textContent=settings.heroBadge;
$("heroTitle").textContent=settings.title;
$("heroSubtitle").textContent=settings.sub;
$("heroEmoji1").textContent=settings.emoji1;
$("heroEmoji2").textContent=settings.emoji2;
$("heroFloat").textContent=settings.float;
$("footerName").textContent=settings.name||"مزون مادر";
$("footerAbout").textContent=settings.footerAbout;
$("howTitle").textContent=settings.howTitle;
$("step1t").textContent=settings.s1t;$("step1d").textContent=settings.s1d;
$("step2t").textContent=settings.s2t;$("step2d").textContent=settings.s2d;
$("step3t").textContent=settings.s3t;$("step3d").textContent=settings.s3d;
$("feat1i").textContent=settings.f1i;$("feat1t").textContent=settings.f1t;$("feat1d").textContent=settings.f1d;
$("feat2i").textContent=settings.f2i;$("feat2t").textContent=settings.f2t;$("feat2d").textContent=settings.f2d;
$("feat3i").textContent=settings.f3i;$("feat3t").textContent=settings.f3t;$("feat3d").textContent=settings.f3d;
$("feat4i").textContent=settings.f4i;$("feat4t").textContent=settings.f4t;$("feat4d").textContent=settings.f4d;
$("fAddress").textContent=settings.address||"ثبت نشده";
$("fPhone").textContent=settings.phone||"ثبت نشده";
$("fInsta").textContent=settings.insta||"ثبت نشده";
$("payTitle").textContent=settings.payTitle;
$("payDesc").textContent=settings.payDesc;
$("supTitle").textContent=settings.supTitle;
$("supText").textContent=settings.supText;
$("supPhone").textContent=settings.supPhone||"ثبت نشده";
$("supTime").textContent=settings.supTime||"";
$("supInstaShow").textContent=settings.insta||"ثبت نشده";
document.title=(settings.name||"مزون مادر")+" | مانتو، عبا و شومیز";
var hasCard=(settings.cardNumber||"").replace(/\D/g,"").length>=12;
$("pubCardNumber").textContent=hasCard?fmtCard(settings.cardNumber):"هنوز ثبت نشده - از مدیریت وارد کن";
$("pubCardOwner").textContent=settings.cardOwner||"ثبت نشده";
$("pubBank").textContent=settings.bank||"ثبت نشده";
var map={sTopbar:"topbar",sName:"name",sLogo:"logo",sHeroBadge:"heroBadge",sTitle:"title",sSub:"sub",sEmoji1:"emoji1",sEmoji2:"emoji2",sFloat:"float",sHowTitle:"howTitle",sS1t:"s1t",sS1d:"s1d",sS2t:"s2t",sS2d:"s2d",sS3t:"s3t",sS3d:"s3d",sF1i:"f1i",sF1t:"f1t",sF1d:"f1d",sF2i:"f2i",sF2t:"f2t",sF2d:"f2d",sF3i:"f3i",sF3t:"f3t",sF3d:"f3d",sF4i:"f4i",sF4t:"f4t",sF4d:"f4d",sFooterAbout:"footerAbout",sAddress:"address",sPhone:"phone",sInsta:"insta",sCardOwner:"cardOwner",sCardNumber:"cardNumber",sBank:"bank",sPayTitle:"payTitle",sPayDesc:"payDesc",sSupTitle:"supTitle",sSupText:"supText",sSupPhone:"supPhone",sSupTime:"supTime"};
for(var id in map){if($(id))$(id).value=settings[map[id]]||"";}
if($("sTheme"))$("sTheme").value=settings.theme||"#c2185b";
if(settings.cardNumber){$("adminCardView").innerHTML="کارت فعلی فروشگاه: <b style='direction:ltr;display:inline-block'>"+fmtCard(settings.cardNumber)+"</b><br>به نام: "+(settings.cardOwner||"")+" | "+(settings.bank||"");}
else{$("adminCardView").innerHTML="هنوز شماره کارت فروشگاه ثبت نشده.";}
}
function render(){
var q=($("searchInput").value||"").trim();
var list=products.filter(function(p){return (curCat==="all"||p.cat===curCat)&&(!q||p.name.indexOf(q)>-1);});
$("count").textContent="("+faNum(list.length)+" مدل)";
var html="";
list.forEach(function(p){
var off=p.old&&p.old>p.price?Math.round((1-p.price/p.old)*100):0;
html+="<div class='card'>"+(off?"<span class='off'>٪"+faNum(off)+" تخفیف</span>":"")+"<img src='"+p.img+"' alt='"+p.name+"' loading='lazy'><div class='card-body'><span class='card-cat'>"+p.cat+"</span><h3>"+p.name+"</h3><div style='font-size:12px;color:#888'>"+(p.desc||"")+" | موجودی: "+faNum(p.stock)+"</div><div class='price'>"+fa(p.price)+(p.old?"<span class='old'>"+fa(p.old)+"</span>":"")+"</div><div class='card-btns'><button class='add' onclick='addCart("+p.id+")'>افزودن به سبد 🛍️</button><button class='edit' onclick='editProduct("+p.id+")'>✏️</button><button class='del' onclick='delProduct("+p.id+")'>🗑️</button></div></div></div>";
});
$("productsGrid").innerHTML=html||"<p>مدلی نیست. از مدیریت اضافه کن.</p>";
renderAdminList();renderCart();renderBadge();renderSections();renderSectionsAdmin();
}
function renderSections(){
if(!sections.length){$("customSectionsWrap").innerHTML="";return;}
$("customSectionsWrap").innerHTML=sections.map(function(s){
return "<div class='custom-card'><h3>"+s.title+"</h3><p>"+s.text+"</p></div>";
}).join("");
}
function renderSectionsAdmin(){
$("sectionsAdminList").innerHTML=sections.map(function(s){
var short=s.text.length>80?s.text.slice(0,80)+"...":s.text;
return "<div class='sec-admin-row'><b>"+s.title+"</b><div style='font-size:12px;color:#666;margin:6px 0'>"+short+"</div><div><button class='small-btn' onclick='editSection("+s.id+")'>✏️ ویرایش</button> <button class='small-btn del' onclick='delSection("+s.id+")'>🗑️ حذف</button></div></div>";
}).join("")||"<p style='color:#888'>بخشی نیست.</p>";
}
function newSectionForm(){$("sectionForm").classList.remove("hidden");$("secId").value="";$("secTitle").value="";$("secText").value="";openAdmin();switchTab(4);}
function editSection(id){var s=null;for(var i=0;i<sections.length;i++){if(sections[i].id===id)s=sections[i];}if(!s)return;openAdmin();switchTab(4);$("sectionForm").classList.remove("hidden");$("secId").value=s.id;$("secTitle").value=s.title;$("secText").value=s.text;}
function delSection(id){if(!confirm("این بخش حذف شود؟"))return;sections=sections.filter(function(x){return x.id!==id;});save();renderSections();renderSectionsAdmin();}
$("sectionForm").onsubmit=function(e){e.preventDefault();var id=$("secId").value?Number($("secId").value):Date.now();var obj={id:id,title:$("secTitle").value,text:$("secText").value};var f=-1;for(var i=0;i<sections.length;i++){if(sections[i].id===id)f=i;}if(f>=0)sections[f]=obj;else sections.push(obj);save();renderSections();renderSectionsAdmin();$("sectionForm").classList.add("hidden");toast("بخش ذخیره شد ✅");};
function renderBadge(){
var news=orders.filter(function(o){return o.status==="جدید";}).length;
if(news>0){$("orderBadge").classList.remove("hidden");$("orderBadge").textContent=faNum(news);$("tabBadge").textContent="("+faNum(news)+" جدید)";}else{$("orderBadge").classList.add("hidden");$("tabBadge").textContent="";}
}
function renderAdminList(){
$("adminList").innerHTML=products.map(function(p){
return "<div class='admin-row'><span style='display:flex;align-items:center;gap:8px'><img class='admin-thumb' src='"+p.img+"'><span>"+p.name+" — "+fa(p.price)+"</span></span><span><button onclick='editProduct("+p.id+")'>✏️</button> <button onclick='delProduct("+p.id+")'>🗑️</button></span></div>";
}).join("");
}
function addCart(id){var c=null;for(var i=0;i<cart.length;i++){if(cart[i].id===id)c=cart[i];}if(c)c.n++;else cart.push({id:id,n:1});save();renderCart();toast("به سبد اضافه شد ✅");}
function renderCart(){
var sum=0,n=0,html="";
cart.forEach(function(c){
var p=null;for(var i=0;i<products.length;i++){if(products[i].id===c.id)p=products[i];}
if(!p)return;sum+=p.price*c.n;n+=c.n;
html+="<div class='cart-row'><img src='"+p.img+"'><div style='flex:1'><b style='font-size:13px'>"+p.name+"</b><div style='font-size:12px'>"+fa(p.price)+" × "+faNum(c.n)+"</div></div><button onclick='chCart("+p.id+",1)'>+</button> <button onclick='chCart("+p.id+",-1)'>−</button></div>";
});
$("cartItems").innerHTML=html||"<p style='text-align:center;color:#999'>سبد خالی است 🛒</p>";
$("cartTotal").textContent=fa(sum);
$("cartCount").textContent=faNum(n);
}
function chCart(id,d){for(var i=0;i<cart.length;i++){if(cart[i].id===id){cart[i].n+=d;if(cart[i].n<=0)cart.splice(i,1);break;}}save();renderCart();}
function toggleCart(open){$("cartDrawer").classList.toggle("open",open);}
$("cartBtn").onclick=function(){toggleCart(true);};
function openAdmin(){$("adminModal").classList.add("show");renderOrders();renderSectionsAdmin();}
function closeAdmin(){if(liveOn)toggleLiveEdit();$("adminModal").classList.remove("show");}
$("adminBtn").onclick=openAdmin;
function switchTab(n){$("panel1").classList.toggle("hidden",n!==1);$("panel2").classList.toggle("hidden",n!==2);$("panel3").classList.toggle("hidden",n!==3);$("panel4").classList.toggle("hidden",n!==4);$("tab1").classList.toggle("active",n===1);$("tab2").classList.toggle("active",n===2);$("tab3").classList.toggle("active",n===3);$("tab4").classList.toggle("active",n===4);if(n===2)renderOrders();if(n===4)renderSectionsAdmin();}
function newProduct(){$("productForm").classList.remove("hidden");$("pId").value="";$("pName").value="";$("pPrice").value="";$("pOld").value="";$("pStock").value="10";$("pDesc").value="";$("pImageFile").value="";tempImageData="";$("pPreview").style.display="none";openAdmin();switchTab(1);}
function editProduct(id){var p=null;for(var i=0;i<products.length;i++){if(products[i].id===id)p=products[i];}if(!p)return;openAdmin();switchTab(1);$("productForm").classList.remove("hidden");$("pId").value=p.id;$("pName").value=p.name;$("pPrice").value=p.price;$("pOld").value=p.old||"";$("pCat").value=p.cat;$("pStock").value=p.stock;$("pDesc").value=p.desc||"";tempImageData=p.img;$("pPreview").src=p.img;$("pPreview").style.display="block";}
function delProduct(id){if(!confirm("حذف شود؟"))return;products=products.filter(function(x){return x.id!==id;});cart=cart.filter(function(x){return x.id!==id;});save();render();}
$("productForm").onsubmit=function(e){
e.preventDefault();
var id=$("pId").value?Number($("pId").value):Date.now();
var img=tempImageData||svgImg('#f3f3f3','🧥','مزون مادر');
var obj={id:id,name:$("pName").value,price:Number($("pPrice").value),old:Number($("pOld").value)||0,cat:$("pCat").value,stock:Number($("pStock").value)||0,img:img,desc:$("pDesc").value};
var found=-1;for(var i=0;i<products.length;i++){if(products[i].id===id)found=i;}
if(found>=0)products[found]=obj;else products.unshift(obj);
save();render();$("productForm").classList.add("hidden");toast("ذخیره شد ✅");
};
$("pImageFile").addEventListener("change",function(e){
var f=e.target.files[0];if(!f)return;
var rd=new FileReader();
rd.onload=function(ev){
var img=new Image();
img.onload=function(){
var max=800,w=img.width,h=img.height;
if(w>max){h=Math.round(h*max/w);w=max;}
if(h>max){w=Math.round(w*max/h);h=max;}
var c=document.createElement("canvas");c.width=w;c.height=h;
c.getContext("2d").drawImage(img,0,0,w,h);
tempImageData=c.toDataURL("image/jpeg",0.82);
$("pPreview").src=tempImageData;$("pPreview").style.display="block";
toast("عکس انتخاب شد ✅");
};
img.src=ev.target.result;
};
rd.readAsDataURL(f);
});
function setTheme(c){settings.theme=c;if($("sTheme"))$("sTheme").value=c;save();applySettings();}
if($("sTheme")){$("sTheme").addEventListener("input",function(e){settings.theme=e.target.value;save();document.documentElement.style.setProperty('--pink',settings.theme);});}
function saveSettings(){
settings.topbar=$("sTopbar").value;settings.name=$("sName").value||"مزون مادر";settings.logo=$("sLogo").value||"🌷";
settings.heroBadge=$("sHeroBadge").value;settings.title=$("sTitle").value;settings.sub=$("sSub").value;
settings.emoji1=$("sEmoji1").value;settings.emoji2=$("sEmoji2").value;settings.float=$("sFloat").value;
settings.howTitle=$("sHowTitle").value;settings.s1t=$("sS1t").value;settings.s1d=$("sS1d").value;
settings.s2t=$("sS2t").value;settings.s2d=$("sS2d").value;settings.s3t=$("sS3t").value;settings.s3d=$("sS3d").value;
settings.f1i=$("sF1i").value;settings.f1t=$("sF1t").value;settings.f1d=$("sF1d").value;
settings.f2i=$("sF2i").value;settings.f2t=$("sF2t").value;settings.f2d=$("sF2d").value;
settings.f3i=$("sF3i").value;settings.f3t=$("sF3t").value;settings.f3d=$("sF3d").value;
settings.f4i=$("sF4i").value;settings.f4t=$("sF4t").value;settings.f4d=$("sF4d").value;
settings.footerAbout=$("sFooterAbout").value;settings.address=$("sAddress").value;settings.phone=$("sPhone").value;settings.insta=$("sInsta").value;
settings.cardOwner=$("sCardOwner").value;settings.cardNumber=($("sCardNumber").value||"").replace(/\D/g,"").slice(0,16);settings.bank=$("sBank").value;
settings.payTitle=$("sPayTitle").value;settings.payDesc=$("sPayDesc").value;
settings.supTitle=$("sSupTitle").value;settings.supText=$("sSupText").value;settings.supPhone=$("sSupPhone").value;settings.supTime=$("sSupTime").value;
if($("sTheme"))settings.theme=$("sTheme").value;
save();applySettings();toast("کل سایت ذخیره شد ✅");
}
function toggleLiveEdit(){
liveOn=!liveOn;
document.body.classList.toggle('live-edit',liveOn);
document.querySelectorAll('[data-key]').forEach(function(el){el.contentEditable=liveOn;});
$("liveBtn").textContent=liveOn?"💾 اتمام و ذخیره ویرایش زنده":"✏️ روشن کردن ویرایش زنده";
if(liveOn){closeAdminNoLive();toast("حالا روی هر متنی کلیک کن و تایپ کن ✏️");}
else{save();applySettings();toast("ویرایش زنده ذخیره شد ✅");}
}
function closeAdminNoLive(){$("adminModal").classList.remove("show");}
document.addEventListener('focusout',function(e){
var t=e.target;
if(liveOn&&t&&t.getAttribute&&t.getAttribute('data-key')){
var kk=t.getAttribute('data-key');
settings[kk]=t.textContent.trim();
save();
if(kk==="name"){$("footerName").textContent=settings.name;document.title=settings.name+" | مانتو، عبا و شومیز";}
}
});
function openCheckout(){
if(!cart.length){toast("سبد خالی است!");return;}
toggleCart(false);
$("checkoutForm").classList.remove("hidden");$("checkoutSuccess").classList.add("hidden");
var sum=0,lines="";
cart.forEach(function(c){
var p=null;for(var i=0;i<products.length;i++){if(products[i].id===c.id)p=products[i];}
if(!p)return;sum+=p.price*c.n;lines+="<div>"+p.name+" × "+faNum(c.n)+" — "+fa(p.price*c.n)+"</div>";
});
$("checkoutSummary").innerHTML=lines+"<hr><b>جمع: "+fa(sum)+"</b>";
var hasCard=(settings.cardNumber||"").replace(/\D/g,"").length>=12;
if(hasCard){
$("checkoutPay").innerHTML="💳 واریز به کارت <b style='direction:ltr;display:inline-block'>"+fmtCard(settings.cardNumber)+"</b> به نام "+(settings.cardOwner||"")+" ("+(settings.bank||"")+")<br>بعد واریز، کد پیگیری را پایین وارد کن.";
}else{
$("checkoutPay").innerHTML="💳 شماره کارت فروشگاه هنوز ثبت نشده. سفارش را ثبت کن تا مدیر برای پرداخت هماهنگ کند.";
}
$("checkoutModal").classList.add("show");
}
function closeCheckout(){$("checkoutModal").classList.remove("show");}
$("checkoutForm").onsubmit=function(e){
e.preventDefault();
var name=$("oName").value.trim(), mob=$("oMobile").value.replace(/\D/g,""), addr=$("oAddress").value.trim(), receipt=$("oReceipt").value.trim();
if(name.length<3){toast("نام را کامل بنویس");return;}
if(!/^09\d{9}$/.test(mob)){toast("موبایل باید ۱۱ رقم و با 09 شروع شود");return;}
if(addr.length<8){toast("آدرس را کامل بنویس");return;}
var sum=0,items=[];
cart.forEach(function(c){
var p=null;for(var i=0;i<products.length;i++){if(products[i].id===c.id)p=products[i];}
if(!p)return;sum+=p.price*c.n;items.push({name:p.name,n:c.n,price:p.price});
});
var code="MM-"+Math.floor(1000+Math.random()*9000);
var order={code:code,date:new Date().toLocaleString("fa-IR"),name:name,mobile:mob,address:addr,note:$("oNote").value,receipt:receipt,items:items,sum:sum,status:"جدید"};
orders.unshift(order);
cart=[];save();renderCart();renderBadge();
$("checkoutForm").classList.add("hidden");$("checkoutSuccess").classList.remove("hidden");
$("trackCode").innerHTML="کد پیگیری تو: <b>"+code+"</b><br>مبلغ: "+fa(sum)+(receipt?"<br>رسید: "+receipt:"");
$("oName").value="";$("oMobile").value="";$("oAddress").value="";$("oNote").value="";$("oReceipt").value="";
};
function renderOrders(){
if(!orders.length){$("ordersList").innerHTML="<p style='text-align:center;color:#888'>هنوز سفارشی نیامده 🛒</p>";return;}
$("ordersList").innerHTML=orders.map(function(o,idx){
var items=o.items.map(function(it){return it.name+" × "+faNum(it.n);}).join("، ");
return "<div class='order-card "+(o.status==="جدید"?"new":"")+"'><div class='order-head'><b>"+o.code+" | "+o.name+"</b><span class='order-status "+(o.status==="جدید"?"new":"")+"'>"+o.status+"</span></div><div style='font-size:13px'>📱 <span style='direction:ltr;display:inline-block'>"+o.mobile+"</span> | 🕒 "+o.date+"</div><div class='order-items'>"+items+"<br><b>"+fa(o.sum)+"</b><br>📍 "+o.address+(o.note?"<br>📝 "+o.note:"")+(o.receipt?"<br>🧾 رسید: "+o.receipt:"")+"</div><div class='order-actions'><button class='small-btn' onclick='copyText(\""+o.mobile+"\")'>کپی موبایل</button><button class='small-btn done' onclick='orderDone("+idx+")'>تحویل شد ✅</button><button class='small-btn del' onclick='orderDel("+idx+")'>حذف</button></div></div>";
}).join("");
}
function orderDone(i){orders[i].status="تحویل شد";save();renderOrders();renderBadge();}
function orderDel(i){if(!confirm("حذف شود؟"))return;orders.splice(i,1);save();renderOrders();renderBadge();}
function copyText(t){if(navigator.clipboard){navigator.clipboard.writeText(t).then(function(){toast("کپی شد ✅");});}else{var x=document.createElement("textarea");x.value=t;document.body.appendChild(x);x.select();try{document.execCommand("copy");toast("کپی شد ✅");}catch(e){}document.body.removeChild(x);}}
function copyCard(){var num=(settings.cardNumber||"").replace(/\D/g,"");if(num.length<12){toast("کارت ثبت نشده");return;}copyText(num);}
function exportProducts(){var blob=new Blob([JSON.stringify({settings:settings,products:products,sections:sections},null,2)],{type:"application/json"});var a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="mezon-madar-backup.json";a.click();}
function exportOrders(){var blob=new Blob([JSON.stringify(orders,null,2)],{type:"application/json"});var a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="mezon-madar-orders.json";a.click();toast("دانلود شد ✅");}
function resetAll(){if(!confirm("همه پاک شود؟"))return;localStorage.removeItem("madar_products_v7");localStorage.removeItem("madar_settings_v7");localStorage.removeItem("madar_orders_v7");localStorage.removeItem("madar_sections_v7");products=defaults.slice(0);orders=[];sections=defaultSections.slice(0);settings={};for(var k in defaultSettings){settings[k]=defaultSettings[k];}save();applySettings();render();}
document.querySelectorAll(".cat").forEach(function(b){b.onclick=function(){document.querySelectorAll(".cat").forEach(function(x){x.classList.remove("active");});b.classList.add("active");curCat=b.dataset.cat;render();};});
$("searchInput").oninput=render;
applySettings();render();renderOrders();