import { usePageMeta } from '@/shared/lib'
import { CtaSection } from '@/shared/marketing'
import { BlogSection } from './components/blog-section'
import { DigitalShowcase } from './components/digital-showcase'
import { HomeHero } from './components/home-hero'
import { PlatformShowcase } from './components/platform-showcase'
import { UspSection } from './components/usp-section'
import { homeContent } from './home-content'

export function HomePage() {
  usePageMeta({ description: homeContent.meta.description })
  const { cta } = homeContent
  return (
    <>
      <HomeHero />
      <PlatformShowcase />
      <DigitalShowcase />
      <UspSection />
      <BlogSection />
      <CtaSection
        title={cta.title}
        description={cta.description}
        primary={cta.primary}
        secondary={cta.secondary}
      />
    </>
  )
}
