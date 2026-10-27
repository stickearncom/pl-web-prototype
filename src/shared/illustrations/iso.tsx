import type { ReactNode } from 'react'
import { c } from './palette'
import type { Pt } from './geometry'

/**
 * Playlog's mark is a block extruded toward the lower left (see the logo).
 * Every illustration object uses the same projection: a front face plus side faces
 * swept along DEPTH_DIR. That keeps scenes consistent with the brand without WebGL.
 */
const DEPTH_DIR: Pt = [-1, 1]

const toPoints = (pts: readonly Pt[]) =>
  pts.map(([x, y]) => `${x.toFixed(2)},${y.toFixed(2)}`).join(' ')

type ExtrudeProps = {
  points: readonly Pt[]
  depth?: number
  front?: string
  sideLeft?: string
  sideBottom?: string
  stroke?: string
  strokeWidth?: number
  /** Single side tone, for curved shapes. */
  uniform?: boolean
  anim?: 'rise' | 'pop' | 'slide' | 'fade'
  children?: ReactNode
}

export function Extrude({
  points,
  depth = 12,
  front = c.blue,
  sideLeft = c.mint,
  sideBottom,
  stroke,
  strokeWidth = 1,
  uniform = false,
  anim,
  children,
}: ExtrudeProps) {
  const n = points.length
  let area = 0
  points.forEach((p, i) => {
    const q = points[(i + 1) % n]!
    area += p[0] * q[1] - q[0] * p[1]
  })
  const sign = area >= 0 ? 1 : -1
  const dx = DEPTH_DIR[0] * depth
  const dy = DEPTH_DIR[1] * depth
  const bottomTone = sideBottom ?? sideLeft

  const faces = points.flatMap((a, i) => {
    const b = points[(i + 1) % n]!
    const ex = b[0] - a[0]
    const ey = b[1] - a[1]
    const nx = ey * sign
    const ny = -ex * sign
    if (nx * dx + ny * dy <= 0) return []
    const tone = uniform || Math.abs(nx) > Math.abs(ny) ? sideLeft : bottomTone
    return [{ key: i, tone, d: toPoints([a, b, [b[0] + dx, b[1] + dy], [a[0] + dx, a[1] + dy]]) }]
  })

  return (
    <g data-anim={anim}>
      {faces.map((f) => (
        <polygon
          key={f.key}
          points={f.d}
          fill={f.tone}
          stroke={f.tone}
          strokeWidth={0.7}
          strokeLinejoin="round"
        />
      ))}
      <polygon
        points={toPoints(points)}
        fill={front}
        stroke={stroke ?? front}
        strokeWidth={stroke ? strokeWidth : 0.7}
        strokeLinejoin="round"
      />
      {children}
    </g>
  )
}

/** The Playlog mark: an L shaped block with a mint side face. Width is `size`. */
export function LogoMark({
  x,
  y,
  size,
  front = c.white,
  side = c.mint,
  anim,
}: {
  x: number
  y: number
  size: number
  front?: string
  side?: string
  anim?: 'rise' | 'pop' | 'slide' | 'fade'
}) {
  const s = size
  const pts: Pt[] = [
    [x, y],
    [x + s, y],
    [x + s, y + s * 0.9965],
    [x + s * 0.507, y + s * 0.9965],
    [x + s * 0.507, y + s * 1.5],
    [x, y + s * 1.5],
  ]
  return <Extrude points={pts} depth={s * 0.49} front={front} sideLeft={side} anim={anim} />
}
