/** Light gradient with angular shapes that echo the Playlog mark. Decorative. */
export function HeroBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#eef4fa_55%,#e3f7f2_100%)]" />
      <div className="absolute inset-0 bg-grid-faint opacity-50" />
      <div
        className="absolute -top-24 right-[-8%] h-[44rem] w-[44rem] bg-brand-100/70"
        style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }}
      />
      <div
        className="absolute top-[18%] right-[6%] h-[26rem] w-[26rem] bg-mint-200/50"
        style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}
      />
      <div
        className="absolute bottom-[-10rem] left-[-6rem] h-[28rem] w-[28rem] bg-brand-600/6"
        style={{ clipPath: 'polygon(0 0, 100% 100%, 0 100%)' }}
      />
    </div>
  )
}
