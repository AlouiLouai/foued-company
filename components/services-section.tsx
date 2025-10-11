"use client";

import Image from "next/image";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { useState } from "react";
import { ServiceModal } from "./service-modal";
import { getTranslatedServices, Service } from "@/lib/translated-services";
import { usePathname } from "next/navigation";

export function ServicesSection() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'en';
  const services = getTranslatedServices(locale);

  const openModal = (service: Service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <section id="services" className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-8 md:mb-12">
            {locale === 'fr' ? 'Nos Services' : 'Our Services'}
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 transform hover:-translate-y-1 cursor-pointer"
                onClick={() => openModal(service)}
              >
                <div className="relative w-full h-48 mb-6">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                    className="rounded-lg"
                  />
                </div>
                <h3 className="text-2xl font-bold text-black">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>

      <ServiceModal service={selectedService} onClose={closeModal} />
    </section>
  );
}
