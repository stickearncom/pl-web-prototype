/** Light gradient with angular shapes that echo the Playlog mark. Decorative. */
export function HeroBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#eef4fa_55%,#e3f7f2_100%)]" />
      <div className="absolute inset-0 bg-grid-faint opacity-50" />
      <div
        className="absolute -top-24 right-[-8%] h-[28rem] w-[28rem] bg-brand-100/70 sm:h-[44rem] sm:w-[44rem]"
        style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }}
      />
      <div
        className="absolute top-[4%] right-0 h-40 w-40 bg-mint-200/50 sm:top-[18%] sm:right-[6%] sm:h-[26rem] sm:w-[26rem]"
        style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}
      />
      <div
        className="absolute bottom-[-10rem] left-[-6rem] h-[28rem] w-[28rem] bg-brand-600/6"
        style={{ clipPath: 'polygon(0 0, 100% 100%, 0 100%)' }}
      />
    </div>
  )
}
