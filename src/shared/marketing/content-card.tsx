import { ArrowRight } from 'lucide-react'
import type { ContentItem } from '@/shared/content'
import { AppLink, cn, formatDate } from '@/shared/lib'
import { ContentCover } from './content-cover'

export function ContentCard({
  item,
  basePath,
  featured = false,
}: {
  item: ContentItem
  basePath: string
  featured?: boolean
}) {
  const to = `${basePath}/${item.slug}`
  return (
    <article
      className={cn(
        'group relative flex h-full overflow-hidden rounded-xl bg-white ring-1 ring-brand-900/8 transition-[box-shadow,transform] duration-500 ease-out-expo hover:-translate-y-1 hover:shadow-lift',
        featured ? 'flex-col md:flex-row' : 'flex-col',
      )}
    >
      <div
        className={cn(
          'relative overflow-hidden bg-slate-100 p-3',
          featured ? 'aspect-[8/5] md:aspect-auto md:w-[52%] md:p-5' : 'aspect-[8/5]',
        )}
      >
        <ContentCover
          item={item}
          className="size-full transition-transform duration-700 ease-out-expo group-hover:scale-[1.02]"
        />
        {item.isSample && (
          <span className="absolute top-5 right-5 rounded-md bg-white/90 px-2.5 py-1 text-[0.6875rem] font-semibold text-slate-600">
            Sample
          </span>
        )}
      </div>
      <div className={cn('flex flex-1 flex-col', featured ? 'p-7 md:p-12' : 'p-7')}>
        <p className="flex items-center gap-3 text-eyebrow text-brand-700">
          <span aria-hidden className="h-0.5 w-6 shrink-0 bg-mint-500" />
          <span className="line-clamp-1">{item.badge ?? item.category}</span>
        </p>
        <h3 className={cn('mt-4 text-ink', featured ? 'text-h2' : 'text-h3')}>
          {item.unavailableLabel ? (
            item.title
          ) : (
            <AppLink
              to={to}
              className="after:absolute after:inset-0 focus-visible:outline-offset-[-3px]"
            >
              {item.title}
            </AppLink>
          )}
        </h3>
        <p
          className={cn(
            'mt-4 text-slate-600',
            featured ? 'text-lg md:line-clamp-4' : 'line-clamp-3',
          )}
        >
          {item.description}
        </p>
        <div className="mt-auto flex items-center justify-between pt-7 text-sm">
          <span className="text-slate-500">{formatDate(item.date)}</span>
          {item.unavailableLabel ? (
            <span className="rounded-md bg-brand-50 px-3 py-1.5 text-xs font-semibold text-brand-700 ring-1 ring-brand-100 ring-inset">
              {item.unavailableLabel}
            </span>
          ) : (
            <span className="inline-flex items-center gap-2 font-semibold text-brand-600">
              Read
              <ArrowRight
                aria-hidden
                className="size-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-1"
              />
            </span>
          )}
        </div>
      </div>
    </article>
  )
}
