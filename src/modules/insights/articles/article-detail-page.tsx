import { useParams } from 'react-router-dom'
import { articleItems } from '@/shared/content'
import { routes, usePageMeta, ctaLinks } from '@/shared/lib'
import { ContentDetail, CtaSection } from '@/shared/marketing'
import { NotFoundPage } from '@/modules/not-found'

export function ArticleDetailPage() {
  const { slug } = useParams()
  const item = articleItems.find((i) => i.slug === slug)
  usePageMeta({ title: item?.title, description: item?.description })
  if (!item) return <NotFoundPage />
  return (
    <>
      <ContentDetail
        item={item}
        basePath={routes.insightArticles}
        backLabel="All insights"
        related={articleItems.filter((i) => i.slug !== item.slug).slice(0, 3)}
      />
      <CtaSection
        title="Turn Market Insights Into Your Next Campaign"
        description="Know the market. Find the opportunity. Build a smarter OOH campaign with Playlog."
        primary={{ label: 'Start Campaign Now', to: ctaLinks.startCampaign }}
      />
    </>
  )
}
