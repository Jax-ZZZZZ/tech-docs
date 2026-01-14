function toggle(el) {
el.classList.toggle('open');
const list = el.nextElementSibling;
list.classList.toggle('open');
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