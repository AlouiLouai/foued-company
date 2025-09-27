import { Facebook, Twitter, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-lg md:text-xl font-bold text-foreground mb-4">Foued Company</h4>
            <p className="text-base text-muted-foreground">Constructing excellence since 2023.</p>
          </div>
          <div>
            <h4 className="text-lg md:text-xl font-bold text-foreground mb-4">Quick Links</h4>
            <ul>
              <li className="mb-2">
                <a className="text-base text-muted-foreground hover:text-primary transition-colors" href="#mission">
                  Mission
                </a>
              </li>
              <li className="mb-2">
                <a className="text-base text-muted-foreground hover:text-primary transition-colors" href="#history">
                  History
                </a>
              </li>
              <li className="mb-2">
                <a className="text-base text-muted-foreground hover:text-primary transition-colors" href="#certifications">
                  Certifications
                </a>
              </li>
              <li>
                <a className="text-base text-muted-foreground hover:text-primary transition-colors" href="#team">
                  Team
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg md:text-xl font-bold text-foreground mb-4">Contact Us</h4>
            <p className="text-base text-muted-foreground">123 Construction Ave, Buildtown, USA</p>
            <p className="text-base text-muted-foreground">contact@fouedcompany.com</p>
            <p className="text-base text-muted-foreground">(123) 456-7890</p>
          </div>
          <div>
            <h4 className="text-lg md:text-xl font-bold text-foreground mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a className="text-muted-foreground hover:text-primary transition-colors" href="#">
                <Facebook className="w-6 h-6" />
              </a>
              <a className="text-muted-foreground hover:text-primary transition-colors" href="#">
                <Twitter className="w-6 h-6" />
              </a>
              <a className="text-muted-foreground hover:text-primary transition-colors" href="#">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground md:flex md:justify-between md:items-center">
          <p className="mb-2 md:mb-0">© 2025 Foued Company. All rights reserved.</p>
          <div className="flex justify-center space-x-4">
            <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
            <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
