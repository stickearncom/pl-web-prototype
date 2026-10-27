import { useParams } from 'react-router-dom'
import { mediaItems } from '@/shared/content'
import { ctaLinks, routes, usePageMeta } from '@/shared/lib'
import { ContentDetail, CtaSection } from '@/shared/marketing'
import { NotFoundPage } from '@/modules/not-found'

export function MediaDetailPage() {
  const { slug } = useParams()
  const item = mediaItems.find((i) => i.slug === slug)
  usePageMeta({ title: item?.title, description: item?.description })
  if (!item) return <NotFoundPage />
  return (
    <>
      <ContentDetail
        item={item}
        basePath={routes.media}
        backLabel="All press and media"
        related={mediaItems.filter((i) => i.slug !== item.slug).slice(0, 3)}
      />
      <CtaSection
        title="Want to Talk to Our Team?"
        description="Whether you are a journalist, a partner, or a brand exploring OOH, we would like to hear from you."
        primary={{ label: 'Get in Touch', to: ctaLinks.talkToExpert }}
      />
    </>
  )
}
