const HEADER_OFFSET = 96

export function scrollToSection(id: string, behavior: ScrollBehavior = 'smooth') {
  const el = document.getElementById(id)
  if (!el) return false

  const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET
  window.scrollTo({ top: Math.max(0, top), behavior })
  return true
}

export function scrollToSectionWhenReady(id: string, maxAttempts = 12) {
  let attempts = 0

  const tryScroll = () => {
    if (scrollToSection(id) || attempts >= maxAttempts) return
    attempts += 1
    requestAnimationFrame(tryScroll)
  }

  tryScroll()
  window.setTimeout(tryScroll, 120)
}
