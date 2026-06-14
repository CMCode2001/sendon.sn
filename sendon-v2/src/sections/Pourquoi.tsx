import { Droplet, FileText } from "lucide-react"
import { Container } from "@/components/layout/Container"
import { Reveal } from "@/components/Reveal"

const blocks = [
  {
    icon: Droplet,
    iconClass: "border-rouge-100 text-rouge-400",
    title: "Le sang manque, et il manque au mauvais moment.",
    body: "Chaque année au Sénégal, des patients attendent une transfusion qui n'arrive pas à temps : accouchements compliqués, accidents de la route, drépanocytose, interventions chirurgicales. Le besoin est constant. L'offre, elle, reste largement insuffisante face aux recommandations sanitaires internationales.",
    quote: null,
  },
  {
    icon: FileText,
    iconClass: "border-vert-300/40 text-vert-500",
    title: "Des registres papier, aucune visibilité partagée.",
    body: "Les informations sur les donneurs — groupe sanguin, dernière date de don, coordonnées — vivaient dans des cahiers, des fichiers Excel isolés ou la mémoire du personnel soignant. Aucun hôpital ne pouvait savoir, en temps réel, qui était disponible et éligible à proximité. À cela s'ajoutaient des freins culturels : peur de l'aiguille, croyances sur la revente du sang, manque d'information fiable sur l'innocuité du don.",
    quote:
      "« On ne savait jamais vraiment combien de donneurs compatibles existaient autour de nous — seulement ceux qu'on arrivait à joindre. »",
  },
]

export function Pourquoi() {
  return (
    <section id="about" className="bg-neutre-50 py-20 md:py-24">
      <Container>
        <Reveal className="max-w-[620px]">
          <h2 className="font-display text-[34px] font-bold leading-[1.12] tracking-tight text-[#0c0a09] sm:text-[42px] lg:text-[50px]">
            Pourquoi SenDon devait exister.
          </h2>
          <p className="mt-3 text-[17px] font-light leading-relaxed text-[#6b5f58]">
            Une décennie de retard accumulé, et une équipe qui a décidé d'y
            répondre.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-2">
          {blocks.map((b, i) => {
            const Icon = b.icon
            return (
              <Reveal
                key={b.title}
                delay={i * 0.1}
                className="flex gap-6"
              >
                <span
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-[28px] border bg-white ${b.iconClass}`}
                >
                  <Icon size={24} />
                </span>
                <div className="flex flex-col">
                  <h3 className="font-display text-[24px] font-extrabold leading-snug tracking-tight text-[#0c0a09]">
                    {b.title}
                  </h3>
                  <p className="mt-3 text-[14.5px] font-light leading-[1.8] text-[#6b5f58]">
                    {b.body}
                  </p>
                  {b.quote && (
                    <blockquote className="mt-5 border-l-2 border-[#c42b1c] pl-4 text-sm italic leading-relaxed text-[#0c0a09]">
                      {b.quote}
                    </blockquote>
                  )}
                </div>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
