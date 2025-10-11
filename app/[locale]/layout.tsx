import type React from "react"
import type { Metadata } from "next"
import { Work_Sans } from "next/font/google"
import "../globals.css"

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
  return (
    <html>
      <body className="flex min-h-screen flex-col font-sans antialiased overflow-x-hidden body-background">
        {children}
      </body>
    </html>
  )
}