import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import logo from '@/assets/edenheart-logo.png';

const Header = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
  ];


  const serviceItems = [
    { name: 'Safari Tours & Expeditions', href: '/services/safari-tours' },
    { name: 'Beach Holidays', href: '/services/beach-holidays' },
    { name: 'Luxury Packages', href: '/services/luxury-packages' },
    { name: 'Cultural Tours', href: '/services/cultural-tours' },
    { name: 'Day Trips', href: '/services/day-trips' },
    { name: 'Group Tours', href: '/services/group-tours' },
    { name: 'Flight Ticketing', href: '/services/flight-ticketing' },
    { name: 'Hotel Reservations', href: '/services/hotel-reservations' },
    { name: 'Conference Facilities', href: '/services/conference-facilities' },
    { name: 'Corporate Group Discounts', href: '/services/corporate-groups' },
    { name: 'Airport & Hotel Transfers', href: '/services/transfers' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-md shadow-elegant' : 'bg-transparent'
    }`}>
      {/* Main navigation */}
      <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={logo} 
              alt="Edenheart Tours & Travel" 
              className="h-12 sm:h-14 md:h-16 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => navigate(item.href)}
                className="text-foreground hover:text-accent transition-colors duration-200 font-medium cursor-pointer"
              >
                {item.name}
              </button>
            ))}
            
            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-foreground hover:text-accent transition-colors duration-200 font-medium focus:outline-none">
                <span>Our Services</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64 bg-background border border-border shadow-elegant">
                {serviceItems.map((service) => (
                  <DropdownMenuItem key={service.name} asChild>
                    <a
                      href={service.href}
                      className="flex w-full px-4 py-3 text-sm text-foreground hover:text-accent hover:bg-muted transition-colors cursor-pointer"
                    >
                      {service.name}
                    </a>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuItem asChild>
                  <a
                    href="#services"
                    className="flex w-full px-4 py-3 text-sm text-accent font-medium hover:bg-muted transition-colors cursor-pointer border-t border-border mt-1"
                  >
                    View All Services
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <button
              onClick={() => navigate('/services/safari-tours')}
              className="text-foreground hover:text-accent transition-colors duration-200 font-medium cursor-pointer"
            >
              Safari Tours
            </button>

            <button
              onClick={() => navigate('/contact')}
              className="text-foreground hover:text-accent transition-colors duration-200 font-medium cursor-pointer"
            >
              Contact
            </button>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              variant="default" 
              className="bg-primary hover:bg-primary/90 hover:shadow-glow min-h-[44px]"
              onClick={() => navigate('/contact')}
            >
              Book Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-2 bg-card rounded-lg shadow-elegant animate-slide-up">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  navigate(item.href);
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left py-3 px-4 text-foreground hover:text-accent hover:bg-muted transition-colors duration-200 min-h-[48px]"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => {
                navigate('/services/safari-tours');
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left py-3 px-4 text-foreground hover:text-accent hover:bg-muted transition-colors duration-200 min-h-[48px]"
            >
              Safari Tours
            </button>
            <button
              onClick={() => {
                navigate('/contact');
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left py-3 px-4 text-foreground hover:text-accent hover:bg-muted transition-colors duration-200 min-h-[48px]"
            >
              Contact
            </button>
            <div className="px-4 pt-2 pb-2">
              <Button 
                variant="default" 
                className="w-full bg-primary hover:bg-primary/90 min-h-[48px]"
                onClick={() => navigate('/contact')}
              >
                Book Now
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;