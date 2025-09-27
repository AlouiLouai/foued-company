"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Loader2, MapPin, Phone, Mail } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsLoading(false)
    setIsSubmitted(true)
    console.log("Form submitted:", formData)
    // In a real application, you would send formData to your backend here
  }

  return (
    <section id="contact" className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-8 md:mb-12">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Information */}
          <div className="bg-card p-8 rounded-lg shadow-lg border border-border space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-4">Our Details</h3>
            <p className="text-lg text-muted-foreground">
              We'd love to hear from you! Reach out to us through any of the following channels.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 p-3 rounded-full bg-primary/10 text-primary">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Address</p>
                <p className="text-muted-foreground">123 Construction Ave, Buildtown, USA</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 p-3 rounded-full bg-primary/10 text-primary">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Phone</p>
                <p className="text-muted-foreground">(123) 456-7890</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 p-3 rounded-full bg-primary/10 text-primary">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Email</p>
                <p className="text-muted-foreground">contact@fouedcompany.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-lg shadow-lg border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h3>
            {isSubmitted ? (
              <div className="text-center text-green-500 font-semibold text-lg">
                Thank you for your message! We will get back to you shortly.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full p-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full p-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">Message</label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows={5}
                    className="w-full p-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                    required
                  ></textarea>
                </div>
                <Button type="submit" disabled={isLoading} className="w-full">
                  {isLoading ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : null}
                  {isLoading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
