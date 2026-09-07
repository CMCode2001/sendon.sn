import { Container } from "@/components/layout/Container"
import { SplitHeading } from "@/components/SplitHeading"
import { Reveal } from "@/components/Reveal"
import { Parallax } from "@/components/Parallax"
import { TiltCard } from "@/components/TiltCard"

const cards = [
  {
    img: "/assets/eco-app.png",
    title: "Votre poche, votre impact",
    body: "S'inscrire, recevoir l'alerte au bon moment, suivre chaque don : tout se passe depuis votre téléphone.",
    tag: "POUR LES DONNEURS",
  },
  {
    img: "/assets/eco-cnts.png",
    title: "Le pouls du sang, en temps réel",
    body: "Un tableau de bord centralisé pour piloter les stocks à l'échelle nationale et coordonner les collectes là où elles sont nécessaires.",
    tag: "GESTION NATIONALE",
  },
  {
    img: "/assets/eco-hopitaux.png",
    title: "L'urgence sans la course contre le temps",
    body: "Une plateforme dédiée aux établissements pour lancer une demande et trouver un donneur compatible en quelques secondes.",
    tag: "URGENCES",
  },
]

export function Ecosystem() {
  return (
    <section className="bg-neutre-50 py-20 md:py-24">
      <Container>
        <SplitHeading className="text-center font-display text-[34px] font-bold tracking-tight text-[#0c0a09] sm:text-[42px] lg:text-[50px]">
          Trois interfaces, une seule mission.
        </SplitHeading>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.12}>
              <TiltCard intensity={7} className="h-full">
              <div className="flex h-full flex-col rounded-[24px] border border-[#eae4dc] bg-white p-5 md:rounded-[32px] md:p-8">
                <div className="overflow-hidden rounded-2xl border border-[#eae4dc] bg-[#0c0a09]">
                  <Parallax amount={-24} scale>
                    <img
                      src={c.img}
                      alt={c.title}
                      className="aspect-video w-full object-cover"
                    />
                  </Parallax>
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
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
