import { useRef, type ReactNode } from "react"
import { useGSAP } from "@gsap/react"
import { gsap } from "@/lib/gsap"
import { prefersStaticMotion } from "@/lib/motion"

interface ParallaxProps {
  children: ReactNode
  className?: string
  /** Déplacement vertical en px sur toute la traversée du viewport (négatif = monte) */
  amount?: number
  /** Ajoute un léger zoom pendant le scroll */
  scale?: boolean
}

export function Parallax({
  children,
  className,
  amount = -80,
  scale = false,
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null)
  const static_ = prefersStaticMotion()

  useGSAP(
    () => {
      if (static_ || !ref.current) return

      gsap.to(ref.current, {
        y: amount,
        ...(scale && { scale: 1.08 }),
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      })
    },
    { scope: ref, dependencies: [amount, scale] }
  )

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
