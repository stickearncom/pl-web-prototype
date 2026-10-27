import type { ReactNode } from 'react'
import { cn } from '@/shared/lib'
import { EyebrowBadge, Reveal } from '@/shared/ui'

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
  tone = 'light',
  as: Heading = 'h2',
  className,
  children,
}: {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  align?: 'center' | 'left'
  tone?: 'light' | 'dark'
  as?: 'h1' | 'h2' | 'h3'
  className?: string
  children?: ReactNode
}) {
  return (
    <Reveal
      className={cn(
        'max-w-3xl',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className,
      )}
    >
      {eyebrow && <EyebrowBadge tone={tone}>{eyebrow}</EyebrowBadge>}
      <Heading
        className={cn('text-h2', eyebrow && 'mt-5', tone === 'dark' ? 'text-white' : 'text-ink')}
      >
        {title}
      </Heading>
      {description && (
        <p className={cn('mt-5 text-lead', tone === 'dark' ? 'text-white/75' : 'text-slate-600')}>
          {description}
        </p>
      )}
      {children}
    </Reveal>
  )
}
