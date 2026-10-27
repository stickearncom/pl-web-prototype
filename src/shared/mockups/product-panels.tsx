import { m } from 'motion/react'
import { Download, Search } from 'lucide-react'
import { cn } from '@/shared/lib'
import { MapCanvas } from './map'
import { BrowserFrame, Chip, Metric } from './ui'

const ease = [0.16, 1, 0.3, 1] as const
const inView = { once: true, margin: '0px 0px -12% 0px' } as const

const results = [
  {
    img: '/media/billboard-static-mrdiy.webp',
    name: 'Arterial road',
    meta: 'Static · Ambon',
    reach: '84K',
  },
  {
    img: '/media/billboard-lego-bridge.webp',
    name: 'Bridge-side',
    meta: 'Static · Jakarta',
    reach: '159K',
  },
  {
    img: '/media/billboard-aqua-wall.webp',
    name: 'Plaza wall',
    meta: 'Static · Jakarta',
    reach: '212K',
  },
]

/** Billboard search result card for the Billboard hero. Sample data. */
export function SearchResultsCard() {
  return (
    <div className="w-full overflow-hidden rounded-xl bg-white shadow-lift ring-1 ring-brand-900/8">
      <div className="flex items-center gap-2 border-b border-slate-100 px-3.5 py-3 text-xs text-slate-500">
        <Search aria-hidden className="size-3.5" /> Jakarta · Static billboard
      </div>
      <ul className="divide-y divide-slate-100">
        {results.map((r) => (
          <li key={r.name} className="flex items-center gap-3 px-3.5 py-3">
            <img
              src={r.img}
              alt=""
              loading="lazy"
              decoding="async"
              className="h-10 w-14 rounded-md object-cover"
            />
            <span className="min-w-0 flex-1">
              <span className="block truncate text-sm font-semibold text-ink">{r.name}</span>
              <span className="block text-xs text-slate-500">{r.meta}</span>
            </span>
            <span className="text-right">
              <span className="block text-sm font-bold text-ink tabular-nums">{r.reach}</span>
              <span className="block text-[0.6875rem] text-slate-500">reach/day</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

const sov = [
  { name: 'Your brand', value: 38, tone: 'bg-brand-600' },
  { name: 'Competitor A', value: 27, tone: 'bg-brand-300' },
  { name: 'Competitor B', value: 21, tone: 'bg-mint-400' },
]

/** Small share-of-voice card for the Competitive Landscape hero. Sample data. */
export function SovCard() {
  return (
    <div className="w-full rounded-xl bg-white p-4 shadow-lift ring-1 ring-brand-900/8">
      <div className="flex items-center justify-between">
        <p className="text-eyebrow text-brand-600">Share of voice</p>
        <Chip tone="neutral">Retail</Chip>
      </div>
      <ul className="mt-4 space-y-3">
        {sov.map((s) => (
          <li key={s.name}>
            <div className="flex justify-between text-xs">
              <span className="font-medium text-ink">{s.name}</span>
              <span className="text-slate-500 tabular-nums">{s.value}%</span>
            </div>
            <div className="mt-1 h-2 rounded-sm bg-slate-100">
              <div
                className={cn('h-full rounded-sm', s.tone)}
                style={{ width: `${s.value * 2}%` }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

/** Live dashboard: KPIs, a line that draws in, and an export action. Sample data. */
export function LiveDashboardMockup() {
  const line = 'M0 90 C 40 80, 60 60, 100 66 S 160 30, 200 40 S 260 20, 300 10'
  return (
    <BrowserFrame title="Playlog · Live dashboard">
      <div className="p-5 sm:p-6">
        <div className="flex items-center justify-between">
          <Chip tone="live">Live</Chip>
          <span className="inline-flex items-center gap-1.5 rounded-md bg-brand-600 px-3 py-1.5 text-xs font-semibold text-white">
            <Download aria-hidden className="size-3.5" /> Export report
          </span>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-3">
          <Metric label="Reach" value="159K" />
          <Metric label="Impressions" value="672K" />
          <Metric label="Frequency" value="4.2" />
        </div>
        <svg
          viewBox="0 0 300 100"
          className="mt-5 h-32 w-full"
          role="img"
          aria-label="Impressions trend rising over time"
        >
          {[25, 50, 75].map((y) => (
            <line key={y} x1="0" x2="300" y1={y} y2={y} stroke="#e1e6ee" strokeDasharray="3 5" />
          ))}
          <m.path
            d={line}
            fill="none"
            stroke="#004fa4"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={inView}
            transition={{ duration: 1.6, ease }}
          />
        </svg>
      </div>
    </BrowserFrame>
  )
}

const legend = [
  { name: 'Your brand', color: '#004fa4' },
  { name: 'Competitor A', color: '#86b5f5' },
  { name: 'Competitor B', color: '#00d3af' },
]

/** Competitor presence on a map, with a legend and timeline. Sample data. */
export function MarketActivityMockup() {
  const pins = [
    { x: 90, y: 110, c: 0 },
    { x: 150, y: 60, c: 1 },
    { x: 220, y: 140, c: 2 },
    { x: 300, y: 80, c: 1 },
    { x: 360, y: 170, c: 0 },
    { x: 410, y: 60, c: 2 },
    { x: 180, y: 220, c: 1 },
  ]
  return (
    <BrowserFrame title="Playlog · Competitor activity">
      <div className="relative aspect-[3/2]">
        <MapCanvas />
        <svg
          viewBox="0 0 480 320"
          className="absolute inset-0 size-full"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden
        >
          {pins.map((p, i) => (
            <m.g
              key={i}
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={inView}
              transition={{ duration: 0.6, ease, delay: 0.2 + i * 0.1 }}
              style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
            >
              <circle cx={p.x} cy={p.y} r="11" fill={legend[p.c]!.color} fillOpacity="0.25" />
              <circle
                cx={p.x}
                cy={p.y}
                r="6"
                fill={legend[p.c]!.color}
                stroke="#fff"
                strokeWidth="2"
              />
            </m.g>
          ))}
        </svg>
      </div>
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-slate-100 px-5 py-3.5 text-xs text-slate-600">
        {legend.map((l) => (
          <span key={l.name} className="flex items-center gap-2">
            <span aria-hidden className="size-2.5 rounded-xs" style={{ background: l.color }} />
            {l.name}
          </span>
        ))}
      </div>
    </BrowserFrame>
  )
}

/** Opportunity heat grid: high audience potential with low competitive activity. Sample data. */
export function OpportunityMockup() {
  const cells = Array.from({ length: 48 }, (_, i) => {
    const x = i % 8
    const y = Math.floor(i / 8)
    const v = Math.max(0, 1 - Math.hypot(x - 5.2, y - 1.8) / 4.6)
    return v
  })
  return (
    <BrowserFrame title="Playlog · Opportunity map">
      <div className="p-5 sm:p-6">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-ink">Audience potential vs. competition</p>
          <Chip tone="mint">3 open areas</Chip>
        </div>
        <div className="mt-4 grid grid-cols-8 gap-1.5">
          {cells.map((v, i) => (
            <m.span
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={inView}
              transition={{ duration: 0.6, ease, delay: (i % 8) * 0.04 + Math.floor(i / 8) * 0.04 }}
              className="aspect-square rounded-sm"
              style={{ background: `rgba(0, 79, 164, ${0.08 + v * 0.85})` }}
            />
          ))}
        </div>
        <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
          <span>Lower potential</span>
          <span
            aria-hidden
            className="h-2 w-24 rounded-sm bg-gradient-to-r from-brand-600/10 to-brand-600"
          />
          <span>Higher potential</span>
        </div>
      </div>
    </BrowserFrame>
  )
}
