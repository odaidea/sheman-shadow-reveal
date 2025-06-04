
import Navigation from '@/components/Navigation';
import LogoPattern from '@/components/LogoPattern';
import MouseThread from '@/components/MouseThread';
import AnimatedSection from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Camera, Image, Palette, Star } from 'lucide-react';

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
      <MouseThread />
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
                <Camera className="w-5 h-5 mr-2" />
                Explore the Lookbook
              </Button>
            </div>
          </AnimatedSection>

          {/* Full-width Wildlife and Nature Image */}
          <section className="w-full h-96 relative overflow-hidden mb-16 -mx-6">
            <AnimatedSection animation="fade-in-up">
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1472396961693-142e6e269027"
                  alt="Majestic wildlife in natural habitat representing the beauty we capture in our designs"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-black/50"></div>
              </div>
              
              <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
                <div className="max-w-4xl">
                  <h2 className="font-playfair text-4xl lg:text-6xl font-bold text-white mb-6">
                    Capturing <span className="italic text-amber-200">Beauty</span>
                  </h2>
                  <p className="text-white/90 text-xl leading-relaxed">
                    Every photograph tells a story of craftsmanship, tradition, and the natural
                    beauty that inspires our sustainable fashion journey.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </section>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
            {galleryItems.map((item, index) => (
              <AnimatedSection 
                key={item.id} 
                delay={index * 100} 
                animation="fade-in-up"
                className="group cursor-pointer"
              >
                <div className="relative bg-white/90 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  {/* Image placeholder with appropriate icons */}
                  <div className="aspect-square bg-gradient-to-br from-amber-50 to-cream-200 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      {item.category === 'Traditional' && <Palette className="w-16 h-16 text-amber-800/20 group-hover:text-amber-800/40 transition-colors duration-300" />}
                      {item.category === 'Modern' && <Star className="w-16 h-16 text-amber-800/20 group-hover:text-amber-800/40 transition-colors duration-300" />}
                      {item.category === 'Accessories' && <Image className="w-16 h-16 text-amber-800/20 group-hover:text-amber-800/40 transition-colors duration-300" />}
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
          <AnimatedSection animation="fade-in-up" delay={800}>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-12 text-center shadow-xl">
              <h2 className="font-playfair text-4xl font-bold text-gray-800 mb-6">
                Featured Collection: Heritage Meets Modern
              </h2>
              <p className="text-gray-600 text-lg mb-8 max-w-3xl mx-auto">
                Our latest collection showcases the perfect blend of traditional Ethiopian patterns with contemporary silhouettes. Each piece tells a story of cultural heritage while embracing modern sustainability practices.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                {[
                  { title: 'Spring Collection', icon: Palette },
                  { title: 'Summer Essentials', icon: Star },
                  { title: 'Custom Pieces', icon: Image }
                ].map((collection, index) => (
                  <AnimatedSection key={index} delay={index * 200}>
                    <div className="bg-gradient-to-br from-amber-100 to-cream-200 rounded-xl p-8 h-64 flex flex-col items-center justify-center relative group cursor-pointer hover:shadow-lg transition-all duration-300">
                      <collection.icon className="w-24 h-24 text-amber-800/30 group-hover:text-amber-800/50 transition-colors duration-300 mb-4" />
                      <h3 className="font-playfair text-xl font-semibold text-gray-800">
                        {collection.title}
                      </h3>
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
