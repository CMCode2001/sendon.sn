import { Container } from "@/components/layout/Container"
import { Reveal } from "@/components/Reveal"

const cards = [
  {
    img: "/assets/eco-app.png",
    title: "Application Mobile",
    body: "Une interface intuitive pour s'inscrire, recevoir des alertes en temps réel et suivre son impact.",
    tag: "POUR LES DONNEURS",
  },
  {
    img: "/assets/eco-cnts.png",
    title: "Portail CNTS",
    body: "Un tableau de bord centralisé pour piloter les stocks de sang au niveau national et coordonner les collectes.",
    tag: "GESTION NATIONALE",
  },
  {
    img: "/assets/eco-hopitaux.png",
    title: "Interface Hôpitaux",
    body: "Une plateforme dédiée aux établissements pour émettre des demandes urgentes et trouver des donneurs compatibles en quelques secondes.",
    tag: "URGENCES",
  },
]

export function Ecosystem() {
  return (
    <section className="bg-neutre-50 py-20 md:py-24">
      <Container>
        <Reveal>
          <h2 className="text-center font-display text-[34px] font-bold tracking-tight text-[#0c0a09] sm:text-[42px] lg:text-[50px]">
            Un écosystème complet
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <div className="flex h-full flex-col rounded-[24px] border border-[#eae4dc] bg-white p-5 md:rounded-[32px] md:p-8">
                <div className="overflow-hidden rounded-2xl border border-[#eae4dc] bg-[#0c0a09]">
                  <img
                    src={c.img}
                    alt={c.title}
                    className="aspect-video w-full object-cover"
                  />
                </div>
                <h3 className="mt-6 font-display text-xl font-bold text-[#0c0a09]">
                  {c.title}
                </h3>
                <p className="mt-2 flex-1 text-sm font-light leading-relaxed text-[#6b5f58]">
                  {c.body}
                </p>
                <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.5px] text-[#c42b1c]">
                  {c.tag}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
