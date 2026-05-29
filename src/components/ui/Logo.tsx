const LOGO_SRC = `${import.meta.env.BASE_URL}logo.png?v=3`

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'hero'
}

const heights: Record<NonNullable<LogoProps['size']>, string> = {
  sm: 'h-11 w-11',
  md: 'h-14 w-14 md:h-16 md:w-16',
  lg: 'h-20 w-20 md:h-24 md:w-24',
  hero: 'h-28 w-28 sm:h-36 sm:w-36 md:h-44 md:w-44',
}

export function Logo({ className = '', size = 'md' }: LogoProps) {
  return (
    <div
      className={`shrink-0 overflow-hidden rounded-full ${heights[size]} ${className}`}
    >
      <img
        src={LOGO_SRC}
        alt="DREAM Barbershop & Salon"
        width={160}
        height={160}
        className="h-full w-full object-cover"
      />
    </div>
  )
}
