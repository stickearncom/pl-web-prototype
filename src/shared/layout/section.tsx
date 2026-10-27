import type { ComponentProps } from 'react'
import { cn } from '@/shared/lib'
import { Container } from './container'

type SectionProps = ComponentProps<'section'> & {
  tone?: 'default' | 'muted' | 'dark' | 'brand'
  /** Set false to skip the inner Container (for full-bleed content). */
  contained?: boolean
  spacing?: boolean
}

const tones = {
  default: 'bg-white',
  muted: 'bg-slate-50',
  dark: 'relative isolate overflow-hidden bg-brand-950 text-white',
  brand: 'relative isolate overflow-hidden bg-brand-600 text-white',
} as const

export function Section({
  tone = 'default',
  contained = true,
  spacing = true,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section className={cn(tones[tone], spacing && 'section-y', className)} {...props}>
      {contained ? <Container>{children}</Container> : children}
    </section>
  )
}
