"use client"
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { usePathname } from "next/navigation";

export default function AboutPage() {
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'en';

  const title = locale === 'fr' ? "À propos de nous" : "About Us";
  const missionTitle = locale === 'fr' ? "Notre Mission" : "Our Mission";
  const missionText = locale === 'fr' 
    ? "Notre Mission Chez Renovexium, nous transformons vos espaces grâce à notre savoir-faire exceptionnel et des solutions innovantes et durables. Notre équipe de professionnels certifiés vousassure une qualité irréprochable et un respect strict desdélais et du budget. Nous garantissons une communication transparente et des prix équitables, avec pour unique objectif votre satisfaction client."
    : "At Renovexium, our mission is to transform spaces and exceed expectations through exceptional craftsmanship, innovative solutions, and unwavering dedication to client satisfaction. We believe in building lasting relationships based on trust, transparency, and mutual respect.";
  const visionTitle = locale === 'fr' ? "Notre Vision" : "Our Vision";
  const visionText = locale === 'fr' ? "Notre ambition est de devenir l'entreprise de construction et de rénovation de référence, reconnue pour notre capacité à créer des espaces durables qui inspirent le bien-être et la tranquillité d'esprit. Nous rêvons d'un avenir où chaque projet que nous réalisons ne fait pas qu'améliorer l'habitat, mais contribue activement à un environnement sain et à une communauté épanouie. Chez Renovexium, la qualité et la durabilité sont les fondations d'une vie plus saine et heureuse pour tous." : "To be the leading construction and renovation company in Renovexium, recognized for our commitment to quality, sustainability, and creating spaces that inspire and endure. We envision a future where every project contributes positively to our community and environment.";
  const whyChooseUsTitle = locale === 'fr' ? "Pourquoi nous choisir" : "Why Choose Us";
  const whyChooseUsText = locale === 'fr' ? "Avec des années d'expérience, une équipe de professionnels qualifiés et une passion pour la perfection, Renovexium est votre partenaire de confiance pour tous les besoins de construction et de rénovation. Nous sommes fiers de terminer les projets à temps, de respecter le budget et d'offrir un service client inégalé." : "With years of experience, a team of skilled professionals, and a passion for perfection, Renovexium is your trusted partner for all construction and renovation needs. We pride ourselves on timely project completion, adherence to budget, and unparalleled customer service.";
  const whyChooseUsList = locale === 'fr' ? ["Professionnels expérimentés et certifiés", "Engagement envers la qualité et la sécurité", "Solutions innovantes et durables", "Communication transparente et prix équitables", "Satisfaction client garantie"] : ["Experienced and certified professionals", "Commitment to quality and safety", "Innovative and sustainable solutions", "Transparent communication and fair pricing", "Guaranteed client satisfaction"];

  return (
    <div className="text-foreground font-display">
      <Header />
      <main className="py-12 md:py-24">
        <div className="container mx-auto px-4">
          <AnimateOnScroll>
            <h1 className="text-5xl font-bold text-center text-gray-900 mb-12">
              {title}
            </h1>
          </AnimateOnScroll>

          <section className="mb-16">
            <AnimateOnScroll delay={0.1}>
              <div className="flex flex-col md:flex-row items-center bg-white p-8 rounded-lg shadow-lg">
                <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    {missionTitle}
                  </h2>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {missionText}
                  </p>
                </div>
                <div className="md:w-1/2 relative h-64 w-full">
                  <Image
                    src="/construction.png"
                    alt={missionTitle}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: "cover" }}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </AnimateOnScroll>
          </section>
          <section className="mb-16">
            <AnimateOnScroll delay={0.2}>
              <div className="flex flex-col md:flex-row-reverse items-center bg-white p-8 rounded-lg shadow-lg">
                <div className="md:w-1/2 md:pl-8 mb-8 md:mb-0">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    {visionTitle}
                  </h2>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {visionText}
                  </p>
                </div>
                <div className="md:w-1/2 relative h-64 w-full bg-white">
                  <Image
                    src="/app.png"
                    alt={visionTitle}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: "cover" }}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </AnimateOnScroll>
          </section>
          <section>
            <AnimateOnScroll delay={0.3}>
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  {whyChooseUsTitle}
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {whyChooseUsText}
                </p>
                <ul className="list-disc list-inside text-left text-gray-700 text-lg mx-auto max-w-2xl">
                  {whyChooseUsList.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}