export function TeamSection() {
  const teamMembers = [
    {
      name: "Foued",
      role: "CEO",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "sa7eb Foued",
      role: "COO",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
    },
  ]

  return (
    <section id="team" className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-8 md:mb-12">Leadership Team</h2>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center p-6 rounded-lg border border-gray-200 bg-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out dark:bg-card">
                <img
                  alt={member.name}
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-4 object-cover"
                  src={member.image || "/placeholder.svg"}
                />
                <h3 className="text-xl md:text-2xl font-semibold text-foreground">{member.name}</h3>
                <p className="text-primary font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
