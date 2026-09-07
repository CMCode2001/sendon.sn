import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { prefersStaticMotion } from "@/lib/motion"

type Variant = "up" | "down" | "left" | "right" | "zoom" | "fade"

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
  as?: "div" | "section" | "li" | "span"
  variant?: Variant
  duration?: number
}

const getInitial = (variant: Variant, y: number) => {
  switch (variant) {
    case "up":    return { opacity: 0, y:  y }
    case "down":  return { opacity: 0, y: -y }
    case "left":  return { opacity: 0, x:  40 }
    case "right": return { opacity: 0, x: -40 }
    case "zoom":  return { opacity: 0, scale: 0.88 }
    case "fade":  return { opacity: 0 }
  }
}

const getAnimate = (variant: Variant) => {
  switch (variant) {
    case "left":
    case "right": return { opacity: 1, x: 0 }
    case "zoom":  return { opacity: 1, scale: 1 }
    case "fade":  return { opacity: 1 }
    default:      return { opacity: 1, y: 0 }
  }
}

export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  as = "div",
  variant = "up",
  duration = 0.6,
}: RevealProps) {
  const staticMotion = prefersStaticMotion()
  const MotionTag = motion[as]

  if (staticMotion) {
    const Tag = as
    return <Tag className={className}>{children}</Tag>
  }

  return (
    <MotionTag
      initial={getInitial(variant, y)}
      whileInView={getAnimate(variant)}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </MotionTag>
  )
}
