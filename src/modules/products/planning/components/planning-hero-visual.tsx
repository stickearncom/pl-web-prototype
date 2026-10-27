import { PlanningMockup } from '@/shared/mockups'
import { PhotoFrame } from '@/shared/marketing'

/** Planning hero: location photo behind on the right, planning map mockup in front on the left. */
export function PlanningHeroVisual() {
  return (
    <div className="relative pt-14 pb-12 sm:pt-24 sm:pb-16">
      <PhotoFrame
        src="/media/billboard-flyover.webp"
        alt="Digital billboards mounted on elevated toll road pillars"
        eager
        className="absolute top-0 right-0 h-[80%] w-[56%]"
        imgClassName="object-[72%_50%]"
      />
      <div className="relative w-[88%] sm:w-[80%]">
        <PlanningMockup />
      </div>
    </div>
  )
}
