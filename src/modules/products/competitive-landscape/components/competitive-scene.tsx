import { m, useReducedMotion } from 'motion/react'
import {
  Billboard,
  billboardAnchor,
  Building,
  HeatSpot,
  ink,
  iso,
  IsoSlab,
  IsoStage,
  IsoTile,
  LaneDashes,
  Pin,
  rectXY,
  tone,
  Tree,
  useLoop,
} from '@/shared/isometric'

/**
 * Competitive landscape: rival brands hold two blocks (tinted ground, their billboards),
 * an under-served block lights up as an opportunity, then your billboard claims it.
 */
const W = 8
const R = { from: 3.2, to: 4.6 }
const ours = { x: 3.05, y: 5.1, axis: 'y', len: 1.6, pole: 1.2, panel: 0.95 } as const
const ease = [0.16, 1, 0.3, 1] as const

export function CompetitiveScene() {
  const { ref, index } = useLoop(3, 2600)
  const reduce = useReducedMotion()
  const spotted = index >= 1
  const claimed = index === 2

  return (
    <div ref={ref}>
      <IsoStage
        w={W}
        d={W}
        top={4.4}
        peak={[5.4, 0.4]}
        label="Illustration of a district where rival brands hold two blocks, an open block is highlighted as an opportunity, and a new billboard claims it."
      >
        <IsoSlab w={W} d={W} />
        {/* Territories */}
        <IsoTile x={0.2} y={0.2} w={2.8} d={2.8} fill="#d6deea" />
        <IsoTile x={4.8} y={0.2} w={3.0} d={2.8} fill="#dbe7f8" />
        <m.polygon
          points={rectXY(0.2, 4.8, 2.8, 3.0)}
          initial={false}
          animate={{ fill: spotted ? '#c9fbef' : '#f4f7fb' }}
          transition={{ duration: reduce ? 0 : 0.6 }}
        />
        <m.polygon
          points={rectXY(0.35, 4.95, 2.5, 2.7, 0.01)}
          fill="none"
          stroke={ink.mintDeep}
          strokeWidth={1.6}
          strokeDasharray="5 4"
          initial={false}
          animate={{ opacity: spotted && !claimed ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        />

        <IsoTile x={0} y={R.from} w={W} d={R.to - R.from} fill={ink.road} />
        <IsoTile x={R.from} y={0} w={R.to - R.from} d={W} fill={ink.road} />
        <LaneDashes axis="x" lane={3.9} from={0} to={R.from} />
        <LaneDashes axis="x" lane={3.9} from={R.to} to={W} />
        <LaneDashes axis="y" lane={3.9} from={0} to={R.from} />
        <LaneDashes axis="y" lane={3.9} from={R.to} to={W} />
        <HeatSpot at={iso(1.6, 6.2)} r={1.8} show={spotted} />

        {/* Rival A (back) */}
        <Building x={0.4} y={0.4} w={1.6} d={1.6} h={2.4} tone={tone.stone} />
        <Billboard x={3.05} y={0.4} axis="y" len={1.5} pole={1.1} panel={0.85} face="rival" />
        <Billboard x={0.4} y={3.05} axis="x" len={1.5} pole={1.1} panel={0.85} face="rival" />
        {/* Rival B (right) */}
        <Building x={5.4} y={0.4} w={2.0} d={1.6} h={4} windows="grid" />
        <Billboard
          x={5.7}
          y={2.0}
          axis="x"
          len={1.4}
          pole={2.0}
          panel={1.0}
          wall
          digital
          face="idle"
        />
        <Billboard x={5.0} y={3.05} axis="x" len={1.5} pole={1.1} panel={0.85} face="idle" />
        {/* Open block (left) */}
        <Tree x={0.9} y={7.2} s={0.8} />
        <Building
          x={0.5}
          y={5.2}
          w={1.4}
          d={1.2}
          h={1.2}
          floors={1}
          tone={tone.stone}
          roof="none"
        />
        <m.g
          initial={false}
          animate={claimed ? { opacity: 1, y: 0 } : { opacity: 0, y: -14 }}
          transition={{ duration: reduce ? 0 : 0.6, ease }}
        >
          <Billboard {...ours} face="live" selected={claimed} />
        </m.g>
        {/* Front */}
        <Tree x={5.3} y={5.3} s={0.8} />
        <Building
          x={5.8}
          y={5.8}
          w={1.8}
          d={1.8}
          h={1.2}
          floors={1}
          tone={tone.brand}
          windows="ribbon"
          glass="#4a8ad8"
          roof="unit"
        />

        <Pin at={billboardAnchor(ours)} show={spotted} />
      </IsoStage>
    </div>
  )
}
