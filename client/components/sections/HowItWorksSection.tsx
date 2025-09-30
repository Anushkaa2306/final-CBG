import { CheckCircle, ClipboardList, MessageSquare, Wrench, FileText } from "lucide-react";

export default function HowItWorksSection() {
  const steps = [
    { icon: MessageSquare, title: "Book", desc: "Fill booking form or WhatsApp/Call us." },
    { icon: ClipboardList, title: "Inspect", desc: "Expert visits for PDI (photos, OBD, checks)." },
    { icon: FileText, title: "Report", desc: "Receive detailed report (photos/videos + diagnostics)." },
    { icon: Wrench, title: "Parts & Fix", desc: "Request parts; we source new/used parts." },
    { icon: CheckCircle, title: "Decide", desc: "Use report to accept, renegotiate or reject." },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8">How It Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="p-4 bg-background rounded-lg shadow hover:shadow-lg transition">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold mb-1">{title}</h3>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
