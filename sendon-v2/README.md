# SenDon V2

Landing page de **SenDon** — la plateforme qui connecte les donneurs de sang aux hôpitaux du Sénégal en temps réel.

## Stack

- **Vite** + **React** + **TypeScript**
- **TailwindCSS v4** (plugin Vite, design tokens dans `src/index.css`)
- **shadcn/ui** (style new-york, alias `@/`)
- **Framer Motion** (animations + reveal au scroll)
- **lucide-react** (icônes) · **@fontsource** (Montserrat + Inter)

## Démarrer

```bash
npm install
npm run dev      # serveur de dev
npm run build    # build de production
npm run preview  # prévisualiser le build
```

## Architecture

```
src/
├── index.css              # design tokens (palettes rouge/vert/neutre + shadcn)
├── lib/
│   ├── utils.ts           # cn()
│   └── motion.ts          # prefersStaticMotion() (reduced-motion + ?static)
├── components/
│   ├── Reveal.tsx         # fade-up au scroll (respecte reduced-motion)
│   ├── ui/                # composants shadcn
│   └── layout/            # Navbar, Footer, Container
└── sections/              # 1 fichier par section de la landing
    ├── Hero.tsx           ├── HowItWorks.tsx    ├── Faq.tsx
    ├── DarkIntro.tsx      ├── Ecosystem.tsx     ├── Cta.tsx
    ├── Pourquoi.tsx       ├── CarteDonneur.tsx
    ├── Features.tsx       ├── Distinctions.tsx
                          └── Partners.tsx
```

## Design

Issu du fichier Figma SenDon. Palettes couleurs (rouge / vert / neutre) configurées en
variables Tailwind v4 — utilisables via `bg-rouge-500`, `text-vert-600`, `border-neutre-200`, etc.
(échelle 50 → 900). Polices : **Montserrat** (titres) + **Inter** (UI).

## Note accessibilité

Les animations en boucle respectent `prefers-reduced-motion`. Ajouter `?static` à l'URL
désactive toutes les animations (utile pour les captures/tests).
