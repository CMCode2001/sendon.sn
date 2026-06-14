import { Container } from "@/components/layout/Container"
import { Reveal } from "@/components/Reveal"

const pills = [
  "Matching IA",
  "Prédiction pénuries",
  "Alertes ciblées",
  "Données souveraines",
]

const cards = [
  {
    icon: "/assets/icons/icon-alertes.png",
    iconBg: "bg-[rgba(255,152,26,0.15)]",
    title: "Alertes multi-canaux",
    body: "SMS, push, WhatsApp. Même hors connexion, aucune urgence n'est manquée.",
  },
  {
    icon: "/assets/icons/icon-donnees.png",
    iconBg: "bg-[#e6f5ee]",
    title: "Données souveraines",
    body: "Hébergées au Sénégal. Conformes loi 2008-12. Vos données ne quittent pas le pays.",
  },
  {
    icon: "/assets/icons/icon-geolocalisation.png",
    iconBg: "bg-[#e5f1f8]",
    title: "Géolocalisation",
    body: "38 centres sur carte, itinéraire intégré, horaires en temps réel.",
  },
  {
    icon: "/assets/icons/icon-badge.png",
    iconBg: "bg-[#f1ede7]",
    title: "Badges & gamification",
    body: "Récompenses pour chaque don. Progression visible, communauté engagée.",
  },
  {
    icon: "/assets/icons/icon-qr.png",
    iconBg: "bg-[#fdecea]",
    title: "Carte donneur numérique",
    body: "QR code certifié, accessible hors ligne. Partageable avec les équipes médicales. Contient groupe sanguin, historique et statut d'éligibilité.",
  },
  {
    icon: "/assets/icons/icon-proches.png",
    iconBg: "bg-[rgba(207,132,48,0.13)]",
    title: "Ajouter ses proches",
    body: "La fonctionnalité ajouter ses proches à contacter en cas d'urgence.",
  },
]

export function Features() {
  return (
    <section id="features" className="relative overflow-hidden bg-white py-20 md:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(to right, #f4f4f4 1px, transparent 1px), linear-gradient(to bottom, #f4f4f4 1px, transparent 1px)",
          backgroundSize: "96px 96px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 30%, black, transparent)",
        }}
      />
      <Container className="relative">
        <Reveal>
          <h2 className="font-display text-[34px] font-bold leading-[1.12] tracking-tight text-[#0c0a09] sm:text-[42px] lg:text-[50px]">
            Tout ce qu'il faut. <span className="text-rouge-400">Rien de plus.</span>
          </h2>
          <p className="mt-4 max-w-[540px] text-[14.5px] font-light leading-relaxed text-[#6b5f58]">
            Conçu pour les contextes africains. Rapide sur 3G, mode offline,
            multilingue, données souveraines.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
          {/* BIG dark card */}
          <Reveal className="lg:col-span-3">
            <div className="relative flex min-h-[220px] flex-col overflow-hidden rounded-[20px] bg-[#0c0a09] p-5 md:min-h-[270px] md:p-8">
              <div className="relative z-10 max-w-[340px]">
                <h3 className="font-display text-[22px] font-bold leading-tight tracking-tight text-white">
                  Matching intelligent par groupe sanguin
                </h3>
                <p className="mt-3 text-[13.5px] font-light leading-relaxed text-white/50">
                  Notre IA analyse en temps réel les besoins hospitaliers et la
                  disponibilité des donneurs pour déclencher le bon match en
                  millisecondes.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {pills.map((p) => (
                    <span
                      key={p}
                      className="rounded-full border border-white/10 bg-white/[0.08] px-3 py-1 text-[11px] font-medium text-white/60"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
              {/* phone mockup */}
              <img
                src="/assets/bento-mockup.png"
                alt="Application SenDon — matching IA"
                className="pointer-events-none absolute right-0 top-1/2 hidden w-[460px] max-w-none -translate-y-1/2 object-contain md:block lg:right-8"
              />
              {/* glow */}
              <div className="pointer-events-none absolute right-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-rouge-500/20 blur-[100px]" />
            </div>
          </Reveal>

          {/* small cards */}
          {cards.map((c, i) => {
            return (
              <Reveal key={c.title} delay={(i % 3) * 0.08}>
                <div className="flex h-full flex-col rounded-[20px] border border-[#eae4dc] bg-neutre-50 p-5 transition-shadow hover:shadow-md md:p-8">
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-full ${c.iconBg}`}
                  >
                    <img src={c.icon} alt="" className="h-6 w-6 object-contain" />
                  </span>
                  <h3 className="mt-4 font-display text-[17px] font-bold tracking-tight text-[#0c0a09]">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-[13.5px] font-light leading-relaxed text-[#0c0a09]/80">
                    {c.body}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
