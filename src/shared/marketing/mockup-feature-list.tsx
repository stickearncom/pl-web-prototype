import type { ReactNode } from 'react'
import type { FeatureItem } from '@/shared/content'
import { cn } from '@/shared/lib'
import { IconTile, Reveal } from '@/shared/ui'

/** A product mockup on a stage next to a plain list of features. Works on light and dark sections. */
export function MockupFeatureList({
  items,
  mockup,
  tone = 'light',
  reverse = false,
}: {
  items: FeatureItem[]
  mockup: ReactNode
  tone?: 'light' | 'dark'
  reverse?: boolean
}) {
  const dark = tone === 'dark'
  return (
    <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
      <Reveal className={cn(reverse && 'lg:order-2')}>
        <div
          className={cn(
            'relative isolate rounded-2xl p-5 sm:p-10',
            dark
              ? 'bg-white/5 ring-1 ring-white/10'
              : 'bg-gradient-to-br from-brand-50 via-white to-mint-50 ring-1 ring-brand-900/6',
          )}
        >
          <div
            aria-hidden
            className={cn(
              'absolute top-0 right-0 -z-10 size-2/5',
              dark ? 'bg-brand-600/35' : 'bg-brand-100/80',
            )}
            style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }}
          />
          {mockup}
        </div>
      </Reveal>
      <ul className={cn('divide-y', dark ? 'divide-white/12' : 'divide-slate-200')}>
        {items.map((item, i) => (
          <li key={item.title} className="py-6 first:pt-0 last:pb-0 md:py-7">
            <Reveal delay={i * 0.06}>
              <div className="flex items-start gap-5 md:gap-6">
                <IconTile icon={item.icon} tone={dark ? 'dark' : 'light'} className="size-12" />
                <div>
                  <h3 className={cn('text-xl font-semibold', dark ? 'text-white' : 'text-ink')}>
                    {item.title}
                  </h3>
                  <p
                    className={cn(
                      'mt-2 text-lg leading-relaxed',
                      dark ? 'text-white/72' : 'text-slate-600',
                    )}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </div>
  )
}
