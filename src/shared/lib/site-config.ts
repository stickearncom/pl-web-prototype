/**
 * Single place for site-wide constants and CTA destinations.
 * Change a CTA target here and every button that uses it follows.
 */
const dashboardUrl = 'https://dashboard.playlog.io'

export const siteConfig = {
  name: 'Playlog',
  url: import.meta.env.VITE_SITE_URL ?? 'https://playlog.io',
  email: 'info@playlog.io',
  dashboardUrl,
  // TODO(marcom): replace with the official profile URLs before launch.
  social: {
    instagram: 'https://www.instagram.com/',
    linkedin: 'https://www.linkedin.com/',
  },
} as const

export const routes = {
  home: '/',
  planning: '/products/planning',
  measurement: '/products/measurement',
  competitiveLandscape: '/products/competitive-landscape',
  digitalBillboard: '/products/digital-billboard',
  billboard: '/products/billboard',
  insightArticles: '/insights/articles',
  insightReports: '/insights/reports',
  blog: '/blog',
  media: '/media',
  about: '/about',
  contact: '/contact',
  privacy: '/privacy',
  terms: '/terms',
} as const

/** CTA destinations. Platform actions go to the dashboard, conversations go to /contact. */
export const ctaLinks = {
  startCampaign: dashboardUrl,
  openDashboard: dashboardUrl,
  talkToExpert: `${routes.contact}?interest=advertising`,
  bookDemo: `${routes.contact}?interest=demo`,
  becomePartner: `${routes.contact}?interest=partnership`,
} as const
