export const analyticsEvents = {
  ctaClick: 'cta_click',
  formStart: 'form_start',
  formSubmit: 'form_submit',
  formError: 'form_error',
  reportDownload: 'report_download',
} as const

export type AnalyticsEvent = (typeof analyticsEvents)[keyof typeof analyticsEvents]
