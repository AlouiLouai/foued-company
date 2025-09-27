import { Building, HardHat, DraftingCompass } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      title: "General Contracting",
      description: "We provide full-service general contracting, managing your project from start to finish with a commitment to quality, safety, and budget.",
      icon: <HardHat className="w-12 h-12 text-primary" />,
    },
    {
      title: "Design-Build",
      description: "Our integrated design-build approach streamlines the construction process, fostering collaboration and delivering innovative solutions.",
      icon: <DraftingCompass className="w-12 h-12 text-primary" />,
    },
    {
      title: "Construction Management",
      description: "We offer comprehensive construction management services, ensuring your project is completed on time and to the highest standards.",
      icon: <Building className="w-12 h-12 text-primary" />,
    },
  ]

  return (
    <section id="services" className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-8 md:mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 md:p-8 bg-white rounded-lg border border-gray-200 text-center">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-base text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
