import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 h-[70px] md:h-[80px] transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-lg border-b border-border/50 shadow-lg" 
          : "bg-transparent"
      }`}
    >
      <div className="h-full flex items-center px-4 md:px-6">
        <img 
          src="/images/logo-voxflow.png" 
          alt="VoxFlow AI Logo" 
          className="h-12 md:h-[60px] w-auto max-w-[250px] object-contain"
        />
      </div>
    </header>
  );
};

export default Header;
