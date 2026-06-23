import { useState } from "react"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Loader2, CheckCircle2 } from "lucide-react"
import { Container } from "@/components/layout/Container"
import { Reveal } from "@/components/Reveal"

const SUBJECTS = [
  "Don de sang",
  "Partenariat",
  "Support technique",
  "Presse & médias",
  "Autre",
]

const coords = [
  { icon: Phone, label: "TÉLÉPHONE", value: "+221 78 796 44 36", href: "tel:+221787964436" },
  { icon: Mail,  label: "EMAIL",     value: "support@sendon.sn",  href: "mailto:support@sendon.sn" },
  { icon: MapPin,label: "ADRESSE",   value: "Dakar, Sénégal",     href: null },
]

export function Contact() {
  const [form, setForm] = useState({ nom: "", email: "", sujet: "", message: "" })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    await new Promise((r) => setTimeout(r, 1200))
    setStatus("success")
  }

  const field =
    "w-full rounded-[14px] border border-[#e5e0d8] bg-white px-4 text-sm text-[#0c0a09] outline-none transition-colors placeholder:text-[#b0a99f] focus:border-rouge-300 focus:ring-2 focus:ring-rouge-100"

  return (
    <section id="contact" className="relative overflow-hidden bg-[#0f0f0f]">
      {/* Dark header */}
      <div className="relative pb-32 pt-20 md:pt-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_100%_-10%,rgba(180,20,20,0.45),transparent_60%)]" />
        <Container className="relative">
          <Reveal>
            <h2 className="font-display text-[38px] font-extrabold leading-tight tracking-tight text-white sm:text-[52px]">
              Contactez-nous
            </h2>
            <p className="mt-4 max-w-lg text-base font-light leading-relaxed text-white/60">
              Notre équipe est à votre écoute pour toute question sur nos services de
              logistique ou de don de sang. Nous assurons une réponse rapide et précise.
            </p>
          </Reveal>
        </Container>
      </div>

      {/* Cards overlap */}
      <div className="relative -mt-20 pb-20 md:pb-28">
        <Container>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_380px]">

            {/* Left — form */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="rounded-[24px] bg-white p-8 shadow-[0px_8px_40px_rgba(0,0,0,0.18)] md:p-10"
            >
              {status === "success" ? (
                <div className="flex flex-col items-center py-12 text-center">
                  <CheckCircle2 size={56} className="text-vert-500" strokeWidth={1.5} />
                  <h3 className="mt-5 font-display text-2xl font-bold text-[#0c0a09]">
                    Message envoyé !
                  </h3>
                  <p className="mt-3 max-w-xs text-sm font-light leading-relaxed text-[#6b5f58]">
                    Nous vous répondrons dans les plus brefs délais. Merci de nous avoir
                    contactés.
                  </p>
                  <button
                    onClick={() => { setForm({ nom: "", email: "", sujet: "", message: "" }); setStatus("idle") }}
                    className="mt-8 inline-flex h-[46px] items-center rounded-[23px] bg-rouge-400 px-8 text-sm font-semibold text-white transition-colors hover:bg-rouge-500"
                  >
                    Nouveau message
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="font-display text-[22px] font-bold text-[#0c0a09]">
                    Envoyez-nous un message
                  </h3>
                  <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-5">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[13px] font-semibold text-[#0c0a09]">Nom complet</label>
                        <input
                          required type="text" placeholder="Ex: Moussa Diop"
                          value={form.nom} onChange={(e) => setForm({ ...form, nom: e.target.value })}
                          className={`${field} h-[48px]`}
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[13px] font-semibold text-[#0c0a09]">Adresse e-mail</label>
                        <input
                          required type="email" placeholder="moussa@example.com"
                          value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className={`${field} h-[48px]`}
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[13px] font-semibold text-[#0c0a09]">Sujet</label>
                      <div className="relative">
                        <select
                          required value={form.sujet} onChange={(e) => setForm({ ...form, sujet: e.target.value })}
                          className={`${field} h-[48px] cursor-pointer appearance-none pr-10`}
                        >
                          <option value="" disabled>Sélectionnez un sujet</option>
                          {SUBJECTS.map((s) => <option key={s} value={s}>{s}</option>)}
                        </select>
                        <svg className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#6b5f58]" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[13px] font-semibold text-[#0c0a09]">Message</label>
                      <textarea
                        required rows={6} placeholder="Comment pouvons-nous vous aider ?"
                        value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className={`${field} resize-none py-3.5`}
                      />
                    </div>

                    <button
                      type="submit" disabled={status === "loading"}
                      className="flex h-[52px] items-center justify-center gap-2 rounded-[26px] bg-rouge-400 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-rouge-500 disabled:opacity-70"
                    >
                      {status === "loading" ? <Loader2 size={18} className="animate-spin" /> : "Envoyer le message"}
                    </button>
                  </form>
                </>
              )}
            </motion.div>

            {/* Right — coordonnées */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="rounded-[24px] bg-white p-8 shadow-[0px_8px_40px_rgba(0,0,0,0.18)]"
            >
              <h3 className="font-display text-[22px] font-bold text-[#0c0a09]">Coordonnées</h3>
              <ul className="mt-6 flex flex-col gap-6">
                {coords.map(({ icon: Icon, label, value, href }) => (
                  <li key={label} className="flex items-center gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f2f0ed]">
                      <Icon size={18} className="text-[#0c0a09]" />
                    </span>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-widest text-[#9d9187]">{label}</p>
                      {href ? (
                        <a href={href} className="font-display text-lg font-bold text-[#0c0a09] transition-colors hover:text-rouge-500">{value}</a>
                      ) : (
                        <p className="font-display text-lg font-bold text-[#0c0a09]">{value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-8 overflow-hidden rounded-[16px]">
                <iframe
                  title="SenDon Dakar"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123744.37789268882!2d-17.535950!3d14.716677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec173c5018b7619%3A0x5e4a8d9f32c5e48!2sDakar%2C%20S%C3%A9n%C3%A9gal!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr"
                  width="100%" height="180" style={{ border: 0 }}
                  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                  className="opacity-90"
                />
              </div>
            </motion.div>
          </div>
        </Container>
      </div>
    </section>
  )
}
