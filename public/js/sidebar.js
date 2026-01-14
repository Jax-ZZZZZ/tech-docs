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

function toggle(el) {
  el.classList.toggle('open');
  const list = el.nextElementSibling;
  list.classList.toggle('open');

  const key = el.textContent.trim();
  const openCats = getOpenCats();
  const isOpen = el.classList.contains('open');

  if (isOpen) {
    if (!openCats.includes(key)) openCats.push(key);
  } else {
    const idx = openCats.indexOf(key);
    if (idx !== -1) openCats.splice(idx, 1);
  }
  setOpenCats(openCats);
}


// 文档搜索
const searchInput = document.getElementById('searchInput');
if (searchInput) {
searchInput.addEventListener('input', e => {
const keyword = e.target.value.toLowerCase();


document.querySelectorAll('.menu-items li').forEach(li => {
const text = li.innerText.toLowerCase();
li.style.display = text.includes(keyword) ? 'block' : 'none';
});


// 自动展开有结果的分类
document.querySelectorAll('.menu-cat-title').forEach(cat => {
const items = cat.nextElementSibling;
const hasVisible = [...items.children].some(li => li.style.display !== 'none');
cat.classList.toggle('open', hasVisible);
items.classList.toggle('open', hasVisible);
});
});
}


// 深色模式
const toggleBtn = document.getElementById('themeToggle');
if (toggleBtn) {
const current = localStorage.getItem('theme') || 'light';
document.documentElement.dataset.theme = current;


toggleBtn.textContent = current === 'dark' ? '☀️' : '🌙';


toggleBtn.onclick = () => {
const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
document.documentElement.dataset.theme = next;
localStorage.setItem('theme', next);
toggleBtn.textContent = next === 'dark' ? '☀️' : '🌙';
};
}


// Mobile sidebar drawer
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const backdrop = document.getElementById('sidebarBackdrop');

function openSidebar() {
  if (!sidebar) return;
  sidebar.classList.add('is-open');
  if (backdrop) backdrop.classList.add('show');
  document.body.classList.add('no-scroll');
}

function closeSidebar() {
  if (!sidebar) return;
  sidebar.classList.remove('is-open');
  if (backdrop) backdrop.classList.remove('show');
  document.body.classList.remove('no-scroll');
}

if (menuToggle && sidebar) {
  menuToggle.addEventListener('click', () => {
    const isOpen = sidebar.classList.contains('is-open');
    isOpen ? closeSidebar() : openSidebar();
  });
}

if (backdrop) {
  backdrop.addEventListener('click', closeSidebar);
}

// 点击菜单链接后自动关闭（手机端体验更好）
document.querySelectorAll('.sidebar a').forEach(a => {
  a.addEventListener('click', () => {
    if (window.innerWidth < 768) closeSidebar();
  });
});

// 恢复展开状态：默认 openCats 为空 => 刚访问时就是全部合并 ✅
(function restoreOpenCats() {
  const openCats = getOpenCats();
  if (!openCats.length) return;

  document.querySelectorAll('.menu-cat-title').forEach(cat => {
    const key = cat.textContent.trim();
    const items = cat.nextElementSibling;

    const shouldOpen = openCats.includes(key);
    cat.classList.toggle('open', shouldOpen);
    items.classList.toggle('open', shouldOpen);
  });
})();

// 点击 Tech Docs：清空展开状态，并把所有分类收起 ✅
(function bindCollapseAll() {
  const btn = document.getElementById('collapseAllBtn');
  if (!btn) return;

  btn.style.cursor = 'pointer';

  btn.addEventListener('click', () => {
    // 1) 清空存储
    localStorage.removeItem('openCats');

    // 2) 收起所有分类
    document.querySelectorAll('.menu-cat-title').forEach(cat => {
      const items = cat.nextElementSibling;
      cat.classList.remove('open');
      if (items) items.classList.remove('open');
    });

    // 3) 手机端如果侧栏是抽屉，顺手关掉（可选，但体验更好）
    if (typeof closeSidebar === 'function') closeSidebar();
  });
})();
