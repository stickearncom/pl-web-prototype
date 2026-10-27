import { Eye, Layers, MapPin, Radar, Search, Store, TrendingUp, Users } from 'lucide-react'
import type { FaqItem, FeatureItem } from '@/shared/content'
import { ctaLinks, routes } from '@/shared/lib'

export const billboardContent = {
  meta: {
    title: 'Billboard',
    description:
      'Explore strategic billboard opportunities across Indonesia and choose locations based on audience exposure and market intelligence.',
  },
  hero: {
    title: 'Find the Right Billboard. Make Every Location Count.',
    description:
      'Explore strategic billboard opportunities across Indonesia and choose locations based on your campaign objectives and data.',
    primary: { label: 'Start Campaign', to: ctaLinks.startCampaign },
    secondary: { label: 'Talk to an Expert', to: ctaLinks.talkToExpert },
  },
  explore: {
    eyebrow: 'Explore',
    title: 'Find a Billboard That Fits Your Strategy',
    description:
      'Explore diverse billboard assets across strategic locations and narrow your search based on the objectives that matter to you.',
    items: [
      {
        icon: MapPin,
        title: 'Strategic Locations',
        description:
          'Find billboard opportunities across high-traffic roads, commercial areas, business districts, and other strategic locations.',
      },
      {
        icon: Search,
        title: 'Flexible Search',
        description: 'Filter and compare billboard opportunities based on your campaign needs.',
      },
      {
        icon: Users,
        title: 'Audience Potential',
        description:
          'Understand who is likely to see your billboard based on the characteristics and movement patterns around each location.',
      },
      {
        icon: Store,
        title: 'Point of Interest',
        description:
          'Evaluate nearby POIs and surrounding environments to understand the type of audience and activity around each billboard.',
      },
    ] satisfies FeatureItem[],
  },
  intelligence: {
    eyebrow: 'Intelligence',
    title: 'Know the Impact Before You Invest',
    description:
      'Understand the audience, campaign potential, and competitive activity behind every billboard to make smarter media decisions.',
    items: [
      {
        icon: Eye,
        title: 'Measure Audience Exposure',
        description:
          'See estimated reach and impressions to understand the potential exposure your campaign can generate.',
      },
      {
        icon: Users,
        title: 'Understand Your Audience',
        description:
          'Use location and POI data to understand the audience profile and activity surrounding each billboard.',
      },
      {
        icon: Radar,
        title: 'See What Competitors Are Doing',
        description:
          'Track competitor billboard activity, distribution, and Share of Voice (SOV) across locations and markets.',
      },
      {
        icon: TrendingUp,
        title: 'Benchmark Market Investment',
        description:
          'Gain visibility into competitor advertising activity, including estimated media investment, to understand how brands are competing in the market.',
      },
      {
        icon: Layers,
        title: 'Compare Market Coverage',
        description:
          'See how brands distribute their billboard presence across cities, locations, and strategic areas.',
      },
    ] satisfies FeatureItem[],
    statement: 'Don’t just see where the billboard is. Understand what the location can deliver.',
  },
  brands: {
    title: 'Brands Putting Billboards to Work',
    description:
      'From high-traffic city locations to strategic audience environments. See how leading brands use billboard advertising to build visibility and reach audiences at scale.',
    items: [
      {
        name: 'Bank BCA',
        locations: 20,
        impressions: 162690964,
        cities: 12,
        tone: 'blue',
        seed: 0,
      },
      { name: 'Adidas', locations: 1, impressions: 12257100, cities: 1, tone: 'white', seed: 1 },
      { name: 'Lego', locations: 5, impressions: 8142768, cities: 2, tone: 'mint', seed: 2 },
    ] as {
      name: string
      locations: number
      impressions: number
      cities: number
      tone: 'blue' | 'white' | 'mint' | 'navy'
      seed: number
    }[],
    cta: { label: 'See What Brands Achieved with Playlog', to: routes.insightArticles },
  },
  form: {
    title: 'Make Your Next Billboard Decision Smarter',
    description:
      'Tell us your campaign objectives and our team will help you identify billboard opportunities that match your needs.',
  },
  faq: {
    title: 'Frequently Asked Questions',
    items: [
      {
        question: 'What billboard locations are available on Playlog?',
        answer:
          'Playlog provides access to billboard inventory across Indonesia, with information on location, media type, audience, and other asset details to help you explore available opportunities.',
      },
      {
        question: 'Can I search billboards by location?',
        answer:
          'Yes. You can explore billboard opportunities based on specific cities, areas, or locations to find assets that match your campaign needs.',
      },
      {
        question: 'Can I see estimated impressions and reach?',
        answer:
          'Yes. Playlog provides estimated audience data, including potential impressions and reach, to help you understand the potential exposure of each billboard location.',
      },
      {
        question: 'Can I see which competitors advertise on a billboard?',
        answer:
          'Yes. Playlog provides billboard usage and competitor activity data, helping you see which brands have advertised on specific assets and understand their activity across locations.',
      },
      {
        question: 'Can Playlog recommend billboard locations for my campaign?',
        answer:
          'Yes. Our team can help recommend billboard locations based on your campaign objectives, target audience, location preferences, and available data. You can also talk to an expert for a more tailored consultation.',
      },
    ] satisfies FaqItem[],
  },
}
