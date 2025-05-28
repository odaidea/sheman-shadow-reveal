
import Navigation from '@/components/Navigation';
import LogoPattern from '@/components/LogoPattern';
import AnimatedSection from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';

const Gallery = () => {
  // Placeholder for gallery images - in a real app, these would be actual product photos
  const galleryItems = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: `Design ${i + 1}`,
    category: i % 3 === 0 ? 'Traditional' : i % 3 === 1 ? 'Modern' : 'Accessories'
  }));

  return (
    <div className="min-h-screen bg-cream-50 relative">
      <LogoPattern />
      <Navigation />
      
      <div className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h1 className="font-playfair text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
                Our World in <span className="italic text-amber-800">Color</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
                Browse our latest collection featuring vibrant tones and organic textures—all captured through high-quality imagery that tells our story.
              </p>
              <Button className="bg-amber-800 hover:bg-amber-900 text-white px-8 py-3">
                Explore the Lookbook
              </Button>
            </div>
          </AnimatedSection>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryItems.map((item, index) => (
              <AnimatedSection 
                key={item.id} 
                delay={index * 100} 
                animation="fade-in-up"
                className="group cursor-pointer"
              >
                <div className="relative bg-white/90 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  {/* Image placeholder with logo pattern */}
                  <div className="aspect-square bg-gradient-to-br from-amber-50 to-cream-200 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img
                        src="/lovable-uploads/web 1.jpeg"
                        alt=""
                        className="w-16 h-16 object-contain opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                      />
                    </div>
                    
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-amber-800/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-white text-center">
                        <h3 className="font-playfair text-lg font-semibold mb-1">{item.title}</h3>
                        <p className="text-cream-100 text-sm">{item.category}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Item info */}
                  <div className="p-4">
                    <h3 className="font-playfair text-lg font-semibold text-gray-800 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{item.category}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Featured Collection */}
          <AnimatedSection animation="fade-in-up" delay={800} className="mt-20">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-12 text-center shadow-xl">
              <h2 className="font-playfair text-4xl font-bold text-gray-800 mb-6">
                Featured Collection: Heritage Meets Modern
              </h2>
              <p className="text-gray-600 text-lg mb-8 max-w-3xl mx-auto">
                Our latest collection showcases the perfect blend of traditional Ethiopian patterns with contemporary silhouettes. Each piece tells a story of cultural heritage while embracing modern sustainability practices.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                {['Spring Collection', 'Summer Essentials', 'Custom Pieces'].map((collection, index) => (
                  <AnimatedSection key={index} delay={index * 200}>
                    <div className="bg-gradient-to-br from-amber-100 to-cream-200 rounded-xl p-8 h-64 flex items-center justify-center relative group cursor-pointer hover:shadow-lg transition-all duration-300">
                      <img
                        src="/lovable-uploads/f9fa095c-3824-499a-87b9-c25c1e15d930.png"
                        alt=""
                        className="w-24 h-24 object-contain opacity-30 group-hover:opacity-50 transition-opacity duration-300"
                      />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="font-playfair text-xl font-semibold text-gray-800">
                          {collection}
                        </h3>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
