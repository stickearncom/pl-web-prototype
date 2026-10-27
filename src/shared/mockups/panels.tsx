import { m } from 'motion/react'
import { Check, MapPin, Search, SlidersHorizontal } from 'lucide-react'
import { cn } from '@/shared/lib'
import { MapCanvas } from './map'
import { BrowserFrame, Chip, Metric } from './ui'

const ease = [0.16, 1, 0.3, 1] as const
const inView = { once: true, margin: '0px 0px -12% 0px' } as const

export function PlanningMockup() {
  return (
    <div className="relative">
      <BrowserFrame title="Playlog · Campaign planning">
        <div className="relative aspect-[3/2] sm:aspect-[8/5]">
          <MapCanvas
            route="M60 250 C 130 200, 160 160, 230 140 S 340 90, 420 70"
            pins={[
              { x: 60, y: 250 },
              { x: 230, y: 140, active: true },
              { x: 420, y: 70 },
              { x: 330, y: 220 },
            ]}
          />
          <div className="absolute top-3 left-3 flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-xs font-medium text-slate-500 shadow-card">
            <Search aria-hidden className="size-3.5" /> Jakarta · Financial district
          </div>
          <div className="absolute top-3 right-3 hidden gap-1.5 sm:flex">
            <Chip tone="brand">Reach</Chip>
            <Chip tone="neutral">Traffic</Chip>
            <Chip tone="neutral">POI</Chip>
          </div>
        </div>
      </BrowserFrame>
      <m.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={inView}
        transition={{ duration: 0.8, ease, delay: 0.5 }}
        className="relative z-10 mx-auto -mt-10 w-[88%] rounded-xl bg-white p-4 shadow-lift ring-1 ring-brand-900/8 sm:absolute sm:right-[-1.5rem] sm:bottom-[-1.75rem] sm:mt-0 sm:w-64"
      >
        <p className="text-eyebrow text-brand-600">Selected location</p>
        <p className="mt-2 font-semibold text-ink">Sudirman corridor</p>
        <div className="mt-3 flex items-end justify-between">
          <div>
            <p className="text-xs text-slate-500">Potential reach / day</p>
            <p className="text-xl font-bold text-ink tabular-nums">159,207</p>
          </div>
          <Chip tone="mint">High traffic</Chip>
        </div>
      </m.div>
    </div>
  )
}

const inventory = [
  {
    name: 'Elevated toll road',
    type: 'Digital · LED',
    img: '/media/billboard-flyover.webp',
    price: 'Available',
  },
  {
    name: 'Business district corner',
    type: 'Digital · LED',
    img: '/media/billboard-corner.webp',
    price: 'Available',
  },
]

export function InventoryMockup() {
  return (
    <BrowserFrame title="Playlog · Inventory">
      <div className="p-4 sm:p-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 flex-1 items-center gap-2 rounded-lg bg-slate-100 px-3 text-sm text-slate-500">
            <Search aria-hidden className="size-4" /> Search by city, road, or media type
          </div>
          <span className="grid size-10 place-items-center rounded-lg bg-brand-600 text-white">
            <SlidersHorizontal aria-hidden className="size-4" />
          </span>
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {inventory.map((item, i) => (
            <m.div
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={inView}
              transition={{ duration: 0.8, ease, delay: 0.15 + i * 0.12 }}
              className="overflow-hidden rounded-xl ring-1 ring-slate-200"
            >
              <img
                src={item.img}
                alt=""
                loading="lazy"
                decoding="async"
                className="aspect-[16/10] w-full object-cover"
              />
              <div className="p-3.5">
                <p className="font-semibold text-ink">{item.name}</p>
                <p className="mt-0.5 flex items-center gap-1 text-xs text-slate-500">
                  <MapPin aria-hidden className="size-3" /> {item.type}
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <Chip tone="mint">{item.price}</Chip>
                  <span className="text-xs font-semibold text-brand-600">Compare</span>
                </div>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  )
}

const steps = [
  { label: 'Creative approved', time: '08:10', done: true },
  { label: 'Installation documented', time: '10:45', done: true },
  { label: 'Campaign in progress', time: 'Live', done: false },
]

export function VerificationMockup() {
  return (
    <BrowserFrame title="Playlog · Campaign verification">
      <div className="grid sm:grid-cols-[1.1fr_1fr]">
        <div className="relative min-h-48">
          <img
            src="/media/billboard-avenue.webp"
            alt=""
            loading="lazy"
            decoding="async"
            className="absolute inset-0 size-full object-cover"
          />
          <div className="absolute bottom-3 left-3">
            <Chip tone="live">Proof of posting</Chip>
          </div>
        </div>
        <ol className="space-y-1 p-5">
          {steps.map((step, i) => (
            <m.li
              key={step.label}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={inView}
              transition={{ duration: 0.7, ease, delay: 0.2 + i * 0.15 }}
              className="flex items-center gap-3 rounded-lg px-2 py-2.5"
            >
              <span
                className={cn(
                  'grid size-7 shrink-0 place-items-center rounded-md',
                  step.done ? 'bg-brand-600 text-white' : 'bg-mint-400 text-brand-950',
                )}
              >
                {step.done ? (
                  <Check aria-hidden className="size-4" />
                ) : (
                  <span className="size-2 rounded-full bg-brand-950" />
                )}
              </span>
              <span className="flex-1 text-sm font-medium text-ink">{step.label}</span>
              <span className="text-xs text-slate-500">{step.time}</span>
            </m.li>
          ))}
        </ol>
      </div>
    </BrowserFrame>
  )
}

const bars = [42, 58, 51, 74, 66, 88, 96]

export function ReportingMockup() {
  return (
    <BrowserFrame title="Playlog · Campaign report">
      <div className="p-4 sm:p-6">
        <div className="grid grid-cols-2 gap-3">
          <Metric label="Total impressions" value="1,240,000" delta="+12.4% vs plan" />
          <Metric label="Locations live" value="12 / 12" />
        </div>
        <div className="mt-5 flex items-end justify-between">
          <p className="text-sm font-semibold text-ink">Campaign activity</p>
          <Chip tone="neutral">Last 7 days</Chip>
        </div>
        <div className="mt-4 flex h-40 items-end gap-3">
          {bars.map((h, i) => (
            <div key={i} className="flex h-full flex-1 items-end">
              <m.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={inView}
                transition={{ duration: 0.9, ease, delay: 0.15 + i * 0.07 }}
                style={{ height: `${h}%`, transformOrigin: 'bottom' }}
                className={cn(
                  'w-full rounded-sm',
                  i === bars.length - 1 ? 'bg-mint-400' : 'bg-brand-600',
                )}
              />
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  )
}

const sov = [
  { name: 'Your brand', value: 38, tone: 'bg-brand-600' },
  { name: 'Competitor A', value: 27, tone: 'bg-brand-300' },
  { name: 'Competitor B', value: 21, tone: 'bg-mint-400' },
  { name: 'Others', value: 14, tone: 'bg-slate-300' },
]

export function IntelligenceMockup() {
  const r = 52
  const circ = 2 * Math.PI * r
  const colors = ['#004fa4', '#86b5f5', '#00f4cb', '#c3ccda']
  const arcs = sov.map((s, i) => {
    const before = sov.slice(0, i).reduce((sum, x) => sum + (x.value / 100) * circ, 0)
    return { ...s, len: (s.value / 100) * circ, offset: -before, color: colors[i] }
  })
  return (
    <BrowserFrame title="Playlog · Market intelligence">
      <div className="grid gap-6 p-5 sm:grid-cols-[auto_1fr] sm:p-6">
        <div className="relative mx-auto size-40">
          <svg viewBox="0 0 140 140" className="size-full -rotate-90" aria-hidden>
            <circle cx="70" cy="70" r={r} fill="none" stroke="#eef4fa" strokeWidth="18" />
            {arcs.map((s, i) => {
              return (
                <m.circle
                  key={s.name}
                  cx="70"
                  cy="70"
                  r={r}
                  fill="none"
                  stroke={s.color}
                  strokeWidth="18"
                  strokeDasharray={`${Math.max(s.len - 2, 0)} ${circ}`}
                  strokeDashoffset={s.offset}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={inView}
                  transition={{ duration: 0.8, ease, delay: 0.1 + i * 0.12 }}
                />
              )
            })}
          </svg>
          <div className="absolute inset-0 grid place-items-center text-center">
            <div>
              <p className="text-2xl font-bold text-ink">38%</p>
              <p className="text-xs text-slate-500">Share of voice</p>
            </div>
          </div>
        </div>
        <ul className="space-y-4 self-center">
          {sov.map((s, i) => (
            <li key={s.name}>
              <div className="flex justify-between text-sm">
                <span className="font-medium text-ink">{s.name}</span>
                <span className="text-slate-500 tabular-nums">{s.value}%</span>
              </div>
              <div className="mt-1.5 h-2 overflow-hidden rounded-sm bg-slate-100">
                <m.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={inView}
                  transition={{ duration: 0.9, ease, delay: 0.2 + i * 0.1 }}
                  style={{ width: `${s.value * 2}%`, transformOrigin: 'left' }}
                  className={cn('h-full rounded-sm', s.tone)}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </BrowserFrame>
  )
}
