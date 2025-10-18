import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-accent/5 pt-20">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Mind your business, we'll handle the rest.
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
            AutoPR deploys AI agents, intelligent automation, and enterprise-grade workflows to build and manage your complete digital presence. From websites, apps, social media management to customer relationship management, PR campaigns, and data-driven growth strategies. Look and perform like a Fortune 500 company while we handle the rest.
          </p>
          
          <a 
            href="https://calendly.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button 
              size="lg" 
              className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              Book a Free Call
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </div>
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
    </section>
  );
};

export default Hero;
