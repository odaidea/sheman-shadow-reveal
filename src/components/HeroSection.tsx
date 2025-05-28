
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Twitter, Instagram, Facebook } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-cream-50 relative overflow-hidden pt-20">
      {/* Geometric Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-amber-800 rotate-45"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-amber-800 rotate-12"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-amber-800 rotate-45"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div className="space-y-6">
              <h1 className="font-playfair text-5xl lg:text-7xl font-bold text-gray-800 leading-tight">
                Find your
                <br />
                <span className="italic text-amber-800">fashion's fit</span>
              </h1>
              
              <p className="text-gray-600 text-lg leading-relaxed max-w-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam.
              </p>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-4">
              <p className="text-gray-700 font-medium">Sign up to look now</p>
              <div className="flex space-x-3 max-w-md">
                <Input 
                  placeholder="Email" 
                  className="flex-1 bg-white border-gray-300 focus:border-amber-800"
                />
                <Button className="bg-amber-800 hover:bg-amber-900 text-white px-6">
                  Sign up
                </Button>
                <Button variant="outline" className="border-gray-300 hover:border-amber-800">
                  Login
                </Button>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="flex items-center space-x-8 pt-8">
              <div className="w-12 h-12 border-2 border-amber-800 rotate-45"></div>
              <div className="w-8 h-8 bg-amber-800 rotate-45"></div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className={`relative ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
            <div className="relative">
              {/* Main Image Container with Shadow */}
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
                <img
                  src="/lovable-uploads/16586adb-fe2a-4391-8e97-faec2f3fa2e2.png"
                  alt="Fashion Model"
                  className="w-full h-auto object-cover"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>

              {/* Floating geometric elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 border-2 border-amber-800 rotate-45 bg-cream-50"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-amber-800 rotate-45"></div>
            </div>

            {/* Social Media Icons */}
            <div className="absolute right-0 top-1/2 transform translate-x-12 -translate-y-1/2 space-y-4">
              <div className="bg-white shadow-lg rounded-full p-3 hover:shadow-xl transition-shadow cursor-pointer">
                <Instagram className="w-5 h-5 text-gray-600 hover:text-amber-800 transition-colors" />
              </div>
              <div className="bg-white shadow-lg rounded-full p-3 hover:shadow-xl transition-shadow cursor-pointer">
                <Twitter className="w-5 h-5 text-gray-600 hover:text-amber-800 transition-colors" />
              </div>
              <div className="bg-white shadow-lg rounded-full p-3 hover:shadow-xl transition-shadow cursor-pointer">
                <Facebook className="w-5 h-5 text-gray-600 hover:text-amber-800 transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative pattern */}
      <div className="absolute bottom-0 right-0 opacity-10">
        <div className="grid grid-cols-4 gap-2 p-8">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="w-3 h-3 bg-amber-800 rotate-45"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
