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
import { IntelligenceMockup, SearchResultsCard } from '@/shared/mockups'
import { ButtonLink, Reveal } from '@/shared/ui'
import { billboardForm, FormSection, LeadForm } from '@/modules/leads'
import { billboardContent as content } from './billboard-content'
import { BillboardScene } from './components/billboard-scene'

const plural = (n: number, one: string, many: string) => (n === 1 ? one : many)

export function BillboardPage() {
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
              src: '/media/billboard-static-mrdiy.webp',
              alt: 'Static billboard on a steel frame over a city street',
              position: '52% 50%',
            }}
          >
            <SearchResultsCard />
          </HeroCompose>
        }
      />

      <SplitFeatures
        eyebrow={content.explore.eyebrow}
        title={content.explore.title}
        description={content.explore.description}
        items={content.explore.items}
        visual={<BillboardScene />}
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
          eyebrow={content.intelligence.eyebrow}
          title={content.intelligence.title}
          description={content.intelligence.description}
        />
        <div className="mt-16 md:mt-20">
          <MockupFeatureList
            tone="dark"
            items={content.intelligence.items}
            mockup={<IntelligenceMockup />}
          />
        </div>
        <Reveal>
          <p className="mx-auto mt-20 max-w-3xl text-center text-h2 text-white md:mt-28">
            {content.intelligence.statement}
          </p>
        </Reveal>
      </Section>

      <Section>
        <SectionHeader title={content.brands.title} description={content.brands.description} />
        <ul className="mt-16 grid gap-6 md:mt-20 md:grid-cols-3 lg:gap-8">
          {content.brands.items.map((brand, i) => (
            <li key={brand.name}>
              <Reveal delay={i * 0.08} className="h-full">
                <article className="group h-full overflow-hidden rounded-2xl bg-white ring-1 ring-brand-900/8 transition-[box-shadow,transform] duration-500 ease-out-expo hover:-translate-y-1 hover:shadow-lift">
                  <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                    <img
                      src={brand.image}
                      alt={`${brand.name} billboard campaign`}
                      loading="lazy"
                      decoding="async"
                      className="size-full object-cover transition-transform duration-[900ms] ease-out-expo group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-h3 uppercase">{brand.name}</h3>
                    <p className="mt-4 text-lg leading-relaxed text-slate-600">
                      See {brand.name} OOH performance, from top locations and impressions to
                      seasonal campaign trends.
                    </p>
                    <dl className="mt-7 grid grid-cols-[auto_1fr_auto] gap-x-6 gap-y-3 border-t border-slate-200 pt-6">
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
                          <dd className="text-xl font-bold text-brand-600 tabular-nums">{value}</dd>
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
        <Reveal className="mt-14 flex justify-center">
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
