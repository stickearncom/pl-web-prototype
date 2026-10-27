import { m, useReducedMotion } from 'motion/react'
import {
  billboardAnchor,
  billboardFoot,
  Billboard,
  Building,
  CheckBadge,
  DrivingCar,
  FlowLine,
  HeatSpot,
  ink,
  iso,
  IsoSlab,
  IsoStage,
  IsoTile,
  LaneDashes,
  Pin,
  ReachRings,
  tone,
  Tree,
  type AdFace,
} from '@/shared/isometric'

export type CityStage = 'plan' | 'execute' | 'measure'

/**
 * A 12 x 12 tile city: two crossing roads, four blocks, five billboards.
 * Three billboards (b2, b4, b5) are "our campaign" and carry the story across stages.
 *
 * Draw order matters in isometric: ground first, then the three back blocks, then cars
 * (they only drive the two front arms of the roads), then the front block, then overlays.
 */
const W = 12
const ROAD = { from: 5, to: 7 }

const boards = {
  b1: { x: 0.8, y: 4.6, axis: 'x', len: 2.4 },
  b2: { x: 7.4, y: 4.6, axis: 'x', len: 1.9, pole: 1.5, panel: 1.1 },
  b3: { x: 4.6, y: 0.9, axis: 'y', len: 2.2 },
  b4: { x: 4.6, y: 7.6, axis: 'y', len: 2.4 },
  b5: { x: 9.5, y: 3.0, axis: 'x', len: 1.9, pole: 3.6, panel: 1.6, wall: true, digital: true },
} as const

const ours = ['b2', 'b4', 'b5'] as const
const KEEP = ['empty', 'live'] as const

export function CityDiorama({ stage, label }: { stage: CityStage; label: string }) {
  const reduce = useReducedMotion()
  const plan = stage === 'plan'
  const execute = stage === 'execute'
  const measure = stage === 'measure'

  const face = (id: keyof typeof boards): AdFace => {
    if (!(ours as readonly string[]).includes(id)) return 'idle'
    return plan ? 'empty' : 'live'
  }

  return (
    <IsoStage w={W} d={W} top={5.6} peak={[0.5, 0.5]} pad={30} label={label}>
      {/* ---------- ground */}
      <IsoSlab w={W} d={W} />
      <IsoTile x={0} y={ROAD.from} w={W} d={2} fill={ink.road} />
      <IsoTile x={ROAD.from} y={0} w={2} d={W} fill={ink.road} />
      <IsoTile x={ROAD.from} y={ROAD.from} w={2} d={2} fill="#d3dceb" />
      <LaneDashes axis="x" lane={6} from={0} to={ROAD.from} />
      <LaneDashes axis="x" lane={6} from={ROAD.to} to={W} />
      <LaneDashes axis="y" lane={6} from={0} to={ROAD.from} />
      <LaneDashes axis="y" lane={6} from={ROAD.to} to={W} />
      {/* Sidewalk kerbs */}
      <IsoTile x={0} y={4.82} w={ROAD.from} d={0.18} fill="#ffffff" />
      <IsoTile x={ROAD.to} y={4.82} w={W - ROAD.to} d={0.18} fill="#ffffff" />
      <IsoTile x={4.82} y={0} w={0.18} d={ROAD.from} fill="#ffffff" />
      <IsoTile x={4.82} y={ROAD.to} w={0.18} d={W - ROAD.to} fill="#ffffff" />
      {/* Front park */}
      <IsoTile x={7.4} y={7.4} w={4.2} d={4.2} fill={ink.grass} />
      <IsoTile x={7.9} y={7.9} w={0.5} d={3.2} fill="#ffffff" />

      {/* Audience density (plan) */}
      <HeatSpot at={iso(6, 6)} r={3} show={plan} />
      <HeatSpot at={iso(8.6, 6)} r={1.7} show={plan} strength={0.8} />
      <HeatSpot at={iso(6, 8.8)} r={1.7} show={plan} strength={0.8} />
      <HeatSpot at={iso(2.2, 6)} r={1.4} show={plan} strength={0.5} />

      {/* Traffic flow on every lane (plan, measure) */}
      <FlowLine path={[iso(0.2, 5.5), iso(11.8, 5.5)]} show={plan || measure} />
      <FlowLine path={[iso(11.8, 6.5), iso(0.2, 6.5)]} show={plan || measure} speed={0.8} />
      <FlowLine path={[iso(5.5, 11.8), iso(5.5, 0.2)]} show={plan || measure} speed={0.9} />
      <FlowLine path={[iso(6.5, 0.2), iso(6.5, 11.8)]} show={plan || measure} />

      {/* Reach (measure) */}
      {ours.map((id, i) => (
        <ReachRings
          key={id}
          at={billboardFoot(boards[id])}
          r={id === 'b5' ? 3.2 : 2.6}
          show={measure}
          delay={i * 0.5}
        />
      ))}

      {/* ---------- back blocks (A: back, B: right, C: left) */}
      {/* A */}
      <Building
        x={0.5}
        y={0.5}
        w={2.3}
        d={2.3}
        h={5.2}
        tone={tone.brand}
        windows="grid"
        glass="#4a8ad8"
        roof="unit"
      />
      <Building x={3.0} y={0.5} w={1.2} d={1.5} h={2.2} />
      <Tree x={3.6} y={3.1} />
      <Tree x={1.4} y={3.7} s={0.85} />
      <Billboard {...boards.b3} face={face('b3')} />
      <Billboard {...boards.b1} face={face('b1')} />
      {/* B */}
      <Building x={7.4} y={0.6} w={1.4} d={1.6} h={2.6} roof="unit" />
      <Building x={9.3} y={0.6} w={2.3} d={2.4} h={7} windows="grid" />
      <Billboard {...boards.b5} face={face('b5')} selected={plan} keep={KEEP} />
      <Tree x={8.1} y={3.2} s={0.9} />
      <Billboard {...boards.b2} face={face('b2')} selected={plan} keep={KEEP} />
      {/* C */}
      <Building x={0.6} y={7.4} w={1.7} d={1.2} h={1.7} roof="none" />
      <Building x={0.6} y={9.1} w={2.6} d={2.4} h={3.4} tone={tone.stone} />
      <Tree x={3.5} y={8.0} />
      <Tree x={3.8} y={11.2} s={0.9} />
      <Billboard {...boards.b4} face={face('b4')} selected={plan} keep={KEEP} />

      {/* ---------- cars on the two front arms */}
      <DrivingCar axis="x" lane={6.5} from={7.2} to={12.4} duration={7} />
      <DrivingCar
        axis="x"
        lane={5.5}
        from={12.4}
        to={7.2}
        duration={8}
        delay={3}
        body={tone.mintDeep}
      />
      <DrivingCar
        axis="y"
        lane={5.5}
        from={7.2}
        to={12.4}
        duration={7.5}
        delay={1.5}
        body={tone.navy}
      />
      <DrivingCar axis="y" lane={6.5} from={12.4} to={7.2} duration={8.5} delay={5} />

      {/* ---------- front block (D) */}
      <Tree x={7.7} y={7.8} s={0.9} />
      <Tree x={10.4} y={7.8} s={0.8} />
      <Tree x={7.8} y={10.8} />
      <Building x={8.8} y={8.8} w={2.6} d={2.6} h={1.5} floors={1} roof="unit" />

      {/* ---------- overlays */}
      {ours.map((id, i) => {
        const at = billboardAnchor(boards[id])
        return (
          <g key={id}>
            <Pin at={at} show={plan} delay={0.15 + i * 0.12} />
            <CheckBadge at={[at[0], at[1] + 4]} show={execute} delay={0.25 + i * 0.18} />
          </g>
        )
      })}

      {/* Light sweep when a campaign goes live */}
      {!reduce && (
        <m.g
          key={stage}
          initial={{ opacity: execute ? 0.55 : 0 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
        >
          {ours.map((id) => {
            const [x, y] = billboardAnchor(boards[id])
            return <circle key={id} cx={x} cy={y + 18} r={34} fill={ink.mint} />
          })}
        </m.g>
      )}
    </IsoStage>
  )
}
