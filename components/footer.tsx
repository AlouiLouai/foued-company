"use client"
import { Facebook, Linkedin, Instagram } from "lucide-react"
import { usePathname } from "next/navigation";

export function Footer() {
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'en';

  const copyrightText = locale === 'fr' 
    ? "© 2025 Renovexium. Tous droits réservés."
    : "© 2025 Renovexium. All rights reserved.";

  return (
    <footer className="bg-transparent">
      <div className="container mx-auto px-12 py-12">
        <div className="mt-8 text-center text-sm text-black md:flex md:justify-between md:items-center">
          <div className="flex items-center space-x-4">
            <h4 className="text-lg font-bold">Follow Us</h4>
            <a className="text-black hover:text-primary transition-colors" href="#">
              <Linkedin className="w-6 h-6" />
            </a>
            <a className="text-black hover:text-primary transition-colors" href="#">
              <Facebook className="w-6 h-6" />
            </a>
            <a className="text-black hover:text-primary transition-colors" href="#">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
          <p className="mb-2 md:mb-0">{copyrightText}</p>
        </div>
      </div>
    </footer>
  )
}
