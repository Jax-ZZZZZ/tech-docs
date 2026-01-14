# Copilot Instructions for Tech Docs Site

## Architecture Overview
This is a Node.js Express application serving technical documentation with server-side rendering using EJS templates. The app runs on port 3000 and uses Markdown for content with `marked` library for parsing.

Key components:
- `server.js`: Main Express server handling routing and data loading
- `data/docs.js`: Documentation data structure (nested: groups → categories → docs)
- `views/`: EJS templates (`layout.ejs` for structure, `index.ejs` for content)
- `public/`: Static assets (CSS, JS) with Bootstrap for styling

## Data Structure
Documentation is organized hierarchically:
```javascript
{
  printer: {
    name: '打印机设置',
    children: [{
      name: 'Epson',
      items: [{
        id: 'epson-80mm',
        title: 'Epson 80mm 安装',
        file: 'docs/epson-80mm.md'
      }]
    }]
  }
}
```

## Adding Documentation
1. Create Markdown files in `docs/` directory (e.g., `docs/new-doc.md`)
2. Add entry to `data/docs.js` with `file: 'docs/new-doc.md'`
3. Use unique `id` for each doc (used in URLs as `?doc=id`)
4. Reference images as `/images/filename.png` (place in `public/images/`)

## Development Workflow
- Start server: `npm start` or `node server.js`
- Access at `http://localhost:3000`
- Query param `?doc=id` loads specific documentation
- No build process or tests currently implemented

## Frontend Patterns
- Sidebar uses collapsible categories with `toggle()` function
- Search filters menu items and auto-expands matching categories
- Theme toggle persists via localStorage
- Bootstrap grid: sidebar (col-md-3), content (col-md-9)

## Key Files
- [server.js](server.js): Server logic and routing
- [data/docs.js](data/docs.js): Documentation data
- [views/index.ejs](views/index.ejs): Main page template
- [public/js/sidebar.js](public/js/sidebar.js): Client-side interactions