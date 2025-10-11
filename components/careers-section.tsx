"use client"
import { Button } from "@/components/ui/button"
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { usePathname } from "next/navigation";

export function CareersSection() {
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'en';

  const title = locale === 'fr' ? "Rejoignez Notre Équipe" : "Join Our Team";
  const description = locale === 'fr' 
    ? "Nous sommes toujours à la recherche de personnes talentueuses pour rejoindre notre équipe. Si vous êtes passionné par la construction et que vous souhaitez faire la différence, nous serions ravis de vous entendre."
    : "We are always looking for talented people to join our team. If you are passionate about construction and want to make a difference, we would love to hear from you.";
  const buttonText = locale === 'fr' ? "Postes Ouverts" : "Open Positions";

  return (
    <section id="careers" className="py-12 md:py-16">
      <div className="container mx-auto px-4 text-center">
        <AnimateOnScroll>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">{title}</h2>
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.1}>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-black mb-8">
            {description}
          </p>
        </AnimateOnScroll>
          <Button variant="ghost" size="lg" className="bg-black text-white hover:bg-gray-800">
            {buttonText}
          </Button>
      </div>
    </section>
  )
}