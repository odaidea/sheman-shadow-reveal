
import Navigation from '@/components/Navigation';
import LogoPattern from '@/components/LogoPattern';
import MouseThread from '@/components/MouseThread';
import AnimatedSection from '@/components/AnimatedSection';
import { Leaf, Droplet, Recycle, Users } from 'lucide-react';

const Sustainability = () => {
  return (
    <div className="min-h-screen bg-cream-50 relative">
      <LogoPattern />
      <MouseThread />
      <Navigation />
      
      <div className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h1 className="font-playfair text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
                Design with <span className="italic text-amber-800">Purpose</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                At SHeMan, sustainability isn't a trend—it's our way of life. We source eco-friendly fabrics, practice low-impact dyeing, and ensure nothing goes to waste. Our zero-waste model empowers artisans and protects the planet.
              </p>
            </div>
          </AnimatedSection>

          {/* Full-width Nature Forest Image */}
          <section className="w-full h-96 relative overflow-hidden mb-16 -mx-6">
            <AnimatedSection animation="fade-in-up">
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9"
                  alt="Lush green forest representing our commitment to environmental sustainability"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/60"></div>
              </div>
              
              <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
                <div className="max-w-4xl">
                  <h2 className="font-playfair text-4xl lg:text-6xl font-bold text-white mb-6">
                    Nature's <span className="italic text-green-200">Guardians</span>
                  </h2>
                  <p className="text-white/90 text-xl leading-relaxed">
                    Every thread we weave honors the earth that provides our materials,
                    ensuring future generations inherit a world as beautiful as our fabrics.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </section>

          {/* What Makes Us Different */}
          <AnimatedSection animation="fade-in-up" delay={200}>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl mb-16">
              <h2 className="font-playfair text-3xl font-semibold text-center text-amber-800 mb-12">
                What Makes Us Different
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Fully Natural Textiles",
                    description: "We use only 100% natural fibers sourced from sustainable farms. No synthetic materials ever touch our fabrics.",
                    icon: Leaf
                  },
                  {
                    title: "Zero Synthetic Chemicals",
                    description: "Our dyeing process uses only natural pigments derived from plants, minerals, and earth-based materials.",
                    icon: Droplet
                  },
                  {
                    title: "Minimal Environmental Impact",
                    description: "Every step of our production is designed to minimize water usage, energy consumption, and waste generation.",
                    icon: Recycle
                  },
                  {
                    title: "Community Support",
                    description: "We partner with local artisan communities, providing fair wages and preserving traditional craftsmanship.",
                    icon: Users
                  }
                ].map((item, index) => (
                  <AnimatedSection key={index} delay={index * 150} className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-amber-800 rounded-full flex items-center justify-center mr-4">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-playfair text-xl font-semibold text-gray-800">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Our Process */}
          <AnimatedSection animation="fade-in-left" delay={400}>
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="font-playfair text-4xl font-bold text-gray-800 mb-6">
                  Our Zero-Waste Process
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      step: "01",
                      title: "Sustainable Sourcing",
                      description: "We partner with organic farms and ethical suppliers to source the finest natural fibers."
                    },
                    {
                      step: "02",
                      title: "Natural Dyeing",
                      description: "Using traditional techniques with plant-based dyes, creating vibrant colors without harmful chemicals."
                    },
                    {
                      step: "03",
                      title: "Handcrafted Production",
                      description: "Skilled artisans create each piece by hand, ensuring quality while preserving cultural traditions."
                    },
                    {
                      step: "04",
                      title: "Zero Waste Commitment",
                      description: "Every scrap of fabric is repurposed into accessories or smaller items, ensuring nothing is wasted."
                    }
                  ].map((process, index) => (
                    <AnimatedSection key={index} delay={index * 100}>
                      <div className="flex space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-amber-800 text-white rounded-full flex items-center justify-center font-bold">
                          {process.step}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800 mb-2">{process.title}</h3>
                          <p className="text-gray-600">{process.description}</p>
                        </div>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-amber-100 to-cream-200 rounded-2xl p-8 h-96 flex items-center justify-center">
                  <Recycle className="w-48 h-48 text-amber-800/30" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-amber-800 rotate-45"></div>
              </div>
            </div>
          </AnimatedSection>

          {/* Impact Statistics */}
          <AnimatedSection animation="scale-in" delay={600}>
            <div className="bg-amber-800 text-white rounded-2xl p-12 text-center">
              <h2 className="font-playfair text-3xl font-bold mb-8">Our Impact</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { number: "100%", label: "Natural Materials Used" },
                  { number: "0%", label: "Waste to Landfill" },
                  { number: "50+", label: "Artisans Supported" }
                ].map((stat, index) => (
                  <div key={index}>
                    <div className="text-4xl font-bold mb-2">{stat.number}</div>
                    <div className="text-cream-100">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default Sustainability;
