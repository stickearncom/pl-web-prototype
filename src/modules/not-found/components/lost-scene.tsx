import { m, useReducedMotion } from 'motion/react'
import {
  Billboard,
  billboardAnchor,
  DrivingCar,
  ink,
  IsoBox,
  IsoSlab,
  IsoStage,
  IsoTile,
  LaneDashes,
  tone,
  Tree,
} from '@/shared/isometric'

/** 404: an empty billboard on a quiet road, with a pin that cannot decide where to land. */
const W = 6
const board = { x: 1.0, y: 2.4, axis: 'x', len: 3.4, pole: 1.5, panel: 1.6 } as const

function Cone({ x, y }: { x: number; y: number }) {
  return (
    <g>
      <IsoBox x={x - 0.2} y={y - 0.2} w={0.4} d={0.4} h={0.06} tone={tone.navy} />
      <IsoBox x={x - 0.1} y={y - 0.1} z={0.06} w={0.2} d={0.2} h={0.42} tone={tone.mint} />
      <IsoBox x={x - 0.1} y={y - 0.1} z={0.22} w={0.2} d={0.2} h={0.08} tone={tone.concrete} />
    </g>
  )
}

export function LostScene() {
  const reduce = useReducedMotion()
  const top = billboardAnchor(board)
  return (
    <IsoStage
      w={W}
      d={W}
      top={3.4}
      peak={[1, 2.2]}
      label="Illustration of an empty billboard on a quiet road."
    >
      <IsoSlab w={W} d={W} />
      <IsoTile x={0} y={3.6} w={W} d={1.4} fill={ink.road} />
      <LaneDashes axis="x" lane={4.3} from={0} to={W} />
      <IsoTile x={0} y={3.42} w={W} d={0.18} fill="#ffffff" />
      <IsoTile x={0.4} y={5.2} w={5.2} d={0.5} fill={ink.grass} />
      <Tree x={4.9} y={0.8} s={0.9} />
      <Tree x={0.6} y={0.7} s={0.7} />
      <Billboard {...board} face="empty" />
      <Cone x={4.0} y={3.1} />
      <Cone x={4.6} y={3.2} />
      <DrivingCar axis="x" lane={4.0} from={-0.4} to={6.4} duration={6} />
      <Tree x={1.2} y={5.45} s={0.7} />
      <Tree x={4.6} y={5.45} s={0.65} />

      {/* A pin drifting above the board, unsure where to land */}
      <g transform={`translate(${top[0]} ${top[1] - 30})`}>
        <m.g
          animate={reduce ? undefined : { x: [-26, 22, -26], y: [0, -6, 0], rotate: [-8, 8, -8] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <path
            d="M0 0 C -4 -7 -11 -12 -11 -20 A 11 11 0 1 1 11 -20 C 11 -12 4 -7 0 0 Z"
            fill="#00244c"
          />
          <text x={0} y={-16.4} textAnchor="middle" fontSize={12} fontWeight={700} fill="#00f4cb">
            ?
          </text>
        </m.g>
      </g>
    </IsoStage>
  )
}
