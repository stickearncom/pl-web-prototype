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

## Isometric scenes

Scenes explain how something works; real photos prove it is real. Never use a scene as decoration
and never put copy inside a scene that is not also in the HTML.

- Kit: `src/shared/isometric` (true 30° projection, `TILE = 22`). World x runs lower right, y lower left,
  z up. Only the top, the +y (left) and +x (right) faces are visible, so ad faces, windows and
  screens always sit on those faces.
- Draw order: ground layer first (slab, roads, heat, flow lines, rings), then objects back to front
  (lower `x + y` first), then overlays (pins, badges). Moving cars only drive road arms where nothing
  in front of them overlaps.
- Materials come from `palette.ts` and mirror tokens.css. Light comes from the upper left: top lightest,
  left mid, right darkest. Ad creatives are abstract colour blocks, never real brands.
- Motion: stage changes crossfade (`keep` on `Billboard`), loops run through `useLoop` only while the
  scene is on screen, and every loop freezes on its final state under `prefers-reduced-motion`.
- Wrappers: `IsoStage` (fits the viewBox to the scene), `IsoCard` (soft card with an iso grid),
  `SceneIntro` (copy left, scene right) and the `visual` slot on `SplitFeatures`.

| Page                  | Scene                                     | Where                                                                    |
| --------------------- | ----------------------------------------- | ------------------------------------------------------------------------ |
| Home                  | City diorama: Plan, Execute, Measure      | "How Playlog works", sticky and scroll driven on desktop, tabs on mobile |
| Planning              | Shortlist narrowing over audience traffic | Benefits intro                                                           |
| Digital Billboard     | Screen rotating through ad slots          | Benefits intro                                                           |
| Billboard             | Lift, install, verified with proof photo  | Explore section, under the header                                        |
| Measurement           | Reach rings and growing bars (no figures) | Capabilities, under the header                                           |
| Competitive Landscape | Rival territories, opportunity, claimed   | Opportunities intro                                                      |
| About                 | Same plot across four eras                | Journey timeline                                                         |
| 404                   | Empty billboard, a pin that cannot land   | Beside the message                                                       |
