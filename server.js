const express = require('express');
const path = require('path');
const fs = require('fs');
const { marked } = require('marked');
const docs = require('./data/docs');

const app = express();

/* ======================
   App Config
====================== */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

/* ======================
   Marked Config
====================== */
marked.setOptions({
  mangle: false,
  headerIds: false
});

/* ======================
   Helpers
====================== */
const DOCS_ROOT = path.join(__dirname, 'docs');

function findDocMeta(docId) {
  for (const group of Object.values(docs)) {
    for (const cat of group.children) {
      const item = cat.items.find(i => i.id === docId);
      if (item) return item;
    }
  }
  return null;
}

function loadMarkdown(relPath) {
  if (!relPath) return null;

  // 拼出绝对路径，并防止 .. 路径穿越
  const fullPath = path.join(DOCS_ROOT, relPath);
  if (!fullPath.startsWith(DOCS_ROOT)) return null;

  if (!fs.existsSync(fullPath)) return null;
  return fs.readFileSync(fullPath, 'utf-8');
}

/* ======================
   Routes
====================== */
app.get('/', (req, res) => {
  const docId = req.query.doc || null;
  const lang = req.query.lang === 'en' ? 'en' : 'zh'; // 默认 zh

  let currentDoc = null;
  let htmlContent = null;

  if (docId) {
    const meta = findDocMeta(docId);

    if (meta) {
      currentDoc = meta;

      // ✅ 按语言选择文件：优先 en/zh，对应不到就 fallback zh
      const relPath =
        (meta.files && meta.files[lang]) ||
        (meta.files && meta.files.zh) ||
        null;

      const markdown = loadMarkdown(relPath);

      if (markdown) {
        htmlContent = marked.parse(markdown);
      } else {
        htmlContent = `<p>未找到文档文件：${relPath || ''}</p>`;
      }
    } else {
      htmlContent = `<p>未找到文档：${docId}</p>`;
    }
  }

  res.render('index', {
    docs,
    currentDoc,
    htmlContent,
    lang // ✅ 传给 EJS，让链接能带 lang
  });
});

/* ======================
   Server
====================== */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Running at http://localhost:${PORT}`);
});
