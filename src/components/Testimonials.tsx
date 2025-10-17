import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "In just 2 weeks, AutoPR helped us attract 200+ new leads and automate our bookings.",
      business: "The Groom Hub Barbershop, Chicago",
      metrics: ["+210 leads", "94% booking automation"],
    },
    {
      quote: "We launched online in one day — website, ads, and CRM all done. It felt like magic.",
      business: "Eden Spa & Wellness, London",
      metrics: ["From offline to online in 24 hours"],
    },
    {
      quote: "AutoPR cut our ad costs by 40% while doubling engagement.",
      business: "Delight Bakery, Toronto",
      metrics: ["2x engagement", "40% less ad spend"],
    },
    {
      quote: "We didn't need to hire a marketing team. AutoPR became our marketing team.",
      business: "Nova Consulting, Dubai",
      metrics: ["Saved $5,000/month in staff costs"],
    },
  ];

  return (
    <section className="py-20 sm:py-32 bg-muted/30" id="testimonials">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
            Businesses that let us handle the rest.
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 sm:mb-16">
            Real stories from real businesses who trusted AutoPR to automate their growth.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-border hover:shadow-lg transition-all duration-300 bg-background"
              >
                <CardContent className="p-6 sm:p-8">
                  <p className="text-base sm:text-lg mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="space-y-3">
                    <p className="font-semibold text-sm sm:text-base">
                      {testimonial.business}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {testimonial.metrics.map((metric, metricIndex) => (
                        <span
                          key={metricIndex}
                          className="text-xs sm:text-sm px-3 py-1 bg-primary/10 text-primary rounded-full font-medium"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <a 
              href="https://calendly.com" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                size="lg" 
                className="rounded-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-300"
              >
                Book a Call
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
