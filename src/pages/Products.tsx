
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import LogoPattern from '@/components/LogoPattern';
import MouseThread from '@/components/MouseThread';
import AnimatedSection from '@/components/AnimatedSection';
import { Shirt, Palette, Scissors, Sparkles, Shield } from 'lucide-react';

const Products = () => {
  const products = [
    {
      title: "Traditional Dresses",
      description: "Handwoven with natural fibers and traditional patterns",
      features: ["100% Cotton", "Natural Dyes", "Custom Sizing"],
      icon: Shirt
    },
    {
      title: "Modern Essentials",
      description: "Contemporary designs with sustainable materials",
      features: ["Organic Materials", "Minimalist Design", "Versatile Styling"],
      icon: Sparkles
    },
    {
      title: "Accessories",
      description: "Handcrafted bags, scarves, and jewelry",
      features: ["Zero Waste", "Traditional Techniques", "Unique Pieces"],
      icon: Palette
    }
  ];

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
                Wear What <span className="italic text-amber-800">Matters</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our vibrant, customizable designs—all naturally dyed and handmade. Whether it's a statement piece or an everyday essential, our collection is crafted to reflect beauty, responsibility, and individuality.
              </p>
            </div>
          </AnimatedSection>

          {/* Full-width Colorful Fabrics Image */}
          <section className="w-full h-96 relative overflow-hidden mb-16 -mx-6">
            <AnimatedSection animation="fade-in-up">
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07"
                  alt="Vibrant colorful fabrics and natural dyes showcasing our product range"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-black/50"></div>
              </div>
              
              <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
                <div className="max-w-4xl">
                  <h2 className="font-playfair text-4xl lg:text-6xl font-bold text-white mb-6">
                    Vibrant <span className="italic text-amber-200">Collections</span>
                  </h2>
                  <p className="text-white/90 text-xl leading-relaxed">
                    From bold traditional patterns to subtle modern designs, each piece
                    celebrates the beauty of natural materials and ethical craftsmanship.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </section>

          {/* Product Highlights */}
          <AnimatedSection animation="fade-in-up" delay={200}>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl mb-16">
              <h2 className="font-playfair text-3xl font-semibold text-center text-gray-800 mb-8">
                What Makes Our Products Special
              </h2>
              
              <div className="grid md:grid-cols-5 gap-6 text-center">
                {[
                  { text: "100% natural fibers", icon: Shield },
                  { text: "Eco-conscious natural dyeing", icon: Palette },
                  { text: "Zero-waste production process", icon: Scissors },
                  { text: "Custom-made options", icon: Shirt },
                  { text: "Rooted in Ethiopian tradition", icon: Sparkles }
                ].map((highlight, index) => (
                  <AnimatedSection key={index} delay={index * 100} className="p-4">
                    <div className="w-12 h-12 bg-amber-800 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <highlight.icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-gray-700 font-medium">{highlight.text}</p>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Product Categories */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {products.map((product, index) => (
              <AnimatedSection key={index} delay={index * 200} animation="fade-in-up">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                  <div className="h-64 bg-gradient-to-br from-amber-100 to-cream-200 flex items-center justify-center">
                    <product.icon className="w-24 h-24 text-amber-800/50" />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-playfair text-2xl font-semibold text-gray-800 mb-3">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      {product.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-amber-800 rotate-45"></div>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button className="w-full bg-amber-800 hover:bg-amber-900 text-white">
                      View Collection
                    </Button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Call to Action */}
          <AnimatedSection animation="scale-in" delay={600}>
            <div className="text-center bg-amber-800 text-white rounded-2xl p-12">
              <h2 className="font-playfair text-3xl font-bold mb-4">
                Ready to Create Something Unique?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Contact us for custom designs and personalized consultations
              </p>
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-amber-800 px-8 py-3">
                Start Your Custom Order
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default Products;
