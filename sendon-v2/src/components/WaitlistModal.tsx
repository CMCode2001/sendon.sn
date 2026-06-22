import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { X, CheckCircle2, Loader2 } from "lucide-react"
import { supabase } from "@/lib/supabase"

interface WaitlistModalProps {
  open: boolean
  onClose: () => void
}

export function WaitlistModal({ open, onClose }: WaitlistModalProps) {
  const [form, setForm] = useState({ prenom: "", nom: "", email: "" })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    setErrorMsg("")

    if (!supabase) {
      setErrorMsg("Mode local : Supabase n'est pas configuré. Inscrivez vos clés dans le fichier .env pour activer cette fonctionnalité.")
      setStatus("error")
      return
    }

    const { error } = await supabase.from("sendon_waitlist").insert([
      { prenom: form.prenom.trim(), nom: form.nom.trim(), email: form.email.trim() },
    ])

    if (error) {
      if (error.code === "23505") {
        setErrorMsg("Cet email est déjà inscrit sur la liste d'attente.")
      } else {
        setErrorMsg("Une erreur est survenue. Réessaie dans un instant.")
      }
      setStatus("error")
    } else {
      setStatus("success")
    }
  }

  const handleClose = () => {
    onClose()
    setTimeout(() => {
      setForm({ prenom: "", nom: "", email: "" })
      setStatus("idle")
      setErrorMsg("")
    }, 300)
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 16 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 16 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-md rounded-[28px] bg-white p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClose}
              className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full bg-neutre-100 text-[#6b5f58] transition-colors hover:bg-neutre-200"
            >
              <X size={16} />
            </button>

            {status === "success" ? (
              <div className="flex flex-col items-center py-6 text-center">
                <CheckCircle2 size={52} className="text-vert-500 animate-pulse" strokeWidth={1.5} />
                <h3 className="mt-5 font-display text-2xl font-bold text-[#0c0a09]">
                  Vous êtes sur la liste !
                </h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-[#6b5f58]">
                  On vous contactera en priorité dès que   
                  <span className="text-black font-bold"> Sen</span> 
                  <span className="text-rouge-500 font-bold">Don </span>  
                  <br/>sera disponible.
                  <br/>
                  Merci de nous soutenir.
                  {/* <br/> */}
                  <img src="/assets/media/blood.gif" alt="" aria-hidden="true" className="inline h-4 w-4 object-contain" /> 
                </p>
                <button
                  onClick={handleClose}
                  className="mt-7 inline-flex h-[46px] items-center rounded-[23px] bg-rouge-400 px-8 text-sm font-semibold text-white transition-colors hover:bg-rouge-500"
                >
                  Fermer
                </button>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <span className="inline-flex items-center gap-2 rounded-full bg-rouge-50/20 px-3 py-1 text-[12px] font-semibold text-rouge-500 border border-rouge-100/60">
                    <span className="h-1.5 w-1.5 rounded-full bg-rouge-400" />
                    Bientôt disponible
                  </span>
                  <h3 className="mt-3 font-display text-[22px] font-bold leading-snug text-[#0c0a09]">
                    Rejoins la waitlist SenDon
                  </h3>
                  <p className="mt-1.5 text-sm font-light text-[#6b5f58]">
                    Sois parmi les premiers à accéder à l'application dès son lancement.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-[#0c0a09]">Prénom</label>
                      <input
                        required
                        type="text"
                        placeholder="Aminata"
                        value={form.prenom}
                        onChange={(e) => setForm({ ...form, prenom: e.target.value })}
                        className="h-[44px] rounded-xl border border-[#eae4dc] bg-neutre-50 px-3.5 text-sm outline-none transition-colors focus:border-rouge-300 focus:ring-2 focus:ring-rouge-100"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-[#0c0a09]">Nom</label>
                      <input
                        required
                        type="text"
                        placeholder="Diallo"
                        value={form.nom}
                        onChange={(e) => setForm({ ...form, nom: e.target.value })}
                        className="h-[44px] rounded-xl border border-[#eae4dc] bg-neutre-50 px-3.5 text-sm outline-none transition-colors focus:border-rouge-300 focus:ring-2 focus:ring-rouge-100"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-[#0c0a09]">Email</label>
                    <input
                      required
                      type="email"
                      placeholder="aminata@exemple.sn"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="h-[44px] rounded-xl border border-[#eae4dc] bg-neutre-50 px-3.5 text-sm outline-none transition-colors focus:border-rouge-300 focus:ring-2 focus:ring-rouge-100"
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-xs text-rouge-500">{errorMsg}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="mt-1 flex h-[48px] items-center justify-center gap-2 rounded-[24px] bg-rouge-400 text-sm font-semibold text-white transition-colors hover:bg-rouge-500 disabled:opacity-70"
                  >
                    {status === "loading" ? (
                      <Loader2 size={18} className="animate-spin" />
                    ) : (
                      "Je veux être parmi les premiers"
                    )}
                  </button>

                  <p className="text-center text-[11px] text-[#6b5f58]/60">
                    Aucun spam. On te contacte uniquement pour le lancement.
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
