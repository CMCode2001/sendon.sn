import { Mail, MapPin, Phone } from "lucide-react"
import { Link } from "react-router-dom"
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
        <div className="grid grid-cols-2 gap-10 md:grid-cols-6">
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
                    {l === "Contact" ? (
                      <Link
                        to="/contact"
                        className="text-sm font-light text-white/50 transition-colors hover:text-rouge-200"
                      >
                        {l}
                      </Link>
                    ) : (
                      <a
                        href="#"
                        className="text-sm font-light text-white/50 transition-colors hover:text-rouge-200"
                      >
                        {l}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white/70">
              Contact
            </h3>
            <ul className="mt-4 flex flex-col gap-4">
              <li>
                <a
                  href="tel:+221787964436"
                  className="flex items-start gap-2.5 text-sm font-light text-white/50 transition-colors hover:text-rouge-200"
                >
                  <Phone size={15} className="mt-0.5 shrink-0 text-rouge-400" />
                  +221 78 796 44 36
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@sendon.sn"
                  className="flex items-start gap-2.5 text-sm font-light text-white/50 transition-colors hover:text-rouge-200"
                >
                  <Mail size={15} className="mt-0.5 shrink-0 text-rouge-400" />
                  support@sendon.sn
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm font-light text-white/50">
                <MapPin size={15} className="mt-0.5 shrink-0 text-rouge-400" />
                Dakar, Sénégal
              </li>
            </ul>
          </div>
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
