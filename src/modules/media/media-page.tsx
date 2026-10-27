import { mediaItems } from '@/shared/content'
import { InsightsScene } from '@/shared/illustrations'
import { ctaLinks, routes, siteConfig, usePageMeta } from '@/shared/lib'
import { ContentListing, CtaSection, PageHero } from '@/shared/marketing'

const meta = {
  title: 'Press & Media',
  description: 'Press releases, announcements, and media coverage about Playlog.',
}

export function MediaPage() {
  usePageMeta(meta)
  return (
    <>
      <PageHero
        eyebrow="Press & Media"
        title="News, Announcements, and Coverage"
        description={`Follow what is new at Playlog and how the industry is talking about out-of-home advertising. For media inquiries, write to ${siteConfig.email}.`}
        primary={{ label: 'Browse Updates', to: '#updates' }}
        visual={<InsightsScene />}
      />
      <ContentListing
        id="updates"
        title="Latest from Playlog"
        description="Press releases, company announcements, and coverage in one place."
        items={mediaItems}
        basePath={routes.media}
        searchLabel="Search press and media"
        tone="muted"
      />
      <CtaSection
        title="Want to Talk to Our Team?"
        description="Whether you are a journalist, a partner, or a brand exploring OOH, we would like to hear from you."
        primary={{ label: 'Get in Touch', to: ctaLinks.talkToExpert }}
      />
    </>
  )
}
