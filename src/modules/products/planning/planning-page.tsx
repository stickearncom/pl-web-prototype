import { Section } from '@/shared/layout'
import { usePageMeta } from '@/shared/lib'
import { CtaSection, FeatureGrid, ProductHero, SectionHeader } from '@/shared/marketing'
import { CasesSection } from './components/cases-section'
import { GallerySection } from './components/gallery-section'
import { PlanningHeroVisual } from './components/planning-hero-visual'
import { WorkflowSection } from './components/workflow-section'
import { planningContent } from './planning-content'

export function PlanningPage() {
  const { meta, hero, benefits, cta } = planningContent
  usePageMeta(meta)
  return (
    <>
      <ProductHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        accent={hero.accent}
        description={hero.description}
        primary={hero.primary}
        secondary={hero.secondary}
        visual={<PlanningHeroVisual />}
      />
      <Section>
        <SectionHeader title={benefits.title} description={benefits.description} />
        <FeatureGrid items={benefits.items} columns={3} className="mt-16 md:mt-20" />
      </Section>
      <WorkflowSection />
      <GallerySection />
      <CasesSection />
      <CtaSection title={cta.title} description={cta.description} primary={cta.primary} />
    </>
  )
}
