import { Header } from "@/components/header"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <div className="text-foreground font-display">
      <Header />
      <main className="py-12 md:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-black">Contact Us</h1>
            <p className="text-lg md:text-xl text-black max-w-3xl mx-auto">
              We're here to help. Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  )
}