import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, ChevronDown, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header = () => {
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
    { name: 'Home', href: '#home' },
    { name: 'Safari Tours', href: '#safaris' },
    { name: 'About Us', href: '#about' },
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      detail: "0721658788",
      description: "Available 24/7 for emergencies"
    },
    {
      icon: Mail,
      title: "Email Us",
      detail: "info@edenheart.co.ke",
      description: "We respond within 2 hours"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      detail: "2nd Flr, Delta Hse, Nairobi CBD",
      description: "Monday - Friday, 8AM - 6PM"
    },
    {
      icon: Clock,
      title: "Working Hours",
      detail: "Mon - Fri: 8:00 AM - 6:00 PM",
      description: "Sat: 9:00 AM - 4:00 PM"
    }
  ];

  const serviceItems = [
    { name: 'Safari Tours & Expeditions', href: '/services/safari-tours' },
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
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/8acb9c1a-8bae-4222-9960-f32ff4fdb460.png" 
              alt="Edenheart Tours & Travel" 
              className="h-16 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-accent transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
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

            {/* Contact Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-foreground hover:text-accent transition-colors duration-200 font-medium focus:outline-none">
                <span>Contact</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-80 bg-background border border-border shadow-elegant">
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Get In Touch</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Ready to embark on your next adventure? Let's plan the perfect Kenyan experience together.
                  </p>
                  <div className="space-y-3">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="bg-gradient-sunset rounded-lg p-2">
                          <info.icon className="h-4 w-4 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-foreground text-sm">{info.title}</h4>
                          <p className="text-sm text-muted-foreground">{info.detail}</p>
                          <p className="text-xs text-accent font-medium">{info.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-border">
                    <a
                      href="#contact"
                      className="flex w-full justify-center py-2 px-4 text-sm bg-gradient-sunset text-white rounded-md hover:shadow-glow transition-all duration-200"
                    >
                      Contact Us Now
                    </a>
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="default" className="bg-gradient-sunset hover:shadow-glow">
              Book Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-card rounded-lg shadow-elegant animate-slide-up">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-3 px-4 text-foreground hover:text-accent hover:bg-muted transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="px-4 pt-4">
              <Button variant="default" className="w-full bg-gradient-sunset">
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