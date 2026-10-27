import { Mail } from 'lucide-react'
import { formatDate, siteConfig, usePageMeta } from '@/shared/lib'
import { ArticleBlocks, ArticleToc, buildToc, HeroBackdrop } from '@/shared/marketing'
import { privacyDoc, termsDoc, type LegalDoc } from './legal-content'

function LegalDocument({ doc }: { doc: LegalDoc }) {
  usePageMeta({ title: doc.title, description: doc.description })
  const toc = buildToc(doc.body)
  return (
    <>
      <header className="relative isolate -mt-20 overflow-hidden pt-20">
        <HeroBackdrop />
        <div className="container-page py-14 md:py-20">
          <p className="flex items-center gap-3 text-eyebrow text-brand-700">
            <span aria-hidden className="h-0.5 w-8 bg-mint-500" />
            Legal
          </p>
          <h1 className="mt-6 text-h1 text-ink">{doc.title}</h1>
          <p className="mt-6 max-w-2xl text-lead text-slate-600">{doc.description}</p>
          <p className="mt-6 text-sm text-slate-600">
            {doc.updated
              ? `Last updated ${formatDate(doc.updated)}`
              : 'Effective date to be confirmed'}
          </p>
        </div>
      </header>

      <div className="container-page grid gap-10 pt-6 pb-20 md:pb-28 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-16 xl:grid-cols-[16rem_minmax(0,46rem)] xl:justify-between">
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <ArticleToc entries={toc} />
        </aside>
        <div className="min-w-0">
          <p className="mb-8 rounded-xl bg-brand-50 p-5 text-base text-brand-800 ring-1 ring-brand-100 ring-inset">
            <strong className="font-semibold">Placeholder.</strong> Replace this page with the final
            text from Playlog legal before the site goes live.
          </p>
          <ArticleBlocks body={doc.body} />
          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-12 inline-flex items-center gap-4 rounded-xl bg-white p-4 pr-7 ring-1 ring-brand-900/10 transition-shadow hover:shadow-lift"
          >
            <span
              aria-hidden
              className="grid size-12 place-items-center rounded-lg bg-brand-600 text-white shadow-[-4px_4px_0_var(--color-mint-400)]"
            >
              <Mail className="size-5" strokeWidth={1.75} />
            </span>
            <span>
              <span className="block text-sm text-slate-500">Questions?</span>
              <span className="font-semibold text-brand-700">{siteConfig.email}</span>
            </span>
          </a>
        </div>
      </div>
    </>
  )
}

export const PrivacyPage = () => <LegalDocument doc={privacyDoc} />
export const TermsPage = () => <LegalDocument doc={termsDoc} />
