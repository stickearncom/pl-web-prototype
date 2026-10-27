import { m, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'
import {
  Billboard,
  billboardAnchor,
  Building,
  ink,
  iso,
  IsoBox,
  IsoSlab,
  IsoStage,
  SignalLine,
  tone,
  Tree,
} from '@/shared/isometric'

/**
 * Four small dark-section scenes for the About journey. Each is the same 4 x 4 plot,
 * so the evolution reads as one place changing over time:
 * one billboard → many formats → disconnected data → connected by Playlog.
 */
const W = 4
const small = { len: 1.3, pole: 1.0, panel: 0.8 } as const

function Plot({ children, label }: { children: ReactNode; label: string }) {
  return (
    <IsoStage w={W} d={W} top={2.6} peak={[0.4, 0.4]} pad={14} label={label}>
      <IsoSlab w={W} d={W} dark depth={0.4} />
      {children}
    </IsoStage>
  )
}

function Begins() {
  return (
    <Plot label="One billboard on an empty plot.">
      <Tree x={3.2} y={0.8} s={0.75} />
      <Tree x={0.7} y={3.3} s={0.6} />
      <Billboard x={1.0} y={1.8} axis="x" {...small} len={1.8} face="idle" />
    </Plot>
  )
}

function More() {
  return (
    <Plot label="Many billboards and a digital screen on the same plot.">
      <Building
        x={0.3}
        y={0.3}
        w={1.2}
        d={1.1}
        h={2.0}
        tone={tone.towerDark}
        windows="grid"
        glass="#4a8ad8"
      />
      <Billboard
        x={0.5}
        y={1.4}
        axis="x"
        len={1.0}
        pole={1.4}
        panel={0.6}
        wall
        digital
        face="live2"
      />
      <Billboard x={1.8} y={0.3} axis="y" {...small} face="idle" />
      <Billboard x={2.0} y={1.9} axis="x" {...small} face="rival" />
      <Billboard x={0.3} y={2.9} axis="x" {...small} face="idle" />
    </Plot>
  )
}

const spots = {
  a: { x: 1.8, y: 0.3, axis: 'y', ...small },
  b: { x: 2.0, y: 1.9, axis: 'x', ...small },
  c: { x: 0.3, y: 2.9, axis: 'x', ...small },
} as const

function Complex() {
  const reduce = useReducedMotion()
  const a = billboardAnchor(spots.a)
  const b = billboardAnchor(spots.b)
  const c = billboardAnchor(spots.c)
  return (
    <Plot label="Billboards with data lines that do not connect.">
      <Building
        x={0.3}
        y={0.3}
        w={1.2}
        d={1.1}
        h={2.0}
        tone={tone.towerDark}
        windows="grid"
        glass="#4a8ad8"
      />
      <Billboard {...spots.a} face="idle" />
      <Billboard {...spots.b} face="rival" />
      <Billboard {...spots.c} face="idle" />
      <SignalLine from={[a[0], a[1] - 4]} to={[a[0] + 34, a[1] - 26]} color="#94a1b6" muted />
      <SignalLine from={[b[0], b[1] - 4]} to={[b[0] + 26, b[1] - 34]} color="#94a1b6" muted />
      <SignalLine from={[c[0], c[1] - 4]} to={[c[0] - 30, c[1] - 30]} color="#94a1b6" muted />
      {[
        [a[0] + 34, a[1] - 26],
        [b[0] + 26, b[1] - 34],
        [c[0] - 30, c[1] - 30],
      ].map(([x, y], i) => (
        <m.g
          key={i}
          animate={reduce ? undefined : { opacity: [0.35, 1, 0.35] }}
          transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.5 }}
        >
          <rect
            x={x! - 6}
            y={y! - 6}
            width={12}
            height={12}
            rx={2}
            fill="none"
            stroke="#94a1b6"
            strokeWidth={1.4}
          />
          <text
            x={x}
            y={y! + 3.6}
            textAnchor="middle"
            fontSize={10}
            fontWeight={700}
            fill="#c3ccda"
          >
            ?
          </text>
        </m.g>
      ))}
    </Plot>
  )
}

function Connected() {
  const hub = iso(2.9, 2.9, 1.3)
  const a = billboardAnchor(spots.a)
  const c = billboardAnchor(spots.c)
  const wall = iso(1.0, 1.4, 2.0)
  return (
    <Plot label="Every billboard on the plot connected to one Playlog hub.">
      <Building
        x={0.3}
        y={0.3}
        w={1.2}
        d={1.1}
        h={2.0}
        tone={tone.towerDark}
        windows="grid"
        glass="#4a8ad8"
      />
      <Billboard
        x={0.5}
        y={1.4}
        axis="x"
        len={1.0}
        pole={1.4}
        panel={0.6}
        wall
        digital
        face="live"
      />
      <Billboard {...spots.a} face="live" />
      <Billboard {...spots.c} face="live3" />
      <SignalLine from={hub} to={[a[0], a[1] - 2]} delay={0} />
      <SignalLine from={hub} to={[c[0], c[1] - 2]} delay={0.15} />
      <SignalLine from={hub} to={wall} delay={0.3} />
      {/* Hub: a small mint block, the Playlog node */}
      <IsoBox x={2.6} y={2.6} w={0.6} d={0.6} h={0.9} tone={tone.mint} />
      <IsoBox x={2.72} y={2.72} z={0.9} w={0.36} d={0.36} h={0.3} tone={tone.navy} />
      <circle cx={hub[0]} cy={hub[1]} r={3} fill={ink.mint} />
    </Plot>
  )
}

const scenes = [Begins, More, Complex, Connected] as const

/** Scene for journey stage `index` (0 based). Renders nothing past the fourth stage. */
export function JourneyScene({ index }: { index: number }) {
  const Scene = scenes[index]
  return Scene ? <Scene /> : null
}
