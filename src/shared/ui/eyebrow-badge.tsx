import type { ReactNode } from 'react'
import { cn } from '@/shared/lib'

export function EyebrowBadge({
  children,
  tone = 'light',
  className,
}: {
  children: ReactNode
  tone?: 'light' | 'dark'
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2.5 rounded-md py-2 pr-3.5 pl-3 text-eyebrow ring-1 ring-inset',
        tone === 'light'
          ? 'bg-brand-50 text-brand-700 ring-brand-100'
          : 'bg-white/8 text-mint-300 ring-white/15',
        className,
      )}
    >
      <span
        aria-hidden
        className={cn(
          'size-2 shadow-[-2px_2px_0_var(--color-mint-400)]',
          tone === 'light' ? 'bg-brand-600' : 'bg-white',
        )}
      />
      {children}
    </span>
  )
}
