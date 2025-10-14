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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

          {/* Newsletter & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Stay Connected</h3>
            <div className="space-y-6">
              <div>
                <p className="text-primary-foreground/80 text-sm mb-4">
                  Subscribe to get travel tips and exclusive offers
                </p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-l-lg text-sm placeholder:text-white/60 focus:outline-none focus:border-accent"
                  />
                  <button className="px-4 py-2 bg-accent hover:bg-accent/90 rounded-r-lg transition-colors">
                    <Mail className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h4 className="font-medium mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors group"
                    >
                      <social.icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
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
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;