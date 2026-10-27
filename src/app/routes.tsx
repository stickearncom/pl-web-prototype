import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { NotFoundPage } from '@/modules/not-found'
import { SiteLayout } from '@/shared/layout'
import { ScrollManager } from './scroll-manager'

// Every page is code split. Each module exposes its pages through its index.ts.
const HomePage = lazy(() => import('@/modules/home').then((m) => ({ default: m.HomePage })))
const PlanningPage = lazy(() =>
  import('@/modules/products/planning').then((m) => ({ default: m.PlanningPage })),
)
const MeasurementPage = lazy(() =>
  import('@/modules/products/measurement').then((m) => ({ default: m.MeasurementPage })),
)
const CompetitiveLandscapePage = lazy(() =>
  import('@/modules/products/competitive-landscape').then((m) => ({
    default: m.CompetitiveLandscapePage,
  })),
)
const DigitalBillboardPage = lazy(() =>
  import('@/modules/products/digital-billboard').then((m) => ({ default: m.DigitalBillboardPage })),
)
const BillboardPage = lazy(() =>
  import('@/modules/products/billboard').then((m) => ({ default: m.BillboardPage })),
)
const ArticlesPage = lazy(() =>
  import('@/modules/insights/articles').then((m) => ({ default: m.ArticlesPage })),
)
const ArticleDetailPage = lazy(() =>
  import('@/modules/insights/articles').then((m) => ({ default: m.ArticleDetailPage })),
)
const ReportsPage = lazy(() =>
  import('@/modules/insights/reports').then((m) => ({ default: m.ReportsPage })),
)
const ReportDetailPage = lazy(() =>
  import('@/modules/insights/reports').then((m) => ({ default: m.ReportDetailPage })),
)
const BlogPage = lazy(() => import('@/modules/blog').then((m) => ({ default: m.BlogPage })))
const BlogDetailPage = lazy(() =>
  import('@/modules/blog').then((m) => ({ default: m.BlogDetailPage })),
)
const MediaPage = lazy(() => import('@/modules/media').then((m) => ({ default: m.MediaPage })))
const MediaDetailPage = lazy(() =>
  import('@/modules/media').then((m) => ({ default: m.MediaDetailPage })),
)
const AboutPage = lazy(() => import('@/modules/about').then((m) => ({ default: m.AboutPage })))
const ContactPage = lazy(() =>
  import('@/modules/contact').then((m) => ({ default: m.ContactPage })),
)
const PrivacyPage = lazy(() => import('@/modules/legal').then((m) => ({ default: m.PrivacyPage })))
const TermsPage = lazy(() => import('@/modules/legal').then((m) => ({ default: m.TermsPage })))
// Dev only: all illustrations on one page. Not part of the production build.
const SceneLab = import.meta.env.DEV ? lazy(() => import('./scene-lab')) : null

export function AppRoutes() {
  return (
    <SiteLayout>
      <ScrollManager />
      <Suspense fallback={<div className="min-h-[60vh]" aria-busy />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/planning" element={<PlanningPage />} />
          <Route path="/products/measurement" element={<MeasurementPage />} />
          <Route path="/products/competitive-landscape" element={<CompetitiveLandscapePage />} />
          <Route path="/products/digital-billboard" element={<DigitalBillboardPage />} />
          <Route path="/products/billboard" element={<BillboardPage />} />
          <Route path="/insights/articles" element={<ArticlesPage />} />
          <Route path="/insights/articles/:slug" element={<ArticleDetailPage />} />
          <Route path="/insights/reports" element={<ReportsPage />} />
          <Route path="/insights/reports/:slug" element={<ReportDetailPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogDetailPage />} />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/media/:slug" element={<MediaDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          {SceneLab && <Route path="/__lab" element={<SceneLab />} />}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </SiteLayout>
  )
}
