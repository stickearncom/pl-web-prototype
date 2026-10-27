import { CompetitiveScene, LocationsScene } from '@/shared/illustrations'
import { Section } from '@/shared/layout'
import { cn } from '@/shared/lib'
import { CheckList, SectionHeader } from '@/shared/marketing'
import { Reveal, TextLink } from '@/shared/ui'
import { planningContent } from '../planning-content'

export function WorkflowSection() {
  const { workflow } = planningContent
  return (
    <Section tone="muted" id="workflow">
      <SectionHeader title={workflow.title} description={workflow.description} />
      <ol className="mt-12 space-y-6 md:mt-16 md:space-y-8">
        {workflow.steps.map((step, i) => {
          const visual = 'visual' in step ? step.visual : undefined
          return (
            <li key={step.title}>
              <Reveal>
                <div className="grid items-center gap-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-card md:p-10 lg:grid-cols-2 lg:gap-14">
                  <div className={cn(i % 2 === 1 && 'lg:order-2')}>
                    <div className="flex items-center gap-4">
                      <span
                        aria-hidden
                        className="grid size-12 place-items-center rounded-xl bg-brand-600 text-lg font-bold text-white shadow-[-4px_4px_0_var(--color-mint-400)]"
                      >
                        {i + 1}
                      </span>
                      <span className="text-eyebrow text-brand-600">Step {i + 1}</span>
                    </div>
                    <h3 className="mt-5 text-h2">{step.title}</h3>
                    <p className="mt-3 text-lead text-slate-600">{step.description}</p>
                    {visual ? (
                      <ul className="mt-6 flex flex-wrap gap-2">
                        {step.features.map((feature) => (
                          <li
                            key={feature}
                            className="rounded-md bg-brand-50 px-3.5 py-1.5 text-sm font-medium text-brand-700"
                          >
                            {feature}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                    <TextLink to={step.cta.to} className="mt-7">
                      {step.cta.label}
                    </TextLink>
                  </div>
                  <div className={cn(i % 2 === 1 && 'lg:order-1')}>
                    {visual === 'market' && (
                      <div className="rounded-2xl bg-gradient-to-br from-brand-50 via-white to-mint-50 p-4 ring-1 ring-brand-100 ring-inset sm:p-6">
                        <CompetitiveScene />
                      </div>
                    )}
                    {visual === 'locations' && (
                      <div className="rounded-2xl bg-gradient-to-br from-brand-50 via-white to-mint-50 p-4 ring-1 ring-brand-100 ring-inset sm:p-6">
                        <LocationsScene />
                      </div>
                    )}
                    {!visual && (
                      <div className="rounded-2xl bg-gradient-to-br from-brand-50 to-mint-50 p-6 ring-1 ring-brand-100 ring-inset sm:p-8">
                        <p className="mb-5 text-eyebrow text-brand-700">What you get</p>
                        <CheckList items={step.features} />
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            </li>
          )
        })}
      </ol>
    </Section>
  )
}
