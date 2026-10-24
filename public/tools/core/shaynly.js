const Shaynly={
 store(ns){const k='shaynly:'+ns;return{get(d){try{return JSON.parse(localStorage.getItem(k))??d}catch{return d}},set(v){try{localStorage.setItem(k,JSON.stringify(v))}catch{}}}},
 toast(m){let t=document.querySelector('.toast');if(!t){t=document.createElement('div');t.className='toast';t.setAttribute('role','status');document.body.append(t)}t.textContent=m;t.classList.add('on');clearTimeout(t._t);t._t=setTimeout(()=>t.classList.remove('on'),2200)},
 save(blobOrUrl,name){const a=document.createElement('a');a.href=typeof blobOrUrl==='string'?blobOrUrl:URL.createObjectURL(blobOrUrl);a.download=name;a.click()},
 theme(){const s=this.store('theme'),t=s.get(null);if(t)document.documentElement.dataset.theme=t;return()=>{const n=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=n;s.set(n)}},
 bar(title){
  const tg=this.theme();
  const globalHeader = `<header class="header">
    <div class="header-wrap">
      <a href="/" class="logo-area">
        <img src="/assets/images/logo.png" alt="Shaynly Logo" class="logo-img" onerror="this.style.display='none'">
        <span class="logo-text">Shaynly</span>
        <span class="logo-tag">Business &amp; Tools</span>
      </a>
      <nav class="nav-links">
        <a href="/">Home</a>
        <a href="/category/technology/">Technology</a>
        <a href="/category/marketing/">Marketing</a>
        <a href="/category/management/">Management</a>
        <a href="/category/resources/">Resources</a>
        <a href="/tools/" class="nav-btn">Tools (100+)</a>
      </nav>
    </div>
  </header>`;
  document.body.insertAdjacentHTML('afterbegin', globalHeader);

  const globalFooter = `<footer class="footer">
    <div class="footer-wrap">
      <div>
        <h4>About Shaynly</h4>
        <p style="font-size:14px;line-height:1.7;margin-bottom:14px">
          Shaynly is a strategic business marketing and management platform providing evidence-based growth frameworks, offline-first client-side web tools, and digital utilities.
        </p>
        <p style="font-size:13px;color:#64748b">Published &amp; Managed by Sivanandan N.</p>
      </div>
      <div>
        <h4>Article Categories</h4>
        <ul>
          <li><a href="/category/technology/">Technology &amp; AI</a></li>
          <li><a href="/category/marketing/">Digital Marketing &amp; SEO</a></li>
          <li><a href="/category/management/">Business Management</a></li>
          <li><a href="/category/resources/">Developer Resources</a></li>
          <li><a href="/category/healthcare/">Healthcare Practice</a></li>
          <li><a href="/category/business/">Business Strategy</a></li>
        </ul>
      </div>
      <div>
        <h4>Browser Utilities</h4>
        <ul>
          <li><a href="/tools/">All 100+ Client Tools</a></li>
          <li><a href="/tools/invoice.html">Invoice Generator</a></li>
          <li><a href="/tools/gst.html">GST Calculator</a></li>
          <li><a href="/tools/qr-studio.html">QR Code Studio</a></li>
          <li><a href="/tools/brandkit.html">Brand Kit Generator</a></li>
          <li><a href="/tools/utm.html">UTM Campaign Builder</a></li>
        </ul>
      </div>
      <div>
        <h4>Feeds &amp; Indexing</h4>
        <ul>
          <li><a href="/sitemap.xml">XML Sitemap</a></li>
          <li><a href="/feed.xml">RSS Feed</a></li>
          <li><a href="/llms.txt">AI Agent Context (llms.txt)</a></li>
          <li><a href="/site-map/">HTML Directory</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      &copy; 2026 Shaynly &bull; Business Marketing and Management &bull; All Rights Reserved.
    </div>
  </footer>`;
  document.body.insertAdjacentHTML('beforeend', globalFooter);
},
 fmt(n,cur){return new Intl.NumberFormat(cur==='INR'?'en-IN':'en-US',{style:'currency',currency:cur,maximumFractionDigits:2}).format(n)}
};
Shaynly.brand=()=>Shaynly.store('brand').get({});
Shaynly.copy=async t=>{try{await navigator.clipboard.writeText(t);}catch{const a=document.createElement('textarea');a.value=t;document.body.append(a);a.select();document.execCommand('copy');a.remove()}Shaynly.toast('Copied to clipboard')};
Shaynly.page=(title,left,right)=>{document.title=title;document.body.insertAdjacentHTML('beforeend',`<div class="wrap"><div class="grid"><section class="panel"><h2>${title}</h2>${left}</section><section class="panel"><h2>Result</h2>${right}</section></div></div>`);Shaynly.bar(title)};
Shaynly.md=t=>{const e=s=>s.replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c])).replace(/\*\*(.+?)\*\*/g,'<b>$1</b>');let o='',ul=false;for(const l of t.split('\n')){const b=l.match(/^\s*[-*]\s+(.*)/);if(b){if(!ul){o+='<ul style="margin:4px 0 8px 20px">';ul=true}o+='<li>'+e(b[1])+'</li>';continue}if(ul){o+='</ul>';ul=false}const h=l.match(/^(#{1,4})\s+(.*)/);o+=h?`<h2 style="margin:16px 0 6px;font-size:${h[1].length<3?'1.1':'1'}rem">${e(h[2])}</h2>`:l.trim()?`<p style="margin:4px 0">${e(l)}</p>`:''}return o+(ul?'</ul>':'')};
