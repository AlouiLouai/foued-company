"use client"
import Image from "next/image";
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          // Scrolling down
          setIsVisible(false)
        } else {
          // Scrolling up
          setIsVisible(true)
        }
        setLastScrollY(window.scrollY)
      }

      window.addEventListener("scroll", handleScroll)
      return () => {
        window.removeEventListener("scroll", handleScroll)
      }
    }
  }, [lastScrollY])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 bg-transparent transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <nav className="container mx-auto flex items-center justify-between px-4 py-3 md:px-6 bg-transparent">
        <a href="/" className="flex items-center gap-3">
          <Image src="/app_logo.png" alt="Renovexium Logo" width={100} height={56} className="w-auto" />
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a className="text-base font-semibold text-black transition-colors" href="/about">
            About Us
          </a>
          <a className="text-base font-semibold text-black transition-colors" href="#services">
            Services
          </a>
          <a className="text-base font-semibold text-black transition-colors" href="/contact">
            Contact
          </a>
        </div>
        <div className="flex items-center md:hidden">
          <button className="text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 6h16M4 12h16m-7 6h7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-background/95 z-[60] flex flex-col items-center justify-center space-y-8">
          <button className="absolute top-6 right-6 text-foreground" onClick={() => setIsMobileMenuOpen(false)}>
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            </svg>
          </button>
          <a className="text-2xl font-medium text-foreground hover:text-primary transition-colors" href="/about" onClick={() => setIsMobileMenuOpen(false)}>
            About Us
          </a>
          <a className="text-2xl font-medium text-foreground hover:text-primary transition-colors" href="#services" onClick={() => setIsMobileMenuOpen(false)}>
            Services
          </a>
          <a className="text-2xl font-medium text-foreground hover:text-primary transition-colors" href="#" onClick={() => setIsMobileMenuOpen(false)}>
            Team
          </a>
          <a className="text-2xl font-medium text-foreground hover:text-primary transition-colors" href="#" onClick={() => setIsMobileMenuOpen(false)}>
            Contact
          </a>
        </div>
      )}
    </header>
  )
}
