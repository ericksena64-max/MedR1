import React from 'react';
import { cn } from '../../lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg' | 'icon';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', type = 'button', ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          'inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A56DB] focus-visible:ring-offset-2 dark:focus-visible:ring-sky-400 dark:focus-visible:ring-offset-[#1B1F27]',
          {
            'bg-[#1A56DB] text-white hover:bg-[#1648B8] dark:bg-sky-400 dark:text-slate-950 dark:hover:bg-sky-300':
              variant === 'primary',
            'bg-[#EDF2FA] text-slate-800 hover:bg-[#E2EAF7] dark:bg-white/[0.08] dark:text-slate-100 dark:hover:bg-white/[0.13]':
              variant === 'secondary',
            'border border-slate-200/90 bg-white text-slate-700 hover:bg-[#F3F6FC] hover:text-slate-900 dark:border-white/[0.1] dark:bg-[#222733] dark:text-slate-200 dark:hover:bg-[#2B3140]':
              variant === 'outline',
            'text-slate-600 hover:bg-[#EDF2FA]/80 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/[0.07] dark:hover:text-slate-100':
              variant === 'ghost',
            'bg-red-600 text-white hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600':
              variant === 'danger',
          },
          {
            'h-8 px-3.5 text-xs': size === 'sm',
            'h-10 px-4 text-sm': size === 'md',
            'h-11 px-5 text-sm': size === 'lg',
            'h-9 w-9 p-0': size === 'icon',
          },
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
