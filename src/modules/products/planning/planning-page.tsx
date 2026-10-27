import { PlanningScene } from '@/shared/illustrations'
import { Section } from '@/shared/layout'
import { usePageMeta } from '@/shared/lib'
import { CtaSection, FeatureGrid, PageHero, SectionHeader } from '@/shared/marketing'
import { CasesSection } from './components/cases-section'
import { GallerySection } from './components/gallery-section'
import { WorkflowSection } from './components/workflow-section'
import { planningContent } from './planning-content'

export function PlanningPage() {
  const { meta, hero, benefits, cta } = planningContent
  usePageMeta(meta)
  return (
    <>
      <PageHero
        title={hero.title}
        description={hero.description}
        primary={hero.primary}
        secondary={hero.secondary}
        visual={<PlanningScene />}
      />
      <Section>
        <SectionHeader title={benefits.title} description={benefits.description} />
        <FeatureGrid items={benefits.items} columns={3} className="mt-12 md:mt-16" />
      </Section>
      <WorkflowSection />
      <GallerySection />
      <CasesSection />
      <CtaSection title={cta.title} description={cta.description} primary={cta.primary} />
    </>
  )
}
