import { MeasurementScene } from '@/shared/illustrations'
import { Section } from '@/shared/layout'
import { usePageMeta } from '@/shared/lib'
import { FaqSection, FeatureGrid, PageHero, SectionHeader } from '@/shared/marketing'
import { ButtonLink, Reveal } from '@/shared/ui'
import { FormSection, LeadForm, measurementForm } from '@/modules/leads'
import { measurementContent as content } from './measurement-content'

export function MeasurementPage() {
  usePageMeta(content.meta)
  return (
    <>
      <PageHero
        eyebrow={content.hero.eyebrow}
        title={content.hero.title}
        description={content.hero.description}
        primary={content.hero.primary}
        secondary={content.hero.secondary}
        visual={<MeasurementScene />}
      />

      <Section id="capabilities">
        <SectionHeader
          title={content.capabilities.title}
          description={content.capabilities.description}
        />
        <FeatureGrid items={content.capabilities.items} columns={3} className="mt-12 md:mt-16" />
      </Section>

      <Section tone="dark">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(40rem_24rem_at_0%_0%,rgb(0_244_203/0.14),transparent_60%)]"
        />
        <SectionHeader
          tone="dark"
          title={content.features.title}
          description={content.features.description}
        />
        <FeatureGrid
          items={content.features.items}
          columns={3}
          tone="dark"
          className="mt-12 md:mt-16"
        />
        <Reveal className="mt-10 flex justify-center">
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
