import { cn } from '@/shared/lib'

const tints = [
  {
    bg: 'bg-[linear-gradient(135deg,#003a78_0%,#00244c_70%)]',
    shape: 'bg-brand-500/30',
    shape2: 'bg-mint-400/80',
    badge: 'text-mint-300',
    title: 'text-white',
  },
  {
    bg: 'bg-[linear-gradient(135deg,#0a56a8_0%,#003a78_75%)]',
    shape: 'bg-white/10',
    shape2: 'bg-mint-400/80',
    badge: 'text-mint-200',
    title: 'text-white',
  },
  {
    bg: 'bg-[linear-gradient(135deg,#ffffff_0%,#e3f7f2_100%)]',
    shape: 'bg-brand-100',
    shape2: 'bg-brand-600',
    badge: 'text-brand-700',
    title: 'text-brand-900',
  },
] as const

/**
 * Typographic cover used when a report or article has no `image` yet.
 * Cut top-left corner and angular shapes echo the Playlog mark.
 */
export function InsightCover({
  title,
  badge,
  variant = 0,
  size = 'card',
  className,
}: {
  title: string
  badge?: string
  variant?: number
  size?: 'card' | 'hero'
  className?: string
}) {
  const tint = tints[Math.abs(variant) % tints.length]!
  return (
    <div
      className={cn('relative isolate overflow-hidden', tint.bg, className)}
      style={{ clipPath: 'polygon(32px 0, 100% 0, 100% 100%, 0 100%, 0 32px)' }}
    >
      <div
        aria-hidden
        className={cn('absolute -top-10 -right-10 -z-10 size-3/5', tint.shape)}
        style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }}
      />
      <div
        aria-hidden
        className={cn('absolute right-0 bottom-0 -z-10 size-1/5', tint.shape2)}
        style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}
      />
      <div
        className={cn(
          'flex size-full flex-col justify-between',
          size === 'hero' ? 'p-8 md:p-12' : 'p-5 sm:p-6',
        )}
      >
        <p
          className={cn(
            'max-w-[70%] font-semibold tracking-[0.12em] uppercase',
            size === 'hero' ? 'text-sm' : 'text-[0.6875rem]',
            tint.badge,
          )}
        >
          {badge ?? 'Playlog Insight'}
        </p>
        <p
          className={cn(
            'line-clamp-4 font-bold text-balance',
            size === 'hero'
              ? 'max-w-[80%] text-3xl leading-[1.1] tracking-tight md:text-5xl'
              : 'max-w-[85%] text-lg leading-[1.15] tracking-tight sm:text-xl',
            tint.title,
          )}
        >
          {title}
        </p>
      </div>
    </div>
  )
}
