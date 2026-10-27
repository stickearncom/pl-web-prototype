import { m } from 'motion/react'
import type { ReactNode } from 'react'

/**
 * Fade and rise once when scrolled into view.
 * Honors prefers-reduced-motion through <MotionConfig reducedMotion="user"> in app providers
 * (transforms are dropped, opacity is kept).
 * Next.js migration: this file needs "use client" at the top.
 */
export function Reveal({
  children,
  delay = 0,
  y = 18,
  className,
}: {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
}) {
  return (
    <m.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </m.div>
  )
}
