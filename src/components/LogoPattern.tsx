
const LogoPattern = () => {
  return (
    <div className="absolute inset-0 opacity-[0.02] pointer-events-none overflow-hidden">
      <div className="grid grid-cols-6 gap-16 p-8 transform rotate-12 scale-110">
        {Array.from({ length: 48 }).map((_, i) => (
          <div key={i} className="w-32 h-32">
            <img
              src="/lovable-uploads/f9fa095c-3824-499a-87b9-c25c1e15d930.png"
              alt=""
              className="w-full h-full object-contain opacity-50"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoPattern;
