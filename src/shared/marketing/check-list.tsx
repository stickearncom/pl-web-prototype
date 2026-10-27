import { Check } from 'lucide-react'
import { cn } from '@/shared/lib'

export function CheckList({
  items,
  tone = 'light',
  columns = 1,
  className,
}: {
  items: string[]
  tone?: 'light' | 'dark'
  columns?: 1 | 2
  className?: string
}) {
  return (
    <ul className={cn('grid gap-x-8 gap-y-3', columns === 2 && 'sm:grid-cols-2', className)}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span
            aria-hidden
            className={cn(
              'mt-0.5 grid size-6 shrink-0 place-items-center rounded-full',
              tone === 'light' ? 'bg-mint-400 text-brand-950' : 'bg-mint-400 text-brand-950',
            )}
          >
            <Check className="size-3.5" strokeWidth={3} />
          </span>
          <span className={tone === 'light' ? 'text-slate-700' : 'text-white/85'}>{item}</span>
        </li>
      ))}
    </ul>
  )
}
