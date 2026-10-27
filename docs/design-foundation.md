# Playlog Web — Design Foundation

## 1. Brand tokens (src/shared/styles/tokens.css)

- Primary `#004FA4` (brand-600 scale 50..950), secondary mint `#00F4CB`, white. Dark sections use ink/navy neutrals.
- Font: Reddit Sans Variable (`@fontsource-variable/reddit-sans`), self-hosted.
- Type scale utilities: `text-display`, `text-h1`, `text-h2`, `text-h3`, `text-lead`, `text-eyebrow` (registered in `cn.ts` so tailwind-merge keeps them).
- Radius is restrained: controls 8px, cards 12px, large panels 16px. No pill or full-round shapes except status dots.
- Navy `#00244C` (brand-900) is used for dark sections; pale `#EEF4FA` for light surfaces.
- Radius, shadows, motion durations/easing are CSS variables in `tokens.css`; use them, no hard-coded hex in components.

## 2. Layout rules

- Mobile first. `container-page` for width/gutters, `section-y` for vertical rhythm.
- Alternate light / muted / dark navy sections; never stack two dark sections.
- Header is transparent until scrolled. Hero sections sit under it with `-mt-20 pt-20`.
- One shared final CTA (`CtaSection`) per page, with a photo.
- Eyebrows are a mint rule plus uppercase text, not a pill. Headings are large and left-aligned.

## 3. Page building blocks (src/shared/marketing)

- Heroes: `ProductHero` (light gradient, angular `HeroBackdrop`), with a visual from `HeroCompose` (`behind` or `card` variant), `PhotoFrame`, or `CoverStack` (insights).
- Sections: `SplitFeatures` (sticky header + large cards), `MockupFeatureList` (mockup + divided list, light or dark), `StageBlock` / `StagePanel`, `FeatureGrid`, `StatsRow`, `FaqSection`, `CtaSection`.
- Content: `ContentListing` (search, filter, featured first), `ContentCard`, `ContentDetail` (shell with sticky table of contents), `ArticleBlocks` (renders the block types in `contracts.ts`).
- Visual language: `PhotoFrame` and `InsightCover` use a cut top-left corner and a mint extrusion, echoing the logo. Buttons and cards stay at 8 / 12 / 16px radius.

## 4. Motion policy

- Motion (`motion/react`, `LazyMotion` + `m`) for reveal, hover, parallax, count-up, path drawing. Only transform and opacity are animated (plus the route-flow stroke offset in CSS).
- Ambient loops (`LiveDot`, `PulseRing`, route flow, `LiveCounter`) run only while in view and while the tab is visible (`useAmbient`).
- `prefers-reduced-motion`: `MotionConfig reducedMotion="user"`, ambient loops stop, video does not autoplay, marquee becomes a static wrapped grid.
- Hero text is only translateY-animated (no opacity fade) to protect LCP.
- Marquee has no pause control (decorative logos only). The homepage video has a pause/play button and plays only while visible.

## 4b. Imagery

- Use real billboard photos from `public/media` (max 1600px wide, webp). Vary the photos across a page; do not repeat the same one in neighbouring sections.
- Product UI is shown with HTML/SVG mockups (`shared/mockups`) filled with sample data. No cartoon scenes on redesigned pages.
- Legacy: `shared/illustrations` (isometric scenes) and `/__lab` are no longer used by the redesigned pages and can be removed once nothing imports them.
- Do not ship photos with identifiable third-party branding unless the rights are cleared by Marcom.

## 5. Content & placeholders

- Copy lives next to each module (`*-content.ts`) and in `shared/content`.
- Items with `isSample: true` show a "Sample" badge / notice. Remove the flag when real content lands.
- Never invent statistics. Report chart blocks stay placeholders until the dataset is approved.
- Block model for articles and reports: `docs/cms-content-model.md`.
- CTA destinations are centralized in `ctaLinks` (`shared/lib/site-config.ts`).

## 6. Performance targets

- LCP < 2.0s, CLS < 0.05, INP < 200ms. Routes are lazy; images lazy except hero. Redesigned pages do not load anime.js.

## 7. Next.js migration rules

- Router access only via `AppLink`, `useAppNavigate`, `useSearchParam`, `usePageMeta`. Reimplement these four with `next/link`, `useRouter`, `useSearchParams`, and the Metadata API; nothing else imports react-router.
- Add `"use client"` to components using hooks or motion (forms, header, marquee, accordions, `Reveal`, `ArticleToc`, mockups with ambient motion).
- Env: `VITE_*` -> `NEXT_PUBLIC_*` (`VITE_SITE_URL`, `VITE_LEAD_ENDPOINT`).
- Images: `public/brands`, `public/brand` copy as-is; swap `<img>` for `next/image` where useful.
- Tailwind v4 tokens (`@theme`) and `@utility` blocks copy directly into the global CSS.
- Replace `submitLead` stub with a route handler that mails info@playlog.io.
- Routes: see `src/app/routes.tsx` for the path list; `/__lab` is dev-only, do not port.
