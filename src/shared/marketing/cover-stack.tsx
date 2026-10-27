import { m } from 'motion/react'
import type { ContentItem } from '@/shared/content'
import { ContentCover } from './content-cover'

/** Front cover fully visible, the others peek out behind it to the right. */
const slots = [
  'absolute top-[16%] left-0 z-30 w-[52%] aspect-[4/5]',
  'absolute top-[8%] left-[24%] z-20 w-[52%] aspect-[4/5]',
  'absolute top-0 right-0 z-10 w-[52%] aspect-[4/5]',
]

/** Hero visual for the insights pages: up to three covers stacked like a reading pile. */
export function CoverStack({ items }: { items: ContentItem[] }) {
  return (
    <div className="relative mx-auto aspect-[5/4] w-full max-w-xl sm:aspect-[6/5]">
      {items.slice(0, 3).map((item, i) => (
        <m.div
          key={item.slug}
          initial={{ y: 28 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 + i * 0.1 }}
          className={`${slots[i]} drop-shadow-[0_24px_40px_rgb(0_36_76/0.22)]`}
        >
          <ContentCover item={item} size="card" className="size-full" />
        </m.div>
      ))}
    </div>
  )
}
