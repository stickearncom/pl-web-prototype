import type { ReactNode } from 'react'
import { cn } from '@/shared/lib'
import { iso } from './projection'

/**
 * SVG wrapper for an isometric scene of `w` x `d` tiles whose tallest object reaches `top` tiles.
 * The viewBox is derived from the scene bounds so every scene scales cleanly with its container.
 *
 * Scenes are decorative explanations: the text next to them carries the meaning, so the SVG
 * is labelled for screen readers but never holds copy that is not also in the HTML.
 *
 * Next.js migration: scenes that animate need "use client".
 */
export function IsoStage({
  w,
  d,
  top,
  peak = [0, 0],
  pad = 24,
  label,
  className,
  children,
}: {
  w: number
  d: number
  top: number
  /** Where the tallest point stands, in tiles. Defaults to the back corner. */
  peak?: readonly [number, number]
  pad?: number
  label: string
  className?: string
  children: ReactNode
}) {
  const left = iso(0, d)[0] - pad
  const right = iso(w, 0)[0] + pad
  const upper = Math.min(iso(0, 0)[1], iso(peak[0], peak[1], top)[1]) - pad
  const lower = iso(w, d, -0.6)[1] + pad + 18
  return (
    <svg
      viewBox={`${left.toFixed(1)} ${upper.toFixed(1)} ${(right - left).toFixed(1)} ${(lower - upper).toFixed(1)}`}
      role="img"
      aria-label={label}
      className={cn('block h-auto w-full overflow-visible select-none', className)}
    >
      {children}
    </svg>
  )
}
