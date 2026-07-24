# Changelog

## 2026-07-04

### Fixed: Backend directory structure
- **Moved** `backend/` from `Copy/backend/` → `Copy/baho-tech-innovation-web/backend/`
- The backend was originally designed to live **inside** the frontend project folder. All relative paths (`server/index.js` importing `../backend/src/server.js`, `app.js` resolving `../../dist`) expect this structure.
- **Before:** `Copy/backend/` + `Copy/baho-tech-innovation-web/` (siblings)
- **After:** `Copy/baho-tech-innovation-web/backend/` (nested)

### Fixed: Missing `.env` file
- **Created** `baho-tech-innovation-web/.env` from merged `.env.example` files
- Backend's `dotenv.config()` loads from CWD (the frontend root), so this single `.env` serves both backend and frontend.
- Admin seed: `admin@bahotech.com` / `admin@2007`
- ⚠️ **You still need to set `GEMINI_API_KEY`** for AI features to work.

### Fixed: Contact.tsx double-`/api` bug
- **File:** `src/app/components/Contact.tsx:20-21`
- **Before:** Used `VITE_API_BASE_URL + "/api/contact"` — if `VITE_API_BASE_URL` was set to `http://localhost:3001/api`, this produced `http://localhost:3001/api/api/contact` (404)
- **After:** Always uses `/api/contact` — Vite proxy handles routing in dev, Express serves it in production.

### Fixed: Backend ES module type warning
- **File:** `backend/package.json`
- **Added** `"type": "module"` to eliminate Node.js warning about reparsing CommonJS as ESM.

### Code-split all route components
- **File:** `src/app/routes.tsx`
- **Changed:** All page imports from static `import` to `React.lazy()` — pages now load on demand instead of all at once.
- **Affected:** Home, About, Services, Contact, TeamMemberProfile, LoginPage, RegisterPage, DashboardRedirect, AdminDashboard, AdminUsersPage, AdminUserDetailsPage, AdminSettingsPage, BlindDashboard, DeafDashboard, MuteDashboard, MobilityDashboard.

### Added Suspense boundary
- **File:** `src/app/components/Root.tsx`
- **Changed:** Wrapped `<Outlet />` in `<Suspense>` with a branded loading spinner. Removed the artificial 3-second loading timer that ran on every navigation.

### Vendor chunk splitting
- **File:** `vite.config.ts`
- **Changed:** Added `manualChunks` to extract `node_modules` into a separate `vendor` chunk. This chunk is long-term cacheable (only changes when dependencies update).

### Performance impact

| Metric | Before | After |
|---|---|---|
| Main JS bundle | **618 kB** single chunk | **73 kB** app shell + **440 kB** cacheable vendor |
| Route chunks | All in main bundle | 0.4–16 kB per page, loaded on demand |
| Chunk size warning | 618 kB (>500 kB) | None |
| Build time | 52s | 35s |
