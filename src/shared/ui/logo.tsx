import { cn } from '@/shared/lib'

export function Logo({
  variant = 'blue',
  className,
}: {
  variant?: 'blue' | 'white'
  className?: string
}) {
  return (
    <img
      src={`/brand/logo-${variant}-playlog.svg`}
      alt="Playlog"
      width={467}
      height={166}
      className={cn('h-9 w-auto', className)}
    />
  )
}
