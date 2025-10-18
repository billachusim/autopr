import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check } from "lucide-react";

const Pricing = () => {
  const pricingTiers = [
    {
      name: "Get Online",
      target: "Offline/Local Businesses",
      price: "$499",
      period: "One-time forever fee",
      features: [
        "Professional AI-powered website",
        "Social media setup & branding",
        "Google Business & Maps integration",
        "Basic automation workflows",
        "24/7 AI agent monitoring",
      ],
    },
    {
      name: "Automate & Scale",
      target: "Active SMEs",
      price: "$1,999",
      period: "One-time forever fee",
      popular: true,
      features: [
        "Everything in Get Online, plus:",
        "AI-powered ads management",
        "Full CRM & lead automation",
        "Email & SMS marketing campaigns",
        "Customer relationship management",
        "Data analysis & insights dashboard",
        "Dedicated AI business agents",
      ],
    },
    {
      name: "Full PR Suite",
      target: "Established Brands",
      price: "$4,999",
      period: "One-time forever fee",
      features: [
        "Everything in Automate & Scale, plus:",
        "PR & media outreach automation",
        "Influencer matching & partnerships",
        "Event management & brand positioning",
        "Partnership opportunity matching",
        "Advanced data analysis & predictions",
        "Cyber security & digital protection",
        "Reputation management system",
        "Social listening & crisis detection",
        "Priority AI agent support",
      ],
    },
    {
      name: "Enterprise",
      target: "Multi-location Firms",
      price: "Custom",
      period: "Tailored solution",
      features: [
        "Everything in Full PR Suite, plus:",
        "Dedicated human & AI team",
        "Multi-location management",
        "Intelligent HR management suite",
        "Recruitment & talent acquisition",
        "Performance & benefits management",
        "Advanced cyber security suite",
        "Custom integrations & workflows",
        "White-label options available",
        "Predictive business intelligence",
        "Unlimited automation & agents",
      ],
    },
  ];

  return (
    <section className="py-20 sm:py-32 bg-muted/30" id="pricing">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              One-time investment. Lifetime value. No recurring fees, no hidden costs. Just mind your business while we handle the rest.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              *Final pricing customized during your consultation based on your specific service selections
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {pricingTiers.map((tier, index) => (
              <Card
                key={index}
                className={`relative border-border hover:shadow-lg transition-all duration-300 ${
                  tier.popular ? "border-primary border-2 shadow-md" : ""
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                
                <CardHeader className="text-center pb-6">
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{tier.target}</p>
                  <div>
                    <p className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {tier.price}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">{tier.period}</p>
                  </div>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-sm">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a 
                    href="https://calendly.com/theprfaculty/30min" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button 
                      className={`w-full rounded-full ${
                        tier.popular 
                          ? "bg-gradient-to-r from-primary to-secondary hover:opacity-90" 
                          : "bg-muted hover:bg-muted/80 text-foreground"
                      } transition-all duration-300`}
                    >
                      Book a Call
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground text-sm max-w-3xl mx-auto">
              No staff drama. No complicated dashboards. No sign-ups or credit cards needed right now. Just mind your business and watch growth happen with dedicated AI agents monitoring your data and advising every next step for you to approve or automate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
