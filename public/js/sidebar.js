/* =========================
   Utils: Sidebar open state
========================= */
function getOpenCats() {
  try {
    return JSON.parse(localStorage.getItem('openCats') || '[]');
  } catch {
    return [];
  }
}

function setOpenCats(arr) {
  localStorage.setItem('openCats', JSON.stringify(arr));
}

/* =========================
   Sidebar expand / collapse
========================= */
function toggle(el) {
  if (!el) return;

  const list = el.nextElementSibling;
  if (!list) return;

  el.classList.toggle('open');
  list.classList.toggle('open');

  const key = el.textContent.trim();
  const openCats = getOpenCats();
  const isOpen = el.classList.contains('open');

  if (isOpen && !openCats.includes(key)) {
    openCats.push(key);
  } else if (!isOpen) {
    const idx = openCats.indexOf(key);
    if (idx !== -1) openCats.splice(idx, 1);
  }

  setOpenCats(openCats);
}

/* =========================
   Restore expand state
   (default: all collapsed)
========================= */
(function restoreOpenCats() {
  const openCats = getOpenCats();
  if (!openCats.length) return;

  document.querySelectorAll('.menu-cat-title').forEach(cat => {
    const key = cat.textContent.trim();
    const items = cat.nextElementSibling;
    const shouldOpen = openCats.includes(key);

    cat.classList.toggle('open', shouldOpen);
    if (items) items.classList.toggle('open', shouldOpen);
  });
})();

/* =========================
   Search (sidebar only)
========================= */
(function initSearch() {
  const searchInput = document.getElementById('searchInput');
  if (!searchInput) return;

  searchInput.addEventListener('input', e => {
    const keyword = e.target.value.toLowerCase();

    document.querySelectorAll('.menu-items li').forEach(li => {
      const text = li.innerText.toLowerCase();
      li.style.display = text.includes(keyword) ? '' : 'none';
    });

    // Auto expand groups with visible results
    document.querySelectorAll('.menu-cat-title').forEach(cat => {
      const items = cat.nextElementSibling;
      if (!items) return;

      const hasVisible = [...items.children].some(
        li => li.style.display !== 'none'
      );

      cat.classList.toggle('open', hasVisible);
      items.classList.toggle('open', hasVisible);
    });
  });
})();

/* =========================
   Theme toggle (Light / Dark)
========================= */
(function initThemeToggle() {
  const btn = document.getElementById('themeToggle');
  if (!btn) return;

  function updateText(theme) {
    btn.textContent = theme === 'dark' ? '☀️ Light' : '🌙 Dark';
  }

  const current = localStorage.getItem('theme') || 'light';
  document.documentElement.dataset.theme = current;
  updateText(current);

  btn.addEventListener('click', () => {
    const next =
      document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    localStorage.setItem('theme', next);
    updateText(next);
  });
})();

/* =========================
   Mobile sidebar drawer
========================= */
(function initSidebarDrawer() {
  const menuToggle = document.getElementById('homeBtn'); // 用 homeBtn 代替
  const sidebar = document.getElementById('sidebar');
  const backdrop = document.getElementById('sidebarBackdrop');

  // ✅ iOS: prevent scroll chaining / page scroll when swiping inside sidebar
  if (sidebar) {
    sidebar.addEventListener(
      'touchmove',
      (e) => {
        // 只要在 sidebar 内滑动，就不要让事件滚到 body
        e.stopPropagation();
      },
      { passive: true }
    );
  }


  if (!sidebar) return;

  function openSidebar() {
    sidebar.classList.add('is-open');
    backdrop && backdrop.classList.add('show');
    document.body.classList.add('no-scroll');
  }

  function closeSidebar() {
    sidebar.classList.remove('is-open');
    backdrop && backdrop.classList.remove('show');
    document.body.classList.remove('no-scroll');
  }

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      sidebar.classList.contains('is-open')
        ? closeSidebar()
        : openSidebar();
    });
  }

  (function bindHomeBehavior() {
  const homeBtn = document.getElementById('homeBtn');
  if (!homeBtn) return;

  homeBtn.addEventListener('click', () => {
    // 桌面端：回首页（保留 lang）
    if (window.innerWidth >= 768) {
      const url = new URL(window.location.href);
      const lang = url.searchParams.get('lang') || 'zh';
      window.location.href = `/?lang=${lang}`;
    }
  });
})();


  backdrop && backdrop.addEventListener('click', closeSidebar);

  // Close drawer after clicking doc (mobile)
  document.querySelectorAll('.sidebar a').forEach(a => {
    a.addEventListener('click', () => {
      if (window.innerWidth < 768) closeSidebar();
    });
  });

  function preventBodyScroll(e) {
    // 当 sidebar 打开时，禁止 body 滚动（但不影响 sidebar）
    if (sidebar && sidebar.classList.contains('is-open')) {
      // 如果触摸目标不在 sidebar 内，则阻止
      if (!sidebar.contains(e.target)) e.preventDefault();
    }
  }

  // 注意 passive:false，否则 preventDefault 无效
  document.addEventListener('touchmove', preventBodyScroll, { passive: false });

})();

/* =========================
   Language toggle (zh / en)
========================= */
(function initLangToggle() {
  const btn = document.getElementById('langToggle');
  if (!btn) return;

  function getLang() {
    const params = new URLSearchParams(window.location.search);
    const qLang = params.get('lang');
    if (qLang === 'en' || qLang === 'zh') return qLang;

    const saved = localStorage.getItem('lang');
    if (saved === 'en' || saved === 'zh') return saved;

    return 'zh';
  }

  function setLang(lang) {
    localStorage.setItem('lang', lang);
  }

  function updateText(lang) {
    btn.textContent = `🌐 ${lang === 'zh' ? 'English' : '中文'}`;
  }

  const currentLang = getLang();
  setLang(currentLang);
  updateText(currentLang);

  // Ensure URL has lang
  const url = new URL(window.location.href);
  if (!url.searchParams.get('lang')) {
    url.searchParams.set('lang', currentLang);
    window.history.replaceState({}, '', url.toString());
  }

  btn.addEventListener('click', () => {
    const next = getLang() === 'zh' ? 'en' : 'zh';
    setLang(next);

    const url = new URL(window.location.href);
    url.searchParams.set('lang', next);
    window.location.href = url.toString();
  });
})();
