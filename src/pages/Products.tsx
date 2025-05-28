
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import LogoPattern from '@/components/LogoPattern';
import AnimatedSection from '@/components/AnimatedSection';

const Products = () => {
  const products = [
    {
      title: "Traditional Dresses",
      description: "Handwoven with natural fibers and traditional patterns",
      features: ["100% Cotton", "Natural Dyes", "Custom Sizing"]
    },
    {
      title: "Modern Essentials",
      description: "Contemporary designs with sustainable materials",
      features: ["Organic Materials", "Minimalist Design", "Versatile Styling"]
    },
    {
      title: "Accessories",
      description: "Handcrafted bags, scarves, and jewelry",
      features: ["Zero Waste", "Traditional Techniques", "Unique Pieces"]
    }
  ];

  return (
    <div className="min-h-screen bg-cream-50 relative">
      <LogoPattern />
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

          {/* Product Highlights */}
          <AnimatedSection animation="fade-in-up" delay={200}>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl mb-16">
              <h2 className="font-playfair text-3xl font-semibold text-center text-gray-800 mb-8">
                What Makes Our Products Special
              </h2>
              
              <div className="grid md:grid-cols-5 gap-6 text-center">
                {[
                  "100% natural fibers",
                  "Eco-conscious natural dyeing",
                  "Zero-waste production process",
                  "Custom-made options",
                  "Rooted in Ethiopian tradition"
                ].map((highlight, index) => (
                  <AnimatedSection key={index} delay={index * 100} className="p-4">
                    <div className="w-12 h-12 bg-amber-800 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <div className="w-6 h-6 border-2 border-white rotate-45"></div>
                    </div>
                    <p className="text-gray-700 font-medium">{highlight}</p>
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
                    <div className="text-6xl text-amber-800/30">
                      <img
                        src="/lovable-uploads/web 1.jpg"
                        alt=""
                        className="w-24 h-24 object-contain opacity-50"
                      />
                    </div>
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
