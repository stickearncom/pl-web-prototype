import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from 'react'
import {
  HistoryMockup,
  IntelligenceMockup,
  PlanningMockup,
  ReportingMockup,
} from '@/shared/mockups'
import { cn } from '@/shared/lib'
import { ButtonLink } from '@/shared/ui'
import { digitalBillboardContent } from '../digital-billboard-content'

const visuals: Record<string, ReactNode> = {
  market: <IntelligenceMockup />,
  history: <HistoryMockup />,
  audience: <ReportingMockup />,
  location: <PlanningMockup />,
}

/** A pitch style selector: choose a question on the left, see the answer and its data on the right. */
export function PitchTabs() {
  const { items } = digitalBillboardContent.explore
  const [active, setActive] = useState(0)
  const baseId = useId()
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const keys = ['ArrowDown', 'ArrowRight', 'ArrowUp', 'ArrowLeft']
    if (!keys.includes(event.key)) return
    event.preventDefault()
    const dir = event.key === 'ArrowDown' || event.key === 'ArrowRight' ? 1 : -1
    const next = (active + dir + items.length) % items.length
    setActive(next)
    tabRefs.current[next]?.focus()
  }

  const current = items[active]!
  return (
    <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
      <div
        role="tablist"
        aria-label="Digital billboard data"
        aria-orientation="vertical"
        onKeyDown={onKeyDown}
        className="space-y-4"
      >
        {items.map((item, i) => {
          const selected = i === active
          return (
            <button
              key={item.key}
              ref={(el) => {
                tabRefs.current[i] = el
              }}
              role="tab"
              type="button"
              id={`${baseId}-tab-${i}`}
              aria-selected={selected}
              aria-controls={`${baseId}-panel`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(i)}
              className={cn(
                'flex w-full items-start gap-5 rounded-xl p-6 text-left transition-[background-color,box-shadow] duration-500 ease-out-expo md:p-7',
                selected
                  ? 'bg-white shadow-lift ring-1 ring-brand-600'
                  : 'bg-white/60 ring-1 ring-brand-900/8 hover:bg-white',
              )}
            >
              <span
                aria-hidden
                className={cn(
                  'grid size-12 shrink-0 place-items-center rounded-lg text-base font-bold transition-colors',
                  selected
                    ? 'bg-brand-600 text-white shadow-[-3px_3px_0_var(--color-mint-400)]'
                    : 'bg-brand-50 text-brand-700',
                )}
              >
                {i + 1}
              </span>
              <span>
                <span className="block text-h3 text-ink">{item.title}</span>
                {selected && (
                  <span className="mt-3 block text-lg leading-relaxed text-slate-600">
                    {item.description}
                  </span>
                )}
              </span>
            </button>
          )
        })}
      </div>

      <div
        role="tabpanel"
        id={`${baseId}-panel`}
        aria-labelledby={`${baseId}-tab-${active}`}
        className="relative isolate rounded-2xl bg-gradient-to-br from-brand-50 via-white to-mint-50 p-5 pb-9 ring-1 ring-brand-900/6 sm:p-10 sm:pb-12"
      >
        <div
          aria-hidden
          className="absolute top-0 right-0 -z-10 size-2/5 bg-brand-100/80"
          style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }}
        />
        <div key={current.key} className="pb-6 sm:pb-8">
          {visuals[current.key]}
        </div>
        <ul className="mt-8 flex flex-wrap gap-2.5">
          {current.points.map((point) => (
            <li
              key={point}
              className="rounded-md bg-white px-3.5 py-2 text-sm font-medium text-brand-700 ring-1 ring-brand-900/8"
            >
              {point}
            </li>
          ))}
        </ul>
        <ButtonLink to={current.cta.to} className="mt-8" arrow>
          {current.cta.label}
        </ButtonLink>
      </div>
    </div>
  )
}
