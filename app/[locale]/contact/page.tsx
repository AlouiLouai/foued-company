"use client"
import { Header } from "@/components/header"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { usePathname } from "next/navigation";

export default function ContactPage() {
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'en';

  const title = locale === 'fr' ? "Contactez-nous" : "Contact Us";
  const subtitle = locale === 'fr' ? "Nous sommes là pour vous aider." : "We are here to help.";

  return (
    <div className="text-foreground font-display">
      <Header />
      <main className="py-12 md:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-black">{title}</h1>
            <p className="text-lg md:text-xl text-black max-w-3xl mx-auto">
              {subtitle}
            </p>
          </div>
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  )
}