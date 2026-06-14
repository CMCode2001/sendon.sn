import { Container } from "@/components/layout/Container"
import { Reveal } from "@/components/Reveal"

const points = [
  "QR code scannable par les équipes médicales à chaque don",
  "Accessible hors ligne, à présenter dans n'importe quel centre",
  "Suivi automatique de votre prochaine date d'éligibilité",
]

export function CarteDonneur() {
  return (
    <section className="relative overflow-hidden bg-[#0f0f0f] py-20 md:py-28">
      <div className="pointer-events-none absolute -left-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(231,37,37,0.2),transparent_60%)]" />

      <Container className="relative grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-8">
        {/* Left — mockup component-8 */}
        <Reveal y={0} className="flex items-center justify-center">
          <img
            src="/assets/component-8.png"
            alt="Carte donneur SenDon"
            className="w-full max-w-[480px] object-contain"
          />
        </Reveal>

        {/* Right — text */}
        <Reveal className="flex flex-col gap-6">
          <h2 className="font-display text-[32px] font-bold leading-[1.14] tracking-tight text-white sm:text-[40px] lg:text-[48px]">
            <span className="text-rouge-400">Votre identité de donneur,</span>{" "}
            toujours avec vous
          </h2>
          <p className="max-w-[583px] font-display text-base font-medium leading-relaxed text-white/90">
            Ma Carte Donneur est votre carte numérique certifiée, intégrée à
            l'application SenDon. Groupe sanguin, historique de dons et statut
            d'éligibilité accessibles en un instant, même sans connexion.
          </p>
          <ul className="flex flex-col gap-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <img
                  src="/assets/puce.png"
                  alt=""
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 shrink-0 object-contain"
                />
                <span className="font-display text-sm font-semibold text-neutre-50">
                  {p}
                </span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3.5 pt-2">
            <a href="#" className="transition-transform hover:scale-[1.03]">
              <img
                src="/assets/sendon-playstore.png"
                alt="Disponible sur Google Play"
                className="h-[50px] w-auto object-contain"
              />
            </a>
            <a href="#" className="transition-transform hover:scale-[1.03]">
              <img
                src="/assets/sendon-appstore.png"
                alt="Télécharger dans l'App Store"
                className="h-[50px] w-auto object-contain"
              />
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
