import type { ReactNode } from 'react'
import { cn } from '@/shared/lib'
import { IsoCard } from '@/shared/isometric'
import { Reveal } from '@/shared/ui'

/**
 * Section intro with an isometric scene: copy on the left, scene on the right.
 * Use it in place of a centred SectionHeader when a section benefits from showing how
 * something works. Content below (feature grids, lists) stays unchanged.
 */
export function SceneIntro({
  eyebrow,
  title,
  description,
  scene,
  className,
}: {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  scene: ReactNode
  className?: string
}) {
  return (
    <div className={cn('grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20', className)}>
      <Reveal className="max-w-xl">
        {eyebrow && (
          <p className="mb-6 flex items-center gap-3 text-eyebrow text-brand-700">
            <span aria-hidden className="h-0.5 w-8 bg-mint-500" />
            {eyebrow}
          </p>
        )}
        <h2 className="text-h2 text-ink">{title}</h2>
        {description && <p className="mt-6 text-lead text-slate-600">{description}</p>}
      </Reveal>
      <Reveal delay={0.1}>
        <IsoCard>
          <div className="px-4 py-6 sm:px-10 sm:py-8">{scene}</div>
        </IsoCard>
      </Reveal>
    </div>
  )
}
