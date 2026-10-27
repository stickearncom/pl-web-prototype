import type { ContentBlock } from '@/shared/content'
import { section } from '@/shared/content'

const placeholder = ['Replace this section with the final text from Playlog legal.']

export type LegalDoc = {
  title: string
  description: string
  /** ISO date. Leave empty until legal confirms the effective date. */
  updated?: string
  body: ContentBlock[]
}

/** Section outlines only. No legal wording is written here on purpose. */
export const privacyDoc: LegalDoc = {
  title: 'Privacy Policy',
  description:
    'How Playlog collects, uses, and protects information submitted through this website.',
  body: [
    ...section('information-we-collect', 'Information We Collect', placeholder),
    ...section('how-we-use-information', 'How We Use Information', placeholder),
    ...section('sharing', 'Sharing and Disclosure', placeholder),
    ...section('retention', 'Retention and Security', placeholder),
    ...section('your-rights', 'Your Rights', placeholder),
    ...section('contact', 'Contact', placeholder),
  ],
}

export const termsDoc: LegalDoc = {
  title: 'Terms',
  description: 'The terms that apply when you use the Playlog website.',
  body: [
    ...section('use-of-the-site', 'Use of the Site', placeholder),
    ...section('intellectual-property', 'Intellectual Property', placeholder),
    ...section('disclaimer', 'Disclaimer', placeholder),
    ...section('liability', 'Limitation of Liability', placeholder),
    ...section('changes', 'Changes to These Terms', placeholder),
    ...section('contact', 'Contact', placeholder),
  ],
}
