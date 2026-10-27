import type { ReactNode } from 'react'
import { cn } from '@/shared/lib'

export function Field({
  id,
  label,
  required,
  error,
  hint,
  children,
  className,
  asGroup,
}: {
  id: string
  label: string
  required?: boolean
  error?: string
  hint?: string
  children: ReactNode
  className?: string
  /** Use for radio and checkbox groups so the label becomes a legend. */
  asGroup?: boolean
}) {
  const labelContent = (
    <>
      {label}
      {required ? (
        <span aria-hidden className="text-brand-600">
          {' '}
          *
        </span>
      ) : (
        <span className="ml-1.5 text-xs font-normal text-slate-500">Optional</span>
      )}
    </>
  )
  const Wrapper = asGroup ? 'fieldset' : 'div'
  return (
    <Wrapper className={cn('min-w-0 space-y-2', className)}>
      {asGroup ? (
        <legend className="mb-2 text-sm font-semibold text-ink">{labelContent}</legend>
      ) : (
        <label htmlFor={id} className="block text-sm font-semibold text-ink">
          {labelContent}
        </label>
      )}
      {children}
      {hint && !error && <p className="text-xs text-slate-500">{hint}</p>}
      {error && (
        <p id={`${id}-error`} role="alert" className="text-sm font-medium text-danger">
          {error}
        </p>
      )}
    </Wrapper>
  )
}
