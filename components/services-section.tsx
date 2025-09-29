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
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import React from "react";

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
    <section id="services" className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-8 md:mb-12">Our Services</h2>
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="flex flex-col items-center p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 transform hover:-translate-y-1">
                <div className="flex justify-center mb-6 p-4 rounded-full bg-white/20">{React.cloneElement(service.icon, { className: "w-16 h-16 text-black" })}</div>
                <h3 className="text-2xl font-bold text-black">{service.title}</h3>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
