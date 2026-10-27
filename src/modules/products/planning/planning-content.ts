import { Clock, Crosshair, Lightbulb, Target, Users, Zap } from 'lucide-react'
import type { FeatureItem } from '@/shared/content'
import { ctaLinks, routes } from '@/shared/lib'

export const planningContent = {
  meta: {
    title: 'Planning',
    description:
      'Playlog Planning helps brands and agencies build billboard campaigns with audience intelligence, competitor analysis, and location insights.',
  },
  hero: {
    title: 'Plan Smarter. Advertise Better.',
    description:
      'Playlog Planning helps brands and agencies build smarter billboard campaigns with audience intelligence, competitor analysis, and location insights, all in one connected platform. Stop guessing where to advertise and start planning campaigns backed by real-world data.',
    primary: { label: 'Start Planning', to: ctaLinks.startCampaign },
    secondary: { label: 'Talk to an Expert', to: ctaLinks.talkToExpert },
  },
  benefits: {
    title: 'Plan Billboard Campaigns with Confidence',
    description:
      'Replace fragmented research and manual planning with one connected platform that helps your team prepare campaigns faster, collaborate more efficiently, and make better media decisions.',
    items: [
      {
        icon: Zap,
        title: 'Build Campaigns Faster',
        description: 'Bring research, planning, and media selection together in one workflow.',
      },
      {
        icon: Target,
        title: 'Plan with Confidence',
        description:
          'Choose billboard locations using audience, traffic, and competitor insights instead of assumptions.',
      },
      {
        icon: Clock,
        title: 'Save Time',
        description: 'Reduce manual research and speed up campaign preparation.',
      },
      {
        icon: Users,
        title: 'Collaborate Better',
        description: 'Keep your team aligned with shared campaign data and planning tools.',
      },
      {
        icon: Crosshair,
        title: 'Improve Accuracy',
        description:
          'Use real-world data to identify locations with the highest advertising potential.',
      },
      {
        icon: Lightbulb,
        title: 'Make Smarter Decisions',
        description: 'Understand market conditions before investing your advertising budget.',
      },
    ] satisfies FeatureItem[],
  },
  workflow: {
    title: 'From Market Research to Campaign Strategy',
    description:
      'Playlog Planning combines market intelligence, audience insights, and expert consultation to help you create billboard campaigns that are backed by data from the very beginning.',
    steps: [
      {
        title: 'Explore the Market',
        description: 'Understand the advertising landscape before launching your campaign.',
        features: [
          'Competitor Activity',
          'Share of Voice Analysis',
          'Billboard Locations',
          'Audience Intelligence',
          'Market Trends',
        ],
        cta: { label: 'Explore Market Intelligence', to: routes.competitiveLandscape },
        visual: 'market',
      },
      {
        title: 'Find the Best Locations',
        description: 'Discover billboard opportunities that match your campaign goals.',
        features: [
          'Point of Interest (POI)',
          'Traffic Density',
          'Audience Movement',
          'City Comparison',
          'Reach Estimation',
        ],
        cta: { label: 'Find Better Locations', to: routes.billboard },
        visual: 'locations',
      },
      {
        title: 'Plan with Experts',
        description:
          'Work with Playlog specialists to turn insights into an effective media strategy.',
        features: [
          'Campaign Objectives',
          'Billboard Recommendations',
          'Budget Allocation',
          'Media Mix Strategy',
          'Consultative Deck',
        ],
        cta: { label: 'Talk to a Planning Expert', to: ctaLinks.talkToExpert },
      },
      {
        title: 'Finalize Your Campaign Plan',
        description:
          'Confirm billboard availability and prepare your campaign for launch with confidence.',
        features: [
          'Inventory Availability',
          'Recommended Placements',
          'Campaign Readiness',
          'Planning Summary',
        ],
        cta: { label: 'Start Your Campaign', to: ctaLinks.startCampaign },
      },
    ],
  },
  gallery: {
    title: 'Trusted by Leading Brands and Agencies',
    description:
      'Hundreds of marketing teams use Playlog Planning to simplify campaign preparation and make better billboard advertising decisions.',
    // TODO(marcom): set `src` to a real campaign photo. Until then the illustrated stand-in is shown.
    items: [
      { alt: 'Billboard campaign on a busy city road', tone: 'blue', seed: 0 },
      { alt: 'Billboard campaign beside an office district', tone: 'white', seed: 1 },
      { alt: 'Billboard campaign near a shopping area', tone: 'mint', seed: 2 },
      { alt: 'Billboard campaign along an arterial road', tone: 'navy', seed: 3 },
    ] as { alt: string; tone: 'blue' | 'navy' | 'white' | 'mint'; seed: number; src?: string }[],
  },
  cases: {
    title: 'See How Brands Plan Better Campaigns',
    description:
      'Explore real billboard campaigns planned using Playlog and discover how data-driven planning leads to better campaign performance.',
    items: [
      {
        label: 'Retail Success',
        title: 'Planning Billboard Locations Around High-Traffic Areas',
        description:
          'Using location and audience data to explore billboard opportunities around areas with strong consumer activity.',
        cover: 2,
      },
      {
        label: 'Brand Strategy',
        title: 'How a Tech Brand Found the Right Billboard Location',
        description:
          'Using location, audience, and surrounding POI data to identify billboard opportunities that reach the right audience.',
        cover: 3,
      },
      {
        label: 'Banking',
        title: 'Planning Billboard Locations for a Banking Brand',
        description:
          'Using competitor activity, location, and audience data to identify opportunities across key areas.',
        cover: 4,
      },
    ],
    cta: { label: 'Read the story', to: routes.insightArticles },
  },
  cta: {
    title: 'Ready to Plan the Next Campaign?',
    description: 'Bring your research, locations, and team into one planning workflow.',
    primary: { label: 'Start Planning', to: ctaLinks.startCampaign },
  },
}
