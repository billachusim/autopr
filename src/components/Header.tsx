import { TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (!isMobile) {
      setShowHeader(true);
      return;
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowHeader(true);
      } else if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setShowHeader(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isMobile]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border transition-transform duration-300 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-3">
          {/* Logo */}
          <div className="relative w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
            <TrendingUp className="h-6 w-6 text-white" />
          </div>
          
          {/* Brand Name and Tagline */}
          <div>
            <h1 className="text-xl font-bold text-foreground">AutoPR</h1>
            <p className="text-xs text-muted-foreground">Mind Your Business, We'll handle the rest.</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
