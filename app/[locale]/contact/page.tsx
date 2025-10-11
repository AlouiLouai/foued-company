"use client"
import { Header } from "@/components/header"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { useTranslations } from "next-intl";

export default function ContactPage() {
  const t = useTranslations("ContactPage");

  return (
    <div className="text-foreground font-display">
      <Header />
      <main className="py-12 md:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-black">{t("title")}</h1>
            <p className="text-lg md:text-xl text-black max-w-3xl mx-auto">
              {t("subtitle")}
            </p>
          </div>
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  )
}