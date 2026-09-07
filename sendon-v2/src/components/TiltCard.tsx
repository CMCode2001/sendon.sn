import { useRef, type ReactNode } from "react"
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type SpringOptions,
} from "framer-motion"
import { prefersStaticMotion } from "@/lib/motion"

interface TiltCardProps {
  children: ReactNode
  className?: string
  /** Max rotation in degrees (default 10) */
  intensity?: number
  /** Show the glare streak on hover (default true) */
  glare?: boolean
}

const SPRING: SpringOptions = { stiffness: 280, damping: 28, mass: 0.6 }

export function TiltCard({
  children,
  className = "",
  intensity = 10,
  glare = true,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const static_ = prefersStaticMotion()

  const mx = useMotionValue(0)
  const my = useMotionValue(0)

  const rotX = useSpring(useTransform(my, [-0.5, 0.5], [intensity, -intensity]), SPRING)
  const rotY = useSpring(useTransform(mx, [-0.5, 0.5], [-intensity, intensity]), SPRING)
  const scale = useSpring(1, SPRING)

  // Glare: diagonal light streak that follows the cursor
  const glareX = useTransform(mx, [-0.5, 0.5], ["0%", "100%"])
  const glareY = useTransform(my, [-0.5, 0.5], ["0%", "100%"])
  const glareOpacity = useSpring(0, { stiffness: 200, damping: 30 })

  if (static_) {
    return <div className={className}>{children}</div>
  }

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current!.getBoundingClientRect()
    mx.set((e.clientX - rect.left) / rect.width - 0.5)
    my.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const onEnter = () => {
    scale.set(1.025)
    glareOpacity.set(1)
  }

  const onLeave = () => {
    mx.set(0)
    my.set(0)
    scale.set(1)
    glareOpacity.set(0)
  }

  return (
    <motion.div
      ref={ref}
      style={{ rotateX: rotX, rotateY: rotY, scale, transformPerspective: 900 }}
      onMouseMove={onMove}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className={`relative ${className}`}
    >
      {children}

      {glare && (
        <motion.div
          aria-hidden
          style={{
            opacity: glareOpacity,
            background: useTransform(
              [glareX, glareY],
              ([x, y]) =>
                `radial-gradient(circle at ${x} ${y}, rgba(255,255,255,0.18) 0%, transparent 65%)`
            ),
          }}
          className="pointer-events-none absolute inset-0 rounded-[inherit]"
        />
      )}
    </motion.div>
  )
}
