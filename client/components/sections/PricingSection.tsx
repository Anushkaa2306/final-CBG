import { Car, Star, Truck } from "lucide-react";
import ServiceCard, { ServiceData } from "@/components/cards/ServiceCard";
import { useEffect, useState } from "react";

/**
 * Pricing Section Component
 * 
 * This section displays all the inspection services with their pricing.
 * It uses the reusable ServiceCard component to maintain consistency.
 * Features:
 * - Special pricing for first 50 customers
 * - Different service categories
 * - Clear feature listings for each service
 */
export default function PricingSection() {
  // Animation state
  const [isVisible, setIsVisible] = useState(false);

  // Trigger animations when component enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector('#pricing-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // Services data - can be moved to a separate data file if needed
  const services: ServiceData[] = [
    {
      title: "New Vehicles (PDI)",
      price: "₹500",
      originalPrice: "₹1500",
      discount: "Launch Offer — Limited Time",
      icon: Car,
      features: [
        "150+ point pre-delivery inspection",
        "Exterior, interior, mechanical & electrical checks",
        "OBD diagnostics (where applicable)",
        "Tyres, brakes & fluids assessment",
        "Photo/video evidence + recommendations"
      ]
    },
    {
      title: "Used Cars (Second-Hand)",
      price: "₹750",
      originalPrice: "₹2000",
      discount: "Launch Offer — Limited Time",
      icon: Car,
      isHighlighted: true,
      features: [
        "Comprehensive 150+ point check",
        "Engine & transmission assessment",
        "Body condition & paint-depth review",
        "Safety and electronics verification",
        "Diagnostic readings + written report"
      ]
    },
    {
      title: "Premium Cars",
      price: "₹750",
      originalPrice: "₹2000",
      discount: "Launch Offer — Limited Time",
      icon: Star,
      features: [
        "Advanced diagnostics & inspection",
        "Premium parts & performance review",
        "Road-test (where allowed)",
        "High-detail report with media",
        "Recommendations for fixes"
      ]
    },
    {
      title: "Commercial Vehicles",
      price: "₹750",
      originalPrice: "��2000",
      discount: "Launch Offer — Limited Time",
      icon: Truck,
      features: [
        "Fleet inspection standards",
        "Heavy-duty diagnostics",
        "Compliance & safety checks",
        "Photo/video + recommendations",
        "Detailed reporting"
      ]
    }
  ];

  // Handle booking action - can be connected to a booking system
  const handleBookNow = (serviceTitle: string) => {
    const phoneNumber = "+918349180078";
    const text = encodeURIComponent(
      `Hello CBG Team, I’d like a quote for: ${serviceTitle}. Name:  Phone/WhatsApp:  Preferred Date:  Additional Details: `
    );
    const waUrl = `https://wa.me/${phoneNumber.replace("+", "")}?text=${text}`;
    window.open(waUrl, "_blank");
  };

  return (
    <section id="pricing-section" className="py-12 sm:py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">

        {/* Section Header - Mobile Optimized */}
        <div className={`text-center mb-8 sm:mb-12 lg:mb-16 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Best Prices Guaranteed
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
            Limited time offer for our first 50 customers in each category.
            Professional inspection services at unbeatable prices.
          </p>
        </div>

        {/* Services Grid - Mobile Optimized */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <ServiceCard
                service={service}
                onBookNow={() => handleBookNow(service.title)}
              />
            </div>
          ))}
        </div>
        
        {/* Additional Information */}
        <div className={`text-center mt-12 transition-all duration-700 ease-out delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <p className="text-sm text-muted-foreground">
            * All prices include comprehensive inspection report and 30-day warranty
          </p>
        </div>
        
      </div>
    </section>
  );
}
