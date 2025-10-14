import React from 'react';
import { 
  Binoculars, 
  Plane, 
  Users, 
  Hotel, 
  Presentation, 
  Car,
  MapPin,
  Clock,
  Shield,
  CheckCircle,
  Star,
  Globe
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import safariImage from '@/assets/service-safari.jpg';
import flightsImage from '@/assets/service-flights.jpg';
import corporateImage from '@/assets/service-corporate.jpg';
import hotelsImage from '@/assets/service-hotels.jpg';
import conferenceImage from '@/assets/service-conference.jpg';
import transfersImage from '@/assets/service-transfers.jpg';

const Services = () => {
  const services = [
    {
      icon: Binoculars,
      title: "Safaris & Expeditions",
      description: "Our Tours Department organizes reasonable and unique Adventure tours and Safaris with tailor-made itineraries for luxury and adventure travel.",
      image: safariImage,
      features: [
        "Bush/nature walk adventures",
        "Hot air balloon adventures", 
        "Great Migration tours",
        "Horse riding & Game Viewing",
        "Beach Holidays",
        "Archaeological site visits",
        "Culture safaris & Fishing packages",
        "Flying safaris & Roof Tent Camping"
      ],
      highlight: "All vehicles fitted with VHF radios and 24-hour support"
    },
    {
      icon: Plane,
      title: "Flight Ticketing",
      description: "We provide the most direct and cost-effective flight schedules and routings for domestic, regional and international travel.",
      image: flightsImage,
      features: [
        "Domestic flight bookings",
        "Regional & international flights",
        "Special fares for clients",
        "Cost-saving measures",
        "Multiple routing options"
      ],
      highlight: "2-3 optional bookings provided for informed decisions"
    },
    {
      icon: Users,
      title: "Corporate Group Discounts",
      description: "Special rates and volume discounts for large groups traveling together, with preferred airlines and additional benefits.",
      image: corporateImage,
      features: [
        "Group rates for 10+ passengers",
        "Negotiated special airline rates",
        "Volume discounts available",
        "Corporate travel packages",
        "Business incentive travel"
      ],
      highlight: "Special rates based on seat availability"
    },
    {
      icon: Hotel,
      title: "Hotel Reservations",
      description: "Amicable business relationships with hotel chains in Kenya, East Africa and worldwide, offering competitive year-round rates.",
      image: hotelsImage,
      features: [
        "Contract rates with leading hotels",
        "Competitive offers year-round",
        "Local & international bookings",
        "Group accommodation rates",
        "Luxury to budget options"
      ],
      highlight: "Negotiated rates with all major hotel groups"
    },
    {
      icon: Presentation,
      title: "Conference Facilities",
      description: "We arrange conferences for large and small groups within and outside Nairobi with reputable hotels and lodges.",
      image: conferenceImage,
      features: [
        "Conference venue arrangements",
        "Equipment provision",
        "Catering services",
        "Audio-visual setup",
        "Custom venue selection"
      ],
      highlight: "Full-service conference planning and management"
    },
    {
      icon: Car,
      title: "Airport & Hotel Transfers",
      description: "Comprehensive vehicle services including airport transfers, car hire, and transportation solutions with competitive rates.",
      image: transfersImage,
      features: [
        "Airport & hotel transfers",
        "Self-drive & chauffeur options",
        "Luxury cars to safari vehicles",
        "Cross-border rentals",
        "24/7 vehicle tracking"
      ],
      highlight: "All vehicles GPS tracked and comprehensively insured"
    }
  ];

  const workingPrinciples = [
    {
      icon: Shield,
      title: "Dependable & Reliable",
      description: "Our services are dependable, reliable and efficient - earning us reputable recommendations worldwide."
    },
    {
      icon: Star,
      title: "Competitive Pricing",
      description: "Our services are competitively priced to give the best satisfaction for your money, guaranteeing optimum tour experiences."
    },
    {
      icon: Globe,
      title: "Local Expertise",
      description: "Vast local knowledge and experience, offering excellent products - all these are in our DNA!"
    },
    {
      icon: CheckCircle,
      title: "Personalized Service",
      description: "Custom designing versatile itineraries for individual travellers and groups with specific needs and interests."
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Our 
            <span className="text-accent"> Services</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
            Comprehensive travel solutions designed to meet all your East African adventure 
            and business travel needs with unmatched expertise and service.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 md:mb-20">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="p-4 sm:p-6 hover-lift shadow-brand group h-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0 h-full flex flex-col">
                {/* Service Image */}
                <div className="relative h-40 sm:h-48 overflow-hidden rounded-t-lg mb-4 sm:mb-6">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>

                {/* Service Icon & Title */}
                <div className="px-4 sm:px-6">
                  <div className="bg-gradient-sunset rounded-full w-12 sm:w-16 h-12 sm:h-16 flex items-center justify-center mb-3 sm:mb-4 group-hover:shadow-glow transition-all">
                    <service.icon className="h-6 sm:h-8 w-6 sm:w-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3 sm:mb-4">
                    {service.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="flex-grow mb-4 sm:mb-6 px-4 sm:px-6">
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Highlight */}
                <div className="bg-muted/50 rounded-lg p-2 sm:p-3 mb-3 sm:mb-4 mx-4 sm:mx-6">
                  <Badge variant="secondary" className="mb-1 sm:mb-2 text-xs">
                    Key Advantage
                  </Badge>
                  <p className="text-xs sm:text-sm text-foreground font-medium">
                    {service.highlight}
                  </p>
                </div>

                {/* CTA */}
                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <Button 
                    variant="outline" 
                    className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                    onClick={() => {
                      const serviceRoutes = {
                        "Safaris & Expeditions": "/services/safari-tours",
                        "Flight Ticketing": "/services/flight-ticketing", 
                        "Corporate Group Discounts": "/services/corporate-groups",
                        "Hotel Reservations": "/services/hotel-reservations",
                        "Conference Facilities": "/services/conference-facilities",
                        "Airport & Hotel Transfers": "/services/transfers"
                      };
                      const route = serviceRoutes[service.title as keyof typeof serviceRoutes];
                      if (route) {
                        window.location.href = route;
                      }
                    }}
                  >
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* How We Work Section */}
        <div className="bg-muted/30 rounded-2xl p-6 sm:p-8 lg:p-12">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 sm:mb-4">
              How We Work
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed px-2">
              The foundation of our company is built on a reputation for excellence in providing 
              unwavering high quality customer care through extensive knowledge, personalized 
              service and competitive rates.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
            {workingPrinciples.map((principle, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-sunset rounded-full w-14 sm:w-16 h-14 sm:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-glow">
                  <principle.icon className="h-7 sm:h-8 w-7 sm:w-8 text-white" />
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2 sm:mb-3">
                  {principle.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed px-2">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-muted-foreground leading-relaxed max-w-4xl mx-auto mb-6">
              Our forte is custom designing versatile itineraries for individual travellers as well as 
              groups with specific needs and interests. We take care of all logistics like accommodation, 
              transfers, air charters, touring and all safari needs - tendered at the best possible price.
            </p>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              When they leave, they become friends and NOT just tourists
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;