import { CoverArt } from '@/shared/illustrations'
import { Section } from '@/shared/layout'
import { SectionHeader } from '@/shared/marketing'
import { Reveal, TextLink } from '@/shared/ui'
import { planningContent } from '../planning-content'

export function CasesSection() {
  const { cases } = planningContent
  return (
    <Section tone="muted">
      <SectionHeader title={cases.title} description={cases.description} />
      <ul className="mt-12 grid gap-6 md:mt-16 md:grid-cols-3">
        {cases.items.map((item, i) => (
          <li key={item.title}>
            <Reveal delay={i * 0.08} className="h-full">
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card transition-[box-shadow,transform] duration-300 ease-out-expo hover:-translate-y-1 hover:shadow-lift">
                <CoverArt variant={item.cover} className="aspect-[8/5] w-full" />
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-eyebrow text-brand-600">{item.label}</p>
                  <h3 className="mt-3 text-h3">{item.title}</h3>
                  <p className="mt-3 text-slate-600">{item.description}</p>
                  <TextLink to={cases.cta.to} className="mt-auto pt-6">
                    {cases.cta.label}
                  </TextLink>
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  )
}
