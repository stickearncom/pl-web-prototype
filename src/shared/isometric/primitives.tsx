import { m, useReducedMotion } from 'motion/react'
import { useId, type ReactNode } from 'react'
import { ink, tone as tones, type Tone } from './palette'
import { groundRadii, iso, pts, rectOnX, rectOnY, rectXY, type P2 } from './projection'

const ease = [0.16, 1, 0.3, 1] as const

/* ------------------------------------------------------------------ boxes */

type BoxProps = {
  x: number
  y: number
  z?: number
  w: number
  d: number
  h: number
  tone?: Tone
  children?: ReactNode
}

/** A solid box. Faces are drawn back to front: right (+x), left (+y), top. */
export function IsoBox({ x, y, z = 0, w, d, h, tone = tones.concrete, children }: BoxProps) {
  const t = z + h
  return (
    <g>
      <polygon
        points={rectOnX(x + w, y, y + d, z, t)}
        fill={tone.right}
        stroke={tone.right}
        strokeWidth={0.6}
        strokeLinejoin="round"
      />
      <polygon
        points={rectOnY(y + d, x, x + w, z, t)}
        fill={tone.left}
        stroke={tone.left}
        strokeWidth={0.6}
        strokeLinejoin="round"
      />
      <polygon
        points={rectXY(x, y, w, d, t)}
        fill={tone.top}
        stroke={tone.top}
        strokeWidth={0.6}
        strokeLinejoin="round"
      />
      {children}
    </g>
  )
}

/** A flat ground patch (road, grass, plaza). */
export function IsoTile({
  x,
  y,
  w,
  d,
  z = 0,
  fill,
  stroke,
}: {
  x: number
  y: number
  w: number
  d: number
  z?: number
  fill: string
  stroke?: string
}) {
  return (
    <polygon
      points={rectXY(x, y, w, d, z)}
      fill={fill}
      stroke={stroke ?? fill}
      strokeWidth={stroke ? 1 : 0.6}
      strokeLinejoin="round"
    />
  )
}

/** The floating base every scene stands on: a thin slab with a navy rim. */
export function IsoSlab({
  w,
  d,
  depth = 0.55,
  dark = false,
}: {
  w: number
  d: number
  depth?: number
  dark?: boolean
}) {
  const shadow = groundRadii(Math.max(w, d) * 0.62)
  const [cx, cy] = iso(w / 2, d / 2, -depth)
  return (
    <g>
      <ellipse
        cx={cx}
        cy={cy + 14}
        rx={shadow.rx * 0.82}
        ry={shadow.ry * 0.7}
        fill={ink.shadow}
        opacity={0.05}
      />
      <IsoBox
        x={0}
        y={0}
        z={-depth}
        w={w}
        d={d}
        h={depth - 0.12}
        tone={dark ? tones.slabDarkEdge : tones.slabEdge}
      />
      <IsoBox
        x={0}
        y={0}
        z={-0.12}
        w={w}
        d={d}
        h={0.12}
        tone={dark ? tones.slabDark : tones.slab}
      />
    </g>
  )
}

/* -------------------------------------------------------------- buildings */

type BuildingProps = {
  x: number
  y: number
  w: number
  d: number
  h: number
  floors?: number
  tone?: Tone
  windows?: 'ribbon' | 'grid' | 'none'
  glass?: string
  roof?: 'parapet' | 'unit' | 'none'
}

/** Mid century office block: ribbon or grid windows on both visible faces, optional roof detail. */
export function Building({
  x,
  y,
  w,
  d,
  h,
  floors = Math.max(1, Math.round(h / 0.9)),
  tone = tones.concrete,
  windows = 'ribbon',
  glass = ink.glass,
  roof = 'parapet',
}: BuildingProps) {
  const f = h / floors
  const inset = 0.16
  const bands = windows === 'none' ? [] : Array.from({ length: floors }, (_, i) => i * f)

  const columns = (len: number) => Math.max(2, Math.round(len / 0.55))

  return (
    <g>
      <IsoBox x={x} y={y} w={w} d={d} h={h} tone={tone} />
      {bands.map((z0) => {
        const a = z0 + f * 0.32
        const b = z0 + f * 0.74
        if (windows === 'ribbon') {
          return (
            <g key={z0}>
              <polygon
                points={rectOnY(y + d + 0.001, x + inset, x + w - inset, a, b)}
                fill={glass}
              />
              <polygon
                points={rectOnX(x + w + 0.001, y + inset, y + d - inset, a, b)}
                fill={glass}
                opacity={0.82}
              />
            </g>
          )
        }
        const cx = columns(w)
        const cy = columns(d)
        const sx = (w - inset * 2) / cx
        const sy = (d - inset * 2) / cy
        return (
          <g key={z0}>
            {Array.from({ length: cx }, (_, i) => (
              <polygon
                key={`l${i}`}
                points={rectOnY(
                  y + d + 0.001,
                  x + inset + i * sx + sx * 0.18,
                  x + inset + (i + 1) * sx - sx * 0.18,
                  a,
                  b,
                )}
                fill={glass}
              />
            ))}
            {Array.from({ length: cy }, (_, i) => (
              <polygon
                key={`r${i}`}
                points={rectOnX(
                  x + w + 0.001,
                  y + inset + i * sy + sy * 0.18,
                  y + inset + (i + 1) * sy - sy * 0.18,
                  a,
                  b,
                )}
                fill={glass}
                opacity={0.82}
              />
            ))}
          </g>
        )
      })}
      {roof !== 'none' && (
        <polygon
          points={rectXY(x + 0.14, y + 0.14, w - 0.28, d - 0.28, h)}
          fill={tone.left}
          opacity={0.45}
        />
      )}
      {roof === 'unit' && (
        <IsoBox
          x={x + w * 0.22}
          y={y + d * 0.22}
          z={h}
          w={Math.min(0.7, w * 0.3)}
          d={Math.min(0.5, d * 0.3)}
          h={0.32}
          tone={tones.stone}
        />
      )}
    </g>
  )
}

/* -------------------------------------------------------------- billboards */

export type AdFace = 'blank' | 'idle' | 'live' | 'live2' | 'live3' | 'empty' | 'rival'

export type BillboardProps = {
  /** Left end of the panel (the screen-left end). */
  x: number
  y: number
  /** 'x' panel faces +y (reads on the left face); 'y' panel faces +x (reads on the right face). */
  axis: 'x' | 'y'
  len?: number
  pole?: number
  panel?: number
  face?: AdFace
  /** Mint outline that marks a billboard as selected. */
  selected?: boolean
  /** Digital screens have a slimmer navy bezel and a soft glow when live. */
  digital?: boolean
  /** Wall mounted: no pole, panel starts at z = pole. */
  wall?: boolean
  /** Faces to keep mounted so changes between them crossfade. */
  keep?: readonly AdFace[]
}

/**
 * Maps (u, v) in 0..1 on the ad face to world space. u runs left to right on screen, v bottom to top.
 */
function faceMapper(axis: 'x' | 'y', x: number, y: number, len: number, z0: number, panel: number) {
  return (u0: number, u1: number, v0: number, v1: number) => {
    const za = z0 + v0 * panel
    const zb = z0 + v1 * panel
    if (axis === 'x') return rectOnY(y + 0.002, x + u0 * len, x + u1 * len, za, zb)
    return rectOnX(x + 0.002, y + len - u1 * len, y + len - u0 * len, za, zb)
  }
}

const FACE_KEYS: readonly AdFace[] = ['empty', 'blank', 'idle', 'rival', 'live', 'live2', 'live3']

type Inner = (u0: number, u1: number, v0: number, v1: number) => string

/** Abstract ad creatives: colour blocks and text bars only, never real brands. */
function renderFace(k: AdFace, inner: Inner, digital: boolean) {
  switch (k) {
    case 'empty':
      return (
        <>
          <polygon points={inner(0, 1, 0, 1)} fill="#eef2f7" />
          <polygon
            points={inner(0.08, 0.92, 0.12, 0.88)}
            fill="none"
            stroke={ink.muted}
            strokeWidth={1}
            strokeDasharray="3 3"
          />
        </>
      )
    case 'blank':
      return <polygon points={inner(0, 1, 0, 1)} fill="#e1e6ee" />
    case 'idle':
      return (
        <>
          <polygon points={inner(0, 1, 0, 1)} fill="#ffffff" />
          <polygon points={inner(0, 0.42, 0, 1)} fill="#b7d3ff" />
          <polygon points={inner(0.52, 0.92, 0.6, 0.74)} fill="#86b5f5" />
          <polygon points={inner(0.52, 0.8, 0.38, 0.48)} fill="#c3ccda" />
          <polygon points={inner(0.52, 0.72, 0.18, 0.28)} fill="#c3ccda" />
        </>
      )
    case 'rival':
      return (
        <>
          <polygon points={inner(0, 1, 0, 1)} fill="#4a5a75" />
          <polygon points={inner(0.6, 1, 0, 1)} fill="#94a1b6" />
          <polygon points={inner(0.1, 0.5, 0.58, 0.74)} fill="#ffffff" />
          <polygon points={inner(0.1, 0.38, 0.32, 0.44)} fill="#c3ccda" />
        </>
      )
    case 'live':
      return (
        <>
          <polygon points={inner(0, 1, 0, 1)} fill={digital ? '#003f85' : '#004fa4'} />
          <polygon points={inner(0, 0.38, 0, 1)} fill={ink.mint} />
          <polygon points={inner(0.1, 0.28, 0.3, 0.7)} fill="#00244c" />
          <polygon points={inner(0.48, 0.9, 0.6, 0.76)} fill="#ffffff" />
          <polygon points={inner(0.48, 0.78, 0.38, 0.48)} fill="#b7d3ff" />
          <polygon points={inner(0.48, 0.66, 0.16, 0.28)} fill={ink.mint} />
        </>
      )
    case 'live2':
      return (
        <>
          <polygon points={inner(0, 1, 0, 1)} fill={ink.mint} />
          <polygon points={inner(0.56, 1, 0, 1)} fill="#00244c" />
          <polygon points={inner(0.66, 0.9, 0.3, 0.7)} fill={ink.mint} />
          <polygon points={inner(0.08, 0.46, 0.6, 0.76)} fill="#00244c" />
          <polygon points={inner(0.08, 0.34, 0.36, 0.48)} fill="#004fa4" />
        </>
      )
    case 'live3':
      return (
        <>
          <polygon points={inner(0, 1, 0, 1)} fill="#ffffff" />
          <polygon points={inner(0, 1, 0, 0.3)} fill="#004fa4" />
          <polygon points={inner(0.12, 0.88, 0.52, 0.7)} fill="#00244c" />
          <polygon points={inner(0.3, 0.7, 0.38, 0.46)} fill="#86b5f5" />
          <polygon points={inner(0.38, 0.62, 0.09, 0.2)} fill={ink.mint} />
        </>
      )
  }
}

export function Billboard({
  x,
  y,
  axis,
  len = 2.4,
  pole = 1.7,
  panel = 1.25,
  face = 'idle',
  selected = false,
  digital = false,
  wall = false,
  keep,
}: BillboardProps) {
  const reduce = useReducedMotion()
  const t = 0.16
  const z0 = pole
  const rect = faceMapper(axis, x, y, len, z0, panel)
  const bezel = digital ? 0.05 : 0.07
  const inner = (u0: number, u1: number, v0: number, v1: number) =>
    rect(
      bezel + u0 * (1 - 2 * bezel),
      bezel + u1 * (1 - 2 * bezel),
      bezel + v0 * (1 - 2 * bezel),
      bezel + v1 * (1 - 2 * bezel),
    )

  const mid = len / 2
  const poleBox =
    axis === 'x'
      ? { x: x + mid - 0.09, y: y - t - 0.04, w: 0.18, d: 0.18 }
      : { x: x - t - 0.04, y: y + mid - 0.09, w: 0.18, d: 0.18 }
  const panelBox = axis === 'x' ? { x, y: y - t, w: len, d: t } : { x: x - t, y, w: t, d: len }

  const mounted = keep ?? []
  const show = (k: AdFace) => ({
    initial: false as const,
    animate: { opacity: face === k ? 1 : 0 },
    transition: { duration: reduce ? 0 : 0.6, ease },
  })

  return (
    <g>
      {!wall && (
        <>
          <IsoBox {...poleBox} h={pole} tone={tones.pole} />
          <IsoBox
            x={poleBox.x - (axis === 'y' ? 0.04 : 0.12)}
            y={poleBox.y - (axis === 'x' ? 0.04 : 0.12)}
            w={poleBox.w + (axis === 'y' ? 0.08 : 0.24)}
            d={poleBox.d + (axis === 'x' ? 0.08 : 0.24)}
            h={0.1}
            tone={tones.stone}
          />
        </>
      )}
      <IsoBox {...panelBox} z={z0} h={panel} tone={tones.frame} />

      {/* Ad faces crossfade when `face` changes. Only faces in use are mounted. */}
      {FACE_KEYS.filter((k) => k === face || mounted.includes(k)).map((k) => (
        <m.g key={k} {...show(k)}>
          {renderFace(k, inner, digital)}
        </m.g>
      ))}

      {/* Selection: a mint frame that breathes. */}
      <m.polygon
        points={rect(-0.03, 1.03, -0.06, 1.06)}
        fill="none"
        stroke={ink.mint}
        strokeWidth={2.4}
        strokeLinejoin="round"
        initial={false}
        animate={
          selected
            ? reduce
              ? { opacity: 1 }
              : {
                  opacity: [0.55, 1, 0.55],
                  transition: { duration: 2.4, repeat: Infinity, ease: 'easeInOut' },
                }
            : { opacity: 0, transition: { duration: 0.4 } }
        }
      />
    </g>
  )
}

/* ------------------------------------------------------------------ nature */

export function Tree({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  // A low poly cone: two faces split down the middle, lit from the left like every box.
  const r = 0.38 * s
  const trunk = 0.28 * s
  const top = trunk + 1.15 * s
  const [gx, gy] = iso(x, y)
  const shadow = groundRadii(r * 1.05)
  const L = iso(x - r, y + r, trunk) // screen-left rim
  const R = iso(x + r, y - r, trunk) // screen-right rim
  const F = iso(x + r, y + r, trunk) // front rim
  const T = iso(x, y, top)
  const mid = iso(x, y, trunk + 0.55 * s)
  const Lm = iso(x - r * 0.62, y + r * 0.62, trunk + 0.55 * s)
  const Rm = iso(x + r * 0.62, y - r * 0.62, trunk + 0.55 * s)
  return (
    <g>
      <ellipse cx={gx} cy={gy} rx={shadow.rx} ry={shadow.ry} fill={ink.shadow} opacity={0.07} />
      <IsoBox x={x - 0.05} y={y - 0.05} w={0.1} d={0.1} h={trunk + 0.1} tone={tones.pole} />
      <polygon points={pts([L, F, T])} fill="#7fe3cd" />
      <polygon points={pts([F, R, T])} fill="#3fcfb1" />
      <polygon points={pts([Lm, mid, T])} fill="#a6eedd" opacity={0.7} />
      <polyline
        points={pts([Lm, mid, Rm])}
        fill="none"
        stroke="#ffffff"
        strokeOpacity={0.35}
        strokeWidth={1}
      />
    </g>
  )
}

/* --------------------------------------------------------------- vehicles */

/** A small car at the origin. Position it with a translating parent. */
export function Car({ axis, body = tones.brand }: { axis: 'x' | 'y'; body?: Tone }) {
  const [w, d] = axis === 'x' ? [0.9, 0.46] : [0.46, 0.9]
  const [cw, cd] = axis === 'x' ? [0.48, 0.4] : [0.4, 0.48]
  const off = axis === 'x' ? { x: 0.2, y: 0.03 } : { x: 0.03, y: 0.2 }
  return (
    <g>
      <IsoBox x={-w / 2} y={-d / 2} z={0.06} w={w} d={d} h={0.24} tone={body} />
      <IsoBox
        x={-w / 2 + off.x}
        y={-d / 2 + off.y}
        z={0.3}
        w={cw}
        d={cd}
        h={0.2}
        tone={tones.concrete}
      />
    </g>
  )
}

/** Drives a car along one axis between two tile positions, looping. Static when motion is reduced. */
export function DrivingCar({
  axis,
  lane,
  from,
  to,
  duration = 9,
  delay = 0,
  body,
}: {
  axis: 'x' | 'y'
  /** Fixed coordinate on the other axis. */
  lane: number
  from: number
  to: number
  duration?: number
  delay?: number
  body?: Tone
}) {
  const reduce = useReducedMotion()
  const a = axis === 'x' ? iso(from, lane) : iso(lane, from)
  const b = axis === 'x' ? iso(to, lane) : iso(lane, to)
  if (reduce) {
    const [mx, my] = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2]
    return (
      <g transform={`translate(${mx} ${my})`}>
        <Car axis={axis} body={body} />
      </g>
    )
  }
  return (
    <m.g
      initial={{ x: a[0], y: a[1], opacity: 0 }}
      animate={{ x: [a[0], b[0]], y: [a[1], b[1]], opacity: [0, 1, 1, 0] }}
      transition={{
        x: { duration, delay, repeat: Infinity, ease: 'linear' },
        y: { duration, delay, repeat: Infinity, ease: 'linear' },
        opacity: { duration, delay, repeat: Infinity, times: [0, 0.08, 0.9, 1], ease: 'linear' },
      }}
    >
      <Car axis={axis} body={body} />
    </m.g>
  )
}

/* ---------------------------------------------------------------- overlays */

/** Map pin whose tip touches `at`. */
export function Pin({ at, show = true, delay = 0 }: { at: P2; show?: boolean; delay?: number }) {
  const reduce = useReducedMotion()
  return (
    <g transform={`translate(${at[0]} ${at[1] - 4})`}>
      <m.g
        initial={false}
        animate={show ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: -10, scale: 0.6 }}
        transition={{ duration: reduce ? 0 : 0.55, delay: show ? delay : 0, ease }}
        style={{ transformOrigin: '50% 100%' }}
      >
        <m.g
          animate={show && !reduce ? { y: [0, -3, 0] } : { y: 0 }}
          transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut', delay }}
        >
          <ellipse cx={0} cy={2} rx={4} ry={1.6} fill="#00244c" opacity={0.18} />
          <path
            d="M0 0 C -4 -7 -11 -12 -11 -20 A 11 11 0 1 1 11 -20 C 11 -12 4 -7 0 0 Z"
            fill="#00244c"
          />
          <circle cx={0} cy={-20} r={5.2} fill={ink.mint} />
        </m.g>
      </m.g>
    </g>
  )
}

/** Round mint badge with a check, used for "verified". Sits 16px above `at`. */
export function CheckBadge({
  at,
  show = true,
  delay = 0,
}: {
  at: P2
  show?: boolean
  delay?: number
}) {
  const reduce = useReducedMotion()
  return (
    <g transform={`translate(${at[0]} ${at[1] - 16})`}>
      <m.g
        initial={false}
        animate={show ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.4 }}
        transition={{ duration: reduce ? 0 : 0.5, delay: show ? delay : 0, ease }}
      >
        <circle r={11} fill="#ffffff" />
        <circle r={9} fill={ink.mint} />
        <path
          d="M-4.2 0 l2.9 3 l5.6 -6"
          fill="none"
          stroke="#00244c"
          strokeWidth={2.2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </m.g>
    </g>
  )
}

/** Expanding reach rings on the ground. */
export function ReachRings({
  at,
  r = 3,
  show = true,
  count = 3,
  delay = 0,
}: {
  at: P2
  r?: number
  show?: boolean
  count?: number
  delay?: number
}) {
  const reduce = useReducedMotion()
  const { rx, ry } = groundRadii(r)
  const [cx, cy] = at
  return (
    <m.g initial={false} animate={{ opacity: show ? 1 : 0 }} transition={{ duration: 0.5 }}>
      <ellipse cx={cx} cy={cy} rx={rx * 0.62} ry={ry * 0.62} fill={ink.mint} opacity={0.14} />
      {Array.from({ length: count }, (_, i) =>
        reduce ? (
          <ellipse
            key={i}
            cx={cx}
            cy={cy}
            rx={rx * ((i + 1) / count)}
            ry={ry * ((i + 1) / count)}
            fill="none"
            stroke={ink.mintDeep}
            strokeWidth={1.4}
            opacity={0.6}
          />
        ) : (
          <m.ellipse
            key={i}
            cx={cx}
            cy={cy}
            rx={rx}
            ry={ry}
            fill="none"
            stroke={ink.mintDeep}
            strokeWidth={1.6}
            initial={{ scale: 0.15, opacity: 0 }}
            animate={
              show ? { scale: [0.15, 1], opacity: [0, 0.9, 0] } : { scale: 0.15, opacity: 0 }
            }
            transition={
              show
                ? {
                    duration: 3.2,
                    delay: delay + (i * 3.2) / count,
                    repeat: Infinity,
                    ease: 'easeOut',
                  }
                : { duration: 0.3 }
            }
          />
        ),
      )}
    </m.g>
  )
}

/** Soft heat spot on the ground, for audience density. */
export function HeatSpot({
  at,
  r = 2,
  show = true,
  strength = 1,
}: {
  at: P2
  r?: number
  show?: boolean
  strength?: number
}) {
  const id = useId()
  const { rx, ry } = groundRadii(r)
  return (
    <m.g initial={false} animate={{ opacity: show ? strength : 0 }} transition={{ duration: 0.7 }}>
      <defs>
        <radialGradient id={id}>
          <stop offset="0%" stopColor="#00f4cb" stopOpacity={0.75} />
          <stop offset="55%" stopColor="#00f4cb" stopOpacity={0.28} />
          <stop offset="100%" stopColor="#00f4cb" stopOpacity={0} />
        </radialGradient>
      </defs>
      <ellipse cx={at[0]} cy={at[1]} rx={rx} ry={ry} fill={`url(#${id})`} />
    </m.g>
  )
}

/** Animated dashes along a ground path, for traffic flow. */
export function FlowLine({
  path,
  show = true,
  speed = 1,
  color = ink.mintDeep,
}: {
  path: readonly P2[]
  show?: boolean
  speed?: number
  color?: string
}) {
  const reduce = useReducedMotion()
  const d = `M${pts(path).replaceAll(' ', ' L')}`
  return (
    <m.path
      d={d}
      fill="none"
      stroke={color}
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeDasharray="2 9"
      initial={false}
      animate={
        show
          ? reduce
            ? { opacity: 0.9 }
            : { opacity: 0.9, strokeDashoffset: [0, -22 * 4] }
          : { opacity: 0 }
      }
      transition={
        show && !reduce
          ? {
              opacity: { duration: 0.5 },
              strokeDashoffset: { duration: 2.4 / speed, repeat: Infinity, ease: 'linear' },
            }
          : { duration: 0.4 }
      }
    />
  )
}

/** Lane markings for a straight road segment. */
export function LaneDashes({
  axis,
  lane,
  from,
  to,
}: {
  axis: 'x' | 'y'
  lane: number
  from: number
  to: number
}) {
  const out: ReactNode[] = []
  for (let p = from + 0.25; p < to - 0.4; p += 0.9) {
    out.push(
      <polygon
        key={p}
        points={
          axis === 'x' ? rectXY(p, lane - 0.04, 0.45, 0.08) : rectXY(lane - 0.04, p, 0.08, 0.45)
        }
        fill={ink.lane}
      />,
    )
  }
  return <g>{out}</g>
}

/** A link between two screen points: a soft base line plus travelling dashes. */
export function SignalLine({
  from,
  to,
  show = true,
  color = ink.mint,
  muted = false,
  delay = 0,
}: {
  from: P2
  to: P2
  show?: boolean
  color?: string
  /** Muted lines are static and dashed: data that does not connect. */
  muted?: boolean
  delay?: number
}) {
  const reduce = useReducedMotion()
  const d = `M${from[0]} ${from[1]} L${to[0]} ${to[1]}`
  if (muted) {
    return (
      <m.path
        d={d}
        fill="none"
        stroke={color}
        strokeWidth={1.4}
        strokeDasharray="3 4"
        initial={false}
        animate={{ opacity: show ? 0.7 : 0 }}
      />
    )
  }
  return (
    <m.g
      initial={false}
      animate={{ opacity: show ? 1 : 0 }}
      transition={{ duration: 0.5, delay: show ? delay : 0 }}
    >
      <path
        d={d}
        fill="none"
        stroke={color}
        strokeOpacity={0.3}
        strokeWidth={2}
        strokeLinecap="round"
      />
      <m.path
        d={d}
        fill="none"
        stroke={color}
        strokeWidth={2.2}
        strokeLinecap="round"
        strokeDasharray="4 14"
        animate={reduce || !show ? undefined : { strokeDashoffset: [0, -36] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: 'linear' }}
      />
    </m.g>
  )
}
