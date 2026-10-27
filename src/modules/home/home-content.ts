import { Activity, ChartLine, ShieldCheck, Workflow } from 'lucide-react'
import type { FeatureItem } from '@/shared/content'
import { ctaLinks, routes } from '@/shared/lib'

export const homeContent = {
  meta: {
    description:
      'Playlog brings every billboard campaign into one connected workflow, from planning and inventory to verification and measurement.',
  },
  hero: {
    eyebrow: 'Out-of-home, all connected',
    titleLead: 'Manage Billboard Campaigns',
    titleAccent: 'More Efficiently',
    stats: [
      { value: 300, suffix: '+', label: 'Brands trust Playlog' },
      { value: 200, suffix: '+', label: 'Cities covered' },
      { value: 28000, suffix: '+', label: 'Billboard spots available' },
    ],
    description:
      'Bring every billboard campaign into one connected workflow. Simplify campaign management with a platform that helps your team work faster, collaborate seamlessly, and make more accurate decisions.',
    primary: { label: 'Explore the Platform', to: '#platform' },
    secondary: { label: 'Talk to an Expert', to: ctaLinks.talkToExpert },
    brandCaption:
      'Trusted by 300+ brands of all sizes. Built with love. Inspired by our customers.',
  },
  story: {
    eyebrow: 'How Playlog works',
    title: 'One City. Three Moments.',
    description:
      'Every campaign moves through the same three moments. Playlog connects them in one integrated system.',
    sceneLabel:
      'Illustration of a small city with billboards along two roads, changing as the campaign moves from planning to execution to measurement.',
    steps: [
      {
        key: 'plan',
        tag: 'Plan',
        title: 'Find the right locations',
        description:
          'Find the right locations with real-world market and audience traffic data. Zero guesswork.',
        legend: 'Audience traffic and shortlisted billboards',
      },
      {
        key: 'execute',
        tag: 'Execute',
        title: 'Keep delivery visible and verified',
        description:
          'Keep campaign delivery visible and verified. Track real-time progress and installation status directly.',
        legend: 'Campaign live and verified on site',
      },
      {
        key: 'measure',
        tag: 'Measure',
        title: 'Understand what every billboard delivers',
        description:
          'Understand campaign performance with impressions, reach, frequency, and deep per-inventory insights.',
        legend: 'Impressions, reach and frequency per billboard',
      },
    ],
  },
  platform: {
    eyebrow: 'The platform',
    title: 'Every stage of your campaign, in one place',
    description:
      'From the first location shortlist to the final performance report, Playlog keeps your team on one connected workflow.',
    blocks: [
      {
        key: 'planning',
        tag: 'Planning',
        title: 'Plan Every Billboard Campaign with Confidence',
        description:
          'Playlog helps brands and agencies identify the right billboard locations using audience insights, traffic data, and market intelligence. Make informed media decisions before your campaign goes live.',
        link: { label: 'Explore Planning', to: routes.planning },
      },
      {
        key: 'inventory',
        tag: 'Inventory',
        title: 'Access Billboard Inventory in One Place',
        description:
          'Playlog connects you with billboard and digital billboard inventory across Indonesia. Browse available media, compare locations, and simplify your media buying workflow in one platform.',
        link: { label: 'Explore Billboards', to: routes.billboard },
      },
      {
        key: 'execution',
        tag: 'Execution',
        title: 'Know Every Campaign Is Running as Planned',
        description:
          'Our ad verification service provides trusted proof of posting and real-time campaign tracking, giving your team full visibility into billboard execution from installation to completion.',
        link: { label: 'Talk to an Expert', to: ctaLinks.talkToExpert },
      },
      {
        key: 'reporting',
        tag: 'Reporting',
        title: 'Measure Campaign Performance Easier',
        description:
          'Measurement tools in Playlog turn campaign data into clear performance reports, helping your team understand the reach, impressions, and overall effectiveness of every campaign.',
        link: { label: 'Explore Measurement', to: routes.measurement },
      },
      {
        key: 'intelligence',
        tag: 'Intelligence',
        title: 'Understand the Market Behind Every Billboard',
        description:
          'See competitor activity, market trends, and emerging opportunities with Playlog Market Intelligence, so your team can plan smarter, more strategic campaigns.',
        link: { label: 'Explore Competitive Landscape', to: routes.competitiveLandscape },
      },
    ],
  },
  showcase: {
    eyebrow: 'Digital billboards',
    title: 'See digital billboards where they matter',
    description:
      'Browse digital screens along Indonesia’s busiest roads and business districts, and understand each location before you book.',
    cta: { label: 'Explore Digital Billboards', to: routes.digitalBillboard },
    tiles: [
      {
        src: '/media/billboard-aqua-wall.webp',
        alt: 'Large building-wall billboard above a pedestrian plaza',
        caption: 'Building-wall billboard',
      },
      {
        src: '/media/billboard-nescafe-columns.webp',
        alt: 'Row of digital LED columns along a tree-lined sidewalk',
        caption: 'Street-level LED columns',
      },
    ],
  },
  usp: {
    eyebrow: 'Why Playlog',
    title: 'Why teams choose Playlog',
    description: 'Four reasons billboard teams run their campaigns on one platform.',
    items: [
      {
        icon: Workflow,
        title: 'Connected Workflow',
        description: 'Manage every stage of your campaign without switching platforms.',
      },
      {
        icon: ShieldCheck,
        title: 'Trusted Billboard Network',
        description: 'Access verified billboard and digital billboard inventory across Indonesia.',
      },
      {
        icon: ChartLine,
        title: 'Data-Driven Decisions',
        description: 'Use audience and market intelligence to choose better advertising locations.',
      },
      {
        icon: Activity,
        title: 'Real-Time Performance',
        description: 'Track campaign progress and reporting through one centralized dashboard.',
      },
    ] satisfies FeatureItem[],
  },
  blog: {
    title: 'Learn and Deepen Your Understanding',
    description:
      'Guides, research, and perspectives to help you plan billboard campaigns with confidence.',
    cta: { label: 'Explore more', to: routes.blog },
  },
  cta: {
    title: 'Launch More Effective Billboard Campaigns',
    description: 'Start on the platform yourself, or book a walkthrough with our team.',
    primary: { label: 'Launch Here', to: ctaLinks.startCampaign },
    secondary: { label: 'Book a Demo', to: ctaLinks.bookDemo },
  },
}
