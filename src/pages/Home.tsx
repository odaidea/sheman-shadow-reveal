
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import LogoPattern from '@/components/LogoPattern';
import AnimatedSection from '@/components/AnimatedSection';

const Home = () => {
  return (
    <div className="min-h-screen bg-cream-50 relative">
      <LogoPattern />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
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
                <Link to="/products">
                  <Button className="bg-amber-800 hover:bg-amber-900 text-white px-8 py-6 text-lg">
                    Shop the Collection
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" className="border-amber-800 text-amber-800 hover:bg-amber-800 hover:text-white px-8 py-6 text-lg">
                    Discover Our Story
                  </Button>
                </Link>
              </div>

              {/* Newsletter Signup */}
              <div className="space-y-4 pt-8">
                <p className="text-gray-700 font-medium">Join our sustainable journey</p>
                <div className="flex space-x-3 max-w-md">
                  <Input 
                    placeholder="Enter your email" 
                    className="flex-1 bg-white/80 border-gray-300 focus:border-amber-800"
                  />
                  <Button className="bg-amber-800 hover:bg-amber-900 text-white">
                    Subscribe
                  </Button>
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

      {/* Quick Features Section */}
      <section className="py-16 px-6 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection animation="fade-in-up">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { title: "100% Natural Fibers", desc: "Pure, organic materials" },
                { title: "Zero Waste", desc: "Sustainable production" },
                { title: "Handmade", desc: "Traditional craftsmanship" },
                { title: "Ethiopian Heritage", desc: "Cultural authenticity" }
              ].map((feature, index) => (
                <AnimatedSection key={index} delay={index * 100} className="p-6">
                  <div className="w-16 h-16 bg-amber-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <div className="w-8 h-8 border-2 border-white rotate-45"></div>
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
