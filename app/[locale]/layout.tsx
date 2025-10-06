import type React from "react"
import type { Metadata } from "next"
import { Work_Sans } from "next/font/google"
import "../globals.css"
import { LayoutWrapper } from "@/components/layout-wrapper"
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Renovexium - Building the Future, Together",
  description:
    "With a legacy of excellence and a commitment to innovation, we deliver exceptional construction solutions that shape communities and inspire progress.",
}

export default async function RootLayout({
  children,
  params: {locale}
}: Readonly<{
  children: React.ReactNode
  params: {locale: string}
}>) {
  const messages = await getMessages({locale});

  return (
    <html lang={locale} className={workSans.variable}>
      <body className="flex min-h-screen flex-col font-sans antialiased overflow-x-hidden body-background">
        <NextIntlClientProvider messages={messages} locale={locale}>
          <LayoutWrapper>{children}</LayoutWrapper>
        </NextIntlClientProvider>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
        
      </body>
    </html>
  )
}