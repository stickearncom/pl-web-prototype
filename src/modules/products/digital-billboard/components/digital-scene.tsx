import { m, useReducedMotion } from 'motion/react'
import {
  Billboard,
  Building,
  DrivingCar,
  ink,
  IsoSlab,
  IsoStage,
  IsoTile,
  LaneDashes,
  rectXY,
  tone,
  Tree,
  useLoop,
  type AdFace,
} from '@/shared/isometric'

/**
 * Digital billboard: one large screen rotating through ad slots, with a slot indicator
 * on the ground and traffic passing in front. Loops while on screen.
 */
const W = 7
const slots: readonly AdFace[] = ['live', 'live2', 'live3']

export function DigitalScene() {
  const { ref, index } = useLoop(slots.length, 2400, 0)
  const reduce = useReducedMotion()
  return (
    <div ref={ref}>
      <IsoStage
        w={W}
        d={W}
        top={4.6}
        peak={[4.4, 0.4]}
        label="Illustration of a large digital billboard rotating through three ad slots above a busy street."
      >
        <IsoSlab w={W} d={W} />
        <IsoTile x={0} y={4.4} w={W} d={1.6} fill={ink.road} />
        <LaneDashes axis="x" lane={5.2} from={0} to={W} />
        <IsoTile x={0} y={4.22} w={W} d={0.18} fill="#ffffff" />
        <IsoTile x={0.4} y={6.2} w={6.2} d={0.6} fill={ink.grass} />

        {/* Slot indicator: one tile per slot, the live slot glows. */}
        {slots.map((s, i) => (
          <m.polygon
            key={s}
            points={rectXY(2.3 + i * 0.9, 3.35, 0.7, 0.45, 0.01)}
            initial={false}
            animate={{ fill: i === index ? '#00f4cb' : '#d6e2f1' }}
            transition={{ duration: reduce ? 0 : 0.4 }}
          />
        ))}

        <Building x={0.4} y={0.4} w={1.8} d={1.6} h={3.2} tone={tone.stone} />
        <Building x={4.4} y={0.4} w={2.2} d={1.8} h={4.4} windows="grid" roof="unit" />
        <Tree x={2.9} y={0.9} s={0.8} />
        <Billboard
          x={1.2}
          y={2.9}
          axis="x"
          len={4.6}
          pole={1.6}
          panel={2.3}
          digital
          face={slots[index]}
          keep={slots}
        />

        <DrivingCar axis="x" lane={4.8} from={-0.4} to={7.4} duration={6} />
        <DrivingCar
          axis="x"
          lane={5.6}
          from={7.4}
          to={-0.4}
          duration={7}
          delay={2.4}
          body={tone.mintDeep}
        />
        <DrivingCar
          axis="x"
          lane={4.8}
          from={-0.4}
          to={7.4}
          duration={6}
          delay={3.6}
          body={tone.navy}
        />

        <Tree x={1.0} y={6.5} s={0.75} />
        <Tree x={3.6} y={6.5} s={0.7} />
        <Tree x={6.1} y={6.5} s={0.75} />
      </IsoStage>
    </div>
  )
}
