import * as AccordionPrimitive from '@radix-ui/react-accordion'
import * as Dialog from '@radix-ui/react-dialog'
import { ChevronDown, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { AppLink, routes } from '@/shared/lib'
import { ButtonLink, Logo } from '@/shared/ui'
import { guideLink, insightLinks, productLinks, type NavItem } from '../navigation'

function Group({
  value,
  label,
  items,
  close,
}: {
  value: string
  label: string
  items: NavItem[]
  close: () => void
}) {
  return (
    <AccordionPrimitive.Item value={value} className="border-b border-slate-200">
      <AccordionPrimitive.Header>
        <AccordionPrimitive.Trigger className="group flex w-full items-center justify-between py-4 text-lg font-semibold text-ink">
          {label}
          <ChevronDown
            aria-hidden
            className="size-5 text-slate-500 transition-transform duration-300 group-data-[state=open]:rotate-180"
          />
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>
      <AccordionPrimitive.Content className="overflow-hidden data-[state=closed]:animate-[accordion-up_250ms_var(--ease-out-expo)] data-[state=open]:animate-[accordion-down_250ms_var(--ease-out-expo)] motion-reduce:animate-none">
        <ul className="space-y-1 pb-3">
          {items.map(({ label: itemLabel, to, icon: Icon }) => (
            <li key={to}>
              <AppLink
                to={to}
                onClick={close}
                className="flex items-center gap-3 rounded-xl px-3 py-3 text-base text-slate-700 hover:bg-brand-50"
              >
                {Icon && (
                  <span className="grid size-9 place-items-center rounded-lg bg-brand-600 text-white shadow-[-2px_2px_0_var(--color-mint-400)]">
                    <Icon aria-hidden className="size-[18px]" strokeWidth={1.75} />
                  </span>
                )}
                {itemLabel}
              </AppLink>
            </li>
          ))}
        </ul>
      </AccordionPrimitive.Content>
    </AccordionPrimitive.Item>
  )
}

export function MobileNavigation({ contactTo }: { contactTo: string }) {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger
        aria-label="Open menu"
        className="grid size-11 place-items-center rounded-full text-ink transition-colors hover:bg-brand-50 lg:hidden"
      >
        <Menu aria-hidden className="size-6" />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="sheet-overlay fixed inset-0 z-50 bg-brand-950/50 backdrop-blur-sm" />
        <Dialog.Content className="sheet-content fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-white shadow-lift">
          <Dialog.Title className="sr-only">Menu</Dialog.Title>
          <Dialog.Description className="sr-only">Site navigation</Dialog.Description>
          <div className="flex h-[4.25rem] items-center justify-between px-5">
            <AppLink to={routes.home} onClick={close} aria-label="Playlog home">
              <Logo className="h-8" />
            </AppLink>
            <Dialog.Close
              aria-label="Close menu"
              className="grid size-11 place-items-center rounded-full hover:bg-brand-50"
            >
              <X aria-hidden className="size-6" />
            </Dialog.Close>
          </div>
          <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-5 pb-6">
            <AccordionPrimitive.Root type="single" collapsible defaultValue="products">
              <Group value="products" label="Products" items={productLinks} close={close} />
              <Group value="insights" label="OOH Insights" items={insightLinks} close={close} />
            </AccordionPrimitive.Root>
            <AppLink
              to={guideLink.to}
              onClick={close}
              className="block border-b border-slate-200 py-4 text-lg font-semibold text-ink"
            >
              {guideLink.label}
            </AppLink>
            <AppLink
              to={routes.about}
              onClick={close}
              className="block border-b border-slate-200 py-4 text-lg font-semibold text-ink"
            >
              About us
            </AppLink>
          </nav>
          <div className="border-t border-slate-200 p-5">
            <ButtonLink to={contactTo} size="lg" className="w-full" onClick={close}>
              Get in touch
            </ButtonLink>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
