import type { ReactNode } from 'react'
import { cn } from '@/shared/lib'
import { LiveDot } from './ambient-motion'
import { useAmbient } from './use-ambient'

/** Browser-style frame used to present product UI mockups. */
export function BrowserFrame({
  title,
  children,
  className,
}: {
  title: string
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-2xl bg-white shadow-lift ring-1 ring-brand-900/8',
        className,
      )}
    >
      <div className="flex items-center gap-3 border-b border-slate-200 bg-slate-50 px-4 py-3">
        <span aria-hidden className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-slate-300" />
          <span className="size-2.5 rounded-full bg-slate-300" />
          <span className="size-2.5 rounded-full bg-slate-300" />
        </span>
        <span className="truncate text-xs font-semibold text-slate-500">{title}</span>
      </div>
      {children}
    </div>
  )
}

export function Chip({
  children,
  tone = 'neutral',
  className,
}: {
  children: ReactNode
  tone?: 'neutral' | 'brand' | 'mint' | 'live'
  className?: string
}) {
  const { ref, active, reduced } = useAmbient<HTMLSpanElement>()
  return (
    <span
      ref={ref}
      className={cn(
        'inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-semibold',
        tone === 'neutral' && 'bg-slate-100 text-slate-600',
        tone === 'brand' && 'bg-brand-50 text-brand-700',
        tone === 'mint' && 'bg-mint-100 text-brand-900',
        tone === 'live' && 'bg-mint-100 text-brand-900',
        className,
      )}
    >
      {tone === 'live' && <LiveDot active={active} reduced={reduced} />}
      {children}
    </span>
  )
}

export function Metric({
  label,
  value,
  delta,
  className,
}: {
  label: string
  value: string
  delta?: string
  className?: string
}) {
  return (
    <div className={cn('rounded-xl bg-slate-50 p-4', className)}>
      <p className="text-xs font-medium text-slate-500">{label}</p>
      <p className="mt-1 text-2xl font-bold tracking-tight text-ink tabular-nums">{value}</p>
      {delta && <p className="mt-1 text-xs font-semibold text-mint-700">{delta}</p>}
    </div>
  )
}
