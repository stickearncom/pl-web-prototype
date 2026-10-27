import { readUtm, siteConfig } from '@/shared/lib'
import type { LeadPayload, LeadSource, LeadValues } from './contracts'

/**
 * Submission adapter. The UI only knows this function.
 *
 * - No VITE_LEAD_ENDPOINT: runs as a stub (waits briefly, logs in dev) so the UX can be reviewed.
 * - With VITE_LEAD_ENDPOINT: POSTs the payload as JSON. Point it at a Next.js API route
 *   that emails info@playlog.io.
 */
export async function submitLead(source: LeadSource, values: LeadValues): Promise<void> {
  const payload: LeadPayload = {
    source,
    to: siteConfig.email,
    page: window.location.pathname,
    submittedAt: new Date().toISOString(),
    utm: readUtm(),
    values,
  }
  const endpoint = import.meta.env.VITE_LEAD_ENDPOINT as string | undefined

  if (!endpoint) {
    await new Promise((resolve) => setTimeout(resolve, 800))
    if (import.meta.env.DEV) console.info('[leads] stub submit', payload)
    return
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  if (!response.ok) throw new Error(`Lead submission failed with status ${response.status}`)
}
