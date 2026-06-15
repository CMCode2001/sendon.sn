import { useState } from "react"
import { Play } from "lucide-react"
import { Container } from "@/components/layout/Container"
import { Reveal } from "@/components/Reveal"
import { prefersStaticMotion } from "@/lib/motion"
import { VideoModal } from "@/components/VideoModal"

const points = [
  "Plateforme propulsée par des jeunes senégalais",
  "Partenaire officiel du CNTS",
  "Données hébergées au Sénégal, loi respectée.",
]

export function DarkIntro() {
  const staticMotion = prefersStaticMotion()
  const [videoOpen, setVideoOpen] = useState(false)

  return (
    <>
    <VideoModal
      open={videoOpen}
      onClose={() => setVideoOpen(false)}
      youtubeId="TGE94iR5cdw"
    />
    <section className="relative overflow-hidden bg-[#0f0f0f] py-20 md:py-24">
      {/* red glow bottom-left */}
      <div className="pointer-events-none absolute -left-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(231,37,37,0.22),transparent_60%)]" />

      <Container className="relative grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
        {/* Left — text */}
        <Reveal className="flex flex-col gap-6">
          <h2 className="font-display text-[34px] font-bold leading-[1.12] tracking-tight text-white sm:text-[42px] lg:text-[50px]">
            Un seul don peut sauvez{" "}
            <span className="text-rouge-400">jusqu'à 3 vies !</span>
          </h2>

          <p className="max-w-[522px] font-display text-base font-medium leading-relaxed text-white/90">
            En 3 minutes, comprenez notre vision, notre méthode de travail et
            l'impact concret de nos projets sur le développement du Sénégal et de
            l'Afrique de l'Ouest.
          </p>

          <ul className="flex flex-col gap-3 pt-2">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-3">
                <img
                  src="/assets/puce.png"
                  alt=""
                  aria-hidden="true"
                  className="h-5 w-5 shrink-0 object-contain"
                />
                <span className="font-display text-sm font-semibold text-neutre-50">
                  {p}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Right — video card */}
        <Reveal
          y={0}
          delay={0.1}
          className="group relative aspect-[889/465] w-full overflow-hidden rounded-[28px]"
        >
          <img
            src="/assets/video-thumb.png"
            alt="Vidéo SenDon"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/0" />
          {/* play button */}
          <button
            onClick={() => setVideoOpen(true)}
            aria-label="Lire la vidéo"
            className="absolute left-1/2 top-1/2 flex h-[88px] w-[88px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-rouge-400 text-white shadow-lg transition-transform hover:scale-105"
          >
            {!staticMotion && (
              <>
                <span className="absolute inset-0 animate-ping rounded-full bg-rouge-400/30" />
                <span className="absolute -inset-4 rounded-full bg-rouge-400/10" />
              </>
            )}
            <Play size={30} className="ml-1 fill-white" />
          </button>
        </Reveal>
      </Container>
    </section>
    </>
  )
}
