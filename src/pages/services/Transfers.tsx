import React from 'react';
import { ArrowLeft, Car, MapPin, Shield, Clock, CheckCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import transfersDetailImage from '@/assets/transfers-detail.jpg';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Transfers = () => {
  const navigate = useNavigate();

  const vehicleTypes = [
    {
      title: "Luxury Sedans",
      description: "Executive transportation for business travelers",
      features: ["Mercedes, BMW, Audi", "Professional chauffeurs", "Air conditioning", "WiFi available"]
    },
    {
      title: "Safari Vehicles",
      description: "4WD vehicles perfect for wildlife adventures",
      features: ["Toyota Land Cruiser", "Pop-up roofs", "Game viewing", "VHF radio equipped"]
    },
    {
      title: "Minibuses & Coaches",
      description: "Group transportation solutions",
      features: ["14-50 passenger capacity", "Luggage compartments", "Tour guide space", "Entertainment systems"]
    }
  ];

  const services = [
    "Airport to hotel transfers with meet & greet service",
    "Hotel to airport departures with luggage assistance", 
    "Self-drive car rental with comprehensive insurance",
    "Chauffeur-driven vehicles with professional drivers",
    "Cross-border rentals to Tanzania and Uganda",
    "24/7 GPS tracking and vehicle monitoring",
    "Emergency roadside assistance coverage",
    "Flexible hourly, daily, and weekly rental rates"
  ];

  const transferRoutes = [
    {
      route: "JKIA ↔ Nairobi Hotels",
      duration: "45-60 minutes",
      vehicles: "Sedan, SUV, Minibus"
    },
    {
      route: "Wilson Airport ↔ City Center", 
      duration: "20-30 minutes",
      vehicles: "Sedan, SUV"
    },
    {
      route: "Nairobi ↔ Maasai Mara",
      duration: "5-6 hours",
      vehicles: "4WD Safari Vehicle"
    },
    {
      route: "City Hotels ↔ Conference Venues",
      duration: "Variable",
      vehicles: "Executive Sedan"
    }
  ];

  const features = [
    "All vehicles comprehensively insured and GPS tracked",
    "Professional drivers with excellent safety records",
    "Meet and greet service at airports",
    "Competitive rates with transparent pricing",
    "24/7 customer support and assistance",
    "Flexible booking and cancellation policies",
    "Special rates for long-term rentals",
    "Vehicle maintenance and safety inspections"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative h-[60vh] overflow-hidden">
          <img
            src={transfersDetailImage}
            alt="Airport & Hotel Transfers"
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
                Airport & Hotel Transfers
              </h1>
              <p className="text-xl leading-relaxed">
                Reliable transportation services with professional drivers and modern fleet
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
                  Professional Transfer Services
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our comprehensive vehicle services include airport transfers, car hire, and 
                  transportation solutions with competitive rates. From luxury sedans for executive 
                  travel to 4WD safari vehicles for adventure tours, we have the right vehicle 
                  for every occasion and budget.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  All our vehicles are GPS tracked and comprehensively insured, driven by professional 
                  chauffeurs who prioritize your safety and comfort. Whether you need a one-way transfer 
                  or a full-day rental, we provide reliable service you can count on.
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
                    <h3 className="text-2xl font-bold text-foreground mb-6">Transfer Information</h3>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center space-x-3">
                        <Car className="h-5 w-5 text-accent" />
                        <span className="text-muted-foreground">Modern Fleet Available</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Shield className="h-5 w-5 text-accent" />
                        <span className="text-muted-foreground">Fully Insured & GPS Tracked</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="h-5 w-5 text-accent" />
                        <span className="text-muted-foreground">24/7 Service Available</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MapPin className="h-5 w-5 text-accent" />
                        <span className="text-muted-foreground">Local & Cross-Border</span>
                      </div>
                    </div>

                    <Button 
                      className="w-full mb-4"
                      onClick={() => navigate('/#contact')}
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      Book Transfer Now
                    </Button>
                    
                    <Badge variant="secondary" className="w-full justify-center py-2">
                      Meet & greet service included
                    </Badge>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Vehicle Types */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
                Our Vehicle Fleet
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {vehicleTypes.map((vehicle, index) => (
                  <Card key={index} className="p-6 hover-lift shadow-brand">
                    <CardContent className="p-0">
                      <h4 className="text-xl font-bold text-foreground mb-3">{vehicle.title}</h4>
                      <p className="text-muted-foreground mb-4">{vehicle.description}</p>
                      <div className="space-y-2">
                        {vehicle.features.map((feature, idx) => (
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

            {/* Popular Routes */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
                Popular Transfer Routes
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {transferRoutes.map((route, index) => (
                  <Card key={index} className="p-6 shadow-brand">
                    <CardContent className="p-0">
                      <h4 className="text-lg font-bold text-foreground mb-2">{route.route}</h4>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{route.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Car className="h-4 w-4" />
                          <span>{route.vehicles}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Services List */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
                Transfer Services
              </h3>
              <div className="bg-muted/30 rounded-2xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-muted/30 rounded-2xl p-8">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Need Reliable Transportation?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Book your transfer today and experience our professional service. From airport pickups 
                to safari adventures, we'll get you there safely and comfortably.
              </p>
              <Button 
                size="lg"
                onClick={() => navigate('/#contact')}
              >
                Book Your Transfer
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Transfers;