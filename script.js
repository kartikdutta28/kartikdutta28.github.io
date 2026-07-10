/* =========================================================
   KartikeOS '98 — window manager + content
   ========================================================= */

/* ---------- Résumé file (sits next to index.html) ---------- */
const RESUME_FILE = 'Kartike_Dutta_Resume_Lst_23_Apr.pdf';

/* ---------- Window content (from résumé) ---------- */
const WINDOWS = {
  resume: {
    title: '📄 Résumé.pdf — PDF Viewer',
    w: 760,
    cls: 'pdf-window',
    html: `
      <div class="pdf-toolbar">
        <a class="btn" href="${RESUME_FILE}" target="_blank" rel="noopener">🔍 Open in new tab</a>
        <a class="btn" href="${RESUME_FILE}" download>⬇️ Download</a>
        <span class="pdf-name">Kartike_Dutta_Resume.pdf</span>
      </div>
      <iframe class="pdf-frame" src="${RESUME_FILE}#toolbar=1&view=FitH" title="Kartike Dutta Résumé"></iframe>
      <p class="pdf-fallback">Can't see the document? <a href="${RESUME_FILE}" target="_blank" rel="noopener">Open the résumé here</a>.</p>`,
  },
  about: {
    title: '📁 About Me',
    w: 460,
    html: `
      <h2>Kartike Dutta</h2>
      <p class="win-muted">Lead Software Engineer · AI &amp; Cloud Applications<br/>Gurgaon, Haryana, India</p>
      <p>Lead Full Stack Engineer with <b>8+ years</b> of experience designing and delivering
      scalable web and cloud applications using Python, TypeScript, JavaScript, Angular, Node.js and SQL.</p>
      <p>Currently leading automation and internal tooling initiatives at <b>Criteo</b>, including
      AI-adjacent workflow automation and large-scale retail media integrations. Proven experience
      building APIs, process automation, CI/CD workflows and client-facing solutions.</p>
      <p>Strong foundation in software engineering, code reviews, testing and stakeholder collaboration,
      with growing expertise in <b>LLMs, FastAPI, Kubernetes</b> and cloud-native AI applications.</p>`,
  },
  skills: {
    title: '🧰 Skills.exe',
    w: 440,
    html: `
      <h2>Technical Skills</h2>
      ${skillBlock('Languages', ['Python', 'TypeScript', 'JavaScript', 'SQL'])}
      ${skillBlock('Backend', ['FastAPI', 'Node.js', 'NestJS', 'REST APIs', 'Microservices'])}
      ${skillBlock('Frontend', ['Angular', 'React', 'HTML', 'CSS'])}
      ${skillBlock('AI / Automation', ['Prompt Engineering', 'LangChain', 'LLMs', 'Process Automation'])}
      ${skillBlock('Cloud & DevOps', ['Docker', 'Kubernetes', 'Git', 'Gerrit', 'Jenkins', 'CI/CD', 'GitHub Actions', 'Linux'])}
      ${skillBlock('Databases & Orchestration', ['MariaDB', 'SQL', 'Airflow'])}
      <p class="win-muted">Methodologies: Agile · TDD · Code Reviews · OOP</p>`,
  },
  experience: {
    title: '💼 Experience',
    w: 520,
    html: `
      <h2>Professional Experience</h2>
      ${job('Full Stack Engineer 2', 'Criteo', 'Apr 2024 – Present', [
        'Led development of an internal tool to automate advertisement banner generation, significantly reducing manual effort and turnaround time.',
        'Integrated client review workflows to enable efficient and timely feedback on generated banners.',
        'Collaborated with design and technical solutions teams to align functionality with branding and business requirements.',
        'Contributed to scalable retail media solutions and internal productivity tooling.',
      ])}
      ${job('Full Stack Engineer', 'Criteo', 'Jan 2022 – Apr 2024', [
        'Led development and implementation of retail media search & display integrations for major JPAC e-commerce platforms.',
        'Served as technical owner for internal applications and proof-of-concepts used by operations teams and clients.',
        'Built real-time campaign performance tracking tools enabling data-driven optimization and improved ROI.',
        'Developed Slack bots for automated Jira ticketing, notifications and cross-team communication.',
        'Conducted peer code reviews and implemented process improvements and SOPs.',
      ])}
      ${job('Software Engineer', 'Infogain India Pvt Ltd', 'Jan 2020 – Jan 2022', [
        'Delivered checkout flow enhancements for an e-commerce web application, improving conversion rates.',
        'Resolved production defects within SLA, ensuring application stability and reliability.',
        'Collaborated with stakeholders to validate requirements and present prototypes.',
        'Practiced test-driven development, feature grooming and peer code reviews.',
      ])}`,
  },
  projects: {
    title: '🗂️ Projects',
    w: 500,
    html: `
      <h2>Selected Projects</h2>
      ${proj('📄 AI Resume &amp; Document Automation',
        'Python-based automation workflows to generate and validate structured documents, applying prompt-engineering techniques to create tailored outputs aligned to business requirements.')}
      ${proj('🤖 Internal Workflow Automation Bots',
        'Slack bots that automate ticket creation, notifications and engineering workflow coordination across cross-functional teams.')}
      ${proj('🖼️ Ad Banner Generation Platform',
        'Internal tool automating advertisement banner generation with integrated client review workflows — dramatically reducing manual effort and turnaround.')}
      ${proj('📊 Campaign Performance Tracking',
        'Real-time campaign performance tracking tools for JPAC e-commerce integrations, enabling data-driven optimization and improved ROI.')}`,
  },
  education: {
    title: '🎓 Education',
    w: 460,
    html: `
      <h2>Education &amp; Learning</h2>
      <h3>Master in Computer Applications (MCA)</h3>
      <p class="win-muted">Lal Bahadur Shastri Institute of Management, GGSIP University</p>
      <h3>Bachelor of Arts — Vocational Studies (SME)</h3>
      <p class="win-muted">University of Delhi</p>
      <h3>Certifications &amp; Upskilling</h3>
      <p>Ongoing upskilling in FastAPI, Kubernetes, LangChain and cloud-native AI application development.</p>`,
  },
  contact: {
    title: '📇 Contact.card',
    w: 400,
    html: `
      <h2>Get In Touch</h2>
      <div class="contact-row"><b>Email:</b> <a href="mailto:kartikdutta29@gmail.com">kartikdutta29@gmail.com</a></div>
      <div class="contact-row"><b>Phone:</b> <a href="tel:+919560561224">+91 95605 61224</a></div>
      <div class="contact-row"><b>LinkedIn:</b> <a href="https://linkedin.com/in/kartike-dutta-4b1228a0" target="_blank" rel="noopener">kartike-dutta</a></div>
      <div class="contact-row"><b>Location:</b> Gurgaon, Haryana, India</div>
      <p style="margin-top:14px">Always open to interesting conversations — AI tooling, cloud engineering, or just talking shop. 🙂</p>`,
  },
  recycle: {
    title: '🗑️ Recycle Bin',
    w: 340,
    html: `
      <h2>Recycle Bin</h2>
      <p>The Recycle Bin is empty.</p>
      <p class="win-muted">(All bad code was refactored, not deleted.)</p>`,
  },
  'about-os': {
    title: 'ℹ️ About KartikeOS',
    w: 360,
    html: `
      <h2>KartikeOS 98</h2>
      <p>A retro-desktop portfolio for <b>Kartike Dutta</b>.</p>
      <p class="win-muted">Built with plain HTML, CSS &amp; JavaScript — no frameworks, no dependencies.
      Inspired by Windows 98. 100% powered by ☕.</p>
      <p>Double-click the desktop icons to explore, or use the <b>Start</b> menu.</p>`,
  },
};

function skillBlock(title, tags) {
  return `<div class="skill-block"><h3>${title}</h3>
    <div class="badges">${tags.map(t => `<span class="badge">${t}</span>`).join('')}</div></div>`;
}
function job(role, company, date, points) {
  return `<div class="job">
    <div class="job-head"><h3 style="margin:0">${role} — ${company}</h3><span class="job-date">${date}</span></div>
    <ul>${points.map(p => `<li>${p}</li>`).join('')}</ul></div>`;
}
function proj(title, body) {
  return `<div class="proj"><div class="proj-title">${title}</div><div class="proj-body">${body}</div></div>`;
}

/* ---------- Window manager ---------- */
let zTop = 10;
const open = {};              // id -> {el, taskEl, minimized}
const layer = () => document.getElementById('windowLayer');
const taskItems = () => document.getElementById('taskItems');

function focusWindow(id) {
  Object.values(open).forEach(w => {
    w.el.classList.add('inactive');
    w.taskEl.classList.remove('active');
  });
  const w = open[id];
  if (!w) return;
  w.el.classList.remove('inactive');
  w.el.style.zIndex = ++zTop;
  w.taskEl.classList.add('active');
}

function openWindow(id) {
  const def = WINDOWS[id];
  if (!def) return;

  if (open[id]) {                       // already open -> restore + focus
    open[id].el.classList.remove('hidden');
    open[id].minimized = false;
    focusWindow(id);
    return;
  }

  const win = document.createElement('div');
  win.className = 'app-window' + (def.cls ? ' ' + def.cls : '');

  const isMobile = document.documentElement.classList.contains('m');
  if (isMobile) {
    // Fill the screen so content is large and readable — no cascade on phones
    win.style.width = (document.documentElement.clientWidth - 12) + 'px';
    win.style.left = '6px';
    win.style.top = '8px';
  } else {
    const width = Math.min(def.w || 400, window.innerWidth - 20);
    win.style.width = width + 'px';
    const count = Object.keys(open).length;
    const offset = count * 26;
    const left = Math.max(6, Math.min((window.innerWidth - width) / 2 + offset - 60, window.innerWidth - width - 6));
    const top = Math.max(10, 40 + offset);
    win.style.left = left + 'px';
    win.style.top = top + 'px';
  }

  win.innerHTML = `
    <div class="title-bar">
      <span class="title-bar-text">${def.title}</span>
      <span class="title-bar-controls">
        <button data-act="min" aria-label="Minimize">_</button>
        <button data-act="close" aria-label="Close">✕</button>
      </span>
    </div>
    <div class="window-content">${def.html}</div>`;
  layer().appendChild(win);

  // taskbar item
  const task = document.createElement('button');
  task.className = 'task-item';
  task.innerHTML = def.title;
  taskItems().appendChild(task);

  open[id] = { el: win, taskEl: task, minimized: false };

  // events
  win.querySelector('[data-act="close"]').addEventListener('click', e => { e.stopPropagation(); closeWindow(id); });
  win.querySelector('[data-act="min"]').addEventListener('click', e => { e.stopPropagation(); minimizeWindow(id); });
  win.addEventListener('mousedown', () => focusWindow(id));
  task.addEventListener('click', () => {
    if (open[id].minimized || open[id].el.classList.contains('inactive')) {
      open[id].el.classList.remove('hidden'); open[id].minimized = false; focusWindow(id);
    } else {
      minimizeWindow(id);
    }
  });

  makeDraggable(win, win.querySelector('.title-bar'));
  focusWindow(id);
}

function closeWindow(id) {
  if (!open[id]) return;
  open[id].el.remove();
  open[id].taskEl.remove();
  delete open[id];
}
function minimizeWindow(id) {
  if (!open[id]) return;
  open[id].el.classList.add('hidden');
  open[id].minimized = true;
  open[id].taskEl.classList.remove('active');
}

/* ---------- Dragging ---------- */
function makeDraggable(win, handle) {
  let sx, sy, ox, oy, dragging = false;
  function down(e) {
    if (e.target.closest('.title-bar-controls')) return;
    dragging = true;
    const p = e.touches ? e.touches[0] : e;
    sx = p.clientX; sy = p.clientY;
    ox = win.offsetLeft; oy = win.offsetTop;
    document.addEventListener('mousemove', move);
    document.addEventListener('mouseup', up);
    document.addEventListener('touchmove', move, { passive: false });
    document.addEventListener('touchend', up);
  }
  function move(e) {
    if (!dragging) return;
    if (e.cancelable) e.preventDefault();
    const p = e.touches ? e.touches[0] : e;
    let nx = ox + (p.clientX - sx);
    let ny = oy + (p.clientY - sy);
    nx = Math.max(-win.offsetWidth + 60, Math.min(nx, window.innerWidth - 60));
    ny = Math.max(0, Math.min(ny, window.innerHeight - 60));
    win.style.left = nx + 'px';
    win.style.top = ny + 'px';
  }
  function up() {
    dragging = false;
    document.removeEventListener('mousemove', move);
    document.removeEventListener('mouseup', up);
    document.removeEventListener('touchmove', move);
    document.removeEventListener('touchend', up);
  }
  handle.addEventListener('mousedown', down);
  handle.addEventListener('touchstart', down, { passive: true });
}

/* ---------- Icon / menu wiring ---------- */
function handleActivate(elm) {
  const winId = elm.dataset.window;
  const link = elm.dataset.link;
  if (winId) openWindow(winId);
  else if (link) window.open(link, '_blank', 'noopener');
}

function initIcons() {
  document.querySelectorAll('.d-icon').forEach(icon => {
    // single click selects, double click opens (desktop feel); tap opens on touch
    icon.addEventListener('dblclick', () => handleActivate(icon));
    icon.addEventListener('click', () => {
      document.querySelectorAll('.d-icon').forEach(i => i.classList.remove('selected'));
      icon.classList.add('selected');
    });
    // touch: single tap opens
    icon.addEventListener('touchend', e => { e.preventDefault(); handleActivate(icon); }, { passive: false });
  });
}

/* ---------- Start menu ---------- */
function initStart() {
  const startBtn = document.getElementById('startBtn');
  const menu = document.getElementById('startMenu');
  function toggle(show) {
    const open = show ?? menu.classList.contains('hidden');
    menu.classList.toggle('hidden', !open);
    startBtn.classList.toggle('active', open);
  }
  startBtn.addEventListener('click', e => { e.stopPropagation(); toggle(); });
  document.addEventListener('click', e => {
    if (!menu.contains(e.target) && e.target !== startBtn) toggle(false);
  });
  menu.querySelectorAll('.start-item').forEach(item => {
    if (item.id === 'shutdown') return;
    item.addEventListener('click', () => { handleActivate(item); toggle(false); });
  });
  document.getElementById('shutdown').addEventListener('click', () => {
    toggle(false);
    shutdown();
  });
}

function shutdown() {
  const overlay = document.createElement('div');
  overlay.className = 'boot';
  overlay.style.zIndex = 200;
  overlay.innerHTML = `<div class="boot-msg" style="font-size:16px">It's now safe to turn off your computer.</div>
    <button class="btn" style="margin-top:20px" id="rebootBtn">Reboot</button>`;
  document.body.appendChild(overlay);
  overlay.querySelector('#rebootBtn').addEventListener('click', () => location.reload());
}

/* ---------- Clock ---------- */
function initClock() {
  const clock = document.getElementById('clock');
  function tick() {
    const d = new Date();
    let h = d.getHours(); const m = String(d.getMinutes()).padStart(2, '0');
    const ap = h >= 12 ? 'PM' : 'AM'; h = h % 12 || 12;
    clock.textContent = `${h}:${m} ${ap}`;
  }
  tick(); setInterval(tick, 10000);
}

/* ---------- Boot -> Login -> Desktop ---------- */
function initBootSequence() {
  const boot = document.getElementById('boot');
  const login = document.getElementById('login');
  const desktop = document.getElementById('desktop');

  setTimeout(() => { boot.classList.add('hidden'); login.classList.remove('hidden'); }, 2600);

  function enter() {
    login.classList.add('hidden');
    desktop.classList.remove('hidden');
    setTimeout(() => openWindow('about'), 250);   // welcome window
  }
  document.getElementById('loginEnter').addEventListener('click', enter);
  document.getElementById('loginCancel').addEventListener('click', enter);
  document.getElementById('loginPass').addEventListener('keydown', e => { if (e.key === 'Enter') enter(); });
}

/* ---------- Init ---------- */
document.addEventListener('DOMContentLoaded', () => {
  initBootSequence();
  initIcons();
  initStart();
  initClock();
  // Keep the mobile class in sync on rotation / resize
  if (window.__setMobileClass) {
    window.addEventListener('resize', window.__setMobileClass);
    window.addEventListener('orientationchange', window.__setMobileClass);
  }
});
