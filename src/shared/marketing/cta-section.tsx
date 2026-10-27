import type { ReactNode } from 'react'
import type { Cta } from '@/shared/content'
import { Section } from '@/shared/layout'
import { ButtonLink, Reveal } from '@/shared/ui'
import { PhotoFrame } from './photo-frame'

/** The one final CTA used on every page. Only copy and links change. */
export function CtaSection({
  title,
  description,
  primary,
  secondary,
  id,
}: {
  title: ReactNode
  description?: ReactNode
  primary: Cta
  secondary?: Cta
  id?: string
}) {
  return (
    <Section tone="dark" id={id}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(135deg,#003a78_0%,#00244c_65%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 right-0 -z-10 h-[30rem] w-[30rem] bg-brand-500/30"
        style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }}
      />
      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <Reveal>
          <h2 className="max-w-2xl text-h1 text-white">{title}</h2>
          {description && <p className="mt-5 max-w-xl text-lead text-white/75">{description}</p>}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <ButtonLink to={primary.to} variant="mint" size="lg" arrow>
              {primary.label}
            </ButtonLink>
            {secondary && (
              <ButtonLink to={secondary.to} variant="outlineInverse" size="lg">
                {secondary.label}
              </ButtonLink>
            )}
          </div>
        </Reveal>
        <Reveal delay={0.1} className="pl-4">
          <PhotoFrame
            src="/media/billboard-corner.webp"
            alt="Large digital billboard at a city corner"
            className="aspect-[4/3]"
          />
        </Reveal>
      </div>
    </Section>
  )
}
