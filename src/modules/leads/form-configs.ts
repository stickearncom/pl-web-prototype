import { ctaLinks } from '@/shared/lib'
import type { LeadField, LeadFormConfig } from './contracts'

const roleOptions = [
  { value: 'ceo', label: 'CEO' },
  { value: 'cto', label: 'CTO' },
  { value: 'director', label: 'Director' },
  { value: 'head-of-department', label: 'Head of Department' },
  { value: 'team-lead', label: 'Team Lead' },
  { value: 'expert-staff', label: 'Expert Staff' },
  { value: 'entry-staff', label: 'Entry Staff' },
  { value: 'other', label: 'Other' },
]

const identity = (nameLabel = 'Full name'): LeadField[] => [
  {
    kind: 'text',
    name: 'fullName',
    label: nameLabel,
    required: true,
    autoComplete: 'name',
    half: true,
  },
  {
    kind: 'text',
    name: 'company',
    label: 'Company name',
    required: true,
    autoComplete: 'organization',
    half: true,
  },
  {
    kind: 'email',
    name: 'workEmail',
    label: 'Work email',
    required: true,
    autoComplete: 'email',
    placeholder: 'name@company.com',
    half: true,
  },
  {
    kind: 'tel',
    name: 'phone',
    label: 'Phone number',
    required: true,
    autoComplete: 'tel',
    placeholder: '+62',
    half: true,
  },
]

const role: LeadField = {
  kind: 'select',
  name: 'role',
  label: 'Company role',
  required: true,
  placeholder: 'Select your role',
  options: roleOptions,
}

export const contactForm: LeadFormConfig = {
  source: 'contact',
  submitLabel: 'Submit',
  successTitle: 'Thank you, we have your message',
  successBody: 'Our team will get back to you with the right next step.',
  fields: [
    {
      kind: 'segmented',
      name: 'interest',
      label: 'I am interested in',
      required: true,
      options: [
        { value: 'demo', label: 'Demo' },
        { value: 'advertising', label: 'Advertising' },
        { value: 'partnership', label: 'Partnership' },
      ],
    },
    ...identity(),
    {
      kind: 'textarea',
      name: 'message',
      label: 'Tell us more about your needs',
      placeholder: 'Share your goals, timeline, or anything we should know.',
    },
  ],
}

export const measurementForm: LeadFormConfig = {
  source: 'measurement',
  submitLabel: 'Request demo',
  successTitle: 'Your request is in',
  successBody:
    'Our team will reach out to arrange your session. If you chose the free trial, you can open the dashboard now.',
  successAction: (values) =>
    Array.isArray(values.interests) && values.interests.includes('free-trial')
      ? { label: 'Open Playlog dashboard', to: ctaLinks.openDashboard }
      : null,
  fields: [
    {
      kind: 'text',
      name: 'fullName',
      label: 'Name',
      required: true,
      autoComplete: 'name',
      half: true,
    },
    {
      kind: 'text',
      name: 'company',
      label: 'Company',
      required: true,
      autoComplete: 'organization',
      half: true,
    },
    {
      kind: 'email',
      name: 'workEmail',
      label: 'Work email',
      required: true,
      autoComplete: 'email',
      placeholder: 'name@company.com',
      half: true,
    },
    {
      kind: 'tel',
      name: 'phone',
      label: 'Phone number',
      required: true,
      autoComplete: 'tel',
      placeholder: '+62',
      half: true,
    },
    role,
    {
      kind: 'checkboxes',
      name: 'interests',
      label: 'I am interested in',
      required: true,
      options: [
        { value: 'product-demo', label: 'Product demo' },
        { value: 'free-trial', label: 'Free trial' },
        { value: 'measurement-consultation', label: 'Measurement consultation' },
      ],
    },
  ],
}

export const competitiveForm: LeadFormConfig = {
  source: 'competitive-landscape',
  submitLabel: 'Submit',
  successTitle: 'Thank you, we have your details',
  successBody: 'Our team will follow up to help you explore the Competitive Landscape.',
  fields: [
    ...identity(),
    role,
    {
      kind: 'textarea',
      name: 'message',
      label: 'Message',
      placeholder: 'Tell us which categories or cities you want to understand.',
    },
    {
      kind: 'checkboxes',
      name: 'interests',
      label: 'I am interested in',
      required: true,
      options: [
        { value: 'live-demo', label: 'I would like a live demo' },
        { value: 'competitive-landscape', label: 'I am interested in Competitive Landscape' },
      ],
    },
  ],
}

export const billboardForm: LeadFormConfig = {
  source: 'billboard',
  submitLabel: 'Send my campaign brief',
  successTitle: 'Thank you, your brief is with our team',
  successBody:
    'We will review your objectives and come back with billboard opportunities that fit.',
  fields: [
    {
      kind: 'text',
      name: 'fullName',
      label: 'Name',
      required: true,
      autoComplete: 'name',
      half: true,
    },
    {
      kind: 'text',
      name: 'company',
      label: 'Company',
      required: true,
      autoComplete: 'organization',
      half: true,
    },
    {
      kind: 'email',
      name: 'workEmail',
      label: 'Work email',
      required: true,
      autoComplete: 'email',
      placeholder: 'name@company.com',
      half: true,
    },
    {
      kind: 'tel',
      name: 'phone',
      label: 'Phone number',
      required: true,
      autoComplete: 'tel',
      placeholder: '+62',
      half: true,
    },
    {
      kind: 'textarea',
      name: 'campaign',
      label: 'Tell us about your campaign',
      placeholder: 'Objectives, audience, timing, budget range.',
    },
    {
      kind: 'checkboxes',
      name: 'cities',
      label: 'Where do you want to advertise?',
      required: true,
      columns: 2,
      options: [
        { value: 'jakarta', label: 'Jakarta' },
        { value: 'greater-jakarta', label: 'Greater Jakarta' },
        { value: 'bandung', label: 'Bandung' },
        { value: 'surabaya', label: 'Surabaya' },
        { value: 'other', label: 'Other' },
      ],
    },
    {
      kind: 'checkboxes',
      name: 'lookingFor',
      label: 'What are you looking for?',
      required: true,
      columns: 2,
      options: [
        { value: 'billboard', label: 'Billboard' },
        { value: 'multiple-locations', label: 'Multiple locations' },
        { value: 'city-wide', label: 'City-wide campaign' },
        { value: 'recommendation', label: 'Billboard recommendation' },
      ],
    },
  ],
}
