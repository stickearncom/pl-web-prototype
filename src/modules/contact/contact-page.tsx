import { ArrowRight, Mail } from 'lucide-react'
import { m } from 'motion/react'
import { useState } from 'react'
import { Section } from '@/shared/layout'
import { cn, siteConfig, useSearchParam, usePageMeta } from '@/shared/lib'
import { HeroBackdrop } from '@/shared/marketing'
import { Reveal } from '@/shared/ui'
import { contactForm, LeadForm } from '@/modules/leads'
import { contactContent } from './contact-content'

const validInterests = ['demo', 'advertising', 'partnership']

const rise = (delay: number) => ({
  initial: { y: 22 },
  animate: { y: 0 },
  transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const, delay },
})

export function ContactPage() {
  usePageMeta(contactContent.meta)
  const param = useSearchParam('interest')
  const [picked, setPicked] = useState<string | null>(null)
  const interest = picked ?? (param && validInterests.includes(param) ? param : '')

  const choose = (value: string) => {
    setPicked(value)
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const { hero, choices, form } = contactContent
  return (
    <>
      <section className="relative isolate -mt-20 overflow-hidden pt-20">
        <HeroBackdrop />
        <div className="container-page pt-14 pb-10 md:pt-20 md:pb-14">
          <m.p {...rise(0)} className="flex items-center gap-3 text-eyebrow text-brand-700">
            <span aria-hidden className="h-0.5 w-8 bg-mint-500" />
            {hero.eyebrow}
          </m.p>
          <m.h1 {...rise(0.06)} className="mt-6 max-w-4xl text-display text-ink">
            {hero.title} <span className="text-brand-600">{hero.accent}</span>
          </m.h1>
          <m.p {...rise(0.14)} className="mt-7 max-w-2xl text-lead text-slate-600">
            {hero.description}
          </m.p>
        </div>
      </section>

      <Section spacing={false} className="pt-6 pb-12 md:pb-16">
        <h2 className="mb-6 text-eyebrow text-slate-500">{choices.title}</h2>
        <ul className="grid gap-6 md:grid-cols-3">
          {choices.items.map((item, i) => {
            const Icon = item.icon
            const active = interest === item.value
            return (
              <li key={item.value}>
                <Reveal delay={i * 0.08} className="h-full">
                  <button
                    type="button"
                    onClick={() => choose(item.value)}
                    aria-pressed={active}
                    className={cn(
                      'group flex h-full w-full flex-col overflow-hidden rounded-xl bg-white text-left ring-1 transition-[box-shadow,transform] duration-500 ease-out-expo hover:-translate-y-1 hover:shadow-lift',
                      active ? 'shadow-lift ring-2 ring-brand-600' : 'ring-brand-900/8',
                    )}
                  >
                    <span className="relative block aspect-[16/10] overflow-hidden bg-brand-100">
                      <img
                        src={item.image}
                        alt=""
                        loading="lazy"
                        decoding="async"
                        className="size-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
                      />
                      <span
                        aria-hidden
                        className="absolute bottom-0 left-0 grid size-14 place-items-center bg-brand-600 text-white"
                      >
                        <Icon className="size-6" strokeWidth={1.75} />
                      </span>
                    </span>
                    <span className="flex flex-1 flex-col p-7 md:p-8">
                      <span className="text-eyebrow text-brand-700">{item.eyebrow}</span>
                      <span className="mt-4 block text-h3 text-ink">{item.title}</span>
                      <span className="mt-3 block text-lg leading-relaxed text-slate-600">
                        {item.description}
                      </span>
                      <span className="mt-auto inline-flex items-center gap-2 pt-8 font-semibold text-brand-600">
                        {item.cta}
                        <ArrowRight
                          aria-hidden
                          className="size-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-1"
                        />
                      </span>
                    </span>
                  </button>
                </Reveal>
              </li>
            )
          })}
        </ul>
      </Section>

      <Section id="contact-form" tone="muted">
        <div className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal className="lg:sticky lg:top-32">
            <p className="flex items-center gap-3 text-eyebrow text-brand-700">
              <span aria-hidden className="h-0.5 w-8 bg-mint-500" />
              {form.eyebrow}
            </p>
            <h2 className="mt-6 text-h1 text-ink">{form.title}</h2>
            <p className="mt-6 text-lead text-slate-600">{form.description}</p>

            <ol className="mt-10 space-y-6">
              {form.next.map((step, i) => (
                <li key={step.title} className="flex gap-5">
                  <span
                    aria-hidden
                    className="grid size-10 shrink-0 place-items-center bg-brand-600 text-sm font-semibold text-white tabular-nums"
                    style={{ clipPath: 'polygon(10px 0, 100% 0, 100% 100%, 0 100%, 0 10px)' }}
                  >
                    {i + 1}
                  </span>
                  <span>
                    <span className="block font-semibold text-ink">{step.title}</span>
                    <span className="mt-1 block text-slate-600">{step.description}</span>
                  </span>
                </li>
              ))}
            </ol>

            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-10 inline-flex items-center gap-4 rounded-xl bg-white p-4 pr-7 ring-1 ring-brand-900/8 transition-shadow hover:shadow-lift"
            >
              <span
                aria-hidden
                className="grid size-12 place-items-center rounded-lg bg-brand-600 text-white shadow-[-4px_4px_0_var(--color-mint-400)]"
              >
                <Mail className="size-5" strokeWidth={1.75} />
              </span>
              <span>
                <span className="block text-sm text-slate-500">Prefer email?</span>
                <span className="font-semibold text-brand-700">{siteConfig.email}</span>
              </span>
            </a>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-2xl bg-white p-6 shadow-lift ring-1 ring-brand-900/8 sm:p-10">
              <LeadForm config={contactForm} preset={{ interest }} idPrefix="contact" />
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  )
}
