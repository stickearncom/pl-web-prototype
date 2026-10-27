import { CaseThumb } from '@/shared/mockups'
import { Section } from '@/shared/layout'
import { SectionHeader } from '@/shared/marketing'
import { Reveal, TextLink } from '@/shared/ui'
import { planningContent } from '../planning-content'

export function CasesSection() {
  const { cases } = planningContent
  return (
    <Section>
      <SectionHeader title={cases.title} description={cases.description} />
      <ul className="mt-16 grid gap-6 md:mt-20 md:grid-cols-3 lg:gap-8">
        {cases.items.map((item, i) => (
          <li key={item.title}>
            <Reveal delay={i * 0.08} className="h-full">
              <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-brand-900/8 transition-[box-shadow,transform] duration-500 ease-out-expo hover:-translate-y-1 hover:shadow-lift">
                <CaseThumb variant={item.thumb} className="aspect-[8/5] w-full" />
                <div className="flex flex-1 flex-col p-8">
                  <p className="text-eyebrow text-brand-600">{item.label}</p>
                  <h3 className="mt-4 text-h3">{item.title}</h3>
                  <p className="mt-4 text-lg leading-relaxed text-slate-600">{item.description}</p>
                  <TextLink to={cases.cta.to} className="mt-auto pt-8">
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
