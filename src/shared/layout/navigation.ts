import { Compass, Gauge, MonitorPlay, Radar, Signpost, FileBarChart, Newspaper } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { routes } from '@/shared/lib'

export type NavItem = { label: string; to: string; description?: string; icon?: LucideIcon }

export const productLinks: NavItem[] = [
  {
    label: 'Planning',
    to: routes.planning,
    description: 'Plan campaigns with audience and market data',
    icon: Compass,
  },
  {
    label: 'Measurement',
    to: routes.measurement,
    description: 'Track reach, impressions, and performance',
    icon: Gauge,
  },
  {
    label: 'Competitive landscape',
    to: routes.competitiveLandscape,
    description: 'See where competitors advertise',
    icon: Radar,
  },
  {
    label: 'Digital billboard',
    to: routes.digitalBillboard,
    description: 'Find digital screens backed by data',
    icon: MonitorPlay,
  },
  {
    label: 'Billboard',
    to: routes.billboard,
    description: 'Choose locations that deliver',
    icon: Signpost,
  },
]

export const insightLinks: NavItem[] = [
  {
    label: 'Playlog Insight',
    to: routes.insightArticles,
    description: 'Analysis and perspectives on OOH',
    icon: Newspaper,
  },
  {
    label: 'OOH Market Report',
    to: routes.insightReports,
    description: 'Research on the Indonesian OOH market',
    icon: FileBarChart,
  },
]

export const guideLink: NavItem = { label: 'OOH Guide', to: routes.blog }

export const companyLinks: NavItem[] = [
  { label: 'About us', to: routes.about },
  { label: 'Press & Media', to: routes.media },
  { label: 'Contact', to: routes.contact },
]

export const legalLinks: NavItem[] = [
  { label: 'Privacy Policy', to: routes.privacy },
  { label: 'Terms', to: routes.terms },
]
