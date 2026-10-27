import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Check } from 'lucide-react'
import { useId } from 'react'
import { cn } from '@/shared/lib'
import type { Option } from './select'

/** Multi select. Value is the list of checked option values. */
export function CheckboxGroup({
  name,
  value,
  onChange,
  options,
  columns = 1,
}: {
  name: string
  value: string[]
  onChange: (value: string[]) => void
  options: Option[]
  columns?: 1 | 2
}) {
  const baseId = useId()
  return (
    <div className={cn('grid gap-2.5', columns === 2 && 'sm:grid-cols-2')}>
      {options.map((option) => {
        const id = `${baseId}-${name}-${option.value}`
        const checked = value.includes(option.value)
        return (
          <label
            key={option.value}
            htmlFor={id}
            className={cn(
              'flex cursor-pointer items-center gap-3 rounded-lg border px-4 py-3 text-sm transition-colors duration-200',
              checked
                ? 'border-brand-600 bg-brand-50 text-brand-900'
                : 'border-slate-300 bg-white text-slate-700 hover:border-brand-300',
            )}
          >
            <CheckboxPrimitive.Root
              id={id}
              checked={checked}
              onCheckedChange={(next) =>
                onChange(
                  next === true
                    ? [...value, option.value]
                    : value.filter((v) => v !== option.value),
                )
              }
              className="grid size-5 shrink-0 place-items-center rounded-md border border-slate-300 bg-white data-[state=checked]:border-brand-600 data-[state=checked]:bg-brand-600"
            >
              <CheckboxPrimitive.Indicator>
                <Check aria-hidden className="size-3.5 text-white" strokeWidth={3} />
              </CheckboxPrimitive.Indicator>
            </CheckboxPrimitive.Root>
            {option.label}
          </label>
        )
      })}
    </div>
  )
}

/** Single choice shown as chips. */
export function SegmentedChoice({
  name,
  value,
  onChange,
  options,
}: {
  name: string
  value: string
  onChange: (value: string) => void
  options: Option[]
}) {
  const baseId = useId()
  return (
    <div className="flex flex-wrap gap-2.5">
      {options.map((option) => {
        const id = `${baseId}-${name}-${option.value}`
        return (
          <div key={option.value}>
            <input
              id={id}
              type="radio"
              name={`${baseId}-${name}`}
              value={option.value}
              checked={value === option.value}
              onChange={() => onChange(option.value)}
              className="peer sr-only"
            />
            <label
              htmlFor={id}
              className="inline-flex h-11 cursor-pointer items-center rounded-md border border-slate-300 bg-white px-5 text-sm font-semibold text-slate-700 transition-colors duration-200 peer-checked:border-brand-600 peer-checked:bg-brand-600 peer-checked:text-white peer-focus-visible:shadow-focus hover:border-brand-300"
            >
              {option.label}
            </label>
          </div>
        )
      })}
    </div>
  )
}
