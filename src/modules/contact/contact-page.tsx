import { ArrowRight, Mail } from 'lucide-react'
import { useState } from 'react'
import { Section } from '@/shared/layout'
import { cn, siteConfig, useSearchParam, usePageMeta } from '@/shared/lib'
import { Reveal } from '@/shared/ui'
import { contactForm, LeadForm } from '@/modules/leads'
import { contactContent } from './contact-content'

const validInterests = ['demo', 'advertising', 'partnership']

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
      <section className="relative isolate overflow-hidden bg-hero-glow">
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-grid-faint opacity-60"
          aria-hidden
        />
        <div className="container-page pt-12 pb-10 text-center md:pt-20 md:pb-14">
          <h1 className="mx-auto max-w-3xl animate-rise-in text-h1 motion-reduce:animate-none">
            {hero.title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl animate-rise-in text-lead text-slate-600 [animation-delay:80ms] motion-reduce:animate-none">
            {hero.description}
          </p>
        </div>
      </section>

      <Section spacing={false} className="pb-8 md:pb-12">
        <h2 className="mb-6 text-center text-eyebrow text-slate-500">{choices.title}</h2>
        <ul className="grid gap-5 md:grid-cols-3">
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
                      'group flex h-full w-full flex-col rounded-2xl border p-6 text-left transition-[box-shadow,transform,border-color] duration-300 ease-out-expo hover:-translate-y-1 md:p-7',
                      active
                        ? 'border-brand-600 bg-brand-50 shadow-lift'
                        : 'border-slate-200 bg-white shadow-card hover:shadow-lift',
                    )}
                  >
                    <span
                      aria-hidden
                      className="grid size-12 place-items-center rounded-xl bg-brand-600 text-white shadow-[-4px_4px_0_var(--color-mint-400)]"
                    >
                      <Icon className="size-6" strokeWidth={1.75} />
                    </span>
                    <span className="mt-6 text-eyebrow text-brand-600">{item.eyebrow}</span>
                    <span className="mt-1 text-sm text-slate-500">{item.tagline}</span>
                    <span className="mt-4 block text-h3">{item.title}</span>
                    <span className="mt-3 block text-slate-600">{item.description}</span>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-brand-600">
                      {item.cta}
                      <ArrowRight
                        aria-hidden
                        className="size-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-1"
                      />
                    </span>
                  </button>
                </Reveal>
              </li>
            )
          })}
        </ul>
      </Section>

      <Section id="contact-form" className="pt-12 md:pt-16">
        <div className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal className="lg:sticky lg:top-28">
            <h2 className="text-h2">{form.title}</h2>
            <p className="mt-4 text-lead text-slate-600">{form.description}</p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 pr-6 shadow-card transition-shadow hover:shadow-lift"
            >
              <span
                aria-hidden
                className="grid size-11 place-items-center rounded-xl bg-brand-600 text-white shadow-[-3px_3px_0_var(--color-mint-400)]"
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
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lift sm:p-8">
              <LeadForm config={contactForm} preset={{ interest }} idPrefix="contact" />
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  )
}
