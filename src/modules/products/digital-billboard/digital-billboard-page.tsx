import { Section } from '@/shared/layout'
import { usePageMeta } from '@/shared/lib'
import { CtaSection, FeatureGrid, ProductHero, SceneIntro, SectionHeader } from '@/shared/marketing'
import { DigitalHeroVisual } from './components/digital-hero-visual'
import { DigitalScene } from './components/digital-scene'
import { FormatsGallery } from './components/formats-gallery'
import { LocationDetail } from './components/location-detail'
import { PitchTabs } from './components/pitch-tabs'
import { digitalBillboardContent as content } from './digital-billboard-content'

export function DigitalBillboardPage() {
  usePageMeta(content.meta)
  return (
    <>
      <ProductHero
        eyebrow={content.hero.eyebrow}
        title={content.hero.title}
        accent={content.hero.accent}
        description={content.hero.description}
        primary={content.hero.primary}
        secondary={content.hero.secondary}
        visual={<DigitalHeroVisual />}
      />

      <Section id="explore" tone="muted">
        <SectionHeader title={content.explore.title} description={content.explore.description} />
        <div className="mt-16 md:mt-20">
          <PitchTabs />
        </div>
      </Section>

      <FormatsGallery />

      <Section tone="dark">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(135deg,#00244c_0%,#001a38_60%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-10 right-0 -z-10 h-[30rem] w-[30rem] bg-brand-600/35"
          style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }}
        />
        <SectionHeader
          tone="dark"
          title={content.detail.title}
          description={content.detail.description}
        />
        <div className="mt-16 md:mt-20">
          <LocationDetail />
        </div>
      </Section>

      <Section tone="muted">
        <SceneIntro
          title={content.benefits.title}
          description={content.benefits.description}
          scene={<DigitalScene />}
        />
        <FeatureGrid items={content.benefits.items} columns={4} className="mt-16 md:mt-20" />
      </Section>

      <CtaSection
        title={content.cta.title}
        description={content.cta.description}
        primary={content.cta.primary}
        image={{
          src: '/media/billboard-aqua-wall.webp',
          alt: 'Large building-wall billboard above a pedestrian plaza',
        }}
      />
    </>
  )
}
