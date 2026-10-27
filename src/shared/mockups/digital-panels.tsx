import { m } from 'motion/react'
import { MapCanvas } from './map'
import { BrowserFrame, Chip } from './ui'

const ease = [0.16, 1, 0.3, 1] as const
const inView = { once: true, margin: '0px 0px -12% 0px' } as const

const history = [
  {
    img: '/media/billboard-static-mrdiy.webp',
    category: 'Retail',
    period: 'Aug 2026',
    value: '1.8M',
  },
  {
    img: '/media/billboard-corner-led.webp',
    category: 'Banking',
    period: 'Oct 2026',
    value: '2.4M',
  },
  {
    img: '/media/billboard-lego-bridge.webp',
    category: 'Consumer goods',
    period: 'Jul 2026',
    value: '1.2M',
  },
]

/** Past campaigns on one screen. Sample data. */
export function HistoryMockup() {
  return (
    <BrowserFrame title="Playlog · Campaign history">
      <div className="p-5 sm:p-6">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-ink">Previous campaigns on this screen</p>
          <Chip tone="neutral">Last 12 months</Chip>
        </div>
        <ul className="mt-4 space-y-3">
          {history.map((item, i) => (
            <m.li
              key={item.category}
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={inView}
              transition={{ duration: 0.7, ease, delay: 0.15 + i * 0.12 }}
              className="flex items-center gap-4 rounded-xl bg-slate-50 p-3"
            >
              <img
                src={item.img}
                alt=""
                loading="lazy"
                decoding="async"
                className="h-14 w-20 shrink-0 rounded-lg object-cover"
              />
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-semibold text-ink">{item.category}</span>
                <span className="block text-xs text-slate-500">{item.period}</span>
              </span>
              <span className="text-right">
                <span className="block text-sm font-bold text-ink tabular-nums">{item.value}</span>
                <span className="block text-xs text-slate-500">impressions</span>
              </span>
            </m.li>
          ))}
        </ul>
      </div>
    </BrowserFrame>
  )
}

/** Compact "digital billboard detail" card with a mini map. Sample data. */
export function DigitalDetailCard() {
  return (
    <div className="w-full overflow-hidden rounded-xl bg-white shadow-lift ring-1 ring-brand-900/8">
      <div className="h-24">
        <MapCanvas
          pins={[
            { x: 240, y: 150, active: true },
            { x: 110, y: 100 },
            { x: 380, y: 210 },
          ]}
        />
      </div>
      <div className="p-4">
        <p className="text-eyebrow text-brand-600">Digital billboard</p>
        <p className="mt-2 font-semibold text-ink">Sudirman, Jakarta Selatan</p>
        <div className="mt-3 grid grid-cols-2 gap-3">
          <div>
            <p className="text-xs text-slate-500">Impressions / day</p>
            <p className="text-lg font-bold text-ink tabular-nums">672,563</p>
          </div>
          <div>
            <p className="text-xs text-slate-500">Reach / day</p>
            <p className="text-lg font-bold text-ink tabular-nums">159,207</p>
          </div>
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5">
          <Chip tone="brand">Banking</Chip>
          <Chip tone="neutral">F&B</Chip>
        </div>
      </div>
    </div>
  )
}
