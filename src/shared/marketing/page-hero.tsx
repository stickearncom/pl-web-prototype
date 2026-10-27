import type { ReactNode } from 'react'
import type { Cta } from '@/shared/content'
import { cn } from '@/shared/lib'
import { ButtonLink, EyebrowBadge } from '@/shared/ui'

/**
 * Hero used by every page. The text is never faded in (only moved) so it paints immediately,
 * which keeps LCP low. The visual is an illustration scene passed in as `visual`.
 */
export function PageHero({
  eyebrow,
  title,
  description,
  primary,
  secondary,
  visual,
  size = 'h1',
  children,
  className,
}: {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  primary?: Cta
  secondary?: Cta
  visual?: ReactNode
  size?: 'display' | 'h1'
  children?: ReactNode
  className?: string
}) {
  return (
    <section className={cn('relative isolate overflow-hidden bg-hero-glow', className)}>
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-grid-faint opacity-60"
        aria-hidden
      />
      <div className="container-page pt-10 pb-12 md:pt-16 md:pb-20 lg:pt-20">
        <div
          className={cn(
            'grid items-center gap-10 lg:gap-12',
            visual && 'lg:grid-cols-[1.05fr_1fr]',
          )}
        >
          <div className="max-w-2xl">
            {eyebrow && (
              <div className="animate-rise-in motion-reduce:animate-none">
                <EyebrowBadge>{eyebrow}</EyebrowBadge>
              </div>
            )}
            <h1
              className={cn(
                'animate-rise-in text-balance text-ink motion-reduce:animate-none',
                size === 'display' ? 'text-display' : 'text-h1',
                eyebrow && 'mt-6',
              )}
            >
              {title}
            </h1>
            {description && (
              <p className="mt-6 max-w-xl animate-rise-in text-lead text-slate-600 [animation-delay:80ms] motion-reduce:animate-none">
                {description}
              </p>
            )}
            {(primary || secondary) && (
              <div className="mt-8 flex animate-rise-in flex-wrap items-center gap-3 [animation-delay:160ms] motion-reduce:animate-none">
                {primary && (
                  <ButtonLink to={primary.to} size="lg" arrow>
                    {primary.label}
                  </ButtonLink>
                )}
                {secondary && (
                  <ButtonLink to={secondary.to} size="lg" variant="secondary">
                    {secondary.label}
                  </ButtonLink>
                )}
              </div>
            )}
          </div>
          {visual && <div className="mx-auto w-full max-w-xl lg:max-w-none">{visual}</div>}
        </div>
        {children}
      </div>
    </section>
  )
}
