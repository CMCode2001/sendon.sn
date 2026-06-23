import { Container } from "@/components/layout/Container"
import { Reveal } from "@/components/Reveal"

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
                className="group relative overflow-hidden bg-[#161616] px-5 py-8 transition-colors hover:bg-[#1a1a1a] md:px-8 md:py-10"
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
