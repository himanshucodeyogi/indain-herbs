# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start Vite dev server with HMR
npm run build     # TypeScript check + production build to dist/
npm run lint      # Run ESLint
npm run preview   # Preview the production build locally
```

There are no tests configured in this project.

## Architecture

**indaing** is a React 19 + TypeScript SPA (marketing/info site) for a phytogenic animal health products company. Built with Vite, React Router v7, and plain CSS.

### Routing

Routes are defined in `src/App.tsx`. The layout wraps all routes with a persistent `<Navbar>` and `<Footer>`, plus `<ScrollToTop>` to reset scroll on navigation. Pages live in `src/pages/`, each with a co-located `.css` file.

Key dynamic routes:
- `/products/:category` — filters the product list by species (poultry, ruminant, aqua, pet, equine, swine)
- `/product/:id` — renders a single product's detail page

### Data

All product data is statically defined in `src/data/products.ts` as a `Product[]` array. There is no backend or API — this is the single source of truth for product catalog, species tags, benefits, and descriptions. When adding or modifying products, edit this file.

### Styling

Each component and page has its own `.css` file co-located next to the `.tsx` file. Shared utilities live in `src/styles/global.css`. No CSS preprocessor or utility framework is used — plain CSS with custom media queries.

### TypeScript

Strict mode is enabled (`strict: true`, `noUnusedLocals`, `noUnusedParameters`). All new code must pass the TypeScript compiler without errors — `npm run build` will fail otherwise.
