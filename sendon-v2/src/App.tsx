import { lazy, Suspense, useState, useCallback } from "react"
import { Navbar } from "@/components/layout/Navbar"
import { Hero } from "@/sections/Hero"
import { ScrollToTop } from "@/components/ScrollToTop"
import { Footer } from "@/components/layout/Footer"
import { SplashScreen } from "@/components/SplashScreen"

const DarkIntro    = lazy(() => import("@/sections/DarkIntro").then(m => ({ default: m.DarkIntro })))
const Pourquoi     = lazy(() => import("@/sections/Pourquoi").then(m => ({ default: m.Pourquoi })))
const Features     = lazy(() => import("@/sections/Features").then(m => ({ default: m.Features })))
const HowItWorks   = lazy(() => import("@/sections/HowItWorks").then(m => ({ default: m.HowItWorks })))
const Ecosystem    = lazy(() => import("@/sections/Ecosystem").then(m => ({ default: m.Ecosystem })))
const CarteDonneur = lazy(() => import("@/sections/CarteDonneur").then(m => ({ default: m.CarteDonneur })))
const Distinctions = lazy(() => import("@/sections/Distinctions").then(m => ({ default: m.Distinctions })))
const Partners     = lazy(() => import("@/sections/Partners").then(m => ({ default: m.Partners })))
const Faq          = lazy(() => import("@/sections/Faq").then(m => ({ default: m.Faq })))
const Cta          = lazy(() => import("@/sections/Cta").then(m => ({ default: m.Cta })))
const Contact      = lazy(() => import("@/sections/Contact").then(m => ({ default: m.Contact })))

export default function App() {
  const [splashDone, setSplashDone] = useState(false)
  const handleDone = useCallback(() => setSplashDone(true), [])

  return (
    <>
      {!splashDone && <SplashScreen onDone={handleDone} />}
      <div className="min-h-screen bg-white">
        <Navbar />
        <ScrollToTop />
        <main>
          <Hero />
          <Suspense fallback={null}>
            <DarkIntro />
            <Pourquoi />
            <Features />
            <HowItWorks />
            <Ecosystem />
            <CarteDonneur />
            <Distinctions />
            <Partners />
            <Faq />
            <Cta />
            <Contact />
          </Suspense>
        </main>
        <Footer />
      </div>
    </>
  )
}
