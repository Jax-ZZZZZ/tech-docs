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
const renderer = new marked.Renderer();

// ✅ marked v5+：link(token) 形式
const linkRendererV5 = (token) => {
  const href = token.href || '';
  const text = token.text || '';
  const title = token.title ? ` title="${token.title}"` : '';
  return `<a href="${href}"${title} target="_blank" rel="noopener noreferrer">${text}</a>`;
};

// ✅ marked v4：link(href, title, text) 形式
const linkRendererV4 = (href, title, text) => {
  const t = title ? ` title="${title}"` : '';
  return `<a href="${href}"${t} target="_blank" rel="noopener noreferrer">${text}</a>`;
};

renderer.link = function (...args) {
  // args[0] 是对象 => v5 token
  if (args[0] && typeof args[0] === 'object') return linkRendererV5(args[0]);
  // 否则 => v4 参数形式
  return linkRendererV4(args[0], args[1], args[2]);
};

marked.setOptions({
  mangle: false,
  headerIds: false,
  renderer
});


/* ======================
   Helpers
====================== */
const DOCS_ROOT = path.join(__dirname, 'docs');

function findDocMeta(docId) {
  if (!docId) return null;

  for (const group of Object.values(docs)) {
    for (const cat of group.children || []) {
      const item = (cat.items || []).find(i => i.id === docId);
      if (item) return item;
    }
  }
  return null;
}

function safeJoinDocsRoot(relPath) {
  // 防止空值 / 非字符串
  if (!relPath || typeof relPath !== 'string') return null;

  // 拼接并标准化
  const fullPath = path.join(DOCS_ROOT, relPath);

  // 防目录穿越：必须仍在 DOCS_ROOT 内
  if (!fullPath.startsWith(DOCS_ROOT + path.sep) && fullPath !== DOCS_ROOT) return null;

  return fullPath;
}

function loadMarkdown(relPath) {
  const fullPath = safeJoinDocsRoot(relPath);
  if (!fullPath) return null;

  try {
    return fs.readFileSync(fullPath, 'utf-8');
  } catch {
    return null;
  }
}

function pickLang(queryLang) {
  return queryLang === 'en' ? 'en' : 'zh';
}

function pickDocPath(meta, lang) {
  if (!meta || !meta.files) return null;
  return meta.files[lang] || meta.files.zh || null;
}

/* ======================
   Routes
====================== */
app.get('/', (req, res) => {
  const docId = req.query.doc || null;
  const lang = pickLang(req.query.lang);

  let currentDoc = null;
  let htmlContent = null;

  if (docId) {
    const meta = findDocMeta(docId);

    if (!meta) {
      htmlContent = `<p>Error 404: Doc Missing：${docId}</p>`;
    } else {
      currentDoc = meta;

      const relPath = pickDocPath(meta, lang);
      const markdown = loadMarkdown(relPath);

      if (!markdown) {
        htmlContent = `<p>Error 404: File Path Missing：${relPath || ''}</p>`;
      } else {
        htmlContent = marked.parse(markdown);
      }
    }
  }

  res.render('index', {
    docs,
    currentDoc,
    htmlContent,
    lang
  });
});

/* ======================
   Server
====================== */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Running at http://localhost:${PORT}`);
});
