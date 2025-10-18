import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      title: "Digital Setup",
      subtitle: "Launch your brand online — fast.",
      items: [
        "AI Website Builder: Get a professional website in under 30 minutes.",
        "Social Media Creation: Facebook, Instagram, LinkedIn, TikTok, YouTube — all set up and branded.",
        "Google Business & Maps Setup: Be discoverable instantly.",
        "Review Platforms Integration: Yelp, Trustpilot, TripAdvisor — build credibility.",
        "Brand Identity Kit: We design your logo, color palette, and brand voice.",
      ],
    },
    {
      title: "Growth & Automation",
      subtitle: "Turn engagement into revenue.",
      items: [
        "CRM & Lead Automation: Capture, manage, and nurture leads automatically.",
        "AI Sales Funnels: Smart pipelines that close sales while you sleep.",
        "Ad Management: Facebook, Google, and Instagram ads optimized by AI.",
        "AI Copywriting & Design: Branded posts, ads, and emails done automatically.",
        "Email & SMS Marketing: Automated campaigns that convert.",
        "Reputation Management: Monitor and respond to reviews across platforms.",
      ],
    },
    {
      title: "Public Relations",
      subtitle: "Build trust and visibility through intelligent PR.",
      items: [
        "Press Releases & Media Outreach: AI-generated, human-approved press coverage.",
        "Influencer Matching: Get paired with influencers that fit your brand.",
        "Social Listening: Track what people are saying about your brand.",
        "Crisis Detection & Response: Early warning systems for negative buzz.",
      ],
    },
    {
      title: "Business Intelligence & Data Analysis",
      subtitle: "See everything that matters — in one dashboard.",
      items: [
        "AI Dashboard: Combine all your marketing, sales, and customer data.",
        "Predictive Insights: Get alerts on when to run promos or scale.",
        "Data Analysis: Transform raw data into actionable insights for smarter decisions.",
        "Customer Analytics: Understand behavior patterns and optimize engagement.",
        "Competitor Watch: See what others are doing and how to outperform them.",
      ],
    },
    {
      title: "Cyber Security & Digital Protection",
      subtitle: "Protect your digital assets with AI-powered security.",
      items: [
        "24/7 Security Monitoring: AI agents watch for threats and vulnerabilities.",
        "Data Protection: Secure customer data and business information.",
        "Threat Detection: Early warning systems for cyber attacks and breaches.",
        "Compliance Management: Stay compliant with data protection regulations.",
        "Backup & Recovery: Automated backups and disaster recovery systems.",
      ],
    },
  ];

  return (
    <section className="py-20 sm:py-32 bg-background" id="services">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 sm:mb-16">
            Everything you need to build, grow, and scale your business online.
          </p>

          <Accordion type="single" collapsible className="space-y-4">
            {services.map((service, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-2xl px-6 bg-muted/20 hover:bg-muted/30 transition-colors"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold mb-1">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {service.subtitle}
                    </p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <ul className="space-y-3 mt-4">
                    {service.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start text-sm sm:text-base text-muted-foreground"
                      >
                        <span className="text-primary mr-2 flex-shrink-0">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12">
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

export default Services;
