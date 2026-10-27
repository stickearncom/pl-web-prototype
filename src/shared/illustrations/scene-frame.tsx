import { useEffect, useRef, type ReactNode, type RefObject } from 'react'
import { cn, usePrefersReducedMotion } from '@/shared/lib'

/**
 * Plays the entrance animation for elements marked with data-anim once the scene
 * scrolls into view. anime.js is loaded on demand so it never blocks first paint.
 *
 * data-anim values: rise (grow from the ground), pop (scale in), slide (rise and fade),
 * fade, draw (stroke draw on solid lines), pulse (looping ring).
 * With prefers-reduced-motion the scene is simply shown in its final state.
 */
function useSceneAnimation(ref: RefObject<HTMLElement | null>, reduced: boolean) {
  useEffect(() => {
    const root = ref.current
    if (!root || reduced) return
    let cancelled = false

    const run = async () => {
      const { animate, stagger, set, svg } = await import('animejs')
      if (cancelled) return
      const q = (kind: string) =>
        Array.from(root.querySelectorAll<SVGElement>(`[data-anim="${kind}"]`))
      const rise = q('rise')
      const pop = q('pop')
      const slide = q('slide')
      const fade = q('fade')
      const draw = q('draw')
      const pulse = q('pulse')

      set([...rise, ...pop, ...slide, ...fade, ...draw], { opacity: 0 })
      root.removeAttribute('data-pending')

      const ease = 'outExpo'
      if (rise.length)
        animate(rise, {
          opacity: [0, 1],
          scaleY: [0.1, 1],
          duration: 1000,
          delay: stagger(70),
          ease,
        })
      if (fade.length)
        animate(fade, { opacity: [0, 1], duration: 800, delay: stagger(60, { start: 200 }), ease })
      if (pop.length)
        animate(pop, {
          opacity: [0, 1],
          scale: [0.7, 1],
          duration: 800,
          delay: stagger(90, { start: 350 }),
          ease,
        })
      if (slide.length)
        animate(slide, {
          opacity: [0, 1],
          translateY: [26, 0],
          duration: 900,
          delay: stagger(110, { start: 550 }),
          ease,
        })
      if (draw.length) {
        set(draw, { opacity: 1 })
        animate(svg.createDrawable(draw), {
          draw: ['0 0', '0 1'],
          duration: 1400,
          delay: stagger(120, { start: 700 }),
          ease: 'inOutQuad',
        })
      }
      if (pulse.length)
        animate(pulse, {
          scale: [0.5, 1.7],
          opacity: [0.55, 0],
          duration: 2800,
          delay: stagger(700, { start: 1200 }),
          loop: true,
          ease,
        })
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          io.disconnect()
          void run()
        }
      },
      { threshold: 0.15 },
    )
    io.observe(root)
    // Safety net: never leave a scene hidden.
    const fallback = window.setTimeout(() => root.removeAttribute('data-pending'), 6000)
    return () => {
      cancelled = true
      io.disconnect()
      window.clearTimeout(fallback)
    }
  }, [ref, reduced])
}

export function SceneFrame({
  viewBox,
  label,
  className,
  children,
  decorative = false,
}: {
  viewBox: string
  label: string
  className?: string
  children: ReactNode
  decorative?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = usePrefersReducedMotion()
  useSceneAnimation(ref, reduced)
  return (
    <div
      ref={ref}
      className={cn('scene w-full', className)}
      data-pending={reduced ? undefined : ''}
    >
      <svg
        viewBox={viewBox}
        className="h-auto w-full"
        role={decorative ? undefined : 'img'}
        aria-label={decorative ? undefined : label}
        aria-hidden={decorative || undefined}
        focusable="false"
      >
        {children}
      </svg>
    </div>
  )
}
