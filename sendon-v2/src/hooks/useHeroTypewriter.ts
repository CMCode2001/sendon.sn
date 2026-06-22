import { useEffect, useState } from "react"

type Phase = "typing1" | "typing2" | "hold" | "deleting2" | "deleting1" | "pause"

export function useHeroTypewriter(line1: string, line2: string) {
  const [text1, setText1] = useState("")
  const [text2, setText2] = useState("")
  const [phase, setPhase] = useState<Phase>("typing1")

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>

    switch (phase) {
      case "typing1":
        if (text1.length < line1.length) {
          t = setTimeout(() => setText1(line1.slice(0, text1.length + 1)), 50)
        } else {
          t = setTimeout(() => setPhase("typing2"), 120)
        }
        break

      case "typing2":
        if (text2.length < line2.length) {
          t = setTimeout(() => setText2(line2.slice(0, text2.length + 1)), 50)
        } else {
          t = setTimeout(() => setPhase("hold"), 2200)
        }
        break

      case "hold":
        // Immediate phase transition, not derived from this effect's own state.
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setPhase("deleting2")
        break

      case "deleting2":
        if (text2.length > 0) {
          t = setTimeout(() => setText2((s) => s.slice(0, -1)), 28)
        } else {
          t = setTimeout(() => setPhase("deleting1"), 80)
        }
        break

      case "deleting1":
        if (text1.length > 0) {
          t = setTimeout(() => setText1((s) => s.slice(0, -1)), 28)
        } else {
          t = setTimeout(() => setPhase("pause"), 400)
        }
        break

      case "pause":
        t = setTimeout(() => setPhase("typing1"), 1)
        break
    }

    return () => clearTimeout(t)
  }, [phase, text1, text2, line1, line2])

  const cursor1Visible = phase === "typing1" || phase === "deleting1"
  const cursor2Visible = phase === "typing2" || phase === "hold" || phase === "deleting2"
  const showLine2 = text2.length > 0 || phase === "typing2" || phase === "hold" || phase === "deleting2"

  return { text1, text2, showLine2, cursor1Visible, cursor2Visible }
}
