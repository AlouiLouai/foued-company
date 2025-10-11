"use client"
import Image from "next/image";
import { useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import Link from "next/link"
import { LanguageSelect } from "./language-select";
import { languages, Language } from "@/lib/languages";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const pathname = usePathname()
  const router = useRouter()
  const locale = pathname.split('/')[1] || 'en'

  const handleLanguageChange = (lang: Language) => {
    const newPath = `/${lang.code}${pathname.substring(3)}`
    router.replace(newPath)
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setIsVisible(false)
        } else {
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
        <Link href={`/${locale}/`} className="flex items-center gap-3">
          <Image src="/app_logo.png" alt="Renovexium Logo" width={100} height={56} className="w-auto" />
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link className="text-base font-semibold text-black transition-colors" href={`/${locale}/about`}>
            {locale === 'fr' ? 'À propos' : 'About'}
          </Link>
          <Link className="text-base font-semibold text-black transition-colors" href={`/${locale}/#services`}>
            {locale === 'fr' ? 'Services' : 'Services'}
          </Link>
          <Link className="text-base font-semibold text-black transition-colors" href={`/${locale}/contact`}>
            {locale === 'fr' ? 'Contact' : 'Contact'}
          </Link>
          <div className="relative w-32">
            <LanguageSelect
              languages={languages}
              selectedLanguage={locale}
              onChange={handleLanguageChange}
            />
          </div>
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
          <Link className="text-2xl font-medium text-foreground hover:text-primary transition-colors" href={`/${locale}/about`} onClick={() => setIsMobileMenuOpen(false)}>
            {locale === 'fr' ? 'À propos' : 'About'}
          </Link>
          <Link className="text-2xl font-medium text-foreground hover:text-primary transition-colors" href={`/${locale}/#services`} onClick={() => setIsMobileMenuOpen(false)}>
            {locale === 'fr' ? 'Services' : 'Services'}
          </Link>
          <Link className="text-2xl font-medium text-foreground hover:text-primary transition-colors" href={`/${locale}/#`} onClick={() => setIsMobileMenuOpen(false)}>
            {locale === 'fr' ? 'Équipe' : 'Team'}
          </Link>
          <Link className="text-2xl font-medium text-foreground hover:text-primary transition-colors" href={`/${locale}/contact`} onClick={() => setIsMobileMenuOpen(false)}>
            {locale === 'fr' ? 'Contact' : 'Contact'}
          </Link>
        </div>
      )}
    </header>
  )
}
