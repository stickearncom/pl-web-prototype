# Insight content model (Next.js + Strapi)

One page shell, many block types. Do not build a new detail template per entry.

## Collection type: `insight`

| Field                  | Type                                           | Notes                                                            |
| ---------------------- | ---------------------------------------------- | ---------------------------------------------------------------- |
| `slug`                 | UID                                            | Route: `/insights/articles/[slug]` or `/insights/reports/[slug]` |
| `kind`                 | Enumeration: `article`, `report`, `case-study` | Decides the listing it appears in and the filter label           |
| `title`, `description` | Text                                           | Card and hero copy                                               |
| `badge`                | Short text                                     | Eyebrow above the title, falls back to the category              |
| `category`             | Short text or relation                         | Filter chips on the listing                                      |
| `publishedAt`          | Date                                           | Shown on cards and detail                                        |
| `cover`                | Media (optional)                               | When empty the typographic `InsightCover` is used                |
| `tags`                 | JSON or repeatable component                   | Small chips on the detail header                                 |
| `blocks`               | **Dynamic zone**                               | See below                                                        |
| `note`                 | Component `label` + `paragraphs`               | Methodology note or "bigger picture"                             |
| `downloadUrl`          | Text (optional)                                | Shows a download button                                          |
| `isSample`             | Boolean                                        | Shows the sample banner and tag until real copy replaces it      |

## Dynamic zone `blocks` (one Strapi component per block)

These map one to one to `ContentBlock` in `src/shared/content/contracts.ts`.

| Component   | Fields                                                           | Renders as                                   |
| ----------- | ---------------------------------------------------------------- | -------------------------------------------- |
| `heading`   | `id`, `text`                                                     | Section heading, feeds the table of contents |
| `paragraph` | `text`                                                           | Body text                                    |
| `list`      | `items[]`                                                        | Bullet list                                  |
| `quote`     | `text`                                                           | Pull quote                                   |
| `points`    | `id`, `heading`, `items[{title?, text}]`                         | Ruled list of takeaways                      |
| `steps`     | `id`, `heading`, `items[]`                                       | Numbered findings                            |
| `metrics`   | `id`, `heading`, `description`, `metrics[{value,label}]`, `note` | Dark big-number panel                        |
| `callout`   | `id`, `heading`, `paragraphs[]`                                  | Key takeaway box                             |
| `table`     | `id`, `heading`, `columns[]`, `rows[][]`                         | Data table                                   |
| `chart`     | `id`, `heading`, `description`, `kind`, `label` (later: data)    | Chart or placeholder                         |

Rules

- The table of contents is built from every block that has an `id` and a heading. Editors do not write it.
- Unknown components are ignored by the renderer (`default: return null`), so adding a block type in Strapi never breaks old pages. Add the renderer in `article-blocks.tsx` when you add a block.
- Do not publish a `chart` block with invented numbers. Keep the placeholder until the dataset is approved.
- Keep to about ten block types. If an entry needs a new layout, add a block, not a template.

## When a second template is justified

Only if the page chrome differs, not the content. Example: a downloadable gated report with a lead form before the body. Add a `layout` enumeration (`standard`, `gated`) to the collection type and branch inside `ContentDetail`. Everything else stays shared.

## Mapping in Next.js

- Fetch with `populate[blocks][populate]=*` and map `__component` to `type`, so the renderer receives the same `ContentBlock[]` it uses today.
- `generateStaticParams` per `kind`. Revalidate on Strapi webhook.
- `generateMetadata` from `title`, `description`, and `cover`.
