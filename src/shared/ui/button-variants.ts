import { cva } from 'class-variance-authority'

export const buttonVariants = cva(
  'group/btn inline-flex shrink-0 items-center justify-center gap-2 rounded-lg font-semibold whitespace-nowrap transition-[background-color,box-shadow,transform,color] duration-300 ease-out-expo select-none disabled:pointer-events-none disabled:opacity-50 active:translate-y-px',
  {
    variants: {
      variant: {
        primary:
          'bg-brand-600 text-white shadow-[-3px_3px_0_var(--color-mint-400)] hover:bg-brand-700 hover:shadow-[-5px_5px_0_var(--color-mint-400)]',
        secondary:
          'bg-white text-brand-700 ring-1 ring-brand-200 ring-inset hover:bg-brand-50 hover:ring-brand-300',
        mint: 'bg-mint-400 text-brand-950 hover:bg-mint-300',
        inverse: 'bg-white text-brand-800 hover:bg-mint-100',
        outlineInverse: 'text-white ring-1 ring-white/40 ring-inset hover:bg-white/10',
        ghost: 'text-brand-700 hover:bg-brand-50',
      },
      size: {
        md: 'h-12 px-6 text-[0.9375rem]',
        lg: 'h-14 px-8 text-base',
      },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  },
)
