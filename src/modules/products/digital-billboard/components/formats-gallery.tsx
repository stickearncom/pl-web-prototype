import { Section } from '@/shared/layout'
import { cn } from '@/shared/lib'
import { SectionHeader } from '@/shared/marketing'
import { Reveal } from '@/shared/ui'
import { digitalBillboardContent } from '../digital-billboard-content'

const spans = ['md:col-span-2 md:row-span-2', '', '', 'md:col-span-2', '']

export function FormatsGallery() {
  const { formats } = digitalBillboardContent
  return (
    <Section>
      <SectionHeader title={formats.title} description={formats.description} />
      <div className="mt-16 grid gap-4 sm:grid-cols-2 md:mt-20 md:[grid-auto-rows:15rem] md:grid-cols-3 md:gap-5">
        {formats.items.map((item, i) => (
          <Reveal key={item.src} delay={(i % 3) * 0.08} className={cn('h-full', spans[i])}>
            <figure className="group relative aspect-[4/3] size-full overflow-hidden rounded-2xl bg-slate-100 md:aspect-auto">
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 size-full object-cover transition-transform duration-[900ms] ease-out-expo group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-950/85 to-transparent p-5 pt-14 text-sm font-semibold text-white">
                {item.caption}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
