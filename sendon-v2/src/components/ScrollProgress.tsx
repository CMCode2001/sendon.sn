import { useScroll, useSpring, motion } from "framer-motion"
import { prefersStaticMotion } from "@/lib/motion"

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  if (prefersStaticMotion()) return null

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 top-0 z-[200] h-[3px] w-full origin-left bg-gradient-to-r from-rouge-500 via-rouge-400 to-rouge-300"
    />
  )
}
