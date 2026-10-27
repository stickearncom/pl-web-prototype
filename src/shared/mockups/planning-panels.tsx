import { m } from 'motion/react'
import { Check } from 'lucide-react'
import { cn } from '@/shared/lib'
import { MapCanvas } from './map'
import { BrowserFrame, Chip, Metric } from './ui'

const ease = [0.16, 1, 0.3, 1] as const
const inView = { once: true, margin: '0px 0px -12% 0px' } as const

const allocation = [
  { name: 'Jakarta', value: 45, tone: 'bg-brand-600' },
  { name: 'Bandung', value: 25, tone: 'bg-brand-300' },
  { name: 'Surabaya', value: 20, tone: 'bg-mint-400' },
  { name: 'Other', value: 10, tone: 'bg-slate-300' },
]

/** Expert-led planning: objective, budget allocation, media mix. Sample data. */
export function BriefMockup() {
  return (
    <BrowserFrame title="Playlog · Campaign brief">
      <div className="space-y-6 p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-2">
          <Chip tone="brand">Objective: Awareness</Chip>
          <Chip tone="neutral">Audience: 25–44</Chip>
          <Chip tone="neutral">4 weeks</Chip>
        </div>
        <div>
          <div className="flex items-end justify-between">
            <p className="text-sm font-semibold text-ink">Budget allocation</p>
            <p className="text-xs text-slate-500">By city</p>
          </div>
          <div className="mt-3 flex h-3 gap-1 overflow-hidden rounded-sm">
            {allocation.map((a, i) => (
              <m.div
                key={a.name}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={inView}
                transition={{ duration: 0.9, ease, delay: 0.15 + i * 0.1 }}
                style={{ width: `${a.value}%`, transformOrigin: 'left' }}
                className={cn('h-full', a.tone)}
              />
            ))}
          </div>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
            {allocation.map((a) => (
              <li key={a.name} className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-slate-600">
                  <span aria-hidden className={cn('size-2.5 rounded-xs', a.tone)} />
                  {a.name}
                </span>
                <span className="font-semibold text-ink tabular-nums">{a.value}%</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Metric label="Digital billboard" value="60%" />
          <Metric label="Static billboard" value="40%" />
        </div>
      </div>
    </BrowserFrame>
  )
}

const placements = [
  { name: 'Sudirman corridor', type: 'Digital · LED', status: 'Available' },
  { name: 'Business district corner', type: 'Digital · LED', status: 'Available' },
  { name: 'Elevated toll road', type: 'Digital · LED', status: 'Held' },
  { name: 'Arterial road', type: 'Static', status: 'Available' },
]

/** Final plan: availability per placement and overall readiness. Sample data. */
export function ReadinessMockup() {
  return (
    <BrowserFrame title="Playlog · Plan summary">
      <div className="p-5 sm:p-6">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs font-medium text-slate-500">Campaign readiness</p>
            <p className="text-3xl font-bold tracking-tight text-ink tabular-nums">92%</p>
          </div>
          <Chip tone="mint">Ready to confirm</Chip>
        </div>
        <div className="mt-3 h-2 overflow-hidden rounded-sm bg-slate-100">
          <m.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={inView}
            transition={{ duration: 1.1, ease, delay: 0.2 }}
            style={{ width: '92%', transformOrigin: 'left' }}
            className="h-full rounded-sm bg-brand-600"
          />
        </div>
        <ul className="mt-5 divide-y divide-slate-100">
          {placements.map((p, i) => (
            <m.li
              key={p.name}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={inView}
              transition={{ duration: 0.7, ease, delay: 0.25 + i * 0.1 }}
              className="flex items-center gap-3 py-3"
            >
              <span
                className={cn(
                  'grid size-7 shrink-0 place-items-center rounded-md',
                  p.status === 'Available'
                    ? 'bg-brand-600 text-white'
                    : 'bg-slate-100 text-slate-500',
                )}
              >
                <Check aria-hidden className="size-4" />
              </span>
              <span className="flex-1">
                <span className="block text-sm font-semibold text-ink">{p.name}</span>
                <span className="block text-xs text-slate-500">{p.type}</span>
              </span>
              <Chip tone={p.status === 'Available' ? 'mint' : 'neutral'}>{p.status}</Chip>
            </m.li>
          ))}
        </ul>
      </div>
    </BrowserFrame>
  )
}

export type CaseThumbVariant = 'traffic' | 'poi' | 'competitor'

/** Small product-UI thumbnail used on case cards instead of an illustrated cover. */
export function CaseThumb({
  variant,
  className,
}: {
  variant: CaseThumbVariant
  className?: string
}) {
  return (
    <div
      className={cn(
        'relative isolate overflow-hidden bg-gradient-to-br from-brand-50 via-white to-mint-50 p-6',
        className,
      )}
    >
      <div
        aria-hidden
        className="absolute top-0 right-0 -z-10 size-1/2 bg-brand-100/80"
        style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }}
      />
      <div className="mx-auto h-full max-w-xs overflow-hidden rounded-xl bg-white shadow-card ring-1 ring-brand-900/8">
        {variant === 'competitor' ? (
          <div className="space-y-3 p-4">
            <p className="text-xs font-semibold text-slate-500">Share of voice</p>
            {[
              ['Your brand', 62, 'bg-brand-600'],
              ['Competitor A', 44, 'bg-brand-300'],
              ['Competitor B', 31, 'bg-mint-400'],
            ].map(([name, v, tone]) => (
              <div key={name as string}>
                <div className="flex justify-between text-xs">
                  <span className="font-medium text-ink">{name}</span>
                  <span className="text-slate-500 tabular-nums">{v}%</span>
                </div>
                <div className="mt-1 h-2 rounded-sm bg-slate-100">
                  <div
                    className={cn('h-full rounded-sm', tone as string)}
                    style={{ width: `${v}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex h-full flex-col">
            <div className="min-h-0 flex-1">
              <MapCanvas
                pins={
                  variant === 'traffic'
                    ? [
                        { x: 120, y: 200 },
                        { x: 250, y: 130, active: true },
                        { x: 390, y: 90 },
                      ]
                    : [
                        { x: 200, y: 150, active: true },
                        { x: 330, y: 220 },
                      ]
                }
              />
            </div>
            <div className="flex items-center gap-2 p-3">
              {variant === 'traffic' ? (
                <>
                  <Chip tone="mint">High traffic</Chip>
                  <Chip tone="neutral">3 locations</Chip>
                </>
              ) : (
                <>
                  <Chip tone="brand">Office</Chip>
                  <Chip tone="neutral">Cafe</Chip>
                  <Chip tone="neutral">Retail</Chip>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
