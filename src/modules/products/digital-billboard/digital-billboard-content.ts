import { ChartLine, Crosshair, Eye, Zap } from 'lucide-react'
import type { FeatureItem } from '@/shared/content'
import { ctaLinks, routes } from '@/shared/lib'

export const digitalBillboardContent = {
  meta: {
    title: 'Digital Billboard',
    description:
      'Find, evaluate, and choose digital billboards using audience, location, campaign history, and market data in one platform.',
  },
  hero: {
    title: 'Find the Right Digital Billboard. Backed by Data.',
    description:
      'One platform. Multiple digital billboard opportunities, matched to your audience, location, and market data.',
    primary: { label: 'Explore Digital Billboards', to: '#explore' },
    secondary: { label: 'Talk to an Expert', to: ctaLinks.talkToExpert },
  },
  explore: {
    title: 'Find a Billboard That Fits Your Campaign',
    description:
      'Browse available digital billboard options filtered by traffic data, POIs, and campaign history metrics.',
    items: [
      {
        key: 'market',
        title: 'Know Who’s Advertising and Where',
        description:
          'Explore competitor activity and market patterns to identify opportunities before you launch your campaign.',
        points: [
          'Competitor Brands',
          'Billboard Activity',
          'Market Trends',
          'Share of Voice',
          'Brand Presence',
        ],
        cta: { label: 'Explore Market Intelligence', to: routes.competitiveLandscape },
      },
      {
        key: 'history',
        title: 'See What Has Happened on the Screen Before',
        description:
          'Understand how digital billboard assets have been used through previous campaign activity and advertising history.',
        points: [
          'Previous Campaigns',
          'Brands That Have Advertised',
          'Campaign History',
          'Advertising Activity',
          'Asset Usage',
        ],
        cta: { label: 'Explore Campaign History', to: ctaLinks.talkToExpert },
      },
      {
        key: 'audience',
        title: 'Know What Each Location Can Deliver',
        description:
          'Compare potential audience exposure and impressions to identify digital billboard opportunities with stronger campaign potential.',
        points: [
          'Estimated Impressions',
          'Audience Profile',
          'Reach Potential',
          'Traffic Density',
          'Location Characteristics',
        ],
        cta: { label: 'Explore Audience Data', to: ctaLinks.talkToExpert },
      },
      {
        key: 'location',
        title: 'Find Digital Billboards Where Your Audience Is',
        description:
          'Explore available digital billboard locations across cities and areas based on your campaign needs.',
        points: ['City', 'Area', 'Specific location', 'POI', 'Audience area'],
        cta: { label: 'Explore Locations', to: ctaLinks.talkToExpert },
      },
    ],
  },
  detail: {
    title: 'More Than a Screen. A Digital Billboard Built to Be Seen.',
    description:
      'Every digital billboard comes with data that helps you understand its location, audience, history, and market potential before you make a decision.',
    note: 'Sample data shown for illustration.',
    // Sample values. Replace with a real asset when a screenshot is available.
    location: 'Sudirman, Jakarta Selatan',
    poi: ['Bank & Financial Institution', 'Education', 'F&B'],
    impressions: '672,563 / day',
    reach: '159,207 / day',
    history: ['Banking', 'Retail', 'Technology'],
  },
  benefits: {
    title: 'Make Every Digital Billboard Decision Count',
    description:
      'Go beyond choosing a screen. Use data and technology to find opportunities that fit your audience, objectives, and budget.',
    items: [
      {
        icon: Crosshair,
        title: 'More Precise',
        description:
          'Search based on the locations, audiences, and objectives that matter to your campaign.',
      },
      {
        icon: Eye,
        title: 'More Transparent',
        description:
          'See the data behind each digital billboard before making your media decision.',
      },
      {
        icon: Zap,
        title: 'More Efficient',
        description:
          'Compare multiple opportunities without jumping between media owners and platforms.',
      },
      {
        icon: ChartLine,
        title: 'More Data-Driven',
        description:
          'Make decisions using audience, impression, campaign history, and market intelligence.',
      },
    ] satisfies FeatureItem[],
  },
  cta: {
    title: 'Your Next Digital Billboard Starts With Better Data',
    description:
      'Join hundreds of fast-growing marketing teams planning and executing data-driven digital billboard campaigns with precision.',
    primary: { label: 'Start Campaign Now', to: ctaLinks.startCampaign },
  },
}
