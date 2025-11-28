import logoVoxflow from "@/assets/logo-voxflow.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center gap-2">
          <img 
            src={logoVoxflow} 
            alt="VoxFlow AI Logo" 
            className="h-14 w-auto object-contain"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
