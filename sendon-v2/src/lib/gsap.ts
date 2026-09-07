import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin"
import { MotionPathPlugin } from "gsap/MotionPathPlugin"

gsap.registerPlugin(ScrollTrigger, SplitText, DrawSVGPlugin, MotionPathPlugin)

/**
 * Trigger positions are measured once at creation. Lazy-loaded sections and
 * web-font swaps both change document height afterwards, which can leave a
 * heading's trigger permanently out of reach — and since the reveal starts at
 * opacity 0, the text would never appear. Re-measure once both have settled.
 */
export function refreshScrollTriggers() {
  ScrollTrigger.refresh()
}

if (typeof window !== "undefined") {
  window.addEventListener("load", () => ScrollTrigger.refresh())
  document.fonts?.ready.then(() => ScrollTrigger.refresh())
}

export { gsap, ScrollTrigger, SplitText, DrawSVGPlugin, MotionPathPlugin }
