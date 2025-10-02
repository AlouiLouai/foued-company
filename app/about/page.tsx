import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <h1 className="text-5xl font-bold text-center text-gray-900 mb-12">
            About Our Company
          </h1>
        </AnimateOnScroll>

        <section className="mb-16">
          <AnimateOnScroll delay={0.1}>
            <div className="flex flex-col md:flex-row items-center bg-white p-8 rounded-lg shadow-lg">
              <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Our Mission
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  At Renovexium, our mission is to transform spaces and exceed
                  expectations through exceptional craftsmanship, innovative
                  solutions, and unwavering dedication to client satisfaction.
                  We believe in building lasting relationships based on trust,
                  transparency, and mutual respect.
                </p>
              </div>
              <div className="md:w-1/2 relative h-64 w-full">
                <Image
                  src="/construction.png"
                  alt="Our Mission"
                  fill
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
                  Our Vision
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To be the leading construction and renovation company in
                  Penovexium, recognized for our commitment to quality,
                  sustainability, and creating spaces that inspire and endure.
                  We envision a future where every project contributes
                  positively to our community and environment.
                </p>
              </div>
              <div className="md:w-1/2 relative h-64 w-full">
                <Image
                  src="/app.png"
                  alt="Our Vision"
                  fill
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
                Why Choose Us?
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                With years of experience, a team of skilled professionals, and a
                passion for perfection, Renovexium is your trusted partner for
                all construction and renovation needs. We pride ourselves on
                timely project completion, adherence to budget, and unparalleled
                customer service.
              </p>
              <ul className="list-disc list-inside text-left text-gray-700 text-lg mx-auto max-w-2xl">
                <li>Experienced and certified professionals</li>
                <li>Commitment to quality and safety</li>
                <li>Innovative and sustainable solutions</li>
                <li>Transparent communication and fair pricing</li>
                <li>Guaranteed client satisfaction</li>
              </ul>
            </div>
          </AnimateOnScroll>
        </section>

        <div className="fixed bottom-8 left-8 z-50">
          <a href="/" className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-colors duration-300">
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
