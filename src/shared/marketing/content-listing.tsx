import { Search } from 'lucide-react'
import { useId, useMemo, useState } from 'react'
import type { ContentItem } from '@/shared/content'
import { Section } from '@/shared/layout'
import { cn } from '@/shared/lib'
import { Reveal } from '@/shared/ui'
import { ContentCard } from './content-card'

/** Search, category filter, and a card grid. One template for articles, reports, guides, and press. */
export function ContentListing({
  id,
  eyebrow,
  title,
  description,
  items,
  basePath,
  searchLabel = 'Search',
  tone = 'default',
  featureFirst = false,
}: {
  id?: string
  eyebrow?: string
  title: string
  description: string
  items: ContentItem[]
  basePath: string
  searchLabel?: string
  tone?: 'default' | 'muted'
  /** Show the first result as a wide card when nothing is filtered. */
  featureFirst?: boolean
}) {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')
  const inputId = useId()
  const categories = useMemo(
    () => ['All', ...Array.from(new Set(items.map((i) => i.category)))],
    [items],
  )

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    return items.filter(
      (item) =>
        (category === 'All' || item.category === category) &&
        (!q || `${item.title} ${item.description} ${item.category}`.toLowerCase().includes(q)),
    )
  }, [items, query, category])

  const isFiltered = query.trim() !== '' || category !== 'All'
  const featured = featureFirst && !isFiltered && results.length >= 3 ? results[0] : undefined
  const rest = featured ? results.slice(1) : results

  return (
    <Section id={id} tone={tone}>
      <Reveal className="max-w-3xl">
        {eyebrow && (
          <p className="flex items-center gap-3 text-eyebrow text-brand-700">
            <span aria-hidden className="h-0.5 w-8 bg-mint-500" />
            {eyebrow}
          </p>
        )}
        <h2 className="mt-6 text-h1 text-ink">{title}</h2>
        <p className="mt-6 text-lead text-slate-600">{description}</p>
      </Reveal>

      <div className="mt-12 flex flex-col gap-5 md:mt-16 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full lg:max-w-sm">
          <label htmlFor={inputId} className="sr-only">
            {searchLabel}
          </label>
          <Search
            aria-hidden
            className="pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2 text-slate-400"
          />
          <input
            id={inputId}
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={searchLabel}
            className="h-12 w-full rounded-md border border-slate-300 bg-white pr-5 pl-12 text-base placeholder:text-slate-400 focus-visible:border-brand-600 focus-visible:shadow-focus focus-visible:outline-none"
          />
        </div>
        <div
          role="group"
          aria-label="Filter by category"
          className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0"
        >
          {categories.map((name) => (
            <button
              key={name}
              type="button"
              aria-pressed={category === name}
              onClick={() => setCategory(name)}
              className={cn(
                'h-10 shrink-0 rounded-md px-4 text-sm font-semibold transition-colors duration-200',
                category === name
                  ? 'bg-brand-600 text-white'
                  : 'bg-white text-slate-700 ring-1 ring-slate-300 ring-inset hover:ring-brand-400',
              )}
            >
              {name}
            </button>
          ))}
        </div>
      </div>

      <p className="sr-only" role="status" aria-live="polite">
        {results.length} {results.length === 1 ? 'result' : 'results'}
      </p>

      {results.length > 0 ? (
        <>
          {featured && (
            <Reveal className="mt-10">
              <ContentCard item={featured} basePath={basePath} featured />
            </Reveal>
          )}
          <ul className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((item, i) => (
              <li key={item.slug}>
                <Reveal delay={(i % 3) * 0.06} className="h-full">
                  <ContentCard item={item} basePath={basePath} />
                </Reveal>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <div className="mt-10 rounded-xl border border-dashed border-slate-300 bg-white p-10 text-center">
          <p className="text-h3">Nothing matches your search</p>
          <p className="mt-2 text-slate-600">Try a different keyword or choose another category.</p>
        </div>
      )}
    </Section>
  )
}
