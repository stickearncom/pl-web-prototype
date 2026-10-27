import { Section } from '@/shared/layout'
import { ButtonLink, Reveal } from '@/shared/ui'
import { homeContent } from '../home-content'
import { ShowcaseVideo } from './showcase-video'

export function DigitalShowcase() {
  const { showcase } = homeContent
  return (
    <Section tone="dark">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(135deg,#00244c_0%,#001a38_60%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-10 right-0 -z-10 h-[34rem] w-[34rem] bg-brand-600/35"
        style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[14%] bottom-0 -z-10 h-72 w-72 bg-mint-400/15"
        style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}
      />
      <div className="grid items-end gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
        <Reveal>
          <p className="flex items-center gap-3 text-eyebrow text-mint-300">
            <span aria-hidden className="h-0.5 w-8 bg-mint-400" />
            {showcase.eyebrow}
          </p>
          <h2 className="mt-6 text-h1 text-white">{showcase.title}</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-lead text-white/75">{showcase.description}</p>
          <ButtonLink to={showcase.cta.to} variant="mint" size="lg" arrow className="mt-8">
            {showcase.cta.label}
          </ButtonLink>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-5 md:mt-20 lg:grid-cols-[2fr_1fr]">
        <Reveal>
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-brand-950 ring-1 ring-white/10">
            <ShowcaseVideo className="size-full" />
          </div>
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
          {showcase.tiles.map((tile, i) => (
            <Reveal key={tile.src} delay={0.1 + i * 0.1}>
              <figure className="group relative aspect-[16/10] overflow-hidden rounded-2xl ring-1 ring-white/10 lg:aspect-auto lg:h-full lg:min-h-48">
                <img
                  src={tile.src}
                  alt={tile.alt}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 size-full object-cover transition-transform duration-[900ms] ease-out-expo group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-950/90 to-transparent p-5 pt-12 text-sm font-semibold text-white">
                  {tile.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
