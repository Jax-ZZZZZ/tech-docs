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

  const key = el.dataset.key || el.textContent.trim();
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
   (default: ALL expanded)
========================= */
(function restoreOpenCats() {
  const openCats = getOpenCats();

  // ✅ 第一次访问：默认全部展开，并写入 openCats
  if (!openCats.length) {
    const allKeys = [];

    document.querySelectorAll('.menu-cat-title').forEach(cat => {
      const key = cat.dataset.key || cat.textContent.trim();
      allKeys.push(key);

      const items = cat.nextElementSibling;
      cat.classList.add('open');
      if (items) items.classList.add('open');
    });

    setOpenCats(allKeys);
    return;
  }

  // ✅ 否则：按 openCats 恢复展开状态
  document.querySelectorAll('.menu-cat-title').forEach(cat => {
    const key = cat.dataset.key || cat.textContent.trim();
    const items = cat.nextElementSibling;
    const shouldOpen = openCats.includes(key);

    cat.classList.toggle('open', shouldOpen);
    if (items) items.classList.toggle('open', shouldOpen);
  });
})();

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
      const key = cat.dataset.key || cat.textContent.trim(); // ✅ 用 data-key
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

  // 缓存原始文本（用于恢复，避免 mark 嵌套）
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

      a.innerHTML = raw.replace(re, m => `<mark>${m}</mark>`);
    });
  }

  cacheOriginalText();

  searchInput.addEventListener('input', e => {
    const keyword = e.target.value.toLowerCase().trim();

    // 关键词为空：回到默认
    if (!keyword) {
      showAllItems();
      restoreOpenCatsState();
      clearHighlights();
      if (hint) hint.style.display = 'none';
      return;
    }

    // 清除旧高亮
    clearHighlights();

    // 过滤 item
    let matchCount = 0;
    document.querySelectorAll('.menu-items li').forEach(li => {
      const text = li.innerText.toLowerCase();
      const matched = text.includes(keyword);
      li.style.display = matched ? '' : 'none';
      if (matched) matchCount++;
    });

    // 无结果：显示提示，但不锁死分类
    if (matchCount === 0) {
      showAllItems();
      if (hint) hint.style.display = 'flex';
      return;
    }

    // 有结果：隐藏提示 + 高亮 + 展开含结果分类
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
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    localStorage.setItem('theme', next);
    updateText(next);
  });
})();

/* =========================
   Mobile sidebar drawer
========================= */
(function initSidebarDrawer() {
  const menuToggle = document.getElementById('homeBtn'); // 用 homeBtn 代替菜单按钮
  const sidebar = document.getElementById('sidebar');
  const backdrop = document.getElementById('sidebarBackdrop');

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

  // Mobile: 点击 homeBtn 打开/关闭 sidebar
  if (menuToggle) {
    menuToggle.addEventListener('click', (e) => {
      // 桌面端：让它继续走链接回首页
      if (window.innerWidth >= 768) return;

      // 手机端：拦截默认跳转，改为打开侧栏
      e.preventDefault();
      sidebar.classList.contains('is-open') ? closeSidebar() : openSidebar();
    });
  }

  // 点击遮罩关闭
  backdrop && backdrop.addEventListener('click', closeSidebar);

  // 点击 doc 链接后自动关闭（移动端）
  document.querySelectorAll('.sidebar a').forEach(a => {
    a.addEventListener('click', () => {
      if (window.innerWidth < 768) closeSidebar();
    });
  });

  // iOS 防滚动穿透（你之前的实现保留）
  sidebar.addEventListener('touchmove', (e) => e.stopPropagation(), { passive: true });

  function preventBodyScroll(e) {
    if (sidebar.classList.contains('is-open')) {
      if (!sidebar.contains(e.target)) e.preventDefault();
    }
  }
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

    return 'en';
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

    const u = new URL(window.location.href);
    u.searchParams.set('lang', next);
    window.location.href = u.toString();
  });
})();
