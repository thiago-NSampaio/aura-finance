import { tv } from 'tailwind-variants';

export const widgetVariants = tv({
  base: 'flex flex-col w-full bg-[#201F1F60] border border-[#FFFFFF08] p-4 rounded-4xl',
  variants: {
    size: {
      default: 'h-7 min-h-75',
      sm: 'h-47.5 min-h-47.5',
      lg: 'h-99.5 min-h-99.5',
    }
  },
  defaultVariants: {
    size: 'default'
  }
});
