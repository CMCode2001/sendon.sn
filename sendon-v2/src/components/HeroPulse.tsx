import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import { gsap, ScrollTrigger } from "@/lib/gsap"
import { prefersStaticMotion } from "@/lib/motion"

/** Tracé ECG : ligne de base ponctuée de 3 complexes QRS (battements). */
const BEAT = "l14,-6 l10,15 l9,-46 l11,74 l10,-37 l13,0"
const ECG_PATH = `M0,70 H190 ${BEAT} H560 ${BEAT} H930 ${BEAT} H1440`

export function HeroPulse() {
  const ref = useRef<SVGSVGElement>(null)
  const static_ = prefersStaticMotion()

  useGSAP(
    () => {
      if (static_ || !ref.current) return

      const path = ref.current.querySelector<SVGPathElement>("#ecg-line")
      const dot = ref.current.querySelector<SVGCircleElement>("#ecg-dot")
      if (!path || !dot) return

      const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.6 })

      tl.set(dot, { opacity: 1 })
        .fromTo(
          path,
          { drawSVG: "0% 0%" },
          { drawSVG: "0% 100%", duration: 4, ease: "none" },
          0
        )
        .to(
          dot,
          {
            duration: 4,
            ease: "none",
            motionPath: { path, align: path, alignOrigin: [0.5, 0.5] },
          },
          0
        )
        .to(dot, { opacity: 0, duration: 0.3 }, 4)
        .to(path, { drawSVG: "100% 100%", duration: 1, ease: "power2.in" }, 4.1)

      // Boucle infinie : inutile de la faire tourner une fois le hero passé.
      ScrollTrigger.create({
        trigger: ref.current,
        start: "top bottom",
        end: "bottom top",
        onToggle: ({ isActive }) => (isActive ? tl.play() : tl.pause()),
      })
    },
    { scope: ref }
  )

  if (static_) return null

  return (
    <svg
      ref={ref}
      aria-hidden
      viewBox="0 0 1440 140"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-x-0 bottom-[18%] h-[140px] w-full opacity-[0.55] lg:bottom-[12%]"
    >
      <defs>
        <linearGradient id="ecg-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#e72525" stopOpacity="0" />
          <stop offset="18%" stopColor="#e72525" stopOpacity="0.55" />
          <stop offset="82%" stopColor="#c42b1c" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#c42b1c" stopOpacity="0" />
        </linearGradient>
        <filter id="ecg-glow">
          <feGaussianBlur stdDeviation="4" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <path
        id="ecg-line"
        d={ECG_PATH}
        fill="none"
        stroke="url(#ecg-grad)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        id="ecg-dot"
        r="5"
        fill="#e72525"
        filter="url(#ecg-glow)"
        opacity="0"
      />
    </svg>
  )
}
