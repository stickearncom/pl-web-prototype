import type { LucideIcon } from 'lucide-react'

export type Cta = { label: string; to: string }

export type FeatureItem = { title: string; description: string; icon: LucideIcon }

export type FaqItem = { question: string; answer: string; points?: string[] }

/** Rich blocks carry an optional `id` so the detail page can build a table of contents. */
export type ContentBlock =
  | { type: 'heading'; text: string; id?: string }
  | { type: 'paragraph'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'quote'; text: string }
  /** Titled takeaways, shown as a ruled list. */
  | { type: 'points'; id?: string; heading?: string; items: { title?: string; text: string }[] }
  /** Numbered findings. */
  | { type: 'steps'; id?: string; heading?: string; items: string[] }
  /** Big-number highlights on a dark panel. */
  | {
      type: 'metrics'
      id?: string
      heading: string
      description?: string
      metrics: { value: string; label: string }[]
      note?: string
    }
  | { type: 'callout'; id?: string; heading: string; paragraphs: string[] }
  | { type: 'table'; id?: string; heading: string; columns: string[]; rows: string[][] }
  /** Placeholder for a chart whose data is not published yet. Never invent numbers here. */
  | {
      type: 'chart'
      id?: string
      heading: string
      description?: string
      kind: 'bar' | 'line' | 'map'
      label: string
    }

/** One entry in a listing: article, report, guide, or press item. */
export type ContentItem = {
  slug: string
  category: string
  title: string
  description: string
  /** ISO date, for example 2026-09-14 */
  date: string
  readTime?: string
  /** Picks one of the six illustrated covers. Ignored when `image` is set. */
  coverVariant: number
  /** Real thumbnail, when available. */
  image?: string
  body: ContentBlock[]
  /** Placeholder copy that Marcom must replace. Cards show a "Sample" tag while true. */
  isSample?: boolean
  downloadUrl?: string
  /** Short label above the title, for example "ANNUAL INSIGHTS REPORT 2025". Falls back to category. */
  badge?: string
  tags?: string[]
  /** Shown on the card and detail page instead of a link when set, for example "Coming soon". */
  unavailableLabel?: string
  /** Closing note, for example a methodology note. */
  note?: { label: string; paragraphs: string[] }
}
