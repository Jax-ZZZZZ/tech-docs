# Help Center 项目上下文（给 ChatGPT / 新成员）

## 项目目标
这是一个面向餐馆老板的 Help Center / 操作指南系统。

## 技术栈
- Node.js + Express
- EJS 模板
- Markdown 文档渲染（marked）
- 原生 CSS + 少量 JS
- 支持中英文切换、深浅模式

## 当前核心功能
- 左侧 sidebar 文档树（可展开、记忆状态）
- 手机端 sidebar drawer（Safari + Chrome 已适配滚动）
- 搜索（sidebar）
- 中英文双语（URL + localStorage）
- 深浅模式（带文字）
- 当前文档高亮
- Markdown 图片大小控制

## 关键设计决策（不要改的点）
- sidebar 使用 top + bottom 固定（避免 100vh bug）
- body.no-scroll 只锁 body，不锁 sidebar
- mobile Chrome 需要 touch-action: pan-y
- Home（🏠 操作指南）= sidebar toggle（已合并）

## 目录结构
- server.js
- views/layout.ejs
- views/index.ejs
- public/css/style.css
- public/js/sidebar.js
- docs/（按分类存 md，中英文）

## 当前状态
- 已可 git push
- 处于「可上线的外部 Help Center」阶段


---

# Help Center Project Context (for ChatGPT / New Contributors)

## Project Goal
This is a Help Center / User Guide system designed for restaurant owners.

## Tech Stack
- Node.js + Express
- EJS templating engine
- Markdown rendering (marked)
- Vanilla CSS with minimal JavaScript
- Supports bilingual display (Chinese / English)
- Supports light / dark theme

## Current Core Features
- Left sidebar document tree (expandable with persisted state)
- Mobile sidebar drawer (scrolling works on Safari & Chrome)
- Sidebar-based search
- Bilingual support (URL parameters + localStorage)
- Light / dark mode (with text labels)
- Active document highlighting
- Markdown image size control

## Key Design Decisions (Do NOT Change)
- Sidebar uses `top + bottom` positioning (avoids `100vh` bugs)
- `body.no-scroll` only locks the body, never the sidebar
- Mobile Chrome requires `touch-action: pan-y`
- Home button (🏠 Help Center) is merged with sidebar toggle

## Directory Structure
- `server.js`
- `views/layout.ejs`
- `views/index.ejs`
- `public/css/style.css`
- `public/js/sidebar.js`
- `docs/` (markdown files organized by category, bilingual)

## Current Status
- Ready for `git push`
- At a “production-ready external Help Center” stage


git:
git status
git add .
git commit -m "Update docs and UI tweaks"
git push


ssh jax@NAS_IP
cd /volume1/docker/help-center
git pull
docker compose down
docker compose up -d --build
docker compose logs -f 看实时日志（排错必备）
docker compose logs --tail=200 只看最近 200 行日志
docker image prune -f  ⚠️ 会清理未使用镜像

