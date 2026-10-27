import { m } from 'motion/react'
import { CountUp } from '@/shared/marketing/stats-row'
import { HeroBackdrop, TrustedBrandMarquee } from '@/shared/marketing'
import { ButtonLink } from '@/shared/ui'
import { homeContent } from '../home-content'
import { HeroVisual } from './hero-visual'

const rise = (delay: number) => ({
  initial: { y: 22 },
  animate: { y: 0 },
  transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const, delay },
})

export function HomeHero() {
  const { hero } = homeContent
  return (
    <section className="relative isolate -mt-20 overflow-hidden pt-20">
      <HeroBackdrop />
      <div className="container-page pt-12 pb-10 md:pt-20 md:pb-16 lg:pt-24">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div className="max-w-3xl">
            <m.p {...rise(0)} className="flex items-center gap-3 text-eyebrow text-brand-700">
              <span aria-hidden className="h-0.5 w-8 bg-mint-500" />
              {hero.eyebrow}
            </m.p>
            <m.h1 {...rise(0.06)} className="mt-6 text-display text-ink">
              {hero.titleLead} <span className="text-brand-600">{hero.titleAccent}</span>
            </m.h1>
            <m.p {...rise(0.14)} className="mt-7 max-w-xl text-lead text-slate-600">
              {hero.description}
            </m.p>
            <m.div {...rise(0.22)} className="mt-10 flex flex-wrap items-center gap-4">
              <ButtonLink to={hero.primary.to} size="lg" arrow>
                {hero.primary.label}
              </ButtonLink>
              <ButtonLink to={hero.secondary.to} size="lg" variant="secondary">
                {hero.secondary.label}
              </ButtonLink>
            </m.div>
          </div>
          <HeroVisual />
        </div>

        <dl className="mt-20 grid gap-6 border-t border-brand-900/10 pt-10 sm:grid-cols-3 sm:gap-0 md:mt-28">
          {hero.stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-row-reverse items-baseline justify-end gap-4 sm:flex-col-reverse sm:items-start sm:gap-1 sm:px-8 sm:first:pl-0 sm:[&:not(:first-child)]:border-l sm:[&:not(:first-child)]:border-brand-900/10"
            >
              <dt className="text-base font-medium text-slate-600">{stat.label}</dt>
              <dd className="text-h1 text-brand-600 tabular-nums">
                <CountUp to={stat.value} suffix={stat.suffix} />
              </dd>
            </div>
          ))}
        </dl>

        <TrustedBrandMarquee caption={hero.brandCaption} className="mt-16 md:mt-24" />
      </div>
    </section>
  )
}
