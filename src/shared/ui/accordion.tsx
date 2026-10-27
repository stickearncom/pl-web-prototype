import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { Plus } from 'lucide-react'
import type { ComponentProps } from 'react'
import { cn } from '@/shared/lib'

export const Accordion = AccordionPrimitive.Root

export function AccordionItem({
  className,
  ...props
}: ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      className={cn('border-b border-slate-200 first:border-t', className)}
      {...props}
    />
  )
}

export function AccordionTrigger({
  className,
  children,
  ...props
}: ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        className={cn(
          'group flex flex-1 items-center justify-between gap-6 py-5 text-left text-base font-semibold text-ink transition-colors hover:text-brand-600 md:text-lg',
          className,
        )}
        {...props}
      >
        {children}
        <span className="grid size-8 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600 transition-colors group-data-[state=open]:bg-brand-600 group-data-[state=open]:text-white">
          <Plus
            aria-hidden
            className="size-4 transition-transform duration-300 ease-out-expo group-data-[state=open]:rotate-45"
          />
        </span>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

export function AccordionContent({
  className,
  children,
  ...props
}: ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      className="overflow-hidden data-[state=closed]:animate-[accordion-up_300ms_var(--ease-out-expo)] data-[state=open]:animate-[accordion-down_300ms_var(--ease-out-expo)] motion-reduce:animate-none"
      {...props}
    >
      <div className={cn('pr-12 pb-6 text-slate-600', className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
}
