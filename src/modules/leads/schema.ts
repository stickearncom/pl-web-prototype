import { z } from 'zod'
import type { LeadField, LeadValues } from './contracts'

const phonePattern = /^\+?[\d\s().-]{7,}$/

export function buildSchema(fields: LeadField[]) {
  const shape: Record<string, z.ZodType> = {}
  for (const field of fields) {
    const required = field.required ?? false
    switch (field.kind) {
      case 'email':
        shape[field.name] = required
          ? z.email('Enter a valid work email')
          : z.union([z.literal(''), z.email('Enter a valid work email')])
        break
      case 'tel': {
        const base = z.string().trim().regex(phonePattern, 'Enter a valid phone number')
        shape[field.name] = required ? base : z.union([z.literal(''), base])
        break
      }
      case 'checkboxes':
        shape[field.name] = required
          ? z.array(z.string()).min(1, 'Select at least one option')
          : z.array(z.string())
        break
      case 'select':
      case 'segmented':
        shape[field.name] = required ? z.string().min(1, 'Please choose one') : z.string()
        break
      default:
        shape[field.name] = required
          ? z.string().trim().min(1, 'This field is required')
          : z.string().trim()
    }
  }
  return z.object(shape)
}

export function defaultsFor(fields: LeadField[], preset: LeadValues = {}): LeadValues {
  const out: LeadValues = {}
  for (const field of fields) {
    out[field.name] = preset[field.name] ?? (field.kind === 'checkboxes' ? [] : '')
  }
  return out
}
