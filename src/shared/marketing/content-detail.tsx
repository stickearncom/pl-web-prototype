import { ArrowLeft, Download, Info } from 'lucide-react'
import type { ContentItem } from '@/shared/content'
import { CoverArt } from '@/shared/illustrations'
import { Section } from '@/shared/layout'
import { AppLink, formatDate } from '@/shared/lib'
import { ButtonLink, Reveal } from '@/shared/ui'
import { ContentCard } from './content-card'

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
  return (
    <>
      <article>
        <header className="bg-hero-glow">
          <div className="container-page max-w-4xl pt-10 pb-10 md:pt-16">
            <AppLink
              to={basePath}
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:underline"
            >
              <ArrowLeft aria-hidden className="size-4" />
              {backLabel}
            </AppLink>
            <p className="mt-8 text-eyebrow text-brand-600">{item.category}</p>
            <h1 className="mt-4 text-h1 text-balance">{item.title}</h1>
            <p className="mt-5 text-lead text-slate-600">{item.description}</p>
            <p className="mt-6 text-sm text-slate-500">
              {formatDate(item.date)}
              {item.readTime ? ` · ${item.readTime}` : ''}
            </p>
          </div>
        </header>

        <div className="container-page max-w-4xl pb-16 md:pb-24">
          <div className="overflow-hidden rounded-3xl shadow-card">
            {item.image ? (
              <img src={item.image} alt="" className="aspect-[16/8] w-full object-cover" />
            ) : (
              <CoverArt variant={item.coverVariant} className="aspect-[16/8] w-full" />
            )}
          </div>

          <div className="mx-auto mt-10 max-w-2xl md:mt-14">
            {item.isSample && (
              <p className="mb-8 flex items-start gap-3 rounded-xl bg-brand-50 p-4 text-sm text-brand-800">
                <Info aria-hidden className="mt-0.5 size-4 shrink-0" />
                This is placeholder content. Replace it with the final copy before publishing.
              </p>
            )}
            <div className="space-y-5 text-lg leading-relaxed text-slate-700">
              {item.body.map((block, i) => {
                switch (block.type) {
                  case 'heading':
                    return (
                      <h2 key={i} className="pt-4 text-h3 text-ink">
                        {block.text}
                      </h2>
                    )
                  case 'list':
                    return (
                      <ul key={i} className="list-disc space-y-2 pl-6 marker:text-mint-600">
                        {block.items.map((li) => (
                          <li key={li}>{li}</li>
                        ))}
                      </ul>
                    )
                  case 'quote':
                    return (
                      <blockquote
                        key={i}
                        className="border-l-4 border-mint-400 pl-5 text-xl font-medium text-ink"
                      >
                        {block.text}
                      </blockquote>
                    )
                  default:
                    return <p key={i}>{block.text}</p>
                }
              })}
            </div>
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
          <h2 className="text-h2">Keep reading</h2>
          <ul className="mt-8 grid gap-6 md:grid-cols-3">
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
