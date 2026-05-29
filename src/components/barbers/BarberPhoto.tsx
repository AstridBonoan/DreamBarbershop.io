import { User } from 'lucide-react'
import { useState } from 'react'

interface BarberPhotoProps {
  src: string
  name: string
}

export function BarberPhoto({ src, name }: BarberPhotoProps) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        className="flex h-full w-full flex-col items-center justify-center gap-3 bg-slate"
        role="img"
        aria-label={name}
      >
        <div className="flex h-24 w-24 items-center justify-center rounded-full border border-stone bg-void">
          <User size={48} className="text-muted" strokeWidth={1.25} />
        </div>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={name}
      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
      loading="lazy"
      onError={() => setFailed(true)}
    />
  )
}
