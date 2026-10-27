import { BillboardThumb } from '@/shared/illustrations'
import { Section } from '@/shared/layout'
import { cn } from '@/shared/lib'
import { SectionHeader } from '@/shared/marketing'
import { Reveal } from '@/shared/ui'
import { planningContent } from '../planning-content'

const spans = [
  'col-span-2 row-span-2 aspect-[4/3] md:aspect-auto',
  'col-span-1 aspect-square md:aspect-auto',
  'col-span-1 aspect-square md:aspect-auto',
  'col-span-2 aspect-[16/9] md:aspect-auto',
]

export function GallerySection() {
  const { gallery } = planningContent
  return (
    <Section>
      <SectionHeader title={gallery.title} description={gallery.description} />
      <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:mt-16 md:min-h-[34rem] md:grid-cols-4 md:grid-rows-2">
        {gallery.items.map((item, i) => (
          <Reveal
            key={item.alt}
            delay={i * 0.08}
            className={cn(
              'group relative overflow-hidden rounded-2xl bg-brand-50 ring-1 ring-brand-100 ring-inset',
              spans[i],
            )}
          >
            {item.src ? (
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="size-full object-cover"
              />
            ) : (
              <BillboardThumb
                tone={item.tone}
                seed={item.seed}
                className="size-full transition-transform duration-700 ease-out-expo group-hover:scale-105"
              />
            )}
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
