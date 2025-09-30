import { ShieldCheck, Gauge, Scale, Wrench } from "lucide-react";

export default function WhyChooseUsSection() {
  const points = [
    { icon: Scale, text: "Independent & unbiased inspections (we work for the buyer)." },
    { icon: ShieldCheck, text: "150+ point checklist with photo/video proof." },
    { icon: Gauge, text: "OBD & paint-depth diagnostic tools." },
    { icon: Wrench, text: "Spare parts for private & commercial vehicles (new & used)." },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8">Why Choose Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {points.map(({ icon: Icon, text }, i) => (
            <div key={i} className="p-5 rounded-lg border bg-background hover:shadow-lg transition">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
