import type { ContentItem } from '../contracts'
import { sampleBody } from './sample'

/** Playlog Insight. Placeholder copy, replace with real articles. */
export const articleItems: ContentItem[] = [
  {
    slug: 'share-of-voice-and-billboard-visibility',
    category: 'Market',
    title: 'How Share of Voice Shapes Billboard Visibility',
    description:
      'Share of Voice shows how visible a brand is compared with competitors. Here is how to read it before you plan.',
    date: '2026-10-14',
    readTime: '5 min read',
    coverVariant: 1,
    isSample: true,
    body: sampleBody(
      'Share of Voice (SOV) compares your billboard presence with the other brands in your category. It is one of the quickest ways to understand how crowded a market is.',
      'What to look at',
      [
        'Where competitors concentrate their billboards',
        'How your coverage compares by city and format',
        'Locations with strong audience potential and less competition',
      ],
      'Used early in planning, SOV helps teams choose locations with intent instead of repeating what the category already does.',
    ),
  },
  {
    slug: 'reading-audience-movement-around-a-billboard',
    category: 'Audience',
    title: 'Reading Audience Movement Around a Billboard',
    description:
      'Traffic and points of interest explain who passes a location and why. A practical way to read both.',
    date: '2026-10-02',
    readTime: '6 min read',
    coverVariant: 3,
    isSample: true,
    body: sampleBody(
      'A billboard is only as useful as the people who pass it. Audience movement around a location tells you who they are, when they pass, and what they are doing nearby.',
      'Signals worth comparing',
      [
        'Traffic density through the day',
        'Nearby points of interest such as offices, schools, and retail',
        'How the audience mix changes between locations',
      ],
      'Comparing a few locations side by side is usually more useful than studying one in isolation.',
    ),
  },
  {
    slug: 'five-questions-before-choosing-a-billboard-location',
    category: 'Planning',
    title: 'Five Questions to Ask Before Choosing a Billboard Location',
    description:
      'A short checklist for brands and agencies that want locations to match campaign objectives.',
    date: '2026-09-24',
    readTime: '4 min read',
    coverVariant: 2,
    isSample: true,
    body: sampleBody(
      'Good location choices start with good questions. These five help keep a plan tied to the campaign objective.',
      'The questions',
      [
        'Who exactly do we want to reach?',
        'Where does that audience move, and when?',
        'Who else is advertising nearby?',
        'What can the location deliver in reach and impressions?',
        'Is the asset available for our campaign window?',
      ],
      'If a location cannot answer most of these, keep looking.',
    ),
  },
  {
    slug: 'digital-billboards-and-campaign-history',
    category: 'Planning',
    title: 'Digital Billboards and the Value of Campaign History',
    description:
      'Knowing who advertised on a screen before you tells you a lot about its audience and its fit.',
    date: '2026-09-16',
    readTime: '5 min read',
    coverVariant: 0,
    isSample: true,
    body: sampleBody(
      'Campaign history is an underused signal. Brands tend to advertise where their audience is, so past campaigns on a screen hint at who sees it.',
      'What history can show',
      [
        'Which categories have used the screen',
        'How long and how often campaigns ran',
        'Whether competitors already own the location',
      ],
      'Combine history with audience and impression data for a fuller picture before you commit.',
    ),
  },
  {
    slug: 'what-impressions-can-and-cannot-tell-you',
    category: 'Measurement',
    title: 'What Impressions Can and Cannot Tell You',
    description:
      'Impressions describe exposure. They are a starting point for measurement, not the whole story.',
    date: '2026-09-08',
    readTime: '6 min read',
    coverVariant: 5,
    isSample: true,
    body: sampleBody(
      'Impressions estimate how often a message could be seen. They are useful, but they answer one question out of several.',
      'Pair impressions with',
      [
        'Reach, to understand how many different people were exposed',
        'Audience insight, to understand who they were',
        'Location performance, to understand where exposure came from',
      ],
      'Together these turn a number into a decision for the next campaign.',
    ),
  },
  {
    slug: 'seasonal-patterns-in-billboard-advertising',
    category: 'Market',
    title: 'Seasonal Patterns in Billboard Advertising',
    description:
      'Campaign activity rises and falls through the year. Planning around it can protect your visibility.',
    date: '2026-08-28',
    readTime: '5 min read',
    coverVariant: 4,
    isSample: true,
    body: sampleBody(
      'Billboard activity is not flat. Categories cluster around holidays, launches, and shopping periods, and that changes how crowded a location feels.',
      'Plan around it',
      [
        'Book popular locations earlier in busy periods',
        'Look at category benchmarks, not only your own history',
        'Keep a flexible budget for locations that open up late',
      ],
      'Seasonal awareness helps you spend where visibility is actually available.',
    ),
  },
]
