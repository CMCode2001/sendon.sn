import { ArrowRight } from "lucide-react"
import { Container } from "@/components/layout/Container"
import { Reveal } from "@/components/Reveal"

export function Cta() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-rouge-400 py-24 md:py-28"
    >
      {/* subtle radial highlight */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_45%,rgba(255,255,255,0.08),transparent)]" />

      <Container className="relative">
        <Reveal className="flex flex-col items-center text-center">
          <h2 className="font-display text-[40px] font-extrabold leading-[1.05] tracking-tight text-white sm:text-[60px] lg:text-[78px]">
            Votre prochain don
            <br />
            peut sauver une vie.
          </h2>
          <p className="mt-5 text-lg font-light text-white/65 sm:text-xl">
            Gratuit. 2 minutes. Un impact qui dure toute une vie.
          </p>
          <a
            href="#"
            className="group mt-8 inline-flex h-[49px] items-center gap-2 rounded-[25px] bg-neutre-50 px-7 text-[15px] font-semibold text-rouge-400 transition-transform hover:scale-[1.03]"
          >
            Devenir donneur
            <ArrowRight
              size={20}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </Reveal>
      </Container>
    </section>
  )
}
