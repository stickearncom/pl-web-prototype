import { Eye, History, MapPin, Store, Users } from 'lucide-react'
import { MapCanvas } from '@/shared/mockups'
import { Chip } from '@/shared/mockups'
import { Reveal } from '@/shared/ui'
import { digitalBillboardContent } from '../digital-billboard-content'

function Row({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof MapPin
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="flex items-start gap-5 py-5">
      <span
        aria-hidden
        className="mt-0.5 grid size-12 shrink-0 place-items-center rounded-lg bg-brand-600 text-white shadow-[-3px_3px_0_var(--color-mint-400)]"
      >
        <Icon className="size-5" strokeWidth={1.75} />
      </span>
      <div className="min-w-0">
        <dt className="text-eyebrow text-slate-500">{label}</dt>
        <dd className="mt-2 text-xl font-semibold text-ink">{children}</dd>
      </div>
    </div>
  )
}

function Chips({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2 text-sm font-medium">
      {items.map((item) => (
        <li key={item}>
          <Chip tone="brand">{item}</Chip>
        </li>
      ))}
    </ul>
  )
}

/** A large dashboard style card showing the data behind one digital billboard. */
export function LocationDetail() {
  const d = digitalBillboardContent.detail
  return (
    <Reveal>
      <div className="overflow-hidden rounded-2xl bg-white text-ink shadow-lift ring-1 ring-white/10">
        <div className="flex items-center gap-3 border-b border-slate-200 bg-slate-50 px-5 py-3.5">
          <span aria-hidden className="flex gap-1.5">
            <span className="size-2.5 rounded-full bg-slate-300" />
            <span className="size-2.5 rounded-full bg-slate-300" />
            <span className="size-2.5 rounded-full bg-slate-300" />
          </span>
          <span className="text-xs font-semibold text-slate-500">
            Playlog · Digital billboard detail
          </span>
        </div>
        <div className="grid lg:grid-cols-[1.1fr_1fr]">
          <div className="relative min-h-80 lg:min-h-[28rem]">
            <img
              src="/media/billboard-station-wide.webp"
              alt="Wide LED screen above a station entrance"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 size-full object-cover"
            />
            <div className="absolute bottom-5 left-5 w-48 overflow-hidden rounded-xl bg-white shadow-lift sm:w-56">
              <div className="h-24">
                <MapCanvas
                  pins={[
                    { x: 240, y: 150, active: true },
                    { x: 110, y: 100 },
                  ]}
                />
              </div>
              <div className="flex items-center justify-between p-3">
                <span className="text-xs font-semibold text-ink">Sudirman</span>
                <Chip tone="mint">Digital · LED</Chip>
              </div>
            </div>
          </div>
          <dl className="divide-y divide-slate-200 px-6 py-3 sm:px-10">
            <Row icon={MapPin} label="Location">
              {d.location}
            </Row>
            <Row icon={Store} label="Points of interest">
              <Chips items={d.poi} />
            </Row>
            <Row icon={Eye} label="Potential impressions">
              {d.impressions}
            </Row>
            <Row icon={Users} label="Potential reach">
              {d.reach}
            </Row>
            <Row icon={History} label="Campaign history">
              <Chips items={d.history} />
            </Row>
          </dl>
        </div>
      </div>
      <p className="mt-5 text-center text-sm text-white/60">{d.note}</p>
    </Reveal>
  )
}
