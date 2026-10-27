import { useParams } from 'react-router-dom'
import { blogItems } from '@/shared/content'
import { ctaLinks, routes, usePageMeta } from '@/shared/lib'
import { ContentDetail, CtaSection } from '@/shared/marketing'
import { NotFoundPage } from '@/modules/not-found'

export function BlogDetailPage() {
  const { slug } = useParams()
  const item = blogItems.find((i) => i.slug === slug)
  usePageMeta({ title: item?.title, description: item?.description })
  if (!item) return <NotFoundPage />
  return (
    <>
      <ContentDetail
        item={item}
        basePath={routes.blog}
        backLabel="All guides"
        related={blogItems.filter((i) => i.slug !== item.slug).slice(0, 3)}
      />
      <CtaSection
        title="Planning Your Next Billboard Campaign?"
        description="Our team can help you explore billboard opportunities, compare formats, and plan a campaign that fits your goals."
        primary={{ label: 'Talk to an Expert', to: ctaLinks.talkToExpert }}
      />
    </>
  )
}
