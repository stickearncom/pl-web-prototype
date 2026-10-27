import { cn } from '@/shared/lib'
import type { FeatureItem } from '@/shared/content'
import { IconTile, Reveal } from '@/shared/ui'

export function FeatureCard({
  icon,
  title,
  description,
  tone = 'light',
}: FeatureItem & { tone?: 'light' | 'dark' }) {
  return (
    <div
      className={cn(
        'h-full rounded-2xl p-6 transition-[box-shadow,transform,border-color] duration-300 ease-out-expo hover:-translate-y-1 md:p-7',
        tone === 'light'
          ? 'border border-slate-200 bg-white shadow-card hover:shadow-lift'
          : 'border border-white/12 bg-white/6 hover:border-mint-400/50 hover:bg-white/9',
      )}
    >
      <IconTile icon={icon} tone={tone === 'light' ? 'light' : 'dark'} />
      <h3 className={cn('mt-6 text-h3', tone === 'light' ? 'text-ink' : 'text-white')}>{title}</h3>
      <p
        className={cn(
          'mt-2.5 leading-relaxed',
          tone === 'light' ? 'text-slate-600' : 'text-white/72',
        )}
      >
        {description}
      </p>
    </div>
  )
}

const cols = {
  2: 'sm:grid-cols-2',
  3: 'sm:grid-cols-2 lg:grid-cols-3',
  4: 'sm:grid-cols-2 lg:grid-cols-4',
} as const

export function FeatureGrid({
  items,
  columns = 3,
  tone = 'light',
  className,
}: {
  items: FeatureItem[]
  columns?: 2 | 3 | 4
  tone?: 'light' | 'dark'
  className?: string
}) {
  return (
    <ul className={cn('grid gap-5', cols[columns], className)}>
      {items.map((item, i) => (
        <li key={item.title}>
          <Reveal delay={(i % 3) * 0.08} className="h-full">
            <FeatureCard {...item} tone={tone} />
          </Reveal>
        </li>
      ))}
    </ul>
  )
}
