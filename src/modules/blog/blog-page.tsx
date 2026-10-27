import { blogItems } from '@/shared/content'
import { ctaLinks, routes, usePageMeta } from '@/shared/lib'
import {
  ContentListing,
  CtaSection,
  HeroCompose,
  HeroNoteCard,
  ProductHero,
} from '@/shared/marketing'

const meta = {
  title: 'OOH Guide',
  description:
    'Billboard advertising guides, insights, and industry perspectives for brands and agencies who want to plan with confidence.',
}

export function BlogPage() {
  usePageMeta(meta)
  const latest = blogItems[0]
  return (
    <>
      <ProductHero
        eyebrow="OOH Guide"
        title="Learn More and"
        accent="Advertise Better."
        description="Explore billboard advertising insights, guides, and industry perspectives built to help brands and agencies make better decisions."
        primary={{ label: 'Browse the guide', to: '#guide' }}
        visual={
          <HeroCompose
            variant="card"
            photo={{
              src: '/media/billboard-aqua-wall.webp',
              alt: 'Large billboard wrapped around a city building',
              position: '40% 50%',
            }}
          >
            {latest && (
              <HeroNoteCard
                eyebrow="Latest guide"
                title={latest.title}
                meta={latest.category}
                to={`${routes.blog}/${latest.slug}`}
              />
            )}
          </HeroCompose>
        }
      />
      <ContentListing
        id="guide"
        eyebrow="Guides and perspectives"
        title="Insights, Guides, and Industry Perspectives"
        description="Browse the latest billboard advertising research, campaign stories, and market analysis to help you plan with confidence."
        items={blogItems}
        basePath={routes.blog}
        searchLabel="Search the guide"
        tone="muted"
        featureFirst
      />
      <CtaSection
        title="Planning Your Next Billboard Campaign?"
        description="Tell us what you’re looking for. Our team can help you explore billboard opportunities, compare formats, and plan a campaign that fits your goals."
        primary={{ label: 'Talk to an Expert', to: ctaLinks.talkToExpert }}
        image={{
          src: '/media/billboard-nescafe-columns.webp',
          alt: 'Billboard on tall building columns',
        }}
      />
    </>
  )
}
