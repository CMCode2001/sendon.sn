import { useEffect, useState } from "react"

export function useTypewriter(text: string, speed = 45, startDelay = 400) {
  const [displayed, setDisplayed] = useState("")
  const [done, setDone] = useState(false)

  useEffect(() => {
    // Reset on text/speed/startDelay change: this effect re-runs the
    // animation from scratch, it does not cascade off its own state.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDisplayed("")
    setDone(false)
    let i = 0
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        i++
        setDisplayed(text.slice(0, i))
        if (i >= text.length) {
          clearInterval(interval)
          setDone(true)
        }
      }, speed)
      return () => clearInterval(interval)
    }, startDelay)
    return () => clearTimeout(timeout)
  }, [text, speed, startDelay])

  return { displayed, done }
}
