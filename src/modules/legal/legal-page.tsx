import { Section } from '@/shared/layout'
import { siteConfig, usePageMeta } from '@/shared/lib'

function LegalPlaceholder({ title }: { title: string }) {
  usePageMeta({ title })
  return (
    <Section className="min-h-[60vh]">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-h1">{title}</h1>
        <p className="mt-6 text-lead text-slate-600">
          This page is a placeholder. Replace it with the final text from Playlog legal before the
          site goes live.
        </p>
        <p className="mt-4 text-slate-600">
          Questions in the meantime? Write to{' '}
          <a
            className="font-semibold text-brand-600 underline underline-offset-2"
            href={`mailto:${siteConfig.email}`}
          >
            {siteConfig.email}
          </a>
          .
        </p>
      </div>
    </Section>
  )
}

export const PrivacyPage = () => <LegalPlaceholder title="Privacy Policy" />
export const TermsPage = () => <LegalPlaceholder title="Terms" />
