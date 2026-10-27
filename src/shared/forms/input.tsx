import type { ComponentProps } from 'react'
import { cn } from '@/shared/lib'
import { controlClass as control } from './control-class'

export function Input({ className, ...props }: ComponentProps<'input'>) {
  return <input className={cn(control, 'h-12 border-slate-300', className)} {...props} />
}

export function Textarea({ className, ...props }: ComponentProps<'textarea'>) {
  return (
    <textarea
      className={cn(control, 'min-h-32 resize-y border-slate-300 py-3', className)}
      {...props}
    />
  )
}
