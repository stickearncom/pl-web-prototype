import type { LucideIcon } from 'lucide-react'
import { cn } from '@/shared/lib'

/** Icon on a tile with a mint side face, echoing the extruded Playlog mark. */
export function IconTile({
  icon: Icon,
  tone = 'light',
  className,
}: {
  icon: LucideIcon
  tone?: 'light' | 'dark'
  className?: string
}) {
  return (
    <span
      aria-hidden
      className={cn(
        'grid size-12 shrink-0 place-items-center rounded-xl shadow-[-4px_4px_0_var(--color-mint-400)]',
        tone === 'light' ? 'bg-brand-600 text-white' : 'bg-white text-brand-700',
        className,
      )}
    >
      <Icon className="size-6" strokeWidth={1.75} />
    </span>
  )
}
