import type { ReactNode } from 'react'
import {
  IntelligenceMockup,
  InventoryMockup,
  PlanningMockup,
  ReportingMockup,
  VerificationMockup,
} from '@/shared/mockups'
import { Section } from '@/shared/layout'
import { cn } from '@/shared/lib'
import { SectionHeader } from '@/shared/marketing'
import { Reveal, TextLink } from '@/shared/ui'
import { homeContent } from '../home-content'

const visuals: Record<string, ReactNode> = {
  planning: <PlanningMockup />,
  inventory: <InventoryMockup />,
  execution: <VerificationMockup />,
  reporting: <ReportingMockup />,
  intelligence: <IntelligenceMockup />,
}

const shapes = [
  'polygon(100% 0, 100% 100%, 0 100%)',
  'polygon(0 0, 100% 0, 0 100%)',
  'polygon(0 0, 100% 100%, 0 100%)',
  'polygon(100% 0, 100% 100%, 0 0)',
  'polygon(0 0, 100% 0, 100% 100%)',
]

export function PlatformShowcase() {
  const { platform } = homeContent
  return (
    <Section id="platform" className="pb-0 md:pb-0 lg:pb-0">
      <SectionHeader
        eyebrow={platform.eyebrow}
        title={platform.title}
        description={platform.description}
      />
      <div className="mt-20 md:mt-28">
        {platform.blocks.map((block, i) => (
          <div
            key={block.key}
            className="grid items-center gap-12 py-16 first:pt-0 md:py-24 lg:grid-cols-2 lg:gap-24"
          >
            <Reveal className={cn('max-w-xl', i % 2 === 1 && 'lg:order-2 lg:justify-self-end')}>
              <p className="flex items-center gap-3 text-eyebrow text-brand-700">
                <span className="tabular-nums">{String(i + 1).padStart(2, '0')}</span>
                <span aria-hidden className="h-0.5 w-8 bg-mint-500" />
                {block.tag}
              </p>
              <h3 className="mt-6 text-h2 text-ink">{block.title}</h3>
              <p className="mt-6 text-lead text-slate-600">{block.description}</p>
              <TextLink to={block.link.to} className="mt-8 text-base">
                {block.link.label}
              </TextLink>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative isolate rounded-2xl bg-gradient-to-br from-brand-50 via-white to-mint-50 p-5 pb-9 ring-1 ring-brand-900/6 sm:p-10 sm:pb-14">
                <div
                  aria-hidden
                  className={cn(
                    'absolute -z-10 size-2/5 bg-brand-100/80',
                    i % 2 === 0 ? 'right-0 bottom-0' : 'top-0 left-0',
                  )}
                  style={{ clipPath: shapes[i % shapes.length] }}
                />
                {visuals[block.key]}
              </div>
            </Reveal>
          </div>
        ))}
      </div>
    </Section>
  )
}
