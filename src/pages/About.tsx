
import Navigation from '@/components/Navigation';
import LogoPattern from '@/components/LogoPattern';
import MouseThread from '@/components/MouseThread';
import AnimatedSection from '@/components/AnimatedSection';
import { Heart, Users, Award, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-cream-50 relative">
      <LogoPattern />
      <MouseThread />
      <Navigation />
      
      <div className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h1 className="font-playfair text-5xl lg:text-6xl font-bold text-gray-800 text-center mb-16">
              A Family Legacy in <span className="italic text-amber-800">Every Stitch</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" delay={200}>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8">
              <p className="text-xl">
                SHeMan Design and Ethio Fabrics is more than a brand—it's a family story woven with purpose, passion, and sustainability. Founded over two years ago, we've built our business on love for Ethiopian heritage, natural materials, and ethical craftsmanship.
              </p>
              
              <p>
                Every piece is designed with care, combining traditional techniques with a modern, zero-waste philosophy. Our journey began with a simple belief: that fashion should honor both people and planet.
              </p>
            </div>
          </AnimatedSection>

          {/* Full-width Heritage Image */}
          <section className="w-full h-96 relative overflow-hidden my-16 -mx-6">
            <AnimatedSection animation="fade-in-up">
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1500673922987-e212871fec22"
                  alt="Beautiful Ethiopian landscape representing our heritage and connection to nature"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/60"></div>
              </div>
              
              <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
                <div className="max-w-4xl">
                  <h2 className="font-playfair text-4xl lg:text-6xl font-bold text-white mb-6">
                    Rooted in <span className="italic text-amber-200">Tradition</span>
                  </h2>
                  <p className="text-white/90 text-xl leading-relaxed">
                    Our heritage runs deep through generations of Ethiopian textile artistry,
                    connecting past wisdom with future sustainability.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </section>

          <AnimatedSection animation="fade-in-left" delay={400} className="mt-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
              <h2 className="font-playfair text-3xl font-semibold text-amber-800 mb-6">Our Mission</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                To redefine fashion through eco-friendly, fully natural materials, and a commitment to sustainability—from fiber to finish. We believe in creating beautiful clothing that respects traditional craftsmanship while embracing innovative, sustainable practices.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-right" delay={600} className="mt-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="font-playfair text-2xl font-semibold text-gray-800">Our Values</h3>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: Heart, text: "Respect for traditional Ethiopian craftsmanship" },
                    { icon: Globe, text: "Commitment to zero-waste production" },
                    { icon: Award, text: "Use of 100% natural, sustainable materials" },
                    { icon: Users, text: "Supporting local artisan communities" }
                  ].map((value, index) => (
                    <div key={index} className="flex flex-col items-center text-center space-y-3">
                      <div className="w-12 h-12 bg-amber-800 rounded-full flex items-center justify-center">
                        <value.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-gray-700 text-sm">{value.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-amber-800/10 rounded-xl p-6">
                <h3 className="font-playfair text-2xl font-semibold text-gray-800 mb-4">Family Heritage</h3>
                <p className="text-gray-700">
                  Our designs are inspired by generations of Ethiopian textile traditions, passed down through our family. Each pattern tells a story, each color holds meaning, and every piece connects the wearer to a rich cultural heritage.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default About;
