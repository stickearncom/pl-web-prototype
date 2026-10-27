import { JourneyArt } from '@/shared/illustrations'
import { Section } from '@/shared/layout'
import { usePageMeta } from '@/shared/lib'
import {
  CtaSection,
  FeatureGrid,
  SectionHeader,
  StatsRow,
  TrustedBrandMarquee,
} from '@/shared/marketing'
import { EyebrowBadge, Reveal } from '@/shared/ui'
import { aboutContent as content } from './about-content'

export function AboutPage() {
  usePageMeta(content.meta)
  const { hero, mission, campaigns, cta } = content
  return (
    <>
      <section className="relative isolate overflow-hidden bg-hero-glow">
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-grid-faint opacity-60"
          aria-hidden
        />
        <div className="container-page pt-12 pb-16 md:pt-20 md:pb-24">
          <div className="mx-auto max-w-3xl text-center">
            <div className="animate-rise-in motion-reduce:animate-none">
              <EyebrowBadge>{hero.eyebrow}</EyebrowBadge>
            </div>
            <h1 className="mt-6 animate-rise-in text-h1 motion-reduce:animate-none">
              {hero.title}
            </h1>
            <p className="mt-6 animate-rise-in text-lead text-slate-600 [animation-delay:80ms] motion-reduce:animate-none">
              {hero.description}
            </p>
          </div>

          <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
            {hero.journey.map((step, i) => (
              <li key={step.title}>
                <Reveal delay={i * 0.1} className="h-full">
                  <div
                    className={
                      step.stage === 4
                        ? 'relative h-full rounded-2xl bg-brand-600 p-5 text-white shadow-lift'
                        : 'relative h-full rounded-2xl border border-slate-200 bg-white p-5 shadow-card'
                    }
                  >
                    <div
                      className={
                        step.stage === 4
                          ? 'rounded-xl bg-white/10 p-3'
                          : 'rounded-xl bg-brand-50 p-3'
                      }
                    >
                      <JourneyArt stage={step.stage} />
                    </div>
                    <p
                      className={
                        step.stage === 4
                          ? 'mt-5 text-eyebrow text-mint-300'
                          : 'mt-5 text-eyebrow text-brand-600'
                      }
                    >
                      {String(step.stage).padStart(2, '0')}
                    </p>
                    <h3 className="mt-2 text-h3">{step.title}</h3>
                    <p className={step.stage === 4 ? 'mt-2 text-white/80' : 'mt-2 text-slate-600'}>
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
          <Reveal>
            <p className="mx-auto mt-12 max-w-3xl text-center text-h3 text-brand-700">
              {hero.subhead}
            </p>
          </Reveal>
        </div>
      </section>

      <Section>
        <SectionHeader title={mission.title} description={mission.description} />
        <Reveal className="mx-auto mt-8 grid max-w-4xl gap-6 text-lg text-slate-600 md:grid-cols-2">
          {mission.more.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Reveal>
        <FeatureGrid items={mission.features} columns={3} className="mt-12 md:mt-16" />
      </Section>

      <Section tone="muted">
        <SectionHeader title={campaigns.title} description={campaigns.description} />
        <div className="mt-12 md:mt-16">
          <StatsRow items={campaigns.stats} />
        </div>
        <TrustedBrandMarquee caption={campaigns.brandsCaption} className="mt-16 md:mt-24" />
      </Section>

      <CtaSection title={cta.title} description={cta.description} primary={cta.primary} />
    </>
  )
}
