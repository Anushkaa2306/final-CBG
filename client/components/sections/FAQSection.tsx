import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQSection() {
  const faqs = [
    { q: "What is PDI and why do I need it?", a: "A Pre-Delivery Inspection checks your vehicle before purchase/delivery to ensure there are no hidden defects or misrepresentations." },
    { q: "How long does a PDI take?", a: "Typically 1–2 hours depending on vehicle type." },
    { q: "Do you provide reports?", a: "Yes — a detailed report with photos, videos, and OBD logs." },
    { q: "Do you supply spare parts?", a: "Yes — new and quality-tested second-hand parts for private & commercial vehicles. Use the Spare Parts form." },
    { q: "Which areas do you cover?", a: "Currently Indore, Ujjain, Dewas, Dhar & nearby. Expanding soon." },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8">FAQ</h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{f.q}</AccordionTrigger>
                <AccordionContent>{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
