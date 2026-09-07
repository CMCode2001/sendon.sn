import { useRef, type ReactNode, type ElementType } from "react"
import { useGSAP } from "@gsap/react"
import { gsap, SplitText, ScrollTrigger } from "@/lib/gsap"
import { prefersStaticMotion } from "@/lib/motion"

interface SplitHeadingProps {
  children: ReactNode
  className?: string
  as?: ElementType
  /** "chars" = lettre par lettre (fort), "words" = mot par mot (plus doux) */
  type?: "chars" | "words" | "lines"
  delay?: number
}

export function SplitHeading({
  children,
  className,
  as: Tag = "h2",
  type = "chars",
  delay = 0,
}: SplitHeadingProps) {
  const ref = useRef<HTMLElement>(null)
  const static_ = prefersStaticMotion()

  useGSAP(
    () => {
      if (static_ || !ref.current) return

      const split = SplitText.create(ref.current, {
        type: "chars,words,lines",
        mask: "lines",
        linesClass: "overflow-hidden",
      })

      const targets =
        type === "chars" ? split.chars : type === "words" ? split.words : split.lines

      gsap.from(targets, {
        yPercent: 115,
        opacity: 0,
        rotateX: -55,
        duration: 0.85,
        ease: "power3.out",
        stagger: type === "chars" ? 0.018 : 0.07,
        delay,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 90%",
          once: true,
        },
      })

      // Splitting rewrites the DOM and changes layout height, which shifts every
      // trigger below this one. Sections here are lazy-loaded, so this also
      // re-measures as each new chunk mounts.
      ScrollTrigger.refresh()

      return () => split.revert()
    },
    { scope: ref, dependencies: [type, delay] }
  )

  return (
    <Tag ref={ref} className={className} style={{ perspective: 600 }}>
      {children}
    </Tag>
  )
}
