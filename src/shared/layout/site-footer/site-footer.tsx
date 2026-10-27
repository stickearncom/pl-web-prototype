import { Mail } from 'lucide-react'
import { LogoMark } from '@/shared/illustrations'
import { AppLink, ctaLinks, routes, siteConfig } from '@/shared/lib'
import { ButtonLink, Logo } from '@/shared/ui'
import { companyLinks, insightLinks, legalLinks, productLinks, guideLink } from '../navigation'

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
      aria-hidden
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11.5H3V9.75Zm6.5 0h3.83v1.57h.06c.53-1 1.84-2.07 3.78-2.07 4.04 0 4.78 2.66 4.78 6.1v5.9h-4v-5.23c0-1.25-.02-2.86-1.74-2.86-1.75 0-2.02 1.36-2.02 2.77v5.32h-4V9.75Z" />
    </svg>
  )
}

const socials = [
  { label: 'Playlog on Instagram', href: siteConfig.social.instagram, icon: InstagramIcon },
  { label: 'Playlog on LinkedIn', href: siteConfig.social.linkedin, icon: LinkedinIcon },
]

function Column({ title, items }: { title: string; items: { label: string; to: string }[] }) {
  return (
    <div>
      <h3 className="mb-5 text-eyebrow text-mint-300">{title}</h3>
      <ul className="space-y-3">
        {items.map(({ label, to }) => (
          <li key={to}>
            <AppLink
              to={to}
              className="text-[0.9375rem] text-white/75 transition-colors hover:text-white"
            >
              {label}
            </AppLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function SiteFooter() {
  return (
    <footer className="relative isolate overflow-hidden bg-brand-950 text-white">
      <svg
        aria-hidden
        viewBox="0 0 300 300"
        className="pointer-events-none absolute -right-16 -bottom-16 -z-10 size-[26rem] opacity-[0.07]"
      >
        <LogoMark x={70} y={20} size={150} front="#fff" side="#00f4cb" />
      </svg>
      <div className="container-page pt-16 pb-8 md:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr] lg:gap-16">
          <div className="max-w-sm">
            <Logo variant="white" className="h-10" />
            <p className="mt-6 text-[0.9375rem] leading-relaxed text-white/70">
              One connected platform to plan, run, and measure billboard campaigns across Indonesia.
              Built in Indonesia, for the future of OOH.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid size-11 place-items-center rounded-full bg-white/8 text-white transition-colors hover:bg-mint-400 hover:text-brand-950"
                >
                  <Icon className="size-5" />
                </a>
              ))}
              <a
                href={`mailto:${siteConfig.email}`}
                aria-label={`Email ${siteConfig.email}`}
                className="grid size-11 place-items-center rounded-full bg-white/8 text-white transition-colors hover:bg-mint-400 hover:text-brand-950"
              >
                <Mail aria-hidden className="size-5" />
              </a>
            </div>
            <ButtonLink to={ctaLinks.talkToExpert} variant="mint" className="mt-8">
              Talk to an expert
            </ButtonLink>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3">
            <Column title="Products" items={productLinks} />
            <Column
              title="Resources"
              items={[...insightLinks, guideLink, { label: 'Press & Media', to: routes.media }]}
            />
            <Column
              title="Company"
              items={companyLinks.filter((item) => item.to !== routes.media)}
            />
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/12 pt-6 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} Playlog. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map(({ label, to }) => (
              <li key={to}>
                <AppLink to={to} className="transition-colors hover:text-white">
                  {label}
                </AppLink>
              </li>
            ))}
            <li>
              <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-white">
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
