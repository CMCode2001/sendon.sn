/**
 * Returns true when continuous/looping animations should be disabled:
 * either the OS requests reduced motion, or the URL carries `?static`
 * (used for visual snapshot verification).
 */
export function prefersStaticMotion(): boolean {
  if (typeof window === "undefined") return false
  const reduced = window.matchMedia?.(
    "(prefers-reduced-motion: reduce)"
  ).matches
  const staticParam = new URLSearchParams(window.location.search).has("static")
  return Boolean(reduced || staticParam)
}
