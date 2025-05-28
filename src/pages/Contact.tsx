
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Mail, Phone, MessageCircle } from 'lucide-react';
import Navigation from '@/components/Navigation';
import LogoPattern from '@/components/LogoPattern';
import AnimatedSection from '@/components/AnimatedSection';

const Contact = () => {
  return (
    <div className="min-h-screen bg-cream-50 relative">
      <LogoPattern />
      <Navigation />
      
      <div className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h1 className="font-playfair text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
                Let's <span className="italic text-amber-800">Connect</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Have a custom design in mind? Want to collaborate? We'd love to hear from you.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimatedSection animation="fade-in-left" delay={200}>
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                <h2 className="font-playfair text-3xl font-semibold text-gray-800 mb-8">
                  Send Us a Message
                </h2>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">First Name</label>
                      <Input 
                        placeholder="Your first name" 
                        className="bg-white/80 border-gray-300 focus:border-amber-800"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Last Name</label>
                      <Input 
                        placeholder="Your last name" 
                        className="bg-white/80 border-gray-300 focus:border-amber-800"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Email</label>
                    <Input 
                      type="email" 
                      placeholder="your@email.com" 
                      className="bg-white/80 border-gray-300 focus:border-amber-800"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Subject</label>
                    <Input 
                      placeholder="What's this about?" 
                      className="bg-white/80 border-gray-300 focus:border-amber-800"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Message</label>
                    <Textarea 
                      placeholder="Tell us about your project or question..." 
                      rows={6}
                      className="bg-white/80 border-gray-300 focus:border-amber-800 resize-none"
                    />
                  </div>
                  
                  <Button className="w-full bg-amber-800 hover:bg-amber-900 text-white py-3">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>
            </AnimatedSection>

            {/* Contact Information */}
            <AnimatedSection animation="fade-in-right" delay={400}>
              <div className="space-y-8">
                {/* Contact Details */}
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                  <h2 className="font-playfair text-3xl font-semibold text-gray-800 mb-8">
                    Get in Touch
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-amber-800 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-1">Location</h3>
                        <p className="text-gray-600">Addis Ababa, Ethiopia</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-amber-800 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                        <p className="text-gray-600">contact@shemane.co</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-amber-800 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                        <p className="text-gray-600">+251 XXX XXX XXX</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Custom Orders */}
                <div className="bg-amber-800 text-white rounded-2xl p-8">
                  <h3 className="font-playfair text-2xl font-bold mb-4">
                    Custom Orders
                  </h3>
                  <p className="text-cream-100 mb-6">
                    Interested in a custom piece? We love creating unique designs that reflect your personal style while honoring our sustainable practices.
                  </p>
                  <ul className="space-y-2 text-cream-100">
                    <li>• Personalized design consultation</li>
                    <li>• Custom sizing and fitting</li>
                    <li>• Choice of natural dyes and patterns</li>
                    <li>• Traditional craftsmanship guarantee</li>
                  </ul>
                </div>

                {/* Business Hours */}
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                  <h3 className="font-playfair text-xl font-semibold text-gray-800 mb-4">
                    Business Hours
                  </h3>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
