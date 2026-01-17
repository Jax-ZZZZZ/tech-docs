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
/* =========================
   Search (sidebar only)
========================= */
/* =========================
   Search (sidebar only) + highlight
========================= */
(function initSearch() {
  const searchInput = document.getElementById('searchInput');
  if (!searchInput) return;

  const hint = document.getElementById('sidebarSearchHint');

  function restoreOpenCatsState() {
    const openCats = getOpenCats();
    document.querySelectorAll('.menu-cat-title').forEach(cat => {
      const key = cat.textContent.trim();
      const items = cat.nextElementSibling;
      const shouldOpen = openCats.includes(key);
      cat.classList.toggle('open', shouldOpen);
      if (items) items.classList.toggle('open', shouldOpen);
    });
  }

  function showAllItems() {
    document.querySelectorAll('.menu-items li').forEach(li => {
      li.style.display = '';
    });
  }

  // 记录原始文本，用于恢复（避免多次 mark 嵌套）
  function cacheOriginalText() {
    document.querySelectorAll('.menu-items a').forEach(a => {
      if (!a.dataset.rawText) a.dataset.rawText = a.textContent;
    });
  }

  function clearHighlights() {
    document.querySelectorAll('.menu-items a').forEach(a => {
      if (a.dataset.rawText) a.textContent = a.dataset.rawText;
    });
  }

  // 简单的字符串高亮（不支持正则特殊字符问题：已做 escape）
  function escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function highlight(keyword) {
    if (!keyword) return;
    const re = new RegExp(escapeRegExp(keyword), 'ig');

    document.querySelectorAll('.menu-items a').forEach(a => {
      const raw = a.dataset.rawText || a.textContent;
      if (!raw) return;

      if (!re.test(raw)) {
        a.textContent = raw;
        return;
      }

      // 重新创建一次（避免保留旧 mark）
      a.innerHTML = raw.replace(re, m => `<mark>${m}</mark>`);
    });
  }

  cacheOriginalText();

  searchInput.addEventListener('input', e => {
    const keyword = e.target.value.toLowerCase().trim();

    // 关键词为空：恢复默认（显示全部 + 恢复展开 + 清高亮 + 隐藏提示）
    if (!keyword) {
      showAllItems();
      restoreOpenCatsState();
      clearHighlights();
      if (hint) hint.style.display = 'none';
      return;
    }

    // 先清高亮，再按新关键词高亮（避免叠加）
    clearHighlights();

    // 过滤 item
    let matchCount = 0;
    document.querySelectorAll('.menu-items li').forEach(li => {
      const text = li.innerText.toLowerCase();
      const matched = text.includes(keyword);
      li.style.display = matched ? '' : 'none';
      if (matched) matchCount++;
    });

    // 无结果：恢复全部显示 + 显示提示（不锁死分类）
    if (matchCount === 0) {
      showAllItems();
      if (hint) hint.style.display = 'flex';
      return;
    }

    // 有结果：隐藏提示 + 高亮命中 + 自动展开含结果分类
    if (hint) hint.style.display = 'none';
    highlight(keyword);

    document.querySelectorAll('.menu-cat-title').forEach(cat => {
      const items = cat.nextElementSibling;
      if (!items) return;

      const hasVisible = [...items.children].some(li => li.style.display !== 'none');
      if (hasVisible) {
        cat.classList.add('open');
        items.classList.add('open');
      }
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
