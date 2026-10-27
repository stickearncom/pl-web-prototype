import { Section } from '@/shared/layout'
import { usePageMeta } from '@/shared/lib'
import {
  FaqSection,
  HeroCompose,
  MockupFeatureList,
  ProductHero,
  SectionHeader,
  SplitFeatures,
} from '@/shared/marketing'
import { LiveDashboardMockup, ReportingMockup } from '@/shared/mockups'
import { ButtonLink, Reveal } from '@/shared/ui'
import { FormSection, LeadForm, measurementForm } from '@/modules/leads'
import { measurementContent as content } from './measurement-content'
import { MeasurementScene } from './components/measurement-scene'

export function MeasurementPage() {
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
        visual={
          <HeroCompose
            photo={{
              src: '/media/billboard-corner-led.webp',
              alt: 'Large LED screen on a building corner in a business district',
              position: '38% 50%',
            }}
          >
            <ReportingMockup />
          </HeroCompose>
        }
      />

      <SplitFeatures
        id="capabilities"
        title={content.capabilities.title}
        description={content.capabilities.description}
        items={content.capabilities.items}
        visual={<MeasurementScene />}
      />

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
          title={content.features.title}
          description={content.features.description}
        />
        <div className="mt-16 md:mt-20">
          <MockupFeatureList
            tone="dark"
            reverse
            items={content.features.items}
            mockup={<LiveDashboardMockup />}
          />
        </div>
        <Reveal className="mt-16 flex justify-center">
          <ButtonLink to={content.features.cta.to} variant="mint" size="lg" arrow>
            {content.features.cta.label}
          </ButtonLink>
        </Reveal>
      </Section>

      <FaqSection
        title={content.faq.title}
        description={content.faq.description}
        items={content.faq.items}
      />

      <FormSection
        id="request-demo"
        eyebrow={content.demo.eyebrow}
        title={content.demo.title}
        description={content.demo.description}
        points={content.demo.points}
      >
        <LeadForm config={measurementForm} idPrefix="measurement" />
      </FormSection>
    </>
  )
}
