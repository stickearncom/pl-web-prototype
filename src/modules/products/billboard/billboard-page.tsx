import { BillboardScene, BillboardThumb } from '@/shared/illustrations'
import { Section } from '@/shared/layout'
import { usePageMeta } from '@/shared/lib'
import { FaqSection, FeatureGrid, PageHero, SectionHeader } from '@/shared/marketing'
import { ButtonLink, Reveal } from '@/shared/ui'
import { billboardForm, FormSection, LeadForm } from '@/modules/leads'
import { billboardContent as content } from './billboard-content'

const plural = (n: number, one: string, many: string) => (n === 1 ? one : many)

export function BillboardPage() {
  usePageMeta(content.meta)
  return (
    <>
      <PageHero
        title={content.hero.title}
        description={content.hero.description}
        primary={content.hero.primary}
        secondary={content.hero.secondary}
        visual={<BillboardScene />}
      />

      <Section>
        <SectionHeader
          eyebrow={content.explore.eyebrow}
          title={content.explore.title}
          description={content.explore.description}
        />
        <FeatureGrid items={content.explore.items} columns={4} className="mt-12 md:mt-16" />
      </Section>

      <Section tone="dark">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(44rem_26rem_at_100%_100%,rgb(0_244_203/0.14),transparent_60%)]"
        />
        <SectionHeader
          tone="dark"
          eyebrow={content.intelligence.eyebrow}
          title={content.intelligence.title}
          description={content.intelligence.description}
        />
        <FeatureGrid
          items={content.intelligence.items}
          columns={3}
          tone="dark"
          className="mt-12 md:mt-16"
        />
        <Reveal>
          <p className="mx-auto mt-14 max-w-3xl text-center text-h2 text-white md:mt-20">
            {content.intelligence.statement}
          </p>
        </Reveal>
      </Section>

      <Section tone="muted">
        <SectionHeader title={content.brands.title} description={content.brands.description} />
        <ul className="mt-12 grid gap-6 md:mt-16 md:grid-cols-3">
          {content.brands.items.map((brand, i) => (
            <li key={brand.name}>
              <Reveal delay={i * 0.08} className="h-full">
                <article className="h-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card">
                  <BillboardThumb
                    tone={brand.tone}
                    seed={brand.seed}
                    className="aspect-[4/3] w-full"
                  />
                  <div className="p-6">
                    <h3 className="text-h3 uppercase">{brand.name}</h3>
                    <p className="mt-3 text-slate-600">
                      See {brand.name} OOH performance, from top locations and impressions to
                      seasonal campaign trends.
                    </p>
                    <dl className="mt-6 grid grid-cols-[auto_1fr_auto] gap-x-6 gap-y-3 border-t border-slate-200 pt-5">
                      {[
                        [
                          brand.locations.toLocaleString('en-US'),
                          plural(brand.locations, 'Location', 'Locations'),
                        ],
                        [brand.impressions.toLocaleString('en-US'), 'Impressions'],
                        [
                          brand.cities.toLocaleString('en-US'),
                          plural(brand.cities, 'City', 'Cities'),
                        ],
                      ].map(([value, label]) => (
                        <div key={label} className="min-w-0">
                          <dd className="text-lg font-bold text-brand-600 tabular-nums">{value}</dd>
                          <dt className="text-xs text-slate-500">{label}</dt>
                        </div>
                      ))}
                    </dl>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
        <Reveal className="mt-10 flex justify-center">
          <ButtonLink to={content.brands.cta.to} size="lg" arrow>
            {content.brands.cta.label}
          </ButtonLink>
        </Reveal>
      </Section>

      <FormSection
        id="campaign-form"
        title={content.form.title}
        description={content.form.description}
      >
        <LeadForm config={billboardForm} idPrefix="billboard" />
      </FormSection>

      <FaqSection title={content.faq.title} items={content.faq.items} />
    </>
  )
}
