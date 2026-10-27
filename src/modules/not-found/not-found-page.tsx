import { ArrowRight } from 'lucide-react'
import { AppLink, routes, usePageMeta } from '@/shared/lib'
import { HeroBackdrop } from '@/shared/marketing'
import { ButtonLink } from '@/shared/ui'

const links = [
  { label: 'Billboard', to: routes.billboard },
  { label: 'Planning', to: routes.planning },
  { label: 'Playlog Insight', to: routes.insightArticles },
  { label: 'OOH Guide', to: routes.blog },
]

export function NotFoundPage() {
  usePageMeta({ title: 'Page not found' })
  return (
    <section className="relative isolate -mt-20 flex min-h-[85vh] items-center overflow-hidden pt-20">
      <HeroBackdrop />
      <div className="container-page py-16">
        <p
          aria-hidden
          className="text-[clamp(6rem,3rem+18vw,15rem)] leading-none font-bold tracking-tighter text-brand-600 [text-shadow:-0.04em_0.04em_0_var(--color-mint-400)]"
        >
          404
        </p>
        <h1 className="mt-6 max-w-2xl text-h1 text-ink">This page is off the map</h1>
        <p className="mt-6 max-w-xl text-lead text-slate-600">
          The page you are looking for may have moved or no longer exists.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <ButtonLink to={routes.home} size="lg" arrow>
            Back to home
          </ButtonLink>
          <ButtonLink to={routes.contact} variant="secondary" size="lg">
            Get in touch
          </ButtonLink>
        </div>
        <ul className="mt-14 flex flex-wrap gap-x-8 gap-y-3 border-t border-brand-900/10 pt-6">
          {links.map((link) => (
            <li key={link.to}>
              <AppLink
                to={link.to}
                className="group inline-flex items-center gap-2 font-semibold text-brand-700 hover:underline"
              >
                {link.label}
                <ArrowRight
                  aria-hidden
                  className="size-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-1"
                />
              </AppLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
