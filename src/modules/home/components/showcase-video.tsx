import { Pause, Play } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { usePrefersReducedMotion } from '@/shared/lib'

/**
 * Muted looping clip. Plays only while visible, never autoplays with reduced motion,
 * and always has a visible pause/play control.
 */
export function ShowcaseVideo({ className }: { className?: string }) {
  const ref = useRef<HTMLVideoElement>(null)
  const reduced = usePrefersReducedMotion()
  const [playing, setPlaying] = useState(false)
  const [visible, setVisible] = useState(false)
  const [userPaused, setUserPaused] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([entry]) => setVisible(Boolean(entry?.isIntersecting)), {
      threshold: 0.35,
    })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (visible && !reduced && !userPaused) {
      el.play().catch(() => undefined)
    } else {
      el.pause()
    }
  }, [visible, reduced, userPaused])

  const toggle = () => {
    const el = ref.current
    if (!el) return
    if (el.paused) {
      setUserPaused(false)
      el.play().catch(() => undefined)
    } else {
      setUserPaused(true)
    }
  }

  return (
    <div className={className}>
      <video
        ref={ref}
        className="size-full object-cover"
        poster="/media/digital-showcase-poster.webp"
        muted
        loop
        playsInline
        preload="none"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        aria-label="Digital billboard showcase"
      >
        <source src="/media/digital-showcase.mp4" type="video/mp4" />
      </video>
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? 'Pause video' : 'Play video'}
        className="absolute right-4 bottom-4 grid size-11 place-items-center rounded-lg bg-white/90 text-brand-900 shadow-card backdrop-blur transition-colors hover:bg-white"
      >
        {playing ? (
          <Pause aria-hidden className="size-4" />
        ) : (
          <Play aria-hidden className="size-4" />
        )}
      </button>
    </div>
  )
}
