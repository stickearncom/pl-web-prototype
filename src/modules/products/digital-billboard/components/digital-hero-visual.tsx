import { DigitalDetailCard } from '@/shared/mockups'
import { PhotoFrame } from '@/shared/marketing'

/** Digital Billboard hero: large street photo, detail card overlapping at the lower right. */
export function DigitalHeroVisual() {
  return (
    <div className="relative pb-24 pl-4 sm:pb-20">
      <PhotoFrame
        src="/media/billboard-nescafe-columns.webp"
        alt="Row of digital LED columns along a tree-lined sidewalk"
        eager
        className="aspect-[4/3] w-full sm:w-[88%]"
        imgClassName="object-[24%_50%]"
      />
      <div className="absolute right-0 bottom-0 w-[78%] max-w-xs sm:w-64">
        <DigitalDetailCard />
      </div>
    </div>
  )
}
