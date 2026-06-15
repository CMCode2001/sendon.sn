import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

const messages = [
  "Ton sang peut écrire une fin heureuse.",
  "Quelqu'un attend. Le temps, lui, n'attend pas.",
  "Ton sang peut sauver jusqu'à 3 vies.",
]

export function SplashScreen({ onDone }: { onDone: () => void }) {
  const [msgIndex, setMsgIndex] = useState(0)
  const [exiting, setExiting] = useState(false)
  const onDoneRef = useRef(onDone)
  useEffect(() => { onDoneRef.current = onDone }, [onDone])

  useEffect(() => {
    const t1 = setTimeout(() => setMsgIndex(1), 1800)
    const t2 = setTimeout(() => setMsgIndex(2), 3600)
    const t3 = setTimeout(() => setExiting(true), 5400)
    const t4 = setTimeout(() => onDoneRef.current(), 5900)
    return () => [t1, t2, t3, t4].forEach(clearTimeout)
  }, [])

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-white"
        >
          {/* Logo bouncing */}
          <motion.img
            src="/logo-sendon.png"
            alt="SenDon"
            className="h-16 w-auto object-contain drop-shadow-sm"
            animate={{ y: [0, -18, 0] }}
            transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Brand name */}
          <span className="mt-4 font-display text-2xl font-extrabold tracking-tight text-[#0c0a09]">
            SenDon
          </span>

          {/* Animated dots */}
          <div className="mt-3 flex items-center gap-1.5">
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="h-2 w-2 rounded-full bg-rouge-400"
                animate={{ opacity: [0.25, 1, 0.25], scale: [0.8, 1.2, 0.8] }}
                transition={{
                  duration: 1.1,
                  repeat: Infinity,
                  delay: i * 0.22,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* Rotating messages */}
          <div className="mt-10 flex h-14 max-w-[320px] items-center justify-center px-6">
            <AnimatePresence mode="wait">
              <motion.p
                key={msgIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="text-center text-[13px] font-light italic leading-relaxed text-[#6b5f58]"
              >
                {messages[msgIndex]}
              </motion.p>
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
