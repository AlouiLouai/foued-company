"use client";

export function ServicesSection() {
  const services = [
    { title: "Painting" },
    { title: "Facade cleaning" },
    { title: "Bathroom renovation" },
    { title: "Kitchen renovation" },
    { title: "Masonry work" },
    { title: "Reinforced concrete" },
    { title: "Roofing" },
    { title: "Partitioning and insulation" },
    { title: "Cladding" },
    { title: "Building electricity" },
    { title: "Plumbing" },
    { title: "HVAC" },
    { title: "Gardening" },
  ]

  return (
    <section id="services" className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-8 md:mb-12">Our Services</h2>
        <div className="marquee-container overflow-x-hidden whitespace-nowrap">
          <div className="marquee-content inline-block">
            {services.concat(services).map((service, index) => (
              <div key={index} className="inline-block w-64 mx-4 text-center">
                <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
