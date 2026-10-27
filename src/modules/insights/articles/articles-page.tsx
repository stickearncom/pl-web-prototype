import { articleItems } from '@/shared/content'
import { ctaLinks, routes, usePageMeta } from '@/shared/lib'
import { ContentListing, CoverStack, CtaSection, ProductHero } from '@/shared/marketing'

const meta = {
  title: 'Playlog Insight',
  description:
    'Data-driven research on the Indonesian out-of-home advertising market, from industry trends and competitor activity to audience behavior and media opportunities.',
}

export function ArticlesPage() {
  usePageMeta(meta)
  return (
    <>
      <ProductHero
        eyebrow="Playlog Insight"
        title="Know the OOH Market"
        accent="Before You Make Your Move"
        description="Explore data-driven research on Indonesia’s Out-of-Home advertising market, from industry trends and competitor activity to audience behavior and media opportunities."
        primary={{ label: 'Read the research', to: '#articles' }}
        visual={<CoverStack items={articleItems} />}
      />
      <ContentListing
        id="articles"
        eyebrow="Explore the research"
        title="Insights for Smarter OOH Decisions"
        description="Explore our collection of OOH analysis to understand what is happening in the market and where the next opportunity lies."
        items={articleItems}
        basePath={routes.insightArticles}
        searchLabel="Search insights"
        tone="muted"
        featureFirst
      />
      <CtaSection
        title="Turn Market Insights Into Your Next Campaign"
        description="Know the market. Find the opportunity. Build a smarter OOH campaign with Playlog."
        primary={{ label: 'Start Campaign Now', to: ctaLinks.startCampaign }}
      />
    </>
  )
}
