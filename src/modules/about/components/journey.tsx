import { Section } from '@/shared/layout'
import { cn } from '@/shared/lib'
import { Reveal } from '@/shared/ui'

type Step = { stage: number; title: string; description: string }

/** Four-step timeline of how OOH evolved. Replaces the old illustrated cards. */
export function Journey({
  eyebrow,
  title,
  steps,
  subhead,
}: {
  eyebrow: string
  title: string
  steps: readonly Step[]
  subhead: string
}) {
  return (
    <Section tone="dark">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(135deg,#003a78_0%,#00244c_60%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 bottom-0 -z-10 h-[26rem] w-[26rem] bg-brand-500/20"
        style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}
      />
      <Reveal className="max-w-3xl">
        <p className="flex items-center gap-3 text-eyebrow text-mint-300">
          <span aria-hidden className="h-0.5 w-8 bg-mint-400" />
          {eyebrow}
        </p>
        <h2 className="mt-6 text-h1 text-white">{title}</h2>
      </Reveal>

      <ol className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
        {steps.map((step, i) => {
          const last = step.stage === steps.length
          return (
            <li key={step.title} className="relative">
              <Reveal delay={i * 0.1}>
                <div className="flex items-center gap-4">
                  <span
                    className={cn(
                      'grid size-14 shrink-0 place-items-center text-lg font-semibold tabular-nums',
                      last
                        ? 'bg-mint-400 text-brand-950'
                        : 'bg-white/8 text-white ring-1 ring-white/20',
                    )}
                    style={{ clipPath: 'polygon(14px 0, 100% 0, 100% 100%, 0 100%, 0 14px)' }}
                  >
                    {String(step.stage).padStart(2, '0')}
                  </span>
                  <span
                    aria-hidden
                    className={cn(
                      'hidden h-px flex-1 lg:block',
                      last ? 'bg-transparent' : 'bg-white/20',
                    )}
                  />
                </div>
                <h3 className={cn('mt-7 text-h3', last ? 'text-mint-300' : 'text-white')}>
                  {step.title}
                </h3>
                <p className="mt-3 text-lg leading-relaxed text-white/70">{step.description}</p>
              </Reveal>
            </li>
          )
        })}
      </ol>

      <Reveal>
        <p className="mt-16 max-w-3xl border-l-4 border-mint-400 pl-6 text-h3 text-white/90">
          {subhead}
        </p>
      </Reveal>
    </Section>
  )
}
