import type { ContentItem } from '../contracts'
import { sampleBody } from './sample'

/** OOH Guide. Placeholder copy, replace with real guides. */
export const blogItems: ContentItem[] = [
  {
    slug: 'what-is-out-of-home-advertising',
    category: 'Basics',
    title: 'What Is Out-of-Home Advertising? A Practical Guide',
    description:
      'The formats, the vocabulary, and the first decisions every brand faces when starting with OOH.',
    date: '2026-10-20',
    readTime: '7 min read',
    coverVariant: 2,
    isSample: true,
    body: sampleBody(
      'Out-of-home (OOH) advertising reaches people outside their homes: on roads, in business districts, and in public spaces.',
      'Start with these ideas',
      [
        'Formats: static billboards, digital billboards, and street furniture',
        'Goals: awareness, consideration, or footfall',
        'Measures: reach, impressions, and frequency',
      ],
      'With these three in mind, planning conversations become much easier.',
    ),
  },
  {
    slug: 'billboard-or-digital-billboard',
    category: 'Planning',
    title: 'How to Choose Between a Billboard and a Digital Billboard',
    description:
      'Both formats have a place. A simple way to decide based on your objective, budget, and timing.',
    date: '2026-10-12',
    readTime: '6 min read',
    coverVariant: 0,
    isSample: true,
    body: sampleBody(
      'Static and digital billboards solve different problems. The right choice depends on what you need the campaign to do.',
      'Compare on',
      [
        'Campaign length and how often creative changes',
        'Cost and flexibility',
        'Location availability and audience fit',
      ],
      'Many campaigns use both: static for presence, digital for moments.',
    ),
  },
  {
    slug: 'beginners-guide-to-ooh-budgeting',
    category: 'Planning',
    title: 'A Beginner Guide to OOH Budgeting',
    description:
      'How to split a budget between locations, formats, and time without spreading it too thin.',
    date: '2026-10-05',
    readTime: '6 min read',
    coverVariant: 4,
    isSample: true,
    body: sampleBody(
      'Budgeting for OOH is mostly about focus. A few strong locations usually beat many weak ones.',
      'A simple approach',
      [
        'Set the objective and audience first',
        'Pick priority cities and areas',
        'Hold a small reserve for late opportunities',
      ],
      'Review the split with data once the first locations are live.',
    ),
  },
  {
    slug: 'how-to-brief-a-billboard-campaign',
    category: 'How to',
    title: 'How to Brief a Billboard Campaign',
    description:
      'What to include in a brief so planners can recommend the right locations the first time.',
    date: '2026-09-27',
    readTime: '5 min read',
    coverVariant: 5,
    isSample: true,
    body: sampleBody(
      'A clear brief saves rounds of revisions. It tells planners what success looks like and what is flexible.',
      'Include',
      [
        'Objective and key message',
        'Target audience and priority areas',
        'Timing, budget range, and creative formats',
      ],
      'Share what you already know about competitors too. It speeds up planning.',
    ),
  },
  {
    slug: 'ooh-metrics-explained',
    category: 'Glossary',
    title: 'OOH Metrics Explained',
    description: 'Reach, impressions, frequency, and Share of Voice in plain language.',
    date: '2026-09-15',
    readTime: '5 min read',
    coverVariant: 1,
    isSample: true,
    body: sampleBody(
      'The vocabulary of OOH can feel heavy at first. These are the four terms that come up in almost every plan.',
      'The terms',
      [
        'Reach: how many different people were exposed',
        'Impressions: how many times exposure happened',
        'Frequency: how often the same person was exposed',
        'Share of Voice: your presence versus competitors',
      ],
      'Keep this list handy when reading plans and reports.',
    ),
  },
  {
    slug: 'checklist-for-your-first-billboard-campaign',
    category: 'Checklist',
    title: 'Checklist for Launching Your First Billboard Campaign',
    description: 'From objective to proof of posting, the steps to cover before and after launch.',
    date: '2026-09-02',
    readTime: '4 min read',
    coverVariant: 3,
    isSample: true,
    body: sampleBody(
      'First campaigns go smoother with a simple checklist.',
      'Before launch',
      [
        'Confirm objective, audience, and budget',
        'Shortlist locations with data',
        'Confirm availability and creative specifications',
      ],
      'After launch, confirm proof of posting and review performance against your objective.',
    ),
  },
]
