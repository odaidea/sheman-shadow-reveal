
const LogoPattern = () => {
  return (
    <div className="absolute inset-0 opacity-[0.015] pointer-events-none overflow-hidden">
      <div className="grid grid-cols-6 gap-20 p-12 transform rotate-12 scale-110">
        {Array.from({ length: 36 }).map((_, i) => (
          <div key={i} className="w-24 h-24 relative">
            {/* Original logo pattern */}
            <img
              src="/lovable-uploads/7d6363d6-9921-42c0-a240-ebca2dd21d51.png"
              alt=""
              className="w-full h-full object-contain opacity-40"
            />
            {/* Additional geometric elements inspired by the logo */}
            <div className="absolute inset-0 border border-amber-800/20 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 w-1 h-8 bg-amber-800/20 transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
            <div className="absolute top-1/2 left-1/2 w-8 h-1 bg-amber-800/20 transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoPattern;
