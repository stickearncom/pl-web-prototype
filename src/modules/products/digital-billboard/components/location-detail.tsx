import { Eye, History, MapPin, Store, Users } from 'lucide-react'
import { Extrude, LogoMark, MapCard, Pin, SceneFrame, c, rrect } from '@/shared/illustrations'
import { Reveal } from '@/shared/ui'
import { digitalBillboardContent } from '../digital-billboard-content'

function MapPreview() {
  return (
    <SceneFrame viewBox="0 0 520 360" label="Map preview of a digital billboard location">
      <MapCard x={34} y={34} w={440} h={290} depth={14} />
      <Pin x={250} y={200} r={18} front={c.mint} side={c.blueDeep} dot={c.blueDeep} />
      <Pin x={140} y={140} r={11} pulse={false} />
      <Pin x={370} y={120} r={11} pulse={false} />
      <Extrude
        points={rrect(332, 214, 120, 70, 8)}
        depth={10}
        front={c.blueDeep}
        sideLeft={c.mint}
        sideBottom={c.mintDeep}
        anim="slide"
      >
        <LogoMark x={348} y={226} size={22} />
        <rect x={382} y={232} width={56} height={7} rx={3.5} fill={c.white} opacity={0.9} />
        <rect x={382} y={248} width={38} height={7} rx={3.5} fill={c.white} opacity={0.5} />
      </Extrude>
    </SceneFrame>
  )
}

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
    <div className="flex items-start gap-4 py-4">
      <span
        aria-hidden
        className="mt-0.5 grid size-10 shrink-0 place-items-center rounded-xl bg-brand-600 text-white shadow-[-3px_3px_0_var(--color-mint-400)]"
      >
        <Icon className="size-5" strokeWidth={1.75} />
      </span>
      <div className="min-w-0">
        <dt className="text-eyebrow text-slate-500">{label}</dt>
        <dd className="mt-1.5 text-lg font-semibold text-ink">{children}</dd>
      </div>
    </div>
  )
}

function Chips({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2 text-sm font-medium">
      {items.map((item) => (
        <li key={item} className="rounded-md bg-brand-50 px-3 py-1 text-brand-700">
          {item}
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
      <div className="overflow-hidden rounded-3xl bg-white text-ink shadow-lift ring-1 ring-white/10">
        <div className="flex items-center gap-2 border-b border-slate-200 px-5 py-3.5">
          <span className="size-2.5 rounded-md bg-brand-600" />
          <span className="size-2.5 rounded-md bg-mint-400" />
          <span className="size-2.5 rounded-md bg-brand-200" />
          <span className="ml-3 text-sm font-semibold text-slate-600">
            Digital billboard detail
          </span>
        </div>
        <div className="grid lg:grid-cols-[1.1fr_1fr]">
          <div className="bg-slate-50 p-4 sm:p-6">
            <MapPreview />
          </div>
          <dl className="divide-y divide-slate-200 px-6 py-2 sm:px-8">
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
      <p className="mt-4 text-center text-sm text-white/60">{d.note}</p>
    </Reveal>
  )
}
