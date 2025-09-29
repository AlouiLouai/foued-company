"use client";

import {
  Paintbrush,
  Building,
  Bath,
  CookingPot,
  BrickWall,
  Construction,
  Home,
  Layers,
  PanelTop,
  Zap,
  Wrench,
  Wind,
  Sprout,
} from "lucide-react";

export function ServicesSection() {
  const services = [
    { title: "Painting", icon: <Paintbrush className="w-12 h-12 text-primary" /> },
    { title: "Facade cleaning", icon: <Building className="w-12 h-12 text-primary" /> },
    { title: "Bathroom renovation", icon: <Bath className="w-12 h-12 text-primary" /> },
    { title: "Kitchen renovation", icon: <CookingPot className="w-12 h-12 text-primary" /> },
    { title: "Masonry work", icon: <BrickWall className="w-12 h-12 text-primary" /> },
    { title: "Reinforced concrete", icon: <Construction className="w-12 h-12 text-primary" /> },
    { title: "Roofing", icon: <Home className="w-12 h-12 text-primary" /> },
    { title: "Partitioning and insulation", icon: <Layers className="w-12 h-12 text-primary" /> },
    { title: "Cladding", icon: <PanelTop className="w-12 h-12 text-primary" /> },
    { title: "Building electricity", icon: <Zap className="w-12 h-12 text-primary" /> },
    { title: "Plumbing", icon: <Wrench className="w-12 h-12 text-primary" /> },
    { title: "HVAC", icon: <Wind className="w-12 h-12 text-primary" /> },
    { title: "Gardening", icon: <Sprout className="w-12 h-12 text-primary" /> },
  ]

  return (
    <section id="services" className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-8 md:mb-12">Our Services</h2>
        <div className="marquee-container overflow-x-hidden whitespace-nowrap">
          <div className="marquee-content inline-block">
            {services.concat(services).map((service, index) => (
              <div key={index} className="inline-block w-64 mx-4 text-center">
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}