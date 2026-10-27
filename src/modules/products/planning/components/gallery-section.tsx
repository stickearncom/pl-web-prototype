import { Section } from '@/shared/layout'
import { cn } from '@/shared/lib'
import { SectionHeader } from '@/shared/marketing'
import { Reveal } from '@/shared/ui'
import { planningContent } from '../planning-content'

const spans = ['md:col-span-2 md:row-span-2', '', '']

export function GallerySection() {
  const { gallery } = planningContent
  return (
    <Section tone="dark">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(135deg,#00244c_0%,#001a38_60%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-10 right-0 -z-10 h-[30rem] w-[30rem] bg-brand-600/35"
        style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }}
      />
      <SectionHeader tone="dark" title={gallery.title} description={gallery.description} />
      <div className="mt-16 grid gap-5 md:mt-20 md:min-h-[36rem] md:grid-cols-3 md:grid-rows-2">
        {gallery.items.map((item, i) => (
          <Reveal key={item.src} delay={i * 0.1} className={cn('h-full', spans[i])}>
            <figure className="group relative aspect-[4/3] size-full overflow-hidden rounded-2xl ring-1 ring-white/10 md:aspect-auto">
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 size-full object-cover transition-transform duration-[900ms] ease-out-expo group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-950/90 to-transparent p-5 pt-14 text-sm font-semibold text-white">
                {item.caption}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
