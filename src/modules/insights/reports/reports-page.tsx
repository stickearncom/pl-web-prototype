import { reportItems } from '@/shared/content'
import { ctaLinks, routes, usePageMeta } from '@/shared/lib'
import { ContentListing, CoverStack, CtaSection, ProductHero } from '@/shared/marketing'

const meta = {
  title: 'OOH Market Reports',
  description:
    'Market research reports, trends, and advertising data to understand how brands compete and where the Indonesian OOH market is moving.',
}

export function ReportsPage() {
  usePageMeta(meta)
  return (
    <>
      <ProductHero
        eyebrow="OOH Market Report"
        title="Explore the Data Behind"
        accent="Indonesia’s OOH Market"
        description="Discover market research reports, trends, and advertising data to understand how brands compete, where the market is moving, and what shapes the out-of-home advertising landscape."
        primary={{ label: 'Browse reports', to: '#reports' }}
        visual={<CoverStack items={reportItems} />}
      />
      <ContentListing
        id="reports"
        eyebrow="Market research"
        title="Explore Market Research Reports"
        description="Browse our reports to understand what is happening in the market and where the next opportunity lies."
        items={reportItems}
        basePath={routes.insightReports}
        searchLabel="Search reports"
        tone="muted"
        featureFirst
      />
      <CtaSection
        title="Turn Market Insights Into Your Next Move"
        description="Looking to advertise with Playlog or explore billboard opportunities for your brand?"
        primary={{ label: 'Talk to Our Team', to: ctaLinks.talkToExpert }}
      />
    </>
  )
}
