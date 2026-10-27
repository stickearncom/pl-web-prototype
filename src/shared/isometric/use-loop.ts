import { useInView, useReducedMotion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'

/**
 * Steps through `length` states every `ms` while the scene is on screen.
 * Freezes on `still` when the user prefers reduced motion, and pauses off screen.
 */
export function useLoop(length: number, ms: number, still = length - 1) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { amount: 0.35 })
  const reduce = useReducedMotion()
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (reduce || !inView) return
    const t = window.setTimeout(() => setIndex((i) => (i + 1) % length), ms)
    return () => window.clearTimeout(t)
  }, [index, inView, reduce, length, ms])

  return { ref, index: reduce ? still : index }
}
