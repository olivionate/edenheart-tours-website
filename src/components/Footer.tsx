import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import footerLogo from '@/assets/edenheart-footer-logo.png';

const Footer = () => {
  const navigate = useNavigate();
  
  const quickLinks = [
    { name: 'Safari Tours', href: '/services/safari-tours' },
    { name: 'Beach Holidays', href: '/services/beach-holidays' },
    { name: 'Luxury Packages', href: '/services/luxury-packages' },
    { name: 'Cultural Tours', href: '/services/cultural-tours' },
    { name: 'Day Trips', href: '/services/day-trips' },
    { name: 'Group Tours', href: '/services/group-tours' }
  ];

  const destinations = [
    { name: 'Maasai Mara', package: 'maasai-mara-great-migration' },
    { name: 'Diani Beach', package: 'diani-beach-paradise' },
    { name: 'Amboseli', package: 'amboseli-elephant-safari' },
    { name: 'Tsavo East & West', package: 'tsavo-east---west-safari' },
    { name: 'Lake Nakuru', package: 'lake-nakuru-flamingo-safari' },
    { name: 'Samburu', package: 'samburu-adventure' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <img 
                src={footerLogo} 
                alt="Edenheart Tours & Travel" 
                className="h-12 sm:h-14 md:h-16 w-auto mb-4"
              />
              <p className="text-primary-foreground/80 leading-relaxed text-sm">
                Your trusted partner for unforgettable Kenya adventures. From wildlife safaris 
                to pristine beaches, we create memories that last a lifetime.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="h-4 w-4 text-accent" />
                <span>0721658788</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="h-4 w-4 text-accent" />
                <span>info@edenheart.co.ke</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="h-4 w-4 text-accent" />
                <span>2nd Flr, Delta Hse, Nairobi CBD</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => navigate(link.href)}
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm cursor-pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Destinations</h3>
            <ul className="space-y-3">
              {destinations.map((destination, index) => (
                <li key={index}>
                  <button 
                    onClick={() => {
                      navigate('/services/safari-tours');
                      setTimeout(() => {
                        const packageElement = document.getElementById(destination.package);
                        if (packageElement) {
                          packageElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        }
                      }, 100);
                    }}
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm cursor-pointer"
                  >
                    {destination.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-primary-foreground/80 text-sm">
              © 2024 Edenheart Tours & Travel. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <button 
                onClick={() => navigate('/privacy-policy')}
                className="text-primary-foreground/80 hover:text-accent transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => navigate('/terms-of-service')}
                className="text-primary-foreground/80 hover:text-accent transition-colors cursor-pointer"
              >
                Terms of Service
              </button>
              <button 
                onClick={() => navigate('/cookie-policy')}
                className="text-primary-foreground/80 hover:text-accent transition-colors cursor-pointer"
              >
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;