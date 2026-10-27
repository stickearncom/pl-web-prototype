import type { ContentBlock } from '../contracts'

/** A headed run of paragraphs. The heading id feeds the table of contents. */
export function section(id: string, heading: string, paragraphs: string[]): ContentBlock[] {
  return [
    { type: 'heading', id, text: heading },
    ...paragraphs.map((text): ContentBlock => ({ type: 'paragraph', text })),
  ]
}

type Point = { title?: string; text: string }

/** Standard shape for a guide or analysis article. Variation comes from which blocks an entry uses. */
export function guideBody(input: {
  overview: string[]
  pointsHeading: string
  points: Point[]
  stepsHeading: string
  steps: string[]
  takeaway: string[]
}): ContentBlock[] {
  return [
    ...section('overview', 'Overview', input.overview),
    { type: 'points', id: 'key-ideas', heading: input.pointsHeading, items: input.points },
    { type: 'steps', id: 'how-to-apply', heading: input.stepsHeading, items: input.steps },
    { type: 'callout', id: 'key-takeaway', heading: 'Key Takeaway', paragraphs: input.takeaway },
  ]
}

/** Standard shape for a market report whose dataset is not published yet. Carries no figures. */
export function reportBody(input: {
  overview: string[]
  examines: string[]
  charts: { heading: string; description: string; kind: 'bar' | 'line' | 'map' }[]
  takeaway: string[]
}): ContentBlock[] {
  return [
    ...section('overview', 'Overview', input.overview),
    {
      type: 'steps',
      id: 'what-it-examines',
      heading: 'What This Report Examines',
      items: input.examines,
    },
    ...input.charts.map((chart, i): ContentBlock => ({
      type: 'chart',
      id: `chart-${i + 1}`,
      heading: chart.heading,
      description: chart.description,
      kind: chart.kind,
      label: 'Chart appears here once the dataset is published.',
    })),
    { type: 'callout', id: 'key-takeaway', heading: 'Key Takeaway', paragraphs: input.takeaway },
  ]
}

export const sampleNote = {
  label: 'Methodology note',
  paragraphs: [
    'Sample entry. Figures, charts, and the methodology statement will be added when the approved dataset is published.',
  ],
}
