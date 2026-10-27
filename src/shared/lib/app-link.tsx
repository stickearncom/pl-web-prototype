import type { ComponentProps } from 'react'
import { Link } from 'react-router-dom'

type AppLinkProps = Omit<ComponentProps<'a'>, 'href'> & { to: string }

/**
 * The only place that knows about the router for navigation.
 * Next.js migration: replace the `Link` import with `next/link` and keep the props.
 */
export function AppLink({ to, children, ...rest }: AppLinkProps) {
  const isMail = to.startsWith('mailto:') || to.startsWith('tel:')
  const isExternal = /^https?:\/\//.test(to)

  if (isExternal) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
      </a>
    )
  }
  if (isMail || to.startsWith('#')) {
    return (
      <a href={to} {...rest}>
        {children}
      </a>
    )
  }
  return (
    <Link to={to} {...rest}>
      {children}
    </Link>
  )
}
