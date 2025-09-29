import { AnimateOnScroll } from "@/components/AnimateOnScroll";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "John Doe",
      company: "ABC Inc.",
      testimonial: "Foued Company delivered our project on time and on budget. Their team was professional, and the quality of their work exceeded our expectations.",
      image: "https://randomuser.me/api/portraits/men/76.jpg",
    },
    {
      name: "Jane Smith",
      company: "XYZ Corp.",
      testimonial: "We were very impressed with the attention to detail and the commitment to quality that Foued Company brought to our project. We would definitely work with them again.",
      image: "https://randomuser.me/api/portraits/women/83.jpg",
    },
  ]

  return (
    <section id="testimonials" className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-8 md:mb-12">What Our Clients Say</h2>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimateOnScroll key={index} delay={index * 0.2}>
              <div className="p-6 md:p-8 bg-white rounded-lg border border-gray-200 h-full">
                <div className="flex items-center mb-4">
                  <img
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                    src={testimonial.image}
                  />
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-foreground">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-base text-muted-foreground">{testimonial.testimonial}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
