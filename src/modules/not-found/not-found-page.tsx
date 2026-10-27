import { CtaScene } from '@/shared/illustrations'
import { Section } from '@/shared/layout'
import { routes, usePageMeta } from '@/shared/lib'
import { ButtonLink } from '@/shared/ui'

export function NotFoundPage() {
  usePageMeta({ title: 'Page not found' })
  return (
    <Section tone="dark" className="min-h-[70vh]">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="text-eyebrow text-mint-300">Error 404</p>
          <h1 className="mt-4 text-h1 text-white">This page is off the map</h1>
          <p className="mt-5 max-w-md text-lead text-white/75">
            The page you are looking for may have moved or no longer exists.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink to={routes.home} variant="mint" size="lg" arrow>
              Back to home
            </ButtonLink>
            <ButtonLink to={routes.contact} variant="outlineInverse" size="lg">
              Get in touch
            </ButtonLink>
          </div>
        </div>
        <div className="mx-auto hidden w-full max-w-sm md:block">
          <CtaScene />
        </div>
      </div>
    </Section>
  )
}
