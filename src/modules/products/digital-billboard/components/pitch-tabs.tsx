import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from 'react'
import {
  CompetitiveScene,
  InventoryScene,
  MeasurementScene,
  PlanningScene,
} from '@/shared/illustrations'
import { cn } from '@/shared/lib'
import { ButtonLink } from '@/shared/ui'
import { digitalBillboardContent } from '../digital-billboard-content'

const visuals: Record<string, ReactNode> = {
  market: <CompetitiveScene />,
  history: <InventoryScene />,
  audience: <MeasurementScene />,
  location: <PlanningScene />,
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
    <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
      <div
        role="tablist"
        aria-label="Digital billboard data"
        aria-orientation="vertical"
        onKeyDown={onKeyDown}
        className="space-y-3"
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
                'flex w-full items-start gap-4 rounded-2xl border p-5 text-left transition-[background-color,border-color,box-shadow] duration-300',
                selected
                  ? 'border-brand-600 bg-white shadow-lift'
                  : 'border-slate-200 bg-white/60 hover:border-brand-300 hover:bg-white',
              )}
            >
              <span
                aria-hidden
                className={cn(
                  'grid size-10 shrink-0 place-items-center rounded-xl text-sm font-bold transition-colors',
                  selected
                    ? 'bg-brand-600 text-white shadow-[-3px_3px_0_var(--color-mint-400)]'
                    : 'bg-brand-50 text-brand-700',
                )}
              >
                {i + 1}
              </span>
              <span>
                <span className="block text-h3 text-ink">{item.title}</span>
                {selected && <span className="mt-2 block text-slate-600">{item.description}</span>}
              </span>
            </button>
          )
        })}
      </div>

      <div
        role="tabpanel"
        id={`${baseId}-panel`}
        aria-labelledby={`${baseId}-tab-${active}`}
        className="rounded-3xl bg-gradient-to-br from-brand-50 via-white to-mint-50 p-4 ring-1 ring-brand-100 ring-inset sm:p-8"
      >
        <div key={current.key}>{visuals[current.key]}</div>
        <ul className="mt-6 flex flex-wrap gap-2">
          {current.points.map((point) => (
            <li
              key={point}
              className="rounded-md bg-white px-3.5 py-1.5 text-sm font-medium text-brand-700 ring-1 ring-brand-100 ring-inset"
            >
              {point}
            </li>
          ))}
        </ul>
        <ButtonLink to={current.cta.to} className="mt-6" arrow>
          {current.cta.label}
        </ButtonLink>
      </div>
    </div>
  )
}
