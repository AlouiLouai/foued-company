"use client"
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <h1 className="text-5xl font-bold text-center text-gray-900 mb-12">
            About Us
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
                  Our mission text.
                </p>
              </div>
              <div className="md:w-1/2 relative h-64 w-full">
                <Image
                  src="/construction.png"
                  alt="Our Mission"
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
                  Our Vision
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Our vision text.
                </p>
              </div>
              <div className="md:w-1/2 relative h-64 w-full">
                <Image
                  src="/app.png"
                  alt="Our Vision"
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
                Why Choose Us
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Why choose us text.
              </p>
              <ul className="list-disc list-inside text-left text-gray-700 text-lg mx-auto max-w-2xl">
                <li>Point 1</li>
                <li>Point 2</li>
                <li>Point 3</li>
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
