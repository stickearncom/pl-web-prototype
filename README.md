# Playlog Website

React 19 + Vite + TypeScript + Tailwind v4 + shadcn-style Radix primitives. Built as a plain SPA so modules can be copied into an existing Next.js project (see `docs/design-foundation.md`).

## Setup

```bash
npm install
cp .env.example .env
npm run dev
```

Scripts: `dev`, `build`, `preview`, `lint`, `typecheck`, `format`.

## Structure

- `src/app` routes, providers, scroll manager
- `src/modules/*` page modules (home, products, insights, blog, media, about, contact, leads, legal)
- `src/shared/*` ui, forms, layout, marketing sections, illustrations, content, lib

## Editing content

- Page copy: each module's `*-content.ts`.
- Articles/reports/blog/media: `src/shared/content/local/*` (typed by `contracts.ts`).
- Trusted brand logos: `src/shared/content/trusted-brands.ts` + `public/brands`.
- Buttons' destinations: `ctaLinks` in `src/shared/lib/site-config.ts`.

## Forms

`submitLead` is a stub unless `VITE_LEAD_ENDPOINT` is set (POST JSON). Target inbox: info@playlog.io, so the endpoint (or a Next.js route handler) must send the mail. Honeypot and UTM capture are included.

## Placeholders to resolve before launch

- Social URLs (`site-config.ts`, currently generic instagram.com / linkedin.com).
- Privacy Policy and Terms pages (placeholders).
- All Insights, Reports, Blog, Press items are sample content (flagged).
- Digital Billboard dashboard uses sample data.
- Gallery/case thumbnails are illustrated stand-ins (set `src` in `planning-content.ts`).
- Analytics is a no-op `track()` stub in `src/shared/analytics`.
