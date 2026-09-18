---
status: pending
title: Minimal Hello World Home Page
---

Context: the repository currently contains only `README.md`. The full app scaffold must be created from scratch.

1. Create `package.json` declaring an ESM (`"type": "module"`) Vite app with npm scripts `dev`, `build`, `preview`. Dependencies: `react`, `react-dom`, `@tanstack/react-router`. Dev dependencies: `vite`, `@vitejs/plugin-react`, `typescript`, `@types/react`, `@types/react-dom`, `tailwindcss`, `@tailwindcss/vite`, `@tanstack/router-plugin`. Expected outcome: `npm install` resolves the full toolchain.

2. Create `vite.config.ts` registering, in order, the TanStack Router plugin from `@tanstack/router-plugin/vite` (file-based routing, routes directory `src/routes`, generated tree `src/routeTree.gen.ts`), the React plugin, and the Tailwind plugin. Add a resolve alias mapping `@` to `src`. Expected outcome: dev server generates `src/routeTree.gen.ts` automatically and `@/` imports resolve.

3. Create `tsconfig.json` (and `tsconfig.node.json` if needed for the Vite config) with strict mode, `moduleResolution: "bundler"`, JSX set to `react-jsx`, and `paths` mapping `@/*` to `src/*`. Expected outcome: TypeScript resolves alias imports with no errors.

4. Create `index.html` at the project root with a `#root` div and a module script referencing `/src/main.tsx`. Include a sensible `<title>` such as "Hello World". Expected outcome: Vite has a valid entry document.

5. Create `src/styles/global.css` whose first line is exactly `@import "tailwindcss";`. No other rules unless a font stack is needed. Expected outcome: Tailwind utilities available app-wide.

6. Create `src/main.tsx` that imports `./styles/global.css` once, imports the generated route tree, creates the router, and renders `RouterProvider` into `#root` inside `StrictMode`. Include the TanStack Router module type declaration for the router instance. Expected outcome: app boots and routing is type-safe.

7. Create `src/routes/__root.tsx` as the app shell: a root route rendering an `<Outlet />` inside a full-height wrapper that applies the page background (subtle neutral-to-soft gradient, e.g. light slate gradient) and base text color. No nav, no header. Expected outcome: consistent background behind every route.

8. Create `src/routes/index.tsx` for the `/` route: a centered layout (flex, full viewport height, horizontal and vertical centering, responsive padding) showing a large "Hello World" heading with modern typography (bold, tight tracking, responsive size scaling from mobile to desktop) and one short muted subtitle line beneath it. No state, no interactivity. Expected outcome: visiting `/` shows a cleanly centered, responsive greeting.

9. Create `.gitignore` covering `node_modules`, `dist`, and `src/routeTree.gen.ts` if it should stay untracked (otherwise leave the generated file ignored per project preference). Expected outcome: generated and installed artifacts stay out of version control.

10. Run the dev server and verify: no TypeScript or console errors, `/` renders the centered greeting, and the layout stays centered and legible at mobile, tablet, and desktop widths. Expected outcome: a working minimal Hello World app.
