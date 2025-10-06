"use client"
import { Button } from "@/components/ui/button"
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { useTranslations } from "next-intl";

export function CareersSection() {
  const t = useTranslations("CareersSection");

  return (
    <section id="careers" className="py-12 md:py-16">
      <div className="container mx-auto px-4 text-center">
        <AnimateOnScroll>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">{t("title")}</h2>
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.1}>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-black mb-8">
            {t("subtitle")}
          </p>
        </AnimateOnScroll>
          <Button variant="ghost" size="lg" className="bg-black text-white hover:bg-gray-800">
            {t("open_positions")}
          </Button>
      </div>
    </section>
  )
}