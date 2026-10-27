import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { ChevronDown } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { AppLink, cn, ctaLinks, routes } from '@/shared/lib'
import { ButtonLink, Logo } from '@/shared/ui'
import { guideLink, insightLinks, isActiveNavPath, productLinks, type NavItem } from '../navigation'
import { MobileNavigation } from './mobile-navigation'

const triggerClass =
  'group inline-flex h-11 items-center gap-1.5 rounded-md px-4 text-[0.9375rem] font-semibold tracking-[0.06em] text-slate-700 uppercase transition-colors hover:bg-brand-50 hover:text-brand-700 data-[state=open]:bg-brand-50 data-[state=open]:text-brand-700'

function MenuPanel({ items, pathname }: { items: NavItem[]; pathname: string }) {
  return (
    <NavigationMenu.Content className="absolute top-full left-0 z-50 pt-3">
      <ul
        className={cn(
          'grid gap-1 rounded-xl border border-slate-200 bg-white p-3 shadow-lift',
          items.length > 3 ? 'w-[40rem] grid-cols-2' : 'w-96',
        )}
      >
        {items.map(({ label, to, description, icon: Icon }) => {
          const active = isActiveNavPath(pathname, to)
          return (
            <li key={to}>
              <NavigationMenu.Link asChild>
                <AppLink
                  to={to}
                  aria-current={pathname === to ? 'page' : undefined}
                  className={cn(
                    'flex items-start gap-4 rounded-lg p-4 transition-colors hover:bg-brand-50',
                    active && 'bg-brand-50',
                  )}
                >
                  {Icon && (
                    <span className="mt-0.5 grid size-11 shrink-0 place-items-center rounded-lg bg-brand-600 text-white shadow-[-2px_2px_0_var(--color-mint-400)]">
                      <Icon aria-hidden className="size-5" strokeWidth={1.75} />
                    </span>
                  )}
                  <span>
                    <span
                      className={cn(
                        'block text-base font-semibold tracking-[0.04em] uppercase',
                        active ? 'text-brand-700' : 'text-ink',
                      )}
                    >
                      {label}
                    </span>
                    {description && (
                      <span className="mt-0.5 block text-sm leading-snug text-slate-500">
                        {description}
                      </span>
                    )}
                  </span>
                </AppLink>
              </NavigationMenu.Link>
            </li>
          )
        })}
      </ul>
    </NavigationMenu.Content>
  )
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  const productsActive = productLinks.some(({ to }) => isActiveNavPath(pathname, to))
  const insightsActive = insightLinks.some(({ to }) => isActiveNavPath(pathname, to))
  const guideActive = isActiveNavPath(pathname, guideLink.to)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-[background-color,box-shadow,border-color] duration-300',
        scrolled
          ? 'border-b border-slate-200/80 bg-white/85 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <div className="container-page flex h-20 items-center justify-between gap-6">
        <AppLink to={routes.home} aria-label="Playlog home" className="shrink-0">
          <Logo className="h-9 md:h-10" />
        </AppLink>

        <NavigationMenu.Root className="hidden lg:block" aria-label="Main">
          <NavigationMenu.List className="flex items-center gap-1">
            <NavigationMenu.Item className="relative">
              <NavigationMenu.Trigger
                className={cn(triggerClass, productsActive && 'bg-brand-50 text-brand-700')}
              >
                Products
                <ChevronDown
                  aria-hidden
                  className="size-4 transition-transform duration-300 group-data-[state=open]:rotate-180"
                />
              </NavigationMenu.Trigger>
              <MenuPanel items={productLinks} pathname={pathname} />
            </NavigationMenu.Item>
            <NavigationMenu.Item className="relative">
              <NavigationMenu.Trigger
                className={cn(triggerClass, insightsActive && 'bg-brand-50 text-brand-700')}
              >
                OOH Insights
                <ChevronDown
                  aria-hidden
                  className="size-4 transition-transform duration-300 group-data-[state=open]:rotate-180"
                />
              </NavigationMenu.Trigger>
              <MenuPanel items={insightLinks} pathname={pathname} />
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <NavigationMenu.Link asChild>
                <AppLink
                  to={guideLink.to}
                  aria-current={pathname === guideLink.to ? 'page' : undefined}
                  className={cn(triggerClass, guideActive && 'bg-brand-50 text-brand-700')}
                >
                  {guideLink.label}
                </AppLink>
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          </NavigationMenu.List>
        </NavigationMenu.Root>

        <div className="flex items-center gap-2">
          <ButtonLink to={routes.contact} className="hidden sm:inline-flex" arrow>
            Get in touch
          </ButtonLink>
          <MobileNavigation contactTo={ctaLinks.talkToExpert} />
        </div>
      </div>
    </header>
  )
}
