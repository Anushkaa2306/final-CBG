export default function TestimonialsSection() {
  const testimonials = [
    { name: "Rohit Sharma – Indore", text: "Saved me from buying a car with hidden issues. Very professional!" },
    { name: "Anjali Mehta – Rau", text: "Dealers promised everything, but CBG showed me the truth." },
    { name: "Vikas Yadav – Rajendra Nagar", text: "Quick, affordable, and gave me peace of mind." },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8">Testimonials</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {testimonials.map((t) => (
            <div key={t.name} className="p-6 rounded-lg bg-background shadow hover:shadow-lg transition">
              <p className="text-muted-foreground mb-3">“{t.text}”</p>
              <p className="font-semibold">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
