import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { AnimateOnScroll } from "@/components/AnimateOnScroll"

export function HeroSection() {
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
            Foued Company
          </h1>
          <h1 className="text-black text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mt-4" style={{ textShadow: '2px 2px 4px rgba(255, 255, 255, 0.5), -2px -2px 4px rgba(255, 255, 255, 0.5), 2px -2px 4px rgba(255, 255, 255, 0.5), -2px 2px 4px rgba(255, 255, 255, 0.5)' }}>
            Your Partner in Innovation
          </h1>
        </AnimateOnScroll>
        <AnimateOnScroll animation={{ opacity: 0, y: 50, duration: 1, ease: "power3.out" }} delay={0.4}>
            <p className="text-xl sm:text-xl md:text-2xl max-w-3xl mx-auto text-pretty">
            With a legacy of excellence and a commitment to innovation, we deliver exceptional construction solutions that
            shape communities and inspire progress.
            </p>
        </AnimateOnScroll>
        <AnimateOnScroll animation={{ opacity: 0, y: 50, duration: 1, ease: "power3.out" }} delay={0.6}>
            <Button variant="link" size="lg" className="mt-8 text-lg font-semibold text-white">
            Learn More <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
        </AnimateOnScroll>
      </div>
    </section>
  )
}