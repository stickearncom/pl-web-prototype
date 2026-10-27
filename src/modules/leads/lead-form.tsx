import { zodResolver } from '@hookform/resolvers/zod'
import { CheckCircle2, Loader2 } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { Controller, useForm, type Resolver } from 'react-hook-form'
import { analyticsEvents, track } from '@/shared/analytics'
import { CheckboxGroup, Field, Input, SegmentedChoice, Select, Textarea } from '@/shared/forms'
import { AppLink, cn } from '@/shared/lib'
import { Button, ButtonLink } from '@/shared/ui'
import type { LeadFormConfig, LeadValues } from './contracts'
import { buildSchema, defaultsFor } from './schema'
import { submitLead } from './submit-lead'

type Status = 'idle' | 'success' | 'error'

/**
 * Config driven lead form. Pages pass a LeadFormConfig; validation, layout, states and the
 * submission adapter are shared. `preset` lets the page prefill values (for example ?interest=demo).
 */
export function LeadForm({
  config,
  preset,
  idPrefix = 'lead',
  className,
}: {
  config: LeadFormConfig
  preset?: LeadValues
  idPrefix?: string
  className?: string
}) {
  const schema = useMemo(() => buildSchema(config.fields), [config.fields])
  const [status, setStatus] = useState<Status>('idle')
  const [submitted, setSubmitted] = useState<LeadValues | null>(null)
  const [started, setStarted] = useState(false)

  const form = useForm<LeadValues>({
    resolver: zodResolver(schema) as unknown as Resolver<LeadValues>,
    defaultValues: defaultsFor(config.fields, preset),
  })
  const { control, register, handleSubmit, setValue, formState } = form
  const { errors, isSubmitting } = formState

  const presetKey = JSON.stringify(preset ?? {})
  useEffect(() => {
    const next = JSON.parse(presetKey) as LeadValues
    for (const [name, value] of Object.entries(next))
      setValue(name, value, { shouldValidate: false })
  }, [presetKey, setValue])

  const onSubmit = handleSubmit(async (values) => {
    // Honeypot: real users never see this field.
    if (values.website) {
      setSubmitted(values)
      setStatus('success')
      return
    }
    try {
      await submitLead(config.source, values)
      track(analyticsEvents.formSubmit, { source: config.source })
      setSubmitted(values)
      setStatus('success')
    } catch {
      track(analyticsEvents.formError, { source: config.source })
      setStatus('error')
    }
  })

  if (status === 'success') {
    const action = submitted ? config.successAction?.(submitted) : null
    return (
      <div
        role="status"
        className={cn('rounded-2xl border border-mint-400 bg-mint-50 p-8 text-center', className)}
      >
        <CheckCircle2 aria-hidden className="mx-auto size-12 text-mint-700" strokeWidth={1.5} />
        <h3 className="mt-4 text-h3 text-ink">{config.successTitle}</h3>
        <p className="mx-auto mt-2 max-w-md text-slate-600">{config.successBody}</p>
        {action && (
          <ButtonLink to={action.to} className="mt-6" arrow>
            {action.label}
          </ButtonLink>
        )}
      </div>
    )
  }

  return (
    <form
      noValidate
      onSubmit={onSubmit}
      onFocus={() => {
        if (!started) {
          setStarted(true)
          track(analyticsEvents.formStart, { source: config.source })
        }
      }}
      className={cn('grid gap-5 sm:grid-cols-2', className)}
    >
      {config.fields.map((field) => {
        const id = `${idPrefix}-${field.name}`
        const error = errors[field.name]?.message as string | undefined
        const wide =
          field.kind === 'textarea' ||
          field.kind === 'segmented' ||
          field.kind === 'checkboxes' ||
          !('half' in field && field.half)
        const span = wide ? 'sm:col-span-2' : ''

        if (field.kind === 'textarea') {
          return (
            <Field
              key={field.name}
              id={id}
              label={field.label}
              required={field.required}
              error={error}
              className={span}
            >
              <Textarea
                id={id}
                placeholder={field.placeholder}
                aria-invalid={!!error}
                aria-describedby={error ? `${id}-error` : undefined}
                {...register(field.name)}
              />
            </Field>
          )
        }
        if (field.kind === 'select') {
          return (
            <Field
              key={field.name}
              id={id}
              label={field.label}
              required={field.required}
              error={error}
              className={span}
            >
              <Controller
                control={control}
                name={field.name}
                render={({ field: f }) => (
                  <Select
                    id={id}
                    value={(f.value as string) ?? ''}
                    onValueChange={f.onChange}
                    options={field.options}
                    placeholder={field.placeholder}
                    invalid={!!error}
                    describedBy={error ? `${id}-error` : undefined}
                  />
                )}
              />
            </Field>
          )
        }
        if (field.kind === 'segmented') {
          return (
            <Field
              key={field.name}
              id={id}
              label={field.label}
              required={field.required}
              error={error}
              className={span}
              asGroup
            >
              <Controller
                control={control}
                name={field.name}
                render={({ field: f }) => (
                  <SegmentedChoice
                    name={field.name}
                    value={(f.value as string) ?? ''}
                    onChange={f.onChange}
                    options={field.options}
                  />
                )}
              />
            </Field>
          )
        }
        if (field.kind === 'checkboxes') {
          return (
            <Field
              key={field.name}
              id={id}
              label={field.label}
              required={field.required}
              error={error}
              className={span}
              asGroup
            >
              <Controller
                control={control}
                name={field.name}
                render={({ field: f }) => (
                  <CheckboxGroup
                    name={field.name}
                    value={(f.value as string[]) ?? []}
                    onChange={f.onChange}
                    options={field.options}
                    columns={field.columns}
                  />
                )}
              />
            </Field>
          )
        }
        return (
          <Field
            key={field.name}
            id={id}
            label={field.label}
            required={field.required}
            error={error}
            className={span}
          >
            <Input
              id={id}
              type={field.kind}
              placeholder={field.placeholder}
              autoComplete={field.autoComplete}
              aria-invalid={!!error}
              aria-describedby={error ? `${id}-error` : undefined}
              {...register(field.name)}
            />
          </Field>
        )
      })}

      {/* Honeypot */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Website
          <input type="text" tabIndex={-1} autoComplete="off" {...register('website')} />
        </label>
      </div>

      <div className="sm:col-span-2">
        {status === 'error' && (
          <p
            role="alert"
            className="mb-4 rounded-lg bg-danger/8 px-4 py-3 text-sm font-medium text-danger"
          >
            Something went wrong while sending your message. Please try again or email us directly.
          </p>
        )}
        <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 aria-hidden className="size-4 animate-spin" />
              Sending
            </>
          ) : (
            config.submitLabel
          )}
        </Button>
        <p className="mt-4 text-xs leading-relaxed text-slate-500">
          By submitting, you agree that Playlog may contact you about your request. See our{' '}
          <AppLink to="/privacy" className="underline underline-offset-2 hover:text-brand-600">
            Privacy Policy
          </AppLink>
          .
        </p>
      </div>
    </form>
  )
}
