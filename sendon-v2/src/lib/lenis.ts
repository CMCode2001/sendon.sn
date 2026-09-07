import { useEffect } from "react"
import Lenis from "lenis"
import { gsap, ScrollTrigger } from "@/lib/gsap"

export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
    })

    // Lenis drives ScrollTrigger, and GSAP's ticker drives Lenis.
    // Without this both run their own RAF loop and scrub animations jitter.
    lenis.on("scroll", ScrollTrigger.update)

    const tick = (time: number) => lenis.raf(time * 1000)
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)

    // Smooth scroll for hash links (navbar anchors)
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a[href^='#']")
      if (!target) return
      const href = target.getAttribute("href")
      if (!href || href === "#") return
      const el = document.querySelector(href)
      if (!el) return
      e.preventDefault()
      lenis.scrollTo(el as HTMLElement, { offset: -80, duration: 1.4 })
    }
    document.addEventListener("click", handleAnchorClick)

    return () => {
      gsap.ticker.remove(tick)
      lenis.destroy()
      document.removeEventListener("click", handleAnchorClick)
    }
  }, [])
}
