import { Container } from "@/components/layout/Container"
import { Reveal } from "@/components/Reveal"

const awards = [
  {
    logo: "/assets/award-govathon.png",
    year: "2025",
    title: "2ème prix d'Excellence",
    org: "GOV'ATHON 2025",
    desc: "SenDon s'est distingué parmi 812 projets grâce à son impact social et son innovation en santé numérique.",
  },
  {
    logo: "/assets/award-amref.png",
    year: "2025",
    title: "1er Prix Hackathon AMREF-UIDT",
    org: "Amref Health Africa - UIDT",
    desc: "SenDon a remporté le premier prix avec sa solution intelligente de gestion du don de sang.",
  },
  {
    logo: "/assets/award-docsen.png",
    year: "2025",
    title: "1er Prix Hackathon DocSen",
    org: "DocSen",
    desc: "SenDon a été récompensé parmi les meilleures innovations en santé numérique.",
  },
]

export function Distinctions() {
  return (
    <section className="bg-white py-20 md:py-24">
      <Container>
        <Reveal>
          <h2 className="text-center font-display text-[34px] font-bold tracking-tight text-[#0c0a09] sm:text-[42px] lg:text-[50px]">
            Reconnu pour <span className="text-[#c42b1c]">l'excellence</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-3.5 md:grid-cols-3">
          {awards.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.1}>
              <div className="flex h-full flex-col gap-1.5 rounded-[20px] border border-neutre-300 bg-white p-5 md:p-7">
                <img
                  src={a.logo}
                  alt={a.org}
                  className="h-12 w-12 rounded-lg object-contain"
                />
                <p className="pt-3 text-[12px] font-bold uppercase tracking-wider text-[#c8beb6]">
                  {a.year}
                </p>
                <h3 className="font-display text-[18px] font-bold tracking-tight text-[#0c0a09]">
                  {a.title}
                </h3>
                <p className="font-display text-[18px] font-bold tracking-tight text-rouge-400">
                  {a.org}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-[#a09488]">
                  {a.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
