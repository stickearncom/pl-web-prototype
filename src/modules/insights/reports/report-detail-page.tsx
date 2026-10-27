import { useParams } from 'react-router-dom'
import { reportItems } from '@/shared/content'
import { ctaLinks, routes, usePageMeta } from '@/shared/lib'
import { ContentDetail, CtaSection } from '@/shared/marketing'
import { NotFoundPage } from '@/modules/not-found'

export function ReportDetailPage() {
  const { slug } = useParams()
  const item = reportItems.find((i) => i.slug === slug)
  usePageMeta({ title: item?.title, description: item?.description })
  if (!item) return <NotFoundPage />
  return (
    <>
      <ContentDetail
        item={item}
        basePath={routes.insightReports}
        backLabel="All reports"
        related={reportItems.filter((i) => i.slug !== item.slug).slice(0, 3)}
      />
      <CtaSection
        title="Turn Market Insights Into Your Next Move"
        description="Looking to advertise with Playlog or explore billboard opportunities for your brand?"
        primary={{ label: 'Talk to Our Team', to: ctaLinks.talkToExpert }}
      />
    </>
  )
}
