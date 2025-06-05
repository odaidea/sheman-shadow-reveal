
import React, { useEffect, useRef, useState } from 'react';

const AnimatedSection = ({ 
  children, 
  className = '', 
  animation = 'fade-in-up', 
  delay = 0 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${
        isVisible
          ? `animate-${animation} opacity-100`
          : 'opacity-0 translate-y-8'
      } ${className}`}
      style={{
        transform: isVisible ? 'translateY(0)' : 'translateY(2rem)',
        transition: 'all 1s ease-out'
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
