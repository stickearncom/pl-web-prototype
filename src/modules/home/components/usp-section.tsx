import { Section } from '@/shared/layout'
import { IconTile, Reveal } from '@/shared/ui'
import { homeContent } from '../home-content'

export function UspSection() {
  const { usp } = homeContent
  return (
    <Section tone="muted">
      <div className="grid gap-14 lg:grid-cols-[0.8fr_1.4fr] lg:gap-24">
        <Reveal className="lg:sticky lg:top-32 lg:self-start">
          <p className="flex items-center gap-3 text-eyebrow text-brand-700">
            <span aria-hidden className="h-0.5 w-8 bg-mint-500" />
            {usp.eyebrow}
          </p>
          <h2 className="mt-6 text-h1 text-ink">{usp.title}</h2>
          <p className="mt-6 text-lead text-slate-600">{usp.description}</p>
        </Reveal>
        <ul className="grid gap-5 sm:grid-cols-2">
          {usp.items.map((item, i) => (
            <li key={item.title}>
              <Reveal delay={(i % 2) * 0.1} className="h-full">
                <div className="h-full rounded-2xl bg-white p-8 ring-1 ring-brand-900/6 transition-[box-shadow,transform] duration-500 ease-out-expo hover:-translate-y-1 hover:shadow-lift md:p-10">
                  <div className="flex items-start justify-between">
                    <IconTile icon={item.icon} className="size-14" />
                    <span className="text-sm font-semibold text-slate-300 tabular-nums">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="mt-10 text-h3 text-ink">{item.title}</h3>
                  <p className="mt-3 text-lg leading-relaxed text-slate-600">{item.description}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
