import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { Footer } from "@/components/footer"
import { ServicesSection } from "@/components/services-section"
import { CareersSection } from "@/components/careers-section"
import { useLocale } from "next-intl"

export default function Home() {
  const locale = useLocale()

  return (
    <div className="text-foreground font-display">
      <Header />
      <main className="pt-20">
        <HeroSection key={locale} />
        <div className="container mx-auto px-6">
          <ServicesSection key={locale} />
          <CareersSection key={locale} />
        </div>
      </main>
      <Footer />
    </div>
  )
}
