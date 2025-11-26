import { Bot } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Bot className="w-8 h-8 text-primary animate-glow-pulse" />
            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
          </div>
          <span className="text-2xl font-outfit font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            VoxFlow.ai
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
