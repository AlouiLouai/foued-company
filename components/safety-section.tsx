import { ShieldCheck } from "lucide-react"

export function SafetySection() {
  return (
    <section id="safety" className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Safety is Our Priority</h2>
            <p className="text-base text-muted-foreground mb-4">
              At Foued Company, safety is more than just a policy; it's a core value that guides everything we do. We are committed to providing a safe and healthy work environment for our employees, subcontractors, and the public.
            </p>
            <p className="text-base text-muted-foreground">
              Our comprehensive safety program includes regular training, site inspections, and a commitment to continuous improvement. We believe that all accidents are preventable, and we strive for a zero-incident workplace.
            </p>
          </div>
          <div className="flex justify-center">
            <ShieldCheck className="w-48 h-48 md:w-64 md:h-64 text-primary" />
          </div>
        </div>
      </div>
    </section>
  )
}
