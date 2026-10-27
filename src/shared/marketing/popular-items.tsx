import type { ContentItem } from '@/shared/content'
import { Section } from '@/shared/layout'
import { AppLink, cn } from '@/shared/lib'
import { Reveal } from '@/shared/ui'
import { SectionHeader } from './section-header'

/** Numbered shortlist, for "Popular reports" style sections. */
export function PopularItems({
  title,
  description,
  items,
  basePath,
  tone = 'dark',
}: {
  tone?: 'dark' | 'light'
  title: string
  description: string
  items: ContentItem[]
  basePath: string
}) {
  return (
    <Section tone={tone === 'dark' ? 'dark' : 'default'}>
      {tone === 'dark' && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(40rem_24rem_at_0%_100%,rgb(0_244_203/0.14),transparent_60%)]"
        />
      )}
      <SectionHeader tone={tone} title={title} description={description} />
      <ol className="mt-12 grid gap-5 md:mt-16 md:grid-cols-3">
        {items.map((item, i) => (
          <li key={item.slug}>
            <Reveal delay={i * 0.08} className="h-full">
              <AppLink
                to={`${basePath}/${item.slug}`}
                className={cn(
                  'group flex h-full flex-col rounded-2xl border p-7 transition-colors duration-300',
                  tone === 'dark'
                    ? 'border-white/12 bg-white/6 hover:border-mint-400/60 hover:bg-white/10'
                    : 'border-slate-200 bg-slate-50 hover:border-brand-300 hover:bg-white',
                )}
              >
                <span
                  aria-hidden
                  className={cn(
                    'text-display',
                    tone === 'dark' ? 'text-mint-400' : 'text-brand-600',
                  )}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span
                  className={cn(
                    'mt-6 text-eyebrow',
                    tone === 'dark' ? 'text-mint-300' : 'text-slate-500',
                  )}
                >
                  {item.category}
                </span>
                <span className={cn('mt-3 text-h3', tone === 'dark' ? 'text-white' : 'text-ink')}>
                  {item.title}
                </span>
                <span className={cn('mt-3', tone === 'dark' ? 'text-white/70' : 'text-slate-600')}>
                  {item.description}
                </span>
              </AppLink>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}
