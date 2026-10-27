import { animate, useReducedMotion } from 'motion/react'
import { useEffect, useState } from 'react'
import {
  Billboard,
  billboardFoot,
  Building,
  DrivingCar,
  ink,
  IsoBox,
  IsoSlab,
  IsoStage,
  IsoTile,
  LaneDashes,
  ReachRings,
  tone,
  Tree,
  useLoop,
  type Tone,
} from '@/shared/isometric'

/**
 * Measurement: a live billboard sends out reach rings over passing traffic, while three
 * bars (impressions, reach, frequency) grow beside it. Bars are shape only: no figures.
 */
const W = 8
const board = { x: 1.6, y: 3.0, axis: 'x', len: 3.0, pole: 1.6, panel: 1.5 } as const

const sets = [
  [2.2, 1.6, 0.9],
  [2.8, 2.0, 1.2],
] as const

function GrowBar({
  x,
  y,
  h,
  tone: t,
  delay,
}: {
  x: number
  y: number
  h: number
  tone: Tone
  delay: number
}) {
  const reduce = useReducedMotion()
  const [value, setValue] = useState(reduce ? h : 0.05)
  useEffect(() => {
    if (reduce) return
    const controls = animate(value, h, {
      duration: 1.1,
      delay,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: setValue,
    })
    return () => controls.stop()
    // Animate from wherever the bar currently is to the new target.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [h, delay, reduce])
  return <IsoBox x={x} y={y} w={0.62} d={0.62} h={reduce ? h : value} tone={t} />
}

export function MeasurementScene() {
  const { ref, index } = useLoop(sets.length, 3600)
  const bars = sets[index]!
  return (
    <div ref={ref}>
      <IsoStage
        w={W}
        d={W}
        top={3.6}
        peak={[5.2, 0.6]}
        label="Illustration of a billboard with reach rings spreading over traffic, beside three growing bars for impressions, reach and frequency."
      >
        <IsoSlab w={W} d={W} />
        <IsoTile x={0} y={4.3} w={W} d={1.6} fill={ink.road} />
        <LaneDashes axis="x" lane={5.1} from={0} to={W} />
        <IsoTile x={0} y={4.12} w={W} d={0.18} fill="#ffffff" />
        <IsoTile x={0.4} y={6.3} w={7.2} d={1.3} fill={ink.grass} />

        <ReachRings at={billboardFoot(board)} r={3.4} count={3} />

        <Building x={0.4} y={0.4} w={1.8} d={1.6} h={2.6} tone={tone.stone} roof="unit" />
        <Tree x={2.8} y={1.0} s={0.8} />
        <Billboard {...board} face="live" />

        {/* Bars on a small plinth */}
        <IsoBox x={5.0} y={0.6} w={2.6} d={1.4} h={0.12} tone={tone.stone} />
        <GrowBar x={5.2} y={1.0} h={bars[0]} tone={tone.brand} delay={0} />
        <GrowBar x={6.0} y={1.0} h={bars[1]} tone={tone.mintDeep} delay={0.12} />
        <GrowBar x={6.8} y={1.0} h={bars[2]} tone={tone.navy} delay={0.24} />

        <DrivingCar axis="x" lane={4.7} from={-0.4} to={8.4} duration={7} />
        <DrivingCar
          axis="x"
          lane={5.5}
          from={8.4}
          to={-0.4}
          duration={8}
          delay={2.5}
          body={tone.mintDeep}
        />
        <DrivingCar
          axis="x"
          lane={4.7}
          from={-0.4}
          to={8.4}
          duration={7}
          delay={4.2}
          body={tone.navy}
        />

        <Tree x={1.2} y={6.9} s={0.8} />
        <Tree x={3.6} y={7.0} s={0.7} />
        <Building x={5.0} y={6.5} w={2.4} d={1.1} h={0.9} floors={1} roof="none" />
        <Tree x={4.4} y={6.8} s={0.6} />
      </IsoStage>
    </div>
  )
}
