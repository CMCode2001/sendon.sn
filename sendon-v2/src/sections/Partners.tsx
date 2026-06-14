import { Container } from "@/components/layout/Container"
import { Reveal } from "@/components/Reveal"

const secondary = [
  { src: "/assets/partners/adepme.png", alt: "ADEPME" },
  { src: "/assets/partners/amref.png",  alt: "Amref Health Africa" },
  { src: "/assets/partners/govathon.png", alt: "GOV'ATHON" },
]

export function Partners() {
  return (
    <section className="bg-white py-12 md:py-16">
      <Container>
        <Reveal className="flex flex-col items-center text-center">
          <h2 className="font-display text-[28px] font-bold tracking-tight text-[#0c0a09] sm:text-[34px] lg:text-[50px]">
            Nos Partenaires
          </h2>

          {/* Partenaire principal — CNTS */}
          <img
            src="/assets/partner-cnts.png"
            alt="Centre National de Transfusion Sanguine"
            className="mt-8 h-[120px] w-auto object-contain md:h-[150px]"
          />
          <p className="mt-3 font-display text-lg font-medium text-[#383838] sm:text-xl md:text-2xl">
            Le Centre National de Transfusion Sanguine
          </p>

          {/* Partenaires secondaires */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {secondary.map((p) => (
              <img
                key={p.alt}
                src={p.src}
                alt={p.alt}
                className="h-12 w-auto object-contain transition-transform duration-300 hover:scale-110 md:h-16"
              />
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
