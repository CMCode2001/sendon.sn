import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Container } from "@/components/layout/Container"
import { prefersStaticMotion } from "@/lib/motion"
import { useHeroTypewriter } from "@/hooks/useHeroTypewriter"
import { WaitlistModal } from "@/components/WaitlistModal"

export function Hero() {
  const staticMotion = prefersStaticMotion()
  const [waitlistOpen, setWaitlistOpen] = useState(false)

  const { text1, text2, showLine2, cursor1Visible, cursor2Visible } =
    useHeroTypewriter("Donnez du sang,", "Sauvez des vies.")

  return (
    <>
      <WaitlistModal open={waitlistOpen} onClose={() => setWaitlistOpen(false)} />

      <section
        id="hero"
        className="relative overflow-hidden bg-white pt-12 pb-8 md:pt-16 md:pb-0 lg:flex lg:min-h-[calc(100vh-76px)] lg:items-center"
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
              <motion.span
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex w-fit items-center gap-2 rounded-full border border-rouge-100/60 bg-rouge-50/10 px-4 py-1.5 text-[13px] font-semibold text-rouge-500"
              >
                <span className="relative flex h-2 w-2">
                  {!staticMotion && (
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rouge-400 opacity-75" />
                  )}
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-rouge-500" />
                </span>
                Partenaire Officiel CNTS
              </motion.span>

              <h1 className="font-display text-[32px] font-extrabold leading-[1.05] tracking-tight text-[#0c0a09] sm:text-[44px] lg:text-[64px]">
                {text1}
                {cursor1Visible && (
                  <span className="animate-pulse text-rouge-400">|</span>
                )}
                {showLine2 && (
                  <>
                    <br />
                    <span className="text-[#c42b1c]">
                      {text2}
                      {cursor2Visible && (
                        <span className="animate-pulse">|</span>
                      )}
                    </span>
                  </>
                )}
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="max-w-[520px] text-base font-light leading-[1.8] text-[#6b5f58] sm:text-lg"
              >
                SenDon connecte les donneurs aux hôpitaux du Sénégal en temps réel grace à la géolocalisation.
                Matching intelligent par IA, alertes SMS instantanées,
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-wrap items-center gap-3 pt-2"
              >
                <button
                  onClick={() => setWaitlistOpen(true)}
                  className="group inline-flex h-[49px] items-center gap-2 rounded-[25px] bg-rouge-400 px-7 text-[15px] font-semibold text-neutre-50 transition-all hover:bg-rouge-500 hover:shadow-lg hover:shadow-rouge-400/30"
                >
                  Rejoindre SenDon
                  <ArrowRight
                    size={20}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
                <a
                  href="#features"
                  className="inline-flex h-[49px] items-center rounded-[34px] border border-neutre-200 bg-white px-7 text-[15px] font-semibold text-[#0b0b0b] transition-colors hover:bg-neutre-50"
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
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  )
}
