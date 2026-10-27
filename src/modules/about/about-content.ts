import { Compass, Gauge, ScanEye } from 'lucide-react'
import type { FeatureItem } from '@/shared/content'
import type { Stat } from '@/shared/marketing'
import { routes } from '@/shared/lib'

export const aboutContent = {
  meta: {
    title: 'About us',
    description:
      'Playlog is a technology platform for Out-of-Home advertising, bringing data and technology to billboard planning, execution, and measurement.',
  },
  hero: {
    eyebrow: 'The evolution of OOH',
    title: 'From Outdoor Spaces to Smarter Advertising',
    description:
      'Out-of-Home advertising has always been about being seen in the right place. But as the industry grows, knowing where to advertise, who you can reach, and what your campaign delivers requires more than visibility. Playlog was built to bring data and technology into OOH, connecting billboard inventory, market intelligence, campaign execution, and measurement in one integrated platform.',
    journey: [
      {
        stage: 1,
        title: 'OOH Begins',
        description: 'Traditional placement based on pure visibility and instinct.',
      },
      {
        stage: 2,
        title: 'More Locations',
        description: 'An explosion of transit, digital screens, and programmatic.',
      },
      {
        stage: 3,
        title: 'Data Complexity',
        description: 'Difficulty verifying displays, measuring reach, and tracking ROI.',
      },
      {
        stage: 4,
        title: 'Playlog Era',
        description: 'Unified analytics, real-time verification, and smart audience mapping.',
      },
    ] as const,
    subhead:
      'Playlog brings OOH into a more connected and data-driven era. Built in Indonesia. Built for the future of OOH.',
  },
  mission: {
    title: 'Making OOH Smarter, One Billboard at a Time',
    description:
      'Playlog is a technology platform for Out-of-Home advertising, helping brands and agencies make smarter decisions across the billboard journey, from planning and site selection to campaign monitoring and performance reporting.',
    more: [
      'Powered by data and technology, Playlog gives teams a clearer view of the OOH market, helping them understand where to be visible, what opportunities to consider, and how their campaigns perform.',
      'Everything works through one integrated system, giving clients greater visibility into the impact of every campaign.',
    ],
    features: [
      {
        icon: Compass,
        title: 'Plan',
        description:
          'Find the right locations with real-world market and audience traffic data. Zero guesswork.',
      },
      {
        icon: ScanEye,
        title: 'Execute',
        description:
          'Keep campaign delivery visible and verified. Track real-time progress and installation status directly.',
      },
      {
        icon: Gauge,
        title: 'Measure',
        description:
          'Understand campaign performance with impressions, reach, frequency, and deep per-inventory insights.',
      },
    ] satisfies FeatureItem[],
  },
  campaigns: {
    title: 'Built Around Real Campaigns',
    description:
      'Connecting advertisers to thousands of billboard assets across Indonesia’s fastest growing metropolitan areas.',
    stats: [
      { value: 2026, label: 'Technology platform launched', plain: true },
      { value: 300, suffix: '+', label: 'Campaigns managed' },
      { value: 200, suffix: '+', label: 'Cities covered' },
      { value: 28000, suffix: '+', label: 'Billboard spots available' },
    ] satisfies Stat[],
    brandsCaption: 'Trusted by teams across industries',
  },
  cta: {
    title: 'Ready to See OOH Differently?',
    description:
      'Whether you’re planning your next billboard campaign or looking to understand the market better, our team can help you explore what Playlog can do for your business.',
    primary: { label: 'Explore Playlog', to: `${routes.home}#platform` },
  },
}
