import { m, useScroll, useTransform } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import { useAmbient } from '@/shared/mockups/use-ambient'
import { MapCanvas } from '@/shared/mockups'
import { Chip } from '@/shared/mockups'
import { usePrefersReducedMotion } from '@/shared/lib'
import { PhotoFrame } from '@/shared/marketing'

const ease = [0.16, 1, 0.3, 1] as const

function LiveCounter() {
  const { ref, active, reduced } = useAmbient<HTMLParagraphElement>()
  const [count, setCount] = useState(672563)

  useEffect(() => {
    if (!active) return
    const interval = window.setInterval(
      () => setCount((value) => value + 1 + Math.floor(Math.random() * 3)),
      1200,
    )
    return () => window.clearInterval(interval)
  }, [active])

  return (
    <p
      ref={ref}
      aria-live="off"
      className="text-2xl font-bold tracking-tight text-ink tabular-nums"
    >
      <span className="sr-only">Sample data </span>
      {(reduced ? 672563 : count).toLocaleString('en-US')}
    </p>
  )
}

/** Hero composition: billboard photo, plus two floating product cards with gentle scroll parallax. */
export function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = usePrefersReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const range = reduced ? [0, 0] : [36, -36]
  const rangeB = reduced ? [0, 0] : [-20, 56]
  const yA = useTransform(scrollYProgress, [0, 1], range)
  const yB = useTransform(scrollYProgress, [0, 1], rangeB)
  const yPhoto = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [14, -14])

  return (
    <div ref={ref} className="relative mx-auto w-full max-w-2xl pb-6 pl-4 lg:max-w-none">
      <m.div style={{ y: yPhoto }}>
        <PhotoFrame
          src="/media/billboard-flyover.webp"
          alt="Digital billboards mounted on elevated toll road pillars in Jakarta"
          eager
          className="aspect-[6/5]"
          imgClassName="object-[30%_50%]"
        />
      </m.div>

      <m.div
        style={{ y: yA }}
        className="absolute top-8 right-[-0.5rem] hidden sm:block lg:right-[-2rem]"
      >
        <m.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.5 }}
          className="w-60 rounded-xl bg-white p-4 shadow-lift ring-1 ring-brand-900/8"
        >
          <div className="flex items-center justify-between">
            <Chip tone="live">Live now</Chip>
            <span className="text-xs text-slate-500">Today</span>
          </div>
          <p className="mt-3 text-xs font-medium text-slate-500">Estimated impressions</p>
          <LiveCounter />
          <div className="mt-3 flex h-10 items-end gap-1.5" aria-hidden>
            {[30, 46, 38, 62, 54, 80, 100].map((h, i) => (
              <span
                key={i}
                style={{ height: `${h}%` }}
                className={
                  i === 6 ? 'flex-1 rounded-xs bg-mint-400' : 'flex-1 rounded-xs bg-brand-600/80'
                }
              />
            ))}
          </div>
        </m.div>
      </m.div>

      <m.div
        style={{ y: yB }}
        className="absolute bottom-[-1.5rem] left-[-0.5rem] lg:left-[-2.5rem]"
      >
        <m.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.7 }}
          className="w-64 overflow-hidden rounded-xl bg-white shadow-lift ring-1 ring-brand-900/8 sm:w-72"
        >
          <div className="h-24">
            <MapCanvas
              route="M40 260 C 120 200, 200 190, 260 130 S 380 70, 440 60"
              pins={[
                { x: 140, y: 200 },
                { x: 260, y: 130, active: true },
                { x: 400, y: 80 },
              ]}
            />
          </div>
          <div className="flex items-center justify-between p-3.5">
            <div>
              <p className="text-sm font-semibold text-ink">3 locations shortlisted</p>
              <p className="text-xs text-slate-500">Jakarta · Digital billboard</p>
            </div>
            <Chip tone="brand">Planning</Chip>
          </div>
        </m.div>
      </m.div>
    </div>
  )
}
