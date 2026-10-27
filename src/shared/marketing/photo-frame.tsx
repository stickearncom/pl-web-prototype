import type { CSSProperties } from 'react'
import { cn } from '@/shared/lib'

const notch: CSSProperties = {
  clipPath: 'polygon(56px 0, 100% 0, 100% 100%, 0 100%, 0 56px)',
}

/**
 * Photo with a cut top-left corner and a mint extrusion to the lower left,
 * the same construction as the Playlog mark.
 */
export function PhotoFrame({
  src,
  alt = '',
  className,
  eager = false,
  imgClassName,
  children,
}: {
  src: string
  alt?: string
  className?: string
  eager?: boolean
  imgClassName?: string
  children?: React.ReactNode
}) {
  return (
    <div className={cn('relative', className)}>
      <div
        aria-hidden
        className="absolute inset-0 translate-x-[-14px] translate-y-[14px] bg-mint-400"
        style={notch}
      />
      <div className="relative size-full overflow-hidden bg-brand-100" style={notch}>
        <img
          src={src}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          fetchPriority={eager ? 'high' : undefined}
          decoding="async"
          className={cn('size-full object-cover', imgClassName)}
        />
        {children}
      </div>
    </div>
  )
}
