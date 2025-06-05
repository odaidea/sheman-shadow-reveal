
import Navigation from '@/components/Navigation';
import LogoPattern from '@/components/LogoPattern';
import MouseThread from '@/components/MouseThread';

const Home = () => {
  return (
    <div className="min-h-screen bg-cream-50 relative">
      <LogoPattern />
      <MouseThread />
      <Navigation />
      
      <main className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <section className="text-center mb-16 opacity-0 translate-y-8 animate-fade-in-up">
            <h1 className="font-playfair text-6xl lg:text-7xl font-bold text-gray-800 mb-6">
              Woven with <span className="italic text-amber-800">Purpose</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              SHeMan Design creates vibrant, sustainable clothing rooted in Ethiopian heritage.
              Every piece tells a story of tradition, craftsmanship, and ethical fashion.
            </p>
            <button className="bg-amber-800 hover:bg-amber-900 text-white px-8 py-3 rounded-md transition-colors inline-flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Discover Our Story
            </button>
          </section>

          {/* Full-width Fabric Preparation Image */}
          <section className="w-full h-96 relative overflow-hidden mb-16 -mx-6">
            <div className="opacity-0 translate-y-8 animate-fade-in-up" style={{animationDelay: '200ms'}}>
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13"
                  alt="Traditional fabric preparation process showcasing natural materials and sustainable methods"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-black/50"></div>
              </div>
              
              <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
                <div className="max-w-4xl">
                  <h2 className="font-playfair text-4xl lg:text-6xl font-bold text-white mb-6">
                    Crafted by <span className="italic text-amber-200">Nature</span>
                  </h2>
                  <p className="text-white/90 text-xl leading-relaxed">
                    From organic cotton to natural dyes, every step of our process
                    honors the earth and celebrates sustainable craftsmanship.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Features Grid */}
          <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center opacity-0 translate-y-8 animate-fade-in-up" style={{animationDelay: '400ms'}}>
              <div className="w-16 h-16 bg-amber-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="font-playfair text-xl font-semibold text-gray-800 mb-2">Naturally Sourced</h3>
              <p className="text-gray-600">100% organic materials sourced responsibly from nature</p>
            </div>

            <div className="text-center opacity-0 translate-y-8 animate-fade-in-up" style={{animationDelay: '500ms'}}>
              <div className="w-16 h-16 bg-amber-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="font-playfair text-xl font-semibold text-gray-800 mb-2">Zero Waste</h3>
              <p className="text-gray-600">Circular production process that minimizes environmental impact</p>
            </div>

            <div className="text-center opacity-0 translate-y-8 animate-fade-in-up" style={{animationDelay: '600ms'}}>
              <div className="w-16 h-16 bg-amber-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                </svg>
              </div>
              <h3 className="font-playfair text-xl font-semibold text-gray-800 mb-2">Handcrafted</h3>
              <p className="text-gray-600">Traditional techniques passed down through generations</p>
            </div>

            <div className="text-center opacity-0 translate-y-8 animate-fade-in-up" style={{animationDelay: '700ms'}}>
              <div className="w-16 h-16 bg-amber-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-playfair text-xl font-semibold text-gray-800 mb-2">Ethiopian Heritage</h3>
              <p className="text-gray-600">Celebrating rich cultural traditions in every design</p>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center bg-amber-800 text-white rounded-2xl p-12 opacity-0 scale-90 animate-scale-in" style={{animationDelay: '800ms'}}>
            <h2 className="font-playfair text-3xl font-bold mb-4">
              Ready to Experience Sustainable Fashion?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join us in creating a more sustainable future, one beautiful piece at a time
            </p>
            <button className="bg-white text-amber-800 hover:bg-gray-100 px-8 py-3 rounded-md transition-colors font-medium">
              Shop Our Collection
            </button>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Home;
