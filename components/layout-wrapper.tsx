"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import type React from "react"
import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [showScrollToTop, setShowScrollToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollToTop(true)
      } else {
        setShowScrollToTop(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      {children}
      {showScrollToTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 p-3 rounded-full shadow-lg z-50 bg-black text-white hover:bg-gray-800"
          variant="ghost"
          size="icon"
        >
          <ArrowUp className="h-6 w-6" />
        </Button>
      )}
    </>
  )
}
