# Repository Guidelines

## Project Structure & Module Organization
DialerGPT uses the Next.js App Router. Routes, layouts, metadata, and server actions live under `src/app`; colocate segment-specific components with their route folder when practical. Shared UI sits in `src/components`, with shadcn/ui primitives under `src/components/ui`—extend them using `components.json` to keep variants consistent. Helpers and utilities go in `src/lib`. Static assets such as `favicon.ico` stay alongside the route in `src/app`, or in a future `public/` directory when you add broader assets. Global theming tokens are defined in `src/app/globals.css`, while Tailwind settings are centralized in `tailwind.config.ts`.

## Build, Test, and Development Commands
- `npm install` or `npm ci`: install dependencies; use `npm ci` in CI for reproducible locks.
- `npm run dev`: start the development server with fast refresh on `http://localhost:3000`.
- `npm run build`: run the production build and compile-time checks; fails on type errors.
- `npm run start`: serve the optimized build; pair with manual smoke tests before shipping.

## Coding Style & Naming Conventions
Author components in TypeScript/TSX, favoring functional components and React hooks. Formatting follows the repo’s Prettier defaults—2 spaces, double quotes, trailing semicolons. Run `npx prettier --write <files>` before committing. Use the `cn` helper from `src/lib/utils.ts` for conditional Tailwind class merging. Name files in kebab-case (`hero-section.tsx`), reserving PascalCase only for files exporting a single React component.

## Testing Guidelines
A formal test suite is not yet committed. When you add coverage, place end-to-end specs under `tests/e2e` (e.g., Playwright) and colocate unit tests in `__tests__` folders beside components. Mock external providers such as Supabase and Stripe so `npm run start` can back tests without hitting live services. Document new test commands in `package.json` scripts as you introduce them.

## Commit & Pull Request Guidelines
History currently uses short lower-case summaries (`second build`). Continue that style but prefer imperative phrasing (`add hero section copy`). Each PR should describe the change, link any GitHub issue, call out env or config updates, and include before/after screenshots for UI tweaks. Avoid committing generated artifacts (`.next`) or credentials.

## Security & Configuration Tips
Store secrets like `SUPABASE_URL`, `SUPABASE_ANON_KEY`, and Stripe keys in `.env.local`; provide safe defaults in `.env.example` if needed. Restrict server-only logic to route handlers or server components, and review changes to `next.config.js` or `tailwind.config.ts` carefully because they impact every deployment target.
