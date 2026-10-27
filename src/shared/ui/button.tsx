import { Slot } from '@radix-ui/react-slot'
import type { VariantProps } from 'class-variance-authority'
import { ArrowRight } from 'lucide-react'
import type { ComponentProps, MouseEventHandler, ReactNode } from 'react'
import { analyticsEvents, track } from '@/shared/analytics'
import { AppLink, cn } from '@/shared/lib'
import { buttonVariants } from './button-variants'

type ButtonProps = ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }

export function Button({ className, variant, size, asChild, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : 'button'
  return <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />
}

type ButtonLinkProps = VariantProps<typeof buttonVariants> & {
  to: string
  children: ReactNode
  arrow?: boolean
  className?: string
  onClick?: MouseEventHandler<HTMLAnchorElement>
}

/** A link that looks like a button. Fires the analytics stub on click. */
export function ButtonLink({
  to,
  children,
  arrow = false,
  variant,
  size,
  className,
  onClick,
}: ButtonLinkProps) {
  return (
    <AppLink
      to={to}
      className={cn(buttonVariants({ variant, size }), className)}
      onClick={(event) => {
        track(analyticsEvents.ctaClick, { to, label: typeof children === 'string' ? children : '' })
        onClick?.(event)
      }}
    >
      {children}
      {arrow && (
        <ArrowRight
          aria-hidden
          className="size-4 transition-transform duration-300 ease-out-expo group-hover/btn:translate-x-0.5"
        />
      )}
    </AppLink>
  )
}

/** Quiet text link with an arrow, for card CTAs. */
export function TextLink({
  to,
  children,
  className,
  tone = 'light',
}: {
  to: string
  children: ReactNode
  className?: string
  tone?: 'light' | 'dark'
}) {
  return (
    <AppLink
      to={to}
      className={cn(
        'group/link inline-flex items-center gap-1.5 text-sm font-semibold underline-offset-4 hover:underline',
        tone === 'light' ? 'text-brand-600' : 'text-mint-400',
        className,
      )}
    >
      {children}
      <ArrowRight
        aria-hidden
        className="size-4 transition-transform duration-300 ease-out-expo group-hover/link:translate-x-0.5"
      />
    </AppLink>
  )
}
