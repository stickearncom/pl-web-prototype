import type { ReactNode } from 'react'
import { cn } from '@/shared/lib'
import { Reveal, TextLink } from '@/shared/ui'

const shapes = [
  'polygon(100% 0, 100% 100%, 0 100%)',
  'polygon(0 0, 100% 0, 0 100%)',
  'polygon(0 0, 100% 100%, 0 100%)',
  'polygon(100% 0, 100% 100%, 0 0)',
]

/**
 * Text on one side, a product mockup on a gradient stage on the other.
 * Alternates sides by index. Use for every "feature + visual" row on product pages.
 */
export function StageBlock({
  index,
  tag,
  title,
  description,
  features,
  cta,
  visual,
}: {
  index: number
  tag: string
  title: ReactNode
  description: ReactNode
  features?: string[]
  cta: { label: string; to: string }
  visual: ReactNode
}) {
  const flip = index % 2 === 1
  return (
    <div className="grid items-center gap-12 py-14 first:pt-0 last:pb-0 md:py-20 lg:grid-cols-2 lg:gap-24">
      <Reveal className={cn('max-w-xl', flip && 'lg:order-2 lg:justify-self-end')}>
        <p className="flex items-center gap-3 text-eyebrow text-brand-700">
          <span className="tabular-nums">{String(index + 1).padStart(2, '0')}</span>
          <span aria-hidden className="h-0.5 w-8 bg-mint-500" />
          {tag}
        </p>
        <h3 className="mt-6 text-h2 text-ink">{title}</h3>
        <p className="mt-6 text-lead text-slate-600">{description}</p>
        {features && (
          <ul className="mt-7 flex flex-wrap gap-2.5">
            {features.map((feature) => (
              <li
                key={feature}
                className="rounded-md bg-white px-3.5 py-2 text-sm font-medium text-brand-700 ring-1 ring-brand-900/8"
              >
                {feature}
              </li>
            ))}
          </ul>
        )}
        <TextLink to={cta.to} className="mt-8 text-base">
          {cta.label}
        </TextLink>
      </Reveal>
      <Reveal delay={0.1}>
        <StagePanel index={index}>{visual}</StagePanel>
      </Reveal>
    </div>
  )
}

/** The gradient stage that holds a mockup. Alternates the corner shape by index. */
export function StagePanel({ index, children }: { index: number; children: ReactNode }) {
  const flip = index % 2 === 1
  return (
    <div className="relative isolate rounded-2xl bg-gradient-to-br from-brand-50 via-white to-mint-50 p-5 pb-9 ring-1 ring-brand-900/6 sm:p-10 sm:pb-14">
      <div
        aria-hidden
        className={cn(
          'absolute -z-10 size-2/5 bg-brand-100/80',
          flip ? 'top-0 left-0' : 'right-0 bottom-0',
        )}
        style={{ clipPath: shapes[index % shapes.length] }}
      />
      {children}
    </div>
  )
}
