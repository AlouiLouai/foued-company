import { Button } from "@/components/ui/button"

export function CareersSection() {
  return (
    <section id="careers" className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Join Our Team</h2>
        <p className="max-w-2xl mx-auto text-base md:text-lg text-muted-foreground mb-8">
          We are always looking for talented and passionate individuals to join our team. If you are looking for a challenging and rewarding career in the construction industry, we encourage you to explore our open positions.
        </p>
        <Button variant="primary" size="lg">
          View Open Positions
        </Button>
      </div>
    </section>
  )
}
