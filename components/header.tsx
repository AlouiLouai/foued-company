"use client"
import Image from "next/image";
import { useState, useEffect } from "react"
import { useTranslations, useLocale } from "next-intl"
import { usePathname, useRouter } from "next/navigation"
import Link from "next/link"

export function Header() {
  const t = useTranslations("Header")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const pathname = usePathname()
  const router = useRouter()
  const locale = useLocale()

  const handleLanguageChange = (lang: string) => {
    const newPath = `/${lang}${pathname.substring(3)}`
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
            {t("about")}
          </Link>
          <Link className="text-base font-semibold text-black transition-colors" href={`/${locale}/#services`}>
            {t("services")}
          </Link>
          <Link className="text-base font-semibold text-black transition-colors" href={`/${locale}/contact`}>
            {t("contact")}
          </Link>
          <div className="flex gap-2">
            <button onClick={() => handleLanguageChange("en")} className="text-base font-semibold text-black">EN</button>
            <button onClick={() => handleLanguageChange("fr")} className="text-base font-semibold text-black">FR</button>
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
            {t("about")}
          </Link>
          <Link className="text-2xl font-medium text-foreground hover:text-primary transition-colors" href={`/${locale}/#services`} onClick={() => setIsMobileMenuOpen(false)}>
            {t("services")}
          </Link>
          <Link className="text-2xl font-medium text-foreground hover:text-primary transition-colors" href={`/${locale}/#`} onClick={() => setIsMobileMenuOpen(false)}>
            Team
          </Link>
          <Link className="text-2xl font-medium text-foreground hover:text-primary transition-colors" href={`/${locale}/contact`} onClick={() => setIsMobileMenuOpen(false)}>
            {t("contact")}
          </Link>
        </div>
      )}
    </header>
  )
}
