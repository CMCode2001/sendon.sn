import { motion } from "framer-motion"
import { Container } from "@/components/layout/Container"
import { Reveal } from "@/components/Reveal"
import { prefersStaticMotion } from "@/lib/motion"

const steps = [
  {
    n: "01",
    title: "Créez votre profil donneur",
    body: "Groupe sanguin, localisation, préférences de notification : votre profil est prêt en 2 minutes, éligibilité vérifiée automatiquement.",
  },
  {
    n: "02",
    title: "Recevez l'appel au bon moment",
    body: "Dès qu'un hôpital proche a besoin de votre groupe sanguin, vous êtes alerté en temps réel, par SMS, notification ou WhatsApp, selon votre choix.",
  },
  {
    n: "03",
    title: "Donnez, et voyez l'impact",
    body: "Rendez-vous au centre le plus proche. Certificat numérique, suivi de votre impact, badge débloqué : chaque don laisse une trace concrète.",
  },
]

export function HowItWorks() {
  const static_ = prefersStaticMotion()

  return (
    <section id="how" className="bg-[#0f0f0f] py-20 md:py-24">
      <Container>
        <Reveal>
          <h2 className="text-center font-display text-[34px] font-bold tracking-tight text-neutre-50 sm:text-[42px] lg:text-[50px]">
            3 étapes. <span className="text-rouge-400">1 vie sauvée.</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-0.5 overflow-hidden rounded-[20px] bg-[#1b1b1b] md:grid-cols-3">
          {steps.map((s, i) => (
            static_ ? (
              <div
                key={s.n}
                className="relative overflow-hidden bg-[#161616] px-5 py-8 md:px-8 md:py-10"
              >
                <StepContent s={s} />
              </div>
            ) : (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: i * 0.14, ease: [0.25, 0.1, 0.25, 1] }}
                whileHover={{ backgroundColor: "#1c1c1c" }}
                className="group relative overflow-hidden bg-[#161616] px-5 py-8 transition-colors md:px-8 md:py-10"
              >
                {/* glow bar bottom on hover */}
                <motion.div
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileHover={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] origin-left bg-gradient-to-r from-rouge-500 to-rouge-300"
                />
                <StepContent s={s} />
              </motion.div>
            )
          ))}
        </div>
      </Container>
    </section>
  )
}

function StepContent({ s }: { s: (typeof steps)[number] }) {
  return (
    <>
      <span className="pointer-events-none absolute right-4 top-3 font-display text-[72px] font-extrabold leading-none tracking-tighter text-rouge-400/[0.06]">
        {s.n}
      </span>
      <span className="flex h-8 w-8 items-center justify-center rounded-2xl border border-rouge-400 text-[13px] font-bold text-rouge-400">
        {s.n.slice(1)}
      </span>
      <h3 className="mt-5 font-display text-lg font-bold tracking-tight text-neutre-50">
        {s.title}
      </h3>
      <p className="mt-2 text-[13.5px] font-light leading-relaxed text-neutre-100/80">
        {s.body}
      </p>
    </>
  )
}
