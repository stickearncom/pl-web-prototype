import type { ReactNode } from 'react'
import { PhotoFrame } from './photo-frame'

type Photo = { src: string; alt: string; position?: string }

/**
 * Two reusable hero visuals built from a photo and a product card.
 * - `behind`: tall photo on the right, `children` (a mockup) overlapping in front on the left.
 * - `card`: wide photo, `children` (a compact card) overlapping at the lower right.
 */
export function HeroCompose({
  photo,
  variant = 'behind',
  children,
}: {
  photo: Photo
  variant?: 'behind' | 'card'
  children: ReactNode
}) {
  if (variant === 'card') {
    return (
      <div className="relative pb-24 pl-4 sm:pb-20">
        <PhotoFrame
          src={photo.src}
          alt={photo.alt}
          eager
          className="aspect-[4/3] w-full sm:w-[88%]"
          position={photo.position}
        />
        <div className="absolute right-0 bottom-0 w-[78%] max-w-xs sm:w-64">{children}</div>
      </div>
    )
  }
  return (
    <div className="relative pt-14 pb-12 sm:pt-24 sm:pb-16">
      <PhotoFrame
        src={photo.src}
        alt={photo.alt}
        eager
        className="absolute top-0 right-0 h-[80%] w-[56%]"
        position={photo.position}
      />
      <div className="relative w-[88%] sm:w-[80%]">{children}</div>
    </div>
  )
}
