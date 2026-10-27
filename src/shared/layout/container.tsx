import type { ComponentProps } from 'react'
import { cn } from '@/shared/lib'

export function Container({ className, ...props }: ComponentProps<'div'>) {
  return <div className={cn('container-page', className)} {...props} />
}
