import type { Option } from '@/shared/forms'

export type LeadSource = 'contact' | 'measurement' | 'competitive-landscape' | 'billboard'

export type LeadValues = Record<string, string | string[]>

export type LeadField =
  | {
      kind: 'text' | 'email' | 'tel'
      name: string
      label: string
      required?: boolean
      placeholder?: string
      autoComplete?: string
      half?: boolean
    }
  | { kind: 'textarea'; name: string; label: string; required?: boolean; placeholder?: string }
  | {
      kind: 'select'
      name: string
      label: string
      required?: boolean
      placeholder?: string
      options: Option[]
      half?: boolean
    }
  | { kind: 'segmented'; name: string; label: string; required?: boolean; options: Option[] }
  | {
      kind: 'checkboxes'
      name: string
      label: string
      required?: boolean
      options: Option[]
      columns?: 1 | 2
    }

export type LeadFormConfig = {
  source: LeadSource
  fields: LeadField[]
  submitLabel: string
  successTitle: string
  successBody: string
  /** Optional follow up action on the success panel, based on what was submitted. */
  successAction?: (values: LeadValues) => { label: string; to: string } | null
}

/** What leaves the browser. A backend (for example a Next.js API route) turns this into an email. */
export type LeadPayload = {
  source: LeadSource
  to: string
  page: string
  submittedAt: string
  utm: Record<string, string>
  values: LeadValues
}
