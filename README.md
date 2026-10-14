# BrellBook — Phase 1 UI Foundation

This is the initial Next.js App Router + TypeScript + Tailwind CSS project foundation for BrellBook.

## Included
- Brand identity and shared UI styling based on the BrellBook palette.
- Responsive marketing landing page and pricing overview.
- Sign-in and sign-up interface placeholders.
- Dashboard layout preview and admin-console preview.
- `.env.example` placeholder for future integrations.

## Important scope notes
This phase is a **UI foundation**, not a production SaaS backend. Authentication forms do not create accounts; dashboard content is illustrative; plan cards do not activate subscriptions; admin access is not secured. Do not enter real passwords or use these pages as a live system.

## Requirements
- Node.js 20.9+ recommended
- npm

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Verify
```bash
npm run build
npm run lint
```
These commands must be run in an environment with dependencies installed. Build/lint have not been executed as part of this source bundle creation, so no successful verification is claimed.

## Next phase
Review and approve the UI direction, then move to architecture/repository hardening and secure authentication before connecting a database or production data.
