import type React from "react"
import type { Metadata } from "next"
import { Work_Sans } from "next/font/google"
import "./globals.css"
import { LayoutWrapper } from "@/components/layout-wrapper"

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={workSans.variable}>
      <body className="flex min-h-screen flex-col font-sans antialiased overflow-x-hidden"
        style={{
          backgroundImage: `url("/construction.png")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <LayoutWrapper>{children}</LayoutWrapper>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
        
      </body>
    </html>
  )
}