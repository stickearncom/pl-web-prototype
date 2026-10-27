import { CompetitiveScene, MarketActivityScene, PlanningScene } from '@/shared/illustrations'
import { Section } from '@/shared/layout'
import { usePageMeta } from '@/shared/lib'
import { CheckList, FaqSection, FeatureGrid, PageHero, SectionHeader } from '@/shared/marketing'
import { ButtonLink, Reveal } from '@/shared/ui'
import { competitiveForm, FormSection, LeadForm } from '@/modules/leads'
import { competitiveContent as content } from './competitive-content'

export function CompetitiveLandscapePage() {
  usePageMeta(content.meta)
  return (
    <>
      <PageHero
        title={content.hero.title}
        description={content.hero.description}
        primary={content.hero.primary}
        secondary={content.hero.secondary}
        visual={<CompetitiveScene />}
      />

      <Section id="explore">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal className="max-w-xl">
            <h2 className="text-h2">{content.activity.title}</h2>
            <p className="mt-4 text-lead text-slate-600">{content.activity.description}</p>
            <p className="mt-8 mb-4 text-eyebrow text-brand-600">{content.activity.listTitle}</p>
            <CheckList items={content.activity.list} />
            <ButtonLink to={content.activity.cta.to} size="lg" arrow className="mt-9">
              {content.activity.cta.label}
            </ButtonLink>
          </Reveal>
          <Reveal
            delay={0.1}
            className="rounded-3xl bg-gradient-to-br from-brand-50 via-white to-mint-50 p-4 ring-1 ring-brand-100 ring-inset sm:p-8"
          >
            <MarketActivityScene />
          </Reveal>
        </div>
      </Section>

      <Section tone="muted">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <Reveal className="order-2 rounded-3xl bg-gradient-to-br from-brand-50 via-white to-mint-50 p-4 ring-1 ring-brand-100 ring-inset sm:p-8 lg:order-1">
            <PlanningScene />
          </Reveal>
          <div className="order-1 lg:order-2">
            <SectionHeader
              align="left"
              title={content.opportunities.title}
              description={content.opportunities.description}
            />
          </div>
        </div>
        <FeatureGrid items={content.opportunities.items} columns={3} className="mt-12 md:mt-16" />
        <Reveal className="mt-10 flex justify-center">
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
