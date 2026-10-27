import type { ContentBlock } from '@/shared/content'

type Block = ContentBlock

export type TocEntry = { id: string; label: string }

/** Table of contents from every block that has an id and a heading. */
export function buildToc(body: Block[]): TocEntry[] {
  const toc: TocEntry[] = []
  for (const block of body) {
    if (!('id' in block) || !block.id) continue
    const label =
      block.type === 'heading' ? block.text : 'heading' in block ? block.heading : undefined
    if (label) toc.push({ id: block.id, label })
  }
  return toc
}

export function readingTime(body: Block[]) {
  const text = JSON.stringify(
    body.map((b) => ('text' in b ? b.text : 'paragraphs' in b ? b.paragraphs : b)),
  )
  const minutes = Math.max(1, Math.round(text.split(/\s+/).length / 220))
  return `${minutes} min read`
}
