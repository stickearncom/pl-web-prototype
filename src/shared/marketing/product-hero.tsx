import { m } from 'motion/react'
import type { ReactNode } from 'react'
import type { Cta } from '@/shared/content'
import { ButtonLink } from '@/shared/ui'
import { HeroBackdrop } from './hero-backdrop'

const rise = (delay: number) => ({
  initial: { y: 22 },
  animate: { y: 0 },
  transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const, delay },
})

/**
 * Hero for product pages. Light gradient, angular shapes, large type.
 * Text is only translated (never faded) so it paints immediately for LCP.
 * The section sits under the transparent header (-mt-20 / pt-20).
 */
export function ProductHero({
  eyebrow,
  title,
  accent,
  description,
  primary,
  secondary,
  visual,
}: {
  eyebrow: string
  title: ReactNode
  /** Second line, shown in brand blue. */
  accent?: ReactNode
  description: ReactNode
  primary: Cta
  secondary?: Cta
  visual: ReactNode
}) {
  return (
    <section className="relative isolate -mt-20 overflow-hidden pt-20">
      <HeroBackdrop />
      <div className="container-page py-14 md:py-20 lg:py-24">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <div className="max-w-2xl">
            <m.p {...rise(0)} className="flex items-center gap-3 text-eyebrow text-brand-700">
              <span aria-hidden className="h-0.5 w-8 bg-mint-500" />
              {eyebrow}
            </m.p>
            <m.h1 {...rise(0.06)} className="mt-6 text-display text-ink">
              {title}
              {accent && (
                <>
                  {' '}
                  <span className="text-brand-600">{accent}</span>
                </>
              )}
            </m.h1>
            <m.p {...rise(0.14)} className="mt-7 max-w-xl text-lead text-slate-600">
              {description}
            </m.p>
            <m.div {...rise(0.22)} className="mt-10 flex flex-wrap items-center gap-4">
              <ButtonLink to={primary.to} size="lg" arrow>
                {primary.label}
              </ButtonLink>
              {secondary && (
                <ButtonLink to={secondary.to} size="lg" variant="secondary">
                  {secondary.label}
                </ButtonLink>
              )}
            </m.div>
          </div>
          <div className="mx-auto w-full max-w-2xl lg:max-w-none">{visual}</div>
        </div>
      </div>
    </section>
  )
}
