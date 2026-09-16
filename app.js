/* =====================================================================
   ID STUDENT HUB — SITE LOGIC
   =====================================================================
   This file makes the website work: navigation, search, filtering,
   modals and forms. It reads its content from content.js.

   You generally should NOT need to edit this file to update text,
   books, software, faculty picks, etc. — that all lives in content.js.
   Only touch this file if you want to change how the site BEHAVES.
   ===================================================================== */

/* ============================================================ STATE ============================================================ */
let state = {
  booksCat:"All", booksYear:"All Years", booksSearch:"",
  softwareCat:"All", softwareSearch:"",
  websitesCat:"All", websitesSearch:"",
  workCat:"All",
  researchCat:"All", researchSearch:"",
  oppType:"All",
  faqCat:"All", faqSearch:"",
};

/* ============================================================ HELPERS ============================================================ */
function el(html){ const d=document.createElement('div'); d.innerHTML=html.trim(); return d.firstChild; }
function uniqueCats(arr, key){ return ["All", ...new Set(arr.map(i=>i[key]))]; }
function matchesSearch(text, q){ return text.toLowerCase().includes(q.toLowerCase()); }

/* ============================================================ NAVIGATION ============================================================ */
const pages = ["home","resources","guide","work","faculty","research","opportunities","faq"];
function goTo(pageId){
  pages.forEach(p=>{
    document.getElementById('page-'+p).classList.toggle('active', p===pageId);
  });
  document.querySelectorAll('.nav-link').forEach(btn=>{
    btn.classList.toggle('active', btn.dataset.nav===pageId);
  });
  document.getElementById('mobileMenu').classList.remove('open');
  window.scrollTo({top:0, behavior:'instant' in window ? 'instant' : 'auto'});
  window.location.hash = pageId;
}
document.querySelectorAll('[data-nav]').forEach(btn=>{
  btn.addEventListener('click', (e)=>{ e.preventDefault(); goTo(btn.dataset.nav); });
});
window.addEventListener('hashchange', ()=>{
  const h = window.location.hash.replace('#','');
  if(pages.includes(h)) goTo(h);
});

/* hamburger */
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
hamburgerBtn.addEventListener('click', ()=>{
  const open = mobileMenu.classList.toggle('open');
  hamburgerBtn.setAttribute('aria-expanded', open);
});

/* ============================================================ MODAL ============================================================ */
const modalOverlay = document.getElementById('modalOverlay');
const modalContent = document.getElementById('modalContent');
function openModal(html){
  modalContent.innerHTML = '<button class="modal-close" id="modalCloseBtn" aria-label="Close">✕</button>' + html;
  modalOverlay.classList.add('open');
  document.getElementById('modalCloseBtn').addEventListener('click', closeModal);
}
function closeModal(){ modalOverlay.classList.remove('open'); modalContent.innerHTML=''; }
modalOverlay.addEventListener('click', (e)=>{ if(e.target===modalOverlay) closeModal(); });
document.addEventListener('keydown', (e)=>{ if(e.key==='Escape') closeModal(); });

document.querySelectorAll('[data-open-modal]').forEach(btn=>{
  btn.addEventListener('click', (e)=>{
    e.preventDefault();
    const type = btn.dataset.openModal;
    if(type==='submit-resource') openModal(submitResourceFormHTML());
    if(type==='submit-faculty') openModal(submitFacultyFormHTML());
  });
});

/* ============================================================ RENDER: HOME ============================================================ */
function bookCardHTML(b){
  return `<div class="card">
    <div class="tag-row"><span class="tag blueprint">${b.category}</span><span class="tag">${b.year}</span></div>
    <h3>${b.title}</h3>
    <p class="meta">${b.author} · ${b.level}</p>
    <p class="desc">${b.desc}</p>
    <p class="why">${b.why}</p>
    <div class="card-foot"><a class="card-link" href="${b.link}" target="_blank" rel="noopener">Official source ↗</a></div>
  </div>`;
}
function softwareCardHTML(s){
  return `<div class="card">
    <div class="tag-row"><span class="tag blueprint">${s.category}</span><span class="level-pill level-${s.level}">${s.level}</span></div>
    <h3>${s.name}</h3>
    <p class="meta">${s.year} · ${s.difficulty}</p>
    <p class="desc">${s.use}</p>
    <p class="why">${s.path}</p>
    <div class="card-foot"><a class="card-link" href="${s.link}" target="_blank" rel="noopener">Official website ↗</a></div>
  </div>`;
}
function websiteCardHTML(w){
  return `<div class="card">
    <div class="tag-row"><span class="tag blueprint">${w.category}</span></div>
    <h3>${w.name}</h3>
    <p class="desc"><strong style="font-weight:600;">What: </strong>${w.what}</p>
    <p class="why">${w.why}</p>
    <p class="meta">Who it's for: ${w.who}</p>
    <div class="card-foot"><a class="card-link" href="${w.link}" target="_blank" rel="noopener">Visit site ↗</a></div>
  </div>`;
}
function courseCardHTML(c){
  return `<div class="card">
    <div class="tag-row"><span class="tag blueprint">${c.category}</span><span class="tag">${c.year}</span><span class="placeholder-flag">${c.note}</span></div>
    <h3>${c.title}</h3>
    <p class="meta">${c.provider}</p>
    <p class="desc">${c.desc}</p>
  </div>`;
}
function competitionResCardHTML(c){
  return `<div class="card">
    <div class="tag-row"><span class="tag blueprint">${c.category}</span></div>
    <h3>${c.name}</h3>
    <p class="desc">${c.what}</p>
    <p class="why">${c.why}</p>
    <div class="card-foot"><a class="card-link" href="${c.link}" target="_blank" rel="noopener">Visit site ↗</a></div>
  </div>`;
}
function templateCardHTML(t){
  return `<div class="card">
    <div class="tag-row"><span class="tag blueprint">${t.type}</span><span class="placeholder-flag">${t.note}</span></div>
    <h3>${t.title}</h3>
    <p class="desc">${t.desc}</p>
    <div class="card-foot"><button class="card-link" style="background:none;border:none;padding:0;font-family:var(--sans);" disabled>Download (coming soon)</button></div>
  </div>`;
}
function facultyCardHTML(f, idx){
  return `<div class="card faculty-card" data-faculty="${idx}" style="cursor:pointer;">
    <div style="display:flex;gap:14px;align-items:center;">
      <div class="faculty-avatar">${f.initials}</div>
      <div><h3 style="font-size:17px;">${f.name}</h3><p class="meta">${f.area}</p></div>
    </div>
    <p class="faculty-quote">"${f.advice}"</p>
    <p class="meta">Click for full recommendations</p>
  </div>`;
}
function workCardHTML(w, idx){
  return `<div class="gallery-item" data-work="${idx}">
    <div class="card" style="padding:0; overflow:hidden;">
      <img src="${w.image}" alt="${w.title}" style="width:100%; height:220px; object-fit:cover; display:block;">
      <div class="gallery-caption" style="padding-top:18px;">
        <div class="tag-row">
          <span class="tag blueprint">${w.category}</span>
          <span class="tag">${w.year}</span>
        </div>
        <h3 style="margin-top:8px;">${w.title}</h3>
        <p class="meta">${w.student} · ${w.course}</p>
      </div>
    </div>
  </div>`;
}
function oppRowHTML(o){
  return `<div class="opp-row">
    <div>
      <div class="opp-title">${o.name}</div>
      <div class="opp-org">${o.org} · ${o.type}</div>
      <p class="opp-desc">${o.desc}</p>
      <div class="opp-meta-row">
        <span class="deadline">Deadline: ${o.deadline}</span>
        <span class="meta">${o.location}</span>
        <a class="card-link" href="${o.link}" target="_blank" rel="noopener">Details ↗</a>
      </div>
    </div>
    <span class="status-pill status-${o.status}">${o.status}</span>
  </div>`;
}

const FACULTY = [
 {initials:"BF", name:"Ms. Bashayer Alfehaed", area:"Interior Architecture",
  book:{title:"Architecture: Form, Space & Order", why:"It's the clearest bridge between design theory and how students actually reason about spatial decisions."},
  research:"Circular Material Sourcing in Interior Renovation (see Research library)",
  website:"Material Bank", course:"Introduction to Parametric Design with Grasshopper", software:"Rhino, once fundamentals are solid",
  advice:"Draw before you model. Ideas survive being wrong on paper; they're expensive to undo once you're deep in a 3D file."},
];

function renderHome(){
  document.getElementById('home-resources-grid').innerHTML = [BOOKS[1], SOFTWARE[1], WEBSITES[0]].map((item,i)=>{
    if(i===0) return bookCardHTML(item);
    if(i===1) return softwareCardHTML(item);
    return websiteCardHTML(item);
  }).join('');
  document.getElementById('home-work-grid').innerHTML = WORK.slice(0,3).map((w)=>workCardHTML(w, WORK.indexOf(w))).join('');
  document.getElementById('home-faculty-grid').innerHTML = FACULTY.map((f,i)=>facultyCardHTML(f,i)).join('');
  document.getElementById('home-opportunities-list').innerHTML = OPPORTUNITIES.slice(0,3).map(oppRowHTML).join('');
  attachGalleryHandlers();
  attachFacultyHandlers();
}

/* ============================================================ RESOURCES: SUBNAV ============================================================ */
const resSubnav = document.getElementById('resources-subnav');
resSubnav.querySelectorAll('button').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    resSubnav.querySelectorAll('button').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('.res-panel').forEach(p=>p.style.display='none');
    document.getElementById('res-'+btn.dataset.sub).style.display='block';
  });
});

function renderFilterBar(containerId, cats, activeVal, onSelect){
  const container = document.getElementById(containerId);
  container.innerHTML = cats.map(c=>`<button class="filter-btn ${c===activeVal?'active':''}" data-val="${c}">${c}</button>`).join('');
  container.querySelectorAll('button').forEach(btn=>{
    btn.addEventListener('click', ()=>{ onSelect(btn.dataset.val); });
  });
}

function renderBooks(){
  renderFilterBar('books-cat-filter', uniqueCats(BOOKS,'category'), state.booksCat, (v)=>{ state.booksCat=v; renderBooks(); });
  const years = ["All Years","1st Year","2nd Year","3rd Year","4th Year"];
  const container = document.getElementById('books-year-filter');
  container.innerHTML = years.map(y=>`<button class="filter-btn ${y===state.booksYear?'active':''}" data-val="${y}">${y}</button>`).join('');
  container.querySelectorAll('button').forEach(btn=>{
    btn.addEventListener('click', ()=>{ state.booksYear = btn.dataset.val; renderBooks(); });
  });
  let list = BOOKS.filter(b => state.booksCat==="All" || b.category===state.booksCat);
  if(state.booksYear !== "All Years"){
    list = list.filter(b => b.year.includes(state.booksYear.replace(" Year","")) || b.year==="All Years");
  }
  if(state.booksSearch){
    const q = state.booksSearch;
    list = list.filter(b => matchesSearch(b.title+b.author+b.desc+b.topics.join(' '), q));
  }
  const grid = document.getElementById('books-grid');
  grid.innerHTML = list.length ? list.map(bookCardHTML).join('') : '<div class="no-results">No books match those filters yet.</div>';
}
document.getElementById('books-search').addEventListener('input', (e)=>{ state.booksSearch=e.target.value; renderBooks(); });

function renderSoftware(){
  renderFilterBar('software-cat-filter', uniqueCats(SOFTWARE,'category'), state.softwareCat, (v)=>{ state.softwareCat=v; renderSoftware(); });
  let list = SOFTWARE.filter(s => state.softwareCat==="All" || s.category===state.softwareCat);
  if(state.softwareSearch){
    const q = state.softwareSearch;
    list = list.filter(s => matchesSearch(s.name+s.use+s.category, q));
  }
  const grid = document.getElementById('software-grid');
  grid.innerHTML = list.length ? list.map(softwareCardHTML).join('') : '<div class="no-results">No software matches those filters yet.</div>';
}
document.getElementById('software-search').addEventListener('input', (e)=>{ state.softwareSearch=e.target.value; renderSoftware(); });

function renderWebsites(){
  renderFilterBar('websites-cat-filter', uniqueCats(WEBSITES,'category'), state.websitesCat, (v)=>{ state.websitesCat=v; renderWebsites(); });
  let list = WEBSITES.filter(w => state.websitesCat==="All" || w.category===state.websitesCat);
  if(state.websitesSearch){
    const q = state.websitesSearch;
    list = list.filter(w => matchesSearch(w.name+w.what+w.why, q));
  }
  const grid = document.getElementById('websites-grid');
  grid.innerHTML = list.length ? list.map(websiteCardHTML).join('') : '<div class="no-results">No websites match those filters yet.</div>';
}
document.getElementById('websites-search').addEventListener('input', (e)=>{ state.websitesSearch=e.target.value; renderWebsites(); });

function renderCourses(){ document.getElementById('courses-grid').innerHTML = COURSES.map(courseCardHTML).join(''); }
function renderCompetitionsRes(){ document.getElementById('competitions-grid').innerHTML = COMPETITIONS_RES.map(competitionResCardHTML).join(''); }
function renderTemplates(){ document.getElementById('templates-grid').innerHTML = TEMPLATES.map(templateCardHTML).join(''); }

/* ============================================================ STUDENT GUIDE ============================================================ */
const guideSubnav = document.getElementById('guide-subnav');
guideSubnav.querySelectorAll('button').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    guideSubnav.querySelectorAll('button').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    renderGuide(btn.dataset.sub);
  });
});
function listBlock(title, items){
  if(!items) return '';
  return `<div class="guide-group"><h4>${title}</h4><ul>${items.map(i=>`<li>${i}</li>`).join('')}</ul></div>`;
}
function renderGuide(key){
  const g = GUIDE[key];
  const container = document.getElementById('guide-content');
  if(key==='new'){
    container.innerHTML = `
    <div class="guide-block">
      <div class="guide-side">
        <span class="label">New Students</span>
        <h3 style="margin-top:6px;font-size:24px;">${g.title}</h3>
        <p style="color:var(--ink-soft);font-size:14px;margin-top:8px;">${g.subtitle}</p>
      </div>
      <div>
        ${listBlock("What to expect", g.expect)}
        ${listBlock("What you'll actually need", g.need)}
        ${listBlock("Essential software", g.software)}
        ${listBlock("Studio culture", g.culture)}
        ${listBlock("Organizing files", g.files)}
        ${listBlock("Managing projects", g.projects)}
        ${listBlock("Presenting work", g.present)}
        ${listBlock("Common mistakes", g.mistakes)}
        <div class="guide-group">
          <h4>Things we wish we knew</h4>
          ${g.wishes.map(w=>`<div class="wish-item"><p>"${w.text}"</p><p class="meta">${w.meta}</p></div>`).join('')}
        </div>
      </div>
    </div>`;
  } else {
    container.innerHTML = `
    <div class="guide-block">
      <div class="guide-side">
        <span class="year-num">${key.replace('y','')}</span>
        <h3 style="margin-top:6px;font-size:24px;">${g.title}</h3>
        <p style="color:var(--ink-soft);font-size:14px;margin-top:8px;">${g.subtitle}</p>
      </div>
      <div>
        ${listBlock("What to focus on", g.focus)}
        ${listBlock("Skills to develop", g.skills)}
        ${listBlock("Software to learn", g.software)}
        ${listBlock("Recommended books", g.books)}
        ${listBlock("Recommended websites", g.websites)}
        ${listBlock("Useful courses", g.courses)}
        ${listBlock("Studio advice", g.studio)}
        ${listBlock("Common mistakes", g.mistakes)}
        ${listBlock("Before moving to the next year", g.before_next)}
      </div>
    </div>`;
  }
}

/* ============================================================ STUDENT WORK ============================================================ */
function renderWork(){
  const cats = uniqueCats(WORK,'category');
  renderFilterBar('work-cat-filter', cats, state.workCat, (v)=>{ state.workCat=v; renderWork(); });
  const list = WORK.map((w,i)=>({...w, idx:i})).filter(w=> state.workCat==="All" || w.category===state.workCat);
  document.getElementById('work-grid').innerHTML = list.length ? list.map(w=>workCardHTML(w,w.idx)).join('') : '<div class="no-results">No projects in this category yet.</div>';
  attachGalleryHandlers();
}
function attachGalleryHandlers(){
  document.querySelectorAll('[data-work]').forEach(item=>{
    item.addEventListener('click', ()=>{
      const w = WORK[parseInt(item.dataset.work)];

      openModal(`
        <img 
          src="${w.image}" 
          alt="${w.title}" 
          style="width:100%; max-height:420px; object-fit:cover; display:block; border-radius:4px; margin-bottom:22px;"
        >

        <h3 style="margin-top:12px;">${w.title}</h3>

        <p class="meta">${w.student} · ${w.year} · ${w.course}</p>

        <div class="modal-section">
          <h5>Concept</h5>
          <p>${w.concept}</p>
        </div>

        <div class="modal-section">
          <h5>Description</h5>
          <p>${w.desc}</p>
        </div>
      `);
    });
  });
}
/* ============================================================ FACULTY ============================================================ */
function renderFaculty(){
  document.getElementById('faculty-grid').innerHTML = FACULTY.map((f,i)=>facultyCardHTML(f,i)).join('');
  attachFacultyHandlers();
}
function attachFacultyHandlers(){
  document.querySelectorAll('[data-faculty]').forEach(item=>{
    item.addEventListener('click', ()=>{
      const f = FACULTY[parseInt(item.dataset.faculty)];
      openModal(`
        <span class="placeholder-flag">PLACEHOLDER — TO BE REPLACED (pending faculty approval)</span>
        <h3 style="margin-top:12px;">${f.name}</h3>
        <p class="meta">${f.area}</p>
        <div class="modal-section"><h5>Recommended book</h5><p><strong>${f.book.title}</strong> — ${f.book.why}</p></div>
        <div class="modal-section"><h5>Recommended research</h5><p>${f.research}</p></div>
        <div class="modal-section"><h5>Recommended website</h5><p>${f.website}</p></div>
        <div class="modal-section"><h5>Recommended course</h5><p>${f.course}</p></div>
        <div class="modal-section"><h5>Software students should learn</h5><p>${f.software}</p></div>
        <p class="faculty-quote">"${f.advice}"</p>
      `);
    });
  });
}

/* ============================================================ RESEARCH ============================================================ */
function researchRowHTML(r){
  return `<div class="opp-row" style="grid-template-columns:1fr;">
    <div>
      <div class="tag-row" style="margin-bottom:8px;"><span class="tag blueprint">${r.category}</span><span class="tag">${r.relevantYear}</span></div>
      <div class="opp-title">${r.title}</div>
      <div class="opp-org">${r.author} · ${r.year}</div>
      <p class="opp-desc">${r.abstract}</p>
      <p class="why" style="margin-top:10px;max-width:60ch;">${r.why}</p>
    </div>
  </div>`;
}
function renderResearch(){
  renderFilterBar('research-cat-filter', uniqueCats(RESEARCH,'category'), state.researchCat, (v)=>{ state.researchCat=v; renderResearch(); });
  let list = RESEARCH.filter(r => state.researchCat==="All" || r.category===state.researchCat);
  if(state.researchSearch){
    const q = state.researchSearch;
    list = list.filter(r => matchesSearch(r.title+r.abstract+r.topic, q));
  }
  document.getElementById('research-list').innerHTML = list.length ? list.map(researchRowHTML).join('') : '<div class="no-results">No research entries match yet.</div>';
}
document.getElementById('research-search').addEventListener('input', (e)=>{ state.researchSearch=e.target.value; renderResearch(); });

/* ============================================================ OPPORTUNITIES ============================================================ */
function renderOpportunities(){
  const types = uniqueCats(OPPORTUNITIES,'type');
  renderFilterBar('opp-type-filter', types, state.oppType, (v)=>{ state.oppType=v; renderOpportunities(); });
  const list = OPPORTUNITIES.filter(o => state.oppType==="All" || o.type===state.oppType);
  document.getElementById('opportunities-list').innerHTML = list.length ? list.map(oppRowHTML).join('') : '<div class="no-results">No opportunities in this category right now.</div>';
}

/* ============================================================ FAQ ============================================================ */
function renderFAQ(){
  renderFilterBar('faq-cat-filter', uniqueCats(FAQ,'cat'), state.faqCat, (v)=>{ state.faqCat=v; renderFAQ(); });
  let list = FAQ.filter(f => state.faqCat==="All" || f.cat===state.faqCat);
  if(state.faqSearch){
    const q = state.faqSearch;
    list = list.filter(f => matchesSearch(f.q+f.a, q));
  }
  const container = document.getElementById('faq-list');
  container.innerHTML = list.length ? list.map((f,i)=>`
    <div class="faq-item" data-idx="${i}">
      <button class="faq-q"><span>${f.q}</span><span class="plus">+</span></button>
      <div class="faq-a"><div class="faq-a-inner">${f.a}</div></div>
    </div>
  `).join('') : '<div class="no-results">No FAQ entries match your search.</div>';
  container.querySelectorAll('.faq-item').forEach(item=>{
    item.querySelector('.faq-q').addEventListener('click', ()=>{
      const wasOpen = item.classList.contains('open');
      container.querySelectorAll('.faq-item').forEach(i=>i.classList.remove('open'));
      if(!wasOpen) item.classList.add('open');
    });
  });
}
document.getElementById('faq-search').addEventListener('input', (e)=>{ state.faqSearch=e.target.value; renderFAQ(); });

/* ============================================================ FORMS ============================================================ */
function submitResourceFormHTML(){
  return `
  <h3>Recommend a resource</h3>
  <p class="meta" style="margin-bottom:20px;">All submissions are reviewed before being published.</p>
  <div class="form-success" id="resource-success">Thanks — your recommendation has been submitted for review.</div>
  <form id="resourceForm">
    <div class="form-grid">
      <div class="field"><label>Resource name</label><input required name="name" type="text"></div>
      <div class="field"><label>Type</label>
        <select name="type" required>
          <option value="">Select one</option>
          <option>Book</option><option>Website</option><option>Course</option><option>Research</option>
          <option>Competition</option><option>Workshop</option><option>Tool</option><option>Other</option>
        </select>
      </div>
      <div class="field full"><label>Link</label><input name="link" type="url" placeholder="https://"></div>
      <div class="field full"><label>Why do you recommend it?</label><textarea required name="why"></textarea></div>
      <div class="field"><label>Recommended academic year</label>
        <select name="year">
          <option>All Years</option><option>1st Year</option><option>2nd Year</option><option>3rd Year</option><option>4th Year</option>
        </select>
      </div>
      <div class="field"><label>Your name (optional)</label><input name="student" type="text"></div>
    </div>
    <button class="btn" type="submit" style="margin-top:22px;">Submit recommendation</button>
    <p class="form-note">Submissions are reviewed by the Interior Design Club before appearing anywhere on the site.</p>
  </form>`;
}
function submitFacultyFormHTML(){
  return `
  <h3>Faculty recommendation form</h3>
  <p class="meta" style="margin-bottom:20px;">We'll confirm details with you before anything is published under your name.</p>
  <div class="form-success" id="faculty-success">Thank you — we'll follow up before publishing your profile.</div>
  <form id="facultyForm">
    <div class="form-grid">
      <div class="field"><label>Name</label><input required name="name" type="text"></div>
      <div class="field"><label>Specialization</label><input required name="specialization" type="text"></div>
      <div class="field full"><label>Recommended book</label><input name="book" type="text"></div>
      <div class="field full"><label>Why do you recommend it?</label><textarea name="bookWhy"></textarea></div>
      <div class="field"><label>Recommended research</label><input name="research" type="text"></div>
      <div class="field"><label>Recommended website</label><input name="website" type="text"></div>
      <div class="field"><label>Recommended course</label><input name="course" type="text"></div>
      <div class="field"><label>Software students should learn</label><input name="software" type="text"></div>
      <div class="field full"><label>Advice for students</label><textarea name="advice"></textarea></div>
      <div class="field"><label>Recommended academic year</label>
        <select name="year">
          <option>All Years</option><option>1st Year</option><option>2nd Year</option><option>3rd Year</option><option>4th Year</option>
        </select>
      </div>
    </div>
    <button class="btn" type="submit" style="margin-top:22px;">Submit recommendation</button>
    <p class="form-note">Recommendations are only published in Faculty Picks after your review and approval.</p>
  </form>`;
}
document.addEventListener('submit', (e)=>{
if(e.target.id === 'resourceForm'){
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);

  fetch('https://formspree.io/f/xaeygjrd', {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
      document.getElementById('resource-success').classList.add('show');
      form.reset();
      form.style.display = 'none';
    } else {
      alert('Something went wrong. Please try again.');
    }
  })
  .catch(() => {
    alert('Something went wrong. Please check your connection and try again.');
  });
}

  if(e.target.id === 'facultyForm'){
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    fetch('https://formspree.io/f/xaeygjrd', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        document.getElementById('faculty-success').classList.add('show');
        form.reset();
        form.style.display = 'none';
      } else {
        alert('Something went wrong. Please try again.');
      }
    })
    .catch(() => {
      alert('Something went wrong. Please check your connection and try again.');
    });
  }
});
/* ============================================================ INIT ============================================================ */
function renderAll(){
  renderHome();
  renderBooks(); renderSoftware(); renderWebsites(); renderCourses(); renderCompetitionsRes(); renderTemplates();
  renderGuide('new');
  renderWork();
  renderFaculty();
  renderResearch();
  renderOpportunities();
  renderFAQ();
}
renderAll();

const initialHash = window.location.hash.replace('#','');
if(pages.includes(initialHash)) goTo(initialHash);
