import { Button } from "@/components/ui/button";
import { Zap, Bot, Globe } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Zap,
      title: "Build your online presence in hours",
    },
    {
      icon: Bot,
      title: "Automate your marketing and sales",
    },
    {
      icon: Globe,
      title: "Reach global audiences effortlessly",
    },
  ];

  return (
    <section className="py-20 sm:py-32 bg-muted/30" id="about">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">
            We make your business look like it runs itself.
          </h2>
          
          <p className="text-lg sm:text-xl text-muted-foreground mb-12 sm:mb-16 leading-relaxed">
            AutoPR combines AI agents, intelligent automation, and proven PR strategies to power your complete digital transformation. From customer relationship management to data-driven workflows, we deploy enterprise-level technology so you can focus on what truly matters: running your business. No staff drama. No complicated dashboards. Just results.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="p-6 bg-background rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-border"
              >
                <highlight.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                <p className="font-medium text-base sm:text-lg">{highlight.title}</p>
              </div>
            ))}
          </div>

          <a 
            href="https://calendly.com/theprfaculty/30min" 
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
    </section>
  );
};

export default About;
