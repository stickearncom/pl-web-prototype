import { animate, useInView } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import { usePrefersReducedMotion } from '@/shared/lib'

export type Stat = { value: number; suffix?: string; label: string; plain?: boolean }

export function CountUp({
  to,
  suffix = '',
  plain = false,
}: {
  to: number
  suffix?: string
  plain?: boolean
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' })
  const reduced = usePrefersReducedMotion()
  const [value, setValue] = useState(() => (reduced ? to : 0))

  useEffect(() => {
    if (!inView || reduced) return
    const controls = animate(0, to, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, reduced, to])

  return (
    <span ref={ref}>
      {plain ? (reduced ? to : value) : (reduced ? to : value).toLocaleString('en-US')}
      {suffix}
    </span>
  )
}

export function StatsRow({ items }: { items: Stat[] }) {
  return (
    <dl className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
      {items.map((item) => (
        <div key={item.label} className="border-l-4 border-mint-400 pl-5">
          <dt className="order-2 mt-1 text-sm font-medium text-slate-600">{item.label}</dt>
          <dd className="text-h1 text-brand-600 tabular-nums">
            <CountUp to={item.value} suffix={item.suffix} plain={item.plain} />
          </dd>
        </div>
      ))}
    </dl>
  )
}
