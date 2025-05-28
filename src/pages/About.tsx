
import Navigation from '@/components/Navigation';
import LogoPattern from '@/components/LogoPattern';
import AnimatedSection from '@/components/AnimatedSection';

const About = () => {
  return (
    <div className="min-h-screen bg-cream-50 relative">
      <LogoPattern />
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
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-amber-800 rotate-45 mt-2 flex-shrink-0"></div>
                    <span>Respect for traditional Ethiopian craftsmanship</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-amber-800 rotate-45 mt-2 flex-shrink-0"></div>
                    <span>Commitment to zero-waste production</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-amber-800 rotate-45 mt-2 flex-shrink-0"></div>
                    <span>Use of 100% natural, sustainable materials</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-amber-800 rotate-45 mt-2 flex-shrink-0"></div>
                    <span>Supporting local artisan communities</span>
                  </li>
                </ul>
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
