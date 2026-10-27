import type { LucideIcon } from 'lucide-react'

export type Cta = { label: string; to: string }

export type FeatureItem = { title: string; description: string; icon: LucideIcon }

export type FaqItem = { question: string; answer: string; points?: string[] }

export type ContentBlock =
  | { type: 'heading'; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'quote'; text: string }

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
}
