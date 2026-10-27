import { ArrowLeft, Download } from 'lucide-react'
import type { ContentItem } from '@/shared/content'
import { Section } from '@/shared/layout'
import { AppLink, ctaLinks, formatDate } from '@/shared/lib'
import { ButtonLink, Reveal } from '@/shared/ui'
import { ArticleBlocks } from './article-blocks'
import { buildToc, readingTime } from './article-utils'
import { ArticleToc } from './article-toc'
import { ContentCard } from './content-card'
import { ContentCover } from './content-cover'
import { HeroBackdrop } from './hero-backdrop'

/** Detail template shared by articles, reports, guides, and press items. */
export function ContentDetail({
  item,
  basePath,
  backLabel,
  related,
}: {
  item: ContentItem
  basePath: string
  backLabel: string
  related: ContentItem[]
}) {
  const toc = buildToc(item.body)
  const showToc = toc.length >= 3
  const hasData = item.body.some((b) => ['metrics', 'chart', 'table'].includes(b.type))
  return (
    <>
      <article>
        <header className="relative isolate -mt-20 overflow-hidden pt-20">
          <HeroBackdrop />
          <div className="container-page pt-12 pb-12 md:pt-16 md:pb-16">
            <AppLink
              to={basePath}
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:underline"
            >
              <ArrowLeft aria-hidden className="size-4" />
              {backLabel}
            </AppLink>
            <p className="mt-10 flex items-center gap-3 text-eyebrow text-brand-700">
              <span aria-hidden className="h-0.5 w-8 bg-mint-500" />
              {item.badge ?? item.category}
            </p>
            <h1 className="mt-6 max-w-4xl text-h2 text-balance text-ink">{item.title}</h1>
            <p className="mt-6 max-w-3xl text-lead text-slate-600">{item.description}</p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-600">
              <span>
                {formatDate(item.date)} · {item.readTime ?? readingTime(item.body)}
              </span>
              {item.tags && item.tags.length > 0 && (
                <ul className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md bg-brand-50 px-3 py-1.5 text-xs font-semibold text-brand-700 ring-1 ring-brand-100 ring-inset"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </header>

        <div className="container-page">
          <div className="aspect-[16/7] max-h-[30rem] w-full">
            <ContentCover item={item} size="hero" className="size-full" />
          </div>
        </div>

        <div className="container-page grid gap-10 pt-12 pb-20 md:pt-16 md:pb-28 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-16 xl:grid-cols-[16rem_minmax(0,46rem)] xl:justify-between">
          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            {showToc && <ArticleToc entries={toc} />}
            <div className="hidden rounded-xl bg-brand-950 p-6 text-white lg:block">
              <p className="text-lg leading-snug font-semibold">
                {hasData
                  ? 'See the full analysis in Playlog'
                  : 'Plan your next campaign with Playlog'}
              </p>
              <p className="mt-2 text-sm text-white/70">
                {hasData
                  ? 'Campaign-level and location-level data for your own market.'
                  : 'Talk to our team about locations, formats, and measurement.'}
              </p>
              <ButtonLink
                to={hasData ? ctaLinks.bookDemo : ctaLinks.talkToExpert}
                variant="mint"
                size="md"
                className="mt-5 w-full"
              >
                {hasData ? 'Book a demo' : 'Talk to an expert'}
              </ButtonLink>
            </div>
          </aside>

          <div className="min-w-0">
            {item.isSample && (
              <p className="mb-8 rounded-xl bg-brand-50 p-5 text-base text-brand-800 ring-1 ring-brand-100 ring-inset">
                <strong className="font-semibold">Sample content.</strong> Replace it with the final
                copy and data before publishing.
              </p>
            )}
            {item.unavailableLabel && (
              <p className="mb-8 rounded-xl bg-brand-50 p-5 text-base text-brand-800 ring-1 ring-brand-100 ring-inset">
                <strong className="font-semibold">{item.unavailableLabel}.</strong> The full report
                will be published here when the research dataset is approved.
              </p>
            )}
            <ArticleBlocks body={item.body} />
            {item.note && (
              <aside className="mt-12 rounded-xl bg-slate-50 p-7 ring-1 ring-brand-900/8 sm:p-9">
                <h2 className="text-eyebrow text-slate-500">{item.note.label}</h2>
                <div className="mt-4 space-y-3 text-base leading-relaxed text-slate-600">
                  {item.note.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </aside>
            )}
            {item.downloadUrl && (
              <ButtonLink to={item.downloadUrl} size="lg" className="mt-10">
                <Download aria-hidden className="size-4" />
                Download report
              </ButtonLink>
            )}
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <Section tone="muted">
          <h2 className="text-h2 text-ink">Keep reading</h2>
          <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {related.map((r, i) => (
              <li key={r.slug}>
                <Reveal delay={i * 0.06} className="h-full">
                  <ContentCard item={r} basePath={basePath} />
                </Reveal>
              </li>
            ))}
          </ul>
        </Section>
      )}
    </>
  )
}
