import { m, useReducedMotion } from 'motion/react'
import {
  Billboard,
  billboardAnchor,
  Building,
  CheckBadge,
  DrivingCar,
  ink,
  iso,
  IsoBox,
  IsoSlab,
  IsoStage,
  IsoTile,
  LaneDashes,
  TILE,
  tone,
  Tree,
  useLoop,
} from '@/shared/isometric'

/**
 * Static billboard: a lift rises, the new creative goes up, then the site is verified
 * with a proof photo. Loops while on screen; reduced motion shows the verified state.
 */
const W = 7
const board = { x: 0.7, y: 3.0, axis: 'x', len: 3.8, pole: 1.7, panel: 1.9 } as const
const ease = [0.16, 1, 0.3, 1] as const

export function BillboardScene() {
  const { ref, index } = useLoop(3, 2600)
  const reduce = useReducedMotion()
  const lifted = index === 1
  const verified = index === 2
  const top = billboardAnchor(board)
  const lift = { x: 3.3, y: 3.4 }
  const rise = (lifted ? 1.25 : 0) * TILE

  return (
    <div ref={ref}>
      <IsoStage
        w={W}
        d={W}
        top={4}
        peak={[4.6, 0.4]}
        label="Illustration of a static billboard being installed with a lift, then verified with a proof photo."
      >
        <IsoSlab w={W} d={W} />
        <IsoTile x={0} y={4.6} w={W} d={1.5} fill={ink.road} />
        <LaneDashes axis="x" lane={5.35} from={0} to={W} />
        <IsoTile x={0} y={4.42} w={W} d={0.18} fill="#ffffff" />
        <IsoTile x={0.4} y={6.3} w={6.2} d={0.5} fill={ink.grass} />

        <Building x={0.4} y={0.4} w={1.8} d={1.5} h={2.2} roof="unit" />
        <Building
          x={5.0}
          y={0.5}
          w={1.6}
          d={2.2}
          h={3.4}
          tone={tone.brand}
          windows="grid"
          glass="#4a8ad8"
        />
        <Tree x={3.0} y={1.0} s={0.85} />
        <Tree x={5.7} y={3.5} s={0.75} />

        <Billboard {...board} face={index === 0 ? 'blank' : 'live'} keep={['blank', 'live']} />

        {/* Scissor lift: base, mast, and a platform that rises in front of the panel. */}
        <IsoBox x={lift.x} y={lift.y} w={1.0} d={0.7} h={0.3} tone={tone.navy} />
        <IsoBox
          x={lift.x + 0.44}
          y={lift.y + 0.25}
          z={0.3}
          w={0.12}
          d={0.12}
          h={0.9}
          tone={tone.pole}
        />
        <m.g initial={false} animate={{ y: -rise }} transition={{ duration: reduce ? 0 : 1, ease }}>
          <IsoBox
            x={lift.x + 0.44}
            y={lift.y + 0.25}
            z={0.3}
            w={0.12}
            d={0.12}
            h={0.9}
            tone={tone.pole}
          />
          <IsoBox
            x={lift.x - 0.05}
            y={lift.y - 0.05}
            z={1.2}
            w={1.1}
            d={0.8}
            h={0.12}
            tone={tone.mintDeep}
          />
          <IsoBox
            x={lift.x + 0.2}
            y={lift.y + 0.2}
            z={1.32}
            w={0.24}
            d={0.24}
            h={0.5}
            tone={tone.brand}
          />
          <circle
            cx={iso(lift.x + 0.32, lift.y + 0.32, 2.0)[0]}
            cy={iso(lift.x + 0.32, lift.y + 0.32, 2.0)[1]}
            r={3.6}
            fill={ink.navy}
          />
        </m.g>

        <DrivingCar axis="x" lane={5.0} from={-0.4} to={7.4} duration={6.5} />
        <DrivingCar
          axis="x"
          lane={5.7}
          from={7.4}
          to={-0.4}
          duration={7.5}
          delay={3}
          body={tone.mintDeep}
        />
        <Tree x={1.1} y={6.55} s={0.7} />
        <Tree x={5.9} y={6.55} s={0.75} />

        <CheckBadge at={[top[0], top[1] + 4]} show={verified} />

        {/* Proof photo */}
        <m.g
          initial={false}
          animate={verified ? { opacity: 1, y: 0, rotate: -6 } : { opacity: 0, y: 10, rotate: 0 }}
          transition={{ duration: reduce ? 0 : 0.6, delay: verified ? 0.25 : 0, ease }}
        >
          <g transform={`translate(${top[0] - 150} ${top[1] - 30})`}>
            <rect x={-1} y={1} width={70} height={58} rx={4} fill="#00244c" opacity={0.12} />
            <rect x={0} y={0} width={68} height={56} rx={4} fill="#ffffff" />
            <rect x={5} y={5} width={58} height={36} rx={2} fill="#d9e8ff" />
            <rect x={14} y={12} width={40} height={17} fill="#004fa4" />
            <rect x={14} y={12} width={14} height={17} fill="#00f4cb" />
            <rect x={33} y={29} width={2.4} height={10} fill="#6b7a93" />
            <rect x={5} y={46} width={30} height={3.4} rx={1.7} fill="#c3ccda" />
            <circle cx={58} cy={48} r={3.4} fill="#00f4cb" />
          </g>
        </m.g>
      </IsoStage>
    </div>
  )
}
