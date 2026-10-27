import { DigitalBillboardScene } from '@/shared/illustrations'
import { Section } from '@/shared/layout'
import { usePageMeta } from '@/shared/lib'
import { CtaSection, FeatureGrid, PageHero, SectionHeader } from '@/shared/marketing'
import { LocationDetail } from './components/location-detail'
import { PitchTabs } from './components/pitch-tabs'
import { digitalBillboardContent as content } from './digital-billboard-content'

export function DigitalBillboardPage() {
  usePageMeta(content.meta)
  return (
    <>
      <PageHero
        title={content.hero.title}
        description={content.hero.description}
        primary={content.hero.primary}
        secondary={content.hero.secondary}
        visual={<DigitalBillboardScene />}
      />

      <Section id="explore" tone="muted">
        <SectionHeader title={content.explore.title} description={content.explore.description} />
        <div className="mt-12 md:mt-16">
          <PitchTabs />
        </div>
      </Section>

      <Section tone="dark">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(44rem_26rem_at_50%_0%,rgb(0_244_203/0.16),transparent_60%)]"
        />
        <SectionHeader
          tone="dark"
          title={content.detail.title}
          description={content.detail.description}
        />
        <div className="mt-12 md:mt-16">
          <LocationDetail />
        </div>
      </Section>

      <Section>
        <SectionHeader title={content.benefits.title} description={content.benefits.description} />
        <FeatureGrid items={content.benefits.items} columns={4} className="mt-12 md:mt-16" />
      </Section>

      <CtaSection
        title={content.cta.title}
        description={content.cta.description}
        primary={content.cta.primary}
      />
    </>
  )
}
