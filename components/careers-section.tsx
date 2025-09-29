import { Button } from "@/components/ui/button"
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

export function CareersSection() {
  return (
    <section id="careers" className="py-12 md:py-16">
      <div className="container mx-auto px-4 text-center">
        <AnimateOnScroll>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Join Our Team</h2>
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.1}>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-black mb-8">
            We are always looking for talented and passionate individuals to join our team. If you are looking for a challenging and rewarding career in the construction industry, we encourage you to explore our open positions.
          </p>
        </AnimateOnScroll>
          <Button variant="ghost" size="lg" className="bg-black text-white hover:bg-gray-800">
            View Open Positions
          </Button>
      </div>
    </section>
  )
}