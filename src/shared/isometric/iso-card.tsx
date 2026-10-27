import type { ReactNode } from 'react'
import { cn } from '@/shared/lib'

const grid =
  '[background-image:linear-gradient(30deg,transparent_49.5%,var(--g)_50%,transparent_50.5%),linear-gradient(150deg,transparent_49.5%,var(--g)_50%,transparent_50.5%)] [background-size:38px_22px]'

/** Soft card with a faint isometric grid that frames a scene. */
export function IsoCard({
  tone = 'light',
  className,
  children,
}: {
  tone?: 'light' | 'dark'
  className?: string
  children: ReactNode
}) {
  return (
    <div
      className={cn(
        'relative isolate overflow-hidden rounded-2xl',
        tone === 'light'
          ? 'bg-gradient-to-b from-brand-50 via-white to-mint-50/60 ring-1 ring-brand-900/6 [--g:rgb(0_79_164/0.05)]'
          : 'bg-white/[0.03] ring-1 ring-white/10 [--g:rgb(255_255_255/0.05)]',
        className,
      )}
    >
      <div aria-hidden className={cn('absolute inset-0 -z-10', grid)} />
      {children}
    </div>
  )
}
