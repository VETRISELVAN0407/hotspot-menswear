/* Home page: model stage, scan transition, shirt rail */
const HERO_FILTERS={all:()=>true,tshirts:p=>p.cat==='tshirts',hoodie:p=>p.cat==='hoodie'};
let filter='all',idx=0,list=[];

function visible(){list=PRODUCTS.filter(HERO_FILTERS[filter]);if(idx>=list.length)idx=0}

let curSrc='',scanAnim=[];
function scan(src,alt){
  const m=$('#model'),o=$('#modelOld'),ln=$('#scanLine');
  if(src===curSrc)return;
  scanAnim.forEach(x=>x.cancel());scanAnim=[];
  const first=!curSrc;curSrc=src;
  const img=new Image();
  img.onload=()=>{
    if(src!==curSrc)return;
    if(first){m.src=src;m.alt=alt;return}
    // old image stays underneath; the new one is revealed from the top, in front of it
    // old model is hidden; the new one is revealed from the top by the scan line
    o.style.opacity=0;o.removeAttribute('src');
    m.src=src;m.alt=alt;
    const f={duration:900,easing:'cubic-bezier(.55,.1,.35,1)',fill:'forwards'};
    scanAnim=[
      m.animate([{clipPath:'inset(0 0 100% 0)'},{clipPath:'inset(0 0 0% 0)'}],f),
      ln.animate([{top:'0%',opacity:0},{opacity:1,offset:.08},{opacity:1,offset:.92},{top:'100%',opacity:0}],f)
    ];
    scanAnim[0].onfinish=()=>{scanAnim.forEach(x=>x.cancel());scanAnim=[]};
  };
  img.src=src;
}

function render(){
  visible();
  const cur=list[idx];
  scan(`images/models/${cur.id}.png`,cur.name);
  $('#dockImg').src=`images/products/${cur.id}.png`;
  $('#dockName').textContent=cur.name;$('#dockPrice').textContent=money(cur.price);
  $('#dockLink').href=`product.html?id=${cur.id}`;
  const n=list.length,slots=[['s2',-2],['s1',-1],['s3',1],['s4',2]];
  $('#cards').innerHTML=slots.map(([cls,o])=>{
    const p=list[(idx+o+n*3)%n];
    const show=n>=2*Math.abs(o)+1;
    return `<div class="card ${cls} ${show?'':'hide'}" data-o="${o}"><img src="images/products/${p.id}.png" alt="${esc(p.name)}"><span>${esc(p.name)}</span><b>${money(p.price)}</b></div>`}).join('');
  $$('.card').forEach(c=>c.onclick=()=>{idx=(idx+ +c.dataset.o+n*3)%n;render()});
  $('#strip').innerHTML=list.map((p,i)=>`<button class="${i===idx?'on':''}" data-i="${i}" aria-label="${esc(p.name)}"><img src="images/products/${p.id}.png" alt=""><span>${esc(p.name)}</span></button>`).join('');
  $$('#strip button').forEach(b=>b.onclick=()=>{idx=+b.dataset.i;render()});
  $('#strip .on')?.scrollIntoView({inline:'center',block:'nearest',behavior:'smooth'});
  $('#prev').style.display=$('#next').style.display=n>1?'':'none';
}
$('#prev').onclick=()=>{idx=(idx-1+list.length)%list.length;render()};
$('#next').onclick=()=>{idx=(idx+1)%list.length;render()};
$$('#filters button').forEach(b=>b.onclick=()=>{
  $('#filters .active').classList.remove('active');b.classList.add('active');
  filter=b.dataset.f;idx=0;render()});
$('#addBtn').onclick=()=>{Cart.add(list[idx].id,'M',1);Drawer.open()};

/* sections below the hero */
$('#bestsellers').innerHTML=PRODUCTS.filter(p=>['ringer-tee','linen-shirt','hoodie','oat-sweater'].includes(p.id)).map(cardHTML).join('');
$('#newin').innerHTML=PRODUCTS.filter(p=>p.badge==='New').slice(0,4).map(cardHTML).join('');
bindCards();

render();
