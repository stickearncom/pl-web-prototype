import { LazyMotion, MotionConfig, domAnimation } from 'motion/react'
import type { ReactNode } from 'react'
import { BrowserRouter } from 'react-router-dom'

/**
 * App-level providers.
 * - reducedMotion="user": Motion drops transform animations when the OS asks for reduced motion.
 * - LazyMotion: loads Motion's DOM features on demand (smaller initial bundle).
 */
export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <BrowserRouter>
      <MotionConfig reducedMotion="user">
        <LazyMotion features={domAnimation} strict>
          {children}
        </LazyMotion>
      </MotionConfig>
    </BrowserRouter>
  )
}
