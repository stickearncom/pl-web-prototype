import { m, useAnimate } from 'motion/react'
import { useEffect, useRef } from 'react'

type Controls = { pause: () => void; play: () => void; stop: () => void }

export function LiveDot({ active, reduced }: { active: boolean; reduced: boolean }) {
  const [scope, animate] = useAnimate<HTMLSpanElement>()
  const controls = useRef<Controls | null>(null)

  useEffect(() => {
    if (reduced) {
      controls.current?.stop()
      controls.current = null
      scope.current.style.removeProperty('transform')
      scope.current.style.removeProperty('opacity')
    } else if (active) {
      controls.current ??= animate(
        scope.current,
        { opacity: [1, 0.35, 1], scale: [1, 0.8, 1] },
        { duration: 2, repeat: Infinity, ease: 'easeInOut' },
      )
      controls.current.play()
    } else {
      controls.current?.pause()
    }
  }, [active, reduced, animate, scope])
  useEffect(() => () => controls.current?.stop(), [])

  return <m.span ref={scope} aria-hidden className="size-1.5 rounded-full bg-mint-600" />
}

export function PulseRing({
  x,
  y,
  active,
  reduced,
  ready,
}: {
  x: number
  y: number
  active: boolean
  reduced: boolean
  ready: boolean
}) {
  const [scope, animate] = useAnimate<SVGCircleElement>()
  const controls = useRef<Controls | null>(null)

  useEffect(() => {
    if (reduced) {
      controls.current?.stop()
      controls.current = null
      scope.current.style.removeProperty('transform')
      scope.current.style.removeProperty('opacity')
    } else if (active && ready) {
      controls.current ??= animate(
        scope.current,
        { scale: [0.7, 1.9], opacity: [0.5, 0] },
        { duration: 2.8, repeat: Infinity, ease: 'easeOut' },
      )
      controls.current.play()
    } else {
      controls.current?.pause()
    }
  }, [active, reduced, ready, animate, scope])
  useEffect(() => () => controls.current?.stop(), [])

  return (
    <m.circle
      ref={scope}
      cx={x}
      cy={y}
      r="22"
      fill="#00f4cb"
      fillOpacity="0.28"
      style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
    />
  )
}
