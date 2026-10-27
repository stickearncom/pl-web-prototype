import { useEffect } from 'react'
import { siteConfig } from './site-config'

type PageMeta = { title?: string; description?: string }

const defaultTitle = 'Playlog | Manage Billboard Campaigns More Efficiently'
const defaultDescription =
  'Playlog helps brands and agencies plan, run, and measure billboard campaigns in one connected platform.'

function setMeta(name: string, content: string, attr: 'name' | 'property' = 'name') {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

/**
 * Sets title and description per page.
 * Next.js migration: replace each call with the page's `metadata` export.
 */
export function usePageMeta({ title, description }: PageMeta) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${siteConfig.name}` : defaultTitle
    const desc = description ?? defaultDescription
    document.title = fullTitle
    setMeta('description', desc)
    setMeta('og:title', fullTitle, 'property')
    setMeta('og:description', desc, 'property')
    setMeta('og:type', 'website', 'property')
  }, [title, description])
}
