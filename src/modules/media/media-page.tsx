import { mediaItems } from '@/shared/content'
import { ctaLinks, routes, siteConfig, usePageMeta } from '@/shared/lib'
import {
  ContentListing,
  CtaSection,
  HeroCompose,
  HeroNoteCard,
  ProductHero,
} from '@/shared/marketing'

const meta = {
  title: 'Press & Media',
  description: 'Press releases, announcements, and media coverage about Playlog.',
}

export function MediaPage() {
  usePageMeta(meta)
  return (
    <>
      <ProductHero
        eyebrow="Press & Media"
        title="News, Announcements,"
        accent="and Coverage"
        description="Follow what is new at Playlog and how the industry is talking about out-of-home advertising."
        primary={{ label: 'Browse updates', to: '#updates' }}
        secondary={{ label: 'Media inquiries', to: `mailto:${siteConfig.email}` }}
        visual={
          <HeroCompose
            variant="card"
            photo={{
              src: '/media/billboard-corner.webp',
              alt: 'Large digital billboard at a city corner',
              position: '50% 50%',
            }}
          >
            <HeroNoteCard
              eyebrow="Media inquiries"
              title={siteConfig.email}
              meta="Write to our team"
              to={`mailto:${siteConfig.email}`}
            />
          </HeroCompose>
        }
      />
      <ContentListing
        id="updates"
        eyebrow="Latest from Playlog"
        title="Press Releases, Announcements, and Coverage"
        description="Company news and coverage in one place."
        items={mediaItems}
        basePath={routes.media}
        searchLabel="Search press and media"
        tone="muted"
      />
      <CtaSection
        title="Want to Talk to Our Team?"
        description="Whether you are a journalist, a partner, or a brand exploring OOH, we would like to hear from you."
        primary={{ label: 'Get in Touch', to: ctaLinks.talkToExpert }}
        image={{
          src: '/media/billboard-station-wide.webp',
          alt: 'Wide digital billboard in a station',
        }}
      />
    </>
  )
}
