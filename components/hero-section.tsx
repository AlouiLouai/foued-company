"use client"
import { Button } from "@/components/ui/button"
import { AnimateOnScroll } from "@/components/AnimateOnScroll"
import Link from "next/link";
import { usePathname } from "next/navigation";

export function HeroSection() {
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'en';

  const title = locale === 'fr' ? "Construire l'avenir, ensemble" : "Building the Future, Together";
  const subtitle = locale === 'fr' 
    ? "Avec un héritage d'excellence et un engagement envers l'innovation, nous offrons des solutions de construction exceptionnelles qui façonnent les communautés et inspirent le progrès."
    : "With a legacy of excellence and a commitment to innovation, we deliver exceptional construction solutions that shape communities and inspire progress.";
  const buttonText = locale === 'fr' ? "Contactez-nous" : "Contact Us";

  return (
    <section
      className="relative  min-h-[99vh] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`,
        backgroundBlendMode: 'multiply',
      }}
    >
      <div className="container mx-auto px-6 text-center text-white">
        <AnimateOnScroll animation={{ opacity: 0, y: 50, duration: 1, ease: "power3.out" }} delay={0.2}>
          <h1 className="text-black text-4xl md:text-5xl lg:text-6xl font-bold leading-tight" style={{ textShadow: '2px 2px 4px rgba(255, 255, 255, 0.5), -2px -2px 4px rgba(255, 255, 255, 0.5), 2px -2px 4px rgba(255, 255, 255, 0.5), -2px 2px 4px rgba(255, 255, 255, 0.5)' }}>
            {title}
          </h1>
        </AnimateOnScroll>
        <AnimateOnScroll animation={{ opacity: 0, y: 50, duration: 1, ease: "power3.out" }} delay={0.4}>
            <p className="text-xl sm:text-xl md:text-2xl max-w-3xl mx-auto text-pretty">
            {subtitle}
            </p>
        </AnimateOnScroll>
        <AnimateOnScroll animation={{ opacity: 0, y: 50, duration: 1, ease: "power3.out" }} delay={0.6}>
          <Link href={`/${locale}/contact`}>
            <Button variant="link" size="lg" className="mt-8 text-lg font-semibold text-white">
              {buttonText}
            </Button>
          </Link>
        </AnimateOnScroll>
      </div>
    </section>
  )
}