
import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import AnimatedSection from '../components/AnimatedSection';

const LeafIcon = () => (
  <svg className="icon-lg text-white" viewBox="0 0 24 24">
    <path d="M11 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7z"/>
    <path d="M11 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
  </svg>
);

const RecycleIcon = () => (
  <svg className="icon-lg text-white" viewBox="0 0 24 24">
    <path d="M7 19H6.5a2.5 2.5 0 0 1 0-5H14"/>
    <path d="m10 17-3 3 3 3"/>
    <path d="M17 5H17.5a2.5 2.5 0 0 1 0 5H10"/>
    <path d="m14 7 3-3-3-3"/>
  </svg>
);

const HandIcon = () => (
  <svg className="icon-lg text-white" viewBox="0 0 24 24">
    <path d="M18 11h-4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4"/>
    <path d="M6 7v10a1 1 0 0 0 1 1h2"/>
    <path d="M10 7V6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1"/>
    <path d="M14 7v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V7"/>
  </svg>
);

const MapPinIcon = () => (
  <svg className="icon-lg text-white" viewBox="0 0 24 24">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const Home = () => {
  return (
    <div className="min-h-screen bg-cream-50 relative">
      {/* Logo Pattern Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
        <div className="grid grid-cols-6 gap-20 p-12 rotate-12" style={{ transform: 'rotate(12deg) scale(1.1)' }}>
          {Array.from({ length: 36 }).map((_, i) => (
            <div key={i} className="w-24 h-24 relative">
              <img
                src="/lovable-uploads/7d6363d6-9921-42c0-a240-ebca2dd21d51.png"
                alt=""
                className="w-full h-full object-contain"
                style={{ opacity: 0.4 }}
              />
              <div className="absolute inset-0 border border-amber-800 rounded-full" style={{ opacity: 0.2 }}></div>
              <div className="absolute top-1/2 left-1/2 w-1 h-8 bg-amber-800 rotate-45" style={{ transform: 'translate(-50%, -50%) rotate(45deg)', opacity: 0.2 }}></div>
              <div className="absolute top-1/2 left-1/2 w-8 h-1 bg-amber-800 rotate-45" style={{ transform: 'translate(-50%, -50%) rotate(45deg)', opacity: 0.2 }}></div>
            </div>
          ))}
        </div>
      </div>

      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-80vh">
            {/* Left Content */}
            <AnimatedSection className="space-y-8" animation="fade-in-left">
              <div className="space-y-6">
                <h1 className="font-playfair text-5xl lg:text-7xl font-bold text-gray-800 leading-tight">
                  Naturally Beautiful.
                  <br />
                  <span className="italic text-amber-800">Sustainably Yours.</span>
                </h1>
                
                <p className="text-gray-600 text-xl leading-relaxed max-w-lg">
                  Eco-conscious fashion rooted in tradition, crafted for the future.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/products" className="btn btn-primary px-8 py-6 text-lg">
                  Shop the Collection
                </Link>
                <Link to="/about" className="btn btn-outline px-8 py-6 text-lg">
                  Discover Our Story
                </Link>
              </div>

              {/* Newsletter Signup */}
              <div className="space-y-4 pt-8">
                <p className="text-gray-700 font-medium">Join our sustainable journey</p>
                <div className="flex space-x-3 max-w-md">
                  <input 
                    type="email"
                    placeholder="Enter your email" 
                    className="input flex-1"
                  />
                  <button className="btn btn-primary">
                    Subscribe
                  </button>
                </div>
              </div>
            </AnimatedSection>

            {/* Right Content - Hero Image */}
            <AnimatedSection className="relative" animation="fade-in-right" delay={200}>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden">
                <img
                  src="/lovable-uploads/16586adb-fe2a-4391-8e97-faec2f3fa2e2.png"
                  alt="Sustainable Fashion"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 border-4 border-amber-800 rotate-45 bg-cream-50/80"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-amber-800 rotate-45"></div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Full-width Fabric Preparation Section */}
      <section className="w-full h-96 relative overflow-hidden">
        <AnimatedSection animation="fade-in-up">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1518495973542-4542c06a5843"
              alt="Natural fabric preparation process with sunlight filtering through green leaves"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/60"></div>
          </div>
          
          <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
            <div className="max-w-4xl">
              <h2 className="font-playfair text-4xl lg:text-6xl font-bold text-white mb-6">
                From Nature to <span className="italic text-amber-200">Nurture</span>
              </h2>
              <p className="text-white/90 text-xl leading-relaxed">
                Our fabric preparation process honors the earth, using traditional methods
                that work in harmony with nature's rhythm.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Quick Features Section */}
      <section className="py-16 px-6 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection animation="fade-in-up">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { 
                  title: "100% Natural Fibers", 
                  desc: "Pure, organic materials",
                  icon: LeafIcon
                },
                { 
                  title: "Zero Waste", 
                  desc: "Sustainable production",
                  icon: RecycleIcon
                },
                { 
                  title: "Handmade", 
                  desc: "Traditional craftsmanship",
                  icon: HandIcon
                },
                { 
                  title: "Ethiopian Heritage", 
                  desc: "Cultural authenticity",
                  icon: MapPinIcon
                }
              ].map((feature, index) => (
                <AnimatedSection key={index} delay={index * 100} className="p-6">
                  <div className="w-16 h-16 bg-amber-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <feature.icon />
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-gray-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Home;
