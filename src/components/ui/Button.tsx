import { motion, type HTMLMotionProps } from 'framer-motion'
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline'

interface ButtonProps extends Omit<HTMLMotionProps<'a'>, 'children'> {
  children: ReactNode
  variant?: Variant
  size?: 'sm' | 'md' | 'lg'
  href?: string
  to?: string
}

const variants: Record<Variant, string> = {
  primary:
    'bg-neon text-cream hover:bg-neon-bright border border-neon-dim neon-glow font-bold',
  secondary:
    'bg-transparent text-cream border border-stone hover:border-neon hover:text-cream',
  ghost: 'bg-transparent text-cream hover:text-neon-dim',
  outline:
    'bg-transparent text-cream border-2 border-cream hover:bg-cream hover:text-void',
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
  to,
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 font-heading font-semibold uppercase transition-colors duration-300 ${variants[variant]} ${sizes[size]} ${className}`

  if (to) {
    return (
      <motion.div whileHover={{ scale: 1.02, y: -1 }} whileTap={{ scale: 0.98 }} className="inline-block">
        <Link to={to} className={classes} {...(props as object)}>
          {children}
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.98 }}
      className={classes}
      {...props}
    >
      {children}
    </motion.a>
  )
}
