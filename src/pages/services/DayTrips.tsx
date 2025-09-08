import React from 'react';
import { ArrowLeft, MapPin, Clock, Users, Star, CheckCircle, Phone, Calendar, Camera, Coffee } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import dayTripImage from '@/assets/service-safari.jpg';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const DayTrips = () => {
  const navigate = useNavigate();

  const dayTripPackages = [
    {
      name: "Nairobi National Park Half-Day",
      duration: "4-5 Hours",
      price: "From $65 per person",
      highlights: ["City Skyline Views", "Big Four Animals", "Ivory Burning Site"]
    },
    {
      name: "David Sheldrick Elephant Orphanage",
      duration: "3 Hours",
      price: "From $45 per person",
      highlights: ["Baby Elephant Feeding", "Conservation Stories", "Adoption Program"]
    },
    {
      name: "Giraffe Centre & Karen Blixen",
      duration: "Half Day",
      price: "From $55 per person",
      highlights: ["Feed Rothschild Giraffes", "Out of Africa Museum", "Karen Shopping"]
    },
    {
      name: "Lake Naivasha Day Safari",
      duration: "Full Day",
      price: "From $120 per person",
      highlights: ["Boat Safari", "Crescent Island Walk", "Hell's Gate Cycling"]
    },
    {
      name: "Kiambu Coffee Farm Tour",
      duration: "Half Day",
      price: "From $35 per person",
      highlights: ["Coffee Processing", "Farm-to-Cup Experience", "Tasting Session"]
    },
    {
      name: "Ngong Hills Hiking Adventure",
      duration: "Full Day",
      price: "From $75 per person",
      highlights: ["Scenic Hiking", "Panoramic Views", "Maasai Cultural Visit"]
    }
  ];

  const features = [
    "Professional day tour guides with extensive local knowledge",
    "Comfortable transport with air conditioning and Wi-Fi",
    "All entrance fees and activity costs included in packages",
    "Flexible departure times to suit your schedule",
    "Small group sizes for personalized experiences",
    "Photography assistance and prime viewing locations",
    "Local lunch options and refreshment stops included",
    "Easy pickup and drop-off from Nairobi hotels and airports"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative h-[60vh] overflow-hidden">
          <img
            src={dayTripImage}
            alt="Kenya Day Trips"
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
                Day Trips & Excursions
              </h1>
              <p className="text-xl leading-relaxed">
                Discover Kenya's highlights in a day with our carefully curated short excursions and city tours
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
                  Perfect Day Adventures
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our day trips and excursions are designed for travelers with limited time who want to 
                  experience Kenya's best attractions. Whether you're on a business trip, have a long 
                  layover, or simply want to explore Nairobi's surroundings, our day tours offer 
                  convenient and memorable experiences.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  From wildlife encounters just outside Nairobi to cultural experiences and scenic 
                  adventures, our half-day and full-day excursions showcase Kenya's diversity without 
                  requiring overnight stays. Perfect for first-time visitors or those seeking specific 
                  experiences close to the capital.
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
                    <h3 className="text-2xl font-bold text-foreground mb-6">Day Trip Information</h3>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center space-x-3">
                        <MapPin className="h-5 w-5 text-accent" />
                        <span className="text-muted-foreground">Nairobi & Central Kenya Region</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="h-5 w-5 text-accent" />
                        <span className="text-muted-foreground">3-10 Hours Duration</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Users className="h-5 w-5 text-accent" />
                        <span className="text-muted-foreground">Solo to Family Groups</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Star className="h-5 w-5 text-accent" />
                        <span className="text-muted-foreground">4.8/5 Guest Rating</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Calendar className="h-5 w-5 text-accent" />
                        <span className="text-muted-foreground">Daily Departures Available</span>
                      </div>
                    </div>

                    <Button 
                      className="w-full mb-4"
                      onClick={() => navigate('/contact')}
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      Book Your Day Trip
                    </Button>
                    
                    <Badge variant="secondary" className="w-full justify-center py-2">
                      Same-day booking available
                    </Badge>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Day Trip Packages */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
                Popular Day Trip Experiences
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {dayTripPackages.map((pkg, index) => (
                  <Card key={index} className="p-6 hover-lift shadow-brand group">
                    <CardContent className="p-0">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-xl font-bold text-foreground">{pkg.name}</h4>
                        <Camera className="h-5 w-5 text-accent" />
                      </div>
                      <div className="flex items-center space-x-2 text-muted-foreground mb-3">
                        <Clock className="h-4 w-4" />
                        <span className="text-sm">{pkg.duration}</span>
                      </div>
                      <p className="text-lg font-semibold text-accent mb-4">{pkg.price}</p>
                      <div className="space-y-2">
                        {pkg.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-accent" />
                            <span className="text-sm text-muted-foreground">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-muted/30 rounded-2xl p-8">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Ready for Your Day Adventure?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Make the most of your time in Kenya with our convenient day trips. Whether you have 
                a few hours or a full day, we'll show you the best of what Nairobi and its surroundings 
                have to offer. Perfect for layovers, business trips, or quick getaways.
              </p>
              <Button 
                size="lg"
                onClick={() => navigate('/contact')}
              >
                Plan Your Day Trip
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DayTrips;