import { useId, type ReactNode } from 'react'
import { rect, rrect, type Pt } from './geometry'
import { Extrude, LogoMark } from './iso'
import { c } from './palette'

type Anim = 'rise' | 'pop' | 'slide' | 'fade'

/* ---------- Text and small shapes ---------- */

export function Label({
  x,
  y,
  children,
  size = 12,
  fill = c.ink,
  weight = 650,
  anchor = 'start',
  opacity = 1,
}: {
  x: number
  y: number
  children: ReactNode
  size?: number
  fill?: string
  weight?: number
  anchor?: 'start' | 'middle' | 'end'
  opacity?: number
}) {
  return (
    <text
      x={x}
      y={y}
      fontSize={size}
      fontWeight={weight}
      fill={fill}
      textAnchor={anchor}
      opacity={opacity}
      style={{ fontFamily: 'var(--font-sans)', letterSpacing: '-0.01em' }}
    >
      {children}
    </text>
  )
}

/** Placeholder text lines. */
export function Lines({
  x,
  y,
  widths,
  h = 6,
  gap = 9,
  fill = c.sky200,
}: {
  x: number
  y: number
  widths: number[]
  h?: number
  gap?: number
  fill?: string
}) {
  return (
    <g>
      {widths.map((w, i) => (
        <rect key={i} x={x} y={y + i * (h + gap)} width={w} height={h} rx={h / 2} fill={fill} />
      ))}
    </g>
  )
}

export function Chip({
  x,
  y,
  w,
  label,
  fill = c.sky100,
  color = c.blue,
  h = 24,
  size = 11,
}: {
  x: number
  y: number
  w: number
  label: string
  fill?: string
  color?: string
  h?: number
  size?: number
}) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={h / 2} fill={fill} />
      <Label x={x + w / 2} y={y + h / 2 + size * 0.35} size={size} fill={color} anchor="middle">
        {label}
      </Label>
    </g>
  )
}

/* ---------- Objects ---------- */

const billboardTones = {
  blue: { front: c.blue, mark: c.white, markSide: c.mint, line: c.white, accent: c.mint },
  navy: { front: c.blueDeep, mark: c.white, markSide: c.mint, line: c.sky300, accent: c.mint },
  white: { front: c.white, mark: c.blue, markSide: c.mint, line: c.sky300, accent: c.blue },
  mint: {
    front: c.mint,
    mark: c.blueDeep,
    markSide: c.white,
    line: c.blueDeep,
    accent: c.blueDeep,
  },
} as const
export type BillboardTone = keyof typeof billboardTones

export function Billboard({
  x,
  y,
  w,
  h,
  tone = 'blue',
  postH = 90,
  depth = 16,
  anim = 'pop',
}: {
  x: number
  y: number
  w: number
  h: number
  tone?: BillboardTone
  postH?: number
  depth?: number
  anim?: Anim
}) {
  const t = billboardTones[tone]
  const postW = Math.max(10, w * 0.045)
  const markSize = h * 0.34
  return (
    <g>
      <Extrude
        points={rect(x + w * 0.2, y + h - 2, postW, postH + 2)}
        depth={8}
        front={c.blueDeep}
        sideLeft={c.blueDark}
      />
      <Extrude
        points={rect(x + w * 0.72, y + h - 2, postW, postH + 2)}
        depth={8}
        front={c.blueDeep}
        sideLeft={c.blueDark}
      />
      <Extrude
        points={rrect(x, y, w, h, 6)}
        depth={depth}
        front={t.front}
        sideLeft={c.mint}
        sideBottom={c.mintDeep}
        stroke={tone === 'white' ? c.sky300 : undefined}
        anim={anim}
      >
        <LogoMark
          x={x + w * 0.1}
          y={y + h * 0.22}
          size={markSize}
          front={t.mark}
          side={t.markSide}
        />
        <rect
          x={x + w * 0.46}
          y={y + h * 0.26}
          width={w * 0.42}
          height={h * 0.09}
          rx={h * 0.045}
          fill={t.line}
          opacity={0.95}
        />
        <rect
          x={x + w * 0.46}
          y={y + h * 0.44}
          width={w * 0.3}
          height={h * 0.07}
          rx={h * 0.035}
          fill={t.line}
          opacity={0.6}
        />
        <rect
          x={x + w * 0.46}
          y={y + h * 0.62}
          width={w * 0.2}
          height={h * 0.12}
          rx={h * 0.06}
          fill={t.accent}
        />
      </Extrude>
    </g>
  )
}

export function Building({
  x,
  y,
  w,
  h,
  cols = 3,
  rows = 5,
  depth = 14,
  seed = 0,
  anim = 'rise',
  tone = 'sky',
}: {
  x: number
  y: number
  w: number
  h: number
  cols?: number
  rows?: number
  depth?: number
  seed?: number
  anim?: Anim
  tone?: 'sky' | 'blue'
}) {
  const gap = 8
  const wW = (w - 20 - gap * (cols - 1)) / cols
  const wH = Math.max(6, (h - 34 - gap * (rows - 1)) / rows)
  const dark = tone === 'blue'
  return (
    <Extrude
      points={rect(x, y, w, h)}
      depth={depth}
      front={dark ? c.blue : c.sky100}
      sideLeft={dark ? c.blueDark : c.sky300}
      sideBottom={dark ? c.blueDeep : c.sky400}
      anim={anim}
    >
      {Array.from({ length: rows }).flatMap((_, r) =>
        Array.from({ length: cols }).map((__, k) => {
          const lit = (r * 7 + k * 3 + seed) % 5 === 0
          return (
            <rect
              key={`${r}-${k}`}
              x={x + 10 + k * (wW + gap)}
              y={y + 14 + r * (wH + gap)}
              width={wW}
              height={wH}
              rx={2}
              fill={lit ? (dark ? c.mint : c.mintSoft) : dark ? c.sky400 : c.white}
              opacity={lit ? 1 : dark ? 0.45 : 0.95}
            />
          )
        }),
      )}
    </Extrude>
  )
}

export function Pin({
  x,
  y,
  r = 14,
  front = c.blue,
  side = c.mint,
  dot = c.white,
  pulse = true,
  anim = 'pop',
}: {
  x: number
  y: number
  r?: number
  front?: string
  side?: string
  dot?: string
  pulse?: boolean
  anim?: Anim
}) {
  const cy = y - r * 1.9
  const pts: Pt[] = []
  for (let a = 125; a <= 415; a += 15) {
    const rad = (a * Math.PI) / 180
    pts.push([x + r * Math.cos(rad), cy + r * Math.sin(rad)])
  }
  pts.push([x, y])
  return (
    <g>
      <ellipse cx={x} cy={y} rx={r * 0.9} ry={r * 0.32} fill={c.blue} opacity={0.14} />
      {pulse && (
        <ellipse
          data-anim="pulse"
          cx={x}
          cy={y}
          rx={r * 1.3}
          ry={r * 0.5}
          fill="none"
          stroke={side === c.mint ? c.mintDeep : side}
          strokeWidth={2}
          opacity={0.4}
        />
      )}
      <Extrude points={pts} depth={r * 0.45} front={front} sideLeft={side} uniform anim={anim}>
        <circle cx={x} cy={cy} r={r * 0.42} fill={dot} />
      </Extrude>
    </g>
  )
}

export function Card({
  x,
  y,
  w,
  h,
  children,
  depth = 7,
  radius = 12,
  front = c.white,
  anim = 'slide',
}: {
  x: number
  y: number
  w: number
  h: number
  children?: ReactNode
  depth?: number
  radius?: number
  front?: string
  anim?: Anim
}) {
  return (
    <Extrude
      points={rrect(x, y, w, h, radius)}
      depth={depth}
      front={front}
      sideLeft={c.sky300}
      sideBottom={c.sky400}
      stroke={front === c.white ? c.sky200 : undefined}
      anim={anim}
    >
      {children}
    </Extrude>
  )
}

/* ---------- Charts ---------- */

export function MiniBars({
  x,
  y,
  w,
  h,
  values,
  color = c.blue,
  highlight,
  gap = 7,
}: {
  x: number
  y: number
  w: number
  h: number
  values: number[]
  color?: string
  highlight?: number
  gap?: number
}) {
  const max = Math.max(...values)
  const bw = (w - gap * (values.length - 1)) / values.length
  return (
    <g>
      {values.map((v, i) => {
        const bh = (v / max) * h
        return (
          <rect
            key={i}
            data-anim="rise"
            x={x + i * (bw + gap)}
            y={y + h - bh}
            width={bw}
            height={bh}
            rx={Math.min(4, bw / 2)}
            fill={i === highlight ? c.mint : color}
          />
        )
      })}
    </g>
  )
}

export function MiniLine({
  x,
  y,
  w,
  h,
  values,
  color = c.blue,
  area = true,
}: {
  x: number
  y: number
  w: number
  h: number
  values: number[]
  color?: string
  area?: boolean
}) {
  const max = Math.max(...values)
  const min = Math.min(...values)
  const pts = values.map((v, i) => {
    const px = x + (i / (values.length - 1)) * w
    const py = y + h - ((v - min) / (max - min || 1)) * h
    return [px, py] as const
  })
  const line = pts
    .map(([px, py], i) => `${i ? 'L' : 'M'}${px.toFixed(1)} ${py.toFixed(1)}`)
    .join(' ')
  return (
    <g>
      {area && (
        <path
          data-anim="fade"
          d={`${line} L${x + w} ${y + h} L${x} ${y + h} Z`}
          fill={color}
          opacity={0.1}
        />
      )}
      <path
        data-anim="draw"
        d={line}
        fill="none"
        stroke={color}
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  )
}

export function Donut({
  cx,
  cy,
  r,
  thickness = 14,
  segments,
}: {
  cx: number
  cy: number
  r: number
  thickness?: number
  segments: { value: number; color: string }[]
}) {
  const total = segments.reduce((sum, s) => sum + s.value, 0)
  const arcs = segments.map((s, i) => ({
    ...s,
    len: (s.value / total) * 100,
    offset: (segments.slice(0, i).reduce((sum, p) => sum + p.value, 0) / total) * 100,
  }))
  return (
    <g data-anim="fade">
      <circle cx={cx} cy={cy} r={r} fill="none" stroke={c.sky100} strokeWidth={thickness} />
      {arcs.map((a, i) => (
        <circle
          key={i}
          cx={cx}
          cy={cy}
          r={r}
          fill="none"
          stroke={a.color}
          strokeWidth={thickness}
          pathLength={100}
          strokeDasharray={`${Math.max(a.len - 1.5, 0.5)} ${100 - a.len + 1.5}`}
          strokeDashoffset={-(75 + a.offset)}
        />
      ))}
    </g>
  )
}

/* ---------- Map ---------- */

export function MapCard({
  x,
  y,
  w,
  h,
  depth = 14,
  variant = 0,
  anim = 'rise',
  children,
}: {
  x: number
  y: number
  w: number
  h: number
  depth?: number
  variant?: 0 | 1
  anim?: Anim
  children?: ReactNode
}) {
  const clipId = useId()
  const flip = variant === 1
  const hx = (f: number) => x + w * (flip ? 1 - f : f)
  return (
    <Extrude
      points={rrect(x, y, w, h, 14)}
      depth={depth}
      front={c.sky50}
      sideLeft={c.sky300}
      sideBottom={c.sky400}
      stroke={c.sky200}
      anim={anim}
    >
      <clipPath id={clipId}>
        <rect x={x} y={y} width={w} height={h} rx={14} />
      </clipPath>
      <g clipPath={`url(#${clipId})`}>
        <rect
          x={hx(0.04)}
          y={y + h * 0.06}
          width={w * 0.18}
          height={h * 0.18}
          rx={6}
          fill={c.sky100}
        />
        <rect
          x={hx(0.3)}
          y={y + h * 0.36}
          width={w * 0.2}
          height={h * 0.2}
          rx={6}
          fill={c.mintSoft}
          opacity={0.7}
        />
        <rect
          x={hx(0.62)}
          y={y + h * 0.7}
          width={w * 0.16}
          height={h * 0.22}
          rx={6}
          fill={c.sky100}
        />
        <rect
          x={hx(0.64)}
          y={y + h * 0.08}
          width={w * 0.14}
          height={h * 0.16}
          rx={6}
          fill={c.sky100}
        />
        <g stroke={c.sky200} strokeWidth={3} fill="none">
          <path d={`M${x} ${y + h * 0.48} H${x + w}`} />
          <path d={`M${hx(0.4)} ${y} V${y + h}`} />
          <path d={`M${hx(0.72)} ${y} V${y + h}`} />
        </g>
        <g stroke={c.white} strokeWidth={9} fill="none" strokeLinecap="round">
          <path d={`M${x} ${y + h * 0.28} H${x + w}`} />
          <path d={`M${x} ${y + h * 0.64} H${x + w}`} />
          <path d={`M${hx(0.22)} ${y} V${y + h}`} />
          <path d={`M${hx(0.58)} ${y} V${y + h}`} />
          <path d={`M${hx(0.02)} ${y + h * 0.95} L${hx(0.5)} ${y + h * 0.05}`} strokeWidth={7} />
        </g>
        <circle cx={hx(0.36)} cy={y + h * 0.46} r={w * 0.19} fill={c.mint} opacity={0.16} />
        <circle cx={hx(0.36)} cy={y + h * 0.46} r={w * 0.1} fill={c.mint} opacity={0.2} />
        <circle cx={hx(0.74)} cy={y + h * 0.7} r={w * 0.12} fill={c.blue} opacity={0.1} />
      </g>
      {children}
    </Extrude>
  )
}

/* ---------- Ground ---------- */

export function Road({ x, y, w, h = 20 }: { x: number; y: number; w: number; h?: number }) {
  const dashes = Math.floor(w / 46)
  return (
    <Extrude
      points={rect(x, y, w, h)}
      depth={10}
      front={c.sky200}
      sideLeft={c.sky300}
      sideBottom={c.sky400}
      anim="fade"
    >
      {Array.from({ length: dashes }).map((_, i) => (
        <rect
          key={i}
          x={x + 14 + i * 46}
          y={y + h / 2 - 1.5}
          width={24}
          height={3}
          rx={1.5}
          fill={c.white}
        />
      ))}
    </Extrude>
  )
}
