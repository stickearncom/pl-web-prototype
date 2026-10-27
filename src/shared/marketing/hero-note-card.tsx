import { ArrowRight } from 'lucide-react'
import { AppLink } from '@/shared/lib'

/** Compact linked card that sits on a hero photo (HeroCompose variant="card"). */
export function HeroNoteCard({
  eyebrow,
  title,
  meta,
  to,
}: {
  eyebrow: string
  title: string
  meta?: string
  to: string
}) {
  return (
    <AppLink
      to={to}
      className="group block rounded-xl bg-white p-5 shadow-lift ring-1 ring-brand-900/8 transition-transform duration-500 ease-out-expo hover:-translate-y-1"
    >
      <p className="flex items-center gap-3 text-eyebrow text-brand-700">
        <span aria-hidden className="h-0.5 w-6 bg-mint-500" />
        {eyebrow}
      </p>
      <p className="mt-3 text-lg leading-snug font-semibold text-ink">{title}</p>
      <span className="mt-4 flex items-center justify-between text-sm">
        <span className="text-slate-500">{meta}</span>
        <ArrowRight
          aria-hidden
          className="size-4 text-brand-600 transition-transform duration-300 ease-out-expo group-hover:translate-x-1"
        />
      </span>
    </AppLink>
  )
}
