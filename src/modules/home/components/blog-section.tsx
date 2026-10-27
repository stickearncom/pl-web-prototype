import { blogItems } from '@/shared/content'
import { Section } from '@/shared/layout'
import { routes } from '@/shared/lib'
import { ContentCard, SectionHeader } from '@/shared/marketing'
import { ButtonLink, Reveal } from '@/shared/ui'
import { homeContent } from '../home-content'

const photos = [
  '/media/billboard-corner.webp',
  '/media/billboard-flyover.webp',
  '/media/billboard-avenue.webp',
]

export function BlogSection() {
  const { blog } = homeContent
  return (
    <Section>
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeader
          align="left"
          title={blog.title}
          description={blog.description}
          className="md:max-w-2xl"
        />
        <Reveal>
          <ButtonLink to={blog.cta.to} variant="secondary" size="lg" arrow>
            {blog.cta.label}
          </ButtonLink>
        </Reveal>
      </div>
      <ul className="mt-12 grid gap-6 md:mt-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {blogItems.slice(0, 3).map((item, i) => (
          <li key={item.slug}>
            <Reveal delay={i * 0.08} className="h-full">
              <ContentCard item={{ ...item, image: photos[i] }} basePath={routes.blog} />
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  )
}
