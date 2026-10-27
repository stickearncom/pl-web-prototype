import { trustedBrands } from '@/shared/content'
import { cn } from '@/shared/lib'

function Logos({ hidden = false }: { hidden?: boolean }) {
  return (
    <>
      {trustedBrands.map((brand) => (
        <li
          key={brand.name}
          aria-hidden={hidden || undefined}
          className={cn('flex shrink-0 items-center pr-12 sm:pr-16', hidden && 'marquee-dupe')}
        >
          <img
            src={brand.file}
            alt={hidden ? '' : brand.name}
            loading="lazy"
            decoding="async"
            className="h-9 w-auto max-w-[7.5rem] object-contain sm:h-11 sm:max-w-[9rem]"
          />
        </li>
      ))}
    </>
  )
}

/**
 * Auto scrolling logo row, no pause button by design.
 * With prefers-reduced-motion the track stops and wraps into a static, centered grid
 * (see .marquee-track in index.css).
 */
export function TrustedBrandMarquee({
  caption,
  className,
}: {
  caption?: string
  className?: string
}) {
  return (
    <div className={className}>
      {caption && (
        <p className="mx-auto mb-7 max-w-2xl text-center text-eyebrow leading-relaxed text-slate-500">
          {caption}
        </p>
      )}
      <div
        className="marquee-mask overflow-hidden"
        role="group"
        aria-label="Brands that trust Playlog"
      >
        <ul className="marquee-track flex w-max animate-marquee items-center gap-y-6">
          <Logos />
          <Logos hidden />
        </ul>
      </div>
    </div>
  )
}
