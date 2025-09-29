import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"
import { ServicesSection } from "@/components/services-section"
import { CareersSection } from "@/components/careers-section"
import { NewsSection } from "@/components/news-section"

export default function Home() {
  return (
    <div className="bg-background text-foreground font-display">
      <Header />
      <main>
        <HeroSection />
        <div className="container mx-auto px-6">
          <ServicesSection />
          <TestimonialsSection />
          <NewsSection />
          <CareersSection />
        </div>
      </main>
      <Footer />
    </div>
  )
}
