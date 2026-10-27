import {
  BillboardScene,
  BillboardThumb,
  CompetitiveScene,
  CoverArt,
  CtaScene,
  DigitalBillboardScene,
  HeroCityScene,
  InsightsScene,
  InventoryScene,
  JourneyArt,
  LocationsScene,
  MarketActivityScene,
  MeasurementScene,
  PlanningScene,
  VerificationScene,
} from '@/shared/illustrations'

/** Dev only: every illustration on one page for visual review. Not included in production builds. */
export default function SceneLab() {
  const scenes = [
    ['Hero', <HeroCityScene />],
    ['Planning', <PlanningScene />],
    ['Measurement', <MeasurementScene />],
    ['Competitive', <CompetitiveScene />],
    ['Digital billboard', <DigitalBillboardScene />],
    ['Billboard', <BillboardScene />],
    ['Insights', <InsightsScene />],
    ['Inventory', <InventoryScene />],
    ['Verification', <VerificationScene />],
    ['Locations', <LocationsScene />],
    ['Market activity', <MarketActivityScene />],
  ] as const
  return (
    <div className="container-page py-10">
      <div className="grid gap-8 md:grid-cols-2">
        {scenes.map(([name, node]) => (
          <div key={name} className="rounded-2xl bg-slate-50 p-4">
            <p className="mb-2 text-sm font-semibold">{name}</p>
            {node}
          </div>
        ))}
        <div className="rounded-2xl bg-brand-950 p-4">
          <CtaScene />
        </div>
        <div className="grid grid-cols-4 gap-2 rounded-2xl bg-slate-50 p-4">
          {([1, 2, 3, 4] as const).map((s) => (
            <JourneyArt key={s} stage={s} />
          ))}
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[0, 1, 2, 3, 4, 5].map((v) => (
            <CoverArt key={v} variant={v} className="aspect-[8/5] w-full rounded-lg" />
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2">
          {(['blue', 'navy', 'white', 'mint'] as const).map((t, i) => (
            <BillboardThumb key={t} tone={t} seed={i} className="aspect-[4/3] w-full rounded-lg" />
          ))}
        </div>
      </div>
    </div>
  )
}
