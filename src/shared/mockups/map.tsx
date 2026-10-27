import { m } from 'motion/react'
import { useState } from 'react'
import { cn } from '@/shared/lib'
import { PulseRing } from './ambient-motion'
import { useAmbient } from './use-ambient'

export type MapPin = { x: number; y: number; active?: boolean }

/**
 * Stylised city map (roads, blocks, park, river) drawn as SVG.
 * Route and pins animate with transform/opacity/pathLength only.
 */
export function MapCanvas({
  pins = [],
  route,
  className,
}: {
  pins?: MapPin[]
  /** SVG path in the 480x320 viewBox */
  route?: string
  className?: string
}) {
  const { ref, active, reduced } = useAmbient<SVGSVGElement>()
  const [routeReady, setRouteReady] = useState(false)
  const [pinsReady, setPinsReady] = useState<number[]>([])
  return (
    <svg
      ref={ref}
      viewBox="0 0 480 320"
      className={cn('block h-full w-full', className)}
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="Map of billboard locations"
    >
      <rect width="480" height="320" fill="#e8f0f9" />
      {/* blocks */}
      {[
        [10, 14, 90, 60],
        [112, 14, 70, 60],
        [196, 14, 110, 60],
        [320, 14, 70, 60],
        [404, 14, 70, 60],
        [10, 92, 90, 70],
        [112, 92, 70, 70],
        [196, 92, 60, 70],
        [270, 92, 120, 70],
        [404, 92, 70, 70],
        [10, 180, 90, 56],
        [112, 180, 70, 56],
        [196, 180, 110, 56],
        [320, 180, 70, 56],
        [404, 180, 70, 56],
        [10, 254, 90, 56],
        [112, 254, 140, 56],
        [266, 254, 124, 56],
        [404, 254, 70, 56],
      ].map(([x, y, w, h], i) => (
        <rect key={i} x={x} y={y} width={w} height={h} rx="4" fill="#f4f8fc" />
      ))}
      {/* park */}
      <rect x="270" y="92" width="120" height="70" rx="6" fill="#d3f5ec" />
      {/* river */}
      <path
        d="M-10 214 C 90 196, 170 250, 260 232 S 420 196, 500 226"
        stroke="#c4dcf4"
        strokeWidth="18"
        fill="none"
      />
      {/* arterial */}
      <path d="M-10 84 L 490 172" stroke="#ffffff" strokeWidth="10" fill="none" />
      <path
        d="M-10 84 L 490 172"
        stroke="#d7e3f1"
        strokeWidth="1.5"
        strokeDasharray="6 8"
        fill="none"
      />
      {route && (
        <>
          <path
            d={route}
            stroke="#004fa4"
            strokeOpacity="0.14"
            strokeWidth="9"
            fill="none"
            strokeLinecap="round"
          />
          {!routeReady && !reduced && (
            <m.path
              d={route}
              stroke="#004fa4"
              strokeWidth="3.5"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="1 7"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, margin: '0px 0px -15% 0px' }}
              transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              onAnimationComplete={() => setRouteReady(true)}
            />
          )}
          {(routeReady || reduced) && (
            <path
              d={route}
              stroke="#004fa4"
              strokeWidth="3.5"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="1 7"
              className={cn('route-flow', active && 'is-flowing')}
            />
          )}
        </>
      )}
      {pins.map((pin, i) => (
        <m.g
          key={i}
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px -15% 0px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.5 + i * 0.12 }}
          onAnimationComplete={() =>
            setPinsReady((ready) => (ready.includes(i) ? ready : [...ready, i]))
          }
        >
          {pin.active && (
            <PulseRing
              x={pin.x}
              y={pin.y}
              active={active}
              reduced={reduced}
              ready={pinsReady.includes(i)}
            />
          )}
          <path
            d={`M${pin.x} ${pin.y + 12} C ${pin.x - 14} ${pin.y - 2}, ${pin.x - 12} ${pin.y - 18}, ${pin.x} ${pin.y - 18} C ${pin.x + 12} ${pin.y - 18}, ${pin.x + 14} ${pin.y - 2}, ${pin.x} ${pin.y + 12} Z`}
            fill={pin.active ? '#004fa4' : '#1a66bc'}
          />
          <circle cx={pin.x} cy={pin.y - 6} r="4.5" fill="#fff" />
        </m.g>
      ))}
    </svg>
  )
}
