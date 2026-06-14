import { Container } from "./Container"

const columns = [
  {
    title: "Produit",
    links: ["Fonctionnalités", "Comment ça marche", "Carte donneur", "Télécharger"],
  },
  {
    title: "À propos",
    links: ["Notre mission", "Partenaires", "Distinctions", "Contact"],
  },
  {
    title: "Légal",
    links: ["Confidentialité", "Conditions d'utilisation", "Protection des données"],
  },
]

export function Footer() {
  return (
    <footer className="bg-[#0c0a09] pt-16 pb-8 text-white">
      <Container>
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-3">
              <img
                src="/logo-sendon.png"
                alt="SenDon"
                className="h-10 w-auto object-contain"
              />
              <span className="font-display text-2xl font-extrabold tracking-tight">
                SenDon
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm font-light leading-relaxed text-white/50">
              La plateforme qui connecte les donneurs aux hôpitaux du Sénégal en
              temps réel. Chaque don compte.
            </p>
          </div>

          {/* Link columns */}
          {columns.map((c) => (
            <div key={c.title}>
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white/70">
                {c.title}
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {c.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm font-light text-white/50 transition-colors hover:text-rouge-200"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} SenDon. Tous droits réservés.
          </p>
          <p className="text-sm text-white/40">
            Fait avec ❤️ au Sénégal · 
          </p>
        </div>
      </Container>
    </footer>
  )
}
