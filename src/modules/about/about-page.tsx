import { Section } from '@/shared/layout'
import { usePageMeta } from '@/shared/lib'
import {
  CtaSection,
  PhotoFrame,
  ProductHero,
  SplitFeatures,
  StatsRow,
  TrustedBrandMarquee,
} from '@/shared/marketing'
import { Reveal } from '@/shared/ui'
import { Journey } from './components/journey'
import { aboutContent as content } from './about-content'

export function AboutPage() {
  usePageMeta(content.meta)
  const { hero, journey, mission, campaigns, cta } = content
  return (
    <>
      <ProductHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        accent={hero.accent}
        description={hero.description}
        primary={hero.primary}
        secondary={hero.secondary}
        visual={
          <div className="pl-4">
            <PhotoFrame
              src="/media/billboard-avenue.webp"
              alt="Billboards lining a city avenue at dusk"
              eager
              className="aspect-[5/4]"
              position="40% 50%"
            />
          </div>
        }
      />

      <Journey
        eyebrow={journey.eyebrow}
        title={journey.title}
        steps={journey.steps}
        subhead={journey.subhead}
      />

      <SplitFeatures
        eyebrow={mission.eyebrow}
        title={mission.title}
        description={mission.description}
        items={mission.features}
      />

      <Section tone="muted">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.45fr] lg:gap-20">
          <Reveal>
            <p className="flex items-center gap-3 text-eyebrow text-brand-700">
              <span aria-hidden className="h-0.5 w-8 bg-mint-500" />
              {campaigns.eyebrow}
            </p>
            <h2 className="mt-6 text-h1 text-ink">{campaigns.title}</h2>
            <p className="mt-6 text-lead text-slate-600">{campaigns.description}</p>
          </Reveal>
          <Reveal delay={0.1} className="space-y-6 text-lg leading-relaxed text-slate-600">
            {mission.more.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Reveal>
        </div>
        <div className="mt-16 md:mt-20">
          <StatsRow items={campaigns.stats} />
        </div>
        <TrustedBrandMarquee caption={campaigns.brandsCaption} className="mt-20 md:mt-28" />
      </Section>

      <CtaSection
        title={cta.title}
        description={cta.description}
        primary={cta.primary}
        image={{
          src: '/media/billboard-station-wide.webp',
          alt: 'Wide digital billboard in a station',
        }}
      />
    </>
  )
}
