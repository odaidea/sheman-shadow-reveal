import { useEffect, useState } from 'react';

const MouseThread = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Add new point to trail
      setTrail(prev => {
        const newTrail = [...prev, { x: e.clientX, y: e.clientY, id: Date.now() }];
        // Keep only last 15 points
        return newTrail.slice(-15);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Thread trail */}
      <svg className="absolute inset-0 w-full h-full">
        {trail.length > 1 && (
          <path
            d={`M ${trail.map(point => `${point.x},${point.y}`).join(' L ')}`}
            stroke="rgba(180, 83, 9, 0.3)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            className="animate-pulse"
          />
        )}
      </svg>
      
      {/* Thread end point */}
      <div
        className="absolute w-2 h-2 bg-amber-600 rounded-full transform -translate-x-1 -translate-y-1 transition-all duration-75"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
      >
        <div className="absolute inset-0 bg-amber-600 rounded-full animate-ping opacity-75"></div>
      </div>
    </div>
  );
};

export default MouseThread;
