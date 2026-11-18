/* HOTSPOT — shared data, cart/wishlist store, header, footer, mini-bag drawer */
const PRODUCTS=[
 {id:'ringer-tee',dots:['#e9dfc8', '#1f2a44', '#111'],name:'Ringer Tee',price:1999,cat:'tshirts',color:'Ecru / Navy',badge:'Bestseller',rating:4.8,reviews:124,desc:'A relaxed ringer tee with contrast navy trims on the collar and sleeves. Soft cotton jersey that keeps its shape wash after wash.',details:['Regular fit','Soft cotton jersey','Contrast rib collar and cuffs','Machine wash cold']},
 {id:'everyday-tee',dots:['#ffffff', '#111', '#8d8f92'],name:'Everyday Tee',price:1499,cat:'tshirts',color:'White',badge:'',rating:4.7,reviews:210,desc:'The white tee you will reach for every day. Clean neckline, easy drape, built to layer or wear alone.',details:['Regular fit','Midweight cotton','Reinforced neckline','Machine wash cold']},
 {id:'linen-shirt',dots:['#8fb3e4', '#1f2a44', '#eef0f4'],name:'Linen Shirt',price:3299,cat:'shirts',color:'Sky Blue',badge:'New',rating:4.9,reviews:86,desc:'A breathable linen shirt in a soft sky blue. Roll the sleeves up and wear it open or buttoned.',details:['Relaxed fit','100% linen look and feel','Button-down collar','Wash cold, line dry']},
 {id:'linen-shirt-red',dots:['#a3262a', '#111', '#eef0f4'],name:'Crimson Linen Shirt',price:3399,cat:'shirts',color:'Red',badge:'New',rating:4.8,reviews:34,desc:'A bold crimson linen shirt that stands out without trying too hard.',details:['Relaxed fit','100% linen look and feel','Button-down collar','Wash cold, line dry']},
 {id:'linen-shirt-navy',dots:['#1f2a44', '#111', '#eef0f4'],name:'Navy Linen Shirt',price:3399,cat:'shirts',color:'Navy Blue',badge:'Bestseller',rating:4.9,reviews:88,desc:'A deep navy linen shirt. Smart, versatile and easy to wear all year.',details:['Relaxed fit','100% linen look and feel','Button-down collar','Wash cold, line dry']},
 {id:'linen-shirt-black',dots:['#111', '#1f2a44', '#eef0f4'],name:'Noir Linen Shirt',price:3499,cat:'shirts',color:'Black',badge:'',rating:4.8,reviews:52,desc:'An all-black linen shirt with a sharp, evening-ready look.',details:['Relaxed fit','100% linen look and feel','Button-down collar','Wash cold, line dry']},
 {id:'linen-shirt-green',dots:['#1d4a37', '#111', '#eef0f4'],name:'Bottle Green Linen Shirt',price:3499,cat:'shirts',color:'Bottle Green',badge:'New',rating:4.7,reviews:27,desc:'A rich bottle-green linen shirt with an easy, relaxed drape.',details:['Relaxed fit','100% linen look and feel','Button-down collar','Wash cold, line dry']},
 {id:'hoodie',dots:['#8d8f92', '#111', '#eceef0'],name:'Classic Hoodie',price:3499,cat:'hoodie',color:'Heather Grey',badge:'Bestseller',rating:4.8,reviews:173,desc:'The classic pullover hoodie in heather grey. Brushed inside, kangaroo pocket and a hood that sits right.',details:['Regular fit','Brushed fleece lining','Kangaroo pocket','Machine wash cold']},
 {id:'hoodie-navy',dots:['#1f2a44', '#111', '#8d8f92'],name:'Midnight Hoodie',price:3699,cat:'hoodie',color:'Navy',badge:'New',rating:4.7,reviews:41,desc:'Our classic hoodie in deep midnight navy. Same cosy fleece, a richer colour.',details:['Regular fit','Brushed fleece lining','Kangaroo pocket','Machine wash cold']},
 {id:'hoodie-black',dots:['#111', '#1f2a44', '#8d8f92'],name:'Noir Hoodie',price:3699,cat:'hoodie',color:'Black',badge:'',rating:4.8,reviews:67,desc:'An all-black pullover hoodie that goes with everything. Heavy, soft and made for everyday wear.',details:['Regular fit','Brushed fleece lining','Kangaroo pocket','Machine wash cold']},
 {id:'breton-stripe',dots:['#f4f4f4', '#1f2a44', '#111'],name:'Breton Long Sleeve',price:2499,cat:'tshirts',color:'White / Navy',badge:'',rating:4.6,reviews:58,desc:'A classic breton stripe in a long-sleeve tee. Timeless navy stripes on soft white cotton.',details:['Regular fit','Soft cotton jersey','Boat neckline','Machine wash cold']},
 {id:'hoodie-burgundy',dots:['#6b1f3a', '#111', '#8d8f92'],name:'Burgundy Hoodie',price:3799,cat:'hoodie',color:'Burgundy',badge:'New',rating:4.7,reviews:29,desc:'A rich burgundy hoodie for cooler days. The same fit and fleece as the classic.',details:['Regular fit','Brushed fleece lining','Kangaroo pocket','Machine wash cold']},
 {id:'red-polo',dots:['#a3432c', '#1f2a44', '#111'],name:'Pique Polo',price:2299,cat:'tshirts',color:'Brick Red',badge:'',rating:4.6,reviews:77,desc:'A textured pique polo in brick red. Smart enough for dinner, easy enough for the weekend.',details:['Regular fit','Cotton pique','Two-button placket','Machine wash cold']},
 {id:'hoodie-olive',dots:['#4a5a3a', '#111', '#8d8f92'],name:'Forest Hoodie',price:3799,cat:'hoodie',color:'Olive Green',badge:'New',rating:4.7,reviews:33,desc:'A forest-green hoodie with a soft, lived-in feel straight out of the bag.',details:['Regular fit','Brushed fleece lining','Kangaroo pocket','Machine wash cold']},
 {id:'oat-sweater',dots:['#d8c8aa', '#8d8f92', '#111'],name:'Oat Rib Sweater',price:3999,cat:'knitwear',color:'Oat',badge:'',rating:4.9,reviews:52,desc:'A ribbed crew-neck sweater in warm oat. Soft knit with a clean, textured finish.',details:['Regular fit','Soft rib knit','Crew neck','Hand wash or gentle cycle']}
];
const CATS=[['all','All'],['tshirts','T-Shirts'],['shirts','Shirts'],['hoodie','Hoodies'],['knitwear','Knitwear']];
const SIZES=['S','M','L','XL'];
const FREE_SHIP=4999,SHIP_FEE=99,EXPRESS_FEE=199,TAX_RATE=.05;
const PROMOS={HOTSPOT10:{pct:10,label:'10% off'}};

const $=(s,r=document)=>r.querySelector(s);
const $$=(s,r=document)=>[...r.querySelectorAll(s)];
const money=n=>'₹'+Number(n).toLocaleString('en-IN',{minimumFractionDigits:Number.isInteger(n)?0:2,maximumFractionDigits:2});
const getP=id=>PRODUCTS.find(p=>p.id===id);
const catName=c=>(CATS.find(x=>x[0]===c)||[0,c])[1];
const store={
  get(k,d){try{const v=JSON.parse(localStorage.getItem(k));return v==null?d:v}catch(e){return d}},
  set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}
};
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

/* ---------- cart ---------- */
const Cart={
  items(){return store.get('hs_cart',[]).filter(i=>getP(i.id))},
  save(a){store.set('hs_cart',a);document.dispatchEvent(new Event('cart:change'))},
  add(id,size='M',q=1){const a=this.items(),f=a.find(i=>i.id===id&&i.size===size);f?f.q+=q:a.push({id,size,q});this.save(a)},
  setQty(i,q){const a=this.items();if(!a[i])return;a[i].q=q;if(q<1)a.splice(i,1);this.save(a)},
  remove(i){const a=this.items();a.splice(i,1);this.save(a)},
  clear(){this.save([])},
  count(){return this.items().reduce((s,i)=>s+i.q,0)},
  subtotal(){return this.items().reduce((s,i)=>s+getP(i.id).price*i.q,0)},
  promo(){const c=store.get('hs_promo','');return PROMOS[c]?c:''},
  setPromo(c){store.set('hs_promo',c);document.dispatchEvent(new Event('cart:change'))},
  totals(ship){
    const sub=this.subtotal(),pc=this.promo(),disc=pc?Math.round(sub*PROMOS[pc].pct/100):0;
    const after=sub-disc;
    const shipping=sub===0?0:(ship!==undefined?ship:(after>=FREE_SHIP?0:SHIP_FEE));
    const tax=Math.round(after*TAX_RATE);
    return{sub,disc,shipping,tax,total:after+shipping+tax,promo:pc};
  }
};
/* ---------- wishlist ---------- */
const Wish={
  ids(){return store.get('hs_wish',[]).filter(getP)},
  has(id){return this.ids().includes(id)},
  toggle(id){const a=this.ids(),i=a.indexOf(id);i>-1?a.splice(i,1):a.push(id);store.set('hs_wish',a);document.dispatchEvent(new Event('wish:change'));return i<0}
};

/* ---------- toast ---------- */
function toast(msg){
  let t=$('#toast');if(!t){t=document.createElement('div');t.id='toast';document.body.appendChild(t)}
  t.textContent=msg;t.classList.add('on');clearTimeout(toast.t);toast.t=setTimeout(()=>t.classList.remove('on'),2200);
}

/* ---------- product card ---------- */
const heartSVG='<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M12 20.5s-7.5-4.6-8.9-9.3C2.2 8.1 4 5 7 5c1.9 0 3.6 1 5 3 1.4-2 3.1-3 5-3 3 0 4.8 3.1 3.9 6.2-1.4 4.7-8.9 9.3-8.9 9.3z" fill="currentColor"/></svg>';
function cardHTML(p){
  const w=Wish.has(p.id);
  return `<article class="pcard" data-id="${p.id}">
    <div class="pwrap"><a class="pimg" href="product.html?id=${p.id}" aria-label="${esc(p.name)}">
      <img src="images/products/${p.id}.png" alt="${esc(p.name)}" loading="lazy">
      ${p.badge?`<span class="badge ${p.badge==='New'?'new':''}">${p.badge==='New'?'<svg viewBox="0 0 24 24"><path d="M12 3l2 6 6 3-6 3-2 6-2-6-6-3 6-3z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>':'<svg viewBox="0 0 24 24"><path d="M3 8l4 4 5-7 5 7 4-4-2 11H5z" fill="currentColor"/></svg>'}${p.badge}</span>`:''}
    </a>
    <button class="heart ${w?'on':''}" data-wish="${p.id}" aria-label="Save ${esc(p.name)}" aria-pressed="${w}">${heartSVG}</button>
    <button class="quick" data-quick="${p.id}"><svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 4h2.5l2.2 10.2a1 1 0 001 .8h8.6a1 1 0 001-.8L20 8H6.2"/><circle cx="9.5" cy="19.5" r="1.3"/><circle cx="17" cy="19.5" r="1.3"/></svg><span>Quick add</span></button></div>
    <div class="pinfo"><div class="pl"><a class="pname" href="product.html?id=${p.id}">${esc(p.name)}</a><b class="pprice">${money(p.price)}</b></div>
</div>
  </article>`;
}
function bindCards(root=document){
  $$('[data-wish]',root).forEach(b=>b.onclick=e=>{e.preventDefault();const on=Wish.toggle(b.dataset.wish);toast(on?'Saved to wishlist':'Removed from wishlist')});
  $$('[data-quick]',root).forEach(b=>b.onclick=e=>{e.preventDefault();Cart.add(b.dataset.quick,'M',1);Drawer.open()});
}
document.addEventListener('wish:change',()=>{
  $$('[data-wish]').forEach(b=>{const on=Wish.has(b.dataset.wish);b.classList.toggle('on',on);b.setAttribute('aria-pressed',on)});
  $$('.wish-count').forEach(e=>{const n=Wish.ids().length;e.textContent=n;e.style.display=n?'':'none'});
});

/* ---------- header / footer / drawer ---------- */
const NAV=[['Home','index.html'],['Shop All','shop.html'],['T-Shirts','shop.html?c=tshirts',1],['Hoodies','shop.html?c=hoodie',1],['Shirts','shop.html?c=shirts',1]];
function stars(r){const f=Math.round(r);return '★'.repeat(f)+'☆'.repeat(5-f)}

const Drawer={
  open(){this.render();$('#overlay').classList.add('on');$('#drawer').classList.add('on')},
  close(){$('#overlay').classList.remove('on');$('#drawer').classList.remove('on')},
  render(){
    const items=Cart.items(),t=Cart.totals();
    $('#subtotal').textContent=money(t.sub);
    const left=Math.max(0,FREE_SHIP-(t.sub-t.disc));
    $('#away').textContent=left?money(left):'You qualify';
    $('#awayTxt').textContent=left?' away from free delivery':' for free delivery';
    $('#barFill').style.width=Math.min(100,(t.sub-t.disc)/FREE_SHIP*100)+'%';
    $('#items').innerHTML=items.length?items.map((c,i)=>{const p=getP(c.id);return `<div class="item"><a href="product.html?id=${p.id}"><img class="t" src="images/products/${p.id}.png" alt=""></a><div class="i-info"><b>${esc(p.name)}</b><small>${money(p.price)}</small><small>Size: ${c.size}</small><small>Color: ${esc(p.color)}</small><div><span class="qty"><button data-d="-1" data-i="${i}" aria-label="Decrease">−</button>${c.q}<button data-d="1" data-i="${i}" aria-label="Increase">+</button></span><button data-del="${i}" aria-label="Remove"><img class="del" src="images/icons/trash-dark.png" alt=""></button></div></div><div class="p">${money(p.price*c.q)}</div></div>`}).join(''):'<p class="empty">Your bag is empty.</p>';
    $$('#items [data-d]').forEach(b=>b.onclick=()=>{const i=+b.dataset.i;Cart.setQty(i,Cart.items()[i].q+ +b.dataset.d)});
    $$('#items [data-del]').forEach(b=>b.onclick=()=>Cart.remove(+b.dataset.del));
    $('#checkoutBtn').style.pointerEvents=items.length?'':'none';
    $('#checkoutBtn').style.opacity=items.length?'':'.4';
  }
};

function injectLayout(){
  const hp=$('#site-header');
  if(hp){
    let page=location.pathname.split('/').pop()||'index.html';const qs=location.search;
    const cur=l=>{const[f,q]=l.split('?');return f===page&&(q?qs.includes(q):!qs.includes('c='))};
    hp.outerHTML=`<div class="announce"><span><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 6h11v10H3zM14 9.5h4l3 3.2V16h-7zM7 19.2a1.7 1.7 0 100-3.4 1.7 1.7 0 000 3.4zm10 0a1.7 1.7 0 100-3.4 1.7 1.7 0 000 3.4z"/></svg> FREE DELIVERY OVER ${money(FREE_SHIP)}</span><b class="sep">|</b><span><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 12a8 8 0 108-8H7"/><path d="M10 1.5L6.5 4 10 7"/></svg> EASY RETURNS</span><b class="sep">|</b><span><svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true"><path d="M12 2.5l2.9 6.2 6.6.7-5 4.5 1.5 6.6L12 17l-6 3.5 1.5-6.6-5-4.5 6.6-.7z"/></svg> PREMIUM MENSWEAR</span></div>
<header class="nav">
  <nav class="nav-left">${NAV.map(([n,l,d])=>`<a href="${l}" class="${cur(l)?'cur':''}">${n}${d?'<svg class="chev" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>':''}</a>`).join('')}</nav>
  <a class="logo" href="index.html"><b>HOTSPOT</b></a>
  <nav class="nav-right"><a href="#" id="searchBtn" aria-label="Search"><svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5"/></svg></a><a href="account.html" aria-label="Account"><svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4.5 20.5c1-4 4-5.8 7.5-5.8s6.5 1.8 7.5 5.8"/></svg></a><a href="wishlist.html" class="saved" aria-label="Saved items"><svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 20s-7-4.4-8.4-8.9C2.7 8 4.4 5 7.3 5c1.9 0 3.5 1 4.7 3 1.2-2 2.8-3 4.7-3 2.9 0 4.6 3 3.7 6.1C19 15.6 12 20 12 20z"/></svg><span class="wish-count"></span></a><a href="#" id="bagLink" class="bag" aria-label="Bag"><svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 8h14l-1 12H6z"/><path d="M9 8V6.5a3 3 0 016 0V8"/></svg><span class="bagLbl">BAG</span><span class="bagCount">0</span></a></nav>
</header>
<nav class="bnav" aria-label="Main">
  <a href="index.html" class="${cur('index.html')?'on':''}"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3.5 11L12 4l8.5 7"/><path d="M5.5 9.5V20h13V9.5"/><path d="M10 20v-5.5h4V20"/></svg><span>Home</span></a>
  <a href="shop.html" class="${page==='shop.html'?'on':''}"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="4" width="6.5" height="6.5" rx="1.5"/><rect x="13.5" y="4" width="6.5" height="6.5" rx="1.5"/><rect x="4" y="13.5" width="6.5" height="6.5" rx="1.5"/><rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.5"/></svg><span>Shop</span></a>
  <a href="#" id="bnSearch"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5"/></svg><span>Search</span></a>
  <a href="wishlist.html" class="saved ${page==='wishlist.html'?'on':''}"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 20s-7-4.4-8.4-8.9C2.7 8 4.4 5 7.3 5c1.9 0 3.5 1 4.7 3 1.2-2 2.8-3 4.7-3 2.9 0 4.6 3 3.7 6.1C19 15.6 12 20 12 20z"/></svg><span>Saved</span><i class="wish-count"></i></a>
  <a href="#" id="bnBag"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 8h14l-1 12H6z"/><path d="M9 8V6.5a3 3 0 016 0V8"/></svg><span>Bag</span><i class="bagCount">0</i></a>
</nav>
<div class="search-ov" id="searchOv"><form action="shop.html" method="get" role="search"><input name="q" placeholder="Search tees, hoodies, shirts…" aria-label="Search products" autocomplete="off"><button>Search</button><button type="button" id="searchClose" class="x" aria-label="Close search">✕</button></form></div>`;
  }
  const fp=$('#site-footer');
  if(fp){
    fp.outerHTML=`<footer class="footer">
  <div class="f-grid">
    <div><div class="f-logo">HOTSPOT</div><p>Menswear made to be worn every day. Clean cuts, honest fabrics and repairs for a year.</p></div>
    <div><h4>Shop</h4><a href="shop.html">All Products</a><a href="shop.html?c=tshirts">T-Shirts</a><a href="shop.html?c=shirts">Shirts</a><a href="shop.html?c=hoodie">Hoodies</a><a href="shop.html?c=knitwear">Knitwear</a></div>
    <div><h4>Help</h4><a href="account.html">My Account</a><a href="wishlist.html">Saved Items</a><a href="cart.html">My Bag</a><a href="contact.html">Contact Us</a><a href="about.html">About Us</a></div>
    <div><h4>Stay in touch</h4><p>New arrivals and offers, straight to your inbox.</p><form class="f-news" id="newsForm"><input type="email" placeholder="Your email" required aria-label="Email"><button>Join</button></form></div>
  </div>
  <div class="f-bottom"><span>© ${new Date().getFullYear()} HOTSPOT Menswear. All rights reserved.</span><span>Free delivery over ${money(FREE_SHIP)} · Repairs for a year</span></div>
</footer>`;
    const nf=$('#newsForm');if(nf)nf.onsubmit=e=>{e.preventDefault();nf.reset();toast('Thanks for joining!')};
  }
  if(!$('#drawer')){
    document.body.insertAdjacentHTML('beforeend',`<div class="overlay" id="overlay"></div>
<aside class="drawer" id="drawer" aria-label="Shopping bag">
  <div class="d-head"><h2>Your bag</h2><button id="closeBag" aria-label="Close bag"><img src="images/icons/close-dark.png" alt=""></button></div>
  <div class="ship"><p><b id="away"></b><span id="awayTxt"></span></p><div class="bar"><i id="barFill"></i></div></div>
  <div class="d-cols"><span>PRODUCT</span><span>TOTAL</span></div>
  <div id="items"></div>
  <div class="d-foot"><div class="sub"><span>Subtotal</span><b id="subtotal">₹0</b></div><p>Taxes and shipping calculated at checkout.</p><a class="checkout" id="checkoutBtn" href="checkout.html">CHECK OUT</a><a class="viewbag" href="cart.html">View full bag</a></div>
</aside>`);
  }
  /* events */
  $('#bagLink').onclick=e=>{e.preventDefault();Drawer.open()};
  $('#bnBag').onclick=e=>{e.preventDefault();Drawer.open()};
  $('#bnSearch').onclick=e=>{e.preventDefault();$('#searchOv').classList.add('on');setTimeout(()=>$('#searchOv input').focus(),50)};
  $('#closeBag').onclick=$('#overlay').onclick=()=>Drawer.close();
  document.addEventListener('keydown',e=>{if(e.key==='Escape'){Drawer.close();$('#searchOv').classList.remove('on');}});
  $('#searchBtn').onclick=e=>{e.preventDefault();$('#searchOv').classList.add('on');setTimeout(()=>$('#searchOv input').focus(),50)};
  $('#searchClose').onclick=()=>$('#searchOv').classList.remove('on');
  const sync=()=>{$$('.bagCount').forEach(e=>{e.textContent=Cart.count();if(e.closest('.bnav'))e.style.display=Cart.count()?'':'none'});if($('#drawer').classList.contains('on'))Drawer.render()};
  document.addEventListener('cart:change',sync);
  window.addEventListener('storage',()=>{sync();document.dispatchEvent(new Event('wish:change'))});
  sync();document.dispatchEvent(new Event('wish:change'));
}
injectLayout(); // scripts are loaded at the end of <body>, so the placeholders already exist
