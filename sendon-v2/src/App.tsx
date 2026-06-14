import { Navbar } from "@/components/layout/Navbar"
import { Hero } from "@/sections/Hero"
import { DarkIntro } from "@/sections/DarkIntro"
import { Pourquoi } from "@/sections/Pourquoi"
import { Features } from "@/sections/Features"
import { HowItWorks } from "@/sections/HowItWorks"
import { Ecosystem } from "@/sections/Ecosystem"
import { CarteDonneur } from "@/sections/CarteDonneur"
import { Distinctions } from "@/sections/Distinctions"
import { Partners } from "@/sections/Partners"
import { Faq } from "@/sections/Faq"
import { Cta } from "@/sections/Cta"
import { Footer } from "@/components/layout/Footer"

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
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
      </main>
      <Footer />
    </div>
  )
}

export default App
