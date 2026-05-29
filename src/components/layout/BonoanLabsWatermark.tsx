const WATERMARK_SRC = `${import.meta.env.BASE_URL}bonoan-labs-watermark.png`

/**
 * Subtle site-wide attribution for Bonoan Labs (design / development).
 */
export function BonoanLabsWatermark() {
  return (
    <div
      className="pointer-events-none fixed bottom-20 right-3 z-40 md:bottom-6 md:right-6 select-none"
      aria-hidden
    >
      <img
        src={WATERMARK_SRC}
        alt=""
        width={233}
        height={63}
        className="h-8 w-auto opacity-[0.38] md:h-10 md:opacity-[0.42]"
        loading="lazy"
        decoding="async"
      />
    </div>
  )
}
