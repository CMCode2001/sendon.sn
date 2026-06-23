import { Droplet, FileText, Clock } from "lucide-react"
import { Container } from "@/components/layout/Container"
import { Reveal } from "@/components/Reveal"

const blocks = [
  {
    icon: Droplet,
    iconClass: "border-rouge-100 text-rouge-400",
    title: "Chaque jour, 100 poches de sang manquent à l'appel.",
    body: "Le Sénégal a besoin de 300 poches de sang par jour, mais seules 200 sont distribuées. Il manque chaque année 50 000 à 55 000 dons pour atteindre le seuil recommandé par l'OMS, fixé à 10 donneurs pour 1 000 habitants. Le pays plafonne encore à 7,33 dons en 2024.",
    quote: null,
  },
  {
    icon: FileText,
    iconClass: "border-vert-300/40 text-vert-500",
    title: "Le don existe. L'information, elle, se perd.",
    body: "Groupe sanguin, dernière date de don, coordonnées : ces informations vivent encore dans des cahiers ou des fichiers isolés. Aucune structure ne peut savoir, en temps réel, qui est disponible à proximité. S'ajoutent à cela des freins culturels documentés : peur de l'aiguille, croyances sur la revente du sang, manque d'information sur l'innocuité du don.",
    quote: null,
  },
  {
    icon: Clock,
    iconClass: "border-rouge-100 text-rouge-400",
    title: "L'urgence n'attend pas le bon réseau.",
    body: "20 à 30 % des dons au Sénégal proviennent encore de donneurs familiaux mobilisés en urgence, faute d'un système capable d'anticiper les besoins. Le don de sang reste une réaction de dernière minute, plutôt qu'une chaîne organisée.",
    quote: null,
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

        <div className="mt-10 grid grid-cols-1 gap-x-12 gap-y-8 md:mt-14 lg:grid-cols-3">
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
