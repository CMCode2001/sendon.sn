import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Container } from "@/components/layout/Container"
import { Parallax } from "@/components/Parallax"
import { prefersStaticMotion } from "@/lib/motion"
import { useHeroTypewriter } from "@/hooks/useHeroTypewriter"
import { WaitlistModal } from "@/components/WaitlistModal"

const LINE1 = "Donnez du sang,"
const LINE2 = "Sauvez des vies."

export function Hero() {
  const staticMotion = prefersStaticMotion()
  const [waitlistOpen, setWaitlistOpen] = useState(false)

  const { text1, text2, cursor1Visible, cursor2Visible } =
    useHeroTypewriter(LINE1, LINE2)

  return (
    <>
      <WaitlistModal open={waitlistOpen} onClose={() => setWaitlistOpen(false)} />

      <section
        id="hero"
        className="relative overflow-hidden bg-white pt-28 pb-8 md:pt-32 md:pb-0 lg:flex lg:min-h-[calc(100vh-76px)] lg:items-center lg:pt-16"
      >
        {/* dot grid */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(217,30,30,0.10) 1.2px, transparent 1.2px)",
            backgroundSize: "26px 26px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 40%, black 20%, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 40%, black 20%, transparent 70%)",
          }}
        />
        {/* blob gauche bas — atténué */}
        <div className="pointer-events-none absolute -bottom-[10%] left-[-10%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(231,37,37,0.07),transparent_65%)] blur-[40px]" />
        {/* ligne accent haut */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-rouge-200/60 to-transparent" />

        <Container className="relative lg:pr-0">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
            {/* ── Left ── */}
            <div className="flex flex-col gap-6">
              <h1 className="relative font-display text-[32px] font-extrabold leading-[1.05] tracking-tight text-[#0c0a09] sm:text-[44px] lg:text-[64px]">
                {/* Placeholder invisible : réserve la hauteur/largeur du texte
                    final pour empêcher tout décalage de mise en page pendant
                    l'animation. */}
                <span aria-hidden className="invisible">
                  {LINE1}
                  <br />
                  {LINE2}
                </span>
                {/* Texte animé superposé, sans impact sur le flux */}
                <span className="absolute inset-0">
                  {text1}
                  {cursor1Visible && (
                    <span className="animate-pulse text-rouge-400">|</span>
                  )}
                  <br />
                  <span className="text-[#c42b1c]">
                    {text2}
                    {cursor2Visible && (
                      <span className="animate-pulse">|</span>
                    )}
                  </span>
                </span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="max-w-[520px] text-base font-light leading-[1.8] text-[#6b5f58] sm:text-lg"
              >
                Dans l'urgence, chaque seconde compte ! <br />SenDon connecte en temps réel les donneurs aux urgences hospitalières. Les vrais héros, mobilisés au bon moment.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex w-full flex-col items-stretch gap-3 pt-2 sm:w-auto sm:flex-row sm:items-center"
              >
                <button
                  onClick={() => setWaitlistOpen(true)}
                  className="group inline-flex h-[49px] w-full items-center justify-center gap-2 rounded-[25px] bg-rouge-400 px-7 text-[15px] font-semibold text-neutre-50 transition-all hover:bg-rouge-500 hover:shadow-lg hover:shadow-rouge-400/30 sm:w-auto"
                >
                  Rejoindre SenDon
                  <ArrowRight
                    size={20}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
                <a
                  href="#features"
                  className="inline-flex h-[49px] w-full items-center justify-center rounded-[34px] border border-neutre-200 bg-white px-7 text-[15px] font-semibold text-[#0b0b0b] transition-colors hover:bg-neutre-50 sm:w-auto"
                >
                  Voir l'application
                </a>
              </motion.div>
            </div>

            {/* ── Right — mockup ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative w-full max-h-[340px] md:max-h-none"
            >
              <Parallax amount={-50}>
                <motion.img
                  src="/assets/phone-visual-hero.png"
                  alt="Application SenDon — carte donneur et centres de don"
                  className="w-full object-contain"
                  {...(!staticMotion && {
                    animate: { y: [0, -12, 0] },
                    transition: {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  })}
                />
              </Parallax>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  )
}
