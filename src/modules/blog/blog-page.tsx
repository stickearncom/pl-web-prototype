import { blogItems } from '@/shared/content'
import { BillboardScene } from '@/shared/illustrations'
import { ctaLinks, routes, usePageMeta } from '@/shared/lib'
import { ContentListing, CtaSection, PageHero } from '@/shared/marketing'

const meta = {
  title: 'OOH Guide',
  description:
    'Billboard advertising guides, insights, and industry perspectives for brands and agencies who want to plan with confidence.',
}

export function BlogPage() {
  usePageMeta(meta)
  return (
    <>
      <PageHero
        eyebrow="OOH Guide"
        title="Learn More and Advertise Better."
        description="Explore billboard advertising insights, guides, and industry perspectives built to help brands and agencies make better decisions."
        primary={{ label: 'Browse the Guide', to: '#guide' }}
        visual={<BillboardScene />}
      />
      <ContentListing
        id="guide"
        title="Insights, Guides, and Industry Perspectives"
        description="Browse the latest billboard advertising research, campaign stories, and market analysis to help you plan with confidence."
        items={blogItems}
        basePath={routes.blog}
        searchLabel="Search the guide"
        tone="muted"
      />
      <CtaSection
        title="Planning Your Next Billboard Campaign?"
        description="Tell us what you’re looking for. Our team can help you explore billboard opportunities, compare formats, and plan a campaign that fits your goals."
        primary={{ label: 'Talk to an Expert', to: ctaLinks.talkToExpert }}
      />
    </>
  )
}
