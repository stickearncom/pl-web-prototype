import type { AnalyticsEvent } from './events'

export { analyticsEvents } from './events'

/**
 * Analytics stub. This release has no vendor.
 * When Marcom picks a tool (for example Cloudflare Web Analytics or Plausible),
 * forward the call here. Call sites stay unchanged.
 */
export function track(event: AnalyticsEvent, props?: Record<string, string | number | boolean>) {
  if (import.meta.env.DEV) {
    console.debug('[analytics]', event, props ?? {})
  }
}
