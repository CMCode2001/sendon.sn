import { Container } from "@/components/layout/Container"
import { Reveal } from "@/components/Reveal"

const secondary = [
  { src: "/assets/partners/adepme.png", alt: "ADEPME" },
  { src: "/assets/partners/amref.png",  alt: "Amref Health Africa" },
  { src: "/assets/partners/govathon.png", alt: "GOV'ATHON" },
]

export function Partners() {
  return (
    <section className="bg-white py-20 md:py-24">
      <Container>
        <Reveal className="flex flex-col items-center text-center">
          <h2 className="font-display text-[28px] font-bold tracking-tight text-[#0c0a09] sm:text-[34px] lg:text-[50px]">
            Nos Partenaires
          </h2>

          {/* Partenaire principal — CNTS */}
          <img
            src="/assets/partner-cnts.png"
            alt="Centre National de Transfusion Sanguine"
            className="mt-12 h-[160px] w-auto object-contain md:h-[200px]"
          />
          <p className="mt-4 font-display text-xl font-medium text-[#383838] sm:text-2xl md:text-3xl">
            Le Centre National de Transfusion Sanguine
          </p>

          {/* Séparateur */}
          <div className="mt-14 w-full border-t border-neutre-200" />

          {/* Partenaires secondaires */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-10 md:gap-16">
            {secondary.map((p) => (
              <img
                key={p.alt}
                src={p.src}
                alt={p.alt}
                className="h-12 w-auto object-contain grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100 md:h-16"
              />
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
