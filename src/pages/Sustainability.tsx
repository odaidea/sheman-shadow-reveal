
import Navigation from '@/components/Navigation';
import LogoPattern from '@/components/LogoPattern';
import AnimatedSection from '@/components/AnimatedSection';

const Sustainability = () => {
  return (
    <div className="min-h-screen bg-cream-50 relative">
      <LogoPattern />
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
                    icon: "🌱"
                  },
                  {
                    title: "Zero Synthetic Chemicals",
                    description: "Our dyeing process uses only natural pigments derived from plants, minerals, and earth-based materials.",
                    icon: "🎨"
                  },
                  {
                    title: "Minimal Environmental Impact",
                    description: "Every step of our production is designed to minimize water usage, energy consumption, and waste generation.",
                    icon: "🌍"
                  },
                  {
                    title: "Community Support",
                    description: "We partner with local artisan communities, providing fair wages and preserving traditional craftsmanship.",
                    icon: "🤝"
                  }
                ].map((item, index) => (
                  <AnimatedSection key={index} delay={index * 150} className="p-6">
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h3 className="font-playfair text-xl font-semibold text-gray-800 mb-3">
                      {item.title}
                    </h3>
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
                  <img
                    src="/lovable-uploads/f9fa095c-3824-499a-87b9-c25c1e15d930.png"
                    alt="Sustainability"
                    className="w-48 h-48 object-contain opacity-30"
                  />
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
