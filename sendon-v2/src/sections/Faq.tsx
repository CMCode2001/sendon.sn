import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Plus } from "lucide-react"
import { Container } from "@/components/layout/Container"
import { Reveal } from "@/components/Reveal"
import { cn } from "@/lib/utils"

const faqs = [
  {
    q: "Qui peut donner du sang ?",
    a: "Toute personne de 18 à 65 ans, pesant plus de 50 kg et en bonne santé. SenDon vérifie votre éligibilité automatiquement et calcule votre prochaine date de don disponible.",
  },
  {
    q: "À quelle fréquence puis-je donner ?",
    a: "Les hommes peuvent donner jusqu'à 4 fois par an et les femmes jusqu'à 3 fois, en respectant un intervalle minimum de 8 semaines entre deux dons. SenDon suit automatiquement votre éligibilité.",
  },
  {
    q: "Est-ce dangereux de donner son sang ?",
    a: "Non. Le don de sang est un acte sûr et encadré par du personnel médical qualifié. Le matériel est stérile et à usage unique. La plupart des donneurs reprennent leurs activités normalement après quelques minutes de repos.",
  },
  {
    q: "Comment sont protégées mes données médicales ?",
    a: "Vos données sont hébergées au Sénégal, chiffrées et conformes à la loi 2008-12 sur la protection des données personnelles. Elles ne quittent jamais le pays et ne sont jamais revendues.",
  },
  {
    q: "Puis-je utiliser SenDon sans smartphone ?",
    a: "Oui. SenDon fonctionne aussi par SMS pour les alertes essentielles, et votre carte donneur reste accessible auprès des centres partenaires même sans application.",
  },
]

function FaqItem({
  q,
  a,
  open,
  onToggle,
}: {
  q: string
  a: string
  open: boolean
  onToggle: () => void
}) {
  return (
    <div className="border-b border-[#eae4dc]">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-6 text-left"
      >
        <span className="text-[18px] font-semibold text-[#0c0a09]">{q}</span>
        <span
          className={cn(
            "flex size-7 shrink-0 items-center justify-center rounded-[7px] border transition-all duration-300",
            open
              ? "rotate-45 border-rouge-400 bg-rouge-400 text-white"
              : "border-[#eae4dc] text-[#0c0a09]"
          )}
        >
          <Plus size={14} />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-7 pr-10 text-[16px] font-light leading-relaxed text-[#6b5f58]">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function Faq() {
  const [open, setOpen] = useState(0)
  return (
    <section className="bg-neutre-50 py-24">
      <Container>
        <Reveal>
          <h2 className="text-center font-display text-[28px] font-extrabold tracking-tight text-[#0c0a09] sm:text-[40px] lg:text-[64px]">
            Questions <span className="text-rouge-400">fréquentes</span>
          </h2>
        </Reveal>
        <div className="mx-auto mt-14 max-w-[815px]">
          {faqs.map((f, i) => (
            <FaqItem
              key={f.q}
              q={f.q}
              a={f.a}
              open={open === i}
              onToggle={() => setOpen(open === i ? -1 : i)}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
