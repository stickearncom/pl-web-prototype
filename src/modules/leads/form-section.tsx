import type { ReactNode } from 'react'
import { CheckList } from '@/shared/marketing'
import { Reveal } from '@/shared/ui'
import { Section } from '@/shared/layout'

/** Two column section: pitch on the left, form card on the right. Used on product pages. */
export function FormSection({
  id,
  eyebrow,
  title,
  description,
  points,
  children,
}: {
  id: string
  eyebrow?: string
  title: string
  description: string
  points?: string[]
  children: ReactNode
}) {
  return (
    <Section id={id} tone="default" className="bg-hero-glow">
      <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal className="lg:sticky lg:top-28">
          {eyebrow && (
            <p className="flex items-center gap-3 text-eyebrow text-brand-700">
              <span aria-hidden className="h-0.5 w-8 bg-mint-500" />
              {eyebrow}
            </p>
          )}
          <h2 className="mt-6 text-h1">{title}</h2>
          <p className="mt-5 text-lead text-slate-600">{description}</p>
          {points && <CheckList items={points} className="mt-8" />}
        </Reveal>
        <Reveal delay={0.1}>
          <div className="rounded-2xl bg-white p-6 shadow-lift ring-1 ring-brand-900/8 sm:p-10">
            {children}
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
