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
function findDocMeta(docId) {
  for (const group of Object.values(docs)) {
    for (const cat of group.children) {
      const item = cat.items.find(i => i.id === docId);
      if (item) return item;
    }
  }
  return null;
}

function loadMarkdown(filePath) {
  const fullPath = path.join(__dirname, 'docs', filePath);
  if (!fs.existsSync(fullPath)) return null;
  return fs.readFileSync(fullPath, 'utf-8');
}

/* ======================
   Routes
====================== */
app.get('/', (req, res) => {
  const { doc } = req.query;

  let currentDoc = null;
  let htmlContent = null;

  if (doc) {
    const meta = findDocMeta(doc);
    if (meta) {
      const markdown = loadMarkdown(meta.file);
      if (markdown) {
        currentDoc = meta;
        htmlContent = marked.parse(markdown);
      }
    }
  }

  res.render('index', {
    docs,
    currentDoc,
    htmlContent
  });
});

/* ======================
   Server
====================== */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Running at http://localhost:${PORT}`);
});
