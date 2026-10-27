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
- Alternate light / dark sections; never stack two dark sections (see `PopularItems tone`).
- One shared final CTA (`CtaSection`) per page.

## 3. Motion policy

- Motion (`motion/react`, LazyMotion + `m`) for reveal, hover, count-up. anime.js v4 (dynamic import) for SVG scene animation via `data-anim` (rise/pop/slide/fade/draw/pulse), triggered by IntersectionObserver.
- `prefers-reduced-motion`: MotionConfig `reducedMotion="user"`, anime.js skipped, marquee becomes a static wrapped grid.
- Hero text is only translateY-animated (no opacity fade) to protect LCP.
- Marquee has no pause control (decorative, auto-looping logos only).

## 4. Imagery and illustration

- Homepage direction (v2): real billboard photos (`public/media`) in `PhotoFrame` (cut corner + mint extrusion) and HTML/SVG product-UI mockups (`shared/mockups`) instead of cartoon scenes. Other pages still use the older SVG scenes and are migrated page by page.
- Motion on the homepage is Motion-only (transform/opacity/pathLength). Video loops only while visible, never autoplays with reduced motion, and has a pause/play button.

### Legacy illustration language

- Oblique extrusion toward lower-left, mint side faces, same as the logo (`iso.tsx` `Extrude`).
- Palette in `illustrations/palette.ts`. Scenes in `scenes.tsx`; static covers in `covers.tsx`.
- Each section gets a distinct scene; do not reuse the same scene twice on a page. Preview all at `/__lab` (dev only).
- No emoji or generic icon-as-illustration. Lucide only for small UI icons.

## 5. Content & placeholders

- Copy lives next to each module (`*-content.ts`) and in `shared/content`.
- Items with `isSample: true` show a "Sample" badge / notice. Remove the flag when real content lands.
- CTA destinations are centralized in `ctaLinks` (`shared/lib/site-config.ts`).

## 6. Performance targets

- LCP < 2.0s, CLS < 0.05, INP < 200ms. Routes are lazy; images lazy except hero; anime.js on demand.

## 7. Next.js migration rules

- Router access only via `AppLink`, `useAppNavigate`, `useSearchParam`, `usePageMeta`. Reimplement these four with `next/link`, `useRouter`, `useSearchParams`, and the Metadata API; nothing else imports react-router.
- Add `"use client"` to components using hooks/motion/anime (scenes, forms, header, marquee, accordions).
- Env: `VITE_*` -> `NEXT_PUBLIC_*` (`VITE_SITE_URL`, `VITE_LEAD_ENDPOINT`).
- Images: `public/brands`, `public/brand` copy as-is; swap `<img>` for `next/image` where useful.
- Tailwind v4 tokens (`@theme`) and `@utility` blocks copy directly into the global CSS.
- Replace `submitLead` stub with a route handler that mails info@playlog.io.
- Routes: see `src/app/routes.tsx` for the path list; `/__lab` is dev-only, do not port.
