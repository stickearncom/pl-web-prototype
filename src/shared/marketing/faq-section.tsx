import type { FaqItem } from '@/shared/content'
import { Section } from '@/shared/layout'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  EyebrowBadge,
  Reveal,
} from '@/shared/ui'

export function FaqSection({
  title = 'Frequently asked questions',
  description,
  items,
  tone = 'muted',
  id,
}: {
  title?: string
  description?: string
  items: FaqItem[]
  tone?: 'default' | 'muted'
  id?: string
}) {
  return (
    <Section tone={tone} id={id}>
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <EyebrowBadge>FAQ</EyebrowBadge>
          <h2 className="mt-5 text-h2">{title}</h2>
          {description && <p className="mt-4 text-lead text-slate-600">{description}</p>}
        </Reveal>
        <Reveal delay={0.1}>
          <Accordion type="single" collapsible defaultValue="item-0">
            {items.map((item, i) => (
              <AccordionItem key={item.question} value={`item-${i}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>
                  <p>{item.answer}</p>
                  {item.points && (
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {item.points.map((point) => (
                        <li
                          key={point}
                          className="rounded-md bg-brand-50 px-3.5 py-1.5 text-sm font-medium text-brand-700"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </Section>
  )
}
