import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="bg-background text-foreground font-display">
      <Header />
      <main>
        <div className="container mx-auto px-6">
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  )
}
