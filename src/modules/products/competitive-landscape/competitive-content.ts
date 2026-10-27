import { ChartPie, MapPinned, ScanSearch, Scale, TrendingUp } from 'lucide-react'
import type { FaqItem, FeatureItem } from '@/shared/content'
import { ctaLinks } from '@/shared/lib'

export const competitiveContent = {
  meta: {
    title: 'Competitive Landscape',
    description:
      'Explore competitor billboard activity, Share of Voice, and market trends to find advertising opportunities before you launch.',
  },
  hero: {
    title: 'Understand the Billboard Market Before You Advertise',
    description:
      'Explore competitor activity, identify advertising opportunities, and make smarter campaign decisions with data-driven market intelligence.',
    primary: { label: 'Explore Competitive Landscape', to: '#explore' },
    secondary: { label: 'Book a Demo', to: '#contact-form' },
  },
  activity: {
    title: 'See Where Your Competitors Are Advertising',
    description:
      'Track competitor billboard activity across cities, locations, and advertising formats. Discover where brands are investing so you can identify opportunities before launching your own campaign.',
    listTitle: 'What you can explore',
    list: [
      'Competitor Billboard Locations',
      'Active Campaign Distribution',
      'Advertising Coverage',
      'Campaign Timeline',
      'Media Format Distribution',
    ],
    cta: { label: 'Explore Competitor Activity', to: ctaLinks.openDashboard },
  },
  opportunities: {
    title: 'Discover Opportunities Hidden in the Market',
    description:
      'Go beyond competitor tracking. Analyze market trends, compare Share of Voice, and uncover billboard opportunities that help your campaigns stand out.',
    items: [
      {
        icon: ChartPie,
        title: 'Share of Voice (SOV)',
        description:
          'Understand how visible your brand is compared to competitors across billboard campaigns.',
      },
      {
        icon: Scale,
        title: 'Category Benchmark',
        description:
          'Compare advertising activity within your industry to identify market positioning.',
      },
      {
        icon: TrendingUp,
        title: 'Market Trends',
        description: 'Track billboard advertising trends across cities and time periods.',
      },
      {
        icon: MapPinned,
        title: 'Opportunity Mapping',
        description:
          'Identify locations with strong audience potential and lower competitive activity.',
      },
      {
        icon: ScanSearch,
        title: 'Campaign Intelligence',
        description:
          'Understand where competitors are investing and uncover new advertising opportunities.',
      },
    ] satisfies FeatureItem[],
    cta: { label: 'Start Exploring Market Insights', to: ctaLinks.openDashboard },
  },
  faq: {
    title: 'Frequently Asked Questions',
    description:
      'Get answers to common questions about tracking the billboard competitive landscape and market insights.',
    items: [
      {
        question: 'What is Competitive Landscape?',
        answer:
          'Playlog Competitive Landscape is a market intelligence tool that helps advertisers analyze billboard advertising activity, monitor competitors, and discover new campaign opportunities.',
      },
      {
        question: 'What data can I explore?',
        answer: 'You can explore the following data.',
        points: [
          'Competitor campaigns',
          'Billboard locations',
          'Share of Voice (SOV)',
          'Market trends',
          'Industry benchmarks',
          'Opportunity mapping',
        ],
      },
      {
        question: 'How can this help my campaign?',
        answer:
          'Understanding market activity helps you choose better billboard locations, identify underserved areas, and develop more effective advertising strategies.',
      },
      {
        question: 'Can I compare my brand with competitors?',
        answer:
          'Yes. Playlog allows you to compare advertising activity and Share of Voice across brands within the same category.',
      },
      {
        question: 'Is the data updated regularly?',
        answer:
          'Yes. Market intelligence is continuously updated to provide the latest billboard advertising insights.',
      },
    ] satisfies FaqItem[],
  },
  form: {
    title: 'Understand Your Market Better Now',
    description:
      'Explore competitor activity, uncover market opportunities, and build smarter billboard campaigns with Playlog Competitive Landscape.',
  },
}
