import React from 'react';
import { ArrowLeft, Plane, Clock, MapPin, Star, CheckCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import flightsDetailImage from '@/assets/flights-detail.jpg';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const FlightTicketing = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "Domestic Flights",
      description: "Connect to all major Kenyan destinations",
      features: ["Nairobi to Mombasa", "Domestic safari airstrips", "Same-day bookings available"]
    },
    {
      title: "Regional Flights", 
      description: "East African regional connections",
      features: ["Kenya to Tanzania/Uganda", "Inter-regional routes", "Group booking discounts"]
    },
    {
      title: "International Travel",
      description: "Worldwide destination coverage",
      features: ["Long-haul connections", "Multi-city itineraries", "Visa assistance available"]
    }
  ];

  const airlines = [
    "Kenya Airways", "Ethiopian Airlines", "Qatar Airways", "Emirates", 
    "KLM", "Turkish Airlines", "Safarilink", "Jambojet"
  ];

  const features = [
    "2-3 optional bookings provided for informed decision making",
    "Direct and cost-effective flight schedules",
    "Special fares and discounts for frequent travelers",
    "Cost-saving routing recommendations",
    "24/7 booking support and assistance",
    "Group booking discounts for 10+ passengers",
    "Flexible booking policies and changes",
    "Travel insurance options available"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative h-[60vh] overflow-hidden">
          <img
            src={flightsDetailImage}
            alt="Flight Ticketing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-4">
              <Button
                variant="ghost"
                onClick={() => navigate('/')}
                className="mb-4 text-white hover:bg-white/20"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Flight Ticketing Services
              </h1>
              <p className="text-xl leading-relaxed">
                Your gateway to seamless travel with competitive rates and expert routing
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {/* Service Description */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Professional Flight Booking Services
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We provide the most direct and cost-effective flight schedules and routings for domestic, 
                  regional and international travel. Our experienced team works with all major airlines to 
                  secure the best possible rates and convenient connections for our clients.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Whether you're planning a business trip, family vacation, or connecting to your safari 
                  adventure, we handle all aspects of your flight booking with professionalism and attention 
                  to detail. Our relationships with airlines enable us to offer competitive rates and 
                  flexible booking options.
                </p>

                {/* Features */}
                <div className="space-y-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Info Card */}
              <div>
                <Card className="p-6 shadow-brand">
                  <CardContent className="p-0">
                    <h3 className="text-2xl font-bold text-foreground mb-6">Booking Information</h3>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center space-x-3">
                        <Plane className="h-5 w-5 text-accent" />
                        <span className="text-muted-foreground">All Major Airlines</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="h-5 w-5 text-accent" />
                        <span className="text-muted-foreground">24/7 Support Available</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MapPin className="h-5 w-5 text-accent" />
                        <span className="text-muted-foreground">Worldwide Destinations</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Star className="h-5 w-5 text-accent" />
                        <span className="text-muted-foreground">Best Price Guarantee</span>
                      </div>
                    </div>

                    <Button 
                      className="w-full mb-4"
                      onClick={() => navigate('/#contact')}
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      Get Flight Quote
                    </Button>
                    
                    <Badge variant="secondary" className="w-full justify-center py-2">
                      Instant quotes available
                    </Badge>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Services Grid */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
                Flight Services
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <Card key={index} className="p-6 hover-lift shadow-brand">
                    <CardContent className="p-0">
                      <h4 className="text-xl font-bold text-foreground mb-3">{service.title}</h4>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      <div className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-accent" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Partner Airlines */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
                Partner Airlines
              </h3>
              <div className="bg-muted/30 rounded-2xl p-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  {airlines.map((airline, index) => (
                    <div key={index} className="p-4 bg-background rounded-lg shadow-sm">
                      <span className="text-foreground font-medium">{airline}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-muted/30 rounded-2xl p-8">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Ready to Book Your Flight?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Let our experienced team find you the best flight options at competitive rates. 
                We'll provide multiple options so you can make an informed decision.
              </p>
              <Button 
                size="lg"
                onClick={() => navigate('/#contact')}
              >
                Start Your Flight Search
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FlightTicketing;