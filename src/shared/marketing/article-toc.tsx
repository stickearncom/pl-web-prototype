import { useEffect, useState } from 'react'
import { cn, usePrefersReducedMotion } from '@/shared/lib'
import type { TocEntry } from './article-utils'

function useActiveId(ids: string[]) {
  const [active, setActive] = useState(ids[0] ?? '')
  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => !!el)
    if (els.length === 0) return
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        const first = visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]
        if (first) setActive(first.target.id)
      },
      { rootMargin: '-15% 0px -70% 0px' },
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ids])
  return active
}

/** "On this page" list. Sticky on desktop, collapsible on mobile. */
export function ArticleToc({ entries }: { entries: TocEntry[] }) {
  const ids = entries.map((e) => e.id)
  const active = useActiveId(ids)
  const reduced = usePrefersReducedMotion()

  const go = (event: React.MouseEvent, id: string) => {
    event.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' })
  }

  const list = (
    <ol className="space-y-1 border-l border-brand-900/10">
      {entries.map((entry) => (
        <li key={entry.id}>
          <a
            href={`#${entry.id}`}
            onClick={(e) => go(e, entry.id)}
            aria-current={active === entry.id ? 'location' : undefined}
            className={cn(
              '-ml-px block border-l-2 py-1.5 pr-2 pl-4 text-sm leading-snug transition-colors duration-200',
              active === entry.id
                ? 'border-mint-500 font-semibold text-brand-700'
                : 'border-transparent text-slate-600 hover:text-brand-700',
            )}
          >
            {entry.label}
          </a>
        </li>
      ))}
    </ol>
  )

  return (
    <nav aria-label="On this page">
      <details className="group rounded-xl bg-white ring-1 ring-brand-900/10 lg:hidden">
        <summary className="flex h-12 cursor-pointer list-none items-center justify-between px-5 text-eyebrow text-brand-700">
          On this page
          <span aria-hidden className="transition-transform group-open:rotate-180">
            ▾
          </span>
        </summary>
        <div className="px-5 pb-4">{list}</div>
      </details>
      <div className="hidden lg:block">
        <p className="mb-4 text-eyebrow text-slate-500">On this page</p>
        {list}
      </div>
    </nav>
  )
}
