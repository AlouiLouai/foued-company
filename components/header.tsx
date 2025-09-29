"use client"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sun, Moon } from "lucide-react"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme") || "light"
      setTheme(savedTheme)
      document.documentElement.classList.toggle("dark", savedTheme === "dark")
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm shadow-md border-b border-border">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3 md:px-6">
        <a href="/" className="flex items-center gap-3">
          <svg
            className="h-8 w-8 text-primary"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5-10-5-10 5z"></path>
          </svg>
          <span className="text-2xl font-bold text-primary">Foued Company</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a className="text-base font-semibold text-muted-foreground hover:text-primary transition-colors" href="#">
            About Us
          </a>
          <a className="text-base font-semibold text-muted-foreground hover:text-primary transition-colors" href="#">
            Services
          </a>
          <a className="text-base font-semibold text-muted-foreground hover:text-primary transition-colors" href="/contact">
            Contact
          </a>
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {theme === "light" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
        </div>
        <div className="flex items-center md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="mr-2">
            {theme === "light" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
          <button className="text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <svg
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
          <a className="text-2xl font-medium text-foreground hover:text-primary transition-colors" href="#" onClick={() => setIsMobileMenuOpen(false)}>
            About Us
          </a>
          <a className="text-2xl font-medium text-foreground hover:text-primary transition-colors" href="#" onClick={() => setIsMobileMenuOpen(false)}>
            Services
          </a>
          <a className="text-2xl font-medium text-foreground hover:text-primary transition-colors" href="#" onClick={() => setIsMobileMenuOpen(false)}>
            Team
          </a>
          <a className="text-2xl font-medium text-foreground hover:text-primary transition-colors" href="#" onClick={() => setIsMobileMenuOpen(false)}>
            Contact
          </a>
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {theme === "light" ? (
              <Sun className="h-6 w-6" />
            ) : (
              <Moon className="h-6 w-6" />
            )}
          </Button>
        </div>
      )}
    </header>
  )
}
