export function GallerySection() {
  const images = [
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
  ]

  return (
    <section id="gallery" className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-8 md:mb-12">Our Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg">
              <img
                alt={`Project ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                src={image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
