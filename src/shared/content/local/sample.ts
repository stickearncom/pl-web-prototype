import type { ContentBlock } from '../contracts'

/**
 * Builds a short, neutral article body for placeholder content.
 * Marcom replaces these entries with real copy; items stay flagged `isSample` until then.
 */
export function sampleBody(
  intro: string,
  heading: string,
  points: string[],
  closing: string,
): ContentBlock[] {
  return [
    { type: 'paragraph', text: intro },
    { type: 'heading', text: heading },
    { type: 'list', items: points },
    { type: 'paragraph', text: closing },
  ]
}
