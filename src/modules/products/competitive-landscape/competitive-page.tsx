import { Section } from '@/shared/layout'
import { usePageMeta } from '@/shared/lib'
import {
  CheckList,
  FaqSection,
  HeroCompose,
  MockupFeatureList,
  ProductHero,
  SceneIntro,
  StagePanel,
} from '@/shared/marketing'
import { MarketActivityMockup, OpportunityMockup, SovCard } from '@/shared/mockups'
import { ButtonLink, Reveal } from '@/shared/ui'
import { competitiveForm, FormSection, LeadForm } from '@/modules/leads'
import { CompetitiveScene } from './components/competitive-scene'
import { competitiveContent as content } from './competitive-content'

export function CompetitiveLandscapePage() {
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
            variant="card"
            photo={{
              src: '/media/billboard-gemini-curved.webp',
              alt: 'Curved LED screen beside an elevated road in Jakarta',
              position: '50% 50%',
            }}
          >
            <SovCard />
          </HeroCompose>
        }
      />

      <Section id="explore">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
          <Reveal className="max-w-xl">
            <h2 className="text-h2 text-ink">{content.activity.title}</h2>
            <p className="mt-6 text-lead text-slate-600">{content.activity.description}</p>
            <p className="mt-10 mb-5 text-eyebrow text-brand-600">{content.activity.listTitle}</p>
            <CheckList items={content.activity.list} />
            <ButtonLink to={content.activity.cta.to} size="lg" arrow className="mt-10">
              {content.activity.cta.label}
            </ButtonLink>
          </Reveal>
          <Reveal delay={0.1}>
            <StagePanel index={0}>
              <MarketActivityMockup />
            </StagePanel>
          </Reveal>
        </div>
      </Section>

      <Section tone="muted">
        <SceneIntro
          title={content.opportunities.title}
          description={content.opportunities.description}
          scene={<CompetitiveScene />}
        />
        <div className="mt-16 md:mt-20">
          <MockupFeatureList items={content.opportunities.items} mockup={<OpportunityMockup />} />
        </div>
        <Reveal className="mt-16 flex justify-center">
          <ButtonLink to={content.opportunities.cta.to} size="lg" arrow>
            {content.opportunities.cta.label}
          </ButtonLink>
        </Reveal>
      </Section>

      <FaqSection
        title={content.faq.title}
        description={content.faq.description}
        items={content.faq.items}
        tone="default"
      />

      <FormSection
        id="contact-form"
        title={content.form.title}
        description={content.form.description}
      >
        <LeadForm config={competitiveForm} idPrefix="competitive" />
      </FormSection>
    </>
  )
}
