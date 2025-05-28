
import { useState } from 'react';
import { Menu, X, Search } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-cream-50/80 backdrop-blur-sm shadow-sm fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-amber-800 rounded-sm flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="font-playfair text-xl font-semibold text-gray-800">
              SHEMAN Design
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-amber-800 transition-colors font-medium">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-amber-800 transition-colors font-medium">
              About Us
            </a>
            <a href="#" className="text-gray-700 hover:text-amber-800 transition-colors font-medium">
              Portfolio
            </a>
            <a href="#" className="text-gray-700 hover:text-amber-800 transition-colors font-medium">
              Contact
            </a>
          </nav>

          {/* Search and Menu */}
          <div className="flex items-center space-x-4">
            <Search className="w-5 h-5 text-gray-600 hover:text-amber-800 cursor-pointer transition-colors" />
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-600" />
              ) : (
                <Menu className="w-6 h-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-cream-200">
            <div className="flex flex-col space-y-3 pt-4">
              <a href="#" className="text-gray-700 hover:text-amber-800 transition-colors font-medium">
                Home
              </a>
              <a href="#" className="text-gray-700 hover:text-amber-800 transition-colors font-medium">
                About Us
              </a>
              <a href="#" className="text-gray-700 hover:text-amber-800 transition-colors font-medium">
                Portfolio
              </a>
              <a href="#" className="text-gray-700 hover:text-amber-800 transition-colors font-medium">
                Contact
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
