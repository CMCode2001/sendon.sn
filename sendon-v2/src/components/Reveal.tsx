import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { prefersStaticMotion } from "@/lib/motion"

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
  as?: "div" | "section" | "li" | "span"
}

/**
 * Fade-up on scroll into view. In static / reduced-motion mode it renders
 * fully visible immediately (no hidden initial state) so full-page snapshots
 * and accessibility preferences are respected.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  as = "div",
}: RevealProps) {
  const staticMotion = prefersStaticMotion()
  const MotionTag = motion[as]

  if (staticMotion) {
    const Tag = as
    return <Tag className={className}>{children}</Tag>
  }

  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </MotionTag>
  )
}
