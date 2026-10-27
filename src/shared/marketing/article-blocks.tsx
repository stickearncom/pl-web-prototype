import type { ContentBlock } from '@/shared/content'
import { cn, ctaLinks } from '@/shared/lib'
import { ButtonLink } from '@/shared/ui'

type Block = ContentBlock

const h2 =
  'scroll-mt-28 text-[1.75rem] leading-[1.15] font-bold tracking-tight text-ink md:text-[2.125rem]'

function BlockHeading({ id, heading }: { id?: string; heading?: string }) {
  if (!heading) return null
  return (
    <h2 id={id} className={h2}>
      {heading}
    </h2>
  )
}

function ChartGlyph({ kind }: { kind: 'bar' | 'line' | 'map' }) {
  const stroke = 'currentColor'
  return (
    <svg viewBox="0 0 240 120" className="h-28 w-full max-w-xs text-brand-200" aria-hidden>
      <path d="M8 112H232" stroke={stroke} strokeWidth="2" />
      {kind === 'bar' && (
        <g fill={stroke}>
          {[28, 52, 40, 76, 62, 92].map((h, i) => (
            <rect key={i} x={20 + i * 36} y={112 - h} width="22" height={h} />
          ))}
        </g>
      )}
      {kind === 'line' && (
        <>
          <polyline
            points="12,92 56,70 100,78 144,44 188,52 228,20"
            fill="none"
            stroke={stroke}
            strokeWidth="4"
            strokeLinejoin="round"
          />
          <polyline
            points="12,100 56,92 100,84 144,86 188,70 228,60"
            fill="none"
            stroke={stroke}
            strokeWidth="4"
            strokeLinejoin="round"
            opacity="0.5"
          />
        </>
      )}
      {kind === 'map' && (
        <g fill={stroke}>
          <polygon points="30,100 90,20 110,100" />
          <polygon points="120,100 150,40 200,100" opacity="0.6" />
          <polygon points="170,100 205,60 228,100" opacity="0.35" />
        </g>
      )}
    </svg>
  )
}

function Metrics({ block }: { block: Extract<Block, { type: 'metrics' }> }) {
  return (
    <section className="relative isolate overflow-hidden rounded-2xl bg-brand-950 p-7 text-white sm:p-10">
      <div
        aria-hidden
        className="absolute -top-8 -right-8 -z-10 size-56 bg-brand-500/25"
        style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }}
      />
      <h2
        id={block.id}
        className="scroll-mt-28 text-[1.75rem] leading-[1.15] font-bold tracking-tight md:text-[2.125rem]"
      >
        {block.heading}
      </h2>
      {block.description && <p className="mt-3 max-w-2xl text-white/70">{block.description}</p>}
      <dl
        className={cn(
          'mt-8 grid gap-x-8 gap-y-8',
          block.metrics.length === 2 && 'sm:grid-cols-2',
          block.metrics.length >= 3 && 'sm:grid-cols-3',
        )}
      >
        {block.metrics.map((metric) => (
          <div key={metric.label} className="border-l-4 border-mint-400 pl-5">
            <dd className="order-first text-[2rem] leading-none font-bold tracking-tight text-mint-300 tabular-nums md:text-[2.5rem]">
              {metric.value}
            </dd>
            <dt className="mt-3 text-sm leading-snug text-white/75">{metric.label}</dt>
          </div>
        ))}
      </dl>
      {block.note && (
        <p className="mt-8 border-t border-white/15 pt-6 text-base leading-relaxed text-white/80">
          {block.note}
        </p>
      )}
    </section>
  )
}

export function ArticleBlocks({ body }: { body: Block[] }) {
  return (
    <div className="space-y-8 text-lg leading-relaxed text-slate-700">
      {body.map((block, i) => {
        switch (block.type) {
          case 'heading':
            return (
              <h2 key={i} id={block.id} className={cn(h2, i > 0 && 'pt-6')}>
                {block.text}
              </h2>
            )
          case 'paragraph':
            return (
              <p key={i} className="-mt-3">
                {block.text}
              </p>
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
                className="border-l-4 border-mint-400 pl-6 text-xl font-medium text-ink"
              >
                {block.text}
              </blockquote>
            )
          case 'points':
            return (
              <section key={i} className="pt-6">
                <BlockHeading id={block.id} heading={block.heading} />
                <ul className="mt-6 divide-y divide-brand-900/10 border-y border-brand-900/10">
                  {block.items.map((item) => (
                    <li key={item.title ?? item.text} className="flex gap-5 py-6">
                      <span
                        aria-hidden
                        className="mt-2.5 size-2.5 shrink-0 bg-brand-600 shadow-[-3px_3px_0_var(--color-mint-400)]"
                      />
                      <div>
                        {item.title && (
                          <p className="text-xl leading-snug font-semibold text-ink">
                            {item.title}
                          </p>
                        )}
                        <p className={cn(item.title && 'mt-2')}>{item.text}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            )
          case 'steps':
            return (
              <section key={i} className="pt-6">
                <BlockHeading id={block.id} heading={block.heading} />
                <ol className="mt-6 divide-y divide-brand-900/10 border-y border-brand-900/10">
                  {block.items.map((item, n) => (
                    <li key={item} className="flex items-baseline gap-6 py-5">
                      <span
                        aria-hidden
                        className="w-10 shrink-0 text-2xl font-bold text-brand-600 tabular-nums"
                      >
                        {String(n + 1).padStart(2, '0')}
                      </span>
                      <span className="text-ink">{item}</span>
                    </li>
                  ))}
                </ol>
              </section>
            )
          case 'metrics':
            return <Metrics key={i} block={block} />
          case 'callout':
            return (
              <aside
                key={i}
                className="rounded-xl border-l-4 border-mint-500 bg-brand-50 p-7 sm:p-9"
              >
                <h2 id={block.id} className="scroll-mt-28 text-eyebrow text-brand-700">
                  {block.heading}
                </h2>
                <div className="mt-5 space-y-4 text-xl leading-relaxed font-medium text-ink">
                  {block.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </aside>
            )
          case 'table':
            return (
              <section key={i} className="pt-6">
                <BlockHeading id={block.id} heading={block.heading} />
                <div className="mt-6 overflow-x-auto rounded-xl ring-1 ring-brand-900/10">
                  <table className="w-full min-w-[28rem] border-collapse text-left text-base">
                    <thead>
                      <tr className="bg-brand-950 text-white">
                        {block.columns.map((c) => (
                          <th key={c} scope="col" className="px-6 py-4 text-eyebrow">
                            {c}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {block.rows.map((row) => (
                        <tr key={row[0]} className="even:bg-slate-50">
                          {row.map((cell, n) =>
                            n === 0 ? (
                              <th key={n} scope="row" className="px-6 py-4 font-semibold text-ink">
                                {cell}
                              </th>
                            ) : (
                              <td key={n} className="px-6 py-4 tabular-nums">
                                {cell}
                              </td>
                            ),
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )
          case 'chart':
            return (
              <section key={i} className="pt-6">
                <BlockHeading id={block.id} heading={block.heading} />
                {block.description && <p className="mt-4">{block.description}</p>}
                <div className="mt-6 flex flex-col items-center gap-5 rounded-xl border border-dashed border-brand-300 bg-slate-50 px-6 py-10 text-center">
                  <ChartGlyph kind={block.kind} />
                  <p className="font-semibold text-ink">{block.label}</p>
                  <ButtonLink to={ctaLinks.bookDemo} variant="secondary" size="md" arrow>
                    See the full data in Playlog
                  </ButtonLink>
                </div>
              </section>
            )
          default:
            return null
        }
      })}
    </div>
  )
}
