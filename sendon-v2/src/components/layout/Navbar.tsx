import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Link } from "react-router-dom"
import { cn } from "@/lib/utils"
import { WaitlistModal } from "@/components/WaitlistModal"

const links = [
  { label: "Accueil", href: "#hero", to: null },
  { label: "Comment ça marche", href: "#how", to: null },
  { label: "À propos", href: "#about", to: null },
  { label: "Contact", href: null, to: "/contact" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [waitlistOpen, setWaitlistOpen] = useState(false)

  return (
    <>
    <WaitlistModal open={waitlistOpen} onClose={() => setWaitlistOpen(false)} />
    <div className="fixed top-3 left-1/2 z-50 w-[calc(100%-1.5rem)] max-w-5xl -translate-x-1/2 md:top-5 md:w-[calc(100%-2rem)]">
      {/* Pill flottante */}
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex items-center justify-between rounded-full bg-white/90 px-4 py-2.5 shadow-[0px_8px_32px_rgba(0,0,0,0.14)] backdrop-blur-md"
      >
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2.5">
          <img
            src="/logo-sendon.png"
            alt="SenDon"
            className="h-8 w-auto object-contain md:h-10"
          />
          <span className="font-display text-lg font-extrabold tracking-tight text-[#0c0a09] md:text-xl">
            SenDon
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) =>
            l.to ? (
              <Link
                key={l.to}
                to={l.to}
                className="font-display text-[15px] font-semibold text-[#474747] transition-colors hover:text-rouge-500"
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.href}
                href={l.href!}
                className="font-display text-[15px] font-semibold text-[#474747] transition-colors hover:text-rouge-500"
              >
                {l.label}
              </a>
            )
          )}
        </nav>

        {/* CTA + burger */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setWaitlistOpen(true)}
            className="hidden rounded-full bg-[#c42b1c] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-rouge-600 hover:shadow-md md:inline-flex"
          >
            S'inscrire
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "flex h-9 w-9 items-center justify-center rounded-full transition-colors lg:hidden",
              open ? "bg-neutre-100 text-[#0c0a09]" : "text-[#474747] hover:bg-neutre-100"
            )}
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="mt-2 overflow-hidden rounded-2xl bg-white/95 p-4 shadow-[0px_8px_32px_rgba(0,0,0,0.12)] backdrop-blur-md lg:hidden"
          >
            <div className="flex flex-col gap-1">
              {links.map((l) =>
                l.to ? (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-4 py-2.5 font-display text-base font-semibold text-[#474747] transition-colors hover:bg-neutre-100"
                  >
                    {l.label}
                  </Link>
                ) : (
                  <a
                    key={l.href}
                    href={l.href!}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-4 py-2.5 font-display text-base font-semibold text-[#474747] transition-colors hover:bg-neutre-100"
                  >
                    {l.label}
                  </a>
                )
              )}
              <button
                onClick={() => { setOpen(false); setWaitlistOpen(true) }}
                className="mt-2 rounded-full bg-[#c42b1c] px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-rouge-600"
              >
                S'inscrire
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    </>
  )
}
