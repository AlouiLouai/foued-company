import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { MissionSection } from "@/components/mission-section"
import { TeamSection } from "@/components/team-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ServicesSection } from "@/components/services-section"
import { SafetySection } from "@/components/safety-section"
import { CareersSection } from "@/components/careers-section"
import { NewsSection } from "@/components/news-section"

export default function Home() {
  return (
    <div className="bg-background text-foreground font-display">
      <Header />
      <main>
        <HeroSection />
        <div className="container mx-auto px-6">
          <MissionSection />
          <ServicesSection />
          <SafetySection />
          <TeamSection />
          <TestimonialsSection />
          <NewsSection />
          <CareersSection />
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  )
}
