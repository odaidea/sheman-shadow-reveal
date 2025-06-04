
const LogoInspiredPattern = () => {
  return (
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none overflow-hidden">
      <div className="grid grid-cols-8 gap-12 p-6 transform rotate-6">
        {Array.from({ length: 64 }).map((_, i) => (
          <div key={i} className="w-16 h-16 relative">
            {/* Circular pattern inspired by logo */}
            <div className="absolute inset-0 border-2 border-amber-800 rounded-full"></div>
            <div className="absolute inset-2 border border-amber-600 rounded-full"></div>
            <div className="absolute inset-4 bg-amber-800 rounded-full opacity-50"></div>
            {/* Geometric elements */}
            <div className="absolute top-1/2 left-1/2 w-1 h-6 bg-amber-700 transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
            <div className="absolute top-1/2 left-1/2 w-6 h-1 bg-amber-700 transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoInspiredPattern;
