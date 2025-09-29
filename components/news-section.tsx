import { AnimateOnScroll } from "@/components/AnimateOnScroll";

export function NewsSection() {
  const newsArticles = [
    {
      title: "Foued Company Awarded Contract for New Downtown Tower",
      date: "September 27, 2025",
      image: "https://picsum.photos/seed/news1/600/200",
    },
    {
      title: "Foued Company Breaks Ground on New Community Hospital",
      date: "September 15, 2025",
      image: "https://picsum.photos/seed/news2/600/200",
    },
    {
      title: "Foued Company Named One of the Best Places to Work",
      date: "August 28, 2025",
      image: "https://picsum.photos/seed/news3/600/200",
    },
  ]

  return (
    <section id="news" className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-8 md:mb-12">Latest News</h2>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsArticles.map((article, index) => (
            <AnimateOnScroll key={index} delay={index * 0.2}>
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden h-full">
                <img
                  alt={article.title}
                  className="w-full h-48 object-cover"
                  src={article.image}
                />
                <div className="p-6">
                  <p className="text-sm text-muted-foreground mb-2">{article.date}</p>
                  <h3 className="text-lg md:text-xl font-semibold text-foreground mb-4">{article.title}</h3>
                  <a href="#" className="text-primary font-semibold">Read More</a>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}