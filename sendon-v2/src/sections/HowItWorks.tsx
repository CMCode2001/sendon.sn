import { Container } from "@/components/layout/Container"
import { Reveal } from "@/components/Reveal"

const steps = [
  {
    n: "01",
    title: "Inscrivez-vous",
    body: "Profil créé en 2 minutes. Groupe sanguin, localisation, préférences de notification. Éligibilité calculée automatiquement.",
  },
  {
    n: "02",
    title: "Recevez l'alerte",
    body: "SenDon-AI vous alerte en temps réel quand un hôpital proche a besoin de votre groupe. SMS, push ou WhatsApp — votre choix.",
  },
  {
    n: "03",
    title: "Donnez et sauvez",
    body: "Rendez-vous au centre en 45 min. Certificat numérique, impact mesuré, badge débloqué. Chaque don compte vraiment.",
  },
]

export function HowItWorks() {
  return (
    <section id="how" className="bg-[#0f0f0f] py-20 md:py-24">
      <Container>
        <Reveal>
          <h2 className="text-center font-display text-[34px] font-bold tracking-tight text-neutre-50 sm:text-[42px] lg:text-[50px]">
            3 étapes. <span className="text-rouge-400">1 vie sauvée.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <div className="grid grid-cols-1 gap-0.5 overflow-hidden rounded-[20px] bg-[#1b1b1b] md:grid-cols-3">
            {steps.map((s) => (
              <div
                key={s.n}
                className="group relative overflow-hidden bg-[#161616] px-8 py-10 transition-colors hover:bg-[#1a1a1a]"
              >
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
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
