import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Phone } from 'lucide-react';
import NavLinks from '../navigation/NavLinks.jsx';
import MobileMenu from '../navigation/MobileMenu.jsx';
import { CONTACT_DATA } from '../../data/contact.data.js';
import IconButton from '../ui/IconButton.jsx';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-teal-900 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6 text-sm">
            <a href={`tel:${CONTACT_DATA.phone}`} className="flex items-center gap-2 hover:text-teal-200 transition-colors">
              <Phone size={14} />
              <span>{CONTACT_DATA.displayPhone}</span>
            </a>
            <span className="hidden sm:inline text-teal-700">|</span>
            <span className="hidden sm:inline text-teal-100 text-sm">
              {CONTACT_DATA.address.city}, Tamil Nadu
            </span>
          </div>

          <div className="flex items-center gap-4">
            {/* Social Media Icons */}
            {CONTACT_DATA.socials.instagram && (
              <a
                href={CONTACT_DATA.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-200 transition-colors"
              >
                Instagram
              </a>
            )}
            {CONTACT_DATA.socials.youtube && (
              <a
                href={CONTACT_DATA.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-200 transition-colors"
              >
                YouTube
              </a>
            )}
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="/assets/icons/image.png"
                alt="RK Cleaning Experts Logo"
                className="h-10 w-auto object-contain"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900 leading-tight tracking-wide">
                  RK Cleaning
                </span>
                <span className="text-xs font-medium text-teal-700 uppercase tracking-widest">
                  Experts
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <NavLinks />
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-4">
              {/* WhatsApp CTA - Desktop */}
              <a
                href={CONTACT_DATA.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:block"
              >
                <IconButton
                  variant="primary"
                  className="bg-green-600 hover:bg-green-700 text-white shadow-lg shadow-green-200"
                >
                  Book Now
                </IconButton>
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Open menu"
              >
                <Menu size={24} className="text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
};

export default Header;
