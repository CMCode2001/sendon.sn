import { Container } from "@/components/layout/Container"
import { Reveal } from "@/components/Reveal"

export function Partners() {
  return (
    <section className="bg-white py-20 md:py-24">
      <Container>
        <Reveal className="flex flex-col items-center text-center">
          <h2 className="font-display text-[34px] font-bold tracking-tight text-[#0c0a09] sm:text-[42px] lg:text-[50px]">
            Nos Partenaires
          </h2>
          <img
            src="/assets/partner-cnts.png"
            alt="Centre National de Transfusion Sanguine"
            className="mt-12 h-[200px] w-auto object-contain"
          />
          <p className="mt-6 font-display text-2xl font-medium text-[#383838] sm:text-3xl">
            Le Centre National de Transfusion Sanguine
          </p>
        </Reveal>
      </Container>
    </section>
  )
}
