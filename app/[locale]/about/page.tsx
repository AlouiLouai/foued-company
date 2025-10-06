"use client"
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("AboutPage");

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <h1 className="text-5xl font-bold text-center text-gray-900 mb-12">
            {t("title")}
          </h1>
        </AnimateOnScroll>

        <section className="mb-16">
          <AnimateOnScroll delay={0.1}>
            <div className="flex flex-col md:flex-row items-center bg-white p-8 rounded-lg shadow-lg">
              <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  {t("mission_title")}
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {t("mission_text")}
                </p>
              </div>
              <div className="md:w-1/2 relative h-64 w-full">
                <Image
                  src="/construction.png"
                  alt={t("mission_title")}
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
                  {t("vision_title")}
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {t("vision_text")}
                </p>
              </div>
              <div className="md:w-1/2 relative h-64 w-full">
                <Image
                  src="/app.png"
                  alt={t("vision_title")}
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
                {t("why_choose_us_title")}
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {t("why_choose_us_text")}
              </p>
              <ul className="list-disc list-inside text-left text-gray-700 text-lg mx-auto max-w-2xl">
                {t.raw("why_choose_us_list").map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>
        </section>

        <div className="fixed bottom-8 left-8 z-50">
          <a href="/" className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-colors duration-300">
            {t("back_to_home")}
          </a>
        </div>
      </div>
    </div>
  );
}
