import {
  Activity,
  Download,
  Eye,
  FileText,
  Globe,
  LayoutDashboard,
  MapPin,
  Target,
  TrendingUp,
  Users,
} from 'lucide-react'
import type { FaqItem, FeatureItem } from '@/shared/content'
import { ctaLinks } from '@/shared/lib'

export const measurementContent = {
  meta: {
    title: 'Measurement',
    description:
      'Playlog Measurement turns billboard campaign data into clear reach, impression, audience, and performance reporting.',
  },
  hero: {
    eyebrow: 'Billboard Campaign Measurement Standard',
    title: 'Measure Billboard Performance Beyond Impressions',
    description:
      'Every billboard campaign generates data. Our measurement turns that data into clear, actionable insights and helps you understand campaign performance, demonstrate results to stakeholders, and make smarter decisions for your next campaign.',
    primary: { label: 'Start Measuring', to: ctaLinks.startCampaign },
    secondary: { label: 'Book a Demo', to: '#request-demo' },
  },
  capabilities: {
    title: 'Turn Campaign Data into Better Advertising Decisions',
    description:
      'Monitor every billboard campaign through one centralized dashboard. From campaign tracking to performance reporting, Playlog Measurement helps your team understand what happened, why it happened, and what to improve next.',
    items: [
      {
        icon: LayoutDashboard,
        title: 'Campaign Dashboard',
        description: 'Track campaign progress in real time through one centralized workspace.',
      },
      {
        icon: Eye,
        title: 'Reach & Impressions',
        description:
          'Measure estimated audience reach and advertising exposure using a standardized methodology.',
      },
      {
        icon: TrendingUp,
        title: 'Campaign Performance',
        description: 'Monitor campaign delivery and identify high-performing billboard locations.',
      },
      {
        icon: Users,
        title: 'Audience Insights',
        description:
          'Understand who your campaign reached through audience movement and demographic analysis.',
      },
      {
        icon: FileText,
        title: 'Campaign Reporting',
        description: 'Generate structured reports automatically without manual data collection.',
      },
      {
        icon: Globe,
        title: 'Global Measurement Standard',
        description:
          'Evaluate every campaign with Playlog’s measurement methodology, designed to align with global measurement practices.',
      },
    ] satisfies FeatureItem[],
  },
  features: {
    title: 'Powerful Features for Comprehensive Campaign Analytics',
    description:
      'Track every campaign’s performance with clear, connected data and reporting in one dashboard.',
    items: [
      {
        icon: Activity,
        title: 'Live Dashboard',
        description: 'Campaign progress, updated throughout the campaign period.',
      },
      {
        icon: Users,
        title: 'Reach',
        description: 'How many different people your campaign reached.',
      },
      {
        icon: Eye,
        title: 'Impression',
        description: 'How often your campaign was likely to be seen.',
      },
      {
        icon: Target,
        title: 'Audience',
        description: 'Who was exposed, based on movement and demographics.',
      },
      {
        icon: MapPin,
        title: 'Location Performance',
        description: 'Which billboard locations delivered the most.',
      },
      {
        icon: Download,
        title: 'Report Export',
        description: 'Download reports and share them with your team or clients.',
      },
    ] satisfies FeatureItem[],
    cta: { label: 'Explore Dashboard', to: ctaLinks.openDashboard },
  },
  faq: {
    title: 'What You Need to Know About Measurement',
    description:
      'Learn how Playlog Measurement helps brands and agencies evaluate billboard performance with trusted, data-driven reporting.',
    items: [
      {
        question: 'What is Playlog Measurement?',
        answer:
          'Playlog Measurement is a campaign measurement platform that helps advertisers monitor billboard performance through real-time reporting and audience insights.',
      },
      {
        question: 'What metrics can I measure?',
        answer: 'You can track the following metrics for every campaign.',
        points: [
          'Campaign Reach',
          'Estimated Impressions',
          'Audience Exposure',
          'Campaign Progress',
          'Location Performance',
          'Audience Insights',
        ],
      },
      {
        question: 'How is the measurement calculated?',
        answer:
          'Playlog combines audience mobility data, campaign delivery information, and proprietary measurement algorithms to provide standardized performance metrics aligned with global measurement practices.',
      },
      {
        question: 'Can I monitor campaigns in real time?',
        answer:
          'Yes. Your dashboard updates campaign progress and reporting throughout the campaign period.',
      },
      {
        question: 'Can I export campaign reports?',
        answer: 'Yes. Reports can be downloaded and shared with internal teams or clients.',
      },
    ] satisfies FaqItem[],
  },
  demo: {
    eyebrow: 'Request a demo',
    title: 'Measure What Your Campaign Delivered',
    description:
      'See how Playlog Measurement helps brands and agencies monitor campaign performance, access trusted reporting, and make smarter advertising decisions. Request a personalized demo or start your free product trial today.',
    points: [
      'Personalized Product Demo',
      'Measurement Consultation',
      'Live Dashboard Walkthrough',
      'Campaign Reporting Preview',
    ],
  },
}
