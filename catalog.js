/* Shared product catalogue: category chips, filter, sort, grid. Used by the home page and the shop page. */
function mountCatalog(root,onDraw){
  const qs=new URLSearchParams(location.search);
  let cat=CATS.some(c=>c[0]===qs.get('c'))?qs.get('c'):'all',q=(qs.get('q')||'').trim().toLowerCase(),price='',sort='feat',cols4=true;
  const chev='<svg class="chev" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>';
  const PR=[['','All prices'],['u2000','Under ₹2,000'],['2000-3500','₹2,000 – ₹3,500'],['o3500','Over ₹3,500']];
  root.innerHTML=`<div class="cat-toolbar">
    <div class="chips" id="chips">${CATS.map(([c,n])=>`<button data-c="${c}">${n}</button>`).join('')}</div>
    <div class="tb-right">
      <div class="tb-item filter"><button type="button" id="fBtn" aria-expanded="false"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"><path d="M3.5 5h17l-6.5 7.5V19l-4 1.5v-8z"/></svg>Filter ${chev}</button>
        <div class="pop" id="fPop">${PR.map(([v,l],i)=>`<label><input type="radio" name="pr" value="${v}" ${i?'':'checked'}>${l}</label>`).join('')}</div></div>
      <label class="tb-item sort">Sort by: <select id="sort" aria-label="Sort"><option value="feat">Featured</option><option value="lo">Price: low to high</option><option value="hi">Price: high to low</option><option value="az">Name: A–Z</option></select>${chev}</label>
      <button type="button" class="tb-item gridbtn" id="gridBtn" aria-label="Change grid size"><svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><rect x="4" y="4" width="6.5" height="6.5" rx="1.2"/><rect x="13.5" y="4" width="6.5" height="6.5" rx="1.2"/><rect x="4" y="13.5" width="6.5" height="6.5" rx="1.2"/><rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.2"/></svg></button>
    </div></div>
    <div class="count" id="count"></div><div class="pgrid" id="grid"></div>`;
  const draw=()=>{
    $$('#chips button',root).forEach(b=>b.classList.toggle('on',b.dataset.c===cat));
    let a=PRODUCTS.filter(p=>(cat==='all'||p.cat===cat)&&(!q||(p.name+' '+p.color+' '+catName(p.cat)).toLowerCase().includes(q)));
    if(price==='u2000')a=a.filter(p=>p.price<2000);else if(price==='2000-3500')a=a.filter(p=>p.price>=2000&&p.price<=3500);else if(price==='o3500')a=a.filter(p=>p.price>3500);
    if(sort==='lo')a.sort((x,y)=>x.price-y.price);else if(sort==='hi')a.sort((x,y)=>y.price-x.price);else if(sort==='az')a.sort((x,y)=>x.name.localeCompare(y.name));
    $('#count',root).textContent=a.length+(a.length===1?' product':' products');
    const g=$('#grid',root);g.classList.toggle('cols3',!cols4);
    g.innerHTML=a.length?a.map(cardHTML).join(''):'<div class="empty-state" style="grid-column:1/-1"><h3>Nothing found</h3><p>Try a different category, price or search.</p></div>';
    bindCards(g);
    if(onDraw)onDraw({cat,q,qs});
  };
  $$('#chips button',root).forEach(b=>b.onclick=()=>{cat=b.dataset.c;q='';draw()});
  $('#sort',root).onchange=e=>{sort=e.target.value;draw()};
  $$('input[name=pr]',root).forEach(r=>r.onchange=()=>{price=r.value;draw();$('#fPop',root).classList.remove('on')});
  $('#fBtn',root).onclick=e=>{e.stopPropagation();const p=$('#fPop',root),on=p.classList.toggle('on');e.currentTarget.setAttribute('aria-expanded',on)};
  document.addEventListener('click',e=>{if(!e.target.closest('.filter'))$('#fPop',root).classList.remove('on')});
  $('#gridBtn',root).onclick=()=>{cols4=!cols4;draw()};
  draw();
}
