import { ArrowRight } from 'lucide-react'
import type { ContentItem } from '@/shared/content'
import { CoverArt } from '@/shared/illustrations'
import { AppLink, formatDate } from '@/shared/lib'

export function ContentCard({ item, basePath }: { item: ContentItem; basePath: string }) {
  const to = `${basePath}/${item.slug}`
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card transition-[box-shadow,transform] duration-300 ease-out-expo hover:-translate-y-1 hover:shadow-lift">
      <div className="relative aspect-[8/5] overflow-hidden bg-slate-100">
        {item.image ? (
          <img src={item.image} alt="" loading="lazy" className="size-full object-cover" />
        ) : (
          <CoverArt
            variant={item.coverVariant}
            className="size-full transition-transform duration-700 ease-out-expo group-hover:scale-[1.04]"
          />
        )}
        {item.isSample && (
          <span className="absolute top-3 right-3 rounded-md bg-white/90 px-2.5 py-1 text-[0.6875rem] font-semibold text-slate-600">
            Sample
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-eyebrow text-brand-600">{item.category}</p>
        <h3 className="mt-3 text-h3 text-ink">
          <AppLink
            to={to}
            className="after:absolute after:inset-0 focus-visible:outline-offset-[-3px]"
          >
            {item.title}
          </AppLink>
        </h3>
        <p className="mt-3 line-clamp-3 text-slate-600">{item.description}</p>
        <div className="mt-auto flex items-center justify-between pt-6 text-sm">
          <span className="text-slate-500">
            {formatDate(item.date)}
            {item.readTime ? ` · ${item.readTime}` : ''}
          </span>
          <span className="inline-flex items-center gap-1.5 font-semibold text-brand-600">
            Read
            <ArrowRight
              aria-hidden
              className="size-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-1"
            />
          </span>
        </div>
      </div>
    </article>
  )
}
