import { useInView } from 'motion/react'
import { useRef, useSyncExternalStore } from 'react'
import { usePrefersReducedMotion } from '@/shared/lib'

function subscribe(callback: () => void) {
  document.addEventListener('visibilitychange', callback)
  return () => document.removeEventListener('visibilitychange', callback)
}

export function useAmbient<T extends Element>() {
  const ref = useRef<T>(null)
  const inView = useInView(ref)
  const visible = useSyncExternalStore(
    subscribe,
    () => document.visibilityState === 'visible',
    () => false,
  )
  const reduced = usePrefersReducedMotion()
  return { ref, active: inView && visible && !reduced, reduced }
}
