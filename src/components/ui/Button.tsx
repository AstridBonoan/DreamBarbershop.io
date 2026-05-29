import { motion, type HTMLMotionProps } from 'framer-motion'
import type { ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline'

interface ButtonProps extends Omit<HTMLMotionProps<'a'>, 'children'> {
  children: ReactNode
  variant?: Variant
  size?: 'sm' | 'md' | 'lg'
  href?: string
}

const variants: Record<Variant, string> = {
  primary:
    'bg-cream text-void hover:bg-ivory border border-cream shadow-[0_4px_20px_rgba(0,0,0,0.12)]',
  secondary:
    'bg-transparent text-cream border border-stone hover:border-cream hover:bg-charcoal',
  ghost: 'bg-transparent text-cream hover:text-ivory',
  outline:
    'bg-transparent text-cream border border-cream hover:bg-cream hover:text-void',
}

const sizes: Record<'sm' | 'md' | 'lg', string> = {
  sm: 'px-4 py-2 text-xs tracking-widest',
  md: 'px-6 py-3 text-sm tracking-widest',
  lg: 'px-8 py-4 text-sm tracking-[0.2em]',
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  href = '#',
  ...props
}: ButtonProps) {
  return (
    <motion.a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex items-center justify-center gap-2 font-heading font-semibold uppercase transition-colors duration-300 ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </motion.a>
  )
}
